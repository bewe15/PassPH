import type { PTETest } from "./types";

export const pteReading23: PTETest = {
  id: "pte-reading-23",
  exam: "PTE",
  title: "PTE Academic Reading — Test 23",
  totalSeconds: 1800,
  tasks: [
    // Task 1: Multiple Choice Single Answer — Quantum Computing Basics
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "Quantum computing represents a fundamentally different paradigm of information processing that exploits the principles of quantum mechanics to perform calculations that are intractable for classical computers. Whereas classical computers encode information as binary bits — values of either 0 or 1 — quantum computers use quantum bits, or qubits, which can exist in a superposition of 0 and 1 simultaneously. This property, combined with quantum entanglement — a phenomenon in which the state of one qubit is instantaneously correlated with that of another, regardless of physical distance — allows quantum computers to explore an exponentially larger number of computational states in parallel. Quantum interference is then used to amplify computational pathways leading to correct answers while suppressing incorrect ones. These properties make quantum computers theoretically well suited to specific problem types, including the simulation of molecular interactions for drug discovery, the optimisation of complex logistical networks, and the breaking of widely used cryptographic protocols such as RSA encryption. However, significant engineering challenges remain: qubits are extremely fragile and susceptible to 'decoherence' — the loss of quantum properties through interaction with the surrounding environment — requiring operation at temperatures close to absolute zero and sophisticated error-correction procedures. Current quantum computers are still far from achieving practical 'quantum advantage' over classical supercomputers for most real-world applications.",
      stem: "According to the passage, why are qubits considered more powerful than classical bits for certain computational tasks?",
      options: [
        { label: "A", text: "They operate at near absolute zero temperatures, which dramatically increases processing speed." },
        { label: "B", text: "They can represent 0 and 1 simultaneously, and their states can be correlated across distances, enabling parallel exploration of many computational states." },
        { label: "C", text: "They use quantum interference to encrypt data more securely than RSA protocols allow." },
        { label: "D", text: "They are immune to decoherence, making them more stable than classical transistors." },
      ],
      correct: "B",
      explanation:
        "The passage states that qubits can exist in 'superposition of 0 and 1 simultaneously' and that entanglement correlates qubit states regardless of distance, collectively allowing 'exponentially larger number of computational states in parallel.' Option A describes a technical requirement, not the source of power. Option C misrepresents quantum interference (used to amplify correct paths, not encrypt). Option D is directly contradicted by the passage, which states qubits are 'extremely fragile and susceptible to decoherence.'",
    },

    // Task 2: Multiple Choice Multiple Answers — Migration Patterns
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Human migration — the movement of people from one place to another with the intention of settling temporarily or permanently — has shaped civilisations, redistributed populations, and driven cultural exchange throughout history. Contemporary international migration is influenced by a complex interplay of push factors, which motivate people to leave their origin countries, and pull factors, which attract them to destination countries. Among the most powerful push factors are armed conflict, political persecution, environmental degradation, and economic deprivation. Climate change has emerged as an increasingly significant driver of displacement: sea-level rise threatens low-lying coastal communities, prolonged drought renders agricultural land unproductive, and the increasing frequency of extreme weather events forces populations to abandon their homes. On the pull side, higher wages, better educational opportunities, access to healthcare, and political stability make certain destination countries disproportionately attractive to potential migrants. Research consistently shows that migration is not typically undertaken by the most economically marginalised — those individuals often lack the financial resources and social networks necessary to migrate internationally — but rather by those with moderate means and connections to diaspora communities in destination countries. The phenomenon of 'brain drain,' whereby skilled professionals emigrate from developing nations to wealthier ones, has drawn concern from policymakers who fear the long-term consequences for sending countries' healthcare, education, and technology sectors.",
      stem: "According to the passage, which TWO statements about contemporary migration are supported?",
      options: [
        { label: "A", text: "The poorest individuals in a country are typically the most likely to migrate internationally." },
        { label: "B", text: "Climate change is increasingly displacing people alongside traditional conflict and economic factors." },
        { label: "C", text: "Skilled workers migrating to wealthier countries may harm the long-term development of their home countries." },
        { label: "D", text: "Political persecution is the single most important push factor driving global migration today." },
        { label: "E", text: "Destination countries with stricter immigration policies tend to receive more migrants than open ones." },
      ],
      pickCount: 2,
      correct: ["B", "C"],
      explanation:
        "Option B is supported by the passage's description of climate change as 'an increasingly significant driver of displacement' alongside conflict and economic deprivation. Option C is directly supported by the 'brain drain' paragraph, which notes concerns that skilled emigration harms 'healthcare, education, and technology sectors' in sending countries. Option A is explicitly contradicted — the passage states migration is undertaken by those with 'moderate means,' not the most marginalised. Options D and E are not stated in the passage.",
    },

    // Task 3: Re-order Paragraphs — Ancient Libraries
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "Libraries have served as repositories of human knowledge since antiquity, with some of the earliest known examples appearing in ancient Mesopotamia, where clay tablets inscribed with cuneiform script were stored in palace and temple archives.",
        },
        {
          id: "s2",
          text: "The most celebrated of all ancient libraries, the Library of Alexandria in Egypt, was established during the reign of Ptolemy I in the third century BCE and at its height was believed to have housed hundreds of thousands of papyrus scrolls covering virtually every field of knowledge then available.",
        },
        {
          id: "s3",
          text: "The library operated under a remarkably ambitious acquisition policy: ships entering Alexandria's harbour were reportedly required to surrender any books on board for copying, with the original texts often retained and copies returned to the owners.",
        },
        {
          id: "s4",
          text: "The destruction of the Library of Alexandria — whether attributed to Julius Caesar's fire, religious purges, or gradual neglect — has become one of history's most potent symbols of the irreversible loss of accumulated human knowledge.",
        },
        {
          id: "s5",
          text: "Modern digital libraries now hold billions of documents accessible globally within seconds, yet scholars continue to debate whether the convenience of digital access has come at the cost of the depth and rigour associated with print-based scholarship.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage moves chronologically and thematically: s1 introduces ancient libraries generally with Mesopotamian examples; s2 introduces the Library of Alexandria as the most celebrated case; s3 elaborates on Alexandria's specific acquisition practices; s4 describes its destruction and symbolic meaning; s5 transitions to the modern era and digital libraries, completing the arc from ancient to contemporary.",
    },

    // Task 4: Reading Fill in the Blanks — Ocean Plastic Pollution
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. Click a word from the box, then click the blank where you want to place it. Each word may only be used once.",
      rfibText:
        "Ocean plastic pollution has become one of the defining environmental {{1}} of the twenty-first century, with an estimated eight to twelve million metric tonnes of plastic entering the world's oceans every year. Once in the marine environment, larger plastic items are gradually broken down by UV radiation, wave action, and mechanical abrasion into {{2}} particles known as microplastics, defined as fragments smaller than five millimetres in diameter. These particles have now been detected in virtually every marine {{3}}, from surface waters to the deepest oceanic trenches, and have been found inside the bodies of organisms ranging from zooplankton to large marine mammals. The chemical composition of many plastics raises additional concerns: plastics can both leach toxic {{4}} such as bisphenol A and phthalates and act as vectors for persistent organic pollutants absorbed from the surrounding seawater, concentrating these contaminants in marine food webs through a process known as biomagnification. Efforts to address the crisis have focused on upstream {{5}} — reducing plastic production at source through legislation, redesigning packaging, and developing biodegradable alternatives — as well as on developing cost-effective technologies for removing plastic already present in ocean gyres, though scientists caution that cleanup alone, without production reduction, will prove inadequate.",
      wordBank: [
        "crises",
        "minute",
        "habitat",
        "additives",
        "intervention",
        "tiny",
        "ecosystem",
        "prevention",
      ],
      blanks: [
        {
          id: 1,
          correct: "crises",
          explanation:
            "'Environmental crises of the twenty-first century' — the plural 'crises' is required because the sentence structure uses 'one of the defining…' which demands a plural noun. 'Intervention' and 'prevention' are unrelated nouns in this context.",
        },
        {
          id: 2,
          correct: "minute",
          explanation:
            "'Minute particles' is the formal academic adjective meaning extremely small. While 'tiny' is synonymous, 'minute' is the standard scientific descriptor used in formal writing about microplastics — it also avoids repetition with the five-millimetre definition that follows.",
        },
        {
          id: 3,
          correct: "habitat",
          explanation:
            "'Every marine habitat' — the passage then lists examples from surface waters to oceanic trenches, implying a diversity of environments (habitats). 'Ecosystem' could work grammatically but 'habitat' is more precise when referring to physical environments where organisms are found.",
        },
        {
          id: 4,
          correct: "additives",
          explanation:
            "Plastics leach toxic 'additives' such as bisphenol A and phthalates — these are chemical compounds added during manufacture, the standard technical term in polymer chemistry and environmental toxicology.",
        },
        {
          id: 5,
          correct: "prevention",
          explanation:
            "'Upstream prevention' — the passage contrasts reducing plastic at source (preventing it from entering the ocean) with cleanup of existing ocean plastic. 'Prevention' fits the 'upstream' framing; 'intervention' would be used for the cleanup side.",
        },
      ],
    },

    // Task 5: Reading & Writing Fill in the Blanks — Biometric Technology
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. For each blank, select the correct word from the dropdown menu.",
      rwfibText:
        "Biometric technology — which uses measurable biological or behavioural characteristics to verify or identify individuals — has moved rapidly from the realm of science fiction into everyday life, appearing in {{1}} such as smartphone fingerprint scanners, facial recognition at airport borders, and iris-based access control in secure facilities. Unlike passwords or identity cards, biometric identifiers are theoretically unique to each individual and cannot be forgotten or {{2}}, making them attractive security solutions for governments and corporations alike. Fingerprint recognition remains the most widely {{3}} biometric modality globally, owing to its relatively low cost, high accuracy, and public familiarity, though facial recognition has expanded dramatically in the past decade driven by advances in deep learning algorithms. The widespread {{4}} of biometric systems has, however, raised serious civil liberties concerns. Critics argue that large-scale facial recognition in public spaces enables mass surveillance, effectively eroding the anonymity that citizens have historically enjoyed in public life. Biometric databases also represent high-value targets for malicious actors: whereas a stolen password can be changed, a compromised fingerprint or facial template is {{5}} — an individual cannot replace their biological characteristics. Regulatory responses have varied significantly across jurisdictions; the European Union's General Data Protection Regulation classifies biometric data as a special category requiring explicit consent, while regulatory frameworks in other regions remain {{6}} or inconsistent.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["applications", "devices", "systems"],
          correct: "applications",
          explanation:
            "'Applications such as smartphone fingerprint scanners…' — the passage lists specific use cases (applications) of biometric technology. 'Devices' would refer to the hardware, and 'systems' is broader and less idiomatic in this enumerative context.",
        },
        {
          id: 2,
          options: ["stolen", "lost", "transferred"],
          correct: "lost",
          explanation:
            "The passage contrasts biometrics with passwords and cards, which 'can be forgotten or lost.' The parallel construction requires a word paired with 'forgotten' — 'lost' is the natural complement for physical items like identity cards.",
        },
        {
          id: 3,
          options: ["deployed", "used", "adopted"],
          correct: "deployed",
          explanation:
            "'Most widely deployed biometric modality' — in technology contexts, systems and technologies are 'deployed' (put into operational use). 'Adopted' refers to the decision to use something; 'used' is too informal for this academic register.",
        },
        {
          id: 4,
          options: ["proliferation", "adoption", "expansion"],
          correct: "proliferation",
          explanation:
            "'Widespread proliferation of biometric systems' — 'proliferation' specifically implies rapid and extensive spread, which aligns with the passage's context of fast-growing surveillance technology. It also carries a slightly negative connotation consistent with the concerns discussed.",
        },
        {
          id: 5,
          options: ["permanent", "irreversible", "unchangeable"],
          correct: "irreversible",
          explanation:
            "'A compromised fingerprint or facial template is irreversible' — the passage contrasts this with a stolen password that can be changed, emphasising that biometric compromise cannot be undone. 'Irreversible' is the most precise academic term for a harm that cannot be undone.",
        },
        {
          id: 6,
          options: ["underdeveloped", "absent", "fragmented"],
          correct: "fragmented",
          explanation:
            "'Regulatory frameworks in other regions remain fragmented or inconsistent' — the passage uses 'or inconsistent' as a second descriptor, and 'fragmented' (broken into pieces without coherence) pairs naturally with 'inconsistent' to describe patchy global regulation.",
        },
      ],
    },
  ],
};
