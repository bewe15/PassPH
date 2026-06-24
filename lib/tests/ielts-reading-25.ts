import type { IELTSTest } from "./types";

export const ieltsReading25: IELTSTest = {
  id: "ielts-reading-25",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 25",
  totalSeconds: 3600,
  passages: [
    {
      number: 1,
      title: "Sleep Science and Memory Consolidation",
      paragraphs: [
        {
          letter: "A",
          text: "Sleep — the periodic state of reduced consciousness and physical activity that occupies roughly a third of a human lifespan — was long regarded as a passive state of neural inactivity, a temporary suspension of the brain's work. Research over the past four decades has comprehensively overturned this view. The sleeping brain is highly active, cycling through distinct stages of non-rapid eye movement (NREM) and rapid eye movement (REM) sleep in approximately 90-minute cycles, each stage associated with characteristic patterns of neural activity, brain wave frequency, and neuromodulator concentrations. Far from being wasted time, sleep performs a diverse array of restorative and regulatory functions critical to physical health, cognitive performance, emotional regulation, and immune function.",
        },
        {
          letter: "B",
          text: "The role of sleep in memory consolidation — the process by which newly acquired memories are stabilised and integrated into long-term memory stores — is among the most intensively studied functions of sleep. The hippocampal-neocortical dialogue theory proposes that during NREM sleep, particularly slow-wave sleep (SWS), the hippocampus — which serves as a temporary buffer for newly acquired episodic memories — replays recently encoded experiences and transfers them to the neocortex for long-term storage. This transfer is thought to be coordinated by the temporal coupling of three characteristic NREM sleep oscillations: cortical slow oscillations (0.5–1 Hz), thalamic sleep spindles (12–15 Hz), and hippocampal sharp-wave ripples. Disruption of these oscillations impairs memory consolidation in both animal models and human experimental studies.",
        },
        {
          letter: "C",
          text: "Different stages of sleep appear to preferentially support different types of memory. Declarative memory — explicit memory for facts and events — is particularly dependent on SWS and the hippocampal replay mechanism. Procedural memory — implicit memory for motor skills and perceptual learning — shows the strongest enhancement following REM sleep and the light NREM stages associated with sleep spindles. The relationship between REM sleep and emotional memory processing is of particular interest: REM sleep is characterised by elevated acetylcholine and suppressed noradrenaline concentrations, conditions that may allow the emotional valence of memories to be processed separately from their cognitive content — the 'sleep to forget, sleep to remember' hypothesis of REM sleep's role in emotional memory.",
        },
        {
          letter: "D",
          text: "The glymphatic system — a recently discovered brain-wide network of fluid-filled channels surrounding cerebral blood vessels — provides a compelling mechanistic explanation for the restorative effects of sleep on brain health. During sleep, particularly SWS, the activity of glymphatic flow is dramatically increased relative to wakefulness, with cerebrospinal fluid flowing through the brain's interstitial spaces and removing metabolic waste products including amyloid-beta and tau protein — the proteins whose abnormal accumulation is characteristic of Alzheimer's disease. This discovery — made primarily through the work of Maiken Nedergaard and her colleagues at the University of Rochester — suggests that chronic sleep deprivation may directly accelerate the accumulation of neurotoxic proteins, providing a plausible biological mechanism linking poor sleep to increased dementia risk.",
        },
        {
          letter: "E",
          text: "The sleep requirements of humans change substantially across the lifespan. Newborn infants sleep for 14–17 hours per day, with a large proportion of this time spent in REM sleep, which is thought to play a crucial role in the rapid synaptic development of the infant brain. Total sleep time declines across childhood and adolescence, and the timing of sleep — governed by the interaction of the circadian clock and homeostatic sleep pressure — shifts substantially later during puberty, leading to a mismatch between the biological sleep timing of teenagers and the early start times of most secondary schools. Adult sleep requirements typically range from 7–9 hours per night for optimal function, though substantial individual variation exists and is partly heritable.",
        },
        {
          letter: "F",
          text: "Sleep deprivation — whether acute (a single night of poor sleep) or chronic (consistently insufficient sleep over weeks or months) — has measurable impacts on a wide range of cognitive and physiological functions. Experimental studies of acute sleep deprivation show significant impairment of attention, working memory, decision-making, and emotional regulation, with subjective sleepiness often underestimating actual performance deficits. Chronic sleep restriction to six hours per night for two weeks produces cognitive deficits equivalent to two consecutive nights of total sleep deprivation, yet subjects typically report feeling only moderately sleepy, suggesting that chronic sleep restriction impairs the ability to accurately assess one's own level of impairment. Epidemiological data consistently associate short sleep duration with elevated risks of obesity, type 2 diabetes, cardiovascular disease, and all-cause mortality.",
        },
        {
          letter: "G",
          text: "Modern society creates multiple barriers to adequate sleep, including artificial lighting that suppresses the nocturnal release of melatonin — the hormone that signals darkness and promotes sleep onset — and the proliferation of electronic devices that both emit blue-spectrum light and provide engaging content that competes with sleep. Shift work — affecting approximately 15–20 percent of workers in industrialised countries — forces workers to sleep at times that conflict with their circadian rhythms, impairing both the quantity and quality of sleep and conferring elevated risks of metabolic and cardiovascular disease. Public health campaigns advocating for sleep hygiene practices — consistent sleep-wake schedules, avoidance of screens before bed, and cool dark sleeping environments — represent one strategy for addressing the widespread problem of insufficient sleep at the population level.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i", text: "How different sleep stages support different categories of memory" },
            { label: "ii", text: "The process by which new memories are moved to long-term storage during sleep" },
            { label: "iii", text: "Social and technological factors disrupting sleep in modern life" },
            { label: "iv", text: "How sleep clears harmful proteins from the brain" },
            { label: "v", text: "How sleep needs change from birth to adulthood" },
            { label: "vi", text: "The cognitive and health consequences of insufficient sleep" },
            { label: "vii", text: "Introduction: the active role of sleep in brain function" },
            { label: "viii", text: "The use of medication to improve the quality of sleep in older adults" },
            { label: "ix", text: "Dreaming and its relationship to creative problem solving" },
          ],
          questions: [
            {
              id: 1,
              paragraph: "B",
              correct: "ii",
              explanation:
                "Paragraph B describes the hippocampal-neocortical dialogue theory — how sleep transfers new memories to long-term storage.",
            },
            {
              id: 2,
              paragraph: "C",
              correct: "i",
              explanation:
                "Paragraph C discusses how declarative memory depends on SWS and procedural memory on REM sleep — different stages supporting different memory types.",
            },
            {
              id: 3,
              paragraph: "D",
              correct: "iv",
              explanation:
                "Paragraph D discusses the glymphatic system and how increased cerebrospinal fluid flow during sleep removes amyloid-beta and tau protein.",
            },
            {
              id: 4,
              paragraph: "E",
              correct: "v",
              explanation:
                "Paragraph E describes how sleep requirements and timing change across the lifespan from infants to adults.",
            },
            {
              id: 5,
              paragraph: "F",
              correct: "vi",
              explanation:
                "Paragraph F covers the cognitive impairments and health risks — obesity, diabetes, cardiovascular disease — associated with sleep deprivation.",
            },
            {
              id: 6,
              paragraph: "G",
              correct: "iii",
              explanation:
                "Paragraph G discusses artificial lighting, electronic devices, and shift work as modern barriers to adequate sleep.",
            },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            {
              id: 7,
              statement:
                "Disruption of NREM sleep oscillations has been shown to impair memory consolidation in both animal models and human studies.",
              correct: "True",
              explanation:
                "Paragraph B: 'Disruption of these oscillations impairs memory consolidation in both animal models and human experimental studies.'",
            },
            {
              id: 8,
              statement:
                "Chronic sleep restriction to six hours per night produces cognitive deficits equivalent to two consecutive nights of total sleep deprivation.",
              correct: "True",
              explanation:
                "Paragraph F: 'Chronic sleep restriction to six hours per night for two weeks produces cognitive deficits equivalent to two consecutive nights of total sleep deprivation.'",
            },
            {
              id: 9,
              statement:
                "Melatonin release is suppressed by artificial lighting, which delays sleep onset.",
              correct: "True",
              explanation:
                "Paragraph G: 'artificial lighting that suppresses the nocturnal release of melatonin — the hormone that signals darkness and promotes sleep onset.'",
            },
            {
              id: 10,
              statement:
                "People who are chronically sleep-deprived tend to accurately recognise how impaired they are.",
              correct: "False",
              explanation:
                "Paragraph F: 'subjects typically report feeling only moderately sleepy, suggesting that chronic sleep restriction impairs the ability to accurately assess one's own level of impairment.'",
            },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            {
              id: 11,
              before:
                "The brain-wide network of fluid-filled channels surrounding cerebral blood vessels that clears waste products during sleep is called the ",
              after: " system.",
              wordLimit: 1,
              correct: "glymphatic",
              explanation:
                "Paragraph D: 'The glymphatic system — a recently discovered brain-wide network of fluid-filled channels surrounding cerebral blood vessels.'",
            },
            {
              id: 12,
              before:
                "The shift in preferred sleep timing that occurs during puberty creates a mismatch between teenagers' biological sleep patterns and the early ",
              after: " of most secondary schools.",
              wordLimit: 2,
              correct: "start times",
              explanation:
                "Paragraph E: 'a mismatch between the biological sleep timing of teenagers and the early start times of most secondary schools.'",
            },
            {
              id: 13,
              before:
                "Shift work affects approximately 15–20 percent of workers in industrialised countries and forces them to sleep at times that conflict with their ",
              after: ".",
              wordLimit: 2,
              correct: "circadian rhythms",
              explanation:
                "Paragraph G: 'Shift work… forces workers to sleep at times that conflict with their circadian rhythms.'",
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "The Ethics of Artificial Intelligence",
      paragraphs: [
        {
          letter: "A",
          text: "Artificial intelligence systems — software programs that learn from data to perform tasks including image recognition, natural language processing, decision-making, and prediction — are being deployed with increasing speed and scale across domains including healthcare, employment, criminal justice, financial services, and education. This rapid deployment has brought into sharp focus a set of ethical questions that were previously largely theoretical: how to ensure that AI systems are fair and do not perpetuate or amplify existing social biases; how to design systems that are transparent and interpretable to affected individuals; how to establish accountability when AI systems cause harm; how to protect privacy in systems that require vast quantities of personal data; and how to govern the development and deployment of AI at both national and international levels.",
        },
        {
          letter: "B",
          text: "Algorithmic bias — the systematic production of unfair outcomes for specific groups of people by AI systems trained on biased data or incorporating biased design choices — has emerged as one of the most documented and controversial concerns in AI ethics. A widely cited 2018 study by Joy Buolamwini and Timnit Gebru found that commercial facial recognition systems misclassified the gender of darker-skinned women at error rates up to 34 percentage points higher than for lighter-skinned men. COMPAS, a risk assessment tool used in some US jurisdictions to inform sentencing and bail decisions, was found by ProPublica in 2016 to assign falsely high risk scores to Black defendants at approximately twice the rate of White defendants. These examples highlight how AI systems trained on historical data can encode and amplify the historical inequities embedded in that data.",
        },
        {
          letter: "C",
          text: "Transparency and explainability are closely related but distinct concepts in AI ethics. Transparency refers to the degree to which the operation and design of an AI system — including its training data, algorithmic logic, and performance metrics — can be examined and understood by relevant parties. Explainability refers specifically to the capacity of an AI system to provide comprehensible reasons for individual decisions to the people affected by them. The European Union's General Data Protection Regulation (GDPR) establishes a right to explanation for automated decisions that significantly affect individuals, but the technical implementation of this right for complex machine learning models — in which predictions emerge from the interaction of thousands or millions of learned parameters — remains challenging and contested.",
        },
        {
          letter: "D",
          text: "The question of accountability — who bears responsibility when an AI system causes harm — is complicated by the distributed nature of AI development and deployment. Responsibility may be diffused across developers who built and trained the system, organisations that deployed it, regulators who failed to prevent harmful deployment, and end users who relied on AI recommendations. The 'many hands problem' in AI accountability describes this diffusion of responsibility across multiple actors, none of whom may individually feel responsible for harmful outcomes. Proposed solutions include requiring that AI systems deployed in high-stakes contexts meet minimum standards of safety and fairness demonstrated through independent auditing, and establishing regulatory bodies with the power to investigate AI harms and impose sanctions on developers and deployers.",
        },
        {
          letter: "E",
          text: "Privacy concerns in AI are multi-dimensional. AI systems typically require large quantities of personal data for training and operation, raising concerns about data collection, consent, security, and secondary use. Inference attacks — in which AI systems trained on aggregate data can be used to infer private information about individuals who contributed to the training set — represent a specific technical threat to privacy. Facial recognition systems deployed in public spaces enable mass surveillance without the knowledge or consent of the individuals observed, a capability that has been used by law enforcement and commercial actors in ways that many civil liberties advocates consider a fundamental violation of the right to move through public space anonymously. Several cities and jurisdictions have enacted temporary or permanent bans on the use of facial recognition by public authorities in response to these concerns.",
        },
        {
          letter: "F",
          text: "Governance of AI at the national and international level remains nascent and fragmented. The European Union's AI Act, provisionally agreed in 2023, establishes a risk-based regulatory framework that imposes the most stringent requirements — including requirements for human oversight, transparency, and robustness — on AI applications in high-risk domains including biometric identification, critical infrastructure, employment, and access to essential services. The United States has taken a softer approach centred on sector-specific guidance and voluntary commitments, though executive orders and legislative proposals have sought to establish stronger federal AI governance. At the international level, the absence of binding global AI governance frameworks has led to concerns about a race to the bottom among jurisdictions seeking to attract AI investment by offering lighter regulatory environments.",
        },
      ],
      sections: [
        {
          type: "match_info",
          questionRange: "Questions 14–18",
          instructions:
            "The reading passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F.",
          paragraphLetters: ["A", "B", "C", "D", "E", "F"],
          questions: [
            {
              id: 14,
              text: "A reference to a study that found commercial facial recognition systems were significantly less accurate for darker-skinned women",
              correct: "B",
              explanation:
                "Paragraph B: 'A widely cited 2018 study by Joy Buolamwini and Timnit Gebru found that commercial facial recognition systems misclassified the gender of darker-skinned women at error rates up to 34 percentage points higher.'",
            },
            {
              id: 15,
              text: "An explanation of why it is difficult to identify who is responsible when an AI system causes harm",
              correct: "D",
              explanation:
                "Paragraph D: 'Responsibility may be diffused across developers… organisations… regulators… and end users' — the 'many hands problem.'",
            },
            {
              id: 16,
              text: "A description of technical attacks that can reveal private information about individuals from AI-trained models",
              correct: "E",
              explanation:
                "Paragraph E: 'Inference attacks — in which AI systems trained on aggregate data can be used to infer private information about individuals.'",
            },
            {
              id: 17,
              text: "An overview of the wide range of domains where AI systems are currently being deployed",
              correct: "A",
              explanation:
                "Paragraph A: 'deployed with increasing speed and scale across domains including healthcare, employment, criminal justice, financial services, and education.'",
            },
            {
              id: 18,
              text: "A description of EU legislation establishing a risk-based framework for regulating AI in high-risk applications",
              correct: "F",
              explanation:
                "Paragraph F: 'The European Union's AI Act, provisionally agreed in 2023, establishes a risk-based regulatory framework.'",
            },
          ],
        },
        {
          type: "mc_single",
          questionRange: "Questions 19–22",
          instructions: "Choose the correct letter, A, B, C or D.",
          questions: [
            {
              id: 19,
              stem: "According to the passage, what did the ProPublica investigation of COMPAS find?",
              options: [
                { label: "A", text: "The tool was entirely accurate and unbiased in its predictions" },
                { label: "B", text: "Black defendants were assigned falsely high risk scores at approximately twice the rate of White defendants" },
                { label: "C", text: "The tool was designed deliberately to discriminate against Black defendants" },
                { label: "D", text: "Black defendants were assigned falsely low risk scores more often than White defendants" },
              ],
              correct: "B",
              explanation:
                "Paragraph B: 'COMPAS… was found by ProPublica in 2016 to assign falsely high risk scores to Black defendants at approximately twice the rate of White defendants.'",
            },
            {
              id: 20,
              stem: "What is the distinction the passage draws between 'transparency' and 'explainability' in AI?",
              options: [
                { label: "A", text: "Transparency is about data protection; explainability is about financial reporting" },
                { label: "B", text: "They are synonyms and the passage uses them interchangeably" },
                { label: "C", text: "Transparency refers to the system's operation being examinable; explainability refers specifically to providing comprehensible reasons for individual decisions" },
                { label: "D", text: "Transparency applies only to public-sector AI; explainability applies to commercial AI" },
              ],
              correct: "C",
              explanation:
                "Paragraph C: 'Transparency refers to the degree to which the operation and design… can be examined… Explainability refers specifically to the capacity… to provide comprehensible reasons for individual decisions.'",
            },
            {
              id: 21,
              stem: "What is the 'many hands problem' as described in the passage?",
              options: [
                { label: "A", text: "The difficulty of training AI systems that require large numbers of human labellers" },
                { label: "B", text: "The diffusion of responsibility across multiple actors when an AI system causes harm" },
                { label: "C", text: "The problem of too many competing regulatory frameworks across different countries" },
                { label: "D", text: "The difficulty of AI systems understanding human gestures and hand movements" },
              ],
              correct: "B",
              explanation:
                "Paragraph D: 'The 'many hands problem' in AI accountability describes this diffusion of responsibility across multiple actors, none of whom may individually feel responsible for harmful outcomes.'",
            },
            {
              id: 22,
              stem: "What concern does the passage raise about international AI governance?",
              options: [
                { label: "A", text: "That international treaties have made AI development too slow" },
                { label: "B", text: "That the absence of binding global frameworks may lead to a race to lighter regulation to attract investment" },
                { label: "C", text: "That the EU's AI Act is too strict and will be adopted globally" },
                { label: "D", text: "That AI development is concentrated in too few countries" },
              ],
              correct: "B",
              explanation:
                "Paragraph F: 'the absence of binding global AI governance frameworks has led to concerns about a race to the bottom among jurisdictions seeking to attract AI investment by offering lighter regulatory environments.'",
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 23–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Algorithmic Bias in AI Systems",
          summaryText:
            "Algorithmic bias occurs when AI systems systematically produce {{23}} outcomes for specific groups of people. This can happen when systems are trained on {{24}} data that reflects existing social inequities, causing those inequities to be encoded and amplified in the system's outputs. A notable example is the {{25}} risk assessment tool used in some US courts, which was found to assign falsely elevated scores to Black defendants more often than to White defendants. Another example from a 2018 study found that {{26}} systems showed much higher error rates for darker-skinned women than for lighter-skinned men.",
          questions: [
            {
              id: 23,
              blankId: 23,
              correct: "unfair",
              explanation:
                "Paragraph B: 'the systematic production of unfair outcomes for specific groups of people.'",
            },
            {
              id: 24,
              blankId: 24,
              correct: "biased",
              explanation:
                "Paragraph B: 'AI systems trained on biased data or incorporating biased design choices.'",
            },
            {
              id: 25,
              blankId: 25,
              correct: "COMPAS",
              explanation:
                "Paragraph B: 'COMPAS, a risk assessment tool used in some US jurisdictions to inform sentencing and bail decisions.'",
            },
            {
              id: 26,
              blankId: 26,
              correct: "facial recognition",
              explanation:
                "Paragraph B: 'commercial facial recognition systems misclassified the gender of darker-skinned women at error rates up to 34 percentage points higher.'",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Mangrove Ecosystems",
      paragraphs: [
        {
          letter: "A",
          text: "Mangroves are salt-tolerant trees and shrubs that form dense forests along the sheltered tropical and subtropical coastlines of the world, colonising the intertidal zone where land and sea meet. Covering an estimated 137,000 to 150,000 square kilometres globally across more than 120 countries, mangrove forests are among the most biologically productive and ecologically important coastal ecosystems on Earth. They are distributed primarily between the tropics of Cancer and Capricorn, with the highest diversity in the 'mangrove triangle' of Southeast Asia, which is home to the greatest number of mangrove species of any region. Despite covering a relatively small total area, mangroves provide ecosystem services of disproportionate global significance in terms of biodiversity support, coastal protection, carbon sequestration, and fisheries production.",
        },
        {
          letter: "B",
          text: "The structural and physiological adaptations that allow mangroves to thrive in the harsh conditions of the intertidal zone are extraordinary. Mangrove soils are waterlogged, anoxic, highly saline, and physically unstable — conditions that would be lethal for most plant species. Different mangrove genera have evolved distinct solutions to these challenges. Prop roots and pneumatophores — upward-projecting root extensions that break the soil surface and provide oxygen access to roots in waterlogged sediments — are among the most visually distinctive features of mangrove forests. Salt is managed through several strategies: exclusion at the roots, secretion through specialised salt glands in leaves, or compartmentalisation in older leaves that are subsequently shed. Many mangrove species reproduce through vivipary — the germination of seeds while still attached to the parent tree, producing propagules ready to take root immediately upon dispersal.",
        },
        {
          letter: "C",
          text: "Mangrove forests support exceptional biodiversity, functioning as nursery habitats, feeding grounds, and refugia for a vast range of species. The complex tangle of prop roots and pneumatophores provides habitat structure for fish, crustaceans, molluscs, and invertebrates, many of which spend their juvenile stages among the mangrove roots before moving to offshore reef and open-water habitats as adults. Studies have consistently demonstrated that the abundance and diversity of reef fish are positively correlated with the extent of adjacent mangrove forest, demonstrating the structural connectivity between mangrove and coral reef ecosystems. Mangrove forests also support globally significant populations of waterbirds, reptiles including saltwater crocodiles and marine turtles, and mammals including the proboscis monkey endemic to Borneo's mangroves.",
        },
        {
          letter: "D",
          text: "The carbon storage capacity of mangrove forests — their role as so-called 'blue carbon' ecosystems — has attracted intense research interest as the international community seeks nature-based climate solutions. Mangroves sequester carbon at among the highest rates of any ecosystem: per unit area, mangrove forests accumulate carbon in their biomass and — especially — in their waterlogged, anoxic sediments at rates estimated to be three to five times higher than those of tropical rainforests. The anaerobic conditions of mangrove soils prevent the rapid microbial decomposition that would otherwise release accumulated organic carbon, allowing carbon to accumulate in sediments over centuries or millennia. Global estimates suggest that mangrove soils store between 4.19 and 6.42 billion tonnes of carbon, and that the destruction of mangroves releases this stored carbon as CO₂.",
        },
        {
          letter: "E",
          text: "Mangrove forests provide critical coastal protection services that have become increasingly appreciated in the context of rising sea levels and intensifying tropical cyclones. The dense root structures and canopy of mangrove forests dissipate wave energy, reduce coastal erosion, and trap sediments that raise shoreline elevation. Studies following the 2004 Indian Ocean tsunami found that coastlines protected by intact mangrove forests suffered significantly less damage and loss of life than adjacent deforested coastlines, and economic analyses of mangrove protection consistently show that the value of avoided coastal damage — to infrastructure, agriculture, and human welfare — far exceeds the opportunity cost of preserving mangrove land rather than converting it to aquaculture or agriculture.",
        },
        {
          letter: "F",
          text: "Despite their ecological and economic importance, mangrove forests have been among the most rapidly disappearing ecosystems on Earth. Global mangrove area has declined by approximately 20–35 percent since the 1980s, with particularly severe losses in Southeast Asia, West Africa, and South Asia. The primary drivers of mangrove loss include conversion to aquaculture ponds — particularly shrimp farms — which has been responsible for the majority of losses in Southeast Asia; conversion to rice paddies and other agricultural uses; urban and industrial coastal development; and, increasingly, sea level rise and intensified storm damage in areas where natural coastal dynamics have been altered by human activity. In some countries, mangroves are also harvested unsustainably for fuelwood and timber.",
        },
        {
          letter: "G",
          text: "Mangrove restoration has emerged as a major conservation and climate action priority. Community-based mangrove restoration projects have been implemented across South and Southeast Asia, East Africa, and Latin America, with mixed ecological success rates that reflect the importance of site selection, hydrology restoration, and species choice. A key lesson from decades of restoration experience is that restoration efforts that restore the natural tidal hydrology — allowing the natural movement of tides and sediment that mangrove ecosystems depend upon — are substantially more likely to succeed than those that simply plant mangrove propagules in degraded sites without addressing the underlying causes of degradation. The integration of mangrove conservation and restoration into national climate commitments and international biodiversity targets under frameworks such as the Kunming-Montreal Global Biodiversity Framework has further elevated the political profile of mangrove protection.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 27–32",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs A–G from the list of headings below.",
          headings: [
            { label: "i", text: "The physical adaptations that help mangroves survive where other trees cannot" },
            { label: "ii", text: "The reasons why so much mangrove forest has been lost in recent decades" },
            { label: "iii", text: "Introduction: what mangroves are and why they are globally important" },
            { label: "iv", text: "Efforts to replant and restore mangrove forests and the lessons learned" },
            { label: "v", text: "The role of mangroves in storing large amounts of carbon" },
            { label: "vi", text: "How mangroves protect coastlines from storms, waves, and erosion" },
            { label: "vii", text: "The wide variety of animals that live in or depend on mangrove forests" },
            { label: "viii", text: "The role of international fishing fleets in mangrove areas" },
          ],
          questions: [
            {
              id: 27,
              paragraph: "A",
              correct: "iii",
              explanation:
                "Paragraph A introduces mangroves, their distribution, and the global significance of their ecosystem services.",
            },
            {
              id: 28,
              paragraph: "B",
              correct: "i",
              explanation:
                "Paragraph B describes the structural and physiological adaptations — prop roots, salt management, vivipary — that allow mangroves to survive in intertidal conditions.",
            },
            {
              id: 29,
              paragraph: "C",
              correct: "vii",
              explanation:
                "Paragraph C discusses the exceptional biodiversity supported by mangrove forests — fish, crustaceans, birds, reptiles, and mammals.",
            },
            {
              id: 30,
              paragraph: "D",
              correct: "v",
              explanation:
                "Paragraph D covers the blue carbon role of mangroves — their exceptional carbon sequestration and storage capacity.",
            },
            {
              id: 31,
              paragraph: "E",
              correct: "vi",
              explanation:
                "Paragraph E discusses how mangroves dissipate wave energy, reduce erosion, and protect coastlines, including evidence from the 2004 tsunami.",
            },
            {
              id: 32,
              paragraph: "F",
              correct: "ii",
              explanation:
                "Paragraph F describes the drivers of mangrove loss — aquaculture, agriculture, development, and sea level rise.",
            },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 33–36",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            {
              id: 33,
              statement:
                "Mangroves sequester carbon at rates estimated to be three to five times higher per unit area than tropical rainforests.",
              correct: "Yes",
              explanation:
                "Paragraph D: 'mangrove forests accumulate carbon… at rates estimated to be three to five times higher than those of tropical rainforests.'",
            },
            {
              id: 34,
              statement:
                "Global mangrove area has declined by approximately 20–35 percent since the 1980s.",
              correct: "Yes",
              explanation:
                "Paragraph F: 'Global mangrove area has declined by approximately 20–35 percent since the 1980s.'",
            },
            {
              id: 35,
              statement:
                "Studies have shown that coastlines with intact mangroves suffered less damage in the 2004 Indian Ocean tsunami than deforested coastlines.",
              correct: "Yes",
              explanation:
                "Paragraph E: 'Studies following the 2004 Indian Ocean tsunami found that coastlines protected by intact mangrove forests suffered significantly less damage and loss of life than adjacent deforested coastlines.'",
            },
            {
              id: 36,
              statement:
                "Simply planting mangrove propagules in degraded sites without restoring natural hydrology is the most effective method of restoration.",
              correct: "No",
              explanation:
                "Paragraph G: 'restoration efforts that restore the natural tidal hydrology… are substantially more likely to succeed than those that simply plant mangrove propagules in degraded sites without addressing the underlying causes of degradation.'",
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 37–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.",
          questions: [
            {
              id: 37,
              before: "What term is used in the passage for the region of Southeast Asia that has the greatest number of mangrove species?",
              correct: "mangrove triangle",
              wordLimit: 2,
              explanation:
                "Paragraph A: 'the 'mangrove triangle' of Southeast Asia, which is home to the greatest number of mangrove species of any region.'",
            },
            {
              id: 38,
              before: "What is the term for the reproductive strategy in which mangrove seeds germinate while still attached to the parent tree?",
              correct: "vivipary",
              wordLimit: 1,
              explanation:
                "Paragraph B: 'Many mangrove species reproduce through vivipary — the germination of seeds while still attached to the parent tree.'",
            },
            {
              id: 39,
              before: "What term is used for the role of mangroves and similar coastal ecosystems in storing carbon?",
              correct: "blue carbon",
              wordLimit: 2,
              explanation:
                "Paragraph D: 'their role as so-called 'blue carbon' ecosystems.'",
            },
            {
              id: 40,
              before: "What global biodiversity framework has elevated the political profile of mangrove protection by integrating it into international targets?",
              correct: "Kunming-Montreal",
              wordLimit: 2,
              explanation:
                "Paragraph G: 'the Kunming-Montreal Global Biodiversity Framework has further elevated the political profile of mangrove protection.'",
            },
          ],
        },
      ],
    },
  ],
};
