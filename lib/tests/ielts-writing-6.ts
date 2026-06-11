import type { WritingTest } from "./writing-types";

export const ieltsWriting6: WritingTest = {
  id: "ielts-writing-6",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 6",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The table below shows international tourist arrivals and tourism revenue for five countries in 2015 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The table below shows the number of international tourist arrivals (millions) and tourism revenue (USD billions) for five countries in 2015 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Table: International Tourist Arrivals and Tourism Revenue — 2015 and 2022

Country | Arrivals 2015 (millions) | Arrivals 2022 (millions) | Revenue 2015 (USD bn) | Revenue 2022 (USD bn)
France  |          84.5            |          79.4            |         45.9          |         55.3
Spain   |          68.2            |          71.7            |         56.5          |         73.9
USA     |          77.5            |          50.9            |         205.4         |         190.8
China   |          56.9            |          18.0            |         114.1         |         37.5
Italy   |          50.7            |          49.6            |         39.4          |         49.8

Key observations:
• France had the highest arrivals in 2015 (84.5m) but saw a slight decline by 2022 (79.4m).
• Spain increased both arrivals and revenue between 2015 and 2022.
• The USA had by far the highest revenue in both years despite a significant drop in arrivals (77.5m to 50.9m).
• China experienced the sharpest decline in both arrivals (from 56.9m to 18.0m) and revenue (from USD 114.1bn to USD 37.5bn).
• Italy remained relatively stable in arrivals while revenue grew modestly.
• Revenue per arrival was highest in the USA in both years.`,
      chartData: {
        type: "table",
        title: "International Tourist Arrivals (millions) and Revenue (USD bn) — 2015 & 2022",
        tableHeaders: ["Country", "Arrivals 2015 (m)", "Arrivals 2022 (m)", "Revenue 2015 (USD bn)", "Revenue 2022 (USD bn)"],
        tableRows: [
          ["France", 84.5, 79.4, 45.9, 55.3],
          ["Spain", 68.2, 71.7, 56.5, 73.9],
          ["USA", 77.5, 50.9, 205.4, 190.8],
          ["China", 56.9, 18.0, 114.1, 37.5],
          ["Italy", 50.7, 49.6, 39.4, 49.8],
        ],
      },
      modelAnswer: `The table presents data on international tourist arrivals and corresponding revenue for five countries — France, Spain, the USA, China, and Italy — in 2015 and 2022.

Overall, the USA consistently generated the highest tourism revenue despite a considerable fall in visitor numbers, while China experienced the most dramatic declines across both measures. Spain was the only country to record growth in both arrivals and revenue over the period.

In 2015, France attracted the greatest number of visitors at 84.5 million, though this figure declined slightly to 79.4 million by 2022. The USA, which ranked second for arrivals in 2015 with 77.5 million, saw a substantial drop to 50.9 million in 2022, yet it still produced the highest revenue in both years — USD 205.4 billion and USD 190.8 billion respectively. China's figures fell most steeply: arrivals collapsed from 56.9 million to just 18 million, and revenue dropped from USD 114.1 billion to USD 37.5 billion.

Spain and Italy presented a contrasting picture. Spain grew modestly in arrivals (from 68.2 to 71.7 million) while its revenue increased more markedly, from USD 56.5 to USD 73.9 billion. Italy's arrivals remained broadly stable at around 50 million, with revenue rising from USD 39.4 to USD 49.8 billion.

In summary, the data reveals considerable variation in tourism performance across the five countries, with China's sharp decline standing in contrast to Spain's consistent growth.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Reports the main features from the table accurately; notes key changes between 2015 and 2022 for most countries; may not fully develop comparisons across all five countries.",
          band8: "Accurately and comprehensively covers all countries; effectively highlights the contrast between China's decline and Spain's growth; the anomaly of US high revenue despite falling arrivals is noted and explained.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Information is organised with a clear overview followed by specific country comparisons; cohesive devices are used appropriately.",
          band8: "Logically structured with a clear overview and well-managed progression through country comparisons; cohesion is seamless and paragraphing is purposeful.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses adequate vocabulary to describe numerical changes (e.g. 'declined slightly', 'dropped considerably'); some variety in expression.",
          band8: "Employs precise and varied language (e.g. 'collapsed', 'contrasting picture', 'most steeply'); language choices enhance clarity and avoid repetition effectively.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of structures to present comparative data; minor grammatical errors do not impede communication.",
          band8: "Grammatically accurate throughout; uses complex sentence structures including relative clauses and nominalisations to describe and compare data with precision.",
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
        "Some people think that parents should teach children how to be good members of society. Others, however, believe that school is the place to learn this. Discuss both views and give your own opinion.",
      modelAnswer: `The question of where children should learn the values and behaviours necessary for contributing positively to society is one that has long engaged educators and parents alike. While some argue that this responsibility rests primarily with families, others contend that schools are better placed to fulfil this role. In my view, both institutions play indispensable but distinct parts in a child's social development.

Those who emphasise the role of parents argue that the home environment is where a child's foundational values are first established. Parents are the child's earliest and most consistent role models, and research in developmental psychology consistently indicates that behaviours such as empathy, honesty, and respect are most durably shaped during the early years of life within the family unit. In cultures where community and family bonds are particularly strong, such as in many East Asian and Mediterranean societies, the transmission of civic values through family traditions and parental guidance is deeply embedded.

On the other hand, schools offer structured, systematic exposure to social norms and diverse perspectives that families alone cannot provide. Through interactions with peers from different backgrounds, participation in group activities, and formal lessons in civics or social studies, students develop collaborative skills and an appreciation for democratic values. Teachers are trained to model and reinforce socially responsible behaviour in consistent, evidence-informed ways.

In my opinion, the most effective approach recognises that parents and schools are complementary rather than competing influences. Parents instil core values during early childhood, while schools build upon this foundation and extend it to the broader social world. Neither can fully substitute for the other.

In conclusion, teaching children to be good members of society is a shared responsibility. Policies that encourage strong home-school partnerships are most likely to produce well-rounded, socially aware individuals.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Discusses both views and provides a personal opinion; arguments for each side are developed with some supporting examples, though one perspective may be slightly less developed than the other.",
          band8: "Both views are thoroughly and fairly discussed with specific supporting examples; the writer's own opinion is clearly stated and logically integrated into the conclusion.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is clearly organised with a distinct paragraph for each viewpoint plus a concluding opinion; transitions between sections are clear.",
          band8: "Logical structure is maintained throughout; the relationship between the two views and the writer's synthesis is elegantly managed; cohesive devices are varied and natural.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses relevant vocabulary related to education and social development (e.g. 'role models', 'civic values', 'collaborative skills'); occasional imprecision does not hinder meaning.",
          band8: "Employs sophisticated and precise vocabulary (e.g. 'developmental psychology', 'indispensable', 'evidence-informed'); lexical range is wide and collocations are consistently accurate.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Demonstrates a good range of grammatical structures; errors are minor and do not detract from the overall message.",
          band8: "Grammatically accurate and varied throughout; complex structures including passive voice, relative clauses, and nominal phrases are used confidently and correctly.",
        },
      ],
    },
  ],
};
