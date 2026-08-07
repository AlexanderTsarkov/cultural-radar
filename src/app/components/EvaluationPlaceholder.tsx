import type { JSX } from "react";

interface EvaluationPlaceholderProps {
  variant: "card" | "detail";
}

/**
 * Presentation boundary reserved for the evaluation behaviour of issue #7.
 *
 * Issue #6 renders honest static content only: no rating controls, no comment
 * field and no simulated state, so nothing can look like a broken control.
 */
export function EvaluationPlaceholder({
  variant,
}: EvaluationPlaceholderProps): JSX.Element {
  if (variant === "card") {
    return <p className="evaluation-card label">Ещё не оценено</p>;
  }

  return (
    <section className="evaluation" aria-labelledby="evaluation-title">
      <p className="label">Соавтор следующего акта</p>
      <h2 className="evaluation__title block-title" id="evaluation-title">
        Ваша оценка
      </h2>
      <p className="evaluation__body">
        Здесь появится ваша оценка предложения: отдельно событие, отдельно город
        и комментарий художественному совету.
      </p>
      <p className="evaluation__status">
        Этот раздел ещё готовится — оценить предложение пока нельзя.
      </p>
    </section>
  );
}
