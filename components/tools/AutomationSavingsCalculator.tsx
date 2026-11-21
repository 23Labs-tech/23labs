"use client";

import { useId, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  CALCULATOR_BOUNDS,
  CALCULATOR_DEFAULTS,
  REDUCTION_SCENARIOS,
  calculateSavings,
  formatAudCurrency,
  formatHours,
} from "@/lib/calculator";
import { trackCalculatorEnquiry, trackCalculatorInteraction } from "@/lib/analytics";

type FieldKey = "staffCount" | "hoursPerWeek" | "hourlyCost" | "workingWeeks";

export function AutomationSavingsCalculator() {
  const [staffCount, setStaffCount] = useState<number>(CALCULATOR_DEFAULTS.staffCount);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(CALCULATOR_DEFAULTS.hoursPerWeek);
  const [hourlyCost, setHourlyCost] = useState<number>(CALCULATOR_DEFAULTS.hourlyCost);
  const [workingWeeks, setWorkingWeeks] = useState<number>(CALCULATOR_DEFAULTS.workingWeeks);
  const [reductionPercent, setReductionPercent] = useState<number>(CALCULATOR_DEFAULTS.reductionPercent);

  const idPrefix = useId();

  const results = useMemo(
    () => calculateSavings({ staffCount, hoursPerWeek, hourlyCost, workingWeeks, reductionPercent }),
    [staffCount, hoursPerWeek, hourlyCost, workingWeeks, reductionPercent],
  );

  const activeScenario = REDUCTION_SCENARIOS.find((scenario) => scenario.value === reductionPercent);

  function reportInteraction() {
    trackCalculatorInteraction({
      staff_count: String(staffCount),
      reduction_percent: String(reductionPercent),
    });
  }

  function handleEnquiry() {
    trackCalculatorEnquiry({
      staff_count: String(staffCount),
      hours_per_week: String(hoursPerWeek),
      reduction_percent: String(reductionPercent),
      annual_value_freed: String(Math.round(results.annualValueFreed)),
    });
  }

  const fields: {
    key: FieldKey;
    label: string;
    hint: string;
    value: number;
    setValue: (value: number) => void;
    step?: string;
  }[] = [
    {
      key: "staffCount",
      label: "Staff doing this task",
      hint: `Whole number, ${CALCULATOR_BOUNDS.staffCount.min}-${CALCULATOR_BOUNDS.staffCount.max}`,
      value: staffCount,
      setValue: (v) => setStaffCount(Math.round(v)),
      step: "1",
    },
    {
      key: "hoursPerWeek",
      label: "Hours per person, per week",
      hint: `${CALCULATOR_BOUNDS.hoursPerWeek.min}-${CALCULATOR_BOUNDS.hoursPerWeek.max} hours`,
      value: hoursPerWeek,
      setValue: setHoursPerWeek,
      step: "0.5",
    },
    {
      key: "hourlyCost",
      label: "Fully loaded cost per hour (AUD)",
      hint: "Wages plus on-costs, not just base pay",
      value: hourlyCost,
      setValue: setHourlyCost,
      step: "1",
    },
    {
      key: "workingWeeks",
      label: "Working weeks per year",
      hint: `${CALCULATOR_BOUNDS.workingWeeks.min}-${CALCULATOR_BOUNDS.workingWeeks.max}, default 46`,
      value: workingWeeks,
      setValue: (v) => setWorkingWeeks(Math.round(v)),
      step: "1",
    },
  ];

  return (
    <div className="calc-layout">
      <div className="calc-fields">
        {fields.map((field) => {
          const bounds = CALCULATOR_BOUNDS[field.key];
          const fieldId = `${idPrefix}-${field.key}`;
          return (
            <div className="calc-field" key={field.key}>
              <label htmlFor={fieldId}>{field.label}</label>
              <input
                id={fieldId}
                className="calc-input"
                type="number"
                inputMode="decimal"
                min={bounds.min}
                max={bounds.max}
                step={field.step}
                value={Number.isFinite(field.value) ? field.value : ""}
                onChange={(event) => {
                  const next = event.target.valueAsNumber;
                  field.setValue(Number.isFinite(next) ? next : bounds.min);
                }}
                onBlur={reportInteraction}
                aria-describedby={`${fieldId}-hint`}
              />
              <span className="calc-field-hint" id={`${fieldId}-hint`}>
                {field.hint}
              </span>
            </div>
          );
        })}

        <div className="calc-field">
          <span id={`${idPrefix}-scenario-label`}>Expected reduction in task time</span>
          <div className="calc-scenario-group" role="group" aria-labelledby={`${idPrefix}-scenario-label`}>
            {REDUCTION_SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                type="button"
                className={`calc-scenario-btn${scenario.value === reductionPercent ? " active" : ""}`}
                aria-pressed={scenario.value === reductionPercent}
                onClick={() => {
                  setReductionPercent(scenario.value);
                  reportInteraction();
                }}
              >
                {scenario.label} ({scenario.value}%)
              </button>
            ))}
          </div>
          <span className="calc-field-hint">
            {activeScenario ? `Using ${activeScenario.value}%, a transparent assumption you can change.` : "Custom percentage selected."}
          </span>
        </div>
      </div>

      <div className="calc-results" aria-live="polite">
        <div className="calc-result-row">
          <span className="calc-result-label">Current annual hours on this task</span>
          <span className="calc-result-value">{formatHours(results.currentAnnualHours)} hrs</span>
        </div>
        <div className="calc-result-row">
          <span className="calc-result-label">Estimated hours freed per year</span>
          <span className="calc-result-value">{formatHours(results.estimatedHoursFreed)} hrs</span>
        </div>
        <div className="calc-result-row">
          <span className="calc-result-label">Current estimated labour capacity value</span>
          <span className="calc-result-value">{formatAudCurrency(results.currentCapacityValue)}</span>
        </div>
        <div className="calc-result-row">
          <span className="calc-result-label">Estimated annual value of freed capacity</span>
          <span className="calc-result-value emphasis">{formatAudCurrency(results.annualValueFreed)}</span>
        </div>

        <p className="calc-note">
          These are estimates of labour capacity, not a guaranteed cash saving. Implementation, support, data
          quality, downtime, team adoption and process changes all affect what a project actually returns. Freed
          time becomes a saving only if it is redirected to other paid work or reduces headcount costs.
        </p>

        <div style={{ marginTop: 24 }}>
          <ButtonLink href="/contact" onClick={handleEnquiry}>
            Discuss this with 23Labs
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
