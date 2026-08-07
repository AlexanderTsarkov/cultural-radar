export interface CandidateSource {
  label: string;
  url: string;
  type: "primary" | "secondary";
  supports: string;
}

export type NonEmptyArray<T> = [T, ...T[]];

export interface Candidate {
  id: string;
  slug: string;
  title: string;
  eventType: string;

  organisation: {
    name: string;
    officialUrl?: string;
  };

  creatorNames?: string[];

  venue?: {
    name: string;
    officialUrl?: string;
  };

  city: {
    id: string;
    name: string;
    country: string;
  };

  dateLabel: string;

  statusLabel: string;
  statusNote: string;
  nextExpectedUpdate?: string;

  summary: string;
  whyEvent: string;
  whyCity: string;
  knownFacts: string[];
  unknownFacts: string[];

  image?: {
    src: string;
    alt: string;
    credit?: string;
  };

  sources: NonEmptyArray<CandidateSource>;
  sortOrder: 1 | 2 | 3 | 4 | 5 | 6;
}
