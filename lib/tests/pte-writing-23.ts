import type { WritingTest } from "./writing-types";

export const pteWriting23: WritingTest = {
  id: "pte-writing-23",
  exam: "PTE",
  title: "PTE Academic Writing — Test 23",
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
      passage: `The human gut microbiome — the vast community of trillions of microorganisms residing in the digestive tract — plays a far more significant role in overall health than scientists appreciated even a decade ago. Recent research has established that gut bacteria are central regulators of the immune system: approximately seventy percent of immune cells are located in the gut, where they interact continuously with microbial communities to distinguish pathogens from harmless substances and calibrate inflammatory responses. Disruptions to microbial diversity, a condition known as dysbiosis, have been linked to autoimmune disorders, chronic inflammation, and increased susceptibility to infection. Equally surprising is the emerging evidence connecting the gut and the brain via the gut-brain axis — a bidirectional communication network involving neural, hormonal, and immunological pathways. Studies have found that imbalances in gut bacteria correlate with elevated rates of depression, anxiety, and cognitive difficulties, potentially because gut microbes synthesise neurotransmitters including serotonin, dopamine precursors, and gamma-aminobutyric acid. These findings have stimulated substantial interest in probiotic and dietary interventions as complementary treatments for both immune and mental health conditions.`,
      modelAnswer: `Recent scientific research has revealed that the gut microbiome plays a critical dual role in human health, regulating immune function by hosting the majority of immune cells and influencing mental health through the gut-brain axis, with disruptions to microbial diversity linked to autoimmune disorders, depression, and anxiety, prompting interest in dietary and probiotic interventions.`,
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
        "Some argue that people who work from home become socially isolated. Others believe remote work improves work-life balance. Discuss both views and give your opinion.",
      modelAnswer: `Remote work has become a defining feature of modern employment, generating debate about whether its social costs outweigh its personal benefits. Both perspectives have merit, though I believe the advantages of remote work generally outweigh the drawbacks when managed thoughtfully.

Those concerned about social isolation point to the loss of spontaneous workplace interactions — informal conversations, collaborative problem-solving, and the camaraderie that develops in shared physical spaces. Research published in organisational psychology journals suggests that fully remote employees report lower feelings of belonging and are at greater risk of loneliness over extended periods. For individuals living alone or in unfamiliar cities, the office may represent their primary social environment.

Proponents of remote work, however, emphasise its transformative effect on work-life balance. Eliminating commutes saves workers an average of one hour daily, time that can be redirected to family, exercise, hobbies, or rest. Remote workers frequently report higher job satisfaction, reduced stress, and greater autonomy over their schedules. Parents and carers particularly benefit from the flexibility to manage domestic responsibilities alongside professional obligations.

In my view, the key lies not in choosing between office and home, but in designing hybrid arrangements that preserve human connection while allowing schedule flexibility. Organisations can foster community through regular team days, virtual social events, and clear communication norms that prevent isolation without eliminating the flexibility employees value.

In conclusion, while social isolation is a genuine risk of remote work, its benefits for work-life balance are substantial, and thoughtful hybrid models can effectively address both concerns.`,
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
