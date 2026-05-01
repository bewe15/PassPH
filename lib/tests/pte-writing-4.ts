import type { WritingTest } from "./writing-types";

export const pteWriting4: WritingTest = {
  id: "pte-writing-4",
  exam: "PTE",
  title: "PTE Academic Writing — Test 4",
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
      passage: `Artificial intelligence is rapidly transforming the field of healthcare, offering capabilities that were previously unimaginable. Machine learning algorithms can now analyse medical images such as X-rays, MRI scans, and pathology slides with accuracy that rivals, and in some cases exceeds, that of experienced clinicians. AI-driven diagnostic tools have demonstrated particular promise in the early detection of cancers, diabetic retinopathy, and cardiovascular conditions, potentially saving millions of lives through timely intervention.

Beyond diagnosis, AI systems are being deployed to predict patient outcomes, personalise treatment plans, and optimise hospital resource allocation. Predictive models can identify patients at high risk of sepsis or readmission, enabling preventive action before a crisis emerges. These applications have the potential to reduce healthcare costs substantially while improving the quality of care delivered to patients across diverse settings.

Nevertheless, the integration of AI into clinical practice presents significant challenges. Patient data required to train these systems raises serious concerns about privacy and consent, particularly when data is shared across institutional or national boundaries. Algorithmic bias poses another critical risk: if training datasets underrepresent certain demographic groups, the resulting models may perform poorly for those populations, potentially exacerbating existing health inequalities. Regulatory frameworks in most countries have struggled to keep pace with the speed of AI development, leaving gaps in oversight that could expose patients to harm if inadequately validated tools are deployed prematurely.

Addressing these challenges will require coordinated efforts from clinicians, technologists, ethicists, and policymakers to ensure that AI fulfils its enormous promise without compromising patient safety or equity.`,
      modelAnswer: `While artificial intelligence offers transformative potential in healthcare — including superior diagnostic accuracy in medical imaging, predictive patient outcome modelling, and cost reduction — its widespread clinical adoption is hindered by serious concerns surrounding data privacy, algorithmic bias against underrepresented populations, and regulatory frameworks that have failed to keep pace with technological development.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Captures the main benefit and at least one challenge of AI in healthcare.",
          band8: "Accurately conveys both the transformative potential and the key challenges including bias, privacy, and regulation.",
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
        "Some people think that governments should strictly regulate artificial intelligence to prevent misuse. Others believe that regulation will slow down innovation. Discuss both views and give your own opinion.",
      modelAnswer: `The rapid advancement of artificial intelligence has sparked a global debate about the appropriate role of government oversight. While some advocate for strict regulation to curb potential misuse, others warn that heavy-handed rules could stifle the innovation that makes AI so valuable.

Proponents of strict regulation argue that AI systems, if left unchecked, pose serious risks to society. Facial recognition technology has already been misused for mass surveillance, algorithmic decision-making has reinforced racial and gender bias in hiring and lending, and autonomous weapons raise profound ethical questions. Governments, they contend, have a duty to protect citizens from these harms just as they regulate pharmaceuticals or financial products.

On the other hand, critics of regulation point out that overly prescriptive rules can hamper research and drive talent and investment to less regulated jurisdictions. The European Union's GDPR, while laudable in intent, has been criticised for creating compliance burdens that disproportionately disadvantage smaller companies and start-ups. In a fast-moving field, regulations drafted today may be obsolete by the time they take effect.

In my view, the dichotomy between safety and innovation is a false one. Risk-based regulation — applying stricter rules to high-stakes applications such as medical diagnosis or criminal justice, while allowing lighter oversight for low-risk uses — can protect citizens without broadly impeding progress. International coordination is also essential to prevent regulatory arbitrage. Governments should act as thoughtful stewards rather than either passive bystanders or blunt censors of this powerful technology.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant supporting points; opinion stated.",
          band8: "Both views thoroughly developed with specific examples; well-reasoned personal opinion integrated throughout.",
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
