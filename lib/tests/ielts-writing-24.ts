import type { WritingTest } from "./writing-types";

export const ieltsWriting24: WritingTest = {
  id: "ielts-writing-24",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 24",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The bar chart below compares the average number of working hours per week for employees in five countries — the USA, Germany, Japan, South Korea, and France — in 2015 and 2022.",
      chartDescription: `The data shows average weekly working hours per employee:

• USA: 38.6 hours in 2015, 38.1 hours in 2022 (slight decrease)

• Germany: 34.2 hours in 2015, 33.8 hours in 2022 (slight decrease)

• Japan: 40.5 hours in 2015, 38.8 hours in 2022 (notable decrease)

• South Korea: 44.1 hours in 2015, 41.5 hours in 2022 (largest absolute decrease)

• France: 35.9 hours in 2015, 35.6 hours in 2022 (virtually unchanged)

Overall: South Korea recorded the highest working hours in both years and the largest decline. Germany had the fewest hours in both periods. All five countries showed a slight reduction between 2015 and 2022, with South Korea and Japan showing the most notable decreases.`,
      chartData: {
        type: "bar",
        title: "Average Weekly Working Hours per Employee — Five Countries, 2015 & 2022",
        xAxisLabel: "Country",
        yAxisLabel: "Average Hours per Week",
        unit: "hrs",
        series: [
          { key: "year2015", label: "2015", color: "#6366f1" },
          { key: "year2022", label: "2022", color: "#22d3ee" },
        ],
        data: [
          { label: "USA", year2015: 38.6, year2022: 38.1 },
          { label: "Germany", year2015: 34.2, year2022: 33.8 },
          { label: "Japan", year2015: 40.5, year2022: 38.8 },
          { label: "South Korea", year2015: 44.1, year2022: 41.5 },
          { label: "France", year2015: 35.9, year2022: 35.6 },
        ],
      },
      modelAnswer: `The bar chart compares average weekly working hours per employee across five countries — the USA, Germany, Japan, South Korea, and France — in 2015 and 2022.

Overall, South Korea had the longest working hours in both years, while Germany recorded the fewest. Across all five countries, working hours fell slightly over the seven-year period, with South Korea and Japan showing the most significant reductions.

In 2015, South Korean employees worked the longest hours at 44.1 per week, followed by Japan at 40.5 hours, the USA at 38.6 hours, France at 35.9 hours, and Germany at 34.2 hours. By 2022, this ranking remained unchanged, though the figures had declined for every country.

South Korea recorded the largest absolute decrease, falling from 44.1 to 41.5 hours — a reduction of 2.6 hours. Japan also saw a notable decline of 1.7 hours, from 40.5 to 38.8. The USA and France showed only marginal changes, decreasing by 0.5 and 0.3 hours respectively. Germany's hours were the most stable, dropping by just 0.4 hours to 33.8.

In conclusion, while all five nations trended towards shorter working weeks between 2015 and 2022, South Korea and Japan stood out for the scale of their reductions. Germany and France maintained the lowest hours throughout both periods, suggesting more established cultures of work-life balance relative to their East Asian counterparts.`,
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
      prompt: "Some people believe that all employees should be allowed to work from home. Others argue that employees are more productive working in an office environment. Discuss both views and give your own opinion.",
      modelAnswer: `The debate over remote versus office-based working has intensified significantly in the wake of the COVID-19 pandemic, which demonstrated on a global scale that many jobs could be performed effectively outside a traditional office setting. Both arrangements offer distinct advantages and disadvantages, and the optimal approach is likely to vary depending on the nature of the work and the individual.

Advocates of remote working point to several substantial benefits. Working from home eliminates the time and financial cost of commuting, which for many employees amounts to hours of lost productivity each week. It also offers greater flexibility, allowing individuals to structure their day around personal needs and to better balance professional and family responsibilities. Studies conducted during the pandemic found that many employees reported equal or higher levels of productivity at home, free from the interruptions and noise common in open-plan offices. For employers, remote work can reduce overheads associated with maintaining large office premises.

However, the case for office-based working is also compelling. Offices facilitate spontaneous collaboration and communication that is difficult to replicate digitally — a casual conversation over coffee can spark innovative ideas in ways that scheduled video calls cannot. Junior employees, in particular, benefit enormously from physical proximity to more experienced colleagues, gaining mentorship and institutional knowledge through day-to-day interaction. Furthermore, some individuals struggle with the isolation of remote work and find that clear boundaries between work and home space are essential for their mental health and motivation. Certain roles, such as those requiring specialist equipment or collaborative physical tasks, are simply not suited to remote performance.

In my opinion, a hybrid model — combining the flexibility of remote work with regular in-person collaboration — represents the most effective solution for the majority of knowledge workers. This approach allows employees to benefit from focused, uninterrupted work at home while preserving the creative and social advantages of the office. Employers should, however, avoid imposing a one-size-fits-all policy, recognising that individual circumstances and job requirements vary considerably.

In conclusion, while both remote and office working have genuine merits, a flexible hybrid arrangement is likely to produce the best outcomes for most employees and organisations.`,
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
