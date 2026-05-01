import type { WritingTest } from "./writing-types";

export const pteWriting14: WritingTest = {
  id: "pte-writing-14",
  exam: "PTE",
  title: "PTE Academic Writing — Test 14",
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
      passage: `Tropical deforestation has accelerated at an alarming rate in recent decades, with vast swathes of rainforest in the Amazon basin, Southeast Asia, and Central Africa being cleared for agricultural expansion, commercial logging, and infrastructure development. Globally, the world loses approximately ten million hectares of forest each year — an area roughly equivalent to the size of Iceland. These forests are not merely repositories of biodiversity; they are critical carbon sinks that absorb and store enormous quantities of atmospheric CO2, making their preservation central to any meaningful strategy for addressing climate change.

The biodiversity consequences of deforestation are equally grave. Tropical forests house more than half of the world's terrestrial species, many of which have not yet been scientifically catalogued. As habitats disappear, species extinction rates accelerate far beyond natural background levels, threatening ecosystem services that underpin agricultural systems and human health alike. Indigenous communities that have lived sustainably within these forests for generations are also being displaced, often with little legal recourse or compensation.

International agreements, including the Paris Climate Accord and successive commitments made at UN climate conferences, have consistently pledged to halt and reverse deforestation. Yet enforcement remains weak, and economic incentives — particularly for beef, soy, palm oil, and timber production — continue to drive clearance. Corruption and inadequate land tenure protections further undermine conservation efforts in many forest nations.

Reforestation initiatives, both government-led and community-based, offer partial remedies. However, planted monocultures of commercial tree species fall far short of restoring the ecological complexity, carbon storage capacity, and biodiversity value of primary forest, and critics warn that reforestation rhetoric is frequently used to justify ongoing clearance elsewhere.`,
      modelAnswer: `Tropical deforestation, driven by agriculture, logging, and weak enforcement of international agreements, is destroying irreplaceable carbon sinks and biodiversity habitats, displacing indigenous communities, and undermining climate goals, while reforestation efforts using commercial monocultures fail to adequately replicate the ecological complexity and carbon storage of primary forest.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers deforestation drivers, biodiversity loss, failed agreements, and reforestation limits.",
          band8: "Accurately synthesises all four themes: causes, ecological and social impacts, policy failure, and reforestation shortcomings.",
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
        "In some cultures, children are often told that they can achieve anything if they try hard enough. How realistic is this attitude? What effect does it have?",
      modelAnswer: `The belief that effort alone can unlock any achievement is deeply embedded in many cultures, particularly those influenced by the American Dream narrative. While this attitude has motivational value, its realism and consequences deserve closer scrutiny.

On the positive side, instilling a strong work ethic in children encourages perseverance and resilience. Young people who believe their efforts matter are more likely to set ambitious goals, recover from setbacks, and develop the self-discipline needed for long-term success. Psychological research on growth mindset, associated with Carol Dweck, supports the idea that children who attribute outcomes to effort rather than fixed ability tend to achieve more over time.

However, the claim that anyone can achieve anything through effort alone is an oversimplification that ignores the structural realities of social inequality. A child born into poverty, with limited access to quality education, healthcare, and social networks, faces barriers that personal determination alone cannot overcome. Telling such a child that failure is simply a lack of effort can be not only inaccurate but psychologically damaging, fostering shame and self-blame in those whose circumstances limit their opportunities regardless of how hard they try.

A more balanced message — one that acknowledges the role of effort while honestly recognising the influence of circumstance and opportunity — would better prepare children for the world. Encouraging ambition and resilience is valuable, but societies must also address the structural inequalities that mean hard work does not yield equal rewards for everyone.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Addresses realism and effects with relevant points; balanced perspective.",
          band8: "Nuanced analysis of motivational benefits and structural limits; specific references strengthen the argument.",
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
