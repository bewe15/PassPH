import type { PTEListeningTest } from "./pte-listening-types";

const test4: PTEListeningTest = {
  id: "pte-listening-4",
  title: "PTE Listening — Test 4",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-4-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "Climate Change and Arctic Ecosystems",
      audioUrl: "",
      audioText: "The Arctic is warming at roughly four times the global average rate, making it the region most dramatically affected by climate change. Sea ice extent has declined sharply over recent decades, with summer Arctic sea ice reaching record lows. This loss has profound consequences for the entire ecosystem. Polar bears depend on sea ice as a platform for hunting seals, their primary prey, and reduced ice forces them to spend longer periods on land where food is scarce. Indigenous communities across the Arctic have relied on sea ice and permafrost for safe travel, food storage, and traditional hunting for generations, and rapid change threatens their way of life and cultural identity. Permafrost thaw releases carbon dioxide and methane — potent greenhouse gases — that have been locked in frozen ground for thousands of years, creating a feedback loop that accelerates warming further. Melting glaciers and ice sheets contribute to global sea level rise, threatening low-lying coastal communities worldwide. The changes occurring in the Arctic are therefore not an isolated regional issue but a bellwether for the health of the entire planet.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-4-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The development of writing systems marked a pivotal transition in human history. Written records allowed information to be stored and transmitted across time and distance without relying on memory alone. Early writing systems, such as Sumerian cuneiform and Egyptian hieroglyphics, emerged independently in different regions and were initially used for administrative and economic record-keeping. The invention of the alphabet, in which a small number of symbols represent individual sounds, made writing far more accessible and contributed to the spread of literacy. The printing press, developed by Gutenberg in the fifteenth century, dramatically increased the speed and scale at which written material could be produced and distributed, contributing to the Reformation and the Scientific Revolution.",
      question: "According to the recording, which TWO developments accelerated the spread of written knowledge?",
      options: [
        "The invention of the alphabet making writing more accessible",
        "The establishment of royal libraries in ancient Egypt",
        "The development of Gutenberg's printing press",
        "The discovery of papyrus as a writing material",
        "The standardisation of grammar across European languages",
        "The founding of the first universities in medieval Europe",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-4-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Chronic stress activates the body's hypothalamic-pituitary-adrenal axis, triggering the release of cortisol and other stress hormones. While brief surges of cortisol are adaptive — helping the body respond to immediate threats — chronically elevated cortisol levels damage multiple body systems. Prolonged stress has been shown to impair memory and concentration by affecting the hippocampus, a brain region critical for learning. It suppresses the immune system, making individuals more susceptible to infections and slowing wound healing. Cardiovascular risks increase, as sustained high cortisol raises blood pressure and promotes inflammation in arteries. Digestive issues including irritable bowel syndrome are also associated with chronic psychological stress.",
      question: "Which THREE health effects of chronic stress are mentioned in the recording?",
      options: [
        "Impaired memory and concentration",
        "Increased risk of type one diabetes",
        "Suppression of the immune system",
        "Permanent changes to genetic material",
        "Elevated cardiovascular risk through raised blood pressure",
        "Accelerated ageing of the skin",
      ],
      correctIndexes: [0, 2, 4],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-4-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Globalisation describes the process by which economies, cultures, and societies around the world have become increasingly interconnected through trade, communication, and migration. The reduction of trade barriers following the Second World War enabled the rapid expansion of international commerce, with goods now routinely designed in one country, manufactured in another, and sold across dozens of markets. Digital technology has accelerated this integration by allowing services such as finance, software, and media to cross borders instantly. Critics argue that globalisation has widened inequality both between and within countries, concentrating benefits among highly skilled workers and large corporations while displacing workers in industries unable to compete with low-cost imports.",
      transcript: "Globalisation describes the process by which economies, cultures, and societies around the world have become increasingly ___BLANK___ through trade, communication, and migration. The reduction of trade ___BLANK___ following the Second World War enabled the rapid expansion of international commerce, with goods now routinely designed in one country, manufactured in another, and sold across dozens of markets. Digital technology has accelerated this integration by allowing ___BLANK___ such as finance, software, and media to cross borders instantly. Critics argue that globalisation has widened ___BLANK___ both between and within countries, concentrating benefits among highly skilled workers and large corporations.",
      answers: ["interconnected", "barriers", "services", "inequality"],
    },
    {
      id: "fib-4-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The field of quantum mechanics describes the behaviour of matter and energy at the scale of atoms and subatomic particles. Unlike classical physics, quantum mechanics holds that particles can exist in multiple states simultaneously, a phenomenon known as superposition. Observation of a quantum system forces it into a single definite state, a process called wave function collapse. Quantum entanglement occurs when two particles become correlated in such a way that measuring one instantly affects the other, regardless of the distance separating them. These properties are being harnessed in the development of quantum computers, which have the potential to solve certain problems far beyond the reach of conventional machines.",
      transcript: "The field of quantum mechanics describes the behaviour of matter and energy at the scale of atoms and subatomic ___BLANK___. Unlike classical physics, quantum mechanics holds that particles can exist in multiple states simultaneously, a phenomenon known as ___BLANK___. Observation of a quantum system forces it into a single definite state, a process called wave function ___BLANK___. Quantum entanglement occurs when two particles become correlated in such a way that measuring one instantly affects the other, regardless of the ___BLANK___ separating them.",
      answers: ["particles", "superposition", "collapse", "distance"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-4-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Mass tourism has brought significant economic benefits to many regions, generating employment, infrastructure investment, and foreign exchange earnings. However, it also creates serious environmental and social pressures. Overcrowding at popular sites damages fragile ecosystems, historic monuments, and the quality of life for local residents. The carbon footprint of international air travel is a growing concern as aviation is responsible for around 2.5 percent of global carbon dioxide emissions. Cultural commodification can occur when local traditions are simplified or distorted to meet tourist expectations. Sustainable tourism initiatives aim to manage visitor numbers, redirect spending to local businesses, and minimise ecological damage while preserving the cultural integrity of destinations.",
      correctIndex: 0,
      summaries: [
        "Mass tourism generates economic benefits but causes environmental damage, social pressures, and cultural commodification, prompting sustainable tourism initiatives to manage these negative effects.",
        "Mass tourism has been shown to have exclusively positive effects on local economies, creating jobs and funding conservation programmes that would otherwise lack government support.",
        "Sustainable tourism is defined as any form of travel that completely eliminates carbon emissions by using only public transport, and it is now mandatory in most UNESCO heritage sites.",
        "Tourism contributes significantly to global carbon emissions, but most governments have chosen economic growth over environmental protection, rejecting sustainable tourism policies outright.",
      ],
    },
    {
      id: "hcs-4-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "The human microbiome project, launched in 2007, catalogued the trillions of microbial organisms that inhabit the human body. Researchers discovered that microbial cells in the body may outnumber human cells, and their collective genome — known as the metagenome — contains far more genetic material than the human genome. These microorganisms are not merely passengers — they perform essential functions including synthesising vitamins, training the immune system, and protecting against harmful pathogens by occupying the ecological niches they might otherwise fill. Disruption of the microbiome through antibiotic use, poor diet, or disease has been linked to a growing list of conditions including allergies, autoimmune disorders, and mental illness.",
      correctIndex: 3,
      summaries: [
        "The human microbiome project found that all microorganisms in the body are harmful and should be eliminated through targeted antibiotic therapies to improve long-term immune health.",
        "Microbial organisms in the human body serve only digestive functions and have no influence on the immune system or mental health, contrary to popular belief.",
        "The human microbiome is a relatively simple system with a limited number of species, most of which were already known before the microbiome project was launched in 2007.",
        "The human microbiome project revealed that trillions of microorganisms inhabit the body and perform vital functions, with disruptions to this community linked to allergies, autoimmune disorders, and mental illness.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-4-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "Biomimicry is an approach to design and engineering that draws inspiration from structures, processes, and systems found in nature. The Velcro fastener was inspired by the way burr seeds attach to animal fur through tiny hooks. The bullet train's nose was redesigned to mimic the beak of a kingfisher bird, which can enter water from air with minimal splash and pressure wave — the redesign reduced noise and energy consumption significantly. Architects have looked to termite mounds for inspiration in designing buildings with passive ventilation systems that maintain constant internal temperatures without air conditioning. Biomimicry reflects a broader recognition that billions of years of evolution have already solved many of the engineering challenges humans now face.",
      question: "What was the outcome of redesigning the bullet train's nose to mimic the kingfisher's beak?",
      options: [
        "It enabled the train to travel faster by reducing aerodynamic drag.",
        "It reduced both noise and energy consumption considerably.",
        "It made the train's exterior more resistant to water damage.",
        "It allowed the train to operate in rain without signal disruption.",
      ],
      correctIndex: 1,
    },
    {
      id: "mcs-4-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "The concept of social capital refers to the networks of relationships, norms of trust, and reciprocity that exist within communities and enable collective action. High social capital is associated with better health outcomes, lower crime rates, more effective governance, and stronger economic performance. Communities with dense social networks are better able to organise responses to shared problems and hold institutions accountable. However, social capital is not uniformly beneficial — tightly bonded communities can also become insular, excluding outsiders and reinforcing discrimination. Researchers distinguish between bonding social capital, which connects similar people, and bridging social capital, which links across different groups and tends to generate broader societal benefits.",
      question: "According to the speaker, what is one potential negative aspect of high social capital within a community?",
      options: [
        "It tends to reduce economic productivity by fostering dependency.",
        "It can lead communities to become insular and exclude outsiders.",
        "It makes governance less effective by bypassing formal institutions.",
        "It discourages innovation by creating pressure to conform to group norms.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-4-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The oceans absorb approximately 30 percent of the carbon dioxide emitted by human activities, slowing the pace of atmospheric warming. However, this comes at a cost — dissolved carbon dioxide forms carbonic acid, lowering the pH of seawater in a process called ocean acidification. Shellfish, corals, and other marine organisms that build calcium carbonate structures are particularly vulnerable, as acidic water makes it harder to form and maintain their shells and skeletons. If carbon emissions continue at current rates, scientists warn that ocean pH levels could",
      options: ["stabilise at current levels by 2050", "drop to the point of threatening entire marine food webs", "rise slightly due to increased phytoplankton activity", "become more alkaline as deep water circulation increases"],
      correctIndex: 1,
    },
    {
      id: "smw-4-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The history of vaccination stretches back to Edward Jenner's observation in 1796 that milkmaids who had contracted cowpox appeared to be immune to the far more deadly smallpox. By inoculating a child with material from a cowpox lesion and then exposing him to smallpox, Jenner demonstrated that the disease could be prevented. This experiment laid the foundation for the entire field of immunology and led ultimately to the global eradication of smallpox in 1980 — the only human disease to have been",
      options: ["reduced to manageable levels through quarantine alone", "completely eliminated through a worldwide vaccination campaign", "contained within a single geographic region through border controls", "reclassified as a non-infectious condition by international health authorities"],
      correctIndex: 1,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-4-1",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText words (0-based):
      // 0:Migration 1:has 2:been 3:a 4:defining 5:feature 6:of 7:human 8:history
      // 9:from 10:the 11:earliest 12:movements 13:of 14:Homo 15:sapiens 16:out
      // 17:of 18:Africa 19:to 20:the 21:mass 22:migrations 23:of 24:the 25:nineteenth
      // 26:and 27:twentieth 28:centuries 29:People 30:move 31:in 32:search 33:of
      // 34:better 35:economic 36:opportunities 37:safety 38:from 39:conflict 40:or
      // 41:persecution 42:and 43:reunion 44:with 45:family 46:members 47:Host
      // 48:countries 49:benefit 50:from 51:the 52:skills 53:and 54:labour 55:of
      // 56:migrants 57:while 58:migrants 59:send 60:remittances 61:back 62:to
      // 63:their 64:home 65:countries 66:supporting 67:local 68:economies
      audioText: "Migration has been a defining feature of human history from the earliest movements of Homo sapiens out of Africa to the mass migrations of the nineteenth and twentieth centuries. People move in search of better economic opportunities safety from conflict or persecution and reunion with family members. Host countries benefit from the skills and labour of migrants while migrants send remittances back to their home countries supporting local economies.",
      // Changes: word 4 "defining" -> "important"; word 60 "remittances" -> "money"
      // displayText split:
      // 0:Migration 1:has 2:been 3:a 4:important 5:feature 6:of 7:human 8:history
      // 9:from 10:the 11:earliest 12:movements 13:of 14:Homo 15:sapiens 16:out
      // 17:of 18:Africa 19:to 20:the 21:mass 22:migrations 23:of 24:the 25:nineteenth
      // 26:and 27:twentieth 28:centuries. 29:People 30:move 31:in 32:search 33:of
      // 34:better 35:economic 36:opportunities 37:safety 38:from 39:conflict 40:or
      // 41:persecution 42:and 43:reunion 44:with 45:family 46:members. 47:Host
      // 48:countries 49:benefit 50:from 51:the 52:skills 53:and 54:labour 55:of
      // 56:migrants 57:while 58:migrants 59:send 60:money 61:back 62:to
      // 63:their 64:home 65:countries 66:supporting 67:local 68:economies.
      displayText: "Migration has been a important feature of human history from the earliest movements of Homo sapiens out of Africa to the mass migrations of the nineteenth and twentieth centuries. People move in search of better economic opportunities safety from conflict or persecution and reunion with family members. Host countries benefit from the skills and labour of migrants while migrants send money back to their home countries supporting local economies.",
      incorrectIndexes: [4, 60],
    },
    {
      id: "hiw-4-2",
      type: "highlight_incorrect",
      audioUrl: "",
      // audioText words (0-based):
      // 0:The 1:greenhouse 2:effect 3:is 4:a 5:natural 6:process 7:in 8:which
      // 9:gases 10:in 11:the 12:atmosphere 13:trap 14:heat 15:from 16:the 17:Sun
      // 18:and 19:warm 20:the 21:Earth's 22:surface 23:Without 24:it 25:the
      // 26:average 27:temperature 28:of 29:the 30:Earth 31:would 32:be
      // 33:approximately 34:33 35:degrees 36:Celsius 37:colder 38:than 39:it
      // 40:is 41:today 42:Human 43:activities 44:particularly 45:the 46:burning
      // 47:of 48:fossil 49:fuels 50:have 51:increased 52:the 53:concentration
      // 54:of 55:greenhouse 56:gases 57:in 58:the 59:atmosphere 60:intensifying
      // 61:the 62:effect 63:and 64:raising 65:global 66:temperatures 67:beyond
      // 68:natural 69:levels
      audioText: "The greenhouse effect is a natural process in which gases in the atmosphere trap heat from the Sun and warm the Earth's surface. Without it the average temperature of the Earth would be approximately 33 degrees Celsius colder than it is today. Human activities particularly the burning of fossil fuels have increased the concentration of greenhouse gases in the atmosphere intensifying the effect and raising global temperatures beyond natural levels.",
      // Changes: word 13 "trap" -> "absorb"; word 51 "increased" -> "raised"
      // displayText split:
      // 0:The 1:greenhouse 2:effect 3:is 4:a 5:natural 6:process 7:in 8:which
      // 9:gases 10:in 11:the 12:atmosphere 13:absorb 14:heat 15:from 16:the 17:Sun
      // 18:and 19:warm 20:the 21:Earth's 22:surface. 23:Without 24:it 25:the
      // 26:average 27:temperature 28:of 29:the 30:Earth 31:would 32:be
      // 33:approximately 34:33 35:degrees 36:Celsius 37:colder 38:than 39:it
      // 40:is 41:today. 42:Human 43:activities 44:particularly 45:the 46:burning
      // 47:of 48:fossil 49:fuels 50:have 51:raised 52:the 53:concentration
      // 54:of 55:greenhouse 56:gases 57:in 58:the 59:atmosphere 60:intensifying
      // 61:the 62:effect 63:and 64:raising 65:global 66:temperatures 67:beyond
      // 68:natural 69:levels.
      displayText: "The greenhouse effect is a natural process in which gases in the atmosphere absorb heat from the Sun and warm the Earth's surface. Without it the average temperature of the Earth would be approximately 33 degrees Celsius colder than it is today. Human activities particularly the burning of fossil fuels have raised the concentration of greenhouse gases in the atmosphere intensifying the effect and raising global temperatures beyond natural levels.",
      incorrectIndexes: [13, 51],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-4-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The department requires students to register for their elective modules by Friday.",
    },
    {
      id: "wfd-4-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Researchers must obtain ethical approval before conducting studies involving human participants.",
    },
    {
      id: "wfd-4-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The guest lecturer will present her findings on urban poverty next Tuesday.",
    },
  ],
};

export default test4;
