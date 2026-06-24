import type { PTETest } from "./types";

export const pteReading21: PTETest = {
  id: "pte-reading-21",
  exam: "PTE",
  title: "PTE Academic Reading — Test 21",
  totalSeconds: 1800,
  tasks: [
    // Task 1: Multiple Choice Single Answer — Nanotechnology in Medicine
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "Nanotechnology has emerged as one of the most transformative fields in modern medicine, offering solutions at the molecular and cellular level that were once confined to science fiction. Nanoparticles — typically ranging from 1 to 100 nanometres in diameter — can be engineered to carry therapeutic agents directly to diseased cells, minimising the collateral damage associated with conventional treatments such as chemotherapy. In cancer therapy, for example, targeted nanoparticles can identify tumour cells through surface receptors, releasing drugs precisely where they are needed. This targeted delivery not only enhances the efficacy of treatment but also substantially reduces adverse side effects experienced by patients. Beyond drug delivery, nanotechnology is being explored for diagnostic imaging, where contrast agents made of gold or iron-oxide nanoparticles improve the resolution and sensitivity of MRI and CT scans. Researchers are also developing nano-scale biosensors capable of detecting biomarkers of disease in blood samples at concentrations far below the threshold of conventional laboratory tests. Despite these promising developments, concerns remain regarding the long-term toxicity of engineered nanoparticles within the human body, and regulatory frameworks have yet to fully address the unique challenges they present.",
      stem: "According to the passage, what is the primary advantage of using nanoparticles for drug delivery in cancer treatment?",
      options: [
        { label: "A", text: "They eliminate the need for surgical intervention in tumour removal." },
        { label: "B", text: "They allow drugs to be delivered directly to tumour cells, reducing harm to healthy tissue." },
        { label: "C", text: "They are cheaper to produce than conventional chemotherapy drugs." },
        { label: "D", text: "They permanently alter the surface receptors of cancer cells to prevent recurrence." },
      ],
      correct: "B",
      explanation:
        "The passage states that targeted nanoparticles 'releasing drugs precisely where they are needed' enhances treatment efficacy and 'substantially reduces adverse side effects,' meaning healthy tissue suffers less collateral damage. Options A, C, and D are not mentioned in the passage.",
    },

    // Task 2: Multiple Choice Multiple Answers — Urban Biodiversity
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Urban biodiversity — the variety of living organisms that inhabit cities and towns — has become an increasingly important area of ecological research as the world's population continues to concentrate in metropolitan areas. For decades, cities were considered ecological deserts, environments hostile to wildlife due to habitat fragmentation, pollution, artificial lighting, and the urban heat island effect. However, accumulating evidence suggests that cities can support surprisingly rich assemblages of species, particularly when green infrastructure such as parks, street trees, green roofs, and riparian corridors is deliberately incorporated into urban planning. Studies conducted across European, North American, and Asian cities have documented thriving populations of birds, insects, mammals, and plants that have adapted to urban conditions. Native pollinators, including solitary bees and hoverflies, are frequently found in greater abundance in urban gardens than in intensively farmed rural landscapes, where pesticide use has dramatically diminished insect populations. Urban wetlands provide breeding habitats for amphibians, while mature street trees support invertebrate communities of considerable complexity. Nevertheless, urban ecosystems tend to be dominated by a limited suite of highly adaptable generalist species, often at the expense of specialist species with narrower ecological requirements. Conservation efforts in cities must therefore balance the promotion of biodiversity with management strategies that prevent invasive species from outcompeting native flora and fauna.",
      stem: "According to the passage, which TWO factors contribute positively to biodiversity within urban environments?",
      options: [
        { label: "A", text: "The urban heat island effect, which extends growing seasons for plant species." },
        { label: "B", text: "The deliberate inclusion of green infrastructure such as parks and green roofs." },
        { label: "C", text: "Lower pesticide use compared to intensively farmed rural areas." },
        { label: "D", text: "The dominance of generalist species, which stabilise urban food webs." },
        { label: "E", text: "The presence of mature street trees that support complex invertebrate communities." },
      ],
      pickCount: 2,
      correct: ["B", "C"],
      explanation:
        "Option B is supported by the passage's claim that green infrastructure 'deliberately incorporated into urban planning' enables cities to support rich species assemblages. Option C is supported by the contrast drawn between urban gardens, where native pollinators thrive, and intensively farmed rural landscapes where 'pesticide use has dramatically diminished insect populations.' Options A and D describe phenomena that the passage treats negatively or neutrally, and E, while factually in the passage, describes a consequence rather than a contributing factor to overall biodiversity.",
    },

    // Task 3: Re-order Paragraphs — History of Writing Systems
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "The earliest writing systems emerged independently in several regions of the ancient world, with Sumerian cuneiform in Mesopotamia and Egyptian hieroglyphics among the oldest confirmed examples, dating to approximately 3200 BCE.",
        },
        {
          id: "s2",
          text: "These proto-writing systems initially served administrative purposes, recording commodity transactions and tax obligations for the emerging bureaucracies of early city-states.",
        },
        {
          id: "s3",
          text: "Over subsequent centuries, the scope of written language expanded beyond mere record-keeping to encompass religious texts, legal codes, literary narratives, and diplomatic correspondence.",
        },
        {
          id: "s4",
          text: "A pivotal development occurred around 1050 BCE when Phoenician traders disseminated their consonantal alphabet across the Mediterranean, providing the template from which Greek, Latin, and eventually most modern European scripts descended.",
        },
        {
          id: "s5",
          text: "Today, alphabetic and syllabic writing systems continue to evolve in response to digital communication technologies, raising questions among linguists about how screen-based text and emoji use may reshape the conventions of written language in the coming decades.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage follows a chronological structure: s1 introduces the origins of writing (~3200 BCE); s2 explains the initial administrative function of these early systems; s3 describes how writing's scope expanded over time; s4 identifies the key Phoenician alphabetic development (~1050 BCE) that influenced modern scripts; and s5 brings the narrative to the present, discussing digital-era evolution of writing.",
    },

    // Task 4: Reading Fill in the Blanks — Cognitive Load Theory
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. Click a word from the box, then click the blank where you want to place it. Each word may only be used once.",
      rfibText:
        "Cognitive load theory, developed by educational psychologist John Sweller in the 1980s, proposes that the human working memory has a severely limited {{1}} and that effective instructional design must account for this constraint. The theory distinguishes between three types of cognitive load: intrinsic load, which arises from the inherent {{2}} of the material being learned; extraneous load, caused by poorly designed instruction that imposes unnecessary mental effort; and germane load, associated with the mental effort devoted to constructing and {{3}} schemas — organised knowledge structures that facilitate long-term retention. Instructional strategies that reduce extraneous load — such as eliminating redundant information, using worked examples, and carefully {{4}} new content into prior knowledge — have been shown to improve learning outcomes significantly. Research in this field has also demonstrated that as learners acquire expertise, the optimal level of instructional guidance shifts: novices benefit from highly structured support, whereas experts may find excessive guidance {{5}} because it interferes with the application of their already well-developed schemas.",
      wordBank: [
        "capacity",
        "complexity",
        "automating",
        "consolidating",
        "integrating",
        "counterproductive",
        "beneficial",
        "duration",
      ],
      blanks: [
        {
          id: 1,
          correct: "capacity",
          explanation:
            "'Working memory has a severely limited capacity' is the standard phrasing in cognitive load theory; 'duration' does not fit the context of memory limitations described.",
        },
        {
          id: 2,
          correct: "complexity",
          explanation:
            "Intrinsic load is defined by the 'inherent complexity of the material,' which refers to how many interacting elements the content contains.",
        },
        {
          id: 3,
          correct: "consolidating",
          explanation:
            "Germane load involves constructing and consolidating schemas — building and solidifying long-term knowledge structures. 'Automating' does not fit the schema-building context here.",
        },
        {
          id: 4,
          correct: "integrating",
          explanation:
            "'Integrating new content into prior knowledge' is a well-established instructional strategy for reducing extraneous cognitive load.",
        },
        {
          id: 5,
          correct: "counterproductive",
          explanation:
            "The passage contrasts expert learners with novices, stating that excessive guidance for experts 'interferes with' their schemas — making it counterproductive, not beneficial.",
        },
      ],
    },

    // Task 5: Reading & Writing Fill in the Blanks — Tidal Energy
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "In the text below, some words are missing. For each blank, select the correct word from the dropdown menu.",
      rwfibText:
        "Tidal energy is one of the most {{1}} forms of renewable energy available to humanity, since the gravitational forces driving tidal cycles are entirely predictable centuries in advance. Unlike solar and wind power, which are {{2}} on atmospheric conditions, tidal generators can produce electricity with a consistency that makes grid integration substantially more straightforward. Tidal barrages — large dam-like structures built across estuaries — were among the first technologies developed to {{3}} this resource, with the La Rance facility in France having operated since 1966. However, barrages have drawn criticism for their significant ecological {{4}}, particularly their disruption of estuarine habitats and migratory fish passages. In response, engineers have developed tidal stream generators, underwater turbines that {{5}} kinetic energy from fast-moving tidal currents without blocking waterways entirely. These devices are typically {{6}} on the seabed in areas with strong tidal flows, such as the Pentland Firth between mainland Scotland and Orkney, which is considered one of the world's most energetic tidal environments.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["predictable", "volatile", "intermittent"],
          correct: "predictable",
          explanation:
            "The sentence explains that tidal cycles can be forecast 'centuries in advance,' making tidal energy predictable. 'Volatile' and 'intermittent' contradict this.",
        },
        {
          id: 2,
          options: ["contingent", "dependent", "reliant"],
          correct: "dependent",
          explanation:
            "'Dependent on atmospheric conditions' is the standard collocation. While 'reliant' is close, 'dependent on' is the fixed grammatical phrase used in formal academic writing when followed by 'on.'",
        },
        {
          id: 3,
          options: ["harness", "generate", "exploit"],
          correct: "harness",
          explanation:
            "'Harness a resource' is the conventional academic collocation for capturing and using a natural energy source. 'Exploit' carries a negative connotation not present here, and 'generate' is syntactically awkward in this context.",
        },
        {
          id: 4,
          options: ["impact", "footprint", "consequence"],
          correct: "impact",
          explanation:
            "'Ecological impact' is the standard noun phrase used in environmental science discourse. 'Footprint' usually refers to carbon or land use, and 'consequence' requires a following clause rather than a prepositional complement.",
        },
        {
          id: 5,
          options: ["extract", "capture", "convert"],
          correct: "capture",
          explanation:
            "Tidal stream generators 'capture kinetic energy' from currents — the standard phrasing for intercepting energy from a flowing medium without necessarily converting it in the same clause.",
        },
        {
          id: 6,
          options: ["anchored", "installed", "submerged"],
          correct: "anchored",
          explanation:
            "Tidal stream devices are 'anchored on the seabed' — fixed in place to withstand strong currents. 'Installed' is vague and 'submerged' describes their position but not how they are secured.",
        },
      ],
    },
  ],
};
