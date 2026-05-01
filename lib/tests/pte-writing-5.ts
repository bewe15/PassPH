import type { WritingTest } from "./writing-types";

export const pteWriting5: WritingTest = {
  id: "pte-writing-5",
  exam: "PTE",
  title: "PTE Academic Writing — Test 5",
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
      passage: `Access to clean, safe freshwater is one of the most pressing challenges facing humanity in the twenty-first century. Approximately two billion people currently live in countries experiencing high water stress, and the United Nations projects that by 2025 half the world's population could be living in water-scarce regions. These figures reflect a deepening crisis driven by population growth, urbanisation, and escalating demand across all sectors of the economy.

Agriculture is by far the largest consumer of freshwater globally, accounting for roughly 70 percent of all withdrawals from rivers, lakes, and aquifers. Irrigation practices, many of which remain highly inefficient, deplete groundwater reserves at rates that far exceed natural replenishment. Meanwhile, industrial processes and domestic consumption add further strain on already overstretched water systems, particularly in rapidly developing nations.

Climate change is compounding the crisis by altering precipitation patterns, accelerating glacial melt, and intensifying the frequency and severity of droughts in vulnerable regions. Areas that historically relied on snowpack or seasonal rainfall are finding those sources increasingly unpredictable, threatening both food security and economic stability.

In response, scientists and engineers have developed promising technological solutions. Desalination plants, which convert seawater into potable water, have expanded significantly in arid coastal nations, while advanced water recycling systems are enabling municipalities to reuse treated wastewater for irrigation and industrial purposes. However, these technologies remain energy-intensive and expensive, limiting their accessibility for low-income countries where the water crisis is often most acute.`,
      modelAnswer: `The global freshwater crisis, driven by inefficient agricultural consumption of 70 percent of withdrawals, rapid population growth, and climate change-induced droughts, is threatening two billion people with water scarcity, while emerging technological solutions such as desalination and water recycling remain too costly and energy-intensive for the most vulnerable nations.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Identifies the scale of the crisis and at least one cause or solution.",
          band8: "Accurately conveys the scale of scarcity, the role of agriculture and climate change, and the limitations of current technological responses.",
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
        "In many countries, people are living longer than ever before. Some people say an ageing population creates problems for governments. Others believe it has benefits. Discuss both views.",
      modelAnswer: `Advances in medicine and improved living standards have produced a global demographic shift, with a growing proportion of people living well into their eighties and beyond. This trend provokes sharply divided opinions about its consequences for society and government.

Critics of an ageing demographic point to the mounting fiscal pressures it places on public systems. As the ratio of retirees to working-age taxpayers increases, pension funds face insolvency and healthcare budgets balloon to meet the complex needs of older patients. Countries such as Japan and Germany are already grappling with labour shortages caused by shrinking workforces, which can depress economic growth and force governments to spend heavily on immigration or automation to compensate. Social care infrastructure, including residential facilities and community support services, must also expand at considerable public expense.

Conversely, others argue that an older population brings significant advantages. Older citizens contribute to communities as volunteers, caregivers for grandchildren, and experienced mentors in the workplace. Many continue working beyond traditional retirement age, extending their economic contribution. Furthermore, the so-called silver economy — goods and services tailored to older consumers — represents a growing market that stimulates investment and employment.

Overall, the challenges posed by an ageing population are real but manageable with sound policy. Governments should pursue flexible retirement frameworks, encourage healthy ageing to reduce long-term care costs, and reform pension systems for long-term sustainability. Framing older people as a burden obscures their substantial social and economic contributions, and policies that harness their potential will serve nations far better than those that merely seek to contain costs.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views presented with relevant supporting arguments.",
          band8: "Both perspectives thoroughly developed with concrete examples; nuanced analysis of fiscal, social, and economic dimensions.",
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
