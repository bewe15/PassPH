import type { WritingTest } from "./writing-types";

export const ieltsWriting14: WritingTest = {
  id: "ielts-writing-14",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 14",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The table below shows average monthly salaries (USD) for four professions across four countries in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The table below shows average monthly salaries (USD) for teachers, nurses, engineers, and software developers in four countries (USA, Philippines, Germany, South Africa) in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Table: Average Monthly Salaries (USD) by Profession and Country, 2023

                  | Teacher  | Nurse    | Engineer | Software Developer
------------------+----------+----------+----------+-------------------
USA               | $4,200   | $5,800   | $7,500   | $9,800
Philippines       | $500     | $620     | $1,100   | $1,800
Germany           | $4,500   | $4,200   | $6,800   | $8,200
South Africa      | $1,200   | $1,400   | $2,800   | $3,500

Key observations:
- USA has the highest salaries in every profession except Teaching (Germany: $4,500 vs USA: $4,200).
- Philippines has the lowest salaries across all four professions.
- Software developers earn the most in all countries; teachers earn the least in most countries.
- The gap between USA software developers ($9,800) and Philippine software developers ($1,800) is $8,000.
- In Germany, nurses ($4,200) earn slightly less than teachers ($4,500), unlike in other countries.
- South Africa occupies a middle-lower position, well above the Philippines but far below USA and Germany.
- Engineers in the USA ($7,500) earn more than software developers in South Africa ($3,500).`,
      modelAnswer: `The table presents average monthly salaries in US dollars for four professions — teacher, nurse, engineer, and software developer — across the USA, Philippines, Germany, and South Africa in 2023.

Overall, salaries for all professions were substantially higher in the USA and Germany than in the Philippines and South Africa. Across all four countries, software developers consistently earned the most, while teachers and nurses generally received the lowest remuneration.

The USA offered the highest pay in three of the four professions. Software developers there earned $9,800 per month, followed by engineers at $7,500 and nurses at $5,800. Germany was the sole exception, where teachers earned slightly more at $4,500 versus the American figure of $4,200. German software developers also commanded a high salary of $8,200, though below the US equivalent.

By contrast, salaries in the Philippines were dramatically lower across every profession. Philippine software developers earned just $1,800 — less than one-fifth of the comparable US salary — while teachers received only $500 per month. South Africa occupied a middle-lower tier, with software developers earning $3,500 and teachers $1,200.

A notable pattern across all countries was the salary hierarchy: software developers consistently earned the highest wages, engineers ranked second, and teaching was generally among the lower-paid occupations. The disparity between the highest and lowest national salaries highlights substantial global inequalities in professional remuneration.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the main salary patterns with accurate figures and cross-country comparisons.",
          band8: "Comprehensively reports all key features, including the profession hierarchy and outlier cases such as Germany's teacher salary.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Organised with a clear overview and logically grouped paragraphs; linking devices used appropriately.",
          band8: "Skilful organisation grouping data by country tier and profession; transitions are smooth and varied.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Appropriate vocabulary for describing comparisons and differences; some variety in word choice.",
          band8: "Precise and varied lexis; use of synonyms for 'salary' and 'earn' adds sophistication.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good grammatical control with a mix of structures; minor errors do not obscure meaning.",
          band8: "Wide range of accurate structures; complex sentences are used naturally and correctly.",
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
        "Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations. Discuss both views and give your own opinion.",
      modelAnswer: `When faced with difficult circumstances — whether a dissatisfying career or financial hardship — people respond very differently. Some advocate for acceptance and resilience, while others believe that actively pursuing change is the more productive approach. This essay considers both perspectives before offering my own conclusion.

Those who favour acceptance argue that not all situations can be changed, and that fighting against an unchangeable reality causes unnecessary stress. Philosophical traditions from Stoicism to Buddhism emphasise the value of finding contentment within one's current circumstances, rather than perpetually striving for something different. From a practical standpoint, someone with significant family responsibilities and limited alternatives may have little choice but to remain in an unsatisfying job; directing energy towards acceptance and gratitude may be healthier than persistent frustration. Furthermore, accepting a situation can allow a person to think more clearly and plan more strategically for the future.

On the other hand, proponents of change argue that passively accepting a bad situation allows it to continue and potentially worsen. History offers countless examples of individuals and communities who improved their circumstances through persistence — from entrepreneurs who rebuilt businesses after failure to social movements that challenged unjust conditions. Practically, someone trapped in a low-paying job who invests in retraining or further education may dramatically alter their financial trajectory within a few years. Without the drive to improve, growth and progress — personal and societal — would stagnate.

In my view, the healthier approach is usually to work towards change, while cultivating acceptance of those aspects genuinely beyond one's control. This balanced stance, informed by realistic self-assessment, enables both psychological stability and meaningful improvement. Blind acceptance risks complacency, while ceaseless striving without acceptance risks chronic dissatisfaction.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Both views discussed clearly with a personal opinion and supporting reasoning.",
          band8: "Nuanced exploration of both sides; personal opinion is well-integrated and philosophically grounded.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Clear four-paragraph structure; cohesive devices link ideas logically within and between paragraphs.",
          band8: "Seamless flow throughout; balanced treatment of both views is clearly signposted and easy to follow.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary including references to relevant concepts; minor awkward phrasing.",
          band8: "Sophisticated and varied lexis; references to Stoicism and precise phrasing demonstrate lexical depth.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good variety of structures with generally high accuracy; isolated errors present.",
          band8: "Consistently accurate with a wide range of complex structures used naturally.",
        },
      ],
    },
  ],
};
