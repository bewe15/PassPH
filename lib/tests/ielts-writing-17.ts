import type { WritingTest } from "./writing-types";

export const ieltsWriting17: WritingTest = {
  id: "ielts-writing-17",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 17",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The table below compares three major cities across six urban indicators. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The table below compares three cities — New York, Tokyo, and Mumbai — across six indicators: population (millions), GDP per capita (USD), average commute time (minutes), air quality index, green space per capita (m²), and cost of living index. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Table: Urban Indicator Comparison — New York, Tokyo, and Mumbai

Indicator                        | New York   | Tokyo      | Mumbai
---------------------------------+------------+------------+----------
Population (millions)            | 8.3        | 13.9       | 20.7
GDP per capita (USD)             | $85,000    | $42,000    | $8,500
Average commute time (minutes)   | 42         | 48         | 63
Air quality index (lower = better)| 45         | 38         | 154
Green space per capita (m²)      | 29         | 6          | 2
Cost of living index (NYC = 100) | 100        | 82         | 28

Key observations:
- Mumbai has the largest population (20.7 million) but the lowest GDP per capita ($8,500) — about one-tenth of New York's ($85,000).
- Tokyo has the second highest population (13.9 million) and a GDP per capita of $42,000 — roughly half that of New York.
- Mumbai has the worst air quality (index 154), far above New York (45) and Tokyo (38, the best).
- New York has by far the most green space per person (29 m²) vs Tokyo (6 m²) and Mumbai (2 m²).
- Mumbai has the longest average commute (63 minutes), compared to Tokyo (48 min) and New York (42 min).
- Cost of living is highest in New York (index 100), followed by Tokyo (82) and Mumbai (28).
- Tokyo has the best air quality and a relatively high GDP despite lower green space.`,
      chartData: {
        type: "table",
        title: "Urban Indicators — New York, Tokyo & Mumbai",
        tableHeaders: ["Indicator", "New York", "Tokyo", "Mumbai"],
        tableRows: [
          ["Population (millions)", 8.3, 13.9, 20.7],
          ["GDP per capita (USD)", "$85,000", "$42,000", "$8,500"],
          ["Average commute time (minutes)", 42, 48, 63],
          ["Air quality index (lower = better)", 45, 38, 154],
          ["Green space per capita (m²)", 29, 6, 2],
          ["Cost of living index (NYC = 100)", 100, 82, 28],
        ],
      },
      modelAnswer: `The table compares three major global cities — New York, Tokyo, and Mumbai — across six urban indicators: population, GDP per capita, average commute time, air quality, green space per capita, and cost of living.

Overall, the three cities present markedly different profiles. New York stands out for its high wealth and green space but also its high cost of living, while Mumbai has the largest population but lags on most quality-of-life indicators. Tokyo occupies a balanced middle position across several measures.

In terms of wealth, New York records the highest GDP per capita at $85,000, more than double Tokyo's $42,000 and ten times Mumbai's $8,500. This disparity is mirrored in the cost of living index, where New York scores 100 compared to Tokyo's 82 and Mumbai's considerably lower 28.

Mumbai faces the most significant urban challenges. Its population of 20.7 million is the largest of the three — exceeding Tokyo's 13.9 million and New York's 8.3 million — yet it records the worst air quality index of 154, far above New York (45) and Tokyo (38). Mumbai's residents also endure the longest average daily commute at 63 minutes, compared to 48 in Tokyo and 42 in New York, and have access to only 2 m² of green space per person.

Tokyo, despite its large population, achieves the best air quality of the three cities and maintains a respectable GDP per capita, although its green space per capita (6 m²) remains well below New York's 29 m². These contrasts highlight the varied trade-offs cities face between economic development, environmental quality, and livability.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Reports the main contrasts across cities and indicators with accurate data and relevant comparisons.",
          band8: "Comprehensively covers all six indicators, highlights the most significant contrasts, and draws meaningful conclusions about urban trade-offs.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organised with a clear overview; paragraphs are focused and cohesive devices used well.",
          band8: "Skilful organisation grouping data thematically; transitions between topics are smooth and the overall structure is highly effective.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary for describing and comparing data across multiple categories.",
          band8: "Varied and precise lexis; terms such as 'livability', 'disparity', and 'trade-offs' add academic sophistication.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good range of structures with generally high accuracy; minor errors do not affect clarity.",
          band8: "Consistently accurate with a wide variety of complex structures used fluently and naturally.",
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
        "The rise of social media has had a significant impact on how people communicate. Some argue this has been positive, while others believe it has damaged real human connections. Discuss both views and give your own opinion.",
      modelAnswer: `Social media platforms have fundamentally transformed the way in which people across the world interact, share information, and maintain relationships. While many celebrate the connectivity these tools provide, others are concerned that they are eroding the depth and authenticity of human communication. This essay examines both perspectives before presenting my own assessment.

Proponents of social media argue that it has expanded human connection in unprecedented ways. Platforms such as Instagram, WhatsApp, and Facebook allow people to maintain close relationships across vast geographical distances, reunite with lost contacts, and form communities around shared interests that might never have found each other in the physical world. For marginalised groups — including those with disabilities, those living in rural isolation, or members of minority communities — social media can provide a vital sense of belonging and solidarity. During the COVID-19 pandemic, for instance, digital communication platforms became essential lifelines for maintaining personal and professional relationships when physical contact was impossible.

Critics, however, contend that social media fosters superficial interaction at the expense of genuine intimacy. The curated, performative nature of online self-presentation encourages comparison and inauthenticity rather than honest connection. Research has linked heavy social media use among teenagers to higher rates of loneliness, anxiety, and depression — suggesting that the quantity of digital interactions does not compensate for the quality of face-to-face engagement. Moreover, algorithmic echo chambers can reduce exposure to diverse perspectives, narrowing rather than broadening social understanding.

In my opinion, social media is a tool whose impact depends primarily on how it is used. When it supplements rather than replaces in-person relationships and is used with intentionality, it can genuinely enrich human connection. The problem arises when it becomes a substitute for deeper engagement. Ultimately, cultivating digital literacy and healthy usage habits is more productive than condemning social media outright.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Both views discussed with relevant points; personal opinion clearly stated and supported.",
          band8: "Balanced, nuanced treatment of both perspectives; the personal view is thoughtfully integrated and avoids oversimplification.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Clear structure with well-organised paragraphs; cohesive devices link ideas effectively.",
          band8: "Excellent organisation; the essay builds logically from exposition of both views to a nuanced conclusion.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary related to communication and technology; some sophisticated word choices.",
          band8: "Varied and precise lexis; phrases such as 'algorithmic echo chambers', 'performative', and 'digital literacy' demonstrate high-level command.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good variety of structures; occasional minor errors that do not impede communication.",
          band8: "Wide range of accurately used structures; complex and compound sentences are controlled and natural throughout.",
        },
      ],
    },
  ],
};
