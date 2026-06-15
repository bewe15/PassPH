import type { PTEListeningTest } from "./pte-listening-types";

const test18: PTEListeningTest = {
  id: "pte-listening-18",
  title: "PTE Listening — Test 18",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-18-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Social Entrepreneurship and Market Solutions to Poverty",
      audioUrl: "",
      audioText: "Social entrepreneurship applies business principles to address social, environmental, and humanitarian problems that markets and governments have failed to solve. Unlike traditional charities, social enterprises aim to generate revenue that makes them financially sustainable, reducing dependence on donations. Prominent examples include microfinance institutions that provide small loans to entrepreneurs in low-income countries, and enterprises that produce clean cookstoves for communities relying on open fires, which cause significant indoor air pollution. Critics debate whether market mechanisms can genuinely address structural poverty or whether they risk commodifying essential services like healthcare and education. Proponents argue that the discipline of financial sustainability forces social enterprises to remain responsive to the needs of those they serve. Measuring impact remains a challenge, as social outcomes are inherently harder to quantify than financial returns.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-18-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The ageing of populations across many high-income countries is reshaping labour markets, healthcare systems, and pension arrangements. As the ratio of retirees to working-age adults grows, governments face increasing difficulty in funding pay-as-you-go pension systems. Healthcare demand is rising because older adults typically require more complex and continuous medical care than younger populations. Some countries have responded by encouraging higher birth rates through family support policies, while others have looked to immigration as a source of working-age labour. Technology, including robotics and artificial intelligence, is also seen as a potential means of compensating for labour shortages caused by demographic decline.",
      question: "According to the talk, which TWO consequences of ageing populations are discussed?",
      options: [
        "Funding difficulties for pension systems",
        "Reduced demand for housing in urban areas",
        "Rising healthcare demand from older adults",
        "Decline in consumer spending across all age groups",
        "Increased competition for educational places",
        "Labour shortages in the public sector",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-18-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Memetics is the study of ideas, behaviours, and cultural information that spread from person to person through imitation and communication, analogous to the way genes spread through biological reproduction. The term meme was coined by the evolutionary biologist Richard Dawkins in his 1976 book The Selfish Gene to describe a unit of cultural transmission. Memes that are easily understood, emotionally resonant, and compatible with existing beliefs tend to spread more effectively. The concept has been criticised on the grounds that cultural transmission lacks the fidelity and discrete unit structure that biological evolution requires. Nevertheless, the meme framework has proved useful for studying how ideas diffuse through social networks, the spread of misinformation, and the dynamics of political messaging in the digital age.",
      question: "Which THREE characteristics are mentioned as helping memes spread effectively?",
      options: [
        "Being easily understood",
        "Being supported by scientific evidence",
        "Being emotionally resonant",
        "Being compatible with existing beliefs",
        "Being repeated frequently in the media",
        "Being endorsed by prominent public figures",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-18-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Electrochemistry examines the relationship between chemical reactions and electrical energy. It underpins technologies that are central to the modern world, including batteries, fuel cells, and electroplating. In an electrochemical cell, chemical energy is converted into electrical energy through oxidation and reduction reactions occurring at two electrodes. The electrode at which oxidation occurs is called the anode, while the one at which reduction occurs is called the cathode. Lithium-ion batteries, which power smartphones and electric vehicles, rely on the movement of lithium ions between electrodes through an electrolyte during charging and discharging cycles.",
      transcript: "Electrochemistry examines the relationship between chemical reactions and electrical energy. It underpins technologies that are central to the modern world, including batteries, fuel cells, and ___BLANK___. In an electrochemical cell, chemical energy is converted into electrical energy through oxidation and reduction reactions occurring at two ___BLANK___. The electrode at which oxidation occurs is called the ___BLANK___, while the one at which reduction occurs is called the cathode. Lithium-ion batteries rely on the movement of lithium ions between electrodes through an ___BLANK___ during charging and discharging cycles.",
      answers: ["electroplating", "electrodes", "anode", "electrolyte"],
    },
    {
      id: "fib-18-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Urban agriculture refers to the practice of growing food within city boundaries, using spaces such as rooftops, vacant lots, balconies, and community gardens. Proponents argue that urban agriculture can improve food security, reduce transport emissions associated with supplying cities with food from distant farms, and provide residents with access to fresh produce. Community gardens in particular have been linked to social cohesion and mental wellbeing. However, challenges include soil contamination in former industrial areas, limited available space, and competition from more profitable land uses such as residential development. Vertical farms housed in repurposed warehouses are emerging as a commercial-scale solution.",
      transcript: "Urban agriculture refers to the practice of growing food within city boundaries, using spaces such as rooftops, vacant lots, balconies, and community ___BLANK___. Proponents argue that urban agriculture can improve food ___BLANK___, reduce transport emissions associated with supplying cities with food from distant farms, and provide residents with access to fresh produce. Community gardens have been linked to social cohesion and mental ___BLANK___. However, challenges include soil ___BLANK___ in former industrial areas and limited available space.",
      answers: ["gardens", "security", "wellbeing", "contamination"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-18-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Nanotechnology involves the manipulation of matter at the scale of individual atoms and molecules, typically within the range of one to one hundred nanometres. At this scale, materials often exhibit properties that differ markedly from those observed at larger scales. Gold, for example, appears red or purple rather than yellow when reduced to nanoparticle size. These unique properties are being exploited in medicine, where nanoparticles can be engineered to carry drugs directly to tumour cells, reducing side effects on healthy tissue. In electronics, nanoscale transistors have enabled the miniaturisation that has driven decades of improvements in computing power. Environmental applications include nanomaterial-based filters that can remove contaminants from water supplies.",
      correctIndex: 1,
      summaries: [
        "Nanotechnology is primarily used in the cosmetics and textiles industries, where nanoparticles are added to products to improve texture, durability, and appearance at minimal cost.",
        "Nanotechnology manipulates matter at atomic scales, enabling unique material properties exploited across medicine, electronics, and environmental remediation, including targeted drug delivery and water purification.",
        "Nanotechnology poses significant health risks because nanoparticles can penetrate cell membranes and accumulate in organs, and its commercial use is currently banned in most countries pending further safety research.",
        "The primary application of nanotechnology is in defence, where nanomaterials are used to develop lightweight armour and sensors capable of detecting chemical and biological agents.",
      ],
    },
    {
      id: "hcs-18-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Health informatics applies information technology and data science to improve the management, delivery, and outcomes of healthcare. Electronic health records allow clinicians to access a patient's complete medical history instantly, reducing errors caused by incomplete information. Clinical decision support systems analyse patient data and alert practitioners to potential drug interactions or deviations from clinical guidelines. At a population level, health informatics enables epidemiologists to track disease outbreaks and evaluate the effectiveness of public health interventions. The interoperability of health data systems — the ability of different systems to exchange and use information — remains a significant challenge, as many hospitals and clinics use incompatible software platforms.",
      correctIndex: 3,
      summaries: [
        "Health informatics has replaced traditional medical training in many countries, with artificial intelligence now making diagnoses that were previously the exclusive domain of specialist physicians.",
        "Health informatics is mainly concerned with protecting patient privacy, and its primary function is to ensure that medical data is stored securely and never shared between different healthcare providers.",
        "Health informatics has shown that electronic health records increase administrative burdens on clinicians to the point where most medical practitioners in developed countries now spend more time on data entry than on patient care.",
        "Health informatics uses technology to improve healthcare management and outcomes through electronic records, decision support, and population-level disease monitoring, though interoperability between systems remains an ongoing challenge.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-18-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Nuclear energy currently supplies about ten percent of the world's electricity and a higher share in some countries such as France, where it accounts for roughly seventy percent of the electricity mix. Proponents argue that nuclear power generates large amounts of low-carbon electricity and can operate continuously regardless of weather conditions, unlike solar and wind generation. Critics raise concerns about the risk of accidents, the long-term management of radioactive waste, and the high capital costs and lengthy construction timelines of new plants. A new generation of smaller modular reactors is being developed with the aim of reducing costs and construction times while maintaining safety standards.",
      question: "What argument do supporters of nuclear energy make for its continued use?",
      options: [
        "It produces electricity at a lower cost than any other source.",
        "It generates large amounts of low-carbon electricity reliably.",
        "It requires no long-term waste management or storage.",
        "Its safety record is perfect with no recorded accidents globally.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-18-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Bioinformatics combines biology, computer science, and mathematics to analyse and interpret large biological datasets, particularly those generated by genomic sequencing technologies. The human genome contains approximately three billion base pairs, and sequencing an individual's entire genome now costs only a few hundred dollars — a dramatic reduction from the billions spent on the Human Genome Project completed in 2003. Bioinformatics tools are used to identify genes associated with disease, compare genomes across species to understand evolutionary relationships, and guide the design of new therapeutic proteins. Machine learning algorithms are increasingly used to detect patterns in biological data that would be impossible to identify through manual analysis.",
      question: "What does the speaker say about the cost of sequencing a human genome today compared to the Human Genome Project?",
      options: [
        "The cost has remained roughly the same because the technology has not improved significantly.",
        "It now costs several thousand dollars more due to increased demand for genome sequencing services.",
        "The cost has fallen dramatically, from billions of dollars to just a few hundred dollars.",
        "Genome sequencing is still unaffordable for most research institutions outside wealthy nations.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-18-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Smart cities use digital technologies and data collection systems to manage urban infrastructure more efficiently. Sensors embedded in roads, streetlights, and waste bins generate continuous streams of data that can be used to optimise traffic flow, reduce energy consumption, and improve waste collection schedules. Residents benefit from real-time information about public transport and air quality. However, the widespread deployment of sensors raises significant questions about surveillance, data ownership, and the right to privacy in public spaces. Without adequate safeguards, smart city infrastructure can become a tool for",
      options: ["urban planning", "community engagement", "mass surveillance", "economic growth"],
      correctIndex: 2,
    },
    {
      id: "smw-18-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Welfare economics seeks to evaluate economic outcomes not only in terms of total output or efficiency, but also in terms of how benefits and burdens are distributed across members of society. The concept of Pareto efficiency holds that an allocation is optimal when no individual can be made better off without making someone else worse off. However, many economists argue that this criterion is too narrow, as a highly unequal distribution of resources can be Pareto efficient while still being deeply",
      options: ["productive", "innovative", "transparent", "unjust"],
      correctIndex: 3,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-18-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Social entrepreneurship blends commercial methods with a primary mission of creating social value. Unlike conventional businesses that prioritise profit for shareholders, social enterprises direct surplus revenues towards their social or environmental goals. They operate across sectors including education, healthcare, sanitation, and renewable energy, often serving communities that are excluded from mainstream markets.",
      displayText: "Social entrepreneurship blends commercial methods with a primary mission of creating public value. Unlike conventional businesses that prioritise profit for shareholders, social enterprises direct surplus revenues towards their social or environmental goals. They operate across sectors including education, healthcare, sanitation, and renewable energy, often serving communities that are isolated from mainstream markets.",
      incorrectIndexes: [11, 48],
    },
    {
      id: "hiw-18-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Nanotechnology enables the design of materials with precisely controlled structures at the nanoscale, producing properties that do not exist in the bulk material. Carbon nanotubes, for example, are stronger than steel at a fraction of the weight and conduct electricity with exceptional efficiency. These characteristics make them attractive for applications in aerospace structures, next-generation electronics, and medical devices.",
      displayText: "Nanotechnology enables the design of materials with precisely controlled structures at the nanoscale, producing properties that do not exist in the bulk material. Carbon nanotubes, for example, are lighter than steel at a fraction of the weight and conduct electricity with exceptional efficiency. These characteristics make them attractive for applications in aerospace structures, next-generation electronics, and medical devices.",
      incorrectIndexes: [28],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-18-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The committee recommended stricter controls on industrial emissions from manufacturing plants.",
    },
    {
      id: "wfd-18-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Researchers observed a significant improvement in patient outcomes after the new protocol was introduced.",
    },
    {
      id: "wfd-18-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The concentration of greenhouse gases in the atmosphere has reached unprecedented levels.",
    },
  ],
};

export default test18;
