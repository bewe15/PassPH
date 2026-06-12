import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Daily Caloric Intake by Food Group (%)</text>
  <path d="M150,130 L150,50 A80,80 0 0,1 230,130 Z" fill="#06b6d4"/>
  <path d="M150,130 L230,130 A80,80 0 0,1 182,204 Z" fill="#0ea5e9"/>
  <path d="M150,130 L182,204 A80,80 0 0,1 78,170 Z" fill="#7c3aed"/>
  <path d="M150,130 L78,170 A80,80 0 0,1 78,90 Z" fill="#f59e0b"/>
  <path d="M150,130 L78,90 A80,80 0 0,1 150,50 Z" fill="#10b981"/>
  <rect x="250" y="55" width="12" height="12" fill="#06b6d4"/><text x="268" y="66" font-size="11" fill="#334155">Grains 25%</text>
  <rect x="250" y="80" width="12" height="12" fill="#0ea5e9"/><text x="268" y="91" font-size="11" fill="#334155">Protein 22%</text>
  <rect x="250" y="105" width="12" height="12" fill="#7c3aed"/><text x="268" y="116" font-size="11" fill="#334155">Dairy 18%</text>
  <rect x="250" y="130" width="12" height="12" fill="#f59e0b"/><text x="268" y="141" font-size="11" fill="#334155">Fats 17%</text>
  <rect x="250" y="155" width="12" height="12" fill="#10b981"/><text x="268" y="166" font-size="11" fill="#334155">Fruit/Veg 18%</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Student Reading Scores 2015–2023</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,150 130,140 210,155 290,135 370,120" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <polyline points="50,175 130,165 210,180 290,158 370,145" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="50" cy="150" r="4" fill="#06b6d4"/><circle cx="130" cy="140" r="4" fill="#06b6d4"/>
  <circle cx="210" cy="155" r="4" fill="#06b6d4"/><circle cx="290" cy="135" r="4" fill="#06b6d4"/><circle cx="370" cy="120" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2015</text>
  <text x="130" y="240" text-anchor="middle" font-size="10" fill="#64748b">2017</text>
  <text x="210" y="240" text-anchor="middle" font-size="10" fill="#64748b">2019</text>
  <text x="290" y="240" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2023</text>
  <rect x="60" y="35" width="12" height="4" fill="#06b6d4"/><text x="78" y="43" font-size="10" fill="#334155">Urban schools</text>
  <rect x="160" y="35" width="12" height="4" fill="#f59e0b"/><text x="178" y="43" font-size="10" fill="#334155">Rural schools</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Endangered Species by Taxonomic Group</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="90" width="45" height="130" fill="#06b6d4" rx="2"/><text x="87" y="85" text-anchor="middle" font-size="10" fill="#0e7490">41%</text>
  <rect x="130" y="110" width="45" height="110" fill="#0ea5e9" rx="2"/><text x="152" y="105" text-anchor="middle" font-size="10" fill="#0e7490">34%</text>
  <rect x="195" y="145" width="45" height="75" fill="#7c3aed" rx="2"/><text x="217" y="140" text-anchor="middle" font-size="10" fill="#0e7490">23%</text>
  <rect x="260" y="165" width="45" height="55" fill="#f59e0b" rx="2"/><text x="282" y="160" text-anchor="middle" font-size="10" fill="#0e7490">17%</text>
  <rect x="325" y="185" width="30" height="35" fill="#10b981" rx="2"/><text x="340" y="180" text-anchor="middle" font-size="10" fill="#0e7490">11%</text>
  <text x="87" y="240" text-anchor="middle" font-size="9" fill="#64748b">Amphibians</text>
  <text x="152" y="240" text-anchor="middle" font-size="9" fill="#64748b">Mammals</text>
  <text x="217" y="240" text-anchor="middle" font-size="9" fill="#64748b">Birds</text>
  <text x="282" y="240" text-anchor="middle" font-size="9" fill="#64748b">Reptiles</text>
  <text x="340" y="240" text-anchor="middle" font-size="9" fill="#64748b">Fish</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">The Carbon Cycle: Key Processes</text>
  <ellipse cx="200" cy="215" rx="140" ry="18" fill="#d1fae5" stroke="#10b981"/>
  <text x="200" y="220" text-anchor="middle" font-size="10" fill="#065f46">Soil &amp; Plant Respiration</text>
  <ellipse cx="110" cy="90" rx="55" ry="28" fill="#bfdbfe" stroke="#3b82f6"/>
  <text x="110" y="94" text-anchor="middle" font-size="10" fill="#1e40af">Atmosphere (CO₂)</text>
  <ellipse cx="290" cy="90" rx="55" ry="28" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="290" y="94" text-anchor="middle" font-size="10" fill="#92400e">Plants / Forests</text>
  <path d="M155,85 L240,85" stroke="#10b981" stroke-width="1.5" marker-end="url(#arr5)"/>
  <text x="197" y="78" text-anchor="middle" font-size="9" fill="#065f46">Photosynthesis</text>
  <path d="M245,100 L165,100" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arr5r)"/>
  <text x="205" y="115" text-anchor="middle" font-size="9" fill="#991b1b">Respiration</text>
  <path d="M200,197 Q140,155 118,118" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#arr5g)"/>
  <text x="135" y="165" font-size="9" fill="#475569">Decomposition</text>
  <defs>
    <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#10b981"/></marker>
    <marker id="arr5r" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
    <marker id="arr5g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker>
  </defs>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Nutritional Content per 100g</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="100" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Food</text>
  <text x="195" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Protein (g)</text>
  <text x="280" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Fat (g)</text>
  <text x="355" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Carbs (g)</text>
  <line x1="155" y1="35" x2="155" y2="245" stroke="#e2e8f0"/><line x1="240" y1="35" x2="240" y2="245" stroke="#e2e8f0"/><line x1="320" y1="35" x2="320" y2="245" stroke="#e2e8f0"/>
  <text x="100" y="85" text-anchor="middle" font-size="11" fill="#334155">Chicken</text><text x="195" y="85" text-anchor="middle" font-size="11" fill="#334155">31</text><text x="280" y="85" text-anchor="middle" font-size="11" fill="#334155">3.6</text><text x="355" y="85" text-anchor="middle" font-size="11" fill="#334155">0</text>
  <line x1="30" y1="95" x2="370" y2="95" stroke="#f1f5f9"/>
  <text x="100" y="120" text-anchor="middle" font-size="11" fill="#334155">Salmon</text><text x="195" y="120" text-anchor="middle" font-size="11" fill="#334155">25</text><text x="280" y="120" text-anchor="middle" font-size="11" fill="#334155">13</text><text x="355" y="120" text-anchor="middle" font-size="11" fill="#334155">0</text>
  <line x1="30" y1="130" x2="370" y2="130" stroke="#f1f5f9"/>
  <text x="100" y="155" text-anchor="middle" font-size="11" fill="#334155">Lentils</text><text x="195" y="155" text-anchor="middle" font-size="11" fill="#334155">9</text><text x="280" y="155" text-anchor="middle" font-size="11" fill="#334155">0.4</text><text x="355" y="155" text-anchor="middle" font-size="11" fill="#334155">20</text>
  <line x1="30" y1="165" x2="370" y2="165" stroke="#f1f5f9"/>
  <text x="100" y="190" text-anchor="middle" font-size="11" fill="#334155">Brown Rice</text><text x="195" y="190" text-anchor="middle" font-size="11" fill="#334155">2.6</text><text x="280" y="190" text-anchor="middle" font-size="11" fill="#334155">0.9</text><text x="355" y="190" text-anchor="middle" font-size="11" fill="#334155">23</text>
  <line x1="30" y1="200" x2="370" y2="200" stroke="#f1f5f9"/>
  <text x="100" y="225" text-anchor="middle" font-size="11" fill="#334155">Almonds</text><text x="195" y="225" text-anchor="middle" font-size="11" fill="#334155">21</text><text x="280" y="225" text-anchor="middle" font-size="11" fill="#334155">50</text><text x="355" y="225" text-anchor="middle" font-size="11" fill="#334155">22</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Education Spending (% of GDP)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="70" y="75" width="45" height="145" fill="#06b6d4" rx="2"/><text x="92" y="70" text-anchor="middle" font-size="10" fill="#0e7490">6.1%</text>
  <rect x="140" y="95" width="45" height="125" fill="#06b6d4" rx="2"/><text x="162" y="90" text-anchor="middle" font-size="10" fill="#0e7490">5.2%</text>
  <rect x="210" y="115" width="45" height="105" fill="#06b6d4" rx="2"/><text x="232" y="110" text-anchor="middle" font-size="10" fill="#0e7490">4.4%</text>
  <rect x="280" y="155" width="45" height="65" fill="#06b6d4" rx="2"/><text x="302" y="150" text-anchor="middle" font-size="10" fill="#0e7490">2.7%</text>
  <text x="92" y="240" text-anchor="middle" font-size="9" fill="#64748b">Scandinavia</text>
  <text x="162" y="240" text-anchor="middle" font-size="9" fill="#64748b">W. Europe</text>
  <text x="232" y="240" text-anchor="middle" font-size="9" fill="#64748b">Asia-Pacific</text>
  <text x="302" y="240" text-anchor="middle" font-size="9" fill="#64748b">Sub-Saharan</text>
</svg>`;

const test5: PTESpeakingTest = {
  id: "pte-speaking-5",
  title: "PTE Speaking — Test 5",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-5-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Nutritional science has advanced considerably over the past century, moving from the identification of essential vitamins to the complex study of how diet affects gene expression. Modern research increasingly shows that the relationship between food and health is not simply a matter of calories but involves intricate biochemical interactions. Personalised nutrition, tailored to an individual's genetics and microbiome, is an emerging frontier in preventive medicine.",
    },
    {
      id: "ra-5-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The concept of ecological resilience refers to the capacity of an ecosystem to recover from disturbance and maintain its essential functions. Diverse ecosystems with many species tend to be more resilient than simplified ones because multiple species can perform similar ecological roles. Habitat destruction, pollution, and climate change are all reducing the resilience of natural systems around the world.",
    },
    {
      id: "ra-5-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Modern architecture increasingly reflects a dialogue between cultural heritage and contemporary design principles. Architects working in historic cities must balance the demands of modern functionality with the need to respect existing urban fabric. This tension often produces innovative solutions that honour traditional forms while incorporating sustainable materials and energy-efficient technologies suited to the demands of the twenty-first century.",
    },
    {
      id: "ra-5-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Anthropology, the study of human societies and cultures, encompasses a broad range of disciplines from physical anthropology to social and cultural analysis. Through fieldwork in communities around the world, anthropologists document diverse ways of life and challenge assumptions about what is natural or universal in human behaviour. This comparative perspective has informed debates in ethics, law, and development policy.",
    },
    {
      id: "ra-5-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The digital revolution has transformed how children learn and develop. Educational technology offers personalised learning pathways and instant access to vast stores of information, but it also raises concerns about screen time, attention spans, and the risk of misinformation. Educators argue that digital literacy — the ability to critically evaluate online content — must now be treated as a foundational skill alongside reading and mathematics.",
    },
    {
      id: "ra-5-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Migration has shaped human civilisation throughout history, yet it remains one of the most politically contested issues of the modern era. People move for many reasons — war, poverty, climate change, and the pursuit of better economic opportunities. Receiving societies often experience both the economic benefits of a diverse workforce and the social challenges of cultural integration, making migration policy one of the most complex areas of modern governance.",
    },
  ],

  repeatSentence: [
    { id: "rs-5-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The essay must be submitted electronically via the university's online portal." },
    { id: "rs-5-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Scientists have identified a new species of deep-sea fish in the Pacific Ocean." },
    { id: "rs-5-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The conference will bring together researchers from over thirty countries." },
    { id: "rs-5-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Deforestation rates have declined significantly in some regions over the past decade." },
    { id: "rs-5-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Students should review the marking criteria before beginning their assignment." },
    { id: "rs-5-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The museum houses an extensive collection of artefacts from ancient civilisations." },
    { id: "rs-5-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Public health campaigns have successfully reduced smoking rates in many countries." },
    { id: "rs-5-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The global economy is increasingly driven by digital services and innovation." },
    { id: "rs-5-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Renewable energy capacity has doubled in the past five years worldwide." },
    { id: "rs-5-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The workshop is open to all postgraduate students regardless of their discipline." },
  ],

  describeImage: [
    {
      id: "di-5-1", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Daily Caloric Intake by Food Group (%)",
      svgContent: SVG_1,
      keyPoints: ["Grains provide the largest share of calories at 25%", "Protein, dairy, fats, and fruit/veg are broadly equal", "Fruit and vegetables make up only 18% of intake", "Balanced diet should increase fruit and vegetable proportion"],
    },
    {
      id: "di-5-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Student Reading Scores 2015–2023",
      svgContent: SVG_2,
      keyPoints: ["Urban schools consistently outperform rural schools", "Both groups show an overall upward trend", "A dip is visible around 2019 for both groups", "The gap between urban and rural narrowed by 2023"],
    },
    {
      id: "di-5-3", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Endangered Species by Taxonomic Group",
      svgContent: SVG_3,
      keyPoints: ["Amphibians are most at risk with 41% threatened", "Mammals are second most endangered at 34%", "Fish have the lowest proportion threatened at 11%", "All groups face significant extinction pressure"],
    },
    {
      id: "di-5-4", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "The Carbon Cycle: Key Processes",
      svgContent: SVG_4,
      keyPoints: ["Plants absorb CO₂ from the atmosphere via photosynthesis", "Respiration returns CO₂ to the atmosphere", "Decomposition releases carbon stored in organic matter", "The cycle maintains the balance of atmospheric carbon"],
    },
    {
      id: "di-5-5", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Nutritional Content per 100g",
      svgContent: SVG_5,
      keyPoints: ["Chicken has the highest protein content per 100g", "Almonds are highest in fat at 50g per 100g", "Lentils and brown rice are the main carbohydrate sources", "Animal products contain no carbohydrates"],
    },
    {
      id: "di-5-6", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Global Education Spending (% of GDP)",
      svgContent: SVG_6,
      keyPoints: ["Scandinavia spends the highest share of GDP on education", "Sub-Saharan Africa spends the least at 2.7%", "There is a clear correlation between spending and development", "Western Europe spends over 5% of GDP on education"],
    },
  ],

  retellLecture: [
    {
      id: "rl-5-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Science of Nutrition",
      lectureText: "For most of human history, the primary nutritional challenge was getting enough food to survive. Today, in many parts of the world, the challenge has shifted to making the right food choices in an environment of abundance. Nutritional science has moved far beyond simple calorie counting. Researchers now understand that different macronutrients — carbohydrates, proteins, and fats — have distinct effects on metabolism, hormones, and long-term health. Micronutrients, including vitamins and minerals, play vital regulatory roles that are easily overlooked. The gut microbiome is increasingly recognised as a key mediator between diet and health outcomes. Ultra-processed foods, which make up a growing proportion of diets worldwide, are associated with obesity, cardiovascular disease, and mental health disorders. The challenge for nutritional scientists is communicating complex, sometimes contradictory evidence to a public overwhelmed by dietary advice.",
      keyPoints: ["Modern challenge is food choice, not food availability", "Macronutrients have distinct metabolic effects", "Micronutrients are vital regulatory agents", "Gut microbiome mediates diet-health relationship", "Ultra-processed foods linked to multiple diseases"],
    },
    {
      id: "rl-5-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Biodiversity and Ecosystem Services",
      lectureText: "Biodiversity — the variety of life on Earth — underpins the functioning of all natural systems and provides a vast range of services that human societies depend on. These ecosystem services include the pollination of crops, the purification of water, the regulation of climate, and the decomposition of waste. Scientists estimate that we are currently experiencing the sixth mass extinction event in Earth's history, with species disappearing at rates between 100 and 1,000 times the natural background level. The primary drivers include habitat destruction, overexploitation of natural resources, invasive species, pollution, and climate change. Loss of biodiversity not only diminishes the natural world but also threatens food security, medicine — since many pharmaceuticals are derived from natural organisms — and the stability of ecosystems on which all life depends. Conservation efforts are increasing but remain insufficient relative to the scale of the crisis.",
      keyPoints: ["Biodiversity underpins all ecosystem services", "Services include pollination, water purification, climate regulation", "Sixth mass extinction currently underway", "Main drivers: habitat loss, overexploitation, pollution", "Biodiversity loss threatens food security and medicine"],
    },
    {
      id: "rl-5-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The History and Future of Architecture",
      lectureText: "Architecture reflects the values, technologies, and aspirations of the societies that produce it. Ancient civilisations built monumental structures — the pyramids, the Parthenon, the Colosseum — that expressed power and religious devotion using the materials and techniques available to them. The Industrial Revolution transformed construction by making steel, glass, and reinforced concrete widely available, enabling entirely new building forms. The twentieth century saw a tension between the functionalist modernism of architects like Le Corbusier and the ornamental traditions they sought to replace. Today, architecture faces a new challenge: the urgent need to reduce the environmental impact of the built environment, which accounts for roughly 40 percent of global energy use. Passive design, green materials, and adaptive reuse of existing buildings are among the strategies being deployed. The buildings of the future must be not only beautiful and functional but genuinely sustainable.",
      keyPoints: ["Architecture reflects societal values and technology", "Industrial Revolution enabled new building forms", "Modernism challenged decorative traditions in the 20th century", "Built environment accounts for 40% of global energy use", "Future buildings must prioritise sustainability"],
    },
  ],

  answerShort: [
    { id: "as-5-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for plants that complete their life cycle in one growing season?", expectedAnswer: "Annuals" },
    { id: "as-5-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What instrument is used to measure atmospheric pressure?", expectedAnswer: "Barometer" },
    { id: "as-5-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the study of the Earth's physical structure and substance?", expectedAnswer: "Geology" },
    { id: "as-5-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "Which vitamin is primarily obtained through exposure to sunlight?", expectedAnswer: "Vitamin D" },
    { id: "as-5-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the capital city of Australia?", expectedAnswer: "Canberra" },
    { id: "as-5-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes the transfer of heat through a fluid by movement of the fluid itself?", expectedAnswer: "Convection" },
    { id: "as-5-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the scale used to measure the magnitude of earthquakes?", expectedAnswer: "Richter scale" },
    { id: "as-5-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a scientist who studies insects?", expectedAnswer: "Entomologist" },
    { id: "as-5-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "In economics, what term describes a market dominated by a single seller?", expectedAnswer: "Monopoly" },
    { id: "as-5-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the outermost layer of the Earth called?", expectedAnswer: "Crust" },
  ],
};

export default test5;
