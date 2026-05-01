import type { WritingTest } from "./writing-types";

export const ieltsWriting13: WritingTest = {
  id: "ielts-writing-13",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 13",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The chart below shows how a city council budget of $50 million was distributed across departments in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The pie chart below shows how a city council budget of $50 million was distributed across departments — Education, Healthcare, Infrastructure, Social Services, and Administration — in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Pie chart: City Council Budget Distribution, 2023
Total budget: $50 million

Segments and values:

Education: 30% → $15,000,000
Healthcare: 25% → $12,500,000
Infrastructure: 20% → $10,000,000
Social Services: 15% → $7,500,000
Administration: 10% → $5,000,000

Key observations:
- Education receives the largest share at 30% ($15 million).
- Healthcare is the second largest at 25% ($12.5 million).
- Together, Education and Healthcare account for 55% of the total budget ($27.5 million).
- Infrastructure takes 20% ($10 million), the third largest allocation.
- Social Services receives 15% ($7.5 million).
- Administration has the smallest allocation at 10% ($5 million).
- The gap between the largest (Education, 30%) and smallest (Administration, 10%) departments is 20 percentage points.
- The three smaller departments (Infrastructure, Social Services, Administration) together account for 45% ($22.5 million).`,
      modelAnswer: `The pie chart illustrates the distribution of a $50 million city council budget across five departments — Education, Healthcare, Infrastructure, Social Services, and Administration — in 2023.

Overall, spending was concentrated in Education and Healthcare, which together accounted for more than half the total budget, while Administration received the smallest allocation of all.

Education was the single largest recipient, taking 30% of the budget — equivalent to $15 million. Healthcare followed closely with a 25% share ($12.5 million). Combined, these two departments consumed $27.5 million, or 55% of the entire council budget, reflecting the city's clear prioritisation of public services in these areas.

The remaining 45% was divided among three departments. Infrastructure received the third largest allocation at 20% ($10 million), while Social Services accounted for 15% ($7.5 million). Administration had the smallest share of all, at just 10% or $5 million — exactly one-third of the Education budget.

In summary, the budget reveals a strong emphasis on Education and Healthcare, with progressively smaller amounts allocated to operational and support departments. The gap of 20 percentage points between the largest and smallest allocations underlines the council's priorities in directing funds towards frontline public services.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Accurately reports all five segments with percentages and dollar values; makes relevant comparisons.",
          band8: "Fully covers all key features including combined totals and proportional relationships, with precise and insightful comparisons.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organised with an overview and body paragraphs; appropriate use of linking words.",
          band8: "Ideas are grouped meaningfully (e.g. top two vs. remaining three); transitions are smooth and varied.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Competent use of vocabulary for describing proportions; some variety in phrasing.",
          band8: "Precise and varied lexis; effective use of synonyms for 'proportion', 'share', and 'allocation'.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good range of structures with minor errors; meaning is always clear.",
          band8: "Wide grammatical range used accurately throughout; errors are rare and do not affect clarity.",
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
        "In many countries, people are moving away from rural areas to live in cities. What are the reasons for this and what problems can it cause?",
      modelAnswer: `Urbanisation — the movement of people from the countryside to cities — is one of the defining demographic trends of the modern era. Across the developing and developed world alike, rural populations are shrinking as urban centres grow. This essay explores the principal reasons behind this migration and examines the problems it creates.

The primary driver of rural-to-urban migration is economic opportunity. Cities typically concentrate employment in manufacturing, services, and technology, offering wages that far exceed those available in agriculture-dependent rural areas. Young people in particular are drawn by the prospect of better-paid, less physically demanding work. Beyond income, cities also provide superior access to education, healthcare, and infrastructure — factors that improve quality of life and long-term prospects for migrants and their children.

However, rapid and large-scale urbanisation generates serious problems. The most immediate is the strain placed on urban infrastructure. Housing shortages drive up rents and property prices, pushing low-income migrants into overcrowded informal settlements or slums, which lack adequate sanitation, clean water, and safety. Transport networks, hospitals, and schools struggle to absorb sudden population growth. Cities such as Lagos, Manila, and Mumbai illustrate these pressures at an extreme scale.

Simultaneously, rural areas suffer from depopulation. As younger, working-age residents depart, agricultural communities are left with ageing populations, reduced labour forces, and declining tax revenues — creating a cycle of further rural decline that makes remaining residents even more likely to leave.

In conclusion, urbanisation is fundamentally driven by economic and social opportunity, yet it brings significant costs to both city and countryside. Effective urban planning, investment in rural development, and regional economic diversification are needed to manage this transition sustainably.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Clearly addresses both causes and problems with relevant ideas and examples.",
          band8: "Fully and specifically explores multiple causes and a range of problems, including the cyclical nature of rural decline.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Well-organised with clear paragraphing; cohesive devices guide the reader effectively.",
          band8: "Logically sequenced ideas with fluent transitions; each paragraph has a distinct and well-developed focus.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of relevant vocabulary; some sophisticated word choices such as 'urbanisation' and 'depopulation'.",
          band8: "Varied and precise lexis used naturally; effective use of academic vocabulary and specific city examples.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Mix of simple and complex structures; generally accurate with occasional minor errors.",
          band8: "Wide range of structures used with consistent accuracy; errors are negligible.",
        },
      ],
    },
  ],
};
