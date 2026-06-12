import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Freshwater Availability by Continent (km³/year)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="50" width="40" height="170" fill="#06b6d4" rx="2"/>
  <text x="80" y="45" text-anchor="middle" font-size="9" fill="#0e7490">43,800</text>
  <text x="80" y="240" text-anchor="middle" font-size="9" fill="#64748b">S. America</text>
  <rect x="115" y="75" width="40" height="145" fill="#06b6d4" rx="2"/>
  <text x="135" y="70" text-anchor="middle" font-size="9" fill="#0e7490">31,000</text>
  <text x="135" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia</text>
  <rect x="170" y="100" width="40" height="120" fill="#06b6d4" rx="2"/>
  <text x="190" y="95" text-anchor="middle" font-size="9" fill="#0e7490">19,000</text>
  <text x="190" y="240" text-anchor="middle" font-size="9" fill="#64748b">N. America</text>
  <rect x="225" y="130" width="40" height="90" fill="#0ea5e9" rx="2"/>
  <text x="245" y="125" text-anchor="middle" font-size="9" fill="#0e7490">10,800</text>
  <text x="245" y="240" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <rect x="280" y="150" width="40" height="70" fill="#0ea5e9" rx="2"/>
  <text x="300" y="145" text-anchor="middle" font-size="9" fill="#0e7490">4,000</text>
  <text x="300" y="240" text-anchor="middle" font-size="9" fill="#64748b">Africa</text>
  <rect x="335" y="190" width="25" height="30" fill="#0ea5e9" rx="2"/>
  <text x="347" y="185" text-anchor="middle" font-size="9" fill="#0e7490">1,900</text>
  <text x="347" y="240" text-anchor="middle" font-size="9" fill="#64748b">Oceania</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Facial Recognition Accuracy by Dataset (2015–2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="150" x2="370" y2="150" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="50,195 115,160 180,115 245,75 310,48 370,38" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="195" r="4" fill="#06b6d4"/>
  <circle cx="115" cy="160" r="4" fill="#06b6d4"/>
  <circle cx="180" cy="115" r="4" fill="#06b6d4"/>
  <circle cx="245" cy="75" r="4" fill="#06b6d4"/>
  <circle cx="310" cy="48" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="38" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">2015</text>
  <text x="115" y="240" text-anchor="middle" font-size="9" fill="#64748b">2016</text>
  <text x="180" y="240" text-anchor="middle" font-size="9" fill="#64748b">2018</text>
  <text x="245" y="240" text-anchor="middle" font-size="9" fill="#64748b">2020</text>
  <text x="310" y="240" text-anchor="middle" font-size="9" fill="#64748b">2022</text>
  <text x="370" y="240" text-anchor="middle" font-size="9" fill="#64748b">2023</text>
  <text x="55" y="198" font-size="9" fill="#0e7490">72%</text>
  <text x="375" y="41" font-size="9" fill="#0e7490">99.4%</text>
  <text x="35" y="83" font-size="9" fill="#64748b">95%</text>
  <text x="35" y="153" font-size="9" fill="#64748b">80%</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Cultural Identity Composition Among Youth (Survey %)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 204,163 Z" fill="#06b6d4"/>
  <path d="M140,130 L204,163 A80,80 0 0,1 98,196 Z" fill="#0ea5e9"/>
  <path d="M140,130 L98,196 A80,80 0 0,1 60,97 Z" fill="#7c3aed"/>
  <path d="M140,130 L60,97 A80,80 0 0,1 140,50 Z" fill="#f59e0b"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">National 32%</text>
  <rect x="240" y="73" width="12" height="12" fill="#0ea5e9"/><text x="258" y="84" font-size="11" fill="#334155">Ethnic 28%</text>
  <rect x="240" y="96" width="12" height="12" fill="#7c3aed"/><text x="258" y="107" font-size="11" fill="#334155">Global 25%</text>
  <rect x="240" y="119" width="12" height="12" fill="#f59e0b"/><text x="258" y="130" font-size="11" fill="#334155">Religious 15%</text>
  <text x="200" y="240" text-anchor="middle" font-size="10" fill="#64748b">Primary identity self-reported by respondents aged 18–25</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Kelp Forest Ecosystem: Species Interactions</text>
  <rect x="30" y="32" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="32" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="110" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Species</text>
  <text x="215" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Role</text>
  <text x="335" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Status</text>
  <line x1="165" y1="32" x2="165" y2="242" stroke="#e2e8f0"/>
  <line x1="290" y1="32" x2="290" y2="242" stroke="#e2e8f0"/>
  <rect x="30" y="96" width="340" height="32" fill="#f0f9ff"/>
  <rect x="30" y="160" width="340" height="32" fill="#f0f9ff"/>
  <text x="110" y="74" text-anchor="middle" font-size="10" fill="#334155">Giant kelp</text><text x="215" y="74" text-anchor="middle" font-size="10" fill="#334155">Foundation species</text><text x="335" y="74" text-anchor="middle" font-size="10" fill="#334155">Declining</text>
  <text x="110" y="114" text-anchor="middle" font-size="10" fill="#334155">Sea otter</text><text x="215" y="114" text-anchor="middle" font-size="10" fill="#334155">Keystone predator</text><text x="335" y="114" text-anchor="middle" font-size="10" fill="#334155">Protected</text>
  <text x="110" y="146" text-anchor="middle" font-size="10" fill="#334155">Sea urchin</text><text x="215" y="146" text-anchor="middle" font-size="10" fill="#334155">Kelp grazer</text><text x="335" y="146" text-anchor="middle" font-size="10" fill="#334155">Overabundant</text>
  <text x="110" y="178" text-anchor="middle" font-size="10" fill="#334155">Rockfish</text><text x="215" y="178" text-anchor="middle" font-size="10" fill="#334155">Mid-trophic fish</text><text x="335" y="178" text-anchor="middle" font-size="10" fill="#334155">Recovering</text>
  <text x="110" y="212" text-anchor="middle" font-size="10" fill="#334155">Harbour seal</text><text x="215" y="212" text-anchor="middle" font-size="10" fill="#334155">Apex predator</text><text x="335" y="212" text-anchor="middle" font-size="10" fill="#334155">Stable</text>
  <line x1="30" y1="128" x2="370" y2="128" stroke="#e2e8f0"/>
  <line x1="30" y1="160" x2="370" y2="160" stroke="#e2e8f0"/>
  <line x1="30" y1="192" x2="370" y2="192" stroke="#e2e8f0"/>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Labour Rights Index by Region (0–100 scale)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="65" width="40" height="155" fill="#06b6d4" rx="2"/>
  <text x="85" y="60" text-anchor="middle" font-size="10" fill="#0e7490">78</text>
  <text x="85" y="240" text-anchor="middle" font-size="9" fill="#64748b">N. Europe</text>
  <rect x="120" y="80" width="40" height="140" fill="#06b6d4" rx="2"/>
  <text x="140" y="75" text-anchor="middle" font-size="10" fill="#0e7490">70</text>
  <text x="140" y="240" text-anchor="middle" font-size="9" fill="#64748b">W. Europe</text>
  <rect x="175" y="110" width="40" height="110" fill="#0ea5e9" rx="2"/>
  <text x="195" y="105" text-anchor="middle" font-size="10" fill="#0e7490">55</text>
  <text x="195" y="240" text-anchor="middle" font-size="9" fill="#64748b">N. America</text>
  <rect x="230" y="140" width="40" height="80" fill="#0ea5e9" rx="2"/>
  <text x="250" y="135" text-anchor="middle" font-size="10" fill="#0e7490">40</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">Latin Am.</text>
  <rect x="285" y="160" width="40" height="60" fill="#7c3aed" rx="2"/>
  <text x="305" y="155" text-anchor="middle" font-size="10" fill="#0e7490">30</text>
  <text x="305" y="240" text-anchor="middle" font-size="9" fill="#64748b">S. Asia</text>
  <rect x="340" y="180" width="25" height="40" fill="#7c3aed" rx="2"/>
  <text x="352" y="175" text-anchor="middle" font-size="10" fill="#0e7490">20</text>
  <text x="352" y="240" text-anchor="middle" font-size="9" fill="#64748b">MENA</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <marker id="arr10" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#0e7490"/>
    </marker>
  </defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Water Desalination Process</text>
  <rect x="20" y="50" width="80" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="60" y="73" text-anchor="middle" font-size="10" fill="#0e7490">Seawater Intake</text>
  <path d="M100,68 L128,68" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="130" y="50" width="80" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="170" y="66" text-anchor="middle" font-size="10" fill="#0e7490">Pre-filtration</text>
  <text x="170" y="80" text-anchor="middle" font-size="10" fill="#0e7490">(screens)</text>
  <path d="M210,68 L238,68" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="240" y="50" width="80" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="280" y="66" text-anchor="middle" font-size="10" fill="#0e7490">High-Pressure</text>
  <text x="280" y="80" text-anchor="middle" font-size="10" fill="#0e7490">Pumping</text>
  <path d="M320,68 L348,68" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="330" y="50" width="60" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="360" y="73" text-anchor="middle" font-size="10" fill="#0e7490">RO Membrane</text>
  <path d="M360,86 L360,115" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="310" y="117" width="100" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="360" y="133" text-anchor="middle" font-size="10" fill="#0e7490">Permeate (fresh)</text>
  <text x="360" y="147" text-anchor="middle" font-size="10" fill="#0e7490">water collected</text>
  <path d="M310,135 L282,135" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="180" y="117" width="100" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="230" y="133" text-anchor="middle" font-size="10" fill="#0e7490">Post-treatment</text>
  <text x="230" y="147" text-anchor="middle" font-size="10" fill="#0e7490">(minerals added)</text>
  <path d="M180,135 L152,135" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr10)"/>
  <rect x="50" y="117" width="100" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="100" y="140" text-anchor="middle" font-size="10" fill="#0e7490">Distribution</text>
  <path d="M360,155 L360,185 L280,185" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4" fill="none" marker-end="url(#arr10)"/>
  <rect x="120" y="175" width="160" height="28" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="4"/>
  <text x="200" y="193" text-anchor="middle" font-size="10" fill="#92400e">Brine rejected back to sea</text>
</svg>`;

const test10: PTESpeakingTest = {
  id: "pte-speaking-10",
  title: "PTE Speaking — Test 10",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-10-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Water scarcity affects more than two billion people worldwide and is expected to intensify as global temperatures rise and populations grow. Competing demands from agriculture, industry, and municipal consumption place increasing pressure on finite freshwater reserves. Effective water management requires coordinated policy frameworks, investment in infrastructure such as desalination and wastewater recycling, and greater efficiency in irrigation practices across the agricultural sector.",
    },
    {
      id: "ra-10-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Facial recognition technology uses algorithmic analysis of biometric data to identify individuals from digital images or video footage. Advances in deep learning have dramatically improved the accuracy of these systems, enabling their deployment in law enforcement, border security, and commercial applications. However, civil liberties advocates raise serious concerns about mass surveillance, data privacy, and documented biases in recognition rates across different demographic groups.",
    },
    {
      id: "ra-10-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Cultural identity is a complex and dynamic construct encompassing language, traditions, values, and shared histories that distinguish one social group from another. In an era of intensified globalisation and digital connectivity, individuals increasingly navigate multiple cultural affiliations simultaneously. Researchers in anthropology and sociology debate whether globalisation is producing cultural homogenisation or fostering new hybrid identities that blend local and transnational influences.",
    },
    {
      id: "ra-10-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Kelp ecosystems are among the most productive and biologically diverse marine habitats on Earth. These underwater forests, formed by the rapid growth of large brown macroalgae, provide shelter, food, and nursery grounds for hundreds of species including fish, invertebrates, and marine mammals. Rising ocean temperatures, coupled with the proliferation of sea urchins and pollution, have caused the collapse of kelp forests across significant stretches of the world's coastlines.",
    },
    {
      id: "ra-10-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Labour rights refer to the legal and ethical entitlements of workers in relation to wages, working conditions, collective bargaining, and protection from exploitation. The International Labour Organization establishes core conventions on issues including child labour, forced labour, and freedom of association that member states are expected to uphold. Despite considerable progress since the industrial revolution, enforcement gaps remain widespread, particularly in global supply chains operating across multiple jurisdictions.",
    },
    {
      id: "ra-10-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Reverse osmosis is the dominant technology used in modern seawater desalination plants. The process forces saline water at high pressure through semi-permeable membranes that allow water molecules to pass while blocking dissolved salts and other impurities. Although desalination provides a reliable supply of potable water in water-stressed regions, the process is energy-intensive and generates concentrated brine that must be carefully managed to avoid harm to marine ecosystems.",
    },
  ],

  repeatSentence: [
    { id: "rs-10-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The research group is investigating water reuse technologies for arid agricultural regions." },
    { id: "rs-10-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Facial recognition software must be rigorously tested for demographic bias before deployment." },
    { id: "rs-10-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Cultural identity can shift significantly across generations within immigrant communities." },
    { id: "rs-10-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The collapse of kelp forests has severe consequences for entire coastal ecosystems." },
    { id: "rs-10-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students should submit a one-page research proposal by the end of the week." },
    { id: "rs-10-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "International labour standards require that workers be free to form independent unions." },
    { id: "rs-10-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor will hold office hours every Tuesday afternoon during semester." },
    { id: "rs-10-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Groundwater depletion is accelerating in many of the world's most productive farming regions." },
    { id: "rs-10-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The tutorial group will analyse primary sources from the colonial period." },
    { id: "rs-10-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Biometric surveillance raises fundamental questions about civil liberties in democratic societies." },
  ],

  describeImage: [
    {
      id: "di-10-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Freshwater Availability by Continent (km³/year)",
      svgContent: SVG_1,
      keyPoints: [
        "South America has the greatest freshwater availability at 43,800 km³ per year",
        "Asia ranks second with approximately 31,000 km³ per year",
        "Africa's availability of 4,000 km³ contrasts sharply with its large population",
        "Oceania has the least freshwater of any continent at 1,900 km³ per year",
      ],
    },
    {
      id: "di-10-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Facial Recognition Accuracy by Dataset (2015–2023)",
      svgContent: SVG_2,
      keyPoints: [
        "Accuracy improved dramatically from 72% in 2015 to 99.4% in 2023",
        "The steepest gains occurred between 2018 and 2022",
        "The technology crossed the 95% accuracy threshold around 2020",
        "Rapid advances in deep learning drove the consistent upward trend",
      ],
    },
    {
      id: "di-10-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Cultural Identity Composition Among Youth (Survey %)",
      svgContent: SVG_3,
      keyPoints: [
        "National identity is the primary self-identification for 32% of respondents",
        "Ethnic identity is chosen by 28% of young people surveyed",
        "Global or cosmopolitan identity accounts for 25% of responses",
        "Religious identity is the primary affiliation for 15% of youth",
      ],
    },
    {
      id: "di-10-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Kelp Forest Ecosystem: Species Interactions",
      svgContent: SVG_4,
      keyPoints: [
        "Giant kelp is the foundation species and is currently in decline",
        "Sea otters are keystone predators that control sea urchin populations",
        "Sea urchins are overabundant and threaten kelp through overgrazing",
        "Rockfish populations are recovering thanks to conservation measures",
      ],
    },
    {
      id: "di-10-5", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Labour Rights Index by Region (0–100 scale)",
      svgContent: SVG_5,
      keyPoints: [
        "Northern Europe scores highest on labour rights at 78 out of 100",
        "The MENA region has the lowest score at only 20 out of 100",
        "There is a significant gap between European and developing-world regions",
        "South Asia scores 30, reflecting limited enforcement of labour protections",
      ],
    },
    {
      id: "di-10-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Water Desalination Process",
      svgContent: SVG_6,
      keyPoints: [
        "Seawater is first drawn in and screened through pre-filtration",
        "High-pressure pumps force water through reverse osmosis membranes",
        "Fresh water (permeate) is collected and then treated with added minerals",
        "Concentrated brine is a by-product that is returned to the sea",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-10-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Global Water Crisis",
      lectureText: "Water is often described as the most critical natural resource of the twenty-first century. While roughly 71 percent of the Earth's surface is covered by water, only about 2.5 percent of that is fresh, and less than one percent is readily accessible for human use. Population growth, agricultural expansion, and industrial demand are pushing many of the world's major aquifers and river systems toward depletion. The Ogallala Aquifer in the United States, which supplies water to one fifth of all irrigated farmland in the country, is being drawn down at rates far exceeding natural recharge. In the Middle East and North Africa, some nations already rely on desalination for the majority of their drinking water. The unequal distribution of water resources, combined with the effects of climate change on precipitation patterns, means that water stress is likely to become an increasingly significant driver of economic inequality and geopolitical conflict over the coming decades.",
      keyPoints: [
        "Only 1% of global water is readily accessible freshwater",
        "Major aquifers like Ogallala are being depleted faster than they recharge",
        "The Middle East relies heavily on desalination for drinking water",
        "Climate change is altering precipitation patterns globally",
        "Water stress may drive economic inequality and geopolitical conflict",
      ],
    },
    {
      id: "rl-10-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Ethics of Facial Recognition Technology",
      lectureText: "The rapid deployment of facial recognition technology has outpaced the development of appropriate regulatory frameworks, creating significant ethical challenges. The technology is now used by law enforcement agencies in many countries to identify suspects from CCTV footage, often without explicit legal authorisation or public awareness. Studies by organisations such as the National Institute of Standards and Technology have found that many facial recognition algorithms perform significantly less accurately on darker-skinned individuals and women, raising serious concerns about discriminatory outcomes. Cases of wrongful arrest based on erroneous algorithmic identification have been documented in the United States. Meanwhile, authoritarian governments have used the technology to monitor political dissidents and ethnic minorities. Proponents argue that properly regulated facial recognition can enhance public safety and streamline border security, but critics contend that its normalisation represents a fundamental threat to privacy and the presumption of innocence.",
      keyPoints: [
        "Deployment of facial recognition has outpaced regulatory development",
        "NIST studies found accuracy disparities across demographics, especially for darker skin tones",
        "Wrongful arrests based on facial recognition errors have been documented",
        "Authoritarian governments use the technology to surveil dissidents",
        "Debate continues between public safety benefits and privacy rights",
      ],
    },
    {
      id: "rl-10-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Kelp Ecosystems and Ocean Warming",
      lectureText: "Kelp forests are often referred to as the rainforests of the sea because of their extraordinary biological productivity and the diversity of life they support. These ecosystems are anchored by giant kelp, which can grow at rates of up to 60 centimetres per day under ideal conditions, forming dense underwater canopies that rival terrestrial forests in complexity. However, kelp forests are highly sensitive to water temperature, and ocean warming driven by climate change has caused catastrophic declines in many regions. Off the coast of Tasmania, kelp forests have contracted by more than 95 percent since the 1960s due to warming from the East Australian Current. In California, a combination of a marine heatwave and a disease that decimated sea otter populations allowed sea urchins to proliferate unchecked, resulting in the destruction of large areas of kelp. Conservation efforts now focus on restoring sea otter populations, removing excess sea urchins by hand, and developing temperature-tolerant kelp strains through selective breeding.",
      keyPoints: [
        "Kelp forests are among the most productive and biodiverse marine ecosystems",
        "Giant kelp can grow up to 60 cm per day under ideal conditions",
        "Ocean warming has caused catastrophic kelp forest declines in many regions",
        "Tasmania has lost over 95% of its kelp forests since the 1960s",
        "Conservation includes sea otter restoration and selective breeding of heat-tolerant kelp",
      ],
    },
  ],

  answerShort: [
    { id: "as-10-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What process forces water through semi-permeable membranes to remove salt?", expectedAnswer: "Reverse osmosis" },
    { id: "as-10-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for an underground layer of water-bearing rock or sediment?", expectedAnswer: "Aquifer" },
    { id: "as-10-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which animal is considered the keystone predator in kelp forest ecosystems?", expectedAnswer: "Sea otter" },
    { id: "as-10-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the right of workers to join and form organisations to negotiate with employers?", expectedAnswer: "Collective bargaining" },
    { id: "as-10-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the United Nations agency that sets international labour standards?", expectedAnswer: "ILO" },
    { id: "as-10-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of data does facial recognition technology analyse to identify people?", expectedAnswer: "Biometric data" },
    { id: "as-10-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the blending of elements from multiple cultures into a new form?", expectedAnswer: "Cultural hybridity" },
    { id: "as-10-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which continent receives the largest annual volume of freshwater resources?", expectedAnswer: "South America" },
    { id: "as-10-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What concentrated salty by-product is produced during desalination?", expectedAnswer: "Brine" },
    { id: "as-10-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of algae forms the structural basis of kelp forest ecosystems?", expectedAnswer: "Brown macroalgae" },
  ],
};

export default test10;
