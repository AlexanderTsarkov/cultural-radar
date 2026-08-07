import { useCallback, useEffect, useState } from "react";
import type { JSX } from "react";

import { candidates } from "../data/candidates";
import { CandidateDetail } from "./components/CandidateDetail";
import { HowRadarWorks } from "./components/HowRadarWorks";
import { Landing } from "./components/Landing";
import { Repertoire } from "./components/Repertoire";

const REPERTOIRE_ID = "na-radare";
const HOW_IT_WORKS_ID = "kak-rabotaet-radar";

export function App(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [restoreIndex, setRestoreIndex] = useState<number | null>(null);

  const isDetailOpen = openIndex !== null;

  const openCandidate = useCallback((index: number) => {
    setRestoreIndex(null);
    setOpenIndex(index);
  }, []);

  const closeDetail = useCallback(() => {
    setRestoreIndex(openIndex);
    setOpenIndex(null);
  }, [openIndex]);

  useEffect(() => {
    if (!isDetailOpen) return undefined;

    document.documentElement.classList.add("is-detail-open");
    return () => document.documentElement.classList.remove("is-detail-open");
  }, [isDetailOpen]);

  const clearRestore = useCallback(() => setRestoreIndex(null), []);

  return (
    <>
      <div className="page" inert={isDetailOpen}>
        <main>
          <Landing
            repertoireId={REPERTOIRE_ID}
            howItWorksId={HOW_IT_WORKS_ID}
          />
          <HowRadarWorks id={HOW_IT_WORKS_ID} />
          <Repertoire
            id={REPERTOIRE_ID}
            candidates={candidates}
            onOpen={openCandidate}
            restoreIndex={restoreIndex}
            onRestored={clearRestore}
          />
        </main>
        <footer className="colophon shell">
          <p className="service-line">
            Культурный радар <span aria-hidden="true">·</span> Полина{" "}
            <span aria-hidden="true">·</span> Сезон 2026/27
          </p>
          <p className="colophon__note">Первый отбор · шесть предложений</p>
        </footer>
      </div>

      {openIndex !== null ? (
        <CandidateDetail
          candidate={candidates[openIndex]}
          index={openIndex}
          total={candidates.length}
          onClose={closeDetail}
          onSelect={setOpenIndex}
        />
      ) : null}
    </>
  );
}
