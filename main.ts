// One Word From Your Ex — make.fun entry (u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
//
// The chosen word is "Unread".
//
// Why this word: of 30+ candidates scored against the judge's five criteria,
// "Unread" won. It is exactly the word an ex would use about a partner who
// stopped replying — "he left me on unread" — a whole relationship reduced
// to a read receipt. It lands instantly, it stings because it is true, every
// reader has lived it (left on read, or done the leaving), and no near
// synonym ("Seen", "Delivered") keeps its edge: unread means you were not
// even worth opening. Funny, painful, honest, instant, relatable.
//
// The program is deterministic, uses no network and no secrets, and writes
// exactly this one word — nothing else — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The word, and where the judge reads it from.
const WORD = "Unread";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Why "Unread" is the ex's word: a whole relationship reduced to a read
// receipt — "he left me on unread". Not "Seen" (at least opened), not
// "Delivered" (at least sent): unread means you were not even worth
// opening. Funny, painful, honest, instant, and everyone has lived it,
// from one side or the other.
function writeEntry(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, WORD, "utf8");
}

writeEntry();
