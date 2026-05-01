import type { WritingTest } from "./writing-types";

export const pteWriting13: WritingTest = {
  id: "pte-writing-13",
  exam: "PTE",
  title: "PTE Academic Writing — Test 13",
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
      passage: `The global prevalence of mental health conditions such as anxiety and depression has risen sharply over the past two decades, a trend that has accelerated among young people in particular. The World Health Organization estimates that one in eight people worldwide currently lives with a mental health disorder, making it one of the leading causes of disability. Researchers have identified several contributing factors, with heavy social media use emerging as a particularly prominent concern among adolescents. Studies suggest that constant comparison with curated online personas, cyberbullying, and sleep disruption linked to screen time all contribute to declining emotional wellbeing.

Workplace stress represents another significant driver of the crisis among adults. Increasing job insecurity, longer working hours, and the erosion of boundaries between professional and personal life — accelerated by remote working — have placed considerable psychological strain on employees globally. Many workers report feeling unable to seek help for fear of jeopardising their careers, reflecting a persistent cultural stigma surrounding mental illness.

This stigma remains one of the most formidable barriers to treatment. Despite growing public awareness campaigns, many individuals still delay or avoid seeking professional help, fearing judgment or discrimination. The consequences are severe: untreated mental health conditions are strongly associated with physical health deterioration, relationship breakdown, and reduced workplace productivity.

Compounding these challenges is a chronic underfunding of mental health services in most countries. Mental health receives a disproportionately small share of national health budgets relative to the scale of the problem, leaving services overwhelmed and waiting times dangerously long. Advocates argue that closing this investment gap is essential if societies are to address the growing mental health crisis effectively.`,
      modelAnswer: `A global mental health crisis, driven by social media pressures on young people, rising workplace stress, and persistent stigma that discourages help-seeking, is being severely worsened by the chronic underfunding of mental health services, which leaves healthcare systems overwhelmed and unable to meet the needs of the one in eight people worldwide affected by mental health disorders.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers rising rates, social media, stigma, and underfunding as main points.",
          band8: "Accurately integrates all four themes: prevalence, contributing factors, stigma, and service deficits.",
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
        "Some people think that strict punishments for driving offences are the key to reducing traffic accidents. Others, however, believe that education is the better solution. Discuss both views.",
      modelAnswer: `Road safety remains a critical public health concern, and opinions differ sharply on whether harsh penalties or driver education represent the most effective means of reducing accidents.

Advocates of strict punishment argue that deterrence is the most direct mechanism for changing behaviour. Heavy fines, licence suspensions, and custodial sentences for serious offences such as drink-driving or reckless speeding send a clear message that dangerous behaviour carries severe consequences. Countries with rigorous enforcement regimes, such as Sweden with its Vision Zero programme, have recorded significant reductions in road fatalities, suggesting that strong legal frameworks do contribute meaningfully to safety outcomes.

Those who favour education, however, contend that punishment alone addresses the symptom rather than the root cause. Many traffic accidents result from poor hazard perception, insufficient vehicle control skills, or a lack of awareness about the effects of fatigue and distraction. Comprehensive driver training, public awareness campaigns, and school-based road safety education can instil responsible habits before drivers ever take to the road, potentially preventing accidents that punitive measures would only react to after the fact.

In practice, these two approaches are not mutually exclusive. The most effective road safety strategies combine rigorous driver education from an early age with clear, consistently enforced penalties for dangerous behaviour. Punishment without education fails to address knowledge gaps, while education without enforcement lacks the deterrent effect needed to modify the behaviour of those who disregard the rules. A balanced, integrated approach is therefore most likely to deliver lasting improvements in road safety.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant supporting arguments.",
          band8: "Both perspectives developed thoroughly; balanced conclusion integrating both approaches effectively.",
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
