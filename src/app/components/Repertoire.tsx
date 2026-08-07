import { useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import type { Candidate } from "../../domain/candidate";
import {
  cityRatingOf,
  eventRatingOf,
  progressLabel,
  remainingLabel,
} from "../../domain/evaluation";
import type { EvaluationState } from "../../domain/evaluation";
import { CandidateCard } from "./CandidateCard";
import { formatPositionOf } from "../lib/position";
import { prefersReducedMotion } from "../lib/motion";

interface RepertoireProps {
  id: string;
  candidates: readonly Candidate[];
  evaluation: EvaluationState;
  /** Candidates with both an event and a city rating. */
  completed: number;
  onOpen: (index: number) => void;
  onOpenNextAct: () => void;
  /** Index the repertoire should scroll back to and focus after detail close. */
  restoreIndex: number | null;
  onRestored: () => void;
}

export function Repertoire({
  id,
  candidates,
  evaluation,
  completed,
  onOpen,
  onOpenNextAct,
  restoreIndex,
  onRestored,
}: RepertoireProps): JSX.Element {
  const trackRef = useRef<HTMLUListElement>(null);
  const openButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const total = candidates.length;

  /* Desktop arrows follow the real scroll extent rather than the card index:
     several cards are visible at once, so the last card is reached before the
     last index becomes the leftmost one. */
  const syncScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs(child.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 1);
  }, []);

  const scrollToIndex = useCallback(
    (index: number, smooth: boolean) => {
      const track = trackRef.current;
      const first = track?.children[0] as HTMLElement | undefined;
      const target = track?.children[index] as HTMLElement | undefined;
      if (!track || !first || !target) return;

      track.scrollTo({
        left: target.offsetLeft - first.offsetLeft,
        behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
      });
      setActiveIndex(index);
      window.requestAnimationFrame(syncScrollState);
    },
    [syncScrollState],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = 0;
    const handleChange = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncScrollState();
      });
    };

    syncScrollState();
    track.addEventListener("scroll", handleChange, { passive: true });
    window.addEventListener("resize", handleChange);
    return () => {
      track.removeEventListener("scroll", handleChange);
      window.removeEventListener("resize", handleChange);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [syncScrollState]);

  useEffect(() => {
    if (restoreIndex === null) return;

    scrollToIndex(restoreIndex, false);
    openButtonsRef.current[restoreIndex]?.focus({ preventScroll: true });
    onRestored();
  }, [restoreIndex, scrollToIndex, onRestored]);

  return (
    <section className="repertoire" id={id} aria-labelledby="repertoire-title">
      <header className="repertoire__head shell">
        <p className="label">На радаре</p>
        <h2 className="repertoire__title section-title" id="repertoire-title">
          Шесть культурных предложений
        </h2>
        <p className="repertoire__progress" aria-live="polite">
          {progressLabel(completed, total)}
        </p>
        <div className="repertoire__meta">
          <p className="repertoire__position" aria-live="polite">
            <span className="visually-hidden">Предложение </span>
            {formatPositionOf(activeIndex, total)}
          </p>
          <div className="repertoire__controls">
            <button
              className="button button--arrow"
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1, true)}
              disabled={atStart}
              aria-label="Предыдущее предложение"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="button button--arrow"
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1, true)}
              disabled={atEnd}
              aria-label="Следующее предложение"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </header>

      <ul className="repertoire__track" ref={trackRef}>
        {candidates.map((candidate, index) => (
          <li className="repertoire__slide" key={candidate.id}>
            <CandidateCard
              candidate={candidate}
              index={index}
              eventRating={eventRatingOf(evaluation, candidate)}
              cityRating={cityRatingOf(evaluation, candidate)}
              onOpen={onOpen}
              openButtonRef={(element) => {
                openButtonsRef.current[index] = element;
              }}
            />
          </li>
        ))}
      </ul>

      <p className="repertoire__hint shell label">
        Листайте вбок · всего шесть предложений
      </p>

      <div className="next-act-gate shell">
        <button
          className="button button--primary"
          type="button"
          onClick={onOpenNextAct}
          disabled={completed < total}
        >
          Следующий акт
        </button>
        <p className="next-act-gate__note">
          {completed < total
            ? remainingLabel(total - completed)
            : "Все шесть предложений оценены. Соберите результат для художественного совета."}
        </p>
      </div>
    </section>
  );
}
