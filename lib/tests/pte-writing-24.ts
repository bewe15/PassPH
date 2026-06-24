import type { WritingTest } from "./writing-types";

export const pteWriting24: WritingTest = {
  id: "pte-writing-24",
  exam: "PTE",
  title: "PTE Academic Writing — Test 24",
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
      passage: `Household debt has reached historically elevated levels across many developed economies, placing significant financial strain on families and creating systemic risks for broader economic stability. A growing body of research suggests that inadequate financial literacy is a key contributing factor: individuals who lack foundational knowledge of compound interest, credit management, budgeting, and long-term savings are disproportionately likely to accumulate unsustainable debt. Introducing structured financial literacy programmes into secondary school curricula has been proposed as a long-term remedy. Longitudinal studies from Australia, the United States, and Canada, where such programmes have been piloted, indicate that students who receive formal financial education are more likely to budget consistently, save a portion of their income, and avoid high-interest credit products in adulthood. Critics note that curriculum quality varies considerably and that financial education alone cannot address structural inequalities such as stagnant wages and rising living costs. Nevertheless, proponents argue that empowering individuals with practical financial knowledge provides essential decision-making tools that can meaningfully reduce impulsive borrowing and the accumulation of high-interest debt across successive generations.`,
      modelAnswer: `Embedding financial literacy education in secondary school curricula has been shown in longitudinal research across multiple countries to equip young people with practical knowledge of budgeting, credit, and savings that, despite not addressing broader structural inequalities, can substantially reduce impulsive borrowing and the intergenerational accumulation of unsustainable household debt.`,
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
        "The gap between rich and poor countries is widening. What are the main causes of this and what can be done to address it?",
      modelAnswer: `The growing economic divide between wealthy and developing nations is one of the most pressing challenges of the twenty-first century. Understanding its root causes is essential to designing effective interventions.

Several interconnected factors drive this widening gap. First, unequal access to technology and digital infrastructure means that high-income countries can automate production and expand service industries at a pace that developing economies cannot match. Second, historical patterns of colonial exploitation left many lower-income countries with limited institutional capacity, weak governance, and debt dependencies that constrain investment in education and infrastructure. Third, the terms of global trade frequently disadvantage developing nations: agricultural subsidies in wealthy countries suppress prices for exported commodities, while intellectual property protections restrict technology transfer.

Addressing these disparities requires coordinated action at multiple levels. Internationally, wealthier nations should increase official development assistance and cancel unsustainable sovereign debt, enabling governments in lower-income countries to invest in health, education, and infrastructure. Trade agreements must be reformed to ensure fairer terms for developing economies, particularly in agriculture and pharmaceutical patents. Domestically, governments in developing nations should prioritise anti-corruption measures and invest in primary education and digital connectivity, which research consistently identifies as the strongest predictors of long-term economic growth.

In conclusion, the widening gap between rich and poor nations stems from entrenched structural inequalities in trade, technology access, and governance. Meaningful progress requires both international commitment to fairer global systems and domestic reforms that build human capital and institutional strength.`,
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
