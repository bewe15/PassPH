import type { PTETest } from "./types";

export const pteReading12: PTETest = {
  id: "pte-reading-12",
  exam: "PTE",
  title: "PTE Academic Reading — Test 12",
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
        "Archaeological dating methods fall into two broad categories: relative dating and absolute dating. Relative dating establishes the chronological sequence of finds without assigning specific calendar years, relying on principles such as stratigraphy — the law that lower strata are generally older than those above — and typology, which orders artefacts by stylistic change over time. Absolute dating, by contrast, yields numerical ages. Radiocarbon dating exploits the predictable decay of carbon-14 in organic material and is reliable for remains up to approximately 50,000 years old. For older sites, potassium-argon dating measures the decay of radioactive potassium into argon in volcanic rock, extending the chronological reach to billions of years. Dendrochronology — the analysis of tree-ring patterns — offers exceptional precision for wooden artefacts and structural timbers, often resolving dates to the exact year. No single method is universally applicable; archaeologists routinely combine techniques to cross-check results and construct the most reliable possible chronology for a site.",
      stem: "According to the passage, what is the primary limitation of radiocarbon dating?",
      options: [
        { label: "A", text: "It can only be applied to volcanic rock samples." },
        { label: "B", text: "It is restricted to organic materials no older than around 50,000 years." },
        { label: "C", text: "It relies on stylistic changes in artefacts over time." },
        { label: "D", text: "It cannot produce results precise enough for scientific use." },
      ],
      correct: "B",
      explanation:
        "The passage states that radiocarbon dating 'is reliable for remains up to approximately 50,000 years old', making option B the correct statement of its limitation.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "The human gut microbiome — the community of trillions of bacteria, fungi, viruses, and other microorganisms inhabiting the digestive tract — has emerged as a major focus of biomedical research. Scientists now recognise that these microorganisms are not passive inhabitants but active participants in human physiology. They assist in the digestion of complex carbohydrates that human enzymes cannot break down, synthesise certain vitamins including several B vitamins and vitamin K, and play a critical role in training and regulating the immune system. Disruption of the microbiome, a condition termed dysbiosis, has been associated with a widening range of conditions including inflammatory bowel disease, obesity, type 2 diabetes, and even mood disorders. The gut-brain axis — a bidirectional communication network linking the enteric nervous system of the gut with the central nervous system — appears to be partly mediated by microbial metabolites. Diet is the most powerful modifiable influence on microbiome composition; high-fibre diets rich in diverse plant foods consistently promote microbial diversity, which is broadly associated with better health outcomes.",
      stem: "According to the passage, which TWO statements about the gut microbiome are correct?",
      options: [
        { label: "A", text: "Gut microorganisms help the body digest certain carbohydrates that human enzymes cannot process." },
        { label: "B", text: "Dysbiosis has been linked to conditions including inflammatory bowel disease and obesity." },
        { label: "C", text: "The gut microbiome has no influence on mental health." },
        { label: "D", text: "Consuming antibiotics is the best way to improve microbiome diversity." },
        { label: "E", text: "High-fibre diets are the only factor that affects microbiome composition." },
      ],
      pickCount: 2,
      correct: ["A", "B"],
      explanation:
        "Option A is supported by 'They assist in the digestion of complex carbohydrates that human enzymes cannot break down.' Option B is supported by the passage's list of dysbiosis-associated conditions. C is contradicted by the gut-brain axis discussion; D and E are not stated.",
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
          text: "The systematic study of climate dates to the nineteenth century, when scientists first began to suspect that atmospheric gases could influence global temperatures.",
        },
        {
          id: "s2",
          text: "In 1859, physicist John Tyndall demonstrated experimentally that carbon dioxide and water vapour absorb infrared radiation, providing a physical basis for what would later be called the greenhouse effect.",
        },
        {
          id: "s3",
          text: "Swedish chemist Svante Arrhenius extended this work in 1896, calculating that a doubling of atmospheric CO₂ could raise global average temperatures by roughly five degrees Celsius.",
        },
        {
          id: "s4",
          text: "For much of the early twentieth century, these insights remained largely academic, as most scientists believed the oceans would absorb any excess carbon dioxide produced by industrialisation.",
        },
        {
          id: "s5",
          text: "This assumption was overturned by the work of Roger Revelle and Hans Suess in the 1950s, who showed that the oceans could not absorb CO₂ fast enough to prevent atmospheric accumulation, setting the stage for modern climate science.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The passage follows a chronological narrative: the nineteenth-century origin of climate study (s1) → Tyndall's 1859 laboratory proof (s2) → Arrhenius's 1896 calculations (s3) → early-twentieth-century academic neglect due to the ocean-absorption assumption (s4) → Revelle and Suess overturning that assumption in the 1950s (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "A food web is a complex network of feeding relationships within an {{1}}, illustrating how energy and nutrients flow from one organism to another. At the base of most food webs are primary producers — plants and algae that convert solar energy into organic matter through {{2}}. These organisms are consumed by herbivores, known as primary consumers, which are in turn {{3}} by carnivores at higher trophic levels. Apex predators occupy the highest positions in the food web and, because they are not regularly {{4}} by other species, play a disproportionately important role in regulating population sizes across the entire system — a phenomenon known as a trophic {{5}}.",
      wordBank: [
        "ecosystem",
        "photosynthesis",
        "predated",
        "cascade",
        "consumed",
        "habitat",
        "respiration",
        "decomposed",
      ],
      blanks: [
        {
          id: 1,
          correct: "ecosystem",
          explanation:
            "'Ecosystem' is the correct term for the community of living organisms and their physical environment — the context for a food web.",
        },
        {
          id: 2,
          correct: "photosynthesis",
          explanation:
            "Primary producers convert solar energy into organic matter through 'photosynthesis', not respiration (which releases energy).",
        },
        {
          id: 3,
          correct: "consumed",
          explanation:
            "Herbivores are 'consumed' by carnivores — eaten by them. 'Predated' is less standard here; 'consumed' fits the parallel structure with 'are consumed by herbivores'.",
        },
        {
          id: 4,
          correct: "predated",
          explanation:
            "Apex predators are not regularly 'predated' (hunted) by other species — this distinguishes them from lower trophic levels.",
        },
        {
          id: 5,
          correct: "cascade",
          explanation:
            "A 'trophic cascade' is the established ecological term for the chain of effects that apex predators have on lower trophic levels.",
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
        "The digital economy has fundamentally {{1}} the nature of international trade, enabling businesses of all sizes to reach customers across borders with a speed and ease that was unimaginable a generation ago. E-commerce platforms have dramatically {{2}} the barriers to entry for small and medium-sized enterprises, which previously lacked the resources to establish a physical presence in foreign markets. Cross-border data flows now {{3}} the exchange of goods and services in ways that defy traditional customs frameworks, as digital products such as software, music, and financial services are delivered {{4}} rather than through physical shipments. Governments and international bodies face the challenge of updating trade rules that were designed for a world of tangible goods to {{5}} the realities of a data-driven economy. Failure to do so risks creating regulatory {{6}} that disadvantage domestic firms competing against global digital platforms operating under fewer constraints.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["transformed", "preserved", "ignored", "reduced"],
          correct: "transformed",
          explanation:
            "'Transformed' means fundamentally changed — the digital economy has radically altered trade. The other options do not fit the context of fundamental change.",
        },
        {
          id: 2,
          options: ["lowered", "raised", "maintained", "assessed"],
          correct: "lowered",
          explanation:
            "E-commerce has 'lowered' barriers to entry, making it easier for small firms to access foreign markets. 'Raised' is the opposite of the intended meaning.",
        },
        {
          id: 3,
          options: ["underpin", "undermine", "restrict", "record"],
          correct: "underpin",
          explanation:
            "Data flows 'underpin' (support and enable) the exchange of goods and services — they form the foundation of digital trade.",
        },
        {
          id: 4,
          options: ["electronically", "physically", "reluctantly", "annually"],
          correct: "electronically",
          explanation:
            "Digital products are delivered 'electronically' — directly over the internet — as opposed to through physical shipments.",
        },
        {
          id: 5,
          options: ["accommodate", "eliminate", "ignore", "reproduce"],
          correct: "accommodate",
          explanation:
            "Trade rules need to be updated to 'accommodate' (make room for and address) the realities of the digital economy.",
        },
        {
          id: 6,
          options: ["fragmentation", "coherence", "transparency", "stability"],
          correct: "fragmentation",
          explanation:
            "Regulatory 'fragmentation' refers to an inconsistent, piecemeal regulatory environment that disadvantages some players — the logical risk described in the sentence.",
        },
      ],
    },
  ],
};
