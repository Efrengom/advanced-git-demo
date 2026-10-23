const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("../greet.cjs");

test("includes the supplied name", () => {
  assert.ok(greet("Ada").includes("Ada"));
});
