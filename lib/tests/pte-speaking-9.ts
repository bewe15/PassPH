import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Average Sleep Duration by Age Group (hours/night)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="60" width="45" height="160" fill="#06b6d4" rx="2"/>
  <text x="87" y="55" text-anchor="middle" font-size="10" fill="#0e7490">8.5h</text>
  <text x="87" y="240" text-anchor="middle" font-size="10" fill="#64748b">6–12</text>
  <rect x="130" y="80" width="45" height="140" fill="#06b6d4" rx="2"/>
  <text x="152" y="75" text-anchor="middle" font-size="10" fill="#0e7490">7.5h</text>
  <text x="152" y="240" text-anchor="middle" font-size="10" fill="#64748b">13–18</text>
  <rect x="195" y="100" width="45" height="120" fill="#06b6d4" rx="2"/>
  <text x="217" y="95" text-anchor="middle" font-size="10" fill="#0e7490">7.0h</text>
  <text x="217" y="240" text-anchor="middle" font-size="10" fill="#64748b">19–30</text>
  <rect x="260" y="110" width="45" height="110" fill="#06b6d4" rx="2"/>
  <text x="282" y="105" text-anchor="middle" font-size="10" fill="#0e7490">6.8h</text>
  <text x="282" y="240" text-anchor="middle" font-size="10" fill="#64748b">31–50</text>
  <rect x="325" y="120" width="30" height="100" fill="#06b6d4" rx="2"/>
  <text x="340" y="115" text-anchor="middle" font-size="10" fill="#0e7490">6.5h</text>
  <text x="340" y="240" text-anchor="middle" font-size="10" fill="#64748b">51+</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Trade Volume Growth (%) 2005–2023</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="125" x2="370" y2="125" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="50,90 100,70 150,180 200,145 250,100 300,130 350,95 370,80" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="90" r="4" fill="#06b6d4"/>
  <circle cx="100" cy="70" r="4" fill="#06b6d4"/>
  <circle cx="150" cy="180" r="4" fill="#06b6d4"/>
  <circle cx="200" cy="145" r="4" fill="#06b6d4"/>
  <circle cx="250" cy="100" r="4" fill="#06b6d4"/>
  <circle cx="300" cy="130" r="4" fill="#06b6d4"/>
  <circle cx="350" cy="95" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="80" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="9" fill="#64748b">2005</text>
  <text x="100" y="240" text-anchor="middle" font-size="9" fill="#64748b">2007</text>
  <text x="150" y="240" text-anchor="middle" font-size="9" fill="#64748b">2009</text>
  <text x="200" y="240" text-anchor="middle" font-size="9" fill="#64748b">2011</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">2015</text>
  <text x="300" y="240" text-anchor="middle" font-size="9" fill="#64748b">2018</text>
  <text x="350" y="240" text-anchor="middle" font-size="9" fill="#64748b">2021</text>
  <text x="370" y="240" text-anchor="middle" font-size="9" fill="#64748b">2023</text>
  <text x="155" y="195" font-size="9" fill="#ef4444">GFC crash</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Green Building Features Distribution (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 168,203 Z" fill="#0ea5e9"/>
  <path d="M140,130 L168,203 A80,80 0 0,1 62,163 Z" fill="#7c3aed"/>
  <path d="M140,130 L62,163 A80,80 0 0,1 62,97 Z" fill="#f59e0b"/>
  <path d="M140,130 L62,97 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Solar panels 25%</text>
  <rect x="240" y="72" width="12" height="12" fill="#0ea5e9"/><text x="258" y="83" font-size="11" fill="#334155">Insulation 22%</text>
  <rect x="240" y="94" width="12" height="12" fill="#7c3aed"/><text x="258" y="105" font-size="11" fill="#334155">Rainwater sys 18%</text>
  <rect x="240" y="116" width="12" height="12" fill="#f59e0b"/><text x="258" y="127" font-size="11" fill="#334155">Green roofs 15%</text>
  <rect x="240" y="138" width="12" height="12" fill="#10b981"/><text x="258" y="149" font-size="11" fill="#334155">Other 20%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Pandemic Case Growth Rate by Region (per 100k)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="70" width="30" height="150" fill="#06b6d4" rx="2"/>
  <text x="75" y="65" text-anchor="middle" font-size="9" fill="#0e7490">750</text>
  <rect x="105" y="85" width="30" height="135" fill="#0ea5e9" rx="2"/>
  <text x="120" y="80" text-anchor="middle" font-size="9" fill="#0e7490">675</text>
  <rect x="150" y="55" width="30" height="165" fill="#06b6d4" rx="2"/>
  <text x="165" y="50" text-anchor="middle" font-size="9" fill="#0e7490">825</text>
  <rect x="195" y="110" width="30" height="110" fill="#0ea5e9" rx="2"/>
  <text x="210" y="105" text-anchor="middle" font-size="9" fill="#0e7490">550</text>
  <rect x="240" y="140" width="30" height="80" fill="#06b6d4" rx="2"/>
  <text x="255" y="135" text-anchor="middle" font-size="9" fill="#0e7490">400</text>
  <rect x="285" y="160" width="30" height="60" fill="#0ea5e9" rx="2"/>
  <text x="300" y="155" text-anchor="middle" font-size="9" fill="#0e7490">300</text>
  <rect x="330" y="175" width="30" height="45" fill="#06b6d4" rx="2"/>
  <text x="345" y="170" text-anchor="middle" font-size="9" fill="#0e7490">225</text>
  <text x="75" y="240" text-anchor="middle" font-size="8" fill="#64748b">Europe</text>
  <text x="120" y="240" text-anchor="middle" font-size="8" fill="#64748b">N. America</text>
  <text x="165" y="240" text-anchor="middle" font-size="8" fill="#64748b">S. America</text>
  <text x="210" y="240" text-anchor="middle" font-size="8" fill="#64748b">S. Asia</text>
  <text x="255" y="240" text-anchor="middle" font-size="8" fill="#64748b">E. Asia</text>
  <text x="300" y="240" text-anchor="middle" font-size="8" fill="#64748b">Africa</text>
  <text x="345" y="240" text-anchor="middle" font-size="8" fill="#64748b">Oceania</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Patronage of Major Art Movements by Era</text>
  <rect x="30" y="32" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="32" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="100" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Movement</text>
  <text x="200" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Period</text>
  <text x="290" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Key Country</text>
  <text x="360" y="51" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Focus</text>
  <line x1="150" y1="32" x2="150" y2="242" stroke="#e2e8f0"/>
  <line x1="240" y1="32" x2="240" y2="242" stroke="#e2e8f0"/>
  <line x1="320" y1="32" x2="320" y2="242" stroke="#e2e8f0"/>
  <rect x="30" y="98" width="340" height="32" fill="#f0f9ff"/>
  <rect x="30" y="162" width="340" height="32" fill="#f0f9ff"/>
  <text x="100" y="73" text-anchor="middle" font-size="10" fill="#334155">Renaissance</text><text x="200" y="73" text-anchor="middle" font-size="10" fill="#334155">1400–1600</text><text x="290" y="73" text-anchor="middle" font-size="10" fill="#334155">Italy</text><text x="360" y="73" text-anchor="middle" font-size="10" fill="#334155">Humanism</text>
  <text x="100" y="117" text-anchor="middle" font-size="10" fill="#334155">Baroque</text><text x="200" y="117" text-anchor="middle" font-size="10" fill="#334155">1600–1750</text><text x="290" y="117" text-anchor="middle" font-size="10" fill="#334155">France/Spain</text><text x="360" y="117" text-anchor="middle" font-size="10" fill="#334155">Drama</text>
  <text x="100" y="149" text-anchor="middle" font-size="10" fill="#334155">Romanticism</text><text x="200" y="149" text-anchor="middle" font-size="10" fill="#334155">1800–1850</text><text x="290" y="149" text-anchor="middle" font-size="10" fill="#334155">Germany/UK</text><text x="360" y="149" text-anchor="middle" font-size="10" fill="#334155">Emotion</text>
  <text x="100" y="181" text-anchor="middle" font-size="10" fill="#334155">Impressionism</text><text x="200" y="181" text-anchor="middle" font-size="10" fill="#334155">1860–1890</text><text x="290" y="181" text-anchor="middle" font-size="10" fill="#334155">France</text><text x="360" y="181" text-anchor="middle" font-size="10" fill="#334155">Light/colour</text>
  <text x="100" y="215" text-anchor="middle" font-size="10" fill="#334155">Modernism</text><text x="200" y="215" text-anchor="middle" font-size="10" fill="#334155">1900–1970</text><text x="290" y="215" text-anchor="middle" font-size="10" fill="#334155">USA/Europe</text><text x="360" y="215" text-anchor="middle" font-size="10" fill="#334155">Abstraction</text>
  <line x1="30" y1="130" x2="370" y2="130" stroke="#e2e8f0"/>
  <line x1="30" y1="162" x2="370" y2="162" stroke="#e2e8f0"/>
  <line x1="30" y1="194" x2="370" y2="194" stroke="#e2e8f0"/>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <marker id="arr9" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#0e7490"/>
    </marker>
  </defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Sleep Cycle Process</text>
  <rect x="30" y="40" width="90" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="75" y="63" text-anchor="middle" font-size="11" fill="#0e7490">Wakefulness</text>
  <path d="M120,58 L148,58" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="150" y="40" width="90" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="195" y="63" text-anchor="middle" font-size="11" fill="#0e7490">Light Sleep</text>
  <path d="M240,58 L268,58" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="270" y="40" width="100" height="36" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="320" y="63" text-anchor="middle" font-size="11" fill="#0e7490">Deep Sleep</text>
  <path d="M320,76 L320,105" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="270" y="107" width="100" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="320" y="130" text-anchor="middle" font-size="11" fill="#0e7490">REM Sleep</text>
  <path d="M270,125 L242,125" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="150" y="107" width="90" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="195" y="130" text-anchor="middle" font-size="11" fill="#0e7490">Memory Cons.</text>
  <path d="M150,125 L122,125" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="30" y="107" width="90" height="36" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5" rx="4"/>
  <text x="75" y="130" text-anchor="middle" font-size="11" fill="#0e7490">Awakening</text>
  <path d="M75,143 L75,170" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arr9)"/>
  <rect x="130" y="172" width="140" height="36" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5" rx="4"/>
  <text x="200" y="195" text-anchor="middle" font-size="11" fill="#0e7490">Cycle Repeats (~90 min)</text>
  <path d="M270,190 Q340,190 340,58 L370,58" stroke="#0e7490" stroke-width="1" stroke-dasharray="4" fill="none"/>
  <text x="200" y="248" text-anchor="middle" font-size="10" fill="#64748b">Healthy adults cycle 4–6 times per night</text>
</svg>`;

const test9: PTESpeakingTest = {
  id: "pte-speaking-9",
  title: "PTE Speaking — Test 9",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-9-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Sleep science has revealed that adequate rest is not merely a passive state but an active biological process during which the brain consolidates memories, regulates hormones, and repairs cellular damage. Researchers have demonstrated that chronic sleep deprivation significantly impairs cognitive performance, immune function, and emotional regulation, contributing to a wide range of physical and psychological health conditions.",
    },
    {
      id: "ra-9-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Globalisation has transformed the structure of the world economy by enabling goods, capital, and labour to move across borders with unprecedented speed and volume. While the integration of markets has lifted millions out of poverty in developing nations, it has also intensified competition among workers worldwide and prompted serious debates about the distribution of economic gains and the erosion of national sovereignty.",
    },
    {
      id: "ra-9-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Sustainable architecture seeks to minimise the environmental footprint of buildings through energy-efficient design, use of recycled materials, and integration with natural systems. Green buildings are designed to reduce consumption of water and electricity, improve indoor air quality, and lower lifecycle carbon emissions. Certifications such as LEED and BREEAM have established international benchmarks for sustainable construction practice.",
    },
    {
      id: "ra-9-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Pandemic epidemiology examines how infectious diseases spread through populations and what interventions most effectively slow transmission. Mathematical models such as the SIR framework partition populations into susceptible, infected, and recovered groups to project outbreak trajectories. Policy responses informed by these models, including vaccination campaigns, contact tracing, and targeted lockdowns, have become central tools in modern public health management.",
    },
    {
      id: "ra-9-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Art history as an academic discipline traces the development of visual culture across civilisations and periods, analysing how artistic production reflects and shapes social, political, and religious contexts. Scholars employ iconographic analysis, archival research, and comparative methods to interpret works of art within their historical settings. Contemporary art history increasingly incorporates perspectives from gender studies, postcolonialism, and cultural theory.",
    },
    {
      id: "ra-9-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The circadian rhythm is an internal biological clock that regulates sleep-wake cycles over a roughly twenty-four-hour period. Disruptions to this rhythm, such as those caused by shift work, transmeridian travel, or excessive exposure to artificial light at night, have been linked to increased risks of metabolic disorders, cardiovascular disease, and depression. Research into chronobiology is now informing workplace policies and medical treatment schedules.",
    },
  ],

  repeatSentence: [
    { id: "rs-9-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The seminar on sustainable architecture will be held in the engineering faculty." },
    { id: "rs-9-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students are encouraged to review the lecture notes before the tutorial session." },
    { id: "rs-9-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Epidemiologists rely on statistical models to predict the spread of infectious diseases." },
    { id: "rs-9-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The university library has extended its opening hours during the examination period." },
    { id: "rs-9-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Globalisation has fundamentally altered the way national economies interact with each other." },
    { id: "rs-9-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Insufficient sleep over prolonged periods can seriously impair academic performance." },
    { id: "rs-9-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The art history department is hosting a symposium on Renaissance patronage next month." },
    { id: "rs-9-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Green certification requires buildings to meet strict energy and water efficiency standards." },
    { id: "rs-9-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Researchers have identified a strong correlation between sleep quality and immune resilience." },
    { id: "rs-9-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor asked the class to prepare a critical response to the assigned readings." },
  ],

  describeImage: [
    {
      id: "di-9-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Average Sleep Duration by Age Group (hours/night)",
      svgContent: SVG_1,
      keyPoints: [
        "Children aged 6–12 sleep the most at 8.5 hours per night",
        "Sleep duration declines progressively with age",
        "Adults over 51 average only 6.5 hours per night",
        "Teenagers sleep approximately one hour less than younger children",
      ],
    },
    {
      id: "di-9-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Global Trade Volume Growth (%) 2005–2023",
      svgContent: SVG_2,
      keyPoints: [
        "Trade growth was strong in the mid-2000s before the global financial crisis",
        "A sharp contraction occurred in 2009 due to the global financial crisis",
        "Recovery was evident by 2011 with renewed growth",
        "Trade growth remained volatile but generally positive through 2023",
      ],
    },
    {
      id: "di-9-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Green Building Features Distribution (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Solar panels are the most common green feature at 25%",
        "Thermal insulation accounts for 22% of features",
        "Rainwater harvesting systems represent 18%",
        "Green roofs make up 15% of sustainable design features",
      ],
    },
    {
      id: "di-9-4", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Pandemic Case Growth Rate by Region (per 100k)",
      svgContent: SVG_4,
      keyPoints: [
        "South America had the highest case rate at 825 per 100,000",
        "Oceania experienced the lowest rate at 225 per 100,000",
        "European and North American rates were both above 650",
        "East Asian and African regions showed comparatively lower rates",
      ],
    },
    {
      id: "di-9-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Patronage of Major Art Movements by Era",
      svgContent: SVG_5,
      keyPoints: [
        "The Renaissance originated in Italy and focused on humanism",
        "Baroque art emphasised drama and flourished in France and Spain",
        "Impressionism developed in France during the second half of the 19th century",
        "Modernism spanned both the USA and Europe with a focus on abstraction",
      ],
    },
    {
      id: "di-9-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Sleep Cycle Process",
      svgContent: SVG_6,
      keyPoints: [
        "Sleep progresses from wakefulness through light sleep to deep sleep",
        "REM sleep follows deep sleep and is associated with dreaming",
        "Memory consolidation occurs during the REM phase",
        "A complete cycle lasts approximately 90 minutes and repeats 4–6 times",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-9-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Science of Sleep and Memory",
      lectureText: "Sleep is far more than a period of rest. During sleep, the brain undergoes a highly organised sequence of activities that are essential for learning and memory. During the slow-wave or deep sleep phase, the hippocampus replays experiences from the day and transfers them to the neocortex for long-term storage. During REM sleep, the brain consolidates emotional memories and integrates new information with existing knowledge structures. Research using neuroimaging has shown that individuals who sleep after learning a new task perform significantly better on subsequent tests than those who remain awake. Sleep deprivation, even of a single night, can reduce synaptic plasticity and impair the encoding of new memories. These findings have profound implications for educational practice and for the management of memory-related disorders such as Alzheimer's disease.",
      keyPoints: [
        "Sleep is essential for learning and memory consolidation",
        "Slow-wave sleep transfers memories from hippocampus to neocortex",
        "REM sleep consolidates emotional memories and integrates knowledge",
        "Sleeping after learning improves subsequent test performance",
        "Sleep deprivation impairs memory encoding and synaptic plasticity",
      ],
    },
    {
      id: "rl-9-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Globalisation and Labour Markets",
      lectureText: "Globalisation has reshaped labour markets in both developing and developed economies. In developing countries, the expansion of global supply chains has created millions of manufacturing jobs, raising incomes for large segments of the population. However, these jobs are often characterised by low wages, poor conditions, and limited legal protections. In developed economies, globalisation has contributed to the offshoring of manufacturing and the hollowing out of middle-skill employment. Workers in these sectors have faced wage stagnation and job insecurity, even as highly skilled professionals and capital owners have benefited from expanded global markets. Economists disagree about the net welfare effects of globalisation, with some arguing that aggregate gains outweigh distributional costs, while others emphasise the need for targeted policy interventions to support displaced workers and reduce inequality.",
      keyPoints: [
        "Globalisation has created manufacturing jobs in developing countries",
        "Low wages and poor conditions are common in global supply chains",
        "Offshoring has reduced middle-skill employment in developed nations",
        "Skilled workers and capital owners have benefited most",
        "Policy debate focuses on redistribution and support for displaced workers",
      ],
    },
    {
      id: "rl-9-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Black Death and Art History",
      lectureText: "The Black Death, which swept through Europe between 1347 and 1351, had a profound and lasting impact on artistic production. The plague killed up to one third of the European population, fundamentally disrupting the social and economic structures that had sustained artistic patronage. In the decades following the pandemic, art underwent a marked shift toward themes of mortality, grief, and spiritual urgency. The danse macabre, or dance of death, became a recurring motif in painting and sculpture, depicting death as an equaliser that claimed victims from every social class. At the same time, the destruction of the existing order created opportunities for new artistic voices and perspectives to emerge. Some historians argue that the disruption caused by the Black Death ultimately contributed to the conditions that made the Renaissance possible, as survivors inherited wealth and a renewed focus on earthly life and human experience.",
      keyPoints: [
        "The Black Death killed up to a third of Europe's population in the 14th century",
        "The plague disrupted patronage systems and artistic production",
        "Themes of mortality and spiritual urgency dominated post-plague art",
        "The danse macabre motif depicted death as a universal equaliser",
        "Some historians link the Black Death's disruption to the conditions enabling the Renaissance",
      ],
    },
  ],

  answerShort: [
    { id: "as-9-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the stage of sleep during which dreaming most commonly occurs?", expectedAnswer: "REM sleep" },
    { id: "as-9-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the movement of jobs from one country to another to reduce costs?", expectedAnswer: "Offshoring" },
    { id: "as-9-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which disease killed approximately one third of Europe's population in the fourteenth century?", expectedAnswer: "Black Death" },
    { id: "as-9-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the internal clock that governs the body's sleep-wake cycle?", expectedAnswer: "Circadian rhythm" },
    { id: "as-9-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What acronym refers to the international green building rating system developed in the United States?", expectedAnswer: "LEED" },
    { id: "as-9-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the branch of science that studies how diseases spread through populations?", expectedAnswer: "Epidemiology" },
    { id: "as-9-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In which Italian city did the Renaissance artistic movement primarily begin?", expectedAnswer: "Florence" },
    { id: "as-9-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What brain region is primarily responsible for forming new memories before they are stored long-term?", expectedAnswer: "Hippocampus" },
    { id: "as-9-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do economists call the reduction of inequality between countries through global trade?", expectedAnswer: "Convergence" },
    { id: "as-9-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "How many times does a typical healthy adult complete a full sleep cycle per night?", expectedAnswer: "Four to six" },
  ],
};

export default test9;
