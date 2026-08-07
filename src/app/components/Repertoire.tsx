import { useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import type { Candidate } from "../../domain/candidate";
import { CandidateCard } from "./CandidateCard";
import { formatPositionOf } from "../lib/position";
import { prefersReducedMotion } from "../lib/motion";

interface RepertoireProps {
  id: string;
  candidates: readonly Candidate[];
  onOpen: (index: number) => void;
  /** Index the repertoire should scroll back to and focus after detail close. */
  restoreIndex: number | null;
  onRestored: () => void;
}

export function Repertoire({
  id,
  candidates,
  onOpen,
  restoreIndex,
  onRestored,
}: RepertoireProps): JSX.Element {
  const trackRef = useRef<HTMLUListElement>(null);
  const openButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = candidates.length;

  const readActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

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

    return closest;
  }, []);

  const scrollToIndex = useCallback((index: number, smooth: boolean) => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const target = track?.children[index] as HTMLElement | undefined;
    if (!track || !first || !target) return;

    track.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
    });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setActiveIndex(readActiveIndex());
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [readActiveIndex]);

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
              disabled={activeIndex === 0}
              aria-label="Предыдущее предложение"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="button button--arrow"
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1, true)}
              disabled={activeIndex === total - 1}
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
    </section>
  );
}
