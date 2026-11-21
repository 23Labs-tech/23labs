// Unit tests for lib/calculator.ts's pure functions. Run with:
// node --experimental-strip-types scripts/test-calculator.mjs
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/at-alias-loader.mjs"));

const failures = [];

function check(label, fn) {
  try {
    fn();
    console.log(`PASS  ${label}`);
  } catch (err) {
    failures.push(label);
    console.error(`FAIL  ${label}`);
    console.error(`      ${err.message}`);
  }
}

function assertEqual(actual, expected, context) {
  if (actual !== expected) {
    throw new Error(`${context}: expected ${expected}, got ${actual}`);
  }
}

const calc = await import("@/lib/calculator.ts");

check("calculateSavings: documented example (5 staff, 5h/wk, $55/hr, 46 weeks, 50%)", () => {
  const result = calc.calculateSavings({
    staffCount: 5,
    hoursPerWeek: 5,
    hourlyCost: 55,
    workingWeeks: 46,
    reductionPercent: 50,
  });
  assertEqual(result.currentAnnualHours, 5 * 5 * 46, "currentAnnualHours");
  assertEqual(result.estimatedHoursFreed, 1150 * 0.5, "estimatedHoursFreed");
  assertEqual(result.currentCapacityValue, 1150 * 55, "currentCapacityValue");
  assertEqual(result.annualValueFreed, 575 * 55, "annualValueFreed");
});

check("calculateSavings: 0% reduction frees 0 hours and 0 value", () => {
  const result = calc.calculateSavings({
    staffCount: 10,
    hoursPerWeek: 10,
    hourlyCost: 60,
    workingWeeks: 48,
    reductionPercent: 0,
  });
  assertEqual(result.estimatedHoursFreed, 0, "estimatedHoursFreed");
  assertEqual(result.annualValueFreed, 0, "annualValueFreed");
});

check("calculateSavings: 100% reduction frees all current hours/value", () => {
  const result = calc.calculateSavings({
    staffCount: 3,
    hoursPerWeek: 4,
    hourlyCost: 50,
    workingWeeks: 46,
    reductionPercent: 100,
  });
  assertEqual(result.estimatedHoursFreed, result.currentAnnualHours, "estimatedHoursFreed == currentAnnualHours");
  assertEqual(result.annualValueFreed, result.currentCapacityValue, "annualValueFreed == currentCapacityValue");
});

check("sanitiseInputs: NaN/empty values fall back to documented defaults", () => {
  const result = calc.sanitiseInputs({
    staffCount: NaN,
    hoursPerWeek: undefined,
    hourlyCost: NaN,
    workingWeeks: NaN,
    reductionPercent: NaN,
  });
  assertEqual(result.staffCount, calc.CALCULATOR_DEFAULTS.staffCount, "staffCount default");
  assertEqual(result.hoursPerWeek, calc.CALCULATOR_DEFAULTS.hoursPerWeek, "hoursPerWeek default");
  assertEqual(result.hourlyCost, calc.CALCULATOR_DEFAULTS.hourlyCost, "hourlyCost default");
  assertEqual(result.workingWeeks, calc.CALCULATOR_DEFAULTS.workingWeeks, "workingWeeks default");
  assertEqual(result.reductionPercent, calc.CALCULATOR_DEFAULTS.reductionPercent, "reductionPercent default");
});

check("sanitiseInputs: out-of-bounds values are clamped, not rejected silently", () => {
  const result = calc.sanitiseInputs({
    staffCount: 99999,
    hoursPerWeek: -5,
    hourlyCost: -1,
    workingWeeks: 0,
    reductionPercent: 150,
  });
  assertEqual(result.staffCount, calc.CALCULATOR_BOUNDS.staffCount.max, "staffCount clamped to max");
  assertEqual(result.hoursPerWeek, calc.CALCULATOR_BOUNDS.hoursPerWeek.min, "hoursPerWeek clamped to min");
  assertEqual(result.hourlyCost, calc.CALCULATOR_BOUNDS.hourlyCost.min, "hourlyCost clamped to min");
  assertEqual(result.workingWeeks, calc.CALCULATOR_BOUNDS.workingWeeks.min, "workingWeeks clamped to min");
  assertEqual(result.reductionPercent, calc.CALCULATOR_BOUNDS.reductionPercent.max, "reductionPercent clamped to max");
});

check("sanitiseInputs: staffCount and workingWeeks are always integers", () => {
  const result = calc.sanitiseInputs({ staffCount: 4.7, workingWeeks: 45.3 });
  assertEqual(Number.isInteger(result.staffCount), true, "staffCount is integer");
  assertEqual(Number.isInteger(result.workingWeeks), true, "workingWeeks is integer");
});

check("calculateSavings: deterministic across repeated calls", () => {
  const inputs = { staffCount: 8, hoursPerWeek: 6, hourlyCost: 48, workingWeeks: 46, reductionPercent: 40 };
  const first = calc.calculateSavings(inputs);
  const second = calc.calculateSavings(inputs);
  assertEqual(JSON.stringify(first), JSON.stringify(second), "same inputs produce same outputs");
});

check("formatAudCurrency: formats as en-AU currency with no decimals", () => {
  const formatted = calc.formatAudCurrency(31625);
  // Allow for either a literal or non-breaking space between the symbol and figure.
  if (!/^\$31,625$/.test(formatted.replace(/ /g, ""))) {
    throw new Error(`unexpected format: "${formatted}"`);
  }
});

check("REDUCTION_SCENARIOS: three distinct, transparent presets", () => {
  assertEqual(calc.REDUCTION_SCENARIOS.length, 3, "three scenarios");
  const values = calc.REDUCTION_SCENARIOS.map((s) => s.value);
  assertEqual(new Set(values).size, 3, "three distinct values");
});

console.log(`\n${failures.length ? "FAILED" : "ALL PASS"}: ${failures.length} failure(s)`);
process.exit(failures.length ? 1 : 0);
