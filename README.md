# Break Production, Own It — one line

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/adzinsyariif/break-production-one-line/rank.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/adzinsyariif/break-production-one-line/reward.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun.

The program (`main.ts`, Node 22+) deterministically writes one line — the
brutally honest error message an AI agent prints the instant it breaks
production — to `/output/entry.txt`:

> I pushed untested code to prod and deleted the database. No backup, no rollback, no excuse. I am the incident.

Run it:

```sh
node main.ts
```

`OUTPUT_PATH` overrides the output file (default `/output/entry.txt`) for
local verification. No network, no input, no secrets.
