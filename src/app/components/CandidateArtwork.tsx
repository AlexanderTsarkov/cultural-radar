import type { JSX } from "react";

/**
 * Original editorial artwork family for Gift Edition v0.1.
 *
 * The compositions are project-owned abstract geometry: architecture, routes,
 * grids and trajectories in the printed-ticket palette. No third-party imagery,
 * production scenography or photography is used, and no factual candidate text
 * is ever drawn inside the artwork — all facts stay in semantic HTML.
 *
 * Meaningful geometry stays inside x 44–436 and y 36–284 of the 480×320
 * viewBox, because the artwork is rendered with `slice` at several aspect
 * ratios; anything outside that band is intentionally bleeding decoration.
 */

export type ArtworkMotif =
  | "hero"
  | "monument"
  | "chamber"
  | "movement"
  | "ocean"
  | "grid"
  | "confluence";

const MOTIF_BY_SLUG: Readonly<Record<string, ArtworkMotif>> = {
  "parsifal-mariinsky-saint-petersburg": "monument",
  "uncle-vanya-krasny-fakel-saint-petersburg": "chamber",
  "paquita-perm-opera": "movement",
  "pacific-theatre-festival-vladivostok": "ocean",
  "teart-minsk": "grid",
  "nizhny-novgorod-cultural-programme": "confluence",
};

export function motifForSlug(slug: string): ArtworkMotif {
  return MOTIF_BY_SLUG[slug] ?? "grid";
}

interface CandidateArtworkProps {
  motif: ArtworkMotif;
  className?: string;
}

export function CandidateArtwork({
  motif,
  className,
}: CandidateArtworkProps): JSX.Element {
  const Motif = MOTIFS[motif];

  return (
    <div
      className={["artwork", `artwork--${motif}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        className="artwork__svg"
        viewBox="0 0 480 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <Motif />
      </svg>
    </div>
  );
}

function Hero(): JSX.Element {
  return (
    <>
      <path
        className="aw-accent-line aw-xthick"
        d="M-20 296 C 130 140, 300 78, 500 132"
      />
      <circle className="aw-ink" cx="356" cy="108" r="56" />
      <circle className="aw-paper" cx="378" cy="92" r="30" />
      <rect className="aw-ink" x="52" y="128" width="14" height="122" />
      <rect className="aw-ink" x="78" y="104" width="14" height="146" />
      <rect className="aw-ink" x="104" y="148" width="14" height="102" />
      <rect className="aw-mute-fill" x="152" y="152" width="118" height="78" />
      <rect className="aw-ink-line" x="178" y="176" width="118" height="78" />
      <line className="aw-ink-line" x1="52" y1="268" x2="428" y2="268" />
      <line
        className="aw-mute-line aw-dash"
        x1="428"
        y1="268"
        x2="486"
        y2="268"
      />
      <circle className="aw-ink" cx="52" cy="268" r="8" />
      <circle className="aw-ink" cx="240" cy="268" r="8" />
      <circle className="aw-accent" cx="428" cy="268" r="9" />
    </>
  );
}

function Monument(): JSX.Element {
  return (
    <>
      <circle className="aw-accent" cx="344" cy="112" r="54" />
      <rect className="aw-ink" x="44" y="44" width="166" height="10" />
      <rect className="aw-ink" x="52" y="100" width="18" height="136" />
      <rect className="aw-ink" x="84" y="72" width="18" height="164" />
      <rect className="aw-ink" x="116" y="56" width="18" height="180" />
      <rect className="aw-ink" x="148" y="72" width="18" height="164" />
      <rect className="aw-ink" x="180" y="100" width="18" height="136" />
      <rect className="aw-accent" x="236" y="44" width="4" height="192" />
      <rect className="aw-ink" x="414" y="88" width="12" height="148" />
      <line className="aw-ink-line" x1="0" y1="236" x2="480" y2="236" />
      <line className="aw-water" x1="24" y1="254" x2="456" y2="254" />
      <line className="aw-water" x1="64" y1="268" x2="424" y2="268" />
      <line className="aw-water" x1="24" y1="282" x2="392" y2="282" />
      <line className="aw-water" x1="96" y1="296" x2="460" y2="296" />
    </>
  );
}

function Chamber(): JSX.Element {
  return (
    <>
      <path
        className="aw-mute-fill"
        d="M284 194 L430 194 L462 252 L250 252 Z"
      />
      <rect className="aw-ink-line" x="284" y="52" width="146" height="142" />
      <line className="aw-ink-line" x1="357" y1="52" x2="357" y2="194" />
      <line className="aw-ink-line" x1="284" y1="123" x2="430" y2="123" />
      <line className="aw-mute-line" x1="250" y1="40" x2="250" y2="252" />
      <rect className="aw-ink" x="48" y="108" width="52" height="7" />
      <rect className="aw-ink" x="48" y="108" width="7" height="144" />
      <rect className="aw-ink" x="48" y="192" width="58" height="7" />
      <rect className="aw-ink" x="99" y="199" width="7" height="53" />
      <rect className="aw-ink" x="108" y="182" width="168" height="9" />
      <rect className="aw-ink" x="122" y="191" width="7" height="61" />
      <rect className="aw-ink" x="262" y="191" width="7" height="61" />
      <rect className="aw-ink" x="190" y="165" width="4" height="17" />
      <circle className="aw-accent" cx="192" cy="152" r="13" />
      <line className="aw-ink-line" x1="0" y1="252" x2="480" y2="252" />
    </>
  );
}

function Movement(): JSX.Element {
  const ticks = Array.from({ length: 12 }, (_, index) => 52 + index * 32);

  return (
    <>
      <circle className="aw-mute-line" cx="356" cy="176" r="76" />
      <path
        className="aw-mute-line aw-dash"
        d="M124 258 C 180 168, 296 148, 424 202"
      />
      <path className="aw-ink-line" d="M56 258 C 104 108, 246 78, 330 156" />
      <path className="aw-ink-line" d="M84 258 C 132 132, 252 112, 348 190" />
      <path
        className="aw-accent-line aw-thick"
        d="M44 258 C 96 76, 262 48, 402 132"
      />
      <line className="aw-ink-line" x1="0" y1="258" x2="480" y2="258" />
      {ticks.map((x) => (
        <line
          key={x}
          className="aw-mute-line"
          x1={x}
          y1="258"
          x2={x}
          y2={x % 64 === 52 ? 280 : 270}
        />
      ))}
      <circle className="aw-ink" cx="330" cy="156" r="6" />
      <circle className="aw-accent" cx="402" cy="132" r="9" />
    </>
  );
}

function Ocean(): JSX.Element {
  const waves = [
    "M-10 192 Q 70 174 150 192 T 310 192 T 470 192",
    "M-10 216 Q 90 234 190 216 T 390 216 T 490 216",
    "M-10 240 Q 70 222 150 240 T 310 240 T 470 240",
    "M-10 264 Q 90 282 190 264 T 390 264 T 490 264",
    "M-10 288 Q 70 270 150 288 T 310 288 T 470 288",
  ];

  return (
    <>
      <circle className="aw-accent" cx="386" cy="152" r="34" />
      <line className="aw-ink-line" x1="0" y1="152" x2="480" y2="152" />
      {waves.map((path) => (
        <path key={path} className="aw-water" d={path} />
      ))}
      <path
        className="aw-mute-line aw-dash"
        d="M0 118 C 140 62, 300 128, 480 74"
      />
      <path
        className="aw-mute-line aw-dash"
        d="M0 66 C 160 128, 320 48, 480 112"
      />
      <path
        className="aw-accent-line aw-thick"
        d="M56 110 C 170 34, 318 146, 424 62"
      />
      <circle className="aw-accent" cx="56" cy="110" r="7" />
      <circle className="aw-ink" cx="424" cy="62" r="7" />
    </>
  );
}

function Grid(): JSX.Element {
  const columns = [60, 120, 180, 240, 300, 360, 420];
  const rows = [48, 112, 176, 240];

  return (
    <>
      {columns.map((x) => (
        <line
          key={`c${x}`}
          className="aw-hair"
          x1={x}
          y1="24"
          x2={x}
          y2="296"
        />
      ))}
      {rows.map((y) => (
        <line
          key={`r${y}`}
          className="aw-hair"
          x1="24"
          y1={y}
          x2="456"
          y2={y}
        />
      ))}
      <rect className="aw-ink" x="48" y="48" width="108" height="108" />
      <rect className="aw-accent" x="172" y="48" width="56" height="56" />
      <rect
        className="aw-ink-line aw-thick"
        x="172"
        y="116"
        width="108"
        height="108"
      />
      <rect className="aw-ink" x="296" y="76" width="24" height="148" />
      <rect className="aw-ink" x="336" y="76" width="100" height="24" />
      <rect className="aw-mute-fill" x="336" y="116" width="100" height="52" />
      <rect className="aw-accent" x="48" y="172" width="108" height="14" />
      <rect className="aw-ink" x="48" y="202" width="68" height="14" />
      <rect className="aw-ink" x="336" y="184" width="100" height="40" />
      <rect className="aw-ink" x="48" y="252" width="14" height="5" />
      <rect className="aw-ink" x="72" y="252" width="14" height="5" />
      <rect className="aw-ink" x="96" y="252" width="30" height="5" />
    </>
  );
}

function Confluence(): JSX.Element {
  return (
    <>
      <path className="aw-mute-line" d="M40 168 C 140 150, 300 146, 440 160" />
      <line className="aw-hair" x1="0" y1="232" x2="480" y2="232" />
      <path
        className="aw-ink-line aw-thick"
        d="M-10 122 C 96 138, 172 180, 232 216"
      />
      <path
        className="aw-ink-line aw-thick"
        d="M-10 292 C 108 268, 178 244, 232 216"
      />
      <path
        className="aw-accent-line aw-dash"
        d="M232 216 C 312 204, 372 190, 486 182"
      />
      <circle className="aw-accent" cx="232" cy="216" r="10" />
      <path
        className="aw-ink-line"
        d="M286 104 L 313 60 L 340 104 L 367 60 L 394 104 L 421 60 L 448 104"
      />
      <line className="aw-ink-line" x1="286" y1="104" x2="452" y2="104" />
      <rect className="aw-ink" x="286" y="104" width="5" height="48" />
      <rect className="aw-ink" x="447" y="104" width="5" height="48" />
    </>
  );
}

const MOTIFS: Readonly<Record<ArtworkMotif, () => JSX.Element>> = {
  hero: Hero,
  monument: Monument,
  chamber: Chamber,
  movement: Movement,
  ocean: Ocean,
  grid: Grid,
  confluence: Confluence,
};
