import type { PTETest } from "./types";

export const pteReading17: PTETest = {
  id: "pte-reading-17",
  exam: "PTE",
  title: "PTE Academic Reading — Test 17",
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
        "Coral reef ecosystems, sometimes called the rainforests of the sea, support an estimated twenty-five percent of all marine species despite occupying less than one percent of the ocean floor. Their remarkable biodiversity depends on a symbiotic relationship between reef-building corals and photosynthetic algae known as zooxanthellae, which live within coral tissues and supply up to ninety percent of the coral's energy needs through photosynthesis. When ocean temperatures rise even one or two degrees above seasonal norms, corals expel their zooxanthellae in a process called bleaching, leaving them pale and highly vulnerable to disease and mortality. Mass bleaching events have become dramatically more frequent and severe since the 1980s, with the Great Barrier Reef experiencing its most extensive recorded bleaching in 2016 and 2017. Beyond temperature stress, coral reefs face threats from ocean acidification, destructive fishing practices, coastal development, and nutrient runoff from agriculture, making their long-term survival one of the most pressing concerns of contemporary marine conservation.",
      stem: "According to the passage, what triggers the process of coral bleaching?",
      options: [
        { label: "A", text: "A decrease in the availability of nutrients in reef waters." },
        { label: "B", text: "Ocean temperatures rising above normal seasonal levels." },
        { label: "C", text: "The introduction of invasive species to reef environments." },
        { label: "D", text: "An increase in the density of zooxanthellae within coral tissue." },
      ],
      correct: "B",
      explanation:
        "The passage explicitly states that 'when ocean temperatures rise even one or two degrees above seasonal norms, corals expel their zooxanthellae' in the bleaching process."
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "The attention economy describes an economic system in which human attention is treated as a scarce and therefore valuable commodity. Digital platforms including social media networks, search engines, and streaming services compete intensely to maximise the time users spend engaged with their content, since sustained attention translates directly into advertising revenue. Critics argue that this model has significant social consequences: platforms are incentivised to optimise for engagement above all else, which often means prioritising emotionally arousing or polarising content that holds users' attention even at the cost of accuracy or wellbeing. Research has linked heavy social media use to increased anxiety, disrupted sleep, and reduced capacity for sustained concentration. Proponents of the attention economy counter that digital platforms offer users unprecedented access to information, social connection, and entertainment at no monetary cost. Regulatory responses have varied: some jurisdictions have introduced data protection laws requiring platforms to obtain explicit consent, while others have debated structural interventions such as banning algorithmic amplification of extremist content.",
      stem: "According to the passage, which TWO claims are made about the attention economy?",
      options: [
        { label: "A", text: "Platforms may favour engaging content over accurate content." },
        { label: "B", text: "Digital platforms generate revenue primarily through subscription fees." },
        { label: "C", text: "Heavy social media use has been associated with poor sleep and anxiety." },
        { label: "D", text: "All regulators have agreed on the same approach to platform governance." },
        { label: "E", text: "Attention economy platforms are popular only among younger generations." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "Option A is supported by the claim that platforms prioritise 'emotionally arousing or polarising content… even at the cost of accuracy.' Option C is supported by the statement that heavy social media use has been 'linked to increased anxiety, disrupted sleep.'"
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        { id: "s1", text: "Louis Pasteur's mid-nineteenth century experiments demonstrated that fermentation and putrefaction were caused by microorganisms rather than arising spontaneously, laying the conceptual groundwork for germ theory." },
        { id: "s2", text: "Robert Koch subsequently identified specific bacteria as the causative agents of tuberculosis and cholera, establishing the methodological standards — Koch's postulates — that became foundational to medical microbiology." },
        { id: "s3", text: "These discoveries transformed medical practice, enabling the development of antiseptic surgical techniques by Joseph Lister that dramatically reduced post-operative mortality in hospital settings." },
        { id: "s4", text: "Alexander Fleming's accidental observation in 1928 that Penicillium mould inhibited bacterial growth opened an entirely new therapeutic frontier, though it would be more than a decade before penicillin was purified and produced at scale." },
        { id: "s5", text: "The mass production of antibiotics during and after the Second World War initiated a golden age of infectious disease treatment, reducing mortality from conditions that had been reliably fatal throughout human history." },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The sequence follows the historical development of germ theory into antibiotic medicine: Pasteur's germ theory experiments (s1) → Koch identifying specific bacterial pathogens (s2) → Lister applying germ theory to antiseptic surgery (s3) → Fleming discovering penicillin in 1928 (s4) → mass antibiotic production after World War Two (s5)."
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Plate tectonics is the scientific theory that explains the large-scale {{1}} of Earth's lithosphere, which is divided into a number of rigid plates that move relative to one another over the semi-fluid asthenosphere beneath. At {{2}} boundaries, two plates move toward each other; when one is oceanic, it typically slides beneath the other in a process called subduction, generating volcanic activity and deep ocean trenches. At {{3}} boundaries, plates move apart and new crustal material is generated as magma rises to fill the gap, as occurs along mid-ocean ridges. Transform boundaries, where plates slide horizontally past each other, produce intense seismic activity without creating or destroying crust. The {{4}} for plate tectonics includes the matching geological formations and fossil records found on continents now separated by oceans, the pattern of magnetic anomalies on the ocean floor, and direct measurement of plate movement using satellite technology. The driving mechanism is thought to involve convection currents within the mantle, although the precise {{5}} of these currents and subducting slabs remain subjects of ongoing research.",
      wordBank: ["movements", "convergent", "divergent", "evidence", "dynamics", "magnetic", "lateral", "submerged"],
      blanks: [
        { id: 1, correct: "movements", explanation: "Plate tectonics explains the large-scale 'movements' of Earth's lithospheric plates — their motion relative to one another." },
        { id: 2, correct: "convergent", explanation: "'Convergent' boundaries are where plates move toward each other — leading to subduction and volcanic activity." },
        { id: 3, correct: "divergent", explanation: "'Divergent' boundaries are where plates move apart and new crust is formed at mid-ocean ridges." },
        { id: 4, correct: "evidence", explanation: "Matching fossils, geological formations, and magnetic anomalies constitute the 'evidence' supporting plate tectonic theory." },
        { id: 5, correct: "dynamics", explanation: "The 'dynamics' — the forces and interactions — of mantle convection currents and subducting slabs remain under study." },
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
        "Digital health technology encompasses a broad range of tools designed to improve the {{1}} and efficiency of healthcare delivery, from wearable devices that monitor physiological parameters in real time to artificial intelligence systems that assist clinicians in {{2}} medical images and identifying disease patterns. Telemedicine platforms have expanded significantly, particularly following the COVID-19 pandemic, enabling patients in remote or underserved areas to {{3}} specialist consultations without travel. Electronic health records have improved coordination between care providers, though concerns about data {{4}} and the risk of breaches affecting sensitive patient information remain significant barriers to adoption in some health systems. Proponents argue that predictive analytics can {{5}} hospital admissions and emergency department visits by identifying high-risk patients before crises occur, thereby reducing costs and improving outcomes. Critics caution that algorithmic tools trained on {{6}} datasets may systematically disadvantage minority populations if historical biases in medical data are reproduced at scale.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["quality", "speed", "cost", "volume"],
          correct: "quality",
          explanation: "Digital health tools are designed to improve the 'quality' of healthcare delivery — the standard alongside efficiency in health policy discourse."
        },
        {
          id: 2,
          options: ["interpreting", "producing", "storing", "transmitting"],
          correct: "interpreting",
          explanation: "AI systems assist clinicians in 'interpreting' medical images — analysing and making sense of scan data to identify disease."
        },
        {
          id: 3,
          options: ["access", "afford", "request", "schedule"],
          correct: "access",
          explanation: "Telemedicine enables patients to 'access' specialist consultations — to obtain and benefit from specialist care without physical travel."
        },
        {
          id: 4,
          options: ["security", "ownership", "portability", "accuracy"],
          correct: "security",
          explanation: "Concerns about data 'security' — protection of sensitive health information from breaches — are a barrier to electronic health record adoption."
        },
        {
          id: 5,
          options: ["reduce", "predict", "prevent", "eliminate"],
          correct: "reduce",
          explanation: "Predictive analytics can 'reduce' hospital admissions by identifying high-risk patients early — the passage focuses on reducing the number of events, not eliminating them entirely."
        },
        {
          id: 6,
          options: ["biased", "incomplete", "outdated", "encrypted"],
          correct: "biased",
          explanation: "Algorithms trained on 'biased' datasets reproduce historical disparities, potentially disadvantaging minority populations in clinical decision-making."
        },
      ],
    },
  ],
};
