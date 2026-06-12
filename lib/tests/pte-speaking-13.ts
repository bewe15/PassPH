import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Primate Brain-to-Body Mass Ratio</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="155" width="50" height="65" fill="#06b6d4" rx="2"/>
  <rect x="140" y="120" width="50" height="100" fill="#06b6d4" rx="2"/>
  <rect x="215" y="85" width="50" height="135" fill="#06b6d4" rx="2"/>
  <rect x="290" y="45" width="50" height="175" fill="#06b6d4" rx="2"/>
  <text x="90" y="150" text-anchor="middle" font-size="10" fill="#0e7490">1.6</text>
  <text x="165" y="115" text-anchor="middle" font-size="10" fill="#0e7490">2.5</text>
  <text x="240" y="80" text-anchor="middle" font-size="10" fill="#0e7490">3.5</text>
  <text x="315" y="40" text-anchor="middle" font-size="10" fill="#0e7490">4.9</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">Lemur</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">Macaque</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">Chimpanzee</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">Human</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Smart City Sensor Deployments (thousands)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,210 114,200 178,182 242,148 306,95 370,48" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="200" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="182" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="148" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="95" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="48" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2018</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Income Distribution by Quintile (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 170,206 Z" fill="#0ea5e9"/>
  <path d="M140,130 L170,206 A80,80 0 0,1 63,163 Z" fill="#7c3aed"/>
  <path d="M140,130 L63,163 A80,80 0 0,1 63,97 Z" fill="#f59e0b"/>
  <path d="M140,130 L63,97 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Top 20%: 46%</text>
  <rect x="240" y="75" width="12" height="12" fill="#0ea5e9"/><text x="258" y="86" font-size="11" fill="#334155">2nd 20%: 22%</text>
  <rect x="240" y="100" width="12" height="12" fill="#7c3aed"/><text x="258" y="111" font-size="11" fill="#334155">3rd 20%: 15%</text>
  <rect x="240" y="125" width="12" height="12" fill="#f59e0b"/><text x="258" y="136" font-size="11" fill="#334155">4th 20%: 11%</text>
  <rect x="240" y="150" width="12" height="12" fill="#10b981"/><text x="258" y="161" font-size="11" fill="#334155">Bottom 20%: 6%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Ocean Exploration: Known vs Unknown (%)</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="110" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Ocean Zone</text>
  <text x="230" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Mapped (%)</text>
  <text x="335" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Explored (%)</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="170" y1="35" x2="170" y2="245" stroke="#e2e8f0"/>
  <line x1="290" y1="35" x2="290" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="90" text-anchor="middle" font-size="10" fill="#334155">Sunlight Zone</text><text x="230" y="90" text-anchor="middle" font-size="10" fill="#334155">95%</text><text x="335" y="90" text-anchor="middle" font-size="10" fill="#334155">70%</text>
  <line x1="30" y1="100" x2="370" y2="100" stroke="#f1f5f9"/>
  <text x="110" y="122" text-anchor="middle" font-size="10" fill="#334155">Twilight Zone</text><text x="230" y="122" text-anchor="middle" font-size="10" fill="#334155">40%</text><text x="335" y="122" text-anchor="middle" font-size="10" fill="#334155">20%</text>
  <line x1="30" y1="132" x2="370" y2="132" stroke="#f1f5f9"/>
  <text x="110" y="154" text-anchor="middle" font-size="10" fill="#334155">Midnight Zone</text><text x="230" y="154" text-anchor="middle" font-size="10" fill="#334155">15%</text><text x="335" y="154" text-anchor="middle" font-size="10" fill="#334155">5%</text>
  <line x1="30" y1="164" x2="370" y2="164" stroke="#f1f5f9"/>
  <text x="110" y="186" text-anchor="middle" font-size="10" fill="#334155">Abyss Zone</text><text x="230" y="186" text-anchor="middle" font-size="10" fill="#334155">8%</text><text x="335" y="186" text-anchor="middle" font-size="10" fill="#334155">2%</text>
  <line x1="30" y1="196" x2="370" y2="196" stroke="#f1f5f9"/>
  <text x="110" y="218" text-anchor="middle" font-size="10" fill="#334155">Hadal Zone</text><text x="230" y="218" text-anchor="middle" font-size="10" fill="#334155">3%</text><text x="335" y="218" text-anchor="middle" font-size="10" fill="#334155">1%</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Media Literacy Skills by Age Group (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="75" width="50" height="145" fill="#06b6d4" rx="2"/>
  <rect x="140" y="95" width="50" height="125" fill="#06b6d4" rx="2"/>
  <rect x="215" y="115" width="50" height="105" fill="#06b6d4" rx="2"/>
  <rect x="290" y="150" width="50" height="70" fill="#06b6d4" rx="2"/>
  <text x="90" y="70" text-anchor="middle" font-size="10" fill="#0e7490">72%</text>
  <text x="165" y="90" text-anchor="middle" font-size="10" fill="#0e7490">62%</text>
  <text x="240" y="110" text-anchor="middle" font-size="10" fill="#0e7490">52%</text>
  <text x="315" y="145" text-anchor="middle" font-size="10" fill="#0e7490">35%</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">18–24</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">25–34</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">35–54</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">55+</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr13" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#06b6d4"/></marker></defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Evolutionary Selection Process</text>
  <rect x="130" y="33" width="140" height="36" rx="6" fill="#06b6d4"/>
  <text x="200" y="55" text-anchor="middle" font-size="11" fill="white">Genetic Variation</text>
  <line x1="200" y1="69" x2="200" y2="90" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr13)"/>
  <rect x="130" y="91" width="140" height="36" rx="6" fill="#0e7490"/>
  <text x="200" y="113" text-anchor="middle" font-size="11" fill="white">Environmental Pressure</text>
  <line x1="200" y1="127" x2="200" y2="148" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr13)"/>
  <rect x="130" y="149" width="140" height="36" rx="6" fill="#06b6d4"/>
  <text x="200" y="171" text-anchor="middle" font-size="11" fill="white">Differential Survival</text>
  <line x1="200" y1="185" x2="200" y2="206" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr13)"/>
  <rect x="130" y="207" width="140" height="36" rx="6" fill="#0e7490"/>
  <text x="200" y="229" text-anchor="middle" font-size="11" fill="white">Trait Propagation</text>
</svg>`;

const test13: PTESpeakingTest = {
  id: "pte-speaking-13",
  title: "PTE Speaking — Test 13",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-13-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Evolutionary biology seeks to explain the diversity of life through the mechanisms of natural selection, genetic mutation, and reproductive success. Charles Darwin's foundational insight — that heritable traits conferring survival advantages become more common over generations — has been refined by modern genetics into a comprehensive theory of evolution. Current research explores how cooperation, sexual selection, and epigenetic inheritance contribute to evolutionary change.",
    },
    {
      id: "ra-13-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Smart cities use digital infrastructure and data analytics to improve urban services and quality of life. Sensors embedded in roads, buildings, and public spaces collect real-time data on traffic flow, air quality, and energy consumption. This information is processed by centralised platforms that allow city administrators to allocate resources dynamically and respond rapidly to emerging problems such as congestion or infrastructure failure.",
    },
    {
      id: "ra-13-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Poverty and inequality are among the most persistent challenges facing contemporary societies. While absolute poverty has declined significantly in many regions due to economic growth and targeted aid programmes, relative inequality within nations has widened in recent decades. Economists debate whether redistribution through taxation, investment in education, or structural reforms to labour markets are the most effective tools for reducing inequality sustainably.",
    },
    {
      id: "ra-13-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Ocean exploration remains one of the final frontiers of scientific discovery. Less than twenty percent of the seafloor has been mapped in high resolution, and vast regions of the deep ocean remain entirely unvisited. Remotely operated vehicles and autonomous underwater robots are increasingly enabling scientists to study hydrothermal vents, deep-sea biodiversity, and submarine geological formations previously inaccessible to human observation.",
    },
    {
      id: "ra-13-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Media literacy refers to the ability to access, analyse, evaluate, and create media content in various forms. As digital platforms proliferate and misinformation spreads rapidly online, media literacy has become an essential competency for informed citizenship. Educational programmes designed to teach critical evaluation of news sources, understanding of algorithmic curation, and awareness of persuasive techniques are increasingly integrated into school curricula worldwide.",
    },
    {
      id: "ra-13-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Speciation is the process by which one ancestral population diverges into two or more reproductively isolated species. Geographic separation is the most common driver, with populations adapting independently to different environmental conditions over long periods. However, sympatric speciation — where new species arise within the same geographic area — has also been documented, particularly among plants and insects exploiting different ecological niches.",
    },
  ],

  repeatSentence: [
    { id: "rs-13-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The evolutionary origins of human language remain a subject of scientific debate." },
    { id: "rs-13-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Smart city platforms integrate transport, energy, and public safety data in real time." },
    { id: "rs-13-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The gap between the wealthiest and poorest households has widened over the past generation." },
    { id: "rs-13-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Deep-sea ecosystems depend on chemosynthesis rather than sunlight for energy." },
    { id: "rs-13-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students should evaluate the credibility of online sources before citing them in essays." },
    { id: "rs-13-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Natural selection acts on phenotypic variation within a population over successive generations." },
    { id: "rs-13-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The university library offers free access to major academic databases and journals." },
    { id: "rs-13-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Urbanisation is accelerating in sub-Saharan Africa and parts of Southeast Asia." },
    { id: "rs-13-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Misinformation spreads faster on social media than verified factual corrections." },
    { id: "rs-13-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The researcher presented compelling evidence for convergent evolution in distant species." },
  ],

  describeImage: [
    {
      id: "di-13-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Primate Brain-to-Body Mass Ratio",
      svgContent: SVG_1,
      keyPoints: ["Humans have the highest brain-to-body ratio at 4.9", "Chimpanzees are second at 3.5", "Lemurs have the lowest ratio among those shown (1.6)", "Brain relative to body size increases with evolutionary complexity"],
    },
    {
      id: "di-13-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Smart City Sensor Deployments (thousands)",
      svgContent: SVG_2,
      keyPoints: ["Sensor numbers grew steadily from 2018 to 2023", "Growth rate accelerated significantly from 2021 onward", "The steepest increase was between 2022 and 2023", "Rapid urbanisation and IoT investment drive the trend"],
    },
    {
      id: "di-13-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Income Distribution by Quintile (%)",
      svgContent: SVG_3,
      keyPoints: ["The top 20% hold 46% of global income", "The bottom 20% receive only 6%", "The top two quintiles together control 68% of income", "Income distribution is highly unequal globally"],
    },
    {
      id: "di-13-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Ocean Exploration: Known vs Unknown (%)",
      svgContent: SVG_4,
      keyPoints: ["The sunlight zone is the most mapped and explored", "Mapping and exploration decrease sharply with depth", "The hadal zone is only 3% mapped and 1% explored", "The deep ocean remains largely unknown to science"],
    },
    {
      id: "di-13-5", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Media Literacy Skills by Age Group (%)",
      svgContent: SVG_5,
      keyPoints: ["Younger adults (18–24) have the highest media literacy at 72%", "Skills decline progressively with age", "The 55+ group scores only 35%", "Significant generational gap in media literacy exists"],
    },
    {
      id: "di-13-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Evolutionary Selection Process",
      svgContent: SVG_6,
      keyPoints: ["Process begins with genetic variation within a population", "Environmental pressure selects against less-fit variants", "Organisms with advantageous traits survive and reproduce more", "Favourable traits are propagated to future generations"],
    },
  ],

  retellLecture: [
    {
      id: "rl-13-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Evolution of Cooperative Behaviour",
      lectureText: "One of the most fascinating puzzles in evolutionary biology is the emergence of cooperation. Natural selection appears to favour selfish behaviour — individuals who exploit others while contributing nothing should thrive. Yet cooperation is widespread in nature, from microbial biofilms to complex human societies. Several mechanisms explain this paradox. Kin selection shows that cooperating with genetic relatives increases the propagation of shared genes. Reciprocal altruism explains cooperation between non-relatives when interactions are repeated and participants can remember past behaviour. In humans, a third mechanism operates: cultural group selection, where groups with strong cooperative norms out-compete less cohesive rivals. Language and reputation systems allow cooperation to scale far beyond the small bands of our ancestors, enabling the complex division of labour that underpins modern civilisation.",
      keyPoints: ["Cooperation is widespread despite natural selection favouring selfishness", "Kin selection promotes helping genetic relatives", "Reciprocal altruism works when interactions are repeated", "Cultural group selection advantages cooperative societies", "Language and reputation systems scale cooperation to large groups"],
    },
    {
      id: "rl-13-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Data Privacy in Smart Cities",
      lectureText: "Smart cities generate enormous quantities of data about the people who live in them. Traffic sensors track movement patterns, smart meters record energy use minute by minute, and surveillance cameras monitor public spaces continuously. While this data enables more efficient urban management, it also raises profound privacy concerns. Citizens may be unaware of the extent of data collection or how their information is used. In some cities, data collected for one purpose — say, managing traffic flow — has been repurposed for policing or commercial profiling without public consent. Legal frameworks such as the European Union's General Data Protection Regulation establish rights over personal data, but enforcement in the smart city context remains challenging. Scholars argue that residents should have meaningful input into data governance decisions rather than simply consenting to opaque terms and conditions.",
      keyPoints: ["Smart cities collect vast data on residents' movements and habits", "Data enables efficient urban management", "Privacy risks include repurposing data without consent", "GDPR and similar laws provide some protection", "Citizens should have genuine input into data governance"],
    },
    {
      id: "rl-13-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Poverty Traps and Economic Mobility",
      lectureText: "A poverty trap is a self-reinforcing mechanism that keeps individuals or communities locked in poverty despite efforts to escape. Poor families may be unable to invest in children's education because immediate consumption needs are pressing. Without education, children face limited labour market opportunities and replicate their parents' poverty. Economists have identified several structural features that create poverty traps: lack of credit access, poor health infrastructure, geographic isolation, and weak rule of law. Randomised controlled trials conducted by the Abdul Latif Jameel Poverty Action Lab have tested cash transfer programmes, microcredit schemes, and complementary asset-bundling interventions in numerous countries. Evidence suggests that multidimensional approaches addressing health, education, and financial inclusion simultaneously are the most effective at facilitating durable exits from poverty.",
      keyPoints: ["Poverty traps are self-reinforcing cycles of deprivation", "Education investment is constrained by immediate survival needs", "Structural barriers include credit access and geography", "Randomised trials test poverty intervention effectiveness", "Multidimensional approaches produce the most durable outcomes"],
    },
  ],

  answerShort: [
    { id: "as-13-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the process by which new species arise from existing ones?", expectedAnswer: "Speciation" },
    { id: "as-13-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call cities that use technology and data to improve urban services?", expectedAnswer: "Smart cities" },
    { id: "as-13-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for the statistical measure of income inequality within a population?", expectedAnswer: "Gini coefficient" },
    { id: "as-13-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of organism lives near hydrothermal vents on the ocean floor?", expectedAnswer: "Chemosynthetic organisms" },
    { id: "as-13-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes deliberately false information spread to deceive people?", expectedAnswer: "Misinformation" },
    { id: "as-13-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What mechanism explains cooperation between organisms sharing many genes?", expectedAnswer: "Kin selection" },
    { id: "as-13-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the physical characteristics of an organism as opposed to its genetic code?", expectedAnswer: "Phenotype" },
    { id: "as-13-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of underwater vehicle can explore the deep ocean without a crew on board?", expectedAnswer: "Autonomous underwater vehicle" },
    { id: "as-13-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for a small loan provided to entrepreneurs in low-income communities?", expectedAnswer: "Microcredit" },
    { id: "as-13-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What EU regulation governs the collection and use of personal data?", expectedAnswer: "GDPR" },
  ],
};

export default test13;
