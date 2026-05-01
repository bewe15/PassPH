import type { WritingTest } from "./writing-types";

export const ieltsWriting15: WritingTest = {
  id: "ielts-writing-15",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 15",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The graph below shows the proportion of electricity generated from renewable sources in the UK from 2000 to 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The line graph below shows the proportion of electricity generated from renewable sources (%) in the UK from 2000 to 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Line graph: Proportion of UK Electricity Generated from Renewable Sources (%), 2000–2022

X-axis: Years — 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022
Y-axis: Percentage (%), range 0–45%

Data points:
- 2000: 3%
- 2002: 4%
- 2004: 5%
- 2006: 5%
- 2008: 6%
- 2010: 7%
- 2012: 11%
- 2014: 19%
- 2016: 25%
- 2018: 33%
- 2020: 40%
- 2022: 42%

Key observations:
- Overall trend is consistently upward throughout the 22-year period.
- Growth was slow between 2000 and 2010, rising from only 3% to 7% (an increase of just 4 percentage points over 10 years).
- Growth accelerated sharply from 2010 onwards; the proportion rose from 7% in 2010 to 42% in 2022 — an increase of 35 percentage points in 12 years.
- The steepest increase occurred between 2012 and 2020, rising from 11% to 40%.
- By 2022, renewables accounted for 42% of UK electricity — 14 times the 2000 figure.
- The rate of growth slowed slightly between 2020 (40%) and 2022 (42%).`,
      modelAnswer: `The line graph illustrates the proportion of UK electricity produced from renewable sources over a 22-year period from 2000 to 2022.

Overall, the share of renewable electricity generation rose dramatically over the period, increasing from just 3% in 2000 to 42% by 2022 — a fourteenfold increase. The growth was notably slow in the first decade but accelerated significantly from 2010 onwards.

Between 2000 and 2010, progress was modest. The proportion inched up from 3% to 7%, gaining only four percentage points over ten years. During this period, year-on-year changes were minimal, with the figure barely reaching 6% by 2008.

The pace of change shifted dramatically from 2010. By 2014, renewables had already reached 19%, and growth continued at an impressive rate through to 2020, when the share hit 40%. The steepest rises occurred between 2012 and 2018, reflecting the rapid deployment of wind and solar infrastructure. Between 2020 and 2022, growth slowed slightly, with the figure rising by just two percentage points to 42%.

In summary, the UK's renewable electricity generation underwent a transformation over the 22-year period, with the most dramatic expansion occurring in the 2010s. By 2022, renewables accounted for nearly half of all electricity generated — a stark contrast to the negligible 3% share recorded at the start of the millennium.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the overall upward trend and contrasts the slow early growth with the rapid acceleration from 2010.",
          band8: "Fully details all key phases with precise data; the comparison between decades is clearly and accurately made.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Logically organised with a clear overview and chronological body paragraphs; cohesive devices used well.",
          band8: "Paragraphs are clearly differentiated by time period; transitions are fluent and the overall structure is highly effective.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of trend vocabulary (e.g. accelerated, inched up, dramatic rise); minimal repetition.",
          band8: "Precise and varied vocabulary; effective use of quantifying language ('fourteenfold increase', 'barely reaching').",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Good control of complex structures with minor errors that do not impede understanding.",
          band8: "Consistently accurate grammar with a wide range of structures; errors are extremely rare.",
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
        "Many people believe that formal examinations are the best way to assess students' abilities. Others think that continuous assessment through coursework and projects is more effective. Discuss both views and give your opinion.",
      modelAnswer: `The debate over the most effective method of assessing student ability has long divided educators. Formal examinations have traditionally held a central place in education systems worldwide, but there is growing advocacy for continuous assessment through coursework and projects. This essay examines the merits of both approaches before offering a personal view.

Supporters of formal examinations argue that they provide a standardised, objective measure of student ability. Because all candidates sit the same test under identical conditions within the same time limit, exams allow for fair, nationwide comparisons. They also test students' ability to perform under pressure — a skill widely valued in professional life — and reduce the risk of plagiarism or parental assistance that may compromise coursework results. For these reasons, high-stakes examinations remain the preferred method in many competitive university entrance systems, such as the Gaokao in China or A-Levels in the United Kingdom.

Advocates of continuous assessment, however, contend that a single timed exam fails to capture the full range of a student's capabilities. Research suggests that project-based learning encourages critical thinking, creativity, and collaboration — competencies that exam revision rarely develops. Students who experience test anxiety may consistently underperform despite deep understanding of the subject. Extended coursework also allows teachers to monitor learning progress over time and provide timely feedback, which has been shown to improve long-term retention.

In my view, the most effective assessment strategy combines both methods. Examinations provide an indispensable benchmark of core knowledge and performance under pressure, while coursework and projects reveal skills that written tests cannot measure. Education systems that rely exclusively on either method risk producing an incomplete picture of student achievement. A balanced approach, tailored to the nature of each subject, is likely to produce the most accurate and equitable outcomes.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Both views are presented clearly with supporting reasons; personal opinion is stated and justified.",
          band8: "Thorough and balanced exploration of both positions; the conclusion proposes a nuanced combined approach.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Well-structured with clear paragraphing; ideas progress logically and linking is effective.",
          band8: "Excellent organisation; each paragraph is focused, the argument builds clearly, and transitions are seamless.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Good range of vocabulary related to education and assessment; some sophisticated collocations.",
          band8: "Varied and precise lexis including domain-specific terms; examples (Gaokao, A-Levels) enhance credibility.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Variety of structures with generally high accuracy; minor errors do not impede communication.",
          band8: "Wide range of accurately used structures; complex sentences are controlled and natural.",
        },
      ],
    },
  ],
};
