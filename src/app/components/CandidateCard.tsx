import type { JSX, Ref } from "react";

import type { Candidate } from "../../domain/candidate";
import { CandidateArtwork, motifForSlug } from "./CandidateArtwork";
import { EvaluationPlaceholder } from "./EvaluationPlaceholder";
import { formatPosition } from "../lib/position";

interface CandidateCardProps {
  candidate: Candidate;
  index: number;
  onOpen: (index: number) => void;
  openButtonRef?: Ref<HTMLButtonElement>;
}

export function CandidateCard({
  candidate,
  index,
  onOpen,
  openButtonRef,
}: CandidateCardProps): JSX.Element {
  const titleId = `candidate-card-title-${candidate.id}`;
  const organisation =
    candidate.organisation.name === candidate.title
      ? undefined
      : candidate.organisation.name;
  const creators = candidate.creatorNames?.join(" · ");

  return (
    <article className="card" aria-labelledby={titleId}>
      <p className="card__head">
        <span className="card__number">{formatPosition(index)}</span>
        <span className="card__type">{candidate.eventType}</span>
      </p>

      <CandidateArtwork
        motif={motifForSlug(candidate.slug)}
        className="card__art"
      />

      <div className="card__body">
        <h3 className="card__title" id={titleId}>
          {candidate.title}
        </h3>
        {organisation ? <p className="card__org">{organisation}</p> : null}
        {creators ? <p className="card__creators">{creators}</p> : null}
        <p className="card__city">{candidate.city.name}</p>
        <p className="card__proposition">{candidate.whyEvent}</p>
      </div>

      <div className="card__foot">
        <dl className="card__facts">
          <div className="card__fact">
            <dt className="label">Даты</dt>
            <dd className="card__fact-value">{candidate.dateLabel}</dd>
          </div>
          <div className="card__fact">
            <dt className="label">Статус</dt>
            <dd className="card__fact-value card__fact-value--status">
              {candidate.statusLabel}
            </dd>
          </div>
        </dl>

        <EvaluationPlaceholder variant="card" />

        <button
          className="button button--open"
          type="button"
          onClick={() => onOpen(index)}
          aria-label={`Открыть предложение: ${candidate.title}`}
          ref={openButtonRef}
        >
          <span>Открыть</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
