import { candidates } from "../data/candidates";

export function App() {
  return (
    <main className="app-shell" data-candidate-count={candidates.length}>
      <p className="app-shell__eyebrow">Gift Edition · Web foundation</p>
      <h1>Культурный радар</h1>
      <p className="app-shell__status">
        Техническая основа приложения готова к следующему этапу.
      </p>
    </main>
  );
}
