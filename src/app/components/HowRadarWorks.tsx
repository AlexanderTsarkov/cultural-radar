import type { JSX } from "react";

interface HowRadarWorksProps {
  id: string;
}

const STEPS = [
  {
    number: "01",
    title: "Отбор",
    body: "Первые культурные возможности уже найдены, проверены по официальным источникам и собраны в личный репертуар.",
  },
  {
    number: "02",
    title: "Выбор",
    body: "Полина разбирает каждое предложение отдельно: само событие и город. Поездка может стать частью впечатления, но не обязательна.",
  },
  {
    number: "03",
    title: "Следующий акт",
    body: "После завершения оценок Полина сможет отправить «Следующий акт» художественному совету. Совет сверит интерес с реальными программами, датами и билетной реальностью.",
  },
] as const;

export function HowRadarWorks({ id }: HowRadarWorksProps): JSX.Element {
  return (
    <section className="how shell" id={id} aria-labelledby="how-title">
      <p className="label">Как это устроено</p>
      <h2 className="how__title section-title" id="how-title">
        Как работает радар
      </h2>

      <ol className="how__steps">
        {STEPS.map((step) => (
          <li className="how__step" key={step.number}>
            <p className="how__step-head">
              <span className="how__step-number">{step.number}</span>
              <span className="how__step-title">{step.title}</span>
            </p>
            <p className="how__step-body">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="how__note">
        Поиск, проверка и обновление статусов выполняются вручную. Радар не
        следит за афишами автоматически, ничего не бронирует и не покупает.
      </p>
    </section>
  );
}
