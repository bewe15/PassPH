import type { WritingTest } from "./writing-types";

export const ieltsWriting2: WritingTest = {
  id: "ielts-writing-2",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 2",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Data Description",
      instructions: "You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features and making comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt: "The bar chart below shows the percentage of electricity generated from renewable sources in five countries — Germany, Spain, Denmark, the United States, and China — in 2010 and 2022.",
      chartDescription: `The data shows renewable electricity generation as a percentage of total electricity:

2010 figures:
• Denmark: 36%
• Germany: 17%
• Spain: 32%
• United States: 10%
• China: 19%

2022 figures:
• Denmark: 61%
• Germany: 46%
• Spain: 43%
• United States: 22%
• China: 31%

Key observations:
- All five countries increased their renewable share between 2010 and 2022.
- Denmark had the highest share in both years, growing from 36% to 61%.
- Germany showed the largest absolute increase (29 percentage points).
- The United States had the lowest share in both years (10% → 22%), though it still doubled.
- China grew from 19% to 31%, a 12-point increase.
- Spain was second highest in 2010 (32%) but was overtaken by Germany (46%) by 2022.`,
      modelAnswer: `The bar chart compares the proportion of electricity generated from renewable sources across five countries — Denmark, Germany, Spain, the United States, and China — at two points in time: 2010 and 2022.

Overall, all five countries increased their share of renewable electricity generation over the twelve-year period. Denmark maintained its position as the leading country throughout, while the United States consistently recorded the lowest proportion, despite doubling its renewable share.

In 2010, Denmark led all five nations with 36% of electricity coming from renewables, followed by Spain at 32% and China at 19%. Germany stood at 17%, and the United States had the lowest share at just 10%.

By 2022, significant growth was evident across all countries. Denmark's share climbed to 61%, reinforcing its position at the top. Germany recorded the largest absolute increase — rising by 29 percentage points to 46% — thereby surpassing Spain, which reached 43%. China's renewable share grew by 12 percentage points to 31%, while the United States, despite doubling its 2010 figure to 22%, remained the lowest among the five nations.

In summary, while the overall trend of renewable growth was universal, the pace and scale of expansion varied considerably, with European nations, particularly Denmark and Germany, achieving the highest levels of renewable integration by 2022.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the requirements of the task; presents, highlights and illustrates key features with relevant data; provides an overview but may lack full comparison.",
          band8: "Covers the requirements of the task well; selects key features accurately; makes well-developed comparisons and includes a clear overview.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organises information; uses cohesive devices appropriately; clear paragraphing structure.",
          band8: "Sequences information logically; manages cohesion without drawing attention to it; uses paragraphing effectively.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Sufficient range of vocabulary; some flexibility and precision; occasional minor errors.",
          band8: "Wide vocabulary used fluently; precise language for data description; few if any errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of structures used; frequent error-free sentences; minor errors only.",
          band8: "Wide range of structures; mostly error-free sentences; only very occasional slips.",
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
      prompt: "Governments should invest more money in teaching the arts — such as music, painting, and drama — in schools, rather than sports. To what extent do you agree or disagree?",
      modelAnswer: `The question of how to allocate resources for subjects outside the core academic curriculum is a matter of ongoing debate in education policy. While I recognise the value of both arts and sports education, I largely disagree with the proposition that governments should prioritise arts funding over investment in school sports, as I believe both domains make essential and complementary contributions to children's development.

Arts education — including music, visual arts, and drama — offers undeniable cognitive and cultural benefits. Research has shown that studying music enhances mathematical reasoning and language acquisition, while participation in theatre develops empathy, communication, and confidence. Creative education also nurtures the capacity for innovative thinking that is increasingly valued in modern economies. In countries such as Finland, a strong emphasis on creative and artistic subjects within a balanced curriculum has been associated with high educational outcomes, suggesting that arts education deserves secure funding.

At the same time, sports and physical education deliver benefits that are equally significant and more difficult to replicate through alternative means. Regular physical activity during childhood and adolescence supports physical health, reduces obesity, and mitigates the risks of depression and anxiety. Team sports in particular develop cooperative skills, resilience, and the ability to perform under pressure — attributes that are highly transferable to both professional and personal life. Given rising concerns about childhood inactivity and its long-term health consequences, reducing investment in school sports would be counterproductive.

Rather than viewing arts and sports as competing priorities, I would argue that governments should seek to fund both adequately. The framing of this as a binary choice reflects a false dichotomy; well-resourced school systems invest in broad, balanced curricula that include arts, sports, academic subjects, and vocational training. Cutting one to fund the other would deprive children of a rounded education.

In conclusion, I disagree with the premise that arts funding should come at the expense of sports. Both are essential components of a comprehensive education, and the most effective government policy would be to increase investment in both rather than to treat them as rivals.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses all parts of the task; presents a clear position; develops main ideas though some may lack full extension.",
          band8: "Sufficiently addresses all parts; presents a well-developed and logically reasoned position with relevant examples.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logical organisation; range of cohesive devices; clear paragraph structure.",
          band8: "Logically sequenced information; cohesion that draws no undue attention; effective paragraphing.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Flexible vocabulary; generally appropriate collocations; occasional minor errors.",
          band8: "Wide range used fluently; skilful use of uncommon items; rare minor errors only.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of complex structures; frequent error-free sentences; generally accurate punctuation.",
          band8: "Wide range of structures; majority of sentences error-free; very occasional slips.",
        },
      ],
    },
  ],
};
