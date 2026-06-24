import type { PTETest } from "./types";

export const pteReading22: PTETest = {
  id: "pte-reading-22",
  exam: "PTE",
  title: "PTE Academic Reading — Test 22",
  totalSeconds: 1800,
  tasks: [
    // Task 1: Multiple Choice Single Answer — Permafrost and Climate
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "Permafrost — ground that remains frozen for two or more consecutive years — underlies approximately 25 percent of the Northern Hemisphere's land surface, including vast stretches of Siberia, northern Canada, and Alaska. For thousands of years, this frozen ground has acted as a natural carbon vault, trapping enormous quantities of organic matter that accumulated during the last ice age and subsequent periods. Scientists estimate that Arctic and sub-Arctic permafrost regions contain roughly twice as much carbon as is currently present in the Earth's atmosphere. As global temperatures rise, permafrost is thawing at an accelerating rate, exposing this ancient organic material to microbial decomposition. When microbes break down the thawing plant matter, they release carbon dioxide and methane — greenhouse gases that further amplify atmospheric warming, creating what climatologists describe as a positive feedback loop. Methane is of particular concern because its warming potential over a 20-year period is approximately 80 times greater than that of carbon dioxide. The degradation of permafrost also has severe practical consequences for communities built on it: infrastructure such as roads, pipelines, and buildings begins to buckle and subside as the ground loses its structural integrity. Indigenous communities in affected regions face disproportionate disruption, as their homes and cultural sites are increasingly threatened by ground instability.",
      stem: "What does the passage identify as the most significant climatic concern associated with permafrost thaw?",
      options: [
        { label: "A", text: "The displacement of indigenous communities living on unstable ground." },
        { label: "B", text: "The release of greenhouse gases that create a self-reinforcing warming cycle." },
        { label: "C", text: "The destruction of infrastructure such as roads and pipelines in Arctic regions." },
        { label: "D", text: "The loss of frozen landscapes that currently reflect solar radiation back into space." },
      ],
      correct: "B",
      explanation:
        "The passage explicitly describes the release of CO₂ and methane from thawing permafrost as creating 'a positive feedback loop' — a self-reinforcing warming cycle — and emphasises that this is the core climatic concern. Infrastructure damage (C) and community displacement (A) are described as consequences, not the primary climatic concern. Option D (albedo effects) is not mentioned in the passage.",
    },

    // Task 2: Multiple Choice Multiple Answers — Social Media and Mental Health
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "The relationship between social media use and mental health has become one of the most actively debated topics in contemporary psychology and public health research. Longitudinal studies conducted over the past decade suggest a modest but statistically significant association between heavy social media use and elevated rates of anxiety, depression, and loneliness, particularly among adolescents. Researchers have proposed several mechanisms to explain this association. Social comparison theory posits that users who frequently encounter idealised portrayals of others' lives, relationships, and achievements experience diminished self-esteem and heightened feelings of inadequacy. The phenomenon of 'fear of missing out' — colloquially termed FOMO — compounds this effect by generating persistent anxiety about being excluded from social events and experiences visible on news feeds. Disruption of sleep patterns represents another pathway: the blue light emitted by smartphone screens suppresses melatonin production, while the stimulating nature of social media content delays the onset of sleep, contributing to the chronic sleep deprivation that is itself a risk factor for poor mental health. However, research findings are not uniformly negative. Studies focusing on passive versus active use indicate that actively creating content, engaging in conversations, and maintaining social connections through platforms can support wellbeing, particularly for individuals who experience social isolation. The quality and intentionality of social media engagement may therefore matter as much as the quantity of time spent online.",
      stem: "According to the passage, which TWO mechanisms are proposed to explain the link between social media use and poorer mental health outcomes?",
      options: [
        { label: "A", text: "Algorithms that deliberately expose users to distressing news content to maximise engagement." },
        { label: "B", text: "Social comparison with idealised representations of others' lives, leading to reduced self-esteem." },
        { label: "C", text: "Interference with sleep through light exposure and cognitively stimulating content." },
        { label: "D", text: "The replacement of face-to-face friendships with superficial online connections." },
        { label: "E", text: "Anxiety arising from awareness of social events and experiences one is not part of." },
      ],
      pickCount: 2,
      correct: ["B", "C"],
      explanation:
        "Option B directly reflects the passage's explanation of social comparison theory — encountering idealised portrayals leading to 'diminished self-esteem.' Option C is supported by the passage's description of blue light suppressing melatonin and stimulating content delaying sleep onset. Option E describes FOMO, which is also mentioned, but the question asks for TWO answers. Both B and C are the most clearly and directly supported mechanisms described in the passage as distinct pathways.",
    },

    // Task 3: Re-order Paragraphs — History of Mathematics
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "Mathematics is often considered the universal language of science, yet its history reveals a surprisingly human story of cultural exchange, practical necessity, and abstract curiosity spanning thousands of years.",
        },
        {
          id: "s2",
          text: "The ancient Babylonians and Egyptians developed sophisticated arithmetic and geometric techniques primarily to solve concrete problems such as land surveying, astronomical prediction, and commercial calculation.",
        },
        {
          id: "s3",
          text: "Greek scholars, particularly those associated with the Pythagorean school and later Euclid's Elements, transformed mathematics by introducing the concept of formal proof, shifting the discipline from a collection of useful techniques to a system of deductive reasoning.",
        },
        {
          id: "s4",
          text: "During the medieval period, Islamic mathematicians such as Al-Khwarizmi systematised algebra and transmitted Hindu-Arabic numerals to Europe, providing the computational foundations upon which later European scholars would build.",
        },
        {
          id: "s5",
          text: "The seventeenth-century invention of calculus by Newton and Leibniz — independently and controversially — exemplified how mathematics and natural philosophy had become mutually reinforcing, enabling precise descriptions of motion, change, and the physical world that persist to this day.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage is organised chronologically with a thematic introduction: s1 introduces the subject broadly; s2 covers ancient Babylonian and Egyptian mathematics; s3 describes the Greek contribution of formal proof; s4 addresses medieval Islamic scholarship bridging East and West; s5 arrives at the 17th-century calculus development, the most recent historical point discussed.",
    },

    // Task 4: Reading Fill in the Blanks — Bioluminescence
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. Click a word from the box, then click the blank where you want to place it. Each word may only be used once.",
      rfibText:
        "Bioluminescence — the production and emission of light by living organisms — is one of the most {{1}} phenomena in the natural world, occurring independently in at least 94 separate lineages spanning bacteria, fungi, marine invertebrates, fish, and insects. The biochemical mechanism typically involves a light-emitting molecule called a luciferin, which reacts with oxygen in a process {{2}} by an enzyme known as luciferase to produce photons with remarkably little heat generation, earning bioluminescent light the description 'cold light.' In marine environments, bioluminescence is {{3}} widespread: it has been estimated that more than 75 percent of deep-sea organisms are capable of producing light, using it for purposes ranging from predator {{4}} and prey attraction to intraspecific communication and camouflage through counter-illumination. On land, fireflies provide perhaps the most familiar example, with males producing species-specific flash patterns to attract females during summer nights. Scientists have {{5}} bioluminescent genes in medical and biological research, engineering glowing reporter genes into cells to track gene expression, monitor tumour growth, and image biological processes in living organisms with unprecedented spatial precision.",
      wordBank: [
        "remarkable",
        "catalysed",
        "exceptionally",
        "deterrence",
        "harnessed",
        "inhibited",
        "moderately",
        "triggered",
      ],
      blanks: [
        {
          id: 1,
          correct: "remarkable",
          explanation:
            "'One of the most remarkable phenomena' — the passage is describing something awe-inspiring and widely distributed, making 'remarkable' the correct intensifying adjective here.",
        },
        {
          id: 2,
          correct: "catalysed",
          explanation:
            "Enzymes catalyse biochemical reactions — they speed up the process without being consumed. 'Triggered' is a distractor but lacks the precise biochemical meaning that 'catalysed' carries in the context of enzyme-substrate reactions.",
        },
        {
          id: 3,
          correct: "exceptionally",
          explanation:
            "'Exceptionally widespread' conveys the extraordinary prevalence of bioluminescence in the deep sea (>75% of organisms). 'Moderately' would contradict the statistics that follow.",
        },
        {
          id: 4,
          correct: "deterrence",
          explanation:
            "'Predator deterrence' is the standard ecological term for defensive behaviours that discourage predator attacks. 'Deterrence' completes the noun phrase correctly.",
        },
        {
          id: 5,
          correct: "harnessed",
          explanation:
            "Scientists have 'harnessed bioluminescent genes' — exploited or adapted them for use in research. 'Harnessed' is the established collocation for applying natural phenomena to technological or scientific purposes.",
        },
      ],
    },

    // Task 5: Reading & Writing Fill in the Blanks — Fair Trade Economics
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. For each blank, select the correct word from the dropdown menu.",
      rwfibText:
        "The fair trade movement emerged in the mid-twentieth century as a response to the perceived {{1}} of conventional international trade, which critics argued systematically disadvantaged producers in developing countries by exposing them to volatile commodity prices and exploitative supply chain relationships. Fair trade certification schemes guarantee producers a minimum price above the market rate, providing a financial {{2}} against the price fluctuations that can render conventional farming economically unviable. In addition to price guarantees, certified producers receive a community premium — an additional payment intended to fund collective {{3}} such as schools, healthcare facilities, and clean water infrastructure. Proponents argue that fair trade empowers smallholder farmers by giving them greater bargaining power and access to international markets that would otherwise be {{4}} to them. Critics, however, contend that the benefits are unevenly distributed within producer communities and that premiums paid by consumers in wealthy nations do not always translate into proportionate improvements in farmer livelihoods. Some economists also question whether price floors, by insulating producers from market signals, may inadvertently {{5}} overproduction of certain commodities, ultimately depressing prices for non-certified producers. Despite these debates, fair trade has grown substantially: by the 2020s, thousands of products bearing certification labels were {{6}} in supermarkets across Europe, North America, and Australasia.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["inequities", "inefficiencies", "complexities"],
          correct: "inequities",
          explanation:
            "'Inequities of conventional international trade' — the passage is specifically concerned with unfairness and disadvantage to developing-country producers, making 'inequities' (unfairnesses) the correct choice over 'inefficiencies' (wasteful processes) or 'complexities' (complications).",
        },
        {
          id: 2,
          options: ["buffer", "shield", "barrier"],
          correct: "buffer",
          explanation:
            "A 'financial buffer' is the standard phrase for a protective mechanism that absorbs shocks. 'Shield' is more physical/military in register, and 'barrier' typically implies something blocking rather than protecting.",
        },
        {
          id: 3,
          options: ["investments", "projects", "ventures"],
          correct: "investments",
          explanation:
            "'Collective investments' such as schools and healthcare aligns with the economic development framing of the passage. 'Projects' could work but is less formal; 'ventures' implies commercial risk-taking not implied here.",
        },
        {
          id: 4,
          options: ["inaccessible", "unavailable", "closed"],
          correct: "inaccessible",
          explanation:
            "'Markets that would otherwise be inaccessible to them' — 'inaccessible' collocates naturally with 'markets' in academic writing. 'Unavailable' suggests something simply not existing; 'closed' implies a deliberate policy of exclusion.",
        },
        {
          id: 5,
          options: ["encourage", "stimulate", "incentivise"],
          correct: "incentivise",
          explanation:
            "'Inadvertently incentivise overproduction' — in economic discourse, price floors that keep prices artificially high are said to 'incentivise' producers to supply more. 'Stimulate' and 'encourage' are slightly less precise in this economic policy context.",
        },
        {
          id: 6,
          options: ["available", "stocked", "sold"],
          correct: "available",
          explanation:
            "'Products were available in supermarkets' — the passage describes consumer access to fair trade products across multiple countries, and 'available' most naturally describes the state of being accessible for purchase. 'Stocked' and 'sold' are narrower and less idiomatic in this context.",
        },
      ],
    },
  ],
};
