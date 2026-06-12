import type { PTESpeakingTest } from "./pte-speaking-types";

const SVG_1 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">CRISPR Clinical Trials by Disease Category (2024)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="80" width="50" height="140" fill="#06b6d4" rx="2"/>
  <rect x="140" y="100" width="50" height="120" fill="#0ea5e9" rx="2"/>
  <rect x="215" y="125" width="50" height="95" fill="#7c3aed" rx="2"/>
  <rect x="290" y="155" width="50" height="65" fill="#f59e0b" rx="2"/>
  <text x="90" y="75" text-anchor="middle" font-size="10" fill="#0e7490">47</text>
  <text x="165" y="95" text-anchor="middle" font-size="10" fill="#0e7490">38</text>
  <text x="240" y="120" text-anchor="middle" font-size="10" fill="#0e7490">29</text>
  <text x="315" y="150" text-anchor="middle" font-size="10" fill="#0e7490">18</text>
  <text x="90" y="240" text-anchor="middle" font-size="10" fill="#64748b">Cancer</text>
  <text x="165" y="240" text-anchor="middle" font-size="10" fill="#64748b">Blood</text>
  <text x="240" y="240" text-anchor="middle" font-size="10" fill="#64748b">Eye</text>
  <text x="315" y="240" text-anchor="middle" font-size="10" fill="#64748b">Other</text>
</svg>`;

const SVG_2 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Global Recycling Rate Trends (%) 2005–2025</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <polyline points="50,200 114,190 178,175 242,155 306,130 370,105" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
  <circle cx="50" cy="200" r="4" fill="#06b6d4"/>
  <circle cx="114" cy="190" r="4" fill="#06b6d4"/>
  <circle cx="178" cy="175" r="4" fill="#06b6d4"/>
  <circle cx="242" cy="155" r="4" fill="#06b6d4"/>
  <circle cx="306" cy="130" r="4" fill="#06b6d4"/>
  <circle cx="370" cy="105" r="4" fill="#06b6d4"/>
  <text x="50" y="240" text-anchor="middle" font-size="10" fill="#64748b">2005</text>
  <text x="114" y="240" text-anchor="middle" font-size="10" fill="#64748b">2009</text>
  <text x="178" y="240" text-anchor="middle" font-size="10" fill="#64748b">2013</text>
  <text x="242" y="240" text-anchor="middle" font-size="10" fill="#64748b">2017</text>
  <text x="306" y="240" text-anchor="middle" font-size="10" fill="#64748b">2021</text>
  <text x="370" y="240" text-anchor="middle" font-size="10" fill="#64748b">2025</text>
  <text x="58" y="198" font-size="9" fill="#0e7490">16%</text>
  <text x="374" y="103" font-size="9" fill="#0e7490">44%</text>
</svg>`;

const SVG_3 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Youth Civic Engagement by Activity Type (%)</text>
  <path d="M140,130 L140,50 A80,80 0 0,1 220,130 Z" fill="#06b6d4"/>
  <path d="M140,130 L220,130 A80,80 0 0,1 177,207 Z" fill="#0ea5e9"/>
  <path d="M140,130 L177,207 A80,80 0 0,1 63,170 Z" fill="#7c3aed"/>
  <path d="M140,130 L63,170 A80,80 0 0,1 63,90 Z" fill="#f59e0b"/>
  <path d="M140,130 L63,90 A80,80 0 0,1 140,50 Z" fill="#10b981"/>
  <rect x="240" y="50" width="12" height="12" fill="#06b6d4"/><text x="258" y="61" font-size="11" fill="#334155">Voting 30%</text>
  <rect x="240" y="75" width="12" height="12" fill="#0ea5e9"/><text x="258" y="86" font-size="11" fill="#334155">Volunteering 24%</text>
  <rect x="240" y="100" width="12" height="12" fill="#7c3aed"/><text x="258" y="111" font-size="11" fill="#334155">Petitions 20%</text>
  <rect x="240" y="125" width="12" height="12" fill="#f59e0b"/><text x="258" y="136" font-size="11" fill="#334155">Protests 14%</text>
  <rect x="240" y="150" width="12" height="12" fill="#10b981"/><text x="258" y="161" font-size="11" fill="#334155">Other 12%</text>
</svg>`;

const SVG_4 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Deep Sea Mining: Estimated Mineral Reserves (Mt)</text>
  <rect x="30" y="35" width="340" height="210" fill="white" stroke="#e2e8f0" rx="4"/>
  <rect x="30" y="35" width="340" height="30" fill="#0e7490" rx="4"/>
  <text x="110" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Mineral</text>
  <text x="210" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Reserve (Mt)</text>
  <text x="320" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Key Use</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="#e2e8f0"/>
  <line x1="160" y1="35" x2="160" y2="245" stroke="#e2e8f0"/>
  <line x1="270" y1="35" x2="270" y2="245" stroke="#e2e8f0"/>
  <text x="110" y="90" text-anchor="middle" font-size="11" fill="#334155">Manganese</text><text x="210" y="90" text-anchor="middle" font-size="11" fill="#334155">5,000</text><text x="320" y="90" text-anchor="middle" font-size="11" fill="#334155">Batteries</text>
  <line x1="30" y1="100" x2="370" y2="100" stroke="#f1f5f9"/>
  <text x="110" y="122" text-anchor="middle" font-size="11" fill="#334155">Cobalt</text><text x="210" y="122" text-anchor="middle" font-size="11" fill="#334155">760</text><text x="320" y="122" text-anchor="middle" font-size="11" fill="#334155">Electronics</text>
  <line x1="30" y1="132" x2="370" y2="132" stroke="#f1f5f9"/>
  <text x="110" y="154" text-anchor="middle" font-size="11" fill="#334155">Nickel</text><text x="210" y="154" text-anchor="middle" font-size="11" fill="#334155">290</text><text x="320" y="154" text-anchor="middle" font-size="11" fill="#334155">EV Batteries</text>
  <line x1="30" y1="164" x2="370" y2="164" stroke="#f1f5f9"/>
  <text x="110" y="186" text-anchor="middle" font-size="11" fill="#334155">Copper</text><text x="210" y="186" text-anchor="middle" font-size="11" fill="#334155">225</text><text x="320" y="186" text-anchor="middle" font-size="11" fill="#334155">Wiring</text>
  <line x1="30" y1="196" x2="370" y2="196" stroke="#f1f5f9"/>
  <text x="110" y="218" text-anchor="middle" font-size="11" fill="#334155">REEs</text><text x="210" y="218" text-anchor="middle" font-size="11" fill="#334155">85</text><text x="320" y="218" text-anchor="middle" font-size="11" fill="#334155">Tech Devices</text>
</svg>`;

const SVG_5 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Consumer Colour Preference by Product Category (%)</text>
  <line x1="50" y1="220" x2="370" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="50" y1="30" x2="50" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="65" y="70" width="42" height="150" fill="#06b6d4" rx="2"/>
  <rect x="120" y="90" width="42" height="130" fill="#0ea5e9" rx="2"/>
  <rect x="175" y="115" width="42" height="105" fill="#7c3aed" rx="2"/>
  <rect x="230" y="140" width="42" height="80" fill="#f59e0b" rx="2"/>
  <rect x="285" y="165" width="42" height="55" fill="#10b981" rx="2"/>
  <text x="86" y="65" text-anchor="middle" font-size="10" fill="#0e7490">38%</text>
  <text x="141" y="85" text-anchor="middle" font-size="10" fill="#0e7490">32%</text>
  <text x="196" y="110" text-anchor="middle" font-size="10" fill="#0e7490">26%</text>
  <text x="251" y="135" text-anchor="middle" font-size="10" fill="#0e7490">20%</text>
  <text x="306" y="160" text-anchor="middle" font-size="10" fill="#0e7490">14%</text>
  <text x="86" y="240" text-anchor="middle" font-size="9" fill="#64748b">Fashion</text>
  <text x="141" y="240" text-anchor="middle" font-size="9" fill="#64748b">Food</text>
  <text x="196" y="240" text-anchor="middle" font-size="9" fill="#64748b">Tech</text>
  <text x="251" y="240" text-anchor="middle" font-size="9" fill="#64748b">Home</text>
  <text x="306" y="240" text-anchor="middle" font-size="9" fill="#64748b">Health</text>
</svg>`;

const SVG_6 = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">CRISPR Gene Editing Process</text>
  <defs><marker id="arr18" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4"/></marker></defs>
  <rect x="10" y="90" width="75" height="40" rx="6" fill="#06b6d4"/>
  <text x="47" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Guide RNA</text>
  <text x="47" y="121" text-anchor="middle" font-size="9" fill="white">Designed</text>
  <line x1="85" y1="110" x2="103" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr18)"/>
  <rect x="105" y="90" width="75" height="40" rx="6" fill="#0ea5e9"/>
  <text x="142" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Cas9 Protein</text>
  <text x="142" y="121" text-anchor="middle" font-size="9" fill="white">Binds RNA</text>
  <line x1="180" y1="110" x2="198" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr18)"/>
  <rect x="200" y="90" width="75" height="40" rx="6" fill="#7c3aed"/>
  <text x="237" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">DNA Cut</text>
  <text x="237" y="121" text-anchor="middle" font-size="9" fill="white">Target Site</text>
  <line x1="275" y1="110" x2="293" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr18)"/>
  <rect x="295" y="90" width="95" height="40" rx="6" fill="#10b981"/>
  <text x="342" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Repair/Edit</text>
  <text x="342" y="121" text-anchor="middle" font-size="9" fill="white">Gene corrected</text>
  <text x="200" y="175" text-anchor="middle" font-size="10" fill="#64748b">Guide RNA directs Cas9 to the exact target DNA sequence</text>
  <text x="200" y="195" text-anchor="middle" font-size="10" fill="#64748b">Cas9 cuts both strands; cell repairs the break</text>
  <text x="200" y="215" text-anchor="middle" font-size="10" fill="#64748b">Correction template inserted during repair = gene editing</text>
</svg>`;

const test18: PTESpeakingTest = {
  id: "pte-speaking-18",
  title: "PTE Speaking — Test 18",
  totalMinutes: 30,

  readAloud: [
    {
      id: "ra-18-1", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "CRISPR-Cas9 is a revolutionary gene-editing technology that allows scientists to make precise alterations to DNA sequences in virtually any organism. Originally discovered as part of the bacterial immune system, it has been adapted into a powerful tool for correcting genetic disorders, developing disease-resistant crops, and investigating fundamental questions in biology. Ethical debates surround its application to human germline cells, where changes would be heritable by future generations.",
    },
    {
      id: "ra-18-2", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "The circular economy is an alternative to the traditional linear model of production and consumption, in which resources are extracted, used, and discarded. In a circular system, materials are kept in use for as long as possible through reuse, repair, remanufacturing, and recycling. Proponents argue that transitioning to a circular economy could significantly reduce waste, lower carbon emissions, and create new economic opportunities, particularly in the growing repair and refurbishment sectors.",
    },
    {
      id: "ra-18-3", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Civic engagement refers to the actions individuals and groups take to address issues of public concern and contribute to the political life of their communities. It encompasses a wide spectrum of activities, from voting in elections and attending public meetings to organising community campaigns and volunteering with local organisations. Research consistently shows that higher levels of civic participation are associated with more responsive governments and stronger democratic institutions.",
    },
    {
      id: "ra-18-4", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Deep sea mining involves the extraction of mineral deposits from the ocean floor, which contains vast concentrations of metals including manganese, cobalt, nickel, and rare earth elements. Demand for these materials is rising sharply due to the growth of electric vehicles and renewable energy technologies. However, ecologists warn that mining operations could destroy unique and poorly understood deep-sea ecosystems, many of which have never been systematically surveyed.",
    },
    {
      id: "ra-18-5", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Colour psychology examines how different hues influence human perception, emotion, and behaviour. Research indicates that colours can affect mood, physiological arousal, and even cognitive performance. Marketers and designers routinely exploit these associations: blue conveys trust and reliability, red evokes urgency and excitement, while green is strongly linked to nature and health. Cultural context, however, modifies these responses, meaning that colour meanings are not universal across societies.",
    },
    {
      id: "ra-18-6", type: "read_aloud", prepSeconds: 30, speakSeconds: 40,
      text: "Gene therapy seeks to treat or prevent disease by correcting defective genes or introducing new ones into a patient's cells. Unlike conventional pharmaceuticals, which manage symptoms, gene therapy aims to address the underlying molecular cause of a condition. Advances in viral vector technology and CRISPR editing have substantially accelerated progress in the field, with successful treatments now approved for conditions including certain inherited blindness disorders and haemophilia.",
    },
  ],

  repeatSentence: [
    { id: "rs-18-1", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The gene-editing trial produced statistically significant results in all patient groups." },
    { id: "rs-18-2", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Circular economy principles require manufacturers to design products for disassembly and reuse." },
    { id: "rs-18-3", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Voter turnout among young people has declined in most democracies over the past two decades." },
    { id: "rs-18-4", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The nodules on the seabed contain metals essential for the global clean-energy transition." },
    { id: "rs-18-5", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Studies suggest that warm colours increase appetite, influencing restaurant interior design." },
    { id: "rs-18-6", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Off-target edits remain the primary safety concern in CRISPR-based therapeutic applications." },
    { id: "rs-18-7", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Extended producer responsibility shifts waste management costs back to manufacturers." },
    { id: "rs-18-8", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Marine protected areas can provide a buffer zone around ecologically sensitive seabed habitats." },
    { id: "rs-18-9", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "Participatory budgeting allows citizens to directly allocate a portion of public funds." },
    { id: "rs-18-10", type: "repeat_sentence", speakSeconds: 15, audioUrl: "", sentence: "The placebo effect demonstrates that patient expectations influence actual clinical outcomes." },
  ],

  describeImage: [
    {
      id: "di-18-1", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "CRISPR Clinical Trials by Disease Category (2024)",
      svgContent: SVG_1,
      keyPoints: [
        "Cancer treatment is the most common CRISPR application with 47 trials",
        "Blood disorders account for 38 trials",
        "Eye diseases are being targeted in 29 trials",
        "Other disease categories account for 18 ongoing trials",
      ],
    },
    {
      id: "di-18-2", type: "describe_image", imageType: "line_graph", prepSeconds: 25, speakSeconds: 40,
      title: "Global Recycling Rate Trends (%) 2005–2025",
      svgContent: SVG_2,
      keyPoints: [
        "Recycling rates were at 16% globally in 2005",
        "A steady upward trend is visible across the entire period",
        "Rates reached approximately 44% by 2025",
        "The increase reflects growing circular economy policy adoption",
      ],
    },
    {
      id: "di-18-3", type: "describe_image", imageType: "pie_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Youth Civic Engagement by Activity Type (%)",
      svgContent: SVG_3,
      keyPoints: [
        "Voting is the most common form of civic engagement at 30%",
        "Volunteering accounts for 24% of activities",
        "Signing petitions represents 20% of engagement",
        "Protest participation accounts for only 14%",
      ],
    },
    {
      id: "di-18-4", type: "describe_image", imageType: "table", prepSeconds: 25, speakSeconds: 40,
      title: "Deep Sea Mining: Estimated Mineral Reserves (Mt)",
      svgContent: SVG_4,
      keyPoints: [
        "Manganese has by far the largest seabed reserve at 5,000 Mt",
        "Cobalt reserves are estimated at 760 Mt and are critical for electronics",
        "Nickel and copper are both important for energy transition technologies",
        "Rare earth elements are present in smaller but strategically vital quantities",
      ],
    },
    {
      id: "di-18-5", type: "describe_image", imageType: "bar_chart", prepSeconds: 25, speakSeconds: 40,
      title: "Consumer Colour Preference by Product Category (%)",
      svgContent: SVG_5,
      keyPoints: [
        "Colour preference is strongest in fashion at 38%",
        "Food product colour has a 32% influence on consumer choice",
        "Technology and home goods rank third and fourth",
        "Health products show the lowest colour sensitivity at 14%",
      ],
    },
    {
      id: "di-18-6", type: "describe_image", imageType: "process", prepSeconds: 25, speakSeconds: 40,
      title: "CRISPR Gene Editing Process",
      svgContent: SVG_6,
      keyPoints: [
        "A guide RNA is designed to match the target DNA sequence",
        "The Cas9 protein binds to the guide RNA complex",
        "Cas9 cuts both strands of DNA at the target location",
        "The cell's repair mechanism is used to insert the desired genetic correction",
      ],
    },
  ],

  retellLecture: [
    {
      id: "rl-18-1", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "The Promise and Peril of CRISPR",
      lectureText: "CRISPR-Cas9 has transformed biomedical research since it was first adapted for use in human cells around 2012. The technology works by using a short piece of RNA to guide the Cas9 enzyme to a specific location in the genome, where it cuts the DNA strand. Researchers can then disable a gene or insert a corrective sequence at that precise location. Early clinical results have been striking — patients with sickle cell disease and beta-thalassaemia have experienced functional cures after a single treatment. However, the scientific community remains cautious. Off-target effects, where Cas9 cuts the wrong part of the genome, could trigger cancer-related mutations. The birth of gene-edited babies in China in 2018 prompted an international outcry, highlighting the need for rigorous governance frameworks to prevent premature or ethically unjustified applications of the technology in human reproduction.",
      keyPoints: [
        "CRISPR adapted for human cells around 2012",
        "Cas9 guided by RNA to cut DNA at precise locations",
        "Early successes in sickle cell disease and thalassaemia",
        "Off-target cuts risk triggering dangerous mutations",
        "2018 gene-edited babies scandal highlighted governance gaps",
      ],
    },
    {
      id: "rl-18-2", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "Designing a Circular Economy",
      lectureText: "The circular economy challenges one of the foundational assumptions of industrial capitalism — that economic growth requires the continuous extraction of new raw materials. In a circular system, products are designed from the outset to be durable, repairable, and recyclable. The concept has three core principles: eliminate waste and pollution through better design, circulate products and materials at the highest possible value, and regenerate natural systems. Businesses adopting circular models report not only environmental benefits but also economic advantages, including reduced material costs and new revenue streams from servicing, leasing, and refurbishing products. Governments are increasingly legislating in this direction, with the European Union's Circular Economy Action Plan setting binding targets for recycled content in a range of product categories.",
      keyPoints: [
        "Circular economy challenges the linear take-make-dispose model",
        "Products designed for durability, repair, and recyclability",
        "Three principles: eliminate waste, circulate materials, regenerate nature",
        "Businesses benefit from lower material costs and new revenue streams",
        "EU Circular Economy Action Plan sets binding recycled content targets",
      ],
    },
    {
      id: "rl-18-3", type: "retell_lecture", prepSeconds: 10, speakSeconds: 40, audioUrl: "",
      topic: "How Colour Shapes Consumer Behaviour",
      lectureText: "The influence of colour on human psychology has been studied extensively, with consistent findings emerging across a range of experimental settings. Research shows that red raises heart rate and creates a sense of urgency, which is why it is commonly used in clearance sales and fast-food branding. Blue, by contrast, is associated with trustworthiness and competence, making it a dominant colour in banking and technology companies. Green signals health, naturalness, and environmental responsibility, increasingly important attributes in consumer markets. One landmark study found that up to 90 percent of snap judgements about products are based on colour alone. However, practitioners must exercise caution: the psychological effects of colour are moderated by gender, age, cultural background, and personal experience, meaning that no single colour strategy works universally across all target markets.",
      keyPoints: [
        "Red raises arousal and creates urgency — used in sales and fast food",
        "Blue signals trust and competence — preferred by banks and tech firms",
        "Green linked to health, nature, and sustainability",
        "Up to 90% of initial product judgements based on colour",
        "Effects vary by gender, age, and cultural background",
      ],
    },
  ],

  answerShort: [
    { id: "as-18-1", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What protein acts as molecular scissors in the CRISPR gene-editing system?", expectedAnswer: "Cas9" },
    { id: "as-18-2", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term describes an economy where materials are kept in use through reuse and recycling?", expectedAnswer: "Circular economy" },
    { id: "as-18-3", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call the process of electing representatives to a governing body?", expectedAnswer: "Voting" },
    { id: "as-18-4", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name for metallic deposits found on the deep ocean floor?", expectedAnswer: "Nodules" },
    { id: "as-18-5", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What colour is most commonly associated with trust and reliability in Western cultures?", expectedAnswer: "Blue" },
    { id: "as-18-6", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do scientists call a change to the genome that can be inherited by offspring?", expectedAnswer: "Germline edit" },
    { id: "as-18-7", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the term for designing products that can be easily taken apart for recycling?", expectedAnswer: "Design for disassembly" },
    { id: "as-18-8", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What is the name of the ocean layer below 200 metres where sunlight does not penetrate?", expectedAnswer: "Deep sea" },
    { id: "as-18-9", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What do we call a medical test using an inactive substance to measure the power of belief?", expectedAnswer: "Placebo" },
    { id: "as-18-10", type: "answer_short", speakSeconds: 10, audioUrl: "", question: "What term refers to an individual's financial contribution to a political or civic cause?", expectedAnswer: "Donation" },
  ],
};

export default test18;
