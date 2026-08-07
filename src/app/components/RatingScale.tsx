import type { JSX } from "react";

import { RATING_VALUES } from "../../domain/evaluation";
import type { Rating } from "../../domain/evaluation";

interface RatingScaleProps {
  /** Unique radio group name: ratings of different candidates must not merge. */
  name: string;
  prompt: string;
  labels: Readonly<Record<Rating, string>>;
  value: Rating | undefined;
  onChange: (rating: Rating) => void;
}

export function RatingScale({
  name,
  prompt,
  labels,
  value,
  onChange,
}: RatingScaleProps): JSX.Element {
  return (
    <fieldset className="rating">
      <legend className="rating__prompt">{prompt}</legend>

      <div className="rating__scale">
        {RATING_VALUES.map((rating) => (
          <label className="rating__option" key={rating}>
            <input
              className="rating__input visually-hidden"
              type="radio"
              name={name}
              value={rating}
              checked={value === rating}
              onChange={() => onChange(rating)}
            />
            <span className="rating__mark" aria-hidden="true">
              {rating}
            </span>
            <span className="visually-hidden">
              {rating} из 5 — {labels[rating]}
            </span>
          </label>
        ))}
      </div>

      <p className="rating__ends">
        <span>{labels[1]}</span>
        <span>{labels[5]}</span>
      </p>

      <p className="rating__selected">
        {value === undefined
          ? "Оценка не выбрана"
          : `${value} / 5 — ${labels[value]}`}
      </p>
    </fieldset>
  );
}
