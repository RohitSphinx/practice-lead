
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Practice Manager and Technical Lead Onboarding",
    subtitle: "Align. Define. Establish. Enable.",
    type: 'intro',
    content: [
      "Align Practice Managers to a common operating model",
      "Define ownership, accountability, and success metrics",
      "Establish a data-driven, outcome-focused practice culture",
      "Enable scalable growth across technology practices"
    ],
    highlight: "Outcome: Clear understanding of what to run, how to measure, and how to win"
  },
  {
    id: 2,
    title: "Our Technology Practices",
    subtitle: "Specialized Excellence across the Stack",
    type: 'grid',
    content: [
      "CyberSecurity",
      "Custom Solutions PHP/ Python & Data Engineering",
      "Custom Solutions - React, Node.js, NestJS, Angular",
      "Data Engineering & Backend",
      "UI / UX",
      "SharePoint & Low-Code Platforms",
      "Cloud & DevOps"
    ],
    highlight: "Each Practice Is Treated As: A mini P&L, A capability center, A client-facing brand"
  },
  {
    id: 3,
    title: "Practice Operating Model",
    subtitle: "The Three Pillars of Success",
    type: 'grid',
    content: [
      "People Excellence",
      "Delivery Excellence",
      "Business & Financial Excellence"
    ],
    highlight: "Manager Accountability: Revenue health, Talent readiness, Client satisfaction, Innovation"
  },
  {
    id: 4,
    title: "Role – Practice Lead",
    subtitle: "Primary Focus: Business & People",
    type: 'comparison',
    columns: [
      {
        title: "Key Responsibilities",
        items: [
          "Practice strategy and roadmap",
          "Revenue growth & forecasting",
          "Utilization and bench management",
          "Client relationships & escalations",
          "Hiring, attrition control, and morale",
          "Pre-sales support and deal conversion"
        ],
        question: "Is the practice healthy, profitable, and growing?"
      }
    ],
    content: []
  },
  {
    id: 5,
    title: "Role – Technical Lead",
    subtitle: "Primary Focus: Delivery & Technology",
    type: 'comparison',
    columns: [
      {
        title: "Key Responsibilities",
        items: [
          "Solution quality and architecture",
          "Technical governance & standards",
          "Delivery predictability",
          "Automation and AI-first adoption",
          "Skill development & certifications",
          "Reusable assets, frameworks, IP"
        ],
        question: "Are we delivering world-class solutions consistently?"
      }
    ],
    content: []
  },
  {
    id: 6,
    title: "Financial Metrics",
    subtitle: "Measuring Profitability and Efficiency",
    type: 'metrics',
    metrics: [
      { label: "Utilization", target: "> 90%", value: 92, unit: '%', description: "Maximum productive billable capacity" },
      { label: "Resource Leakage", target: "< 2%", value: 1.5, unit: '%', description: "Eliminate non-billable effort on billable work" },
      { label: "Pre-Sales Conversion", target: "> 25%", value: 28, unit: 'win-rate', description: "Convert effort into signed SOWs" }
    ],
    content: []
  },
  {
    id: 7,
    title: "Employee Satisfaction Metrics",
    subtitle: "Engagement and Talent Health",
    type: 'metrics',
    metrics: [
      { label: "Employee NPS (eNPS)", target: "High", value: 75, unit: 'score', description: "Measure advocacy and engagement" },
      { label: "Attrition Rate", target: "< 10%", value: 8, unit: '%', description: "Focus on retention of key talent" },
      { label: "Training Hours", target: "40 hrs", value: 40, unit: 'hours', description: "Per employee per year" },
      { label: "Bench Ageing", target: "< 5%", value: 3, unit: '%', description: "Beyond 30 days" }
    ],
    content: []
  },
  {
    id: 8,
    title: "Customer Satisfaction Metrics",
    subtitle: "Building Loyalty and Value",
    type: 'metrics',
    metrics: [
      { label: "CSAT Score", target: "> 8.5", value: 8.8, unit: 'score', description: "Client satisfaction Grade A" },
      { label: "NPS", target: "> 90", value: 92, unit: 'score', description: "Excellent net promoter score" },
      { label: "Repeat Business", target: "> 70%", value: 72, unit: '%', description: "From existing clients" },
      { label: "Value-Add Stories", target: "1/Project", value: 1, unit: 'score', description: "Above & beyond impact stories" }
    ],
    content: ["> 95% Green Project Health (RAG)"]
  },
  {
    id: 9,
    title: "Delivery Excellence Metrics",
    subtitle: "Predictability and Quality",
    type: 'metrics',
    metrics: [
      { label: "On-Time Delivery", target: "> 95%", value: 97, unit: '%', description: "Milestones met as per schedule" },
      { label: "Quality Index", target: "< 5%", value: 4, unit: '%', description: "Defect leakage into UAT" },
      { label: "Automation Coverage", target: "> 90%", value: 91, unit: '%', description: "Testing, CI/CD, deployments" },
      { label: "SLA Compliance", target: "100%", value: 100, unit: '%', description: "Zero tolerance for breaches" }
    ],
    content: ["Proactive tracking and mitigation of issues & risks"]
  },
  {
    id: 10,
    title: "Technical Excellence Metrics",
    subtitle: "Maturity and Thought Leadership",
    type: 'metrics',
    metrics: [
      { label: "Skill Maturity Index", target: "> 3.5", value: 3.8, unit: 'score', description: "Average scale of 1-5" },
      { label: "Certification Velocity", target: "2/Year", value: 2, unit: 'score', description: "Certs per engineer per year" },
      { label: "Asset / IP Contribution", target: "1/Quarter", value: 1, unit: 'score', description: "Reusable framework contribution" },
      { label: "Thought Leadership", target: "2/Month", value: 2, unit: 'score', description: "Blogs or sessions per month" }
    ],
    content: ["Continuous learning culture"]
  },
  {
    id: 11,
    title: "AI-First & Automation Mindset",
    subtitle: "Modernizing the Delivery Pipeline",
    type: 'vision',
    content: [
      "AI-assisted development and testing",
      "Automation over manual processes",
      "Reusable accelerators by default",
      "Continuous improvement mindset"
    ],
    highlight: "Goal: Faster delivery, higher quality, lower cost"
  },
  {
    id: 12,
    title: "Practice Managers – ✅ DO’s",
    subtitle: "Excellence in Ownership and Action",
    type: 'dos-donts',
    dos: [
      "Lead by example in discipline, ownership, and accountability",
      "Run the practice with structure – clear plans, owners, and priorities",
      "Track metrics weekly (utilization, bench, delivery health, CSAT)",
      "Conduct disciplined meetings with agenda, decisions, and actions",
      "Be proactive – surface risks and capacity issues early",
      "Balance people and delivery – performance with sustainability",
      "Use data for decisions, not assumptions",
      "Invest in skills, automation, and reusable assets",
      "Communicate clearly with leadership, teams, and clients"
    ],
    donts: [],
    content: []
  },
  {
    id: 13,
    title: "Practice Managers – ❌ DON’Ts",
    subtitle: "Common Pitfalls to Avoid",
    type: 'dos-donts',
    dos: [],
    donts: [
      "Don’t run meetings without outcomes or ownership",
      "Don’t hide issues or delay escalations",
      "Don’t overwork high performers to compensate for poor planning",
      "Don’t ignore bench ageing or skill gaps",
      "Don’t micromanage delivery – trust leads, inspect via metrics",
      "Don’t optimize short-term utilization at the cost of quality or morale",
      "Don’t treat reporting and documentation as an afterthought"
    ],
    content: []
  },
  {
    id: 14,
    title: "Final Message to Practice Managers / Technical Leads",
    subtitle: "You Are Owners, Not Coordinators",
    type: 'closing',
    content: [
      "Own outcomes, not activities",
      "Measure what matters",
      "Act early, not react late",
      "Build teams, not just projects"
    ],
    highlight: "Our North Star: Profitable growth with exceptional people and delighted customers"
  }
];
