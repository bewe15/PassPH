import type { PTEListeningTest } from "./pte-listening-types";

const test13: PTEListeningTest = {
  id: "pte-listening-13",
  title: "PTE Listening — Test 13",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-13-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Materials Science and the Development of Advanced Composites",
      audioUrl: "",
      audioText: "Materials science is an interdisciplinary field that investigates the relationship between the structure of materials at the atomic and molecular level and their macroscopic properties. One of the most significant recent advances has been the development of advanced composite materials — substances made from two or more constituent materials with distinct physical or chemical properties that, when combined, produce a material with characteristics superior to those of any individual component. Carbon fibre reinforced polymers, for instance, offer exceptional strength-to-weight ratios that have transformed aerospace and automotive engineering, reducing vehicle weight and improving fuel efficiency. Ceramic matrix composites can withstand extreme temperatures, making them valuable for use in jet engines and spacecraft re-entry shields. In the medical field, biocompatible composites are used in bone implants and dental restorations. Researchers are also developing smart composites that can sense and respond to changes in their environment, opening possibilities for self-healing materials and structures capable of reporting structural damage before it becomes critical. The challenge for the field is scaling up laboratory successes to commercially viable manufacturing processes without compromising the properties that make these materials valuable.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-13-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Biochemistry underpins our understanding of metabolism — the set of chemical reactions that allow organisms to convert food into energy and building materials for cells. Enzymes are proteins that act as catalysts, dramatically accelerating these reactions without being consumed in the process. Disruption of enzyme function, whether through genetic mutations, nutrient deficiencies, or toxic substances, can lead to metabolic disorders. Research into enzyme structure and function has enabled the development of drugs that precisely target disease-related enzymes, improving therapeutic specificity and reducing side effects. Bioinformatics tools are increasingly used to model enzyme active sites and predict how potential drug molecules will interact with them.",
      question: "According to the recording, which TWO things can disrupt enzyme function?",
      options: [
        "Exposure to high altitude",
        "Genetic mutations",
        "Excessive physical exercise",
        "Toxic substances",
        "Dehydration during illness",
        "Rapid changes in body temperature",
      ],
      correctIndexes: [1, 3],
    },
    {
      id: "mcm-13-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Smart city initiatives use interconnected digital systems to enhance the efficiency and sustainability of urban services. Traffic management systems analyse real-time data from cameras and sensors to adjust signal timings and reduce congestion. Smart grids distribute electricity more efficiently by balancing supply and demand dynamically, integrating renewable energy sources and reducing waste. Intelligent waste management systems use fill-level sensors to optimise collection routes, cutting fuel use and emissions. Public transport networks can be monitored and adjusted in real time to respond to passenger demand. Despite these benefits, smart city projects have faced criticism for poor data governance, lack of transparency, and for prioritising technology over community needs.",
      question: "Which THREE urban services are mentioned as being improved by smart city technology?",
      options: [
        "Traffic management and congestion reduction",
        "Hospital patient management systems",
        "Smart grid electricity distribution",
        "School timetabling and attendance systems",
        "Intelligent waste management and collection",
        "Online citizen complaint portals",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-13-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Materials science plays a central role in addressing global sustainability challenges. Researchers are developing biodegradable polymers that can replace conventional plastics and break down harmlessly in the environment. Novel insulation materials derived from recycled waste streams are improving the energy efficiency of buildings. Photovoltaic cells made from perovskite, a low-cost mineral compound, are achieving efficiency levels that rival conventional silicon solar panels and may soon offer a more affordable pathway to widespread solar energy adoption. Meanwhile, advances in battery materials are accelerating the transition to electric transport by increasing energy density and reducing charging times.",
      transcript: "Materials science plays a central role in addressing global sustainability challenges. Researchers are developing biodegradable ___BLANK___ that can replace conventional plastics and break down harmlessly in the environment. Novel insulation materials derived from recycled waste streams are improving the energy ___BLANK___ of buildings. Photovoltaic cells made from perovskite, a low-cost mineral compound, are achieving ___BLANK___ levels that rival conventional silicon solar panels and may soon offer a more affordable pathway to widespread solar energy adoption. Meanwhile, advances in battery materials are accelerating the transition to electric transport by increasing energy ___BLANK___ and reducing charging times.",
      answers: ["polymers", "efficiency", "efficiency", "density"],
    },
    {
      id: "fib-13-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Cognitive biases arise from the brain's reliance on heuristics — mental shortcuts that allow rapid decision-making under conditions of uncertainty. While heuristics are generally adaptive, they can lead to systematic errors in judgement. The anchoring bias causes people to rely too heavily on the first piece of information they encounter when making decisions. The sunk cost fallacy leads individuals to continue investing in failing projects because of resources already committed, rather than evaluating future prospects rationally. Overconfidence bias causes people to overestimate the accuracy of their own knowledge and predictions. Understanding these biases has practical applications in fields as diverse as medicine, finance, and public policy.",
      transcript: "Cognitive biases arise from the brain's reliance on heuristics — mental shortcuts that allow rapid decision-making under conditions of ___BLANK___. While heuristics are generally adaptive, they can lead to systematic errors in judgement. The anchoring bias causes people to rely too heavily on the first piece of information they encounter when making ___BLANK___. The sunk cost fallacy leads individuals to continue investing in failing projects because of resources already ___BLANK___, rather than evaluating future prospects rationally. Overconfidence bias causes people to overestimate the accuracy of their own knowledge and ___BLANK___.",
      answers: ["uncertainty", "decisions", "committed", "predictions"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-13-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Space colonisation has moved from the realm of science fiction to active planning by both government space agencies and private companies. The Moon is seen as a potential first destination, offering resources such as water ice at its poles that could be converted to rocket fuel and drinking water. Mars, though further away and more hazardous, is regarded by many as the ultimate goal for human settlement beyond Earth. The challenges are immense: radiation exposure during transit and on the surface, the psychological toll of years-long missions, the need for closed-loop life support systems, and the ethical questions surrounding planetary protection. Proponents argue that establishing a multi-planetary civilisation is necessary to ensure the long-term survival of humanity in the event of a catastrophic event on Earth.",
      correctIndex: 0,
      summaries: [
        "Space colonisation is advancing beyond science fiction, with the Moon and Mars as key targets, though it faces major challenges including radiation, psychological stress, life support needs, and ethical concerns.",
        "Space colonisation is primarily driven by the discovery of large mineral deposits on the Moon that would make resource extraction economically profitable for private companies within the next decade.",
        "Space colonisation efforts are focused exclusively on Mars because NASA research has shown that the Moon does not have sufficient resources to support long-term human habitation.",
        "Space colonisation poses no serious technical challenges with current technology, and the main obstacles are regulatory and political rather than scientific or engineering-related.",
      ],
    },
    {
      id: "hcs-13-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Water treatment is a multi-stage process that transforms raw water from natural sources into water that is safe for drinking and other domestic uses. The quality of source water varies enormously depending on its origin and the degree to which surrounding land has been altered by human activity. Groundwater from deep aquifers is often relatively clean and requires minimal treatment, while surface water from rivers and lakes frequently carries sediment, organic matter, and microbial contaminants. Advanced treatment technologies, including membrane filtration, ozonation, and activated carbon adsorption, can remove contaminants that conventional coagulation and filtration processes cannot. In developing countries, access to clean water remains a major public health challenge, with millions still relying on untreated or inadequately treated sources.",
      correctIndex: 2,
      summaries: [
        "Water treatment is mainly necessary in developing countries, where inadequate regulation allows industrial companies to discharge pollutants directly into rivers, making conventional treatment technologies ineffective.",
        "Water treatment technology has advanced so rapidly that all countries now have access to affordable systems that can convert seawater into drinking water, effectively solving global freshwater scarcity.",
        "Water treatment involves multiple stages adapted to varying source water quality, with advanced technologies able to remove contaminants that conventional methods cannot, while access remains a major challenge in developing countries.",
        "Water treatment research focuses primarily on developing cheaper alternatives to chlorine disinfection, as studies have shown that chlorine reacts with organic matter to form byproducts that pose long-term health risks.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-13-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Disaster risk is determined by the interaction of three key factors: the natural hazard itself, the exposure of people and assets to that hazard, and the vulnerability of those people and assets to harm. A powerful earthquake that strikes an uninhabited region causes no disaster, while a moderate earthquake in a densely populated city with poorly constructed buildings can be catastrophic. This distinction is important because while humans cannot control natural hazard events, they can significantly reduce exposure and vulnerability through land-use planning, building codes, early warning systems, and social safety nets that help communities recover after events occur.",
      question: "What is the key point the speaker makes about disaster risk?",
      options: [
        "Natural hazard events are becoming more frequent due to climate change.",
        "Wealthier countries experience fewer disasters because they can afford better technology.",
        "Humans can reduce disaster risk by lowering exposure and vulnerability even though they cannot control hazard events.",
        "The severity of a natural disaster is determined primarily by the strength of the hazard, not the location.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-13-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Trade agreements between countries can take many forms, from simple bilateral deals covering a limited range of goods to comprehensive multilateral frameworks that govern trade in goods, services, and intellectual property. Regional trade blocs such as the European Union, ASEAN, and Mercosur create common markets among member states, reducing internal trade barriers while maintaining external tariffs on imports from non-members. Critics argue that large multilateral agreements are often opaque and difficult for citizens to scrutinise, and that their provisions sometimes prioritise the interests of multinational corporations over those of workers and small businesses. Proponents counter that open trade has historically raised living standards and reduced poverty in participating economies.",
      question: "What criticism of large multilateral trade agreements does the speaker mention?",
      options: [
        "They take too long to negotiate and are often abandoned before completion.",
        "They are frequently violated by member countries without legal consequence.",
        "They tend to be opaque and may prioritise corporate interests over workers and small businesses.",
        "They have failed to reduce global poverty despite decades of implementation.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-13-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Advanced composite materials have transformed industries by offering combinations of properties unavailable in conventional materials. Carbon fibre composites are lighter than aluminium and stronger than steel, making them the material of choice for aircraft fuselages, racing car bodies, and wind turbine blades. The challenge for manufacturers is that composites are typically more expensive to produce and repair than traditional materials, and recycling them at the end of a product's life remains technically difficult. Researchers are working on next-generation composites that will be easier to",
      options: ["market internationally", "recycle and repair", "test in laboratories", "combine with metals"],
      correctIndex: 1,
    },
    {
      id: "smw-13-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Criminal justice systems face persistent criticism for their disproportionate impact on marginalised communities. Statistical analyses in many countries show that people from ethnic minority groups and those from lower socioeconomic backgrounds are overrepresented at every stage of the justice system, from stop-and-search encounters with police to sentencing outcomes in court. Researchers debate whether these disparities reflect implicit bias in decision-making, structural disadvantages that increase exposure to risk factors for criminal behaviour, or some combination of both. Reformers argue that without actively measuring and addressing these disparities, the justice system risks perpetuating the very",
      options: ["legal frameworks it enforces", "inequalities it is supposed to address", "institutions that fund it", "statistics that measure it"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-13-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Cognitive biases can significantly impair clinical decision-making in medicine. Anchoring bias may lead a physician to focus on an initial diagnosis and fail to update their assessment when new information becomes available. Availability bias may cause doctors to overweight recent or memorable cases when estimating the probability of a diagnosis, rather than relying on statistical base rates. Structured diagnostic checklists and team-based approaches to clinical decisions have been shown to reduce the influence of such biases.",
      displayText: "Cognitive biases can significantly impair clinical decision-making in medicine. Anchoring bias may lead a physician to focus on an initial diagnosis and fail to revise their assessment when new information becomes available. Availability bias may cause doctors to overweight recent or memorable cases when estimating the probability of a diagnosis, rather than relying on statistical base rates. Structured diagnostic checklists and individual approaches to clinical decisions have been shown to reduce the influence of such biases.",
      incorrectIndexes: [24, 61],
    },
    {
      id: "hiw-13-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Materials science research has produced innovations that are transforming the energy sector. Perovskite solar cells, which can be manufactured at lower cost than conventional silicon cells, have achieved efficiency levels in the laboratory that rival the best commercial panels. Solid-state batteries, which replace the liquid electrolyte in conventional lithium-ion cells with a solid material, offer higher energy density and improved safety. These advances are expected to accelerate the global transition to renewable energy by reducing costs and improving the performance of energy storage systems.",
      displayText: "Materials science research has produced innovations that are transforming the energy sector. Perovskite solar cells, which can be manufactured at lower cost than conventional silicon cells, have achieved efficiency levels in the laboratory that exceed the best commercial panels. Solid-state batteries, which replace the liquid electrolyte in conventional lithium-ion cells with a solid material, offer higher power density and improved safety. These advances are expected to accelerate the global transition to renewable energy by reducing costs and improving the performance of energy storage systems.",
      incorrectIndexes: [34, 56],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-13-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Advanced composite materials offer exceptional strength-to-weight ratios for aerospace applications.",
    },
    {
      id: "wfd-13-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Cognitive biases can lead to systematic errors in professional decision-making.",
    },
    {
      id: "wfd-13-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Disaster risk reduction requires investment in both infrastructure and community preparedness.",
    },
  ],
};

export default test13;
