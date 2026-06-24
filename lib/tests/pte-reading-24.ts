import type { PTETest } from "./types";

export const pteReading24: PTETest = {
  id: "pte-reading-24",
  exam: "PTE",
  title: "PTE Academic Reading — Test 24",
  totalSeconds: 1800,
  tasks: [
    // Task 1: Multiple Choice Single Answer — Space Debris Problem
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "The accumulation of space debris in Earth's orbit has become one of the most pressing challenges in contemporary space operations. Since the launch of Sputnik in 1957, human activity has left an estimated 27,000 pieces of trackable debris — including defunct satellites, spent rocket stages, and fragments from collisions and explosions — circling the planet at speeds of up to 28,000 kilometres per hour. At such velocities, even a fragment the size of a marble carries sufficient kinetic energy to disable an operational satellite or damage a crewed spacecraft. The central concern among space agencies is the risk of a cascade known as the Kessler Syndrome, first theorised by NASA scientist Donald Kessler in 1978: each collision between debris fragments generates additional debris, which in turn increases the probability of further collisions, potentially producing a self-sustaining chain reaction that renders certain orbital bands permanently unusable. Low Earth orbit, currently occupied by the International Space Station and the growing constellations of commercial communication satellites, is considered most at risk. Proposed remediation strategies range from ground-based laser systems that nudge debris into decaying orbits to robotic spacecraft designed to capture and de-orbit large defunct satellites. International cooperation in debris removal remains limited, however, partly because many defunct satellites are classified military assets, and the legal frameworks governing orbital cleanup are poorly developed.",
      stem: "What makes the Kessler Syndrome particularly alarming according to the passage?",
      options: [
        { label: "A", text: "It would cause debris to fall to Earth in large quantities, endangering populated areas." },
        { label: "B", text: "It describes a self-reinforcing collision cascade that could permanently block certain orbits from use." },
        { label: "C", text: "It predicts that military satellites will be the first to be destroyed by debris impacts." },
        { label: "D", text: "It demonstrates that laser-based remediation systems are incapable of preventing orbital collisions." },
      ],
      correct: "B",
      explanation:
        "The passage defines the Kessler Syndrome as a 'self-sustaining chain reaction that renders certain orbital bands permanently unusable,' making Option B the direct answer. Option A is not mentioned — the passage does not discuss debris falling to Earth. Option C misrepresents the passage, which mentions military assets only in relation to legal obstacles, not as collision targets. Option D is not supported — lasers are listed as a proposed solution.",
    },

    // Task 2: Multiple Choice Multiple Answers — Mindfulness and Stress
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Mindfulness — broadly defined as the intentional, non-judgmental awareness of one's present-moment experience — has transitioned from its origins in Buddhist contemplative practice to become a mainstream intervention in clinical psychology, workplace wellbeing programmes, and education. Mindfulness-Based Stress Reduction (MBSR), an eight-week structured programme developed by Jon Kabat-Zinn at the University of Massachusetts in the late 1970s, has been the most extensively researched mindfulness intervention. Meta-analyses of randomised controlled trials indicate that MBSR produces statistically significant reductions in self-reported stress, anxiety, and depressive symptoms among both clinical and non-clinical populations, with effects that persist at follow-up assessments conducted up to twelve months later. Neuroimaging studies have provided biological correlates for these psychological findings, documenting structural changes in brain regions associated with emotional regulation, attention, and self-referential thinking, including increased grey matter density in the hippocampus and prefrontal cortex and reduced amygdala reactivity to stressors. Critics of the mindfulness movement, however, argue that the rapid commercialisation and decontextualisation of mindfulness from its ethical and philosophical roots has resulted in a diluted 'McMindfulness' that prioritises individual productivity over the compassionate social awareness central to Buddhist practice. Concerns have also been raised about the potential for mindfulness practices to inadvertently worsen symptoms in individuals with trauma histories, for whom sustained attention to internal states may be destabilising.",
      stem: "According to the passage, which TWO findings support the effectiveness of mindfulness-based interventions?",
      options: [
        { label: "A", text: "Neuroimaging studies show structural brain changes associated with better emotional regulation." },
        { label: "B", text: "MBSR has been shown to eliminate depressive symptoms in all clinical populations tested." },
        { label: "C", text: "Reductions in stress and anxiety from MBSR are maintained up to twelve months after the programme." },
        { label: "D", text: "Mindfulness interventions have been found to be effective replacements for pharmaceutical treatment of anxiety disorders." },
        { label: "E", text: "Commercial mindfulness programmes have been found to be equally effective as MBSR in clinical settings." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "Option A is supported by the passage's description of neuroimaging findings including structural brain changes in regions associated with emotional regulation. Option C is directly supported by the passage stating 'effects that persist at follow-up assessments conducted up to twelve months later.' Option B overstates the claim — the passage says 'significant reductions,' not elimination, and not in all populations. Options D and E are not mentioned in the passage.",
    },

    // Task 3: Re-order Paragraphs — The Green Revolution
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "The Green Revolution refers to the dramatic increase in agricultural productivity that transformed food production in developing countries between the 1940s and 1970s, averting the widespread famine that population growth had appeared to make inevitable.",
        },
        {
          id: "s2",
          text: "Central to this transformation was the development by agronomist Norman Borlaug and his colleagues of high-yielding, disease-resistant varieties of wheat, rice, and maize that could produce substantially larger harvests when combined with irrigation and synthetic fertilisers.",
        },
        {
          id: "s3",
          text: "Borlaug's innovations were rapidly disseminated through international agricultural research institutions, enabling countries such as India, Pakistan, and Mexico to achieve self-sufficiency in grain production within a generation, a feat that earned Borlaug the Nobel Peace Prize in 1970.",
        },
        {
          id: "s4",
          text: "Despite its remarkable humanitarian achievements, the Green Revolution has attracted significant criticism for its environmental consequences, including soil degradation, groundwater depletion from intensive irrigation, the narrowing of agricultural biodiversity as traditional crop varieties were displaced, and heavy dependence on agrochemical inputs.",
        },
        {
          id: "s5",
          text: "Contemporary discussions of food security frequently invoke the Green Revolution as both a model and a cautionary tale, prompting researchers to pursue a 'doubly green' agriculture that achieves high yields while simultaneously preserving ecological systems.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage follows a logical progression: s1 introduces the Green Revolution and its context; s2 explains the key technological innovations (high-yielding varieties); s3 describes how these innovations were disseminated and their success; s4 presents the environmental criticisms of the revolution; s5 draws the contemporary lesson and points toward future directions, completing the arc from historical description to present-day implications.",
    },

    // Task 4: Reading Fill in the Blanks — Language Extinction
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. Click a word from the box, then click the blank where you want to place it. Each word may only be used once.",
      rfibText:
        "Linguists estimate that of the approximately 7,000 languages spoken in the world today, roughly half are {{1}} — no longer being passed on to children as a first language and therefore headed toward extinction within a generation or two unless active revitalisation measures are taken. Language death is not a new phenomenon, but the current rate of {{2}} is unprecedented in human history, driven by the dominance of a small number of global languages — including Mandarin, Spanish, English, Arabic, and Hindi — in education, government, commerce, and mass media. When a language ceases to be {{3}}, the accumulated knowledge it encodes — including ecological knowledge, medical practices, oral literature, and unique conceptual frameworks for understanding the world — is often irrecoverably lost. The relationship between language loss and cultural {{4}} has prompted governments and communities worldwide to invest in documentation projects, immersion schooling, and the creation of digital language archives. Some revitalisation efforts have achieved notable success: Hebrew's rebirth as a spoken vernacular in the nineteenth and twentieth centuries provides the most {{5}} example of a language being restored to full vitality from near extinction, while Welsh and Māori have seen significant increases in speaker numbers through sustained state-supported educational programmes.",
      wordBank: [
        "endangered",
        "attrition",
        "transmitted",
        "erosion",
        "compelling",
        "dominant",
        "spoken",
        "striking",
      ],
      blanks: [
        {
          id: 1,
          correct: "endangered",
          explanation:
            "'Roughly half are endangered' — the passage follows with the definition of no longer being passed on to children, which is the standard criterion for a language being classified as endangered.",
        },
        {
          id: 2,
          correct: "attrition",
          explanation:
            "'Rate of attrition' — 'language attrition' is the technical term in linguistics for the process of language decline and loss. 'Erosion' could be a distractor, but 'attrition' is the established term for the gradual reduction of language use.",
        },
        {
          id: 3,
          correct: "transmitted",
          explanation:
            "'When a language ceases to be transmitted' — language transmission refers to the passing of a language from one generation to the next. 'Spoken' would create a meaning (ceases to be spoken) that contradicts the notion that languages can survive as heritage languages even when not in everyday use.",
        },
        {
          id: 4,
          correct: "erosion",
          explanation:
            "'Cultural erosion' — the gradual wearing away of cultural practices and identity is described as 'erosion,' a well-established metaphor in cultural and social science discourse. 'Attrition' is already used for language loss in the passage.",
        },
        {
          id: 5,
          correct: "striking",
          explanation:
            "'Most striking example' — Hebrew's revival is described as extraordinary and noteworthy, making 'striking' the appropriate intensifier. 'Compelling' means persuasive rather than remarkable, and 'dominant' is irrelevant here.",
        },
      ],
    },

    // Task 5: Reading & Writing Fill in the Blanks — Blockchain Applications
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. For each blank, select the correct word from the dropdown menu.",
      rwfibText:
        "A blockchain is a distributed digital ledger that records transactions across a network of computers in a manner that makes the data {{1}} without the consensus of the network's participants. Each block in the chain contains a cryptographic hash of the previous block, a timestamp, and transaction data, creating a tamper-evident record that does not {{2}} on a central authority for validation. Originally developed as the underlying infrastructure for Bitcoin, blockchain technology has since attracted interest across a wide range of sectors. In supply chain management, blockchain enables companies to track the {{3}} of goods from raw material to end consumer, providing an auditable trail that can reduce fraud and ensure compliance with ethical sourcing standards. Smart contracts — self-executing code stored on a blockchain that automatically {{4}} the terms of an agreement when predefined conditions are met — are being used in financial services, insurance, and real estate to reduce transaction costs and eliminate the need for intermediaries. In healthcare, blockchain-based systems are being piloted to give patients greater {{5}} over their medical records while enabling secure, permissioned data sharing between providers. Despite considerable enthusiasm, critics note that blockchain solutions are often technically complex, energy-intensive in the case of proof-of-work systems, and may be solving problems for which simpler {{6}} database solutions already exist.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["unalterable", "encrypted", "immutable"],
          correct: "immutable",
          explanation:
            "'Immutable' is the precise technical term for data that cannot be changed once recorded — it is the standard descriptor used in blockchain literature. 'Unalterable' is synonymous but less technically established in this domain; 'encrypted' refers to data security, not permanence.",
        },
        {
          id: 2,
          options: ["depend", "rely", "require"],
          correct: "rely",
          explanation:
            "'Does not rely on a central authority' — 'rely on' is the standard collocation when describing dependence on an external entity for a function. 'Depend on' is close but slightly less idiomatic in formal technical writing; 'require' changes the grammatical structure.",
        },
        {
          id: 3,
          options: ["journey", "provenance", "movement"],
          correct: "provenance",
          explanation:
            "'Track the provenance of goods' — provenance specifically means the origin and chain of custody of an item, which is precisely what supply chain blockchain tracking is designed to establish. 'Journey' and 'movement' are less precise and not standard supply chain terminology.",
        },
        {
          id: 4,
          options: ["enforces", "executes", "implements"],
          correct: "enforces",
          explanation:
            "Smart contracts 'automatically enforce the terms of an agreement' — 'enforce' is the standard verb for contracts, capturing the binding and obligatory nature of the execution. 'Executes' describes running code; 'implements' suggests putting a plan into practice.",
        },
        {
          id: 5,
          options: ["control", "access", "ownership"],
          correct: "control",
          explanation:
            "'Greater control over their medical records' — the passage describes giving patients agency over who can access their data, which is a matter of control. 'Ownership' of medical data is a separate legal concept not implied here; 'access' would mean they gain access, not control over it.",
        },
        {
          id: 6,
          options: ["centralised", "conventional", "relational"],
          correct: "centralised",
          explanation:
            "'Simpler centralised database solutions' — the passage contrasts blockchain's decentralised architecture with traditional centralised databases, and critics argue that centralised systems often suffice. 'Conventional' is vaguer; 'relational' refers to a specific database type not contrasted in the passage.",
        },
      ],
    },
  ],
};
