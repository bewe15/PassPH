import type { WritingTest } from "./writing-types";

export const ieltsWriting11: WritingTest = {
  id: "ielts-writing-11",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 11",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The graph below shows birth rates (per 1,000 population) in Japan, Sweden, Nigeria, and Mexico from 1970 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The line graph below shows birth rates (per 1,000 population) in Japan, Sweden, Nigeria, and Mexico from 1970 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Line graph: Birth Rates per 1,000 Population (1970–2020)

Countries: Japan, Sweden, Nigeria, Mexico
X-axis: Years — 1970, 1980, 1990, 2000, 2010, 2020
Y-axis: Birth rate (per 1,000 population), range 0–55

Data points:

Japan:
- 1970: 18
- 1980: 14
- 1990: 10
- 2000: 9
- 2010: 8
- 2020: 7

Sweden:
- 1970: 14
- 1980: 12
- 1990: 14
- 2000: 11
- 2010: 12
- 2020: 11

Nigeria:
- 1970: 50
- 1980: 49
- 1990: 46
- 2000: 43
- 2010: 40
- 2020: 37

Mexico:
- 1970: 44
- 1980: 35
- 1990: 28
- 2000: 22
- 2010: 18
- 2020: 15

Key observations:
- Nigeria has by far the highest birth rate throughout, though declining slowly from 50 to 37.
- Mexico shows the steepest decline, dropping from 44 in 1970 to 15 in 2020.
- Japan declines steadily from 18 to 7, the lowest overall by 2020.
- Sweden remains relatively stable, fluctuating between 11 and 14 throughout the period.`,
      modelAnswer: `The line graph illustrates birth rates per 1,000 population across four countries — Japan, Sweden, Nigeria, and Mexico — over a 50-year period from 1970 to 2020.

Overall, birth rates declined in all four countries over the period, though the extent and pace of decline varied considerably. Nigeria maintained the highest rates throughout, while Japan recorded the lowest by 2020.

In 1970, Nigeria and Mexico had the highest birth rates at approximately 50 and 44 per 1,000 respectively. Mexico experienced a dramatic and sustained decline, falling to just 15 by 2020 — a drop of nearly 30 points. Nigeria's decline was comparatively modest, decreasing from 50 to 37 over the same period, meaning it remained far above the other nations throughout.

Japan began with a birth rate of 18 in 1970 and fell steadily to just 7 by 2020, the lowest figure recorded in the graph. Sweden, by contrast, showed relative stability, hovering between 11 and 14 throughout the entire period, with a slight dip to 11 in 2000 before recovering marginally.

By 2020, all four countries had converged to a much narrower range than in 1970, though Nigeria remained an outlier at 37, well above Sweden (11), Mexico (15), and Japan (7). The data suggest that economic development and changing social norms are linked to declining birth rates across diverse national contexts.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the main trends and makes relevant comparisons between countries with accurate data references.",
          band8: "Clearly highlights all key features including the contrasting rates of decline and end-point convergence, with well-selected data support.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Information is logically organised with a clear overview and appropriate use of cohesive devices.",
          band8: "Paragraphing is skilful; transitions between ideas are seamless and the overall progression is easy to follow.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses a range of vocabulary to describe trends (e.g. sustained decline, relatively stable, modest decrease).",
          band8: "Employs precise and varied lexis with natural collocations; rare errors do not impede communication.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a mix of simple and complex structures with generally good control; minor errors present.",
          band8: "Demonstrates a wide range of structures with consistent accuracy; errors are rare and inconsequential.",
        },
      ],
    },
    {
      id: 2,
      type: "ielts_task2",
      taskLabel: "Task 2 — Academic Writing",
      instructions:
        "Write about the following topic. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      timeSeconds: 2400,
      minWords: 250,
      prompt:
        "The increasing use of technology in the workplace has made it harder for people to switch off from work. What are the causes of this and what solutions could be introduced?",
      modelAnswer: `In recent decades, digital technology has transformed the modern workplace, but it has also blurred the boundary between professional and personal time. Many employees now find it difficult to disengage from work entirely, even during evenings and weekends. This essay examines the causes of this phenomenon and proposes practical solutions.

Several factors contribute to the difficulty of switching off. First, smartphones and email applications deliver work notifications around the clock, creating an implicit expectation that employees will respond promptly regardless of the hour. Second, the rise of remote and hybrid working arrangements means that the physical separation between office and home — once a natural boundary — has largely disappeared. Third, organisational cultures in many competitive industries reward constant availability, pressuring workers to demonstrate dedication by remaining reachable at all times. Finally, project management platforms and messaging tools such as Slack generate a continuous stream of updates that are difficult to ignore.

To address these causes, both employers and governments must take action. Companies should establish clear digital disconnection policies, explicitly stating that employees are not expected to respond to messages outside contracted hours. Several European countries, including France and Portugal, have already enacted "right to disconnect" legislation that legally protects workers from employer contact after hours — a model others could adopt. At the individual level, employees can benefit from practical strategies such as setting automatic out-of-office replies each evening and creating a dedicated workspace that can be physically closed off at the end of the day.

In conclusion, the encroachment of work into personal time stems from technological connectivity, changing work arrangements, and cultural norms around availability. A combination of legislative protection, corporate policy reform, and individual boundary-setting offers the most effective path towards a healthier work-life balance.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses both causes and solutions with relevant ideas and adequate development throughout.",
          band8: "Fully addresses all parts of the task; arguments are well-developed, specific, and logically convincing.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Clear overall structure with effective use of cohesive devices; paragraphing is logical.",
          band8: "Skilfully managed cohesion; each paragraph has a clear central idea and flows naturally into the next.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary related to technology and work; occasional awkward collocations.",
          band8: "Sophisticated and precise lexis used naturally; topic-specific vocabulary is varied and accurate.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Mix of simple and complex sentence structures with generally high accuracy; minor errors do not obscure meaning.",
          band8: "Wide range of grammatical structures used flexibly and accurately; errors are rare.",
        },
      ],
    },
  ],
};
