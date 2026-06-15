import type { PTEListeningTest } from "./pte-listening-types";

const test9: PTEListeningTest = {
  id: "pte-listening-9",
  title: "PTE Listening — Test 9",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-9-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Behavioural Economics and Nudge Theory in Public Policy",
      audioUrl: "",
      audioText: "Traditional economic models assume that individuals consistently make rational choices aimed at maximising their own welfare. Behavioural economists, drawing on insights from psychology, have challenged this view by demonstrating that human decision-making is systematically influenced by cognitive biases, emotions, and the way in which choices are framed. One of the most influential applications of this research is nudge theory, developed by Richard Thaler and Cass Sunstein. Nudges are subtle changes to the environment in which choices are made — sometimes called the choice architecture — that steer people towards beneficial decisions without restricting their freedom to choose otherwise. Examples include automatically enrolling employees in pension plans while allowing them to opt out, placing healthier foods at eye level in cafeterias, and sending personalised messages that highlight the social norm of tax compliance. Governments in the United Kingdom, the United States, and Australia have established dedicated units that apply nudge principles to improve public health, increase tax collection, and promote sustainable behaviour.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-9-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The study of ancient civilisations relies on a combination of archaeological evidence, written records, and the analysis of material culture. Excavations at sites such as Pompeii and the tomb of Tutankhamun have provided extraordinary insight into the daily lives of people in the past. Radiocarbon dating allows scientists to estimate the age of organic materials with reasonable accuracy, while advances in DNA analysis are shedding new light on ancient migration patterns and population histories. Remote sensing technologies, including ground-penetrating radar and satellite imagery, allow researchers to detect buried structures without invasive digging. The interdisciplinary nature of the field means that historians, archaeologists, chemists, and geneticists increasingly collaborate on major research projects.",
      question: "According to the talk, which TWO methods are mentioned as helping researchers study ancient civilisations?",
      options: [
        "Radiocarbon dating of organic materials",
        "Computer simulations of ancient battle strategies",
        "Ground-penetrating radar to detect buried structures",
        "Analysis of ancient music recordings",
        "Linguistic decoding of modern languages",
        "Interviewing descendants of ancient populations",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-9-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Astrophysics investigates the physical properties and behaviour of celestial objects and the universe as a whole. The Big Bang theory, supported by extensive observational evidence including the cosmic microwave background radiation, describes the origin of the universe approximately 13.8 billion years ago. Stars are born in nebulae — clouds of gas and dust — when gravity causes material to collapse and nuclear fusion ignites. When massive stars exhaust their fuel, they may end their lives as supernovae, explosions that scatter heavy elements across space and can briefly outshine entire galaxies. Black holes, regions of space from which not even light can escape, form from the remnants of particularly massive stars. The expansion of the universe, discovered by Edwin Hubble, is now known to be accelerating due to a mysterious force called dark energy.",
      question: "Which THREE phenomena are described in the recording?",
      options: [
        "The origin of the universe in the Big Bang",
        "The formation of planets in our solar system",
        "Supernovae scattering heavy elements across space",
        "The role of dark energy in accelerating cosmic expansion",
        "The discovery of alien life on distant planets",
        "The colour spectrum of light from distant stars",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-9-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The philosophy of mind raises profound questions about the nature of consciousness and its relationship to the physical brain. The hard problem of consciousness, a term coined by philosopher David Chalmers, refers to the difficulty of explaining why and how physical processes give rise to subjective experience. Functionalist theories propose that mental states are defined by their functional roles — by what they do rather than what they are made of — which implies that consciousness could in principle be realised in non-biological systems such as computers. Critics of functionalism argue that it fails to account for the qualitative aspects of experience, sometimes called qualia.",
      transcript: "The philosophy of mind raises profound questions about the nature of ___BLANK___ and its relationship to the physical brain. The hard problem of consciousness refers to the difficulty of explaining why and how physical processes give rise to subjective ___BLANK___. Functionalist theories propose that mental states are defined by their functional ___BLANK___ — by what they do rather than what they are made of — which implies that consciousness could in principle be realised in non-biological ___BLANK___ such as computers.",
      answers: ["consciousness", "experience", "roles", "systems"],
    },
    {
      id: "fib-9-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Geopolitics examines how geographical factors such as location, resources, and topography influence the political and military strategies of states. The control of strategic waterways has historically been a major source of international tension, as chokepoints like the Strait of Hormuz and the South China Sea carry enormous volumes of trade. Rising powers often seek to project influence beyond their immediate borders, leading to competition with established powers for allies, bases, and access to resources. International institutions such as the United Nations and the World Trade Organisation attempt to manage these rivalries through diplomacy and rules-based frameworks, though their effectiveness is limited by the sovereignty of member states.",
      transcript: "Geopolitics examines how geographical factors such as location, resources, and ___BLANK___ influence the political and military strategies of states. The control of strategic waterways has historically been a major source of international ___BLANK___, as chokepoints like the Strait of Hormuz carry enormous volumes of trade. Rising powers often seek to project ___BLANK___ beyond their immediate borders, leading to competition with established powers for allies, bases, and access to resources. International institutions attempt to manage these rivalries through ___BLANK___ and rules-based frameworks.",
      answers: ["topography", "tension", "influence", "diplomacy"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-9-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Ethnography, as a research methodology, requires the researcher to spend extended periods immersed in the community being studied, observing behaviour, conducting interviews, and participating in everyday activities. This deep immersion allows ethnographers to gain insights into cultural meanings and social practices that would not be accessible through surveys or laboratory experiments. However, the method also raises significant ethical questions. The researcher's presence inevitably influences the community being studied, a phenomenon known as the observer effect. There are also questions about representation: who has the authority to interpret and publish accounts of another group's culture, and how can researchers avoid reinforcing stereotypes or power imbalances?",
      correctIndex: 3,
      summaries: [
        "Ethnography is a quantitative method that uses large-scale surveys to compare cultural practices across societies, producing data that can be analysed statistically.",
        "Ethnography has been abandoned by modern social scientists because the ethical problems it raises are too serious to be managed responsibly within current research frameworks.",
        "Ethnographic research is most valuable when researchers maintain strict distance from the communities they study in order to avoid influencing behaviour or introducing bias.",
        "Ethnography involves deep immersion in a community to gain cultural insights, but raises ethical concerns about the observer effect and questions of representation and power.",
      ],
    },
    {
      id: "hcs-9-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Nutrition science investigates the relationship between dietary intake and human health, examining how different nutrients affect physiological processes and disease risk. Research in the field has revealed that diets high in ultra-processed foods are associated with increased risk of obesity, type two diabetes, and cardiovascular disease. The Mediterranean diet, rich in vegetables, legumes, whole grains, and olive oil, has been linked to reduced risk of chronic disease and greater longevity in multiple large-scale studies. However, conducting rigorous dietary research is methodologically challenging, as participants often struggle to accurately recall what they have eaten and it is difficult to isolate the effect of a single dietary factor from the complexity of an individual's overall lifestyle.",
      correctIndex: 1,
      summaries: [
        "Nutrition science has conclusively proven that the Mediterranean diet is the only dietary pattern capable of preventing chronic disease, and all other diets should be discouraged.",
        "Nutrition science links diet to health outcomes such as obesity and chronic disease risk, with the Mediterranean diet showing particular benefits, though dietary research faces significant methodological challenges.",
        "The main finding of nutrition science is that calorie intake is the only factor that matters for health, and the specific types of food consumed have little additional effect.",
        "Nutrition science primarily studies the biochemical mechanisms of individual nutrients in isolated laboratory conditions, rather than examining the effects of overall dietary patterns in human populations.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-9-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Cognitive psychology is the scientific study of mental processes including perception, attention, memory, language, and problem-solving. It emerged as a distinct discipline in the 1950s and 1960s, partly as a reaction against behaviourism, which restricted psychology to the study of observable behaviour and rejected the investigation of internal mental states. Cognitive psychologists use experimental methods to study how people encode, store, and retrieve information. Working memory, a concept developed by Alan Baddeley, refers to the system that temporarily holds and manipulates information during complex tasks such as reading and arithmetic. Research in cognitive psychology has applications in education, human-computer interaction, and the design of more effective learning strategies.",
      question: "According to the speaker, what was one reason cognitive psychology emerged as a discipline?",
      options: [
        "It was developed to replace neuroscience as the dominant approach to studying the brain.",
        "It arose partly as a reaction against behaviourism's rejection of internal mental states.",
        "It was founded by Alan Baddeley to study the structure of working memory specifically.",
        "It emerged because experimental methods were no longer considered valid in psychology.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-9-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Education policy has increasingly focused on the question of how to close achievement gaps between students from different socioeconomic backgrounds. Research consistently shows that children from lower-income families begin school with smaller vocabularies, less exposure to literacy activities at home, and greater exposure to stress, all of which affect their readiness to learn. Early childhood interventions, such as high-quality pre-school programmes, have been shown to produce significant and lasting improvements in educational and social outcomes, particularly for disadvantaged children. However, such programmes require substantial investment, and their benefits may take years or even decades to become fully visible, making it difficult to build political support for sustained funding.",
      question: "What challenge does the speaker identify in maintaining support for early childhood programmes?",
      options: [
        "Parents from low-income backgrounds are often reluctant to enrol their children in such programmes.",
        "The benefits take many years to appear, making it hard to sustain political will for funding.",
        "These programmes have been shown to improve outcomes only for children from wealthy families.",
        "Early childhood specialists lack the qualifications required to run government-funded programmes.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-9-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Sustainable agriculture seeks to meet current food production needs without compromising the ability of future generations to meet their own. Soil health is central to this goal, as degraded soils reduce crop yields and increase dependence on synthetic fertilisers. Practices such as composting, reduced tillage, and the use of cover crops help restore organic matter and support the microbial communities that make soils fertile. As climate change brings more frequent droughts and extreme weather events, the resilience of agricultural systems is becoming",
      options: ["less important globally", "increasingly critical", "financially unviable", "largely irrelevant"],
      correctIndex: 1,
    },
    {
      id: "smw-9-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Demography studies the size, structure, and dynamics of human populations through the analysis of birth rates, death rates, and migration patterns. The demographic transition model describes how countries typically move from high birth and death rates to low birth and death rates as they industrialise and develop. In the final stage of this model, birth rates may fall below replacement level, leading to population ageing and, eventually, population decline. Countries experiencing this transition face the prospect of economic slowdown, labour shortages, and growing pressure on social welfare systems unless they adapt through policy changes or",
      options: ["military expansion", "environmental degradation", "managed migration", "agricultural reform"],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-9-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The discovery of ancient writing systems has allowed historians to reconstruct aspects of early civilisations that would otherwise remain unknown. Cuneiform, developed in Mesopotamia around five thousand years ago, is one of the earliest known writing systems and was used to record administrative transactions, legal codes, and literary works. The decipherment of Egyptian hieroglyphics in the nineteenth century, following the discovery of the Rosetta Stone, opened up an enormous body of ancient texts to modern scholars.",
      displayText: "The discovery of ancient writing systems has allowed historians to reconstruct aspects of early civilisations that would otherwise remain unknown. Cuneiform, developed in Mesopotamia around five thousand years ago, is one of the earliest known writing systems and was used to record administrative transactions, legal codes, and historical works. The decipherment of Egyptian hieroglyphics in the nineteenth century, following the discovery of the Rosetta Stone, revealed an enormous body of ancient texts to modern scholars.",
      incorrectIndexes: [47, 65],
    },
    {
      id: "hiw-9-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Materials science has produced a range of advanced materials that are transforming engineering applications. Carbon fibre reinforced polymers offer an exceptional combination of strength and low weight, making them valuable in aerospace and sporting equipment. Shape memory alloys are metals that return to a predetermined shape when heated, with applications in medical devices and actuators. Piezoelectric materials generate an electrical charge when subjected to mechanical stress, enabling their use in sensors and energy harvesting systems.",
      displayText: "Materials science has produced a range of advanced materials that are transforming engineering applications. Carbon fibre reinforced polymers offer an exceptional combination of strength and low weight, making them valuable in aerospace and sporting equipment. Shape memory alloys are metals that return to a predetermined shape when cooled, with applications in medical devices and actuators. Piezoelectric materials generate an electrical charge when subjected to mechanical pressure, enabling their use in sensors and energy harvesting systems.",
      incorrectIndexes: [47, 65],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-9-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The results of the experiment were published in a peer-reviewed journal.",
    },
    {
      id: "wfd-9-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Geopolitical tensions have disrupted global supply chains and raised commodity prices.",
    },
    {
      id: "wfd-9-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Demographic change poses significant challenges for the sustainability of pension systems.",
    },
  ],
};

export default test9;
