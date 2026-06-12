import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global CO₂ Emissions by Sector (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 222,90 Z" fill="#06b6d4"/>
  <path d="M150,130 L222,90 A80,80 0 0,1 218,173 Z" fill="#0ea5e9"/>
  <path d="M150,130 L218,173 A80,80 0 0,1 150,210 Z" fill="#7c3aed"/>
  <path d="M150,130 L150,210 A80,80 0 0,1 78,173 Z" fill="#f59e0b"/>
  <path d="M150,130 L78,173 A80,80 0 0,1 150,50 Z" fill="#10b981"/>
  <rect x="255" y="50" width="12" height="12" fill="#06b6d4"/><text x="273" y="61" font-size="11" fill="#334155">Energy 34%</text>
  <rect x="255" y="75" width="12" height="12" fill="#0ea5e9"/><text x="273" y="86" font-size="11" fill="#334155">Transport 16%</text>
  <rect x="255" y="100" width="12" height="12" fill="#7c3aed"/><text x="273" y="111" font-size="11" fill="#334155">Industry 24%</text>
  <rect x="255" y="125" width="12" height="12" fill="#f59e0b"/><text x="273" y="136" font-size="11" fill="#334155">Agriculture 11%</text>
  <rect x="255" y="150" width="12" height="12" fill="#10b981"/><text x="273" y="161" font-size="11" fill="#334155">Buildings 15%</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Average Temperature Anomaly 1880–2020</text>
  <line x1="50" y1="180" x2="370" y2="180" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,178 114,175 178,170 242,162 306,145 370,110" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="50" cy="178" r="4" fill="#ef4444"/><circle cx="114" cy="175" r="4" fill="#ef4444"/>
  <circle cx="178" cy="170" r="4" fill="#ef4444"/><circle cx="242" cy="162" r="4" fill="#ef4444"/>
  <circle cx="306" cy="145" r="4" fill="#ef4444"/><circle cx="370" cy="110" r="4" fill="#ef4444"/>
  <line x1="50" y1="180" x2="370" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
  <text x="380" y="184" font-size="9" fill="#64748b">Baseline</text>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">1880</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">1900</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">1940</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">1970</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2000</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2020</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Research Output by Country (papers, thousands)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="50" width="40" height="170" fill="#06b6d4" rx="2"/><text x="85" y="45" text-anchor="middle" font-size="10" fill="#0e7490">850</text>
  <rect x="125" y="90" width="40" height="130" fill="#06b6d4" rx="2"/><text x="145" y="85" text-anchor="middle" font-size="10" fill="#0e7490">650</text>
  <rect x="185" y="120" width="40" height="100" fill="#06b6d4" rx="2"/><text x="205" y="115" text-anchor="middle" font-size="10" fill="#0e7490">500</text>
  <rect x="245" y="150" width="40" height="70" fill="#06b6d4" rx="2"/><text x="265" y="145" text-anchor="middle" font-size="10" fill="#0e7490">350</text>
  <rect x="305" y="175" width="40" height="45" fill="#06b6d4" rx="2"/><text x="325" y="170" text-anchor="middle" font-size="10" fill="#0e7490">225</text>
  <text x="85" y="240" text-anchor="middle" font-size="9" fill="#64748b">China</text>
  <text x="145" y="240" text-anchor="middle" font-size="9" fill="#64748b">USA</text>
  <text x="205" y="240" text-anchor="middle" font-size="9" fill="#64748b">India</text>
  <text x="265" y="240" text-anchor="middle" font-size="9" fill="#64748b">Germany</text>
  <text x="325" y="240" text-anchor="middle" font-size="9" fill="#64748b">UK</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">How Sound Waves Travel</text>
  <rect x="15" y="90" width="60" height="40" fill="#e0f2fe" stroke="#06b6d4" rx="4"/>
  <text x="45" y="114" text-anchor="middle" font-size="11" fill="#0e7490">Source</text>
  <path d="M75,110 Q95,90 115,110 Q135,130 155,110" fill="none" stroke="#06b6d4" stroke-width="2"/>
  <path d="M115,110 Q135,90 155,110 Q175,130 195,110" fill="none" stroke="#06b6d4" stroke-width="2"/>
  <path d="M155,110 Q175,90 195,110 Q215,130 235,110" fill="none" stroke="#06b6d4" stroke-width="2"/>
  <path d="M195,110 Q215,90 235,110 Q255,130 275,110" fill="none" stroke="#06b6d4" stroke-width="2"/>
  <text x="180" y="150" text-anchor="middle" font-size="10" fill="#64748b">Compression waves (longitudinal)</text>
  <rect x="310" y="90" width="70" height="40" fill="#dcfce7" stroke="#10b981" rx="4"/>
  <text x="345" y="114" text-anchor="middle" font-size="11" fill="#15803d">Receiver</text>
  <path d="M275,110 L308,110" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arr6)"/>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#334155">Speed in air ≈ 343 m/s at 20°C</text>
  <defs><marker id="arr6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Marine Species Diversity by Ocean Zone</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="110" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Zone</text>
  <text x="210" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Depth (m)</text>
  <text x="310" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Species richness</text>
  <line x1="165" y1="35" x2="165" y2="245" stroke="#e2e8f0"/><line x1="265" y1="35" x2="265" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="85" text-anchor="middle" font-size="11" fill="#334155">Sunlight zone</text><text x="210" y="85" text-anchor="middle" font-size="11" fill="#334155">0–200</text><text x="310" y="85" text-anchor="middle" font-size="11" fill="#10b981">Very high</text>
  <line x1="30" y1="95" x2="370" y2="95" stroke="#f1f5f9"/>
  <text x="110" y="120" text-anchor="middle" font-size="11" fill="#334155">Twilight zone</text><text x="210" y="120" text-anchor="middle" font-size="11" fill="#334155">200–1000</text><text x="310" y="120" text-anchor="middle" font-size="11" fill="#f59e0b">Moderate</text>
  <line x1="30" y1="130" x2="370" y2="130" stroke="#f1f5f9"/>
  <text x="110" y="155" text-anchor="middle" font-size="11" fill="#334155">Midnight zone</text><text x="210" y="155" text-anchor="middle" font-size="11" fill="#334155">1000–4000</text><text x="310" y="155" text-anchor="middle" font-size="11" fill="#0ea5e9">Low</text>
  <line x1="30" y1="165" x2="370" y2="165" stroke="#f1f5f9"/>
  <text x="110" y="190" text-anchor="middle" font-size="11" fill="#334155">Abyssal zone</text><text x="210" y="190" text-anchor="middle" font-size="11" fill="#334155">4000–6000</text><text x="310" y="190" text-anchor="middle" font-size="11" fill="#7c3aed">Very low</text>
  <line x1="30" y1="200" x2="370" y2="200" stroke="#f1f5f9"/>
  <text x="110" y="225" text-anchor="middle" font-size="11" fill="#334155">Hadal zone</text><text x="210" y="225" text-anchor="middle" font-size="11" fill="#334155">6000+</text><text x="310" y="225" text-anchor="middle" font-size="11" fill="#ef4444">Minimal</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Music Streaming Listeners by Genre (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="65" width="40" height="155" fill="#06b6d4" rx="2"/><text x="85" y="60" text-anchor="middle" font-size="10" fill="#0e7490">31%</text>
  <rect x="120" y="85" width="40" height="135" fill="#0ea5e9" rx="2"/><text x="140" y="80" text-anchor="middle" font-size="10" fill="#0e7490">27%</text>
  <rect x="175" y="125" width="40" height="95" fill="#7c3aed" rx="2"/><text x="195" y="120" text-anchor="middle" font-size="10" fill="#0e7490">19%</text>
  <rect x="230" y="155" width="40" height="65" fill="#f59e0b" rx="2"/><text x="250" y="150" text-anchor="middle" font-size="10" fill="#0e7490">13%</text>
  <rect x="285" y="180" width="40" height="40" fill="#10b981" rx="2"/><text x="305" y="175" text-anchor="middle" font-size="10" fill="#0e7490">10%</text>
  <text x="85" y="240" text-anchor="middle" font-size="9" fill="#64748b">Pop</text>
  <text x="140" y="240" text-anchor="middle" font-size="9" fill="#64748b">Hip-hop</text>
  <text x="195" y="240" text-anchor="middle" font-size="9" fill="#64748b">Rock</text>
  <text x="250" y="240" text-anchor="middle" font-size="9" fill="#64748b">Electronic</text>
  <text x="305" y="240" text-anchor="middle" font-size="9" fill="#64748b">Classical</text>
</svg>`;

const test6: PTESpeakingTest = {
  id: "pte-speaking-6",
  title: "PTE Speaking — Test 6",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-6-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Climate modelling has become an increasingly sophisticated discipline, enabling scientists to simulate the interactions between the atmosphere, oceans, land surface, and ice sheets. These models have improved dramatically in accuracy over the past three decades, driven by advances in computing power and the availability of satellite observational data. Their projections form the scientific basis for international climate negotiations and national adaptation strategies.",
    },
    {
      id: "ra-6-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Pure mathematics, often described as the study of abstract structures and patterns, has a long history of producing results with unexpected practical applications. Number theory, once considered purely theoretical, underpins modern cryptography and internet security. The mathematics of curved spaces developed by Riemann in the nineteenth century proved essential to Einstein's theory of general relativity more than half a century later.",
    },
    {
      id: "ra-6-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Music is a universal human experience found in every known culture across history, yet it takes extraordinarily diverse forms. Ethnomusicologists study how music functions within social contexts, from religious ritual and political protest to courtship and entertainment. Cross-cultural research suggests that certain musical features — such as lullabies for infants and energetic rhythms for dancing — appear in societies that have had little or no contact with one another.",
    },
    {
      id: "ra-6-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Marine biology encompasses the study of all living organisms in the ocean, from microscopic phytoplankton to the largest animals on Earth. The ocean remains poorly explored, with scientists estimating that more than 80 percent of the underwater world has never been mapped or systematically studied. Advances in deep-sea submersibles and underwater robotics are opening new frontiers and regularly leading to the discovery of novel species.",
    },
    {
      id: "ra-6-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Philosophy of mind grapples with some of the most fundamental questions about human existence, including the nature of consciousness, free will, and personal identity. The mind-body problem — how subjective mental experience arises from physical brain processes — remains unresolved despite centuries of inquiry. Contemporary philosophers draw on neuroscience, artificial intelligence, and cognitive science as they attempt to construct adequate theories of the mind.",
    },
    {
      id: "ra-6-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Coral reefs are often described as the rainforests of the sea because of the extraordinary diversity of life they support. Despite covering less than one percent of the ocean floor, reefs are home to approximately 25 percent of all known marine species. They also provide vital ecosystem services including coastal protection, fisheries productivity, and tourism revenue. Rising ocean temperatures and acidification are causing unprecedented coral bleaching events worldwide.",
    },
  ],

  repeatSentence: [
    { id: "rs-6-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The tidal turbine generates electricity from the movement of ocean currents." },
    { id: "rs-6-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students wishing to appeal their grades must do so within fourteen days." },
    { id: "rs-6-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The philosopher argued that consciousness cannot be reduced to brain activity alone." },
    { id: "rs-6-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "New satellite data has revealed previously unknown deep-sea volcanic formations." },
    { id: "rs-6-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The campus library extends its opening hours during the examination period." },
    { id: "rs-6-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Ocean acidification is threatening the survival of coral reef ecosystems globally." },
    { id: "rs-6-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The research team published their findings in a leading scientific journal." },
    { id: "rs-6-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Cultural heritage sites require careful management to withstand growing tourist pressure." },
    { id: "rs-6-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Mathematical models are increasingly used to predict the spread of infectious diseases." },
    { id: "rs-6-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The assignment should follow the formatting guidelines outlined in the course handbook." },
  ],

  describeImage: [
    {
      id: "di-6-1", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global CO₂ Emissions by Sector (%)",
      svgContent: SVG_1,
      keyPoints: ["Energy production is the largest emitter at 34%", "Industry accounts for 24% of emissions", "Transport contributes 16%", "Agriculture and buildings together account for 26%"],
    },
    {
      id: "di-6-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Global Average Temperature Anomaly 1880–2020",
      svgContent: SVG_2,
      keyPoints: ["Temperatures have risen consistently above baseline", "Most significant warming occurred after 1970", "The trend accelerated sharply between 2000 and 2020", "Data confirms human-caused climate change signal"],
    },
    {
      id: "di-6-3", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Research Output by Country (papers, thousands)",
      svgContent: SVG_3,
      keyPoints: ["China leads global research output at 850,000 papers", "USA is second with 650,000 papers", "The UK produces 225,000 papers annually", "Asian countries dominate the top three positions"],
    },
    {
      id: "di-6-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "How Sound Waves Travel",
      svgContent: SVG_4,
      keyPoints: ["Sound originates from a vibrating source", "It travels as longitudinal compression waves", "Waves move through a medium at approximately 343 m/s in air", "A receiver detects the pressure variations as sound"],
    },
    {
      id: "di-6-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Marine Species Diversity by Ocean Zone",
      svgContent: SVG_5,
      keyPoints: ["Sunlight zone has the highest species richness", "Species diversity decreases rapidly with depth", "The hadal zone supports only minimal life", "Most marine biodiversity is found in the upper 200 metres"],
    },
    {
      id: "di-6-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Music Streaming Listeners by Genre (%)",
      svgContent: SVG_6,
      keyPoints: ["Pop is the most streamed genre at 31%", "Hip-hop is second at 27%", "Classical music accounts for only 10%", "Pop and hip-hop together make up over half of all streams"],
    },
  ],

  retellLecture: [
    {
      id: "rl-6-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Science of Climate Tipping Points",
      lectureText: "Climate scientists use the concept of tipping points to describe thresholds in the Earth's climate system beyond which changes become self-reinforcing and potentially irreversible. Examples include the melting of the Greenland ice sheet, which if fully lost would raise sea levels by approximately seven metres, and the dieback of the Amazon rainforest, which could release vast stores of carbon into the atmosphere. The concern is that crossing one tipping point may trigger others in a cascade that dramatically accelerates global warming. Research suggests that some of these thresholds may be closer than previously thought, potentially reachable at temperature increases of between one and a half and two degrees above pre-industrial levels. This makes the targets set in the Paris Agreement critically important. The challenge for policymakers is that tipping points are difficult to identify precisely in advance, meaning that by the time they are reached, it may already be too late to prevent irreversible change.",
      keyPoints: ["Tipping points are thresholds for irreversible change", "Examples: Greenland ice sheet, Amazon dieback", "One tipping point can trigger cascade of others", "Some thresholds may be reached at 1.5–2°C warming", "Paris Agreement targets are critical to avoiding tipping points"],
    },
    {
      id: "rl-6-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Psychology of Music",
      lectureText: "Music has a profound effect on human emotion and cognition, a fact that has fascinated scientists for decades. Research using brain imaging technology shows that listening to music activates not only auditory processing areas but also regions associated with emotion, memory, and reward. The release of dopamine — a neurotransmitter linked to pleasure — has been observed in response to music, particularly during emotionally intense passages. Music can serve as a powerful memory cue: the brain often stores emotional memories alongside the sounds associated with them, which is why a particular song can vividly recall past experiences. Therapists use music in clinical settings to help patients with conditions including Alzheimer's disease, depression, and chronic pain. Cross-cultural studies reveal that while the emotional meaning of music varies between societies, certain responses — such as unease in response to dissonant sounds — appear to be universal.",
      keyPoints: ["Music activates emotion, memory, and reward brain regions", "Dopamine released during emotional musical passages", "Music serves as a powerful memory cue", "Music therapy used for Alzheimer's, depression, pain", "Some emotional responses to music appear universal"],
    },
    {
      id: "rl-6-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Deep Sea Exploration",
      lectureText: "Despite covering 71 percent of the Earth's surface, the ocean remains our least explored frontier. More than 80 percent of the seafloor has never been mapped in detail, and scientists estimate that perhaps two-thirds of all marine species have yet to be discovered. The deep sea — defined as water below 200 metres — is characterised by extreme cold, crushing pressure, and total darkness, making exploration technically demanding. Early exploration relied on weighted lines and dredging; today, remotely operated vehicles and autonomous underwater robots allow scientists to survey previously unreachable environments. Recent discoveries include hydrothermal vent ecosystems that thrive without sunlight, fuelled entirely by chemical energy — a finding that has transformed thinking about the origins of life and the possibility of life on other planets. Improved ocean mapping is also essential for understanding earthquakes, tsunamis, and the effects of deep-sea mining.",
      keyPoints: ["Over 80% of the seafloor is unmapped", "Most marine species are yet to be discovered", "Deep sea is cold, dark, and under extreme pressure", "Hydrothermal vents support life without sunlight", "Deep-sea research informs earthquake and tsunami science"],
    },
  ],

  answerShort: [
    { id: "as-6-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the boundary between the Earth's crust and its mantle?", expectedAnswer: "Moho" },
    { id: "as-6-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the ability of a substance to dissolve in a liquid?", expectedAnswer: "Solubility" },
    { id: "as-6-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which planet is known as the Red Planet?", expectedAnswer: "Mars" },
    { id: "as-6-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the study of the interaction between organisms and their environment?", expectedAnswer: "Ecology" },
    { id: "as-6-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for a government system where power is shared between a central authority and constituent units?", expectedAnswer: "Federalism" },
    { id: "as-6-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the SI unit of electric current?", expectedAnswer: "Ampere" },
    { id: "as-6-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the region around a magnet where its force acts?", expectedAnswer: "Magnetic field" },
    { id: "as-6-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the process by which rocks are broken down by weather?", expectedAnswer: "Weathering" },
    { id: "as-6-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In computing, what term describes a set of instructions that a computer can execute?", expectedAnswer: "Program" },
    { id: "as-6-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for the average of a set of numbers?", expectedAnswer: "Mean" },
  ],
};

export default test6;
