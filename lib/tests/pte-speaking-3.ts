import type { PTESpeakingTest } from "./pte-speaking-types";

const BAR_CHART_1_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Leading Causes of Death Worldwide (millions per year)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="60" width="44" height="160" fill="#ef4444" rx="2"/>
  <rect x="120" y="90" width="44" height="130" fill="#f59e0b" rx="2"/>
  <rect x="180" y="120" width="44" height="100" fill="#06b6d4" rx="2"/>
  <rect x="240" y="145" width="44" height="75" fill="#7c3aed" rx="2"/>
  <rect x="300" y="170" width="44" height="50" fill="#10b981" rx="2"/>
  <text x="82" y="55" text-anchor="middle" font-size="10" fill="#b91c1c">17.9</text>
  <text x="142" y="85" text-anchor="middle" font-size="10" fill="#b45309">6.2</text>
  <text x="202" y="115" text-anchor="middle" font-size="10" fill="#0e7490">4.5</text>
  <text x="262" y="140" text-anchor="middle" font-size="10" fill="#6d28d9">3.4</text>
  <text x="322" y="165" text-anchor="middle" font-size="10" fill="#166534">2.0</text>
  <text x="82" y="240" text-anchor="middle" font-size="9" fill="#64748b">Heart</text>
  <text x="142" y="240" text-anchor="middle" font-size="9" fill="#64748b">Stroke</text>
  <text x="202" y="240" text-anchor="middle" font-size="9" fill="#64748b">COPD</text>
  <text x="262" y="240" text-anchor="middle" font-size="9" fill="#64748b">Cancer</text>
  <text x="322" y="240" text-anchor="middle" font-size="9" fill="#64748b">Diabetes</text>
</svg>`;

const LINE_GRAPH_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Average Global Temperature Anomaly (°C) 1960–2020</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="155" x2="370" y2="155" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
  <text x="42" y="158" text-anchor="end" font-size="9" fill="#64748b">0°C</text>
  <polyline points="50,185 100,180 150,172 200,162 250,140 300,110 350,75 370,60" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#ef4444"/>
  <circle cx="100" cy="180" r="4" fill="#ef4444"/>
  <circle cx="150" cy="172" r="4" fill="#ef4444"/>
  <circle cx="200" cy="162" r="4" fill="#ef4444"/>
  <circle cx="250" cy="140" r="4" fill="#ef4444"/>
  <circle cx="300" cy="110" r="4" fill="#ef4444"/>
  <circle cx="350" cy="75" r="4" fill="#ef4444"/>
  <circle cx="370" cy="60" r="4" fill="#ef4444"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">1960</text>
  <text x="150" y="240" text-anchor="middle" font-size="9" fill="#64748b">1975</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">1995</text>
  <text x="370" y="240" text-anchor="middle" font-size="9" fill="#64748b">2020</text>
  <text x="42" y="78" text-anchor="end" font-size="9" fill="#64748b">+1.2°</text>
</svg>`;

const PIE_CHART_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">World Population by Continent</text>
  <path d="M130,130 L130,50 A80,80 0 0,1 206,96 Z" fill="#06b6d4"/>
  <path d="M130,130 L206,96 A80,80 0 0,1 208,165 Z" fill="#0ea5e9"/>
  <path d="M130,130 L208,165 A80,80 0 0,1 130,210 Z" fill="#7c3aed"/>
  <path d="M130,130 L130,210 A80,80 0 0,1 80,195 Z" fill="#f59e0b"/>
  <path d="M130,130 L80,195 A80,80 0 0,1 54,100 Z" fill="#10b981"/>
  <path d="M130,130 L54,100 A80,80 0 0,1 130,50 Z" fill="#ef4444"/>
  <rect x="230" y="45" width="12" height="12" fill="#06b6d4"/><text x="248" y="56" font-size="11" fill="#334155">Asia 59%</text>
  <rect x="230" y="68" width="12" height="12" fill="#0ea5e9"/><text x="248" y="79" font-size="11" fill="#334155">Africa 17%</text>
  <rect x="230" y="91" width="12" height="12" fill="#7c3aed"/><text x="248" y="102" font-size="11" fill="#334155">Europe 10%</text>
  <rect x="230" y="114" width="12" height="12" fill="#f59e0b"/><text x="248" y="125" font-size="11" fill="#334155">Americas 8%</text>
  <rect x="230" y="137" width="12" height="12" fill="#10b981"/><text x="248" y="148" font-size="11" fill="#334155">S. America 5%</text>
  <rect x="230" y="160" width="12" height="12" fill="#ef4444"/><text x="248" y="171" font-size="11" fill="#334155">Oceania 1%</text>
</svg>`;

const PROCESS_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">The Scientific Method</text>
  <rect x="155" y="28" width="90" height="32" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="200" y="48" text-anchor="middle" font-size="11" fill="#0e7490">Observation</text>
  <path d="M200,60 L200,80" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr3)"/>
  <rect x="155" y="81" width="90" height="32" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="200" y="101" text-anchor="middle" font-size="11" fill="#0e7490">Hypothesis</text>
  <path d="M200,113 L200,133" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr3)"/>
  <rect x="155" y="134" width="90" height="32" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="200" y="154" text-anchor="middle" font-size="11" fill="#0e7490">Experiment</text>
  <path d="M200,166 L200,186" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr3)"/>
  <rect x="155" y="187" width="90" height="32" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="200" y="207" text-anchor="middle" font-size="11" fill="#0e7490">Analysis</text>
  <path d="M245,203 Q330,203 330,150 Q330,100 280,86" stroke="#06b6d4" stroke-width="1.5" fill="none" stroke-dasharray="4" marker-end="url(#arr3)"/>
  <text x="345" y="155" text-anchor="middle" font-size="9" fill="#64748b">Revise</text>
  <rect x="20" y="187" width="90" height="32" fill="#dcfce7" stroke="#10b981" rx="4"/>
  <text x="65" y="200" text-anchor="middle" font-size="10" fill="#166534">Publish &amp;</text>
  <text x="65" y="213" text-anchor="middle" font-size="10" fill="#166534">Peer Review</text>
  <path d="M155,203 L115,203" stroke="#10b981" stroke-width="1.5" marker-end="url(#arr3)"/>
</svg>`;

const TABLE_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Major Ancient Civilisations: Timeline</text>
  <rect x="20" y="32" width="360" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="20" y="32" width="360" height="28" fill="#0e7490" rx="4"/>
  <text x="100" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Civilisation</text>
  <text x="220" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Founded (approx.)</text>
  <text x="340" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Region</text>
  <line x1="20" y1="60" x2="380" y2="60" stroke="#e2e8f0"/>
  <line x1="160" y1="32" x2="160" y2="242" stroke="#e2e8f0"/>
  <line x1="280" y1="32" x2="280" y2="242" stroke="#e2e8f0"/>
  <text x="100" y="82" text-anchor="middle" font-size="11" fill="#334155">Mesopotamia</text><text x="220" y="82" text-anchor="middle" font-size="11" fill="#334155">3500 BCE</text><text x="340" y="82" text-anchor="middle" font-size="11" fill="#334155">Middle East</text>
  <line x1="20" y1="92" x2="380" y2="92" stroke="#f1f5f9"/>
  <text x="100" y="112" text-anchor="middle" font-size="11" fill="#334155">Ancient Egypt</text><text x="220" y="112" text-anchor="middle" font-size="11" fill="#334155">3100 BCE</text><text x="340" y="112" text-anchor="middle" font-size="11" fill="#334155">North Africa</text>
  <line x1="20" y1="122" x2="380" y2="122" stroke="#f1f5f9"/>
  <text x="100" y="142" text-anchor="middle" font-size="11" fill="#334155">Indus Valley</text><text x="220" y="142" text-anchor="middle" font-size="11" fill="#334155">2600 BCE</text><text x="340" y="142" text-anchor="middle" font-size="11" fill="#334155">South Asia</text>
  <line x1="20" y1="152" x2="380" y2="152" stroke="#f1f5f9"/>
  <text x="100" y="172" text-anchor="middle" font-size="11" fill="#334155">Ancient China</text><text x="220" y="172" text-anchor="middle" font-size="11" fill="#334155">2100 BCE</text><text x="340" y="172" text-anchor="middle" font-size="11" fill="#334155">East Asia</text>
  <line x1="20" y1="182" x2="380" y2="182" stroke="#f1f5f9"/>
  <text x="100" y="202" text-anchor="middle" font-size="11" fill="#334155">Ancient Greece</text><text x="220" y="202" text-anchor="middle" font-size="11" fill="#334155">800 BCE</text><text x="340" y="202" text-anchor="middle" font-size="11" fill="#334155">Mediterranean</text>
  <line x1="20" y1="212" x2="380" y2="212" stroke="#f1f5f9"/>
  <text x="100" y="232" text-anchor="middle" font-size="11" fill="#334155">Roman Empire</text><text x="220" y="232" text-anchor="middle" font-size="11" fill="#334155">753 BCE</text><text x="340" y="232" text-anchor="middle" font-size="11" fill="#334155">Europe</text>
</svg>`;

const BAR_CHART_2_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Physics Nobel Prize Winners by Country (1901–2020)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="50" width="45" height="170" fill="#06b6d4" rx="2"/>
  <rect x="130" y="80" width="45" height="140" fill="#06b6d4" rx="2"/>
  <rect x="195" y="120" width="45" height="100" fill="#06b6d4" rx="2"/>
  <rect x="260" y="155" width="45" height="65" fill="#06b6d4" rx="2"/>
  <rect x="325" y="175" width="30" height="45" fill="#06b6d4" rx="2"/>
  <text x="87" y="45" text-anchor="middle" font-size="10" fill="#0e7490">97</text>
  <text x="152" y="75" text-anchor="middle" font-size="10" fill="#0e7490">74</text>
  <text x="217" y="115" text-anchor="middle" font-size="10" fill="#0e7490">55</text>
  <text x="282" y="150" text-anchor="middle" font-size="10" fill="#0e7490">32</text>
  <text x="340" y="170" text-anchor="middle" font-size="10" fill="#0e7490">25</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">USA</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">Germany</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">UK</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">France</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">USSR/Rus</text>
</svg>`;

const test3: PTESpeakingTest = {
  id: "pte-speaking-3",
  title: "PTE Speaking — Test 3",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-3-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Vaccination remains one of the most effective public health interventions ever developed. By introducing a weakened or inactivated form of a pathogen, vaccines train the immune system to recognise and fight future infections. Achieving sufficient levels of population immunity — often called herd immunity — protects even those who cannot be vaccinated, such as newborns and immunocompromised individuals, by limiting the spread of disease through communities.",
    },
    {
      id: "ra-3-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The Silk Road was a network of ancient trade routes connecting China to the Mediterranean world, spanning more than 6,000 kilometres. For centuries it facilitated the exchange not only of goods such as silk, spices, and precious metals, but also of ideas, religions, and artistic traditions. The spread of Buddhism, Islam, and Christianity along these routes demonstrates how cultural exchange accompanied commercial activity in the ancient world.",
    },
    {
      id: "ra-3-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Quantum mechanics is the branch of physics that describes the behaviour of matter and energy at the subatomic scale. Unlike classical physics, quantum theory reveals that particles can exist in multiple states simultaneously — a phenomenon known as superposition — until they are observed or measured. This counterintuitive principle underpins technologies such as semiconductors, lasers, and the emerging field of quantum computing.",
    },
    {
      id: "ra-3-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Coral reefs occupy less than one percent of the ocean floor yet support approximately 25 percent of all marine species. These ecosystems, often called the rainforests of the sea, are under severe threat from rising water temperatures, pollution, and destructive fishing practices. When water temperatures rise even slightly above the normal range, corals expel the symbiotic algae living in their tissues, turning white in a process called bleaching, which can lead to death.",
    },
    {
      id: "ra-3-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The Industrial Revolution, which began in Britain in the late eighteenth century, transformed economies and societies around the world. The mechanisation of production, powered initially by steam engines, allowed goods to be manufactured at unprecedented scale and speed. While this created enormous wealth and raised living standards over time, it also led to severe urban poverty, child labour, and the environmental degradation associated with coal-burning industries.",
    },
    {
      id: "ra-3-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Music therapy is an established clinical discipline in which trained therapists use music-based interventions to address the physical, emotional, cognitive, and social needs of individuals. Research has demonstrated its effectiveness in reducing anxiety and pain in hospital patients, improving language development in children with autism, and slowing cognitive decline in elderly patients with dementia. The therapeutic power of music is thought to relate to its ability to activate multiple brain regions simultaneously.",
    },
  ],

  repeatSentence: [
    { id: "rs-3-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The anatomy lecture has been moved from Thursday to Monday morning." },
    { id: "rs-3-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Participants in the study must complete all questionnaires within one week." },
    { id: "rs-3-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The museum's ancient Egypt exhibition will run until the end of August." },
    { id: "rs-3-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The research team published its findings in an internationally recognised journal." },
    { id: "rs-3-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students who miss more than three sessions may not qualify for their certificate." },
    { id: "rs-3-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Global health organisations are calling for greater investment in preventative medicine." },
    { id: "rs-3-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The conference registration fee includes accommodation and all catering on both days." },
    { id: "rs-3-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Geographers use satellite imagery to monitor changes in land use and vegetation cover." },
    { id: "rs-3-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The principles of thermodynamics govern the behaviour of all physical systems." },
    { id: "rs-3-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Understanding cultural context is essential to interpreting historical documents accurately." },
  ],

  describeImage: [
    {
      id: "di-3-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Leading Causes of Death Worldwide (millions per year)",
      svgContent: BAR_CHART_1_SVG,
      keyPoints: ["Heart disease is the leading cause of death at 17.9 million", "Stroke is second at 6.2 million per year", "The top five causes are all non-communicable diseases", "Diabetes accounts for 2 million deaths annually"],
    },
    {
      id: "di-3-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Average Global Temperature Anomaly (°C) 1960–2020",
      svgContent: LINE_GRAPH_SVG,
      keyPoints: ["Temperatures have risen steadily since 1960", "The warming trend accelerated after 1990", "By 2020 temperatures were approximately 1.2°C above baseline", "The dashed line represents the pre-industrial average temperature"],
    },
    {
      id: "di-3-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "World Population by Continent",
      svgContent: PIE_CHART_SVG,
      keyPoints: ["Asia accounts for 59% of the world's population", "Africa is second at 17% and growing rapidly", "Europe and the Americas together make up only 18%", "Oceania has the smallest share at just 1%"],
    },
    {
      id: "di-3-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "The Scientific Method",
      svgContent: PROCESS_SVG,
      keyPoints: ["The process begins with observation and leads to a hypothesis", "Experiments are designed to test the hypothesis", "Results are analysed and may revise the hypothesis", "Valid findings are published and subjected to peer review"],
    },
    {
      id: "di-3-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Major Ancient Civilisations: Timeline",
      svgContent: TABLE_SVG,
      keyPoints: ["Mesopotamia is the oldest civilisation listed, founded around 3500 BCE", "Ancient China and the Indus Valley both emerged in the third millennium BCE", "Greek and Roman civilisations emerged later in the first millennium BCE", "Civilisations arose across multiple continents independently"],
    },
    {
      id: "di-3-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Physics Nobel Prize Winners by Country (1901–2020)",
      svgContent: BAR_CHART_2_SVG,
      keyPoints: ["The USA has won the most Physics Nobels with 97 prizes", "Germany is second with 74 prizes", "The UK ranks third with 55 prizes", "Western nations dominate the Nobel Physics leaderboard"],
    },
  ],

  retellLecture: [
    {
      id: "rl-3-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Placebo Effect",
      lectureText: "The placebo effect is one of the most fascinating and consistently documented phenomena in medicine. When patients receive an inert treatment — a sugar pill or a saline injection — yet experience genuine improvement in their symptoms, this is the placebo effect at work. For decades it was dismissed as simply wishful thinking, but neuroimaging studies have revealed that placebos can trigger real biochemical changes in the brain. In patients with pain conditions, for example, placebos have been shown to stimulate the release of endorphins — the body's natural painkillers. The effect is influenced by many factors, including the appearance of the pill, the confidence of the doctor administering the treatment, and the ritual of the medical consultation itself. These findings have profound implications for how we understand the relationship between the mind and the body.",
      keyPoints: ["Placebo effect is a real, measurable physiological phenomenon", "Inert treatments can cause genuine symptom improvement", "Neuroimaging shows real brain changes including endorphin release", "The effect is influenced by appearance, doctor confidence, and ritual", "Reveals deep mind-body connections in medicine"],
    },
    {
      id: "rl-3-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Plate Tectonics and Continental Drift",
      lectureText: "The theory of plate tectonics, developed in the mid-twentieth century, revolutionised our understanding of how the Earth works. The outer layer of the Earth — the lithosphere — is divided into large rigid plates that float on the semi-molten asthenosphere beneath them. These plates are constantly moving, driven by heat from the Earth's interior. Where plates collide, mountain ranges such as the Himalayas are formed. Where they pull apart, ocean ridges and rift valleys emerge. At subduction zones, where one plate dives beneath another, volcanic activity and earthquakes are common. The theory elegantly explains why the continents appear to fit together like a jigsaw puzzle, why similar fossils are found on continents now separated by oceans, and why earthquakes and volcanoes cluster in predictable zones around the globe.",
      keyPoints: ["Lithosphere is divided into tectonic plates floating on the asthenosphere", "Plates move due to heat from the Earth's interior", "Colliding plates form mountain ranges; separating plates form ridges", "Subduction zones produce volcanic activity and earthquakes", "Explains continental drift, matching fossils, and earthquake zones"],
    },
    {
      id: "rl-3-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Renaissance and the Printing Press",
      lectureText: "The European Renaissance, beginning in fourteenth-century Italy, represented a profound intellectual and cultural transformation. Scholars and artists turned to classical Greek and Roman texts for inspiration, leading to new approaches in art, architecture, literature, and philosophy. A critical accelerant to the Renaissance was Johannes Gutenberg's invention of the movable-type printing press around 1440. Before this, books were hand-copied by monks and were extremely expensive and rare. The printing press allowed ideas to spread across Europe at unprecedented speed. Within fifty years of its invention, more books had been produced than in the entire preceding millennium. This democratisation of knowledge contributed directly to the Protestant Reformation, the Scientific Revolution, and ultimately the Enlightenment, reshaping the foundations of Western civilisation.",
      keyPoints: ["The Renaissance began in fourteenth-century Italy inspired by classical texts", "Gutenberg's printing press (c.1440) accelerated the spread of ideas", "Books became affordable and widely available for the first time", "The press contributed to the Reformation and Scientific Revolution", "Knowledge democratisation reshaped Western civilisation fundamentally"],
    },
  ],

  answerShort: [
    { id: "as-3-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a doctor who specialises in treating mental disorders?", expectedAnswer: "Psychiatrist" },
    { id: "as-3-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the layer of the atmosphere that contains the ozone layer?", expectedAnswer: "Stratosphere" },
    { id: "as-3-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the ancient wonder of the world located in Egypt?", expectedAnswer: "Great Pyramid of Giza" },
    { id: "as-3-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call an atom or molecule with a net electric charge?", expectedAnswer: "Ion" },
    { id: "as-3-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which body organ produces insulin?", expectedAnswer: "Pancreas" },
    { id: "as-3-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for the study of prehistoric life through fossils?", expectedAnswer: "Palaeontology" },
    { id: "as-3-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the largest desert in the world?", expectedAnswer: "Sahara" },
    { id: "as-3-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the type of energy stored in chemical bonds?", expectedAnswer: "Chemical energy" },
    { id: "as-3-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a word that is opposite in meaning to another word?", expectedAnswer: "Antonym" },
    { id: "as-3-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What was the name of the first artificial satellite launched into space?", expectedAnswer: "Sputnik" },
  ],
};

export default test3;
