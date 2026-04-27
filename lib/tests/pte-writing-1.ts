import type { WritingTest } from "./writing-types";

export const pteWriting1: WritingTest = {
  id: "pte-writing-1",
  exam: "PTE",
  title: "PTE Academic Writing — Test 1",
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
      passage: `The global decline in insect populations has emerged as a major ecological concern, with studies estimating that insect biomass has fallen by as much as 75 percent in some parts of Europe over the past three decades. Insects perform ecological services that are fundamental to terrestrial ecosystems: they pollinate the majority of flowering plants, including approximately one-third of all food crops consumed by humans; they decompose organic matter and recycle nutrients into the soil; and they form the dietary base of a vast range of birds, fish, amphibians, and other invertebrates. The causes of decline are multiple and interacting, including intensive agricultural practices — particularly the use of pesticides and the elimination of natural habitat through monoculture farming — urbanisation, light pollution, climate change, and the spread of invasive species. Scientists warn that if current trends continue, the consequences for food security, biodiversity, and ecosystem function could be severe and largely irreversible.`,
      modelAnswer: `Insect populations are declining dramatically worldwide due to agricultural intensification, urbanisation, and climate change, threatening the ecological services they provide — including pollination of food crops, nutrient cycling, and support of broader food webs — with potentially severe and irreversible consequences for global food security and biodiversity.`,
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
      instructions: "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organise your ideas, present supporting details, and control the elements of standard written English. You should write 200–300 words.",
      timeSeconds: 1200,
      minWords: 200,
      maxWords: 300,
      prompt: "Many people believe that the internet has made our lives simpler and more convenient. Others argue that it has made people more dependent on technology and less able to function without it. Discuss both views and give your own opinion.",
      modelAnswer: `The internet has transformed daily life to an extent that would have seemed extraordinary to previous generations, and its impact is the subject of genuine debate. While the convenience it provides is undeniable, concerns about dependency are equally well-founded.

On one hand, the internet has dramatically simplified many aspects of modern life. Information that once required hours in a library is now accessible in seconds. Banking, shopping, healthcare appointments, and government services can all be managed online without leaving home, saving time and reducing logistical friction. For people in remote areas or with mobility limitations, internet access has been genuinely liberating, connecting them to services and communities that would otherwise be out of reach.

On the other hand, there are legitimate concerns about the depth of our reliance on digital technology. Navigation apps have reduced many people's capacity for spatial reasoning; spell-checkers have decreased attention to spelling accuracy; and the constant availability of digital distraction appears to have shortened attention spans. More seriously, outages or cyberattacks on digital infrastructure — payment systems, hospital records, transport networks — can paralyse organisations and communities that have transferred all critical functions online, exposing a structural vulnerability.

In my view, the internet is a tool of extraordinary power, and like all powerful tools, it produces benefits and risks in proportion to how thoughtfully it is used. The solution is not to resist digital adoption but to ensure that individuals retain sufficient traditional skills to function independently and that societies invest in the resilience of their digital infrastructure. Used critically and with appropriate safeguards, the internet's advantages substantially outweigh its costs.`,
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
