import type { PTEListeningTest } from "./pte-listening-types";

const test12: PTEListeningTest = {
  id: "pte-listening-12",
  title: "PTE Listening — Test 12",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-12-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Criminal Justice Reform and Recidivism Reduction",
      audioUrl: "",
      audioText: "Criminal justice systems around the world are increasingly scrutinised for their effectiveness in reducing reoffending, or recidivism. Research consistently shows that imprisonment alone does little to address the underlying factors that drive criminal behaviour, including poverty, lack of education, substance dependence, and mental health disorders. Countries such as Norway have adopted rehabilitation-focused approaches that prioritise education, vocational training, and psychological support within prisons, achieving some of the lowest recidivism rates globally. In contrast, systems that rely heavily on lengthy incarceration and punitive conditions tend to produce higher rates of reoffending. Evidence-based programmes targeting specific risk factors have demonstrated considerable success in reducing reoffending among both juvenile and adult populations. Critics of current systems argue that resources would be better directed toward community-based interventions that address crime prevention before individuals enter the justice system. The growing consensus among criminologists is that effective criminal justice reform requires a shift from purely punitive models toward approaches that treat offending as a social and public health issue rather than simply a moral failing.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-12-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Social inequality refers to the unequal distribution of resources, opportunities, and privileges across different groups in society. Income and wealth inequality have widened in many countries over recent decades, driven by factors including technological change that favours skilled workers, the decline of manufacturing employment, and tax policies that have benefited high earners. Health outcomes, educational attainment, and life expectancy are all strongly correlated with socioeconomic status, meaning that the consequences of inequality extend well beyond income. Governments have attempted to address inequality through progressive taxation, social welfare programmes, and targeted investments in education and healthcare, though the effectiveness of these measures remains debated.",
      question: "According to the recording, which TWO factors have contributed to widening income inequality?",
      options: [
        "Technological change that favours skilled workers",
        "Increased immigration from developing countries",
        "The decline of manufacturing employment",
        "Rising costs of higher education",
        "Reductions in international trade tariffs",
        "Growth in self-employment and the gig economy",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-12-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The field of climate adaptation is concerned with how communities, governments, and industries adjust to the impacts of a changing climate. Coastal cities are investing in flood defences, elevated infrastructure, and managed retreat programmes that relocate communities from high-risk areas. Agricultural sectors are adopting drought-resistant crop varieties and adjusting planting calendars in response to shifting growing seasons. Urban planners are incorporating green infrastructure — parks, green roofs, and permeable pavements — to manage increased rainfall and reduce the urban heat island effect. Indigenous communities are drawing on traditional ecological knowledge to develop locally appropriate adaptation strategies. Despite these efforts, funding for adaptation in low-income countries remains severely insufficient.",
      question: "Which THREE adaptation strategies are mentioned in the recording?",
      options: [
        "Investment in coastal flood defences",
        "Adoption of drought-resistant crop varieties",
        "International agreements to cap carbon emissions",
        "Incorporation of green infrastructure in urban planning",
        "Expansion of nuclear energy to replace fossil fuels",
        "Stricter building codes for commercial properties",
      ],
      correctIndexes: [0, 1, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-12-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Space colonisation poses unique challenges for human biology. Prolonged exposure to microgravity causes muscles and bones to weaken as the body no longer needs to work against gravitational forces. Cosmic radiation, which is largely blocked by Earth's magnetic field, poses elevated cancer risks for astronauts on long-duration missions beyond low Earth orbit. Psychological challenges include the monotony of confined living quarters, separation from family and friends, and the communication delays that increase with distance from Earth. Engineers are developing rotating habitat modules that would simulate gravity through centrifugal force to address some of these physiological concerns.",
      transcript: "Space colonisation poses unique challenges for human biology. Prolonged exposure to microgravity causes muscles and bones to ___BLANK___ as the body no longer needs to work against gravitational forces. Cosmic ___BLANK___, which is largely blocked by Earth's magnetic field, poses elevated cancer risks for astronauts on long-duration missions beyond low Earth orbit. Psychological challenges include the monotony of confined living quarters, separation from family and friends, and the communication ___BLANK___ that increase with distance from Earth. Engineers are developing rotating habitat modules that would simulate gravity through centrifugal ___BLANK___ to address some of these physiological concerns.",
      answers: ["weaken", "radiation", "delays", "force"],
    },
    {
      id: "fib-12-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The criminal justice system encompasses the laws, institutions, and processes by which societies define and respond to criminal behaviour. Police forces are responsible for detecting crime and apprehending suspects, who are then processed through courts where guilt or innocence is determined. Those found guilty may be sentenced to imprisonment, community service, fines, or rehabilitation programmes. Prisons have historically served multiple purposes including punishment, deterrence, incapacitation, and rehabilitation, though the relative weight placed on each of these objectives varies between jurisdictions and changes over time with shifts in public opinion and political priorities.",
      transcript: "The criminal justice system encompasses the laws, institutions, and processes by which societies define and respond to criminal behaviour. Police forces are responsible for detecting crime and apprehending ___BLANK___, who are then processed through courts where guilt or innocence is determined. Those found guilty may be sentenced to imprisonment, community service, fines, or rehabilitation ___BLANK___. Prisons have historically served multiple purposes including punishment, ___BLANK___, incapacitation, and rehabilitation, though the relative weight placed on each of these objectives varies between ___BLANK___ and changes over time.",
      answers: ["suspects", "programmes", "deterrence", "jurisdictions"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-12-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Trade economics is shaped by the theory of comparative advantage, which holds that countries benefit from specialising in the production of goods and services they can provide at relatively lower opportunity cost, even if they are not the most efficient producer in absolute terms. This principle underpins arguments for open international trade as a mechanism for increasing global economic output. However, the gains from trade are not distributed evenly within societies. Workers in industries exposed to foreign competition may lose their jobs, while consumers benefit from lower prices. Economists and policymakers continue to debate how best to manage this tension, particularly as automation and global supply chain shifts alter the landscape of international commerce.",
      correctIndex: 3,
      summaries: [
        "Trade economics argues that countries should impose tariffs on imported goods to protect domestic industries and ensure that the gains from trade remain within national borders rather than benefiting foreign producers.",
        "Comparative advantage theory suggests that wealthier nations will always dominate global trade because they have access to better technology and infrastructure, leaving developing economies at a permanent disadvantage.",
        "Trade economics focuses primarily on currency exchange rates and their effects on export competitiveness, showing that countries with weaker currencies tend to run trade surpluses over the long term.",
        "Comparative advantage underpins free trade arguments, but the gains from trade are unevenly distributed, creating tension between consumer benefits and harm to workers in exposed industries.",
      ],
    },
    {
      id: "hcs-12-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Media literacy encompasses the skills needed to critically evaluate the information we encounter across print, broadcast, and digital platforms. In an era characterised by information abundance and the rapid spread of misinformation, these skills have become increasingly vital. Research indicates that many people struggle to distinguish reliable news sources from misleading or fabricated content, and that emotional reactions to headlines often override analytical evaluation. Educators and media organisations are developing curricula and tools to help citizens of all ages improve their ability to verify sources, recognise bias, and understand how algorithmic curation shapes the information they see. Building a more media-literate population is seen as essential for the health of democratic societies.",
      correctIndex: 1,
      summaries: [
        "Media literacy is primarily a technical skill concerned with understanding how to use digital tools and platforms safely, including protecting personal data and avoiding online scams.",
        "Media literacy involves critically evaluating information across platforms and is increasingly important given widespread misinformation, with educators developing tools to help people verify sources and recognise bias.",
        "Media literacy research shows that traditional broadcast media such as television and radio are more reliable than online sources, and that people should be encouraged to rely on fewer but more trusted outlets.",
        "Media literacy programmes have been largely unsuccessful because people are unwilling to question sources they already trust, making the spread of misinformation essentially impossible to reverse.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-12-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Biochemistry has made transformative contributions to the development of pharmaceuticals. By understanding the molecular mechanisms underlying diseases, biochemists can identify specific proteins or enzymes that play a role in disease progression and design molecules that interfere with their activity. This approach, known as rational drug design, has produced treatments for conditions ranging from HIV to certain cancers. However, the process of developing a new drug from initial discovery to clinical approval typically takes over a decade and costs hundreds of millions of dollars, placing significant barriers on the translation of biochemical discoveries into accessible medicines.",
      question: "What does the speaker identify as a significant barrier to translating biochemical discoveries into medicines?",
      options: [
        "A shortage of trained biochemists in research institutions.",
        "Reluctance from pharmaceutical companies to invest in rare diseases.",
        "The lengthy time and enormous cost of drug development and approval.",
        "Strict international regulations that prevent clinical trials from proceeding.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-12-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Social inequality has measurable effects on health outcomes across populations. Individuals from lower socioeconomic backgrounds are more likely to experience chronic diseases such as diabetes, heart disease, and respiratory conditions, and tend to have shorter life expectancies than those from higher-income groups. These disparities arise from a combination of material factors, including poorer housing, nutrition, and access to healthcare, and psychosocial factors such as chronic stress associated with financial insecurity. Public health researchers argue that reducing health inequalities requires addressing the social determinants of health — the conditions in which people are born, grow, live, work, and age — rather than focusing solely on individual behaviours.",
      question: "According to the speaker, what do public health researchers say is necessary to reduce health inequalities?",
      options: [
        "Increasing the number of hospitals and clinics in disadvantaged areas.",
        "Addressing the social determinants of health rather than focusing only on individual behaviour.",
        "Providing free gym memberships and nutritional supplements to low-income populations.",
        "Training more doctors and nurses from disadvantaged socioeconomic backgrounds.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-12-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Indigenous knowledge systems represent an invaluable and often irreplaceable source of information about local ecosystems, species, and sustainable resource management. These bodies of knowledge have been developed and refined over many generations through continuous observation and practice. As indigenous languages disappear and communities become increasingly urbanised, this knowledge is at risk of being permanently lost. Ethnographers and conservation biologists working in partnership with indigenous elders are racing to document these insights before they",
      options: ["gain wider academic recognition", "are permanently lost forever", "attract commercial interest", "become legally protected"],
      correctIndex: 1,
    },
    {
      id: "smw-12-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Cognitive biases influence decision-making in virtually every domain of human activity, from personal finance to medical diagnosis and public policy. The availability heuristic, for instance, leads people to overestimate the likelihood of events that come easily to mind — such as dramatic news stories about plane crashes — while underestimating more common but less memorable risks. Recognising these biases is the first step toward mitigating their effects, and a growing number of organisations are using insights from behavioural science to design environments and processes that help people make more",
      options: ["frequent decisions", "rational choices", "creative observations", "rapid assessments"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-12-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Disaster risk reduction requires governments to invest in early warning systems, resilient infrastructure, and community preparedness programmes. The Sendai Framework for Disaster Risk Reduction, adopted in 2015, calls on nations to substantially reduce disaster mortality, the number of affected people, and direct economic losses relative to global gross domestic product by 2030.",
      displayText: "Disaster risk reduction requires governments to invest in early warning systems, resilient infrastructure, and community awareness programmes. The Sendai Framework for Disaster Risk Reduction, adopted in 2015, calls on nations to substantially reduce disaster mortality, the number of affected people, and direct financial losses relative to global gross domestic product by 2030.",
      incorrectIndexes: [15, 42],
    },
    {
      id: "hiw-12-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Forest ecosystems support biodiversity, regulate climate, and provide livelihoods for hundreds of millions of people worldwide. Tropical forests are particularly rich in species and store vast amounts of carbon in their biomass and soils. Deforestation releases this stored carbon into the atmosphere, contributing significantly to global warming. Protecting and restoring forests is therefore a critical component of both climate mitigation and biodiversity conservation strategies.",
      displayText: "Forest ecosystems support biodiversity, regulate climate, and provide livelihoods for hundreds of millions of people globally. Tropical forests are particularly rich in species and store vast amounts of carbon in their biomass and soils. Deforestation releases this stored carbon into the atmosphere, contributing significantly to global heating. Protecting and restoring forests is therefore a critical component of both climate mitigation and biodiversity conservation strategies.",
      incorrectIndexes: [15, 46],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-12-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Criminal justice reform requires addressing the social factors that contribute to reoffending.",
    },
    {
      id: "wfd-12-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Social inequality has measurable consequences for health outcomes across all age groups.",
    },
    {
      id: "wfd-12-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Indigenous communities hold detailed knowledge of local ecosystems that modern science is beginning to value.",
    },
  ],
};

export default test12;
