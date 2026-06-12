import type { PTESpeakingTest } from "./pte-speaking-types";

const BAR_CHART_1_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Smartphone Shipments by Region (millions)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="90" width="45" height="130" fill="#06b6d4" rx="2"/>
  <rect x="130" y="60" width="45" height="160" fill="#06b6d4" rx="2"/>
  <rect x="195" y="110" width="45" height="110" fill="#06b6d4" rx="2"/>
  <rect x="260" y="140" width="45" height="80" fill="#06b6d4" rx="2"/>
  <rect x="325" y="165" width="30" height="55" fill="#06b6d4" rx="2"/>
  <text x="87" y="85" text-anchor="middle" font-size="10" fill="#0e7490">380</text>
  <text x="152" y="55" text-anchor="middle" font-size="10" fill="#0e7490">470</text>
  <text x="217" y="105" text-anchor="middle" font-size="10" fill="#0e7490">320</text>
  <text x="282" y="135" text-anchor="middle" font-size="10" fill="#0e7490">230</text>
  <text x="340" y="160" text-anchor="middle" font-size="10" fill="#0e7490">160</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">China</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">Americas</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">Africa</text>
</svg>`;

const LINE_GRAPH_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">E-commerce Sales Growth (% of total retail) 2015–2023</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,205 100,198 150,188 200,170 250,130 300,90 350,55 370,45" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="205" r="4" fill="#06b6d4"/>
  <circle cx="100" cy="198" r="4" fill="#06b6d4"/>
  <circle cx="150" cy="188" r="4" fill="#06b6d4"/>
  <circle cx="200" cy="170" r="4" fill="#06b6d4"/>
  <circle cx="250" cy="130" r="4" fill="#06b6d4"/>
  <circle cx="300" cy="90" r="4" fill="#06b6d4"/>
  <circle cx="350" cy="55" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="45" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">2015</text>
  <text x="150" y="240" text-anchor="middle" font-size="9" fill="#64748b">2017</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">2019</text>
  <text x="350" y="240" text-anchor="middle" font-size="9" fill="#64748b">2023</text>
  <text x="42" y="208" text-anchor="end" font-size="9" fill="#64748b">7%</text>
  <text x="42" y="133" text-anchor="end" font-size="9" fill="#64748b">19%</text>
  <text x="42" y="58" text-anchor="end" font-size="9" fill="#64748b">31%</text>
</svg>`;

const PIE_CHART_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Household Expenditure Distribution</text>
  <path d="M130,130 L130,50 A80,80 0 0,1 198,83 Z" fill="#06b6d4"/>
  <path d="M130,130 L198,83 A80,80 0 0,1 205,172 Z" fill="#0ea5e9"/>
  <path d="M130,130 L205,172 A80,80 0 0,1 130,210 Z" fill="#7c3aed"/>
  <path d="M130,130 L130,210 A80,80 0 0,1 60,172 Z" fill="#f59e0b"/>
  <path d="M130,130 L60,172 A80,80 0 0,1 62,88 Z" fill="#10b981"/>
  <path d="M130,130 L62,88 A80,80 0 0,1 130,50 Z" fill="#ef4444"/>
  <rect x="230" y="45" width="12" height="12" fill="#06b6d4"/><text x="248" y="56" font-size="11" fill="#334155">Housing 28%</text>
  <rect x="230" y="68" width="12" height="12" fill="#0ea5e9"/><text x="248" y="79" font-size="11" fill="#334155">Food 22%</text>
  <rect x="230" y="91" width="12" height="12" fill="#7c3aed"/><text x="248" y="102" font-size="11" fill="#334155">Transport 17%</text>
  <rect x="230" y="114" width="12" height="12" fill="#f59e0b"/><text x="248" y="125" font-size="11" fill="#334155">Healthcare 13%</text>
  <rect x="230" y="137" width="12" height="12" fill="#10b981"/><text x="248" y="148" font-size="11" fill="#334155">Education 12%</text>
  <rect x="230" y="160" width="12" height="12" fill="#ef4444"/><text x="248" y="171" font-size="11" fill="#334155">Other 8%</text>
</svg>`;

const PROCESS_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">How Blockchain Records a Transaction</text>
  <rect x="10" y="35" width="72" height="38" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="46" y="52" text-anchor="middle" font-size="10" fill="#0e7490">User</text>
  <text x="46" y="65" text-anchor="middle" font-size="10" fill="#0e7490">Initiates Tx</text>
  <path d="M82,54 L105,54" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="106" y="35" width="72" height="38" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="142" y="52" text-anchor="middle" font-size="10" fill="#0e7490">Block</text>
  <text x="142" y="65" text-anchor="middle" font-size="10" fill="#0e7490">Created</text>
  <path d="M178,54 L201,54" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="202" y="35" width="72" height="38" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="238" y="52" text-anchor="middle" font-size="10" fill="#0e7490">Network</text>
  <text x="238" y="65" text-anchor="middle" font-size="10" fill="#0e7490">Validates</text>
  <path d="M274,54 L297,54" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="298" y="35" width="82" height="38" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="339" y="52" text-anchor="middle" font-size="10" fill="#0e7490">Block</text>
  <text x="339" y="65" text-anchor="middle" font-size="10" fill="#0e7490">Added to Chain</text>
  <path d="M238,73 L238,105" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="162" y="106" width="152" height="38" fill="#dcfce7" stroke="#10b981" rx="4"/>
  <text x="238" y="123" text-anchor="middle" font-size="10" fill="#166534">Transaction</text>
  <text x="238" y="136" text-anchor="middle" font-size="10" fill="#166534">Permanently Recorded</text>
  <rect x="50" y="170" width="300" height="70" fill="#f8fafc" stroke="#e2e8f0" rx="4"/>
  <text x="200" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Key Properties</text>
  <text x="80" y="210" font-size="10" fill="#475569">• Decentralised</text>
  <text x="80" y="225" font-size="10" fill="#475569">• Immutable records</text>
  <text x="230" y="210" font-size="10" fill="#475569">• Transparent</text>
  <text x="230" y="225" font-size="10" fill="#475569">• Cryptographically secured</text>
</svg>`;

const TABLE_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Top Economies: GDP Growth Rate (%)</text>
  <rect x="30" y="32" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="32" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="90" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Country</text>
  <text x="190" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2021</text>
  <text x="265" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2022</text>
  <text x="340" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2023</text>
  <line x1="30" y1="60" x2="370" y2="60" stroke="#e2e8f0"/>
  <line x1="145" y1="32" x2="145" y2="242" stroke="#e2e8f0"/>
  <line x1="230" y1="32" x2="230" y2="242" stroke="#e2e8f0"/>
  <line x1="305" y1="32" x2="305" y2="242" stroke="#e2e8f0"/>
  <text x="90" y="82" text-anchor="middle" font-size="11" fill="#334155">USA</text><text x="190" y="82" text-anchor="middle" font-size="11" fill="#334155">5.7%</text><text x="265" y="82" text-anchor="middle" font-size="11" fill="#334155">1.9%</text><text x="340" y="82" text-anchor="middle" font-size="11" fill="#10b981">2.5%</text>
  <line x1="30" y1="92" x2="370" y2="92" stroke="#f1f5f9"/>
  <text x="90" y="112" text-anchor="middle" font-size="11" fill="#334155">China</text><text x="190" y="112" text-anchor="middle" font-size="11" fill="#334155">8.1%</text><text x="265" y="112" text-anchor="middle" font-size="11" fill="#334155">3.0%</text><text x="340" y="112" text-anchor="middle" font-size="11" fill="#ef4444">5.2%</text>
  <line x1="30" y1="122" x2="370" y2="122" stroke="#f1f5f9"/>
  <text x="90" y="142" text-anchor="middle" font-size="11" fill="#334155">Germany</text><text x="190" y="142" text-anchor="middle" font-size="11" fill="#334155">2.6%</text><text x="265" y="142" text-anchor="middle" font-size="11" fill="#334155">1.8%</text><text x="340" y="142" text-anchor="middle" font-size="11" fill="#ef4444">-0.3%</text>
  <line x1="30" y1="152" x2="370" y2="152" stroke="#f1f5f9"/>
  <text x="90" y="172" text-anchor="middle" font-size="11" fill="#334155">India</text><text x="190" y="172" text-anchor="middle" font-size="11" fill="#334155">8.9%</text><text x="265" y="172" text-anchor="middle" font-size="11" fill="#334155">7.0%</text><text x="340" y="172" text-anchor="middle" font-size="11" fill="#10b981">6.3%</text>
  <line x1="30" y1="182" x2="370" y2="182" stroke="#f1f5f9"/>
  <text x="90" y="202" text-anchor="middle" font-size="11" fill="#334155">Japan</text><text x="190" y="202" text-anchor="middle" font-size="11" fill="#334155">2.1%</text><text x="265" y="202" text-anchor="middle" font-size="11" fill="#334155">1.0%</text><text x="340" y="202" text-anchor="middle" font-size="11" fill="#10b981">1.9%</text>
  <line x1="30" y1="212" x2="370" y2="212" stroke="#f1f5f9"/>
  <text x="90" y="232" text-anchor="middle" font-size="11" fill="#334155">Brazil</text><text x="190" y="232" text-anchor="middle" font-size="11" fill="#334155">4.6%</text><text x="265" y="232" text-anchor="middle" font-size="11" fill="#334155">2.9%</text><text x="340" y="232" text-anchor="middle" font-size="11" fill="#10b981">2.9%</text>
</svg>`;

const BAR_CHART_2_SVG = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Species Extinction Rate by Habitat Type (per decade)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="70" width="50" height="150" fill="#ef4444" rx="2"/>
  <rect x="145" y="95" width="50" height="125" fill="#f59e0b" rx="2"/>
  <rect x="225" y="120" width="50" height="100" fill="#10b981" rx="2"/>
  <rect x="305" y="155" width="50" height="65" fill="#06b6d4" rx="2"/>
  <text x="90" y="65" text-anchor="middle" font-size="10" fill="#b91c1c">148</text>
  <text x="170" y="90" text-anchor="middle" font-size="10" fill="#b45309">120</text>
  <text x="250" y="115" text-anchor="middle" font-size="10" fill="#166534">94</text>
  <text x="330" y="150" text-anchor="middle" font-size="10" fill="#0e7490">62</text>
  <text x="90" y="240" text-anchor="middle" font-size="9" fill="#64748b">Tropical</text>
  <text x="170" y="240" text-anchor="middle" font-size="9" fill="#64748b">Wetlands</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">Grassland</text>
  <text x="330" y="240" text-anchor="middle" font-size="9" fill="#64748b">Coastal</text>
</svg>`;

const test2: PTESpeakingTest = {
  id: "pte-speaking-2",
  title: "PTE Speaking — Test 2",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-2-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The proliferation of social media platforms over the past two decades has fundamentally altered the way people consume and share information. While these technologies have democratised communication and enabled global connectivity, they have also contributed to the spread of misinformation and raised serious concerns about privacy, mental health, and the concentration of power in a handful of large technology corporations.",
    },
    {
      id: "ra-2-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Cryptocurrency markets have grown exponentially since the launch of Bitcoin in 2009, attracting both institutional investors and retail traders. Proponents argue that decentralised digital currencies offer a more transparent and equitable financial system. Critics, however, highlight extreme price volatility, energy consumption concerns, and the potential for these platforms to facilitate money laundering and other illicit activities.",
    },
    {
      id: "ra-2-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The CRISPR-Cas9 gene editing technology has opened extraordinary possibilities in medicine and agriculture. By allowing scientists to precisely modify DNA sequences, it offers potential cures for genetic diseases such as sickle cell anaemia and cystic fibrosis. However, ethical questions around germline editing — making heritable changes to human embryos — continue to generate intense debate among scientists, ethicists, and policymakers.",
    },
    {
      id: "ra-2-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Plastic pollution has become one of the most pressing environmental challenges of the modern era. An estimated eight million tonnes of plastic enter the world's oceans each year, threatening marine wildlife and contaminating food chains. Microplastics — tiny fragments produced as larger plastic items break down — have now been detected in human blood, breast milk, and lung tissue, raising significant public health concerns.",
    },
    {
      id: "ra-2-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The gig economy has transformed the labour market, providing flexibility and income opportunities for millions of workers through platforms such as ride-sharing and food delivery applications. However, this model of employment has been criticised for denying workers access to traditional benefits such as sick pay, pensions, and job security. Governments around the world are grappling with how to regulate this rapidly evolving sector effectively.",
    },
    {
      id: "ra-2-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Antibiotic resistance is an escalating global health crisis, driven largely by the overuse and misuse of antibiotics in both human medicine and animal agriculture. When bacteria evolve resistance to existing drugs, infections that were once easily treated become life-threatening. The World Health Organization has identified antimicrobial resistance as one of the biggest threats to global health, requiring urgent international cooperation to address.",
    },
  ],

  repeatSentence: [
    { id: "rs-2-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The seminar on digital ethics has been rescheduled to Thursday afternoon." },
    { id: "rs-2-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Economic growth does not always translate into improved living standards for all citizens." },
    { id: "rs-2-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Please ensure your student identification card is visible during the examination." },
    { id: "rs-2-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The findings of the study challenge several widely held assumptions in this field." },
    { id: "rs-2-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "All group project submissions must include a bibliography of at least ten sources." },
    { id: "rs-2-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Technology companies are under increasing pressure to improve data security measures." },
    { id: "rs-2-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The visiting researcher will deliver a keynote address at the annual symposium." },
    { id: "rs-2-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students who require extensions must apply in writing before the original deadline." },
    { id: "rs-2-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The committee voted unanimously in favour of adopting the revised environmental policy." },
    { id: "rs-2-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Digital literacy skills are becoming essential in virtually every professional sector." },
  ],

  describeImage: [
    {
      id: "di-2-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Smartphone Shipments by Region (millions)",
      svgContent: BAR_CHART_1_SVG,
      keyPoints: ["China had the highest shipments at 470 million", "Asia (excluding China) was second at 380 million", "Africa had the lowest shipments at 160 million", "Overall demand is driven by Asian markets"],
    },
    {
      id: "di-2-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "E-commerce Sales Growth (% of total retail) 2015–2023",
      svgContent: LINE_GRAPH_SVG,
      keyPoints: ["E-commerce grew from 7% to over 31% of retail sales", "Growth accelerated sharply after 2019", "The trend shows consistent upward momentum", "Digital retail now represents nearly a third of all sales"],
    },
    {
      id: "di-2-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Household Expenditure Distribution",
      svgContent: PIE_CHART_SVG,
      keyPoints: ["Housing is the largest expense at 28%", "Food and transport together account for 39%", "Education represents 12% of spending", "Other expenses make up only 8%"],
    },
    {
      id: "di-2-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "How Blockchain Records a Transaction",
      svgContent: PROCESS_SVG,
      keyPoints: ["User initiates a transaction which creates a block", "The network validates the block through consensus", "Validated block is permanently added to the chain", "Key properties include decentralisation and immutability"],
    },
    {
      id: "di-2-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Top Economies: GDP Growth Rate (%)",
      svgContent: TABLE_SVG,
      keyPoints: ["India consistently had the highest growth rates", "Germany contracted in 2023 with -0.3% growth", "China saw a sharp slowdown from 8.1% in 2021 to 3.0% in 2022", "Most economies showed recovery or stabilisation in 2023"],
    },
    {
      id: "di-2-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Species Extinction Rate by Habitat Type (per decade)",
      svgContent: BAR_CHART_2_SVG,
      keyPoints: ["Tropical habitats had the highest extinction rate at 148 species per decade", "Coastal habitats had the lowest rate at 62 species", "All habitat types face significant biodiversity loss", "Tropical and wetland habitats are most at risk"],
    },
  ],

  retellLecture: [
    {
      id: "rl-2-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Digital Divide",
      lectureText: "Despite the extraordinary growth of the internet, access to digital technology remains profoundly unequal. In high-income countries, more than 90 percent of the population uses the internet regularly. In the world's least developed nations, that figure can fall below 20 percent. This disparity — known as the digital divide — affects not only access to information, but also access to education, healthcare, financial services, and economic opportunity. The divide exists not just between countries, but within them: rural communities, the elderly, and low-income households are consistently underrepresented online. Bridging this gap requires investment in infrastructure such as broadband networks, as well as digital literacy training and policies to make devices and data affordable for all segments of society.",
      keyPoints: ["Internet access is highly unequal globally", "Developed nations have 90%+ internet use; least developed below 20%", "The digital divide affects education, health, and economy", "Gap exists within countries too — rural, elderly, low-income", "Solutions require infrastructure, literacy training, and affordability policies"],
    },
    {
      id: "rl-2-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Behavioural Economics and Consumer Choice",
      lectureText: "Traditional economic models assumed that consumers are rational actors who make decisions based on careful analysis of available information. Behavioural economics challenges this assumption by showing that human decision-making is heavily influenced by psychological factors, social context, and the way choices are presented. For example, research shows that when healthy options are placed at eye level in cafeterias, consumption of those items increases significantly without any change in price or restriction of other choices. This is known as 'choice architecture'. Retailers have long exploited similar principles — placing expensive items at eye level, using odd pricing like £9.99 instead of £10, and offering free trials knowing that many consumers will default to continuing subscriptions out of inertia.",
      keyPoints: ["Traditional economics assumes rational decision-making", "Behavioural economics shows psychological factors dominate", "Choice architecture: presentation of options influences decisions", "Eye-level placement in cafeterias increases healthy food consumption", "Retailers exploit cognitive biases through pricing and layout"],
    },
    {
      id: "rl-2-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Genetic Diversity and Conservation",
      lectureText: "Genetic diversity — the variety of genes within a species — is a fundamental component of biological health. Species with high genetic diversity are better equipped to adapt to environmental changes, resist disease, and survive threats such as habitat loss and climate change. When populations become small and isolated, inbreeding reduces genetic variation, making species more vulnerable to extinction. This is known as the genetic bottleneck effect. Conservation biologists now recognise that maintaining genetic diversity is just as important as maintaining population numbers. Strategies such as wildlife corridors, which connect fragmented habitats to allow animal movement, and captive breeding programmes that carefully manage the genetics of endangered species, are increasingly central to conservation planning.",
      keyPoints: ["Genetic diversity allows species to adapt and resist disease", "Small, isolated populations suffer inbreeding and reduced variation", "The genetic bottleneck effect increases extinction risk", "Conservation must protect genetic diversity, not just population numbers", "Wildlife corridors and captive breeding help maintain genetic health"],
    },
  ],

  answerShort: [
    { id: "as-2-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the study of the Earth's physical features and atmosphere?", expectedAnswer: "Geography" },
    { id: "as-2-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a business owned and run equally by its members?", expectedAnswer: "Cooperative" },
    { id: "as-2-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for the process by which a caterpillar becomes a butterfly?", expectedAnswer: "Metamorphosis" },
    { id: "as-2-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the speed of light approximately equal to in kilometres per second?", expectedAnswer: "300,000" },
    { id: "as-2-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which gas do plants absorb from the atmosphere during photosynthesis?", expectedAnswer: "Carbon dioxide" },
    { id: "as-2-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the branch of medicine that deals with children's health?", expectedAnswer: "Paediatrics" },
    { id: "as-2-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the world's longest river?", expectedAnswer: "Nile" },
    { id: "as-2-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a market with only one seller controlling the supply?", expectedAnswer: "Monopoly" },
    { id: "as-2-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the conversion of sound waves into electrical signals in a microphone?", expectedAnswer: "Transduction" },
    { id: "as-2-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which continent has the largest number of countries?", expectedAnswer: "Africa" },
  ],
};

export default test2;
