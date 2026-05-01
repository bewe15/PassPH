import type { WritingTest } from "./writing-types";

export const pteWriting8: WritingTest = {
  id: "pte-writing-8",
  exam: "PTE",
  title: "PTE Academic Writing — Test 8",
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
      passage: `Antibiotic resistance has been described by the World Health Organization as one of the greatest threats to global health, food security, and development. The phenomenon occurs when bacteria evolve mechanisms that render standard antibiotic treatments ineffective, allowing infections that were once easily cured to become life-threatening. Drug-resistant strains of tuberculosis, gonorrhoea, and common hospital-acquired infections are already causing significant morbidity and mortality worldwide.

The overuse and misuse of antibiotics in both human medicine and agriculture have accelerated the emergence of resistant strains. In many countries, antibiotics are available without prescription, leading to inappropriate self-medication for viral illnesses against which the drugs have no effect. In livestock farming, antibiotics are routinely administered not only to treat disease but to promote growth, providing a continuous selective pressure that encourages resistance to develop and spread through environmental pathways.

The pharmaceutical industry has largely withdrawn from antibiotic development because the economics are unfavourable. New antibiotics, if developed, are typically reserved as drugs of last resort and used sparingly, generating limited revenue compared to medicines for chronic conditions taken daily over a lifetime. This market failure means the pipeline of novel antibiotics is critically thin at precisely the moment when new treatments are most urgently needed.

Addressing antibiotic resistance requires a multifaceted response. Stewardship programmes in hospitals can reduce unnecessary prescribing, while public education campaigns can discourage inappropriate use. International coordination to restrict agricultural antibiotic use and new funding models to incentivise pharmaceutical research — including push funding and market entry rewards — are also considered essential components of an effective global strategy.`,
      modelAnswer: `Antibiotic resistance, driven by overuse in human medicine and agricultural settings and exacerbated by a critically depleted pharmaceutical development pipeline, has been declared a global health crisis by the WHO, necessitating coordinated international action through stewardship programmes, restrictions on agricultural use, and new financial incentives for antibiotic research.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Identifies the cause of resistance and at least one recommended response.",
          band8: "Accurately integrates the causes in medicine and agriculture, market failure in drug development, and the multi-pronged response required.",
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
        "Governments should make it mandatory for people to learn a foreign language from primary school. To what extent do you agree or disagree?",
      modelAnswer: `The idea of mandating foreign language learning from the earliest years of schooling is increasingly advocated by educators and policymakers. I largely agree with this proposition, though some qualifications are necessary.

The cognitive and developmental case for early language instruction is compelling. Research in linguistics and neuroscience consistently demonstrates that children acquire second languages far more naturally and effectively than adults, owing to greater neural plasticity in the developing brain. Beginning instruction at primary level therefore maximises long-term proficiency and reduces the enormous cost society incurs when people try to learn languages as adults. Beyond linguistics, bilingual and multilingual individuals show advantages in executive function, cognitive flexibility, and even delayed onset of dementia.

The economic and diplomatic benefits of a multilingual population are equally significant. In an era of globalised trade and migration, citizens who can communicate across linguistic boundaries are more employable and better equipped to engage with international partners. Countries such as the Netherlands and Singapore, where foreign language instruction begins early and is consistently resourced, demonstrate the professional dividends this approach yields.

However, making instruction mandatory does not guarantee outcomes. Success depends critically on the quality of teaching, the resources allocated, and meaningful opportunities to use the language outside the classroom. Governments must therefore invest not only in policy mandates but in teacher training and authentic communicative practice if the requirement is to produce genuinely proficient speakers.

In conclusion, mandatory early foreign language education is sound policy, provided it is implemented with adequate funding, skilled teachers, and a communicative rather than purely academic approach.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Clear position with relevant cognitive and economic arguments; limitations acknowledged.",
          band8: "Well-developed argument with neuroscientific, economic, and implementation dimensions; balanced position with specific country examples.",
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
