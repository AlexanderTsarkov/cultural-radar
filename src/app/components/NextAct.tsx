import { useEffect, useMemo, useRef, useState } from "react";
import type { JSX } from "react";

import type { Candidate } from "../../domain/candidate";
import {
  buildResultText,
  cityRatingOf,
  eventRatingOf,
  savedCommentOf,
  summaryOrder,
  totalOf,
} from "../../domain/evaluation";
import type { EvaluationState } from "../../domain/evaluation";
import { formatPosition } from "../lib/position";

interface NextActProps {
  candidates: readonly Candidate[];
  evaluation: EvaluationState;
  onClose: () => void;
  /** Persists the latest evaluation state before a result leaves the page. */
  onCommit: () => void;
}

const SHARE_TITLE = "Культурный радар · Следующий акт";

function canUseShare(): boolean {
  return (
    typeof navigator !== "undefined" && typeof navigator.share === "function"
  );
}

export function NextAct({
  candidates,
  evaluation,
  onClose,
  onCommit,
}: NextActProps): JSX.Element {
  const layerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const [notice, setNotice] = useState("");
  const [shareSupported] = useState(canUseShare);

  const ordered = useMemo(
    () => summaryOrder(candidates, evaluation),
    [candidates, evaluation],
  );
  const resultText = useMemo(
    () => buildResultText(candidates, evaluation, window.location.href),
    [candidates, evaluation],
  );

  useEffect(() => {
    layerRef.current?.scrollTo({ top: 0 });
    articleRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleShare = async () => {
    onCommit();

    try {
      await navigator.share({ title: SHARE_TITLE, text: resultText });
      setNotice(
        "Системное меню «Поделиться» закрыто. Проверьте в мессенджере, что сообщение действительно отправлено.",
      );
    } catch {
      setNotice(
        "Отправка не завершена. Полный результат ниже — скопируйте его или выделите вручную.",
      );
    }
  };

  const handleCopy = async () => {
    onCommit();

    try {
      await navigator.clipboard.writeText(resultText);
      setNotice("Результат скопирован");
    } catch {
      setNotice(
        "Скопировать не удалось. Выделите полный текст ниже и отправьте его вручную.",
      );
    }
  };

  return (
    <div
      className="detail-layer"
      ref={layerRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="next-act-title"
    >
      <article className="detail shell" ref={articleRef} tabIndex={-1}>
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
          <p className="detail__type label">Итог первого отбора</p>
          <h1 className="detail__title display" id="next-act-title">
            Следующий акт
          </h1>
          <p className="detail__lead">
            Все шесть предложений оценены. Итог — простая сумма оценки события и
            оценки города. Это прозрачный ориентир для художественного совета, а
            не автоматическое решение.
          </p>
        </header>

        <ol className="summary">
          {ordered.map((candidate, index) => {
            const eventRating = eventRatingOf(evaluation, candidate);
            const cityRating = cityRatingOf(evaluation, candidate);
            const total = totalOf(evaluation, candidate);
            const comment = savedCommentOf(evaluation, candidate);

            return (
              <li className="summary__item" key={candidate.id}>
                <p className="summary__rank">{formatPosition(index)}</p>
                <h2 className="summary__title">{candidate.title}</h2>
                <p className="summary__city">{candidate.city.name}</p>

                <dl className="summary__ratings">
                  <div className="summary__rating">
                    <dt className="label">Событие</dt>
                    <dd>
                      {eventRating === undefined ? "—" : `${eventRating} / 5`}
                    </dd>
                  </div>
                  <div className="summary__rating">
                    <dt className="label">Город</dt>
                    <dd>
                      {cityRating === undefined ? "—" : `${cityRating} / 5`}
                    </dd>
                  </div>
                  <div className="summary__rating summary__rating--total">
                    <dt className="label">Итого</dt>
                    <dd>{total === undefined ? "—" : `${total} / 10`}</dd>
                  </div>
                </dl>

                <p className="summary__status">
                  <span className="label">Статус</span>
                  <span>{candidate.statusLabel}</span>
                </p>

                {comment ? (
                  <p className="summary__comment">
                    <span className="label">Комментарий</span>
                    <span>{comment}</span>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>

        <section className="send" aria-labelledby="send-title">
          <h2 className="send__state" id="send-title">
            Результат ещё не отправлен
          </h2>
          <p className="detail__text">
            Скопируйте полный результат и отправьте его художественному совету.
            Если копирование недоступно, выделите полный текст вручную.
          </p>

          <div className="send__actions">
            {shareSupported ? (
              <button
                className="button button--primary"
                type="button"
                onClick={handleShare}
              >
                Поделиться результатом
              </button>
            ) : null}
            <button
              className="button button--open"
              type="button"
              onClick={handleCopy}
            >
              <span>Копировать результат</span>
              <span aria-hidden="true">⧉</span>
            </button>
          </div>

          <p className="send__notice" role="status">
            {notice}
          </p>

          <label className="send__label label" htmlFor="next-act-result">
            Полный результат
          </label>
          <textarea
            className="send__result"
            id="next-act-result"
            readOnly
            rows={18}
            spellCheck={false}
            value={resultText}
          />
        </section>

        <p className="next-act__foot">
          <button
            className="button button--back"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">←</span>
            <span>Вернуться на радар</span>
          </button>
        </p>
      </article>
    </div>
  );
}
