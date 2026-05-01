import type { WritingTest } from "./writing-types";

export const pteWriting12: WritingTest = {
  id: "pte-writing-12",
  exam: "PTE",
  title: "PTE Academic Writing — Test 12",
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
      passage: `Cryptocurrency, most notably Bitcoin, emerged in 2009 as a decentralised digital currency designed to operate outside the control of governments and traditional financial institutions. Built on blockchain technology — a distributed ledger that records transactions across a network of computers — Bitcoin promised anonymity, security, and immunity from inflationary monetary policy. Its dramatic price fluctuations, however, have made it a highly speculative asset rather than a stable medium of exchange, with its value rising from mere cents to tens of thousands of dollars within a decade before experiencing sharp corrections.

Blockchain technology, the underlying architecture of most cryptocurrencies, has attracted considerable interest beyond the financial sector. Supply chain management, healthcare record-keeping, voting systems, and digital identity verification are among the fields exploring blockchain's potential to provide tamper-resistant, transparent data management without reliance on a central authority.

Nevertheless, the environmental cost of cryptocurrency mining has become a significant concern. The process of validating Bitcoin transactions, known as proof-of-work, requires enormous computational power and, consequently, vast amounts of electricity. Critics point out that Bitcoin's annual energy consumption rivals that of some mid-sized nations, raising serious questions about its sustainability in an era of climate urgency.

In response to the rise of decentralised cryptocurrencies, several governments and central banks have begun developing Central Bank Digital Currencies (CBDCs). Unlike Bitcoin, CBDCs are issued and regulated by national authorities, combining the convenience of digital payment with the stability and oversight of traditional monetary systems. China's digital yuan and the European Central Bank's exploratory digital euro project represent prominent examples of this government-led approach.`,
      modelAnswer: `Although Bitcoin and other cryptocurrencies introduced decentralised digital finance through blockchain technology and have inspired broader applications in supply chain and healthcare, concerns about extreme price volatility, enormous energy consumption from mining, and the lack of regulatory oversight have prompted governments to develop Central Bank Digital Currencies as a more stable and controlled alternative.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Identifies cryptocurrency's origins, blockchain potential, and environmental concerns.",
          band8: "Synthesises all four themes: decentralisation, blockchain applications, environmental cost, and CBDCs.",
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
        "Some people believe that it is good for countries to host major international sporting events such as the Olympics. Others think it is a waste of money. Discuss both views and give your own opinion.",
      modelAnswer: `Hosting major international sporting events such as the Olympic Games is a deeply divisive issue, with strong arguments both for and against the enormous investment required.

Supporters argue that such events deliver lasting economic and social benefits. Host cities typically experience a surge in tourism, international media coverage, and foreign investment. The construction of world-class sports facilities and infrastructure — roads, public transport, and accommodation — can revitalise urban areas and leave a legacy that benefits residents for decades. Additionally, the sense of national pride and community cohesion generated by hosting a globally watched event is difficult to quantify but widely valued.

Critics, however, contend that the financial burden is rarely justified. Historical evidence suggests that costs almost always exceed initial projections; the 2004 Athens Olympics and the 2016 Rio Games left host cities with billions in debt and underused venues known as "white elephants." Funds spent on stadiums and ceremonies could instead address more pressing social needs such as housing, healthcare, and education.

In my view, the outcome depends heavily on the host country's economic capacity and the quality of long-term planning. For wealthy, well-organised nations with genuine infrastructure needs, major sporting events can be a catalyst for beneficial development. For developing economies with existing social deficits, however, the risk of financial overextension outweighs the prestige. Governments should undertake rigorous cost-benefit analyses and prioritise post-event use of facilities before committing to such ventures.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views covered with relevant evidence; own opinion stated.",
          band8: "Thorough development of both perspectives with specific examples; opinion is well-argued and nuanced.",
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
