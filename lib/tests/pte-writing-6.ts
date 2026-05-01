import type { WritingTest } from "./writing-types";

export const pteWriting6: WritingTest = {
  id: "pte-writing-6",
  exam: "PTE",
  title: "PTE Academic Writing — Test 6",
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
      passage: `Microplastics — fragments of plastic smaller than five millimetres — have emerged as one of the most pervasive and troubling forms of environmental pollution in the modern era. These particles originate from multiple sources, including the gradual breakdown of larger plastic items exposed to sunlight and mechanical abrasion, as well as the shedding of synthetic textile fibres during washing. Plastic pellets used in manufacturing, known as nurdles, also enter waterways through industrial spillage.

Research has documented microplastics in virtually every corner of the planet, from the deepest ocean trenches to Arctic sea ice and remote mountain lakes. Marine organisms ingest the particles, which then accumulate through the food chain, reaching commercially important fish species and ultimately appearing on human dinner plates. In 2022, researchers confirmed the presence of microplastics in human blood for the first time, raising urgent questions about long-term health consequences.

The potential health impacts of microplastic exposure in humans are still under investigation, but early studies suggest possible links to inflammation, endocrine disruption, and cellular damage. Certain chemical additives embedded in plastics, such as phthalates and bisphenol A, are known endocrine disruptors that can leach from the particles once ingested, adding another layer of concern.

Policy responses to microplastic pollution have been widely criticised as inadequate. While some countries have banned microbeads in cosmetics, these represent only a small fraction of the problem. Broader measures to reduce single-use plastics, improve wastewater filtration, and mandate sustainable textile production have advanced slowly, hindered by industrial lobbying and the absence of binding international agreements.`,
      modelAnswer: `Microplastics, originating from the breakdown of plastics and synthetic textile fibres, have contaminated ecosystems from ocean trenches to human blood, with early research suggesting links to inflammation and endocrine disruption, yet policy responses targeting only microbeads in cosmetics remain critically insufficient to address this pervasive global pollution crisis.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Identifies the sources and spread of microplastics and notes inadequate policy responses.",
          band8: "Accurately integrates origins, ubiquity, health risks including endocrine disruption, and the insufficiency of current regulatory measures.",
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
        "Some people believe that the best way to improve public health is to increase the number of sports facilities. Others argue that education about healthy lifestyles is more important. Discuss both views.",
      modelAnswer: `Improving public health is a priority for governments worldwide, and debate continues over whether investment in sports infrastructure or health education represents the more effective strategy. Both approaches offer genuine benefits, though they address different dimensions of the problem.

Advocates of expanding sports facilities contend that access to gyms, swimming pools, and recreational centres removes a practical barrier to physical activity. In many urban areas, residents — particularly those on lower incomes — lack safe, affordable spaces to exercise. Providing well-maintained community facilities can therefore directly increase participation rates, reducing rates of obesity, cardiovascular disease, and type 2 diabetes. Several studies have shown that proximity to parks and leisure centres correlates with higher levels of physical activity among local populations.

Those who prioritise health education argue, however, that infrastructure alone cannot change behaviour if people lack the knowledge or motivation to use it. Comprehensive education programmes in schools can instil lifelong habits around nutrition, sleep, stress management, and exercise from an early age. Public campaigns addressing smoking, alcohol consumption, and mental health have also demonstrated measurable population-level impact. Education, they argue, creates the internal motivation that transforms available facilities into regularly used resources.

In my view, the two approaches are complementary rather than competing. Building sports facilities without accompanying education may result in underused resources, while education alone cannot overcome a lack of accessible venues. The most effective public health strategies combine both: investing in community infrastructure while embedding health literacy across the education system and public communication. Governments should resist the temptation to choose one at the expense of the other.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views presented with relevant examples; logical conclusion reached.",
          band8: "Both views thoroughly explored with evidence; insightful synthesis showing complementary nature of approaches.",
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
