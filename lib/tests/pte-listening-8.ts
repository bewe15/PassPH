import type { PTEListeningTest } from "./pte-listening-types";

const test8: PTEListeningTest = {
  id: "pte-listening-8",
  title: "PTE Listening — Test 8",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-8-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Deep-Sea Oceanography and Hydrothermal Vents",
      audioUrl: "",
      audioText: "The deep ocean, which begins at depths of around two hundred metres, remains one of the least explored environments on Earth. Despite covering more than half of the planet's surface, less than twenty percent of the ocean floor has been mapped in detail. Hydrothermal vents, discovered in the late 1970s, transformed our understanding of life's limits. These fissures in the ocean floor emit superheated, mineral-rich water and support thriving ecosystems entirely independent of sunlight. Chemosynthetic bacteria form the base of these food webs, converting chemicals rather than light into energy. The organisms found at vents — including tube worms, giant clams, and unique shrimp — survive under extreme pressure and temperature conditions once thought incompatible with life. The study of hydrothermal vent communities has significant implications for astrobiology, as it raises the possibility that life could exist in similar environments on icy moons such as Europa and Enceladus.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-8-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Sustainable agriculture encompasses a range of practices designed to produce food while minimising environmental harm and maintaining long-term soil health. Crop rotation prevents the depletion of specific nutrients by alternating the types of plants grown in a field each season. Integrated pest management reduces the need for chemical pesticides by using natural predators and biological controls. Cover cropping involves planting vegetation between main crop cycles to prevent soil erosion and fix atmospheric nitrogen. Agroforestry combines trees with crops or livestock, improving biodiversity and providing shade. Water harvesting techniques collect and retain rainfall, reducing dependence on irrigation.",
      question: "According to the talk, which TWO practices are described as part of sustainable agriculture?",
      options: [
        "Crop rotation to prevent nutrient depletion",
        "Expanding monoculture to maximise yields",
        "Using chemical fertilisers to boost production",
        "Cover cropping to prevent soil erosion",
        "Increasing irrigation using groundwater",
        "Removing trees to create more farmland",
      ],
      correctIndexes: [0, 3],
    },
    {
      id: "mcm-8-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Behavioural economics challenges the classical assumption that human beings are rational actors who always make decisions in their own best interest. Research by psychologists such as Daniel Kahneman and Amos Tversky has demonstrated that people are subject to systematic biases. Loss aversion means that people feel the pain of a loss more strongly than the pleasure of an equivalent gain. The anchoring effect causes individuals to rely too heavily on the first piece of information they receive when making decisions. Present bias leads people to overvalue immediate rewards and undervalue future outcomes, which can undermine saving behaviour and health choices. These findings have been applied in the design of public policy through nudge theory, which arranges choices to encourage beneficial decisions without removing individual freedom.",
      question: "Which THREE cognitive biases are mentioned in the recording?",
      options: [
        "Loss aversion",
        "Confirmation bias",
        "Anchoring effect",
        "Availability heuristic",
        "Present bias",
        "Dunning-Kruger effect",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-8-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Robotics has advanced dramatically over the past two decades, driven by improvements in computing power, sensor technology, and machine learning algorithms. Modern industrial robots can perform repetitive tasks with extraordinary precision on factory assembly lines. Collaborative robots, known as cobots, are designed to work safely alongside human workers rather than replacing them entirely. In healthcare, robotic surgical systems allow surgeons to perform minimally invasive procedures with greater accuracy and smaller incisions than traditional methods. Autonomous mobile robots are increasingly deployed in warehouses to sort and transport goods, significantly improving logistical efficiency.",
      transcript: "Robotics has advanced dramatically over the past two decades, driven by improvements in computing power, sensor technology, and machine learning ___BLANK___. Modern industrial robots can perform repetitive tasks with extraordinary ___BLANK___ on factory assembly lines. Collaborative robots, known as cobots, are designed to work safely alongside human ___BLANK___ rather than replacing them entirely. In healthcare, robotic surgical systems allow surgeons to perform minimally invasive procedures with greater accuracy and smaller ___BLANK___ than traditional methods.",
      answers: ["algorithms", "precision", "workers", "incisions"],
    },
    {
      id: "fib-8-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Ancient civilisations developed sophisticated urban infrastructure long before the modern era. The Indus Valley Civilisation, which flourished around four thousand years ago, built cities with standardised brick sizes, grid-based street layouts, and advanced drainage systems. The Romans constructed aqueducts capable of transporting water over hundreds of kilometres to supply growing urban populations. Mesoamerican cultures engineered large ceremonial complexes aligned with astronomical events, demonstrating a detailed knowledge of celestial cycles. These achievements reflect the ingenuity of early societies in solving complex engineering and organisational challenges.",
      transcript: "Ancient civilisations developed sophisticated urban ___BLANK___ long before the modern era. The Indus Valley Civilisation built cities with standardised brick sizes, grid-based street layouts, and advanced ___BLANK___ systems. The Romans constructed aqueducts capable of transporting ___BLANK___ over hundreds of kilometres to supply growing urban populations. Mesoamerican cultures engineered large ceremonial complexes aligned with ___BLANK___ events, demonstrating a detailed knowledge of celestial cycles.",
      answers: ["infrastructure", "drainage", "water", "astronomical"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-8-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Environmental law has evolved considerably since the 1970s, when a wave of legislation in North America and Europe established foundational frameworks for protecting air, water, and land. International agreements such as the Kyoto Protocol and the Paris Agreement have attempted to coordinate global responses to climate change, though enforcement mechanisms remain limited. One persistent challenge is the tension between economic development and environmental protection, with developing nations arguing that they should not be held to the same standards as industrialised countries that built their wealth by exploiting natural resources without restriction. Non-governmental organisations play an increasingly important role in monitoring compliance and bringing legal challenges against governments and corporations.",
      correctIndex: 2,
      summaries: [
        "Environmental law was created in the 1970s primarily in response to industrial accidents and has since focused mainly on protecting marine ecosystems from oil spills and shipping pollution.",
        "The development of environmental law has been driven almost entirely by non-governmental organisations, which have successfully pressured governments into signing binding international agreements.",
        "Environmental law has grown since the 1970s, with international agreements addressing climate change, though tensions persist between development and protection, and enforcement remains a challenge.",
        "International environmental agreements have been largely successful because all signatory nations share equal obligations regardless of their level of economic development.",
      ],
    },
    {
      id: "hcs-8-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The philosophy of mind grapples with fundamental questions about consciousness, identity, and the relationship between mental states and physical processes. The mind-body problem, debated by philosophers since Descartes, asks how subjective experience arises from physical matter such as the brain. Physicalist theories hold that mental states are identical to or reducible to brain states, while dualist theories maintain that mind and body are distinct substances. The concept of qualia refers to the subjective, experiential qualities of perception — the redness of red or the painfulness of pain — which some philosophers argue cannot be fully explained by physical accounts of the brain. Advances in neuroscience have informed but not resolved these debates.",
      correctIndex: 0,
      summaries: [
        "The philosophy of mind explores the relationship between consciousness and the brain, examining debates such as the mind-body problem and the nature of subjective experience through physicalist and dualist perspectives.",
        "The philosophy of mind was founded by Descartes and holds that the mind and body are entirely separate entities, a view now confirmed by modern neuroscience research.",
        "Physicalist theories have conclusively resolved the mind-body problem by demonstrating that all mental states can be reduced to measurable brain activity without any remaining philosophical puzzles.",
        "The philosophy of mind focuses exclusively on the study of artificial intelligence and whether machines can develop genuine consciousness comparable to human experience.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-8-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Demography, the statistical study of human populations, has become an increasingly important field as governments plan for ageing societies. In many high-income countries, falling birth rates and increasing life expectancy are producing populations with a growing proportion of older people and a shrinking working-age cohort. This demographic transition creates fiscal pressure on pension systems and healthcare services, as fewer workers support a larger dependent population. Some economists argue that managed migration can offset these trends by bringing younger workers into ageing societies, though this remains politically contested. Japan and several European nations are already grappling with the consequences of these demographic shifts.",
      question: "According to the speaker, what is one proposed solution to the challenges created by ageing populations?",
      options: [
        "Raising the retirement age for all workers immediately.",
        "Reducing healthcare spending to relieve fiscal pressure.",
        "Using managed migration to introduce younger workers.",
        "Encouraging higher birth rates through financial penalties.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-8-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Materials science is an interdisciplinary field that investigates the properties of matter and their applications in engineering and technology. At its core is the relationship between a material's atomic or molecular structure and its macroscopic properties such as strength, conductivity, and flexibility. The development of new materials has been central to technological progress, from the Bronze Age to the silicon chip. Today, researchers are exploring materials such as graphene, a single-atom-thick layer of carbon with extraordinary electrical and mechanical properties, and metamaterials, which are engineered structures with properties not found in naturally occurring substances. These advances are opening new possibilities in electronics, energy storage, and medical devices.",
      question: "What does the speaker say is the central focus of materials science?",
      options: [
        "The historical development of metals from the Bronze Age to the present.",
        "The relationship between a material's structure and its observable properties.",
        "The commercial production of graphene for use in consumer electronics.",
        "The environmental impact of mining materials for use in technology.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-8-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Astrophysics has made remarkable strides in recent decades, aided by space telescopes such as Hubble and the James Webb Space Telescope, which can observe galaxies billions of light-years away. The detection of gravitational waves in 2015, predicted by Einstein's general theory of relativity, opened an entirely new way of studying the universe. Black holes, once purely theoretical, have now been directly imaged. Despite these achievements, many of the universe's most fundamental questions — including the nature of dark matter and dark energy — remain",
      options: ["thoroughly understood", "largely unanswered", "politically debated", "financially irrelevant"],
      correctIndex: 1,
    },
    {
      id: "smw-8-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Ethnography is a qualitative research method in which the researcher immerses themselves in a community or social group over an extended period in order to understand its culture, practices, and beliefs from an insider's perspective. Originally associated with anthropological studies of non-Western societies, ethnography has since been adopted across disciplines including sociology, education, and organisational studies. Researchers using this method must navigate complex ethical questions about their relationships with participants and the impact of their presence on the communities they",
      options: ["criticise publicly", "observe and document", "financially support", "legally represent"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-8-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Education policy in many countries has shifted towards standardised testing as a primary measure of student achievement and school performance. Critics argue that this approach narrows the curriculum, as teachers focus on preparing students for tests at the expense of creative and critical thinking. Proponents contend that standardised assessments provide objective data that can identify underperforming schools and guide resource allocation.",
      displayText: "Education policy in many countries has shifted towards standardised testing as a primary measure of student achievement and school performance. Critics argue that this approach narrows the curriculum, as teachers focus on preparing students for exams at the expense of creative and analytical thinking. Proponents contend that standardised assessments provide objective data that can identify underperforming schools and guide resource allocation.",
      incorrectIndexes: [35, 42],
    },
    {
      id: "hiw-8-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The global geopolitical order has become increasingly multipolar following the relative decline of American dominance in the post-Cold War era. Rising powers such as China and India are asserting greater influence in international institutions and regional affairs. Competition for access to critical resources including rare earth minerals, deep-sea territories, and Arctic shipping routes is intensifying, reshaping alliances and prompting countries to reconsider long-standing strategic partnerships.",
      displayText: "The global geopolitical order has become increasingly bipolar following the relative decline of American dominance in the post-Cold War era. Rising powers such as China and India are asserting greater influence in international institutions and regional affairs. Competition for access to critical resources including rare earth minerals, deep-sea territories, and Arctic shipping routes is intensifying, reshaping alliances and prompting countries to reconsider long-standing economic partnerships.",
      incorrectIndexes: [7, 63],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-8-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The seminar on cognitive psychology begins at nine o'clock tomorrow morning.",
    },
    {
      id: "wfd-8-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Researchers must obtain ethical approval before conducting studies involving human participants.",
    },
    {
      id: "wfd-8-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The professor outlined three key factors that contributed to the economic crisis.",
    },
  ],
};

export default test8;
