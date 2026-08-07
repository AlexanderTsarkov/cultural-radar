import { useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import { candidates } from "../data/candidates";
import {
  cityRatingOf,
  commentTextOf,
  countCompleted,
  eventRatingOf,
  withCityRating,
  withComment,
  withEventRating,
} from "../domain/evaluation";
import type { EvaluationState, Rating } from "../domain/evaluation";
import type { Candidate } from "../domain/candidate";
import { CandidateDetail } from "./components/CandidateDetail";
import { HowRadarWorks } from "./components/HowRadarWorks";
import { Landing } from "./components/Landing";
import { NextAct } from "./components/NextAct";
import { Repertoire } from "./components/Repertoire";
import { loadEvaluation, saveEvaluation } from "./lib/evaluation-storage";

const REPERTOIRE_ID = "na-radare";
const HOW_IT_WORKS_ID = "kak-rabotaet-radar";

export function App(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [restoreIndex, setRestoreIndex] = useState<number | null>(null);
  const [nextActOpen, setNextActOpen] = useState(false);

  const [evaluation, setEvaluation] = useState<EvaluationState>(loadEvaluation);
  const [storageWorks, setStorageWorks] = useState(true);

  /* The synchronous mirror of the evaluation state. Every mutation derives the
     next value from it and persists immediately, so no rating or comment can be
     lost to a pending render when the detail closes or a result is generated. */
  const latestEvaluation = useRef(evaluation);

  const commitEvaluation = useCallback(() => {
    setStorageWorks(saveEvaluation(latestEvaluation.current));
  }, []);

  const applyEvaluation = useCallback(
    (update: (current: EvaluationState) => EvaluationState) => {
      const next = update(latestEvaluation.current);
      latestEvaluation.current = next;
      setEvaluation(next);
      setStorageWorks(saveEvaluation(next));
    },
    [],
  );

  const setEventRating = useCallback(
    (candidate: Candidate, rating: Rating) => {
      applyEvaluation((current) => withEventRating(current, candidate, rating));
    },
    [applyEvaluation],
  );

  const setCityRating = useCallback(
    (candidate: Candidate, rating: Rating) => {
      applyEvaluation((current) => withCityRating(current, candidate, rating));
    },
    [applyEvaluation],
  );

  const setComment = useCallback(
    (candidate: Candidate, text: string) => {
      applyEvaluation((current) => withComment(current, candidate, text));
    },
    [applyEvaluation],
  );

  const isLayerOpen = openIndex !== null || nextActOpen;

  const openCandidate = useCallback((index: number) => {
    setRestoreIndex(null);
    setOpenIndex(index);
  }, []);

  const selectCandidate = useCallback(
    (index: number) => {
      commitEvaluation();
      setOpenIndex(index);
    },
    [commitEvaluation],
  );

  const closeDetail = useCallback(() => {
    commitEvaluation();
    setRestoreIndex(openIndex);
    setOpenIndex(null);
  }, [commitEvaluation, openIndex]);

  const openNextAct = useCallback(() => {
    commitEvaluation();
    setNextActOpen(true);
  }, [commitEvaluation]);

  const closeNextAct = useCallback(() => {
    commitEvaluation();
    setNextActOpen(false);
  }, [commitEvaluation]);

  useEffect(() => {
    if (!isLayerOpen) return undefined;

    document.documentElement.classList.add("is-detail-open");
    return () => document.documentElement.classList.remove("is-detail-open");
  }, [isLayerOpen]);

  const clearRestore = useCallback(() => setRestoreIndex(null), []);

  const completed = countCompleted(evaluation, candidates);

  return (
    <>
      <div className="page" inert={isLayerOpen}>
        <main>
          <Landing
            repertoireId={REPERTOIRE_ID}
            howItWorksId={HOW_IT_WORKS_ID}
          />
          <HowRadarWorks id={HOW_IT_WORKS_ID} />
          <Repertoire
            id={REPERTOIRE_ID}
            candidates={candidates}
            evaluation={evaluation}
            completed={completed}
            onOpen={openCandidate}
            onOpenNextAct={openNextAct}
            restoreIndex={restoreIndex}
            onRestored={clearRestore}
          />
        </main>
        <footer className="colophon shell">
          <p className="service-line">
            Культурный радар <span aria-hidden="true">·</span> Полина{" "}
            <span aria-hidden="true">·</span> Сезон 2026/27
          </p>
          <p className="colophon__note">Первый отбор · шесть предложений</p>
        </footer>
      </div>

      {openIndex !== null ? (
        <CandidateDetail
          candidate={candidates[openIndex]}
          index={openIndex}
          total={candidates.length}
          eventRating={eventRatingOf(evaluation, candidates[openIndex])}
          cityRating={cityRatingOf(evaluation, candidates[openIndex])}
          comment={commentTextOf(evaluation, candidates[openIndex])}
          storageWorks={storageWorks}
          onEventRating={setEventRating}
          onCityRating={setCityRating}
          onComment={setComment}
          onCommit={commitEvaluation}
          onClose={closeDetail}
          onSelect={selectCandidate}
        />
      ) : null}

      {nextActOpen ? (
        <NextAct
          candidates={candidates}
          evaluation={evaluation}
          onClose={closeNextAct}
          onCommit={commitEvaluation}
        />
      ) : null}
    </>
  );
}
