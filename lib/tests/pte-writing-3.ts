import type { WritingTest } from "./writing-types";

export const pteWriting3: WritingTest = {
  id: "pte-writing-3",
  exam: "PTE",
  title: "PTE Academic Writing — Test 3",
  totalSeconds: 1800,
  tasks: [
    {
      id: 1,
      type: "pte_swt",
      taskLabel: "Task 1 — Summarise Written Text",
      instructions: "Read the passage below and summarise it using one sentence. Type your response in the box. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      timeSeconds: 600,
      minWords: 5,
      maxWords: 75,
      prompt: "Write a single sentence (5–75 words) that summarises the passage below.",
      passage: `Sleep deprivation has emerged as a significant public health concern, with surveys in many high-income countries finding that a substantial proportion of adults regularly obtain fewer than the recommended seven to nine hours per night. The consequences of insufficient sleep extend well beyond fatigue: research has established associations between chronic short sleep and elevated risks of obesity, type 2 diabetes, cardiovascular disease, and depression. Cognitively, even moderate sleep restriction impairs attention, decision-making, and working memory, while individuals typically underestimate their own level of impairment — a phenomenon that has serious implications for safety-critical tasks such as driving and medical practice. Despite growing scientific awareness of sleep's importance, structural factors including early school and work start times, long commuting distances, and the pervasive blue light emitted by digital screens — which suppresses melatonin and delays sleep onset — continue to systematically undermine sleep quality across modern societies.`,
      modelAnswer: `Widespread sleep deprivation in modern societies, driven by structural factors such as early start times and screen use, poses a serious public health risk because insufficient sleep is associated with obesity, diabetes, cardiovascular disease, depression, and cognitive impairments that individuals typically fail to recognise in themselves.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers the main health consequences; may not fully integrate the structural causes.",
          band8: "Accurately captures both the health consequences and the structural drivers of sleep deprivation.",
        },
        {
          criterion: "Form",
          band7: "Single sentence within the 5–75 word limit.",
          band8: "Well-formed single sentence within the word limit.",
        },
        {
          criterion: "Grammar",
          band7: "Grammatically accurate with minor errors.",
          band8: "Accurate and fluent; complex structure handled well.",
        },
        {
          criterion: "Vocabulary",
          band7: "Appropriate vocabulary; adequate paraphrasing.",
          band8: "Precise vocabulary; effective paraphrasing of source material.",
        },
      ],
    },
    {
      id: 2,
      type: "pte_essay",
      taskLabel: "Task 2 — Write Essay",
      instructions: "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organise your ideas, present supporting details, and control the elements of standard written English. You should write 200–300 words.",
      timeSeconds: 1200,
      minWords: 200,
      maxWords: 300,
      prompt: "Some people think that it is better to educate boys and girls in separate schools. Others believe that boys and girls benefit more from attending mixed schools. Discuss both views and give your own opinion.",
      modelAnswer: `The debate over single-sex versus co-educational schooling has persisted for decades, with advocates on both sides presenting evidence in support of their preferred model. While each approach has genuine advantages, I believe that well-managed co-educational schools better prepare students for life in a mixed society.

Proponents of single-sex education argue that removing cross-gender social dynamics allows students to focus more effectively on learning without the distractions and social pressures associated with adolescent interactions. Some research suggests that girls in single-sex environments are more confident in traditionally male-dominated subjects such as mathematics and science, and that boys demonstrate improved literacy outcomes when not competing with girls who may develop verbal skills earlier. Private single-sex schools in many countries have consistently produced strong academic results.

However, co-educational schools offer advantages that extend beyond academic achievement. Mixed environments expose students to diverse perspectives and communication styles, developing the social skills and empathy required for collaboration in professional settings where men and women invariably work together. Isolating young people by gender for much of their education may delay the development of the social competencies necessary for healthy adult relationships. Furthermore, the academic advantages attributed to single-sex schooling are often difficult to disentangle from the effects of selective admissions and higher funding in elite institutions.

In my opinion, the quality of teaching, the school's culture, and available resources matter far more to outcomes than the gender composition of the student body. A well-resourced co-educational environment that actively addresses the specific learning needs of all students is the most effective model for developing both academic ability and social readiness.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Discusses both views with some supporting detail; personal opinion stated.",
          band8: "Balanced discussion of both views; well-supported personal opinion integrated naturally.",
        },
        {
          criterion: "Form",
          band7: "Within or close to 200–300 words; clear paragraph structure.",
          band8: "Meets word requirement; logical and effective paragraph organisation.",
        },
        {
          criterion: "Grammar",
          band7: "Good range of structures; mostly accurate; minor errors.",
          band8: "Wide range; accurate complex structures; very few errors.",
        },
        {
          criterion: "Vocabulary",
          band7: "Appropriate vocabulary range; generally precise.",
          band8: "Wide, fluent vocabulary; rare minor errors only.",
        },
      ],
    },
  ],
};
