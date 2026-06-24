import type { WritingTest } from "./writing-types";

export const ieltsWriting21: WritingTest = {
  id: "ielts-writing-21",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 21",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The bar chart below shows the amount of electricity generated from renewable energy sources (solar, wind, and hydropower) in three countries — Germany, China, and the United States — in 2022.",
      chartDescription: `The data shows the following figures (in terawatt-hours, TWh) for 2022:

• Germany: Solar: 59 TWh, Wind: 132 TWh, Hydro: 19 TWh

• China: Solar: 425 TWh, Wind: 763 TWh, Hydro: 1303 TWh

• United States: Solar: 204 TWh, Wind: 435 TWh, Hydro: 258 TWh

Overall: China dominates all three categories by a considerable margin. Wind is the leading renewable source in both Germany and China, while hydro is dominant in China overall. The US ranks second across all three sources.`,
      chartData: {
        type: "bar",
        title: "Renewable Energy Generation by Source (TWh) — Germany, China & USA, 2022",
        xAxisLabel: "Country",
        yAxisLabel: "Electricity Generated (TWh)",
        unit: "TWh",
        series: [
          { key: "solar", label: "Solar", color: "#f59e0b" },
          { key: "wind", label: "Wind", color: "#22d3ee" },
          { key: "hydro", label: "Hydropower", color: "#3b82f6" },
        ],
        data: [
          { label: "Germany", solar: 59, wind: 132, hydro: 19 },
          { label: "China", solar: 425, wind: 763, hydro: 1303 },
          { label: "United States", solar: 204, wind: 435, hydro: 258 },
        ],
      },
      modelAnswer: `The bar chart compares electricity generation from three renewable energy sources — solar, wind, and hydropower — in Germany, China, and the United States in 2022, with figures expressed in terawatt-hours (TWh).

Overall, China produced far more renewable energy than either Germany or the United States across all three sources. Wind power was the leading source in Germany and the United States, while hydropower dominated in China.

In Germany, wind energy was the largest contributor at 132 TWh, followed by solar at 59 TWh, with hydropower generating only 19 TWh. The United States showed a broadly similar pattern: wind accounted for 435 TWh, solar for 204 TWh, and hydropower for 258 TWh — notably, hydro and solar were closer in value compared to Germany.

China's figures were substantially higher across the board. Hydropower was the country's leading renewable source, producing an impressive 1,303 TWh, more than five times the combined hydropower output of Germany and the United States. China's wind generation reached 763 TWh and solar 425 TWh, both significantly exceeding the totals for the other two nations.

In conclusion, while all three countries relied heavily on wind power relative to solar and hydro, China's sheer scale of renewable energy production set it markedly apart, particularly in the hydropower sector.`,
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
      prompt: "Some people argue that governments should spend more money on public transport rather than road infrastructure. To what extent do you agree or disagree?",
      modelAnswer: `The question of whether public funds should be directed primarily towards public transport systems or road construction is a matter of ongoing debate among urban planners, economists, and citizens. In my view, while road infrastructure serves an important function, governments should place greater emphasis on investing in public transport, particularly in densely populated urban areas.

The case for prioritising public transport rests on several compelling arguments. Most significantly, efficient metro, bus rapid transit, and rail networks can move far greater numbers of people per hour than private vehicles on roads, thereby reducing congestion, cutting commute times, and improving urban productivity. Cities such as Singapore and Tokyo demonstrate that world-class public transport systems can dramatically reduce car dependency, leading to measurable improvements in air quality and lower per-capita carbon emissions. With climate change posing an urgent global challenge, shifting investment away from roads — which encourage private car use — and towards greener mass transit makes clear environmental sense.

Furthermore, public transport is more equitable. Not all citizens can afford private vehicles, and robust public systems ensure that lower-income groups can access employment, education, and healthcare. By contrast, road expansion disproportionately benefits wealthier car-owning households while contributing to urban sprawl and longer travel distances for everyone.

That said, road investment should not be entirely neglected. In rural and suburban areas where population density makes public transport economically unviable, well-maintained road networks are essential for connectivity and economic activity. Additionally, roads are critical arteries for freight transport and emergency services.

In conclusion, while a balance is necessary, I believe the greater long-term benefit lies in expanding and improving public transport. Governments should view such investment not merely as an infrastructure decision but as a commitment to sustainability, equality, and the long-term livability of cities.`,
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
