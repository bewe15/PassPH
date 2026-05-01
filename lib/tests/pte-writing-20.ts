import type { WritingTest } from "./writing-types";

export const pteWriting20: WritingTest = {
  id: "pte-writing-20",
  exam: "PTE",
  title: "PTE Academic Writing — Test 20",
  totalSeconds: 1800,
  tasks: [
    {
      id: 1,
      type: "pte_swt",
      taskLabel: "Task 1 — Summarise Written Text",
      instructions:
        "Read the passage below and summarise it using one sentence. Type your response in the box. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      timeSeconds: 600,
      minWords: 5,
      maxWords: 75,
      prompt:
        "Write a single sentence (5–75 words) that summarises the passage below.",
      passage: `Loneliness has emerged as a significant public health concern in many developed nations, with researchers describing it as an epidemic that coexists, paradoxically, with unprecedented levels of digital connectivity. Surveys conducted across the United States, the United Kingdom, and Australia consistently find that between 20 and 30 percent of adults report feeling lonely on a regular basis. Public health researchers have drawn attention to the severe health consequences: chronic loneliness is associated with elevated risks of heart disease, stroke, dementia, and premature death, with some studies suggesting its health impact is comparable to smoking fifteen cigarettes a day.

The demographic distribution of loneliness is more complex than commonly assumed. While older adults — particularly those living alone after the death of a partner — remain disproportionately affected, survey data reveal that young adults aged 18 to 25 report some of the highest loneliness scores of any age group. Researchers suggest that the transition to adulthood, combined with heavy reliance on digital communication as a substitute for in-person interaction, may explain this finding.

Community-based interventions have shown promise as responses to the loneliness epidemic. Programmes that create structured opportunities for face-to-face interaction — such as men's sheds, community gardens, befriending services for isolated older adults, and intergenerational activity groups — have demonstrated measurable reductions in participants' reported loneliness. Several governments, recognising the scale of the problem, have appointed ministers for loneliness and are investing in social prescribing schemes that allow healthcare providers to refer patients to community activities rather than solely relying on medical treatment.`,
      modelAnswer: `Loneliness is a serious and growing public health crisis in developed nations, with 20–30% of adults affected and health consequences comparable to heavy smoking, disproportionately impacting both older adults and young people aged 18–25, yet community-based interventions such as social prescribing and structured face-to-face programmes are showing meaningful promise in reducing its prevalence.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Captures scale of loneliness, health impact, and at least one of the affected groups or interventions.",
          band8:
            "Accurately synthesises all key points — prevalence, health risks, unexpected youth impact, and community intervention effectiveness — in a single well-constructed sentence.",
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
      instructions:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organise your ideas, present supporting details, and control the elements of standard written English. You should write 200–300 words.",
      timeSeconds: 1200,
      minWords: 200,
      maxWords: 300,
      prompt:
        "Some people think that professional athletes make good role models for young people. Others believe they are not good role models. Discuss both views and give your own opinion.",
      modelAnswer: `Professional athletes occupy an extraordinarily visible place in contemporary culture, and whether they constitute positive role models for young people is a question worth examining from both sides.

Those who view athletes as admirable role models point to the qualities their success demands: years of disciplined training, the ability to handle pressure and failure, and commitment to continuous self-improvement. Athletes like Serena Williams or Eliud Kipchoge have transcended sport to become symbols of perseverance and resilience that genuinely inspire younger generations. Many professional athletes also engage in philanthropy and community work, using their platforms to advocate for social causes and demonstrate that success can coexist with social responsibility.

Critics, however, argue that professional athletes are poor role models because their public behaviour frequently falls short. High-profile cases of drug use, domestic violence, financial recklessness, and unsportsmanlike conduct regularly appear in the media, sending damaging signals to impressionable young people. Furthermore, an athlete's prominence rests on physical talent rather than intellectual or moral virtue, which may cause young people to overvalue physical achievement at the expense of academic effort or character development.

In my view, athletes are neither universally good nor bad role models — they are individuals whose influence depends on their personal conduct and the values they choose to promote. Parents and educators play the decisive role in helping young people engage critically with the athletes they admire, rather than accepting them uncritically. When young people learn to distinguish athletic excellence from personal virtue, they can draw genuine inspiration from sport without the risk of emulating harmful behaviours.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Both views addressed with supporting points; a clear personal opinion is stated.",
          band8:
            "Both views fully developed with specific examples; personal opinion is nuanced and well-supported.",
        },
        {
          criterion: "Form",
          band7:
            "Within or close to 200–300 words; clear paragraph structure.",
          band8:
            "Meets word requirement; logical and effective paragraph organisation.",
        },
        {
          criterion: "Grammar",
          band7:
            "Good range of structures; mostly accurate; minor errors.",
          band8:
            "Wide range; accurate complex structures; very few errors.",
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
