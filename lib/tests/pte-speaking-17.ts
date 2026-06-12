import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Nuclear Power Capacity (GW) by Region</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="70" width="50" height="150" fill="#06b6d4" rx="2"/>
  <rect x="140" y="110" width="50" height="110" fill="#0ea5e9" rx="2"/>
  <rect x="215" y="130" width="50" height="90" fill="#7c3aed" rx="2"/>
  <rect x="290" y="155" width="50" height="65" fill="#f59e0b" rx="2"/>
  <text x="90" y="65" text-anchor="middle" font-size="10" fill="#0e7490">150</text>
  <text x="165" y="105" text-anchor="middle" font-size="10" fill="#0e7490">110</text>
  <text x="240" y="125" text-anchor="middle" font-size="10" fill="#0e7490">90</text>
  <text x="315" y="150" text-anchor="middle" font-size="10" fill="#0e7490">65</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">N. America</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">Europe</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">Asia</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">Others</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Species Extinction Rate (per million species/year)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,210 114,205 178,195 242,165 306,110 370,55" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="205" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="195" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="165" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="110" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="55" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">1970</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">1980</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">1990</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">2000</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2010</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="378" y="50" text-anchor="middle" font-size="10" fill="#0e7490">1000</text>
  <text x="50" y="208" text-anchor="end" font-size="10" fill="#0e7490">1</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Gig Economy Workforce Share by Sector (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 172,204 Z" fill="#0ea5e9"/>
  <path d="M140,130 L172,204 A80,80 0 0,1 68,170 Z" fill="#7c3aed"/>
  <path d="M140,130 L68,170 A80,80 0 0,1 68,90 Z" fill="#f59e0b"/>
  <path d="M140,130 L68,90 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Transport 28%</text>
  <rect x="240" y="75" width="12" height="12" fill="#0ea5e9"/><text x="258" y="86" font-size="11" fill="#334155">Delivery 22%</text>
  <rect x="240" y="100" width="12" height="12" fill="#7c3aed"/><text x="258" y="111" font-size="11" fill="#334155">Freelance 20%</text>
  <rect x="240" y="125" width="12" height="12" fill="#f59e0b"/><text x="258" y="136" font-size="11" fill="#334155">Care Work 18%</text>
  <rect x="240" y="150" width="12" height="12" fill="#10b981"/><text x="258" y="161" font-size="11" fill="#334155">Other 12%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Nanotechnology Investment by Country (USD billions)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="60" width="45" height="160" fill="#06b6d4" rx="2"/>
  <rect x="125" y="90" width="45" height="130" fill="#0ea5e9" rx="2"/>
  <rect x="190" y="115" width="45" height="105" fill="#7c3aed" rx="2"/>
  <rect x="255" y="145" width="45" height="75" fill="#f59e0b" rx="2"/>
  <rect x="320" y="165" width="35" height="55" fill="#10b981" rx="2"/>
  <text x="82" y="55" text-anchor="middle" font-size="10" fill="#0e7490">5.4</text>
  <text x="147" y="85" text-anchor="middle" font-size="10" fill="#0e7490">4.3</text>
  <text x="212" y="110" text-anchor="middle" font-size="10" fill="#0e7490">3.5</text>
  <text x="277" y="140" text-anchor="middle" font-size="10" fill="#0e7490">2.5</text>
  <text x="337" y="160" text-anchor="middle" font-size="10" fill="#0e7490">1.8</text>
  <text x="82" y="240" text-anchor="middle" font-size="9" fill="#64748b">USA</text>
  <text x="147" y="240" text-anchor="middle" font-size="9" fill="#64748b">China</text>
  <text x="212" y="240" text-anchor="middle" font-size="9" fill="#64748b">EU</text>
  <text x="277" y="240" text-anchor="middle" font-size="9" fill="#64748b">Japan</text>
  <text x="337" y="240" text-anchor="middle" font-size="9" fill="#64748b">S. Korea</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Student Learning Styles Distribution (%)</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="110" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Learning Style</text>
  <text x="220" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Primary (%)</text>
  <text x="330" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Secondary (%)</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="160" y1="35" x2="160" y2="245" stroke="#e2e8f0"/>
  <line x1="270" y1="35" x2="270" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="88" text-anchor="middle" font-size="11" fill="#334155">Visual</text><text x="220" y="88" text-anchor="middle" font-size="11" fill="#334155">34</text><text x="330" y="88" text-anchor="middle" font-size="11" fill="#334155">28</text>
  <line x1="30" y1="98" x2="370" y2="98" stroke="#f1f5f9"/>
  <text x="110" y="118" text-anchor="middle" font-size="11" fill="#334155">Auditory</text><text x="220" y="118" text-anchor="middle" font-size="11" fill="#334155">22</text><text x="330" y="118" text-anchor="middle" font-size="11" fill="#334155">31</text>
  <line x1="30" y1="128" x2="370" y2="128" stroke="#f1f5f9"/>
  <text x="110" y="148" text-anchor="middle" font-size="11" fill="#334155">Kinesthetic</text><text x="220" y="148" text-anchor="middle" font-size="11" fill="#334155">26</text><text x="330" y="148" text-anchor="middle" font-size="11" fill="#334155">24</text>
  <line x1="30" y1="158" x2="370" y2="158" stroke="#f1f5f9"/>
  <text x="110" y="178" text-anchor="middle" font-size="11" fill="#334155">Reading/Writing</text><text x="220" y="178" text-anchor="middle" font-size="11" fill="#334155">18</text><text x="330" y="178" text-anchor="middle" font-size="11" fill="#334155">17</text>
  <line x1="30" y1="188" x2="370" y2="188" stroke="#f1f5f9"/>
  <text x="110" y="208" text-anchor="middle" font-size="11" fill="#334155">Multimodal</text><text x="220" y="208" text-anchor="middle" font-size="11" fill="#334155">—</text><text x="330" y="208" text-anchor="middle" font-size="11" fill="#334155">—</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Nuclear Fuel Cycle Process</text>
  <defs><marker id="arr17" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <rect x="20" y="90" width="80" height="40" rx="6" fill="#06b6d4"/>
  <text x="60" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Mining</text>
  <line x1="100" y1="110" x2="118" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr17)"/>
  <rect x="120" y="90" width="80" height="40" rx="6" fill="#0ea5e9"/>
  <text x="160" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Enrichment</text>
  <line x1="200" y1="110" x2="218" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr17)"/>
  <rect x="220" y="90" width="80" height="40" rx="6" fill="#7c3aed"/>
  <text x="260" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Reactor Use</text>
  <line x1="300" y1="110" x2="318" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr17)"/>
  <rect x="320" y="90" width="60" height="40" rx="6" fill="#f59e0b"/>
  <text x="350" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Disposal</text>
  <text x="60" y="150" text-anchor="middle" font-size="9" fill="#64748b">Uranium ore</text>
  <text x="160" y="150" text-anchor="middle" font-size="9" fill="#64748b">U-235 increase</text>
  <text x="260" y="150" text-anchor="middle" font-size="9" fill="#64748b">Heat &amp; power</text>
  <text x="350" y="150" text-anchor="middle" font-size="9" fill="#64748b">Spent fuel</text>
  <text x="200" y="195" text-anchor="middle" font-size="11" fill="#64748b">↺ Some fuel can be reprocessed and recycled</text>
</svg>`;

const test17: PTESpeakingTest = {
  id: "pte-speaking-17",
  title: "PTE Speaking — Test 17",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-17-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Nuclear energy produces electricity through the controlled fission of uranium atoms, releasing enormous amounts of heat with virtually no direct carbon emissions. Proponents argue that it represents an essential low-carbon technology in the transition away from fossil fuels. Critics, however, remain concerned about the long-term management of radioactive waste and the potential consequences of catastrophic reactor failures.",
    },
    {
      id: "ra-17-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Biodiversity loss is accelerating at an alarming rate, driven by habitat destruction, invasive species, climate change, and pollution. Conservation scientists advocate a range of strategies to slow this decline, including the expansion of protected areas, wildlife corridors that connect fragmented habitats, and captive breeding programmes for critically endangered species. Community-based conservation initiatives have also demonstrated considerable success in regions where local populations actively participate in protecting wildlife.",
    },
    {
      id: "ra-17-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The gig economy refers to a labour market characterised by short-term contracts and freelance work rather than permanent employment. Digital platforms have greatly expanded opportunities for independent contractors in sectors ranging from transportation to graphic design. While gig work offers flexibility, it typically provides fewer legal protections, limited access to benefits such as sick pay, and considerable income insecurity compared to traditional salaried positions.",
    },
    {
      id: "ra-17-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Nanotechnology involves the manipulation of matter at the atomic and molecular scale, typically at dimensions below one hundred nanometres. Researchers are harnessing these properties to develop materials with unprecedented strength, medical treatments that target individual cancer cells, and electronic components far smaller than any previously manufactured. Despite its enormous potential, concerns persist regarding the toxicity of engineered nanoparticles and the adequacy of existing regulatory frameworks.",
    },
    {
      id: "ra-17-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Educational psychology investigates how people learn and how teaching environments can be optimised to support academic achievement. Research has established that factors such as motivation, prior knowledge, working memory capacity, and emotional well-being all exert significant influence on learning outcomes. These insights have led educators to adopt differentiated instruction strategies that acknowledge the diverse cognitive profiles and learning styles present within any classroom.",
    },
    {
      id: "ra-17-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Small modular reactors represent a new generation of nuclear technology designed to be manufactured in factories and assembled on-site, significantly reducing construction costs and timelines. Unlike conventional large-scale plants, these compact units can be deployed in remote locations and scaled incrementally according to demand. Several countries are investing in their development as part of broader strategies to decarbonise electricity generation by mid-century.",
    },
  ],

  repeatSentence: [
    { id: "rs-17-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The reactor was shut down safely following the unexpected pressure surge." },
    { id: "rs-17-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Biodiversity hotspots contain a disproportionately large number of endemic species." },
    { id: "rs-17-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Many gig workers report high satisfaction with their flexible working arrangements." },
    { id: "rs-17-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Nanoparticles can penetrate biological membranes that larger molecules cannot cross." },
    { id: "rs-17-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor outlined three distinct theories of cognitive development in children." },
    { id: "rs-17-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Platform companies are challenging traditional definitions of employment and worker status." },
    { id: "rs-17-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Habitat fragmentation is one of the leading causes of population decline in large mammals." },
    { id: "rs-17-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Formative assessment provides teachers with timely feedback to adjust their instructional approach." },
    { id: "rs-17-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Uranium enrichment facilities are subject to strict international inspection and monitoring." },
    { id: "rs-17-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Self-determination theory links intrinsic motivation to long-term academic engagement." },
  ],

  describeImage: [
    {
      id: "di-17-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Nuclear Power Capacity (GW) by Region",
      svgContent: SVG_1,
      keyPoints: [
        "North America has the highest nuclear capacity at 150 GW",
        "Europe is second with 110 GW",
        "Asia ranks third with 90 GW",
        "All other regions combined account for only 65 GW",
      ],
    },
    {
      id: "di-17-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Species Extinction Rate (per million species/year) 1970–2020",
      svgContent: SVG_2,
      keyPoints: [
        "Extinction rates were relatively low in 1970",
        "A steady increase occurred between 1970 and 2000",
        "Rates accelerated sharply from 2000 to 2020",
        "By 2020 rates exceeded 1000 per million species per year",
      ],
    },
    {
      id: "di-17-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Gig Economy Workforce Share by Sector (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Transport is the largest sector at 28%",
        "Delivery work accounts for 22% of gig workers",
        "Freelance and care work together make up 38%",
        "Other sectors account for the remaining 12%",
      ],
    },
    {
      id: "di-17-4", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Nanotechnology Investment by Country (USD billions)",
      svgContent: SVG_4,
      keyPoints: [
        "The USA leads with USD 5.4 billion invested",
        "China is second with USD 4.3 billion",
        "The EU invests USD 3.5 billion",
        "Japan and South Korea trail with USD 2.5 and 1.8 billion respectively",
      ],
    },
    {
      id: "di-17-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Student Learning Styles Distribution (%)",
      svgContent: SVG_5,
      keyPoints: [
        "Visual learning is the most common primary style at 34%",
        "Auditory is the most common secondary style at 31%",
        "Kinesthetic learners form a substantial third group at 26%",
        "Reading/Writing learners are the smallest category at 18%",
      ],
    },
    {
      id: "di-17-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Nuclear Fuel Cycle Process",
      svgContent: SVG_6,
      keyPoints: [
        "The cycle begins with uranium mining",
        "Enrichment increases the concentration of U-235",
        "Enriched fuel is loaded into reactors to generate electricity",
        "Spent fuel requires secure long-term disposal or reprocessing",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-17-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Future of Nuclear Energy",
      lectureText: "Nuclear power currently supplies about ten percent of global electricity, making it the largest source of low-carbon energy after hydropower. Following the accidents at Three Mile Island, Chernobyl, and Fukushima, public confidence in nuclear energy declined significantly, leading many countries to phase out their programmes. However, the urgency of addressing climate change has prompted a reassessment. Advocates argue that modern reactor designs are far safer than their predecessors, incorporating passive safety systems that shut the plant down automatically during emergencies. Small modular reactors, currently in development, promise to reduce the high capital costs that have historically made nuclear projects economically unattractive. Countries such as France, which generates around seventy percent of its electricity from nuclear power, demonstrate that large-scale nuclear programmes can operate reliably and with low carbon footprints.",
      keyPoints: [
        "Nuclear supplies roughly 10% of global electricity",
        "Public confidence fell after Chernobyl and Fukushima accidents",
        "Climate urgency is prompting a reassessment of nuclear energy",
        "Modern designs include passive safety systems",
        "Small modular reactors may reduce prohibitive capital costs",
      ],
    },
    {
      id: "rl-17-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Strategies to Halt Biodiversity Loss",
      lectureText: "Scientists estimate that the current rate of species extinction is between one hundred and one thousand times higher than the natural background rate, prompting many to declare that Earth is entering a sixth mass extinction. The primary drivers include land-use change, particularly the conversion of forests and wetlands to agriculture, followed by overexploitation of wildlife, pollution, invasive species, and climate change. Effective strategies require action at multiple scales. Protected areas now cover about seventeen percent of land and twelve percent of oceans globally, but connectivity between these areas remains limited. Wildlife corridors enable species to migrate and maintain genetic diversity. Community conservation programmes empower local people to manage natural resources sustainably. Restoration ecology — the deliberate effort to rebuild degraded habitats — is also gaining traction, with ambitious global targets for restoring billions of hectares of degraded land by 2030.",
      keyPoints: [
        "Extinction rates are 100–1000 times the natural background",
        "Main drivers: land-use change, overexploitation, invasive species, pollution, climate change",
        "Protected areas cover 17% of land and 12% of oceans",
        "Wildlife corridors maintain genetic connectivity between populations",
        "Restoration ecology targets billions of hectares of degraded land",
      ],
    },
    {
      id: "rl-17-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "How Cognitive Load Theory Shapes Instruction",
      lectureText: "Cognitive load theory, developed by educational psychologist John Sweller in the 1980s, proposes that working memory has a limited capacity and that effective instruction must manage the demands placed upon it. The theory distinguishes between intrinsic load — the inherent complexity of the material being learned — and extraneous load, which refers to unnecessary cognitive effort imposed by poor instructional design. By reducing extraneous load through clear presentation, worked examples, and appropriate sequencing of content, instructors can free up cognitive resources for meaningful learning. A third category, germane load, refers to the mental effort devoted to forming schemas — organised mental structures that allow learners to process information efficiently. Research inspired by cognitive load theory has led to evidence-based recommendations such as splitting complex visual and verbal information, avoiding redundant explanations, and providing novice learners with detailed worked examples before requiring independent problem solving.",
      keyPoints: [
        "Cognitive load theory: working memory has limited capacity",
        "Intrinsic load = complexity of the content itself",
        "Extraneous load = unnecessary effort from poor instructional design",
        "Germane load = effort spent forming useful mental schemas",
        "Recommendations include worked examples and reducing redundancy",
      ],
    },
  ],

  answerShort: [
    { id: "as-17-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What element is most commonly used as fuel in nuclear power plants?", expectedAnswer: "Uranium" },
    { id: "as-17-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a species that exists only in one specific geographic location?", expectedAnswer: "Endemic" },
    { id: "as-17-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes workers hired on a task-by-task basis through digital platforms?", expectedAnswer: "Gig workers" },
    { id: "as-17-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What unit of measurement equals one billionth of a metre?", expectedAnswer: "Nanometre" },
    { id: "as-17-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of memory temporarily holds information while we actively use it?", expectedAnswer: "Working memory" },
    { id: "as-17-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the splitting of an atomic nucleus to release energy?", expectedAnswer: "Fission" },
    { id: "as-17-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a non-native species that causes ecological harm?", expectedAnswer: "Invasive species" },
    { id: "as-17-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for a route connecting two separate areas of wildlife habitat?", expectedAnswer: "Wildlife corridor" },
    { id: "as-17-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In education, what term refers to assessment conducted during learning rather than at the end?", expectedAnswer: "Formative assessment" },
    { id: "as-17-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the variety of life found within a particular ecosystem or on Earth as a whole?", expectedAnswer: "Biodiversity" },
  ],
};

export default test17;
