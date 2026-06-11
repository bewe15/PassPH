import type { WritingTest } from "./writing-types";

export const ieltsWriting3: WritingTest = {
  id: "ielts-writing-3",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 3",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The table below shows the percentage of greenhouse gas emissions attributed to different sectors in four countries — Australia, India, Germany, and Canada — in 2021.",
      chartDescription: `Greenhouse gas emissions by sector (% of national total), 2021:

Sector | Australia | India | Germany | Canada
Energy (electricity & heat) | 33% | 49% | 29% | 12%
Transport | 19% | 11% | 20% | 24%
Agriculture | 16% | 18% | 8% | 10%
Industry | 21% | 18% | 23% | 37%
Other (buildings, waste, etc.) | 11% | 4% | 20% | 17%

Key observations:
- Energy production is the largest source in Australia and India but a much smaller share in Canada.
- Industry is the largest sector in Canada (37%) and significant in Germany (23%) and Australia (21%).
- Transport is proportionally higher in Canada (24%) and Germany (20%) than in India (11%).
- Agriculture is most significant in Australia (16%) and India (18%) relative to other sectors.
- Germany has a notably high "Other" category (20%), reflecting its high-efficiency built environment efforts and remaining building stock inefficiency.`,
      chartData: {
        type: "table",
        title: "Greenhouse Gas Emissions by Sector (% of National Total) — 4 Countries, 2021",
        tableHeaders: ["Sector", "Australia", "India", "Germany", "Canada"],
        tableRows: [
          ["Energy (electricity & heat)", "33%", "49%", "29%", "12%"],
          ["Transport", "19%", "11%", "20%", "24%"],
          ["Agriculture", "16%", "18%", "8%", "10%"],
          ["Industry", "21%", "18%", "23%", "37%"],
          ["Other (buildings, waste, etc.)", "11%", "4%", "20%", "17%"],
        ],
      },
      modelAnswer: `The table presents the distribution of greenhouse gas emissions across five sectors — energy, transport, agriculture, industry, and other — for Australia, India, Germany, and Canada in 2021. The figures reveal notable differences in the primary sources of emissions across the four countries.

Energy production (electricity and heat generation) was the dominant emission source in both Australia and India, accounting for 33% and 49% of national totals respectively. By contrast, energy represented a much smaller proportion of emissions in Canada (12%) and Germany (29%), suggesting that these countries rely more heavily on lower-carbon energy mixes.

Industry was the largest sector in Canada, responsible for 37% of emissions — considerably higher than in the other three nations. Germany and Australia recorded intermediate industrial shares of 23% and 21% respectively, while India's industrial sector contributed 18%.

Transport emissions were proportionally most significant in Canada (24%) and Germany (20%), whereas in India this sector accounted for only 11%. Agriculture played a more prominent role in the emission profiles of Australia (16%) and India (18%) than in Germany (8%) or Canada (10%), reflecting the importance of livestock and crop cultivation in these economies.

In summary, while energy and industry dominate in most countries, the specific emission profiles vary considerably, with Canada's industrial dominance and India's heavy energy sector dependence being the most distinctive features of the data.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the requirements; selects relevant data; makes comparisons but may not highlight all key features.",
          band8: "Covers requirements well; selects key features accurately; makes meaningful comparisons; includes a clear overview.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logical organisation; appropriate cohesive devices; clear paragraphing.",
          band8: "Logical sequencing; cohesion well-managed; effective paragraph structure.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Sufficient vocabulary range; flexible use; few significant errors.",
          band8: "Wide vocabulary; precise data language; very few errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of complex structures; generally error-free; minor slips.",
          band8: "Wide range; mostly error-free; occasional minor inappropriacies only.",
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
      prompt: "Some people say that advertising encourages us to buy things we do not really need. Others say that advertisements tell us about new products that may improve our lives. Discuss both views and give your own opinion.",
      modelAnswer: `Advertising is an inescapable feature of modern life, present in virtually every medium from television and social media to public spaces and product packaging. The debate over whether advertising serves consumers' interests or manipulates them into unnecessary purchases reflects genuine complexity in the relationship between commerce, psychology, and individual choice. Having considered both perspectives, I believe that advertising performs a useful informational function while simultaneously carrying real risks of overconsumption and manipulation.

Those who view advertising sceptically point to the sophisticated techniques that marketers use to shape desire rather than simply communicate information. Psychological research into the mechanisms of persuasion shows that advertising exploits cognitive biases — creating artificial scarcity, leveraging social proof, and associating products with ideals of attractiveness or success — in ways that bypass rational evaluation. The result, critics argue, is a culture of consumerism in which individuals spend on status goods they do not need, generating personal debt and environmental harm. The global fashion industry, driven largely by advertising, produces enormous quantities of clothing that is worn rarely and discarded quickly, contributing significantly to textile waste and carbon emissions.

On the other hand, proponents argue that advertising performs a genuinely valuable service by informing consumers of new products, innovations, and competitive prices. In a complex marketplace, advertising reduces the time and effort required to identify relevant options: a consumer searching for a medication, appliance, or financial product may benefit enormously from well-designed advertising that highlights relevant features and comparisons. Advertising also subsidises much of the digital content — news, entertainment, and services — that consumers access without direct payment, making it an important mechanism for funding public goods.

In my opinion, the truth lies between these positions. Advertising can be both informative and manipulative depending on its design and context, and the distinction matters enormously. Advertising that transparently communicates product features and enables informed comparison is genuinely beneficial; advertising that exploits vulnerabilities or misleads is harmful and warrants regulatory scrutiny. Governments and regulatory bodies in many countries already set standards for advertising accuracy, and there is a strong case for expanding protections against predatory advertising targeting children or vulnerable consumers.

In conclusion, while advertising undeniably informs and benefits consumers in many contexts, its potential for manipulation requires ongoing vigilance from regulators and critical media literacy from consumers themselves.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses all parts of the task; presents a clear position; main ideas are developed but may not always be fully extended.",
          band8: "Sufficiently addresses all parts; presents a well-developed balanced discussion with clear personal opinion; ideas are extended and supported.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logical organisation; range of cohesive devices; presents a clear central topic in each paragraph.",
          band8: "Logical sequencing; cohesion managed well; paragraphing is effective throughout.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Sufficient vocabulary range; appropriate collocations; occasional errors.",
          band8: "Wide vocabulary; fluent and flexible use; rare minor errors only.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of structures; frequent error-free sentences; minor errors do not impede communication.",
          band8: "Wide range of structures; majority error-free; only occasional minor slips.",
        },
      ],
    },
  ],
};
