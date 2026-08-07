import type { Candidate } from "./candidate";

/** Polina's two independent 1–5 ratings and her optional comments. */
export type Rating = 1 | 2 | 3 | 4 | 5;

export const RATING_VALUES: readonly Rating[] = [1, 2, 3, 4, 5];

export const EVALUATION_SCHEMA_VERSION = 1;

/**
 * Evaluation state is deliberately separate from candidate content: event
 * ratings are keyed by candidate id, city ratings by the shared city id.
 */
export interface EvaluationState {
  version: typeof EVALUATION_SCHEMA_VERSION;
  eventRatings: Record<string, Rating>;
  cityRatings: Record<string, Rating>;
  comments: Record<string, string>;
}

export const EVENT_RATING_LABELS: Readonly<Record<Rating, string>> = {
  1: "Не моё",
  2: "Скорее не интересно",
  3: "Интересно, но не приоритет",
  4: "Очень интересно",
  5: "Очень хочу увидеть",
};

export const CITY_RATING_LABELS: Readonly<Record<Rating, string>> = {
  1: "Не хочется",
  2: "Скорее не привлекает",
  3: "Было бы интересно",
  4: "Очень хочется",
  5: "Очень хочу поехать",
};

/** The Nizhny Novgorod record is an approved cultural scenario, not a chosen event. */
const CULTURAL_SCENARIO_CANDIDATE_ID =
  "nizhny-novgorod-cultural-programme-2026-27";

export const CITY_RATING_PROMPT = "Насколько хочется оказаться в этом городе?";

export function eventRatingPrompt(candidate: Candidate): string {
  return candidate.id === CULTURAL_SCENARIO_CANDIDATE_ID
    ? "Насколько интересен этот культурный сценарий?"
    : "Насколько хочется увидеть это событие?";
}

export function createEmptyEvaluation(): EvaluationState {
  return {
    version: EVALUATION_SCHEMA_VERSION,
    eventRatings: {},
    cityRatings: {},
    comments: {},
  };
}

export function eventRatingOf(
  state: EvaluationState,
  candidate: Candidate,
): Rating | undefined {
  return state.eventRatings[candidate.id];
}

export function cityRatingOf(
  state: EvaluationState,
  candidate: Candidate,
): Rating | undefined {
  return state.cityRatings[candidate.city.id];
}

/** The text the field shows, exactly as it was typed. */
export function commentTextOf(
  state: EvaluationState,
  candidate: Candidate,
): string {
  return state.comments[candidate.id] ?? "";
}

/** The comment as it counts for output: whitespace-only means no comment. */
export function savedCommentOf(
  state: EvaluationState,
  candidate: Candidate,
): string | undefined {
  const text = commentTextOf(state, candidate).trim();
  return text.length > 0 ? text : undefined;
}

export function withEventRating(
  state: EvaluationState,
  candidate: Candidate,
  rating: Rating,
): EvaluationState {
  return {
    ...state,
    eventRatings: { ...state.eventRatings, [candidate.id]: rating },
  };
}

export function withCityRating(
  state: EvaluationState,
  candidate: Candidate,
  rating: Rating,
): EvaluationState {
  return {
    ...state,
    cityRatings: { ...state.cityRatings, [candidate.city.id]: rating },
  };
}

export function withComment(
  state: EvaluationState,
  candidate: Candidate,
  text: string,
): EvaluationState {
  return { ...state, comments: { ...state.comments, [candidate.id]: text } };
}

export function isCandidateComplete(
  state: EvaluationState,
  candidate: Candidate,
): boolean {
  return (
    eventRatingOf(state, candidate) !== undefined &&
    cityRatingOf(state, candidate) !== undefined
  );
}

export function totalOf(
  state: EvaluationState,
  candidate: Candidate,
): number | undefined {
  const event = eventRatingOf(state, candidate);
  const city = cityRatingOf(state, candidate);
  return event !== undefined && city !== undefined ? event + city : undefined;
}

export function countCompleted(
  state: EvaluationState,
  candidates: readonly Candidate[],
): number {
  return candidates.filter((candidate) => isCandidateComplete(state, candidate))
    .length;
}

export function progressLabel(completed: number, total: number): string {
  return `Оценено ${completed} из ${total}`;
}

export function remainingLabel(remaining: number): string {
  const tail =
    remaining % 100 >= 11 && remaining % 100 <= 14 ? 0 : remaining % 10;
  const noun = tail >= 1 && tail <= 4 ? "кандидата" : "кандидатов";
  return `Оцените ещё ${remaining} ${noun}`;
}

/**
 * Transparent summary order: total, then event rating, then editorial order.
 * Unrated values sort last instead of throwing, so the order is total.
 */
export function summaryOrder(
  candidates: readonly Candidate[],
  state: EvaluationState,
): readonly Candidate[] {
  return [...candidates].sort((left, right) => {
    const byTotal = (totalOf(state, right) ?? 0) - (totalOf(state, left) ?? 0);
    if (byTotal !== 0) return byTotal;

    const byEvent =
      (eventRatingOf(state, right) ?? 0) - (eventRatingOf(state, left) ?? 0);
    if (byEvent !== 0) return byEvent;

    return left.sortOrder - right.sortOrder;
  });
}

function ratingLine(
  title: string,
  rating: Rating | undefined,
  labels: Readonly<Record<Rating, string>>,
): string {
  return rating === undefined
    ? `${title}: не оценено`
    : `${title}: ${rating} / 5 — ${labels[rating]}`;
}

/**
 * The single canonical result payload used by Share, Copy and manual
 * selection. It never claims delivery and never omits a non-empty comment.
 */
export function buildResultText(
  candidates: readonly Candidate[],
  state: EvaluationState,
  pageUrl: string,
): string {
  const blocks = summaryOrder(candidates, state).map((candidate, index) => {
    const total = totalOf(state, candidate);
    const comment = savedCommentOf(state, candidate);

    const lines = [
      `${index + 1}. ${candidate.title} · ${candidate.city.name}`,
      ratingLine(
        "Событие",
        eventRatingOf(state, candidate),
        EVENT_RATING_LABELS,
      ),
      ratingLine("Город", cityRatingOf(state, candidate), CITY_RATING_LABELS),
      `Итого: ${total === undefined ? "не оценено" : `${total} / 10`}`,
      `Статус: ${candidate.statusLabel}`,
    ];

    if (comment) lines.push(`Комментарий: ${comment}`);

    return lines.join("\n");
  });

  return [
    "КУЛЬТУРНЫЙ РАДАР · ПОЛИНА · СЕЗОН 2026/27",
    "СЛЕДУЮЩИЙ АКТ",
    "",
    "Оценки Полины. Итог — простая сумма оценки события и оценки города, ориентир для художественного совета.",
    "",
    blocks.join("\n\n"),
    "",
    "Страница:",
    pageUrl,
    "",
  ].join("\n");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isRating(value: unknown): value is Rating {
  return (
    value === 1 || value === 2 || value === 3 || value === 4 || value === 5
  );
}

function readRatings(value: unknown): Record<string, Rating> {
  const ratings: Record<string, Rating> = {};
  if (!isRecord(value)) return ratings;

  for (const [key, rating] of Object.entries(value)) {
    if (isRating(rating)) ratings[key] = rating;
  }

  return ratings;
}

function readComments(value: unknown): Record<string, string> {
  const comments: Record<string, string> = {};
  if (!isRecord(value)) return comments;

  for (const [key, comment] of Object.entries(value)) {
    if (typeof comment === "string" && comment.trim().length > 0) {
      comments[key] = comment;
    }
  }

  return comments;
}

/** Whitespace-only comments are dropped: they are not a saved comment. */
export function serializeEvaluation(state: EvaluationState): string {
  return JSON.stringify({
    version: EVALUATION_SCHEMA_VERSION,
    eventRatings: state.eventRatings,
    cityRatings: state.cityRatings,
    comments: readComments(state.comments),
  });
}

/** Malformed, foreign or outdated stored values fall back to an empty state. */
export function parseEvaluation(
  raw: string | null | undefined,
): EvaluationState {
  if (typeof raw !== "string" || raw.length === 0)
    return createEmptyEvaluation();

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return createEmptyEvaluation();
  }

  if (!isRecord(parsed) || parsed.version !== EVALUATION_SCHEMA_VERSION) {
    return createEmptyEvaluation();
  }

  return {
    version: EVALUATION_SCHEMA_VERSION,
    eventRatings: readRatings(parsed.eventRatings),
    cityRatings: readRatings(parsed.cityRatings),
    comments: readComments(parsed.comments),
  };
}
