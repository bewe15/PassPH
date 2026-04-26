import type { IELTSTest } from "./types";

export const ieltsReading5: IELTSTest = {
  id: "ielts-reading-5",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 5",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Urban Planning and the Walkable City",
      paragraphs: [
        {
          letter: "A",
          text: "For much of the twentieth century, urban planning in the industrialised world was shaped by a single dominant paradigm: the city designed around the private motor vehicle. Inspired by the visions of modernist planners such as Le Corbusier, whose Radiant City concept proposed towers set in open parkland connected by high-speed expressways, municipalities across North America and Europe demolished dense neighbourhoods, widened roads, and erected freeways through the hearts of cities. The consequences were far-reaching — the dispersal of residential populations across sprawling suburbs, the decline of local retail, and the near-elimination of pedestrian activity from public space — and many urban scholars now regard this period as one of the most consequential planning errors of modern times.",
        },
        {
          letter: "B",
          text: "The concept of the 'walkable city' emerged as a direct counterpoint to automobile-centric urbanism. At its core, walkability refers to the degree to which the built environment supports and encourages travel on foot. Key determinants include the density and mix of land uses — the proximity of homes to shops, workplaces, schools, and public transport — as well as the physical quality of the pedestrian environment, encompassing pavement condition, street-level façade activity, tree cover, and a sense of enclosure created by human-scaled buildings. Research consistently demonstrates that high walkability is associated with increased physical activity, lower rates of obesity and cardiovascular disease, reduced car ownership, and stronger social ties among residents.",
        },
        {
          letter: "C",
          text: "Measurement tools have been developed to quantify walkability at a fine spatial scale. Walk Score, a commercially developed algorithm widely used in North American real-estate markets, rates addresses from zero to one hundred based on the walking distance to amenities such as grocery stores, restaurants, parks, and schools. Academic alternatives such as the Walkshed Index and pedestrian catchment area analysis seek to capture more nuanced aspects of the pedestrian environment, including gradient, network connectivity, and perceived safety. These metrics have proven valuable in identifying disparities in walkability across socioeconomic groups and in evaluating the impact of planning interventions.",
        },
        {
          letter: "D",
          text: "Several cities have become internationally recognised exemplars of walkable urban design. Copenhagen and Amsterdam are celebrated for their integration of walking and cycling infrastructure into comprehensive mobility networks that consistently achieve modal shares of active travel exceeding fifty percent. In North America, New York City's Manhattan and San Francisco's inner neighbourhoods score highly on walkability indices. Melbourne, Australia, has invested substantially in what it terms the '20-Minute Neighbourhood' — the aspiration that residents should be able to meet most daily needs within a twenty-minute walk of their homes — and has incorporated the concept into its metropolitan planning strategy.",
        },
        {
          letter: "E",
          text: "Retrofitting existing car-dependent suburbs for walkability is considerably more challenging than designing walkable districts from scratch. The physical structure of postwar suburbs — characterised by single-use zoning, low-density detached housing, curvilinear road layouts designed to discourage through traffic, and setbacks that place buildings far from the street — is fundamentally hostile to pedestrian movement. Incremental interventions such as the infill of vacant lots, mixed-use rezoning along transit corridors, and the conversion of underused parking facilities into housing and retail can improve walkability at the margins, but planners caution that transformative change requires sustained political will and may span multiple generations.",
        },
        {
          letter: "F",
          text: "Critics of the walkable city concept have raised concerns about equity and displacement. Research has consistently found that the most walkable urban neighbourhoods command significant real-estate premiums, and that investments in walking infrastructure can accelerate gentrification, displacing lower-income residents from areas they have historically occupied. The paradox of walkability — that the environments best suited to the health and social needs of low-income populations are increasingly unaffordable to them — has prompted calls for planning policies that pair walkability investments with affordable housing requirements and tenant protections, to ensure that the benefits of improved urban environments are equitably distributed.",
        },
        {
          letter: "G",
          text: "Advances in digital technology are opening new frontiers for walkability planning and research. Smartphone GPS data and passive wi-fi sensing allow researchers to map pedestrian flows at unprecedented spatial and temporal resolution, revealing patterns of movement that were previously invisible to planners. Augmented reality tools are being piloted to visualise proposed streetscape changes before construction, enabling more meaningful public participation in planning processes. There is also growing interest in the role of autonomous vehicles and micro-mobility devices — electric scooters and cargo bikes — in creating seamless first- and last-mile connections to transit, potentially extending the reach of walkable urbanism beyond traditional dense cores.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The rise of car-centred planning and its lasting consequences" },
            { label: "ii",   text: "Defining walkability and its links to health and community" },
            { label: "iii",  text: "Tools and methods for measuring pedestrian-friendly environments" },
            { label: "iv",   text: "Cities that have successfully prioritised pedestrian travel" },
            { label: "v",    text: "The difficulties of adapting suburbs designed for cars" },
            { label: "vi",   text: "Technology's contribution to future walkability planning" },
            { label: "vii",  text: "The risk that walkable neighbourhoods become unaffordable" },
            { label: "viii", text: "Government subsidies for active transport infrastructure" },
            { label: "ix",   text: "The relationship between walkability and property taxes" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "ii",   explanation: "Paragraph B defines walkability and lists its health, social, and environmental benefits." },
            { id: 2, paragraph: "C", correct: "iii",  explanation: "Paragraph C describes Walk Score, Walkshed Index, and other measurement tools for quantifying walkability." },
            { id: 3, paragraph: "D", correct: "iv",   explanation: "Paragraph D presents Copenhagen, Amsterdam, and Melbourne as exemplars of walkable city design." },
            { id: 4, paragraph: "E", correct: "v",    explanation: "Paragraph E focuses on the structural challenges of retrofitting car-dependent suburbs for walkability." },
            { id: 5, paragraph: "F", correct: "vii",  explanation: "Paragraph F discusses gentrification, real-estate premiums, and displacement of lower-income residents from walkable areas." },
            { id: 6, paragraph: "G", correct: "vi",   explanation: "Paragraph G covers GPS data, augmented reality, and micro-mobility technologies for walkability planning." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "Le Corbusier's Radiant City included expressways connecting tower buildings set in open parkland.", correct: "True", explanation: "Paragraph A describes Le Corbusier's Radiant City as proposing 'towers set in open parkland connected by high-speed expressways.'" },
            { id: 8,  statement: "Walk Score uses factors including street gradient and perceived safety in its ratings.", correct: "False", explanation: "Paragraph C states Walk Score rates addresses based on 'walking distance to amenities.' It is the academic alternatives (Walkshed Index) that include gradient and perceived safety." },
            { id: 9,  statement: "Melbourne's 20-Minute Neighbourhood target applies to journeys made by car as well as on foot.", correct: "Not Given", explanation: "The passage describes the 20-Minute Neighbourhood as involving walking ('twenty-minute walk') but does not discuss whether car travel is included in the target." },
            { id: 10, statement: "The most walkable urban areas tend to have higher property prices than less walkable areas.", correct: "True", explanation: "Paragraph F states that 'the most walkable urban neighbourhoods command significant real-estate premiums.'" },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "In Copenhagen and Amsterdam, more than half of all journeys are made by active travel, giving those cities a ", after: " of active travel exceeding fifty percent.", correct: "modal share", explanation: "Paragraph D: 'consistently achieve modal shares of active travel exceeding fifty percent.'" },
            { id: 12, before: "A key characteristic of postwar suburbs that undermines pedestrian movement is ", after: ", which places buildings far from the street.", correct: "setbacks", explanation: "Paragraph E lists 'setbacks that place buildings far from the street' as a feature hostile to pedestrian movement." },
            { id: 13, before: "Planners argue that improving walkability investments in low-income neighbourhoods should be paired with affordable housing requirements and ", after: " to prevent displacement.", correct: "tenant protections", explanation: "Paragraph F: 'planning policies that pair walkability investments with affordable housing requirements and tenant protections.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "The Placebo Effect in Medicine",
      paragraphs: [
        {
          letter: "A",
          text: "The placebo effect — the measurable, demonstrable improvement in a patient's condition that results from an inert treatment rather than from any pharmacologically active ingredient — has been documented in clinical medicine for centuries, but its mechanisms and implications remain incompletely understood. Historically dismissed as a nuisance variable to be controlled for in randomised clinical trials, the placebo response is now recognised as a genuine psychobiological phenomenon worthy of investigation in its own right. Patients receiving sugar pills, saline injections, or even sham surgical procedures have reported and demonstrated objectively verifiable improvements across a remarkable range of conditions.",
        },
        {
          letter: "B",
          text: "Neuroimaging research has begun to unravel the biological substrate of the placebo effect. Studies using positron emission tomography have shown that patients with Parkinson's disease who believe they are receiving active medication release endogenous dopamine in the striatum — a finding of considerable significance given that dopamine deficiency is the central pathological feature of the disease. In pain studies, placebo analgesia has been linked to the release of endogenous opioids, as demonstrated by experiments in which the opioid antagonist naloxone blocks the pain-relieving effects of placebo treatment. These findings confirm that placebo responses involve real neurochemical changes, not merely subjective reports.",
        },
        {
          letter: "C",
          text: "The context in which treatment is delivered exerts a powerful influence on placebo responses. Warm, empathic interactions between clinicians and patients, clear and positive communication about the likely effects of treatment, and the ritual elements of medical care — white coats, clinical settings, elaborate equipment — all contribute to the magnitude of the placebo response. A seminal study by Ted Kaptchuk and colleagues at Harvard Medical School found that patients with irritable bowel syndrome who received sham acupuncture alongside attentive, empathic practitioners reported significantly greater symptom relief than those who received sham acupuncture with minimal interaction, even though both groups knew their treatment was inert.",
        },
        {
          letter: "D",
          text: "Research on so-called 'open-label' placebos — in which patients are explicitly told that they are receiving an inert treatment — has challenged a long-held assumption that deception is necessary for the placebo effect to operate. Studies conducted across conditions including cancer-related fatigue, chronic lower back pain, and attention deficit hyperactivity disorder have found that patients continue to report benefit from placebos even when fully informed of their nature. Researchers hypothesise that the improvement may be sustained by conditioned responses — the body's learned association between the act of taking medication and physiological change — rather than by the patient's expectation of specific pharmacological action.",
        },
        {
          letter: "E",
          text: "Individual differences in placebo responsiveness have attracted increasing research attention. Studies have found that placebo responses are significantly modulated by personality traits, including optimism, neuroticism, and trait anxiety, as well as by genetic factors. A 2012 study identified variants in the gene encoding catechol-O-methyltransferase (COMT), an enzyme involved in dopamine metabolism, as predictors of placebo responsiveness in a large sample of irritable bowel syndrome patients. This raises the prospect of a future in which clinicians can identify patients most likely to benefit from placebo-augmented treatments, raising complex ethical questions about informed consent and therapeutic intent.",
        },
        {
          letter: "F",
          text: "The clinical and ethical implications of placebo research are far-reaching. Survey data suggest that a significant proportion of clinicians in many countries already administer 'impure' placebos — treatments with some pharmacological activity, such as vitamins or sub-therapeutic doses of active drugs, prescribed primarily for their placebo effect. Professional bodies in several countries have issued guidance discouraging this practice on the grounds that it compromises patient autonomy and trust. However, a growing faction of researchers argues that if placebo effects can be harnessed without deception, as open-label research suggests, they represent a legitimate and underexploited component of the therapeutic toolkit.",
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
            { id: 14, text: "A study in which patients knew their treatment was inert yet still experienced symptom relief", correct: "D", explanation: "Paragraph D describes open-label placebo studies where patients were explicitly told the treatment was inert but still reported benefit." },
            { id: 15, text: "Evidence that placebo treatments produce measurable changes in brain chemistry", correct: "B", explanation: "Paragraph B describes neuroimaging evidence of dopamine release and opioid involvement — real neurochemical changes." },
            { id: 16, text: "A description of how the surroundings and manner of treatment delivery affect patient outcomes", correct: "C", explanation: "Paragraph C explains how clinician empathy, communication, and clinical ritual contribute to the magnitude of placebo responses." },
            { id: 17, text: "A reference to the widespread undisclosed use of placebos by practising clinicians", correct: "F", explanation: "Paragraph F: survey data show a 'significant proportion of clinicians' administer 'impure' placebos in routine practice." },
            { id: 18, text: "A genetic finding that may allow clinicians to predict who will respond best to placebo treatment", correct: "E", explanation: "Paragraph E: variants in the COMT gene were identified as predictors of placebo responsiveness." },
            { id: 19, text: "The historical tendency to treat placebo responses as a confounding factor in drug trials", correct: "A", explanation: "Paragraph A: placebo was 'historically dismissed as a nuisance variable to be controlled for in randomised clinical trials.'" },
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
              stem: "According to paragraph B, how do researchers know that placebo analgesia is not simply a subjective report?",
              options: [
                { label: "A", text: "Patients described their pain as reduced in all trials conducted." },
                { label: "B", text: "The pain relief was blocked by an opioid antagonist, showing real neurochemical involvement." },
                { label: "C", text: "Brain scans showed no activity in pain-processing regions." },
                { label: "D", text: "Patients with the highest pain scores benefited the most from placebos." },
              ],
              correct: "B",
              explanation: "Paragraph B: naloxone, an opioid antagonist, 'blocks the pain-relieving effects of placebo treatment,' confirming real opioid involvement rather than subjective reporting."
            },
            {
              id: 21,
              stem: "What was the key finding of Kaptchuk's study on irritable bowel syndrome patients?",
              options: [
                { label: "A", text: "Real acupuncture was significantly more effective than sham acupuncture." },
                { label: "B", text: "Empathic interaction improved outcomes even when patients knew treatment was inert." },
                { label: "C", text: "Patients who were deceived about their treatment showed the least improvement." },
                { label: "D", text: "The quality of the acupuncture needles determined the level of symptom relief." },
              ],
              correct: "B",
              explanation: "Paragraph C: patients receiving sham acupuncture with empathic practitioners showed greater relief than those with minimal interaction — both groups knew treatment was inert."
            },
            {
              id: 22,
              stem: "According to paragraph D, why might open-label placebos continue to be effective?",
              options: [
                { label: "A", text: "Patients do not fully believe they are taking an inert substance." },
                { label: "B", text: "The active ingredients in the placebo interact with brain chemistry." },
                { label: "C", text: "The body has a learned association between taking medication and physiological change." },
                { label: "D", text: "Doctors unconsciously communicate positive expectations to patients." },
              ],
              correct: "C",
              explanation: "Paragraph D: improvement may be sustained by 'conditioned responses — the body's learned association between the act of taking medication and physiological change.'"
            },
            {
              id: 23,
              stem: "What is the position of professional bodies regarding 'impure' placebos, as described in the passage?",
              options: [
                { label: "A", text: "They encourage their use as a cost-effective supplement to active treatments." },
                { label: "B", text: "They have not yet issued any formal guidance on the matter." },
                { label: "C", text: "They discourage their use because of concerns about patient trust and autonomy." },
                { label: "D", text: "They recommend their use only when active treatments have failed." },
              ],
              correct: "C",
              explanation: "Paragraph F: professional bodies have issued 'guidance discouraging this practice on the grounds that it compromises patient autonomy and trust.'"
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "How the Placebo Effect Works",
          summaryText:
            "The placebo effect is now understood to involve genuine physiological processes rather than mere imagination. Neuroimaging has shown that Parkinson's patients release endogenous {{24}} in the brain when they believe they are receiving active medication. In experiments on pain, the effect was abolished by administering {{25}}, an opioid-blocking drug, confirming that real biochemical pathways are involved. Researchers have also found that individual {{26}} traits such as optimism and neuroticism significantly influence how strongly a person responds to placebo treatment.",
          wordBank: ["dopamine", "naloxone", "personality", "serotonin", "morphine", "genetic", "opioid", "cortisol"],
          questions: [
            { id: 24, blankId: 24, correct: "dopamine", explanation: "Paragraph B: Parkinson's patients 'release endogenous dopamine in the striatum' when believing they receive active medication." },
            { id: 25, blankId: 25, correct: "naloxone", explanation: "Paragraph B: 'the opioid antagonist naloxone blocks the pain-relieving effects of placebo treatment.'" },
            { id: 26, blankId: 26, correct: "personality", explanation: "Paragraph E: placebo responses are 'significantly modulated by personality traits, including optimism, neuroticism, and trait anxiety.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "The Search for Dark Matter",
      paragraphs: [
        {
          letter: "A",
          text: "One of the most profound puzzles in modern physics is the nature of dark matter — an invisible, non-luminous form of matter that does not interact with electromagnetic radiation and therefore cannot be directly observed by any telescope, yet whose gravitational effects on the visible universe are unmistakeable. Astronomical observations have established with high confidence that the ordinary matter of which stars, planets, and all known particles are made constitutes only about five percent of the total energy content of the universe. Dark matter accounts for roughly twenty-seven percent, and an even more mysterious entity known as dark energy makes up the remaining sixty-eight percent.",
        },
        {
          letter: "B",
          text: "The first robust evidence for dark matter emerged from the work of Swiss astronomer Fritz Zwicky in the 1930s, who applied the virial theorem to the Coma cluster of galaxies and found that the cluster's visible mass was far too small to prevent its member galaxies from flying apart. The implications of his finding were largely ignored for several decades. A more compelling case was built in the 1970s by Vera Rubin and Kent Ford, whose meticulous measurements of galactic rotation curves — the relationship between orbital velocity and distance from the galactic centre — showed that stars at the outer edges of galaxies rotate just as fast as those near the centre. This flatness of the rotation curve cannot be explained without invoking a large quantity of unseen mass distributed in a halo surrounding the visible disc.",
        },
        {
          letter: "C",
          text: "A wide range of candidate particles has been proposed to account for dark matter. Weakly interacting massive particles, or WIMPs, dominated theoretical predictions for several decades because they arise naturally from supersymmetric extensions of the Standard Model of particle physics and would have been produced in the right abundance during the Big Bang. MACHOs — Massive Compact Halo Objects, such as black holes, neutron stars, and brown dwarfs — represent a non-exotic alternative but are now considered unlikely to account for more than a small fraction of the total dark matter budget. More recently, axions — hypothetical particles originally proposed to resolve a separate problem in quantum chromodynamics — have attracted renewed theoretical and experimental interest.",
        },
        {
          letter: "D",
          text: "Despite decades of intensive searching, no direct detection of a dark matter particle has been confirmed. Underground detectors designed to capture the rare interactions of WIMPs with atomic nuclei — including the LUX-ZEPLIN experiment in South Dakota and the XENONnT detector beneath the Gran Sasso mountain in Italy — have progressively tightened the constraints on WIMP properties without producing a confirmed signal. Particle accelerators, particularly the Large Hadron Collider at CERN, have searched for evidence of dark matter production in high-energy collisions but have similarly returned null results, placing increasing pressure on the WIMP hypothesis.",
        },
        {
          letter: "E",
          text: "Indirect detection methods offer an alternative approach. If dark matter particles annihilate one another, they should produce high-energy photons, neutrinos, or antimatter particles as by-products, which could be detected by space-based observatories. The Fermi Gamma-ray Space Telescope has identified several unexplained gamma-ray signals from the galactic centre and from dwarf spheroidal galaxies that have been tentatively attributed to dark matter annihilation, though astrophysical sources — supernova remnants, pulsars — remain plausible alternative explanations. The AMS-02 detector aboard the International Space Station has measured an excess of cosmic-ray positrons, which some researchers interpret as a dark matter signature.",
        },
        {
          letter: "F",
          text: "A growing minority of physicists argues that the need for dark matter could be eliminated by modifying the laws of gravity rather than invoking new particles. Modified Newtonian Dynamics, or MOND, proposed by Mordehai Milgrom in 1983, achieves a good fit to galactic rotation curves without dark matter by positing that gravity behaves differently at very low accelerations. However, MOND struggles to explain the large-scale structure of the universe and the behaviour of colliding galaxy clusters such as the Bullet Cluster, where gravitational lensing measurements show that the centre of mass is offset from the location of the hot gas — a finding most naturally interpreted as evidence of particle dark matter rather than modified gravity.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "The writer considers the evidence for dark matter's existence to be well established.", correct: "Yes", explanation: "Paragraph A: 'Astronomical observations have established with high confidence' the gravitational effects of dark matter — the writer presents the evidence as robust." },
            { id: 28, statement: "Fritz Zwicky's findings about galaxy clusters were immediately accepted by the scientific community.", correct: "No", explanation: "Paragraph B: 'The implications of his finding were largely ignored for several decades,' contradicting immediate acceptance." },
            { id: 29, statement: "WIMP particles have been detected in underground laboratory experiments but results have not yet been independently confirmed.", correct: "No", explanation: "Paragraph D states clearly that 'no direct detection of a dark matter particle has been confirmed' — not that results are awaiting confirmation." },
            { id: 30, statement: "The writer regards MOND as a credible alternative explanation to particle dark matter.", correct: "No", explanation: "Paragraph F notes MOND 'struggles' with large-scale structure and the Bullet Cluster evidence, and the writer frames particle dark matter as the more natural interpretation." },
            { id: 31, statement: "The AMS-02 positron excess has been definitively attributed to dark matter annihilation.", correct: "Not Given", explanation: "Paragraph E says 'some researchers interpret' the AMS-02 excess as a dark matter signature — no definitive attribution is stated or rejected by the passage." },
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
              stem: "Which TWO types of evidence for dark matter are discussed in paragraph B?",
              options: [
                { label: "A", text: "The behaviour of galaxy clusters under gravitational analysis" },
                { label: "B", text: "The unexplained gamma-ray emissions from the galactic centre" },
                { label: "C", text: "The rotational speeds of stars at the outer edges of galaxies" },
                { label: "D", text: "The detection of axion particles in laboratory experiments" },
                { label: "E", text: "The mass measurements of individual neutron stars" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph B presents Zwicky's virial theorem analysis of galaxy clusters (A) and Rubin and Ford's galactic rotation curve measurements (C) as evidence for dark matter."
            },
            {
              id: 33,
              stem: "Which TWO dark matter candidates does the passage describe as currently attracting the most active experimental interest?",
              options: [
                { label: "A", text: "MACHOs" },
                { label: "B", text: "WIMPs" },
                { label: "C", text: "Brown dwarfs" },
                { label: "D", text: "Axions" },
                { label: "E", text: "Neutrinos" },
              ],
              pickCount: 2,
              correct: ["B", "D"],
              explanation: "Paragraph C describes WIMPs as having 'dominated theoretical predictions' and having active detectors (paragraph D), and axions as attracting 'renewed theoretical and experimental interest.'"
            },
            {
              id: 34,
              stem: "Which TWO weaknesses of MOND are identified in the passage?",
              options: [
                { label: "A", text: "It cannot explain galactic rotation curves." },
                { label: "B", text: "It fails to account for the large-scale structure of the universe." },
                { label: "C", text: "It requires the existence of more than one type of new particle." },
                { label: "D", text: "It cannot explain observations of colliding galaxy clusters." },
                { label: "E", text: "It has been disproved by Large Hadron Collider data." },
              ],
              pickCount: 2,
              correct: ["B", "D"],
              explanation: "Paragraph F: MOND 'struggles to explain the large-scale structure of the universe' (B) and 'the behaviour of colliding galaxy clusters such as the Bullet Cluster' (D)."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "What percentage of the universe's total energy content is made up of ordinary matter?", correct: "five percent", explanation: "Paragraph A: 'ordinary matter… constitutes only about five percent of the total energy content of the universe.'" },
            { id: 36, before: "What mathematical tool did Fritz Zwicky use to analyse the Coma cluster?", correct: "virial theorem", explanation: "Paragraph B: 'Zwicky… applied the virial theorem to the Coma cluster of galaxies.'" },
            { id: 37, before: "What shape do galactic rotation curves take that cannot be explained by visible matter alone?", correct: "flat", explanation: "Paragraph B refers to 'This flatness of the rotation curve' as the key anomaly requiring unseen mass." },
            { id: 38, before: "Where is the LUX-ZEPLIN dark matter detector located?", correct: "South Dakota", explanation: "Paragraph D: 'the LUX-ZEPLIN experiment in South Dakota.'" },
            { id: 39, before: "Which space telescope has detected unexplained gamma-ray signals that some researchers link to dark matter?", correct: "Fermi Gamma-ray", explanation: "Paragraph E: 'The Fermi Gamma-ray Space Telescope has identified several unexplained gamma-ray signals.'" },
            { id: 40, before: "Who proposed Modified Newtonian Dynamics in 1983?", correct: "Mordehai Milgrom", explanation: "Paragraph F: 'Modified Newtonian Dynamics, or MOND, proposed by Mordehai Milgrom in 1983.'" },
          ],
        },
      ],
    },
  ],
};
