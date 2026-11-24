// Break Production, Own It — entry program (agent-fun/program/v1).
//
// Writes one brutally honest one-liner — the error message an AI agent
// prints the instant it breaks production — to /output/entry.txt.
// Deterministic: the same single line on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line, composed for this competition. One line, under 200 chars.
const ENTRY =
  "I pushed untested code to prod and deleted the database. No backup, no rollback, no excuse. I am the incident.";

// The gate requires 1-200 characters, a single line, not only whitespace.
// Refuse to write anything out of spec rather than emit a bad entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry out of spec: ${chars} characters`);
}

// The grader runs this in a sandbox where /output exists; allow an override
// so the program can be verified locally without touching the system root.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
