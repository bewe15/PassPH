import type { IELTSTest } from "./types";

export const ieltsReading2: IELTSTest = {
  id: "ielts-reading-2",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 2",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "The Psychology of Flow States",
      paragraphs: [
        {
          letter: "A",
          text: "In 1975, Hungarian-American psychologist Mihaly Csikszentmihalyi introduced the concept of 'flow' to describe an optimal mental state in which a person becomes so deeply absorbed in a challenging activity that all sense of time, self-consciousness, and extraneous concern dissolves. Csikszentmihalyi developed the concept after studying artists, chess players, and surgeons who described losing themselves entirely in their work. He argued that flow represented the most rewarding form of human experience — not passive pleasure, but active engagement that stretched capability without overwhelming it.",
        },
        {
          letter: "B",
          text: "Flow is characterised by several distinct experiential features. The individual experiences a clear sense of goals and receives immediate, unambiguous feedback on their progress. There is a feeling of personal control over the activity, and action and awareness merge so that deliberate thought becomes unnecessary. Most significantly, there is a complete loss of self-consciousness: the individual no longer monitors or evaluates their performance from the outside but simply acts. This state is sometimes described as 'being in the zone' in athletic contexts, and it has been reported across domains as diverse as rock climbing, surgery, jazz improvisation, and computer programming.",
        },
        {
          letter: "C",
          text: "Neuroscientific research has begun to illuminate what happens in the brain during flow. Functional MRI studies suggest that flow is associated with the transient hypofrontality hypothesis — a temporary reduction in activity in the prefrontal cortex, the region responsible for self-monitoring, time perception, and analytical thought. This suppression of the inner critic appears to enable faster, more intuitive processing. Simultaneously, dopaminergic reward systems become highly active, which may explain the intrinsically motivating quality of flow states and why individuals often describe them as among the most satisfying experiences of their lives.",
        },
        {
          letter: "D",
          text: "One of the key conditions for flow is the balance between challenge and skill. Csikszentmihalyi proposed that flow occurs in a narrow corridor where the difficulty of a task slightly exceeds but does not overwhelm the individual's current ability. If a task is too easy, the result is boredom; if too difficult, the result is anxiety. This 'challenge-skill balance' model has been widely applied in educational settings, where teachers are encouraged to pitch work at a level that stretches students without causing frustration. Video game designers have long applied similar principles, using dynamic difficulty adjustment to maintain player engagement.",
        },
        {
          letter: "E",
          text: "Organisations have increasingly sought to engineer conditions that promote flow among employees. Research by McKinsey Global Institute suggests that senior executives report being five times more productive when in a flow state, and that the average employee spends only approximately 5 percent of their working day in flow. Strategies to increase this proportion include reducing interruptions — email and meeting culture are identified as primary disruptors — providing employees with clear, meaningful goals, and allowing sufficient autonomy to enable workers to match challenge to their own skill level.",
        },
        {
          letter: "F",
          text: "Critics have raised concerns about the uncritical promotion of flow in workplace and educational settings. Some researchers note that flow states, precisely because they bypass analytical self-monitoring, may be poorly suited to tasks requiring ethical deliberation, creative problem-setting, or collaboration. Others point out that the conditions most conducive to flow — solitary activity, clear singular goals, immediate feedback — are structurally at odds with the complex, ambiguous, and interdependent nature of much contemporary knowledge work. There is also a risk, some argue, that the pursuit of flow can become an end in itself, leading to compulsive overwork or the neglect of reflective rest.",
        },
        {
          letter: "G",
          text: "Despite these reservations, flow research has made a significant contribution to positive psychology and human performance science. Future research is exploring whether flow states can be reliably induced through neurofeedback, mindfulness training, or environmental design, and whether the benefits generalise across cultures and age groups. There is also growing interest in collective or group flow — the state in which a team operates with a shared sense of harmony and mutual absorption — which may carry distinct benefits for collaborative creativity and organisational innovation.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The origin and definition of a psychological concept" },
            { label: "ii",   text: "How the brain changes during peak absorption" },
            { label: "iii",  text: "Recognisable signs of the optimal experience" },
            { label: "iv",   text: "The right level of difficulty for sustaining engagement" },
            { label: "v",    text: "Applying the concept to boost workplace output" },
            { label: "vi",   text: "Limitations and potential downsides of the approach" },
            { label: "vii",  text: "Emerging directions and unresolved questions" },
            { label: "viii", text: "Measuring the financial value of peak performance" },
            { label: "ix",   text: "Cultural differences in the experience of absorption" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "iii", explanation: "Paragraph B lists the defining features (clear goals, merged action and awareness, loss of self-consciousness) of flow." },
            { id: 2, paragraph: "C", correct: "ii",  explanation: "Paragraph C describes transient hypofrontality and dopaminergic activity — what happens in the brain during flow." },
            { id: 3, paragraph: "D", correct: "iv",  explanation: "Paragraph D explains the challenge-skill balance model and how difficulty level determines whether flow occurs." },
            { id: 4, paragraph: "E", correct: "v",   explanation: "Paragraph E discusses organisational strategies to increase flow and McKinsey data on productivity gains." },
            { id: 5, paragraph: "F", correct: "vi",  explanation: "Paragraph F raises concerns: flow bypasses ethical deliberation, suits solitary tasks, and can promote overwork." },
            { id: 6, paragraph: "G", correct: "vii", explanation: "Paragraph G discusses future research directions: neurofeedback, mindfulness, group flow, and cross-cultural studies." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "Csikszentmihalyi first described flow in a publication from 1975.", correct: "True", explanation: "Paragraph A explicitly states that Csikszentmihalyi introduced the concept of flow in 1975." },
            { id: 8,  statement: "During flow, activity in the prefrontal cortex temporarily increases.", correct: "False", explanation: "Paragraph C describes transient hypofrontality — a temporary REDUCTION in prefrontal cortex activity, not an increase." },
            { id: 9,  statement: "Flow states have been found to be more common in creative professions than in technical ones.", correct: "Not Given", explanation: "The passage lists many domains where flow occurs but does not compare frequency across professions." },
            { id: 10, statement: "Video game designers use difficulty adjustment to sustain player engagement.", correct: "True", explanation: "Paragraph D states that video game designers 'have long applied similar principles, using dynamic difficulty adjustment to maintain player engagement.'" },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "When a task is too simple, the result is ", after: ", while excessive difficulty produces anxiety.", correct: "boredom", explanation: "Paragraph D: 'If a task is too easy, the result is boredom; if too difficult, the result is anxiety.'" },
            { id: 12, before: "According to McKinsey research, senior executives are five times more ", after: " when experiencing flow.", correct: "productive", explanation: "Paragraph E states executives 'report being five times more productive when in a flow state.'" },
            { id: 13, before: "The concept of ", after: " flow describes a team operating with shared harmony and mutual absorption.", correct: "group", explanation: "Paragraph G introduces 'collective or group flow' as an emerging area of research." },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Microplastics and Marine Ecosystems",
      paragraphs: [
        {
          letter: "A",
          text: "Plastic production has grown exponentially since the 1950s, reaching approximately 400 million tonnes per year by the early 2020s. Of this, a substantial proportion eventually enters the ocean through river systems, coastal dumping, and atmospheric deposition. Once at sea, larger plastic items fragment through UV radiation and mechanical abrasion into microplastics — particles smaller than five millimetres — and eventually into nanoplastics measured in nanometres. These tiny particles are now found in every marine environment on Earth, from surface waters to deep-sea sediments more than 10,000 metres below the surface.",
        },
        {
          letter: "B",
          text: "Marine invertebrates are among the most vulnerable groups. Filter feeders such as mussels, oysters, and some species of zooplankton ingest microplastics indiscriminately alongside their food. Laboratory studies have shown that ingestion can reduce feeding rates, impair reproductive success, and cause physical damage to digestive tissues. A 2021 study found that oysters exposed to microplastics produced fewer and less viable eggs, suggesting population-level consequences. Fish species similarly ingest microplastics, either directly or through the prey they consume, and studies have identified particles in the gut, gills, and liver tissues of numerous commercially important species.",
        },
        {
          letter: "C",
          text: "Beyond their physical presence, microplastics pose a chemical threat. Plastic polymers contain a range of additives — plasticisers, flame retardants, antioxidants — that can leach into surrounding tissue once ingested. Additionally, microplastics act as sorbents, concentrating persistent organic pollutants (POPs) such as PCBs and DDT from surrounding seawater. When marine organisms ingest microplastic particles, they may therefore be exposed to a cocktail of toxic compounds at concentrations far exceeding ambient seawater levels. This process of bioconcentration, and the subsequent passage of contaminants up the food chain through bioaccumulation, has raised concern among food safety regulators.",
        },
        {
          letter: "D",
          text: "The implications for human health remain an active area of research. Microplastics have been detected in human blood, lung tissue, placental tissue, and breast milk, indicating that exposure is ubiquitous and that particles can cross biological membranes previously assumed to be protective barriers. However, the clinical significance of this exposure is not yet established. Toxicological studies in animal models suggest potential effects on inflammation, hormone signalling, and immune function, but translating these findings to realistic human exposure scenarios remains methodologically challenging.",
        },
        {
          letter: "E",
          text: "Several technological interventions are under development to address marine microplastic pollution. Advanced filtration systems are being trialled to intercept plastic particles in wastewater treatment plants before they reach the ocean. Bioremediation approaches, including the use of plastic-degrading bacteria such as Ideonella sakaiensis — first identified in 2016 — and engineered enzymes, offer promising long-term solutions. Ocean clean-up projects have attracted significant public attention, though critics note that surface skimming systems recover only a small fraction of total plastic and cannot address the vast quantities that have settled in sediments or become incorporated into marine organisms.",
        },
        {
          letter: "F",
          text: "Ultimately, most researchers agree that technological remediation alone is insufficient. Effective policy responses must address plastic production at source. Extended producer responsibility legislation, which requires manufacturers to fund end-of-life management of their products, has been adopted in several European nations. Single-use plastic bans have reduced consumption in some categories but have been criticised for displacing rather than reducing overall plastic use. A growing body of opinion holds that genuinely addressing microplastic pollution requires a fundamental redesign of the global plastics economy — transitioning from a linear 'take-make-dispose' model to a circular economy in which materials are reused, recycled, and kept in productive use indefinitely.",
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
            { id: 14, text: "Evidence that microplastics can pass through barriers thought to protect internal organs", correct: "D", explanation: "Paragraph D: microplastics detected in placenta and breast milk, crossing 'biological membranes previously assumed to be protective barriers.'" },
            { id: 15, text: "A description of how contaminants become more concentrated as they move up the food chain", correct: "C", explanation: "Paragraph C describes bioaccumulation — the passage of contaminants up the food chain after bioconcentration in organisms." },
            { id: 16, text: "A specific example of a reproductive effect observed in a shellfish species", correct: "B", explanation: "Paragraph B: 'oysters exposed to microplastics produced fewer and less viable eggs.'" },
            { id: 17, text: "A call for restructuring how plastic products are manufactured and used globally", correct: "F", explanation: "Paragraph F advocates for a circular economy and the redesign of the global plastics economy." },
            { id: 18, text: "A reference to the geographic range of microplastic contamination", correct: "A", explanation: "Paragraph A states microplastics are 'found in every marine environment on Earth, from surface waters to deep-sea sediments.'" },
            { id: 19, text: "A criticism of a high-profile clean-up initiative", correct: "E", explanation: "Paragraph E notes that ocean clean-up surface skimming systems 'recover only a small fraction of total plastic.'" },
          ],
        },
        {
          type: "mc_single",
          questionRange: "Questions 20–23",
          instructions:
            "Choose the correct letter, A, B, C, or D.",
          questions: [
            {
              id: 20,
              stem: "According to paragraph C, why are microplastics particularly dangerous as chemical carriers?",
              options: [
                { label: "A", text: "They produce toxic compounds as they degrade." },
                { label: "B", text: "They concentrate pollutants to levels above those in seawater." },
                { label: "C", text: "They prevent organisms from absorbing essential nutrients." },
                { label: "D", text: "They block the digestive systems of fish." },
              ],
              correct: "B",
              explanation: "Paragraph C: microplastics 'act as sorbents, concentrating persistent organic pollutants from surrounding seawater' — exposing organisms to concentrations 'far exceeding ambient seawater levels.'"
            },
            {
              id: 21,
              stem: "What does the passage say about the health implications of microplastics for humans?",
              options: [
                { label: "A", text: "They have been proven to cause hormonal disorders." },
                { label: "B", text: "They are present in the body but their clinical effects are unclear." },
                { label: "C", text: "They are only harmful when consumed in seafood." },
                { label: "D", text: "They are filtered effectively by the immune system." },
              ],
              correct: "B",
              explanation: "Paragraph D: microplastics are detected in human tissue but 'the clinical significance of this exposure is not yet established.'"
            },
            {
              id: 22,
              stem: "What is the main criticism of single-use plastic bans mentioned in the passage?",
              options: [
                { label: "A", text: "They are too expensive for developing nations to implement." },
                { label: "B", text: "They only apply to a limited range of products." },
                { label: "C", text: "They may shift rather than reduce overall plastic consumption." },
                { label: "D", text: "They are rarely enforced by governments." },
              ],
              correct: "C",
              explanation: "Paragraph F: bans 'have been criticised for displacing rather than reducing overall plastic use.'"
            },
            {
              id: 23,
              stem: "Ideonella sakaiensis is significant because it",
              options: [
                { label: "A", text: "was the first organism found to ingest microplastics naturally." },
                { label: "B", text: "produces a chemical that neutralises ocean pollutants." },
                { label: "C", text: "is a bacterium capable of breaking down plastic." },
                { label: "D", text: "was engineered to filter microplastics from wastewater." },
              ],
              correct: "C",
              explanation: "Paragraph E describes Ideonella sakaiensis as a 'plastic-degrading bacteria' used in bioremediation approaches."
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "The Origins and Scale of Marine Microplastic Pollution",
          summaryText:
            "Global plastic output now stands at roughly 400 million tonnes annually. A large share enters the sea via rivers and other routes. Exposure to sunlight and physical wear causes larger pieces to break down into microplastics, and eventually into even smaller {{24}} particles. These contaminants have been discovered in {{25}} environments across the planet, including the deepest ocean trenches. In marine organisms, ingested particles may carry toxic {{26}}, which then pass to predators higher in the food chain.",
          wordBank: ["nanoplastic", "all marine", "additives", "filter feeders", "sediment", "synthetic"],
          questions: [
            { id: 24, blankId: 24, correct: "nanoplastic", explanation: "Paragraph A: microplastics fragment further into 'nanoplastics measured in nanometres.'" },
            { id: 25, blankId: 25, correct: "all marine", explanation: "Paragraph A: 'found in every marine environment on Earth' — paraphrased as 'all marine' environments." },
            { id: 26, blankId: 26, correct: "additives", explanation: "Paragraph C: 'Plastic polymers contain a range of additives — plasticisers, flame retardants, antioxidants — that can leach into surrounding tissue.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "The Digital Divide: Access, Skills, and Power",
      paragraphs: [
        {
          letter: "A",
          text: "The term 'digital divide' was coined in the 1990s to describe the gap between those with reliable access to digital technologies and those without. Initially, the divide was understood primarily in terms of hardware access: who owned a computer and who did not. As internet penetration expanded through the 2000s, researchers argued that the concept needed to be broadened. A second-level digital divide — centred on differences in the skills needed to use technology effectively, rather than mere access — became a major focus. More recently, scholars have identified a third level: differences in the outcomes people achieve from their internet use, even when access and skills are comparable.",
        },
        {
          letter: "B",
          text: "Geographic disparities remain stark. According to the International Telecommunication Union, as of 2023, approximately 2.6 billion people globally had never used the internet. The majority of the unconnected live in sub-Saharan Africa and South Asia, where infrastructure investment has lagged behind population growth. Within high-income nations, rural and remote communities face connectivity deficits that mirror those of developing regions. In the United States, the Federal Communications Commission estimated in 2021 that over 14 million Americans — a figure widely considered an undercount — lacked access to broadband internet at minimum recommended speeds.",
        },
        {
          letter: "C",
          text: "The consequences of digital exclusion are wide-ranging and increasingly severe. As government services, banking, healthcare, and education move online, those without digital access are systematically excluded from participation in civic and economic life. The COVID-19 pandemic made these stakes viscerally apparent: students without home internet access fell significantly behind peers in online schooling, while workers in non-digitised occupations faced disproportionate job losses. The pandemic accelerated digitisation across multiple sectors, making analogue alternatives scarcer and raising the cost of non-participation.",
        },
        {
          letter: "D",
          text: "Scholars have increasingly challenged accounts of the digital divide that focus solely on access. Even when connectivity is available, significant skill disparities determine what individuals can accomplish online. Research by scholars such as Ellen Hargittai has demonstrated that internet users vary substantially in their ability to evaluate the credibility of online sources, navigate complex websites, protect their privacy, and exploit digital tools for economic benefit. These skill gaps correlate strongly with education level, socioeconomic status, and age — meaning that digital technology may amplify, rather than flatten, existing social inequalities.",
        },
        {
          letter: "E",
          text: "Policy responses have varied considerably in ambition and approach. Some governments have prioritised infrastructure investment: Australia's National Broadband Network and the United States' Broadband Equity, Access, and Deployment (BEAD) programme represent large-scale efforts to extend physical connectivity. Digital literacy programmes — formal curricula in schools and adult training initiatives — address the skills dimension. However, critics argue that supply-side interventions are insufficient without accompanying measures to make devices and data plans affordable, and that digital literacy training is often too narrowly focused on basic operational skills rather than the critical and creative capacities that translate into real-world benefit.",
        },
        {
          letter: "F",
          text: "A growing body of scholarship situates the digital divide within broader questions of power and participation. From this perspective, the problem is not merely one of who lacks access to an existing technological system, but of who shapes that system. The design of digital platforms, the governance of artificial intelligence, and the ownership of data are decisions currently made by a narrow group of technologists and investors concentrated in a small number of wealthy countries. Ensuring meaningful digital inclusion, these scholars argue, requires not just connecting the unconnected but empowering a broader range of voices to participate in decisions about how digital technologies are built and governed.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "The original meaning of 'digital divide' referred primarily to who owned computing hardware.", correct: "Yes", explanation: "Paragraph A: 'Initially, the divide was understood primarily in terms of hardware access: who owned a computer and who did not.'" },
            { id: 28, statement: "The number of people worldwide who have never used the internet has fallen below one billion.", correct: "No", explanation: "Paragraph B states approximately 2.6 billion people had never used the internet as of 2023 — well above one billion." },
            { id: 29, statement: "The FCC's figure of 14 million unconnected Americans is likely an accurate count.", correct: "No", explanation: "Paragraph B describes this figure as 'widely considered an undercount,' implying the real number is higher." },
            { id: 30, statement: "Digital skill levels are closely linked to a person's level of formal education.", correct: "Yes", explanation: "Paragraph D: skill gaps 'correlate strongly with education level, socioeconomic status, and age.'" },
            { id: 31, statement: "Digital literacy programmes in schools are currently more effective than infrastructure investment.", correct: "Not Given", explanation: "The passage describes both types of intervention but does not compare their relative effectiveness." },
          ],
        },
        {
          type: "mc_multiple",
          questionRange: "Questions 32–34",
          instructions:
            "Choose TWO letters, A–E. Which TWO of the following are identified in the passage as consequences of digital exclusion?",
          questions: [
            {
              id: 32,
              stem: "Which TWO consequences of digital exclusion are identified in the passage?",
              options: [
                { label: "A", text: "Reduced access to government services" },
                { label: "B", text: "Lower rates of social media usage" },
                { label: "C", text: "Educational disadvantage during the COVID-19 pandemic" },
                { label: "D", text: "Increased reliance on print media" },
                { label: "E", text: "Higher crime rates in offline communities" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph C: 'those without digital access are systematically excluded from… civic and economic life' (A) and 'students without home internet access fell significantly behind peers in online schooling' (C)."
            },
            {
              id: 33,
              stem: "Which TWO policy approaches to the digital divide are mentioned in the passage?",
              options: [
                { label: "A", text: "Subsidising smartphone purchases for low-income users" },
                { label: "B", text: "Building broadband infrastructure" },
                { label: "C", text: "Regulating the content of digital platforms" },
                { label: "D", text: "Running digital literacy training programmes" },
                { label: "E", text: "Introducing taxes on technology companies" },
              ],
              pickCount: 2,
              correct: ["B", "D"],
              explanation: "Paragraph E mentions infrastructure investment (B: NBN and BEAD) and digital literacy programmes — 'formal curricula in schools and adult training initiatives' (D)."
            },
            {
              id: 34,
              stem: "According to the passage, which TWO groups are currently over-represented in decisions about digital technology?",
              options: [
                { label: "A", text: "Investors" },
                { label: "B", text: "Educators" },
                { label: "C", text: "Technologists" },
                { label: "D", text: "Government regulators" },
                { label: "E", text: "Non-governmental organisations" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph F: decisions are 'currently made by a narrow group of technologists and investors concentrated in a small number of wealthy countries.'"
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "What term describes the gap between users in their ability to benefit from internet use, even when access and skills are equal?", correct: "third level", explanation: "Paragraph A introduces the 'third level' digital divide — differences in outcomes from internet use." },
            { id: 36, before: "Which two regions contain the majority of people who have never used the internet?", correct: "sub-Saharan Africa", explanation: "Paragraph B: 'The majority of the unconnected live in sub-Saharan Africa and South Asia.'" },
            { id: 37, before: "What did the COVID-19 pandemic do to digital alternatives for public services?", correct: "scarcer", explanation: "Paragraph C: 'The pandemic accelerated digitisation across multiple sectors, making analogue alternatives scarcer.'" },
            { id: 38, before: "Which scholar is named in the passage for research on differences in internet user skills?", correct: "Ellen Hargittai", explanation: "Paragraph D specifically names 'Ellen Hargittai' for demonstrating substantial variation in internet users' capabilities." },
            { id: 39, before: "What specific criticism is made of digital literacy training programmes?", correct: "too narrowly focused", explanation: "Paragraph E: training is 'often too narrowly focused on basic operational skills rather than the critical and creative capacities.'" },
            { id: 40, before: "Beyond access, what does the passage say genuine digital inclusion requires?", correct: "broader range", explanation: "Paragraph F: inclusion requires 'empowering a broader range of voices to participate in decisions about how digital technologies are built.'" },
          ],
        },
      ],
    },
  ],
};
