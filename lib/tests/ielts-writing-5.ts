import type { WritingTest } from "./writing-types";

export const ieltsWriting5: WritingTest = {
  id: "ielts-writing-5",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 5",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The bar chart below shows the average number of hours per week spent on leisure activities by different age groups in the UK in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The chart below shows the average weekly hours spent on four leisure activities by four age groups in the UK in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Bar chart showing average weekly hours spent on leisure activities by age group in the UK in 2022. Four age groups (18–25, 26–40, 41–60, 60+) are compared across four activities.

Watching TV:
• 18–25: 12 hours
• 26–40: 15 hours
• 41–60: 20 hours
• 60+: 28 hours

Exercising:
• 18–25: 9 hours
• 26–40: 6 hours
• 41–60: 5 hours
• 60+: 4 hours

Socialising:
• 18–25: 11 hours
• 26–40: 8 hours
• 41–60: 6 hours
• 60+: 5 hours

Reading:
• 18–25: 3 hours
• 26–40: 4 hours
• 41–60: 6 hours
• 60+: 9 hours

Key observations:
• TV watching increases consistently with age; the 60+ group watches more than twice as much as the 18–25 group.
• Exercising and socialising both decline with age; youngest group exercises most (9 hrs) and socialises most (11 hrs).
• Reading increases with age, with the 60+ group reading three times as much as 18–25-year-olds.
• Overall, the 60+ group spends the most total leisure hours, dominated by TV viewing.`,
      chartData: {
        type: "bar",
        title: "Average Weekly Leisure Hours by Age Group and Activity — UK, 2022",
        xAxisLabel: "Age Group",
        yAxisLabel: "Hours per week",
        unit: "hrs",
        series: [
          { key: "watchingTV", label: "Watching TV", color: "#22d3ee" },
          { key: "exercising", label: "Exercising", color: "#f59e0b" },
          { key: "socialising", label: "Socialising", color: "#10b981" },
          { key: "reading", label: "Reading", color: "#f43f5e" },
        ],
        data: [
          { label: "18–25", watchingTV: 12, exercising: 9, socialising: 11, reading: 3 },
          { label: "26–40", watchingTV: 15, exercising: 6, socialising: 8, reading: 4 },
          { label: "41–60", watchingTV: 20, exercising: 5, socialising: 6, reading: 6 },
          { label: "60+", watchingTV: 28, exercising: 4, socialising: 5, reading: 9 },
        ],
      },
      modelAnswer: `The bar chart compares the average number of hours per week that four age groups in the UK spent on four leisure activities — watching TV, exercising, socialising, and reading — in 2022.

Overall, TV watching was the most time-consuming leisure activity across all age groups and increased markedly with age, while exercising and socialising followed the opposite trend. Reading also rose with age, though from a relatively low base.

The most pronounced pattern was in television viewing. The 60+ age group watched an average of 28 hours per week, compared to just 12 hours among 18–25-year-olds, with the 26–40 and 41–60 groups recording intermediate figures of 15 and 20 hours respectively. Reading showed a similar age-related rise, growing from 3 hours in the youngest group to 9 hours among those aged 60 and over.

In contrast, exercise hours declined steadily across the age groups, falling from 9 hours per week among 18–25-year-olds to only 4 hours in the 60+ category. Socialising followed a comparable downward pattern, from 11 hours in the youngest group to just 5 hours among the oldest.

In summary, younger adults devoted comparatively more time to active and social leisure, while older adults allocated significantly greater hours to screen-based and reading activities.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers all four activities and age groups; identifies the main trends such as the rise in TV viewing and decline in exercise with age; data is cited but some comparisons could be more precisely developed.",
          band8: "Clearly reports all main features with accurate data; effectively identifies contrasting trends (increasing vs. decreasing with age) and provides a well-structured overview with supporting figures.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Information is organised logically by trend or activity; cohesive devices (e.g. 'in contrast', 'similarly') are used appropriately.",
          band8: "Ideas are sequenced clearly and cohesion is handled naturally; paragraphing separates overview, rising trends, and declining trends effectively.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses appropriate vocabulary for describing trends and comparisons (e.g. 'declined steadily', 'intermediate figures'); minor imprecision does not impede understanding.",
          band8: "Employs a wide range of precise descriptive vocabulary (e.g. 'pronounced pattern', 'markedly', 'comparable downward pattern'); collocations are accurate and varied.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses comparative structures and complex sentences competently; occasional minor errors do not affect clarity.",
          band8: "Consistently accurate grammar with a wide range of structures including comparatives, passives, and subordinate clauses; errors are rare.",
        },
      ],
    },
    {
      id: 2,
      type: "ielts_task2",
      taskLabel: "Task 2 — Academic Writing",
      instructions:
        "Write about the following topic. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      timeSeconds: 2400,
      minWords: 250,
      prompt:
        "In many countries, the gap between the rich and the poor is increasing. What are the causes of this problem and what measures could be taken to reduce it?",
      modelAnswer: `Growing economic inequality is one of the defining challenges of the twenty-first century. In countries as varied as the United States, the United Kingdom, and India, the gap between the wealthiest and the most economically vulnerable citizens has widened considerably in recent decades. This essay examines the principal causes of this trend and considers measures that governments and societies could adopt to address it.

Several factors drive rising inequality. Technological change is perhaps the most significant; automation and digitalisation have created enormous wealth for those with skills and capital in technology sectors, while displacing workers in routine manufacturing and service roles. Globalisation has compounded this effect by enabling corporations to relocate production to lower-wage economies, undermining the bargaining power of domestic workers. Furthermore, tax policies in many countries have disproportionately benefited the wealthy: reduced rates on capital gains and corporate profits allow high earners to accumulate assets far more rapidly than wage-dependent workers. Inheritance and access to quality education also perpetuate inequality across generations, creating structural barriers that are difficult to overcome.

To tackle these issues, a combination of policy interventions is required. Progressive taxation — including higher rates on unearned income and inherited wealth — can redistribute resources more equitably. Investing in high-quality public education, particularly in disadvantaged communities, addresses the skills gap that underlies much wage inequality. Strengthening labour protections and minimum wage legislation ensures that economic growth translates into broader wage gains. Finally, expanding social safety nets — including healthcare and housing support — prevents the poorest households from falling further behind during economic downturns.

In conclusion, rising inequality stems from interconnected economic, technological, and policy-related forces. While no single measure will resolve the issue, governments that combine redistributive taxation, education investment, and robust labour protections are best positioned to build more equitable societies.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses both causes and solutions adequately; presents relevant ideas with some development, though the connection between causes and recommended solutions could be more explicitly drawn.",
          band8: "Fully addresses both parts of the task; causes are clearly identified and logically linked to specific, well-developed policy solutions; position is consistent and well-supported throughout.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is clearly structured with separate paragraphs for causes and solutions; cohesive devices are used appropriately without being mechanical.",
          band8: "Logical progression is maintained throughout; the relationship between causes and solutions is clearly signposted; paragraphing and cohesion are handled with sophistication.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses relevant economic and policy vocabulary (e.g. 'automation', 'bargaining power', 'progressive taxation'); occasional imprecision does not hinder communication.",
          band8: "Employs a wide and precise range of topic-specific vocabulary (e.g. 'redistributive taxation', 'structural barriers', 'disproportionately benefited'); collocations are consistently accurate.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses complex sentence structures including relative clauses and passive voice; errors are minor and infrequent.",
          band8: "Demonstrates wide grammatical range; sentences are predominantly error-free; sophisticated constructions such as participial phrases and conditionals are used accurately.",
        },
      ],
    },
  ],
};
