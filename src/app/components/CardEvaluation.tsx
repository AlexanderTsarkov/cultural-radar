import type { JSX } from "react";

import type { Rating } from "../../domain/evaluation";

interface CardEvaluationProps {
  eventRating: Rating | undefined;
  cityRating: Rating | undefined;
}

function componentValue(rating: Rating | undefined): string {
  return rating === undefined ? "—" : `${rating} / 5`;
}

export function CardEvaluation({
  eventRating,
  cityRating,
}: CardEvaluationProps): JSX.Element {
  if (eventRating === undefined && cityRating === undefined) {
    return (
      <p className="card-evaluation card-evaluation--empty label">
        Ещё не оценено
      </p>
    );
  }

  const complete = eventRating !== undefined && cityRating !== undefined;

  return (
    <div
      className={`card-evaluation${complete ? " card-evaluation--complete" : ""}`}
    >
      {complete ? (
        <p className="card-evaluation__state label">Оценено</p>
      ) : null}
      <p className="card-evaluation__values">
        <span>Событие {componentValue(eventRating)}</span>
        <span>Город {componentValue(cityRating)}</span>
      </p>
      {complete && eventRating !== undefined && cityRating !== undefined ? (
        <p className="card-evaluation__total">
          Итого {eventRating + cityRating} / 10
        </p>
      ) : null}
    </div>
  );
}
