import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Population Aged 65+ by Region (% of total, 2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="75" width="40" height="145" fill="#06b6d4" rx="2"/>
  <text x="80" y="70" text-anchor="middle" font-size="10" fill="#0e7490">22%</text>
  <text x="80" y="240" text-anchor="middle" font-size="9" fill="#64748b">W. Europe</text>
  <rect x="115" y="85" width="40" height="135" fill="#06b6d4" rx="2"/>
  <text x="135" y="80" text-anchor="middle" font-size="10" fill="#0e7490">20%</text>
  <text x="135" y="240" text-anchor="middle" font-size="9" fill="#64748b">Japan</text>
  <rect x="170" y="110" width="40" height="110" fill="#06b6d4" rx="2"/>
  <text x="190" y="105" text-anchor="middle" font-size="10" fill="#0e7490">17%</text>
  <text x="190" y="240" text-anchor="middle" font-size="9" fill="#64748b">N. America</text>
  <rect x="225" y="150" width="40" height="70" fill="#0ea5e9" rx="2"/>
  <text x="245" y="145" text-anchor="middle" font-size="10" fill="#0e7490">11%</text>
  <text x="245" y="240" text-anchor="middle" font-size="9" fill="#64748b">China</text>
  <rect x="280" y="175" width="40" height="45" fill="#0ea5e9" rx="2"/>
  <text x="300" y="170" text-anchor="middle" font-size="10" fill="#0e7490">7%</text>
  <text x="300" y="240" text-anchor="middle" font-size="9" fill="#64748b">S. Asia</text>
  <rect x="335" y="195" width="25" height="25" fill="#0ea5e9" rx="2"/>
  <text x="347" y="190" text-anchor="middle" font-size="10" fill="#0e7490">4%</text>
  <text x="347" y="240" text-anchor="middle" font-size="9" fill="#64748b">Sub-Sah.</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Blockchain Transaction Volume Growth (M/day)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="120" x2="370" y2="120" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="50,210 100,205 150,195 200,170 250,120 300,70 350,40 370,35" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="100" cy="205" r="4" fill="#06b6d4"/>
  <circle cx="150" cy="195" r="4" fill="#06b6d4"/>
  <circle cx="200" cy="170" r="4" fill="#06b6d4"/>
  <circle cx="250" cy="120" r="4" fill="#06b6d4"/>
  <circle cx="300" cy="70" r="4" fill="#06b6d4"/>
  <circle cx="350" cy="40" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="35" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">2017</text>
  <text x="100" y="240" text-anchor="middle" font-size="9" fill="#64748b">2018</text>
  <text x="150" y="240" text-anchor="middle" font-size="9" fill="#64748b">2019</text>
  <text x="200" y="240" text-anchor="middle" font-size="9" fill="#64748b">2020</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">2021</text>
  <text x="300" y="240" text-anchor="middle" font-size="9" fill="#64748b">2022</text>
  <text x="350" y="240" text-anchor="middle" font-size="9" fill="#64748b">2023</text>
  <text x="370" y="240" text-anchor="middle" font-size="9" fill="#64748b">2024</text>
  <text x="35" y="123" font-size="9" fill="#64748b">500M</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Indigenous Land Management Practices (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 210,93 Z" fill="#06b6d4"/>
  <path d="M140,130 L210,93 A80,80 0 0,1 210,167 Z" fill="#0ea5e9"/>
  <path d="M140,130 L210,167 A80,80 0 0,1 140,210 Z" fill="#10b981"/>
  <path d="M140,130 L140,210 A80,80 0 0,1 70,167 Z" fill="#7c3aed"/>
  <path d="M140,130 L70,167 A80,80 0 0,1 70,93 Z" fill="#f59e0b"/>
  <path d="M140,130 L70,93 A80,80 0 0,1 140,50 Z" fill="#ef4444"/>
  <rect x="240" y="40" width="12" height="12" fill="#06b6d4"/><text x="258" y="51" font-size="10" fill="#334155">Controlled burn 24%</text>
  <rect x="240" y="58" width="12" height="12" fill="#0ea5e9"/><text x="258" y="69" font-size="10" fill="#334155">Rotational grazing 20%</text>
  <rect x="240" y="76" width="12" height="12" fill="#10b981"/><text x="258" y="87" font-size="10" fill="#334155">Seed saving 18%</text>
  <rect x="240" y="94" width="12" height="12" fill="#7c3aed"/><text x="258" y="105" font-size="10" fill="#334155">Water harvesting 16%</text>
  <rect x="240" y="112" width="12" height="12" fill="#f59e0b"/><text x="258" y="123" font-size="10" fill="#334155">Agroforestry 13%</text>
  <rect x="240" y="130" width="12" height="12" fill="#ef4444"/><text x="258" y="141" font-size="10" fill="#334155">Other 9%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Soil Health Indicators Comparison</text>
  <rect x="30" y="32" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="32" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="110" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Indicator</text>
  <text x="210" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Healthy Soil</text>
  <text x="320" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Degraded Soil</text>
  <line x1="160" y1="32" x2="160" y2="242" stroke="#e2e8f0"/>
  <line x1="265" y1="32" x2="265" y2="242" stroke="#e2e8f0"/>
  <rect x="30" y="96" width="340" height="32" fill="#f0fdf4"/>
  <rect x="30" y="160" width="340" height="32" fill="#f0fdf4"/>
  <text x="110" y="74" text-anchor="middle" font-size="10" fill="#334155">Organic matter</text><text x="210" y="74" text-anchor="middle" font-size="10" fill="#10b981">4–6%</text><text x="320" y="74" text-anchor="middle" font-size="10" fill="#ef4444">0.5–1%</text>
  <text x="110" y="114" text-anchor="middle" font-size="10" fill="#334155">Microbial biomass</text><text x="210" y="114" text-anchor="middle" font-size="10" fill="#10b981">High diversity</text><text x="320" y="114" text-anchor="middle" font-size="10" fill="#ef4444">Low diversity</text>
  <text x="110" y="148" text-anchor="middle" font-size="10" fill="#334155">Water retention</text><text x="210" y="148" text-anchor="middle" font-size="10" fill="#10b981">Good (&gt;30%)</text><text x="320" y="148" text-anchor="middle" font-size="10" fill="#ef4444">Poor (&lt;10%)</text>
  <text x="110" y="178" text-anchor="middle" font-size="10" fill="#334155">Erosion rate</text><text x="210" y="178" text-anchor="middle" font-size="10" fill="#10b981">Low (&lt;1 t/ha)</text><text x="320" y="178" text-anchor="middle" font-size="10" fill="#ef4444">High (&gt;10 t/ha)</text>
  <text x="110" y="212" text-anchor="middle" font-size="10" fill="#334155">Crop yield</text><text x="210" y="212" text-anchor="middle" font-size="10" fill="#10b981">Stable/rising</text><text x="320" y="212" text-anchor="middle" font-size="10" fill="#ef4444">Declining</text>
  <line x1="30" y1="128" x2="370" y2="128" stroke="#e2e8f0"/>
  <line x1="30" y1="160" x2="370" y2="160" stroke="#e2e8f0"/>
  <line x1="30" y1="192" x2="370" y2="192" stroke="#e2e8f0"/>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Countries Ratifying Core Human Rights Treaties (2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="45" width="42" height="175" fill="#06b6d4" rx="2"/>
  <text x="86" y="40" text-anchor="middle" font-size="9" fill="#0e7490">173</text>
  <text x="86" y="240" text-anchor="middle" font-size="8" fill="#64748b">ICCPR</text>
  <rect x="120" y="50" width="42" height="170" fill="#06b6d4" rx="2"/>
  <text x="141" y="45" text-anchor="middle" font-size="9" fill="#0e7490">171</text>
  <text x="141" y="240" text-anchor="middle" font-size="8" fill="#64748b">ICESCR</text>
  <rect x="175" y="42" width="42" height="178" fill="#06b6d4" rx="2"/>
  <text x="196" y="37" text-anchor="middle" font-size="9" fill="#0e7490">182</text>
  <text x="196" y="240" text-anchor="middle" font-size="8" fill="#64748b">CRC</text>
  <rect x="230" y="60" width="42" height="160" fill="#0ea5e9" rx="2"/>
  <text x="251" y="55" text-anchor="middle" font-size="9" fill="#0e7490">160</text>
  <text x="251" y="240" text-anchor="middle" font-size="8" fill="#64748b">CEDAW</text>
  <rect x="285" y="80" width="42" height="140" fill="#0ea5e9" rx="2"/>
  <text x="306" y="75" text-anchor="middle" font-size="9" fill="#0e7490">140</text>
  <text x="306" y="240" text-anchor="middle" font-size="8" fill="#64748b">CAT</text>
  <rect x="338" y="105" width="25" height="115" fill="#0ea5e9" rx="2"/>
  <text x="350" y="100" text-anchor="middle" font-size="9" fill="#0e7490">116</text>
  <text x="350" y="240" text-anchor="middle" font-size="8" fill="#64748b">Rome Stat.</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <marker id="arr11" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#0e7490"/>
    </marker>
  </defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Blockchain Transaction Validation Process</text>
  <rect x="20" y="45" width="80" height="34" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="60" y="67" text-anchor="middle" font-size="10" fill="#0e7490">Transaction Initiated</text>
  <path d="M100,62 L128,62" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="130" y="45" width="80" height="34" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="170" y="61" text-anchor="middle" font-size="10" fill="#0e7490">Broadcast to</text>
  <text x="170" y="75" text-anchor="middle" font-size="10" fill="#0e7490">P2P Network</text>
  <path d="M210,62 L238,62" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="240" y="45" width="80" height="34" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="280" y="61" text-anchor="middle" font-size="10" fill="#0e7490">Nodes Validate</text>
  <text x="280" y="75" text-anchor="middle" font-size="10" fill="#0e7490">Transaction</text>
  <path d="M320,62 L348,62" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="325" y="45" width="65" height="34" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="357" y="67" text-anchor="middle" font-size="10" fill="#0e7490">Consensus Reached</text>
  <path d="M357,79 L357,110" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="300" y="112" width="115" height="34" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="357" y="128" text-anchor="middle" font-size="10" fill="#0e7490">Block Added to</text>
  <text x="357" y="142" text-anchor="middle" font-size="10" fill="#0e7490">Chain</text>
  <path d="M300,129 L272,129" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="155" y="112" width="115" height="34" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="212" y="128" text-anchor="middle" font-size="10" fill="#0e7490">Record Immutable</text>
  <text x="212" y="142" text-anchor="middle" font-size="10" fill="#0e7490">&amp; Transparent</text>
  <path d="M155,129 L127,129" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr11)"/>
  <rect x="20" y="112" width="105" height="34" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="72" y="133" text-anchor="middle" font-size="10" fill="#0e7490">Transaction Complete</text>
  <text x="200" y="180" text-anchor="middle" font-size="10" fill="#64748b">No central authority controls the process</text>
  <rect x="120" y="190" width="160" height="28" fill="#f0fdf4" stroke="#10b981" stroke-width="1" rx="4"/>
  <text x="200" y="208" text-anchor="middle" font-size="10" fill="#065f46">Decentralised &amp; Trustless System</text>
</svg>`;

const test11: PTESpeakingTest = {
  id: "pte-speaking-11",
  title: "PTE Speaking — Test 11",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-11-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Aging demographics present profound challenges to public health systems, pension arrangements, and labour markets across much of the industrialised world. As fertility rates decline and life expectancy increases, the ratio of working-age adults to retired individuals is shrinking, placing growing fiscal pressure on governments. Policymakers are exploring responses including raising retirement ages, encouraging skilled immigration, and investing in automation to sustain economic productivity.",
    },
    {
      id: "ra-11-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Blockchain technology enables the creation of decentralised, tamper-resistant digital ledgers that record transactions without relying on a central authority. Each block in the chain contains a cryptographic hash of the previous block, ensuring that any alteration to historical data is immediately detectable by the network. Beyond cryptocurrency, blockchain applications are being explored in supply chain management, digital identity verification, and the execution of self-enforcing smart contracts.",
    },
    {
      id: "ra-11-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Indigenous environmental knowledge encompasses generations of accumulated observation about local ecosystems, seasonal patterns, and the behaviour of plant and animal species. Increasingly, ecologists and conservation practitioners recognise that this knowledge can complement scientific approaches to land management and biodiversity conservation. Effective collaboration requires respectful partnerships that acknowledge intellectual property rights and ensure that Indigenous communities retain authority over how their knowledge is used.",
    },
    {
      id: "ra-11-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Soil health is fundamental to global food security, yet decades of intensive agricultural practices have caused widespread degradation of topsoil across the world's croplands. The loss of organic matter, reduction in microbial diversity, and increased erosion associated with monoculture farming and excessive chemical inputs threaten the long-term productive capacity of agricultural land. Regenerative approaches including cover cropping, reduced tillage, and composting are gaining traction as means of restoring soil function.",
    },
    {
      id: "ra-11-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "International human rights law establishes a set of universal entitlements that all individuals are deemed to possess by virtue of their humanity, regardless of nationality, ethnicity, or legal status. The foundational instruments of this legal framework, including the Universal Declaration of Human Rights and the core treaty bodies of the United Nations, create obligations for states to respect, protect, and fulfil these rights within their jurisdictions and in their conduct abroad.",
    },
    {
      id: "ra-11-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The demographic shift toward older populations is already reshaping urban planning, healthcare delivery, and consumer markets in countries such as Japan, Germany, and South Korea. Cities are redesigning public spaces to accommodate mobility limitations, and architects are developing age-friendly housing that enables older residents to live independently for longer. Healthcare systems are pivoting toward chronic disease management and preventive care to address the complex needs of ageing populations more sustainably.",
    },
  ],

  repeatSentence: [
    { id: "rs-11-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The aging of the population will significantly increase demand for aged care services." },
    { id: "rs-11-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Blockchain ledgers record every transaction in a way that cannot be retroactively altered." },
    { id: "rs-11-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Indigenous communities hold detailed knowledge about local species and seasonal patterns." },
    { id: "rs-11-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Healthy soil produces more food, retains more water, and supports greater biodiversity." },
    { id: "rs-11-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The assignment requires students to engage critically with primary legal documents." },
    { id: "rs-11-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "States that ratify human rights treaties are legally bound by their provisions." },
    { id: "rs-11-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Decentralised networks do not rely on any single institution to validate transactions." },
    { id: "rs-11-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The lecture theatre will be unavailable for renovation throughout the winter semester." },
    { id: "rs-11-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Regenerative agriculture aims to restore soil carbon and improve microbial communities." },
    { id: "rs-11-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Demographic projections suggest that global population will peak before the end of this century." },
  ],

  describeImage: [
    {
      id: "di-11-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Population Aged 65+ by Region (% of total, 2023)",
      svgContent: SVG_1,
      keyPoints: [
        "Western Europe has the highest proportion of elderly citizens at 22%",
        "Japan is close behind at 20%, reflecting its ultra-aged demographic profile",
        "Sub-Saharan Africa has the youngest population with only 4% aged 65 or over",
        "Developing regions in South Asia and Sub-Saharan Africa show the lowest proportions",
      ],
    },
    {
      id: "di-11-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Blockchain Transaction Volume Growth (M/day)",
      svgContent: SVG_2,
      keyPoints: [
        "Blockchain transaction volumes were low and stable between 2017 and 2019",
        "Rapid growth began accelerating from 2020 onwards",
        "The steepest increase occurred between 2021 and 2023",
        "By 2024 daily transaction volumes reached unprecedented levels",
      ],
    },
    {
      id: "di-11-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Indigenous Land Management Practices (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Controlled burning is the most widely practised technique at 24%",
        "Rotational grazing accounts for 20% of documented Indigenous practices",
        "Seed saving and preservation represents 18% of practices recorded",
        "Water harvesting techniques are used by 16% of the communities surveyed",
      ],
    },
    {
      id: "di-11-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Soil Health Indicators Comparison",
      svgContent: SVG_4,
      keyPoints: [
        "Healthy soil contains 4–6% organic matter compared to under 1% in degraded soil",
        "Microbial biodiversity is high in healthy soil but low in degraded farmland",
        "Water retention capacity is dramatically reduced in degraded soils",
        "Crop yields are stable or rising in healthy soils but declining in degraded ones",
      ],
    },
    {
      id: "di-11-5", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Countries Ratifying Core Human Rights Treaties (2023)",
      svgContent: SVG_5,
      keyPoints: [
        "The Convention on the Rights of the Child has the most signatories at 182",
        "The ICCPR and ICESCR have similar ratification levels of around 170 countries",
        "The Rome Statute of the International Criminal Court has 116 state parties",
        "CEDAW and the Convention Against Torture have broad but not universal ratification",
      ],
    },
    {
      id: "di-11-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Blockchain Transaction Validation Process",
      svgContent: SVG_6,
      keyPoints: [
        "A transaction is initiated and broadcast to the peer-to-peer network",
        "Nodes independently validate the transaction against established rules",
        "Consensus is reached across the network before a block is added",
        "Once recorded, the block is immutable and the system remains decentralised",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-11-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Greying of Global Populations",
      lectureText: "Demographic aging is now one of the defining social transformations of our era. In 1950, the median age of the global population was approximately 24 years. By 2023 it had risen to 31 years, and projections suggest it could reach 42 years by 2100. Japan presents the most extreme case, with nearly 30 percent of its population already aged 65 or older and a total fertility rate well below the replacement level of 2.1. The economic consequences are substantial: pension systems designed for populations with many young workers supporting relatively few retirees are coming under severe strain. Some economists argue that immigration is the most practical response, as it can quickly replenish the working-age population. Others advocate investment in robotics and artificial intelligence to compensate for labour shortfalls. Ultimately, most analysts agree that no single solution will suffice and that governments will need to combine multiple strategies to manage the social and fiscal implications of aging demographics.",
      keyPoints: [
        "Global median age has risen from 24 years in 1950 to 31 years in 2023",
        "Japan has the most aged population with nearly 30% over 65",
        "Pension systems face strain as the ratio of workers to retirees falls",
        "Immigration is proposed as a rapid response to labour force decline",
        "A combination of strategies including automation will likely be necessary",
      ],
    },
    {
      id: "rl-11-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Indigenous Fire Management and Ecology",
      lectureText: "For tens of thousands of years, Indigenous peoples across Australia, North America, and sub-Saharan Africa have used controlled or prescribed burning as a sophisticated tool for managing landscapes. These burns are carefully timed and spatially planned to reduce accumulated fuel loads, promote the growth of food plants, create habitat mosaics that benefit wildlife, and facilitate movement through the landscape. After decades during which colonial land management suppressed such practices, there is now a growing recognition among ecologists and forest managers that Indigenous burning knowledge is not merely a cultural tradition but an evidence-based ecological intervention. Research has demonstrated that landscapes managed with regular low-intensity burns tend to have greater plant species diversity and lower risk of catastrophic uncontrolled wildfire. In Australia, collaboration between Indigenous rangers and government agencies has resulted in carbon credit schemes that compensate communities for fire management services, creating both environmental and economic benefits.",
      keyPoints: [
        "Indigenous peoples have practised controlled burning for tens of thousands of years",
        "Burns reduce fuel loads and promote plant and animal diversity",
        "Colonial land management suppressed Indigenous burning traditions",
        "Ecologists now recognise Indigenous burning as evidence-based land management",
        "Australia's carbon credit schemes compensate Indigenous rangers for fire management",
      ],
    },
    {
      id: "rl-11-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "International Human Rights Enforcement",
      lectureText: "The international human rights system established after the Second World War rests on a framework of treaties, monitoring bodies, and regional courts that collectively seek to hold states accountable for protecting the rights of individuals. The nine core United Nations human rights treaties each have a committee of independent experts that reviews periodic reports submitted by state parties and can in some cases examine individual complaints. However, the system's central weakness is enforcement: there is no global police force, and treaty bodies can only issue recommendations, not binding judgements. Regional human rights courts, such as the European Court of Human Rights and the Inter-American Court of Human Rights, have stronger enforcement powers, including the ability to award damages and require states to change their laws. The International Criminal Court can prosecute individuals, including heads of state, for genocide, war crimes, and crimes against humanity, but its jurisdiction depends on state cooperation. Critics argue that powerful states routinely evade accountability, while proponents contend that the system has nonetheless contributed to significant improvements in human rights norms and domestic legal standards worldwide.",
      keyPoints: [
        "The UN human rights system relies on nine core treaties and expert monitoring committees",
        "Treaty bodies can issue recommendations but lack binding enforcement powers",
        "Regional courts such as the ECHR have stronger enforcement including damage awards",
        "The International Criminal Court can prosecute individuals for atrocity crimes",
        "Debate continues about whether powerful states are adequately held accountable",
      ],
    },
  ],

  answerShort: [
    { id: "as-11-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the statistical measure representing the middle value of a population's age distribution?", expectedAnswer: "Median age" },
    { id: "as-11-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the cryptographic technique that links blocks in a blockchain?", expectedAnswer: "Hashing" },
    { id: "as-11-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes a blockchain system that operates without a central controlling authority?", expectedAnswer: "Decentralised" },
    { id: "as-11-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What layer of earth provides the nutrients in which crops are grown?", expectedAnswer: "Topsoil" },
    { id: "as-11-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which United Nations declaration of 1948 is considered the foundation of modern human rights law?", expectedAnswer: "Universal Declaration of Human Rights" },
    { id: "as-11-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the minimum total fertility rate required for a population to replace itself?", expectedAnswer: "2.1" },
    { id: "as-11-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What agricultural practice involves planting vegetation between main crops to protect and enrich the soil?", expectedAnswer: "Cover cropping" },
    { id: "as-11-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What international court can prosecute individuals for genocide and war crimes?", expectedAnswer: "International Criminal Court" },
    { id: "as-11-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the process by which soil particles are carried away by wind or water?", expectedAnswer: "Erosion" },
    { id: "as-11-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which Asian country has the world's most rapidly ageing population?", expectedAnswer: "Japan" },
  ],
};

export default test11;
