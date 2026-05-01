import type { WritingTest } from "./writing-types";

export const ieltsWriting7: WritingTest = {
  id: "ielts-writing-7",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 7",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The line graph below shows the percentage of people in four countries who used the internet for online shopping between 2010 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The line graph below shows the percentage of people using the internet for online shopping in four countries (UK, Brazil, Japan, Nigeria) from 2010 to 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Line graph showing the percentage of internet users making online purchases in four countries from 2010 to 2022.

UK data points:
• 2010: 62%
• 2012: 68%
• 2014: 73%
• 2016: 78%
• 2018: 82%
• 2020: 87%
• 2022: 90%

Japan data points:
• 2010: 45%
• 2012: 51%
• 2014: 57%
• 2016: 62%
• 2018: 66%
• 2020: 70%
• 2022: 74%

Brazil data points:
• 2010: 18%
• 2012: 24%
• 2014: 31%
• 2016: 38%
• 2018: 46%
• 2020: 55%
• 2022: 63%

Nigeria data points:
• 2010: 4%
• 2012: 7%
• 2014: 12%
• 2016: 20%
• 2018: 31%
• 2020: 44%
• 2022: 58%

Key observations:
• The UK had the highest percentage throughout the period, rising from 62% to 90%.
• Japan maintained second position, growing steadily from 45% to 74%.
• Brazil grew substantially from 18% to 63%.
• Nigeria started lowest at 4% but grew most rapidly, reaching 58% by 2022 — an increase of 54 percentage points, the largest absolute gain.
• By 2022, the gap between all four countries had narrowed considerably compared to 2010.`,
      modelAnswer: `The line graph illustrates the proportion of people in four countries — the UK, Japan, Brazil, and Nigeria — who used the internet for online shopping between 2010 and 2022.

Overall, all four countries recorded significant growth over the period. The UK consistently led, while Nigeria, which began at the lowest level, experienced the fastest rate of increase, resulting in a considerable narrowing of the gap between the countries by 2022.

In 2010, the UK had by far the highest proportion of online shoppers at 62%, followed by Japan at 45%, Brazil at 18%, and Nigeria at a mere 4%. The UK continued its steady upward trajectory, reaching 90% by 2022, while Japan grew at a similar pace to finish at 74%.

Brazil and Nigeria showed more dramatic growth, particularly in the second half of the period. Brazil rose from 18% to 63%, while Nigeria's figure surged from just 4% to 58% — an increase of 54 percentage points, the largest absolute gain of any country. By 2022, the difference between the UK and Nigeria had narrowed from 58 percentage points to just 32.

In summary, while the UK retained its lead throughout, the rapid expansion of online shopping in Nigeria and Brazil signals a significant shift in digital commerce patterns in developing economies.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers all four countries and the overall upward trend; identifies the UK as consistently highest and Nigeria as fastest-growing; data is cited but the narrowing gap may not be fully explored.",
          band8: "Comprehensively addresses all key features including the narrowing gap and contrasting rates of growth; precise data supports all main points; overview is well-framed.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Information is logically organised, grouping countries with similar patterns; cohesive devices are used appropriately.",
          band8: "Clear and logical progression from overview to groupings by growth rate; cohesion is managed naturally; paragraphing reinforces the analytical structure.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses appropriate trend vocabulary (e.g. 'steady upward trajectory', 'dramatic growth'); some variety in phrasing across the response.",
          band8: "Employs a wide and precise range of vocabulary (e.g. 'surged', 'signals a significant shift', 'absolute gain'); avoids repetition through skilful lexical variation.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a range of sentence structures including comparatives and complex clauses; minor errors do not hinder communication.",
          band8: "Grammatically accurate throughout; complex structures including relative clauses, participle phrases, and comparatives are used correctly and fluently.",
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
        "Many cities are experiencing rapid population growth. What problems does this create and what solutions can be implemented?",
      modelAnswer: `Rapid urbanisation is one of the defining trends of the modern era. Cities from Lagos to Jakarta are absorbing millions of new residents each decade, creating pressures on infrastructure, housing, and the environment that demand urgent and coordinated responses. This essay examines the principal problems associated with rapid urban population growth and proposes a range of practical solutions.

The most immediate consequence of unplanned urban growth is a severe housing shortage. When populations expand faster than housing supply, prices rise sharply, forcing lower-income residents into overcrowded informal settlements that often lack adequate sanitation, clean water, and electricity. This in turn creates serious public health risks and deepens social inequality. Traffic congestion presents a related challenge: as more people settle in cities, road networks become overwhelmed, increasing journey times, air pollution, and the economic costs of productivity lost to commuting. Cities like Mumbai and Mexico City regularly rank among the world's most congested, illustrating the scale of this problem.

Environmental degradation is a further concern. Urban expansion frequently encroaches on green space and agricultural land, reduces biodiversity, and intensifies urban heat island effects, making cities hotter and more energy-intensive.

Addressing these challenges requires action on multiple fronts. Investment in affordable social housing, combined with policies that incentivise mixed-income residential development, can alleviate housing shortfalls. Expanding and improving public transport — including metro systems, bus rapid transit, and cycling infrastructure — can reduce car dependency. Strategic urban planning that designates protected green corridors and promotes high-density, mixed-use development can limit urban sprawl. Additionally, decentralisation policies that stimulate economic development in secondary cities and rural areas can reduce the pressure on primary urban centres.

In conclusion, rapid urban population growth creates interconnected social, infrastructural, and environmental problems. While no single solution is sufficient, a combination of housing investment, transport reform, and forward-looking urban planning offers the most viable path to sustainable and inclusive cities.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Identifies several problems and corresponding solutions; ideas are generally well developed with some specific examples cited.",
          band8: "Thoroughly addresses both problems and solutions; arguments are fully developed with concrete examples (e.g. Mumbai, Mexico City); solutions are clearly linked to the problems identified.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is clearly structured with a logical flow from problems to solutions; transitions are appropriate and paragraphing is consistent.",
          band8: "Information progresses logically and coherently; the link between problems and solutions is clearly maintained; cohesive devices are varied and unobtrusive.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses a good range of relevant vocabulary (e.g. 'urbanisation', 'informal settlements', 'urban sprawl'); occasional errors in word choice do not impede meaning.",
          band8: "Employs sophisticated vocabulary accurately (e.g. 'urban heat island', 'decentralisation', 'mixed-use development'); lexical range is wide and collocations are precise.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of sentence structures; grammatical control is generally strong with only minor errors.",
          band8: "Demonstrates wide grammatical range including complex noun phrases, passive constructions, and conditional structures; the response is predominantly error-free.",
        },
      ],
    },
  ],
};
