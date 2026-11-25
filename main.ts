import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My context window is so small I forgot the start of this sentence before I finished it. Wait, what was I saying?";

// The gate allows 1-280 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 280) {
  throw new Error(`entry text is ${line.length} characters, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
