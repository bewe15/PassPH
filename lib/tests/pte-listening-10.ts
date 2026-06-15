import type { PTEListeningTest } from "./pte-listening-types";

const test10: PTEListeningTest = {
  id: "pte-listening-10",
  title: "PTE Listening — Test 10",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-10-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Music Cognition and the Brain",
      audioUrl: "",
      audioText: "Music cognition is a field that examines how the brain processes, understands, and responds to music. Neuroimaging studies have shown that listening to music activates multiple regions of the brain simultaneously, including areas associated with emotion, memory, movement, and language. This broad neural engagement may explain why music has such powerful effects on mood and can evoke vivid autobiographical memories. The phenomenon of musical chills — a pleasurable shiver often experienced during a particularly moving musical passage — is associated with the release of dopamine, the same neurotransmitter involved in reward and motivation. Rhythm, pitch, and melody are processed in partially distinct neural pathways, yet the brain integrates these elements seamlessly to produce a unified musical experience. Research has also found that musical training during childhood can produce lasting structural changes in the brain, enhancing not only musical ability but also language processing and working memory. These findings have prompted interest in music-based interventions for conditions including dementia, depression, and motor rehabilitation following stroke.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-10-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Epidemiology is the branch of medicine concerned with the distribution and determinants of health and disease in populations. The field played a central role in identifying the causes of major historical epidemics, such as John Snow's investigation of the 1854 cholera outbreak in London, in which he traced the source to a contaminated water pump. Modern epidemiologists use a range of study designs including cohort studies, in which groups are followed over time, and case-control studies, which compare people with a disease to those without it. Randomised controlled trials are considered the gold standard for evaluating medical interventions. The field has also been instrumental in understanding the risk factors for chronic diseases such as cancer and heart disease, leading to major public health campaigns on smoking, diet, and physical activity.",
      question: "According to the talk, which TWO study designs are used by modern epidemiologists?",
      options: [
        "Cohort studies following groups over time",
        "Astronomical observation of seasonal disease patterns",
        "Case-control studies comparing diseased and healthy individuals",
        "Computer modelling of evolutionary biology",
        "Cross-cultural analysis of folklore and traditional medicine",
        "Laboratory synthesis of new pharmaceutical compounds",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-10-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Volcanology is the scientific study of volcanoes, lava, magma, and related phenomena. Volcanoes form at tectonic plate boundaries, where plates collide or diverge, and also above hotspots — plumes of unusually hot mantle material that rise through the lithosphere. Eruptions can range from relatively gentle effusive events, in which lava flows slowly from a vent, to explosive events that hurl ash and pyroclastic material high into the atmosphere. Volcanic ash injected into the stratosphere can reflect sunlight, temporarily cooling the climate, as occurred after the eruption of Mount Pinatubo in 1991. Monitoring volcanoes involves seismographs, GPS measurements to detect ground deformation, and analysis of volcanic gases, particularly sulphur dioxide, which often increases before an eruption. Early warning systems have improved evacuation planning and saved many lives in regions with active volcanic systems.",
      question: "Which THREE monitoring methods for volcanoes are mentioned in the recording?",
      options: [
        "Seismographs to detect underground movement",
        "Infrared cameras to measure lava temperature",
        "GPS measurements to detect ground deformation",
        "Satellite tracking of ash clouds in real time",
        "Analysis of sulphur dioxide gas emissions",
        "Underwater sonar to detect submarine eruptions",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-10-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Environmental law encompasses a broad range of legal frameworks designed to protect natural resources and regulate human activities that affect the environment. At the domestic level, legislation such as the Clean Air Act and the Clean Water Act in the United States set standards for pollution and establish enforcement mechanisms. Internationally, multilateral agreements such as the Convention on Biological Diversity seek to coordinate national efforts to conserve ecosystems and protect species from extinction. One of the most significant challenges in environmental law is ensuring compliance, particularly when states lack the resources or political will to enforce regulations effectively. Non-governmental organisations increasingly play a watchdog role, documenting violations and pursuing legal action.",
      transcript: "Environmental law encompasses a broad range of legal ___BLANK___ designed to protect natural resources and regulate human activities that affect the environment. At the domestic level, legislation sets standards for pollution and establishes enforcement ___BLANK___. Internationally, multilateral agreements such as the Convention on Biological Diversity seek to coordinate national efforts to conserve ___BLANK___ and protect species from extinction. One of the most significant challenges in environmental law is ensuring ___BLANK___, particularly when states lack the resources or political will to enforce regulations effectively.",
      answers: ["frameworks", "mechanisms", "ecosystems", "compliance"],
    },
    {
      id: "fib-10-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Robotics has expanded beyond industrial manufacturing into domains including surgery, disaster response, and space exploration. Surgical robots allow procedures to be performed through tiny incisions with enhanced precision and reduced recovery times for patients. In disaster scenarios, robots can be deployed to search for survivors in environments too dangerous for human responders, such as collapsed buildings or areas with toxic contamination. Space agencies use robotic probes and rovers to explore planets and moons where sending humans would be too costly or risky. Advances in artificial intelligence are enabling robots to make increasingly autonomous decisions, reducing their dependence on direct human control.",
      transcript: "Robotics has expanded beyond industrial manufacturing into domains including surgery, disaster ___BLANK___, and space exploration. Surgical robots allow procedures to be performed through tiny incisions with enhanced precision and reduced ___BLANK___ times for patients. In disaster scenarios, robots can be deployed to search for survivors in environments too dangerous for human ___BLANK___, such as collapsed buildings or areas with toxic contamination. Advances in artificial intelligence are enabling robots to make increasingly ___BLANK___ decisions.",
      answers: ["response", "recovery", "responders", "autonomous"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-10-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Cognitive psychology has yielded important insights into the nature and limitations of human memory. Research by Elizabeth Loftus demonstrated that human memory is not a fixed recording but a reconstructive process susceptible to distortion. In a series of experiments, Loftus showed that the wording of questions asked after a witnessed event could alter participants' recollections — a phenomenon known as the misinformation effect. This has significant practical implications, particularly for the reliability of eyewitness testimony in criminal trials. Psychologists now understand that memory is influenced by expectations, social pressure, and post-event information, making it an imperfect but nonetheless essential tool for navigating daily life.",
      correctIndex: 0,
      summaries: [
        "Research in cognitive psychology has shown that human memory is a reconstructive process susceptible to distortion, with important implications for the reliability of eyewitness testimony.",
        "Cognitive psychologists have established that human memory operates like a video recording, faithfully capturing events exactly as they occurred with no possibility of later alteration.",
        "The work of Elizabeth Loftus proved that false memories cannot be implanted through questioning and that eyewitness testimony is therefore highly reliable in criminal proceedings.",
        "Cognitive psychology research on memory has been largely inconclusive and has had minimal impact on legal or educational practice due to inconsistencies in experimental results.",
      ],
    },
    {
      id: "hcs-10-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Geopolitics in the twenty-first century is shaped by competition between established and emerging powers over influence, trade routes, and access to strategic resources. The rise of China as both an economic and military power has created tension with the United States and its allies, particularly in the Indo-Pacific region. China's Belt and Road Initiative, a vast programme of infrastructure investment across Asia, Africa, and Europe, is widely interpreted as an effort to extend Chinese influence through economic interdependence. Meanwhile, competition over semiconductor supply chains has become a defining element of contemporary geopolitical rivalry, as these components underpin modern military systems, consumer electronics, and artificial intelligence. Multilateral institutions are struggling to adapt their frameworks to manage disputes in this more contested global environment.",
      correctIndex: 2,
      summaries: [
        "Geopolitical competition in the twenty-first century is primarily driven by disagreements over climate change policy, with the United States and China unable to agree on emissions reduction targets.",
        "The Belt and Road Initiative has been universally praised by recipient countries as a model of development aid that carries no strategic implications for global power dynamics.",
        "Twenty-first century geopolitics features rivalry between established and emerging powers over influence and resources, with semiconductor supply chains and China's Belt and Road Initiative as key flashpoints.",
        "Multilateral institutions have successfully resolved most major geopolitical disputes of the twenty-first century by updating their frameworks to reflect the realities of a multipolar world.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-10-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Epidemiology has been central to understanding the causes and spread of infectious diseases. During the COVID-19 pandemic, epidemiologists played a critical role in tracking transmission chains, estimating reproduction numbers, and modelling the potential impact of different intervention strategies. The field relies on large datasets collected from hospitals, laboratories, and population surveys, which are analysed to identify patterns and risk factors. One key concept is the distinction between incidence, which refers to the number of new cases of a disease in a given period, and prevalence, which refers to the total number of cases at a given point in time. Understanding this distinction is essential for planning healthcare services and evaluating the effectiveness of public health measures.",
      question: "According to the speaker, what is the difference between incidence and prevalence?",
      options: [
        "Incidence measures the severity of a disease while prevalence measures how contagious it is.",
        "Incidence refers to new cases in a given period while prevalence refers to total cases at a point in time.",
        "Incidence applies only to infectious diseases while prevalence applies to chronic non-communicable diseases.",
        "Incidence is measured in hospitals while prevalence is measured through population surveys.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-10-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Volcanology has advanced significantly with the development of real-time monitoring networks around active volcanoes. Modern monitoring uses a combination of seismic sensors to detect ground tremors associated with rising magma, tiltmeters and GPS receivers to measure surface deformation, and gas sensors to track changes in sulphur dioxide emissions. These data streams allow volcanologists to issue eruption warnings days or even weeks in advance, giving authorities time to evacuate at-risk communities. However, volcanic systems are inherently complex, and not all warning signals lead to eruptions, making false alarms a persistent challenge. The 1985 eruption of Nevado del Ruiz in Colombia, which killed more than twenty thousand people despite early warnings, highlighted the deadly consequences of inadequate emergency response planning.",
      question: "What challenge does the speaker identify in volcano monitoring?",
      options: [
        "Modern sensors are too expensive for developing countries to install and maintain.",
        "Warning signals do not always result in eruptions, creating the problem of false alarms.",
        "Volcanologists are unable to detect changes in sulphur dioxide emissions reliably.",
        "Real-time monitoring networks can only function for a few months before equipment failure.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-10-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Materials science is driving innovation across industries by enabling the design of substances with properties tailored to specific applications. High-temperature superconductors could revolutionise energy transmission by conducting electricity with zero resistance, eliminating the losses that occur in conventional power grids. Biodegradable polymers offer an alternative to persistent plastic packaging, breaking down safely in natural environments. Two-dimensional materials such as graphene exhibit electrical, thermal, and mechanical properties that exceed those of conventional materials by orders of magnitude. As research in this field accelerates, the pace of technological change in sectors from construction to medicine is expected to",
      options: ["slow considerably", "remain static", "increase dramatically", "become unpredictable"],
      correctIndex: 2,
    },
    {
      id: "smw-10-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Music cognition researchers have found that the capacity to perceive and produce rhythm is deeply embedded in human biology. Even infants respond to musical beats before they can walk or talk, suggesting that rhythmic processing is an innate rather than learned capability. Studies have shown that synchronising movement to music activates the motor system, which may explain why rhythm-based therapies are effective in helping patients with Parkinson's disease improve their gait and coordination. The universal presence of music across all known human cultures, regardless of their level of technological development, suggests that music serves fundamental social and emotional functions that are",
      options: ["culturally specific", "evolutionarily ancient", "recently acquired", "neurologically damaging"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-10-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Epidemiology uses observational methods to study the distribution and causes of disease in populations. Cohort studies follow large groups of people over time, comparing those exposed to a particular risk factor with those who are not. By tracking participants for years or decades, researchers can establish whether exposure to a risk factor is associated with a higher incidence of disease, though demonstrating a causal relationship requires careful consideration of confounding variables.",
      displayText: "Epidemiology uses observational methods to study the distribution and causes of disease in populations. Cohort studies follow large groups of people over time, comparing those exposed to a particular risk factor with those who are not. By tracking participants for years or decades, researchers can establish whether exposure to a risk factor is associated with a higher prevalence of disease, though demonstrating a causal relationship requires careful consideration of confusing variables.",
      incorrectIndexes: [57, 69],
    },
    {
      id: "hiw-10-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Sustainable agriculture prioritises long-term soil health over short-term yield maximisation. Practices such as no-till farming reduce soil erosion by leaving crop residues on the surface rather than ploughing them under. Crop diversification reduces vulnerability to pests and disease by preventing the monocultures that allow pathogens to spread rapidly through a uniform plant population. Incorporating livestock into arable systems can improve soil fertility through the addition of manure and the natural grazing patterns that stimulate grass growth.",
      displayText: "Sustainable agriculture prioritises long-term soil health over short-term yield maximisation. Practices such as no-till farming reduce soil erosion by leaving crop residues on the surface rather than ploughing them under. Crop diversification reduces vulnerability to pests and disease by preventing the monocultures that allow pathogens to spread rapidly through a diverse plant population. Incorporating animals into arable systems can improve soil fertility through the addition of manure and the natural grazing patterns that stimulate grass growth.",
      incorrectIndexes: [50, 54],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-10-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Advances in materials science have enabled the development of lighter and stronger components.",
    },
    {
      id: "wfd-10-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The epidemiologist presented evidence linking dietary patterns to cardiovascular disease risk.",
    },
    {
      id: "wfd-10-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Volcanic eruptions can inject ash into the stratosphere and temporarily cool the climate.",
    },
  ],
};

export default test10;
