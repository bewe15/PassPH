import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Epigenetic Modification Types in Cancer Research</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="140" x2="370" y2="140" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="180" x2="370" y2="180" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="65" y="90" width="50" height="130" fill="#06b6d4" rx="2"/>
  <rect x="145" y="60" width="50" height="160" fill="#06b6d4" rx="2"/>
  <rect x="225" y="115" width="50" height="105" fill="#06b6d4" rx="2"/>
  <rect x="305" y="135" width="50" height="85" fill="#06b6d4" rx="2"/>
  <text x="90" y="85" text-anchor="middle" font-size="10" fill="#0e7490">41%</text>
  <text x="170" y="55" text-anchor="middle" font-size="10" fill="#0e7490">52%</text>
  <text x="250" y="110" text-anchor="middle" font-size="10" fill="#0e7490">33%</text>
  <text x="330" y="130" text-anchor="middle" font-size="10" fill="#0e7490">27%</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">DNA Methyl.</text>
  <text x="170" y="240" text-anchor="middle" font-size="10" fill="#64748b">Histone Mod.</text>
  <text x="250" y="240" text-anchor="middle" font-size="10" fill="#64748b">ncRNA</text>
  <text x="330" y="240" text-anchor="middle" font-size="10" fill="#64748b">Chromatin</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global EV Sales Growth (millions of units)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="75" x2="370" y2="75" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="130" x2="370" y2="130" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="185" x2="370" y2="185" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="80,208 145,200 210,188 275,155 340,95" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="80" cy="208" r="4" fill="#06b6d4"/>
  <circle cx="145" cy="200" r="4" fill="#06b6d4"/>
  <circle cx="210" cy="188" r="4" fill="#06b6d4"/>
  <circle cx="275" cy="155" r="4" fill="#06b6d4"/>
  <circle cx="340" cy="95" r="4" fill="#06b6d4"/>
  <text x="80" y="203" text-anchor="middle" font-size="9" fill="#0e7490">2.2</text>
  <text x="145" y="195" text-anchor="middle" font-size="9" fill="#0e7490">3.1</text>
  <text x="210" y="183" text-anchor="middle" font-size="9" fill="#0e7490">4.6</text>
  <text x="275" y="150" text-anchor="middle" font-size="9" fill="#0e7490">7.8</text>
  <text x="340" y="90" text-anchor="middle" font-size="9" fill="#0e7490">14.1</text>
  <text x="80" y="238" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="145" y="238" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="210" y="238" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="275" y="238" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="340" y="238" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Social Media Use: Reported Mental Health Impact (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="150" x2="370" y2="150" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="63" y="95" width="44" height="125" fill="#06b6d4" rx="2"/>
  <rect x="123" y="68" width="44" height="152" fill="#0ea5e9" rx="2"/>
  <rect x="183" y="120" width="44" height="100" fill="#7c3aed" rx="2"/>
  <rect x="243" y="145" width="44" height="75" fill="#f59e0b" rx="2"/>
  <rect x="303" y="170" width="44" height="50" fill="#10b981" rx="2"/>
  <text x="85" y="91" text-anchor="middle" font-size="9" fill="#0e7490">64%</text>
  <text x="145" y="64" text-anchor="middle" font-size="9" fill="#0e7490">77%</text>
  <text x="205" y="116" text-anchor="middle" font-size="9" fill="#0e7490">52%</text>
  <text x="265" y="141" text-anchor="middle" font-size="9" fill="#0e7490">39%</text>
  <text x="325" y="166" text-anchor="middle" font-size="9" fill="#0e7490">26%</text>
  <text x="85" y="238" text-anchor="middle" font-size="9" fill="#64748b">Anxiety</text>
  <text x="145" y="238" text-anchor="middle" font-size="9" fill="#64748b">FOMO</text>
  <text x="205" y="238" text-anchor="middle" font-size="9" fill="#64748b">Depression</text>
  <text x="265" y="238" text-anchor="middle" font-size="9" fill="#64748b">Sleep Loss</text>
  <text x="325" y="238" text-anchor="middle" font-size="9" fill="#64748b">Positive</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Mangrove Ecosystem Services</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 219,92 Z" fill="#06b6d4"/>
  <path d="M150,130 L219,92 A80,80 0 0,1 219,168 Z" fill="#10b981"/>
  <path d="M150,130 L219,168 A80,80 0 0,1 150,210 Z" fill="#0ea5e9"/>
  <path d="M150,130 L150,210 A80,80 0 0,1 81,168 Z" fill="#7c3aed"/>
  <path d="M150,130 L81,168 A80,80 0 0,1 81,92 Z" fill="#f59e0b"/>
  <path d="M150,130 L81,92 A80,80 0 0,1 150,50 Z" fill="#e11d48"/>
  <rect x="250" y="40" width="12" height="12" fill="#06b6d4"/><text x="268" y="51" font-size="10" fill="#334155">Carbon Storage 28%</text>
  <rect x="250" y="60" width="12" height="12" fill="#10b981"/><text x="268" y="71" font-size="10" fill="#334155">Coastal Protection 22%</text>
  <rect x="250" y="80" width="12" height="12" fill="#0ea5e9"/><text x="268" y="91" font-size="10" fill="#334155">Fishery Habitat 18%</text>
  <rect x="250" y="100" width="12" height="12" fill="#7c3aed"/><text x="268" y="111" font-size="10" fill="#334155">Water Filtration 14%</text>
  <rect x="250" y="120" width="12" height="12" fill="#f59e0b"/><text x="268" y="131" font-size="10" fill="#334155">Biodiversity 11%</text>
  <rect x="250" y="140" width="12" height="12" fill="#e11d48"/><text x="268" y="151" font-size="10" fill="#334155">Tourism 7%</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Central Bank Interest Rate Decisions 2020–2024</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="140" x2="370" y2="140" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="185" x2="370" y2="185" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="80,210 145,215 210,185 275,90 340,105" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="80" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="145" cy="215" r="4" fill="#06b6d4"/>
  <circle cx="210" cy="185" r="4" fill="#06b6d4"/>
  <circle cx="275" cy="90" r="4" fill="#06b6d4"/>
  <circle cx="340" cy="105" r="4" fill="#06b6d4"/>
  <text x="80" y="205" text-anchor="middle" font-size="9" fill="#0e7490">0.25%</text>
  <text x="145" y="210" text-anchor="middle" font-size="9" fill="#0e7490">0.10%</text>
  <text x="210" y="180" text-anchor="middle" font-size="9" fill="#0e7490">1.75%</text>
  <text x="275" y="85" text-anchor="middle" font-size="9" fill="#0e7490">5.25%</text>
  <text x="340" y="100" text-anchor="middle" font-size="9" fill="#0e7490">4.75%</text>
  <text x="80" y="238" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="145" y="238" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="210" y="238" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="275" y="238" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
  <text x="340" y="238" text-anchor="middle" font-size="10" fill="#64748b">2024</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">EV Battery Technology Comparison</text>
  <rect x="20" y="35" width="360" height="215" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="20" y="35" width="360" height="28" fill="#0e7490" rx="4"/>
  <text x="90" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Battery Type</text>
  <text x="200" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Energy Density</text>
  <text x="295" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Cycle Life</text>
  <text x="362" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Cost</text>
  <line x1="20" y1="63" x2="380" y2="63" stroke="#e2e8f0"/>
  <line x1="155" y1="35" x2="155" y2="250" stroke="#e2e8f0"/>
  <line x1="250" y1="35" x2="250" y2="250" stroke="#e2e8f0"/>
  <line x1="330" y1="35" x2="330" y2="250" stroke="#e2e8f0"/>
  <text x="90" y="84" text-anchor="middle" font-size="10" fill="#1e293b">NMC Lithium-ion</text>
  <text x="200" y="84" text-anchor="middle" font-size="10" fill="#1e293b">250 Wh/kg</text>
  <text x="295" y="84" text-anchor="middle" font-size="10" fill="#1e293b">1,500</text>
  <text x="362" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Medium</text>
  <line x1="20" y1="92" x2="380" y2="92" stroke="#f1f5f9"/>
  <text x="90" y="113" text-anchor="middle" font-size="10" fill="#1e293b">LFP Lithium-ion</text>
  <text x="200" y="113" text-anchor="middle" font-size="10" fill="#1e293b">160 Wh/kg</text>
  <text x="295" y="113" text-anchor="middle" font-size="10" fill="#1e293b">3,000+</text>
  <text x="362" y="113" text-anchor="middle" font-size="10" fill="#1e293b">Low</text>
  <line x1="20" y1="121" x2="380" y2="121" stroke="#f1f5f9"/>
  <text x="90" y="142" text-anchor="middle" font-size="10" fill="#1e293b">Solid-State</text>
  <text x="200" y="142" text-anchor="middle" font-size="10" fill="#1e293b">400 Wh/kg</text>
  <text x="295" y="142" text-anchor="middle" font-size="10" fill="#1e293b">5,000+</text>
  <text x="362" y="142" text-anchor="middle" font-size="10" fill="#1e293b">Very High</text>
  <line x1="20" y1="150" x2="380" y2="150" stroke="#f1f5f9"/>
  <text x="90" y="171" text-anchor="middle" font-size="10" fill="#1e293b">Sodium-ion</text>
  <text x="200" y="171" text-anchor="middle" font-size="10" fill="#1e293b">120 Wh/kg</text>
  <text x="295" y="171" text-anchor="middle" font-size="10" fill="#1e293b">2,000</text>
  <text x="362" y="171" text-anchor="middle" font-size="10" fill="#1e293b">Very Low</text>
  <line x1="20" y1="179" x2="380" y2="179" stroke="#f1f5f9"/>
  <text x="90" y="200" text-anchor="middle" font-size="10" fill="#1e293b">Flow Battery</text>
  <text x="200" y="200" text-anchor="middle" font-size="10" fill="#1e293b">30 Wh/kg</text>
  <text x="295" y="200" text-anchor="middle" font-size="10" fill="#1e293b">10,000+</text>
  <text x="362" y="200" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
</svg>`;

const test15: PTESpeakingTest = {
  id: "pte-speaking-15",
  title: "PTE Speaking — Test 15",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-15-1",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Epigenetics examines heritable changes in gene expression that do not involve alterations to the DNA sequence itself. Environmental factors such as diet, stress, and toxin exposure can modify the chemical tags attached to DNA or its associated histone proteins, effectively switching genes on or off. These modifications may persist across generations, challenging classical assumptions about the boundaries of inheritance.",
    },
    {
      id: "ra-15-2",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "The global transition to electric vehicles represents one of the most significant industrial shifts of the twenty-first century. Falling battery costs, expanding charging infrastructure, and increasingly stringent emissions regulations have accelerated adoption across major markets. Manufacturers are now competing to extend driving range, reduce charging times, and develop second-life applications for used battery packs.",
    },
    {
      id: "ra-15-3",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Research increasingly links heavy social media use among adolescents to elevated rates of anxiety, depression, and disrupted sleep patterns. Mechanisms under investigation include social comparison, cyberbullying, and algorithm-driven content that amplifies emotional arousal. However, the causal direction of these associations remains contested, as individuals experiencing mental health difficulties may also increase their social media consumption as a coping behaviour.",
    },
    {
      id: "ra-15-4",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Mangrove forests occupy the intertidal zones of tropical and subtropical coastlines, providing a remarkable array of ecosystem services. They act as highly effective carbon sinks, storing up to four times more carbon per hectare than terrestrial forests. Mangroves also buffer coastal communities from storm surges, provide nursery habitats for commercially important fish species, and maintain water quality by filtering terrestrial runoff.",
    },
    {
      id: "ra-15-5",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Central banks use monetary policy tools to manage inflation, employment, and broader economic stability. The primary instrument is the setting of benchmark interest rates, which influences borrowing costs throughout the economy. During periods of high inflation, central banks typically raise rates to cool demand, while in downturns they cut rates to stimulate investment and consumer spending.",
    },
    {
      id: "ra-15-6",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Epigenetic clocks measure biological ageing by analysing methylation patterns across hundreds of genomic sites. These clocks can predict an individual's biological age with remarkable precision and have revealed that lifestyle choices, chronic stress, and socioeconomic disadvantage can accelerate biological ageing independently of chronological age. This finding has profound implications for both personalised medicine and public health policy.",
    },
  ],

  repeatSentence: [
    {
      id: "rs-15-1",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Epigenetic modifications can be inherited across multiple generations without altering DNA sequence.",
    },
    {
      id: "rs-15-2",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Solid-state batteries promise significantly higher energy density than current lithium-ion technology.",
    },
    {
      id: "rs-15-3",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Algorithm-driven content may intensify emotional responses and increase social media engagement.",
    },
    {
      id: "rs-15-4",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Mangrove deforestation releases centuries of stored carbon back into the atmosphere.",
    },
    {
      id: "rs-15-5",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Interest rate decisions by central banks ripple through the entire global financial system.",
    },
    {
      id: "rs-15-6",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Histone modification alters the accessibility of DNA to transcription machinery within the nucleus.",
    },
    {
      id: "rs-15-7",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Range anxiety remains a significant psychological barrier to electric vehicle adoption among consumers.",
    },
    {
      id: "rs-15-8",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Cyberbullying on social platforms has been linked to heightened rates of self-harm among teenagers.",
    },
    {
      id: "rs-15-9",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Intertidal mangrove zones support remarkable biodiversity and protect adjacent coral reef systems.",
    },
    {
      id: "rs-15-10",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Quantitative easing expands the money supply by purchasing government bonds from financial institutions.",
    },
  ],

  describeImage: [
    {
      id: "di-15-1",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Epigenetic Modification Types in Cancer Research",
      svgContent: SVG_1,
      keyPoints: [
        "Histone modification is the most frequently studied epigenetic change at 52%",
        "DNA methylation is the second most common at 41% of studies",
        "Non-coding RNA research represents 33% of epigenetic cancer studies",
        "Chromatin remodelling accounts for 27% and is an emerging research focus",
      ],
    },
    {
      id: "di-15-2",
      type: "describe_image",
      imageType: "line_graph",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Global EV Sales Growth 2019–2023",
      svgContent: SVG_2,
      keyPoints: [
        "Global EV sales grew from 2.2 million units in 2019 to 14.1 million in 2023",
        "Growth accelerated sharply between 2022 and 2023",
        "The compound annual growth rate exceeds 45% over the period",
        "China, Europe, and the USA represent the three largest markets driving this growth",
      ],
    },
    {
      id: "di-15-3",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Social Media Use: Reported Mental Health Impact",
      svgContent: SVG_3,
      keyPoints: [
        "Fear of missing out (FOMO) is the most commonly reported impact at 77%",
        "Anxiety is reported by 64% of respondents, while depression stands at 52%",
        "Positive mental health effects are reported by only 26% of social media users",
        "Sleep disruption at 39% highlights the behavioural consequences of platform use",
      ],
    },
    {
      id: "di-15-4",
      type: "describe_image",
      imageType: "pie_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Mangrove Ecosystem Services Distribution",
      svgContent: SVG_4,
      keyPoints: [
        "Carbon storage is the largest single service provided by mangroves at 28%",
        "Coastal protection and fishery habitat together account for 40% of total value",
        "Tourism and recreation represent only 7%, suggesting undervaluation in economic assessments",
        "The ecosystem provides six distinct services that are difficult to replicate artificially",
      ],
    },
    {
      id: "di-15-5",
      type: "describe_image",
      imageType: "line_graph",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Central Bank Interest Rates 2020–2024",
      svgContent: SVG_5,
      keyPoints: [
        "Rates fell to historic lows of 0.10% in 2021 during pandemic stimulus conditions",
        "Aggressive rate hikes in 2022–2023 pushed rates to 5.25% to combat inflation",
        "A modest easing began in 2024 as inflation pressures subsided",
        "The rapid rate cycle illustrates the reactive nature of contemporary monetary policy",
      ],
    },
    {
      id: "di-15-6",
      type: "describe_image",
      imageType: "table",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "EV Battery Technology Comparison",
      svgContent: SVG_6,
      keyPoints: [
        "Solid-state batteries offer the highest energy density at 400 Wh/kg and longest cycle life",
        "LFP lithium-ion provides a strong balance of durability and low cost",
        "Flow batteries have exceptional longevity but very low energy density, suited to stationary storage",
        "Sodium-ion chemistry offers the lowest cost option but at reduced performance",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-15-1",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Epigenetics and the Nature-Nurture Debate",
      lectureText:
        "Epigenetics has fundamentally reshaped how we think about the nature-nurture debate. For much of the twentieth century, biologists assumed that an organism's genetic sequence was fixed and determined its traits in a largely deterministic manner. Epigenetics reveals a more dynamic picture. The environment can literally write instructions onto the genome, silencing some genes and activating others through chemical modifications like methylation and acetylation. What makes this particularly striking is that these modifications can sometimes be passed on to offspring. Studies of human populations that experienced famine, such as the Dutch Hunger Winter of 1944, have found that descendants of those who were starved show altered metabolic profiles, suggesting that environmental trauma can have multigenerational consequences. This fundamentally challenges the sharp boundary we once drew between genetic and environmental influences on health.",
      keyPoints: [
        "Epigenetics challenges the fixed view of genetic determinism from the twentieth century",
        "Environmental factors modify the genome through methylation and acetylation without changing DNA sequence",
        "Epigenetic modifications can sometimes be transmitted to offspring",
        "The Dutch Hunger Winter study shows multigenerational metabolic consequences of famine",
        "The boundary between genetic and environmental health influences is far less distinct than previously assumed",
      ],
    },
    {
      id: "rl-15-2",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Electric Vehicles and Grid Infrastructure",
      lectureText:
        "The rapid adoption of electric vehicles presents enormous opportunities but also substantial challenges for electricity grid infrastructure. A typical electric vehicle requires charging that can draw as much power as several household appliances running simultaneously. If millions of vehicles charge during peak evening hours, grids designed for historical demand patterns may be overwhelmed. However, smart charging technology and vehicle-to-grid systems offer elegant solutions. By incentivising EV owners to charge during off-peak periods, utilities can smooth demand curves. More excitingly, parked EVs could discharge electricity back to the grid during peak demand, effectively functioning as distributed energy storage assets. This bidirectional relationship between vehicles and the grid could accelerate the integration of intermittent renewable energy sources like wind and solar by providing flexible buffer capacity.",
      keyPoints: [
        "Mass EV adoption creates significant challenges for existing electricity grid infrastructure",
        "Simultaneous evening charging could overwhelm grids designed for historical demand patterns",
        "Smart charging incentivises off-peak charging to smooth demand curves",
        "Vehicle-to-grid systems allow EVs to discharge electricity back to the grid during peak periods",
        "Bidirectional EV-grid interaction supports integration of intermittent renewable energy sources",
      ],
    },
    {
      id: "rl-15-3",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Monetary Policy in an Era of High Inflation",
      lectureText:
        "The inflationary surge following the COVID-19 pandemic tested central banks in ways not seen since the 1970s. For over a decade before the pandemic, major central banks operated in an environment of persistently low inflation, keeping interest rates near zero and expanding their balance sheets through quantitative easing. When supply chain disruptions, energy price shocks, and post-pandemic demand surges converged, inflation rose sharply across developed economies. Central banks responded with the most aggressive rate hiking cycles in decades. The US Federal Reserve raised rates by over five percentage points in less than two years. The key debate among economists is whether this tightening was timely or delayed, and whether central banks had inadvertently contributed to inflationary conditions through prolonged ultra-loose monetary policy. The episode has revived interest in what the appropriate long-run neutral interest rate should be.",
      keyPoints: [
        "The post-COVID inflation surge was the most severe test for central banks since the 1970s",
        "A decade of near-zero rates and quantitative easing preceded the inflationary period",
        "Supply chain disruptions, energy shocks, and demand surges combined to drive inflation",
        "The US Federal Reserve raised rates by over five percentage points in under two years",
        "Debate continues over whether prolonged ultra-loose policy contributed to inflationary conditions",
      ],
    },
  ],

  answerShort: [
    {
      id: "as-15-1",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What chemical modification silences gene expression in epigenetics?",
      expectedAnswer: "DNA methylation",
    },
    {
      id: "as-15-2",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What term describes heritable changes in gene expression without DNA sequence alteration?",
      expectedAnswer: "Epigenetic",
    },
    {
      id: "as-15-3",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the main energy storage component of an electric vehicle?",
      expectedAnswer: "Battery",
    },
    {
      id: "as-15-4",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the term for EVs supplying electricity back to the power grid?",
      expectedAnswer: "Vehicle-to-grid",
    },
    {
      id: "as-15-5",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What type of ecosystem grows in tropical intertidal coastal zones?",
      expectedAnswer: "Mangrove",
    },
    {
      id: "as-15-6",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the primary monetary policy tool used by central banks to control inflation?",
      expectedAnswer: "Interest rates",
    },
    {
      id: "as-15-7",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What policy involves a central bank purchasing government bonds to expand money supply?",
      expectedAnswer: "Quantitative easing",
    },
    {
      id: "as-15-8",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What psychological phenomenon describes anxiety about missing social events seen online?",
      expectedAnswer: "FOMO",
    },
    {
      id: "as-15-9",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What do mangrove forests store in large quantities, making them important for climate?",
      expectedAnswer: "Carbon",
    },
    {
      id: "as-15-10",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What biological clock measures ageing through genomic methylation patterns?",
      expectedAnswer: "Epigenetic clock",
    },
  ],
};

export default test15;
