import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Artificial Photosynthesis Efficiency by Method (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="140" x2="370" y2="140" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="65" y="155" width="48" height="65" fill="#06b6d4" rx="2"/>
  <rect x="145" y="105" width="48" height="115" fill="#06b6d4" rx="2"/>
  <rect x="225" y="130" width="48" height="90" fill="#06b6d4" rx="2"/>
  <rect x="305" y="75" width="48" height="145" fill="#06b6d4" rx="2"/>
  <text x="89" y="150" text-anchor="middle" font-size="10" fill="#0e7490">7%</text>
  <text x="169" y="100" text-anchor="middle" font-size="10" fill="#0e7490">12%</text>
  <text x="249" y="125" text-anchor="middle" font-size="10" fill="#0e7490">10%</text>
  <text x="329" y="70" text-anchor="middle" font-size="10" fill="#0e7490">15%</text>
  <text x="89" y="240" text-anchor="middle" font-size="9" fill="#64748b">Dye-Sensitised</text>
  <text x="169" y="240" text-anchor="middle" font-size="9" fill="#64748b">Photoelectrochem.</text>
  <text x="249" y="240" text-anchor="middle" font-size="9" fill="#64748b">Perovskite</text>
  <text x="329" y="240" text-anchor="middle" font-size="9" fill="#64748b">Tandem Cell</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Urban Heat Island Effect: Temp. Difference (°C)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="140" x2="370" y2="140" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="80,205 145,190 210,165 275,120 340,75" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="80" cy="205" r="4" fill="#f59e0b"/>
  <circle cx="145" cy="190" r="4" fill="#f59e0b"/>
  <circle cx="210" cy="165" r="4" fill="#f59e0b"/>
  <circle cx="275" cy="120" r="4" fill="#f59e0b"/>
  <circle cx="340" cy="75" r="4" fill="#f59e0b"/>
  <text x="80" y="200" text-anchor="middle" font-size="9" fill="#0e7490">+0.8</text>
  <text x="145" y="185" text-anchor="middle" font-size="9" fill="#0e7490">+1.4</text>
  <text x="210" y="160" text-anchor="middle" font-size="9" fill="#0e7490">+2.1</text>
  <text x="275" y="115" text-anchor="middle" font-size="9" fill="#0e7490">+3.3</text>
  <text x="340" y="70" text-anchor="middle" font-size="9" fill="#0e7490">+4.7</text>
  <text x="80" y="238" text-anchor="middle" font-size="9" fill="#64748b">Rural</text>
  <text x="145" y="238" text-anchor="middle" font-size="9" fill="#64748b">Suburban</text>
  <text x="210" y="238" text-anchor="middle" font-size="9" fill="#64748b">Peri-urban</text>
  <text x="275" y="238" text-anchor="middle" font-size="9" fill="#64748b">City Edge</text>
  <text x="340" y="238" text-anchor="middle" font-size="9" fill="#64748b">City Core</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Cultural Diplomacy Funding by Region (USD million)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="75" x2="370" y2="75" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="140" x2="370" y2="140" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="185" x2="370" y2="185" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="60" y="95" width="44" height="125" fill="#06b6d4" rx="2"/>
  <rect x="120" y="60" width="44" height="160" fill="#0ea5e9" rx="2"/>
  <rect x="180" y="115" width="44" height="105" fill="#7c3aed" rx="2"/>
  <rect x="240" y="130" width="44" height="90" fill="#f59e0b" rx="2"/>
  <rect x="300" y="150" width="44" height="70" fill="#10b981" rx="2"/>
  <text x="82" y="91" text-anchor="middle" font-size="9" fill="#0e7490">840</text>
  <text x="142" y="56" text-anchor="middle" font-size="9" fill="#0e7490">1060</text>
  <text x="202" y="111" text-anchor="middle" font-size="9" fill="#0e7490">700</text>
  <text x="262" y="126" text-anchor="middle" font-size="9" fill="#0e7490">600</text>
  <text x="322" y="146" text-anchor="middle" font-size="9" fill="#0e7490">470</text>
  <text x="82" y="238" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <text x="142" y="238" text-anchor="middle" font-size="9" fill="#64748b">East Asia</text>
  <text x="202" y="238" text-anchor="middle" font-size="9" fill="#64748b">N. America</text>
  <text x="262" y="238" text-anchor="middle" font-size="9" fill="#64748b">M. East</text>
  <text x="322" y="238" text-anchor="middle" font-size="9" fill="#64748b">S. Asia</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Microplastic Sources in Ocean Systems (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 218,92 Z" fill="#06b6d4"/>
  <path d="M150,130 L218,92 A80,80 0 0,1 225,160 Z" fill="#0ea5e9"/>
  <path d="M150,130 L225,160 A80,80 0 0,1 170,208 Z" fill="#7c3aed"/>
  <path d="M150,130 L170,208 A80,80 0 0,1 82,160 Z" fill="#f59e0b"/>
  <path d="M150,130 L82,160 A80,80 0 0,1 150,50 Z" fill="#10b981"/>
  <rect x="250" y="50" width="12" height="12" fill="#06b6d4"/><text x="268" y="61" font-size="10" fill="#334155">Textiles 35%</text>
  <rect x="250" y="72" width="12" height="12" fill="#0ea5e9"/><text x="268" y="83" font-size="10" fill="#334155">Packaging 22%</text>
  <rect x="250" y="94" width="12" height="12" fill="#7c3aed"/><text x="268" y="105" font-size="10" fill="#334155">Tyres 16%</text>
  <rect x="250" y="116" width="12" height="12" fill="#f59e0b"/><text x="268" y="127" font-size="10" fill="#334155">Fishing Gear 14%</text>
  <rect x="250" y="138" width="12" height="12" fill="#10b981"/><text x="268" y="149" font-size="10" fill="#334155">Other 13%</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Artificial Photosynthesis: Hydrogen Production Process</text>
  <defs>
    <marker id="arr16" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4"/>
    </marker>
  </defs>
  <rect x="15" y="48" width="90" height="46" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="60" y="68" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Solar Light</text>
  <text x="60" y="83" text-anchor="middle" font-size="10" fill="#1e293b">Absorption</text>
  <path d="M106,71 L130,71" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr16)"/>
  <rect x="131" y="48" width="90" height="46" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="176" y="68" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Charge</text>
  <text x="176" y="83" text-anchor="middle" font-size="10" fill="#1e293b">Separation</text>
  <path d="M222,71 L246,71" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr16)"/>
  <rect x="247" y="48" width="90" height="46" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="292" y="68" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Water</text>
  <text x="292" y="83" text-anchor="middle" font-size="10" fill="#1e293b">Oxidation</text>
  <path d="M292,95 L292,119" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr16)"/>
  <rect x="247" y="120" width="90" height="46" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="292" y="140" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Proton</text>
  <text x="292" y="155" text-anchor="middle" font-size="10" fill="#1e293b">Reduction</text>
  <path d="M246,143 L222,143" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr16)"/>
  <rect x="115" y="120" width="106" height="46" fill="#cffafe" stroke="#0e7490" stroke-width="2" rx="4"/>
  <text x="168" y="140" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">H₂ Gas</text>
  <text x="168" y="155" text-anchor="middle" font-size="10" fill="#1e293b">Collection &amp; Storage</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Epistemological Frameworks: Characteristics</text>
  <rect x="20" y="35" width="360" height="215" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="20" y="35" width="360" height="28" fill="#0e7490" rx="4"/>
  <text x="95" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Framework</text>
  <text x="210" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Basis of Knowledge</text>
  <text x="340" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Key Thinker</text>
  <line x1="20" y1="63" x2="380" y2="63" stroke="#e2e8f0"/>
  <line x1="160" y1="35" x2="160" y2="250" stroke="#e2e8f0"/>
  <line x1="295" y1="35" x2="295" y2="250" stroke="#e2e8f0"/>
  <text x="95" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Empiricism</text>
  <text x="210" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Sensory experience</text>
  <text x="340" y="84" text-anchor="middle" font-size="10" fill="#1e293b">John Locke</text>
  <line x1="20" y1="92" x2="380" y2="92" stroke="#f1f5f9"/>
  <text x="95" y="113" text-anchor="middle" font-size="10" fill="#1e293b">Rationalism</text>
  <text x="210" y="113" text-anchor="middle" font-size="10" fill="#1e293b">Reason and logic</text>
  <text x="340" y="113" text-anchor="middle" font-size="10" fill="#1e293b">Descartes</text>
  <line x1="20" y1="121" x2="380" y2="121" stroke="#f1f5f9"/>
  <text x="95" y="142" text-anchor="middle" font-size="10" fill="#1e293b">Constructivism</text>
  <text x="210" y="142" text-anchor="middle" font-size="10" fill="#1e293b">Socially constructed</text>
  <text x="340" y="142" text-anchor="middle" font-size="10" fill="#1e293b">Vygotsky</text>
  <line x1="20" y1="150" x2="380" y2="150" stroke="#f1f5f9"/>
  <text x="95" y="171" text-anchor="middle" font-size="10" fill="#1e293b">Pragmatism</text>
  <text x="210" y="171" text-anchor="middle" font-size="10" fill="#1e293b">Practical consequences</text>
  <text x="340" y="171" text-anchor="middle" font-size="10" fill="#1e293b">William James</text>
  <line x1="20" y1="179" x2="380" y2="179" stroke="#f1f5f9"/>
  <text x="95" y="200" text-anchor="middle" font-size="10" fill="#1e293b">Critical Realism</text>
  <text x="210" y="200" text-anchor="middle" font-size="10" fill="#1e293b">Mind-independent reality</text>
  <text x="340" y="200" text-anchor="middle" font-size="10" fill="#1e293b">Roy Bhaskar</text>
  <line x1="20" y1="208" x2="380" y2="208" stroke="#f1f5f9"/>
  <text x="95" y="229" text-anchor="middle" font-size="10" fill="#1e293b">Falsificationism</text>
  <text x="210" y="229" text-anchor="middle" font-size="10" fill="#1e293b">Testable, refutable claims</text>
  <text x="340" y="229" text-anchor="middle" font-size="10" fill="#1e293b">Karl Popper</text>
</svg>`;

const test16: PTESpeakingTest = {
  id: "pte-speaking-16",
  title: "PTE Speaking — Test 16",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-16-1",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Artificial photosynthesis replicates the biological process by which plants convert sunlight and water into chemical energy. Researchers are developing systems that use semiconductor catalysts to split water molecules, releasing hydrogen gas as a clean fuel. If scaled successfully, artificial photosynthesis could provide an abundant, carbon-neutral energy source while simultaneously reducing atmospheric carbon dioxide concentrations.",
    },
    {
      id: "ra-16-2",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Urban heat islands occur when cities experience significantly higher ambient temperatures than their surrounding rural areas. Impervious surfaces such as concrete and asphalt absorb solar radiation and release it slowly as heat, while reduced vegetation limits evaporative cooling. The phenomenon intensifies extreme weather events, increases energy demand for cooling, and disproportionately affects low-income communities with limited access to green space.",
    },
    {
      id: "ra-16-3",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Cultural diplomacy uses artistic exchanges, educational programmes, and heritage initiatives to build mutual understanding between nations. Unlike traditional diplomacy conducted through formal negotiations, cultural diplomacy operates through people-to-people connections that can transcend political tensions. Institutions such as the British Council, Goethe-Institut, and Alliance Française serve as key vehicles for projecting soft power internationally.",
    },
    {
      id: "ra-16-4",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Microplastics, defined as plastic particles smaller than five millimetres, have been detected in every ocean on Earth, from surface waters to deep-sea sediments. They enter marine environments through the fragmentation of larger plastic debris, synthetic textile fibres, and industrial processes. Marine organisms ingest these particles, which can accumulate toxic contaminants and transfer through food webs to human consumers.",
    },
    {
      id: "ra-16-5",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Epistemology is the branch of philosophy concerned with the nature, scope, and limits of human knowledge. Central questions include how we can distinguish justified belief from mere opinion and whether certainty is ever genuinely attainable. Competing traditions including empiricism, rationalism, and constructivism offer fundamentally different accounts of how reliable knowledge about the world is generated and validated.",
    },
    {
      id: "ra-16-6",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "The urban heat island effect is being addressed through a range of nature-based and engineering interventions. Green roofs, urban forests, reflective pavements, and cool-roof coatings can collectively reduce peak urban temperatures by several degrees Celsius. City planners increasingly integrate these strategies into municipal climate adaptation frameworks, recognising that densifying cities without managing heat risks undermines residential liveability.",
    },
  ],

  repeatSentence: [
    {
      id: "rs-16-1",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Artificial photosynthesis uses semiconductor catalysts to split water and release hydrogen fuel.",
    },
    {
      id: "rs-16-2",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Concrete and asphalt absorb solar radiation and release heat slowly into the urban atmosphere.",
    },
    {
      id: "rs-16-3",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Cultural diplomacy builds mutual understanding through artistic exchanges and educational programmes.",
    },
    {
      id: "rs-16-4",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Microplastic particles smaller than five millimetres have been found in every ocean on Earth.",
    },
    {
      id: "rs-16-5",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Karl Popper argued that scientific knowledge advances through the falsification of hypotheses.",
    },
    {
      id: "rs-16-6",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Perovskite solar cells have emerged as highly promising candidates for low-cost photovoltaic applications.",
    },
    {
      id: "rs-16-7",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Green roofs and urban forests can reduce city temperatures by several degrees Celsius.",
    },
    {
      id: "rs-16-8",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Soft power enables nations to influence global opinion without resorting to economic or military coercion.",
    },
    {
      id: "rs-16-9",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Synthetic textile fibres shed during laundering are a major source of oceanic microplastic pollution.",
    },
    {
      id: "rs-16-10",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Constructivism holds that knowledge is actively built by learners rather than passively received from authority.",
    },
  ],

  describeImage: [
    {
      id: "di-16-1",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Artificial Photosynthesis Efficiency by Method",
      svgContent: SVG_1,
      keyPoints: [
        "Tandem cell systems achieve the highest efficiency at 15%, leading current research",
        "Photoelectrochemical methods reach 12%, representing a well-established approach",
        "Perovskite-based methods at 10% are improving rapidly despite stability challenges",
        "Dye-sensitised systems at 7% are the most mature but least efficient technology",
      ],
    },
    {
      id: "di-16-2",
      type: "describe_image",
      imageType: "line_graph",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Urban Heat Island: Temperature Difference by Zone",
      svgContent: SVG_2,
      keyPoints: [
        "City cores are 4.7°C warmer than rural reference areas on average",
        "Temperature rises progressively and non-linearly from rural to urban core",
        "The steepest increase occurs between peri-urban and city-edge zones",
        "Even suburban areas show a measurable 1.4°C elevation over rural baselines",
      ],
    },
    {
      id: "di-16-3",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Cultural Diplomacy Funding by Region",
      svgContent: SVG_3,
      keyPoints: [
        "East Asia leads global cultural diplomacy investment at USD 1.06 billion",
        "Europe follows at USD 840 million, driven largely by EU multilateral programmes",
        "South Asia receives the least funding at USD 470 million, indicating potential underinvestment",
        "Total global spending exceeds USD 3.6 billion, reflecting the growing strategic importance of soft power",
      ],
    },
    {
      id: "di-16-4",
      type: "describe_image",
      imageType: "pie_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Microplastic Sources in Ocean Systems",
      svgContent: SVG_4,
      keyPoints: [
        "Textile fibres are the largest single source of oceanic microplastics at 35%",
        "Packaging fragmentation contributes 22%, highlighting consumer plastic waste impact",
        "Tyre wear particles at 16% enter waterways via stormwater runoff from roads",
        "Derelict fishing gear accounts for 14%, reflecting gaps in marine industry regulation",
      ],
    },
    {
      id: "di-16-5",
      type: "describe_image",
      imageType: "process",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Artificial Photosynthesis Hydrogen Production",
      svgContent: SVG_5,
      keyPoints: [
        "Process begins with solar light absorption by a photocatalytic semiconductor material",
        "Absorbed energy drives charge separation, producing electron-hole pairs",
        "Water oxidation at the anode releases oxygen gas and protons",
        "Proton reduction at the cathode generates hydrogen gas for collection and storage",
      ],
    },
    {
      id: "di-16-6",
      type: "describe_image",
      imageType: "table",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Epistemological Frameworks Comparison",
      svgContent: SVG_6,
      keyPoints: [
        "Empiricism and rationalism represent the foundational competing traditions in epistemology",
        "Falsificationism, associated with Popper, underpins the scientific method's demand for testable claims",
        "Constructivism emphasises socially mediated knowledge, influential in education research",
        "Critical realism attempts to reconcile objective reality with interpretive knowledge limitations",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-16-1",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Artificial Photosynthesis and the Hydrogen Economy",
      lectureText:
        "One of the most ambitious goals in renewable energy research is to replicate the elegant chemistry that plants have perfected over billions of years. Natural photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen with remarkable efficiency. Artificial photosynthesis aims to replicate just part of this process: using sunlight to split water molecules into hydrogen and oxygen. The hydrogen produced can serve as a clean fuel, generating only water when combusted or used in a fuel cell. The central challenge is creating catalysts that are both efficient and durable. Early systems used rare platinum-group metals, but researchers are now developing catalysts based on Earth-abundant elements like iron, cobalt, and nickel. The field has made substantial progress, with some laboratory systems now achieving solar-to-hydrogen conversion efficiencies exceeding fifteen percent, though scaling these systems to industrial production remains the critical unsolved engineering problem.",
      keyPoints: [
        "Artificial photosynthesis aims to use sunlight to split water into hydrogen and oxygen",
        "The hydrogen produced is a clean fuel that yields only water on combustion or in fuel cells",
        "Early catalysts used rare platinum-group metals, now replaced with Earth-abundant alternatives",
        "Iron, cobalt, and nickel are among the Earth-abundant elements being explored for catalysis",
        "Laboratory efficiencies exceed 15% but industrial-scale production remains an unsolved challenge",
      ],
    },
    {
      id: "rl-16-2",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Microplastics and Marine Food Webs",
      lectureText:
        "The discovery of microplastics in virtually every marine environment on Earth has prompted urgent scientific investigation into their ecological consequences. These particles, which range from nanometres to five millimetres in size, are now present in plankton, fish, seabirds, and marine mammals. The mechanisms of harm are multiple. Physically, microplastics can block digestive systems, create false sensations of satiety, and cause tissue damage. Chemically, plastic polymers act as sponges for persistent organic pollutants and heavy metals, concentrating toxins that then transfer to organisms that ingest them. Bioaccumulation through food webs means that apex predators, including humans who consume seafood, may receive concentrated doses of these contaminants. What makes the problem particularly intractable is that microplastics are extraordinarily persistent, and we currently have no viable technology for removing them from the ocean at scale.",
      keyPoints: [
        "Microplastics are now present across all marine environments and in organisms at every trophic level",
        "Physical harms include digestive blockage, false satiety, and internal tissue damage",
        "Plastic polymers concentrate persistent organic pollutants and heavy metals from surrounding water",
        "Bioaccumulation through food webs exposes apex predators, including humans, to concentrated toxins",
        "No viable technology currently exists to remove microplastics from the ocean at scale",
      ],
    },
    {
      id: "rl-16-3",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Falsificationism and the Philosophy of Science",
      lectureText:
        "Karl Popper's philosophy of science transformed how we think about the relationship between theory and evidence. Before Popper, many philosophers argued that science advanced by accumulating confirming observations. Popper argued this was logically flawed: no finite number of positive observations can conclusively prove a universal theory, but a single decisive counterexample can disprove it. He proposed falsifiability as the criterion that distinguishes scientific claims from non-scientific ones. A theory is scientific only if it makes predictions that could, in principle, be shown to be wrong. This had profound implications: it meant that psychoanalysis and Marxist historical theory, which Popper saw as able to accommodate any conceivable outcome, were not genuinely scientific. The scientific method, properly understood, is not about proving theories true but about subjecting them to the most demanding tests possible and retaining those that survive. Popper called this critical rationalism.",
      keyPoints: [
        "Popper challenged the view that science advances through accumulating confirming observations",
        "He showed logically that no finite observations can conclusively prove a universal theory",
        "Falsifiability is Popper's criterion distinguishing scientific from non-scientific claims",
        "Psychoanalysis and Marxist historical theory were criticised for being unfalsifiable",
        "Critical rationalism holds that science retains theories that survive rigorous testing rather than proving them true",
      ],
    },
  ],

  answerShort: [
    {
      id: "as-16-1",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What gas is produced when artificial photosynthesis splits water molecules?",
      expectedAnswer: "Hydrogen",
    },
    {
      id: "as-16-2",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What substance in semiconductor catalysts absorbs sunlight in artificial photosynthesis?",
      expectedAnswer: "Photocatalyst",
    },
    {
      id: "as-16-3",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What term describes cities being warmer than surrounding rural areas?",
      expectedAnswer: "Urban heat island",
    },
    {
      id: "as-16-4",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What type of roof covering can reduce urban building heat absorption?",
      expectedAnswer: "Green roof",
    },
    {
      id: "as-16-5",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What concept describes a nation's ability to influence others through culture rather than force?",
      expectedAnswer: "Soft power",
    },
    {
      id: "as-16-6",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the maximum size of a particle classified as a microplastic?",
      expectedAnswer: "Five millimetres",
    },
    {
      id: "as-16-7",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the name of the philosophical criterion Popper used to define science?",
      expectedAnswer: "Falsifiability",
    },
    {
      id: "as-16-8",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "Which epistemological tradition holds that knowledge derives from sensory experience?",
      expectedAnswer: "Empiricism",
    },
    {
      id: "as-16-9",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What process describes pollutants increasing in concentration up a food chain?",
      expectedAnswer: "Bioaccumulation",
    },
    {
      id: "as-16-10",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What is the largest source of microplastics entering the ocean?",
      expectedAnswer: "Synthetic textiles",
    },
  ],
};

export default test16;
