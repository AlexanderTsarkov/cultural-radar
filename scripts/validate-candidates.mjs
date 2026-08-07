import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const datasetUrl = new URL(
  "../docs/data/gift-v0.1-candidates.json",
  import.meta.url,
);

export const canonicalIdentity = [
  ["parsifal-mariinsky-2026-10-11", "saint-petersburg-ru"],
  ["uncle-vanya-krasny-fakel-baltic-house-2026", "saint-petersburg-ru"],
  ["paquita-perm-opera-2026-12-11", "perm-ru"],
  ["pacific-theatre-festival-vladivostok-2026", "vladivostok-ru"],
  ["teart-minsk-cultural-forum-2026-27", "minsk-by"],
  ["nizhny-novgorod-cultural-programme-2026-27", "nizhny-novgorod-ru"],
];

const forbiddenFields = new Set([
  "ActionPosture",
  "actionPosture",
  "archived",
  "availabilityStatus",
  "fulfilmentState",
  "fulfillmentState",
  "lifecycle",
  "lifecycleStatus",
  "planning_possible",
  "purchaseState",
  "selectionStatus",
  "shortlistState",
  "ticket_action_available",
  "watching",
]);

const requiredStringFields = [
  "id",
  "slug",
  "title",
  "eventType",
  "dateLabel",
  "statusLabel",
  "statusNote",
  "summary",
  "whyEvent",
  "whyCity",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertNonEmptyString(value, path) {
  assert(
    typeof value === "string" && value.trim().length > 0,
    `${path} must be a non-empty string.`,
  );
}

function assertOptionalHttpUrl(value, path) {
  if (value === undefined) return;
  assertHttpUrl(value, path);
}

function assertHttpUrl(value, path) {
  assertNonEmptyString(value, path);

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${path} must be a valid URL.`);
  }

  assert(
    url.protocol === "http:" || url.protocol === "https:",
    `${path} must use HTTP(S).`,
  );
}

function assertStringArray(value, path) {
  assert(Array.isArray(value), `${path} must be an array.`);
  value.forEach((item, index) =>
    assertNonEmptyString(item, `${path}[${index}]`),
  );
}

function findForbiddenFields(value, path = "dataset") {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      findForbiddenFields(item, `${path}[${index}]`),
    );
    return;
  }

  if (!isObject(value)) return;

  for (const [key, nestedValue] of Object.entries(value)) {
    assert(!forbiddenFields.has(key), `${path}.${key} is not allowed in v0.1.`);
    findForbiddenFields(nestedValue, `${path}.${key}`);
  }
}

function validateCandidate(candidate, index) {
  const path = `dataset[${index}]`;
  assert(isObject(candidate), `${path} must be an object.`);

  for (const field of requiredStringFields) {
    assertNonEmptyString(candidate[field], `${path}.${field}`);
  }

  assert(
    isObject(candidate.organisation),
    `${path}.organisation must be an object.`,
  );
  assertNonEmptyString(
    candidate.organisation.name,
    `${path}.organisation.name`,
  );
  assertOptionalHttpUrl(
    candidate.organisation.officialUrl,
    `${path}.organisation.officialUrl`,
  );

  if (candidate.creatorNames !== undefined) {
    assertStringArray(candidate.creatorNames, `${path}.creatorNames`);
  }

  if (candidate.venue !== undefined) {
    assert(isObject(candidate.venue), `${path}.venue must be an object.`);
    assertNonEmptyString(candidate.venue.name, `${path}.venue.name`);
    assertOptionalHttpUrl(
      candidate.venue.officialUrl,
      `${path}.venue.officialUrl`,
    );
  }

  assert(isObject(candidate.city), `${path}.city must be an object.`);
  assertNonEmptyString(candidate.city.id, `${path}.city.id`);
  assertNonEmptyString(candidate.city.name, `${path}.city.name`);
  assertNonEmptyString(candidate.city.country, `${path}.city.country`);

  if (candidate.nextExpectedUpdate !== undefined) {
    assertNonEmptyString(
      candidate.nextExpectedUpdate,
      `${path}.nextExpectedUpdate`,
    );
  }

  assertStringArray(candidate.knownFacts, `${path}.knownFacts`);
  assertStringArray(candidate.unknownFacts, `${path}.unknownFacts`);

  if (candidate.image !== undefined) {
    assert(isObject(candidate.image), `${path}.image must be an object.`);
    assertNonEmptyString(candidate.image.src, `${path}.image.src`);
    assertNonEmptyString(candidate.image.alt, `${path}.image.alt`);
    if (candidate.image.credit !== undefined) {
      assertNonEmptyString(candidate.image.credit, `${path}.image.credit`);
    }
  }

  assert(
    Array.isArray(candidate.sources) && candidate.sources.length > 0,
    `${path}.sources must be a non-empty array.`,
  );

  let hasPrimarySource = false;
  candidate.sources.forEach((source, sourceIndex) => {
    const sourcePath = `${path}.sources[${sourceIndex}]`;
    assert(isObject(source), `${sourcePath} must be an object.`);
    assertNonEmptyString(source.label, `${sourcePath}.label`);
    assertHttpUrl(source.url, `${sourcePath}.url`);
    assert(
      source.type === "primary" || source.type === "secondary",
      `${sourcePath}.type must be primary or secondary.`,
    );
    assertNonEmptyString(source.supports, `${sourcePath}.supports`);
    hasPrimarySource ||= source.type === "primary";
  });
  assert(hasPrimarySource, `${path} must include at least one primary source.`);

  assert(
    Number.isInteger(candidate.sortOrder) &&
      candidate.sortOrder >= 1 &&
      candidate.sortOrder <= 6,
    `${path}.sortOrder must be an integer from 1 to 6.`,
  );
}

export function validateCandidateDataset(dataset) {
  assert(Array.isArray(dataset), "Dataset root must be an array.");
  assert(dataset.length === 6, "Dataset must contain exactly 6 candidates.");

  findForbiddenFields(dataset);
  dataset.forEach(validateCandidate);

  const ids = dataset.map((candidate) => candidate.id);
  assert(new Set(ids).size === ids.length, "Candidate IDs must be unique.");

  dataset.forEach((candidate, index) => {
    const [expectedId, expectedCityId] = canonicalIdentity[index];
    assert(
      candidate.sortOrder === index + 1,
      "Editorial order must remain 1..6.",
    );
    assert(
      candidate.id === expectedId,
      `Candidate ${index + 1} identity changed.`,
    );
    assert(
      candidate.city.id === expectedCityId,
      `Candidate ${index + 1} city identity changed.`,
    );
  });

  assert(
    dataset[0].city.id === dataset[1].city.id,
    "Candidates 1 and 2 must share the Saint Petersburg city identity.",
  );

  return dataset;
}

export async function readCandidateDataset() {
  const contents = await readFile(datasetUrl, "utf8");
  return JSON.parse(contents);
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    const dataset = await readCandidateDataset();
    validateCandidateDataset(dataset);
    console.log("Candidate dataset is valid: 6 canonical records.");
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
