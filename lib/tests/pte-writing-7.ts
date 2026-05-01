import type { WritingTest } from "./writing-types";

export const pteWriting7: WritingTest = {
  id: "pte-writing-7",
  exam: "PTE",
  title: "PTE Academic Writing — Test 7",
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
      passage: `The gig economy, characterised by short-term contracts and platform-mediated work, has expanded dramatically over the past decade. Companies such as Uber, Deliveroo, and TaskRabbit have built multi-billion-dollar valuations by connecting workers with customers through digital platforms, bypassing traditional employment relationships. This model has proliferated across sectors including transportation, food delivery, freelance professional services, and domestic work.

For many workers, the appeal of gig employment lies in its flexibility. Individuals can choose their own hours, work across multiple platforms simultaneously, and balance paid work with family responsibilities or study. In economies with high youth unemployment, gig platforms have provided an entry point into the labour market for workers who might otherwise struggle to find conventional employment.

However, the structural design of gig work systematically denies workers the protections associated with standard employment. Gig workers are typically classified as independent contractors, meaning they are ineligible for minimum wage guarantees, sick pay, holiday entitlement, or employer pension contributions. Income volatility is a persistent problem, as earnings fluctuate unpredictably with demand, leaving many workers financially vulnerable. Access to collective bargaining and union membership is also severely curtailed under contractor classification.

Regulatory debates over the gig economy are intensifying across the world. The United Kingdom's Supreme Court ruled in 2021 that Uber drivers are workers entitled to minimum wage and holiday pay. California's Proposition 22 and subsequent legal battles reflect the contested nature of this issue in the United States. The European Union has proposed a directive that would create a legal presumption of employment for platform workers, signalling a potential shift in the regulatory landscape.`,
      modelAnswer: `The gig economy, exemplified by platforms such as Uber and Deliveroo, offers workers flexibility and labour market access but systematically denies them employment protections including minimum wage, sick pay, and pension rights, prompting increasingly significant regulatory interventions in the United Kingdom, the United States, and the European Union.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Captures both the benefits of flexibility and the lack of employment protections, with reference to regulation.",
          band8: "Precisely integrates platform model characteristics, worker vulnerabilities, and the evolving international regulatory response.",
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
        "Some people think that a gap year before university is beneficial for students. Others believe students should go straight to university after school. Discuss both views and give your own opinion.",
      modelAnswer: `The question of whether school leavers should take a gap year before entering higher education has long divided educators, parents, and students themselves. Both positions carry genuine merit, and the right choice often depends on the individual.

Supporters of gap years argue that a period of purposeful activity between school and university can yield significant personal benefits. Travelling, volunteering, or working abroad exposes young people to different cultures and perspectives, fostering maturity and independence that can enrich their academic experience. Research suggests that students who take a structured gap year often arrive at university with clearer career goals, stronger motivation, and better time-management skills than their peers who transition directly.

Conversely, those who advocate going straight to university contend that the momentum built during secondary school is valuable and difficult to recapture after a year away. Students may find it hard to reintegrate into academic routines after an extended break, particularly if their gap year lacked structure or intellectual engagement. There is also a financial dimension: delaying the start of a degree delays entry into the workforce, potentially increasing student debt and reducing lifetime earnings.

In my opinion, a well-planned gap year is more likely to be beneficial than harmful, provided it involves meaningful activities rather than passive leisure. The key is intention: students who use the time to develop skills, gain experience, or clarify their goals tend to outperform those who do not. Institutions and governments could do more to support structured gap year programmes that make this option accessible to students from all socioeconomic backgrounds.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant supporting points; clear personal opinion.",
          band8: "Both views developed with specific evidence; nuanced personal position with qualifications and policy suggestion.",
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
