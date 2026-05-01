import type { WritingTest } from "./writing-types";

export const pteWriting18: WritingTest = {
  id: "pte-writing-18",
  exam: "PTE",
  title: "PTE Academic Writing — Test 18",
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
      prompt:
        "Write a single sentence (5–75 words) that summarises the passage below.",
      passage: `Nuclear energy is experiencing a global renaissance driven by two converging pressures: the urgent need to reduce carbon emissions and the growing demand for reliable baseload electricity as intermittent renewable sources expand. Modern nuclear plants produce virtually zero carbon emissions during operation, making them attractive to governments pursuing net zero targets. The levelised cost of nuclear energy has declined in several new-build programmes, particularly in East Asia, challenging the perception that nuclear is prohibitively expensive.

A particularly promising development is small modular reactor (SMR) technology. SMRs are factory-built units of 50 to 300 megawatts that can be deployed more quickly and with lower upfront capital than conventional gigawatt-scale plants. Several nations, including the United States, Canada, and the United Kingdom, have active SMR licensing programmes, and the first commercial SMRs are expected to come online in the late 2020s.

Despite this renewed interest, significant concerns remain. The 2011 Fukushima Daiichi accident in Japan continues to shape public perception, fuelling opposition in many countries. Long-term storage of radioactive waste remains an unresolved challenge: no country has yet opened a permanent geological disposal facility, though Finland is furthest along. Critics also argue that the long lead times typical of large nuclear projects mean that SMRs and conventional plants alike may arrive too late to contribute meaningfully to mid-century decarbonisation goals. Proponents counter that nuclear's high energy density and reliability make it an indispensable complement to wind and solar in a deeply decarbonised grid.`,
      modelAnswer: `Nuclear energy is undergoing a revival as governments seek zero-carbon baseload power to meet net zero targets, with promising small modular reactor technology accelerating deployment prospects, though persistent concerns over safety perceptions following Fukushima, unresolved radioactive waste storage, and the long construction timelines of conventional plants continue to challenge its role in near-term decarbonisation efforts.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Captures most key points: zero-carbon benefits, SMR technology, and at least one major concern.",
          band8:
            "Accurately captures all key points — net zero driver, SMR innovation, Fukushima legacy, waste, and timeline concerns — in a balanced single sentence.",
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
        "Some people believe that visitors to other countries should follow local customs and behaviour. Others disagree and think that the host country should welcome cultural differences. Discuss both views.",
      modelAnswer: `When people travel internationally, a fundamental question arises: should visitors adapt to the norms of their host country, or should host societies embrace the cultural practices that visitors bring with them? Both positions reflect legitimate values, and the most reasonable answer lies between them.

Those who argue that visitors should conform to local customs contend that respecting the host culture is a matter of basic courtesy and social harmony. Certain behaviours that are acceptable in one country — modes of dress, public conduct, or attitudes towards religion — can be offensive or disruptive in another context. Adapting demonstrates respect and helps visitors integrate smoothly, reducing potential friction with local communities.

Conversely, others argue that expecting visitors to suppress their cultural identity is both unrealistic and intolerant. Host societies, particularly those that attract large numbers of tourists or immigrants, benefit from the diversity of perspectives and practices that newcomers introduce. Cultural exchange enriches cuisine, the arts, and social attitudes. Demanding full conformity can be seen as a form of cultural imperialism that privileges the majority's norms over others'.

In practice, a balanced approach seems most productive. Visitors might reasonably observe essential local norms — particularly those related to religious sites, legal behaviour, and basic social respect — while being free to maintain their own cultural identity in private life. Host communities, in turn, can cultivate openness to unfamiliar customs without abandoning their own traditions.

Ultimately, mutual respect and a willingness to engage across cultural differences serve both visitors and host populations better than rigid conformity demanded of either side.`,
      bandDescriptors: [
        {
          criterion: "Content",
          band7:
            "Both views addressed with relevant supporting points; a clear position or synthesis emerges.",
          band8:
            "Both views developed with specific, well-chosen supporting details; nuanced synthesis or conclusion is well-argued.",
        },
        {
          criterion: "Form",
          band7:
            "Within or close to 200–300 words; clear paragraph structure.",
          band8:
            "Meets word requirement; logical and effective paragraph organisation.",
        },
        {
          criterion: "Grammar",
          band7:
            "Good range of structures; mostly accurate; minor errors.",
          band8:
            "Wide range; accurate complex structures; very few errors.",
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
