import type { PTEListeningTest } from "./pte-listening-types";

const test15: PTEListeningTest = {
  id: "pte-listening-15",
  title: "PTE Listening — Test 15",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-15-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Poverty Alleviation Strategies",
      audioUrl: "",
      audioText: "Poverty alleviation has been a central objective of international development policy for decades, yet the most effective approaches remain contested. Conditional cash transfer programmes, which provide financial support to low-income families on the condition that they meet requirements such as keeping children in school and attending health check-ups, have demonstrated strong results in countries including Brazil and Mexico. Microfinance initiatives aim to extend small loans to individuals who lack access to formal banking, enabling them to start businesses and build assets. However, critics argue that microfinance can trap borrowers in cycles of debt when loan terms are unfavourable. Broader structural factors, including access to quality education, healthcare, and secure land tenure, are increasingly recognised as essential preconditions for sustainable poverty reduction. Evidence increasingly suggests that direct cash transfers, with few or no conditions attached, can be highly effective and treat recipients with dignity.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-15-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Marine conservation has gained increased attention as scientists document the accelerating decline of ocean ecosystems. Overfishing remains the most direct and immediate threat to marine biodiversity, with many commercial fish stocks severely depleted. Plastic pollution has created vast accumulations of debris in ocean gyres, harming marine mammals, seabirds, and fish through entanglement and ingestion. Ocean warming and acidification, driven by rising carbon dioxide levels, are bleaching coral reefs and disrupting the physiology of shellfish and other calcifying organisms. Marine protected areas have been established in many regions to provide refuges where ecosystems can recover, though their effectiveness depends heavily on monitoring and enforcement. Illegal, unreported, and unregulated fishing undermines conservation efforts in many parts of the world.",
      question: "According to the recording, which TWO threats to marine ecosystems are discussed?",
      options: [
        "Depletion of commercial fish stocks through overfishing",
        "Invasive species introduced through ballast water discharge",
        "Plastic pollution harming marine wildlife",
        "Increased submarine cable installations on the seabed",
        "Noise pollution from sonar affecting whale navigation",
        "Competition between fishing fleets of different nations",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-15-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The global food system faces mounting pressure from a combination of population growth, climate change, and shifting dietary preferences. As incomes rise in developing countries, consumption of meat and dairy products increases, placing greater demand on land and water resources because animal products require substantially more resources per calorie than plant-based foods. Climate change is already reducing crop yields in some tropical and subtropical regions through higher temperatures, altered rainfall patterns, and more frequent extreme weather events. Food loss and waste, which accounts for approximately one third of all food produced globally, represents an enormous inefficiency that worsens environmental impacts. Investment in precision agriculture, drought-resistant crop varieties, and improved storage and distribution infrastructure is seen as essential to feeding a growing world population sustainably.",
      question: "Which THREE pressures on the global food system are mentioned in the talk?",
      options: [
        "Population growth increasing overall demand",
        "Declining interest in vegetarian diets",
        "Climate change reducing crop yields in some regions",
        "Growing resistance to genetically modified crops",
        "Significant losses from food waste and inefficiency",
        "Reduced investment in agricultural research",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-15-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Electrochemistry is the branch of chemistry concerned with the relationship between electrical energy and chemical change. Electrochemical cells convert chemical energy into electrical energy through spontaneous redox reactions, while electrolytic cells use electrical energy to drive non-spontaneous reactions. The development of rechargeable lithium-ion batteries has been transformative for portable electronics and electric vehicles, enabling the storage of significant amounts of energy in compact and lightweight form. Corrosion, a destructive electrochemical process in which metals deteriorate through oxidation, costs economies billions of dollars each year through damage to infrastructure and industrial equipment.",
      transcript: "Electrochemistry is the branch of chemistry concerned with the relationship between electrical energy and chemical change. Electrochemical cells convert chemical energy into electrical ___BLANK___ through spontaneous redox reactions, while electrolytic cells use electrical energy to drive non-spontaneous reactions. The development of rechargeable lithium-ion batteries has been ___BLANK___ for portable electronics and electric vehicles, enabling the storage of significant amounts of energy in compact and lightweight form. Corrosion, a destructive electrochemical process in which metals deteriorate through ___BLANK___, costs economies billions of dollars each year through damage to ___BLANK___ and industrial equipment.",
      answers: ["energy", "transformative", "oxidation", "infrastructure"],
    },
    {
      id: "fib-15-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Palaeontology has been transformed by the application of cutting-edge imaging and molecular techniques to the study of ancient life. Computed tomography scanning allows researchers to visualise the internal anatomy of fossils in three dimensions without physical preparation, preserving fragile specimens while revealing details invisible to the naked eye. Synchrotron radiation, generated by particle accelerators, can detect chemical traces in fossils that provide information about diet, physiology, and even pigmentation. Ancient DNA extracted from permafrost specimens has enabled scientists to reconstruct the genomes of extinct species, shedding light on evolutionary relationships and the processes that drove populations to extinction.",
      transcript: "Palaeontology has been transformed by the application of cutting-edge imaging and molecular techniques to the study of ancient life. Computed tomography scanning allows researchers to visualise the internal ___BLANK___ of fossils in three dimensions without physical preparation, preserving fragile specimens while revealing details invisible to the naked eye. Synchrotron radiation, generated by particle accelerators, can detect chemical traces in fossils that provide information about diet, physiology, and even ___BLANK___. Ancient DNA extracted from permafrost specimens has enabled scientists to reconstruct the ___BLANK___ of extinct species, shedding light on evolutionary relationships and the processes that drove populations to ___BLANK___.",
      answers: ["anatomy", "pigmentation", "genomes", "extinction"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-15-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The concept of poverty alleviation encompasses a wide range of policy interventions, from direct financial transfers to investments in infrastructure and education. Conditional cash transfer programmes have delivered measurable improvements in school attendance, child nutrition, and healthcare utilisation in Latin America. Unconditional cash transfer experiments in sub-Saharan Africa have shown that recipients invest wisely in productive assets rather than spending on alcohol or tobacco as critics had predicted. Access to formal financial services, including savings accounts and insurance products, helps poor households manage economic shocks without falling deeper into poverty. Experts increasingly emphasise that reducing poverty requires addressing the structural causes of inequality, not only providing short-term relief.",
      correctIndex: 3,
      summaries: [
        "All forms of financial assistance are equally effective, and governments should simply give money to the poor without any conditions or targeting since recipients always spend wisely.",
        "Conditional cash transfers have failed in Latin America because families use the money to purchase consumer goods rather than investing in children's education and health.",
        "Poverty alleviation is best achieved through microfinance alone, as small loans allow poor households to start businesses and become economically self-sufficient within a few years.",
        "Poverty alleviation requires a range of approaches including cash transfers, financial inclusion, and structural reforms addressing inequality, with evidence showing recipients often invest the support productively.",
      ],
    },
    {
      id: "hcs-15-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Urban agriculture encompasses a broad spectrum of food production activities carried out in and around cities. Community gardens provide residents with access to fresh vegetables and create social bonds among participants. Rooftop farms and hydroponic systems allow food to be grown in otherwise unused urban spaces. Some cities have integrated urban agriculture into their planning frameworks, designating zones for food production and offering incentives to developers who include growing spaces in new buildings. While urban farming cannot supply the entirety of a city's food needs, it can meaningfully contribute to food security, reduce pressure on transport infrastructure, and provide educational opportunities for urban residents who have limited contact with how food is produced.",
      correctIndex: 1,
      summaries: [
        "Urban agriculture is a minor trend pursued mainly by wealthy residents and has no meaningful impact on food security or community wellbeing in cities.",
        "Urban agriculture ranges from community gardens to rooftop farms and hydroponic systems, contributing to food security and social benefits while being supported by forward-thinking city planning.",
        "Urban agriculture has entirely replaced conventional food supply chains in several European cities, demonstrating that large populations can be fed without importing food from rural areas.",
        "The main benefit of urban agriculture is environmental rather than social, as urban farms absorb carbon dioxide and reduce the urban heat island effect more effectively than trees.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-15-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Nuclear energy is experiencing renewed interest in many countries as governments seek low-carbon sources of electricity to replace fossil fuels. Modern reactor designs incorporate passive safety systems that shut down automatically in the event of a loss of power or coolant, addressing some of the safety concerns raised by earlier accidents. Small modular reactors, which are factory-built and can be deployed more quickly and cheaply than conventional large-scale plants, are attracting significant investment. The challenge of managing high-level radioactive waste, which remains dangerous for thousands of years, continues to be a major obstacle to public acceptance of nuclear power. No country has yet opened a permanent geological repository for spent nuclear fuel.",
      question: "What does the speaker identify as a continuing obstacle to wider public acceptance of nuclear energy?",
      options: [
        "The high cost of uranium fuel compared with natural gas.",
        "The risk of nuclear weapons proliferation from civilian plants.",
        "The unsolved problem of managing high-level radioactive waste.",
        "The inability of nuclear plants to generate sufficient electricity at scale.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-15-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Globalisation has fundamentally altered the organisation of production and trade over the past half-century. The fragmentation of supply chains, whereby different stages of manufacturing are carried out in different countries to take advantage of comparative cost advantages, has increased economic interdependence. This integration has expanded consumer choice and reduced the price of many goods, but it has also created vulnerabilities, as disruptions in one country can cascade through global production networks. The COVID-19 pandemic exposed the fragility of just-in-time supply chains, prompting many firms and governments to reconsider strategies of nearshoring and stockpiling critical components. These developments are leading some analysts to speak of a partial reversal of globalisation, or slowbalisation.",
      question: "What lesson about supply chains does the speaker draw from the COVID-19 pandemic?",
      options: [
        "Just-in-time supply chains proved highly resilient and recovered quickly from disruptions.",
        "The pandemic confirmed that globalisation is irreversible despite short-term disruptions.",
        "The pandemic revealed the fragility of global supply chains, prompting reconsideration of nearshoring strategies.",
        "COVID-19 accelerated the adoption of digital supply chains, eliminating the need for physical goods transport.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-15-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The preservation of cultural heritage has become increasingly urgent as natural disasters, armed conflict, and urban expansion pose growing threats to irreplaceable sites and artefacts. International organisations such as UNESCO coordinate global efforts to identify and protect outstanding examples of cultural and natural heritage through mechanisms like the World Heritage List. Digital technologies, including photogrammetry and three-dimensional printing, now allow damaged or destroyed heritage to be accurately reconstructed. Community involvement is also recognised as vital, as local populations often serve as the most committed and knowledgeable custodians of their own heritage. Without adequate resources and political will, many of the world's most significant historical sites could be",
      options: [
        "fully restored within the next decade",
        "lost irreversibly within a generation",
        "relocated to safer international locations",
        "converted into commercial tourist attractions",
      ],
      correctIndex: 1,
    },
    {
      id: "smw-15-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Neurodiversity advocates have called for educational systems to be redesigned to accommodate a wider range of learning styles and cognitive profiles. Traditional classroom environments, which typically rely on uniform instruction and standardised testing, may disadvantage neurodiverse students who process information differently. Universal design for learning, a framework that encourages educators to offer multiple means of representation, engagement, and expression, provides a structured approach to making education more accessible. Early identification of neurodiverse students and provision of appropriate support can significantly improve their academic outcomes and long-term prospects. Failure to adapt educational systems risks excluding a significant portion of the population from reaching their full",
      options: [
        "financial independence and employment security",
        "social media engagement and digital literacy",
        "academic and professional potential",
        "physical fitness and health outcomes",
      ],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-15-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Labour markets in many developed economies are being reshaped by the dual forces of automation and demographic change. Robots and artificial intelligence are taking over routine tasks in factories and offices, while an ageing population is shrinking the pool of available workers in sectors such as healthcare and construction. Governments are responding by funding retraining programmes and adjusting immigration policies to attract skilled workers from abroad.",
      displayText: "Labour markets in many developed economies are being reshaped by the dual forces of automation and demographic change. Robots and artificial intelligence are replacing routine tasks in factories and offices, while an ageing population is shrinking the pool of available workers in sectors such as healthcare and construction. Governments are responding by funding retraining programmes and adjusting immigration policies to recruit skilled workers from abroad.",
      incorrectIndexes: [19, 55],
    },
    {
      id: "hiw-15-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Poverty alleviation programmes that provide unconditional cash transfers have produced surprisingly positive outcomes in trials conducted across sub-Saharan Africa and South Asia. Recipients have used funds to purchase livestock, repair homes, and pay school fees, contradicting assumptions that the poor cannot be trusted to make responsible financial decisions. Long-term follow-up studies show lasting gains in household income and children's educational attainment.",
      displayText: "Poverty alleviation programmes that provide unconditional cash transfers have produced surprisingly positive results in trials conducted across sub-Saharan Africa and South Asia. Recipients have used funds to purchase livestock, repair homes, and pay school fees, contradicting assumptions that the poor cannot be trusted to make sensible financial decisions. Long-term follow-up studies show lasting gains in household income and children's educational attainment.",
      incorrectIndexes: [15, 37],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-15-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Conditional cash transfers have significantly improved health and education outcomes in developing countries.",
    },
    {
      id: "wfd-15-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Marine protected areas must be adequately monitored to achieve their conservation objectives.",
    },
    {
      id: "wfd-15-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Electrochemical energy storage is central to the transition towards renewable electricity systems.",
    },
  ],
};

export default test15;
