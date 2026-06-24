import type { WritingTest } from "./writing-types";

export const pteWriting22: WritingTest = {
  id: "pte-writing-22",
  exam: "PTE",
  title: "PTE Academic Writing — Test 22",
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
      passage: `Urban areas are significantly warmer than their surrounding rural landscapes, a phenomenon known as the urban heat island effect, which is driven by the replacement of vegetation with heat-absorbing materials such as asphalt, concrete, and roofing. Strategically planting trees and expanding urban green spaces has emerged as one of the most cost-effective countermeasures available to city planners. Tree canopies reduce surface temperatures through shading and evapotranspiration, a process by which water absorbed through roots is released as vapour, cooling the immediate environment. Research conducted across multiple European and Asian cities found that well-distributed street trees can lower ambient air temperatures by two to eight degrees Celsius in surrounding areas. Beyond thermal regulation, urban trees intercept airborne particulate matter, absorb nitrogen dioxide, and sequester carbon dioxide, contributing meaningfully to improved air quality indices. Studies also indicate that increased tree coverage correlates with lower rates of heat-related illness and reduced energy consumption in buildings, as natural cooling diminishes reliance on air conditioning during summer months.`,
      modelAnswer: `Urban tree planting is a highly effective strategy for addressing the heat island effect in cities because tree canopies lower ambient temperatures by up to eight degrees Celsius through shading and evapotranspiration, while simultaneously improving air quality by capturing particulate matter and absorbing pollutants, thereby reducing heat-related illness and building energy consumption.`,
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
        "Many people believe that printed newspapers will disappear within the next decade. To what extent do you agree with this view?",
      modelAnswer: `The rise of digital media has undeniably transformed how people consume news, and I largely agree that printed newspapers will decline dramatically, though a complete disappearance within ten years seems unlikely.

The evidence for print's decline is compelling. Circulation figures for major newspapers in the United States, United Kingdom, and Australia have fallen by more than half over the past two decades. Younger generations overwhelmingly access news through social media, mobile applications, and online news platforms, which offer instant updates, multimedia content, and personalised feeds. Advertising revenue, which historically sustained print operations, has migrated to digital channels, forcing many regional and metropolitan papers to reduce publication frequency or close entirely.

Nevertheless, complete extinction within a decade is improbable for several reasons. Older demographics continue to value the tactile experience and perceived trustworthiness of print. Certain niche publications — literary journals, specialist magazines, and local community newspapers — maintain loyal readerships willing to pay premium prices. Additionally, several major titles have successfully repositioned print editions as weekend lifestyle products, sustaining viability through differentiation rather than daily competition with digital news.

Furthermore, research suggests that print readers retain information more effectively than digital readers, a finding that may support ongoing demand among educated, engaged audiences.

In conclusion, while I agree that printed newspapers will continue their significant decline and many titles will cease print operations within the coming decade, the format is unlikely to vanish entirely, surviving instead as a premium, niche offering for specific readerships.`,
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
