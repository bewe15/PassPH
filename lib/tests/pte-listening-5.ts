import type { PTEListeningTest } from "./pte-listening-types";

const test5: PTEListeningTest = {
  id: "pte-listening-5",
  title: "PTE Listening — Test 5",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-5-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Archaeological Dating Methods",
      audioUrl: "",
      audioText: "Archaeology relies on a range of dating techniques to establish the age of artefacts and sites. Radiocarbon dating, developed in the late 1940s, measures the decay of carbon-14 in organic materials and can accurately date objects up to around fifty thousand years old. For older materials, researchers turn to methods such as potassium-argon dating, which is used to date volcanic rock and has been instrumental in establishing the timelines of early human evolution in Africa. Dendrochronology, the study of tree rings, can provide precise year-by-year dates for wooden artefacts and buildings. Thermoluminescence dating is applied to ceramics and burnt stones, measuring the energy trapped in a material since it was last exposed to heat. Each method has its own range and limitations, and archaeologists typically use several techniques in combination to cross-check their findings. The development of these methods has fundamentally transformed our understanding of prehistoric cultures and human migration.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-5-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The study of animal behaviour, or ethology, has revealed remarkable complexity in the ways animals communicate with one another. Research on primates shows that chimpanzees use a combination of vocalisations, facial expressions, and gestures to convey information about food, danger, and social relationships. Honeybees perform a waggle dance to communicate the direction and distance of a food source to other members of the hive. Elephants are known to use infrasonic calls — sounds below the range of human hearing — to coordinate movement across large distances. Some bird species learn their songs culturally, with regional dialects developing in geographically isolated populations.",
      question: "According to the talk, which TWO forms of animal communication are mentioned?",
      options: [
        "Chemical signals released by insects to mark territory",
        "Infrasonic calls used by elephants over long distances",
        "The waggle dance of honeybees to indicate food location",
        "Colour changes used by cephalopods to signal mood",
        "Electrical pulses produced by deep-sea fish",
      ],
      correctIndexes: [1, 2],
    },
    {
      id: "mcm-5-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Migration is a defining feature of human history. Throughout the centuries, people have moved across borders and continents in search of economic opportunity, political safety, and better living conditions. Contemporary migration patterns are shaped by a combination of push factors — such as conflict, poverty, and climate-related disasters — and pull factors, including higher wages, political stability, and the presence of established diaspora communities in destination countries. Research consistently shows that migrants contribute significantly to host economies through labour, entrepreneurship, and tax contributions. However, migration also generates political tensions, particularly in countries where public services are under strain.",
      question: "Which THREE factors does the speaker identify as driving contemporary migration?",
      options: [
        "Conflict and political instability",
        "The desire for adventure and tourism",
        "Poverty in countries of origin",
        "Climate-related disasters",
        "Access to better entertainment and leisure",
        "Declining birth rates in destination countries",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-5-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Linguistics is the scientific study of language, encompassing its structure, meaning, and social use. One of the central debates in the field concerns whether language is an innate capacity unique to humans or a skill acquired entirely through experience and cultural transmission. The linguist Noam Chomsky proposed the existence of a universal grammar — an underlying set of rules shared by all human languages and hardwired into the brain. Critics of this view argue that linguistic diversity across the world's languages is far too great to be explained by a fixed innate structure, and that language emerges instead from general cognitive abilities.",
      transcript: "Linguistics is the scientific study of language, encompassing its structure, meaning, and social use. One of the central debates in the field concerns whether language is an innate ___BLANK___ unique to humans or a skill acquired entirely through experience and cultural ___BLANK___. The linguist Noam Chomsky proposed the existence of a universal grammar — an underlying set of rules shared by all human languages and hardwired into the ___BLANK___. Critics of this view argue that linguistic ___BLANK___ across the world's languages is far too great to be explained by a fixed innate structure.",
      answers: ["capacity", "transmission", "brain", "diversity"],
    },
    {
      id: "fib-5-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Volcanology is the study of volcanoes, lava, magma, and related phenomena. Modern volcanologists use a range of instruments to monitor volcanic activity and provide early warnings of eruptions. Seismometers detect the small earthquakes that occur as magma moves through rock, while tiltmeters measure subtle deformation of the ground surface caused by the swelling of a magma chamber. Gas sensors track changes in the composition of gases emitted from volcanic vents, which can signal rising activity. Despite significant advances in monitoring technology, predicting the precise timing of volcanic eruptions remains one of the greatest challenges in earth science.",
      transcript: "Volcanology is the study of volcanoes, lava, magma, and related phenomena. Modern volcanologists use a range of instruments to monitor volcanic activity and provide early ___BLANK___ of eruptions. Seismometers detect the small earthquakes that occur as magma moves through rock, while tiltmeters measure subtle ___BLANK___ of the ground surface caused by the swelling of a magma chamber. Gas sensors track changes in the ___BLANK___ of gases emitted from volcanic vents, which can signal rising activity. Despite significant advances in monitoring technology, predicting the precise ___BLANK___ of volcanic eruptions remains one of the greatest challenges in earth science.",
      answers: ["warnings", "deformation", "composition", "timing"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-5-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The field of neuroscience has made extraordinary strides in understanding how the brain encodes and retrieves memories. Research using functional magnetic resonance imaging shows that memory formation involves the hippocampus, a structure deep in the temporal lobe that consolidates information from short-term to long-term storage during sleep. Memories are not static records but are reconstructed each time they are recalled, making them susceptible to distortion. Studies have shown that people can develop vivid but entirely false memories of events that never occurred, a phenomenon with significant implications for the reliability of eyewitness testimony in legal settings.",
      correctIndex: 2,
      summaries: [
        "Neuroscience has shown that the hippocampus is responsible for all aspects of brain function, including language, emotion, and spatial navigation, making it the most important structure in the brain.",
        "Brain imaging technology has confirmed that memories are perfectly preserved in the brain and can be retrieved with complete accuracy, which strengthens the reliability of eyewitness accounts in courts.",
        "Neuroscience research shows that memory formation relies on the hippocampus and occurs during sleep, and that memories are reconstructable and prone to distortion, raising questions about eyewitness reliability.",
        "The discovery that memories are encoded during sleep has led neuroscientists to recommend longer sleep periods for students preparing for examinations, as this consolidates newly learned material.",
      ],
    },
    {
      id: "hcs-5-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Architecture is not merely the construction of buildings — it is a discipline that shapes how people experience space, community, and identity. Throughout history, architectural styles have reflected the values and priorities of their societies, from the civic grandeur of Roman public buildings to the minimalist efficiency of modernist design. Contemporary architects increasingly grapple with environmental sustainability, seeking to reduce the carbon footprint of buildings through passive design strategies, the use of sustainable materials, and integration with renewable energy systems. At the same time, there is growing recognition of the social dimension of architecture, particularly the need to design spaces that are inclusive, accessible, and supportive of mental wellbeing.",
      correctIndex: 0,
      summaries: [
        "Architecture shapes human experience and reflects social values, and contemporary architects are responding to both environmental sustainability and the social impact of designed spaces.",
        "Modern architecture has largely abandoned historical styles in favour of purely functional buildings, prioritising cost efficiency over aesthetic or social considerations.",
        "The environmental impact of architecture is its most important dimension, and architects now spend most of their time calculating carbon emissions rather than designing aesthetically pleasing spaces.",
        "Architecture has evolved primarily as a form of artistic expression, with most architects focused on winning awards rather than addressing practical concerns such as affordability or accessibility.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-5-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Economic inequality has widened significantly in many countries over the past four decades. Research by economists such as Thomas Piketty has shown that the share of national income held by the wealthiest one percent has grown substantially since the 1980s in the United States and much of Europe. Factors contributing to this trend include the decline of unionised labour, the globalisation of production, and technological change that has raised demand for highly skilled workers while reducing opportunities for those with lower qualifications. Some economists argue that moderate inequality can incentivise innovation, but a growing body of evidence links high levels of inequality to poorer health outcomes, reduced social mobility, and political instability.",
      question: "What does the speaker say about economic inequality and health?",
      options: [
        "High inequality is associated with better health outcomes due to increased competition.",
        "The link between inequality and health has been disproved by recent research.",
        "Evidence suggests that high levels of inequality are linked to worse health outcomes.",
        "Inequality only affects health in low-income countries, not in wealthy nations.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-5-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "The philosophy of science examines the foundations, methods, and implications of scientific inquiry. One of its central debates concerns the demarcation problem — the question of how to distinguish genuine science from pseudoscience. Karl Popper proposed that a theory is scientific only if it is falsifiable, meaning that it can in principle be proven wrong by evidence. By this criterion, astrology and creationism are not scientific because they cannot be meaningfully tested. Thomas Kuhn offered a different perspective, arguing that science progresses through paradigm shifts — periods of radical conceptual change that replace one dominant framework with another — rather than through steady accumulation of knowledge.",
      question: "According to the speaker, what was Karl Popper's criterion for a scientific theory?",
      options: [
        "It must have been tested by multiple independent research teams.",
        "It must be capable of being proven wrong by evidence.",
        "It must be endorsed by the majority of scientists in the relevant field.",
        "It must produce results that can be applied to real-world problems.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-5-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Music cognition is the scientific study of how the brain processes and responds to music. Research has shown that listening to music activates multiple areas of the brain simultaneously, including regions involved in emotion, memory, and motor control. One of the most intriguing findings is that music can trigger powerful autobiographical memories, a phenomenon linked to the way the hippocampus and prefrontal cortex interact. This insight has informed the development of music therapy programmes for patients with dementia, who often retain the ability to respond to familiar music long after other cognitive functions have",
      options: [
        "improved dramatically",
        "been severely impaired",
        "become more complex",
        "returned to normal",
      ],
      correctIndex: 1,
    },
    {
      id: "smw-5-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Epidemiology is the study of how diseases spread and affect populations. Epidemiologists gather data on who gets sick, where, and under what conditions, in order to identify risk factors and design public health interventions. During the COVID-19 pandemic, epidemiological modelling played a central role in guiding government responses, forecasting hospital demand, and evaluating the effectiveness of measures such as social distancing and vaccination campaigns. However, modelling is only as reliable as the data it is based on, and early in an outbreak, reliable data is often",
      options: [
        "widely available and accurate",
        "scarce and subject to uncertainty",
        "collected by international agencies",
        "used to justify government spending",
      ],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-5-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The domestication of animals began approximately fifteen thousand years ago with dogs, which were likely tamed from wolves that scavenged near human settlements. Subsequent domestication of livestock such as cattle, sheep, and goats transformed human societies by providing a reliable source of meat, milk, and labour. The ability to harness animal power dramatically increased agricultural productivity and enabled the development of early civilisations.",
      displayText: "The domestication of animals began approximately fifteen thousand years ago with dogs, which were likely tamed from wolves that scavenged near human settlements. Subsequent domestication of livestock such as cattle, sheep, and goats transformed human societies by providing a reliable source of meat, milk, and energy. The ability to harness animal power dramatically reduced agricultural productivity and enabled the development of early civilisations.",
      incorrectIndexes: [45, 53],
    },
    {
      id: "hiw-5-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Digital privacy has emerged as a defining issue of the twenty-first century. As individuals share increasing amounts of personal data through social media platforms, online shopping, and connected devices, questions arise about who controls that data and how it is used. Governments and regulators in many countries have introduced legislation to give individuals greater rights over their personal information, including the right to access, correct, and delete data held about them.",
      displayText: "Digital privacy has emerged as a defining issue of the twenty-first century. As individuals share increasing amounts of personal data through social media platforms, online shopping, and connected devices, questions arise about who controls that data and how it is stored. Governments and regulators in many countries have introduced legislation to give individuals greater rights over their personal information, including the right to access, correct, and remove data held about them.",
      incorrectIndexes: [40, 66],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-5-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Archaeologists discovered several ancient artefacts beneath the ruins of the temple.",
    },
    {
      id: "wfd-5-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The professor emphasised the importance of critical thinking in academic research.",
    },
    {
      id: "wfd-5-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Migration patterns across the region have shifted significantly over the past decade.",
    },
  ],
};

export default test5;
