import type { IELTSTest } from "./types";

export const ieltsReading9: IELTSTest = {
  id: "ielts-reading-9",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 9",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "The Ancient Silk Road",
      paragraphs: [
        {
          letter: "A",
          text: "The term 'Silk Road' was coined by the German geographer Ferdinand von Richthofen in 1877 to describe the ancient network of overland and maritime trade routes that connected China with Central Asia, the Middle East, South Asia, and ultimately Europe for more than fifteen centuries. Although silk was the most iconic commodity transported along these routes — prized in Rome and Byzantium for its rarity and lustrous beauty — the Silk Road carried a far broader range of goods, including spices, glassware, paper, cotton, precious metals, and medicinal herbs. The routes were not a single road in any modern sense but a shifting, overlapping web of paths, passes, and corridors that changed with the rise and fall of empires, climatic conditions, and political alliances.",
        },
        {
          letter: "B",
          text: "Chinese silk reached the Mediterranean world as early as the fourth century BCE, long before formal diplomatic or commercial contact was established between the Han dynasty and Rome. The establishment of the Han dynasty's western outreach under Emperor Wu (r. 141–87 BCE) is traditionally regarded as the moment when the overland Silk Road became a sustained intercontinental exchange network. Emperor Wu dispatched the envoy Zhang Qian on two westward missions — the first in 139 BCE — initially in search of military allies against the Xiongnu nomads who threatened China's northern borders. Zhang Qian's reports on the wealth of Central Asian kingdoms convinced the emperor of the commercial and diplomatic possibilities of western engagement, inaugurating a new era of connectivity.",
        },
        {
          letter: "C",
          text: "The cultural exchanges facilitated by Silk Road commerce were at least as consequential as the economic transactions themselves. Buddhism, which originated in the Indian subcontinent, spread eastward into China and Central Asia along routes following those of merchants and pilgrims. The Chinese monk Xuanzang's famous seventh-century journey to India — commemorated in the classic novel 'Journey to the West' — exemplifies the spiritual and intellectual traffic that accompanied trade. Zoroastrianism, Nestorian Christianity, Manichaeism, and Islam all travelled westward, eastward, or both along these corridors, transforming the religious landscapes of vast regions. The transmission of the concept of zero from India to the Islamic world, and thence to Europe, represents one of the most consequential intellectual exchanges in world history.",
        },
        {
          letter: "D",
          text: "The Silk Road also served as a highway for disease. The Justinianic Plague, which devastated the Byzantine Empire beginning in 541 CE, and the Black Death, which killed an estimated one-third of Europe's population in the mid-fourteenth century, both spread along Silk Road trade networks. The bacterium Yersinia pestis, responsible for both outbreaks, originated in Central Asian reservoirs and travelled westward in infected rodents carried on merchant caravans and, subsequently, on the rats that infested trading ships. The lethal demographic consequences of these pandemics fundamentally disrupted the economies and political structures of affected regions, altering the very trade networks that had transmitted the disease.",
        },
        {
          letter: "E",
          text: "The overland Silk Road began a long decline after the fifteenth century, partly as a consequence of the disruption caused by Mongol successor states and the instability that followed the dissolution of the Pax Mongolica — the period of relative peace and order established across the Eurasian heartland by the Mongol Empire. More decisively, European maritime powers — beginning with the Portuguese rounding of the Cape of Good Hope in 1488 — developed oceanic trade routes that bypassed Central Asia entirely, offering faster, cheaper, and more reliable access to Asian goods. The centre of gravity of global commerce shifted irrevocably from overland to maritime networks.",
        },
        {
          letter: "F",
          text: "Contemporary scholarship and geopolitics have revived interest in the Silk Road concept. China's Belt and Road Initiative (BRI), launched in 2013, explicitly invokes Silk Road imagery to describe a sweeping programme of infrastructure investment — railways, roads, pipelines, and ports — designed to enhance connectivity between China and more than 140 partner countries. Critics have characterised the BRI as a form of economic statecraft that creates debt dependency among recipient nations and extends Chinese political influence, while proponents argue that infrastructure development provides genuine economic benefits to participating countries. The ancient concept of the Silk Road has thus become a contested symbol in twenty-first-century geopolitical competition.",
        },
        {
          letter: "G",
          text: "Archaeological and genetic research has in recent decades substantially enriched our understanding of Silk Road exchange. DNA analysis of ancient skeletons recovered from burial sites across Eurasia has revealed patterns of migration and intermixing that confirm the scale of human movement along these routes. Genetic studies have traced the westward dispersal of domesticated crops including peaches, apricots, and rice, and the eastward transmission of grapes and walnuts, demonstrating that the Silk Road was also an artery for agricultural exchange. Artefact analysis — identifying the chemical signatures of glass, ceramics, and metals — has allowed researchers to reconstruct trade networks with increasing precision, revealing connections that written historical sources alone could not establish.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The origins of the name and the nature of the network" },
            { label: "ii",   text: "Early diplomatic missions that opened the network" },
            { label: "iii",  text: "The spread of religions and ideas along trade corridors" },
            { label: "iv",   text: "Disease transmission and its demographic consequences" },
            { label: "v",    text: "The decline of overland routes and the rise of maritime trade" },
            { label: "vi",   text: "Modern political reinvention of an ancient concept" },
            { label: "vii",  text: "Scientific methods revealing the scale of ancient exchange" },
            { label: "viii", text: "The role of nomadic peoples in disrupting trade" },
            { label: "ix",   text: "Economic disputes between China and Rome" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "ii",   explanation: "Paragraph B describes Emperor Wu's westward missions under envoy Zhang Qian, the diplomatic expeditions that initiated sustained Silk Road exchange." },
            { id: 2, paragraph: "C", correct: "iii",  explanation: "Paragraph C discusses the transmission of Buddhism, Christianity, Manichaeism, Islam, and mathematical concepts along Silk Road corridors." },
            { id: 3, paragraph: "D", correct: "iv",   explanation: "Paragraph D details how Yersinia pestis caused the Justinianic Plague and Black Death by travelling along Silk Road trade routes." },
            { id: 4, paragraph: "E", correct: "v",    explanation: "Paragraph E explains how Mongol instability and Portuguese maritime routes caused the long decline of the overland Silk Road." },
            { id: 5, paragraph: "F", correct: "vi",   explanation: "Paragraph F discusses China's Belt and Road Initiative and the contested contemporary political use of Silk Road symbolism." },
            { id: 6, paragraph: "G", correct: "vii",  explanation: "Paragraph G describes how DNA analysis, genetic studies, and artefact chemical signatures have illuminated the scale of ancient Silk Road exchange." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "The term 'Silk Road' was first used by a German geographer in the nineteenth century.", correct: "True", explanation: "Paragraph A states that the term was coined by 'German geographer Ferdinand von Richthofen in 1877.'" },
            { id: 8,  statement: "Zhang Qian's first westward mission was undertaken primarily to establish commercial trade.", correct: "False", explanation: "Paragraph B states the mission was 'initially in search of military allies against the Xiongnu nomads' — commerce was a later consequence, not the original purpose." },
            { id: 9,  statement: "The Black Death killed more people in Asia than in Europe.", correct: "Not Given", explanation: "Paragraph D mentions that the Black Death killed an estimated one-third of Europe's population but does not compare this with mortality in Asia." },
            { id: 10, statement: "Portuguese mariners found an oceanic route to Asia by sailing around the southern tip of Africa in 1488.", correct: "True", explanation: "Paragraph E explicitly states 'the Portuguese rounding of the Cape of Good Hope in 1488' as the beginning of European maritime routes to Asia." },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "The period of stability across Eurasia established by the Mongol Empire is referred to as the ", after: ".", correct: "Pax Mongolica", explanation: "Paragraph E explicitly names the 'Pax Mongolica' as the period of relative peace established by the Mongol Empire across the Eurasian heartland." },
            { id: 12, before: "Genetic studies have traced the westward movement of domesticated crops including peaches, apricots, and ", after: ".", correct: "rice", explanation: "Paragraph G: genetic studies 'traced the westward dispersal of domesticated crops including peaches, apricots, and rice.'" },
            { id: 13, before: "China's Belt and Road Initiative has been criticised by some as creating ", after: " among recipient nations.", correct: "debt dependency", explanation: "Paragraph F: critics have characterised the BRI as creating 'debt dependency among recipient nations.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Quantum Computing: Principles and Promise",
      paragraphs: [
        {
          letter: "A",
          text: "Classical computers — from the earliest room-filling mainframes to the smartphones of today — process information using bits, each of which can exist in one of two states: zero or one. Quantum computers exploit the counterintuitive properties of quantum mechanics to process information in fundamentally different ways. The basic unit of quantum information is the qubit, which can exist in a superposition of zero and one simultaneously — not as a probabilistic mixture of the two, but as a genuinely coexistent combination described by a complex-valued probability amplitude. When a qubit is measured, this superposition collapses to a definite value, but until measurement, a quantum computer can in principle manipulate all possible states simultaneously, offering an exponential expansion of computational capacity for certain categories of problem.",
        },
        {
          letter: "B",
          text: "Two further quantum mechanical phenomena are exploited in quantum computing. Entanglement links two or more qubits such that the state of each is instantaneously correlated with the states of the others, regardless of the physical distance separating them — a phenomenon Albert Einstein famously dismissed as 'spooky action at a distance.' When qubits are entangled, measuring one immediately determines the state of its partner, enabling information to be represented and processed in ways impossible with classical bits. Interference — the ability of quantum probability amplitudes to add or cancel, just as waves do — allows quantum algorithms to enhance the probability of correct answers and suppress the probability of incorrect ones, providing the mechanism by which quantum computers can outperform classical machines on specific tasks.",
        },
        {
          letter: "C",
          text: "The most celebrated theoretical demonstration of quantum computational advantage is Shor's algorithm, devised by mathematician Peter Shor in 1994. Shor showed that a sufficiently powerful quantum computer could factorise large integers exponentially faster than any known classical algorithm — a capability with profound implications for modern cryptography, since the security of widely used encryption systems such as RSA rests on the practical impossibility of factorising the products of very large prime numbers using classical hardware. Grover's algorithm, developed two years later, demonstrated a quadratic speedup for searching unsorted databases, illustrating that quantum advantage applies across different problem types with different degrees of acceleration.",
        },
        {
          letter: "D",
          text: "Building practical quantum computers is extraordinarily difficult. Qubits are fragile: they must be maintained in coherent quantum states, which requires isolation from the environment at temperatures close to absolute zero — colder than outer space — to prevent decoherence, the process by which quantum states are disrupted through interaction with the surrounding environment. Current systems are prone to high error rates, and a substantial proportion of the qubits in any given system must be dedicated to error correction rather than computation. The leading hardware approaches include superconducting circuits — used by companies such as IBM and Google — trapped ions, photonic systems, and topological qubits, each with distinct trade-offs in coherence time, gate fidelity, and scalability.",
        },
        {
          letter: "E",
          text: "In 2019, Google announced that its 53-qubit Sycamore processor had achieved 'quantum supremacy' by completing a specific computational task in 200 seconds that the company estimated would take the world's most powerful classical supercomputer approximately 10,000 years. IBM disputed this claim, arguing that optimised classical algorithms could complete the same task in 2.5 days — still far slower than Sycamore, but far from the 10,000-year estimate. The episode highlighted both the genuine progress being made in quantum hardware and the difficulty of making meaningful comparisons between quantum and classical systems, since the benchmark task was specifically chosen to favour quantum architecture and has no obvious practical application.",
        },
        {
          letter: "F",
          text: "Practical quantum applications are anticipated in several high-value domains. Drug discovery and materials science stand to benefit from quantum simulation — using a quantum system to model the quantum behaviour of molecules and materials in ways that are intractable for classical computers, potentially accelerating the development of new pharmaceuticals and battery materials. Optimisation problems — logistics routing, financial portfolio management, supply chain scheduling — are another target area, though the degree of quantum advantage for these problems remains to be demonstrated at scale. Cryptography is a double-edged case: while quantum computers threaten current encryption systems, they also enable quantum key distribution, a theoretically unbreakable method of secure communication based on the laws of physics rather than computational hardness.",
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
            { id: 14, text: "A description of the physical conditions required to prevent quantum states from being disrupted", correct: "D", explanation: "Paragraph D explains that qubits must be kept 'at temperatures close to absolute zero' to prevent decoherence, the disruption of quantum states through environmental interaction." },
            { id: 15, text: "An explanation of how quantum algorithms increase the likelihood of correct computational outcomes", correct: "B", explanation: "Paragraph B explains that interference 'allows quantum algorithms to enhance the probability of correct answers and suppress the probability of incorrect ones.'" },
            { id: 16, text: "A reference to a disputed claim about the speed of a quantum computing demonstration", correct: "E", explanation: "Paragraph E describes Google's quantum supremacy claim and IBM's dispute of the 10,000-year classical comparison." },
            { id: 17, text: "A potential application of quantum computing to the development of new medicines", correct: "F", explanation: "Paragraph F mentions drug discovery as a high-value domain for quantum simulation, 'potentially accelerating the development of new pharmaceuticals.'" },
            { id: 18, text: "An algorithm that demonstrated a speed advantage for searching through unordered data", correct: "C", explanation: "Paragraph C describes Grover's algorithm as demonstrating 'a quadratic speedup for searching unsorted databases.'" },
            { id: 19, text: "A phenomenon that allows two quantum particles to be correlated across any distance", correct: "B", explanation: "Paragraph B describes entanglement: two qubits are linked 'regardless of the physical distance separating them.'" },
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
              stem: "Why is Shor's algorithm considered significant for cryptography?",
              options: [
                { label: "A", text: "It enables unbreakable quantum encryption." },
                { label: "B", text: "It could undermine encryption systems based on the difficulty of factorising large numbers." },
                { label: "C", text: "It demonstrates that quantum computers are faster than classical computers at all tasks." },
                { label: "D", text: "It was the first algorithm to use entanglement." },
              ],
              correct: "B",
              explanation: "Paragraph C: Shor's algorithm could factorise large integers exponentially faster, threatening RSA encryption, which 'rests on the practical impossibility of factorising the products of very large prime numbers.'"
            },
            {
              id: 21,
              stem: "According to paragraph D, what is the main challenge of maintaining qubits in a workable state?",
              options: [
                { label: "A", text: "Qubits consume too much electrical power." },
                { label: "B", text: "Qubits must be kept extremely cold to avoid decoherence." },
                { label: "C", text: "Qubits can only process binary data." },
                { label: "D", text: "Qubits cannot be connected in large numbers." },
              ],
              correct: "B",
              explanation: "Paragraph D: qubits must be maintained 'at temperatures close to absolute zero' to prevent decoherence — the disruption of quantum states by the environment."
            },
            {
              id: 22,
              stem: "What does the passage imply about Google's 2019 quantum supremacy claim?",
              options: [
                { label: "A", text: "It was fully accepted by the scientific community." },
                { label: "B", text: "The task used had no obvious practical real-world use." },
                { label: "C", text: "IBM independently verified the 10,000-year estimate." },
                { label: "D", text: "It demonstrated quantum advantage for drug discovery." },
              ],
              correct: "B",
              explanation: "Paragraph E states the benchmark task 'has no obvious practical application' and was 'specifically chosen to favour quantum architecture.'"
            },
            {
              id: 23,
              stem: "How does the passage describe quantum key distribution?",
              options: [
                { label: "A", text: "A system that relies on the difficulty of mathematical problems" },
                { label: "B", text: "A method of secure communication grounded in physical laws" },
                { label: "C", text: "A technique that IBM pioneered in response to Shor's algorithm" },
                { label: "D", text: "An unproven theoretical concept with limited commercial potential" },
              ],
              correct: "B",
              explanation: "Paragraph F describes quantum key distribution as 'a theoretically unbreakable method of secure communication based on the laws of physics rather than computational hardness.'"
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "How Quantum Computers Differ from Classical Machines",
          summaryText:
            "Classical computers process data using bits — binary units that are either zero or one. Quantum computers use qubits, which can exist in a {{24}} of zero and one at the same time. A second property, {{25}}, links qubits so that the state of one is immediately correlated with the state of another. A third property, {{26}}, allows quantum algorithms to amplify the probability of arriving at the correct answer while reducing incorrect outcomes. Together these properties allow quantum computers to outperform classical machines on certain problems.",
          wordBank: ["superposition", "entanglement", "interference", "decoherence", "coherence", "binary state", "quantum supremacy", "probability amplitude"],
          questions: [
            { id: 24, blankId: 24, correct: "superposition", explanation: "Paragraph A: a qubit 'can exist in a superposition of zero and one simultaneously.'" },
            { id: 25, blankId: 25, correct: "entanglement", explanation: "Paragraph B: entanglement 'links two or more qubits such that the state of each is instantaneously correlated with the states of the others.'" },
            { id: 26, blankId: 26, correct: "interference", explanation: "Paragraph B: interference 'allows quantum algorithms to enhance the probability of correct answers and suppress the probability of incorrect ones.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "Urban Air Pollution and Public Health",
      paragraphs: [
        {
          letter: "A",
          text: "Air pollution is the single largest environmental health risk in the world, responsible according to the World Health Organization for approximately 7 million premature deaths annually, the majority of which occur in low- and middle-income countries. Urban environments concentrate multiple sources of pollution — vehicle exhaust, industrial emissions, domestic combustion, construction dust, and commercial cooking — in close proximity to dense human populations. The principal pollutants of concern are particulate matter (PM2.5 and PM10), nitrogen dioxide (NO2), ozone (O3), and sulphur dioxide (SO2). Of these, fine particulate matter — particles with a diameter of 2.5 micrometres or less — is considered the most harmful, as its small size allows it to penetrate deep into the lung and cross into the bloodstream.",
        },
        {
          letter: "B",
          text: "The health effects of air pollution are wide-ranging and affect virtually every organ system. Respiratory diseases — including asthma, chronic obstructive pulmonary disease, and lung cancer — are the most extensively studied consequences. However, epidemiological research accumulated over the past two decades has established equally strong links between PM2.5 exposure and cardiovascular disease: fine particles trigger systemic inflammation and oxidative stress that damage arterial walls, promote atherosclerosis, and increase the risk of heart attacks and strokes. More recently, evidence has emerged linking chronic air pollution exposure to adverse neurological outcomes, including accelerated cognitive decline in older adults, increased risk of dementia, and impaired neurodevelopment in children.",
        },
        {
          letter: "C",
          text: "Air pollution exposure is not distributed equitably across urban populations. Socioeconomic status is a powerful predictor of pollution burden: lower-income communities are disproportionately sited near major roads, industrial facilities, and freight corridors, while wealthier residents are more likely to live in areas buffered from these sources by distance, green space, or building design. In the United States, studies have consistently found that communities of colour — particularly Black and Latino communities — experience substantially higher average PM2.5 exposures than white communities at the same income level, reflecting the legacy of racially discriminatory land use and infrastructure siting decisions. This environmental justice dimension has prompted advocacy for pollution monitoring and regulation to explicitly account for distributional impacts.",
        },
        {
          letter: "D",
          text: "Regulatory frameworks for urban air quality have evolved considerably over recent decades. In the European Union, the Ambient Air Quality Directive sets legally binding limit values for key pollutants; the European Environment Agency reported in 2023 that approximately 96 percent of urban dwellers in the EU were exposed to PM2.5 levels above WHO guideline values, despite significant progress since the 1990s. The United States' Clean Air Act, first passed in 1970 and substantially amended in 1990, has demonstrably reduced ambient concentrations of most criteria pollutants over the long term, with estimated health benefits far exceeding compliance costs according to cost-benefit analyses conducted by the Environmental Protection Agency.",
        },
        {
          letter: "E",
          text: "Transportation policy is a central lever for reducing urban air pollution. The electrification of urban vehicle fleets — buses, taxis, and private cars — has the potential to eliminate tailpipe emissions at the point of use, though the net environmental benefit depends on the carbon intensity of the electricity grid and the lifecycle emissions of vehicle and battery manufacturing. Low emission zones, which restrict or charge the most polluting vehicles from entering defined urban areas, have been implemented in over 300 European cities with documented reductions in NO2 and PM levels. Active travel — encouraging walking and cycling rather than motorised transport — simultaneously reduces emissions and delivers health co-benefits through increased physical activity.",
        },
        {
          letter: "F",
          text: "Urban greenery offers a complementary approach to air quality management. Trees and vegetation can intercept particulate matter on their leaf surfaces, and green corridors can disrupt the channels through which polluted air flows through urban canyons. However, the effectiveness of urban greenery as a pollution reduction strategy should not be overstated: studies suggest that vegetation is most effective in close proximity to specific emission sources and that large-scale planting schemes deliver only modest reductions in city-wide pollutant concentrations. Of greater significance may be the indirect benefits of urban greenery: reduced urban heat island effect, psychological wellbeing, physical activity, and social cohesion — all of which contribute to health outcomes independently of their impact on air quality.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "Fine particulate matter is more dangerous than other air pollutants because it can enter the bloodstream.", correct: "Yes", explanation: "Paragraph A states PM2.5's 'small size allows it to penetrate deep into the lung and cross into the bloodstream,' making it the most harmful pollutant discussed." },
            { id: 28, statement: "The link between air pollution and heart disease is now considered as well established as the link with lung disease.", correct: "Yes", explanation: "Paragraph B states that research has established 'equally strong links between PM2.5 exposure and cardiovascular disease' as with respiratory disease." },
            { id: 29, statement: "Wealthier urban residents are generally exposed to lower levels of air pollution than poorer residents.", correct: "Yes", explanation: "Paragraph C states that 'lower-income communities are disproportionately sited near major roads, industrial facilities' while 'wealthier residents are more likely to live in areas buffered from these sources.'" },
            { id: 30, statement: "The Clean Air Act has been more effective than European air quality legislation in reducing pollution.", correct: "Not Given", explanation: "Paragraph D discusses both the EU Directive and the Clean Air Act separately but makes no direct comparison of their relative effectiveness." },
            { id: 31, statement: "The writer considers urban tree planting a highly effective solution to city-wide air quality problems.", correct: "No", explanation: "Paragraph F explicitly warns that 'the effectiveness of urban greenery as a pollution reduction strategy should not be overstated' and notes only 'modest reductions in city-wide pollutant concentrations.'" },
          ],
        },
        {
          type: "mc_multiple",
          questionRange: "Questions 32–34",
          instructions:
            "Choose TWO letters, A–E.",
          questions: [
            {
              id: 32,
              stem: "Which TWO health effects of PM2.5 exposure are identified in the passage?",
              options: [
                { label: "A", text: "Liver disease" },
                { label: "B", text: "Cognitive decline in older adults" },
                { label: "C", text: "Increased risk of heart attacks" },
                { label: "D", text: "Bone density loss" },
                { label: "E", text: "Hearing impairment" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph B links PM2.5 to cardiovascular disease including 'increased risk of heart attacks and strokes' (C) and to 'accelerated cognitive decline in older adults' (B)."
            },
            {
              id: 33,
              stem: "Which TWO transportation measures are described in the passage as ways to reduce urban air pollution?",
              options: [
                { label: "A", text: "Restricting polluting vehicles from certain city areas" },
                { label: "B", text: "Increasing fuel taxes on all vehicles" },
                { label: "C", text: "Promoting walking and cycling" },
                { label: "D", text: "Building underground rail networks" },
                { label: "E", text: "Expanding airport capacity outside city boundaries" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph E mentions low emission zones restricting polluting vehicles (A) and active travel encouraging walking and cycling (C) as transportation measures to reduce urban air pollution."
            },
            {
              id: 34,
              stem: "Which TWO benefits of urban greenery are mentioned in the passage beyond air quality improvements?",
              options: [
                { label: "A", text: "Reduction in traffic noise" },
                { label: "B", text: "Improved psychological wellbeing" },
                { label: "C", text: "Increased opportunities for physical activity" },
                { label: "D", text: "Reduced water run-off" },
                { label: "E", text: "Lower crime rates" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph F lists 'psychological wellbeing' (B) and 'physical activity' (C) among the indirect health benefits of urban greenery, independent of air quality impact."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "How many premature deaths does the WHO attribute to air pollution each year?", correct: "7 million", explanation: "Paragraph A: the WHO estimates air pollution is responsible for 'approximately 7 million premature deaths annually.'" },
            { id: 36, before: "What biological process triggered by PM2.5 damages arterial walls and promotes atherosclerosis?", correct: "systemic inflammation", explanation: "Paragraph B: fine particles 'trigger systemic inflammation and oxidative stress that damage arterial walls, promote atherosclerosis.'" },
            { id: 37, before: "What term is used in the passage to describe the fairness dimension of unequal pollution exposure?", correct: "environmental justice", explanation: "Paragraph C refers to 'this environmental justice dimension' when discussing advocacy for accounting for distributional pollution impacts." },
            { id: 38, before: "What percentage of EU urban residents were exposed to PM2.5 above WHO guidelines, according to a 2023 report?", correct: "96 percent", explanation: "Paragraph D: 'approximately 96 percent of urban dwellers in the EU were exposed to PM2.5 levels above WHO guideline values' according to the 2023 EEA report." },
            { id: 39, before: "In how many European cities have low emission zones been implemented?", correct: "over 300", explanation: "Paragraph E states low emission zones 'have been implemented in over 300 European cities.'" },
            { id: 40, before: "Where is urban greenery said to be most effective at reducing pollution?", correct: "close proximity", explanation: "Paragraph F states that 'vegetation is most effective in close proximity to specific emission sources.'" },
          ],
        },
      ],
    },
  ],
};
