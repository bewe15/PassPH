import type { PTETest } from "./types";

export const pteReading1: PTETest = {
  id: "pte-reading-1",
  exam: "PTE",
  title: "PTE Academic Reading — Test 1",
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
        "The discovery of penicillin in 1928 is often attributed solely to Alexander Fleming, yet the full story is more complicated. Fleming observed that a mould, Penicillium notatum, had contaminated one of his petri dishes and killed the surrounding bacteria. He published his findings but struggled to purify and stabilise the compound for clinical use. It was Howard Florey and Ernst Chain at Oxford who, working a decade later, developed the purification process that made penicillin medically viable. The first human trial was conducted in 1941 on a police constable with a severe bacterial infection; the patient showed marked improvement but died when the limited supply of the drug was exhausted. Mass production was ultimately achieved through a wartime collaboration between British scientists and American pharmaceutical companies. In 1945, Fleming, Florey, and Chain shared the Nobel Prize in Physiology or Medicine in recognition of their respective contributions.",
      stem: "Why did the first human patient to receive penicillin die?",
      options: [
        { label: "A", text: "The drug caused a fatal allergic reaction." },
        { label: "B", text: "The infection proved resistant to penicillin." },
        { label: "C", text: "Insufficient quantities of the drug were available." },
        { label: "D", text: "Fleming's purification method proved ineffective." },
      ],
      correct: "C",
      explanation: "The passage states the patient 'died when the limited supply of the drug was exhausted,' indicating insufficient quantity.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Remote work, once a niche arrangement available to a small professional minority, was propelled into the mainstream by the COVID-19 pandemic. By mid-2020, an estimated 42 percent of the US workforce was operating from home full-time. Research published in the years since has produced mixed findings. Some studies highlight productivity gains, particularly for roles requiring sustained individual focus, such as software engineering and data analysis. Others document collaboration deficits: teams that transitioned to fully remote arrangements showed reduced spontaneous interaction, slower knowledge transfer to junior employees, and weakened organisational culture. Employee wellbeing data is similarly divided: remote workers consistently report greater autonomy and significantly reduced commuting stress, but also higher rates of social isolation, difficulty maintaining boundaries between professional and personal life, and what researchers term the 'always-on' phenomenon — the inability to disengage from work outside formal hours. Organisations that have introduced hybrid models — with designated in-office days for collaborative tasks and remote days for focused individual work — report the most consistently positive results across both productivity and wellbeing measures.",
      stem: "According to the passage, which TWO outcomes have been associated with remote work?",
      options: [
        { label: "A", text: "Increased spontaneous interaction between team members" },
        { label: "B", text: "Productivity improvements in roles requiring individual focus" },
        { label: "C", text: "Uniform improvement in employee wellbeing" },
        { label: "D", text: "Reduced stress associated with commuting" },
        { label: "E", text: "Higher rates of employee absenteeism" },
      ],
      pickCount: 2,
      correct: ["B", "D"],
      explanation: "The passage explicitly names productivity gains for focus-intensive roles (B) and 'significantly reduced commuting stress' (D).",
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        { id: "s1", text: "Before germ theory was established, miasma theory — the idea that diseases arose from 'bad air' produced by rotting organic matter — dominated medical thinking across Europe." },
        { id: "s2", text: "Louis Pasteur's experiments during the 1860s, particularly his famous swan-neck flask experiment, conclusively demonstrated that microorganisms caused fermentation and putrefaction, disproving the doctrine of spontaneous generation." },
        { id: "s3", text: "Robert Koch then provided the crucial link to human disease, identifying the specific bacterium responsible for tuberculosis in 1882 and developing Koch's Postulates as a systematic framework for proving causation." },
        { id: "s4", text: "These twin contributions laid the scientific foundation that enabled Joseph Lister to develop antiseptic surgical techniques and, later, facilitated the development of targeted vaccines and antibiotics." },
        { id: "s5", text: "The acceptance of germ theory was not immediate; many physicians resisted abandoning miasma theory, and it took decades of accumulating clinical evidence before the new paradigm became universally adopted." },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "Correct order: miasma as the prior paradigm (s1) → Pasteur disproves spontaneous generation (s2) → Koch links specific bacteria to human disease (s3) → practical medical applications (s4) → note on slow societal adoption (s5).",
    },

    // ── TASK 4: Reading Fill in the Blanks (word bank) ───────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. Click a word from the box, then click the blank where you want to place it. Each word may only be used once.",
      rfibText:
        "The human microbiome — the vast community of bacteria, fungi, and viruses that {{1}} the human body — has become one of the most intensively studied areas of modern biology. The gut microbiome alone contains an estimated 38 trillion microbial cells, {{2}} the total number of human cells in the body. Research has linked microbiome composition to conditions ranging from inflammatory bowel disease to {{3}} health, with some studies suggesting that gut bacteria influence neurotransmitter production via the gut-brain axis. Diet plays a central role in shaping microbiome diversity; populations consuming high-{{4}} diets rich in vegetables and legumes consistently show greater microbial variety than those relying heavily on processed food. Scientists caution, however, that the field remains in its {{5}}, and that many proposed interventions — including probiotic supplements — have yet to be validated by large-scale clinical trials.",
      wordBank: ["inhabit", "exceeding", "mental", "fibre", "infancy", "regulating", "matching", "physical"],
      blanks: [
        { id: 1, correct: "inhabit",  explanation: "'Inhabit' means to live in or occupy — the microbiome inhabits the human body." },
        { id: 2, correct: "exceeding", explanation: "'Exceeding' means surpassing — the gut microbiome cell count exceeds human cell count." },
        { id: 3, correct: "mental",   explanation: "The gut-brain axis connects gut bacteria to mental (not physical) health." },
        { id: 4, correct: "fibre",    explanation: "'High-fibre diets' is a standard nutritional phrase; fibre-rich foods support microbiome diversity." },
        { id: 5, correct: "infancy",  explanation: "'In its infancy' is an idiom meaning at an early stage of development." },
      ],
    },

    // ── TASK 5: Reading & Writing Fill in the Blanks (dropdown) ──────────────
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. For each blank, select the correct word from the dropdown menu.",
      rwfibText:
        "The concept of urban heat islands {{1}} to the phenomenon whereby cities experience significantly higher temperatures than the surrounding rural areas. This occurs {{2}} because of the high concentration of dark surfaces — roads, rooftops, and pavements — that absorb and {{3}} solar radiation as heat. Green spaces and bodies of water can {{4}} this effect by providing shade and enabling evaporative cooling. Studies conducted in major cities have recorded temperature {{5}} of up to ten degrees Celsius between urban centres and nearby rural zones, with the {{6}} disparities occurring on clear, calm nights when there is little wind to disperse accumulated heat.",
      rwfibBlanks: [
        { id: 1, options: ["refers", "relates", "responds"],           correct: "refers",     explanation: "'Refers to' is the standard phrase for introducing a definition or concept." },
        { id: 2, options: ["primarily", "gradually", "rarely"],        correct: "primarily",  explanation: "'Primarily' means mainly/chiefly — the main cause is the dark surfaces." },
        { id: 3, options: ["release", "reduce", "reflect"],            correct: "release",    explanation: "Dark surfaces absorb solar radiation and release it as heat — not reflect." },
        { id: 4, options: ["mitigate", "escalate", "ignore"],          correct: "mitigate",   explanation: "'Mitigate' means to reduce the severity of — green spaces reduce the heat island effect." },
        { id: 5, options: ["differences", "similarities", "patterns"], correct: "differences",explanation: "Temperature differences (not similarities) of up to 10°C are recorded." },
        { id: 6, options: ["greatest", "smallest", "most frequent"],   correct: "greatest",   explanation: "The greatest disparities occur on calm nights — other conditions allow wind to disperse heat." },
      ],
    },
  ],
};
