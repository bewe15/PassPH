import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Cognitive Load by Task Type (mean score)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="90" width="50" height="130" fill="#06b6d4" rx="2"/>
  <rect x="140" y="60" width="50" height="160" fill="#06b6d4" rx="2"/>
  <rect x="215" y="110" width="50" height="110" fill="#06b6d4" rx="2"/>
  <rect x="290" y="140" width="50" height="80" fill="#06b6d4" rx="2"/>
  <text x="90" y="85" text-anchor="middle" font-size="10" fill="#0e7490">6.5</text>
  <text x="165" y="55" text-anchor="middle" font-size="10" fill="#0e7490">8.0</text>
  <text x="240" y="105" text-anchor="middle" font-size="10" fill="#0e7490">5.5</text>
  <text x="315" y="135" text-anchor="middle" font-size="10" fill="#0e7490">4.0</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">Multitask</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">Problem-solve</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">Reading</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">Recall</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Satellite Launches per Year (2015–2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,205 100,198 150,188 200,175 250,145 300,100 350,55" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="205" r="4" fill="#06b6d4"/>
  <circle cx="100" cy="198" r="4" fill="#06b6d4"/>
  <circle cx="150" cy="188" r="4" fill="#06b6d4"/>
  <circle cx="200" cy="175" r="4" fill="#06b6d4"/>
  <circle cx="250" cy="145" r="4" fill="#06b6d4"/>
  <circle cx="300" cy="100" r="4" fill="#06b6d4"/>
  <circle cx="350" cy="55" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2015</text>
  <text x="117" y="240" text-anchor="middle" font-size="10" fill="#64748b">2016</text>
  <text x="183" y="240" text-anchor="middle" font-size="10" fill="#64748b">2017</text>
  <text x="250" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="300" y="240" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="350" y="240" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Public Health Spending Allocation (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 176,204 Z" fill="#0ea5e9"/>
  <path d="M140,130 L176,204 A80,80 0 0,1 64,164 Z" fill="#7c3aed"/>
  <path d="M140,130 L64,164 A80,80 0 0,1 64,96 Z" fill="#f59e0b"/>
  <path d="M140,130 L64,96 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="55" width="12" height="12" fill="#06b6d4"/><text x="258" y="66" font-size="11" fill="#334155">Hospitals 25%</text>
  <rect x="240" y="80" width="12" height="12" fill="#0ea5e9"/><text x="258" y="91" font-size="11" fill="#334155">Medicines 22%</text>
  <rect x="240" y="105" width="12" height="12" fill="#7c3aed"/><text x="258" y="116" font-size="11" fill="#334155">Prevention 20%</text>
  <rect x="240" y="130" width="12" height="12" fill="#f59e0b"/><text x="258" y="141" font-size="11" fill="#334155">Research 18%</text>
  <rect x="240" y="155" width="12" height="12" fill="#10b981"/><text x="258" y="166" font-size="11" fill="#334155">Admin 15%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Sustainable Fashion Adoption by Region (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="100" width="45" height="120" fill="#06b6d4" rx="2"/>
  <rect x="130" y="70" width="45" height="150" fill="#06b6d4" rx="2"/>
  <rect x="195" y="130" width="45" height="90" fill="#06b6d4" rx="2"/>
  <rect x="260" y="155" width="45" height="65" fill="#06b6d4" rx="2"/>
  <rect x="325" y="85" width="30" height="135" fill="#06b6d4" rx="2"/>
  <text x="87" y="95" text-anchor="middle" font-size="10" fill="#0e7490">30%</text>
  <text x="152" y="65" text-anchor="middle" font-size="10" fill="#0e7490">38%</text>
  <text x="217" y="125" text-anchor="middle" font-size="10" fill="#0e7490">22%</text>
  <text x="282" y="150" text-anchor="middle" font-size="10" fill="#0e7490">16%</text>
  <text x="340" y="80" text-anchor="middle" font-size="10" fill="#0e7490">34%</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">N.America</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">Africa</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">Oceania</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Behavioural Economics: Key Bias Effects</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="110" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Bias</text>
  <text x="230" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Effect Size</text>
  <text x="340" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Domain</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="170" y1="35" x2="170" y2="245" stroke="#e2e8f0"/>
  <line x1="290" y1="35" x2="290" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="88" text-anchor="middle" font-size="10" fill="#334155">Anchoring</text><text x="230" y="88" text-anchor="middle" font-size="10" fill="#334155">High</text><text x="340" y="88" text-anchor="middle" font-size="10" fill="#334155">Finance</text>
  <line x1="30" y1="98" x2="370" y2="98" stroke="#f1f5f9"/>
  <text x="110" y="120" text-anchor="middle" font-size="10" fill="#334155">Loss Aversion</text><text x="230" y="120" text-anchor="middle" font-size="10" fill="#334155">Very High</text><text x="340" y="120" text-anchor="middle" font-size="10" fill="#334155">Decisions</text>
  <line x1="30" y1="130" x2="370" y2="130" stroke="#f1f5f9"/>
  <text x="110" y="152" text-anchor="middle" font-size="10" fill="#334155">Availability</text><text x="230" y="152" text-anchor="middle" font-size="10" fill="#334155">Moderate</text><text x="340" y="152" text-anchor="middle" font-size="10" fill="#334155">Risk</text>
  <line x1="30" y1="162" x2="370" y2="162" stroke="#f1f5f9"/>
  <text x="110" y="184" text-anchor="middle" font-size="10" fill="#334155">Status Quo</text><text x="230" y="184" text-anchor="middle" font-size="10" fill="#334155">High</text><text x="340" y="184" text-anchor="middle" font-size="10" fill="#334155">Policy</text>
  <line x1="30" y1="194" x2="370" y2="194" stroke="#f1f5f9"/>
  <text x="110" y="216" text-anchor="middle" font-size="10" fill="#334155">Framing</text><text x="230" y="216" text-anchor="middle" font-size="10" fill="#334155">Moderate</text><text x="340" y="216" text-anchor="middle" font-size="10" fill="#334155">Marketing</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr12" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#06b6d4"/></marker></defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Cognitive Behavioural Therapy Process</text>
  <rect x="140" y="35" width="120" height="36" rx="6" fill="#06b6d4"/>
  <text x="200" y="57" text-anchor="middle" font-size="11" fill="white">Identify Trigger</text>
  <line x1="200" y1="71" x2="200" y2="93" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr12)"/>
  <rect x="140" y="94" width="120" height="36" rx="6" fill="#0e7490"/>
  <text x="200" y="116" text-anchor="middle" font-size="11" fill="white">Challenge Thought</text>
  <line x1="200" y1="130" x2="200" y2="152" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr12)"/>
  <rect x="140" y="153" width="120" height="36" rx="6" fill="#06b6d4"/>
  <text x="200" y="175" text-anchor="middle" font-size="11" fill="white">Reframe Belief</text>
  <line x1="200" y1="189" x2="200" y2="211" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr12)"/>
  <rect x="140" y="212" width="120" height="36" rx="6" fill="#0e7490"/>
  <text x="200" y="234" text-anchor="middle" font-size="11" fill="white">Behavioural Change</text>
</svg>`;

const test12: PTESpeakingTest = {
  id: "pte-speaking-12",
  title: "PTE Speaking — Test 12",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-12-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Cognitive psychology examines the mental processes underlying perception, memory, and reasoning. Researchers in this field have shown that human attention is limited and selective, meaning we cannot consciously process all incoming information simultaneously. Understanding these constraints has important implications for education, interface design, and the treatment of attention-related disorders such as ADHD.",
    },
    {
      id: "ra-12-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Satellite technology has transformed navigation, communication, and environmental monitoring over the past several decades. Modern constellations of small, low-orbit satellites now provide global internet coverage and enable precise Earth observation. Commercial operators have dramatically reduced launch costs, opening the space economy to a wider range of governmental and private actors than at any previous point in history.",
    },
    {
      id: "ra-12-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Effective public health policy relies on the integration of epidemiological data, health economics, and community engagement. Governments must balance individual freedoms against collective protection when designing interventions such as vaccination programmes or dietary guidelines. Evidence-based policy-making, guided by independent scientific advisory bodies, is increasingly regarded as essential to achieving durable improvements in population health.",
    },
    {
      id: "ra-12-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Sustainable fashion challenges the prevailing model of rapid, disposable clothing production. The industry is one of the largest contributors to global pollution, consuming vast quantities of water and generating significant textile waste. Designers and brands are exploring circular economy principles, including material recycling and garment leasing, to reduce environmental impact while maintaining commercial viability.",
    },
    {
      id: "ra-12-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Behavioural economics merges insights from psychology with traditional economic theory to better explain real-world decision-making. Classical models assumed that individuals act rationally and in their own interest, yet experimental evidence consistently reveals systematic biases and heuristics that lead to predictable errors. These findings have significant implications for the design of financial products, public policy, and workplace incentive structures.",
    },
    {
      id: "ra-12-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Memory consolidation is the process by which newly acquired information is stabilised and integrated into long-term storage. During sleep, the hippocampus replays recent experiences and transfers them to the neocortex for durable retention. Disruptions to sleep architecture, such as those caused by stress or shift work, can impair consolidation and lead to measurable deficits in recall and learning efficiency.",
    },
  ],

  repeatSentence: [
    { id: "rs-12-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The seminar on cognitive biases has been moved to Thursday afternoon." },
    { id: "rs-12-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students are required to read three peer-reviewed articles before the tutorial." },
    { id: "rs-12-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The satellite data confirmed a significant rise in global surface temperatures." },
    { id: "rs-12-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Public health interventions must be both cost-effective and culturally sensitive." },
    { id: "rs-12-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The professor argued that loss aversion distorts economic decision-making." },
    { id: "rs-12-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Sustainable materials reduce the environmental footprint of the fashion industry." },
    { id: "rs-12-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Working memory capacity is strongly correlated with academic performance." },
    { id: "rs-12-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The research team published their findings in a leading psychology journal." },
    { id: "rs-12-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Vaccination programmes have eradicated several previously widespread infectious diseases." },
    { id: "rs-12-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The experiment tested whether framing effects influence charitable donation amounts." },
  ],

  describeImage: [
    {
      id: "di-12-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Cognitive Load by Task Type (mean score)",
      svgContent: SVG_1,
      keyPoints: ["Problem-solving generated the highest cognitive load (8.0)", "Recall tasks had the lowest load (4.0)", "Multitasking scored 6.5, above reading", "Overall, complex tasks demand significantly more cognitive resources"],
    },
    {
      id: "di-12-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Satellite Launches per Year (2015–2023)",
      svgContent: SVG_2,
      keyPoints: ["Launches increased steadily from 2015 to 2023", "Growth accelerated markedly after 2019", "The steepest rise occurred between 2021 and 2023", "Commercial operators drove much of the increase"],
    },
    {
      id: "di-12-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Public Health Spending Allocation (%)",
      svgContent: SVG_3,
      keyPoints: ["Hospitals receive the largest share at 25%", "Medicines account for 22% of spending", "Prevention and research together total 38%", "Administration is the smallest category at 15%"],
    },
    {
      id: "di-12-4", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Sustainable Fashion Adoption by Region (%)",
      svgContent: SVG_4,
      keyPoints: ["North America leads at 38% adoption", "Oceania is second at 34%, followed by Europe at 30%", "Africa has the lowest adoption rate at 16%", "Significant variation exists across global regions"],
    },
    {
      id: "di-12-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Behavioural Economics: Key Bias Effects",
      svgContent: SVG_5,
      keyPoints: ["Loss aversion has the greatest effect size", "Anchoring and status quo biases are both rated high", "Availability and framing biases are moderate in strength", "Biases operate across finance, risk, policy, and marketing"],
    },
    {
      id: "di-12-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "Cognitive Behavioural Therapy Process",
      svgContent: SVG_6,
      keyPoints: ["Process begins with identifying the triggering situation", "The patient then challenges automatic negative thoughts", "Beliefs are actively reframed through guided questioning", "Behavioural change is the final measurable outcome"],
    },
  ],

  retellLecture: [
    {
      id: "rl-12-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Science of Memory and Forgetting",
      lectureText: "Memory is not a passive recording of experience but an active, reconstructive process. Each time we recall an event, we subtly alter it, incorporating new information and expectations into the stored trace. Hermann Ebbinghaus, a pioneer of memory research, demonstrated that forgetting follows a predictable exponential curve — the so-called forgetting curve. We lose most new information within hours unless it is actively reinforced. Spaced repetition, the technique of reviewing material at increasing intervals, exploits this biological pattern to dramatically improve long-term retention. Modern educational technology has built these principles into adaptive learning platforms that adjust review schedules to individual learners. Understanding memory also has clinical importance: conditions such as Alzheimer's disease involve systematic destruction of the hippocampal structures critical to forming new memories.",
      keyPoints: ["Memory is reconstructive, not a passive recording", "The forgetting curve shows rapid initial information loss", "Spaced repetition counteracts forgetting effectively", "Adaptive learning platforms apply memory science", "Alzheimer's disease destroys hippocampal memory structures"],
    },
    {
      id: "rl-12-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Earth Observation Satellites and Climate Monitoring",
      lectureText: "Earth observation satellites have become indispensable tools for monitoring the planet's changing climate. Instruments aboard polar-orbiting and geostationary satellites measure sea surface temperatures, ice sheet extent, deforestation rates, and atmospheric greenhouse gas concentrations with unprecedented precision. Data from the European Space Agency's Sentinel constellation, for example, have revealed that Arctic sea ice is declining at roughly thirteen percent per decade. Satellite imagery has also enabled real-time tracking of illegal logging in the Amazon basin, supporting law enforcement efforts. As launch costs fall, nations and organisations that previously lacked independent space capability are now deploying their own Earth observation systems. This democratisation of satellite data promises to accelerate scientific understanding and improve climate governance worldwide.",
      keyPoints: ["Satellites measure sea temperature, ice, forests, and greenhouse gases", "Arctic sea ice is declining about 13% per decade", "Satellite imagery helps track illegal deforestation", "Falling launch costs democratise access to satellite data", "Improved data supports global climate governance"],
    },
    {
      id: "rl-12-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Nudge Theory and Public Policy",
      lectureText: "Nudge theory, developed by Richard Thaler and Cass Sunstein, proposes that small, carefully designed changes to the environment — called nudges — can guide people toward better decisions without restricting their freedom of choice. One classic example is automatic enrolment in pension schemes: when workers are enrolled by default and must actively opt out, participation rates rise dramatically compared to schemes requiring active sign-up. Governments around the world have established behavioural insight teams to apply nudge principles to areas including tax compliance, energy conservation, and healthy eating. Critics argue that nudges can be manipulative and may not address the structural causes of harmful behaviour. Proponents counter that nudges complement rather than replace regulation and education. The field continues to expand, with digital environments offering new opportunities to test and deploy behavioural interventions at scale.",
      keyPoints: ["Nudges are subtle environmental changes guiding better decisions", "Default enrolment dramatically increases pension participation", "Governments use behavioural insight teams across policy areas", "Critics worry nudges can be manipulative", "Digital environments offer new large-scale nudge opportunities"],
    },
  ],

  answerShort: [
    { id: "as-12-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the mental effort required to process information during a task?", expectedAnswer: "Cognitive load" },
    { id: "as-12-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which part of the brain is most associated with the formation of new memories?", expectedAnswer: "Hippocampus" },
    { id: "as-12-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call objects placed in orbit around the Earth to collect or relay data?", expectedAnswer: "Satellites" },
    { id: "as-12-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for clothing produced and discarded at a very rapid rate?", expectedAnswer: "Fast fashion" },
    { id: "as-12-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What psychological tendency makes people prefer avoiding losses over acquiring equivalent gains?", expectedAnswer: "Loss aversion" },
    { id: "as-12-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the technique that reviews material at gradually increasing intervals to aid retention?", expectedAnswer: "Spaced repetition" },
    { id: "as-12-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What branch of science studies the distribution and control of diseases in populations?", expectedAnswer: "Epidemiology" },
    { id: "as-12-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What economic model treats used products as inputs for new production cycles?", expectedAnswer: "Circular economy" },
    { id: "as-12-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the initial information presented in a negotiation that influences subsequent judgements?", expectedAnswer: "Anchor" },
    { id: "as-12-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the medical term for the progressive loss of memory and cognitive function in older adults?", expectedAnswer: "Dementia" },
  ],
};

export default test12;
