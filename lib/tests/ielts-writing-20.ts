import type { WritingTest } from "./writing-types";

export const ieltsWriting20: WritingTest = {
  id: "ielts-writing-20",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 20",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "You should spend about 20 minutes on this task. The graph below shows the global average temperature anomaly (°C above pre-industrial levels) from 1880 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The line graph below shows the global average temperature anomaly — measured in degrees Celsius above pre-industrial baseline levels — from 1880 to 2020.",
      chartDescription: `Line graph — Global average temperature anomaly (°C above pre-industrial levels), 1880–2020:

Period         | Approximate anomaly range / trend
---------------|----------------------------------------------------
1880–1910      | −0.3°C to −0.1°C (relatively stable, slightly below baseline)
1910–1940      | −0.1°C to +0.2°C (gradual warming begins)
1940–1970      | +0.1°C to +0.2°C (temporary plateau / slight cooling mid-century)
1970–1980      | +0.1°C to +0.3°C (warming resumes)
1980–2000      | +0.3°C to +0.6°C (clear acceleration)
2000–2010      | +0.6°C to +0.8°C (continued strong rise)
2010–2020      | +0.8°C to +1.1°C (steepest decade on record)
2020 value     | +1.1°C

Key features: slight early cooling, long gradual rise from 1910, clear acceleration post-1980, reaching +1.1°C by 2020.`,
      chartData: {
        type: "line",
        title: "Global Average Temperature Anomaly (°C above pre-industrial levels) — 1880–2020",
        xAxisLabel: "Year",
        yAxisLabel: "Temperature anomaly (°C)",
        unit: "°C",
        series: [
          { key: "anomaly", label: "Temperature Anomaly (°C)", color: "#f43f5e" },
        ],
        data: [
          { label: "1880", anomaly: -0.2 },
          { label: "1910", anomaly: -0.2 },
          { label: "1940", anomaly: 0.1 },
          { label: "1970", anomaly: 0.15 },
          { label: "1980", anomaly: 0.3 },
          { label: "1990", anomaly: 0.45 },
          { label: "2000", anomaly: 0.6 },
          { label: "2010", anomaly: 0.8 },
          { label: "2020", anomaly: 1.1 },
        ],
      },
      modelAnswer: `The line graph illustrates changes in the global average temperature anomaly relative to pre-industrial levels from 1880 to 2020, measured in degrees Celsius.

Overall, global temperatures have increased substantially over the 140-year period, with the rate of warming accelerating markedly from the 1980s onwards. By 2020, the anomaly had reached +1.1°C, its highest recorded level.

In the earliest decades, from 1880 to around 1910, temperatures were slightly below the pre-industrial baseline, fluctuating between approximately −0.3°C and −0.1°C. A gradual warming trend then emerged from 1910 to 1940, pushing the anomaly up to roughly +0.2°C. This was followed by a period of relative stability — and even a minor dip — between the 1940s and 1970s, before warming resumed.

The most significant change occurred from the 1980s onwards. The anomaly climbed steeply from around +0.3°C in 1980 to +0.6°C by 2000, and continued rising through the following two decades. The period from 2010 to 2020 represented the steepest rate of increase on record, with the anomaly jumping from approximately +0.8°C to +1.1°C.

In conclusion, while warming was gradual and uneven during the first century of the record, the post-1980 acceleration is clearly the dominant feature of the data, highlighting an intensifying trend in global temperature rise.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7:
            "Main trends identified and supported with data; overview clearly present.",
          band8:
            "All key phases described accurately; acceleration post-1980 given appropriate prominence; overview is perceptive.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Chronological organisation is logical; cohesive devices appropriate.",
          band8:
            "Fluent and seamless progression through time periods; paragraphing and cohesion are skilful.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Good lexical range; some specialised vocabulary used appropriately; minor errors.",
          band8:
            "Precise, varied vocabulary; natural collocations; very few errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Variety of structures; mostly accurate; occasional minor errors.",
          band8:
            "Wide range of structures used confidently; high accuracy throughout.",
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
        "Some people believe that allowing children to make their own choices on everyday matters has a positive effect. Others disagree. Discuss both views and give your own opinion.",
      modelAnswer: `The question of how much autonomy children should exercise in their daily lives is one that divides educators, parents, and child development experts. While some argue that granting children decision-making freedom yields significant developmental benefits, others contend that it can be harmful. Having considered both perspectives, I believe a balanced approach that progressively extends children's autonomy is most beneficial.

Supporters of child autonomy argue that allowing children to make everyday decisions — such as choosing their meals, activities, or clothing — fosters independence, confidence, and critical thinking. When children experience the consequences of their own choices in safe, low-stakes situations, they develop problem-solving skills and self-efficacy that serve them throughout life. Research in developmental psychology suggests that children who are given age-appropriate decision-making opportunities tend to perform better academically and socially, as they become more motivated and self-directed learners.

On the other hand, opponents caution that children lack the experience and cognitive maturity to make sound choices consistently. Unrestricted autonomy can lead to poor decisions regarding diet, screen time, or study habits, with lasting negative consequences. Critics also note that children benefit from structure and guidance, and that excessive freedom can produce anxiety rather than confidence, leaving children feeling overwhelmed by choices.

In my view, neither extreme serves children well. The key is to provide guided autonomy — offering meaningful choices within appropriate boundaries that expand as the child matures. A five-year-old might choose between two healthy dinner options, while a twelve-year-old might plan their own study schedule. This graduated approach teaches responsibility while maintaining necessary adult oversight.

In conclusion, while unrestricted decision-making is unsuitable for children, appropriately scaffolded autonomy is a powerful tool for healthy development. Parents and educators should aim to strike this balance thoughtfully.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7:
            "Both views discussed with relevant support; own opinion clearly stated and maintained.",
          band8:
            "Both views developed fully and fairly; personal opinion is well-argued and nuanced; ideas extended effectively.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7:
            "Logical structure; clear paragraphing; cohesive devices used with only minor lapses.",
          band8:
            "Cohesion is seamless; paragraphs are well-developed; transitions enhance argument.",
        },
        {
          criterion: "Lexical Resource",
          band7:
            "Wide enough vocabulary for flexible expression; some less common items; few errors.",
          band8:
            "Sophisticated and precise vocabulary; fluent collocations; very few minor errors.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7:
            "Range of structures with good accuracy; occasional errors do not impede meaning.",
          band8:
            "Wide grammatical range; complex sentences handled accurately; rare errors only.",
        },
      ],
    },
  ],
};
