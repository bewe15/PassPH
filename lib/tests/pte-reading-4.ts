import type { PTETest } from "./types";

export const pteReading4: PTETest = {
  id: "pte-reading-4",
  exam: "PTE",
  title: "PTE Academic Reading — Test 4",
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
        "Climate adaptation strategies have become an urgent priority for governments and communities worldwide as the effects of global warming intensify. Unlike mitigation, which targets the reduction of greenhouse gas emissions, adaptation focuses on adjusting human systems and natural environments to reduce vulnerability to current and anticipated climate impacts. These strategies span a wide range of scales and sectors: coastal cities invest in sea-wall construction and mangrove restoration to buffer against storm surges and rising sea levels; agricultural regions develop drought-resistant crop varieties and shift planting calendars to respond to altered precipitation patterns; and urban planners redesign infrastructure to cope with more frequent and severe heatwaves. A critical distinction in the adaptation literature is between incremental adaptation — making modest adjustments to existing practices — and transformative adaptation, which involves fundamental changes to the structures, institutions, and values that underpin human societies. Experts increasingly argue that the pace and scale of climate change will make purely incremental approaches insufficient, demanding transformative responses across economic and social systems.",
      stem: "According to the passage, what distinguishes transformative adaptation from incremental adaptation?",
      options: [
        { label: "A", text: "Transformative adaptation focuses exclusively on coastal infrastructure." },
        { label: "B", text: "Transformative adaptation involves fundamental changes to societal structures and institutions." },
        { label: "C", text: "Incremental adaptation requires more investment than transformative adaptation." },
        { label: "D", text: "Transformative adaptation is limited to agricultural and urban planning sectors." },
      ],
      correct: "B",
      explanation:
        "The passage explicitly states that transformative adaptation 'involves fundamental changes to the structures, institutions, and values that underpin human societies,' distinguishing it from incremental adaptation's modest adjustments to existing practices.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Urbanisation has proceeded at a historically unprecedented rate over the past century, with more than half of the world's population now living in cities. This rapid concentration of people in urban centres has brought substantial economic benefits, including agglomeration effects that boost productivity and innovation, but it has also exacerbated social and spatial inequalities. Within cities of both the global North and global South, the distribution of high-quality housing, green space, clean air, and access to employment is deeply unequal, with low-income populations disproportionately concentrated in areas that bear a greater burden of environmental hazards, poor transport links, and under-resourced public services. Urban scholars have debated whether market-led development exacerbates or reduces these disparities over time. Evidence from rapidly growing cities in sub-Saharan Africa and South and Southeast Asia suggests that economic growth alone does not automatically translate into inclusive urban development; targeted policy interventions — including social housing programmes, investment in public transit, and progressive land taxation — are generally required to meaningfully reduce intra-urban inequality.",
      stem: "According to the passage, which TWO statements about urbanisation and inequality are supported?",
      options: [
        { label: "A", text: "Economic growth in cities automatically reduces inequality over time." },
        { label: "B", text: "Low-income urban residents often face greater environmental hazards than wealthier residents." },
        { label: "C", text: "Urbanisation offers economic advantages such as increased productivity." },
        { label: "D", text: "Green space is distributed equally across all urban income groups." },
        { label: "E", text: "Market-led development consistently closes the gap between rich and poor in cities." },
      ],
      pickCount: 2,
      correct: ["B", "C"],
      explanation:
        "The passage states that low-income populations are 'disproportionately concentrated in areas that bear a greater burden of environmental hazards' (supporting B) and that urbanisation brings 'agglomeration effects that boost productivity and innovation' (supporting C). Option A is contradicted by evidence from rapidly growing cities.",
    },

    // ── TASK 3: Re-order Paragraphs ───────────────────────────────────────────
    {
      id: 3,
      type: "reorder",
      taskLabel: "Task 3 of 5 — Re-order Paragraphs",
      instructions:
        "The text below has been placed in a random order. Arrange the sentences in the correct order by clicking them into sequence.",
      sentences: [
        {
          id: "s1",
          text: "By the late eighteenth century, a combination of technological innovations — most notably James Watt's improved steam engine — provided a new and versatile source of mechanical power that could be applied across a wide range of industries.",
        },
        {
          id: "s2",
          text: "The availability of cheap coal in Britain, combined with an extensive canal and later railway network, ensured that raw materials and finished goods could be transported efficiently, lowering costs and expanding markets.",
        },
        {
          id: "s3",
          text: "Historians continue to debate the precise causes of the Industrial Revolution, but most agree that no single factor can fully explain why sustained mechanised manufacturing first emerged in Britain during the eighteenth century.",
        },
        {
          id: "s4",
          text: "At the same time, Britain's relatively stable political institutions, enforceable property rights, and access to colonial markets created conditions in which entrepreneurs were willing to risk capital on large-scale industrial ventures.",
        },
        {
          id: "s5",
          text: "The convergence of these technological, geographical, institutional, and commercial factors produced a self-reinforcing cycle of investment, innovation, and output growth that gradually spread to continental Europe and North America.",
        },
      ],
      correctOrder: ["s3", "s1", "s2", "s4", "s5"],
      reorderExplanation:
        "The logical sequence opens with the historiographical debate (s3), then introduces the key technological driver — the steam engine (s1), followed by the geographical advantage of coal and transport (s2), then the institutional and commercial conditions (s4), and finally the convergence of all factors and their spread (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Photosynthesis is the biological process by which green plants, algae, and certain bacteria {{1}} light energy — primarily from the sun — into chemical energy stored in glucose. The process occurs mainly in the chloroplasts of plant cells, where the green pigment {{2}} captures light and uses it to drive two interconnected sets of reactions. In the light-dependent reactions, water molecules are split, releasing oxygen as a {{3}} product and generating energy-carrying molecules called ATP and NADPH. These molecules then power the light-independent reactions, also known as the Calvin cycle, in which carbon dioxide from the atmosphere is {{4}} into organic compounds. The overall efficiency of photosynthesis is relatively low — most plants convert only one to two percent of incident solar energy into stored chemical {{5}} — yet the cumulative global output of photosynthesis underpins virtually all life on Earth.",
      wordBank: [
        "convert",
        "chlorophyll",
        "by-product",
        "fixed",
        "energy",
        "absorbed",
        "released",
        "pigmentation",
      ],
      blanks: [
        {
          id: 1,
          correct: "convert",
          explanation:
            "'Convert' is the correct verb: photosynthesis converts light energy into chemical energy stored in glucose.",
        },
        {
          id: 2,
          correct: "chlorophyll",
          explanation:
            "Chlorophyll is the green pigment found in chloroplasts that captures light for photosynthesis.",
        },
        {
          id: 3,
          correct: "by-product",
          explanation:
            "Oxygen is a 'by-product' of the light-dependent reactions — it is produced when water is split but is not the primary aim of the process.",
        },
        {
          id: 4,
          correct: "fixed",
          explanation:
            "Carbon dioxide is 'fixed' (i.e., converted from a gaseous to an organic form) during the Calvin cycle — 'carbon fixation' is the standard scientific term.",
        },
        {
          id: 5,
          correct: "energy",
          explanation:
            "Plants convert only 1–2% of incident solar energy into stored chemical 'energy' — the sentence compares solar input to chemical energy output.",
        },
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
        "Mental health stigma remains one of the most {{1}} barriers to individuals seeking professional help for psychological disorders. Stigma operates at two distinct levels: public stigma, which refers to the negative {{2}} that society holds towards people with mental illness, and self-stigma, which occurs when affected individuals internalise these negative beliefs and apply them to themselves. Research consistently shows that stigma leads to {{3}} in help-seeking behaviour, delayed diagnosis, and poorer long-term outcomes for those living with conditions such as depression, anxiety, and schizophrenia. Public awareness campaigns have demonstrated some {{4}} in reducing prejudicial attitudes, particularly when they feature personal testimonies from people with lived experience of mental illness. However, experts caution that attitude change does not always {{5}} into changed behaviour, and that structural reforms — including greater investment in mental health services and legally enforced anti-discrimination protections — are necessary to create lasting {{6}} for affected individuals.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["significant", "trivial", "welcome", "occasional"],
          correct: "significant",
          explanation:
            "'Significant' correctly describes how substantial a barrier stigma is — the passage discusses it as a major, persistent obstacle.",
        },
        {
          id: 2,
          options: ["attitudes", "treatments", "outcomes", "diagnoses"],
          correct: "attitudes",
          explanation:
            "Public stigma refers to the negative 'attitudes' society holds — the term captures the prejudicial beliefs and stereotypes involved.",
        },
        {
          id: 3,
          options: ["reductions", "increases", "improvements", "variations"],
          correct: "reductions",
          explanation:
            "Stigma leads to 'reductions' in help-seeking behaviour — fewer people seek treatment as a result of stigma.",
        },
        {
          id: 4,
          options: ["effectiveness", "controversy", "opposition", "uncertainty"],
          correct: "effectiveness",
          explanation:
            "Campaigns have shown 'effectiveness' (i.e., they have worked to some degree) in reducing prejudicial attitudes.",
        },
        {
          id: 5,
          options: ["translate", "develop", "expand", "revert"],
          correct: "translate",
          explanation:
            "'Translate into' is the standard collocation meaning to convert or result in a practical change — attitude change does not always translate into behaviour change.",
        },
        {
          id: 6,
          options: ["change", "resistance", "confusion", "isolation"],
          correct: "change",
          explanation:
            "Structural reforms are needed to create lasting 'change' for affected individuals — the passage is arguing for systemic improvement in outcomes.",
        },
      ],
    },
  ],
};
