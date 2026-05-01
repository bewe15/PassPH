import type { WritingTest } from "./writing-types";

export const pteWriting17: WritingTest = {
  id: "pte-writing-17",
  exam: "PTE",
  title: "PTE Academic Writing — Test 17",
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
      passage: `The fast fashion industry, characterised by rapid production cycles, low-cost garments, and trend-driven consumption, has grown into one of the world's largest and most environmentally damaging sectors. Major retailers now produce dozens of clothing collections per year — compared to just two per decade in earlier eras — driving a culture of disposable fashion in which garments are worn only a handful of times before being discarded. The fashion industry is estimated to be responsible for approximately 10 percent of global carbon emissions and is one of the largest consumers of freshwater, with a single kilogram of cotton requiring up to 10,000 litres of water to produce.

The environmental toll extends further. Textile dyeing and treatment processes release toxic chemicals into waterways in garment-producing nations, while the proliferation of synthetic fabrics such as polyester means that washing machines release millions of plastic microfibres into water systems with every cycle. An estimated 85 percent of textiles end up in landfill or incinerated each year, representing an enormous waste of resources.

The social cost of fast fashion is equally troubling. The relentless pursuit of low production costs has concentrated garment manufacturing in countries with weak labour protections, where workers — predominantly women — endure long hours, hazardous conditions, and poverty wages. The 2013 collapse of the Rana Plaza factory complex in Bangladesh, which killed more than 1,100 garment workers, drew global attention to the human cost of cheap clothing.

In response, a growing sustainable fashion movement is promoting slow fashion principles: buying less, choosing quality over quantity, and supporting brands committed to ethical production. Circular economy models — encompassing clothing rental, resale platforms, repair services, and textile recycling — are gaining traction as more consumers seek to reduce their environmental footprint.`,
      modelAnswer: `The fast fashion industry's rapid production cycles and relentless cost-cutting cause severe environmental damage — including significant carbon emissions, water depletion, chemical pollution, and textile waste — and exploit garment workers in developing countries under poor conditions, though a growing sustainable fashion movement and circular economy models are beginning to challenge this harmful status quo.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers environmental damage, social costs, and the sustainable fashion response.",
          band8: "Accurately synthesises all four themes: production model, environmental harm, labour exploitation, and circular economy alternatives.",
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
        "Many people today are choosing to have fewer children or no children at all. What are the reasons for this trend and what are the effects on society?",
      modelAnswer: `Declining birth rates across much of the developed world — and increasingly in developing nations — reflect a profound shift in individual priorities and social conditions. Understanding the causes and consequences of this trend is essential for informed policymaking.

Several interconnected factors explain why more people are choosing to have fewer children or remain childless. Rising living costs, particularly in urban areas, make raising children an increasingly expensive commitment. Women's expanded access to education and professional opportunities has led many to prioritise career development and personal fulfilment before, or instead of, parenthood. The growing availability of reliable contraception has given individuals greater control over reproductive choices. Additionally, heightened awareness of climate change and global instability has led some young people to consciously limit family size out of concern for the world their children would inherit.

The societal effects of sustained low birth rates are far-reaching. Ageing populations place growing pressure on pension systems, healthcare services, and social care infrastructure, as a shrinking workforce must support an expanding cohort of retirees. Some countries, notably Japan and South Korea, are already confronting severe demographic challenges including labour shortages and declining domestic consumption.

Governments have responded with varying degrees of success through pro-natalist policies such as extended parental leave, subsidised childcare, and cash incentives for families. However, the effectiveness of such measures remains limited, suggesting that deeper cultural and economic factors are at play. A parallel approach — encouraging skilled immigration and investing in productivity-enhancing technology — may prove equally important in sustaining societies with lower birth rates.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Reasons and effects both addressed with relevant supporting points.",
          band8: "Multiple causes analysed with specificity; societal effects and policy responses explored with depth and balance.",
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
