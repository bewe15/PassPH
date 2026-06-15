import type { PTEListeningTest } from "./pte-listening-types";

const test16: PTEListeningTest = {
  id: "pte-listening-16",
  title: "PTE Listening — Test 16",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-16-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Political Philosophy and Justice",
      audioUrl: "",
      audioText: "Political philosophy addresses fundamental questions about how societies should be organised and what obligations citizens and governments owe one another. The concept of justice is central to this inquiry. Liberals such as John Rawls argue that just institutions are those that rational individuals would choose from behind a veil of ignorance, ensuring fairness regardless of one's social position. Libertarians, by contrast, emphasise that justice requires the protection of individual rights and minimal state interference, even if this results in significant inequalities. Communitarians challenge both perspectives, arguing that abstract principles disconnected from cultural context fail to capture what justice means within particular communities. More recent theories of global justice extend these debates to the international level, asking what wealthy nations owe to the global poor and whether national borders are morally relevant in distributing resources. Each school of thought generates different conclusions about taxation, welfare, immigration, and the limits of state power.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-16-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Health informatics is transforming the delivery of healthcare by enabling more efficient collection, storage, and analysis of clinical data. Electronic health records reduce the duplication of diagnostic tests and improve communication between healthcare providers, benefiting patient safety. Predictive analytics tools use large datasets to flag patients who are at elevated risk of hospital readmission or chronic disease progression, allowing clinicians to intervene earlier. However, the transition to digital health systems has not been without challenges. Interoperability problems between different software platforms prevent seamless data sharing across institutions. Privacy concerns have intensified as health data breaches expose sensitive personal information. Staff resistance to new systems and the cost of implementation are additional barriers to realising the full potential of health informatics.",
      question: "According to the recording, which TWO challenges facing health informatics are mentioned?",
      options: [
        "Lack of government funding for digital health systems",
        "Interoperability problems preventing data sharing between institutions",
        "Shortage of qualified software developers in the health sector",
        "Privacy concerns arising from data breaches",
        "Patients refusing to share electronic records with doctors",
        "Excessive reliance on paper-based backup systems",
      ],
      correctIndexes: [1, 3],
    },
    {
      id: "mcm-16-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Nanotechnology is finding applications across a wide range of industries beyond medicine. In electronics, nanoscale transistors have enabled the miniaturisation of computing devices and the dramatic increase in processing power described by Moore's Law, though physical limits to further miniaturisation are now being approached. In the energy sector, nano-engineered solar cells and electrode materials promise to improve the efficiency and reduce the cost of renewable energy systems. The textile industry uses nanocoatings to create fabrics that repel water and stains without changing their feel or appearance. In construction, nano-silica additives are used to produce stronger and more durable concrete. Food packaging incorporating antimicrobial nanoparticles can extend shelf life by inhibiting bacterial growth on surfaces.",
      question: "Which THREE industries are mentioned as benefiting from nanotechnology applications?",
      options: [
        "Electronics and computing",
        "Pharmaceutical drug manufacturing",
        "Energy and renewable systems",
        "Transportation and logistics",
        "Food packaging and preservation",
        "Water purification and sanitation",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-16-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Globalisation refers to the growing interconnectedness of economies, societies, and cultures driven by trade, technology, and migration. Over the past several decades, global supply chains have become increasingly integrated as companies locate different stages of production in countries where costs and expertise are most favourable. This integration has reduced the prices of manufactured goods for consumers worldwide and contributed to economic growth in many developing countries. However, globalisation has also generated significant disruption in developed economies, where workers in industries that cannot compete with cheaper imports have experienced job losses and wage stagnation. The COVID-19 pandemic exposed the fragility of highly integrated supply chains when factory closures and transport disruptions rippled across the global economy.",
      transcript: "Globalisation refers to the growing interconnectedness of economies, societies, and cultures driven by trade, technology, and migration. Over the past several decades, global supply chains have become increasingly ___BLANK___ as companies locate different stages of production in countries where costs and expertise are most favourable. This integration has reduced the prices of manufactured goods for consumers worldwide and contributed to economic ___BLANK___ in many developing countries. However, globalisation has also generated significant ___BLANK___ in developed economies, where workers in industries that cannot compete with cheaper imports have experienced job losses and wage stagnation. The COVID-19 pandemic exposed the ___BLANK___ of highly integrated supply chains when factory closures and transport disruptions rippled across the global economy.",
      answers: ["integrated", "growth", "disruption", "fragility"],
    },
    {
      id: "fib-16-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Urban agriculture is gaining momentum as cities seek to enhance food security and reduce their environmental footprint. Vertical farms, which stack crops in climate-controlled indoor environments, can produce year-round yields that are far higher per square metre than conventional outdoor farming. The controlled conditions eliminate the need for pesticides and dramatically reduce water consumption through closed-loop irrigation systems. Community gardens distributed across urban neighbourhoods improve access to fresh produce in areas that lack supermarkets, often described as food deserts. Municipal governments are increasingly incorporating food production into urban planning strategies, recognising that edible landscapes can contribute to biodiversity, stormwater management, and community cohesion.",
      transcript: "Urban agriculture is gaining momentum as cities seek to enhance food security and reduce their environmental ___BLANK___. Vertical farms, which stack crops in climate-controlled indoor environments, can produce year-round yields that are far higher per square metre than conventional outdoor farming. The controlled conditions eliminate the need for pesticides and dramatically reduce water ___BLANK___ through closed-loop irrigation systems. Community gardens distributed across urban neighbourhoods improve access to fresh produce in areas that lack supermarkets, often described as food ___BLANK___. Municipal governments are increasingly incorporating food production into urban ___BLANK___ strategies, recognising that edible landscapes can contribute to biodiversity, stormwater management, and community cohesion.",
      answers: ["footprint", "consumption", "deserts", "planning"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-16-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Neurodiversity is a perspective that views cognitive differences such as autism, dyslexia, and attention deficit hyperactivity disorder as natural variations in the human genome rather than pathologies to be treated. This framework has gained traction in educational and employment contexts, with some organisations actively recruiting neurodiverse individuals for roles that suit their particular cognitive strengths. Research indicates that teams with diverse cognitive styles can generate more creative solutions and identify risks that homogeneous groups might overlook. At the same time, it is important not to romanticise neurodiversity in ways that minimise the real difficulties many neurodiverse individuals face in environments that are not designed to accommodate their needs. A balanced approach recognises both the strengths and the challenges associated with different cognitive profiles.",
      correctIndex: 0,
      summaries: [
        "Neurodiversity frames cognitive differences as natural human variation, highlighting potential workplace strengths while cautioning against ignoring genuine challenges faced by neurodiverse individuals.",
        "Neurodiversity advocates argue that conditions such as autism and dyslexia are caused by environmental toxins and can be reversed through early dietary and behavioural intervention.",
        "All neurodiverse individuals excel in technology roles and should be recruited exclusively for positions in software engineering and data analysis where their skills are best used.",
        "The neurodiversity movement has been widely rejected by employers who find that neurodiverse workers require excessive accommodations that reduce overall team productivity.",
      ],
    },
    {
      id: "hcs-16-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Political philosophy examines foundational questions about authority, justice, and the proper scope of government. Liberal thinkers such as John Locke and John Stuart Mill argued that individual liberty should be the primary value guiding political arrangements, with the state justified in limiting freedom only to prevent harm to others. Socialist and social democratic traditions prioritise equality and collective welfare, arguing that unchecked markets produce unjust distributions of wealth and opportunity. Republican theorists emphasise non-domination — the freedom from the arbitrary interference of others — as the core political value. Contemporary debates extend these traditions to global issues including climate change, migration, and international distributive justice, challenging philosophers to develop theories that operate across as well as within national borders.",
      correctIndex: 3,
      summaries: [
        "Political philosophy has reached a consensus that liberal democracy is the only legitimate form of government and that all other systems violate fundamental principles of justice.",
        "Modern political philosophy is concerned exclusively with environmental ethics and the rights of future generations, abandoning earlier debates about liberty, equality, and state authority.",
        "Political philosophers agree that global inequality is the most pressing issue of our time and that wealthy nations are morally required to redistribute most of their income to poorer countries.",
        "Political philosophy examines competing values including liberty, equality, and non-domination, with contemporary debates extending these frameworks to global challenges such as climate change and migration.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-16-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Cultural heritage preservation faces a fundamental tension between conservation and accessibility. Stringent preservation measures can limit public access to sites and objects, yet unrestricted access risks physical damage from visitor footfall, humidity, and handling. Many heritage institutions are responding to this tension through digital access strategies, creating high-resolution online collections and virtual tours that allow global audiences to engage with cultural heritage without placing pressure on physical objects or sites. Digitisation also provides a safeguard against loss, ensuring that detailed records survive even if originals are damaged or destroyed. However, digital access is not a complete substitute for the experience of encountering authentic objects or places, and questions of equitable access to technology mean that digital strategies do not reach all audiences equally.",
      question: "According to the speaker, what is one limitation of digital access strategies for cultural heritage?",
      options: [
        "Digital records are less accurate than physical access for scholarly research purposes.",
        "Digital access is too expensive for most heritage institutions to implement at scale.",
        "Digital strategies do not reach all audiences equally due to uneven access to technology.",
        "Online collections reduce visitor numbers to museums, causing financial difficulties.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-16-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Labour market economists distinguish between frictional, structural, and cyclical unemployment. Frictional unemployment occurs when workers are between jobs as they search for new positions, and is considered a normal feature of healthy economies. Structural unemployment arises when there is a mismatch between the skills workers possess and those demanded by employers, often driven by technological change or industrial restructuring. Cyclical unemployment increases during economic downturns as falling demand leads firms to reduce their workforces. Policy responses differ according to the type of unemployment: retraining programmes address structural unemployment, while fiscal and monetary stimulus is typically used to combat cyclical unemployment. Understanding the composition of unemployment is therefore essential to designing effective labour market policy.",
      question: "What does the speaker say about structural unemployment?",
      options: [
        "It is caused primarily by recessions and falls as the economy recovers.",
        "It results from a skills mismatch between workers and employers, often driven by technological change.",
        "It occurs naturally when workers voluntarily leave jobs to search for better opportunities.",
        "It can be eliminated entirely through expansionary monetary policy.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-16-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Marine conservation scientists have increasingly focused on the role of large predators in maintaining the health of ocean ecosystems. The removal of apex predators such as sharks through overfishing can trigger trophic cascades, in which the populations of prey species grow unchecked, placing pressure on species further down the food chain. In some cases, the reintroduction of predators to depleted ecosystems has allowed vegetation and biodiversity to recover in a process known as trophic rewilding. Establishing networks of well-enforced marine protected areas is considered by many scientists to be the most effective strategy for protecting both predator populations and the broader ecosystem functions on which ocean",
      options: [
        "warming projections depend for their accuracy",
        "shipping lanes rely for safe navigation",
        "health and productivity ultimately depend",
        "acidification measurements are regularly recorded",
      ],
      correctIndex: 2,
    },
    {
      id: "smw-16-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The application of nanotechnology to energy storage has the potential to significantly improve the performance characteristics of batteries and supercapacitors. Nano-structured electrode materials offer greater surface area for electrochemical reactions, increasing the energy and power density of storage devices. Graphene, a single-atom-thick sheet of carbon with remarkable electrical conductivity and mechanical strength, has attracted intense research interest as an electrode material. Despite impressive laboratory results, translating nano-engineered energy storage from the laboratory to commercial production at scale remains a substantial challenge, largely because of the high cost of synthesising and processing nanomaterials with the precision required for consistent",
      options: [
        "academic publication and peer review",
        "recycling and end-of-life disposal",
        "performance and safety standards",
        "government funding and policy approval",
      ],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-16-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Health informatics is enabling clinicians to make more informed decisions by providing instant access to comprehensive patient data. Predictive algorithms can identify patients who are likely to deteriorate before clinical signs become apparent, allowing early intervention that reduces hospital admissions and improves outcomes. However, the integration of algorithmic decision support into clinical practice raises ethical questions about accountability when automated systems contribute to diagnostic errors.",
      displayText: "Health informatics is enabling clinicians to make more accurate decisions by providing instant access to comprehensive patient data. Predictive algorithms can identify patients who are likely to deteriorate before clinical signs become apparent, allowing early intervention that reduces hospital admissions and improves outcomes. However, the integration of algorithmic decision support into clinical practice raises ethical questions about accountability when automated systems contribute to diagnostic mistakes.",
      incorrectIndexes: [7, 54],
    },
    {
      id: "hiw-16-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Political philosophy provides the conceptual tools to evaluate the justice of social institutions, laws, and policies. By examining the underlying principles that justify authority and the distribution of rights and resources, political philosophers help societies articulate what they owe to their members and to people beyond their borders. This work is not merely academic but has practical implications for how democracies design welfare systems, immigration rules, and environmental regulations.",
      displayText: "Political philosophy provides the theoretical tools to evaluate the justice of social institutions, laws, and policies. By examining the underlying principles that justify authority and the distribution of rights and resources, political philosophers help societies articulate what they owe to their members and to people beyond their borders. This work is not merely abstract but has practical implications for how democracies design welfare systems, immigration rules, and environmental regulations.",
      incorrectIndexes: [3, 52],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-16-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Political philosophers disagree about the extent to which the state should redistribute wealth.",
    },
    {
      id: "wfd-16-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Vertical farming systems use significantly less water than conventional outdoor cultivation methods.",
    },
    {
      id: "wfd-16-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Health informatics tools help clinicians identify at-risk patients before symptoms become apparent.",
    },
  ],
};

export default test16;
