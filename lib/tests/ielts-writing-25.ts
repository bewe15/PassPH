import type { WritingTest } from "./writing-types";

export const ieltsWriting25: WritingTest = {
  id: "ielts-writing-25",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 25",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The line graph below shows the number of international tourists (in millions) visiting Thailand, Vietnam, and Indonesia from 2015 to 2019.",
      chartDescription: `The data shows the following tourist arrival figures (in millions):

• Thailand: 29.9 million in 2015, rose steadily to 32.6 million in 2016, 35.4 million in 2017, 38.3 million in 2018, and peaked at 39.8 million in 2019 — the highest of the three countries throughout.

• Vietnam: 7.9 million in 2015, grew to 10.0 million in 2016, 12.9 million in 2017, 15.6 million in 2018, and 18.0 million in 2019 — the fastest-growing destination by percentage.

• Indonesia: 10.4 million in 2015, 11.5 million in 2016, 14.0 million in 2017, 15.8 million in 2018, and 16.1 million in 2019.

Overall: All three countries saw consistent growth in tourist arrivals. Thailand attracted by far the most visitors throughout, while Vietnam's growth rate was the most impressive. Indonesia and Vietnam converged towards the end of the period.`,
      chartData: {
        type: "line",
        title: "International Tourist Arrivals (Millions) — Thailand, Vietnam & Indonesia, 2015–2019",
        xAxisLabel: "Year",
        yAxisLabel: "International Tourist Arrivals (millions)",
        unit: "M",
        series: [
          { key: "thailand", label: "Thailand", color: "#f59e0b" },
          { key: "vietnam", label: "Vietnam", color: "#10b981" },
          { key: "indonesia", label: "Indonesia", color: "#ef4444" },
        ],
        data: [
          { label: "2015", thailand: 29.9, vietnam: 7.9, indonesia: 10.4 },
          { label: "2016", thailand: 32.6, vietnam: 10.0, indonesia: 11.5 },
          { label: "2017", thailand: 35.4, vietnam: 12.9, indonesia: 14.0 },
          { label: "2018", thailand: 38.3, vietnam: 15.6, indonesia: 15.8 },
          { label: "2019", thailand: 39.8, vietnam: 18.0, indonesia: 16.1 },
        ],
      },
      modelAnswer: `The line graph illustrates the number of international tourists visiting three Southeast Asian countries — Thailand, Vietnam, and Indonesia — between 2015 and 2019, with figures measured in millions of arrivals.

Overall, all three countries experienced consistent growth in tourist numbers over the five-year period. Thailand remained the most visited destination throughout, while Vietnam recorded the most remarkable rate of growth, nearly doubling its visitor numbers by the end of the period.

Thailand was the dominant tourism destination, receiving 29.9 million international visitors in 2015. This figure rose steadily each year, reaching 39.8 million by 2019 — an increase of approximately 10 million visitors over four years.

Vietnam and Indonesia began the period significantly below Thailand, though their trajectories differed notably. Indonesia started at 10.4 million in 2015 and grew at a moderate pace to 16.1 million by 2019. Vietnam, however, began the period with considerably fewer visitors at 7.9 million, but grew at a markedly faster rate — more than doubling to 18.0 million by 2019. As a result, Vietnam overtook Indonesia in 2018 and maintained a slight lead of 1.9 million visitors by 2019.

In conclusion, while Thailand remained the clear leader in Southeast Asian tourism, Vietnam's exceptional growth trajectory was the most striking feature of the data, suggesting a rapid emergence as a major regional destination during this period.`,
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
      prompt: "Advertising aimed at children should be banned. To what extent do you agree or disagree?",
      modelAnswer: `The question of whether advertising directed at children should be prohibited is one that raises important concerns about commercial ethics, child development, and the responsibilities of both corporations and governments. While I acknowledge that some forms of advertising can be harmful to children, I believe a targeted regulatory framework is more effective and proportionate than an outright ban.

Those who support banning advertising aimed at children make a compelling case on developmental grounds. Young children, particularly those under the age of seven or eight, lack the cognitive maturity to recognise advertising as a form of persuasion and are therefore uniquely vulnerable to its influence. Advertisers exploit this vulnerability through techniques designed to generate persistent demands for products — from sugary foods to expensive toys — placing parents under considerable pressure and potentially contributing to unhealthy consumption habits. Research has linked the heavy marketing of high-fat, high-sugar foods to children with rising rates of childhood obesity, a public health concern of growing severity in many countries. Sweden and Quebec, both of which have implemented bans on advertising to young children, offer evidence that such restrictions can reduce exposure to manipulative commercial content without significant economic harm.

Nevertheless, a total ban on all advertising directed at children may be excessively broad and difficult to enforce in the digital age, where content flows across borders and platforms. Advertising is not inherently harmful; campaigns promoting educational products, physical activity, or healthy foods can provide genuine value. A more targeted approach — restricting advertisements for unhealthy food, gambling-related content, and products making misleading claims, while requiring clear labelling of advertising in child-oriented media — would address the most serious harms without eliminating beneficial or neutral content.

Furthermore, media literacy education in schools can empower children to critically evaluate advertising messages, building resilience against manipulative techniques without requiring the blunt instrument of a blanket prohibition.

In conclusion, while protecting children from exploitative advertising is a legitimate and important goal, a carefully designed regulatory system targeting the most harmful forms of advertising is preferable to a comprehensive ban.`,
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
