import type { WritingTest } from "./writing-types";

export const pteWriting11: WritingTest = {
  id: "pte-writing-11",
  exam: "PTE",
  title: "PTE Academic Writing — Test 11",
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
      passage: `Autonomous vehicles, developed by companies such as Tesla, Waymo, and General Motors, represent one of the most significant technological shifts in modern transportation. These self-driving systems rely on a combination of artificial intelligence, machine learning, and sensor arrays including LiDAR, radar, and cameras to navigate roads without direct human input. Proponents argue that autonomous vehicles have the potential to dramatically reduce road fatalities, given that human error is responsible for approximately 94 percent of all traffic accidents.

Despite these promising safety statistics, the widespread adoption of autonomous vehicles faces considerable regulatory challenges. Governments around the world are still developing frameworks to govern liability, data privacy, and road-worthiness standards for vehicles that operate without drivers. The legal question of who bears responsibility in the event of an accident — the manufacturer, the software developer, or the vehicle owner — remains largely unresolved.

Beyond regulation, the economic implications of self-driving technology are profound. Millions of professional drivers, including truck operators and taxi and ride-share workers, face potential displacement as automation increases. Labour unions and worker advocates warn that without proactive retraining programmes and social safety nets, the transition could exacerbate economic inequality.

Ethical dilemmas also complicate the picture. Autonomous systems must be programmed to make split-second decisions in unavoidable accident scenarios, effectively encoding moral choices into algorithms. These so-called "trolley problem" situations — where the vehicle must choose between harming its occupant or a pedestrian — raise deep philosophical questions that engineers, ethicists, and policymakers are only beginning to address.`,
      modelAnswer: `While autonomous vehicles developed by companies such as Tesla and Waymo show strong potential to reduce the approximately 94 percent of accidents caused by human error, their widespread adoption remains complicated by unresolved regulatory frameworks, the economic displacement of millions of professional drivers, and unresolved ethical questions about how self-driving algorithms should handle unavoidable accident scenarios.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Covers the main points of safety benefits, regulatory challenges, and economic impact.",
          band8: "Accurately synthesises all four key themes: safety, regulation, job displacement, and ethical dilemmas.",
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
        "Some people think that children should begin their formal education at a very early age. Others believe that children should not start school until the age of seven. Discuss both views.",
      modelAnswer: `The question of when children should begin formal schooling is a matter of ongoing debate among educators and parents alike. Both early enrolment and delayed entry have legitimate merits that deserve careful consideration.

Those who advocate for early formal education argue that the first few years of life represent a critical window for cognitive and linguistic development. Structured learning environments can expose young children to numeracy, literacy, and social skills at a stage when the brain is highly receptive to new information. Countries such as the United Kingdom begin compulsory schooling at age five, and research suggests that early, high-quality education can reduce achievement gaps, particularly for children from disadvantaged backgrounds.

On the other hand, proponents of delayed schooling — a position associated with Scandinavian educational models — contend that young children learn best through play and exploration rather than formal instruction. Beginning school at seven allows children to develop emotional resilience, creativity, and intrinsic motivation before they encounter the pressures of academic performance. Finland, which consistently ranks among the world's top education systems, does not begin formal schooling until age seven.

Ultimately, the debate may be less about the age of entry than the quality and nature of early provision. Whether a child begins at four or seven, learning environments that are nurturing, stimulating, and developmentally appropriate are likely to produce the best outcomes. Policymakers should focus on ensuring that all children, regardless of when they start, have access to high-quality education that supports their holistic development.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7: "Both views addressed with relevant supporting points; position is clear.",
          band8: "Both perspectives developed thoroughly with specific examples; nuanced and well-reasoned discussion.",
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
