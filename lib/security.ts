import { siteConfig } from "@/lib/site";

export const securityPractices = [
  {
    title: "Least-privilege access",
    body: "We ask only for the access a project needs, use separate accounts or API keys where systems allow it, and ask you to remove our access at handover.",
  },
  {
    title: "Credentials kept out of code",
    body: "Passwords, API keys and tokens live in a password manager or the platform's secret storage. They are never written into code, documents or email.",
  },
  {
    title: "Your accounts, your ownership",
    body: "Where possible, automations and software run in accounts you own, so you keep control of the systems, the data and the bill.",
  },
  {
    title: "Personal information minimised",
    body: "Workflows move only the personal information each step needs and avoid storing copies in extra places.",
  },
  {
    title: "Human approval where it matters",
    body: "Sending to customers, changing financial records or acting on personal information can require a person to approve before it happens.",
  },
  {
    title: "Logging, alerts and an off switch",
    body: "Automations record what ran, raise alerts when something fails, and can be paused or removed quickly.",
  },
];

export const securityAiPractices = [
  {
    title: "No training on your data",
    body: "We choose AI services and settings where business data is not used to train models, and confirm this for each tool during scoping.",
  },
  {
    title: "Grounded and limited",
    body: "AI agents work from approved sources and have a written list of what they may and may not do.",
  },
  {
    title: "Tested on real examples",
    body: "AI steps are tested against your real documents and questions, with confidence thresholds that send uncertain results to a person.",
  },
];

export const securityFaqs = [
  {
    question: "Where is our data stored?",
    answer:
      "Usually in the systems you already use. Where we build something new, we host it in accounts you own where possible and agree the hosting region with you during scoping.",
  },
  {
    question: "Do you need admin access to our systems?",
    answer:
      "Only when a task genuinely requires it. We prefer dedicated, limited accounts or API keys, and we ask you to revoke our access when the work is handed over.",
  },
  {
    question: "How do you handle personal information?",
    answer:
      "We design workflows to use the minimum personal information needed and to support your obligations under the Australian Privacy Principles or the New Zealand Privacy Act 2020. Your legal adviser confirms the obligations that apply to you.",
  },
  {
    question: "Is our data used to train AI models?",
    answer:
      "We choose AI services and settings where business data is not used for model training, and we confirm this for each tool before using it on your project.",
  },
  {
    question: "Do you hold security certifications?",
    answer:
      "23Labs is a small studio and does not currently hold formal certifications such as ISO 27001 or SOC 2. If your organisation requires them, tell us early and we will work within your security requirements and supplier process.",
  },
  {
    question: "Will you sign an NDA or data processing agreement?",
    answer: "Yes. We are happy to work under your NDA or data handling terms.",
  },
  {
    question: "How do we report a security concern?",
    answer: `Email ${siteConfig.email} with the details. We will acknowledge it and follow up as quickly as we can.`,
  },
];
