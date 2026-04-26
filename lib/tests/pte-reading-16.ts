import type { PTETest } from "./types";

export const pteReading16: PTETest = {
  id: "pte-reading-16",
  exam: "PTE",
  title: "PTE Academic Reading — Test 16",
  totalSeconds: 1800,
  tasks: [
    // ── TASK 1: Multiple Choice Single Answer ─────────────────────────────────
    {
      id: 1,
      type: "mc_single",
      taskLabel: "Task 1 of 5 — Multiple Choice, Single Answer",
      instructions:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      passage:
        "The sustainable fashion industry has emerged as one of the most contested spaces within contemporary consumer culture. Proponents argue that shifting production toward recycled fibres, natural dyes, and closed-loop manufacturing processes can dramatically reduce the environmental footprint of an industry responsible for roughly ten percent of global carbon emissions and the second-largest consumption of the world's water supply. Critics, however, contend that much of what is marketed as sustainable fashion constitutes greenwashing — the strategic use of environmental language to appeal to ethically conscious consumers without substantive change to supply chains or labour conditions. The concept of a capsule wardrobe, featuring durable, timeless garments purchased less frequently, has gained traction as a consumer-level response. Yet structural change, researchers argue, ultimately requires regulation: mandatory disclosure of supply chain data, extended producer responsibility schemes, and taxes on fast fashion items to internalise environmental costs currently borne by the public.",
      stem: "What do critics argue about the sustainable fashion industry, according to the passage?",
      options: [
        { label: "A", text: "Consumers are unwilling to pay higher prices for eco-friendly clothing." },
        { label: "B", text: "Environmental labelling in fashion is largely accurate and well regulated." },
        { label: "C", text: "Many sustainability claims mask a lack of genuine change to supply chains." },
        { label: "D", text: "Natural dyes are too expensive to be viable at an industrial scale." },
      ],
      correct: "C",
      explanation:
        "The passage states that critics 'contend that much of what is marketed as sustainable fashion constitutes greenwashing' — environmental language without substantive change to supply chains or labour conditions."
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Ageing populations represent one of the defining demographic challenges of the twenty-first century. In most high-income nations, the proportion of citizens aged sixty-five and above is rising rapidly as fertility rates decline and life expectancy increases. This demographic shift places considerable strain on healthcare systems, pension funds, and social care services, all of which were designed during periods of younger age profiles. Labour markets are also affected: a shrinking working-age population relative to retirees reduces the tax base available to fund public services. Some economists argue that higher immigration can partially compensate for demographic decline, although political resistance to large-scale immigration limits this option in many countries. Technological responses — including robotics in care settings and digital health monitoring — offer additional possibilities but raise their own ethical and practical concerns. Raising the retirement age has been widely discussed, though unions and advocacy groups frequently oppose such measures as placing an unfair burden on workers in physically demanding occupations.",
      stem: "According to the passage, which TWO challenges are associated with ageing populations?",
      options: [
        { label: "A", text: "Reduced tax revenue relative to the cost of public services." },
        { label: "B", text: "Declining standards in higher education." },
        { label: "C", text: "Increased pressure on healthcare and pension systems." },
        { label: "D", text: "Falling demand for consumer goods across all sectors." },
        { label: "E", text: "Growing opposition to international trade agreements." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage says a shrinking working-age population 'reduces the tax base' — supporting A. It also says the shift places 'considerable strain on healthcare systems, pension funds, and social care services' — supporting C."
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        { id: "s1", text: "The Wright brothers' twelve-second flight at Kitty Hawk in December 1903 is widely regarded as the first sustained, controlled, powered heavier-than-air flight in history." },
        { id: "s2", text: "Prior to this milestone, inventors including Otto Lilienthal had demonstrated the principles of gliding flight, providing crucial aerodynamic data that the Wrights would later apply to their powered designs." },
        { id: "s3", text: "Within a decade, aircraft had evolved from fragile wooden biplanes into machines capable of crossing the English Channel, prompting military planners to recognise aviation's strategic potential." },
        { id: "s4", text: "The First World War accelerated development dramatically, with fighter aircraft, bombers, and reconnaissance planes transforming both tactics and technology by the time the armistice was signed in 1918." },
        { id: "s5", text: "Commercial aviation followed in the 1920s and expanded rapidly after the Second World War, ultimately reshaping global trade, tourism, and geopolitics in ways the Kitty Hawk pioneers could scarcely have imagined." },
      ],
      correctOrder: ["s2", "s1", "s3", "s4", "s5"],
      reorderExplanation:
        "The sequence progresses chronologically: earlier gliding experiments by Lilienthal (s2) → the Wright brothers' powered flight in 1903 (s1) → rapid evolution within a decade including the Channel crossing (s3) → acceleration during World War One (s4) → the rise of commercial aviation post-war (s5)."
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Nitrogen is an essential {{1}} for all living organisms, forming a core component of amino acids, proteins, and nucleic acids. Although the atmosphere is approximately seventy-eight percent nitrogen gas, most organisms cannot use this form directly; they depend on specialised bacteria to {{2}} atmospheric nitrogen into compounds such as ammonia, a process known as biological nitrogen fixation. These fixed compounds are then {{3}} by plants through their roots and incorporated into organic matter. When organisms die and decompose, {{4}} bacteria break down nitrogen-containing compounds, releasing ammonium back into the soil in a process called ammonification. Subsequent {{5}} by other microbial groups converts ammonium into nitrate, completing the nitrogen cycle and making nitrogen available for a new cycle of plant uptake.",
      wordBank: ["nutrient", "convert", "absorbed", "denitrifying", "nitrification", "decomposing", "expelled", "release"],
      blanks: [
        { id: 1, correct: "nutrient", explanation: "'Nutrient' correctly describes nitrogen as an essential substance required by living organisms for growth and function." },
        { id: 2, correct: "convert", explanation: "Nitrogen-fixing bacteria 'convert' atmospheric nitrogen gas into usable compounds such as ammonia." },
        { id: 3, correct: "absorbed", explanation: "Fixed nitrogen compounds are 'absorbed' by plants through their roots — taken up from the soil." },
        { id: 4, correct: "decomposing", explanation: "'Decomposing' bacteria break down dead organic matter, releasing ammonium in the process of ammonification." },
        { id: 5, correct: "nitrification", explanation: "'Nitrification' is the microbial process that converts ammonium into nitrate, completing the nitrogen cycle." },
      ],
    },

    // ── TASK 5: Reading & Writing: Fill in the Blanks ────────────────────────
    {
      id: 5,
      type: "rwfib",
      taskLabel: "Task 5 of 5 — Reading & Writing: Fill in the Blanks",
      instructions:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      rwfibText:
        "Labour markets around the world are undergoing profound {{1}} driven by automation, globalisation, and the expansion of digital platforms. The rise of the gig economy has created new forms of flexible employment, but has also generated significant debate about worker {{2}}, as platform workers are frequently classified as independent contractors rather than employees and are therefore {{3}} from statutory protections such as minimum wage legislation and paid leave entitlements. Meanwhile, the increasing {{4}} of artificial intelligence in routine cognitive tasks threatens to displace workers in sectors previously considered immune to automation, including legal services, financial analysis, and medical diagnostics. Policymakers face the twin challenges of supporting displaced workers through retraining programmes and ensuring that the {{5}} of productivity gains from technology are distributed equitably rather than captured entirely by capital owners. Some economists advocate for a universal basic income as a structural {{6}} to the instability created by technological unemployment.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["transformations", "disruptions", "collapses", "formations"],
          correct: "transformations",
          explanation: "'Transformations' best captures broad, structural changes across labour markets — more precise and positive in scope than 'disruptions' or 'collapses'."
        },
        {
          id: 2,
          options: ["rights", "wages", "mobility", "representation"],
          correct: "rights",
          explanation: "The debate centres on worker 'rights' — specifically legal protections such as minimum wage and paid leave that platform workers lack."
        },
        {
          id: 3,
          options: ["excluded", "exempted", "protected", "removed"],
          correct: "excluded",
          explanation: "Platform workers are 'excluded' from statutory protections — they are left out of the legal frameworks that apply to employees."
        },
        {
          id: 4,
          options: ["capability", "penetration", "adoption", "dominance"],
          correct: "penetration",
          explanation: "'Penetration' describes the extent to which AI is entering and becoming established within previously untouched sectors — standard usage in technology diffusion contexts."
        },
        {
          id: 5,
          options: ["benefits", "costs", "risks", "outputs"],
          correct: "benefits",
          explanation: "Policymakers want to ensure the 'benefits' — the gains and advantages — of technological productivity are shared equitably."
        },
        {
          id: 6,
          options: ["response", "alternative", "objection", "contribution"],
          correct: "response",
          explanation: "Universal basic income is proposed as a structural 'response' — a policy measure designed to address the problem of technological unemployment."
        },
      ],
    },
  ],
};
