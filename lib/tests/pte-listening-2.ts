import type { PTEListeningTest } from "./pte-listening-types";

const test2: PTEListeningTest = {
  id: "pte-listening-2",
  title: "PTE Listening — Test 2",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-2-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "The Architecture of Ancient Rome",
      audioUrl: "",
      audioText: "Ancient Roman architecture represents one of the most enduring legacies of the classical world. Roman engineers developed the arch, the vault, and the dome to a degree of sophistication that would not be matched for more than a millennium. The Pantheon, completed around 125 CE, features a concrete dome with an oculus that still stands as an engineering marvel. Roman concrete, known as opus caementicium, combined volcanic ash, lime, and seawater in proportions that gave it remarkable durability. Aqueducts carried fresh water across vast distances to supply cities with clean drinking water, public baths, and fountains. Road networks connected the empire, enabling rapid movement of troops and goods. These innovations reflected a civic philosophy in which monumental public works expressed the power of the state and improved the lives of ordinary citizens. The influence of Roman construction methods can be traced through European architecture from the Renaissance to the present day.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-2-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Linguistic diversity is declining at an alarming rate worldwide. Researchers estimate that roughly half of the world's seven thousand languages may disappear by the end of this century. Economic pressures encourage speakers of minority languages to adopt dominant languages for employment and education. Urbanisation draws speakers away from traditional communities where their language was widely used. In some cases, governments have actively suppressed minority languages through education policies. The loss of a language means the loss of unique cultural knowledge, oral traditions, and ways of categorising the world that cannot be fully translated.",
      question: "According to the recording, which TWO factors contribute to the decline of minority languages?",
      options: [
        "Economic pressure to adopt dominant languages",
        "Deliberate efforts by linguists to simplify languages",
        "Urbanisation drawing speakers from traditional communities",
        "The natural evolution of grammar over centuries",
        "Increased international tourism",
        "Greater access to digital media in minority languages",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-2-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Urban heat islands occur when cities are significantly warmer than surrounding rural areas due to human activities and built environments. Dark surfaces such as asphalt and rooftops absorb more solar radiation than natural landscapes. Waste heat from vehicles, air conditioning units, and industrial processes adds to ambient temperatures. The removal of trees and vegetation eliminates the cooling effect of evapotranspiration. Studies show that urban heat islands increase energy consumption, worsen air quality, and raise mortality rates during heatwaves. Solutions being explored include green roofs, urban tree planting, and the use of reflective materials on road surfaces.",
      question: "Which THREE causes of urban heat islands are mentioned in the recording?",
      options: [
        "Dark surfaces absorbing solar radiation",
        "Increased rainfall in urban centres",
        "Waste heat from vehicles and appliances",
        "Higher population density leading to more body heat",
        "Removal of trees and vegetation",
        "Underground heat from subway systems",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-2-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Neuroscience has revealed that the human brain remains plastic — capable of change — well into adulthood. This property, known as neuroplasticity, allows the brain to form new connections in response to learning and experience. When a person acquires a new skill, repeated practice strengthens specific neural pathways, making the behaviour more automatic over time. Damage to one region of the brain can sometimes be compensated by other regions taking over its functions, a process that rehabilitation therapists exploit to help patients recover from strokes.",
      transcript: "Neuroscience has revealed that the human brain remains ___BLANK___ — capable of change — well into adulthood. This property, known as neuroplasticity, allows the brain to form new ___BLANK___ in response to learning and experience. When a person acquires a new skill, repeated practice ___BLANK___ specific neural pathways, making the behaviour more automatic over time. Damage to one region of the brain can sometimes be compensated by other regions taking over its ___BLANK___.",
      answers: ["plastic", "connections", "strengthens", "functions"],
    },
    {
      id: "fib-2-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The discipline of archaeology seeks to understand past human societies through the systematic study of material remains. Excavation is the primary method by which archaeologists recover artefacts, structures, and organic material from the ground. Radiocarbon dating allows scientists to determine the age of organic samples with considerable precision by measuring the decay of carbon-14. Advances in remote sensing, including satellite imagery and ground-penetrating radar, now allow archaeologists to identify buried features without disturbing the soil. These technologies have led to the discovery of entire ancient cities that were hidden beneath dense vegetation.",
      transcript: "The discipline of archaeology seeks to understand past human societies through the systematic study of material ___BLANK___. Excavation is the primary method by which archaeologists recover artefacts, structures, and organic material from the ground. Radiocarbon ___BLANK___ allows scientists to determine the age of organic samples with considerable precision by measuring the decay of carbon-14. Advances in remote sensing, including satellite imagery and ground-penetrating ___BLANK___, now allow archaeologists to identify buried ___BLANK___ without disturbing the soil.",
      answers: ["remains", "dating", "radar", "features"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-2-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The Columbian Exchange refers to the widespread transfer of plants, animals, culture, human populations, and diseases between the Americas and the Old World following Columbus's voyage of 1492. European explorers introduced horses, cattle, and pigs to the Americas, transforming indigenous economies and diets. From the Americas, crops such as potatoes, maize, tomatoes, and cacao spread to Europe, Africa, and Asia, fundamentally altering global food systems and enabling population growth. The exchange also had devastating consequences for indigenous peoples, who had no immunity to diseases such as smallpox, measles, and influenza brought by Europeans. Some historians estimate that epidemic disease killed between fifty and ninety percent of the indigenous population of the Americas within a century of contact.",
      correctIndex: 2,
      summaries: [
        "The Columbian Exchange was a period of peaceful trade between Europe and the Americas that enriched both regions through the exchange of goods, technology, and scientific knowledge.",
        "Columbus's voyages led to the spread of European crops and animals to the Americas, where indigenous populations quickly adopted them and developed new agricultural practices.",
        "The Columbian Exchange involved a mutual transfer of plants, animals, and diseases between the Americas and the Old World after 1492, with devastating effects on indigenous populations due to epidemic disease.",
        "The Columbian Exchange primarily benefited European nations by providing them with valuable resources from the Americas, while indigenous peoples rejected European agricultural practices.",
      ],
    },
    {
      id: "hcs-2-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Dark matter is one of the greatest unsolved mysteries in modern physics. Observations of the rotation of galaxies suggest that visible matter alone cannot account for the gravitational forces at work — galaxies spin as though they contain far more mass than we can see. This invisible component, which does not emit or interact with light, is termed dark matter. Calculations suggest it comprises approximately 27 percent of the total energy content of the universe. Despite decades of research, the precise nature of dark matter remains unknown. Proposed candidates include weakly interacting massive particles, known as WIMPs, and axions, but none has been directly detected so far.",
      correctIndex: 0,
      summaries: [
        "Dark matter is an unseen substance inferred from gravitational effects on galaxies, comprising about 27 percent of the universe's energy, but its exact nature has not yet been identified.",
        "Dark matter is a form of energy that interacts strongly with light, and recent experiments using particle accelerators have provided direct evidence of its existence.",
        "Scientists have confirmed through telescope observations that dark matter is composed of WIMPs, which cluster at the edges of galaxies and create additional gravitational pull.",
        "Dark matter accounts for the majority of visible matter in the universe and has been detected indirectly through its emission of faint infrared radiation at galactic centres.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-2-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Geothermal energy harnesses heat from within the Earth to generate electricity and provide direct heating. It is considered a renewable resource because the heat produced by the Earth's core is essentially inexhaustible on human timescales. Iceland is a world leader in geothermal energy use, with the resource meeting more than 60 percent of the country's primary energy needs. Unlike solar and wind energy, geothermal power plants can operate continuously regardless of weather conditions, providing a reliable baseload supply. However, suitable geothermal resources are geographically concentrated near tectonic plate boundaries, limiting its application as a global energy solution.",
      question: "What advantage does the speaker identify for geothermal power compared to solar and wind energy?",
      options: [
        "It produces no greenhouse gases during operation.",
        "It is available in every country around the world.",
        "It can generate electricity continuously regardless of weather.",
        "It requires less initial investment than other renewable sources.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-2-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "The concept of cognitive dissonance, introduced by psychologist Leon Festinger in 1957, describes the mental discomfort experienced when a person holds two conflicting beliefs or when their behaviour contradicts their stated values. People are motivated to reduce this discomfort, and typically do so in one of three ways: changing one of their beliefs, seeking new information that supports one belief, or reducing the importance of the conflicting belief. Advertisers and political communicators often leverage this tendency by framing messages so that audiences feel discomfort in not supporting a particular product or candidate.",
      question: "According to the speaker, how do people most commonly respond to cognitive dissonance?",
      options: [
        "By ignoring the conflict and continuing their usual behaviour unchanged.",
        "By reducing discomfort through changing beliefs, seeking supporting information, or downplaying the conflict.",
        "By seeking professional psychological help to resolve the tension.",
        "By confronting the source of the conflicting information directly.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-2-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The James Webb Space Telescope, launched in December 2021, represents the most powerful space observatory ever built. Its infrared sensors allow it to peer through dust clouds that obscured earlier telescopes and observe some of the earliest galaxies to form after the Big Bang. Scientists hope that data from the telescope will help answer fundamental questions about how the universe",
      options: ["collapsed under its own gravity", "evolved and came to be structured", "will eventually cease to exist", "was misunderstood in earlier models"],
      correctIndex: 1,
    },
    {
      id: "smw-2-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Classical conditioning, first described by Ivan Pavlov through his famous experiments with dogs, is a form of learning in which a neutral stimulus becomes associated with a stimulus that naturally produces a response. Pavlov found that dogs began to salivate at the sound of a bell that had been repeatedly paired with the presentation of food. This finding laid the groundwork for behaviourist psychology and demonstrated that emotional and physiological responses can be",
      options: ["inherited genetically across generations", "measured only in laboratory conditions", "acquired through repeated association", "eliminated through surgical intervention"],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-2-1",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText word index (0-based):
      // 0:Volcanic 1:eruptions 2:release 3:enormous 4:quantities 5:of 6:ash 7:and 8:gases 9:into
      // 10:the 11:atmosphere 12:affecting 13:global 14:temperatures 15:for 16:months 17:or 18:even
      // 19:years 20:The 21:1991 22:eruption 23:of 24:Mount 25:Pinatubo 26:in 27:the 28:Philippines
      // 29:injected 30:so 31:much 32:sulphur 33:dioxide 34:into 35:the 36:stratosphere 37:that
      // 38:average 39:global 40:temperatures 41:dropped 42:by 43:approximately 44:0.5 45:degrees
      // 46:Celsius 47:for 48:two 49:years 50:Such 51:events 52:remind 53:scientists 54:that
      // 55:natural 56:processes 57:can 58:have 59:significant 60:short-term 61:effects 62:on
      // 63:climate
      audioText: "Volcanic eruptions release enormous quantities of ash and gases into the atmosphere affecting global temperatures for months or even years. The 1991 eruption of Mount Pinatubo in the Philippines injected so much sulphur dioxide into the stratosphere that average global temperatures dropped by approximately 0.5 degrees Celsius for two years. Such events remind scientists that natural processes can have significant short-term effects on climate.",
      // Changes: word 3 "enormous" -> "large"; word 41 "dropped" -> "fell"
      // displayText split:
      // 0:Volcanic 1:eruptions 2:release 3:large 4:quantities 5:of 6:ash 7:and 8:gases 9:into
      // 10:the 11:atmosphere 12:affecting 13:global 14:temperatures 15:for 16:months 17:or 18:even
      // 19:years 20:The 21:1991 22:eruption 23:of 24:Mount 25:Pinatubo 26:in 27:the 28:Philippines
      // 29:injected 30:so 31:much 32:sulphur 33:dioxide 34:into 35:the 36:stratosphere 37:that
      // 38:average 39:global 40:temperatures 41:fell 42:by 43:approximately 44:0.5 45:degrees
      // 46:Celsius 47:for 48:two 49:years 50:Such 51:events 52:remind 53:scientists 54:that
      // 55:natural 56:processes 57:can 58:have 59:significant 60:short-term 61:effects 62:on
      // 63:climate.
      displayText: "Volcanic eruptions release large quantities of ash and gases into the atmosphere affecting global temperatures for months or even years. The 1991 eruption of Mount Pinatubo in the Philippines injected so much sulphur dioxide into the stratosphere that average global temperatures fell by approximately 0.5 degrees Celsius for two years. Such events remind scientists that natural processes can have significant short-term effects on climate.",
      incorrectIndexes: [3, 41],
    },
    {
      id: "hiw-2-2",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText words (0-based):
      // 0:The 1:discipline 2:of 3:economics 4:studies 5:how 6:individuals 7:firms 8:and
      // 9:governments 10:allocate 11:scarce 12:resources 13:Microeconomics 14:focuses 15:on
      // 16:the 17:behaviour 18:of 19:individual 20:agents 21:such 22:as 23:households 24:and
      // 25:companies 26:while 27:macroeconomics 28:examines 29:the 30:performance 31:of
      // 32:entire 33:economies 34:including 35:factors 36:such 37:as 38:inflation 39:unemployment
      // 40:and 41:economic 42:growth 43:Both 44:branches 45:rely 46:on 47:mathematical 48:models
      // 49:and 50:empirical 51:data 52:to 53:analyse 54:patterns 55:and 56:make 57:predictions
      // 58:about 59:future 60:behaviour
      audioText: "The discipline of economics studies how individuals firms and governments allocate scarce resources. Microeconomics focuses on the behaviour of individual agents such as households and companies while macroeconomics examines the performance of entire economies including factors such as inflation unemployment and economic growth. Both branches rely on mathematical models and empirical data to analyse patterns and make predictions about future behaviour.",
      // Changes: word 10 "allocate" -> "distribute"; word 47 "mathematical" -> "statistical"
      // displayText split:
      // 0:The 1:discipline 2:of 3:economics 4:studies 5:how 6:individuals 7:firms 8:and
      // 9:governments 10:distribute 11:scarce 12:resources. 13:Microeconomics 14:focuses 15:on
      // 16:the 17:behaviour 18:of 19:individual 20:agents 21:such 22:as 23:households 24:and
      // 25:companies 26:while 27:macroeconomics 28:examines 29:the 30:performance 31:of
      // 32:entire 33:economies 34:including 35:factors 36:such 37:as 38:inflation 39:unemployment
      // 40:and 41:economic 42:growth. 43:Both 44:branches 45:rely 46:on 47:statistical 48:models
      // 49:and 50:empirical 51:data 52:to 53:analyse 54:patterns 55:and 56:make 57:predictions
      // 58:about 59:future 60:behaviour.
      displayText: "The discipline of economics studies how individuals firms and governments distribute scarce resources. Microeconomics focuses on the behaviour of individual agents such as households and companies while macroeconomics examines the performance of entire economies including factors such as inflation unemployment and economic growth. Both branches rely on statistical models and empirical data to analyse patterns and make predictions about future behaviour.",
      incorrectIndexes: [10, 47],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-2-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "All laboratory reports must include a clearly written methodology section.",
    },
    {
      id: "wfd-2-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The professor will hold additional consultation hours before the final examination.",
    },
    {
      id: "wfd-2-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Peer review ensures that published research meets established academic standards.",
    },
  ],
};

export default test2;
