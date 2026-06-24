import type { WritingTest } from "./writing-types";

export const ieltsWriting22: WritingTest = {
  id: "ielts-writing-22",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 22",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The line graph below shows youth unemployment rates (ages 15–24) in Japan, Spain, and South Africa from 2010 to 2020.",
      chartDescription: `The data shows the following trends (youth unemployment rate, %):

• Japan: Relatively stable throughout — 9.4% in 2010, peaked at 10.1% in 2012, then declined steadily to 4.6% by 2020, the lowest of the three countries.

• Spain: Dramatically high throughout — started at 41.6% in 2010, surged to a peak of 55.5% in 2013, then fell consistently to 32.5% by 2019 before a slight rise to 38.3% in 2020.

• South Africa: Consistently the highest — 51.2% in 2010, rose to 53.7% in 2014, and remained elevated, ending at 58.1% in 2020, the only country to show an overall increase.

Overall: All three countries had high youth unemployment, but South Africa and Spain were far above Japan throughout. Spain showed the most dramatic fluctuation while South Africa's rate worsened overall.`,
      chartData: {
        type: "line",
        title: "Youth Unemployment Rate (Ages 15–24, %) — Japan, Spain & South Africa, 2010–2020",
        xAxisLabel: "Year",
        yAxisLabel: "Youth Unemployment Rate (%)",
        unit: "%",
        series: [
          { key: "japan", label: "Japan", color: "#22d3ee" },
          { key: "spain", label: "Spain", color: "#f59e0b" },
          { key: "southAfrica", label: "South Africa", color: "#ef4444" },
        ],
        data: [
          { label: "2010", japan: 9.4, spain: 41.6, southAfrica: 51.2 },
          { label: "2011", japan: 9.7, spain: 46.4, southAfrica: 51.8 },
          { label: "2012", japan: 10.1, spain: 52.9, southAfrica: 52.6 },
          { label: "2013", japan: 9.8, spain: 55.5, southAfrica: 53.2 },
          { label: "2014", japan: 9.1, spain: 53.2, southAfrica: 53.7 },
          { label: "2015", japan: 8.2, spain: 48.3, southAfrica: 54.2 },
          { label: "2016", japan: 7.6, spain: 44.5, southAfrica: 54.7 },
          { label: "2017", japan: 6.8, spain: 38.7, southAfrica: 55.9 },
          { label: "2018", japan: 6.1, spain: 34.3, southAfrica: 56.4 },
          { label: "2019", japan: 5.3, spain: 32.5, southAfrica: 57.3 },
          { label: "2020", japan: 4.6, spain: 38.3, southAfrica: 58.1 },
        ],
      },
      modelAnswer: `The line graph illustrates youth unemployment rates among people aged 15 to 24 in Japan, Spain, and South Africa between 2010 and 2020.

Overall, all three countries maintained high levels of youth unemployment throughout the period. South Africa consistently recorded the highest rates, while Japan remained considerably lower than the other two nations and achieved the only sustained downward trend over the decade.

In 2010, Japan's youth unemployment stood at 9.4%, rising marginally to a peak of 10.1% in 2012 before declining steadily to just 4.6% by 2020 — a reduction of nearly five percentage points over the full period.

Spain's figures were dramatically higher throughout. Starting at 41.6% in 2010, the rate surged to a peak of 55.5% in 2013 before falling progressively to 32.5% in 2019. However, this improvement was partially reversed in 2020, when the rate climbed back to 38.3%, likely reflecting the impact of the global pandemic on Spain's labour market.

South Africa showed a troubling upward trajectory throughout the period. Beginning at 51.2% in 2010, the rate rose almost continuously, reaching 58.1% by 2020 — making it the only country in which youth unemployment worsened overall and the only one to end above its starting level.

In conclusion, Japan's labour market demonstrated significant improvement in youth employment over the decade, while Spain experienced extreme volatility and South Africa's persistently high rates continued to increase.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the requirements of the task; presents, highlights and illustrates key features with relevant data but may be slightly mechanical.",
          band8: "Covers the requirements of the task well; presents key features clearly and logically; includes relevant comparisons and provides an appropriate overview.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organises information with clear progression; uses a range of cohesive devices appropriately though not always accurately.",
          band8: "Sequences information and ideas logically; manages all aspects of cohesion well; uses paragraphing sufficiently and appropriately.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses sufficient range of vocabulary to allow flexibility and precision; may produce occasional errors in word choice but overall communicates clearly.",
          band8: "Uses a wide range of vocabulary fluently and flexibly to convey precise meanings; skilfully uses uncommon lexical items with only occasional inaccuracies.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of complex structures; produces frequent error-free sentences; errors are minor and do not affect communication.",
          band8: "Uses a wide range of structures; majority of sentences are error-free; makes only occasional errors or inappropriacies.",
        },
      ],
    },
    {
      id: 2,
      type: "ielts_task2",
      taskLabel: "Task 2 — Essay",
      instructions: "You should spend about 40 minutes on this task. Write about the following topic. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      timeSeconds: 2400,
      minWords: 250,
      prompt: "Many young people today spend a large part of their leisure time playing video games. Some people believe this has a negative effect on their development. Discuss both views and give your own opinion.",
      modelAnswer: `Video games have become one of the most popular forms of leisure activity among young people worldwide. While some argue that excessive gaming harms young people's development, others contend that it offers genuine cognitive and social benefits. In my view, the impact of video games depends largely on the context and extent of their use.

Those who are concerned about gaming's effects on young people point to several risks. Perhaps the most frequently cited is the displacement of more productive activities: time spent gaming may reduce hours available for physical exercise, face-to-face socialising, and academic study. Sedentary behaviour associated with prolonged gaming has been linked to health issues including obesity and poor posture. Furthermore, some games contain violent content that critics argue may desensitise players to aggression, and the addictive mechanics built into many modern titles — reward loops, in-game notifications, and social pressure — can make it difficult for young players to self-regulate their usage.

On the other hand, proponents of gaming highlight its potential developmental benefits. Strategy and role-playing games can strengthen problem-solving skills, logical reasoning, and spatial awareness. Multiplayer games cultivate teamwork, communication, and the ability to collaborate with people from diverse backgrounds — skills that are increasingly valued in professional environments. Research has also suggested that gaming can improve reaction times and the capacity to process complex information rapidly. Some educational games are explicitly designed to build literacy, numeracy, and critical thinking.

In my opinion, the issue is not gaming itself but the balance maintained between gaming and other activities. A young person who games for an hour or two daily while maintaining social relationships, physical activity, and academic commitments is unlikely to suffer negative consequences. Parents and educators should focus on promoting healthy habits rather than imposing blanket bans that may simply drive gaming underground.

In conclusion, while the risks of excessive gaming are real and should not be dismissed, video games also offer meaningful benefits. A balanced, supervised approach is preferable to outright condemnation.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses all parts of the task; presents a clear position throughout; presents and develops main ideas but may not always be fully extended or supported.",
          band8: "Sufficiently addresses all parts of the task; presents a well-developed response with relevant, extended and supported ideas.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organises information; uses a range of cohesive devices appropriately; presents a clear central topic in each paragraph.",
          band8: "Sequences information and ideas logically; uses cohesion in a way that attracts no attention; uses paragraphing sufficiently and appropriately.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses sufficient range of vocabulary to allow flexibility and precision; may produce occasional errors in word choice; collocations are generally used appropriately.",
          band8: "Uses a wide range of vocabulary fluently and flexibly; skilfully uses uncommon lexical items; occasional errors in word choice do not detract from overall quality.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of complex structures; produces frequent error-free sentences; has good control of grammar and punctuation but may make a few errors.",
          band8: "Uses a wide range of structures; majority of sentences are error-free; makes only occasional errors or inappropriacies which do not affect communication.",
        },
      ],
    },
  ],
};
