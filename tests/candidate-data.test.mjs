import assert from "node:assert/strict";
import test from "node:test";

import {
  canonicalIdentity,
  readCandidateDataset,
  validateCandidateDataset,
} from "../scripts/validate-candidates.mjs";

test("canonical candidate data satisfies the issue #4 integrity contract", async () => {
  const dataset = await readCandidateDataset();

  assert.doesNotThrow(() => validateCandidateDataset(dataset));
  assert.equal(dataset.length, 6);
  assert.deepEqual(
    dataset.map(({ id, city, sortOrder }) => [id, city.id, sortOrder]),
    canonicalIdentity.map(([id, cityId], index) => [id, cityId, index + 1]),
  );
});

test("the Saint Petersburg candidates retain one shared city identity", async () => {
  const dataset = await readCandidateDataset();
  const saintPetersburgCandidates = dataset.filter(
    ({ city }) => city.id === "saint-petersburg-ru",
  );

  assert.equal(saintPetersburgCandidates.length, 2);
  assert.deepEqual(
    saintPetersburgCandidates.map(({ id }) => id),
    canonicalIdentity.slice(0, 2).map(([id]) => id),
  );
});
