import type { WritingTest } from "./writing-types";

export const pteWriting10: WritingTest = {
  id: "pte-writing-10",
  exam: "PTE",
  title: "PTE Academic Writing — Test 10",
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
      passage: `Food waste is a crisis of staggering proportions. The United Nations Food and Agriculture Organization estimates that approximately one third of all food produced globally for human consumption — around 1.3 billion tonnes annually — is lost or wasted. This occurs across every stage of the supply chain, from post-harvest losses in the field to spoilage during storage and transport, overproduction by manufacturers, over-ordering by retailers, and discarding of edible food by consumers.

The environmental consequences are severe. Decomposing food in landfills is a significant source of methane, a potent greenhouse gas, and the resources squandered in producing wasted food — including land, water, fertiliser, and energy — represent a substantial and unnecessary burden on planetary systems. It is estimated that if food waste were a country, it would be the third largest emitter of greenhouse gases in the world, after China and the United States.

The economic costs are equally sobering. Globally, food waste costs approximately one trillion US dollars per year, a figure that encompasses production costs, retail losses, and the opportunity cost of food that could have nourished the one in ten people worldwide who suffer from chronic hunger.

Researchers and policymakers have proposed a range of interventions. Precision agriculture and improved cold-chain logistics can reduce losses at the production and distribution stages. Date labelling reform can prevent the unnecessary discarding of safe food by confused consumers. Surplus food redistribution networks can redirect unsold produce to food banks. Ultimately, however, reducing food waste requires a fundamental shift in consumer attitudes toward food, treating it not as a disposable commodity but as a finite and precious resource.`,
      modelAnswer: `Food waste, which accounts for one third of global food production and represents the world's third largest source of greenhouse gas emissions at a cost of one trillion dollars annually, demands urgent intervention through precision agriculture, cold-chain improvements, date labelling reform, and a cultural shift in how consumers value food.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Captures the scale of waste and environmental or economic impact alongside at least one solution.",
          band8: "Accurately integrates the scale, environmental impact, economic cost, and the range of technological and behavioural interventions required.",
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
        "Some people argue that universities should focus on providing academic knowledge, while others believe they should also prepare students for employment. Discuss both views and give your own opinion.",
      modelAnswer: `The purpose of a university education has long been contested. While traditionalists maintain that higher education's primary mission is the cultivation of intellectual inquiry, a growing number of voices argue that universities must also equip graduates with practical skills demanded by the modern labour market.

The case for prioritising academic knowledge rests on the foundational role universities have historically played in advancing human understanding. A rigorous grounding in critical thinking, research methodology, and disciplinary knowledge produces graduates capable of adapting to roles that do not yet exist, contributing to civic life, and driving innovation. Advocates of this view warn that reducing universities to vocational training institutions diminishes their intellectual ambition and narrows their social function.

Those who emphasise employability preparation point to the significant financial investment students make in their degrees. Graduate unemployment and underemployment are real problems in many countries, and employers consistently report that graduates lack workplace competencies such as communication, project management, and digital proficiency. Internship programmes, industry partnerships, and applied learning opportunities can bridge the gap between academic study and professional practice without sacrificing intellectual rigour.

In my view, the opposition between academic knowledge and employment preparation is largely false. The most effective universities integrate both: they develop disciplinary expertise while embedding transferable skills through collaborative projects, work placements, and entrepreneurship support. A philosophy graduate who can think rigorously and communicate persuasively is no less employable than one trained in a narrow vocational skill. Governments and institutions should fund and design curricula that honour both dimensions of a genuinely transformative university education.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant arguments; clear personal opinion.",
          band8: "Both perspectives fully developed; persuasive synthesis arguing the false dichotomy with specific examples and institutional recommendations.",
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
