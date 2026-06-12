import type { PTEListeningTest } from "./pte-listening-types";

const test1: PTEListeningTest = {
  id: "pte-listening-1",
  title: "PTE Listening — Test 1",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-1-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "The Impact of Social Media on Mental Health",
      audioUrl: "",
      audioText: "Research into the relationship between social media use and mental health has produced complex and sometimes contradictory findings. Some studies suggest that heavy use of platforms such as Instagram and TikTok is associated with increased rates of anxiety, depression, and loneliness, particularly among adolescents. The constant exposure to curated images of others' lives can trigger social comparison and feelings of inadequacy. However, other researchers point out that social media can provide valuable social support, particularly for people who are isolated or belong to minority groups. The key distinction appears to be between passive consumption — scrolling through feeds without interacting — and active engagement, such as messaging friends and participating in communities. Passive use is more consistently linked to negative outcomes, while active use can have positive effects on wellbeing. Experts recommend that individuals be mindful of how they use social platforms and set limits on passive scrolling.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-1-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The development of electric vehicles has been driven by several factors. First, growing concern about air quality in cities has pushed governments to introduce emission regulations and subsidies for cleaner transport. Second, improvements in battery technology have dramatically extended the range of electric cars and reduced their cost. Third, rising fuel prices have made the operating costs of electric vehicles increasingly competitive with petrol and diesel cars. However, challenges remain, including the limited availability of charging infrastructure in rural areas and the environmental impact of mining lithium and cobalt for batteries.",
      question: "According to the talk, which THREE factors have driven the development of electric vehicles?",
      options: [
        "Concerns about urban air quality",
        "Declining interest in public transport",
        "Improvements in battery technology",
        "Government bans on petrol cars",
        "Rising fuel prices",
        "Reduced manufacturing costs for car bodies",
      ],
      correctIndexes: [0, 2, 4],
    },
    {
      id: "mcm-1-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Coral reefs, often described as the rainforests of the sea, are under threat from multiple sources. Rising ocean temperatures cause coral bleaching, a process in which corals expel the algae that provide them with nutrients and colour. Ocean acidification, driven by the absorption of carbon dioxide, weakens coral skeletons. Pollution from agricultural runoff introduces nutrients that promote the growth of algae, which smothers corals. Overfishing disrupts the ecological balance by removing fish that keep algae populations in check. Some restoration programmes are now using coral gardening techniques to replant damaged reefs.",
      question: "Which TWO threats to coral reefs are mentioned in the recording?",
      options: [
        "Coral bleaching due to rising temperatures",
        "Invasive fish species consuming coral",
        "Ocean acidification weakening coral skeletons",
        "Tsunami damage to reef structures",
        "Increased shipping traffic",
      ],
      correctIndexes: [0, 2],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-1-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The global population is projected to reach approximately ten billion by the year 2050. This growth will place enormous pressure on food systems, water supplies, and energy infrastructure. Scientists and policymakers are exploring a range of solutions, including precision agriculture, which uses technology to optimise crop yields while minimising resource use. Vertical farming, in which crops are grown in stacked layers indoors, is also gaining interest as a way to produce food in urban areas without requiring large areas of agricultural land.",
      transcript: "The global population is projected to reach approximately ten ___BLANK___ by the year 2050. This growth will place enormous ___BLANK___ on food systems, water supplies, and energy infrastructure. Scientists and policymakers are exploring a range of solutions, including precision ___BLANK___, which uses technology to optimise crop yields while minimising resource use. Vertical farming, in which crops are grown in stacked ___BLANK___ indoors, is also gaining interest.",
      answers: ["billion", "pressure", "agriculture", "layers"],
    },
    {
      id: "fib-1-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The human immune system is divided into two main components: the innate immune system and the adaptive immune system. The innate system provides a rapid but non-specific response to pathogens, while the adaptive system mounts a targeted response by producing antibodies specific to each invader. Vaccines work by training the adaptive immune system to recognise specific pathogens without causing the actual disease. Memory cells formed during this process allow the body to respond rapidly if exposed to the same pathogen in the future.",
      transcript: "The human immune system is divided into two main components: the ___BLANK___ immune system and the adaptive immune system. The innate system provides a rapid but non-specific ___BLANK___ to pathogens, while the adaptive system mounts a targeted response by producing ___BLANK___ specific to each invader. Vaccines work by training the adaptive immune system to recognise specific pathogens without causing the actual ___BLANK___.",
      answers: ["innate", "response", "antibodies", "disease"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-1-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The Industrial Revolution, which began in Britain in the mid-eighteenth century, transformed the global economy by shifting production from small workshops to large factories powered by steam engines. New machinery allowed goods to be produced faster and more cheaply than ever before. This drove urbanisation, as workers moved from rural areas to industrial cities. However, the revolution also brought significant social costs, including poor working conditions, child labour, and severe urban poverty. The environmental consequences, including air and water pollution, were also profound and have shaped debates about industrial development to this day.",
      correctIndex: 1,
      summaries: [
        "The Industrial Revolution improved working conditions and reduced poverty by creating factory jobs, though it led to some environmental damage that was later addressed through regulation.",
        "The Industrial Revolution transformed production through steam-powered factories, drove urbanisation, and boosted economic output, but came at significant social and environmental costs.",
        "The Industrial Revolution began in Britain and quickly spread worldwide, primarily due to advances in steam technology that made sea trade faster and more profitable.",
        "The Industrial Revolution created new political movements as workers organised to demand better pay, eventually leading to the formation of modern labour unions.",
      ],
    },
    {
      id: "hcs-1-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Sleep deprivation has become increasingly common in modern societies, with many adults regularly getting fewer hours than the recommended seven to nine. Research links poor sleep to a wide range of health problems, including cardiovascular disease, obesity, type two diabetes, and impaired immune function. Cognitive effects include reduced concentration, slower reaction times, and impaired decision-making. Chronic sleep deprivation is also associated with higher rates of anxiety and depression. Despite growing awareness of these risks, many people continue to sacrifice sleep due to work demands and the use of electronic devices before bed.",
      correctIndex: 2,
      summaries: [
        "Sleep deprivation primarily affects athletic performance and physical recovery, making it a particular concern for professional sportspeople who need adequate rest to compete effectively.",
        "Most adults sleep more than they need, and experts now believe that reducing sleep time can actually improve productivity and focus by increasing mental alertness.",
        "Sleep deprivation is widespread and is linked to serious health consequences including cardiovascular disease, obesity, impaired immunity, and mental health disorders, yet many continue to sleep too little.",
        "Research suggests that the optimal amount of sleep varies greatly between individuals, so the traditional recommendation of eight hours per night may not be appropriate for everyone.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-1-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Microplastics — fragments of plastic smaller than five millimetres — have now been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. They enter ecosystems through the breakdown of larger plastic items, synthetic fibres shed during washing, and plastic pellets used in manufacturing. Research has found microplastics in fish, seabirds, drinking water, and even human blood. While the long-term health effects on humans are still being studied, evidence suggests that microplastics can carry toxic chemicals and may cause inflammation in tissues.",
      question: "What does the speaker say about microplastics and human health?",
      options: [
        "They have been proven to cause serious illness in humans.",
        "They are found in the environment but not yet in the human body.",
        "Long-term health effects are still under investigation, but some risks have been identified.",
        "They are harmless because the human body can filter them out effectively.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-1-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "The concept of circular economy offers an alternative to the traditional linear model of production, where materials are extracted, used, and discarded. In a circular economy, products are designed to be reused, repaired, remanufactured, or recycled, keeping materials in use for as long as possible. This approach aims to reduce waste and the consumption of virgin resources. Companies adopting circular principles often find that it leads to cost savings, new revenue streams, and improved customer relationships. Governments in the European Union are leading efforts to introduce legislation that mandates circular design standards.",
      question: "According to the speaker, what is one benefit companies have found from adopting circular economy principles?",
      options: [
        "They can avoid paying environmental taxes.",
        "It leads to cost savings and new business opportunities.",
        "Their products become eligible for government subsidies.",
        "They gain exclusive access to recycled raw materials.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-1-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Water covers approximately 71 percent of the Earth's surface, yet only about 3 percent of that water is fresh, and most of that is locked in glaciers and ice caps. This means that less than one percent of all the water on Earth is readily accessible for human use. As the global population grows and climate change alters precipitation patterns, competition for freshwater resources is expected to",
      options: ["decrease significantly", "intensify considerably", "stabilise gradually", "disappear entirely"],
      correctIndex: 1,
    },
    {
      id: "smw-1-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The discovery of penicillin by Alexander Fleming in 1928 is one of the most significant events in medical history. Before antibiotics, even minor bacterial infections could be fatal, and surgery carried enormous risks of post-operative infection. The development and mass production of antibiotics during the Second World War saved countless lives and transformed medicine. Today, however, the overuse of antibiotics has led to the emergence of resistant bacteria, which threaten to make many infections",
      options: ["cheaper to treat", "easier to diagnose", "untreatable once again", "less contagious overall"],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-1-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The Amazon rainforest plays a critical role in regulating the global climate by absorbing vast quantities of carbon dioxide and releasing oxygen. It is home to an estimated ten percent of all species on Earth, many of which have not yet been scientifically described. Deforestation driven by cattle ranching and crop farming has destroyed large areas of the forest in recent decades.",
      displayText: "The Amazon rainforest plays a vital role in regulating the global climate by absorbing vast quantities of carbon dioxide and releasing oxygen. It is home to an estimated ten percent of all species on Earth, many of which have not yet been scientifically identified. Deforestation driven by cattle ranching and crop farming has removed large areas of the forest in recent decades.",
      incorrectIndexes: [5, 34, 48],
    },
    {
      id: "hiw-1-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Artificial intelligence is transforming industries from healthcare to finance. In medicine, AI systems can analyse medical images with accuracy that rivals trained specialists, helping to detect conditions such as cancer at an early stage. In finance, algorithms process enormous volumes of trading data in milliseconds, identifying patterns that human analysts would be unable to spot.",
      displayText: "Artificial intelligence is changing industries from healthcare to finance. In medicine, AI systems can analyse medical images with accuracy that rivals trained specialists, helping to detect conditions such as cancer at an early stage. In finance, algorithms process enormous volumes of trading data in seconds, identifying patterns that human analysts would be unable to spot.",
      incorrectIndexes: [3, 43],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-1-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The university library will be closed for renovations next week.",
    },
    {
      id: "wfd-1-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Students are required to submit their assignments before the deadline.",
    },
    {
      id: "wfd-1-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The research findings suggest a strong link between diet and cognitive performance.",
    },
  ],
};

export default test1;
