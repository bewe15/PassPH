import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">ADHD Diagnosis Rates by Age Group (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="130" x2="370" y2="130" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="180" x2="370" y2="180" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="65" y="110" width="48" height="110" fill="#06b6d4" rx="2"/>
  <rect x="135" y="75" width="48" height="145" fill="#06b6d4" rx="2"/>
  <rect x="205" y="90" width="48" height="130" fill="#06b6d4" rx="2"/>
  <rect x="275" y="135" width="48" height="85" fill="#06b6d4" rx="2"/>
  <text x="89" y="105" text-anchor="middle" font-size="10" fill="#0e7490">5.5%</text>
  <text x="159" y="70" text-anchor="middle" font-size="10" fill="#0e7490">7.2%</text>
  <text x="229" y="85" text-anchor="middle" font-size="10" fill="#0e7490">6.8%</text>
  <text x="299" y="130" text-anchor="middle" font-size="10" fill="#0e7490">4.3%</text>
  <text x="89" y="240" text-anchor="middle" font-size="11" fill="#64748b">6–9 yrs</text>
  <text x="159" y="240" text-anchor="middle" font-size="11" fill="#64748b">10–13 yrs</text>
  <text x="229" y="240" text-anchor="middle" font-size="11" fill="#64748b">14–17 yrs</text>
  <text x="299" y="240" text-anchor="middle" font-size="11" fill="#64748b">18–25 yrs</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Carbon Fibre Composite Market (USD billion)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="75" x2="370" y2="75" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="130" x2="370" y2="130" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="185" x2="370" y2="185" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <polyline points="80,200 145,183 210,162 275,120 340,65" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="80" cy="200" r="4" fill="#06b6d4"/>
  <circle cx="145" cy="183" r="4" fill="#06b6d4"/>
  <circle cx="210" cy="162" r="4" fill="#06b6d4"/>
  <circle cx="275" cy="120" r="4" fill="#06b6d4"/>
  <circle cx="340" cy="65" r="4" fill="#06b6d4"/>
  <text x="80" y="217" text-anchor="middle" font-size="10" fill="#64748b">2018</text>
  <text x="145" y="217" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="210" y="217" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="275" y="217" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="340" y="217" text-anchor="middle" font-size="10" fill="#64748b">2024</text>
  <text x="80" y="195" text-anchor="middle" font-size="9" fill="#0e7490">18.2</text>
  <text x="145" y="178" text-anchor="middle" font-size="9" fill="#0e7490">20.4</text>
  <text x="210" y="157" text-anchor="middle" font-size="9" fill="#0e7490">23.1</text>
  <text x="275" y="115" text-anchor="middle" font-size="9" fill="#0e7490">28.7</text>
  <text x="340" y="60" text-anchor="middle" font-size="9" fill="#0e7490">36.5</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Trade Dispute Origins (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 220,66 Z" fill="#06b6d4"/>
  <path d="M150,130 L220,66 A80,80 0 0,1 228,148 Z" fill="#0ea5e9"/>
  <path d="M150,130 L228,148 A80,80 0 0,1 175,207 Z" fill="#7c3aed"/>
  <path d="M150,130 L175,207 A80,80 0 0,1 80,175 Z" fill="#f59e0b"/>
  <path d="M150,130 L80,175 A80,80 0 0,1 72,110 Z" fill="#10b981"/>
  <path d="M150,130 L72,110 A80,80 0 0,1 150,50 Z" fill="#e11d48"/>
  <rect x="250" y="45" width="12" height="12" fill="#06b6d4"/><text x="268" y="56" font-size="11" fill="#334155">USA 18%</text>
  <rect x="250" y="65" width="12" height="12" fill="#0ea5e9"/><text x="268" y="76" font-size="11" fill="#334155">China 22%</text>
  <rect x="250" y="85" width="12" height="12" fill="#7c3aed"/><text x="268" y="96" font-size="11" fill="#334155">EU 17%</text>
  <rect x="250" y="105" width="12" height="12" fill="#f59e0b"/><text x="268" y="116" font-size="11" fill="#334155">India 13%</text>
  <rect x="250" y="125" width="12" height="12" fill="#10b981"/><text x="268" y="136" font-size="11" fill="#334155">ASEAN 16%</text>
  <rect x="250" y="145" width="12" height="12" fill="#e11d48"/><text x="268" y="156" font-size="11" fill="#334155">Other 14%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Food System Transformation Milestones</text>
  <defs>
    <marker id="arr14" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4"/>
    </marker>
  </defs>
  <rect x="20" y="50" width="90" height="44" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="65" y="70" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Traditional</text>
  <text x="65" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Farming</text>
  <path d="M111,72 L135,72" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr14)"/>
  <rect x="136" y="50" width="90" height="44" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="181" y="70" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Precision</text>
  <text x="181" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Agriculture</text>
  <path d="M227,72 L251,72" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr14)"/>
  <rect x="252" y="50" width="90" height="44" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="297" y="70" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Vertical</text>
  <text x="297" y="84" text-anchor="middle" font-size="10" fill="#1e293b">Farming</text>
  <path d="M181,95 L181,119" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr14)"/>
  <rect x="136" y="120" width="90" height="44" fill="#e0f2fe" stroke="#06b6d4" stroke-width="1.5" rx="4"/>
  <text x="181" y="140" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Alt. Protein</text>
  <text x="181" y="154" text-anchor="middle" font-size="10" fill="#1e293b">Production</text>
  <path d="M181,165 L181,189" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr14)"/>
  <rect x="110" y="190" width="140" height="44" fill="#cffafe" stroke="#0e7490" stroke-width="2" rx="4"/>
  <text x="180" y="210" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Sustainable Food</text>
  <text x="180" y="224" text-anchor="middle" font-size="10" fill="#1e293b">Ecosystem</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">NLP Model Accuracy by Task Type (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="80" x2="370" y2="80" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="50" y1="150" x2="370" y2="150" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3"/>
  <rect x="60" y="85" width="40" height="135" fill="#06b6d4" rx="2"/>
  <rect x="120" y="65" width="40" height="155" fill="#0ea5e9" rx="2"/>
  <rect x="180" y="100" width="40" height="120" fill="#7c3aed" rx="2"/>
  <rect x="240" y="75" width="40" height="145" fill="#f59e0b" rx="2"/>
  <rect x="300" y="55" width="40" height="165" fill="#10b981" rx="2"/>
  <text x="80" y="81" text-anchor="middle" font-size="9" fill="#0e7490">82%</text>
  <text x="140" y="61" text-anchor="middle" font-size="9" fill="#0e7490">88%</text>
  <text x="200" y="96" text-anchor="middle" font-size="9" fill="#0e7490">79%</text>
  <text x="260" y="71" text-anchor="middle" font-size="9" fill="#0e7490">85%</text>
  <text x="320" y="51" text-anchor="middle" font-size="9" fill="#0e7490">91%</text>
  <text x="80" y="240" text-anchor="middle" font-size="9" fill="#64748b">Sentiment</text>
  <text x="140" y="240" text-anchor="middle" font-size="9" fill="#64748b">Translation</text>
  <text x="200" y="240" text-anchor="middle" font-size="9" fill="#64748b">Parsing</text>
  <text x="260" y="240" text-anchor="middle" font-size="9" fill="#64748b">NER</text>
  <text x="320" y="240" text-anchor="middle" font-size="9" fill="#64748b">Summarise</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Neurodiversity Support Strategies</text>
  <rect x="20" y="35" width="360" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="20" y="35" width="360" height="28" fill="#0e7490" rx="4"/>
  <text x="110" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Strategy</text>
  <text x="255" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Effectiveness</text>
  <text x="355" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Cost</text>
  <line x1="20" y1="63" x2="380" y2="63" stroke="#e2e8f0"/>
  <line x1="190" y1="35" x2="190" y2="245" stroke="#e2e8f0"/>
  <line x1="305" y1="35" x2="305" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="82" text-anchor="middle" font-size="10" fill="#1e293b">Structured Routines</text>
  <text x="255" y="82" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
  <text x="355" y="82" text-anchor="middle" font-size="10" fill="#1e293b">Low</text>
  <line x1="20" y1="90" x2="380" y2="90" stroke="#f1f5f9"/>
  <text x="110" y="109" text-anchor="middle" font-size="10" fill="#1e293b">Sensory Adjustments</text>
  <text x="255" y="109" text-anchor="middle" font-size="10" fill="#1e293b">Moderate</text>
  <text x="355" y="109" text-anchor="middle" font-size="10" fill="#1e293b">Medium</text>
  <line x1="20" y1="117" x2="380" y2="117" stroke="#f1f5f9"/>
  <text x="110" y="136" text-anchor="middle" font-size="10" fill="#1e293b">Cognitive Behavioural</text>
  <text x="255" y="136" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
  <text x="355" y="136" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
  <line x1="20" y1="144" x2="380" y2="144" stroke="#f1f5f9"/>
  <text x="110" y="163" text-anchor="middle" font-size="10" fill="#1e293b">Medication</text>
  <text x="255" y="163" text-anchor="middle" font-size="10" fill="#1e293b">Very High</text>
  <text x="355" y="163" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
  <line x1="20" y1="171" x2="380" y2="171" stroke="#f1f5f9"/>
  <text x="110" y="190" text-anchor="middle" font-size="10" fill="#1e293b">Peer Support Groups</text>
  <text x="255" y="190" text-anchor="middle" font-size="10" fill="#1e293b">Moderate</text>
  <text x="355" y="190" text-anchor="middle" font-size="10" fill="#1e293b">Low</text>
  <line x1="20" y1="198" x2="380" y2="198" stroke="#f1f5f9"/>
  <text x="110" y="217" text-anchor="middle" font-size="10" fill="#1e293b">Technology Aids</text>
  <text x="255" y="217" text-anchor="middle" font-size="10" fill="#1e293b">High</text>
  <text x="355" y="217" text-anchor="middle" font-size="10" fill="#1e293b">Medium</text>
</svg>`;

const test14: PTESpeakingTest = {
  id: "pte-speaking-14",
  title: "PTE Speaking — Test 14",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-14-1",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Neurodiversity refers to the natural variation in human brain function and behavioural traits. Conditions such as ADHD, autism, and dyslexia are increasingly recognised not as deficits but as cognitive differences that may confer advantages in creativity, pattern recognition, and problem-solving when individuals receive appropriate support and accommodations in educational or professional settings.",
    },
    {
      id: "ra-14-2",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Composite materials combine two or more constituent substances to produce structural properties superior to those of the individual components. Carbon fibre reinforced polymers, for instance, offer exceptional tensile strength at significantly reduced weight, making them indispensable in aerospace, automotive, and civil engineering applications where performance-to-mass ratios are critical design considerations.",
    },
    {
      id: "ra-14-3",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Geopolitical tensions arising from contested trade routes and resource access have increasingly disrupted global supply chains. Nations are responding by reshoring manufacturing capacity and diversifying supplier networks, a strategic shift that, while costly in the short term, aims to reduce systemic vulnerabilities exposed by pandemic-era disruptions and escalating great-power competition.",
    },
    {
      id: "ra-14-4",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Transforming the global food system requires coordinated action across agriculture, distribution, consumption, and waste management. Innovations such as precision fermentation, vertical farming, and alternative proteins offer pathways to reduce land use and greenhouse gas emissions while meeting the nutritional demands of a growing world population projected to exceed nine billion by mid-century.",
    },
    {
      id: "ra-14-5",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Computational linguistics bridges the study of human language with the capabilities of modern computing systems. Natural language processing models trained on vast corpora can now perform machine translation, sentiment analysis, and text summarisation with impressive accuracy. However, challenges remain in handling linguistic ambiguity, cultural context, and low-resource languages spoken by minority communities worldwide.",
    },
    {
      id: "ra-14-6",
      type: "read_aloud",
      prepSeconds: 30,
      speakSeconds: 40,
      text: "Attention deficit hyperactivity disorder affects executive function, working memory, and impulse regulation across multiple life domains. Contemporary research challenges earlier assumptions that ADHD is primarily a childhood condition, demonstrating that many adults continue to experience significant symptoms. Personalised intervention strategies combining pharmacological treatment with cognitive behavioural approaches yield the most consistent outcomes.",
    },
  ],

  repeatSentence: [
    {
      id: "rs-14-1",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Neurodiversity encompasses a broad spectrum of cognitive and neurological variations.",
    },
    {
      id: "rs-14-2",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Carbon fibre composites have revolutionised lightweight structural engineering across multiple industries.",
    },
    {
      id: "rs-14-3",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Geopolitical instability has accelerated the reshoring of critical manufacturing supply chains.",
    },
    {
      id: "rs-14-4",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Vertical farming reduces water consumption by up to ninety percent compared to conventional agriculture.",
    },
    {
      id: "rs-14-5",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Natural language processing systems require enormous datasets to achieve acceptable translation accuracy.",
    },
    {
      id: "rs-14-6",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "ADHD symptoms often persist into adulthood, affecting workplace performance and interpersonal relationships.",
    },
    {
      id: "rs-14-7",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Alternative protein sources may significantly reduce the environmental footprint of global food production.",
    },
    {
      id: "rs-14-8",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Composite materials exhibit anisotropic mechanical behaviour that must be carefully accounted for in design.",
    },
    {
      id: "rs-14-9",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Sanctions and tariffs remain primary instruments of economic statecraft in geopolitical disputes.",
    },
    {
      id: "rs-14-10",
      type: "repeat_sentence",
      speakSeconds: 15,
      audioUrl: "",
      sentence: "Sentiment analysis algorithms can misclassify nuanced or culturally specific expressions of emotion.",
    },
  ],

  describeImage: [
    {
      id: "di-14-1",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "ADHD Diagnosis Rates by Age Group",
      svgContent: SVG_1,
      keyPoints: [
        "Diagnosis rates peak in the 10–13 age group at 7.2%",
        "Rates decline sharply in the 18–25 age group to 4.3%",
        "Early adolescence represents the most commonly diagnosed period",
        "Overall prevalence suggests significant public health implications for support services",
      ],
    },
    {
      id: "di-14-2",
      type: "describe_image",
      imageType: "line_graph",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Carbon Fibre Composite Market Growth",
      svgContent: SVG_2,
      keyPoints: [
        "Market grew from USD 18.2 billion in 2018 to USD 36.5 billion in 2024",
        "Consistent upward trajectory with accelerating growth post-2020",
        "Aerospace and automotive sectors drive the majority of demand",
        "Compound annual growth rate of approximately 12% over the period",
      ],
    },
    {
      id: "di-14-3",
      type: "describe_image",
      imageType: "pie_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Global Trade Dispute Origins",
      svgContent: SVG_3,
      keyPoints: [
        "China accounts for the largest share at 22% of global trade disputes",
        "The USA and EU together represent 35% of dispute origins",
        "ASEAN is a growing contributor at 16%",
        "The data reflects increasing multipolar trade friction in the global economy",
      ],
    },
    {
      id: "di-14-4",
      type: "describe_image",
      imageType: "process",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Food System Transformation Pathway",
      svgContent: SVG_4,
      keyPoints: [
        "Process moves from traditional farming through precision and vertical farming",
        "Alternative protein production represents a parallel innovation pathway",
        "All pathways converge toward a sustainable food ecosystem",
        "Transition requires technological investment and regulatory adaptation",
      ],
    },
    {
      id: "di-14-5",
      type: "describe_image",
      imageType: "bar_chart",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "NLP Model Accuracy by Task Type",
      svgContent: SVG_5,
      keyPoints: [
        "Text summarisation achieves the highest accuracy at 91%",
        "Parsing tasks show the lowest performance among the five categories at 79%",
        "Named Entity Recognition and translation both exceed 85% accuracy",
        "Results highlight the uneven maturity of different NLP capabilities",
      ],
    },
    {
      id: "di-14-6",
      type: "describe_image",
      imageType: "table",
      prepSeconds: 25,
      speakSeconds: 40,
      title: "Neurodiversity Support Strategies Comparison",
      svgContent: SVG_6,
      keyPoints: [
        "Structured routines and technology aids offer high effectiveness at low to medium cost",
        "Medication is rated very high in effectiveness but carries a high cost",
        "Peer support groups represent an accessible, low-cost moderate intervention",
        "Cognitive behavioural therapy is highly effective but resource intensive",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-14-1",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Executive Function and ADHD",
      lectureText:
        "Today I want to talk about the neuroscience behind ADHD, particularly its relationship to executive function. Executive function is an umbrella term for a set of mental processes that help us plan, focus, remember instructions, and manage multiple tasks simultaneously. In individuals with ADHD, the prefrontal cortex, which governs these processes, shows distinct patterns of under-activation. Dopamine and norepinephrine signalling are typically less efficient, which explains why stimulant medications can dramatically improve focus by enhancing neurotransmitter availability. What is fascinating is that ADHD is not a deficit of attention per se, but rather a difficulty regulating attention in response to external demands. Many individuals with ADHD can sustain intense concentration on activities they find intrinsically rewarding, a phenomenon sometimes called hyperfocus.",
      keyPoints: [
        "ADHD is linked to under-activation of the prefrontal cortex",
        "Dopamine and norepinephrine signalling is less efficient in ADHD",
        "Stimulant medications enhance neurotransmitter availability to improve focus",
        "ADHD represents difficulty regulating attention rather than a complete deficit",
        "Hyperfocus describes the ability to concentrate intensely on intrinsically rewarding tasks",
      ],
    },
    {
      id: "rl-14-2",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "Advanced Composite Engineering",
      lectureText:
        "Composite materials engineering has undergone a revolution over the past three decades. The key principle is simple: by combining materials with complementary properties, engineers can create structures that outperform any single material. Carbon fibre reinforced polymers, for example, have a strength-to-weight ratio several times greater than structural steel. The manufacturing process involves laying carbon fibre tows in precise orientations within a polymer matrix, then curing under heat and pressure in an autoclave. The orientation of the fibres determines the directional strength of the final component. This anisotropic behaviour means composites must be carefully designed for each application. Aerospace components, racing car chassis, and wind turbine blades all rely on these engineered material systems to achieve performance targets that would otherwise be impossible.",
      keyPoints: [
        "Composites combine materials with complementary properties for superior performance",
        "Carbon fibre reinforced polymers offer far greater strength-to-weight ratios than steel",
        "Manufacturing involves laying fibres in precise orientations within a polymer matrix",
        "Anisotropic behaviour means composite strength varies with direction",
        "Key applications include aerospace, motorsport, and wind energy components",
      ],
    },
    {
      id: "rl-14-3",
      type: "retell_lecture",
      prepSeconds: 10,
      speakSeconds: 40,
      audioUrl: "",
      topic: "NLP and the Future of Language Technology",
      lectureText:
        "Natural language processing has advanced more rapidly in the last decade than in the preceding fifty years combined. The introduction of transformer architectures and large language models trained on internet-scale datasets has enabled machines to perform tasks once thought to require genuine human understanding. These include not just translation and summarisation, but also code generation, legal document analysis, and medical diagnosis support. However, significant limitations remain. Current models frequently produce confident but incorrect statements, a problem researchers call hallucination. They also struggle with languages that have limited training data. And perhaps most importantly, they lack the ability to update their knowledge from lived experience the way humans do. Understanding these boundaries is essential for deploying language technology responsibly and effectively.",
      keyPoints: [
        "Transformer architectures and large language models have driven rapid NLP progress",
        "Modern NLP applications extend to code generation, legal analysis, and medical support",
        "Hallucination describes the generation of confident but factually incorrect outputs",
        "Low-resource languages remain a significant challenge for NLP systems",
        "NLP models cannot update knowledge from real-world experience like humans can",
      ],
    },
  ],

  answerShort: [
    {
      id: "as-14-1",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What brain region is primarily associated with executive function?",
      expectedAnswer: "Prefrontal cortex",
    },
    {
      id: "as-14-2",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What neurotransmitter is most commonly discussed in relation to ADHD?",
      expectedAnswer: "Dopamine",
    },
    {
      id: "as-14-3",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What term describes materials whose properties vary with direction?",
      expectedAnswer: "Anisotropic",
    },
    {
      id: "as-14-4",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "Which composite material is most widely used in aerospace engineering?",
      expectedAnswer: "Carbon fibre",
    },
    {
      id: "as-14-5",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What word describes the relocation of manufacturing back to a company's home country?",
      expectedAnswer: "Reshoring",
    },
    {
      id: "as-14-6",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What type of farming produces crops inside controlled indoor environments?",
      expectedAnswer: "Vertical farming",
    },
    {
      id: "as-14-7",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What NLP task involves identifying people, places, and organisations in text?",
      expectedAnswer: "Named entity recognition",
    },
    {
      id: "as-14-8",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What term describes an NLP model generating a plausible but incorrect statement?",
      expectedAnswer: "Hallucination",
    },
    {
      id: "as-14-9",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What architectural innovation underpins most modern large language models?",
      expectedAnswer: "Transformer",
    },
    {
      id: "as-14-10",
      type: "answer_short",
      speakSeconds: 10,
      audioUrl: "",
      question: "What phenomenon describes intense concentration by a person with ADHD on a preferred task?",
      expectedAnswer: "Hyperfocus",
    },
  ],
};

export default test14;
