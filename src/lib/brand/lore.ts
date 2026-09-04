/**
 * BEYOND MORTALS — Lore & Brand Architecture Constants
 * 
 * Canonical Brand Lore Document v3
 * Documentary Register Constants & Vignettes
 */

export const BRAND_ESSENCE = {
  oneLiner: "Those who came from humanity but outlived humanity's definition of itself.",
  definition: "Beyond Mortals is a species, not a metaphor and not a club. Born of humans. Not gods, not devils. The only defining trait: they didn't die. Their defining characteristic isn't power — it's continuation.",
} as const;

export const PROHIBITED_CONCEPTS = [
  "Become Beyond Mortals",
  "Unlock your potential",
  "Defy the impossible",
  "Never give up",
  "Be limitless",
  "Join the immortal",
  "Become a god",
  "Rule the world",
  "Born different",
  "Built different",
] as const;

export const APPROVED_LINE_FRAGMENTS = [
  "Their defining characteristic isn't power. It is continuation.",
  "They had more time than anyone else, and somehow they still wanted more.",
] as const;

export interface LoreVignette {
  id: string;
  number: string;
  title: string;
  archiveLabel: string;
  content: string[];
}

export const LORE_VIGNETTES: LoreVignette[] = [
  {
    id: "opening",
    number: "01",
    title: "Opening",
    archiveLabel: "CATALOGUE ENTRY — INTRODUCTORY",
    content: [
      "There are records of people who stopped dying.",
      "None of them agree on why.",
    ],
  },
  {
    id: "before",
    number: "02",
    title: "Before",
    archiveLabel: "HISTORICAL ANTECEDENT",
    content: [
      "There were humans.",
      "They lived, built, fought, worshipped, buried each other, and died.",
      "Death was never questioned. It was simply what happened, eventually, to everyone.",
    ],
  },
  {
    id: "the-event",
    number: "03",
    title: "The Event",
    archiveLabel: "ORIGIN EVENT — DISPUTED",
    content: [
      "Somewhere in the record, something changes.",
      "Nobody agrees on what.",
      "There are people who stop appearing in it the way everyone else does.",
    ],
  },
  {
    id: "first-ones",
    number: "04",
    title: "The First Ones",
    archiveLabel: "EARLY CHRONICLES",
    content: [
      "They weren't worshipped. Not consistently.",
      "Some accounts call them divine. Others call them cursed. Most simply call them another kind of person — the way you'd note a trade, or a birthplace. Not a miracle. Just a fact, recorded in passing.",
    ],
  },
  {
    id: "the-wall",
    number: "05",
    title: "The Wall",
    archiveLabel: "UNDATED. REGIONAL SIEGE RECORD, PROVENANCE DISPUTED",
    content: [
      "A city under siege for six years was empty, burned, or surrendered by the third.",
      "One name recurs in three separate accounts of it, a century apart.",
      "Not leading anyone. Not holding a title.",
      "Still repairing the wall, long after there was anyone left worth defending it for.",
    ],
  },
  {
    id: "the-ledger",
    number: "06",
    title: "The Ledger",
    archiveLabel: "211 UNBROKEN YEARS. MERCHANT HOUSE, LOCATION WITHHELD",
    content: [
      "A merchant's ledger, kept without a single missed year for two centuries, shows the same handwriting throughout.",
      "A different name signs it every generation.",
      "The hand never changes.",
    ],
  },
  {
    id: "the-visitor",
    number: "07",
    title: "The Visitor",
    archiveLabel: "GUESTBOOK ENTRIES, MONASTIC ARCHIVE",
    content: [
      "A monastery's guestbook logs the same visitor returning roughly every forty years, under a different name each time, asking the same question.",
      "No one at the monastery ever remembered him arriving before.",
      "He always remembered them.",
    ],
  },
  {
    id: "the-blade",
    number: "08",
    title: "The Blade",
    archiveLabel: "RECOVERED, FLOODED TEMPLE FLOOR. CATALOGUED AS CEREMONIAL",
    content: [
      "A blade pulled from beneath the floor was logged as ceremonial, undated.",
      "Later testing put the metal three centuries older than the temple built above it.",
      "It still holds an edge.",
    ],
  },
  {
    id: "what-remains",
    number: "09",
    title: "What Remains",
    archiveLabel: "OBSERVED PHENOMENOLOGY",
    content: [
      "One thing repeats across every account, regardless of what they were called, or where:",
      "They continued.",
      "Kingdoms fell. Languages disappeared. Cities were buried and later dug up as ruins.",
      "They remained — usually somewhere unremarkable, doing whatever they had already been doing.",
      "Eventually, something else changed in them too. Not the not-dying. Something underneath it — how they behaved. What they noticed. What they wanted, and how long they were willing to keep wanting it.",
    ],
  },
  {
    id: "closing",
    number: "10",
    title: "Closing",
    archiveLabel: "CONCLUDING OBSERVATION",
    content: [
      "Nobody agrees on how many there are.",
      "Nobody who might know is saying.",
      "What holds true across every version of the record: they had more time than anyone who ever lived.",
      "Somehow, they still wanted more.",
      "Beyond Mortals is the name history eventually settled on.",
      "What follows is what's left of the record.",
    ],
  },
];
