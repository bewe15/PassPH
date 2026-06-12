import type { PTESpeakingTest } from "./pte-speaking-types";

const BAR_CHART_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Annual Sales by Quarter (£ thousands)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="70" y="100" width="50" height="120" fill="#06b6d4" rx="2"/>
  <rect x="150" y="70" width="50" height="150" fill="#06b6d4" rx="2"/>
  <rect x="230" y="50" width="50" height="170" fill="#06b6d4" rx="2"/>
  <rect x="310" y="80" width="50" height="140" fill="#06b6d4" rx="2"/>
  <text x="95" y="240" text-anchor="middle" font-size="11" fill="#64748b">Q1</text>
  <text x="175" y="240" text-anchor="middle" font-size="11" fill="#64748b">Q2</text>
  <text x="255" y="240" text-anchor="middle" font-size="11" fill="#64748b">Q3</text>
  <text x="335" y="240" text-anchor="middle" font-size="11" fill="#64748b">Q4</text>
  <text x="95" y="95" text-anchor="middle" font-size="10" fill="#0e7490">120</text>
  <text x="175" y="65" text-anchor="middle" font-size="10" fill="#0e7490">150</text>
  <text x="255" y="45" text-anchor="middle" font-size="10" fill="#0e7490">170</text>
  <text x="335" y="75" text-anchor="middle" font-size="10" fill="#0e7490">140</text>
</svg>`;

const LINE_GRAPH_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Internet Users (millions) 2000–2020</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,210 114,195 178,175 242,130 306,75 370,40" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="195" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="175" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="130" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="75" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="40" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2000</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">2004</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">2008</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">2012</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2016</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
</svg>`;

const PIE_CHART_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Energy Sources: National Grid Mix</text>
  <path d="M130,130 L130,50 A80,80 0 0,1 210,130 Z" fill="#06b6d4"/>
  <path d="M130,130 L210,130 A80,80 0 0,1 130,210 Z" fill="#0ea5e9"/>
  <path d="M130,130 L130,210 A80,80 0 0,1 60,170 Z" fill="#7c3aed"/>
  <path d="M130,130 L60,170 A80,80 0 0,1 60,90 Z" fill="#f59e0b"/>
  <path d="M130,130 L60,90 A80,80 0 0,1 130,50 Z" fill="#10b981"/>
  <rect x="230" y="50" width="12" height="12" fill="#06b6d4"/><text x="248" y="61" font-size="11" fill="#334155">Wind 25%</text>
  <rect x="230" y="75" width="12" height="12" fill="#0ea5e9"/><text x="248" y="86" font-size="11" fill="#334155">Solar 25%</text>
  <rect x="230" y="100" width="12" height="12" fill="#7c3aed"/><text x="248" y="111" font-size="11" fill="#334155">Gas 20%</text>
  <rect x="230" y="125" width="12" height="12" fill="#f59e0b"/><text x="248" y="136" font-size="11" fill="#334155">Nuclear 15%</text>
  <rect x="230" y="150" width="12" height="12" fill="#10b981"/><text x="248" y="161" font-size="11" fill="#334155">Other 15%</text>
</svg>`;

const PROCESS_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">The Water Cycle</text>
  <ellipse cx="200" cy="210" rx="160" ry="20" fill="#bfdbfe" opacity="0.6"/>
  <text x="200" y="215" text-anchor="middle" font-size="10" fill="#1e40af">Ocean / Water Body</text>
  <path d="M80,200 Q60,120 80,60" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arr)"/>
  <text x="30" y="130" font-size="10" fill="#1e40af" transform="rotate(-75,30,130)">Evaporation</text>
  <ellipse cx="130" cy="55" rx="50" ry="25" fill="#94a3b8" opacity="0.7"/>
  <ellipse cx="200" cy="45" rx="60" ry="28" fill="#94a3b8" opacity="0.8"/>
  <text x="190" y="50" text-anchor="middle" font-size="10" fill="#334155">Clouds</text>
  <path d="M240,70 Q300,120 320,190" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4"/>
  <text x="330" y="140" font-size="10" fill="#1e40af">Precipitation</text>
  <path d="M310,195 Q250,200 210,205" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="255" y="230" font-size="10" fill="#1e40af">Surface runoff</text>
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa"/></marker></defs>
</svg>`;

const TABLE_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Student Performance by Subject</text>
  <rect x="30" y="35" width="340" height="200" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="80" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Subject</text>
  <text x="190" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2022</text>
  <text x="270" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2023</text>
  <text x="350" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Change</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="130" y1="35" x2="130" y2="235" stroke="#e2e8f0"/>
  <line x1="230" y1="35" x2="230" y2="235" stroke="#e2e8f0"/>
  <line x1="310" y1="35" x2="310" y2="235" stroke="#e2e8f0"/>
  <text x="80" y="88" text-anchor="middle" font-size="11" fill="#334155">Maths</text><text x="190" y="88" text-anchor="middle" font-size="11" fill="#334155">72%</text><text x="270" y="88" text-anchor="middle" font-size="11" fill="#334155">78%</text><text x="350" y="88" text-anchor="middle" font-size="11" fill="#10b981">+6%</text>
  <line x1="30" y1="98" x2="370" y2="98" stroke="#f1f5f9"/>
  <text x="80" y="118" text-anchor="middle" font-size="11" fill="#334155">Science</text><text x="190" y="118" text-anchor="middle" font-size="11" fill="#334155">68%</text><text x="270" y="118" text-anchor="middle" font-size="11" fill="#334155">71%</text><text x="350" y="118" text-anchor="middle" font-size="11" fill="#10b981">+3%</text>
  <line x1="30" y1="128" x2="370" y2="128" stroke="#f1f5f9"/>
  <text x="80" y="148" text-anchor="middle" font-size="11" fill="#334155">English</text><text x="190" y="148" text-anchor="middle" font-size="11" fill="#334155">81%</text><text x="270" y="148" text-anchor="middle" font-size="11" fill="#334155">79%</text><text x="350" y="148" text-anchor="middle" font-size="11" fill="#ef4444">-2%</text>
  <line x1="30" y1="158" x2="370" y2="158" stroke="#f1f5f9"/>
  <text x="80" y="178" text-anchor="middle" font-size="11" fill="#334155">History</text><text x="190" y="178" text-anchor="middle" font-size="11" fill="#334155">65%</text><text x="270" y="178" text-anchor="middle" font-size="11" fill="#334155">70%</text><text x="350" y="178" text-anchor="middle" font-size="11" fill="#10b981">+5%</text>
  <line x1="30" y1="188" x2="370" y2="188" stroke="#f1f5f9"/>
  <text x="80" y="208" text-anchor="middle" font-size="11" fill="#334155">Geography</text><text x="190" y="208" text-anchor="middle" font-size="11" fill="#334155">74%</text><text x="270" y="208" text-anchor="middle" font-size="11" fill="#334155">77%</text><text x="350" y="208" text-anchor="middle" font-size="11" fill="#10b981">+3%</text>
</svg>`;

const BAR_CHART_2_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Transport Methods Used for Commuting (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="80" width="45" height="140" fill="#06b6d4" rx="2"/><text x="87" y="75" text-anchor="middle" font-size="10" fill="#0e7490">35%</text>
  <rect x="130" y="100" width="45" height="120" fill="#0ea5e9" rx="2"/><text x="152" y="95" text-anchor="middle" font-size="10" fill="#0e7490">30%</text>
  <rect x="195" y="140" width="45" height="80" fill="#7c3aed" rx="2"/><text x="217" y="135" text-anchor="middle" font-size="10" fill="#0e7490">20%</text>
  <rect x="260" y="170" width="45" height="50" fill="#f59e0b" rx="2"/><text x="282" y="165" text-anchor="middle" font-size="10" fill="#0e7490">12%</text>
  <rect x="325" y="195" width="30" height="25" fill="#10b981" rx="2"/><text x="340" y="190" text-anchor="middle" font-size="10" fill="#0e7490">3%</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">Car</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">Public</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">Walking</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">Cycling</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">Other</text>
</svg>`;

const test1: PTESpeakingTest = {
  id: "pte-speaking-1",
  title: "PTE Speaking — Test 1",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-1-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The development of artificial intelligence has raised significant questions about the future of work. Many economists argue that while some jobs will be displaced by automation, new categories of employment will emerge to replace them. However, the transition period may prove challenging for workers who lack the skills required by a rapidly changing labour market.",
    },
    {
      id: "ra-1-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Renewable energy sources such as solar and wind power have experienced dramatic cost reductions over the past decade. This has made them increasingly competitive with fossil fuels in many parts of the world. Governments and businesses are now investing heavily in clean energy infrastructure as part of broader strategies to reduce carbon emissions and address climate change.",
    },
    {
      id: "ra-1-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The human brain contains approximately 86 billion neurons, each connected to thousands of others through synaptic pathways. This extraordinary network enables the processing of information, formation of memories, and regulation of every bodily function. Neuroscientists are still working to understand how consciousness and complex thought arise from these biological structures.",
    },
    {
      id: "ra-1-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Urban agriculture is gaining momentum in cities around the world as populations grow and food security becomes an increasing concern. Rooftop gardens, vertical farms, and community allotments are being established in urban centres to produce fresh food locally. These initiatives not only reduce food miles but also contribute to community well-being and urban biodiversity.",
    },
    {
      id: "ra-1-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "International trade agreements play a vital role in shaping the global economy. By reducing tariffs and harmonising regulations between countries, such agreements facilitate the movement of goods, services, and investment across borders. Critics, however, argue that these deals can disadvantage smaller economies and undermine domestic industries that cannot compete with cheaper imports.",
    },
    {
      id: "ra-1-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Ocean acidification occurs when carbon dioxide dissolves in seawater, forming carbonic acid and lowering the ocean's pH level. This process poses a serious threat to marine ecosystems, particularly to organisms such as corals and shellfish that rely on calcium carbonate to build their shells and skeletons. Scientists warn that continued acidification could devastate entire oceanic food chains.",
    },
  ],

  repeatSentence: [
    { id: "rs-1-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The lecture will begin at nine o'clock in the main auditorium." },
    { id: "rs-1-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students must submit their assignments before the end of the semester." },
    { id: "rs-1-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The library will be closed for maintenance during the holiday period." },
    { id: "rs-1-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Research suggests that regular exercise significantly improves mental health outcomes." },
    { id: "rs-1-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor has published over forty papers in peer-reviewed academic journals." },
    { id: "rs-1-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Climate change poses unprecedented challenges to global food and water security." },
    { id: "rs-1-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The government announced a major investment in public transport infrastructure." },
    { id: "rs-1-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Biodiversity loss is occurring at a rate that far exceeds natural background levels." },
    { id: "rs-1-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The experiment was conducted under carefully controlled laboratory conditions." },
    { id: "rs-1-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Economic inequality has widened considerably in most developed nations over recent decades." },
  ],

  describeImage: [
    {
      id: "di-1-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Annual Sales by Quarter (£ thousands)",
      svgContent: BAR_CHART_SVG,
      keyPoints: ["Sales increased from Q1 to Q3", "Q3 was the highest at £170k", "Q4 saw a slight decline from Q3", "Overall upward trend across the year"],
    },
    {
      id: "di-1-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Internet Users (millions) 2000–2020",
      svgContent: LINE_GRAPH_SVG,
      keyPoints: ["Steady growth from 2000 to 2020", "Growth accelerated from 2008 onwards", "Rapid increase between 2012 and 2020", "Overall upward trend throughout the period"],
    },
    {
      id: "di-1-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Energy Sources: National Grid Mix",
      svgContent: PIE_CHART_SVG,
      keyPoints: ["Wind and solar each account for 25%", "Renewables make up the majority (50%)", "Gas accounts for 20%", "Nuclear provides 15% of energy"],
    },
    {
      id: "di-1-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "The Water Cycle",
      svgContent: PROCESS_SVG,
      keyPoints: ["Water evaporates from oceans and water bodies", "Clouds form as water vapour rises and cools", "Precipitation falls as rain or snow", "Water returns to oceans via surface runoff"],
    },
    {
      id: "di-1-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Student Performance by Subject",
      svgContent: TABLE_SVG,
      keyPoints: ["Maths showed the largest improvement (+6%)", "English was the only subject to decline (-2%)", "All other subjects improved between 2022 and 2023", "English had the highest score in both years"],
    },
    {
      id: "di-1-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Transport Methods Used for Commuting (%)",
      svgContent: BAR_CHART_2_SVG,
      keyPoints: ["Car is the most common commute method (35%)", "Public transport is second at 30%", "Active travel (walking + cycling) totals 32%", "Only 3% use other methods"],
    },
  ],

  retellLecture: [
    {
      id: "rl-1-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Migration and Urbanisation",
      lectureText: "Over the past century, the global population has shifted dramatically from rural to urban areas. In 1900, only about 10 percent of people lived in cities. Today, more than half the world's population is urban, and by 2050, that figure is expected to reach 70 percent. This process of urbanisation is driven by economic opportunity — cities tend to offer higher wages, better services, and greater social mobility. However, rapid urban growth also creates challenges including housing shortages, traffic congestion, and environmental degradation. Cities in the developing world are growing particularly quickly, often outpacing infrastructure development and leading to the expansion of informal settlements.",
      keyPoints: ["Shift from rural to urban populations over the past century", "Over 50% of world lives in cities today", "Expected to reach 70% by 2050", "Driven by economic opportunity", "Creates challenges: housing, traffic, environment"],
    },
    {
      id: "rl-1-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Microbiome and Human Health",
      lectureText: "The human body hosts trillions of microorganisms — bacteria, viruses, and fungi — collectively known as the microbiome. Far from being harmful, most of these organisms are essential to our health. The gut microbiome, for example, plays a critical role in digestion, immune function, and even mental health. Research has shown that people with diverse gut bacteria tend to have stronger immune systems and lower rates of conditions like obesity, diabetes, and depression. Modern lifestyles, including the overuse of antibiotics and highly processed diets, have been shown to reduce microbial diversity. Scientists are now exploring how probiotic and prebiotic interventions might restore microbial balance and treat a range of diseases.",
      keyPoints: ["Body hosts trillions of microorganisms (the microbiome)", "Gut microbiome important for digestion, immunity, and mental health", "Diverse gut bacteria linked to better health", "Modern lifestyles reduce microbial diversity", "Probiotics and prebiotics being explored as treatments"],
    },
    {
      id: "rl-1-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Psychology of Decision Making",
      lectureText: "Classical economics assumed that humans make rational decisions based on complete information and consistent preferences. However, research in behavioural economics has revealed that our decision-making is frequently influenced by cognitive biases. One well-known bias is the anchoring effect, where initial information disproportionately influences subsequent judgements. Another is the availability heuristic, where we overestimate the likelihood of events that come easily to mind. Loss aversion — the finding that we feel losses more strongly than equivalent gains — has been shown to affect financial decisions, negotiations, and everyday choices. Understanding these biases has led to the development of 'nudge theory', which proposes that subtle changes to the environment can encourage better decision-making without restricting freedom of choice.",
      keyPoints: ["Humans don't always make rational decisions", "Anchoring effect: initial info influences judgements", "Availability heuristic: we overestimate vivid events", "Loss aversion: losses feel worse than equivalent gains", "Nudge theory uses environment design to improve decisions"],
    },
  ],

  answerShort: [
    { id: "as-1-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the system of government where citizens elect their representatives?", expectedAnswer: "Democracy" },
    { id: "as-1-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the chemical symbol for gold?", expectedAnswer: "Au" },
    { id: "as-1-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which planet in our solar system has the most moons?", expectedAnswer: "Saturn" },
    { id: "as-1-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a word that means the same as another word?", expectedAnswer: "Synonym" },
    { id: "as-1-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In which organ does digestion of food primarily take place?", expectedAnswer: "Small intestine" },
    { id: "as-1-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call an agreement between two or more countries?", expectedAnswer: "Treaty" },
    { id: "as-1-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the process by which plants make food using sunlight?", expectedAnswer: "Photosynthesis" },
    { id: "as-1-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the largest ocean on Earth?", expectedAnswer: "Pacific Ocean" },
    { id: "as-1-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a person who studies the stars and planets professionally?", expectedAnswer: "Astronomer" },
    { id: "as-1-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the rate at which prices in an economy are rising?", expectedAnswer: "Inflation" },
  ],
};

export default test1;
