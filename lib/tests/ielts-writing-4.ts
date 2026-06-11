import type { WritingTest } from "./writing-types";

export const ieltsWriting4: WritingTest = {
  id: "ielts-writing-4",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 4",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The charts below show the proportion of household energy consumption by source in Germany in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The pie charts below compare the share of household energy consumption by source in Germany in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Two pie charts comparing household energy consumption by source in Germany in 2000 and 2020.

2000 data:
• Coal: 35% (largest share)
• Gas: 28%
• Nuclear: 20%
• Renewables: 10%
• Oil: 7%

2020 data:
• Renewables: 38% (largest share)
• Gas: 25%
• Coal: 20%
• Nuclear: 12%
• Oil: 5%

Key changes between 2000 and 2020:
• Renewables rose dramatically from 10% to 38%, becoming the dominant energy source.
• Coal fell sharply from 35% to 20%, dropping from first to third place.
• Gas declined moderately from 28% to 25%.
• Nuclear decreased slightly from 20% to 12%.
• Oil fell marginally from 7% to 5%.

Overall: The charts reveal a major shift away from fossil fuels and nuclear energy toward renewable sources over the two-decade period.`,
      chartData: {
        type: "table",
        title: "Household Energy Consumption by Source — Germany, 2000 vs 2020",
        tableHeaders: ["Energy Source", "2000 (%)", "2020 (%)"],
        tableRows: [
          ["Coal", "35%", "20%"],
          ["Gas", "28%", "25%"],
          ["Nuclear", "20%", "12%"],
          ["Renewables", "10%", "38%"],
          ["Oil", "7%", "5%"],
        ],
      },
      modelAnswer: `The two pie charts illustrate how the sources of household energy consumption in Germany changed between 2000 and 2020.

Overall, the most striking development over this period was the dramatic rise of renewables and the significant decline of coal, which effectively reversed their positions as the dominant and minor energy sources respectively.

In 2000, coal was the leading energy source, accounting for 35% of household consumption, followed by gas at 28% and nuclear at 20%. Renewables represented only a modest 10%, while oil contributed the smallest share at 7%.

By 2020, the energy mix had been transformed considerably. Renewables had surged to become the largest source at 38%, an increase of 28 percentage points. Coal, by contrast, fell sharply to just 20%, dropping from first to third position. Gas declined moderately from 28% to 25%, while nuclear also decreased, from 20% to 12%. Oil remained the smallest contributor, falling slightly to 5%.

In conclusion, Germany's household energy consumption underwent a pronounced structural shift over the two decades, with renewable energy displacing coal as the primary source, reflecting the country's transition toward cleaner energy production.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers both pie charts and identifies the key changes; presents main features including the rise of renewables and fall of coal with supporting data, though some comparisons may be underdeveloped.",
          band8: "Clearly and accurately covers both charts; highlights the reversal in positions between coal and renewables; supports all key features with precise data and provides a well-framed overview.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Organises information logically across paragraphs; uses cohesive devices such as 'by contrast' and 'meanwhile' appropriately, though occasionally mechanically.",
          band8: "Information flows logically from overview to specific comparisons; paragraphing is well-managed; cohesive devices are used naturally and unobtrusively.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses a sufficient range of vocabulary to describe proportions and changes (e.g. 'declined moderately', 'modest share'); occasional imprecision in word choice does not impede clarity.",
          band8: "Employs a wide range of precise vocabulary (e.g. 'surged', 'transformed considerably', 'pronounced structural shift'); collocations are accurate and appropriately varied.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of sentence structures including comparatives and passive forms; errors are minor and do not affect communication.",
          band8: "Demonstrates confident use of complex structures, passive voice, and comparative constructions; sentences are predominantly error-free.",
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
        "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?",
      modelAnswer: `The idea of making unpaid community service mandatory for high school students has attracted considerable debate among educators and policymakers. While I understand the concerns raised by opponents, I broadly agree that compulsory community service can be a valuable component of secondary education, provided it is implemented thoughtfully.

Those who favour mandatory volunteering argue that it cultivates a sense of civic responsibility in young people at a formative stage of their development. When students work in food banks, environmental projects, or care facilities, they gain direct exposure to social issues that classroom instruction alone cannot convey. This experiential learning can foster empathy, teamwork, and an appreciation for diverse communities. Countries such as the United States, where many schools already incorporate service-learning requirements, suggest that such programmes can be integrated successfully into secondary curricula without undermining academic achievement.

However, critics contend that obligatory volunteering is paradoxical — that community service loses its moral value when coerced rather than freely chosen. They also point to logistical challenges: not all students have equal access to suitable placements, and students with part-time jobs or family responsibilities may find the additional burden disproportionately demanding. These are legitimate concerns that programme designers must address through flexible scheduling and a range of placement options.

On balance, I believe the benefits outweigh the drawbacks. The key is to design programmes that offer genuine choice within a structured framework, allowing students to select activities aligned with their interests and circumstances. When managed well, community service enriches students' education, strengthens social cohesion, and produces graduates who are more engaged and aware citizens.

In conclusion, mandatory community service, if implemented with appropriate flexibility and support, represents a worthwhile investment in the social and personal development of young people.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Clearly states a position and supports it with relevant reasoning; addresses the compulsory nature of the proposal and considers counterarguments, though development may be slightly uneven.",
          band8: "Presents a well-reasoned, nuanced position; addresses both the merits and the concerns of mandatory community service; arguments are fully developed and supported with specific examples.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is logically structured with a clear introduction, body paragraphs, and conclusion; cohesive devices are used appropriately across the response.",
          band8: "Ideas progress clearly and coherently; each paragraph has a distinct focus; cohesion is managed so fluently that it does not draw attention to itself.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses a good range of topic-specific vocabulary (e.g. 'civic responsibility', 'experiential learning'); occasional awkward collocations do not impede understanding.",
          band8: "Employs sophisticated vocabulary (e.g. 'paradoxical', 'disproportionately demanding', 'structured framework') accurately; lexical choices are precise and varied throughout.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a mix of simple and complex sentence structures; errors are infrequent and do not affect meaning.",
          band8: "Demonstrates wide grammatical range including conditionals, passive constructions, and subordinate clauses; near-error-free throughout the response.",
        },
      ],
    },
  ],
};
