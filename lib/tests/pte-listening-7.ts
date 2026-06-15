import type { PTEListeningTest } from "./pte-listening-types";

const test7: PTEListeningTest = {
  id: "pte-listening-7",
  title: "PTE Listening — Test 7",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-7-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "The Psychology of Moral Decision-Making",
      audioUrl: "",
      audioText: "Moral psychology explores how people make ethical decisions and what factors influence their judgements about right and wrong. Research has challenged the traditional view that moral reasoning is primarily a rational, deliberate process. Psychologist Jonathan Haidt proposed the social intuitionist model, which suggests that moral judgements are largely driven by rapid emotional intuitions, with conscious reasoning serving mainly to justify decisions already reached. Studies using neuroimaging support this view, showing that areas of the brain associated with emotion are activated before those involved in deliberate reasoning during moral dilemmas. Cross-cultural research has identified several universal moral foundations — including care, fairness, loyalty, authority, and purity — though different cultures and political groups weight these foundations differently. These findings have practical implications for fields ranging from law and public policy to artificial intelligence, where machines must increasingly navigate ethically complex situations. Understanding the psychological mechanisms underlying moral judgement may also help to explain phenomena such as moral disengagement, by which people justify harmful actions through rationalisation and distancing strategies.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-7-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The field of epigenetics has revealed that gene expression can be influenced by environmental factors without any change to the underlying DNA sequence. Diet, stress, exposure to toxins, and even social experiences can modify chemical tags on DNA or the proteins around which it is wrapped, switching genes on or off. Some of these epigenetic modifications can be passed from parents to their offspring, challenging the traditional view that only the DNA sequence itself is heritable. Research suggests that the effects of famine, trauma, and toxic exposure experienced by one generation may influence the health and behaviour of subsequent generations through epigenetic mechanisms.",
      question: "According to the talk, which TWO factors can cause epigenetic modifications?",
      options: [
        "Exposure to environmental toxins",
        "Changes to the underlying DNA sequence",
        "Psychological stress",
        "Surgical procedures",
        "The phase of the moon during conception",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-7-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The discipline of urban sociology examines how cities shape and are shaped by social processes. Classic theorists such as Georg Simmel observed that the sensory overload of city life leads urban dwellers to develop a blasé attitude — a psychological detachment that allows them to cope with constant stimulation. Contemporary researchers have studied a wide range of urban phenomena, including gentrification, which refers to the process by which wealthier residents move into lower-income neighbourhoods, raising property values and often displacing long-term residents. Urban segregation, which can occur along lines of race, class, or ethnicity, has been shown to exacerbate inequality by concentrating poverty and limiting access to quality education and employment. Participatory urban planning, in which residents are involved in decisions about their neighbourhoods, has emerged as one approach to making cities more equitable and responsive to community needs.",
      question: "Which THREE urban social phenomena are discussed in the recording?",
      options: [
        "The blasé attitude as a psychological response to city life",
        "The decline of manufacturing in post-industrial cities",
        "Gentrification and the displacement of lower-income residents",
        "Urban segregation along lines of class, race, or ethnicity",
        "The growth of suburban shopping centres",
        "International migration into rural areas",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-7-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The history of architecture reflects humanity's evolving relationship with materials, technology, and the natural environment. The Romans pioneered the use of concrete, enabling them to construct vast domed structures such as the Pantheon that have stood for nearly two thousand years. The Gothic cathedrals of medieval Europe pushed stone construction to its structural limits, using pointed arches and flying buttresses to transfer weight and allow for soaring interior spaces filled with stained glass. The twentieth century saw the widespread adoption of steel and reinforced concrete, which freed architects from the constraints of load-bearing walls and made possible the glass-curtain skyscrapers that now define many city skylines.",
      transcript: "The history of architecture reflects humanity's evolving relationship with materials, technology, and the natural environment. The Romans pioneered the use of concrete, enabling them to construct vast domed structures such as the Pantheon that have stood for nearly two thousand years. The Gothic cathedrals of medieval Europe pushed stone construction to its structural ___BLANK___, using pointed arches and flying buttresses to transfer weight and allow for soaring interior ___BLANK___ filled with stained glass. The twentieth century saw the widespread adoption of steel and reinforced concrete, which freed architects from the constraints of load-bearing ___BLANK___ and made possible the glass-curtain skyscrapers that now define many city ___BLANK___.",
      answers: ["limits", "spaces", "walls", "skylines"],
    },
    {
      id: "fib-7-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The study of volcanoes has profound implications for disaster risk reduction in regions where large populations live near active volcanic systems. Early warning systems now combine seismic monitoring with satellite observation to detect ground deformation, changes in gas emissions, and thermal anomalies that may precede an eruption. Community education programmes are equally important, ensuring that residents understand evacuation procedures and do not return to danger zones prematurely. One of the most challenging aspects of volcanic risk management is communicating uncertainty to the public and to decision-makers, since scientists can rarely predict the precise timing or magnitude of a future eruption with confidence.",
      transcript: "The study of volcanoes has profound implications for disaster risk reduction in regions where large populations live near active volcanic systems. Early warning systems now combine seismic monitoring with satellite observation to detect ground ___BLANK___, changes in gas emissions, and thermal anomalies that may precede an eruption. Community education programmes are equally important, ensuring that residents understand ___BLANK___ procedures and do not return to danger zones prematurely. One of the most challenging aspects of volcanic risk management is communicating ___BLANK___ to the public and to decision-makers, since scientists can rarely predict the precise timing or ___BLANK___ of a future eruption with confidence.",
      answers: ["deformation", "evacuation", "uncertainty", "magnitude"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-7-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The concept of cultural heritage encompasses both tangible assets — such as monuments, buildings, and artefacts — and intangible practices, including languages, music, rituals, and traditional craftsmanship. International bodies such as UNESCO work to identify and protect heritage sites and practices judged to be of outstanding universal value. The designation of a site as a World Heritage Site can attract tourism and funding but also raises difficult questions about ownership, access, and the commercialisation of culture. There is ongoing debate about the repatriation of cultural objects taken during colonial periods, with many originating countries arguing that museums in former colonial powers should return objects held in their collections.",
      correctIndex: 0,
      summaries: [
        "Cultural heritage includes both physical sites and intangible practices, and is subject to international protection efforts; debates exist over commercialisation, tourism, and the repatriation of objects removed during colonialism.",
        "UNESCO has determined that all cultural heritage should be managed exclusively by international organisations rather than individual nations, in order to prevent commercialisation and damage from mass tourism.",
        "The repatriation of cultural objects is now universally agreed upon and most major museums have already returned colonial-era acquisitions to their countries of origin.",
        "Cultural heritage protection focuses entirely on physical monuments and buildings, since intangible practices such as music and language are considered too difficult to preserve formally.",
      ],
    },
    {
      id: "hcs-7-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The economics of inequality has become a central concern in contemporary policy debates. Research by economists at institutions such as the World Bank and the IMF has found that extreme inequality can reduce economic growth by limiting the consumption power of lower-income households and reducing investment in human capital such as education and healthcare. High inequality is also associated with reduced social mobility — the ability of individuals to improve their economic position relative to their parents — which can entrench disadvantage across generations. Policy responses range from progressive taxation and wealth redistribution to investments in public services and early childhood development programmes.",
      correctIndex: 2,
      summaries: [
        "Economists have concluded that inequality is universally beneficial for economic growth because it motivates individuals to work harder and invest in education, and therefore no policy intervention is needed.",
        "Research on inequality focuses mainly on its cultural effects, showing that it leads to social divisions and distrust but has little direct impact on economic performance.",
        "Economic research suggests that extreme inequality reduces growth and social mobility, and that policy responses such as progressive taxation and investment in public services are needed to address it.",
        "The IMF and World Bank have found that inequality is primarily caused by differences in individual talent and effort, meaning that redistribution policies are largely ineffective.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-7-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "The emergence of antibiotic resistance is widely regarded as one of the most serious threats to global public health. Bacteria evolve resistance to antibiotics through natural selection — those that carry mutations enabling them to survive drug treatment reproduce, passing resistance traits to subsequent generations. The problem is accelerated by the overuse and misuse of antibiotics in human medicine and in livestock farming, where they are sometimes used as growth promoters rather than to treat infections. Researchers are developing new classes of antibiotics, but the pipeline is insufficient to keep pace with the emergence of resistant strains. International cooperation is increasingly seen as essential to monitoring resistance patterns and restricting inappropriate antibiotic use.",
      question: "According to the speaker, how does antibiotic resistance emerge in bacteria?",
      options: [
        "Bacteria are deliberately engineered to resist antibiotics in laboratory settings.",
        "Patients who fail to complete antibiotic courses infect others with weakened bacteria.",
        "Bacteria with resistance mutations survive drug treatment and reproduce, spreading resistance.",
        "Viruses transfer resistance genes to bacteria during co-infection.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-7-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Primatology — the scientific study of primates — has contributed enormously to our understanding of human evolution and behaviour. Field studies initiated by researchers such as Jane Goodall in the 1960s revealed that chimpanzees make and use tools, engage in complex social relationships, and exhibit behaviours once thought to be uniquely human, including warfare between groups and learning through imitation. Bonobos, our other closest relatives, present a striking contrast, with societies characterised by female dominance, frequent social bonding through physical contact, and markedly lower levels of aggression than chimpanzees. Comparing the behaviour of these two species can illuminate the range of social strategies available to our hominin ancestors.",
      question: "What does the speaker say about bonobos compared to chimpanzees?",
      options: [
        "Bonobos are more closely related to humans than chimpanzees are.",
        "Bonobos exhibit higher levels of aggression and more rigid social hierarchies.",
        "Bonobos have societies with female dominance and lower aggression than chimpanzees.",
        "Bonobos were first studied by Jane Goodall in the 1960s alongside chimpanzees.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-7-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Forensic anthropology applies the methods of physical anthropology and osteology — the study of bones — to legal and criminal investigations. Forensic anthropologists can determine from skeletal remains an individual's age at death, biological sex, stature, and sometimes the cause and manner of death. They also play a critical role in the identification of victims of mass disasters and human rights abuses, where conventional identification methods may not be available. As the scientific techniques used in this field continue to advance, particularly through the integration of DNA analysis and isotopic profiling, the ability to identify individuals from fragmentary remains is expected to",
      options: [
        "become far less reliable over time",
        "improve significantly in precision",
        "be replaced by digital reconstruction alone",
        "require less specialist training",
      ],
      correctIndex: 1,
    },
    {
      id: "smw-7-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The concept of planetary boundaries, developed by a group of Earth system scientists, identifies nine processes that regulate the stability of the planet's systems and defines safe operating limits for each. These include climate change, biodiversity loss, land-system change, freshwater use, and the introduction of novel entities such as synthetic chemicals and plastics. According to the researchers, humanity has already crossed the safe boundaries for four of these processes. Exceeding these limits does not guarantee an immediate catastrophe, but it significantly increases the risk of abrupt and potentially",
      options: [
        "reversible environmental improvements",
        "predictable seasonal fluctuations",
        "irreversible changes to Earth's systems",
        "temporary disruptions to local ecosystems",
      ],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-7-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The history of medicine is marked by a gradual shift from supernatural explanations of disease to scientific ones. In ancient Greece, Hippocrates argued that illnesses had natural causes and could be observed and classified systematically. Galen, whose theories dominated European medicine for over a thousand years, built on this tradition. It was not until the germ theory of disease, developed in the nineteenth century by scientists such as Louis Pasteur and Robert Koch, that the microbial origins of infectious diseases were firmly established.",
      displayText: "The history of medicine is marked by a gradual shift from supernatural explanations of disease to scientific ones. In ancient Greece, Hippocrates argued that illnesses had natural causes and could be observed and classified systematically. Galen, whose theories dominated European medicine for over a thousand years, built on this tradition. It was not until the germ theory of disease, developed in the eighteenth century by scientists such as Louis Pasteur and Robert Koch, that the microbial origins of infectious diseases were firmly established.",
      incorrectIndexes: [62],
    },
    {
      id: "hiw-7-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Linguistics distinguishes between language acquisition, which refers to the natural process by which children learn their first language, and language learning, which typically describes the more effortful process of studying an additional language in formal or informal settings. Research consistently shows that children acquire their first language with remarkable speed and accuracy without explicit instruction, suggesting that humans are biologically predisposed to develop language. Second language acquisition, by contrast, is heavily influenced by the age at which learning begins, with younger learners generally achieving higher levels of proficiency.",
      displayText: "Linguistics distinguishes between language acquisition, which refers to the natural process by which children learn their first language, and language learning, which typically describes the more effortful process of studying an additional language in formal or informal settings. Research consistently shows that children acquire their first language with remarkable speed and accuracy without explicit instruction, suggesting that humans are biologically prepared to develop language. Second language acquisition, by contrast, is heavily influenced by the age at which learning begins, with older learners generally achieving higher levels of proficiency.",
      incorrectIndexes: [60, 80],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-7-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Moral decision-making is influenced by both emotional intuitions and rational deliberation.",
    },
    {
      id: "wfd-7-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Forensic anthropologists can determine age and sex from skeletal remains with considerable accuracy.",
    },
    {
      id: "wfd-7-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The repatriation of cultural artefacts remains a contested issue in international heritage law.",
    },
  ],
};

export default test7;
