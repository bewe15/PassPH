import type { WritingTest } from "./writing-types";

export const ieltsWriting12: WritingTest = {
  id: "ielts-writing-12",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 12",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The chart below shows the percentage of students achieving top grades in Mathematics, Science, Reading, and Arts across five countries in 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The bar chart below shows the percentage of students achieving top grades in Mathematics, Science, Reading, and Arts across five countries (Finland, Singapore, Australia, Brazil, Kenya) in 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Bar chart: Percentage of Students Achieving Top Grades by Subject and Country, 2021

Countries: Finland, Singapore, Australia, Brazil, Kenya
Subjects: Mathematics, Science, Reading, Arts
Y-axis: Percentage (%), range 0–80%

Data points (% of students achieving top grades):

Mathematics:
- Finland: 58%
- Singapore: 75%
- Australia: 45%
- Brazil: 22%
- Kenya: 18%

Science:
- Finland: 62%
- Singapore: 70%
- Australia: 48%
- Brazil: 25%
- Kenya: 20%

Reading:
- Finland: 70%
- Singapore: 65%
- Australia: 52%
- Brazil: 30%
- Kenya: 28%

Arts:
- Finland: 65%
- Singapore: 50%
- Australia: 55%
- Brazil: 40%
- Kenya: 35%

Key observations:
- Singapore leads in Mathematics and Science; Finland leads in Reading.
- Brazil and Kenya consistently record the lowest percentages across all subjects.
- Arts shows the narrowest gap between countries (18–65% vs. 18–75% in Maths).
- Finland and Singapore are the top two performers overall.
- Kenya scores highest in Arts (35%) relative to its other subjects.`,
      chartData: {
        type: "bar",
        title: "Students Achieving Top Grades (%) by Subject and Country — 2021",
        xAxisLabel: "Country",
        yAxisLabel: "Percentage (%)",
        unit: "%",
        series: [
          { key: "mathematics", label: "Mathematics", color: "#22d3ee" },
          { key: "science", label: "Science", color: "#f59e0b" },
          { key: "reading", label: "Reading", color: "#10b981" },
          { key: "arts", label: "Arts", color: "#8b5cf6" },
        ],
        data: [
          { label: "Finland", mathematics: 58, science: 62, reading: 70, arts: 65 },
          { label: "Singapore", mathematics: 75, science: 70, reading: 65, arts: 50 },
          { label: "Australia", mathematics: 45, science: 48, reading: 52, arts: 55 },
          { label: "Brazil", mathematics: 22, science: 25, reading: 30, arts: 40 },
          { label: "Kenya", mathematics: 18, science: 20, reading: 28, arts: 35 },
        ],
      },
      modelAnswer: `The bar chart compares the proportion of students earning top grades in four subjects — Mathematics, Science, Reading, and Arts — across Finland, Singapore, Australia, Brazil, and Kenya in 2021.

Overall, Singapore and Finland dominated academic performance, while Brazil and Kenya consistently recorded the lowest achievement rates. Arts displayed the narrowest gap between the highest and lowest-performing nations.

Singapore led in Mathematics and Science, with 75% and 70% of students respectively attaining top grades. Finland was close behind in Science (62%) but actually outperformed Singapore in Reading, achieving the highest figure of 70% compared to Singapore's 65%. Australia occupied a middle position in all four subjects, ranging from 45% in Mathematics to 55% in Arts.

Brazil and Kenya lagged significantly behind in most areas. In Mathematics, only 22% and 18% of students respectively achieved top grades — less than a quarter of Singapore's figure. However, the gap narrowed considerably in Arts, where Brazil reached 40% and Kenya 35%, suggesting that creative subjects may be more accessible across different educational systems.

Notably, Arts was the one subject where the ranking shifted; Australia (55%) surpassed Singapore (50%), and Kenya's performance relative to the other countries improved markedly. These patterns suggest that high-attaining nations such as Singapore and Finland excel particularly in STEM subjects, while Arts achievement is more evenly distributed globally.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Reports the main trends across countries and subjects with accurate data and relevant comparisons.",
          band8: "Comprehensively covers key features including subject-specific rankings and the narrowing gap in Arts, with precise data.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Well-organised with a clear overview paragraph; cohesive devices used appropriately.",
          band8: "Seamless paragraph transitions; each section builds logically on the last with varied and accurate linking.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Appropriate range of vocabulary for describing proportions and comparisons; occasional repetition.",
          band8: "Varied and precise lexis; natural use of synonyms and topic-specific language throughout.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good control of complex structures; minor errors do not impede communication.",
          band8: "Consistently accurate with a wide range of sentence structures; rare errors are inconsequential.",
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
        "Some people think that zoos are cruel and should be closed down. Others argue that zoos play an important role in conservation. Discuss both views and give your own opinion.",
      modelAnswer: `The question of whether zoos should continue to operate is one that provokes strong feelings on both sides. While critics argue that keeping animals in captivity is inherently inhumane, supporters maintain that modern zoos make a vital contribution to wildlife conservation. This essay examines both perspectives before presenting my own view.

Those who oppose zoos argue that confining wild animals to artificial enclosures causes significant psychological distress. Large, wide-ranging species such as elephants and big cats may develop repetitive, stress-related behaviours — known as stereotypies — when denied the space and stimulation of their natural habitats. Critics also contend that zoo attendance normalises the idea of animals as entertainment, reinforcing an exploitative relationship between humans and wildlife. From this standpoint, conservation goals could be better achieved through protecting natural habitats and funding field research.

Proponents of zoos, however, point to their substantial conservation achievements. Many institutions participate in carefully managed breeding programmes that have helped pull species back from the brink of extinction; the Arabian oryx and California condor are frequently cited examples. Accredited zoos also invest heavily in scientific research, staff public education programmes, and provide funding for in-situ conservation projects. For urban populations with little access to nature, zoos can foster the sense of connection with wildlife that motivates future conservationists and donors.

In my opinion, the case for well-regulated, accredited zoos outweighs the arguments against them, provided that animal welfare standards are rigorously enforced. Poorly run facilities that prioritise profit over welfare deserve criticism, but modern conservation zoos serve a demonstrably important function. Rather than closing zoos entirely, society should focus on raising standards and holding institutions accountable.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Discusses both views clearly and provides a personal opinion with supporting reasons.",
          band8: "Both views are fully and fairly explored; the personal position is well-substantiated and logically integrated.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Clear four-paragraph structure; cohesive devices link ideas effectively within and between paragraphs.",
          band8: "Exceptionally well-organised; topic sentences anchor each paragraph and transitions are fluent.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary related to conservation and animal welfare; few errors.",
          band8: "Sophisticated lexis used with precision; phrases like 'stereotypies' and 'in-situ conservation' demonstrate depth.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of structures used with generally high accuracy; isolated errors present.",
          band8: "Consistently accurate and varied grammar; complex structures used naturally and effectively.",
        },
      ],
    },
  ],
};
