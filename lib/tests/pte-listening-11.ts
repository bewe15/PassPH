import type { PTEListeningTest } from "./pte-listening-types";

const test11: PTEListeningTest = {
  id: "pte-listening-11",
  title: "PTE Listening — Test 11",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-11-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Gene Editing and the Ethics of CRISPR Technology",
      audioUrl: "",
      audioText: "CRISPR-Cas9, a gene-editing technology developed in the early 2010s, has opened remarkable possibilities in medicine and agriculture by allowing scientists to modify DNA sequences with unprecedented precision and efficiency. In medicine, researchers are using CRISPR to explore treatments for genetic disorders such as sickle cell anaemia, cystic fibrosis, and certain inherited forms of blindness. In agriculture, the technology has been applied to develop crops resistant to disease and drought. However, the use of CRISPR raises profound ethical questions, particularly around germline editing — modifications to embryos that would be inherited by future generations. Critics argue that such interventions could lead to unintended genetic consequences and risk widening social inequalities if only wealthy populations can access these therapies. Regulatory frameworks governing gene editing vary considerably between countries, and international consensus on permissible applications has proven difficult to achieve. Most scientific bodies currently support research use while opposing heritable human genome editing until safety and ethical standards are fully established.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-11-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Bioinformatics combines biology, computer science, and statistics to analyse large biological datasets. The field has grown enormously with the rise of next-generation sequencing, which can produce the complete genetic sequence of an organism within hours. Bioinformatics tools are used to identify disease-causing mutations, track the evolution of viruses, and discover new drug targets. Challenges in the field include managing the sheer volume of data generated, ensuring accuracy of computational predictions, and developing algorithms that can handle biological complexity. Training specialists who can bridge the gap between biology and computing remains a significant challenge for universities.",
      question: "According to the talk, which TWO challenges does bioinformatics currently face?",
      options: [
        "A lack of funding for genetic sequencing equipment",
        "Managing the enormous volume of data produced",
        "Difficulty in recruiting volunteers for clinical trials",
        "Developing algorithms that can handle biological complexity",
        "Disagreements between biologists and computer scientists",
        "Limited international collaboration on research projects",
      ],
      correctIndexes: [1, 3],
    },
    {
      id: "mcm-11-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Smart cities use digital technology and data collection to improve urban services and quality of life. Sensors embedded throughout the city monitor traffic flow, energy consumption, air quality, and waste levels in real time. This data enables local governments to optimise bus routes, reduce energy use in public buildings, and deploy waste collection vehicles more efficiently. However, critics raise concerns about the privacy implications of pervasive surveillance, the risk of cyberattacks on critical infrastructure, and the possibility that digital divides will leave some communities behind. Some cities have also encountered difficulties when private technology companies retain ownership of the data collected from public spaces.",
      question: "Which THREE concerns about smart cities are mentioned in the recording?",
      options: [
        "Privacy implications of widespread surveillance",
        "High construction costs for sensor networks",
        "Risk of cyberattacks on critical infrastructure",
        "Negative effects on local small businesses",
        "Digital divides leaving some communities excluded",
        "Reduced employment for city workers",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-11-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Water treatment facilities use a series of processes to convert raw water from rivers or reservoirs into safe drinking water. The first stage typically involves screening to remove large debris, followed by coagulation, in which chemicals are added to cause suspended particles to clump together. These clumps, called floc, settle at the bottom during sedimentation. The water then passes through filtration beds of sand and gravel to remove finer impurities before disinfection with chlorine or ultraviolet light kills remaining microorganisms.",
      transcript: "Water treatment facilities use a series of ___BLANK___ to convert raw water from rivers or reservoirs into safe drinking water. The first stage typically involves screening to remove large debris, followed by coagulation, in which chemicals are added to cause suspended particles to clump together. These clumps, called floc, settle at the bottom during ___BLANK___. The water then passes through ___BLANK___ beds of sand and gravel to remove finer impurities before disinfection with chlorine or ultraviolet light kills remaining ___BLANK___.",
      answers: ["processes", "sedimentation", "filtration", "microorganisms"],
    },
    {
      id: "fib-11-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Indigenous knowledge systems have accumulated over thousands of years of close observation of and interaction with local environments. These systems often contain detailed information about plant properties, seasonal weather patterns, and sustainable land management practices that modern science is only beginning to appreciate. Ethnobotanists and ecologists increasingly collaborate with indigenous communities to document this knowledge before it is lost as younger generations move to urban areas. Intellectual property frameworks have struggled to protect indigenous knowledge from commercial exploitation by outside parties.",
      transcript: "Indigenous knowledge systems have accumulated over thousands of years of close observation of and interaction with local ___BLANK___. These systems often contain detailed information about plant properties, seasonal weather patterns, and sustainable land ___BLANK___ practices that modern science is only beginning to appreciate. Ethnobotanists and ecologists increasingly ___BLANK___ with indigenous communities to document this knowledge before it is lost as younger generations move to ___BLANK___ areas.",
      answers: ["environments", "management", "collaborate", "urban"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-11-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Biochemistry sits at the intersection of biology and chemistry, seeking to understand the chemical processes that underlie all living systems. One of its central concerns is the study of enzymes — proteins that catalyse chemical reactions in cells with remarkable speed and specificity. Without enzymes, the metabolic reactions necessary for life would occur far too slowly to sustain living organisms. Research in biochemistry has led to major medical advances, including the development of drugs that inhibit specific enzymes involved in disease. Understanding enzyme kinetics — the rates at which enzymes work — is essential for designing effective medicines and for industrial applications such as food processing and biofuel production.",
      correctIndex: 2,
      summaries: [
        "Biochemistry focuses primarily on the study of DNA and genetic inheritance, providing the foundation for modern gene therapies and the development of personalised medicine.",
        "Biochemistry has largely replaced traditional chemistry in medical research because it deals with living systems rather than synthetic compounds, making its findings more directly applicable to human health.",
        "Biochemistry examines chemical processes in living systems, with enzyme research playing a central role and contributing to medical advances and industrial applications.",
        "Biochemistry is mainly concerned with understanding how cells divide and reproduce, which has enabled scientists to develop new treatments for cancers and other proliferative diseases.",
      ],
    },
    {
      id: "hcs-11-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Disaster risk reduction is the practice of identifying and reducing the risks posed by natural hazards such as earthquakes, floods, and cyclones. Effective disaster risk reduction involves not only engineering solutions, such as building flood defences and earthquake-resistant structures, but also community preparedness programmes, early warning systems, and land-use planning that keeps settlements away from high-risk zones. The Sendai Framework, adopted by United Nations member states in 2015, provides an international blueprint that prioritises understanding disaster risk, strengthening governance, investing in resilience, and improving disaster preparedness for effective response. Reducing disaster risk is closely linked to development goals, as the most vulnerable communities are often those with fewest resources to cope with and recover from hazard events.",
      correctIndex: 0,
      summaries: [
        "Disaster risk reduction encompasses engineering measures, community preparedness, early warning systems, and land-use planning, guided internationally by the Sendai Framework, with strongest impact on vulnerable communities.",
        "Disaster risk reduction is primarily achieved through international aid programmes that provide financial assistance to countries after major natural disasters to help them rebuild damaged infrastructure.",
        "The Sendai Framework requires all countries to relocate coastal and riverside communities to higher ground as the most reliable way to prevent loss of life from floods and tsunamis.",
        "Disaster risk reduction focuses mainly on technological solutions such as satellite monitoring systems that can predict earthquakes and alert populations days in advance of major events.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-11-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Media literacy refers to the ability to access, analyse, evaluate, and create media in various forms. As digital platforms have proliferated and the pace of information sharing has accelerated, the importance of media literacy has grown significantly. Studies show that individuals with stronger media literacy skills are better able to identify misinformation, understand the commercial interests that shape media content, and critically evaluate sources. Educators argue that media literacy should be incorporated into school curricula from an early age so that students develop these critical skills before they become heavy users of social platforms and online news.",
      question: "What is the main argument educators make regarding media literacy?",
      options: [
        "Schools should restrict students from using social media until the age of sixteen.",
        "Media literacy skills should be taught early so children develop them before becoming heavy media users.",
        "Media companies should be required to fund media literacy programmes in schools.",
        "University students are too old to benefit from media literacy education.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-11-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Trade economics examines how countries exchange goods and services across borders and the policies that govern these exchanges. Comparative advantage — the idea that countries should specialise in producing goods they can make at relatively lower cost — forms the theoretical backbone of free trade arguments. However, critics of free trade note that it can expose domestic industries to foreign competition that leads to job losses, particularly in manufacturing sectors. Trade agreements often attempt to balance the gains from open markets against the need to protect vulnerable workers and industries through provisions such as adjustment assistance funds and phased tariff reductions.",
      question: "According to the speaker, what do critics of free trade highlight as a significant concern?",
      options: [
        "Free trade reduces innovation by exposing domestic firms to too much competition.",
        "Trade agreements are too complex to be negotiated successfully between many countries.",
        "Free trade can lead to job losses in domestic manufacturing sectors.",
        "Comparative advantage theory was developed before modern supply chains existed.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-11-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Forest ecosystems provide a wide range of services that are essential for human wellbeing and planetary health. They regulate water cycles by absorbing rainfall and releasing it slowly into streams and rivers, reduce soil erosion, sequester carbon, and harbour an extraordinary diversity of species. Despite their importance, forests continue to be lost at alarming rates due to agricultural expansion, logging, and infrastructure development. Conservation efforts have had some success in reducing deforestation in certain regions, but scientists warn that without stronger policy action, the loss of the world's remaining primary forests will",
      options: ["slow to a halt", "become irreversible", "attract more investment", "benefit local economies"],
      correctIndex: 1,
    },
    {
      id: "smw-11-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Cognitive biases are systematic patterns of deviation from rational thinking that affect the decisions and judgements people make. They arise because the brain uses mental shortcuts, known as heuristics, to process information quickly. While these shortcuts are often useful, they can also lead to predictable errors. For example, confirmation bias leads people to seek out information that supports their existing beliefs while ignoring contradictory evidence. Awareness of cognitive biases has grown in fields ranging from behavioural economics to medicine, where they can influence clinical decisions and patient",
      options: ["billing procedures", "record-keeping requirements", "diagnosis and treatment", "insurance coverage"],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-11-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Space colonisation presents both extraordinary opportunities and formidable challenges for humanity. Establishing permanent settlements on the Moon or Mars would require life support systems capable of providing oxygen, water, and food in environments where none of these exist naturally. The psychological effects of long-duration space missions, including isolation, confinement, and distance from Earth, pose significant risks to crew wellbeing.",
      displayText: "Space colonisation presents both extraordinary opportunities and enormous challenges for humanity. Establishing permanent settlements on the Moon or Mars would require life support systems capable of providing oxygen, water, and food in environments where none of these exist naturally. The psychological effects of long-duration space missions, including isolation, confinement, and distance from Earth, pose significant threats to crew wellbeing.",
      incorrectIndexes: [7, 55],
    },
    {
      id: "hiw-11-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Climate adaptation refers to the adjustments that societies make in response to actual or expected climate impacts. These adjustments range from constructing sea walls to protect coastal communities from rising seas to developing heat-resistant crop varieties for farmers facing higher temperatures. Unlike mitigation, which aims to reduce greenhouse gas emissions, adaptation accepts that some degree of climate change is now inevitable and focuses on building resilience.",
      displayText: "Climate adaptation refers to the changes that societies make in response to actual or expected climate impacts. These adjustments range from constructing sea walls to protect coastal communities from rising seas to developing drought-resistant crop varieties for farmers facing higher temperatures. Unlike mitigation, which aims to reduce greenhouse gas emissions, adaptation accepts that some degree of climate change is now inevitable and focuses on building resilience.",
      incorrectIndexes: [5, 33],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-11-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Gene editing technologies have the potential to eliminate inherited diseases.",
    },
    {
      id: "wfd-11-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Effective water treatment is essential for preventing the spread of waterborne illness.",
    },
    {
      id: "wfd-11-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Bioinformatics tools are increasingly used to identify genetic mutations associated with cancer.",
    },
  ],
};

export default test11;
