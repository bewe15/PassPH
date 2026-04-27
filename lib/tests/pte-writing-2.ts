import type { WritingTest } from "./writing-types";

export const pteWriting2: WritingTest = {
  id: "pte-writing-2",
  exam: "PTE",
  title: "PTE Academic Writing — Test 2",
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
      passage: `Urbanisation — the movement of populations from rural to urban areas — is one of the most powerful demographic forces shaping the twenty-first century. The proportion of the world's population living in cities surpassed 50 percent for the first time in 2008 and is projected to reach 70 percent by 2050, with the most rapid growth occurring in sub-Saharan Africa and South Asia. Cities generate the majority of global economic output and concentrate the skills, institutions, and infrastructure that drive innovation. However, rapid and unplanned urban growth also produces severe challenges: inadequate housing forces millions into informal settlements without access to clean water, sanitation, or security of tenure; urban heat islands and impermeable surfaces intensify flooding; air pollution causes millions of premature deaths annually; and the concentration of population increases the risks associated with infectious disease outbreaks and natural disasters. Effective urban governance, investment in sustainable infrastructure, and inclusive urban planning are widely recognised as essential to managing the urban transition in ways that capture its economic potential while mitigating its social and environmental costs.`,
      modelAnswer: `Urbanisation is accelerating rapidly worldwide, particularly in Africa and Asia, offering significant economic opportunities but also generating severe challenges — including housing shortages, pollution, flooding, and disease risk — that require effective governance and sustainable infrastructure investment to manage.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Captures the main argument; may emphasise one aspect at the expense of another.",
          band8: "Accurately and concisely captures both the opportunity and challenge dimensions of the passage.",
        },
        {
          criterion: "Form",
          band7: "Single sentence within the 5–75 word limit.",
          band8: "Single, complete grammatical sentence that meets the word requirement.",
        },
        {
          criterion: "Grammar",
          band7: "Grammatically sound with minor errors.",
          band8: "Accurate and fluent; demonstrates complex sentence construction.",
        },
        {
          criterion: "Vocabulary",
          band7: "Appropriate vocabulary; some paraphrasing of the source.",
          band8: "Precise vocabulary that demonstrates clear understanding; effective paraphrasing.",
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
      prompt: "In many countries, there is a shortage of affordable housing. What are the causes of this problem, and what measures could be taken to address it?",
      modelAnswer: `Housing affordability has become a critical issue in cities across the developed and developing world alike, driven by a combination of structural economic forces and policy failures. Understanding the causes is essential before effective solutions can be designed.

The primary driver of housing unaffordability is the persistent imbalance between housing supply and demand, particularly in major urban centres where employment opportunities are concentrated. Population growth, internal migration, and international immigration have all increased demand in cities where building constraints — including restrictive planning regulations, limited land availability, and protracted approval processes — have prevented supply from keeping pace. Simultaneously, housing has increasingly been treated as a financial investment rather than a social good, attracting capital from domestic and international investors seeking stable returns. This has driven up property prices beyond the reach of average-income households and distorted the rental market.

Addressing this problem requires action on multiple fronts. On the supply side, governments should reform planning systems to allow higher-density residential development in well-connected locations, streamline approval processes, and release publicly owned land for affordable housing construction. Social housing programmes, in which governments directly build and manage affordable rental properties — as practised successfully in countries such as Singapore and Austria — offer a proven model for providing housing that the private market will not supply at accessible prices.

On the demand side, measures to curb speculative investment — including taxes on vacant properties and restrictions on the rapid resale of newly built homes — can reduce pressure on prices. Ultimately, treating housing as infrastructure rather than an investment commodity is the most fundamental shift required to restore affordability.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Addresses causes and solutions; some development; may lack depth in one area.",
          band8: "Clearly addresses both causes and solutions with specific, well-developed examples.",
        },
        {
          criterion: "Form",
          band7: "Within or close to 200–300 words; paragraph structure present.",
          band8: "Meets word requirement; clear and effective paragraph structure.",
        },
        {
          criterion: "Grammar",
          band7: "Good range; mostly accurate; minor errors.",
          band8: "Varied and accurate structures; very few errors.",
        },
        {
          criterion: "Vocabulary",
          band7: "Adequate range; generally appropriate; occasional imprecision.",
          band8: "Wide, precise vocabulary; fluent expression throughout.",
        },
      ],
    },
  ],
};
