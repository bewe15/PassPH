import type { WritingTest } from "./writing-types";

export const pteWriting16: WritingTest = {
  id: "pte-writing-16",
  exam: "PTE",
  title: "PTE Academic Writing — Test 16",
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
      passage: `Ocean acidification refers to the ongoing decrease in the pH of Earth's oceans, caused primarily by their absorption of excess carbon dioxide from the atmosphere. Since the Industrial Revolution, the oceans have absorbed approximately 30 percent of all anthropogenic CO2 emissions, a process that generates carbonic acid and reduces the concentration of carbonate ions in seawater. Since pre-industrial times, ocean pH has fallen by approximately 0.1 units — a seemingly small shift that represents a 26 percent increase in acidity due to the logarithmic nature of the pH scale.

The consequences for marine ecosystems are severe. Coral reefs, often described as the rainforests of the sea for their extraordinary biodiversity, are particularly vulnerable. Reduced carbonate availability impairs the ability of corals and shellfish to form and maintain their calcium carbonate skeletons and shells, leading to bleaching, erosion, and eventual reef collapse. Given that coral reefs support approximately 25 percent of all marine species, their degradation threatens the broader marine food web.

Disruption to food chains extends well beyond coral ecosystems. Pteropods — small free-floating molluscs that form a critical part of the diet of species including salmon, herring, and baleen whales — are dissolving in increasingly acidic waters in polar regions. As foundational species decline, the cascading effects on fisheries threaten the food security and livelihoods of the more than three billion people who depend on seafood as a primary protein source.

Mitigation strategies include reducing CO2 emissions at source, protecting and restoring coastal ecosystems such as seagrass beds and mangroves that naturally buffer acidity, and researching techniques for direct ocean alkalinity enhancement, though all face significant technical, economic, and governance challenges.`,
      modelAnswer: `Ocean acidification, caused by the oceans absorbing roughly 30 percent of human CO2 emissions, is damaging coral reefs and dissolving the shells of foundational marine species such as pteropods, thereby disrupting food chains and threatening the food security of billions of people, while proposed mitigation strategies including emission reductions and ocean alkalinity enhancement face substantial practical challenges.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers CO2 absorption, coral reef damage, food chain disruption, and mitigation.",
          band8: "Accurately synthesises all four themes: chemistry, reef and shellfish impact, food security, and mitigation challenges.",
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
        "Some people think that museums and art galleries should be free for everyone to visit. Others think that they should be paid for by those who visit them. Discuss both views.",
      modelAnswer: `The question of whether museums and art galleries should be free to the public or funded through admission charges is a debate that touches on broader questions about the role of culture in society and the responsibilities of government.

Those who argue for free admission contend that cultural institutions serve an important public function and should be accessible to all, regardless of socioeconomic background. When entry is free, museums attract a more diverse audience, including school groups, families on low incomes, and tourists who might otherwise be deterred by cost. The United Kingdom's national museums, which have been free since 2001, saw visitor numbers increase dramatically following the removal of charges, suggesting that free entry genuinely broadens cultural participation.

Proponents of admission charges, however, argue that cultural institutions require substantial funding for maintenance, curation, and the acquisition of new works, and that users should contribute to those costs. In an era of constrained public budgets, charging visitors can generate vital revenue that helps museums maintain high standards and avoid dependence on government subsidies. Some also argue that people place greater value on experiences they pay for.

In practice, a hybrid model may offer the best solution. Many institutions offer free entry to permanent collections while charging for special exhibitions, or provide concessions for students, pensioners, and low-income visitors. This approach balances the goal of broad access with the financial realities of running complex cultural institutions. The priority should always be ensuring that economic barriers do not prevent engagement with the nation's shared cultural heritage.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant examples; position is implicit or stated.",
          band8: "Thorough exploration of both views with specific evidence; pragmatic hybrid conclusion is well-reasoned.",
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
