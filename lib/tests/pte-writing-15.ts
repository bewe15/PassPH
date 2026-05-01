import type { WritingTest } from "./writing-types";

export const pteWriting15: WritingTest = {
  id: "pte-writing-15",
  exam: "PTE",
  title: "PTE Academic Writing — Test 15",
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
      prompt: "Write a single sentence (5–75 words) that summarises the passage below.",
      passage: `The nature of work is undergoing a fundamental transformation driven by advances in automation and artificial intelligence. Routine cognitive and manual tasks that once required human labour — from data processing and customer service to assembly line manufacturing — are increasingly being performed by machines and software algorithms. The World Economic Forum has projected that automation could displace up to 85 million jobs globally by 2025, though the same technology is expected to create approximately 97 million new roles, many of which do not yet exist in their current form.

These emerging job categories are concentrated in areas requiring distinctly human capabilities: creative problem-solving, emotional intelligence, complex communication, and the management of advanced technological systems. However, the transition is unlikely to be seamless. Workers in declining industries often lack the skills needed for growing sectors, creating a mismatch that threatens to widen economic inequality if left unaddressed. This reality has intensified calls for reskilling programmes and a cultural shift towards lifelong learning as a professional necessity rather than a personal choice.

The debate over Universal Basic Income (UBI) has gained renewed momentum in this context. Advocates argue that providing all citizens with a guaranteed income floor would cushion the disruption caused by automation and give workers the security to retrain without falling into poverty. Critics counter that UBI is fiscally unsustainable and could reduce incentives to work.

The nature of employment contracts is also shifting. The rise of gig economy platforms such as Uber and Deliveroo has normalised flexible, short-term, project-based work arrangements, offering autonomy to some workers while depriving others of the security of traditional employment benefits such as sick pay, pensions, and career progression.`,
      modelAnswer: `Automation and AI are displacing routine jobs on a vast scale while creating new roles that demand human skills such as creativity and emotional intelligence, yet the uneven nature of this transition — combined with skills mismatches, growing gig economy precarity, and unresolved debates over Universal Basic Income — underscores the urgent need for reskilling programmes and lifelong learning frameworks.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers job displacement, new roles, reskilling need, and UBI debate.",
          band8: "Accurately synthesises all four themes: automation impact, emerging roles, UBI debate, and changing employment contracts.",
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
        "Some people think that the teenage years are the happiest time of most people's lives. Others think that adult life brings more happiness. Discuss both views and give your own opinion.",
      modelAnswer: `Whether adolescence or adulthood represents the happiest phase of life is a question that prompts deeply personal reflection, yet both periods offer distinct sources of joy and fulfilment that are worth examining objectively.

Those who regard the teenage years as uniquely happy point to the relative freedom from serious responsibility. Adolescents are generally sheltered from the financial pressures, career obligations, and family burdens that characterise adult life. The intensity of friendships formed during this period, the excitement of new experiences, and the sense of possibility that accompanies youth all contribute to an idealised memory of teenage happiness that many adults recall with nostalgia.

However, it is equally valid to argue that adulthood brings a deeper and more sustainable form of happiness. Mature relationships, meaningful professional achievement, financial independence, and the satisfaction of raising a family can provide sources of fulfilment that are unavailable to teenagers. Research in positive psychology suggests that life satisfaction tends to increase with age, as adults develop greater emotional regulation, clearer values, and a stronger sense of identity.

In my opinion, happiness in each life stage is real but qualitatively different. Adolescent happiness is often vivid and immediate, while adult happiness tends to be more reflective and purposeful. Rather than ranking one phase above the other, it is more useful to recognise that wellbeing depends on individual circumstances, relationships, and mindset at any age. What matters most is cultivating gratitude and connection throughout all stages of life.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed; own opinion clearly stated with supporting reasoning.",
          band8: "Nuanced comparison of both life stages; opinion is well-integrated and substantiated with psychological insight.",
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
