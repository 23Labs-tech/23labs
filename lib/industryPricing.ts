export const industryProjectCostAnswer =
  "Custom software and automation projects typically start from A$2,500. Final pricing depends on the systems involved, complexity and scope. For a larger or more complex project, book an initial consultation.";

export function industryCostFaq(question: string) {
  return {
    question,
    answer: industryProjectCostAnswer,
  };
}

export const industryCostQuestions: Record<string, string> = {
  "freight-logistics": "How much does transport and logistics automation cost?",
  recruitment: "How much does recruitment automation cost?",
  "professional-services": "How much does professional services automation cost?",
  construction: "How much does construction software or automation cost?",
  "allied-health": "How much does allied health software or automation cost?",
  "real-estate": "How much does real estate workflow automation cost?",
  "trades-field-services": "How much does trades and field service automation cost?",
};
