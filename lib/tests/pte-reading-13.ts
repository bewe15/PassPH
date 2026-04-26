import type { PTETest } from "./types";

export const pteReading13: PTETest = {
  id: "pte-reading-13",
  exam: "PTE",
  title: "PTE Academic Reading — Test 13",
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
        "The philosophy of mind confronts what the Australian philosopher David Chalmers famously labelled the 'hard problem of consciousness': explaining why and how physical processes in the brain give rise to subjective experience. We can, in principle, explain the functional aspects of mental life — how the brain processes sensory input, directs attention, and controls behaviour — without invoking subjective experience at all. These are the 'easy problems', not trivial but tractable through the methods of cognitive science and neuroscience. The hard problem asks something deeper: why is there 'something it is like' to be a conscious creature? Why does the neural processing of red-light wavelengths feel like the experience of seeing red? Physicalist philosophers argue that consciousness will ultimately be explained in terms of brain processes, while dualists maintain that subjective experience is irreducibly distinct from any physical account. A third position, panpsychism, has gained renewed academic attention, proposing that consciousness or proto-conscious properties are fundamental features of all matter.",
      stem: "What does Chalmers' 'hard problem of consciousness' specifically concern?",
      options: [
        { label: "A", text: "How the brain directs attention and processes sensory information." },
        { label: "B", text: "Why subjective experience arises from physical brain processes." },
        { label: "C", text: "Whether dualism or physicalism provides a better account of the mind." },
        { label: "D", text: "The relationship between panpsychism and cognitive science." },
      ],
      correct: "B",
      explanation:
        "The passage defines Chalmers' hard problem as explaining 'why and how physical processes in the brain give rise to subjective experience' — directly matching option B. Option A describes the 'easy problems'.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Urban farming — the practice of growing food within city boundaries — has attracted growing interest as a strategy for addressing food security, reducing the environmental footprint of food systems, and revitalising underused urban land. Vertical farms, which stack crop-growing layers in climate-controlled buildings, can produce yields per square metre far exceeding those of conventional agriculture while using up to 95 percent less water and eliminating the need for pesticides. Community gardens and rooftop farms, though lower-tech, deliver additional social benefits: they provide green space, build community cohesion, and offer residents access to fresh produce in areas classified as food deserts. Critics, however, point to significant limitations. The energy demands of artificial lighting in vertical farms can offset their environmental gains if that electricity is sourced from fossil fuels. Land values in dense cities make large-scale urban agriculture economically unviable without subsidies. Furthermore, urban farms are unlikely to replace conventional agriculture at scale and are best understood as a complement rather than a substitute for existing food supply chains.",
      stem: "According to the passage, which TWO claims about urban farming are made?",
      options: [
        { label: "A", text: "Vertical farms use significantly less water than conventional agriculture." },
        { label: "B", text: "Community gardens can improve social cohesion in urban areas." },
        { label: "C", text: "Urban farming is ready to replace conventional agriculture entirely." },
        { label: "D", text: "Urban farming faces no significant economic challenges in dense cities." },
        { label: "E", text: "The energy source for vertical farms affects their environmental benefit." },
      ],
      pickCount: 2,
      correct: ["A", "B"],
      explanation:
        "Option A is supported by 'using up to 95 percent less water'. Option B is supported by community gardens building 'community cohesion'. C is directly contradicted ('a complement rather than a substitute'). D is contradicted by the land-value discussion. E is close but the passage says energy can 'offset' gains — A and B are the clearest direct claims.",
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
          text: "The history of computing begins in the first half of the nineteenth century with Charles Babbage, whose designs for the Difference Engine and the later Analytical Engine contained the conceptual architecture of a programmable machine.",
        },
        {
          id: "s2",
          text: "Although Babbage's machines were never completed in his lifetime, his collaborator Ada Lovelace recognised their broader potential and wrote what is now regarded as the first algorithm intended to be processed by a machine.",
        },
        {
          id: "s3",
          text: "The theoretical foundations of modern computing were laid a century later by Alan Turing, whose 1936 paper described an abstract machine capable of performing any computation that could be precisely specified.",
        },
        {
          id: "s4",
          text: "The first electronic computers, built during and immediately after the Second World War, translated Turing's theoretical model into physical reality using vacuum tubes and punch-card programming.",
        },
        {
          id: "s5",
          text: "The invention of the transistor in 1947 and the subsequent development of integrated circuits enabled the miniaturisation that would eventually put computing power in the hands of ordinary individuals worldwide.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The sequence is strictly chronological: Babbage's nineteenth-century designs (s1) → Lovelace's algorithm (s2) → Turing's 1936 theoretical paper (s3) → wartime electronic computers realising that theory (s4) → the transistor and miniaturisation enabling personal computing (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Memory is not a single, unified system but a collection of distinct processes that cognitive psychologists have worked to {{1}} over the past century. The broadest distinction is between explicit memory, which involves the conscious {{2}} of information, and implicit memory, which operates without awareness and includes skills and conditioned responses. Within explicit memory, episodic memory stores personally experienced events anchored in time and place, while {{3}} memory holds general factual knowledge independent of personal experience. Working memory, sometimes called short-term memory, temporarily {{4}} a limited amount of information for active use in reasoning and comprehension. The process of moving information into long-term storage — known as {{5}} — is strengthened by repetition, deep processing, and emotional significance.",
      wordBank: [
        "differentiate",
        "retrieval",
        "semantic",
        "holds",
        "consolidation",
        "episodic",
        "suppression",
        "encoding",
      ],
      blanks: [
        {
          id: 1,
          correct: "differentiate",
          explanation:
            "Cognitive psychologists have worked to 'differentiate' — to identify and distinguish — the distinct memory processes.",
        },
        {
          id: 2,
          correct: "retrieval",
          explanation:
            "Explicit memory involves 'retrieval' — the conscious recall of information — as opposed to implicit, unconscious processes.",
        },
        {
          id: 3,
          correct: "semantic",
          explanation:
            "'Semantic' memory holds general factual knowledge; this is the standard psychological term contrasting with 'episodic' memory.",
        },
        {
          id: 4,
          correct: "holds",
          explanation:
            "Working memory temporarily 'holds' information for active use — it retains a limited amount for immediate processing.",
        },
        {
          id: 5,
          correct: "consolidation",
          explanation:
            "'Consolidation' is the cognitive psychology term for the process by which information is stabilised and transferred into long-term memory.",
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
        "Global trade has undergone a dramatic {{1}} over the past three decades, driven by the lowering of tariff barriers, advances in transportation logistics, and the rise of global value chains in which components cross multiple borders before a finished product reaches the consumer. Emerging economies, particularly in East and South-East Asia, have dramatically {{2}} their share of world exports by integrating into these supply networks as low-cost manufacturing hubs. However, the model of export-led growth that {{3}} the development of countries like South Korea and Taiwan is becoming harder to replicate as automation reduces the labour-cost advantage that made low-wage manufacturing {{4}}. Trade tensions between major economies have further complicated the picture, with governments increasingly resorting to {{5}} measures such as tariffs and export controls to protect domestic industries or achieve geopolitical objectives. This shift threatens to fragment the global trading system into competing {{6}}, potentially reversing decades of integration.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["restructuring", "collapse", "isolation", "simplification"],
          correct: "restructuring",
          explanation:
            "'Restructuring' captures the fundamental reorganisation of global trade — not a collapse or simplification, but a complex reshaping.",
        },
        {
          id: 2,
          options: ["expanded", "reduced", "maintained", "forfeited"],
          correct: "expanded",
          explanation:
            "Emerging economies have 'expanded' their share of world exports — grown it significantly by joining global supply chains.",
        },
        {
          id: 3,
          options: ["underpinned", "undermined", "delayed", "reversed"],
          correct: "underpinned",
          explanation:
            "'Underpinned' means supported or formed the basis of — export-led growth 'underpinned' the development of East Asian economies.",
        },
        {
          id: 4,
          options: ["competitive", "obsolete", "risky", "dominant"],
          correct: "competitive",
          explanation:
            "Automation reduces the labour-cost advantage that made low-wage manufacturing 'competitive' — able to win contracts over higher-cost producers.",
        },
        {
          id: 5,
          options: ["protectionist", "cooperative", "multilateral", "transparent"],
          correct: "protectionist",
          explanation:
            "Tariffs and export controls are 'protectionist' measures — designed to shield domestic industries from foreign competition.",
        },
        {
          id: 6,
          options: ["blocs", "agreements", "innovations", "currencies"],
          correct: "blocs",
          explanation:
            "The global trading system may fragment into competing 'blocs' — rival groupings of countries with preferential arrangements among themselves.",
        },
      ],
    },
  ],
};
