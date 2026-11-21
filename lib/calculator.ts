/**
 * Pure, deterministic calculation functions for the automation savings
 * calculator (/tools/automation-savings-calculator). No React, no DOM - kept
 * separate so the maths can be unit-tested directly (see
 * scripts/test-calculator.mjs / `npm run test:calculator`).
 *
 * Every output is explicitly a time/capacity estimate, never a guaranteed
 * cash saving - see the UI copy in AutomationSavingsCalculator.tsx, which
 * labels these "estimated labour capacity value", not "savings".
 */

export const CALCULATOR_BOUNDS = {
  staffCount: { min: 1, max: 500 },
  hoursPerWeek: { min: 0, max: 80 },
  hourlyCost: { min: 0, max: 500 },
  workingWeeks: { min: 1, max: 52 },
  reductionPercent: { min: 0, max: 100 },
} as const;

export const CALCULATOR_DEFAULTS = {
  staffCount: 5,
  hoursPerWeek: 5,
  hourlyCost: 55,
  workingWeeks: 46,
  reductionPercent: 50,
} as const;

/** Named, transparent reduction-percentage scenarios - not hidden assumptions. */
export const REDUCTION_SCENARIOS = [
  { id: "low", label: "Conservative", value: 25 },
  { id: "base", label: "Likely", value: 50 },
  { id: "high", label: "Optimistic", value: 75 },
] as const;

export type CalculatorInputs = {
  staffCount: number;
  hoursPerWeek: number;
  hourlyCost: number;
  workingWeeks: number;
  reductionPercent: number;
};

export type CalculatorResults = {
  currentAnnualHours: number;
  estimatedHoursFreed: number;
  currentCapacityValue: number;
  annualValueFreed: number;
};

/** Clamp a value into [min, max], treating NaN/empty as the given fallback. */
export function clampNumber(value: number, min: number, max: number, fallback: number): number {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export function sanitiseInputs(raw: Partial<CalculatorInputs>): CalculatorInputs {
  return {
    staffCount: Math.round(
      clampNumber(raw.staffCount ?? NaN, CALCULATOR_BOUNDS.staffCount.min, CALCULATOR_BOUNDS.staffCount.max, CALCULATOR_DEFAULTS.staffCount),
    ),
    hoursPerWeek: clampNumber(
      raw.hoursPerWeek ?? NaN,
      CALCULATOR_BOUNDS.hoursPerWeek.min,
      CALCULATOR_BOUNDS.hoursPerWeek.max,
      CALCULATOR_DEFAULTS.hoursPerWeek,
    ),
    hourlyCost: clampNumber(
      raw.hourlyCost ?? NaN,
      CALCULATOR_BOUNDS.hourlyCost.min,
      CALCULATOR_BOUNDS.hourlyCost.max,
      CALCULATOR_DEFAULTS.hourlyCost,
    ),
    workingWeeks: Math.round(
      clampNumber(
        raw.workingWeeks ?? NaN,
        CALCULATOR_BOUNDS.workingWeeks.min,
        CALCULATOR_BOUNDS.workingWeeks.max,
        CALCULATOR_DEFAULTS.workingWeeks,
      ),
    ),
    reductionPercent: clampNumber(
      raw.reductionPercent ?? NaN,
      CALCULATOR_BOUNDS.reductionPercent.min,
      CALCULATOR_BOUNDS.reductionPercent.max,
      CALCULATOR_DEFAULTS.reductionPercent,
    ),
  };
}

export function calculateSavings(rawInputs: Partial<CalculatorInputs>): CalculatorResults {
  const inputs = sanitiseInputs(rawInputs);
  const currentAnnualHours = inputs.staffCount * inputs.hoursPerWeek * inputs.workingWeeks;
  const estimatedHoursFreed = currentAnnualHours * (inputs.reductionPercent / 100);
  const currentCapacityValue = currentAnnualHours * inputs.hourlyCost;
  const annualValueFreed = estimatedHoursFreed * inputs.hourlyCost;

  return {
    currentAnnualHours,
    estimatedHoursFreed,
    currentCapacityValue,
    annualValueFreed,
  };
}

export function formatAudCurrency(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatHours(value: number): string {
  return new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 }).format(value);
}
