import type { WritingTest } from "./writing-types";

export const ieltsWriting1: WritingTest = {
  id: "ielts-writing-1",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 1",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The line graph below shows the percentage of households with internet access in three countries — South Korea, Australia, and Brazil — between 2000 and 2020.",
      chartDescription: `The data shows the following trends:

• South Korea: Started at 49% in 2000, rose steeply to 75% by 2005, continued climbing to 93% by 2010, and plateaued at around 95–96% from 2015 to 2020.

• Australia: Began at 33% in 2000, grew gradually to 55% in 2005, reached 78% by 2010, then rose more steadily to 87% by 2015 and 90% by 2020.

• Brazil: Started significantly lower at 5% in 2000, grew slowly to 13% by 2005, accelerated to 40% by 2010, and then rose sharply to 67% by 2015 and 74% by 2020.

Overall: All three countries showed upward trends. South Korea consistently led, reaching near-saturation by 2010. Australia followed a steady growth path. Brazil started lowest but showed the most dramatic rate of increase in the second decade.`,
      modelAnswer: `The line graph illustrates the proportion of households with internet access in South Korea, Australia, and Brazil over a twenty-year period from 2000 to 2020.

Overall, all three countries experienced significant growth in internet access throughout the period. South Korea consistently recorded the highest rates, while Brazil began at a much lower level but underwent the most dramatic expansion, particularly after 2005.

In 2000, South Korea already had internet access in nearly half of all households (49%), compared to 33% in Australia and just 5% in Brazil. South Korea's rate increased sharply over the first decade, reaching 93% by 2010, after which growth slowed and the figure stabilised at around 95–96% by 2020, suggesting near-universal household connectivity.

Australia followed a steadier trajectory, rising from 33% to 78% between 2000 and 2010, before continuing to grow more gradually to reach 90% by 2020. Brazil's growth was initially much slower, climbing to only 13% by 2005, but then accelerated considerably in the second decade. By 2020, 74% of Brazilian households had internet access, representing an increase of 69 percentage points over the full period — the largest absolute gain of the three nations.

In conclusion, while South Korea and Australia achieved broadly similar final levels, Brazil's trajectory represents the most striking transformation, reflecting the rapid expansion of digital infrastructure in emerging economies.`,
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
      prompt: "Some people think that universities should provide graduates with the knowledge and skills needed by employers. To what extent do you agree or disagree?",
      modelAnswer: `Universities have long been associated with intellectual exploration and the broadening of human understanding. The question of whether they should primarily orient their programmes toward the requirements of the job market is one that divides educators, employers, and students alike. While I broadly agree that employability should be a significant consideration in university education, I believe this goal should not come at the expense of broader intellectual development.

Those who argue in favour of an employment-focused university model point to the practical realities facing graduates. In many countries, university education represents a substantial financial investment, and students reasonably expect that their qualifications will enable them to secure well-paying work. Employers consistently report skills shortages in technical areas such as data analysis, software engineering, and healthcare, and argue that universities could better serve both students and the economy by equipping graduates with directly applicable competencies. Countries like Germany, where universities maintain strong links with industry through cooperative education programmes, demonstrate that such alignment is achievable without sacrificing academic quality.

However, reducing universities entirely to vocational training institutions would be shortsighted for several reasons. Firstly, the job market changes rapidly; skills that are in demand today may be automated or obsolete within a decade, while the ability to think critically, communicate clearly, and adapt to new challenges — qualities developed through broad academic study — retains its value across shifting economic conditions. Secondly, universities produce research, cultural knowledge, and civic understanding that are intrinsically valuable and that drive long-term societal progress in ways not easily reduced to employment metrics.

In my view, the most effective approach is a balanced one: universities should ensure that graduates develop both subject expertise and transferable professional competencies — including communication, analytical thinking, and collaborative problem-solving — while preserving space for open intellectual inquiry. This is not an either-or choice; the best universities already achieve this balance, and others should aspire to do the same.

In conclusion, while the employment needs of graduates and society are legitimate and important considerations, universities should fulfil a broader educational mission that prepares graduates not only for their first job but for a lifetime of informed, adaptable, and meaningful participation in the world.`,
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
