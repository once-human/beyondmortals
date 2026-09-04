import { PROHIBITED_CONCEPTS } from "./lore";

/**
 * BEYOND MORTALS — Brand Voice & Rules Validator
 */

export interface PricingTier {
  name: string;
  priceRange: string;
  features: string[];
  hasCrimsonDetail: boolean;
}

export const BRAND_PRICING_TIERS: Record<string, PricingTier> = {
  storyline: {
    name: "Storyline Tier (Flagship Artifacts)",
    priceRange: "₹3,500 – ₹11,000 (Core: ₹5,000 – ₹6,000)",
    features: [
      "Carries the embroidered crimson-thread tally detail",
      "Carries extracted single-line lore fragments",
      "Acid-wash / mineral-wash 240+ GSM heavyweight cotton",
      "Small-batch cut-and-sew hero pieces",
    ],
    hasCrimsonDetail: true,
  },
  generic: {
    name: "Generic Tier",
    priceRange: "₹1,000 – ₹2,500",
    features: [
      "Same aesthetic world & dark matte canvas",
      "Flat-print version of simpler mark",
      "No crimson embroidered detail",
      "No single-line story excerpt",
    ],
    hasCrimsonDetail: false,
  },
};

/**
 * Validates whether proposed copy complies with Beyond Mortals brand rules.
 * Enforces the strict ban on second-person ("you") pitch language and motivational phrases.
 */
export function validateBrandCopy(copyText: string): {
  isValid: boolean;
  violations: string[];
} {
  const violations: string[] = [];

  // Check for second person "you" / "your"
  if (/\b(you|your|yours|yourself)\b/i.test(copyText)) {
    violations.push(
      "Copy contains second-person pronouns ('you/your'). Brand rule: Never address customer in second person."
    );
  }

  // Check for prohibited startup/motivational phrases
  for (const phrase of PROHIBITED_CONCEPTS) {
    if (copyText.toLowerCase().includes(phrase.toLowerCase())) {
      violations.push(`Copy contains prohibited phrase: "${phrase}"`);
    }
  }

  return {
    isValid: violations.length === 0,
    violations,
  };
}
