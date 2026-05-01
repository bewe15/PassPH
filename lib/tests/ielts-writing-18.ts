import type { WritingTest } from "./writing-types";

export const ieltsWriting18: WritingTest = {
  id: "ielts-writing-18",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 18",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "You should spend about 20 minutes on this task. The chart below shows the percentage of people aged 65 and over in the total population for five countries in 2000 and 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The bar chart below shows the percentage of people aged 65 and over as a proportion of the total population for Australia, Japan, the USA, Brazil, and Nigeria in 2000 and 2023.",
      chartDescription: `Bar chart — Percentage of population aged 65 and over, 2000 and 2023:
Australia: 2000 → 12.4%, 2023 → 16.8%
Japan:     2000 → 17.3%, 2023 → 29.1%
USA:       2000 → 12.4%, 2023 → 17.0%
Brazil:    2000 →  5.5%, 2023 →  9.8%
Nigeria:   2000 →  2.9%, 2023 →  3.4%
Note: Japan is the highest in both years; Nigeria is the lowest in both years.`,
      modelAnswer: `The bar chart compares the proportion of people aged 65 and over in five countries' populations for the years 2000 and 2023.

Overall, all five countries recorded an increase in their elderly populations over the period. Japan consistently had the highest share of older residents, while Nigeria remained the lowest across both years.

In 2000, Japan already had the largest proportion of people aged 65 and over at 17.3%, a figure that rose dramatically to 29.1% by 2023, making it by far the most aged society among the five nations. Australia and the USA shared an identical figure of 12.4% in 2000 and recorded similar growth by 2023, reaching 16.8% and 17.0% respectively.

In contrast, Brazil and Nigeria had considerably smaller elderly populations. Brazil's proportion almost doubled from 5.5% in 2000 to 9.8% in 2023, suggesting accelerating demographic ageing. Nigeria, however, recorded the smallest increase of all, rising only marginally from 2.9% to 3.4%, reflecting its younger overall population structure.

In summary, while ageing is a global trend evident across all five countries, the pace and scale differ considerably. Japan leads with a near-doubling of its already-high 2000 figure, whereas Nigeria's proportion has remained comparatively stable and very low.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7:
            "Covers the main trends and includes relevant comparisons; all key data points referenced.",
          band8:
            "Accurately highlights all significant features with well-chosen data; comparisons are precise and insightful.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Information is logically organised; cohesive devices used effectively with occasional lapses.",
          band8:
            "Paragraphing is skilful; cohesion is seamless and progression is clear throughout.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Good range of vocabulary; some less common items used; minor inaccuracies do not impede communication.",
          band8:
            "Wide lexical range; fluent and natural use of vocabulary; very few errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Variety of complex structures used; mostly accurate with only occasional errors.",
          band8:
            "Wide range of structures; errors are rare and do not affect meaning.",
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
        "Some people think that the best way to improve road safety is to increase the minimum age at which young people are allowed to drive a car. To what extent do you agree or disagree?",
      modelAnswer: `Road traffic accidents remain one of the leading causes of injury and death worldwide, and debate continues about the most effective countermeasures. Some argue that raising the minimum driving age is the single best solution. While I accept that age is one relevant factor, I largely disagree that this measure alone is the most effective approach.

Proponents of a higher minimum age point to neurological evidence suggesting that the prefrontal cortex, which governs risk assessment and impulse control, does not fully mature until the mid-twenties. Studies in several countries consistently show that drivers aged 16 to 19 are disproportionately involved in fatal crashes compared with older cohorts, so delaying licensure could statistically reduce these incidents. Some jurisdictions have already moved their minimum age from 16 to 18 with measurable reductions in youth fatalities.

However, focusing exclusively on age overlooks a range of more nuanced interventions. Graduated licensing systems, for instance, restrict new drivers from night-time driving or carrying multiple passengers during an initial period regardless of exact age, and evidence from New Zealand and the United States shows these schemes cut crashes significantly. Moreover, better driver education — emphasising hazard perception, defensive driving, and the dangers of distraction — addresses the underlying behavioural causes rather than simply delaying them. Infrastructure improvements such as clearer signage, better road lighting, and speed management systems benefit all road users and do not penalise young people.

In addition, raising the minimum age carries social costs. Many young people in rural areas or those from lower-income families rely on independent driving for employment and education access; restricting this could disproportionately disadvantage them.

In conclusion, while an older minimum driving age may contribute modestly to improved road safety, it is neither sufficient nor the most effective solution in isolation. A multi-faceted strategy combining graduated licensing, quality education, and infrastructure improvements is more likely to achieve meaningful reductions in road casualties.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7:
            "Clear position throughout; main ideas developed with relevant support; prompt fully addressed.",
          band8:
            "Well-developed argument; position is nuanced and consistently maintained; ideas are extended and illustrated effectively.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Logical structure; paragraphing appropriate; range of cohesive devices used with only occasional imprecision.",
          band8:
            "Cohesion is managed skilfully; paragraphs are well-developed and transitions are fluent.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Sufficient range of vocabulary for flexible expression; some less common items; minor spelling/word choice errors.",
          band8:
            "Wide, precise vocabulary; natural collocation; very occasional minor errors only.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Variety of structures; frequent error-free sentences; errors do not reduce communication.",
          band8:
            "Wide grammatical range; rare minor errors; complex sentences handled with confidence.",
        },
      ],
    },
  ],
};
