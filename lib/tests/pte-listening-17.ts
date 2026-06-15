import type { PTEListeningTest } from "./pte-listening-types";

const test17: PTEListeningTest = {
  id: "pte-listening-17",
  title: "PTE Listening — Test 17",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-17-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Pharmacology and Drug Resistance",
      audioUrl: "",
      audioText: "Pharmacology is the scientific study of how drugs interact with biological systems to produce therapeutic effects. When a drug is administered, it must reach its target tissue, bind to specific receptors, and trigger a biochemical response. However, the effectiveness of many drugs diminishes over time due to the development of resistance. In bacterial infections, resistance emerges when genetic mutations allow some organisms to survive drug exposure and multiply. This is particularly concerning with broad-spectrum antibiotics, which kill a wide range of bacteria but also eliminate beneficial microorganisms. In cancer therapy, tumour cells can similarly develop mechanisms that pump drugs out of cells or repair drug-induced damage. Researchers are now investigating combination therapies that attack multiple targets simultaneously, making it harder for pathogens or cancer cells to develop effective resistance strategies.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-17-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The field of aeronautics has advanced significantly over the past century. Early aircraft were constructed from wood and fabric, limiting their speed and altitude. The introduction of aluminium alloys made airframes lighter and stronger, enabling higher performance. Jet propulsion replaced piston engines and dramatically increased flight speeds and passenger capacity. Computational fluid dynamics now allows engineers to model airflow around aircraft before any physical prototype is built, reducing development costs. More recently, composite materials such as carbon fibre reinforced polymers have further reduced aircraft weight and improved fuel efficiency. Electric propulsion is being investigated for short-haul regional aircraft.",
      question: "According to the talk, which TWO developments have contributed to lighter and more fuel-efficient aircraft?",
      options: [
        "Introduction of aluminium alloys for airframes",
        "Replacement of propellers with rotary engines",
        "Use of composite materials such as carbon fibre",
        "Development of supersonic commercial travel",
        "Adoption of computational fluid dynamics modelling",
        "Reduction in passenger load limits",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-17-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Soil science, or pedology, examines the composition, formation, and function of soils in natural and agricultural ecosystems. Healthy soil contains a complex community of microorganisms — bacteria, fungi, and protozoa — that decompose organic matter and release nutrients in forms that plants can absorb. Soil structure affects water retention and drainage, both of which are critical for crop productivity. Intensive farming practices, including repeated tilling and heavy use of synthetic fertilisers, can degrade soil structure and reduce microbial diversity. Erosion caused by wind and water removes topsoil layers that took thousands of years to form. Conservation techniques such as cover cropping, reduced tillage, and adding compost help restore soil health. Understanding soil carbon storage is also increasingly important for climate change mitigation strategies.",
      question: "Which THREE factors are mentioned as threats to soil health?",
      options: [
        "Repeated tilling and synthetic fertiliser use",
        "Introduction of genetically modified crops",
        "Wind and water erosion removing topsoil",
        "Reduction in microbial diversity",
        "Increased rainfall due to climate change",
        "Overuse of irrigation systems",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-17-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Quantum computing represents a fundamentally different approach to information processing. Where classical computers encode data as binary bits that are either zero or one, quantum computers use quantum bits, or qubits, which can exist in a superposition of both states simultaneously. This property allows quantum computers to evaluate many possible solutions to a problem at once. Another key principle is entanglement, which links the states of qubits regardless of physical distance, enabling coordinated operations across the system. Quantum computers are expected to excel at tasks such as simulating molecular interactions for drug discovery and breaking current encryption methods.",
      transcript: "Quantum computing represents a fundamentally different approach to information ___BLANK___. Where classical computers encode data as binary bits that are either zero or one, quantum computers use quantum bits, or qubits, which can exist in a superposition of both states simultaneously. This property allows quantum computers to evaluate many possible ___BLANK___ to a problem at once. Another key principle is ___BLANK___, which links the states of qubits regardless of physical distance. Quantum computers are expected to excel at tasks such as simulating molecular interactions for drug ___BLANK___.",
      answers: ["processing", "solutions", "entanglement", "discovery"],
    },
    {
      id: "fib-17-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Sports science applies principles from physiology, biomechanics, and psychology to improve athletic performance and reduce injury risk. Physiologists study how the body adapts to training loads, including changes in muscle fibre composition and cardiovascular efficiency. Biomechanists analyse movement patterns to identify inefficiencies and reduce stress on joints. Sports psychologists help athletes develop mental skills such as concentration, goal setting, and resilience. Nutritional strategies are also tailored to the demands of specific sports, with carbohydrate loading used before endurance events and protein supplementation to support muscle repair after resistance training.",
      transcript: "Sports science applies principles from physiology, biomechanics, and psychology to improve athletic ___BLANK___ and reduce injury risk. Physiologists study how the body adapts to training loads, including changes in muscle fibre composition and cardiovascular ___BLANK___. Biomechanists analyse movement patterns to identify inefficiencies and reduce ___BLANK___ on joints. Sports psychologists help athletes develop mental skills such as concentration, goal setting, and resilience. Nutritional strategies are also tailored to the ___BLANK___ of specific sports.",
      answers: ["performance", "efficiency", "stress", "demands"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-17-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Antarctic research stations operate in one of the most extreme environments on Earth, where temperatures can drop below minus fifty degrees Celsius and winter darkness lasts for months. Scientists stationed there study a wide range of topics, including ice core analysis to reconstruct past climates, cosmic ray detection, and monitoring of the ozone layer. The continent is also a natural laboratory for studying extremophile organisms — bacteria and algae that survive in conditions once thought incompatible with life. International cooperation governs Antarctic science through the Antarctic Treaty System, which prohibits military activity and resource extraction and designates the continent as a zone of peaceful scientific inquiry.",
      correctIndex: 2,
      summaries: [
        "Antarctic research has primarily focused on discovering mineral resources beneath the ice sheet, with international teams competing for extraction rights under the Antarctic Treaty.",
        "Scientific stations in Antarctica face logistical challenges but are mainly used to test equipment designed for space exploration, as the conditions closely resemble those found on Mars.",
        "Antarctica hosts diverse scientific research including climate reconstruction, ozone monitoring, and extremophile biology, all governed by an international treaty that protects the continent from military use and exploitation.",
        "Antarctic researchers have shown that the continent was once a temperate rainforest, and current work focuses on understanding how quickly it could return to habitable conditions.",
      ],
    },
    {
      id: "hcs-17-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Data ethics is an emerging field that addresses the moral obligations of individuals and organisations in the collection, storage, analysis, and use of data. As data-driven systems increasingly influence decisions about employment, credit, healthcare, and criminal justice, questions arise about fairness, transparency, and accountability. Algorithmic bias occurs when systems trained on historical data reproduce or amplify existing inequalities. Privacy concerns relate to the collection of personal data without meaningful consent and its use in ways individuals did not anticipate. Ethicists argue that robust governance frameworks, independent auditing, and the right to explanation are essential safeguards for individuals affected by automated decision-making.",
      correctIndex: 0,
      summaries: [
        "Data ethics addresses moral questions around data collection and use, raising concerns about algorithmic bias, privacy, and the need for governance mechanisms to protect individuals from harmful automated decisions.",
        "Data ethics primarily concerns the security of databases against hacking, with organisations required by law to notify individuals if their personal information is stolen in a breach.",
        "The field of data ethics has concluded that algorithmic systems are generally fairer than human decision-makers and recommends replacing human judgment with automated systems in most institutional contexts.",
        "Data ethics focuses on ensuring that technology companies share their datasets freely with researchers, enabling independent verification of claims made about the performance of artificial intelligence systems.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-17-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Ageing populations present complex challenges for welfare systems in many developed countries. As the proportion of people over sixty-five increases relative to the working-age population, the fiscal pressure on pension schemes and health services intensifies. Governments are responding in various ways, including raising the retirement age, encouraging later-life employment, and reforming pension contribution structures. Some countries are also investing in technologies designed to support independent living for older adults, reducing demand for institutional care. However, critics warn that without substantial investment in social care workforces, vulnerable elderly people risk being left without adequate support.",
      question: "According to the speaker, what is one way governments are responding to the pressures of ageing populations?",
      options: [
        "Reducing the number of hospital beds to lower healthcare costs.",
        "Raising the retirement age and encouraging continued employment.",
        "Introducing mandatory saving schemes for children from birth.",
        "Restricting immigration to protect jobs for older workers.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-17-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Infrastructure resilience refers to the capacity of built systems — roads, bridges, water networks, energy grids, and communications — to withstand and recover from disruptive events such as natural disasters, cyberattacks, or equipment failures. Engineers and planners design resilient infrastructure by incorporating redundancy, so that if one component fails, others can take over its function. Resilient systems are also designed to fail gracefully, minimising the cascade of failures that can occur in highly interconnected networks. Investment in resilience is often difficult to justify politically because the benefits are invisible — they are events that do not occur — whereas the costs are immediate and concrete.",
      question: "What does the speaker identify as a challenge in securing investment for infrastructure resilience?",
      options: [
        "Engineers lack the technical knowledge to design resilient systems.",
        "Resilient infrastructure is more expensive to maintain than conventional systems.",
        "The benefits are not visible because they represent prevented disasters.",
        "Public opposition to new construction projects blocks necessary upgrades.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-17-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Historical linguistics investigates how languages change over time and how modern languages are related to one another through shared ancestry. By comparing vocabulary, grammar, and sound patterns across languages, scholars can reconstruct features of ancient languages that were never written down. The comparative method has revealed that most European languages, together with languages of South Asia and Iran, descend from a common ancestor known as Proto-Indo-European. This finding transformed our understanding of human prehistory by demonstrating that populations once thought unrelated actually share a common linguistic and cultural",
      options: ["barrier", "heritage", "conflict", "boundary"],
      correctIndex: 1,
    },
    {
      id: "smw-17-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Tropical medicine focuses on infectious diseases that disproportionately affect populations in low-income countries in tropical and subtropical regions, including malaria, dengue fever, schistosomiasis, and neglected tropical diseases such as leishmaniasis. These conditions thrive where sanitation is poor, vector control is limited, and access to healthcare is restricted. Despite causing enormous suffering and economic loss, they receive far less research funding than diseases prevalent in wealthy nations. Organisations such as the Drugs for Neglected Diseases initiative work to address this imbalance by developing affordable treatments for patients who cannot attract commercial",
      options: ["competition", "investment", "regulation", "advertising"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-17-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Pharmacokinetics describes how the body absorbs, distributes, metabolises, and excretes a drug. The rate at which a drug is absorbed depends on its chemical properties and the route of administration. Intravenous injection delivers the drug directly into the bloodstream, producing rapid effects, while oral medications must first pass through the digestive system and the liver before reaching the target tissues.",
      displayText: "Pharmacokinetics describes how the body absorbs, distributes, metabolises, and eliminates a drug. The rate at which a drug is absorbed depends on its chemical properties and the route of administration. Intravenous injection delivers the drug directly into the bloodstream, producing rapid effects, while oral medications must first pass through the digestive system and the kidneys before reaching the target tissues.",
      incorrectIndexes: [9, 54],
    },
    {
      id: "hiw-17-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The welfare economics approach evaluates economic policies not only by their efficiency but also by how they affect the distribution of wellbeing across society. A policy that increases total output but concentrates gains among a small group may be judged inferior to one that produces smaller overall gains but distributes them more equitably. Social welfare functions attempt to aggregate individual utilities into a collective measure, though the choice of aggregation method is itself a value judgment with significant ethical implications.",
      displayText: "The welfare economics approach evaluates economic policies not only by their efficiency but also by how they affect the distribution of prosperity across society. A policy that increases total output but concentrates gains among a small group may be judged inferior to one that produces smaller overall gains but distributes them more fairly. Social welfare functions attempt to aggregate individual utilities into a collective measure, though the choice of aggregation method is itself a value judgment with significant ethical implications.",
      incorrectIndexes: [21, 52],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-17-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The laboratory results confirmed the presence of an unusual chemical compound.",
    },
    {
      id: "wfd-17-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Participants were asked to complete a written survey before the experiment began.",
    },
    {
      id: "wfd-17-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Advances in genomic sequencing have transformed our understanding of inherited disease.",
    },
  ],
};

export default test17;
