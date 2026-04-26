import type { PTETest } from "./types";

export const pteReading10: PTETest = {
  id: "pte-reading-10",
  exam: "PTE",
  title: "PTE Academic Reading — Test 10",
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
        "The history of modern medicine is often traced to the mid-nineteenth century, when advances in chemistry, physics, and biology converged to produce a more rigorous, science-based approach to understanding and treating disease. Prior to this period, medical practice was dominated by theories such as humorism — the belief that illness resulted from imbalances in four bodily fluids — which had persisted largely unchanged since ancient Greece. The development of germ theory by Louis Pasteur and Robert Koch in the 1860s and 1870s provided the first systematic explanation for infectious disease, demonstrating that specific microorganisms were responsible for specific illnesses. This insight underpinned the development of antiseptic surgical techniques by Joseph Lister, whose introduction of carbolic acid as a surgical disinfectant dramatically reduced post-operative mortality rates. The subsequent discovery of antibiotics — most notably Alexander Fleming's identification of penicillin in 1928 — transformed the treatment of bacterial infections that had previously been frequently fatal.",
      stem: "According to the passage, what was the significance of germ theory?",
      options: [
        { label: "A", text: "It confirmed the ancient theory that illness was caused by bodily fluid imbalances." },
        { label: "B", text: "It provided the first systematic link between specific microorganisms and specific diseases." },
        { label: "C", text: "It enabled Alexander Fleming to discover penicillin in the 1860s." },
        { label: "D", text: "It replaced antiseptic surgical techniques as the primary method of preventing infection." },
      ],
      correct: "B",
      explanation:
        "The passage states that germ theory provided 'the first systematic explanation for infectious disease, demonstrating that specific microorganisms were responsible for specific illnesses', matching option B exactly.",
    },

    // ── TASK 2: Multiple Choice Multiple Answers ──────────────────────────────
    {
      id: 2,
      type: "mc_multiple",
      taskLabel: "Task 2 of 5 — Multiple Choice, Multiple Answers",
      instructions:
        "Read the text and answer the multiple-choice question by selecting all the correct responses. More than one response is correct.",
      passage:
        "Deforestation — the large-scale clearance of forested land — is driven by a complex interplay of economic, demographic, and political factors. Commercial agriculture is the leading cause globally, as forests are cleared for cattle ranching and the cultivation of commodity crops such as soya, palm oil, and sugarcane, which are in high demand in international markets. Illegal and unsustainable logging is another major driver, particularly in tropical regions where governance is weak and enforcement of forest protection laws is inconsistent. Population growth and rural poverty also play a role: subsistence farmers, lacking access to productive land or alternative livelihoods, often clear forest margins to expand cultivation. The consequences of deforestation extend beyond biodiversity loss: forests store vast quantities of carbon, and their clearance releases this carbon into the atmosphere, contributing significantly to global greenhouse gas emissions. Additionally, deforestation disrupts regional hydrological cycles, as forests regulate water flow and influence rainfall patterns.",
      stem: "According to the passage, which TWO consequences of deforestation are identified?",
      options: [
        { label: "A", text: "A significant contribution to global greenhouse gas emissions." },
        { label: "B", text: "An increase in the productivity of agricultural land." },
        { label: "C", text: "Disruption of regional water cycles and rainfall patterns." },
        { label: "D", text: "A reduction in international demand for palm oil and soya." },
        { label: "E", text: "The strengthening of forest protection governance in tropical areas." },
      ],
      pickCount: 2,
      correct: ["A", "C"],
      explanation:
        "The passage explicitly states that deforestation releases carbon 'contributing significantly to global greenhouse gas emissions' (A) and 'disrupts regional hydrological cycles… forests regulate water flow and influence rainfall patterns' (C). B, D, and E are not consequences mentioned.",
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
          text: "The roots of industrial farming can be traced to the mechanisation of agriculture in the early twentieth century, when steam-powered and later petrol-driven machinery began replacing animal and human labour for ploughing, planting, and harvesting.",
        },
        {
          id: "s2",
          text: "A pivotal transformation occurred after the Second World War, when the Haber-Bosch process for synthesising nitrogen fertiliser from atmospheric nitrogen — developed in Germany in the early 1900s — was adapted for large-scale agricultural use, dramatically increasing crop yields.",
        },
        {
          id: "s3",
          text: "The Green Revolution of the 1960s and 1970s extended these productivity gains to developing nations through the introduction of high-yielding crop varieties, irrigation infrastructure, and chemical inputs, averting famines that had been widely predicted.",
        },
        {
          id: "s4",
          text: "Livestock farming similarly intensified over this period, with animals increasingly raised in confined indoor facilities designed to maximise growth rates and minimise feed conversion ratios through selective breeding and controlled feeding regimes.",
        },
        {
          id: "s5",
          text: "Today, industrial agriculture feeds more than eight billion people but faces mounting criticism for its contribution to greenhouse gas emissions, soil degradation, biodiversity loss, and antibiotic resistance from the routine use of antimicrobials in livestock.",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      reorderExplanation:
        "The logical order follows the development chronologically: early mechanisation (s1) → post-war fertiliser adoption (s2) → the Green Revolution extending gains globally (s3) → intensification of livestock farming (s4) → the contemporary situation and criticisms (s5).",
    },

    // ── TASK 4: Reading: Fill in the Blanks ──────────────────────────────────
    {
      id: 4,
      type: "rfib",
      taskLabel: "Task 4 of 5 — Reading: Fill in the Blanks",
      instructions:
        "In the text below some words are missing. Drag words from the box to the appropriate place in the text. Not all words will be used.",
      rfibText:
        "Chemical bonding occurs when atoms interact in ways that result in a more {{1}} arrangement of electrons than exists in isolated atoms. In ionic bonding, one atom transfers one or more electrons to another, creating oppositely {{2}} ions that attract each other through electrostatic force; common table salt, sodium chloride, is a classic example. Covalent bonding, by contrast, involves two atoms {{3}} a pair of electrons, allowing each to achieve a full outer electron shell; this type of bonding predominates in organic molecules and gases. The strength of a covalent bond is related to the degree of {{4}} between the bonding atoms — atoms of similar electronegativity share electrons equally in a nonpolar covalent bond, whereas a significant electronegativity difference produces a polar bond in which electron density is unevenly {{5}}. Metallic bonding, found in solid metals, involves a 'sea' of delocalised electrons moving freely among positively charged metal ions, which explains the high electrical conductivity characteristic of metallic elements.",
      wordBank: [
        "stable",
        "charged",
        "sharing",
        "electronegativity",
        "distributed",
        "bonded",
        "repelled",
        "neutral",
      ],
      blanks: [
        {
          id: 1,
          correct: "stable",
          explanation:
            "Chemical bonding results in a more 'stable' arrangement — atoms bond to achieve lower energy states, which is chemically more stable.",
        },
        {
          id: 2,
          correct: "charged",
          explanation:
            "Electron transfer creates oppositely 'charged' ions (one positive cation, one negative anion) that attract each other electrostatically.",
        },
        {
          id: 3,
          correct: "sharing",
          explanation:
            "Covalent bonding involves two atoms 'sharing' electrons — this is the defining characteristic that distinguishes it from ionic bonding.",
        },
        {
          id: 4,
          correct: "electronegativity",
          explanation:
            "'Electronegativity' is the measure of an atom's tendency to attract electrons — bond polarity depends directly on the difference in electronegativity between bonded atoms.",
        },
        {
          id: 5,
          correct: "distributed",
          explanation:
            "In a polar bond, electron density is unevenly 'distributed' — the more electronegative atom holds a greater share of the shared electrons.",
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
        "Artificial intelligence is increasingly being {{1}} across a wide range of workplace settings, from automating routine data-processing tasks to augmenting complex decision-making in fields such as medicine, law, and finance. Proponents argue that AI will enhance human {{2}} by handling repetitive, time-consuming tasks, freeing workers to focus on higher-value activities that require creativity, empathy, and nuanced judgement. Sceptics, however, warn that automation may {{3}} certain categories of employment entirely, particularly in sectors involving predictable, codifiable tasks such as data entry, basic customer service, and simple logistics coordination. The net effect on employment levels remains hotly {{4}} among economists: some models predict that job displacement will be offset by the creation of new roles in AI development, maintenance, and oversight, while others foresee structural unemployment for workers whose skills are not easily {{5}} to new tasks. Governments and educational institutions are under growing pressure to {{6}} training programmes so that the workforce can adapt to a rapidly changing labour market.",
      rwfibBlanks: [
        {
          id: 1,
          options: ["deployed", "rejected", "ignored", "restricted"],
          correct: "deployed",
          explanation:
            "'Deployed' means put into active use — AI is being deployed (implemented and used) across workplace settings.",
        },
        {
          id: 2,
          options: ["productivity", "inequality", "dependency", "turnover"],
          correct: "productivity",
          explanation:
            "AI enhancing human 'productivity' — output and efficiency — fits the argument that it frees workers for higher-value activities.",
        },
        {
          id: 3,
          options: ["displace", "create", "protect", "elevate"],
          correct: "displace",
          explanation:
            "'Displace' means to remove or replace — automation displacing categories of employment is the concern raised by sceptics.",
        },
        {
          id: 4,
          options: ["debated", "settled", "ignored", "confirmed"],
          correct: "debated",
          explanation:
            "The net employment effect is 'hotly debated' — strongly disputed — among economists, as the surrounding context about conflicting models confirms.",
        },
        {
          id: 5,
          options: ["transferable", "redundant", "specialised", "outdated"],
          correct: "transferable",
          explanation:
            "Skills that are not easily 'transferable' to new tasks are those that cannot be readily applied in different contexts — the key concern for displaced workers.",
        },
        {
          id: 6,
          options: ["reform", "abolish", "reduce", "privatise"],
          correct: "reform",
          explanation:
            "Governments are under pressure to 'reform' training programmes — update and restructure them — so the workforce can adapt to change.",
        },
      ],
    },
  ],
};
