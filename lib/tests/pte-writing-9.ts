import type { WritingTest } from "./writing-types";

export const pteWriting9: WritingTest = {
  id: "pte-writing-9",
  exam: "PTE",
  title: "PTE Academic Writing — Test 9",
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
      passage: `Social media platforms rely on recommendation algorithms to determine which content users see, prioritising material predicted to maximise engagement. While this approach successfully retains users on platforms for longer periods, researchers and regulators have raised profound concerns about its broader societal consequences. The design logic of engagement optimisation tends to amplify emotionally provocative and extreme content, since such material generates disproportionately high levels of interaction.

One widely documented consequence of algorithmic curation is the formation of filter bubbles — information environments in which users are predominantly exposed to content that reinforces their existing beliefs. As algorithms learn individual preferences and serve increasingly personalised feeds, users encounter fewer challenging perspectives, potentially deepening political and social polarisation. This dynamic has been linked to the spread of misinformation, as false but emotionally resonant content circulates readily within closed ideological networks.

The impact on adolescent mental health has attracted particular attention from researchers and public health authorities. Studies have associated heavy social media use in teenagers with elevated rates of anxiety, depression, and body image dissatisfaction, effects that are especially pronounced among young women. Algorithmic features that continuously surface appearance-related content and social comparisons are thought to contribute significantly to these outcomes.

In response, civil society groups, academics, and legislators in multiple countries have called for greater algorithmic transparency, requiring platforms to disclose how their recommendation systems function. Additional proposals include giving users meaningful control over algorithmic curation, conducting independent audits of platform algorithms, and applying age-appropriate design standards to protect younger users. Platforms have generally resisted these measures, citing commercial confidentiality and technical complexity.`,
      modelAnswer: `Social media recommendation algorithms, designed to maximise engagement by amplifying emotionally provocative and extreme content, create filter bubbles that deepen polarisation, facilitate misinformation, and harm adolescent mental health, prompting calls for legislative requirements for algorithmic transparency, independent audits, and age-appropriate design standards that platforms continue to resist.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Captures the filter bubble effect and mental health concern alongside calls for regulation.",
          band8: "Precisely integrates the engagement-optimisation mechanism, filter bubbles, adolescent mental health harm, and the contested regulatory proposals.",
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
        "Some people think that the best way to reduce crime is to give longer prison sentences. Others believe that there are better alternative ways of reducing crime. Discuss both views.",
      modelAnswer: `Crime reduction is a persistent challenge for societies worldwide, and policymakers remain divided over whether harsher custodial sentences or alternative interventions represent the more effective approach. Both positions command support, though the evidence increasingly favours a broader strategy.

Proponents of longer sentences argue that they serve twin purposes: incapacitation and deterrence. A convicted offender who is imprisoned cannot commit further crimes against the general public during the period of incarceration. Furthermore, the prospect of a lengthy sentence may discourage potential offenders from engaging in criminal behaviour in the first place. Supporters of this view point to mandatory minimum sentencing policies in countries such as the United States as examples of robust criminal justice.

Critics counter, however, that the empirical evidence for deterrence is weak: most crimes are not committed after rational cost-benefit analysis, but impulsively or under the influence of substances, poverty, or mental illness. High incarceration rates also impose enormous costs on public budgets, and recidivism rates suggest that prison often fails to rehabilitate offenders. Alternatives such as restorative justice programmes, community service, drug rehabilitation, and investment in education and employment in high-crime communities have demonstrated more sustained reductions in reoffending in various national contexts.

The weight of evidence suggests that while imprisonment remains appropriate for serious and violent offences, over-reliance on custodial sentencing is both costly and counterproductive. A balanced criminal justice system should pair proportionate sentences for serious crimes with robust rehabilitation and prevention programmes that address the root causes of offending, thereby producing more durable reductions in crime.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views presented with deterrence and rehabilitation arguments; evidence-informed conclusion.",
          band8: "Both perspectives fully developed with empirical grounding; nuanced conclusion distinguishing serious from non-serious offences.",
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
