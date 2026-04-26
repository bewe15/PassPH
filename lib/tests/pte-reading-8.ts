import type { PTETest } from "./types";

export const pteReading8: PTETest = {
  id: "pte-reading-8",
  exam: "PTE",
  title: "PTE Academic Reading — Test 8",
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
        "Epigenetics is the study of heritable changes in gene expression that do not involve alterations to the underlying DNA sequence. Rather than modifying the genetic code itself, epigenetic mechanisms regulate which genes are switched on or off in particular cells and at particular times. The two best-characterised mechanisms are DNA methylation, in which a chemical group is attached to a cytosine base to suppress gene activity, and histone modification, in which proteins around which DNA is wound are chemically altered to either promote or repress transcription. Environmental factors — including diet, stress, and exposure to toxins — can influence epigenetic marks, and these marks can, in some cases, be transmitted to offspring. This transgenerational inheritance challenges the traditional Mendelian view that only DNA sequence is passed from parent to child. Epigenetic research has significant implications for understanding disease, as aberrant methylation patterns are consistently observed in cancers and other conditions.",
      stem: "Which of the following best describes what epigenetic changes involve?",
      options: [
        { label: "A", text: "Permanent mutations in the nucleotide sequence of DNA." },
        { label: "B", text: "Alterations to gene expression without changing the DNA sequence." },
        { label: "C", text: "The complete silencing of all non-essential genes in a cell." },
        { label: "D", text: "The deletion of histone proteins from chromosomes." },
      ],
      correct: "B",
      explanation:
        "The passage explicitly defines epigenetics as 'heritable changes in gene expression that do not involve alterations to the underlying DNA sequence', which directly matches option B.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "The circular economy is an alternative economic model designed to eliminate waste and promote the continuous use of resources. Unlike the traditional linear model — in which materials are extracted, manufactured into products, used, and then discarded — the circular economy aims to keep products, components, and materials at their highest utility and value at all times. Key strategies include designing products for durability and disassembly, remanufacturing used components, and recovering materials through high-quality recycling. Proponents argue that transitioning to a circular economy offers multiple benefits: it can reduce dependence on virgin raw material extraction, lower greenhouse gas emissions associated with production, generate new business opportunities in repair and remanufacturing sectors, and reduce the volume of waste sent to landfill. Critics, however, note that recycling processes themselves consume energy and that some material losses are thermodynamically inevitable, meaning a fully closed loop is an aspirational rather than achievable goal.",
      stem: "According to the passage, which TWO benefits of the circular economy are mentioned?",
      options: [
        { label: "A", text: "Reduced reliance on extracting new raw materials." },
        { label: "B", text: "Complete elimination of all industrial waste." },
        { label: "C", text: "Lower greenhouse gas emissions linked to production." },
        { label: "D", text: "Guaranteed profitability for all participating businesses." },
        { label: "E", text: "Removal of energy requirements from recycling processes." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage states the circular economy can 'reduce dependence on virgin raw material extraction' (A) and 'lower greenhouse gas emissions associated with production' (C). B is contradicted by critics noting losses are inevitable; D and E are not supported.",
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
          text: "The concept of a global communications network dates to the early 1960s, when American computer scientist J.C.R. Licklider proposed an 'Intergalactic Computer Network' that would allow users anywhere to access data from any site.",
        },
        {
          id: "s2",
          text: "This vision was partly realised through ARPANET, a project funded by the United States Department of Defense's Advanced Research Projects Agency, which in 1969 achieved the first successful transmission of data between computers at separate universities.",
        },
        {
          id: "s3",
          text: "During the 1970s, computer scientists Vint Cerf and Bob Kahn developed the Transmission Control Protocol and Internet Protocol (TCP/IP), a set of communication rules that allowed different networks to interconnect — the foundation of what we now call the internet.",
        },
        {
          id: "s4",
          text: "The internet remained largely an academic and governmental tool until 1991, when Tim Berners-Lee introduced the World Wide Web, a system of hyperlinked documents accessible through a browser that made the network usable for a general audience.",
        },
        {
          id: "s5",
          text: "Rapid commercialisation through the 1990s, combined with falling costs of personal computers and dial-up access, transformed the internet into the pervasive global infrastructure it is today.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The sequence follows strict chronology: Licklider's 1960s concept (s1) → ARPANET's 1969 first transmission (s2) → TCP/IP development in the 1970s (s3) → the World Wide Web in 1991 (s4) → 1990s commercialisation (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "The rock cycle describes the continuous set of geological processes by which rocks are formed, broken down, and {{1}} over geological timescales. Igneous rocks originate when molten material known as magma cools and {{2}}, either beneath Earth's surface to form intrusive rocks such as granite, or at the surface after a volcanic eruption to form extrusive rocks such as basalt. Over time, weathering and erosion break these rocks into smaller fragments called {{3}}, which are transported by wind or water and deposited in layers. As layers accumulate, the weight of overlying material {{4}} the sediment, gradually cementing it into sedimentary rock. When any rock type is subjected to intense heat and pressure deep within the crust without melting, it undergoes {{5}} to become metamorphic rock, completing one cycle of this ongoing planetary process.",
      wordBank: [
        "transformed",
        "solidifies",
        "sediment",
        "compresses",
        "metamorphism",
        "erodes",
        "fragments",
        "deposited",
      ],
      blanks: [
        {
          id: 1,
          correct: "transformed",
          explanation:
            "'Transformed' completes the description of the rock cycle as a process of formation, breakdown, and transformation.",
        },
        {
          id: 2,
          correct: "solidifies",
          explanation:
            "Magma 'solidifies' (cools and becomes solid) to form igneous rock — this is the standard geological term.",
        },
        {
          id: 3,
          correct: "sediment",
          explanation:
            "Weathered and eroded rock fragments are collectively called 'sediment', which is then transported and deposited.",
        },
        {
          id: 4,
          correct: "compresses",
          explanation:
            "The weight of overlying layers 'compresses' (squeezes) the sediment below, leading to lithification into sedimentary rock.",
        },
        {
          id: 5,
          correct: "metamorphism",
          explanation:
            "'Metamorphism' is the geological process by which existing rocks are altered by heat and pressure without melting.",
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
        "Urban public transport systems are considered essential {{1}} for reducing traffic congestion, lowering carbon emissions, and improving accessibility in densely populated cities. Bus rapid transit (BRT) represents a cost-effective {{2}} to expensive underground rail, offering dedicated lanes, frequent services, and modern vehicles at a fraction of the capital cost. However, the success of any transit network depends heavily on {{3}} — the ease with which passengers can transfer between different modes and services without confusion or delay. Cities that invest in unified ticketing, clear wayfinding, and coordinated timetables typically see higher {{4}} rates than those operating fragmented systems. Demand-responsive services, in which vehicles are routed according to real-time passenger requests via smartphone applications, are increasingly being {{5}} in lower-density suburban areas where fixed-route services are economically difficult to justify. Funding models remain a persistent challenge, as fare revenue alone rarely covers the full {{6}} of operating a comprehensive network.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["instruments", "burdens", "hazards", "obstacles"],
          correct: "instruments",
          explanation:
            "'Instruments' means tools or mechanisms — public transport systems are instruments (means) for achieving the stated goals.",
        },
        {
          id: 2,
          options: ["alternative", "obstacle", "complement", "substitute"],
          correct: "alternative",
          explanation:
            "BRT is presented as a cost-effective 'alternative' to expensive underground rail — a different option serving the same purpose.",
        },
        {
          id: 3,
          options: ["integration", "segregation", "automation", "privatisation"],
          correct: "integration",
          explanation:
            "'Integration' refers to connecting different modes and services into a unified network, as the surrounding context about transfers confirms.",
        },
        {
          id: 4,
          options: ["ridership", "ownership", "membership", "censorship"],
          correct: "ridership",
          explanation:
            "'Ridership' is the standard term for the number of passengers using a transit system — higher ridership means more people are using it.",
        },
        {
          id: 5,
          options: ["deployed", "discarded", "mandated", "restricted"],
          correct: "deployed",
          explanation:
            "Demand-responsive services are being 'deployed' (put into service/operation) in suburban areas — the appropriate term for rolling out a system.",
        },
        {
          id: 6,
          options: ["cost", "profit", "income", "benefit"],
          correct: "cost",
          explanation:
            "Fare revenue rarely covers the full 'cost' of operating a network — this refers to the total expenditure required to run the service.",
        },
      ],
    },
  ],
};
