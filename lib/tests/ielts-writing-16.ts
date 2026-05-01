import type { WritingTest } from "./writing-types";

export const ieltsWriting16: WritingTest = {
  id: "ielts-writing-16",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 16",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The chart below shows average screen time per day (hours) for different age groups broken down by device type in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The bar chart below shows average screen time per day (hours) for different age groups (6–12, 13–17, 18–30, 31–50, 51+) broken down by device type (smartphone, computer, TV) in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Bar chart: Average Daily Screen Time (Hours) by Age Group and Device, 2023

Age groups: 6–12, 13–17, 18–30, 31–50, 51+
Device types: Smartphone, Computer, TV
Y-axis: Hours per day, range 0–5

Data points:

Age group 6–12:
- Smartphone: 1.5 hrs
- Computer: 1.0 hrs
- TV: 2.5 hrs
Total: 5.0 hrs

Age group 13–17:
- Smartphone: 4.5 hrs
- Computer: 2.0 hrs
- TV: 1.5 hrs
Total: 8.0 hrs

Age group 18–30:
- Smartphone: 4.0 hrs
- Computer: 3.5 hrs
- TV: 1.0 hrs
Total: 8.5 hrs

Age group 31–50:
- Smartphone: 2.5 hrs
- Computer: 3.0 hrs
- TV: 2.0 hrs
Total: 7.5 hrs

Age group 51+:
- Smartphone: 1.0 hrs
- Computer: 1.5 hrs
- TV: 3.5 hrs
Total: 6.0 hrs

Key observations:
- Teenagers (13–17) and young adults (18–30) have the highest total screen time (8.0 and 8.5 hrs respectively).
- Smartphone use peaks with 13–17 year olds (4.5 hrs) and declines sharply among those 51+ (1.0 hr).
- TV is the dominant device for children (6–12: 2.5 hrs) and older adults (51+: 3.5 hrs).
- Computer use peaks in the 18–30 age group (3.5 hrs) and the 31–50 age group (3.0 hrs).
- Children (6–12) have the lowest smartphone usage (1.5 hrs).
- The 51+ age group relies most heavily on TV relative to other devices.`,
      modelAnswer: `The bar chart presents daily screen time in hours across five age groups — children (6–12), teenagers (13–17), young adults (18–30), middle-aged adults (31–50), and older adults (51+) — categorised by device type (smartphone, computer, and TV) in 2023.

Overall, screen time was highest among teenagers and young adults, and device preferences shifted markedly with age. Younger groups favoured smartphones, while older groups relied more heavily on television.

Among teenagers aged 13–17, smartphone usage was the highest of all groups at 4.5 hours per day, contributing to a total screen time of 8.0 hours. Young adults (18–30) recorded the greatest overall usage at 8.5 hours, driven by a combination of heavy smartphone use (4.0 hours) and the highest computer usage of any group (3.5 hours). By contrast, computer use peaked and TV use was minimal in these two age brackets.

The pattern reversed in older age groups. Those aged 51 and over watched an average of 3.5 hours of TV daily — the highest TV figure in the chart — while using smartphones for only 1.0 hour. Similarly, children aged 6–12 spent 2.5 hours watching TV, more than either smartphone (1.5 hours) or computer (1.0 hour).

The 31–50 age group occupied a middle position, with relatively balanced usage across all three devices, though computers (3.0 hours) were the most-used. These findings suggest a clear generational divide in media consumption habits, with digital devices dominating younger users and television remaining central to older audiences.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Reports the main trends by age group and device with relevant comparisons and accurate data.",
          band8: "Comprehensively covers device preferences across all age groups and highlights the generational shift; data is precise and well-selected.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Well-organised with a clear overview; paragraphs address distinct age groupings logically.",
          band8: "Seamless progression through age groups; contrasting patterns are signposted clearly and transitions are fluent.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good variety of vocabulary for describing trends and making comparisons across categories.",
          band8: "Precise and varied lexis; language for comparison and contrast is natural and sophisticated.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good range of structures; occasional minor errors do not affect comprehension.",
          band8: "Consistently accurate grammar with a wide variety of complex structures used naturally.",
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
        "Some countries spend large amounts of money trying to discover life on other planets. Many people argue this money would be better spent solving problems on Earth. To what extent do you agree or disagree?",
      modelAnswer: `Space exploration has always captured the human imagination, but the vast sums of public money directed at the search for extraterrestrial life invite legitimate scrutiny. While I acknowledge the scientific value of such endeavours, I largely agree with the view that these resources could be more effectively deployed to address pressing problems on Earth.

Those who support investment in space research argue that the pursuit of knowledge beyond our planet has indirect but significant benefits for humanity. Technologies developed for space programmes — from satellite communications to medical imaging — have generated enormous economic and social value. Moreover, understanding whether life exists elsewhere in the universe could provide insights into the origins and nature of life on Earth, with potentially transformative consequences for biology and philosophy alike.

Nevertheless, the scale of spending is difficult to justify when critical needs remain unmet at home. Millions of people worldwide lack access to clean water, adequate healthcare, and nutritious food. Climate change poses an existential threat that demands unprecedented financial investment in renewable energy, infrastructure, and adaptation. NASA's annual budget alone exceeds $25 billion — resources that could fund considerable progress in these areas. The ethical argument for prioritising immediate human suffering over speculative discoveries is compelling.

Furthermore, the search for life on other planets may not yield meaningful results within any useful timeframe, making the opportunity cost particularly high. While scientific curiosity is admirable, governments have a primary obligation to serve the welfare of their citizens and the stability of their planet.

In conclusion, although space exploration has merit, I believe the most pressing moral and practical imperative is to address the very real and solvable crises facing humanity today. Investment in space should continue, but at a scale proportionate to Earth's urgent needs.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Clear position taken; both sides of the argument acknowledged before a firm conclusion is reached.",
          band8: "Well-reasoned and specific argument; the position is consistent throughout and supported by concrete examples and ethical reasoning.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logical structure with clear paragraphing and effective use of cohesive devices.",
          band8: "Ideas progress naturally; the concession in paragraph two is handled skilfully before the main argument is reasserted.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary related to space, science, and social issues; minimal repetition.",
          band8: "Precise and varied lexis; use of 'extraterrestrial', 'speculative', and 'opportunity cost' demonstrates sophistication.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good control of complex structures; minor errors are present but do not impede communication.",
          band8: "Wide range of accurately used structures; errors are rare and inconsequential.",
        },
      ],
    },
  ],
};
