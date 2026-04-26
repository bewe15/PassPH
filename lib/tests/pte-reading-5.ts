import type { PTETest } from "./types";

export const pteReading5: PTETest = {
  id: "pte-reading-5",
  exam: "PTE",
  title: "PTE Academic Reading — Test 5",
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
        "The placebo effect — the measurable, sometimes dramatic improvement in a patient's condition that results not from any active pharmacological substance but from the patient's belief that they are receiving treatment — has long fascinated medical researchers. Early dismissals of the phenomenon as mere suggestion or wishful thinking have given way to a sophisticated understanding of its neurobiological mechanisms. Brain imaging studies have shown that placebo analgesia, for instance, is associated with the release of endogenous opioids in specific neural circuits, demonstrating that the effect is not simply psychological in a dismissive sense but has genuine physiological correlates. Of particular interest is the discovery of open-label placebos: trials in which patients are explicitly informed that they are taking a sugar pill yet still report significant symptom relief. This finding challenges the assumption that deception is a necessary component of the placebo response and has opened new avenues for ethical clinical application. Researchers continue to investigate how factors such as the ritual of taking medication, the patient-clinician relationship, and conditioning from prior treatment experiences shape the magnitude of the placebo response.",
      stem: "What does the discovery of open-label placebos challenge?",
      options: [
        { label: "A", text: "The view that placebos have any genuine physiological effects." },
        { label: "B", text: "The assumption that patients must be deceived for the placebo effect to occur." },
        { label: "C", text: "The role of endogenous opioids in pain relief." },
        { label: "D", text: "The importance of the patient-clinician relationship in treatment." },
      ],
      correct: "B",
      explanation:
        "The passage states that open-label placebos 'challenges the assumption that deception is a necessary component of the placebo response,' directly supporting option B.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Tropical deforestation is occurring at an alarming rate, with millions of hectares of forest cleared each year primarily for agricultural expansion, cattle ranching, and commercial logging. The consequences extend far beyond the immediate loss of biodiversity. Forests play a critical role in regulating local and regional climates through a process known as evapotranspiration, whereby trees release water vapour that contributes to cloud formation and rainfall patterns. When large areas of forest are cleared, this moisture recycling is disrupted, leading to reduced precipitation over both the deforested area and distant regions that depend on forest-derived rainfall. Deforestation also releases vast quantities of stored carbon into the atmosphere, making it a significant contributor to global greenhouse gas concentrations. Indigenous communities whose livelihoods, cultural practices, and identities are inseparably linked to forest environments are among the most directly and severely affected. Despite well-funded international initiatives such as REDD+ — which provides financial incentives to developing nations to reduce deforestation — enforcement remains inconsistent, and illegal clearing continues in many of the world's most ecologically sensitive forests.",
      stem: "According to the passage, which TWO consequences of deforestation are identified?",
      options: [
        { label: "A", text: "Disruption to regional rainfall patterns through reduced evapotranspiration." },
        { label: "B", text: "A decrease in global demand for agricultural products." },
        { label: "C", text: "The release of stored carbon contributing to greenhouse gas concentrations." },
        { label: "D", text: "Strengthened enforcement of international forest protection agreements." },
        { label: "E", text: "Increased access to clean water for indigenous communities." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage explicitly states that forest clearing disrupts moisture recycling, reducing precipitation (supporting A), and that deforestation releases stored carbon contributing to greenhouse gas concentrations (supporting C). Options B, D, and E are either contradicted or not mentioned.",
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
          text: "Rosalind Franklin's X-ray diffraction images, particularly the famous Photograph 51, provided crucial quantitative data about the dimensions and helical nature of the DNA molecule.",
        },
        {
          id: "s2",
          text: "In 1953, James Watson and Francis Crick published a landmark paper in the journal Nature proposing the double-helix model of deoxyribonucleic acid, fundamentally transforming the biological sciences.",
        },
        {
          id: "s3",
          text: "Building on Franklin's data, as well as earlier work by Erwin Chargaff showing that adenine pairs with thymine and guanine with cytosine, Watson and Crick were able to construct a physically plausible model of the double helix.",
        },
        {
          id: "s4",
          text: "Prior to 1953, scientists understood that DNA was the carrier of genetic information, but the mechanism by which it could be copied and its sequence preserved across cell divisions remained deeply puzzling.",
        },
        {
          id: "s5",
          text: "The double-helix model immediately suggested a copying mechanism for genetic information, as each strand could serve as a template for a complementary strand, explaining how hereditary information is faithfully transmitted.",
        },
      ],
      correctOrder: ["s4", "s1", "s3", "s2", "s5"],
      reorderExplanation:
        "The sequence begins with the pre-1953 puzzle about DNA (s4), then introduces Franklin's X-ray data (s1), followed by Watson and Crick building on that data and Chargaff's rules (s3), then the publication of the double-helix model (s2), and finally its immediate implication for genetic copying (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "In economics, the law of supply and {{1}} describes the relationship between the price of a good and the quantities that producers are willing to supply and consumers are willing to purchase. At its core, the law states that, all else being equal, as the price of a good rises, the quantity {{2}} by consumers falls, while the quantity supplied by producers increases. The point at which the quantity demanded equals the quantity supplied is known as the {{3}} price, and the corresponding quantity is the equilibrium quantity. When a market is not in equilibrium — for example, when a price is held artificially below the market-clearing level — a {{4}} occurs, meaning that demand exceeds supply. Conversely, if a price is set above the equilibrium, a surplus arises. Markets in which prices are free to adjust respond to shortages and surpluses through price {{5}}, which shifts quantities until a new equilibrium is reached.",
      wordBank: [
        "demand",
        "demanded",
        "equilibrium",
        "shortage",
        "movements",
        "adjustments",
        "supplied",
        "surplus",
      ],
      blanks: [
        {
          id: 1,
          correct: "demand",
          explanation:
            "The law of 'supply and demand' is the fundamental economic principle being described — the two terms are a fixed paired phrase.",
        },
        {
          id: 2,
          correct: "demanded",
          explanation:
            "'Demanded' is the correct past-participle adjective: 'the quantity demanded by consumers' is standard economics terminology for the amount consumers wish to buy.",
        },
        {
          id: 3,
          correct: "equilibrium",
          explanation:
            "The price at which quantity demanded equals quantity supplied is the 'equilibrium' price — the standard term in economics.",
        },
        {
          id: 4,
          correct: "shortage",
          explanation:
            "When demand exceeds supply (e.g., price held below market-clearing level), a 'shortage' occurs — the market lacks sufficient supply to meet demand.",
        },
        {
          id: 5,
          correct: "adjustments",
          explanation:
            "Markets respond through price 'adjustments' — prices move up or down to eliminate shortages and surpluses and restore equilibrium.",
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
        "Ocean plastic pollution has reached a {{1}} scale, with an estimated eight million metric tonnes of plastic entering the world's oceans every year. Much of this waste originates from inadequate waste management systems in rapidly {{2}} economies, where rising consumer plastic use has outpaced the development of collection and recycling infrastructure. Once at sea, plastic does not biodegrade but instead breaks into progressively smaller fragments known as microplastics, which are now {{3}} throughout the marine food chain and have been detected in the tissues of fish, seabirds, and marine mammals. Proposed solutions to the ocean plastic crisis range from {{4}} interventions — such as deploying ocean-cleaning barriers to collect floating debris — to systemic approaches that target the problem at its source by reducing single-use plastic production and improving waste management globally. Experts widely agree that clean-up technologies alone are insufficient and that meaningful progress requires international {{5}} to harmonise regulations, share technology, and fund infrastructure improvements in regions most responsible for ocean plastic inputs. Consumer behaviour change, promoted through education and {{6}} measures such as plastic bag charges and packaging taxes, is also considered an essential component of any comprehensive strategy.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["crisis", "global", "manageable", "localised"],
          correct: "global",
          explanation:
            "'Global scale' is the correct collocation — the sentence describes the worldwide extent of ocean plastic pollution.",
        },
        {
          id: 2,
          options: ["urbanising", "declining", "stabilising", "industrialised"],
          correct: "urbanising",
          explanation:
            "'Rapidly urbanising economies' correctly describes nations where growing urban populations and rising consumption are outpacing waste infrastructure — this is the standard framing in environmental policy literature.",
        },
        {
          id: 3,
          options: ["distributed", "absent", "reducing", "contained"],
          correct: "distributed",
          explanation:
            "Microplastics are 'distributed' (spread widely) throughout the marine food chain — they have permeated the entire system.",
        },
        {
          id: 4,
          options: ["reactive", "cultural", "political", "economic"],
          correct: "reactive",
          explanation:
            "'Reactive interventions' (such as ocean-cleaning barriers deployed after plastic has entered the sea) contrast with systemic, preventative approaches — the passage sets up this opposition.",
        },
        {
          id: 5,
          options: ["cooperation", "competition", "litigation", "disagreement"],
          correct: "cooperation",
          explanation:
            "International 'cooperation' is needed to harmonise regulations and share technology — collective action across nations is what the sentence describes.",
        },
        {
          id: 6,
          options: ["fiscal", "voluntary", "cultural", "scientific"],
          correct: "fiscal",
          explanation:
            "'Fiscal measures' such as plastic bag charges and packaging taxes are financial policy instruments — the adjective 'fiscal' correctly classifies them.",
        },
      ],
    },
  ],
};
