import type { JSX } from "react";

import { CandidateArtwork } from "./CandidateArtwork";

interface LandingProps {
  repertoireId: string;
  howItWorksId: string;
}

export function Landing({
  repertoireId,
  howItWorksId,
}: LandingProps): JSX.Element {
  return (
    <section className="landing shell" aria-labelledby="landing-title">
      {/* Two meaningful units: narrow viewports break between them instead of
          orphaning the year away from `Сезон`. */}
      <p className="service-line landing__service">
        <span className="landing__service-unit">
          Культурный радар <span aria-hidden="true">·</span> Полина
        </span>
        <span className="landing__service-joint" aria-hidden="true">
          {" · "}
        </span>
        <span className="landing__service-unit">Сезон 2026/27</span>
      </p>

      <h1 className="landing__title display" id="landing-title">
        <span className="landing__title-line">Полина, добро пожаловать</span>
        <span className="landing__title-line">
          в ваш{" "}
          <span className="landing__title-accent">личный культурный сезон</span>
        </span>
      </h1>

      <p className="landing__lead">
        Хороший спектакль, опера или балет — не просто свободный вечер в
        календаре.
      </p>

      <CandidateArtwork motif="hero" className="landing__art" />

      <p className="landing__formula display">Событие + Город + Компания</p>

      <p className="landing__ready display">Первый отбор уже собран</p>

      <p className="landing__actions">
        <a className="button button--primary" href={`#${repertoireId}`}>
          Открыть репертуар
        </a>
        <a className="button button--quiet" href={`#${howItWorksId}`}>
          Как работает радар
        </a>
      </p>

      <div className="landing__narrative prose">
        <p>
          Иногда ради события стоит выбрать город, освободить несколько дней и
          собрать хорошую компанию.
        </p>
        <p>
          Москва и Петербург дают тысячи возможностей. Но найти действительно
          важное событие — значит разбираться в театрах и постановщиках, следить
          за фестивалями, гастролями, расписаниями и началом продаж — и не
          ограничивать себя одним городом.
        </p>
        <p>
          Культурный радар находит такие возможности, проверяет, что уже
          известно, и собирает их в личный репертуар.
        </p>
      </div>
    </section>
  );
}
