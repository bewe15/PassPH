import type { WritingTest } from "./writing-types";

export const pteWriting19: WritingTest = {
  id: "pte-writing-19",
  exam: "PTE",
  title: "PTE Academic Writing — Test 19",
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
      passage: `Personalised medicine, powered by advances in genomic sequencing, is transforming how diseases are diagnosed and treated. The cost of sequencing a complete human genome has plummeted from approximately three billion US dollars in 2003 to under five hundred dollars today, making it increasingly feasible to incorporate a patient's genetic profile into routine clinical care. By analysing an individual's DNA, clinicians can identify genetic variants that influence how a patient will respond to specific drugs, enabling far more precise prescribing and reducing the trial-and-error approach that characterises conventional medicine.

The impact on cancer treatment has been particularly dramatic. Oncologists can now sequence a tumour's genome to identify the specific mutations driving its growth and select targeted therapies designed to block those precise pathways. This approach has yielded survival improvements in several cancers, including certain types of leukaemia, lung cancer, and melanoma, that were unthinkable just two decades ago.

Despite these advances, significant ethical and social challenges accompany the genomic revolution. The collection and storage of highly sensitive genetic data raises profound concerns about privacy: a data breach could expose not only an individual's medical predispositions but also information relevant to their biological relatives. There is also growing concern that insurers or employers may seek access to genetic data and use it to discriminate against individuals perceived to be at higher risk of disease. Regulatory frameworks in many countries have not yet kept pace with the technology, leaving gaps in legal protection. Ensuring equitable access to personalised medicine across different income groups and geographies remains another pressing challenge as the field continues to mature.`,
      modelAnswer: `Advances in affordable genome sequencing are enabling personalised medicine — particularly transforming cancer treatment through targeted therapies matched to individual tumour mutations — but the rapid growth of genomic data also raises serious ethical concerns about privacy, potential discrimination by insurers and employers, inadequate regulation, and unequal access across socioeconomic groups.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Covers the key benefit (personalised/cancer treatment) and at least one ethical concern (privacy or discrimination).",
          band8:
            "Accurately synthesises all key points — affordable sequencing, cancer treatment advances, privacy risks, discrimination, regulatory gaps, and access inequality — in a single coherent sentence.",
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
        "Some people think that the government should provide financial assistance to all artists including painters, musicians and poets. Others think that this is a waste of money. Discuss both views.",
      modelAnswer: `The question of whether governments should fund the arts provokes strong disagreement. Supporters of public arts funding and those who view it as an unnecessary expenditure both present compelling arguments, and a thoughtful assessment requires examining each position.

Advocates of government arts funding argue that artistic and cultural production enriches society in ways that the market alone cannot sustain. Many valuable art forms — classical music, experimental theatre, poetry — have limited commercial appeal yet contribute significantly to national identity and cultural heritage. Without public support, these forms might disappear, leaving culture impoverished. Arts funding also supports education, tourism, and community wellbeing, delivering broader economic returns that justify public investment.

Critics, however, contend that in an era of constrained public budgets, spending on the arts is difficult to justify when pressing needs in healthcare, education, and infrastructure go unmet. They argue that artists should demonstrate their value by attracting private patronage or commercial audiences, and that government subsidy risks creating an insulated arts establishment that is out of touch with public tastes. From this perspective, funding all artists indiscriminately — regardless of quality or public interest — represents poor stewardship of taxpayers' money.

A reasonable middle ground might involve targeted public funding directed at arts organisations with demonstrated community benefit, cultural significance, or educational outreach, rather than universal grants to all practitioners. This approach preserves the most socially valuable artistic activities while ensuring accountability for public expenditure.

Ultimately, the arts make a genuine contribution to civilised society, and some degree of government support seems warranted, provided it is allocated transparently and with clear criteria.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Both views clearly presented with relevant supporting points; response stays on topic throughout.",
          band8:
            "Both views fully developed with specific examples or reasoning; a nuanced synthesis or conclusion strengthens the response.",
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
