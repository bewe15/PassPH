import type { PTEListeningTest } from "./pte-listening-types";

const test3: PTEListeningTest = {
  id: "pte-listening-3",
  title: "PTE Listening — Test 3",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-3-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "The Psychology of Decision-Making Under Uncertainty",
      audioUrl: "",
      audioText: "Behavioural economics has fundamentally challenged the classical assumption that humans are rational actors who maximise utility when making decisions. Research by Daniel Kahneman and Amos Tversky demonstrated that people rely on cognitive shortcuts, known as heuristics, which can lead to systematic errors in judgment. One well-documented bias is loss aversion — the tendency for people to feel the pain of losing something more acutely than the pleasure of gaining something of equivalent value. Another is the anchoring effect, in which people rely too heavily on the first piece of information they encounter when making estimates. Framing effects show that the way choices are presented dramatically influences decisions, even when the objective outcomes are identical. For example, people respond differently to a policy described as saving 200 lives versus one described as resulting in 400 deaths, despite the numerical equivalence. These findings have significant implications for public policy, financial regulation, and health communication, prompting governments to design choice environments — or nudges — that steer people toward better decisions without restricting their freedom.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-3-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Marine biology has revealed extraordinary adaptations among deep-sea organisms. At depths below 1000 metres, where no sunlight penetrates, many creatures produce their own light through a process called bioluminescence, used for attracting prey, communicating with mates, and deterring predators. The pressure at these depths can exceed 600 times that at the surface, requiring specialised cell membranes and proteins that remain functional under extreme conditions. Some deep-sea fish possess highly expandable stomachs that allow them to consume prey larger than themselves. Hydrothermal vents on the ocean floor support ecosystems powered not by sunlight but by chemosynthesis, in which bacteria convert chemicals from the vents into energy.",
      question: "Which TWO adaptations of deep-sea organisms are described in the recording?",
      options: [
        "Production of light through bioluminescence",
        "The ability to withstand extreme cold temperatures",
        "Specialised proteins that function under high pressure",
        "Migration to shallower waters during winter months",
        "Symbiotic relationships with surface-dwelling species",
        "Resistance to the toxic chemicals released by vents",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-3-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Public health campaigns aimed at reducing tobacco use have employed a range of strategies over the past several decades. Pictorial health warnings on cigarette packaging have been shown to increase awareness of risks and motivate quit attempts. Taxation on tobacco products raises the cost of smoking, which is particularly effective at deterring young people. Bans on advertising and sponsorship remove the glamorisation of smoking from media and public spaces. Smoke-free legislation in workplaces and restaurants reduces exposure to second-hand smoke and normalises non-smoking as the social default. Mass media campaigns using emotional narratives have also been shown to change attitudes among both smokers and non-smokers.",
      question: "According to the recording, which THREE strategies have been used in tobacco reduction campaigns?",
      options: [
        "Pictorial health warnings on cigarette packaging",
        "Compulsory health classes in secondary schools",
        "Taxation to increase the cost of tobacco products",
        "Free nicotine replacement therapy for all citizens",
        "Bans on tobacco advertising and sponsorship",
        "Criminalising the purchase of cigarettes by adults",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-3-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The study of plate tectonics has transformed our understanding of the Earth's geological history. The outer shell of the planet, known as the lithosphere, is divided into a series of large and small plates that move relative to one another. Where plates collide, mountain ranges are formed through the process of uplift, and deep ocean trenches are created as one plate subducts beneath another. Earthquakes and volcanic activity are concentrated along plate boundaries, where the release of energy from tectonic movement can be sudden and catastrophic.",
      transcript: "The study of plate tectonics has transformed our understanding of the Earth's geological ___BLANK___. The outer shell of the planet, known as the lithosphere, is divided into a series of large and small ___BLANK___ that move relative to one another. Where plates collide, mountain ranges are formed through the process of ___BLANK___, and deep ocean trenches are created as one plate subducts beneath another. Earthquakes and volcanic activity are concentrated along plate ___BLANK___, where the release of energy from tectonic movement can be sudden and catastrophic.",
      answers: ["history", "plates", "uplift", "boundaries"],
    },
    {
      id: "fib-3-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Urban planning seeks to organise the physical layout of cities to promote efficiency, sustainability, and quality of life. Zoning laws regulate the uses of land in different areas, separating residential districts from industrial zones to reduce conflict between incompatible activities. Transit-oriented development places high-density housing and commercial activity near public transport hubs, reducing dependence on private vehicles. Green spaces, including parks and urban forests, are recognised for their role in improving air quality, reducing temperatures, and supporting mental health. The challenge for planners is to balance competing demands from developers, residents, and environmental advocates.",
      transcript: "Urban planning seeks to organise the physical layout of cities to promote efficiency, ___BLANK___, and quality of life. Zoning laws regulate the uses of ___BLANK___ in different areas, separating residential districts from industrial zones to reduce conflict between incompatible activities. Transit-oriented development places high-density housing and commercial activity near public transport hubs, reducing ___BLANK___ on private vehicles. Green spaces, including parks and urban forests, are recognised for their role in improving air quality, reducing temperatures, and supporting mental ___BLANK___.",
      answers: ["sustainability", "land", "dependence", "health"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-3-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Epigenetics is the study of changes in gene expression that do not involve alterations to the underlying DNA sequence. Environmental factors such as diet, stress, and exposure to toxins can trigger chemical modifications to DNA or the proteins around which DNA is wrapped. These modifications can switch genes on or off, influencing development, health, and behaviour. Remarkably, some epigenetic changes can be inherited by subsequent generations, meaning that a parent's experiences may affect the biology of their children and grandchildren. This challenges the traditional view that acquired characteristics cannot be inherited and has opened new fields of research in developmental biology and medicine.",
      correctIndex: 3,
      summaries: [
        "Epigenetics involves altering the DNA sequence through environmental exposures, and scientists have demonstrated that such changes are permanent and irreversible once they occur.",
        "Epigenetic research has shown that gene expression is entirely determined by environmental factors rather than inherited DNA, overturning the foundational principles of classical genetics.",
        "Epigenetics studies how diet and lifestyle choices affect health, but the effects are limited to the individual and cannot be passed on to future generations.",
        "Epigenetics examines changes in gene expression caused by environmental factors without altering DNA sequences, and some of these changes may be passed to future generations.",
      ],
    },
    {
      id: "hcs-3-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The Silk Road was not a single route but a network of overland and maritime trade paths that connected China, Central Asia, the Middle East, and Europe for more than a millennium. Merchants transported silk, spices, glassware, and precious metals across thousands of kilometres. Along with goods, the Silk Road facilitated the transmission of ideas, religions, technologies, and diseases. Buddhism, Islam, and Christianity all spread along these routes. The bubonic plague, which caused the Black Death in fourteenth-century Europe, is believed to have travelled westward via the Silk Road. The routes declined after European maritime powers found sea routes to Asia in the fifteenth and sixteenth centuries.",
      correctIndex: 1,
      summaries: [
        "The Silk Road was a single overland route between China and Europe that primarily transported silk and was controlled exclusively by Chinese merchants for over a thousand years.",
        "The Silk Road was a network of trade routes linking China to Europe that facilitated the exchange of goods, ideas, religions, and diseases, declining after the development of maritime routes to Asia.",
        "The Silk Road was primarily a religious pilgrimage network that allowed the spread of Buddhism and Islam, with trade in goods being a secondary activity along the routes.",
        "The Silk Road connected China and Europe through a series of sea routes, and its decline was caused by the spread of the bubonic plague, which devastated merchant communities along the way.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-3-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "The concept of biodiversity encompasses the variety of life at three levels: genetic diversity within species, species diversity within ecosystems, and ecosystem diversity across the planet. High biodiversity contributes to ecosystem resilience — the ability of a system to recover from disturbance. When one species is lost, others may be able to fulfil similar ecological roles, maintaining the function of the system. Conversely, ecosystems with few species are more vulnerable to collapse when a key species is removed. The current rate of species extinction, estimated to be between one hundred and one thousand times higher than background extinction rates, has prompted scientists to declare a sixth mass extinction event.",
      question: "What does the speaker say about the relationship between biodiversity and ecosystem resilience?",
      options: [
        "High biodiversity makes ecosystems more stable and better able to recover from disturbance.",
        "Biodiversity is inversely related to resilience because more species create more competition.",
        "Ecosystem resilience depends entirely on the presence of keystone species, not overall biodiversity.",
        "Resilience is unaffected by biodiversity as long as total biomass remains constant.",
      ],
      correctIndex: 0,
    },
    {
      id: "mcs-3-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "The human gut contains trillions of microorganisms collectively known as the gut microbiome. This community of bacteria, viruses, and fungi plays a critical role in digestion, immune function, and even mental health. Research has identified links between disruptions to the microbiome, known as dysbiosis, and conditions including inflammatory bowel disease, obesity, type two diabetes, and depression. Diet is the most significant factor shaping the microbiome — high-fibre diets promote diverse bacterial communities, while diets high in processed food reduce diversity. Scientists are investigating the use of probiotics, prebiotics, and faecal microbiota transplants as therapeutic tools for restoring healthy microbiome composition.",
      question: "According to the speaker, what is the most important factor in shaping the gut microbiome?",
      options: [
        "The use of antibiotic medication during early childhood.",
        "The level of physical exercise undertaken by the individual.",
        "The composition of the individual's diet.",
        "Genetic predisposition inherited from biological parents.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-3-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Nuclear fusion, the process that powers the Sun, has long been considered the holy grail of clean energy. Unlike nuclear fission, which splits heavy atoms and produces radioactive waste, fusion combines light atoms and releases enormous energy with minimal long-term radioactive by-products. For decades, scientists have been working to achieve a sustained fusion reaction that produces more energy than it consumes, a milestone that would",
      options: ["require abandoning all fossil fuel infrastructure immediately", "transform the global energy landscape entirely", "prove impossible to achieve at commercial scale", "necessitate the construction of thousands of small reactors"],
      correctIndex: 1,
    },
    {
      id: "smw-3-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The concept of cultural heritage encompasses both tangible assets, such as monuments, historic buildings, and museum collections, and intangible practices, including oral traditions, performing arts, and rituals. International organisations such as UNESCO work to identify and protect heritage sites and practices considered to be of outstanding universal value. The destruction of heritage — whether through armed conflict, natural disaster, or neglect — represents an irreversible loss not only for the communities directly affected but for",
      options: ["local tourism industries and their revenue streams", "all of humanity and its shared cultural memory", "the governments responsible for maintaining such sites", "academic researchers who study historical artefacts"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-3-1",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText words (0-based):
      // 0:Photosynthesis 1:is 2:the 3:process 4:by 5:which 6:plants 7:algae 8:and
      // 9:certain 10:bacteria 11:convert 12:light 13:energy 14:into 15:chemical 16:energy
      // 17:stored 18:in 19:glucose 20:Carbon 21:dioxide 22:and 23:water 24:are 25:absorbed
      // 26:by 27:the 28:plant 29:and 30:using 31:energy 32:from 33:sunlight 34:are
      // 35:converted 36:into 37:glucose 38:and 39:oxygen 40:The 41:oxygen 42:is 43:released
      // 44:into 45:the 46:atmosphere 47:as 48:a 49:by-product 50:making 51:photosynthesis
      // 52:essential 53:to 54:the 55:oxygen 56:levels 57:that 58:support 59:life 60:on 61:Earth
      audioText: "Photosynthesis is the process by which plants algae and certain bacteria convert light energy into chemical energy stored in glucose. Carbon dioxide and water are absorbed by the plant and using energy from sunlight are converted into glucose and oxygen. The oxygen is released into the atmosphere as a by-product making photosynthesis essential to the oxygen levels that support life on Earth.",
      // Changes: word 11 "convert" -> "transform"; word 25 "absorbed" -> "taken"
      // displayText split (same length):
      // 0:Photosynthesis 1:is 2:the 3:process 4:by 5:which 6:plants 7:algae 8:and
      // 9:certain 10:bacteria 11:transform 12:light 13:energy 14:into 15:chemical 16:energy
      // 17:stored 18:in 19:glucose. 20:Carbon 21:dioxide 22:and 23:water 24:are 25:taken
      // 26:by 27:the 28:plant 29:and 30:using 31:energy 32:from 33:sunlight 34:are
      // 35:converted 36:into 37:glucose 38:and 39:oxygen. 40:The 41:oxygen 42:is 43:released
      // 44:into 45:the 46:atmosphere 47:as 48:a 49:by-product 50:making 51:photosynthesis
      // 52:essential 53:to 54:the 55:oxygen 56:levels 57:that 58:support 59:life 60:on 61:Earth.
      displayText: "Photosynthesis is the process by which plants algae and certain bacteria transform light energy into chemical energy stored in glucose. Carbon dioxide and water are taken by the plant and using energy from sunlight are converted into glucose and oxygen. The oxygen is released into the atmosphere as a by-product making photosynthesis essential to the oxygen levels that support life on Earth.",
      incorrectIndexes: [11, 25],
    },
    {
      id: "hiw-3-2",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText words (0-based):
      // 0:The 1:Renaissance 2:was 3:a 4:cultural 5:and 6:intellectual 7:movement 8:that
      // 9:originated 10:in 11:Italy 12:during 13:the 14:fourteenth 15:century 16:and
      // 17:eventually 18:spread 19:throughout 20:Europe 21:It 22:was 23:characterised 24:by
      // 25:a 26:renewed 27:interest 28:in 29:the 30:classical 31:learning 32:of 33:ancient
      // 34:Greece 35:and 36:Rome 37:and 38:by 39:significant 40:advances 41:in 42:art
      // 43:science 44:and 45:literature 46:Key 47:figures 48:included 49:Leonardo 50:da
      // 51:Vinci 52:Michelangelo 53:and 54:Galileo 55:whose 56:works 57:continue 58:to
      // 59:influence 60:modern 61:thought
      audioText: "The Renaissance was a cultural and intellectual movement that originated in Italy during the fourteenth century and eventually spread throughout Europe. It was characterised by a renewed interest in the classical learning of ancient Greece and Rome and by significant advances in art science and literature. Key figures included Leonardo da Vinci Michelangelo and Galileo whose works continue to influence modern thought.",
      // Changes: word 7 "movement" -> "revolution"; word 40 "advances" -> "developments"
      // displayText split:
      // 0:The 1:Renaissance 2:was 3:a 4:cultural 5:and 6:intellectual 7:revolution 8:that
      // 9:originated 10:in 11:Italy 12:during 13:the 14:fourteenth 15:century 16:and
      // 17:eventually 18:spread 19:throughout 20:Europe. 21:It 22:was 23:characterised 24:by
      // 25:a 26:renewed 27:interest 28:in 29:the 30:classical 31:learning 32:of 33:ancient
      // 34:Greece 35:and 36:Rome 37:and 38:by 39:significant 40:developments 41:in 42:art
      // 43:science 44:and 45:literature. 46:Key 47:figures 48:included 49:Leonardo 50:da
      // 51:Vinci 52:Michelangelo 53:and 54:Galileo 55:whose 56:works 57:continue 58:to
      // 59:influence 60:modern 61:thought.
      displayText: "The Renaissance was a cultural and intellectual revolution that originated in Italy during the fourteenth century and eventually spread throughout Europe. It was characterised by a renewed interest in the classical learning of ancient Greece and Rome and by significant developments in art science and literature. Key figures included Leonardo da Vinci Michelangelo and Galileo whose works continue to influence modern thought.",
      incorrectIndexes: [7, 40],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-3-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Students should attend every lecture to avoid missing critical course content.",
    },
    {
      id: "wfd-3-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The seminar group will analyse two case studies during this week's session.",
    },
    {
      id: "wfd-3-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Plagiarism in academic work carries serious consequences including potential expulsion.",
    },
  ],
};

export default test3;
