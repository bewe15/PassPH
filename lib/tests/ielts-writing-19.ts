import type { WritingTest } from "./writing-types";

export const ieltsWriting19: WritingTest = {
  id: "ielts-writing-19",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 19",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "You should spend about 20 minutes on this task. The table below shows the average house prices (in USD) in five cities in 2010, 2016, and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The table below shows average residential property prices (in USD) in five cities — Sydney, London, New York, Manila, and Nairobi — for the years 2010, 2016, and 2022.",
      chartDescription: `Table — Average house prices (USD), selected cities, 2010–2022:

City       | 2010      | 2016      | 2022
-----------|-----------|-----------|----------
Sydney     | 480,000   | 720,000   | 1,050,000
London     | 510,000   | 680,000   |   920,000
New York   | 430,000   | 590,000   |   780,000
Manila     |  65,000   | 110,000   |   195,000
Nairobi    |  48,000   |  72,000   |   115,000

All cities show consistent price increases across the three periods.
Sydney and London recorded the largest absolute increases; Nairobi had the smallest absolute increase but strong relative growth.`,
      modelAnswer: `The table illustrates average residential property prices in five cities at three points in time — 2010, 2016, and 2022 — measured in US dollars.

Overall, house prices rose in all five cities across the entire period, though the magnitude of the increases varied considerably. Western cities consistently commanded far higher prices than those in Asia and Africa, yet some of the smaller markets showed impressive relative growth.

Sydney and London had the highest prices throughout. Sydney climbed from USD 480,000 in 2010 to USD 1,050,000 by 2022, more than doubling. London followed a similar upward trajectory, rising from USD 510,000 to USD 920,000 over the same period. New York, slightly cheaper than London in 2010 at USD 430,000, also recorded substantial growth, reaching USD 780,000 in 2022.

In contrast, Manila and Nairobi were significantly more affordable, though both experienced notable percentage increases. Manila's average price rose from USD 65,000 to USD 195,000 — a three-fold increase — while Nairobi grew from USD 48,000 to USD 115,000, representing growth of nearly 140%.

In summary, while developed-city markets saw the largest absolute price rises, emerging-market cities demonstrated comparable or even stronger relative growth, suggesting widening but dynamic property markets globally.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7:
            "Key figures selected and compared accurately; overview is present and relevant.",
          band8:
            "All significant features highlighted with precise data; overview is clear and insightful; comparisons both absolute and relative.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Well-organised with logical paragraphing; cohesive devices used appropriately.",
          band8:
            "Seamless organisation; paragraphs develop naturally; sophisticated use of cohesion.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Good range of vocabulary; some less common items used; rare inaccuracies.",
          band8:
            "Precise and varied vocabulary; natural collocations; very few errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Range of structures with good accuracy; occasional minor errors.",
          band8:
            "Wide grammatical range; high accuracy even in complex structures.",
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
        "In some countries, it is now possible for people to buy products from other countries. To what extent do the advantages of this development outweigh the disadvantages?",
      modelAnswer: `The globalisation of retail has transformed consumer behaviour, enabling shoppers in virtually any country to purchase goods produced abroad, either through physical imports or e-commerce platforms. While this development carries certain drawbacks, I believe the advantages ultimately outweigh them.

The most significant benefit is access to a wider variety of goods. Consumers can now buy products that are unavailable domestically, or obtain them at lower prices due to international competition. For example, electronic devices manufactured in East Asia are available at competitive prices across Europe and the Americas, raising living standards for ordinary consumers. Furthermore, cross-border trade fosters economic growth and specialisation: countries can focus on industries where they have a comparative advantage while importing what others produce more efficiently.

From a cultural perspective, access to international products enriches everyday life, from food to fashion, promoting greater understanding between societies. Global e-commerce platforms have also created opportunities for small producers in developing nations to reach international customers, generating income that would otherwise be unattainable through domestic markets alone.

Nevertheless, there are genuine disadvantages. Local industries can suffer when they cannot compete with cheaper imported goods, leading to job losses and the decline of domestic manufacturing. Small businesses are particularly vulnerable. Additionally, international shipping contributes to carbon emissions, and the environmental cost of transporting goods across the globe is considerable.

Despite these concerns, the advantages are broader and more far-reaching. Strong regulatory frameworks — including fair trade agreements and environmental standards on shipping — can mitigate the downsides without sacrificing the gains. On balance, the ability to buy products from other countries represents a net positive for consumers, economies, and global cooperation.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7:
            "Clear position; relevant main ideas extended with examples; all parts of the prompt addressed.",
          band8:
            "Well-argued and nuanced position; ideas fully developed with specific examples; sophisticated awareness of complexity.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Logical sequencing; appropriate paragraphing; cohesive devices varied and mostly accurate.",
          band8:
            "Skilful cohesion; paragraphs well-structured; transitions enhance argument flow.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Sufficient lexical range; some less common vocabulary; minor errors tolerated.",
          band8:
            "Wide, precise vocabulary; natural collocations; very few errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Variety of sentence forms; generally accurate; minor errors do not hinder meaning.",
          band8:
            "Complex structures used accurately; rare errors; high overall fluency.",
        },
      ],
    },
  ],
};
