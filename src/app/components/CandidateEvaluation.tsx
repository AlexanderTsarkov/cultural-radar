import type { JSX } from "react";

import type { Candidate } from "../../domain/candidate";
import {
  CITY_RATING_LABELS,
  CITY_RATING_PROMPT,
  EVENT_RATING_LABELS,
  eventRatingPrompt,
} from "../../domain/evaluation";
import type { Rating } from "../../domain/evaluation";
import { RatingScale } from "./RatingScale";

interface CandidateEvaluationProps {
  candidate: Candidate;
  eventRating: Rating | undefined;
  cityRating: Rating | undefined;
  comment: string;
  /** False once a device-local write has actually failed. */
  storageWorks: boolean;
  onEventRating: (rating: Rating) => void;
  onCityRating: (rating: Rating) => void;
  onComment: (text: string) => void;
  onCommit: () => void;
}

export function CandidateEvaluation({
  candidate,
  eventRating,
  cityRating,
  comment,
  storageWorks,
  onEventRating,
  onCityRating,
  onComment,
  onCommit,
}: CandidateEvaluationProps): JSX.Element {
  const commentId = `comment-${candidate.id}`;

  return (
    <section className="evaluation" aria-labelledby="evaluation-title">
      <p className="label">Соавтор следующего акта</p>
      <h2 className="evaluation__title block-title" id="evaluation-title">
        Ваша оценка
      </h2>

      <RatingScale
        name={`event-rating-${candidate.id}`}
        prompt={eventRatingPrompt(candidate)}
        labels={EVENT_RATING_LABELS}
        value={eventRating}
        onChange={onEventRating}
      />

      <RatingScale
        name={`city-rating-${candidate.city.id}`}
        prompt={CITY_RATING_PROMPT}
        labels={CITY_RATING_LABELS}
        value={cityRating}
        onChange={onCityRating}
      />

      <div className="comment">
        <label className="comment__label" htmlFor={commentId}>
          Комментарий художественному совету
        </label>
        <p className="comment__hint">
          Необязательно. Комментарий можно изменить или удалить в любой момент.
          На оценку и порядок он не влияет.
        </p>
        <textarea
          className="comment__field"
          id={commentId}
          rows={4}
          value={comment}
          onChange={(event) => onComment(event.target.value)}
          onBlur={onCommit}
        />
      </div>

      {storageWorks ? (
        <p className="evaluation__note">
          <b>Ваш выбор сохранён.</b> Оценки и комментарии хранятся только в этом
          браузере на этом устройстве. Вы можете вернуться и изменить их.
          Художественный совет увидит результат только после того, как вы
          отправите «Следующий акт».
        </p>
      ) : (
        <p className="evaluation__note evaluation__note--warning">
          <b>Сохранить в этом браузере не удалось.</b> Оценки и комментарии
          работают, пока открыта эта страница, и могут не восстановиться после
          перезагрузки. Художественный совет увидит результат только после того,
          как вы отправите «Следующий акт».
        </p>
      )}
    </section>
  );
}
