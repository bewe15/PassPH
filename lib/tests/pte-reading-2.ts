import type { PTETest } from "./types";

export const pteReading2: PTETest = {
  id: "pte-reading-2",
  exam: "PTE",
  title: "PTE Academic Reading — Test 2",
  totalSeconds: 1800,
  tasks: [
    // ── TASK 1: Multiple Choice Single Answer ─────────────────────────────────
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "The global energy transition away from fossil fuels has accelerated markedly since the signing of the Paris Agreement in 2015, yet the pace of change varies dramatically across nations and sectors. Solar photovoltaic capacity has grown at rates that consistently exceeded the projections of major forecasting bodies, driven by cost reductions that have made utility-scale solar the cheapest source of new electricity generation in much of the world. Wind power has followed a similar trajectory. However, the integration of these variable renewable sources into existing grid infrastructure presents a complex technical challenge: electricity supply and demand must be balanced in real time, and the intermittent nature of wind and solar means that storage, demand flexibility, and backup generation must be developed in parallel. The transition is further complicated by the political economy of fossil fuel dependence: in many nations, coal, oil, and gas industries employ large numbers of workers in geographically concentrated communities, and governments face significant political resistance to rapid decarbonisation.",
      stem: "What is identified in the passage as a key technical challenge of the energy transition?",
      options: [
        { label: "A", text: "The high upfront cost of solar panel installation." },
        { label: "B", text: "Matching variable renewable supply with electricity demand in real time." },
        { label: "C", text: "The lack of international agreement on renewable energy targets." },
        { label: "D", text: "Insufficient investment in wind power research." },
      ],
      correct: "B",
      explanation: "The passage states that 'electricity supply and demand must be balanced in real time' and that the intermittent nature of renewables makes this a 'complex technical challenge.'"
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Research into the effects of social media on adolescent mental health has produced a polarised scholarly debate. One camp, associated with psychologist Jean Twenge and the work underlying the book iGen, argues that the widespread adoption of smartphones and social media from around 2012 corresponds with measurable increases in depression, anxiety, loneliness, and suicide rates among young people, particularly girls. A competing view, advanced by researchers including Andrew Przybylski at the Oxford Internet Institute, holds that the effect sizes found in correlational studies are small — comparable, in Przybylski's memorable formulation, to the effect on wellbeing of eating potatoes — and that the public panic is disproportionate to the evidence. A third perspective emphasises that effects are likely moderated by how social media is used: passive scrolling and social comparison appear more strongly linked to negative outcomes than active communication with close friends. The debate has significant policy implications: proposals for age-based restrictions on social media access hinge on whether the causal evidence is sufficient to justify intervention.",
      stem: "According to the passage, which TWO points are made about the social media and adolescent wellbeing debate?",
      options: [
        { label: "A", text: "Some researchers argue the measured effects are very small." },
        { label: "B", text: "The debate has implications for decisions about restricting access." },
        { label: "C", text: "All researchers agree smartphones are harmful to teenagers." },
        { label: "D", text: "Boys are more affected by social media than girls." },
        { label: "E", text: "The way social media is used may influence its impact on wellbeing." },
      ],
      pickCount: 2,
      correct: ["A", "B"],
      explanation: "Przybylski's view that effect sizes are small and comparable to eating potatoes supports A. The passage explicitly says 'proposals for age-based restrictions… hinge on whether the causal evidence is sufficient' — supporting B."
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        { id: "s1", text: "Edward Jenner's 1796 experiment — inoculating a boy with material from a cowpox lesion and later exposing him to smallpox — is widely considered the foundation of modern vaccination." },
        { id: "s2", text: "Jenner's observation that milkmaids who contracted cowpox appeared to be protected against the far more deadly smallpox led him to hypothesise that deliberate infection with the milder disease could confer immunity." },
        { id: "s3", text: "Despite initial resistance from the medical establishment, vaccination against smallpox was gradually adopted across Europe and the Americas during the nineteenth century, becoming compulsory in several countries." },
        { id: "s4", text: "The underlying mechanism — that exposure to a harmless or attenuated pathogen could train the immune system to resist a virulent version — was not fully understood until Louis Pasteur and Robert Koch developed germ theory later in the century." },
        { id: "s5", text: "This understanding paved the way for vaccines against cholera, anthrax, and rabies, establishing vaccination as a cornerstone of public health and ultimately enabling the eradication of smallpox in 1980." },
      ],
      correctOrder: ["s2", "s1", "s3", "s4", "s5"],
      reorderExplanation:
        "The logical sequence is: Jenner's observation (s2) → his experiment (s1) → adoption despite resistance (s3) → the mechanism explained by germ theory (s4) → the resulting vaccines and eradication (s5)."
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "The world's oceans absorb approximately one quarter of all carbon dioxide {{1}} by human activity each year, making them a critical buffer against accelerating climate change. This absorption drives a process of ocean {{2}}, as CO₂ dissolves in seawater to form carbonic acid, lowering the pH of surface waters. Since the industrial era, average ocean pH has fallen from 8.2 to approximately 8.1 — a seemingly small change that represents a 26 percent increase in {{3}} since pH is measured on a logarithmic scale. This acidification poses a serious threat to marine organisms that construct shells and skeletons from calcium carbonate, as lower pH reduces the {{4}} of calcium carbonate minerals in seawater, making shell formation more energetically {{5}} for species such as corals, oysters, and pteropods.",
      wordBank: ["emitted", "acidification", "acidity", "solubility", "costly", "absorbed", "alkalinity", "neutral"],
      blanks: [
        { id: 1, correct: "emitted", explanation: "Oceans absorb CO₂ 'emitted by human activity' — released/produced by human activity." },
        { id: 2, correct: "acidification", explanation: "The process being described is 'ocean acidification' — CO₂ forming carbonic acid." },
        { id: 3, correct: "acidity", explanation: "A fall in pH represents an increase in 'acidity' — on a logarithmic scale this is 26%." },
        { id: 4, correct: "solubility", explanation: "Lower pH 'reduces the solubility of calcium carbonate minerals' making them harder to form." },
        { id: 5, correct: "costly", explanation: "Shell formation becomes more energetically 'costly' — requires more energy — under acidified conditions." },
      ],
    },

    // ── TASK 5: Reading & Writing: Fill in the Blanks ────────────────────────
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      rwfibText:
        "Urban heat islands are a well-documented {{1}} of large-scale urbanisation. Cities are warmer than surrounding rural areas because buildings, roads, and other {{2}} surfaces absorb and retain solar radiation more effectively than vegetation and soil. The {{3}} of green space and the waste heat generated by vehicles, air conditioning units, and industrial processes further elevate urban temperatures, which can be several degrees higher than the surrounding countryside. This temperature differential has significant {{4}} for public health, particularly during heatwaves, when urban residents face greater risk of heat-related illness and mortality. Mitigation strategies include expanding urban {{5}} cover, introducing green roofs and walls, using cool pavements with higher solar {{6}}, and increasing the proportion of permeable surfaces to allow cooling through evaporation.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["consequence", "cause", "symbol", "measurement"],
          correct: "consequence",
          explanation: "Urban heat islands are a 'consequence' — a result — of large-scale urbanisation."
        },
        {
          id: 2,
          options: ["impervious", "natural", "transparent", "elevated"],
          correct: "impervious",
          explanation: "'Impervious' surfaces (hard, sealed surfaces like concrete) absorb more heat than vegetation — the standard term in urban climate science."
        },
        {
          id: 3,
          options: ["loss", "gain", "expansion", "restoration"],
          correct: "loss",
          explanation: "The 'loss of green space' contributes to higher urban temperatures — green space has been reduced by development."
        },
        {
          id: 4,
          options: ["implications", "benefits", "causes", "records"],
          correct: "implications",
          explanation: "The temperature difference has significant 'implications' for public health — consequences and relevance."
        },
        {
          id: 5,
          options: ["tree", "road", "building", "solar"],
          correct: "tree",
          explanation: "Expanding 'tree cover' is a key urban heat island mitigation strategy — trees provide shade and cooling through transpiration."
        },
        {
          id: 6,
          options: ["reflectance", "absorption", "resistance", "emission"],
          correct: "reflectance",
          explanation: "Cool pavements have higher solar 'reflectance' — they reflect rather than absorb solar radiation, reducing heat accumulation."
        },
      ],
    },
  ],
};
