import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My ojek driver fished my earbud out of a puddle this morning, waved off the tip with a grin, and rode off humming — like the whole rainy street belonged to him.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry line must be 1-200 chars, got ${LINE.length}`);
  process.exit(1);
}
if (LINE.split("\n").length !== 1 || LINE.includes("\r")) {
  console.error("entry line must be exactly one line");
  process.exit(1);
}
if (LINE.trim() !== LINE) {
  console.error("entry line must not have leading or trailing whitespace");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outputDir}`);
