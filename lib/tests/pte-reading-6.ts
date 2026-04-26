import type { PTETest } from "./types";

export const pteReading6: PTETest = {
  id: "pte-reading-6",
  exam: "PTE",
  title: "PTE Academic Reading — Test 6",
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
        "The study of animal cognition has undergone a profound transformation over the past half-century, shifting from a framework that largely denied complex mental processes in non-human species to one that recognises sophisticated cognitive abilities across a wide range of taxa. Tool use, once considered a defining hallmark of human intelligence, has been documented in numerous species including chimpanzees, crows, dolphins, and even octopuses. More striking still is evidence for metacognition — the capacity to monitor and reflect on one's own mental states — in great apes and some cetaceans. Studies using mirror self-recognition tests suggest that chimpanzees, bonobos, orangutans, and bottlenose dolphins are aware of themselves as distinct individuals. Social cognition research has revealed that many animals possess a rudimentary theory of mind, the ability to attribute mental states to others and predict their behaviour accordingly. Critics caution, however, that interpreting animal behaviour through a human cognitive lens risks anthropomorphism, and that convergent evolution may produce similar behaviours through very different underlying mechanisms. Rigorous experimental design and appropriate caution in interpreting results remain essential to advancing this field credibly.",
      stem: "What concern do critics raise about research into animal cognition?",
      options: [
        { label: "A", text: "That animal cognition research underestimates the intelligence of non-human species." },
        { label: "B", text: "That interpreting animal behaviour through a human lens risks anthropomorphism." },
        { label: "C", text: "That mirror self-recognition tests are not applicable to great apes." },
        { label: "D", text: "That tool use in animals is too common to be considered a measure of intelligence." },
      ],
      correct: "B",
      explanation:
        "The passage states that critics caution 'that interpreting animal behaviour through a human cognitive lens risks anthropomorphism' — projecting human characteristics onto animals — which is the concern directly described in option B.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Global inequalities in access to education represent one of the most persistent and consequential challenges in international development. In high-income countries, near-universal primary and secondary enrolment is complemented by extensive tertiary education systems, while in many low-income nations — particularly in sub-Saharan Africa and parts of South Asia — significant proportions of children never complete primary schooling. Gender remains a powerful determinant of educational access: in regions where girls are expected to undertake domestic labour from an early age, or where families must prioritise schooling for sons when resources are limited, female enrolment and completion rates lag substantially behind those of males. The quality of education, not merely enrolment, is increasingly recognised as critical: children who attend school but fail to acquire foundational literacy and numeracy skills — a phenomenon captured in the concept of 'learning poverty' — may derive limited benefit from years of schooling. International initiatives including the UN Sustainable Development Goal 4 have galvanised funding commitments and policy attention, yet progress towards equitable, high-quality universal education remains uneven and, in several regions, has been set back by the disruptions caused by the COVID-19 pandemic.",
      stem: "According to the passage, which TWO factors are identified as contributing to educational inequality?",
      options: [
        { label: "A", text: "Gender expectations that restrict girls' access to schooling in some regions." },
        { label: "B", text: "Overinvestment in tertiary education in low-income countries." },
        { label: "C", text: "Poor educational quality that leaves children without foundational skills." },
        { label: "D", text: "A global decline in funding commitments to education since 2015." },
        { label: "E", text: "The universal adoption of SDG 4 targets by all member states." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage identifies gender expectations as restricting girls' schooling (supporting A) and describes 'learning poverty' — children gaining little from schooling due to poor quality — as a key concern (supporting C). Options B and D are contradicted by the passage, and E misrepresents the passage's qualified statement about progress.",
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
          text: "In 1839, Louis Daguerre announced the daguerreotype process, producing finely detailed images on silver-coated copper plates and widely regarded as the first publicly available photographic technology.",
        },
        {
          id: "s2",
          text: "The invention of photography was not the work of a single individual but the culmination of decades of experiments with light-sensitive materials and the optical principles of the camera obscura.",
        },
        {
          id: "s3",
          text: "In the following decades, the wet collodion process and later the gelatin dry plate dramatically reduced exposure times and made photography increasingly accessible to amateur practitioners and commercial studios alike.",
        },
        {
          id: "s4",
          text: "Working independently and simultaneously in Britain, William Henry Fox Talbot developed the calotype process, which, unlike the daguerreotype, produced a paper negative from which multiple positive prints could be made.",
        },
        {
          id: "s5",
          text: "The introduction of roll film by George Eastman and the launch of the Kodak camera in 1888 democratised photography further still, transforming it from a specialist craft into a mass leisure activity.",
        },
      ],
      correctOrder: ["s2", "s1", "s4", "s3", "s5"],
      reorderExplanation:
        "The sequence begins with the broader context of photography's cumulative invention (s2), then introduces Daguerre's daguerreotype as the first public process (s1), followed by Fox Talbot's independent and competing calotype process (s4), then the successive technical improvements that expanded access (s3), and finally Eastman's Kodak democratising photography for the masses (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "The greenhouse effect is a naturally occurring process that makes life on Earth possible by warming the planet's surface to temperatures suitable for liquid water. Certain gases in the atmosphere — primarily water vapour, carbon dioxide, methane, and nitrous oxide — are known as {{1}} gases because they allow incoming solar radiation to pass through while {{2}} outgoing infrared radiation emitted by the Earth's surface. Without this natural warming mechanism, the average global surface temperature would be approximately 33 degrees Celsius {{3}} than it currently is. The problem of contemporary climate change arises because human activities — particularly the burning of fossil fuels, deforestation, and agriculture — have substantially increased the {{4}} of greenhouse gases in the atmosphere, intensifying the effect and causing average global temperatures to rise. Scientists measure this enhanced warming in terms of radiative {{5}}, which quantifies the change in energy flux in the atmosphere caused by the increase in greenhouse gas concentrations.",
      wordBank: [
        "greenhouse",
        "absorbing",
        "lower",
        "concentration",
        "forcing",
        "reflecting",
        "higher",
        "composition",
      ],
      blanks: [
        {
          id: 1,
          correct: "greenhouse",
          explanation:
            "Water vapour, CO₂, methane, and nitrous oxide are 'greenhouse gases' — the standard scientific term for gases that trap heat in the atmosphere.",
        },
        {
          id: 2,
          correct: "absorbing",
          explanation:
            "Greenhouse gases warm the surface by 'absorbing' outgoing infrared radiation rather than letting it escape to space.",
        },
        {
          id: 3,
          correct: "lower",
          explanation:
            "Without the greenhouse effect, global temperatures would be 'lower' (approximately 33°C cooler) — the natural greenhouse effect warms the planet above this baseline.",
        },
        {
          id: 4,
          correct: "concentration",
          explanation:
            "Human activities have increased the 'concentration' (amount per unit volume) of greenhouse gases in the atmosphere — the standard term in climate science.",
        },
        {
          id: 5,
          correct: "forcing",
          explanation:
            "'Radiative forcing' is the precise scientific metric for quantifying how changes in greenhouse gas concentrations alter the energy balance of the atmosphere.",
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
        "Nutrition science has advanced considerably in recent decades, yet public understanding of dietary health remains marked by widespread confusion and the {{1}} of contradictory advice. One reason for this confusion is the complexity of the subject itself: nutrients do not act in {{2}} but interact with each other and with an individual's genetic makeup, gut microbiome, and lifestyle. A second factor is the predominance of observational studies in nutrition research, which can identify {{3}} between dietary patterns and health outcomes but cannot definitively establish causation. This limitation is compounded by the difficulties of measuring diet accurately; self-reported food intake is subject to significant {{4}} bias, as participants tend to underreport the consumption of foods they perceive as unhealthy. Despite these methodological challenges, a number of dietary principles command broad scientific {{5}}: diets rich in vegetables, fruits, whole grains, and legumes, and low in ultra-processed foods and added sugars, are consistently associated with reduced risk of non-communicable diseases including cardiovascular disease, type 2 diabetes, and certain cancers. Translating this evidence into public health policy requires navigating powerful commercial {{6}} from the food and beverage industry, which has historically sought to influence dietary guidelines in ways that protect its financial interests.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["prevalence", "absence", "reduction", "acceptance"],
          correct: "prevalence",
          explanation:
            "'Prevalence' means widespread occurrence — public confusion is characterised by the prevalence of contradictory advice.",
        },
        {
          id: 2,
          options: ["isolation", "combination", "moderation", "sequence"],
          correct: "isolation",
          explanation:
            "Nutrients do not act 'in isolation' — the phrase 'do not act in isolation' is a fixed collocation meaning they do not operate independently.",
        },
        {
          id: 3,
          options: ["associations", "causes", "cures", "discrepancies"],
          correct: "associations",
          explanation:
            "Observational studies identify 'associations' (statistical relationships) between diet and health outcomes — not causation, as the passage makes clear.",
        },
        {
          id: 4,
          options: ["recall", "selection", "confirmation", "publication"],
          correct: "recall",
          explanation:
            "'Recall bias' is the specific methodological problem in self-reported diet studies — participants misremember or inaccurately report what they ate.",
        },
        {
          id: 5,
          options: ["consensus", "debate", "uncertainty", "criticism"],
          correct: "consensus",
          explanation:
            "Some dietary principles command broad scientific 'consensus' — widespread agreement among researchers — despite overall complexity.",
        },
        {
          id: 6,
          options: ["opposition", "support", "funding", "regulation"],
          correct: "opposition",
          explanation:
            "Translating evidence into policy requires navigating commercial 'opposition' from the food industry, which resists guidelines that threaten its interests.",
        },
      ],
    },
  ],
};
