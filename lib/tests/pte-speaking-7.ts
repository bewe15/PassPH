import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_7_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Gene Therapy Clinical Trials by Region</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="75" width="50" height="145" fill="#06b6d4" rx="2"/>
  <rect x="145" y="95" width="50" height="125" fill="#06b6d4" rx="2"/>
  <rect x="225" y="120" width="50" height="100" fill="#06b6d4" rx="2"/>
  <rect x="305" y="150" width="50" height="70" fill="#06b6d4" rx="2"/>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">N. America</text>
  <text x="170" y="240" text-anchor="middle" font-size="10" fill="#64748b">Europe</text>
  <text x="250" y="240" text-anchor="middle" font-size="10" fill="#64748b">Asia</text>
  <text x="330" y="240" text-anchor="middle" font-size="10" fill="#64748b">Other</text>
  <text x="90" y="70" text-anchor="middle" font-size="10" fill="#0e7490">145</text>
  <text x="170" y="90" text-anchor="middle" font-size="10" fill="#0e7490">125</text>
  <text x="250" y="115" text-anchor="middle" font-size="10" fill="#0e7490">100</text>
  <text x="330" y="145" text-anchor="middle" font-size="10" fill="#0e7490">70</text>
</svg>`;

const SVG_7_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Space Mission Launches Per Decade (1960–2020)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,200 114,150 178,110 242,130 306,155 370,85" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="200" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="150" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="110" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="130" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="155" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="85" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">1960s</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">1970s</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">1980s</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">1990s</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2000s</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2010s</text>
</svg>`;

const SVG_7_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Healthcare Expenditure by Category (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 220,62 Z" fill="#06b6d4"/>
  <path d="M150,130 L220,62 A80,80 0 0,1 226,196 Z" fill="#0ea5e9"/>
  <path d="M150,130 L226,196 A80,80 0 0,1 108,204 Z" fill="#7c3aed"/>
  <path d="M150,130 L108,204 A80,80 0 0,1 70,90 Z" fill="#f59e0b"/>
  <path d="M150,130 L70,90 A80,80 0 0,1 150,50 Z" fill="#10b981"/>
  <rect x="250" y="45" width="12" height="12" fill="#06b6d4"/><text x="268" y="56" font-size="11" fill="#334155">Hospitals 30%</text>
  <rect x="250" y="70" width="12" height="12" fill="#0ea5e9"/><text x="268" y="81" font-size="11" fill="#334155">Pharmaceuticals 28%</text>
  <rect x="250" y="95" width="12" height="12" fill="#7c3aed"/><text x="268" y="106" font-size="11" fill="#334155">Primary Care 20%</text>
  <rect x="250" y="120" width="12" height="12" fill="#f59e0b"/><text x="268" y="131" font-size="11" fill="#334155">Mental Health 12%</text>
  <rect x="250" y="145" width="12" height="12" fill="#10b981"/><text x="268" y="156" font-size="11" fill="#334155">Other 10%</text>
</svg>`;

const SVG_7_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr7" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa"/></marker></defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">DNA Replication Process</text>
  <rect x="30" y="40" width="100" height="36" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="80" y="63" text-anchor="middle" font-size="11" fill="#0e7490">Double Helix</text>
  <line x1="130" y1="58" x2="158" y2="58" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="160" y="40" width="100" height="36" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="210" y="63" text-anchor="middle" font-size="11" fill="#0e7490">Strand Unwinding</text>
  <line x1="260" y1="58" x2="288" y2="58" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="290" y="40" width="90" height="36" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="335" y="57" text-anchor="middle" font-size="11" fill="#0e7490">Template</text>
  <text x="335" y="71" text-anchor="middle" font-size="11" fill="#0e7490">Strand</text>
  <line x1="335" y1="76" x2="335" y2="104" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="285" y="106" width="100" height="36" rx="6" fill="#bfdbfe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="335" y="129" text-anchor="middle" font-size="11" fill="#0e7490">Base Pairing</text>
  <line x1="285" y1="124" x2="257" y2="124" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="155" y="106" width="100" height="36" rx="6" fill="#bfdbfe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="205" y="129" text-anchor="middle" font-size="11" fill="#0e7490">Polymerase</text>
  <line x1="155" y1="124" x2="127" y2="124" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="25" y="106" width="100" height="36" rx="6" fill="#bfdbfe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="75" y="129" text-anchor="middle" font-size="11" fill="#0e7490">New Strand</text>
  <line x1="75" y1="142" x2="75" y2="170" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr7)"/>
  <rect x="25" y="172" width="330" height="36" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="190" y="195" text-anchor="middle" font-size="11" fill="#065f46">Two Identical DNA Molecules Produced</text>
</svg>`;

const SVG_7_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Top Countries by Net Migration Rate (per 1,000)</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="105" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Country</text>
  <text x="230" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Rate</text>
  <text x="330" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Trend</text>
  <line x1="170" y1="35" x2="170" y2="245" stroke="#e2e8f0"/>
  <line x1="290" y1="35" x2="290" y2="245" stroke="#e2e8f0"/>
  <rect x="30" y="63" width="340" height="28" fill="#f0fdf4"/>
  <text x="105" y="82" text-anchor="middle" font-size="11" fill="#334155">Luxembourg</text><text x="230" y="82" text-anchor="middle" font-size="11" fill="#334155">+19.2</text><text x="330" y="82" text-anchor="middle" font-size="11" fill="#10b981">Rising</text>
  <rect x="30" y="91" width="340" height="28" fill="white"/>
  <text x="105" y="110" text-anchor="middle" font-size="11" fill="#334155">Singapore</text><text x="230" y="110" text-anchor="middle" font-size="11" fill="#334155">+15.4</text><text x="330" y="110" text-anchor="middle" font-size="11" fill="#10b981">Rising</text>
  <rect x="30" y="119" width="340" height="28" fill="#f0fdf4"/>
  <text x="105" y="138" text-anchor="middle" font-size="11" fill="#334155">Qatar</text><text x="230" y="138" text-anchor="middle" font-size="11" fill="#334155">+14.8</text><text x="330" y="138" text-anchor="middle" font-size="11" fill="#f59e0b">Stable</text>
  <rect x="30" y="147" width="340" height="28" fill="white"/>
  <text x="105" y="166" text-anchor="middle" font-size="11" fill="#334155">Australia</text><text x="230" y="166" text-anchor="middle" font-size="11" fill="#334155">+6.1</text><text x="330" y="166" text-anchor="middle" font-size="11" fill="#10b981">Rising</text>
  <rect x="30" y="175" width="340" height="28" fill="#f0fdf4"/>
  <text x="105" y="194" text-anchor="middle" font-size="11" fill="#334155">Germany</text><text x="230" y="194" text-anchor="middle" font-size="11" fill="#334155">+4.7</text><text x="330" y="194" text-anchor="middle" font-size="11" fill="#f59e0b">Stable</text>
  <rect x="30" y="203" width="340" height="28" fill="white"/>
  <text x="105" y="222" text-anchor="middle" font-size="11" fill="#334155">Syria</text><text x="230" y="222" text-anchor="middle" font-size="11" fill="#334155">-22.1</text><text x="330" y="222" text-anchor="middle" font-size="11" fill="#ef4444">Falling</text>
</svg>`;

const SVG_7_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Social Media Daily Active Users (millions)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="55" width="40" height="165" fill="#06b6d4" rx="2"/>
  <rect x="120" y="80" width="40" height="140" fill="#0ea5e9" rx="2"/>
  <rect x="180" y="100" width="40" height="120" fill="#7c3aed" rx="2"/>
  <rect x="240" y="130" width="40" height="90" fill="#f59e0b" rx="2"/>
  <rect x="300" y="150" width="40" height="70" fill="#10b981" rx="2"/>
  <text x="80" y="50" text-anchor="middle" font-size="10" fill="#0e7490">2,040</text>
  <text x="140" y="75" text-anchor="middle" font-size="10" fill="#0e7490">1,700</text>
  <text x="200" y="95" text-anchor="middle" font-size="10" fill="#0e7490">1,450</text>
  <text x="260" y="125" text-anchor="middle" font-size="10" fill="#0e7490">1,100</text>
  <text x="320" y="145" text-anchor="middle" font-size="10" fill="#0e7490">900</text>
  <text x="80" y="240" text-anchor="middle" font-size="9" fill="#64748b">Facebook</text>
  <text x="140" y="240" text-anchor="middle" font-size="9" fill="#64748b">YouTube</text>
  <text x="200" y="240" text-anchor="middle" font-size="9" fill="#64748b">WhatsApp</text>
  <text x="260" y="240" text-anchor="middle" font-size="9" fill="#64748b">Instagram</text>
  <text x="320" y="240" text-anchor="middle" font-size="9" fill="#64748b">TikTok</text>
</svg>`;

const test7: PTESpeakingTest = {
  id: "pte-speaking-7",
  title: "PTE Speaking — Test 7",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-7-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Advances in genetic sequencing have transformed our understanding of hereditary disease. Scientists can now analyse an individual's entire genome within hours, identifying mutations that may predispose a person to conditions such as cancer or heart disease. This information enables earlier intervention and more personalised treatment strategies, though it also raises important ethical questions about privacy, consent, and genetic discrimination.",
    },
    {
      id: "ra-7-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The commercialisation of space exploration marks a significant shift from government-led missions to private enterprise. Companies such as SpaceX and Blue Origin have dramatically reduced the cost of reaching orbit by developing reusable rocket technology. This has opened the door to satellite deployment, space tourism, and ambitious long-term plans for lunar bases and crewed missions to Mars.",
    },
    {
      id: "ra-7-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Healthcare expenditure continues to rise in most developed countries, driven by ageing populations, advances in medical technology, and the growing burden of chronic disease. Policymakers are under pressure to balance the need for high-quality care with the fiscal constraints of public health systems. Models that emphasise prevention, early intervention, and integrated care are increasingly seen as more sustainable long-term approaches.",
    },
    {
      id: "ra-7-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "International migration reshapes economies, cultures, and political landscapes. Migrants often fill critical labour market gaps in destination countries while sending remittances that support families in their countries of origin. However, large-scale population movements can also generate social tensions and political backlash, prompting governments to adopt increasingly restrictive border policies despite the economic benefits of migration.",
    },
    {
      id: "ra-7-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Digital media has fundamentally altered how people consume information, communicate, and form opinions. Traditional news organisations have struggled to adapt their business models as audiences migrate to online platforms and social media. The rapid spread of misinformation through digital channels has become a serious concern, prompting calls for greater regulation of online content and stronger investment in media literacy education.",
    },
    {
      id: "ra-7-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "CRISPR-Cas9 technology has given scientists an unprecedented ability to edit the DNA of living organisms with remarkable precision. Originally developed as a bacterial immune mechanism, it has been adapted to correct genetic defects, develop disease-resistant crops, and even modify entire populations of wild species. While the potential benefits are enormous, the technology's capacity to make heritable changes to human embryos has provoked significant ethical debate.",
    },
  ],

  repeatSentence: [
    { id: "rs-7-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The seminar on genetic engineering will take place in the science building." },
    { id: "rs-7-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students are encouraged to review the assigned readings before each lecture." },
    { id: "rs-7-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The spacecraft successfully completed its orbit around the moon last Thursday." },
    { id: "rs-7-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Healthcare costs have risen sharply in most high-income countries over the past decade." },
    { id: "rs-7-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Migration patterns are influenced by economic conditions and political instability." },
    { id: "rs-7-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor will hold additional office hours before the end-of-term examination." },
    { id: "rs-7-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Social media platforms have reshaped how people access and share information." },
    { id: "rs-7-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "DNA sequencing has become significantly cheaper and faster over recent years." },
    { id: "rs-7-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The research team published its findings in a leading peer-reviewed journal." },
    { id: "rs-7-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Private investment in space technology has accelerated considerably since 2010." },
  ],

  describeImage: [
    {
      id: "di-7-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Gene Therapy Clinical Trials by Region",
      svgContent: SVG_7_1,
      keyPoints: ["North America leads with 145 trials", "Europe is second with 125 trials", "Asia accounts for 100 trials", "Other regions have significantly fewer trials"],
    },
    {
      id: "di-7-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Space Mission Launches Per Decade (1960–2020)",
      svgContent: SVG_7_2,
      keyPoints: ["Launches peaked in the 1980s", "A decline occurred in the 1990s and 2000s", "A strong recovery is visible in the 2010s", "Overall trend shows renewed interest in space"],
    },
    {
      id: "di-7-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Healthcare Expenditure by Category (%)",
      svgContent: SVG_7_3,
      keyPoints: ["Hospitals account for the largest share at 30%", "Pharmaceuticals represent 28% of spending", "Primary care receives 20% of expenditure", "Mental health receives only 12% of the budget"],
    },
    {
      id: "di-7-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "DNA Replication Process",
      svgContent: SVG_7_4,
      keyPoints: ["The double helix unwinds to expose template strands", "DNA polymerase adds complementary bases", "New strands are synthesised in parallel", "The result is two identical DNA molecules"],
    },
    {
      id: "di-7-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Top Countries by Net Migration Rate (per 1,000)",
      svgContent: SVG_7_5,
      keyPoints: ["Luxembourg has the highest net migration rate", "Syria has a strongly negative rate due to conflict", "Singapore and Qatar also attract large numbers", "Australia and Germany show moderate positive rates"],
    },
    {
      id: "di-7-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Social Media Daily Active Users (millions)",
      svgContent: SVG_7_6,
      keyPoints: ["Facebook has the most daily active users at 2,040 million", "YouTube and WhatsApp are second and third", "TikTok is the newest but already has 900 million users", "All platforms show massive global scale"],
    },
  ],

  retellLecture: [
    {
      id: "rl-7-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Human Genome Project and Its Legacy",
      lectureText: "The Human Genome Project, completed in 2003, was one of the most ambitious scientific endeavours in history. It involved thousands of researchers from twenty countries working over thirteen years to map all three billion base pairs of human DNA. The project's findings have been transformative. They revealed that humans share around 99.9 percent of their genetic code, challenging traditional notions of racial difference. The data has enabled the identification of thousands of genetic variants linked to disease, accelerating drug discovery and personalised medicine. Today, whole genome sequencing costs less than five hundred dollars, compared to three billion dollars for the original project. This dramatic cost reduction has made genomic medicine increasingly accessible, though significant challenges around data privacy and equitable access remain. Scientists now understand that most traits are polygenic, meaning they are influenced by hundreds of genes rather than a single one.",
      keyPoints: ["Completed in 2003 after 13 years of international collaboration", "Mapped all three billion base pairs of human DNA", "Humans share 99.9% of their genetic code", "Has accelerated drug discovery and personalised medicine", "Sequencing costs have fallen from $3 billion to under $500"],
    },
    {
      id: "rl-7-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Economics of Space Exploration",
      lectureText: "Space exploration was once the exclusive domain of national governments, requiring enormous public investment. The emergence of commercial space companies has fundamentally changed this landscape. SpaceX's development of the Falcon 9 reusable rocket reduced launch costs by approximately 80 percent compared to previous technologies. This cost revolution has attracted a wave of private investment in satellites, space tourism, and resource extraction. The satellite industry alone generates over 270 billion dollars annually, providing services ranging from GPS navigation to broadband internet. However, the rapid growth of commercial activity in orbit has raised concerns about space debris and the potential weaponisation of outer space. International frameworks governing space, primarily the 1967 Outer Space Treaty, were designed for a different era and are widely considered inadequate for regulating today's commercial activities.",
      keyPoints: ["Commercial companies have dramatically lowered launch costs", "SpaceX reduced launch costs by around 80%", "The satellite industry generates over $270 billion annually", "Space debris is an increasing concern", "The 1967 Outer Space Treaty is considered outdated for modern use"],
    },
    {
      id: "rl-7-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Migration and Economic Development",
      lectureText: "Migration is one of the most powerful forces shaping economic development in both sending and receiving countries. In destination nations, migrants often fill critical labour shortages in sectors such as healthcare, construction, and agriculture. Research consistently shows that migrants contribute more in taxes than they receive in public services, making them net fiscal contributors. In countries of origin, remittances sent home by migrants represent a vital source of income, often exceeding foreign direct investment in value. However, the departure of skilled workers — sometimes called the brain drain — can deprive developing nations of the professionals they urgently need. The relationship between migration and development is therefore complex, offering substantial benefits while also posing risks that require thoughtful policy responses. Bilateral agreements between sending and receiving countries have emerged as one mechanism to manage these flows more effectively.",
      keyPoints: ["Migrants fill critical labour shortages in destination countries", "Migrants are typically net fiscal contributors", "Remittances often exceed foreign direct investment in sending countries", "Brain drain can harm developing nations", "Bilateral agreements help manage migration flows"],
    },
  ],

  answerShort: [
    { id: "as-7-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the molecule that carries genetic information in living cells?", expectedAnswer: "DNA" },
    { id: "as-7-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the force that keeps planets in orbit around the sun?", expectedAnswer: "Gravity" },
    { id: "as-7-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a doctor who specialises in the care of children?", expectedAnswer: "Paediatrician" },
    { id: "as-7-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which gas makes up the largest proportion of Earth's atmosphere?", expectedAnswer: "Nitrogen" },
    { id: "as-7-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call money sent home by workers living abroad?", expectedAnswer: "Remittances" },
    { id: "as-7-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the first artificial satellite launched into space?", expectedAnswer: "Sputnik" },
    { id: "as-7-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "How many chromosomes does a typical human body cell contain?", expectedAnswer: "46" },
    { id: "as-7-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a tax levied on imported goods?", expectedAnswer: "Tariff" },
    { id: "as-7-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the spread of false information intended to deceive?", expectedAnswer: "Misinformation" },
    { id: "as-7-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the boundary separating Earth's crust from the mantle?", expectedAnswer: "Mohorovicic discontinuity" },
  ],
};

export default test7;
