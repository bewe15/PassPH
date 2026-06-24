import type { WritingTest } from "./writing-types";

export const pteWriting21: WritingTest = {
  id: "pte-writing-21",
  exam: "PTE",
  title: "PTE Academic Writing — Test 21",
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
      passage: `Microplastics — fragments smaller than five millimetres — have infiltrated virtually every layer of the marine food chain, with consequences that scientists are only beginning to understand. These particles originate from the breakdown of larger plastic debris, synthetic textile fibres, and industrial pellets, and they accumulate in oceanic gyres before being ingested by zooplankton, small fish, and filter feeders such as mussels and oysters. As predators consume contaminated prey, microplastics and their associated chemical pollutants — including endocrine-disrupting additives and adsorbed persistent organic pollutants — biomagnify at each trophic level. Laboratory studies have demonstrated reproductive impairment, reduced feeding rates, and physical intestinal blockages in exposed marine organisms. At the apex of the food chain, large predatory fish and marine mammals show elevated concentrations of these contaminants. Because humans rely on seafood as a primary protein source globally, microplastic contamination ultimately poses a direct threat to human health, though the precise long-term effects remain an active area of epidemiological investigation.`,
      modelAnswer: `Microplastics, originating from degraded plastic waste and synthetic fibres, pervade the marine food chain — from zooplankton to apex predators — accumulating harmful chemical pollutants at each trophic level through biomagnification, thereby threatening the reproductive health and survival of marine organisms and, through seafood consumption, posing a potential risk to human health.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Summarises the main points of the passage; may include minor details or omit one key idea.",
          band8: "Accurately captures the key points of the passage in a concise and well-balanced sentence.",
        },
        {
          criterion: "Form",
          band7: "Response is written as a single sentence and falls within the 5–75 word limit.",
          band8: "Response is a single, grammatically complete sentence within the word limit.",
        },
        {
          criterion: "Grammar",
          band7: "Uses appropriate grammar with minor errors that do not impede comprehension.",
          band8: "Grammatically accurate and fluent; demonstrates control of complex sentence structures.",
        },
        {
          criterion: "Vocabulary",
          band7: "Uses appropriate vocabulary; some paraphrasing of source language.",
          band8: "Effective paraphrasing; precise vocabulary choices that reflect understanding of the passage.",
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
        "Governments should invest more in space exploration rather than solving problems on Earth. Do you agree or disagree?",
      modelAnswer: `While space exploration has yielded remarkable scientific achievements, I strongly disagree that governments should prioritise it over addressing urgent terrestrial challenges such as poverty, climate change, and inadequate healthcare.

The case for space investment rests on technological spin-offs and long-term survival. Innovations derived from space programmes — including GPS, water purification technology, and miniaturised electronics — have transformed daily life. Furthermore, proponents argue that establishing a presence beyond Earth provides an insurance policy against existential threats such as asteroid impacts or resource depletion.

However, these arguments do not justify reducing investment in pressing earthly crises. Hundreds of millions of people lack access to clean water, nutritious food, and basic medical care. Climate change threatens coastal populations and agricultural systems that billions depend upon. These problems are immediate, solvable with current knowledge, and demand substantial public funding. Redirecting resources to space exploration while communities face avoidable suffering represents a misallocation of national priorities.

Moreover, space exploration need not be exclusively government-funded. Private companies such as SpaceX and Blue Origin have demonstrated that commercial enterprises can drive space innovation efficiently, potentially freeing public budgets for social investment.

In conclusion, while space exploration deserves continued support, governments have an ethical obligation to direct the majority of public resources towards alleviating human suffering and environmental crises on Earth. A balanced approach — maintaining space programmes while substantially increasing investment in health, education, and sustainability — best serves the global population.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Addresses the task prompt; presents main ideas with some development; may lack full balance or depth in one area.",
          band8: "Addresses the prompt fully; presents a well-balanced discussion with clear personal opinion; ideas are well-developed.",
        },
        {
          criterion: "Form",
          band7: "Response falls within or close to the 200–300 word range; organised in clear paragraphs.",
          band8: "Response meets the word requirement; paragraphing is effective and logical.",
        },
        {
          criterion: "Grammar",
          band7: "Good grammatical control; range of structures; minor errors that do not affect meaning.",
          band8: "Accurate and varied grammar; complex structures used effectively; very few errors.",
        },
        {
          criterion: "Vocabulary",
          band7: "Appropriate range of vocabulary; some flexibility; occasional minor word choice issues.",
          band8: "Wide and precise vocabulary; fluent expression; very few lexical errors.",
        },
      ],
    },
  ],
};
