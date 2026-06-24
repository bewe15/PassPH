import type { WritingTest } from "./writing-types";

export const ieltsWriting23: WritingTest = {
  id: "ielts-writing-23",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 23",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The pie chart below shows the proportion of household waste by category in a typical European country in 2023.",
      chartDescription: `The data shows the breakdown of household waste by category (% of total):

• Food waste: 34% — the largest single category

• Paper & cardboard: 22% — the second largest category

• Plastic: 18% — third largest

• Glass: 10%

• Metal: 7%

• Other: 9%

Overall: Food waste accounts for over a third of all household waste, making it by far the dominant category. Paper and plastic together account for another 40%, meaning that organic and paper-based materials make up the majority of household waste. Glass and metal are relatively minor contributors.`,
      chartData: {
        type: "pie",
        title: "Household Waste by Category — Typical European Country, 2023",
        xAxisLabel: "",
        yAxisLabel: "",
        unit: "%",
        series: [],
        data: [
          { label: "Food Waste", value: 34 },
          { label: "Paper & Cardboard", value: 22 },
          { label: "Plastic", value: 18 },
          { label: "Glass", value: 10 },
          { label: "Other", value: 9 },
          { label: "Metal", value: 7 },
        ],
      },
      modelAnswer: `The pie chart illustrates the composition of household waste in a typical European country in 2023, broken down into six categories.

Overall, food waste was by far the largest contributor to total household waste, accounting for more than a third of all material discarded. When combined, food, paper, and plastic made up nearly three-quarters of all waste generated.

Food waste was the dominant category at 34%, significantly exceeding all others. Paper and cardboard represented the second largest share at 22%, followed by plastic at 18%. Together, these three categories accounted for 74% of all household waste — almost three-quarters of the total.

By contrast, the remaining categories contributed considerably smaller proportions. Glass accounted for 10% of waste, while the miscellaneous "other" category represented 9%. Metal was the least significant material, comprising just 7% of the total.

These figures highlight the extent to which biodegradable and recyclable materials dominate household waste streams in European countries. The prominence of food waste in particular suggests that initiatives focused on reducing food loss and promoting composting could have the greatest impact on overall waste reduction. Meanwhile, the combined share of paper and plastic — at 40% — underscores the continued importance of recycling programmes for packaging materials.

In summary, food waste, paper, and plastic collectively accounted for the vast majority of household waste, with glass, metal, and other materials playing comparatively minor roles.`,
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
      prompt: "The increasing use of smartphones by children is a growing concern for parents and educators. What are the causes of this trend and what problems can it lead to?",
      modelAnswer: `Smartphone use among children has increased dramatically over the past decade, prompting widespread concern among parents, teachers, and health professionals. This essay examines the key factors driving this trend and considers the problems it may create for children's development and wellbeing.

Several interconnected factors explain the rise in children's smartphone usage. Firstly, the rapid expansion of mobile internet infrastructure and falling device prices have made smartphones affordable and accessible to families across income levels. Secondly, the proliferation of social media platforms, streaming services, and mobile games specifically designed to capture and retain young users' attention has created powerful incentives for children to use devices for extended periods. Thirdly, busy modern lifestyles mean that many parents find it convenient to give children a smartphone to occupy their time, whether during commutes, family meals, or periods of unsupervised time at home. Remote schooling arrangements accelerated by the COVID-19 pandemic also normalised screen use among children from a young age.

The consequences of excessive smartphone use among children are multifaceted. One significant concern is the impact on physical health: prolonged screen time is associated with sedentary behaviour, disrupted sleep patterns due to blue light exposure, and deteriorating eyesight. Equally troubling are the psychological effects — research has linked heavy social media use among young people to increased rates of anxiety, depression, and low self-esteem, driven in part by social comparison and cyberbullying. Academically, smartphones can be a major source of distraction, reducing children's ability to concentrate and engage deeply with learning materials. There are also developmental risks: excessive digital interaction may limit the face-to-face social experiences that children need to develop empathy, communication skills, and emotional resilience.

Addressing these problems requires a collaborative response from parents, schools, and technology companies. Parents should set clear boundaries around screen time and model healthy digital habits, while educators can incorporate digital literacy into curricula to teach children to use technology critically and responsibly. Governments and regulators may also need to impose stronger safeguards on platforms that target young users.

In conclusion, the surge in children's smartphone use is driven by affordability, deliberate platform design, and shifting parental habits, but it risks significant harm to children's health, academic performance, and social development if left unchecked.`,
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
