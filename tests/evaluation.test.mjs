import assert from "node:assert/strict";
import test from "node:test";

import { readCandidateDataset } from "../scripts/validate-candidates.mjs";
import {
  buildResultText,
  cityRatingOf,
  countCompleted,
  createEmptyEvaluation,
  eventRatingOf,
  isCandidateComplete,
  parseEvaluation,
  savedCommentOf,
  serializeEvaluation,
  summaryOrder,
  totalOf,
  withCityRating,
  withComment,
  withEventRating,
} from "../src/domain/evaluation.ts";

const candidates = await readCandidateDataset();
const [parsifal, uncleVanya, paquita, pacific, teart, nizhny] = candidates;

function ratedEverything() {
  return candidates.reduce(
    (state, candidate) =>
      withCityRating(withEventRating(state, candidate, 3), candidate, 3),
    createEmptyEvaluation(),
  );
}

test("city ratings are shared by city identity, event ratings are not", () => {
  const state = withCityRating(createEmptyEvaluation(), parsifal, 4);

  assert.equal(parsifal.city.id, uncleVanya.city.id);
  assert.equal(cityRatingOf(state, uncleVanya), 4);
  assert.equal(eventRatingOf(state, uncleVanya), undefined);

  const revised = withCityRating(state, uncleVanya, 2);
  assert.equal(cityRatingOf(revised, parsifal), 2);
  assert.equal(cityRatingOf(revised, paquita), undefined);
});

test("a candidate is complete only with both ratings, regardless of comment", () => {
  const eventOnly = withEventRating(createEmptyEvaluation(), paquita, 5);
  assert.equal(isCandidateComplete(eventOnly, paquita), false);

  const commented = withComment(eventOnly, paquita, "Очень жду");
  assert.equal(isCandidateComplete(commented, paquita), false);

  const complete = withCityRating(commented, paquita, 1);
  assert.equal(isCandidateComplete(complete, paquita), true);
  assert.equal(totalOf(complete, paquita), 6);
});

test("Следующий акт stays locked while any candidate is incomplete", () => {
  let state = createEmptyEvaluation();
  for (const candidate of candidates.slice(0, 5)) {
    state = withCityRating(withEventRating(state, candidate, 4), candidate, 4);
  }

  // The shared Petersburg city rating must not complete a candidate on its own.
  state = withCityRating(state, nizhny, 5);
  assert.equal(countCompleted(state, candidates), 5);

  state = withEventRating(state, nizhny, 2);
  assert.equal(countCompleted(state, candidates), 6);
});

test("whitespace-only comments are not saved comments", () => {
  const state = withComment(createEmptyEvaluation(), teart, "   \n  ");

  assert.equal(savedCommentOf(state, teart), undefined);
  assert.deepEqual(JSON.parse(serializeEvaluation(state)).comments, {});
});

test("edited comments survive serialization and restoration", () => {
  const first = withComment(createEmptyEvaluation(), pacific, "Первый вариант");
  const edited = withComment(first, pacific, "Второй вариант — окончательный");
  const restored = parseEvaluation(
    serializeEvaluation(withEventRating(edited, pacific, 5)),
  );

  assert.equal(
    savedCommentOf(restored, pacific),
    "Второй вариант — окончательный",
  );
  assert.equal(eventRatingOf(restored, pacific), 5);

  const removed = parseEvaluation(
    serializeEvaluation(withComment(edited, pacific, "")),
  );
  assert.equal(savedCommentOf(removed, pacific), undefined);
});

test("restoration rejects malformed, foreign and out-of-range stored values", () => {
  assert.deepEqual(parseEvaluation(null), createEmptyEvaluation());
  assert.deepEqual(parseEvaluation("{ not json"), createEmptyEvaluation());
  assert.deepEqual(
    parseEvaluation(JSON.stringify({ version: 99, eventRatings: { a: 3 } })),
    createEmptyEvaluation(),
  );

  const cleaned = parseEvaluation(
    JSON.stringify({
      version: 1,
      eventRatings: { [parsifal.id]: 9, [paquita.id]: 3 },
      cityRatings: { [parsifal.city.id]: "4" },
      comments: { [teart.id]: 12 },
    }),
  );

  assert.equal(eventRatingOf(cleaned, parsifal), undefined);
  assert.equal(eventRatingOf(cleaned, paquita), 3);
  assert.equal(cityRatingOf(cleaned, parsifal), undefined);
  assert.equal(savedCommentOf(cleaned, teart), undefined);
});

test("summary order is total, then event rating, then editorial order", () => {
  let state = ratedEverything();
  // Parsifal and Uncle Vanya share the Petersburg city rating of 3.
  state = withEventRating(state, uncleVanya, 5); // total 8, event 5
  state = withCityRating(state, paquita, 5); // total 8, event 3
  state = withEventRating(state, nizhny, 1); // total 4

  assert.deepEqual(
    summaryOrder(candidates, state).map(({ id }) => id),
    [uncleVanya.id, paquita.id, parsifal.id, pacific.id, teart.id, nizhny.id],
  );
});

test("the canonical payload carries every candidate, rating, status and comment", () => {
  let state = ratedEverything();
  state = withEventRating(state, parsifal, 5);
  state = withCityRating(state, parsifal, 4);
  state = withComment(state, parsifal, "  Главный кандидат  ");
  state = withComment(
    state,
    nizhny,
    "Интересно, но нужен конкретный спектакль",
  );
  state = withComment(state, teart, "   ");

  const text = buildResultText(candidates, state, "https://example.test/radar");

  for (const candidate of candidates) {
    assert.match(text, new RegExp(escapeForRegExp(candidate.title)));
    assert.match(text, new RegExp(escapeForRegExp(candidate.statusLabel)));
  }

  assert.match(text, /1\. Парсифаль · Санкт-Петербург/);
  assert.match(text, /Событие: 5 \/ 5 — Очень хочу увидеть/);
  assert.match(text, /Город: 4 \/ 5 — Очень хочется/);
  assert.match(text, /Итого: 9 \/ 10/);
  assert.match(text, /Комментарий: Главный кандидат/);
  assert.match(text, /Комментарий: Интересно, но нужен конкретный спектакль/);
  assert.match(text, /https:\/\/example\.test\/radar/);

  // Uncle Vanya shares the Petersburg rating of 4 and keeps its own event rating.
  assert.match(
    text,
    /Дядя Ваня · Санкт-Петербург\nСобытие: 3 \/ 5[^\n]*\nГород: 4 \/ 5/,
  );

  // The whitespace-only comment produced no comment line.
  assert.equal(text.match(/Комментарий:/g).length, 2);
});

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
