import {
  createEmptyEvaluation,
  parseEvaluation,
  serializeEvaluation,
} from "../../domain/evaluation";
import type { EvaluationState } from "../../domain/evaluation";

/** One versioned device-local key. There is no server or cross-device state. */
export const EVALUATION_STORAGE_KEY = "cultural-radar:gift-v0.1:evaluations:v1";

function storage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadEvaluation(): EvaluationState {
  try {
    return parseEvaluation(storage()?.getItem(EVALUATION_STORAGE_KEY));
  } catch {
    return createEmptyEvaluation();
  }
}

/** Returns whether the value really reached device-local storage. */
export function saveEvaluation(state: EvaluationState): boolean {
  try {
    const store = storage();
    if (!store) return false;

    store.setItem(EVALUATION_STORAGE_KEY, serializeEvaluation(state));
    return true;
  } catch {
    return false;
  }
}
