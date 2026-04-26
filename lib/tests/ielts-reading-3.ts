import type { IELTSTest } from "./types";

export const ieltsReading3: IELTSTest = {
  id: "ielts-reading-3",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 3",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "The Origins of Written Language",
      paragraphs: [
        {
          letter: "A",
          text: "Writing is often described as one of humanity's most transformative inventions, yet it did not arise suddenly or in a single location. The earliest known writing system — proto-cuneiform — emerged in Sumer, in what is now southern Iraq, around 3200 BCE. Far from being a medium for literature or communication, the earliest written records were almost exclusively administrative: clay tablets recording grain allocations, livestock counts, and labour assignments for temple estates. Writing, in its origins, was an accounting technology, developed to extend the capacity of human memory in the service of complex economic management.",
        },
        {
          letter: "B",
          text: "A second independent writing system developed in Egypt around 3100 BCE, with hieroglyphs appearing almost simultaneously on a diverse range of media including ivory labels, pottery, and ceremonial palettes. The near-contemporaneous emergence of Egyptian and Sumerian writing has prompted debate among scholars: some argue for independent invention, pointing to the different visual forms and underlying structures of the two systems; others suggest that the idea of writing — if not its specific form — may have diffused from Mesopotamia westward along established trade routes. A third major independent origin of writing occurred in China, with oracle bone inscriptions dating to approximately 1200 BCE.",
        },
        {
          letter: "C",
          text: "The development of the alphabet represents a pivotal transition in writing technology. Earlier scripts, including cuneiform and hieroglyphics, were logosyllabic: they represented meaning (as logograms) and sound (as syllabic signs) simultaneously, requiring learners to master hundreds or thousands of individual signs. The Phoenician alphabet, emerging around 1050 BCE, reduced this to approximately 22 consonantal signs, each representing a single sound. This radical simplification dramatically reduced the time required to achieve literacy, democratising access to writing and reading beyond the scribal elite.",
        },
        {
          letter: "D",
          text: "The relationship between writing and power has been a persistent theme in historical analysis. In many early literate societies, writing was closely controlled by political or religious authorities. In Mesopotamia, scribes underwent years of formal education in institutions called edubba, or 'tablet houses,' and formed a distinct social class. Access to literacy was often deliberately restricted: in some slave-owning societies, teaching enslaved people to read was prohibited precisely because literacy represented a form of power and autonomy. The invention of the printing press in the fifteenth century — and of mass literacy in its wake — fundamentally altered these power dynamics.",
        },
        {
          letter: "E",
          text: "Scholars have long debated whether writing fundamentally changes the way people think, or merely records thoughts that could otherwise be expressed orally. The literacy theorist Walter Ong argued that writing restructures consciousness: it enables linear, logical argument, abstract categorisation, and the detachment of thought from its immediate context — capacities that oral cultures develop only partially. Critics have challenged this view as ethnocentric, pointing out that oral traditions sustain highly complex knowledge systems, from the navigational knowledge of Pacific Islander sailors to the legal traditions of African griots, without any dependence on writing.",
        },
        {
          letter: "F",
          text: "The digital revolution has prompted renewed debate about the future of handwriting and the codex book. Neurological research suggests that handwriting, as opposed to typing, activates distinct brain regions associated with learning and memory consolidation, leading some educators to advocate for its continued place in curricula. Meanwhile, the e-reader and digital text have introduced new affordances — instant search, adjustable fonts, embedded dictionaries — while eliminating others, such as the spatial memory cues associated with physical page location. Whether the shift from paper to screen fundamentally alters reading cognition remains an active area of investigation.",
        },
        {
          letter: "G",
          text: "Despite centuries of scholarship, many aspects of writing's history remain unresolved. Several ancient scripts — including the Indus Valley script, Linear A of the Minoan civilisation, and the rongorongo of Easter Island — have resisted all attempts at decipherment. The ongoing effort to read these scripts is more than an academic puzzle: each undeciphered system represents an entire civilisation whose thoughts, records, and stories remain inaccessible. The decipherment of Linear B in 1952 by architect Michael Ventris demonstrated that breakthroughs remain possible, offering hope that other lost scripts may eventually yield their secrets.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "Writing as an instrument of administration and commerce" },
            { label: "ii",   text: "Scripts that scholars have been unable to read" },
            { label: "iii",  text: "Questions about where and how writing first appeared" },
            { label: "iv",   text: "How a simpler script changed who could become literate" },
            { label: "v",    text: "Control of literacy as a tool of social authority" },
            { label: "vi",   text: "Whether writing changes human thought itself" },
            { label: "vii",  text: "New technologies and the future of the written word" },
            { label: "viii", text: "The economic value of literacy in ancient empires" },
            { label: "ix",   text: "Literary traditions in pre-literate societies" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "iii", explanation: "Paragraph B discusses the debate about whether Egyptian and Sumerian writing arose independently or through diffusion — questions of where and how writing first appeared." },
            { id: 2, paragraph: "C", correct: "iv",  explanation: "Paragraph C explains how the Phoenician alphabet's simplification to 22 signs democratised literacy access." },
            { id: 3, paragraph: "D", correct: "v",   explanation: "Paragraph D describes how literacy was controlled by authorities — scribal education, restrictions on enslaved people reading." },
            { id: 4, paragraph: "E", correct: "vi",  explanation: "Paragraph E presents the debate about whether writing restructures consciousness, citing Walter Ong and critics." },
            { id: 5, paragraph: "F", correct: "vii", explanation: "Paragraph F addresses the digital revolution and debates about handwriting, e-readers, and reading cognition." },
            { id: 6, paragraph: "G", correct: "ii",  explanation: "Paragraph G discusses undeciphered scripts — Indus Valley, Linear A, rongorongo — and the hope of future breakthroughs." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "The earliest cuneiform tablets were primarily used for literary compositions.", correct: "False", explanation: "Paragraph A states the earliest written records were 'almost exclusively administrative' — accounting, not literature." },
            { id: 8,  statement: "The Phoenician alphabet contained fewer than 25 individual signs.", correct: "True", explanation: "Paragraph C: 'The Phoenician alphabet… reduced this to approximately 22 consonantal signs.'" },
            { id: 9,  statement: "Walter Ong argued that oral cultures are intellectually inferior to literate ones.", correct: "Not Given", explanation: "Ong argued writing restructures consciousness differently, but the passage does not say he claimed oral cultures are inferior." },
            { id: 10, statement: "Linear B was deciphered in the twentieth century.", correct: "True", explanation: "Paragraph G: 'The decipherment of Linear B in 1952 by architect Michael Ventris.'" },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "In Mesopotamia, scribes were trained in institutions known as ", after: ", which translates as 'tablet houses.'", correct: "edubba", explanation: "Paragraph D: 'scribes underwent years of formal education in institutions called edubba, or \"tablet houses.\"'" },
            { id: 12, before: "Writing systems that represented both meaning and sound simultaneously are described as ", after: " scripts.", correct: "logosyllabic", explanation: "Paragraph C: 'Earlier scripts, including cuneiform and hieroglyphics, were logosyllabic.'" },
            { id: 13, before: "Research in neurology indicates that handwriting, unlike typing, activates regions of the brain linked to ", after: " and memory consolidation.", correct: "learning", explanation: "Paragraph F: 'handwriting… activates distinct brain regions associated with learning and memory consolidation.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Vertical Farming: Promise and Limitations",
      paragraphs: [
        {
          letter: "A",
          text: "Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor environments — has attracted intense investment and media attention since the early 2010s. Proponents argue that the technology represents an answer to some of the most pressing challenges facing global food systems: it uses a fraction of the water required by conventional agriculture, eliminates the need for pesticides, operates independently of climate and season, and can be located in or near urban centres, dramatically reducing food transport distances. Major venture capital firms have invested billions of dollars in companies such as AeroFarms, Plenty, and Bowery Farming, anticipating that indoor agriculture will capture a significant share of global food production.",
        },
        {
          letter: "B",
          text: "The energy requirements of vertical farming represent its most significant economic and environmental liability. Conventional field crops are powered by sunlight at no cost; vertical farms must provide artificial lighting for every growth cycle, typically using high-intensity LED systems. Studies estimate that vertical farms consume between 10 and 100 times the energy per kilogram of produce compared to greenhouse cultivation, and several times more than field agriculture. In contexts where electricity is generated from fossil fuels, the carbon footprint of vertically farmed produce can substantially exceed that of conventionally grown equivalents, even accounting for transport.",
        },
        {
          letter: "C",
          text: "The economics of vertical farming reflect these energy demands. Production costs are typically far higher than for field or greenhouse agriculture, and the price premium required to achieve profitability limits the market to affluent consumers in wealthy nations. Most vertically farmed produce consists of high-value, fast-growing crops with short supply chains: leafy greens, herbs, strawberries, and tomatoes dominate current production. Staple crops such as rice, wheat, and maize — which constitute the nutritional basis of most of the world's population — are currently uneconomical to grow indoors, and there is no clear technical pathway to making them so.",
        },
        {
          letter: "D",
          text: "Water efficiency is frequently cited as one of vertical farming's strongest environmental credentials. Closed-loop hydroponic and aeroponic systems can reduce water consumption by up to 95 percent compared to field agriculture, since water is recirculated rather than lost to evaporation and runoff. This advantage is particularly significant in water-stressed regions. However, critics note that the crops most suited to vertical farming — salad leaves and herbs — are among the least water-intensive to grow conventionally, meaning that the absolute water savings may be modest. Genuine gains from vertical farming would be achieved only if it could economically produce crops with high conventional water footprints, such as almonds, avocados, or beef.",
        },
        {
          letter: "E",
          text: "Vertical farming's proximity advantage is more robust. Urban and peri-urban farms can deliver produce to consumers within hours of harvest, dramatically extending shelf life and reducing food waste. For perishable products in particular, the logistics of global supply chains result in substantial wastage — estimates suggest that between 30 and 40 percent of fresh produce is lost between farm and consumer. Co-locating production with consumption also reduces dependency on long-distance refrigerated transport, which carries significant carbon costs. Several hospital systems and urban food banks have piloted on-site vertical farms to provide fresh vegetables in areas with poor access to healthy food.",
        },
        {
          letter: "F",
          text: "The long-term trajectory of vertical farming depends partly on technological progress and partly on energy policy. Continued improvements in LED efficiency, automation, and crop genetics are expected to reduce production costs. More significantly, the case for vertical farming as an environmentally beneficial technology depends on the decarbonisation of electricity grids: in a future powered by renewable energy, the energy intensity of indoor agriculture becomes far less problematic. Several analysts suggest that vertical farming will remain a niche technology for high-value crops in the near term but may become a mainstream component of food systems in a decarbonised economy over the coming decades.",
        },
      ],
      sections: [
        {
          type: "match_info",
          questionRange: "Questions 14–19",
          instructions:
            "The reading passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter A–F.",
          paragraphLetters: ["A", "B", "C", "D", "E", "F"],
          questions: [
            { id: 14, text: "A prediction that vertical farming's environmental credentials rely on changes to energy generation", correct: "F", explanation: "Paragraph F: 'the case for vertical farming as an environmentally beneficial technology depends on the decarbonisation of electricity grids.'" },
            { id: 15, text: "A comparison between the water needs of vertical farming's typical crops and those with high water footprints", correct: "D", explanation: "Paragraph D notes that vertically farmed crops (salad, herbs) are 'least water-intensive to grow conventionally,' contrasting with almonds and avocados." },
            { id: 16, text: "An example of institutions using on-site vertical farms to improve food access", correct: "E", explanation: "Paragraph E: 'Several hospital systems and urban food banks have piloted on-site vertical farms.'" },
            { id: 17, text: "The categories of crops that are currently profitable to grow indoors", correct: "C", explanation: "Paragraph C: 'leafy greens, herbs, strawberries, and tomatoes dominate current production.'" },
            { id: 18, text: "The names of specific companies that have received large investment", correct: "A", explanation: "Paragraph A names AeroFarms, Plenty, and Bowery Farming as recipients of venture capital investment." },
            { id: 19, text: "Figures estimating how much fresh food is wasted in global supply chains", correct: "E", explanation: "Paragraph E: 'between 30 and 40 percent of fresh produce is lost between farm and consumer.'" },
          ],
        },
        {
          type: "mc_single",
          questionRange: "Questions 20–23",
          instructions: "Choose the correct letter, A, B, C, or D.",
          questions: [
            {
              id: 20,
              stem: "What is the main reason vertical farming's energy use is environmentally problematic at present?",
              options: [
                { label: "A", text: "LED lighting technology is still inefficient." },
                { label: "B", text: "Electricity is largely generated from fossil fuels." },
                { label: "C", text: "Vertical farms waste more energy than greenhouses." },
                { label: "D", text: "Automation systems require large amounts of power." },
              ],
              correct: "B",
              explanation: "Paragraph B: 'In contexts where electricity is generated from fossil fuels, the carbon footprint… can substantially exceed that of conventionally grown equivalents.'"
            },
            {
              id: 21,
              stem: "Why is vertical farming currently unsuitable for feeding the world's poorest populations?",
              options: [
                { label: "A", text: "The technology is not yet available in developing countries." },
                { label: "B", text: "Staple crops cannot be grown economically indoors." },
                { label: "C", text: "The crops it produces are nutritionally insufficient." },
                { label: "D", text: "Transport costs prevent delivery to remote areas." },
              ],
              correct: "B",
              explanation: "Paragraph C: 'Staple crops such as rice, wheat, and maize… are currently uneconomical to grow indoors.'"
            },
            {
              id: 22,
              stem: "The passage suggests that vertical farming's water efficiency advantage is limited because",
              options: [
                { label: "A", text: "closed-loop systems frequently malfunction." },
                { label: "B", text: "most crops grown indoors do not require much water anyway." },
                { label: "C", text: "water savings are offset by energy consumption." },
                { label: "D", text: "field agriculture has become significantly more water-efficient." },
              ],
              correct: "B",
              explanation: "Paragraph D: crops suited to vertical farming 'are among the least water-intensive to grow conventionally, meaning that the absolute water savings may be modest.'"
            },
            {
              id: 23,
              stem: "According to the passage, which factor is most likely to improve vertical farming's long-term environmental case?",
              options: [
                { label: "A", text: "Advances in crop genetics alone" },
                { label: "B", text: "Greater consumer demand for locally grown food" },
                { label: "C", text: "The shift to renewable electricity generation" },
                { label: "D", text: "Reductions in the cost of LED lighting" },
              ],
              correct: "C",
              explanation: "Paragraph F: 'the case for vertical farming as an environmentally beneficial technology depends on the decarbonisation of electricity grids.'"
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "The Proximity Advantage of Urban Vertical Farms",
          summaryText:
            "One of vertical farming's clearest advantages is its ability to locate production close to consumers. This proximity means produce can reach buyers within hours, which extends {{24}} and cuts food waste. Globally, a large proportion of {{25}} is lost in transit. Placing farms near consumers also reduces reliance on energy-intensive {{26}} transport, lowering the associated carbon costs.",
          wordBank: ["shelf life", "fresh produce", "refrigerated", "growing cycles", "field crops", "automation"],
          questions: [
            { id: 24, blankId: 24, correct: "shelf life", explanation: "Paragraph E: 'dramatically extending shelf life and reducing food waste.'" },
            { id: 25, blankId: 25, correct: "fresh produce", explanation: "Paragraph E: 'between 30 and 40 percent of fresh produce is lost between farm and consumer.'" },
            { id: 26, blankId: 26, correct: "refrigerated", explanation: "Paragraph E: 'reduces dependency on long-distance refrigerated transport, which carries significant carbon costs.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "Sleep Science: Memory, Health, and the Cost of Deprivation",
      paragraphs: [
        {
          letter: "A",
          text: "For much of the twentieth century, sleep was regarded by science and society alike as a passive state — a necessary inconvenience that interrupted the more interesting business of waking life. This view has been comprehensively overturned. We now understand sleep to be an active, highly orchestrated process during which the brain performs critical maintenance, consolidation, and regulatory functions. Far from being wasted time, sleep is the period during which the events and information of the day are processed, selectively retained, and integrated into long-term memory — a process that cannot be replicated by any amount of additional waking effort.",
        },
        {
          letter: "B",
          text: "Sleep architecture — the structure of a typical night's sleep — consists of repeated cycles of approximately 90 minutes, each comprising distinct stages. Non-REM sleep is divided into three stages of increasing depth; the deepest of these, slow-wave sleep, is characterised by high-amplitude, low-frequency delta waves and is associated primarily with declarative memory consolidation — the retention of facts and episodic events. REM (rapid eye movement) sleep, characterised by near-paralysis of voluntary muscles and vivid dreaming, is associated with procedural memory, emotional regulation, and creative insight. The proportion of REM sleep increases across the night, which is why the final hours of an uninterrupted night are disproportionately important for cognitive function.",
        },
        {
          letter: "C",
          text: "Research led by Matthew Walker at the University of California, Berkeley, and others has demonstrated the extraordinary precision of the brain's memory consolidation process during sleep. Sleep spindles — bursts of neural oscillation observable on EEG recordings during Stage 2 non-REM sleep — have been identified as a key mechanism. These spindles appear to coordinate the transfer of recently encoded memories from the hippocampus, where they are stored temporarily, to the neocortex, where they become part of long-term storage. The number and density of sleep spindles in an individual correlates significantly with their performance on memory tasks the following day.",
        },
        {
          letter: "D",
          text: "The glymphatic system — a waste-clearance network unique to the brain — operates primarily during sleep, particularly during deep slow-wave sleep. During waking hours, the metabolic activity of neurons generates toxic by-products, including amyloid-beta and tau proteins, which are associated with the development of Alzheimer's disease. During sleep, the spaces between brain cells expand and cerebrospinal fluid flows through, flushing these waste products into the lymphatic system for elimination. Chronic sleep deprivation has been associated with elevated amyloid-beta accumulation in the brains of otherwise healthy adults, raising concern that habitually short sleep may be a modifiable risk factor for neurodegenerative disease.",
        },
        {
          letter: "E",
          text: "The consequences of sleep deprivation extend beyond cognitive impairment. A single night of fewer than six hours of sleep has been shown to reduce natural killer cell activity — a key component of immune defence — by approximately 70 percent. Studies tracking large populations over decades have associated chronic short sleep (less than six or seven hours per night) with elevated risk of cardiovascular disease, obesity, type 2 diabetes, and all-cause mortality. The mechanisms appear to involve disruption of hormonal regulation: sleep deprivation elevates cortisol, disrupts insulin sensitivity, and alters the balance of appetite-regulating hormones ghrelin and leptin in ways that promote overeating.",
        },
        {
          letter: "F",
          text: "Despite the scientific consensus on sleep's importance, modern societies systematically undervalue it. Artificial lighting, shift work, screen-based entertainment, long commutes, and cultural attitudes that equate short sleep with productivity and discipline have conspired to reduce average sleep duration across industrialised nations over the past century. Adolescents are particularly affected: school start times that require early rising conflict with the biological shift in sleep timing that occurs during puberty, resulting in a structural sleep deficit for many students during their most educationally critical years. A growing movement of sleep scientists and public health advocates has called for later school start times, workplace policies protecting sleep, and public education campaigns to reframe sleep not as laziness but as a biological necessity.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "Sleep was historically viewed as an active and productive mental state.", correct: "No", explanation: "Paragraph A: sleep was regarded as 'a passive state — a necessary inconvenience.' The active view is a modern understanding." },
            { id: 28, statement: "The final hours of sleep are particularly important for memory and cognition.", correct: "Yes", explanation: "Paragraph B: 'the final hours of an uninterrupted night are disproportionately important for cognitive function' due to increased REM sleep." },
            { id: 29, statement: "Sleep spindles occur during the deepest stage of non-REM sleep.", correct: "No", explanation: "Paragraph C: sleep spindles occur 'during Stage 2 non-REM sleep' — not the deepest stage (slow-wave/Stage 3)." },
            { id: 30, statement: "A link between chronic sleep deprivation and Alzheimer's disease has been definitively established.", correct: "Not Given", explanation: "Paragraph D identifies an association and describes it as a possible 'modifiable risk factor' but does not claim the link is definitively proven." },
            { id: 31, statement: "The writer believes cultural attitudes toward sleep need to change.", correct: "Yes", explanation: "Paragraph F advocates for 'public education campaigns to reframe sleep not as laziness but as a biological necessity,' indicating the writer supports cultural change." },
          ],
        },
        {
          type: "mc_multiple",
          questionRange: "Questions 32–34",
          instructions: "Choose TWO letters, A–E.",
          questions: [
            {
              id: 32,
              stem: "Which TWO functions of REM sleep are mentioned in the passage?",
              options: [
                { label: "A", text: "Consolidation of factual memories" },
                { label: "B", text: "Emotional regulation" },
                { label: "C", text: "Clearance of toxic proteins" },
                { label: "D", text: "Support for creative insight" },
                { label: "E", text: "Production of sleep spindles" },
              ],
              pickCount: 2,
              correct: ["B", "D"],
              explanation: "Paragraph B: REM sleep is 'associated with procedural memory, emotional regulation (B), and creative insight (D).'"
            },
            {
              id: 33,
              stem: "Which TWO effects of sleep deprivation on the body are described in the passage?",
              options: [
                { label: "A", text: "Reduced immune cell activity" },
                { label: "B", text: "Damage to hippocampal tissue" },
                { label: "C", text: "Altered levels of appetite hormones" },
                { label: "D", text: "Increased production of sleep spindles" },
                { label: "E", text: "Reduced cerebrospinal fluid production" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph E: sleep deprivation reduces 'natural killer cell activity' (A) and 'alters the balance of appetite-regulating hormones ghrelin and leptin' (C)."
            },
            {
              id: 34,
              stem: "Which TWO societal factors are identified in the passage as contributors to reduced sleep duration?",
              options: [
                { label: "A", text: "Increased rates of shift work" },
                { label: "B", text: "Rising levels of workplace stress" },
                { label: "C", text: "Longer daily commutes" },
                { label: "D", text: "Inadequate healthcare for sleep disorders" },
                { label: "E", text: "Cultural associations between short sleep and productivity" },
              ],
              pickCount: 2,
              correct: ["A", "E"],
              explanation: "Paragraph F explicitly lists 'shift work' (A) and 'cultural attitudes that equate short sleep with productivity and discipline' (E) as factors reducing average sleep."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "What type of brain waves characterise the deepest stage of non-REM sleep?", correct: "delta waves", explanation: "Paragraph B: slow-wave sleep 'is characterised by high-amplitude, low-frequency delta waves.'" },
            { id: 36, before: "Where in the brain are recently encoded memories stored temporarily before consolidation during sleep?", correct: "hippocampus", explanation: "Paragraph C: 'recently encoded memories from the hippocampus, where they are stored temporarily.'" },
            { id: 37, before: "What is the name of the brain's waste-clearance network that is most active during sleep?", correct: "glymphatic system", explanation: "Paragraph D: 'The glymphatic system — a waste-clearance network unique to the brain — operates primarily during sleep.'" },
            { id: 38, before: "Which two proteins associated with Alzheimer's disease accumulate in the brain during wakefulness?", correct: "amyloid-beta and tau", explanation: "Paragraph D: 'toxic by-products, including amyloid-beta and tau proteins, which are associated with the development of Alzheimer's disease.'" },
            { id: 39, before: "By approximately what percentage does one night of fewer than six hours' sleep reduce immune defence cell activity?", correct: "70 percent", explanation: "Paragraph E: 'A single night of fewer than six hours of sleep has been shown to reduce natural killer cell activity… by approximately 70 percent.'" },
            { id: 40, before: "What biological change during puberty causes school start times to be particularly harmful to adolescents?", correct: "shift in sleep timing", explanation: "Paragraph F: 'the biological shift in sleep timing that occurs during puberty' conflicts with early school start times." },
          ],
        },
      ],
    },
  ],
};
