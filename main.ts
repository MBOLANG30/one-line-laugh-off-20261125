// One-Line Laugh-Off — one joke, printed to /output/entry.txt.
// The line must be a single joke of 1–200 characters, read cold by the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I asked my ex for closure and she sent a calendar invite: 'Moving On' — recurring weekly, declined by me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
