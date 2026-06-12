import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Nuclear Fusion R&amp;D Investment 2018–2024 (USD bn)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="150" width="45" height="70" fill="#06b6d4" rx="2"/>
  <rect x="130" y="135" width="45" height="85" fill="#0ea5e9" rx="2"/>
  <rect x="195" y="110" width="45" height="110" fill="#7c3aed" rx="2"/>
  <rect x="260" y="80" width="45" height="140" fill="#f59e0b" rx="2"/>
  <rect x="325" y="50" width="45" height="170" fill="#06b6d4" rx="2"/>
  <text x="87" y="145" text-anchor="middle" font-size="10" fill="#0e7490">1.8</text>
  <text x="152" y="130" text-anchor="middle" font-size="10" fill="#0e7490">2.3</text>
  <text x="217" y="105" text-anchor="middle" font-size="10" fill="#0e7490">3.1</text>
  <text x="282" y="75" text-anchor="middle" font-size="10" fill="#0e7490">4.6</text>
  <text x="347" y="45" text-anchor="middle" font-size="10" fill="#0e7490">6.2</text>
  <text x="87" y="240" text-anchor="middle" font-size="10" fill="#64748b">2018</text>
  <text x="152" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="217" y="240" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="282" y="240" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="347" y="240" text-anchor="middle" font-size="10" fill="#64748b">2024</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Social Enterprise Revenue by Sector (USD bn, 2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="70" width="42" height="150" fill="#06b6d4" rx="2"/>
  <rect x="120" y="95" width="42" height="125" fill="#0ea5e9" rx="2"/>
  <rect x="175" y="120" width="42" height="100" fill="#7c3aed" rx="2"/>
  <rect x="230" y="148" width="42" height="72" fill="#f59e0b" rx="2"/>
  <rect x="285" y="170" width="42" height="50" fill="#10b981" rx="2"/>
  <text x="86" y="65" text-anchor="middle" font-size="10" fill="#0e7490">380</text>
  <text x="141" y="90" text-anchor="middle" font-size="10" fill="#0e7490">310</text>
  <text x="196" y="115" text-anchor="middle" font-size="10" fill="#0e7490">245</text>
  <text x="251" y="143" text-anchor="middle" font-size="10" fill="#0e7490">175</text>
  <text x="306" y="165" text-anchor="middle" font-size="10" fill="#0e7490">120</text>
  <text x="86" y="240" text-anchor="middle" font-size="9" fill="#64748b">Health</text>
  <text x="141" y="240" text-anchor="middle" font-size="9" fill="#64748b">Education</text>
  <text x="196" y="240" text-anchor="middle" font-size="9" fill="#64748b">Energy</text>
  <text x="251" y="240" text-anchor="middle" font-size="9" fill="#64748b">Agri</text>
  <text x="306" y="240" text-anchor="middle" font-size="9" fill="#64748b">Finance</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Causes of Indigenous Language Endangerment (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 219,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L219,130 A80,80 0 0,1 168,208 Z" fill="#0ea5e9"/>
  <path d="M140,130 L168,208 A80,80 0 0,1 62,168 Z" fill="#7c3aed"/>
  <path d="M140,130 L62,168 A80,80 0 0,1 62,92 Z" fill="#f59e0b"/>
  <path d="M140,130 L62,92 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Urbanisation 32%</text>
  <rect x="240" y="75" width="12" height="12" fill="#0ea5e9"/><text x="258" y="86" font-size="11" fill="#334155">Education policy 25%</text>
  <rect x="240" y="100" width="12" height="12" fill="#7c3aed"/><text x="258" y="111" font-size="11" fill="#334155">Globalisation 20%</text>
  <rect x="240" y="125" width="12" height="12" fill="#f59e0b"/><text x="258" y="136" font-size="11" fill="#334155">Colonialism 15%</text>
  <rect x="240" y="150" width="12" height="12" fill="#10b981"/><text x="258" y="161" font-size="11" fill="#334155">Other 8%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Biodegradable Plastic Alternatives: Key Properties</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="95" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Material</text>
  <text x="205" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Degradation (days)</text>
  <text x="330" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Source</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="150" y1="35" x2="150" y2="245" stroke="#e2e8f0"/>
  <line x1="270" y1="35" x2="270" y2="245" stroke="#e2e8f0"/>
  <text x="95" y="90" text-anchor="middle" font-size="11" fill="#334155">PLA</text><text x="205" y="90" text-anchor="middle" font-size="11" fill="#334155">90–180</text><text x="330" y="90" text-anchor="middle" font-size="11" fill="#334155">Corn starch</text>
  <line x1="30" y1="100" x2="370" y2="100" stroke="#f1f5f9"/>
  <text x="95" y="122" text-anchor="middle" font-size="11" fill="#334155">PHA</text><text x="205" y="122" text-anchor="middle" font-size="11" fill="#334155">30–90</text><text x="330" y="122" text-anchor="middle" font-size="11" fill="#334155">Bacteria</text>
  <line x1="30" y1="132" x2="370" y2="132" stroke="#f1f5f9"/>
  <text x="95" y="154" text-anchor="middle" font-size="11" fill="#334155">Seaweed film</text><text x="205" y="154" text-anchor="middle" font-size="11" fill="#334155">14–45</text><text x="330" y="154" text-anchor="middle" font-size="11" fill="#334155">Algae</text>
  <line x1="30" y1="164" x2="370" y2="164" stroke="#f1f5f9"/>
  <text x="95" y="186" text-anchor="middle" font-size="11" fill="#334155">Mycelium</text><text x="205" y="186" text-anchor="middle" font-size="11" fill="#334155">30–60</text><text x="330" y="186" text-anchor="middle" font-size="11" fill="#334155">Fungal roots</text>
  <line x1="30" y1="196" x2="370" y2="196" stroke="#f1f5f9"/>
  <text x="95" y="218" text-anchor="middle" font-size="11" fill="#334155">Cellulose film</text><text x="205" y="218" text-anchor="middle" font-size="11" fill="#334155">60–120</text><text x="330" y="218" text-anchor="middle" font-size="11" fill="#334155">Wood pulp</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Philosophical Positions on Free Will: Survey of Academics (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,120 114,100 178,85 242,110 306,140 370,160" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="120" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="100" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="85" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="110" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="140" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="160" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">Compatib.</text>
  <text x="114" y="240" text-anchor="middle" font-size="9" fill="#64748b">Hard Det.</text>
  <text x="178" y="240" text-anchor="middle" font-size="9" fill="#64748b">Libertarian</text>
  <text x="242" y="240" text-anchor="middle" font-size="9" fill="#64748b">Skeptic</text>
  <text x="306" y="240" text-anchor="middle" font-size="9" fill="#64748b">Unclear</text>
  <text x="370" y="240" text-anchor="middle" font-size="9" fill="#64748b">Other</text>
  <text x="58" y="118" font-size="9" fill="#0e7490">59%</text>
  <text x="122" y="98" font-size="9" fill="#0e7490">11%</text>
  <text x="185" y="83" font-size="9" fill="#0e7490">14%</text>
  <text x="250" y="108" font-size="9" fill="#0e7490">12%</text>
  <text x="314" y="138" font-size="9" fill="#0e7490">8%</text>
  <text x="374" y="158" font-size="9" fill="#0e7490">6%</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Nuclear Fusion Reaction Process</text>
  <defs><marker id="arr20" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <rect x="10" y="90" width="75" height="40" rx="6" fill="#06b6d4"/>
  <text x="47" y="107" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Fuel Inject.</text>
  <text x="47" y="121" text-anchor="middle" font-size="9" fill="white">D + T plasma</text>
  <line x1="85" y1="110" x2="103" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr20)"/>
  <rect x="105" y="90" width="75" height="40" rx="6" fill="#0ea5e9"/>
  <text x="142" y="107" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Confinement</text>
  <text x="142" y="121" text-anchor="middle" font-size="9" fill="white">Magnetic field</text>
  <line x1="180" y1="110" x2="198" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr20)"/>
  <rect x="200" y="90" width="75" height="40" rx="6" fill="#7c3aed"/>
  <text x="237" y="107" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Ignition</text>
  <text x="237" y="121" text-anchor="middle" font-size="9" fill="white">150M °C plasma</text>
  <line x1="275" y1="110" x2="293" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr20)"/>
  <rect x="295" y="90" width="95" height="40" rx="6" fill="#10b981"/>
  <text x="342" y="107" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Energy Output</text>
  <text x="342" y="121" text-anchor="middle" font-size="9" fill="white">He + neutron</text>
  <text x="200" y="175" text-anchor="middle" font-size="10" fill="#64748b">Deuterium and tritium fuel is heated to plasma state</text>
  <text x="200" y="195" text-anchor="middle" font-size="10" fill="#64748b">Magnetic fields (tokamak) confine the superheated plasma</text>
  <text x="200" y="215" text-anchor="middle" font-size="10" fill="#64748b">Fusion releases helium + high-energy neutrons converted to electricity</text>
</svg>`;

const test20: PTESpeakingTest = {
  id: "pte-speaking-20",
  title: "PTE Speaking — Test 20",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-20-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Nuclear fusion is the process that powers the sun and stars, releasing enormous amounts of energy when light atomic nuclei, such as isotopes of hydrogen, are forced together under extreme heat and pressure to form heavier nuclei. Unlike nuclear fission, which splits atoms and generates long-lived radioactive waste, fusion produces helium and short-lived neutron activation products, making it a potentially far cleaner energy source. Scientists at the National Ignition Facility achieved a landmark ignition milestone in 2022, producing more energy from a fusion reaction than the laser energy delivered to the target.",
    },
    {
      id: "ra-20-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Social entrepreneurship blends the mission-driven focus of nonprofit organisations with the market-based strategies of commercial enterprises to address pressing social, environmental, or community challenges. Unlike traditional charity models that rely on donations and grants, social enterprises generate revenue through the sale of goods or services, creating financial sustainability while pursuing a social mission. Prominent examples include microfinance institutions that provide small loans to low-income entrepreneurs, fair-trade companies that ensure equitable prices for producers, and social cooperatives that employ marginalised groups.",
    },
    {
      id: "ra-20-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "An estimated 40 percent of the world's approximately 7,000 languages are currently classified as endangered, meaning they are at risk of disappearing within the coming generations as speakers die and children are not acquiring them as native languages. Indigenous languages are the most severely affected, with the vast majority of the world's linguistic diversity concentrated in regions that have historically experienced colonisation, forced assimilation policies, and economic marginalisation. The loss of each language represents the irreversible disappearance of a unique system of knowledge, narrative tradition, and cognitive categorisation of the world.",
    },
    {
      id: "ra-20-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The global plastic pollution crisis has stimulated significant research into biodegradable alternatives that can replicate the functionality of conventional petrochemical plastics while decomposing in natural environments. Polylactic acid, derived from fermented plant sugars such as corn starch, and polyhydroxyalkanoates, produced by microbial fermentation, are among the most commercially advanced bioplastics. Newer approaches draw on algae, fungal mycelium, and cellulose to create packaging films and structural materials that break down within weeks rather than centuries.",
    },
    {
      id: "ra-20-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The philosophy of free will concerns whether human beings have genuine agency over their actions or whether all events, including mental states and decisions, are determined by prior causes governed by the laws of physics. Hard determinists argue that free will is an illusion because every event is causally necessitated by prior states. Compatibilists, who represent the majority position among academic philosophers, contend that free will is compatible with determinism, provided that one acts according to one's own desires without external coercion. The debate has important implications for moral responsibility, punishment, and the foundations of criminal law.",
    },
    {
      id: "ra-20-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Deuterium, one of the fuel components required for nuclear fusion reactions, is found in ordinary seawater at a concentration of approximately one part in 6,400, making it effectively inexhaustible as a fuel supply. Tritium, the other required isotope, does not occur naturally in significant quantities but can be bred from lithium, an element found abundantly in the Earth's crust and in seawater. If fusion power plants can be made commercially viable, they would offer a virtually unlimited supply of clean energy with no carbon emissions and a far lower risk profile than conventional fission reactors.",
    },
  ],

  repeatSentence: [
    { id: "rs-20-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The tokamak design uses powerful magnetic fields to contain plasma at temperatures exceeding 100 million degrees." },
    { id: "rs-20-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Social enterprises must balance financial viability with the pursuit of measurable social outcomes." },
    { id: "rs-20-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Language documentation projects aim to create archives before the last fluent speakers pass away." },
    { id: "rs-20-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Algae-based packaging films can degrade in seawater within weeks under natural conditions." },
    { id: "rs-20-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Compatibilism holds that freedom and determinism are not mutually exclusive philosophical positions." },
    { id: "rs-20-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Private fusion companies have collectively raised over six billion dollars in venture capital since 2021." },
    { id: "rs-20-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Impact investing channels capital toward enterprises that generate both financial and social returns." },
    { id: "rs-20-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Immersion programmes are among the most effective tools for revitalising an endangered language community." },
    { id: "rs-20-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Polylactic acid requires industrial composting conditions to break down at an acceptable rate." },
    { id: "rs-20-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Neuroscientific studies of readiness potentials have reignited the debate over conscious volition and free will." },
  ],

  describeImage: [
    {
      id: "di-20-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Nuclear Fusion R&D Investment 2018–2024 (USD bn)",
      svgContent: SVG_1,
      keyPoints: [
        "Fusion investment grew more than threefold from USD 1.8 bn in 2018 to USD 6.2 bn in 2024",
        "The steepest year-on-year increase occurred between 2021 and 2022",
        "Private sector capital influx drove much of the growth after 2020",
        "The trend reflects growing confidence in near-term commercial fusion viability",
      ],
    },
    {
      id: "di-20-2", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Social Enterprise Revenue by Sector (USD bn, 2023)",
      svgContent: SVG_2,
      keyPoints: [
        "Health-focused social enterprises generated the highest revenue at USD 380 billion",
        "Education social enterprises ranked second with USD 310 billion",
        "The energy and agriculture sectors also show strong social enterprise activity",
        "Financial inclusion enterprises generated USD 120 billion in 2023",
      ],
    },
    {
      id: "di-20-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Causes of Indigenous Language Endangerment (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Urbanisation is the leading cause of indigenous language loss at 32%",
        "Monolingual education policies account for 25% of endangerment pressure",
        "Globalisation and cultural homogenisation contribute 20%",
        "Historical colonialism is cited as a direct cause in 15% of cases",
      ],
    },
    {
      id: "di-20-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Biodegradable Plastic Alternatives: Key Properties",
      svgContent: SVG_4,
      keyPoints: [
        "Seaweed-based film degrades the fastest at just 14 to 45 days",
        "PLA requires 90 to 180 days and is derived from corn starch",
        "PHA produced by bacteria degrades in 30 to 90 days",
        "All five materials originate from renewable biological sources",
      ],
    },
    {
      id: "di-20-5", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Philosophical Positions on Free Will: Survey of Academics (%)",
      svgContent: SVG_5,
      keyPoints: [
        "Compatibilism is by far the dominant position among academic philosophers at 59%",
        "Libertarian free will and hard determinism each attract around 11 to 14%",
        "Sceptical and unclear positions account for the remainder",
        "The data shows a clear consensus favouring compatibilism in contemporary philosophy",
      ],
    },
    {
      id: "di-20-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Nuclear Fusion Reaction Process",
      svgContent: SVG_6,
      keyPoints: [
        "Deuterium and tritium fuel is injected and heated to form plasma",
        "Powerful magnetic fields in a tokamak confine the plasma to prevent contact with reactor walls",
        "Plasma reaches temperatures exceeding 150 million degrees Celsius triggering fusion",
        "The reaction produces helium and high-energy neutrons whose kinetic energy is converted to electricity",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-20-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Race for Commercial Nuclear Fusion",
      lectureText: "For decades, nuclear fusion was described by its critics as the energy source that is always thirty years away. But there are credible signs that this characterisation may finally be outdated. In December 2022, the National Ignition Facility in California achieved scientific ignition for the first time — a fusion reaction that produced more energy than the laser energy delivered to the fuel target. While this crossed an important scientific threshold, it used roughly 300 times more total energy than the reaction generated, making it far from commercially viable. Meanwhile, a wave of private fusion companies, backed by more than six billion dollars in venture capital, are pursuing a variety of alternative confinement approaches, including compact tokamaks, stellarators, and inertial confinement. The most ambitious timelines promise grid-connected fusion power by the mid 2030s. Fuel supply is not considered a limiting factor: deuterium is extracted from seawater, and tritium can be bred from lithium inside the reactor itself. The principal engineering challenges are materials — reactor walls must survive intense neutron bombardment — and achieving a plasma burn that sustains itself long enough to produce net energy on a commercial timescale.",
      keyPoints: [
        "NIF achieved fusion ignition in December 2022, a landmark scientific milestone",
        "Total system energy balance remains far from commercially viable",
        "Private fusion companies have raised over USD 6 billion in venture capital",
        "Deuterium from seawater and lithium-bred tritium provide near-inexhaustible fuel",
        "Materials durability under neutron bombardment is the critical engineering challenge",
      ],
    },
    {
      id: "rl-20-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Saving Endangered Indigenous Languages",
      lectureText: "Linguists estimate that a language dies — meaning the last fluent speaker passes away — approximately every two weeks, a rate of loss that many scholars compare in severity to biodiversity extinction. When a language disappears, humanity loses far more than a communication system. Indigenous languages encode intricate knowledge of local ecosystems, medicinal plants, navigation techniques, and social relationships that may have accumulated over thousands of years and that simply do not exist in any other form. Revitalisation efforts have achieved notable successes: Welsh in Britain and Māori in New Zealand both recovered from critically low speaker numbers to achieve official recognition and growing new-speaker communities, largely through sustained government support for immersion education and media broadcasting in the language. However, these successes required decades of policy commitment and substantial financial investment, resources that most endangered language communities cannot access. Digital technologies offer new opportunities — apps, online courses, and social media communities can connect dispersed speakers — but linguists caution that technology alone cannot substitute for intergenerational transmission in the home, which remains the most reliable predictor of long-term language survival.",
      keyPoints: [
        "A language dies approximately every two weeks globally",
        "Indigenous languages encode irreplaceable ecological and cultural knowledge",
        "Welsh and Māori show that revitalisation is possible with sustained policy support",
        "Immersion education is the most effective tool for producing new fluent speakers",
        "Digital tools help but cannot replace home intergenerational transmission",
      ],
    },
    {
      id: "rl-20-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Free Will, Determinism, and Moral Responsibility",
      lectureText: "The debate over free will sits at the intersection of philosophy, neuroscience, and law, and its implications are far from purely academic. If human behaviour is entirely determined by prior causes — genetics, upbringing, brain chemistry — then the traditional notion of moral desert, the idea that individuals truly deserve praise or blame for their actions, becomes difficult to sustain. The neuroscientist Benjamin Libet famously reported in the 1980s that brain activity associated with a voluntary movement precedes conscious awareness of the intention to move by several hundred milliseconds, suggesting that the conscious self may be a narrator rather than an author of behaviour. Compatibilists respond that what matters for moral responsibility is not the metaphysical possibility of acting otherwise, but whether the person acted freely in the sense of not being subject to coercion, manipulation, or incapacity. On this view, determinism poses no threat to legal or moral accountability. Philosophers and legal theorists are increasingly engaging with this debate as advances in neuroscience make brain-based defences more plausible in courtrooms, raising difficult questions about when neurological evidence should mitigate criminal responsibility.",
      keyPoints: [
        "Determinism challenges traditional notions of moral desert and blame",
        "Libet's experiments showed brain activity precedes conscious intention by milliseconds",
        "Compatibilists argue free will only requires acting without coercion, not metaphysical openness",
        "The debate has direct implications for criminal law and punishment theory",
        "Neuroscientific evidence is increasingly used in legal defences",
      ],
    },
  ],

  answerShort: [
    { id: "as-20-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What device uses magnetic fields to confine plasma in a nuclear fusion reactor?", expectedAnswer: "Tokamak" },
    { id: "as-20-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the hydrogen isotope found in seawater and used as fusion fuel called?", expectedAnswer: "Deuterium" },
    { id: "as-20-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes a business that pursues both financial returns and social or environmental goals?", expectedAnswer: "Social enterprise" },
    { id: "as-20-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What financial practice provides small loans to low-income entrepreneurs in developing countries?", expectedAnswer: "Microfinance" },
    { id: "as-20-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Approximately how often does a language become extinct globally?", expectedAnswer: "Every two weeks" },
    { id: "as-20-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What philosophical position holds that free will and determinism are compatible with each other?", expectedAnswer: "Compatibilism" },
    { id: "as-20-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What bioplastic is derived from fermented corn starch and commonly used in food packaging?", expectedAnswer: "PLA or polylactic acid" },
    { id: "as-20-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What element, found abundantly in the Earth's crust and seawater, is used to breed tritium for fusion reactors?", expectedAnswer: "Lithium" },
    { id: "as-20-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of education programme, where all subjects are taught in a minority language, is most effective for language revitalisation?", expectedAnswer: "Immersion programme" },
    { id: "as-20-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What neuroscientist conducted famous experiments in the 1980s measuring brain activity before conscious awareness of movement?", expectedAnswer: "Benjamin Libet" },
  ],
};

export default test20;
