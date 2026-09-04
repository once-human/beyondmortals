/**
 * Beyond Mortals — Brand Lore
 *
 * Canonical story fragments from the brand doc v3.
 * Each drop reveals a new fragment. The full record lives on /the-record.
 * Garments only ever carry a single extracted line.
 */

export const BRAND = {
  name: "Beyond Mortals",
  essence:
    "Those who came from humanity but outlived humanity's definition of itself.",
  species:
    "A species, not a metaphor and not a club. Born of humans. Not gods, not devils. The only defining trait: they didn't die.",
  characteristic: "Their defining characteristic isn't power. It is continuation.",
} as const;

export const APPROVED_FRAGMENTS = [
  "Their defining characteristic isn't power. It is continuation.",
  "They had more time than anyone else, and somehow they still wanted more.",
] as const;

export interface Vignette {
  id: string;
  number: string;
  title: string;
  label: string;
  lines: string[];
}

export const RECORD: Vignette[] = [
  {
    id: "opening",
    number: "01",
    title: "Opening",
    label: "Introductory",
    lines: [
      "There are records of people who stopped dying.",
      "None of them agree on why.",
    ],
  },
  {
    id: "before",
    number: "02",
    title: "Before",
    label: "Historical antecedent",
    lines: [
      "There were humans.",
      "They lived, built, fought, worshipped, buried each other, and died.",
      "Death was never questioned. It was simply what happened, eventually, to everyone.",
    ],
  },
  {
    id: "the-event",
    number: "03",
    title: "The Event",
    label: "Origin — disputed",
    lines: [
      "Somewhere in the record, something changes.",
      "Nobody agrees on what.",
      "There are people who stop appearing in it the way everyone else does.",
    ],
  },
  {
    id: "first-ones",
    number: "04",
    title: "The First Ones",
    label: "Early chronicles",
    lines: [
      "They weren't worshipped. Not consistently.",
      "Some accounts call them divine. Others call them cursed. Most simply call them another kind of person — the way you'd note a trade, or a birthplace. Not a miracle. Just a fact, recorded in passing.",
    ],
  },
  {
    id: "the-wall",
    number: "05",
    title: "The Wall",
    label: "Undated — regional siege record, provenance disputed",
    lines: [
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
    label: "211 unbroken years — merchant house, location withheld",
    lines: [
      "A merchant's ledger, kept without a single missed year for two centuries, shows the same handwriting throughout.",
      "A different name signs it every generation.",
      "The hand never changes.",
    ],
  },
  {
    id: "the-visitor",
    number: "07",
    title: "The Visitor",
    label: "Guestbook entries — monastic archive",
    lines: [
      "A monastery's guestbook logs the same visitor returning roughly every forty years, under a different name each time, asking the same question.",
      "No one at the monastery ever remembered him arriving before.",
      "He always remembered them.",
    ],
  },
  {
    id: "the-blade",
    number: "08",
    title: "The Blade",
    label: "Recovered — flooded temple floor, catalogued as ceremonial",
    lines: [
      "A blade pulled from beneath the floor was logged as ceremonial, undated.",
      "Later testing put the metal three centuries older than the temple built above it.",
      "It still holds an edge.",
    ],
  },
  {
    id: "what-remains",
    number: "09",
    title: "What Remains",
    label: "Observed phenomenology",
    lines: [
      "One thing repeats across every account, regardless of what they were called, or where:",
      "They continued.",
      "Kingdoms fell. Languages disappeared. Cities were buried and later dug up as ruins.",
      "They remained — usually somewhere unremarkable, doing whatever they had already been doing.",
    ],
  },
  {
    id: "closing",
    number: "10",
    title: "Closing",
    label: "Concluding observation",
    lines: [
      "Nobody agrees on how many there are.",
      "Nobody who might know is saying.",
      "What holds true across every version of the record: they had more time than anyone who ever lived.",
      "Somehow, they still wanted more.",
    ],
  },
];
