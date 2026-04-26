import type { PTETest } from "./types";

export const pteReading3: PTETest = {
  id: "pte-reading-3",
  exam: "PTE",
  title: "PTE Academic Reading — Test 3",
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
        "Biodiversity — the variety of life on Earth at genetic, species, and ecosystem levels — is declining at a rate that many scientists describe as a sixth mass extinction event. The current rate of species loss is estimated to be between 100 and 1,000 times the natural background rate, and recent assessments by the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES) suggest that approximately one million animal and plant species are now threatened with extinction. The primary drivers of this loss are habitat destruction — chiefly through agricultural expansion, deforestation, and urban development — followed by overexploitation, invasive species, pollution, and climate change. Unlike previous mass extinctions, which were caused by geological or astronomical events, the current crisis is entirely anthropogenic in origin. The economic consequences are substantial: ecosystem services — including pollination, water purification, soil formation, and flood regulation — are estimated to be worth tens of trillions of dollars annually, and their degradation poses a direct threat to food security and economic stability.",
      stem: "What distinguishes the current extinction crisis from previous mass extinctions?",
      options: [
        { label: "A", text: "It is occurring more slowly than previous events." },
        { label: "B", text: "It is caused entirely by human activity." },
        { label: "C", text: "It affects only animal species, not plants." },
        { label: "D", text: "It is concentrated in tropical regions." },
      ],
      correct: "B",
      explanation: "The passage states: 'Unlike previous mass extinctions, which were caused by geological or astronomical events, the current crisis is entirely anthropogenic in origin.'"
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Artificial intelligence systems trained on large datasets have achieved impressive performance on a range of tasks previously considered the exclusive domain of human intelligence — from image recognition and language translation to protein structure prediction and legal document analysis. However, significant limitations remain. Current AI systems are narrow: a model trained to play chess cannot play Go without retraining, and a language model has no understanding of the physical world it describes. AI systems are also brittle: they can be fooled by small perturbations to input data that would not confuse a human observer — a phenomenon known as adversarial vulnerability. Bias is a persistent concern: models trained on historical data reproduce and can amplify existing social biases, leading to discriminatory outcomes in applications such as hiring, credit scoring, and criminal justice. Finally, the interpretability problem — the difficulty of understanding why a model produces a particular output — makes it challenging to deploy AI in high-stakes contexts where accountability and explanation are legally or ethically required.",
      stem: "Which TWO limitations of current AI systems are described in the passage?",
      options: [
        { label: "A", text: "They cannot learn from new data after initial training." },
        { label: "B", text: "They can be misled by minor changes to input data." },
        { label: "C", text: "They are unable to process images." },
        { label: "D", text: "They may reproduce social biases from training data." },
        { label: "E", text: "They require human supervision for all outputs." },
      ],
      pickCount: 2,
      correct: ["B", "D"],
      explanation: "Adversarial vulnerability — being fooled by small input perturbations — is explicitly described (B). The passage also states models 'reproduce and can amplify existing social biases' (D)."
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        { id: "s1", text: "Johannes Gutenberg's development of movable type printing in the 1440s is widely regarded as one of the most transformative technological innovations in human history." },
        { id: "s2", text: "By enabling the rapid and relatively inexpensive reproduction of texts, the printing press broke the near-monopoly of the Church and aristocracy over written knowledge." },
        { id: "s3", text: "The resulting proliferation of books, pamphlets, and broadsheets played a central role in the Protestant Reformation, facilitating the spread of Martin Luther's ideas across Europe far more rapidly than manuscript copying could have allowed." },
        { id: "s4", text: "Scholars of the period also benefited: the standardisation of texts made possible by printing allowed for the accumulation and correction of knowledge across generations in ways that manuscript culture — in which every copy introduced new errors — had not." },
        { id: "s5", text: "The long-term consequences for science were equally profound, as the printing press enabled the systematic dissemination of experimental findings and the creation of a shared scientific literature across national and linguistic boundaries." },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage proceeds chronologically and causally: the invention (s1) → its effect on knowledge access (s2) → its role in the Reformation (s3) → benefits for scholars and knowledge accumulation (s4) → consequences for science (s5)."
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Human memory is not a {{1}} recording of experience but an active, reconstructive process. Each time a memory is recalled, it is briefly returned to a {{2}} state, during which it can be modified by new information before being re-stored — a process known as reconsolidation. This {{3}} of memory has significant implications for eyewitness testimony: research by Elizabeth Loftus demonstrated that witnesses could be induced to recall events that never occurred simply by exposing them to {{4}} post-event information. The brain structure most closely associated with the formation of new declarative memories is the hippocampus, which plays a central role in {{5}} newly encoded memories from short-term to long-term storage.",
      wordBank: ["faithful", "labile", "malleability", "misleading", "transferring", "stable", "erasing", "sensory"],
      blanks: [
        { id: 1, correct: "faithful", explanation: "Memory is 'not a faithful recording' — it is not an accurate, exact copy of experience." },
        { id: 2, correct: "labile", explanation: "During reconsolidation, memory enters a 'labile' state — unstable and open to modification." },
        { id: 3, correct: "malleability", explanation: "The 'malleability' of memory — its capacity to be changed — is the relevant concept here." },
        { id: 4, correct: "misleading", explanation: "Loftus showed witnesses could be influenced by 'misleading post-event information.'" },
        { id: 5, correct: "transferring", explanation: "The hippocampus plays a role in 'transferring newly encoded memories from short-term to long-term storage.'" },
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
        "Human space exploration has entered a new era, {{1}} by an unprecedented partnership between national space agencies and commercial companies. NASA's Artemis programme aims to return astronauts to the lunar {{2}} for the first time since 1972, with a long-term goal of establishing a sustainable presence that could serve as a {{3}} for eventual missions to Mars. Private companies, including SpaceX and Blue Origin, have developed reusable launch vehicles that have dramatically reduced the {{4}} of reaching orbit. The involvement of commercial actors has introduced new dynamics: missions can now be procured at lower cost, but questions of safety regulation, the governance of space resources, and the {{5}} of outer space as a commons have become increasingly {{6}} policy debates.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["defined", "marked", "confused", "limited"],
          correct: "marked",
          explanation: "The new era is 'marked by' an unprecedented partnership — characterised or distinguished by this feature."
        },
        {
          id: 2,
          options: ["surface", "orbit", "atmosphere", "core"],
          correct: "surface",
          explanation: "Returning astronauts to the lunar 'surface' — physically landing on the Moon, as in 1972."
        },
        {
          id: 3,
          options: ["springboard", "barrier", "substitute", "alternative"],
          correct: "springboard",
          explanation: "A lunar presence as a 'springboard' for Mars missions — a launching point that enables the next step."
        },
        {
          id: 4,
          options: ["cost", "risk", "time", "distance"],
          correct: "cost",
          explanation: "Reusable launch vehicles have 'dramatically reduced the cost of reaching orbit' — this is the key commercial innovation."
        },
        {
          id: 5,
          options: ["status", "beauty", "exploration", "pollution"],
          correct: "status",
          explanation: "The 'status of outer space as a commons' — whether space is treated as a shared global resource — is a governance question."
        },
        {
          id: 6,
          options: ["contested", "resolved", "ignored", "simplified"],
          correct: "contested",
          explanation: "These questions have become 'increasingly contested policy debates' — more disputed and argued over."
        },
      ],
    },
  ],
};
