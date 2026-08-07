import { useEffect, useRef } from "react";
import type { JSX } from "react";

import type { Candidate } from "../../domain/candidate";
import type { Rating } from "../../domain/evaluation";
import { CandidateArtwork, motifForSlug } from "./CandidateArtwork";
import { CandidateEvaluation } from "./CandidateEvaluation";
import { formatPositionOf } from "../lib/position";

interface CandidateDetailProps {
  candidate: Candidate;
  index: number;
  total: number;
  eventRating: Rating | undefined;
  cityRating: Rating | undefined;
  comment: string;
  storageWorks: boolean;
  /** All six candidates carry both ratings, so the summary is reachable. */
  allComplete: boolean;
  onOpenNextAct: () => void;
  onEventRating: (candidate: Candidate, rating: Rating) => void;
  onCityRating: (candidate: Candidate, rating: Rating) => void;
  onComment: (candidate: Candidate, text: string) => void;
  onCommit: () => void;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function CandidateDetail({
  candidate,
  index,
  total,
  eventRating,
  cityRating,
  comment,
  storageWorks,
  allComplete,
  onOpenNextAct,
  onEventRating,
  onCityRating,
  onComment,
  onCommit,
  onClose,
  onSelect,
}: CandidateDetailProps): JSX.Element {
  const layerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    layerRef.current?.scrollTo({ top: 0 });
    articleRef.current?.focus({ preventScroll: true });
  }, [candidate.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  /* The last edit is persisted even if the layer disappears without a click. */
  useEffect(() => onCommit, [onCommit]);

  const hasPrevious = index > 0;
  const hasNext = index < total - 1;

  const creators = candidate.creatorNames?.join(" · ");
  const organisation =
    candidate.organisation.name === candidate.title
      ? undefined
      : candidate.organisation.name;

  return (
    <div
      className="detail-layer"
      ref={layerRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
    >
      <article
        className="detail shell"
        key={candidate.id}
        ref={articleRef}
        tabIndex={-1}
      >
        <p className="detail__back-row">
          <button
            className="button button--back"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">←</span>
            <span>Вернуться на радар</span>
          </button>
        </p>

        <header className="detail__head">
          <p className="detail__position">{formatPositionOf(index, total)}</p>
          <p className="detail__type label">{candidate.eventType}</p>
          <h1 className="detail__title display" id="detail-title">
            {candidate.title}
          </h1>

          <dl className="detail__credits">
            {organisation ? (
              <div className="detail__credit">
                <dt className="label">Организация</dt>
                <dd>{organisation}</dd>
              </div>
            ) : null}
            {creators ? (
              <div className="detail__credit">
                <dt className="label">Создатели</dt>
                <dd>{creators}</dd>
              </div>
            ) : null}
            {candidate.venue ? (
              <div className="detail__credit">
                <dt className="label">Площадка</dt>
                <dd>{candidate.venue.name}</dd>
              </div>
            ) : null}
            <div className="detail__credit">
              <dt className="label">Город</dt>
              <dd>
                {candidate.city.name}, {candidate.city.country}
              </dd>
            </div>
            <div className="detail__credit">
              <dt className="label">Даты</dt>
              <dd className="detail__credit-date">{candidate.dateLabel}</dd>
            </div>
          </dl>
        </header>

        <CandidateArtwork
          motif={motifForSlug(candidate.slug)}
          className="detail__art"
        />

        <p className="detail__lead">{candidate.summary}</p>

        <section className="detail__block" aria-labelledby="why-event-title">
          <h2 className="block-title" id="why-event-title">
            Почему событие
          </h2>
          <p className="detail__text">{candidate.whyEvent}</p>
        </section>

        <section className="detail__block" aria-labelledby="why-city-title">
          <h2 className="block-title" id="why-city-title">
            Почему город
          </h2>
          <p className="detail__text">{candidate.whyCity}</p>
        </section>

        <section className="status" aria-labelledby="status-title">
          <h2 className="block-title" id="status-title">
            Статус
          </h2>
          <p className="status__label">{candidate.statusLabel}</p>
          <p className="detail__text">{candidate.statusNote}</p>
          {candidate.nextExpectedUpdate ? (
            <p className="status__next">
              <span className="label">Что проверим дальше</span>
              <span>{candidate.nextExpectedUpdate}</span>
            </p>
          ) : null}
        </section>

        <div className="detail__facts">
          <section className="facts facts--known" aria-labelledby="known-title">
            <h2 className="block-title" id="known-title">
              Что уже известно
            </h2>
            <ul className="facts__list">
              {candidate.knownFacts.map((fact) => (
                <li className="facts__item" key={fact}>
                  {fact}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="facts facts--unknown"
            aria-labelledby="unknown-title"
          >
            <h2 className="block-title" id="unknown-title">
              Что пока неясно
            </h2>
            <ul className="facts__list">
              {candidate.unknownFacts.map((fact) => (
                <li className="facts__item" key={fact}>
                  {fact}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <CandidateEvaluation
          candidate={candidate}
          eventRating={eventRating}
          cityRating={cityRating}
          comment={comment}
          storageWorks={storageWorks}
          onEventRating={(rating) => onEventRating(candidate, rating)}
          onCityRating={(rating) => onCityRating(candidate, rating)}
          onComment={(text) => onComment(candidate, text)}
          onCommit={onCommit}
        />

        <section className="sources" aria-labelledby="sources-title">
          <h2 className="block-title" id="sources-title">
            Источники
          </h2>
          <ul className="sources__list">
            {candidate.sources.map((source) => (
              <li className="sources__item" key={source.url}>
                <a
                  className="sources__link"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{source.label}</span>
                  <span aria-hidden="true">↗</span>
                  <span className="visually-hidden">
                    (откроется в новой вкладке)
                  </span>
                </a>
                <p className="sources__supports">{source.supports}</p>
              </li>
            ))}
          </ul>
        </section>

        <nav className="detail__nav" aria-label="Навигация по предложениям">
          <button
            className="button button--step"
            type="button"
            onClick={() => onSelect(index - 1)}
            disabled={!hasPrevious}
          >
            <span aria-hidden="true">←</span>
            <span>Предыдущий</span>
          </button>
          {/* The last candidate leads forward into the summary once every
              candidate is complete, instead of ending on a dead control. */}
          {!hasNext && allComplete ? (
            <button
              className="button button--step button--step-next"
              type="button"
              onClick={onOpenNextAct}
            >
              <span>Следующий акт</span>
              <span aria-hidden="true">→</span>
            </button>
          ) : (
            <button
              className="button button--step button--step-next"
              type="button"
              onClick={() => onSelect(index + 1)}
              disabled={!hasNext}
            >
              <span>Следующий</span>
              <span aria-hidden="true">→</span>
            </button>
          )}
        </nav>
      </article>
    </div>
  );
}
