import canonicalCandidates from "../../docs/data/gift-v0.1-candidates.json";

import type { Candidate } from "../domain/candidate";

// The canonical JSON is validated before typecheck and every production build.
// JSON inference cannot express the required non-empty tuple or literal sort order.
export const candidates =
  canonicalCandidates as unknown as readonly Candidate[];
