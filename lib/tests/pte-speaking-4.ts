import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Smartphone Ownership by Region (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="55" width="45" height="165" fill="#06b6d4" rx="2"/><text x="87" y="50" text-anchor="middle" font-size="10" fill="#0e7490">83%</text>
  <rect x="130" y="85" width="45" height="135" fill="#06b6d4" rx="2"/><text x="152" y="80" text-anchor="middle" font-size="10" fill="#0e7490">68%</text>
  <rect x="195" y="115" width="45" height="105" fill="#06b6d4" rx="2"/><text x="217" y="110" text-anchor="middle" font-size="10" fill="#0e7490">53%</text>
  <rect x="260" y="145" width="45" height="75" fill="#06b6d4" rx="2"/><text x="282" y="140" text-anchor="middle" font-size="10" fill="#0e7490">38%</text>
  <rect x="325" y="165" width="30" height="55" fill="#06b6d4" rx="2"/><text x="340" y="160" text-anchor="middle" font-size="10" fill="#0e7490">28%</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">Americas</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">Africa</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">Oceania</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Life Expectancy 1950–2020</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,195 114,180 178,160 242,135 306,105 370,80" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="195" r="4" fill="#06b6d4"/><circle cx="114" cy="180" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="160" r="4" fill="#06b6d4"/><circle cx="242" cy="135" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="105" r="4" fill="#06b6d4"/><circle cx="370" cy="80" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">1950</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">1960</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">1975</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">1990</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2005</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Water Use by Sector</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 80,193 Z" fill="#0ea5e9"/>
  <path d="M140,130 L80,193 A80,80 0 0,1 140,50 Z" fill="#7c3aed"/>
  <rect x="240" y="65" width="12" height="12" fill="#06b6d4"/><text x="258" y="76" font-size="11" fill="#334155">Agriculture 70%</text>
  <rect x="240" y="90" width="12" height="12" fill="#0ea5e9"/><text x="258" y="101" font-size="11" fill="#334155">Industry 19%</text>
  <rect x="240" y="115" width="12" height="12" fill="#7c3aed"/><text x="258" y="126" font-size="11" fill="#334155">Domestic 11%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">How a Vaccine Works</text>
  <rect x="20" y="80" width="80" height="36" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="60" y="103" text-anchor="middle" font-size="11" fill="#0e7490">Vaccination</text>
  <path d="M100,98 L125,98" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr4)"/>
  <rect x="125" y="80" width="80" height="36" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="165" y="97" text-anchor="middle" font-size="11" fill="#0e7490">Antigen</text>
  <text x="165" y="111" text-anchor="middle" font-size="11" fill="#0e7490">detected</text>
  <path d="M205,98 L230,98" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr4)"/>
  <rect x="230" y="80" width="80" height="36" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="270" y="97" text-anchor="middle" font-size="11" fill="#0e7490">Antibodies</text>
  <text x="270" y="111" text-anchor="middle" font-size="11" fill="#0e7490">produced</text>
  <path d="M310,98 L335,98" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr4)"/>
  <rect x="335" y="80" width="55" height="36" fill="#dcfce7" stroke="#10b981" rx="4"/>
  <text x="362" y="97" text-anchor="middle" font-size="11" fill="#15803d">Memory</text>
  <text x="362" y="111" text-anchor="middle" font-size="11" fill="#15803d">formed</text>
  <defs><marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">University Enrolment by Field (thousands)</text>
  <rect x="30" y="35" width="340" height="200" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="100" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Field</text>
  <text x="220" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2019</text>
  <text x="300" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2023</text>
  <text x="360" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Δ</text>
  <line x1="160" y1="35" x2="160" y2="235" stroke="#e2e8f0"/><line x1="260" y1="35" x2="260" y2="235" stroke="#e2e8f0"/><line x1="330" y1="35" x2="330" y2="235" stroke="#e2e8f0"/>
  <text x="100" y="88" text-anchor="middle" font-size="11" fill="#334155">Business</text><text x="220" y="88" text-anchor="middle" font-size="11" fill="#334155">420</text><text x="300" y="88" text-anchor="middle" font-size="11" fill="#334155">465</text><text x="360" y="88" text-anchor="middle" font-size="11" fill="#10b981">+45</text>
  <line x1="30" y1="98" x2="370" y2="98" stroke="#f1f5f9"/>
  <text x="100" y="120" text-anchor="middle" font-size="11" fill="#334155">Engineering</text><text x="220" y="120" text-anchor="middle" font-size="11" fill="#334155">310</text><text x="300" y="120" text-anchor="middle" font-size="11" fill="#334155">348</text><text x="360" y="120" text-anchor="middle" font-size="11" fill="#10b981">+38</text>
  <line x1="30" y1="130" x2="370" y2="130" stroke="#f1f5f9"/>
  <text x="100" y="152" text-anchor="middle" font-size="11" fill="#334155">Health</text><text x="220" y="152" text-anchor="middle" font-size="11" fill="#334155">280</text><text x="300" y="152" text-anchor="middle" font-size="11" fill="#334155">330</text><text x="360" y="152" text-anchor="middle" font-size="11" fill="#10b981">+50</text>
  <line x1="30" y1="162" x2="370" y2="162" stroke="#f1f5f9"/>
  <text x="100" y="184" text-anchor="middle" font-size="11" fill="#334155">Arts</text><text x="220" y="184" text-anchor="middle" font-size="11" fill="#334155">195</text><text x="300" y="184" text-anchor="middle" font-size="11" fill="#334155">182</text><text x="360" y="184" text-anchor="middle" font-size="11" fill="#ef4444">-13</text>
  <line x1="30" y1="194" x2="370" y2="194" stroke="#f1f5f9"/>
  <text x="100" y="216" text-anchor="middle" font-size="11" fill="#334155">Sciences</text><text x="220" y="216" text-anchor="middle" font-size="11" fill="#334155">260</text><text x="300" y="216" text-anchor="middle" font-size="11" fill="#334155">295</text><text x="360" y="216" text-anchor="middle" font-size="11" fill="#10b981">+35</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Causes of Deforestation (%)</text>
  <rect x="60" y="60" width="50" height="60" fill="#06b6d4" rx="2"/><text x="85" y="55" text-anchor="middle" font-size="10" fill="#0e7490">30%</text>
  <rect x="130" y="40" width="50" height="80" fill="#0ea5e9" rx="2"/><text x="155" y="35" text-anchor="middle" font-size="10" fill="#0e7490">40%</text>
  <rect x="200" y="100" width="50" height="20" fill="#7c3aed" rx="2"/><text x="225" y="95" text-anchor="middle" font-size="10" fill="#0e7490">10%</text>
  <rect x="270" y="80" width="50" height="40" fill="#f59e0b" rx="2"/><text x="295" y="75" text-anchor="middle" font-size="10" fill="#0e7490">20%</text>
  <line x1="50" y1="120" x2="370" y2="120" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="120" stroke="#cbd5e1" stroke-width="1"/>
  <text x="85" y="140" text-anchor="middle" font-size="9" fill="#64748b">Cattle</text>
  <text x="155" y="140" text-anchor="middle" font-size="9" fill="#64748b">Crops</text>
  <text x="225" y="140" text-anchor="middle" font-size="9" fill="#64748b">Logging</text>
  <text x="295" y="140" text-anchor="middle" font-size="9" fill="#64748b">Infrastructure</text>
  <rect x="50" y="160" width="300" height="80" fill="#fef9c3" stroke="#fde047" rx="4"/>
  <text x="200" y="180" text-anchor="middle" font-size="11" fill="#713f12">Key insight: Agricultural expansion (cattle ranching</text>
  <text x="200" y="198" text-anchor="middle" font-size="11" fill="#713f12">and crop farming) accounts for 70% of all</text>
  <text x="200" y="216" text-anchor="middle" font-size="11" fill="#713f12">deforestation globally.</text>
</svg>`;

const test4: PTESpeakingTest = {
  id: "pte-speaking-4",
  title: "PTE Speaking — Test 4",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-4-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The field of cognitive psychology examines how the mind processes, stores, and retrieves information. Researchers investigate mental processes such as attention, memory, problem-solving, and language comprehension. Findings from this discipline have informed educational practices, user interface design, and treatments for conditions such as anxiety and post-traumatic stress disorder.",
    },
    {
      id: "ra-4-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Civil engineering has undergone dramatic transformation with the introduction of smart materials and digital modelling tools. Modern infrastructure projects use sensors embedded in concrete and steel to monitor structural integrity in real time. This data-driven approach allows engineers to detect potential failures before they become critical, extending the lifespan of bridges, tunnels, and buildings.",
    },
    {
      id: "ra-4-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The study of exoplanets — planets orbiting stars beyond our solar system — has revolutionised astronomy since the first confirmed discovery in 1992. Space telescopes now detect thousands of candidate worlds by measuring the slight dimming of starlight as a planet passes in front of its host star. Scientists are particularly interested in rocky planets located within their star's habitable zone.",
    },
    {
      id: "ra-4-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Language acquisition in early childhood is a remarkable process that has fascinated linguists for generations. Children typically begin producing recognisable words around their first birthday and rapidly expand their vocabulary in the years that follow. Debate continues over whether this ability reflects an innate biological capacity for language or whether it is primarily shaped by environmental exposure and social interaction.",
    },
    {
      id: "ra-4-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Political polarisation has intensified in many democracies over recent decades, with citizens increasingly clustering into ideologically homogeneous communities. Social media algorithms that prioritise emotionally engaging content are thought to amplify this trend by exposing users predominantly to views that reinforce their existing beliefs. Scholars warn that extreme polarisation can undermine the capacity for democratic compromise.",
    },
    {
      id: "ra-4-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Antibiotic resistance represents one of the most urgent public health challenges of the twenty-first century. The overuse and misuse of antibiotics in human medicine and livestock farming has accelerated the evolution of drug-resistant bacteria. Without effective antibiotics, routine surgical procedures and treatments for common infections could become life-threatening, reversing decades of medical progress.",
    },
  ],

  repeatSentence: [
    { id: "rs-4-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The results of the study will be published in a peer-reviewed journal next month." },
    { id: "rs-4-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Please ensure your mobile devices are switched off during the examination." },
    { id: "rs-4-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The government introduced new legislation to reduce carbon emissions by 2030." },
    { id: "rs-4-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students are encouraged to consult the reading list before attending tutorials." },
    { id: "rs-4-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Access to clean drinking water remains a challenge for millions of people worldwide." },
    { id: "rs-4-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The seminar will explore the relationship between language and cultural identity." },
    { id: "rs-4-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Vaccination programmes have successfully eradicated several infectious diseases globally." },
    { id: "rs-4-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The archaeological dig uncovered artefacts dating back more than three thousand years." },
    { id: "rs-4-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "International collaboration is essential to address climate change effectively." },
    { id: "rs-4-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor outlined the key theoretical frameworks at the start of the course." },
  ],

  describeImage: [
    {
      id: "di-4-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Smartphone Ownership by Region (%)",
      svgContent: SVG_1,
      keyPoints: ["Europe has the highest ownership at 83%", "Africa has relatively low ownership at 38%", "Large digital divide between regions", "Ownership correlates broadly with economic development"],
    },
    {
      id: "di-4-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Global Life Expectancy 1950–2020",
      svgContent: SVG_2,
      keyPoints: ["Consistent upward trend from 1950 to 2020", "Significant improvements between 1975 and 2005", "Driven by advances in medicine and sanitation", "Global average now approaching 73 years"],
    },
    {
      id: "di-4-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Water Use by Sector",
      svgContent: SVG_3,
      keyPoints: ["Agriculture dominates at 70% of all water use", "Industry accounts for 19%", "Domestic use is smallest at 11%", "Agricultural efficiency is critical to water conservation"],
    },
    {
      id: "di-4-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "How a Vaccine Works",
      svgContent: SVG_4,
      keyPoints: ["Vaccination introduces antigens to the body", "Immune system detects and responds to antigens", "Antibodies are produced to neutralise the threat", "Memory cells form for long-term protection"],
    },
    {
      id: "di-4-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "University Enrolment by Field (thousands)",
      svgContent: SVG_5,
      keyPoints: ["Health sciences showed the largest increase (+50k)", "Arts enrolments declined between 2019 and 2023", "Business remains the largest field overall", "STEM and health fields are growing strongly"],
    },
    {
      id: "di-4-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Causes of Deforestation (%)",
      svgContent: SVG_6,
      keyPoints: ["Crop farming is the leading cause at 40%", "Agriculture overall accounts for 70%", "Logging contributes only 10%", "Infrastructure development accounts for 20%"],
    },
  ],

  retellLecture: [
    {
      id: "rl-4-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Psychology of Sleep",
      lectureText: "Sleep is far more than a passive state of rest. During sleep, the brain performs essential functions including memory consolidation, emotional processing, and the clearance of metabolic waste products. There are two main sleep stages: REM sleep, characterised by rapid eye movements and vivid dreaming, and non-REM sleep, which includes the deepest and most restorative phases. Chronic sleep deprivation has been linked to increased risks of obesity, cardiovascular disease, diabetes, and mental health disorders. Despite knowing this, many people in modern societies consistently sleep fewer hours than the recommended seven to nine. Factors including shift work, screen use before bed, and high stress levels all disrupt normal sleep patterns. Researchers are increasingly studying how sleep quality, not just duration, affects long-term health outcomes.",
      keyPoints: ["Sleep performs memory consolidation and waste clearance", "Two stages: REM and non-REM sleep", "Chronic deprivation linked to serious health conditions", "Most adults need 7–9 hours per night", "Screen use and stress disrupt sleep quality"],
    },
    {
      id: "rl-4-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Globalisation and Cultural Change",
      lectureText: "Globalisation — the increasing interconnectedness of economies, cultures, and societies — has accelerated dramatically over the past fifty years. Improvements in transport, communication technology, and international trade agreements have brought people closer together than at any previous point in history. Proponents argue that globalisation raises living standards, spreads democratic values, and allows ideas and innovations to travel rapidly across borders. Critics, however, point to the erosion of local cultures and languages, the concentration of wealth in multinational corporations, and the displacement of workers in industries exposed to global competition. The cultural effects of globalisation are complex: while global brands and media spread a homogenised popular culture, digital technology has also enabled minority cultures to preserve and share their heritage more effectively than ever before.",
      keyPoints: ["Globalisation has accelerated over 50 years", "Driven by trade, transport, and communication", "Benefits include higher living standards and idea exchange", "Critics highlight cultural erosion and wealth concentration", "Digital technology helps minority cultures survive"],
    },
    {
      id: "rl-4-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Sustainable Architecture",
      lectureText: "As concerns about climate change intensify, architects and urban planners are rethinking how buildings are designed, constructed, and operated. Sustainable architecture aims to minimise a building's environmental impact across its entire lifecycle, from the extraction of raw materials through to eventual demolition. Passive design strategies — such as orienting buildings to maximise natural light and ventilation — can dramatically reduce energy consumption without the need for complex technology. Green roofs and walls provide insulation, absorb rainfall, and support urban biodiversity. Materials such as cross-laminated timber are gaining popularity as lower-carbon alternatives to concrete and steel. Many cities now mandate that all new buildings meet minimum energy performance standards, and there is growing interest in retrofitting existing buildings to improve their efficiency.",
      keyPoints: ["Sustainable architecture considers full building lifecycle", "Passive design reduces energy use without technology", "Green roofs provide insulation and biodiversity benefits", "Timber is a lower-carbon alternative to concrete", "Retrofitting existing buildings is a growing priority"],
    },
  ],

  answerShort: [
    { id: "as-4-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name given to a doctor who specialises in the treatment of mental health conditions?", expectedAnswer: "Psychiatrist" },
    { id: "as-4-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the force that pulls objects towards the Earth's surface?", expectedAnswer: "Gravity" },
    { id: "as-4-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the study of living organisms?", expectedAnswer: "Biology" },
    { id: "as-4-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In which continent is the Sahara desert located?", expectedAnswer: "Africa" },
    { id: "as-4-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the chemical formula for water?", expectedAnswer: "H2O" },
    { id: "as-4-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a word that is opposite in meaning to another word?", expectedAnswer: "Antonym" },
    { id: "as-4-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the process by which water vapour turns into liquid water?", expectedAnswer: "Condensation" },
    { id: "as-4-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which gas makes up most of the Earth's atmosphere?", expectedAnswer: "Nitrogen" },
    { id: "as-4-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a group of stars forming a recognisable pattern?", expectedAnswer: "Constellation" },
    { id: "as-4-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the money paid to the government based on income earned?", expectedAnswer: "Income tax" },
  ],
};

export default test4;
