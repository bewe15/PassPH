import type { PTEListeningTest } from "./pte-listening-types";

const test14: PTEListeningTest = {
  id: "pte-listening-14",
  title: "PTE Listening — Test 14",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-14-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Nanotechnology in Medicine",
      audioUrl: "",
      audioText: "Nanotechnology involves the manipulation of matter at an extremely small scale, typically between one and one hundred nanometres. In medicine, nanoparticles are being developed to deliver drugs directly to diseased cells, reducing side effects by sparing healthy tissue. Researchers have demonstrated that nanoparticles can be engineered to target cancer tumours specifically, releasing their therapeutic payload only when triggered by the acidic environment surrounding cancerous cells. Beyond drug delivery, nanomaterials are being used to create more sensitive diagnostic tools capable of detecting biomarkers at concentrations far below the threshold of conventional tests. Nano-coated surgical instruments show reduced infection rates because the coating inhibits bacterial adhesion. Despite these advances, concerns remain about the long-term toxicity of nanoparticles in the human body and their potential accumulation in organs. Regulatory frameworks have struggled to keep pace with the rapid development of nano-based medical products, prompting calls for more rigorous safety testing before clinical adoption.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-14-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Cultural heritage preservation faces an expanding range of threats in the twenty-first century. Armed conflict continues to damage irreplaceable monuments, as witnessed in the destruction of ancient sites in the Middle East. Climate change is accelerating the erosion of coastal heritage sites through rising sea levels and more intense storms. Urban development pressure leads to the demolition of historic buildings in rapidly growing cities. Insufficient funding for conservation means that many sites deteriorate before remedial work can be carried out. Digital documentation technologies, including three-dimensional scanning, are increasingly being used to create permanent records of threatened sites.",
      question: "According to the recording, which TWO threats to cultural heritage are mentioned?",
      options: [
        "Damage caused by armed conflict",
        "Tourism-related vandalism at major sites",
        "Erosion from climate change and rising sea levels",
        "Theft of portable artefacts by private collectors",
        "Lack of international heritage law enforcement",
        "Political disputes over ownership of ancient objects",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-14-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Labour markets across the developed world are undergoing significant structural change. Automation and artificial intelligence are displacing routine tasks in both manufacturing and services, creating anxiety about job losses. At the same time, demographic ageing is reducing the supply of working-age people in many countries, creating skill shortages in sectors such as healthcare, construction, and engineering. Globalisation has also shifted manufacturing jobs to lower-cost economies, contributing to wage stagnation for middle-income workers in wealthier nations. In response, governments are investing in retraining programmes and expanding access to vocational education. Some economists argue that new technologies also create new categories of employment that partially offset the jobs lost to automation.",
      question: "Which THREE factors contributing to labour market change are mentioned in the talk?",
      options: [
        "Automation displacing routine tasks",
        "Rising retirement ages in most countries",
        "Demographic ageing reducing the workforce",
        "Increased demand for subsistence farming",
        "Globalisation shifting manufacturing offshore",
        "Growing numbers of self-employed gig workers",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-14-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The field of health informatics applies information technology to the management and analysis of health data. Electronic health records allow clinicians to access patient histories instantly, reducing duplication of tests and improving coordination between specialists. Predictive analytics tools process large datasets to identify patients at elevated risk of developing chronic conditions before symptoms appear. Interoperability between different hospital systems remains a significant challenge, as incompatible software platforms hinder the seamless exchange of information. Cybersecurity has also emerged as a critical concern, given that health records contain highly sensitive personal data and have become a frequent target of ransomware attacks.",
      transcript: "The field of health informatics applies information technology to the management and ___BLANK___ of health data. Electronic health records allow clinicians to access patient histories instantly, reducing duplication of tests and improving ___BLANK___ between specialists. Predictive analytics tools process large datasets to identify patients at elevated ___BLANK___ of developing chronic conditions before symptoms appear. Interoperability between different hospital systems remains a significant ___BLANK___, as incompatible software platforms hinder the seamless exchange of information.",
      answers: ["analysis", "coordination", "risk", "challenge"],
    },
    {
      id: "fib-14-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Marine conservation efforts have intensified in recent decades as scientists document the scale of ocean biodiversity loss. Overfishing has depleted many commercially important species, while destructive fishing methods such as bottom trawling damage seabed habitats. Marine protected areas, which restrict or prohibit certain human activities within designated ocean zones, have been shown to allow fish populations and ecosystems to recover. However, enforcement of these protected areas is difficult, particularly in international waters where national jurisdiction does not apply. Pollution from land-based sources, including plastics and agricultural chemicals, also continues to threaten marine ecosystems despite growing public awareness.",
      transcript: "Marine conservation efforts have intensified in recent decades as scientists document the scale of ocean ___BLANK___ loss. Overfishing has depleted many commercially important species, while destructive fishing methods such as bottom trawling damage seabed ___BLANK___. Marine protected areas, which restrict or prohibit certain human activities within designated ocean zones, have been shown to allow fish populations and ecosystems to ___BLANK___. However, enforcement of these protected areas is difficult, particularly in international waters where national ___BLANK___ does not apply.",
      answers: ["biodiversity", "habitats", "recover", "jurisdiction"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-14-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Immigration policy has become one of the most contested political issues in many developed countries. Proponents of open immigration argue that migrants fill critical gaps in the labour market, contribute to economic growth, pay taxes, and enrich cultural life. Opponents raise concerns about pressure on public services, housing, and wages for low-skilled native workers. Economists have found that the effects of immigration are highly context-dependent, varying with the skill level of migrants, the state of the labour market, and the capacity of public institutions to absorb new arrivals. Integration programmes that teach the language and civic norms of the host country appear to improve long-term outcomes for migrants and host communities alike.",
      correctIndex: 2,
      summaries: [
        "Economists agree that immigration is universally beneficial for developed economies because migrants pay more in taxes than they consume in public services, creating a net fiscal surplus.",
        "Immigration policy is primarily driven by cultural considerations rather than economic ones, as most debates focus on the preservation of national identity rather than labour market needs.",
        "Immigration policy is highly contested, with benefits such as labour market contributions weighed against concerns about public services and wages, and outcomes varying significantly by context.",
        "Most developed countries have introduced strict immigration limits after research confirmed that high levels of immigration consistently reduce wages for all workers regardless of skill level.",
      ],
    },
    {
      id: "hcs-14-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Urban agriculture refers to the practice of growing food within cities and towns, ranging from rooftop gardens and community allotments to large commercial vertical farms. Proponents argue that it reduces food miles, improves access to fresh produce in areas with limited grocery stores, and helps cities adapt to food supply disruptions. Urban farming can also have social benefits, creating community spaces and providing horticultural therapy for residents. However, urban land is expensive, and most urban agriculture produces only a small fraction of a city's total food requirements. Water use and the energy demands of indoor growing systems are also concerns that need to be addressed if urban farming is to be considered genuinely sustainable.",
      correctIndex: 0,
      summaries: [
        "Urban agriculture includes a range of food-growing practices within cities that offer benefits such as reduced food miles and social cohesion, but faces limitations around land cost, scale, and resource use.",
        "Urban agriculture has been proven to be the most efficient method of food production, capable of meeting the nutritional needs of entire cities through vertical farming technology alone.",
        "The primary benefit of urban agriculture is its ability to reduce crime rates in disadvantaged neighbourhoods by converting vacant lots into productive community spaces.",
        "Urban agriculture is not economically viable because the cost of land and water in cities makes locally grown produce far more expensive than food imported from rural areas.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-14-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Neurodiversity is a concept that frames conditions such as autism spectrum disorder, attention deficit hyperactivity disorder, and dyslexia not as deficits to be corrected but as natural variations in human cognition. Advocates argue that neurodiverse individuals often possess distinctive strengths — such as heightened pattern recognition, creative thinking, or deep focus on areas of interest — that are undervalued in traditional educational and workplace settings. A growing number of companies are implementing neurodiversity hiring programmes, recognising that diverse cognitive styles can enhance problem-solving and innovation within teams. Critics caution that the concept risks downplaying the genuine difficulties faced by many neurodiverse individuals who require significant support.",
      question: "What is the speaker's main point about neurodiversity in the workplace?",
      options: [
        "It is a marketing strategy used by companies to appear socially responsible.",
        "Neurodiverse individuals never face difficulties in professional environments.",
        "Companies are beginning to recognise that neurodiverse cognitive styles can be valuable assets.",
        "Traditional hiring processes are already well suited to identifying neurodiverse talent.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-14-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Palaeontology, the study of ancient life through fossil evidence, has undergone a revolution in recent decades. Advances in imaging technology allow scientists to examine the internal structure of fossils without damaging them, revealing details of bone density, growth patterns, and even colour in some preserved specimens. Molecular palaeontology has recovered ancient proteins and, in rare cases, fragments of genetic material from specimens millions of years old, providing new insights into the evolutionary relationships between extinct and living species. These techniques have overturned longstanding assumptions about dinosaur behaviour, physiology, and appearance, suggesting that many species were warm-blooded and covered in feathers.",
      question: "According to the speaker, how has palaeontology changed in recent decades?",
      options: [
        "The number of fossil discoveries has declined as exploration opportunities diminish.",
        "New technologies have allowed scientists to extract detailed information from fossils non-destructively.",
        "Molecular methods have confirmed that dinosaurs were cold-blooded reptiles as previously thought.",
        "The field has shifted its focus from prehistoric life to the study of modern animal evolution.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-14-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Electrochemistry underpins many of the technologies that are central to the transition away from fossil fuels. Lithium-ion batteries, which store electrical energy through electrochemical reactions, power everything from smartphones to electric cars. Research into next-generation battery chemistries, including solid-state and sodium-ion designs, aims to increase energy density and reduce reliance on scarce materials. Fuel cells, another electrochemical device, generate electricity by combining hydrogen and oxygen, producing only water as a by-product. As the cost of renewable electricity continues to fall, electrolysis — the use of electrical current to split water into hydrogen and oxygen — is increasingly seen as a viable method for producing",
      options: [
        "conventional petroleum products",
        "clean hydrogen fuel at scale",
        "atmospheric carbon dioxide",
        "synthetic diesel for aviation",
      ],
      correctIndex: 1,
    },
    {
      id: "smw-14-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Political philosophy has long grappled with the question of how power should be distributed in a just society. John Rawls proposed that a fair society should be designed from behind a veil of ignorance, meaning that individuals should choose social principles without knowing what position they would occupy in that society. This thought experiment was intended to eliminate self-interest from the design of institutions and produce rules that would be acceptable to everyone. More recently, communitarians have challenged this liberal framework, arguing that individuals cannot be separated from the social and cultural contexts that shape their identities, and that justice must take into account the particular values and traditions of different",
      options: [
        "economic markets and trade relationships",
        "scientific disciplines and research institutions",
        "communities and ways of life",
        "international treaties and legal systems",
      ],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-14-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Globalisation has connected economies, cultures, and peoples across the world to an unprecedented degree. The expansion of international trade has lifted hundreds of millions of people out of poverty, particularly in East and South-East Asia. However, the benefits of globalisation have not been evenly distributed, and the hollowing out of manufacturing industries in developed countries has contributed to economic anxiety and political polarisation.",
      displayText: "Globalisation has linked economies, cultures, and peoples across the world to an unprecedented degree. The expansion of international trade has lifted hundreds of millions of people out of poverty, particularly in East and South-East Asia. However, the benefits of globalisation have not been equally distributed, and the hollowing out of manufacturing industries in developed countries has contributed to economic anxiety and political polarisation.",
      incorrectIndexes: [2, 38],
    },
    {
      id: "hiw-14-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Nuclear energy produces electricity through the process of fission, in which the nuclei of heavy atoms such as uranium are split, releasing large amounts of energy as heat. This heat is used to generate steam, which drives turbines connected to generators. Unlike fossil fuel plants, nuclear power stations do not emit carbon dioxide during operation, making them an attractive option for low-carbon electricity generation. The main challenges associated with nuclear energy are the high cost of constructing new plants, the management of radioactive waste, and public concern about safety following accidents at Chernobyl and Fukushima.",
      displayText: "Nuclear energy produces electricity through the process of fission, in which the nuclei of heavy atoms such as uranium are split, releasing large amounts of energy as heat. This heat is used to generate steam, which drives turbines connected to generators. Unlike fossil fuel plants, nuclear power stations do not produce carbon dioxide during operation, making them an attractive option for low-carbon electricity generation. The main problems associated with nuclear energy are the high cost of constructing new plants, the management of radioactive waste, and public concern about safety following accidents at Chernobyl and Fukushima.",
      incorrectIndexes: [52, 66],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-14-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Nanoparticles are engineered to deliver therapeutic agents directly to diseased cells.",
    },
    {
      id: "wfd-14-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Cultural heritage sites require adequate funding to prevent irreversible deterioration.",
    },
    {
      id: "wfd-14-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Labour market restructuring demands investment in retraining and vocational education programmes.",
    },
  ],
};

export default test14;
