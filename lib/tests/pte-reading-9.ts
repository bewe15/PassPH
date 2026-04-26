import type { PTETest } from "./types";

export const pteReading9: PTETest = {
  id: "pte-reading-9",
  exam: "PTE",
  title: "PTE Academic Reading — Test 9",
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
        "Cognitive science has substantially revised the classical economic assumption that human beings are rational agents who consistently make decisions in their best interest. Research by Daniel Kahneman and Amos Tversky demonstrated that people rely on mental shortcuts, or heuristics, which are efficient in most situations but produce systematic errors — known as cognitive biases — in others. One well-documented example is loss aversion: experiments consistently show that the psychological pain of losing a sum of money is approximately twice as powerful as the pleasure derived from gaining an equivalent amount. Another is the availability heuristic, by which people judge the probability of an event based on how easily an example comes to mind rather than on objective frequency data. These findings have practical applications in public policy: by understanding how decisions are actually made, governments and institutions can design 'choice architectures' that guide people towards healthier or more financially prudent behaviour without restricting freedom of choice.",
      stem: "What does the passage suggest about the availability heuristic?",
      options: [
        { label: "A", text: "It leads people to overestimate gains relative to losses." },
        { label: "B", text: "It causes people to assess probability based on how readily an example comes to mind." },
        { label: "C", text: "It is used by governments to design effective public policy." },
        { label: "D", text: "It was first identified by researchers studying financial markets." },
      ],
      correct: "B",
      explanation:
        "The passage defines the availability heuristic as judging 'the probability of an event based on how easily an example comes to mind rather than on objective frequency data', which corresponds directly to option B.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Global water scarcity is one of the most pressing environmental challenges of the twenty-first century. Approximately 2.2 billion people currently lack access to safely managed drinking water, and demand is projected to exceed sustainable supply in many regions by 2050. The drivers of scarcity are multifaceted: population growth increases aggregate demand; agricultural irrigation — which accounts for roughly 70 percent of global freshwater withdrawals — is often inefficient; climate change is altering precipitation patterns and reducing glacial meltwater that feeds major river systems; and groundwater aquifers in arid regions are being depleted far faster than they can naturally recharge. Responses to water scarcity range from technological solutions such as desalination and advanced wastewater recycling to demand-management approaches including tiered pricing structures and restrictions on water-intensive crop cultivation in water-stressed areas. International agreements governing shared river basins are also increasingly important, as upstream water use by one nation can significantly reduce availability downstream.",
      stem: "According to the passage, which TWO factors are identified as drivers of global water scarcity?",
      options: [
        { label: "A", text: "Rapid population growth increasing overall water demand." },
        { label: "B", text: "The declining effectiveness of desalination technology." },
        { label: "C", text: "Climate change disrupting rainfall and glacial water sources." },
        { label: "D", text: "Over-reliance on international water-sharing agreements." },
        { label: "E", text: "The expansion of industrialised urban centres near rivers." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage lists 'population growth increases aggregate demand' (A) and 'climate change is altering precipitation patterns and reducing glacial meltwater' (C) as explicit drivers of scarcity. B, D, and E are not identified as drivers.",
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "The space race between the United States and the Soviet Union began in earnest in October 1957, when the USSR launched Sputnik 1, the world's first artificial satellite, triggering widespread alarm in the West about Soviet technological superiority.",
        },
        {
          id: "s2",
          text: "The Soviet Union extended its lead in April 1961 when cosmonaut Yuri Gagarin completed a full orbit of Earth aboard Vostok 1, becoming the first human being to travel in space.",
        },
        {
          id: "s3",
          text: "Responding to these Soviet achievements, President John F. Kennedy committed the United States in May 1961 to landing a man on the Moon before the end of the decade, dramatically escalating both the ambition and the funding of the American space programme.",
        },
        {
          id: "s4",
          text: "After years of development through the Mercury and Gemini programmes, NASA's Apollo 11 mission fulfilled Kennedy's pledge on 20 July 1969, when Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface.",
        },
        {
          id: "s5",
          text: "The end of the Cold War gradually transformed the adversarial space race into a model of international cooperation, culminating in the construction of the International Space Station, a joint project involving fifteen nations that has been continuously inhabited since November 2000.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage follows strict historical chronology: Sputnik in 1957 (s1) → Gagarin's orbit in April 1961 (s2) → Kennedy's Moon commitment in May 1961 (s3) → the Apollo 11 Moon landing in 1969 (s4) → post-Cold War cooperation and the ISS (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Marine ecosystems are structured around food chains that describe the transfer of energy from one {{1}} level to the next. At the base of virtually all ocean food chains are phytoplankton — microscopic photosynthetic organisms that {{2}} solar energy into organic matter through photosynthesis. These are consumed by zooplankton, which in turn are eaten by small fish, creating successive trophic levels in which energy is progressively lost as heat at each {{3}}. Large predatory fish, marine mammals, and seabirds occupy the upper trophic levels and are known as apex {{4}}, meaning they are not regularly preyed upon by other species. When apex predators are removed from an ecosystem — through overfishing, for example — the populations of their prey species can {{5}} uncontrollably, a phenomenon called a trophic cascade, which can fundamentally alter the structure and function of the entire marine community.",
      wordBank: [
        "trophic",
        "convert",
        "transfer",
        "predators",
        "proliferate",
        "absorb",
        "stage",
        "consumers",
      ],
      blanks: [
        {
          id: 1,
          correct: "trophic",
          explanation:
            "'Trophic' is the scientific adjective relating to feeding levels in an ecosystem — 'trophic level' is the standard ecological term.",
        },
        {
          id: 2,
          correct: "convert",
          explanation:
            "Phytoplankton 'convert' (change) solar energy into organic matter through photosynthesis — the standard description of photosynthetic energy transformation.",
        },
        {
          id: 3,
          correct: "transfer",
          explanation:
            "Energy is lost at each 'transfer' between trophic levels — energy is transferred from prey to predator and some is lost as heat.",
        },
        {
          id: 4,
          correct: "predators",
          explanation:
            "Large predatory species at the top of the food chain are 'apex predators' — the established ecological term for top-level consumers.",
        },
        {
          id: 5,
          correct: "proliferate",
          explanation:
            "Without predators, prey populations 'proliferate' (multiply rapidly/increase uncontrollably) — this is the hallmark of a trophic cascade.",
        },
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
        "Solar and wind energy have emerged as the fastest-growing {{1}} of electricity generation globally, driven by dramatic cost reductions and strong policy support in many countries. The cost of utility-scale solar photovoltaic electricity has fallen by more than 90 percent since 2010, making it the cheapest {{2}} of new electricity generation in most parts of the world. Wind energy, both onshore and offshore, has followed a similar downward cost {{3}}, with offshore wind in particular offering the advantage of higher and more consistent wind speeds. A key challenge for both technologies is their {{4}} nature: solar panels generate no electricity at night, and wind turbines produce no power during calm periods. This creates a need for complementary storage solutions, such as grid-scale batteries, or {{5}} sources like hydropower that can be ramped up when renewable output is low. Electricity grid operators must also invest in transmission infrastructure to connect {{6}} resources — often located in remote areas — to urban demand centres.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["sources", "consumers", "barriers", "demands"],
          correct: "sources",
          explanation:
            "'Sources of electricity generation' is the standard phrasing — solar and wind are sources from which electricity is generated.",
        },
        {
          id: 2,
          options: ["source", "burden", "replacement", "alternative"],
          correct: "source",
          explanation:
            "Solar is 'the cheapest source of new electricity generation' — 'source' fits the established energy economics phrasing used throughout the text.",
        },
        {
          id: 3,
          options: ["trajectory", "obstacle", "plateau", "reversal"],
          correct: "trajectory",
          explanation:
            "A 'downward cost trajectory' describes the path of falling costs over time — 'trajectory' is the correct metaphor for a trend line.",
        },
        {
          id: 4,
          options: ["intermittent", "continuous", "reliable", "consistent"],
          correct: "intermittent",
          explanation:
            "'Intermittent' means not continuous or steady — the defining characteristic of solar and wind, which only generate power under certain conditions.",
        },
        {
          id: 5,
          options: ["dispatchable", "renewable", "volatile", "obsolete"],
          correct: "dispatchable",
          explanation:
            "'Dispatchable' sources are those that can be called upon on demand — hydropower can be ramped up when needed, unlike variable renewables.",
        },
        {
          id: 6,
          options: ["renewable", "nuclear", "fossil", "thermal"],
          correct: "renewable",
          explanation:
            "The context discusses connecting solar and wind resources to cities — these are 'renewable' resources, the term that ties back to the passage's subject.",
        },
      ],
    },
  ],
};
