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

const WORD = "Unread";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
