import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Dark Matter Distribution by Cosmic Structure (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="60" width="50" height="160" fill="#06b6d4" rx="2"/>
  <rect x="140" y="95" width="50" height="125" fill="#0ea5e9" rx="2"/>
  <rect x="215" y="135" width="50" height="85" fill="#7c3aed" rx="2"/>
  <rect x="290" y="175" width="50" height="45" fill="#f59e0b" rx="2"/>
  <text x="90" y="55" text-anchor="middle" font-size="10" fill="#0e7490">54%</text>
  <text x="165" y="90" text-anchor="middle" font-size="10" fill="#0e7490">42%</text>
  <text x="240" y="130" text-anchor="middle" font-size="10" fill="#0e7490">28%</text>
  <text x="315" y="170" text-anchor="middle" font-size="10" fill="#0e7490">15%</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">Filaments</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">Halos</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">Clusters</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">Voids</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Supply Chain Disruption Costs by Sector 2019–2023 (USD bn)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="75" width="42" height="145" fill="#06b6d4" rx="2"/>
  <rect x="120" y="100" width="42" height="120" fill="#0ea5e9" rx="2"/>
  <rect x="175" y="120" width="42" height="100" fill="#7c3aed" rx="2"/>
  <rect x="230" y="145" width="42" height="75" fill="#f59e0b" rx="2"/>
  <rect x="285" y="165" width="42" height="55" fill="#10b981" rx="2"/>
  <text x="86" y="70" text-anchor="middle" font-size="10" fill="#0e7490">420</text>
  <text x="141" y="95" text-anchor="middle" font-size="10" fill="#0e7490">350</text>
  <text x="196" y="115" text-anchor="middle" font-size="10" fill="#0e7490">290</text>
  <text x="251" y="140" text-anchor="middle" font-size="10" fill="#0e7490">215</text>
  <text x="306" y="160" text-anchor="middle" font-size="10" fill="#0e7490">160</text>
  <text x="86" y="240" text-anchor="middle" font-size="9" fill="#64748b">Auto</text>
  <text x="141" y="240" text-anchor="middle" font-size="9" fill="#64748b">Electronics</text>
  <text x="196" y="240" text-anchor="middle" font-size="9" fill="#64748b">Pharma</text>
  <text x="251" y="240" text-anchor="middle" font-size="9" fill="#64748b">Retail</text>
  <text x="306" y="240" text-anchor="middle" font-size="9" fill="#64748b">Food</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Multilingual Speaker Proportions by Region (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 164,206 Z" fill="#0ea5e9"/>
  <path d="M140,130 L164,206 A80,80 0 0,1 63,167 Z" fill="#7c3aed"/>
  <path d="M140,130 L63,167 A80,80 0 0,1 63,93 Z" fill="#f59e0b"/>
  <path d="M140,130 L63,93 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Africa 35%</text>
  <rect x="240" y="75" width="12" height="12" fill="#0ea5e9"/><text x="258" y="86" font-size="11" fill="#334155">Asia 27%</text>
  <rect x="240" y="100" width="12" height="12" fill="#7c3aed"/><text x="258" y="111" font-size="11" fill="#334155">Europe 18%</text>
  <rect x="240" y="125" width="12" height="12" fill="#f59e0b"/><text x="258" y="136" font-size="11" fill="#334155">Americas 13%</text>
  <rect x="240" y="150" width="12" height="12" fill="#10b981"/><text x="258" y="161" font-size="11" fill="#334155">Oceania 7%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Rewilding Projects: Species Recovery Outcomes</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="100" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Species</text>
  <text x="210" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Recovery (%)</text>
  <text x="320" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Region</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="155" y1="35" x2="155" y2="245" stroke="#e2e8f0"/>
  <line x1="270" y1="35" x2="270" y2="245" stroke="#e2e8f0"/>
  <text x="100" y="90" text-anchor="middle" font-size="11" fill="#334155">Grey Wolf</text><text x="210" y="90" text-anchor="middle" font-size="11" fill="#334155">+68</text><text x="320" y="90" text-anchor="middle" font-size="11" fill="#334155">Yellowstone</text>
  <line x1="30" y1="100" x2="370" y2="100" stroke="#f1f5f9"/>
  <text x="100" y="122" text-anchor="middle" font-size="11" fill="#334155">Lynx</text><text x="210" y="122" text-anchor="middle" font-size="11" fill="#334155">+52</text><text x="320" y="122" text-anchor="middle" font-size="11" fill="#334155">Scotland</text>
  <line x1="30" y1="132" x2="370" y2="132" stroke="#f1f5f9"/>
  <text x="100" y="154" text-anchor="middle" font-size="11" fill="#334155">Bison</text><text x="210" y="154" text-anchor="middle" font-size="11" fill="#334155">+47</text><text x="320" y="154" text-anchor="middle" font-size="11" fill="#334155">Poland</text>
  <line x1="30" y1="164" x2="370" y2="164" stroke="#f1f5f9"/>
  <text x="100" y="186" text-anchor="middle" font-size="11" fill="#334155">Sea Eagle</text><text x="210" y="186" text-anchor="middle" font-size="11" fill="#334155">+61</text><text x="320" y="186" text-anchor="middle" font-size="11" fill="#334155">Ireland</text>
  <line x1="30" y1="196" x2="370" y2="196" stroke="#f1f5f9"/>
  <text x="100" y="218" text-anchor="middle" font-size="11" fill="#334155">Beaver</text><text x="210" y="218" text-anchor="middle" font-size="11" fill="#334155">+85</text><text x="320" y="218" text-anchor="middle" font-size="11" fill="#334155">UK/Europe</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Investor Loss Aversion Index by Asset Class 2015–2023</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,185 106,168 162,145 218,125 274,108 330,88 370,72" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#06b6d4"/>
  <circle cx="106" cy="168" r="4" fill="#06b6d4"/>
  <circle cx="162" cy="145" r="4" fill="#06b6d4"/>
  <circle cx="218" cy="125" r="4" fill="#06b6d4"/>
  <circle cx="274" cy="108" r="4" fill="#06b6d4"/>
  <circle cx="330" cy="88" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="72" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2015</text>
  <text x="106" y="240" text-anchor="middle" font-size="10" fill="#64748b">2016</text>
  <text x="162" y="240" text-anchor="middle" font-size="10" fill="#64748b">2017</text>
  <text x="218" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="274" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="330" y="240" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
  <text x="58" y="183" font-size="9" fill="#0e7490">1.8×</text>
  <text x="374" y="70" font-size="9" fill="#0e7490">3.1×</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Rewilding Implementation Process</text>
  <defs><marker id="arr19" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <rect x="10" y="90" width="75" height="40" rx="6" fill="#06b6d4"/>
  <text x="47" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Site Survey</text>
  <text x="47" y="121" text-anchor="middle" font-size="9" fill="white">Assess habitat</text>
  <line x1="85" y1="110" x2="103" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr19)"/>
  <rect x="105" y="90" width="75" height="40" rx="6" fill="#0ea5e9"/>
  <text x="142" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Stakeholder</text>
  <text x="142" y="121" text-anchor="middle" font-size="9" fill="white">Engagement</text>
  <line x1="180" y1="110" x2="198" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr19)"/>
  <rect x="200" y="90" width="75" height="40" rx="6" fill="#7c3aed"/>
  <text x="237" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Species</text>
  <text x="237" y="121" text-anchor="middle" font-size="9" fill="white">Reintroduction</text>
  <line x1="275" y1="110" x2="293" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr19)"/>
  <rect x="295" y="90" width="95" height="40" rx="6" fill="#10b981"/>
  <text x="342" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Monitoring</text>
  <text x="342" y="121" text-anchor="middle" font-size="9" fill="white">Long-term review</text>
  <text x="200" y="175" text-anchor="middle" font-size="10" fill="#64748b">Baseline ecological surveys inform species selection</text>
  <text x="200" y="195" text-anchor="middle" font-size="10" fill="#64748b">Local communities and landowners must be consulted</text>
  <text x="200" y="215" text-anchor="middle" font-size="10" fill="#64748b">Ongoing monitoring tracks population recovery and ecosystem change</text>
</svg>`;

const test19: PTESpeakingTest = {
  id: "pte-speaking-19",
  title: "PTE Speaking — Test 19",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-19-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Dark matter is one of the most compelling mysteries in modern cosmology. It neither emits nor absorbs electromagnetic radiation, making it invisible to conventional telescopes, yet its gravitational influence is evident in the rotation curves of galaxies, the bending of light around massive clusters, and the large-scale structure of the universe. Scientists estimate that dark matter constitutes approximately 27 percent of the total mass-energy content of the cosmos, compared with only five percent for all visible matter.",
    },
    {
      id: "ra-19-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Supply chain resilience has become a strategic priority for companies and governments following a series of major disruptions, including the COVID-19 pandemic, extreme weather events, and geopolitical tensions. A resilient supply chain can absorb shocks, adapt to changing conditions, and recover quickly from disruptions. Strategies to improve resilience include diversifying supplier networks, maintaining strategic inventory buffers, investing in digital visibility tools, and developing contingency protocols for critical components.",
    },
    {
      id: "ra-19-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Multilingualism is the ability to use two or more languages with varying degrees of proficiency, and it is the norm rather than the exception across most of the world. Code-switching, the practice of alternating between languages within a single conversation or even a sentence, is a natural feature of bilingual and multilingual communication. Far from indicating linguistic deficiency, research shows that code-switching reflects high cognitive flexibility and pragmatic competence, allowing speakers to signal identity, manage social relationships, and fill lexical gaps.",
    },
    {
      id: "ra-19-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Rewilding is a progressive approach to conservation that aims to restore and protect natural processes and wilderness areas by reintroducing keystone species and reducing human management of land. Unlike traditional conservation, which often seeks to preserve existing conditions, rewilding embraces ecological dynamism and focuses on long-term ecosystem self-regulation. High-profile projects, such as the reintroduction of grey wolves to Yellowstone National Park, have demonstrated dramatic cascading effects on entire ecosystems, a phenomenon known as trophic cascade.",
    },
    {
      id: "ra-19-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Behavioural finance examines how psychological biases and cognitive limitations affect the financial decisions of individuals and institutions. Prospect theory, developed by Daniel Kahneman and Amos Tversky, demonstrates that people do not evaluate outcomes in terms of absolute wealth but rather relative to a reference point, and that losses are felt approximately twice as powerfully as equivalent gains. This asymmetry, known as loss aversion, helps explain phenomena such as the disposition effect, whereby investors hold losing stocks too long and sell winning ones too early.",
    },
    {
      id: "ra-19-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The cosmic web is the large-scale structure of the universe, in which galaxies and dark matter are arranged into an intricate network of filaments, sheets, and nodes surrounding vast underdense regions called voids. This structure emerged from tiny quantum fluctuations in the very early universe that were amplified by gravity over billions of years. Cosmological simulations incorporating dark matter correctly reproduce the observed large-scale structure, providing one of the strongest indirect lines of evidence for its existence.",
    },
  ],

  repeatSentence: [
    { id: "rs-19-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Weakly interacting massive particles remain the leading theoretical candidate for dark matter." },
    { id: "rs-19-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Companies with diversified supplier bases recovered from the pandemic significantly faster than others." },
    { id: "rs-19-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Bilingual children often demonstrate superior executive function compared to their monolingual peers." },
    { id: "rs-19-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The reintroduction of apex predators can transform entire river systems through behavioural pressure on prey." },
    { id: "rs-19-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Loss aversion causes investors to treat potential losses as more significant than equivalent gains." },
    { id: "rs-19-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Gravitational lensing provides direct evidence that mass exists in regions with no visible matter." },
    { id: "rs-19-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Just-in-time manufacturing leaves global supply chains highly exposed to single-point failures." },
    { id: "rs-19-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Code-switching frequency increases when speakers share a common bilingual identity." },
    { id: "rs-19-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Successful rewilding requires long-term land tenure agreements with private landowners." },
    { id: "rs-19-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Mental accounting leads individuals to treat money differently depending on its perceived source." },
  ],

  describeImage: [
    {
      id: "di-19-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Dark Matter Distribution by Cosmic Structure (%)",
      svgContent: SVG_1,
      keyPoints: [
        "Cosmic filaments contain the largest share of dark matter at 54%",
        "Galactic halos account for 42% of dark matter distribution",
        "Galaxy clusters hold 28% of the total dark matter content",
        "Cosmic voids contain the least dark matter at only 15%",
      ],
    },
    {
      id: "di-19-2", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Supply Chain Disruption Costs by Sector 2019–2023 (USD bn)",
      svgContent: SVG_2,
      keyPoints: [
        "The automotive sector suffered the highest disruption costs at USD 420 billion",
        "Electronics was the second most affected sector at USD 350 billion",
        "The pharmaceutical supply chain incurred USD 290 billion in losses",
        "Food supply chains were the least disrupted at USD 160 billion",
      ],
    },
    {
      id: "di-19-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Multilingual Speaker Proportions by Region (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Africa has the highest proportion of multilingual speakers at 35%",
        "Asia accounts for 27% of the world's multilingual population",
        "Europe contributes 18% reflecting its many national languages",
        "Oceania has the smallest share at 7%",
      ],
    },
    {
      id: "di-19-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Rewilding Projects: Species Recovery Outcomes",
      svgContent: SVG_4,
      keyPoints: [
        "Beaver populations showed the strongest recovery at 85% in UK and Europe",
        "Grey wolf populations grew by 68% following Yellowstone reintroduction",
        "Sea eagles in Ireland showed a 61% recovery rate",
        "All five featured species showed significant population growth after rewilding",
      ],
    },
    {
      id: "di-19-5", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Investor Loss Aversion Index by Asset Class 2015–2023",
      svgContent: SVG_5,
      keyPoints: [
        "The loss aversion index rose steadily from 1.8× in 2015 to 3.1× in 2023",
        "The steepest increase occurred between 2019 and 2022 during market volatility",
        "A rising index indicates investors feel losses more acutely over time",
        "Behavioural finance predicts this bias persists regardless of market conditions",
      ],
    },
    {
      id: "di-19-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Rewilding Implementation Process",
      svgContent: SVG_6,
      keyPoints: [
        "The process begins with a comprehensive site survey to assess baseline habitat",
        "Stakeholder engagement with landowners and communities is a critical second stage",
        "Species are selected and reintroduced based on ecological role and site suitability",
        "Long-term monitoring programmes track population recovery and ecosystem change",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-19-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Search for Dark Matter",
      lectureText: "Despite constituting roughly 27 percent of the universe's total mass-energy content, dark matter has never been directly detected in a laboratory. Scientists infer its presence through multiple independent lines of evidence. The rotation curves of spiral galaxies show that stars in the outer regions orbit far faster than Newtonian mechanics would predict from visible matter alone, implying the presence of an invisible mass component. Gravitational lensing — the bending of light from distant galaxies around massive foreground objects — also reveals more mass than can be accounted for by stars and gas. The leading theoretical candidates are weakly interacting massive particles, known as WIMPs, and axions, both of which are predicted by extensions of the standard model of particle physics. Enormous underground detectors, shielded from cosmic ray interference, have searched for WIMP signals with increasing sensitivity for over two decades, but so far no confirmed detection has been made, placing ever tighter constraints on the allowed parameter space and pushing physicists to consider alternative explanations.",
      keyPoints: [
        "Dark matter comprises about 27% of the universe's total mass-energy",
        "Galaxy rotation curves indicate unseen mass in outer galactic regions",
        "Gravitational lensing independently confirms excess mass",
        "WIMPs and axions are the leading theoretical candidates",
        "Underground detectors have found no confirmed signal despite decades of searching",
      ],
    },
    {
      id: "rl-19-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Building Resilient Supply Chains",
      lectureText: "The pandemic exposed a fundamental flaw in globalised supply chain design — the relentless pursuit of cost efficiency had created systems that were highly optimised but deeply fragile. When factories in a single region shut down, the effects cascaded across continents. Semiconductor shortages forced automotive plants to halt production on multiple continents simultaneously. In response, firms and governments have begun rethinking supply chain strategy through the lens of resilience rather than pure efficiency. Key measures include geographic diversification of sourcing to avoid single-country dependency, the reshoring or friendshoring of critical component production to allied nations, the use of digital twins and real-time data platforms to gain end-to-end visibility across supplier networks, and the maintenance of strategic inventory buffers for essential goods. Economists note, however, that resilience always comes at a cost — redundant suppliers, higher inventories, and more complex logistics inevitably raise prices for end consumers. The challenge for policymakers is to determine which industries genuinely require strategic protection and to avoid protectionist policies that simply shift inefficiency rather than resolve it.",
      keyPoints: [
        "Pandemic revealed that efficiency-focused supply chains are highly fragile",
        "Semiconductor shortages caused global automotive production halts",
        "Firms are diversifying sourcing to reduce single-country dependency",
        "Digital twins and real-time data improve supply chain visibility",
        "Resilience measures raise costs, posing a policy trade-off",
      ],
    },
    {
      id: "rl-19-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Prospect Theory and Financial Decision-Making",
      lectureText: "Kahneman and Tversky's prospect theory, published in 1979, fundamentally challenged the prevailing economic assumption that humans are rational utility maximisers. Their experiments demonstrated that people evaluate outcomes relative to a reference point — typically the status quo — and that the pain of losing a sum of money is psychologically about twice as powerful as the pleasure of gaining the same amount. This phenomenon, loss aversion, has profound implications for financial markets. It helps explain why investors are reluctant to realise losses by selling underperforming assets, why firms resist cutting wages even during recessions, and why the equity premium — the excess return demanded by investors for holding stocks over bonds — appears larger than standard models predict. More recently, behavioural economists have applied prospect theory to policy design through the concept of nudging — structuring choices so that the default option is the one most beneficial for individuals or society. Automatic enrolment in pension schemes, for instance, exploits people's tendency to stick with the status quo to dramatically increase retirement savings rates without restricting freedom of choice.",
      keyPoints: [
        "Prospect theory shows people evaluate outcomes relative to a reference point",
        "Losses feel approximately twice as painful as equivalent gains",
        "Loss aversion explains why investors hold losing stocks too long",
        "It also helps explain the observed equity risk premium",
        "Nudging uses behavioural insights to design better default choices in policy",
      ],
    },
  ],

  answerShort: [
    { id: "as-19-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What invisible substance makes up approximately 27 percent of the universe's mass-energy content?", expectedAnswer: "Dark matter" },
    { id: "as-19-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the bending of light around massive objects due to gravitational effects?", expectedAnswer: "Gravitational lensing" },
    { id: "as-19-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the practice of alternating between two or more languages within a single conversation called?", expectedAnswer: "Code-switching" },
    { id: "as-19-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term refers to the reintroduction of keystone species to restore natural ecosystems?", expectedAnswer: "Rewilding" },
    { id: "as-19-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which animal's reintroduction to Yellowstone is a famous example of a trophic cascade?", expectedAnswer: "Grey wolf" },
    { id: "as-19-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In prospect theory, approximately how many times more painful is a loss than an equivalent gain?", expectedAnswer: "Twice" },
    { id: "as-19-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What strategy involves producing critical goods domestically or in allied nations to reduce supply chain risk?", expectedAnswer: "Reshoring or friendshoring" },
    { id: "as-19-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the large-scale network of filaments, sheets, and voids that make up the structure of the universe?", expectedAnswer: "Cosmic web" },
    { id: "as-19-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What behavioural economics concept involves designing default choices to promote beneficial outcomes?", expectedAnswer: "Nudging" },
    { id: "as-19-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the tendency of investors to sell winning assets too early while holding losing ones too long?", expectedAnswer: "Disposition effect" },
  ],
};

export default test19;
