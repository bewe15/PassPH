import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_8_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Climate Adaptation Investment by Sector ($ billion)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="65" width="48" height="155" fill="#06b6d4" rx="2"/>
  <rect x="125" y="90" width="48" height="130" fill="#06b6d4" rx="2"/>
  <rect x="190" y="115" width="48" height="105" fill="#06b6d4" rx="2"/>
  <rect x="255" y="140" width="48" height="80" fill="#06b6d4" rx="2"/>
  <rect x="310" y="170" width="48" height="50" fill="#06b6d4" rx="2"/>
  <text x="84" y="60" text-anchor="middle" font-size="10" fill="#0e7490">155</text>
  <text x="149" y="85" text-anchor="middle" font-size="10" fill="#0e7490">130</text>
  <text x="214" y="110" text-anchor="middle" font-size="10" fill="#0e7490">105</text>
  <text x="279" y="135" text-anchor="middle" font-size="10" fill="#0e7490">80</text>
  <text x="334" y="165" text-anchor="middle" font-size="10" fill="#0e7490">50</text>
  <text x="84" y="240" text-anchor="middle" font-size="9" fill="#64748b">Coastal</text>
  <text x="149" y="240" text-anchor="middle" font-size="9" fill="#64748b">Water</text>
  <text x="214" y="240" text-anchor="middle" font-size="9" fill="#64748b">Agriculture</text>
  <text x="279" y="240" text-anchor="middle" font-size="9" fill="#64748b">Transport</text>
  <text x="334" y="240" text-anchor="middle" font-size="9" fill="#64748b">Health</text>
</svg>`;

const SVG_8_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Quantum Computing Research Papers Published (2015–2023)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,210 98,205 146,195 194,175 242,140 290,100 338,55 370,35" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="210" r="4" fill="#06b6d4"/>
  <circle cx="98" cy="205" r="4" fill="#06b6d4"/>
  <circle cx="146" cy="195" r="4" fill="#06b6d4"/>
  <circle cx="194" cy="175" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="140" r="4" fill="#06b6d4"/>
  <circle cx="290" cy="100" r="4" fill="#06b6d4"/>
  <circle cx="338" cy="55" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="35" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2015</text>
  <text x="98" y="240" text-anchor="middle" font-size="10" fill="#64748b">2016</text>
  <text x="146" y="240" text-anchor="middle" font-size="10" fill="#64748b">2017</text>
  <text x="194" y="240" text-anchor="middle" font-size="10" fill="#64748b">2018</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="290" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
  <text x="338" y="240" text-anchor="middle" font-size="10" fill="#64748b">2022</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
</svg>`;

const SVG_8_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Food Loss and Waste by Stage (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 228,97 Z" fill="#06b6d4"/>
  <path d="M150,130 L228,97 A80,80 0 0,1 218,205 Z" fill="#0ea5e9"/>
  <path d="M150,130 L218,205 A80,80 0 0,1 100,198 Z" fill="#7c3aed"/>
  <path d="M150,130 L100,198 A80,80 0 0,1 72,90 Z" fill="#f59e0b"/>
  <path d="M150,130 L72,90 A80,80 0 0,1 150,50 Z" fill="#10b981"/>
  <rect x="250" y="45" width="12" height="12" fill="#06b6d4"/><text x="268" y="56" font-size="11" fill="#334155">Production 28%</text>
  <rect x="250" y="70" width="12" height="12" fill="#0ea5e9"/><text x="268" y="81" font-size="11" fill="#334155">Processing 24%</text>
  <rect x="250" y="95" width="12" height="12" fill="#7c3aed"/><text x="268" y="106" font-size="11" fill="#334155">Retail 20%</text>
  <rect x="250" y="120" width="12" height="12" fill="#f59e0b"/><text x="268" y="131" font-size="11" fill="#334155">Consumer 17%</text>
  <rect x="250" y="145" width="12" height="12" fill="#10b981"/><text x="268" y="156" font-size="11" fill="#334155">Distribution 11%</text>
</svg>`;

const SVG_8_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs><marker id="arr8" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa"/></marker></defs>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">How a Democracy Functions</text>
  <rect x="150" y="35" width="100" height="34" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="200" y="57" text-anchor="middle" font-size="11" fill="#0e7490">Citizens Vote</text>
  <line x1="200" y1="69" x2="200" y2="90" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr8)"/>
  <rect x="130" y="92" width="140" height="34" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="200" y="114" text-anchor="middle" font-size="11" fill="#0e7490">Parliament Elected</text>
  <line x1="200" y1="126" x2="200" y2="147" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr8)"/>
  <rect x="120" y="149" width="160" height="34" rx="6" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>
  <text x="200" y="171" text-anchor="middle" font-size="11" fill="#0e7490">Government Formed</text>
  <line x1="200" y1="183" x2="200" y2="204" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr8)"/>
  <rect x="110" y="206" width="180" height="34" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="200" y="228" text-anchor="middle" font-size="11" fill="#065f46">Laws and Policies Made</text>
  <line x1="110" y1="223" x2="70" y2="223" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="70" y1="223" x2="70" y2="52" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="70" y1="52" x2="150" y2="52" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr8)"/>
  <text x="35" y="140" font-size="10" fill="#64748b" transform="rotate(-90,35,140)">Accountability</text>
</svg>`;

const SVG_8_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Key Milestones in Human Evolution</text>
  <rect x="30" y="35" width="340" height="215" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="28" fill="#0e7490" rx="4"/>
  <text x="125" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Species</text>
  <text x="255" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Years Ago</text>
  <text x="355" y="54" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Key Trait</text>
  <line x1="200" y1="35" x2="200" y2="250" stroke="#e2e8f0"/>
  <line x1="310" y1="35" x2="310" y2="250" stroke="#e2e8f0"/>
  <rect x="30" y="63" width="340" height="28" fill="#f0fdf4"/>
  <text x="125" y="82" text-anchor="middle" font-size="10" fill="#334155">Australopithecus</text><text x="255" y="82" text-anchor="middle" font-size="10" fill="#334155">3–4 million</text><text x="355" y="82" text-anchor="middle" font-size="10" fill="#334155">Bipedalism</text>
  <rect x="30" y="91" width="340" height="28" fill="white"/>
  <text x="125" y="110" text-anchor="middle" font-size="10" fill="#334155">Homo habilis</text><text x="255" y="110" text-anchor="middle" font-size="10" fill="#334155">2.4 million</text><text x="355" y="110" text-anchor="middle" font-size="10" fill="#334155">Stone tools</text>
  <rect x="30" y="119" width="340" height="28" fill="#f0fdf4"/>
  <text x="125" y="138" text-anchor="middle" font-size="10" fill="#334155">Homo erectus</text><text x="255" y="138" text-anchor="middle" font-size="10" fill="#334155">1.9 million</text><text x="355" y="138" text-anchor="middle" font-size="10" fill="#334155">Fire use</text>
  <rect x="30" y="147" width="340" height="28" fill="white"/>
  <text x="125" y="166" text-anchor="middle" font-size="10" fill="#334155">Homo neanderthalensis</text><text x="255" y="166" text-anchor="middle" font-size="10" fill="#334155">400,000</text><text x="355" y="166" text-anchor="middle" font-size="10" fill="#334155">Burial rituals</text>
  <rect x="30" y="175" width="340" height="28" fill="#f0fdf4"/>
  <text x="125" y="194" text-anchor="middle" font-size="10" fill="#334155">Homo sapiens</text><text x="255" y="194" text-anchor="middle" font-size="10" fill="#334155">300,000</text><text x="355" y="194" text-anchor="middle" font-size="10" fill="#334155">Complex language</text>
  <rect x="30" y="203" width="340" height="28" fill="white"/>
  <text x="125" y="222" text-anchor="middle" font-size="10" fill="#334155">Modern humans</text><text x="255" y="222" text-anchor="middle" font-size="10" fill="#334155">70,000</text><text x="355" y="222" text-anchor="middle" font-size="10" fill="#334155">Global migration</text>
</svg>`;

const SVG_8_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Caloric Availability per Person per Day by Region</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="60" y="50" width="45" height="170" fill="#06b6d4" rx="2"/>
  <rect x="120" y="70" width="45" height="150" fill="#0ea5e9" rx="2"/>
  <rect x="180" y="90" width="45" height="130" fill="#7c3aed" rx="2"/>
  <rect x="240" y="100" width="45" height="120" fill="#f59e0b" rx="2"/>
  <rect x="300" y="150" width="45" height="70" fill="#ef4444" rx="2"/>
  <text x="82" y="45" text-anchor="middle" font-size="10" fill="#0e7490">3,780</text>
  <text x="142" y="65" text-anchor="middle" font-size="10" fill="#0e7490">3,540</text>
  <text x="202" y="85" text-anchor="middle" font-size="10" fill="#0e7490">3,300</text>
  <text x="262" y="95" text-anchor="middle" font-size="10" fill="#0e7490">3,100</text>
  <text x="322" y="145" text-anchor="middle" font-size="10" fill="#0e7490">2,200</text>
  <text x="82" y="240" text-anchor="middle" font-size="9" fill="#64748b">N. America</text>
  <text x="142" y="240" text-anchor="middle" font-size="9" fill="#64748b">Europe</text>
  <text x="202" y="240" text-anchor="middle" font-size="9" fill="#64748b">L. America</text>
  <text x="262" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia</text>
  <text x="322" y="240" text-anchor="middle" font-size="9" fill="#64748b">Sub-Saharan</text>
</svg>`;

const test8: PTESpeakingTest = {
  id: "pte-speaking-8",
  title: "PTE Speaking — Test 8",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-8-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Climate adaptation refers to the adjustments that societies and ecosystems make in response to actual or anticipated climate change. Unlike mitigation, which seeks to reduce greenhouse gas emissions, adaptation focuses on managing the unavoidable consequences of warming temperatures. Governments are increasingly investing in sea walls, drought-resistant crops, and early warning systems, recognising that some degree of climate change is now inevitable regardless of future emissions reductions.",
    },
    {
      id: "ra-8-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Quantum computing exploits the principles of quantum mechanics to perform calculations that would be impossible for conventional computers. Unlike classical bits, which represent either zero or one, quantum bits or qubits can exist in multiple states simultaneously through a phenomenon called superposition. This property, combined with quantum entanglement, enables quantum computers to solve certain complex problems exponentially faster than their classical counterparts.",
    },
    {
      id: "ra-8-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The global food system faces mounting pressure from population growth, climate change, and shifting dietary preferences. Approximately one-third of all food produced for human consumption is lost or wasted each year, contributing to greenhouse gas emissions and squandering scarce water and land resources. Redesigning supply chains to minimise losses, promoting sustainable diets, and investing in resilient agricultural systems are all essential components of a more sustainable food future.",
    },
    {
      id: "ra-8-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Democracy as a system of governance rests on the principle that political authority derives from the consent of the governed. While free and fair elections are widely considered a core democratic requirement, theorists argue that democracy also demands robust civil liberties, an independent judiciary, and a free press. In recent decades, democratic backsliding has been observed in several countries, raising concerns about the long-term resilience of democratic institutions worldwide.",
    },
    {
      id: "ra-8-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The study of human evolution draws on fossil evidence, genetic analysis, and archaeological findings to reconstruct the history of our species. Anatomically modern humans emerged in Africa approximately three hundred thousand years ago and gradually spread across the globe, interbreeding with earlier hominid species including Neanderthals and Denisovans. Advances in ancient DNA analysis have revealed that this process of migration and hybridisation was far more complex than previously understood.",
    },
    {
      id: "ra-8-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Vertical integration in food systems occurs when a single company controls multiple stages of production, from farming and processing through to retail distribution. Proponents argue that this model improves efficiency and reduces food waste by streamlining logistics and quality control. Critics, however, warn that excessive consolidation can reduce competition, suppress farmer incomes, and create fragile supply chains vulnerable to disruption from disease outbreaks or extreme weather events.",
    },
  ],

  repeatSentence: [
    { id: "rs-8-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The university library closes at ten o'clock on weekday evenings." },
    { id: "rs-8-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Quantum computers may soon solve problems that are currently impossible to compute." },
    { id: "rs-8-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Democratic elections require independent oversight to ensure transparency and fairness." },
    { id: "rs-8-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Fossil evidence suggests that modern humans originated in Africa." },
    { id: "rs-8-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "One third of all food produced globally is lost or wasted each year." },
    { id: "rs-8-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Climate adaptation strategies must be tailored to local environmental conditions." },
    { id: "rs-8-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The workshop on sustainable food systems is open to all postgraduate students." },
    { id: "rs-8-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Research suggests that early hominids used stone tools over two million years ago." },
    { id: "rs-8-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students must register for the practical computing session by Friday afternoon." },
    { id: "rs-8-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Global temperatures have risen by more than one degree Celsius since pre-industrial times." },
  ],

  describeImage: [
    {
      id: "di-8-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Climate Adaptation Investment by Sector ($ billion)",
      svgContent: SVG_8_1,
      keyPoints: ["Coastal protection receives the most investment at $155 billion", "Water management is second at $130 billion", "Health adaptation receives the least at $50 billion", "All sectors require substantial ongoing investment"],
    },
    {
      id: "di-8-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Quantum Computing Research Papers Published (2015–2023)",
      svgContent: SVG_8_2,
      keyPoints: ["Publications grew steadily from 2015", "Exponential growth is visible from 2019 onwards", "The field has seen dramatic acceleration in recent years", "Growth reflects increased global interest and investment"],
    },
    {
      id: "di-8-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Food Loss and Waste by Stage (%)",
      svgContent: SVG_8_3,
      keyPoints: ["Production accounts for the largest share at 28%", "Processing contributes 24% of food loss", "Consumer-level waste accounts for 17%", "Combined pre-retail losses exceed 60%"],
    },
    {
      id: "di-8-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "How a Democracy Functions",
      svgContent: SVG_8_4,
      keyPoints: ["Citizens cast votes to elect representatives", "Parliament forms and selects a government", "Government creates laws and policies", "Accountability loop returns power to citizens"],
    },
    {
      id: "di-8-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Key Milestones in Human Evolution",
      svgContent: SVG_8_5,
      keyPoints: ["Bipedalism emerged with Australopithecus 3–4 million years ago", "Homo habilis was the first to use stone tools", "Fire use began with Homo erectus", "Homo sapiens developed complex language around 300,000 years ago"],
    },
    {
      id: "di-8-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Caloric Availability per Person per Day by Region",
      svgContent: SVG_8_6,
      keyPoints: ["North America has the highest caloric availability per person", "Sub-Saharan Africa is significantly below all other regions", "Europe and Latin America are comparably well-supplied", "Large regional disparities reflect food system inequalities"],
    },
  ],

  retellLecture: [
    {
      id: "rl-8-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Quantum Computing and Its Potential",
      lectureText: "Quantum computing represents a fundamentally different approach to computation. Classical computers use bits that are either zero or one, while quantum computers use qubits that can be in superposition — existing as both zero and one simultaneously. This allows quantum machines to explore many solutions at once rather than testing them sequentially. The phenomenon of entanglement further amplifies their power, allowing qubits to be correlated so that the state of one instantly influences another regardless of distance. Google's 2019 demonstration of quantum supremacy — where their quantum processor completed a task in two hundred seconds that would take the world's best classical computer ten thousand years — was a landmark moment. Potential applications include drug discovery, financial modelling, and breaking or strengthening encryption systems. However, significant technical barriers remain, particularly around qubit stability and error correction.",
      keyPoints: ["Qubits can exist in superposition — both 0 and 1 simultaneously", "Entanglement links qubits regardless of physical distance", "Google demonstrated quantum supremacy in 2019", "Applications include drug discovery, finance, and encryption", "Qubit stability and error correction remain major challenges"],
    },
    {
      id: "rl-8-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Global Food System Under Pressure",
      lectureText: "The global food system feeds over eight billion people, but it does so at enormous environmental cost. Agriculture accounts for approximately 25 percent of global greenhouse gas emissions, 70 percent of freshwater withdrawals, and is the leading driver of biodiversity loss. At the same time, around 800 million people remain chronically undernourished while over two billion are overweight or obese — what researchers call the double burden of malnutrition. The food system is also highly vulnerable to climate shocks: droughts, floods, and extreme heat events increasingly threaten crop yields. Transforming the food system requires shifts in what we eat, particularly a reduction in meat and dairy consumption, as well as how food is produced. Agroecological approaches that work with natural systems rather than against them are gaining traction as a more sustainable alternative to industrial monoculture farming.",
      keyPoints: ["Agriculture produces 25% of global greenhouse gas emissions", "800 million people are undernourished; 2 billion are overweight", "Climate shocks increasingly threaten crop yields", "Reducing meat and dairy is critical for sustainability", "Agroecological methods offer a more sustainable alternative"],
    },
    {
      id: "rl-8-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Human Evolution and Ancient DNA",
      lectureText: "The story of human evolution is far more complex than early researchers imagined. For much of the twentieth century, scientists believed that Homo sapiens evolved in Africa and then spread outward, replacing all other hominid populations. Ancient DNA analysis has challenged this narrative. We now know that as early humans migrated out of Africa, they interbred extensively with Neanderthals and Denisovans — two archaic human species. As a result, most people of non-African ancestry carry roughly one to four percent Neanderthal DNA. Some of these inherited genes have been shown to influence immune function and even susceptibility to modern diseases. The discovery of the Denisovans in 2010 from a finger bone in Siberia, combined with evidence of their interbreeding with modern humans, suggests there may be other yet-undiscovered hominid lineages still to be found.",
      keyPoints: ["Modern humans migrated out of Africa and interbred with other hominids", "Non-African people carry 1–4% Neanderthal DNA", "Neanderthal genes influence immune function and disease susceptibility", "Denisovans were discovered from a finger bone found in Siberia in 2010", "Further unknown hominid lineages may still be discovered"],
    },
  ],

  answerShort: [
    { id: "as-8-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the process of adjusting to actual or expected climate change?", expectedAnswer: "Adaptation" },
    { id: "as-8-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the basic unit of information in a quantum computer?", expectedAnswer: "Qubit" },
    { id: "as-8-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which continent is considered the birthplace of modern humans?", expectedAnswer: "Africa" },
    { id: "as-8-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the amount of water used to produce food or goods?", expectedAnswer: "Water footprint" },
    { id: "as-8-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a government elected by the people through regular voting?", expectedAnswer: "Representative democracy" },
    { id: "as-8-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the minimum number of planets in our solar system?", expectedAnswer: "Eight" },
    { id: "as-8-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What type of farming avoids synthetic chemicals and uses natural processes?", expectedAnswer: "Organic farming" },
    { id: "as-8-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the gradual retreat of democratic norms in a country?", expectedAnswer: "Democratic backsliding" },
    { id: "as-8-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the chemical formula for water?", expectedAnswer: "H2O" },
    { id: "as-8-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the fossilised remains of ancient organisms preserved in rock?", expectedAnswer: "Fossils" },
  ],
};

export default test8;
