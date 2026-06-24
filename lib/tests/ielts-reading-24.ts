import type { IELTSTest } from "./types";

export const ieltsReading24: IELTSTest = {
  id: "ielts-reading-24",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 24",
  totalSeconds: 3600,
  passages: [
    {
      number: 1,
      title: "Bird Migration and Navigation",
      paragraphs: [
        {
          letter: "A",
          text: "Every year, billions of birds undertake long-distance migrations — seasonal movements between breeding grounds and wintering areas that, in the most extreme cases, span the entire globe. The Arctic Tern holds the record for the longest annual migration of any animal, travelling from its Arctic breeding grounds to Antarctic wintering areas and back again — a round trip that can exceed 70,000 kilometres. Migratory journeys expose birds to enormous physiological demands and environmental hazards including predation, adverse weather, collision with human-made structures, and energy depletion. Yet despite these challenges, migratory species have evolved extraordinary navigational abilities and physiological adaptations that enable them to complete these journeys with a precision that continues to astonish researchers.",
        },
        {
          letter: "B",
          text: "Birds use multiple overlapping navigational cues to guide their migrations, a redundancy that provides robustness against the failure or unreliability of any single cue. The sun compass — the use of the position of the sun, combined with an internal circadian clock that compensates for the sun's movement across the sky throughout the day — is among the most important navigational mechanisms for diurnal migrants. Nocturnal migrants additionally rely on the star compass, using the rotation pattern of the night sky around the celestial poles as a reference for the north-south axis. Studies using artificial planetariums have demonstrated that young birds learn the stellar reference direction during pre-migratory development by observing the rotation of the star field around the north celestial pole.",
        },
        {
          letter: "C",
          text: "Perhaps the most extraordinary navigational ability of birds is their capacity to detect and use the Earth's magnetic field as a compass and potentially as a map. Two distinct mechanisms have been proposed for magnetic sensing in birds: the radical pair mechanism, involving light-dependent chemical reactions in specialised photoreceptor proteins called cryptochromes in the eye, which may provide a visual representation of the magnetic field; and magnetite-based sensing, in which nanoscale crystals of the magnetic mineral magnetite in beak tissue or the inner ear transduce magnetic field strength and direction into neural signals. Evidence supporting both mechanisms exists, and it is possible that birds use each for different aspects of magnetic navigation — directional information from one and positional information from the other.",
        },
        {
          letter: "D",
          text: "Physiological preparation for migration involves dramatic changes in body composition. In the weeks before departure, migratory birds undergo hyperphagia — an intense period of elevated food consumption — that can double or triple their body mass through the deposition of subcutaneous fat, which serves as the primary fuel for long-distance flight. Organs not essential for flight, including the digestive tract, liver, and kidneys, may shrink substantially before departure, reducing payload weight and reallocating protein to flight muscle. Upon arrival at the destination, these organs rapidly regrow. Some species also enhance flight muscle aerobic capacity and modify the composition of fatty acids deposited as fuel to optimise their energy yield and fluidity at flight temperatures.",
        },
        {
          letter: "E",
          text: "Long-distance migrants face the challenge of finding suitable stopover sites to refuel during their journeys. Stopover sites — wetlands, forests, scrublands, and coastlines where food is abundant and predation risk is manageable — are essential components of the migratory corridor, and their loss or degradation to habitat destruction and development can have major population consequences. Research using satellite tracking and light-level geolocators — small archival devices that record light levels to estimate geographic position — has revealed that individual birds often show strong site fidelity, returning to the same stopover locations year after year. The identification and protection of critical stopover sites has become a priority in migratory bird conservation.",
        },
        {
          letter: "F",
          text: "Artificial light at night is increasingly recognised as a significant threat to migratory birds. Many species migrate at night and use the stars and polarised light patterns at sunset and sunrise as directional cues. Artificial lighting from cities, communication towers, lighthouses, and offshore platforms can disorient nocturnal migrants, causing them to circle illuminated structures for hours or even days, depleting their fat reserves and exposing them to collision risk. It is estimated that between 100 million and one billion birds are killed annually in North America alone through collision with human-made structures, of which windows of buildings and communication towers are the most significant contributors. Mitigation measures including the dimming of lights during peak migration periods and the use of red rather than white or green lighting on communication towers have shown promise in reducing mortality.",
        },
        {
          letter: "G",
          text: "Climate change is altering the timing, routes, and success of bird migration in ways that are already measurable at the population level. Long-term phenological data — records of the timing of seasonal biological events — show that many migratory species are arriving at their breeding grounds earlier in spring, tracking the advance of spring conditions associated with global warming. However, the capacity to adjust migration timing is not uniform across species, and mismatches between the arrival of migrants and the peak abundance of the food resources — insects, flowering plants, fruiting trees — on which they depend upon arrival can reduce breeding success. Species that winter far from their breeding grounds and rely on photoperiod rather than local environmental cues to time departure may be less able to track shifting spring conditions.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i", text: "How artificial lighting poses dangers for birds flying at night" },
            { label: "ii", text: "The physical changes birds undergo before setting out on migration" },
            { label: "iii", text: "The impact of warming temperatures on migratory timing and food availability" },
            { label: "iv", text: "The use of the sun and stars as directional guides during flight" },
            { label: "v", text: "The importance of resting and feeding places along migratory routes" },
            { label: "vi", text: "How birds may sense the Earth's magnetic field for navigation" },
            { label: "vii", text: "Introduction: the scale and challenge of bird migration" },
            { label: "viii", text: "The evolution of feathers as insulation during cold-weather migration" },
            { label: "ix", text: "How captive breeding programmes are used to restore migratory populations" },
          ],
          questions: [
            {
              id: 1,
              paragraph: "B",
              correct: "iv",
              explanation:
                "Paragraph B discusses the sun compass for diurnal migrants and the star compass for nocturnal migrants.",
            },
            {
              id: 2,
              paragraph: "C",
              correct: "vi",
              explanation:
                "Paragraph C covers the magnetic sensing mechanisms — radical pair mechanism and magnetite — by which birds may detect the Earth's magnetic field.",
            },
            {
              id: 3,
              paragraph: "D",
              correct: "ii",
              explanation:
                "Paragraph D describes hyperphagia and physiological changes in body composition before migration.",
            },
            {
              id: 4,
              paragraph: "E",
              correct: "v",
              explanation:
                "Paragraph E discusses stopover sites — their importance, threats from habitat loss, and site fidelity.",
            },
            {
              id: 5,
              paragraph: "F",
              correct: "i",
              explanation:
                "Paragraph F discusses how artificial light at night disorients nocturnal migrants and causes collisions.",
            },
            {
              id: 6,
              paragraph: "G",
              correct: "iii",
              explanation:
                "Paragraph G discusses how climate change is altering migration timing and creating mismatches with food availability.",
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
                "The Arctic Tern's annual round-trip migration can exceed 70,000 kilometres.",
              correct: "True",
              explanation:
                "Paragraph A: 'a round trip that can exceed 70,000 kilometres.'",
            },
            {
              id: 8,
              statement:
                "Young birds learn the stellar reference direction by observing the rotation of the star field around the north celestial pole before they migrate for the first time.",
              correct: "True",
              explanation:
                "Paragraph B: 'young birds learn the stellar reference direction during pre-migratory development by observing the rotation of the star field around the north celestial pole.'",
            },
            {
              id: 9,
              statement:
                "Individual migratory birds have been shown to return to the same stopover locations year after year.",
              correct: "True",
              explanation:
                "Paragraph E: 'individual birds often show strong site fidelity, returning to the same stopover locations year after year.'",
            },
            {
              id: 10,
              statement:
                "The total number of birds killed by communication towers in North America every year is precisely known.",
              correct: "False",
              explanation:
                "Paragraph F: 'It is estimated that between 100 million and one billion birds are killed annually' — this is an estimate range, not a precise figure.",
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
                "Before migration, many birds undergo a period of intense food consumption called ",
              after: ", which can double or triple their body mass through fat deposition.",
              wordLimit: 1,
              correct: "hyperphagia",
              explanation:
                "Paragraph D: 'migratory birds undergo hyperphagia — an intense period of elevated food consumption — that can double or triple their body mass.'",
            },
            {
              id: 12,
              before:
                "Small archival devices called light-level ",
              after: " record light levels and are used by researchers to estimate the geographic positions of individual birds during migration.",
              wordLimit: 1,
              correct: "geolocators",
              explanation:
                "Paragraph E: 'light-level geolocators — small archival devices that record light levels to estimate geographic position.'",
            },
            {
              id: 13,
              before:
                "Long-term records of the timing of seasonal biological events, known as ",
              after: " data, show that many migratory species are arriving at breeding grounds earlier.",
              wordLimit: 1,
              correct: "phenological",
              explanation:
                "Paragraph G: 'Long-term phenological data — records of the timing of seasonal biological events — show that many migratory species are arriving at their breeding grounds earlier.'",
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "The Rise of Microfinance",
      paragraphs: [
        {
          letter: "A",
          text: "Microfinance — the provision of small-scale financial services including credit, savings, insurance, and payment facilities to low-income individuals and households excluded from conventional banking — emerged as a distinct development intervention in the 1970s and has since grown into a global industry serving hundreds of millions of clients. The central premise of microfinance is that poor people, particularly women in developing countries, are creditworthy and entrepreneurially productive but are excluded from conventional financial systems by a combination of lack of collateral, high transaction costs relative to loan size, and the geographic inaccessibility of formal banking infrastructure. Access to credit, even in small amounts, was argued to enable the poor to invest in income-generating activities, smooth consumption, and build assets.",
        },
        {
          letter: "B",
          text: "Muhammad Yunus, a Bangladeshi economist, is widely credited with pioneering modern microfinance through the Grameen Bank, which he founded in Bangladesh in 1983 after a series of small lending experiments in villages near Chittagong University. The Grameen model introduced several innovations that became widely adopted: group lending, in which small groups of borrowers co-guarantee each other's loans, substituting social capital for physical collateral; weekly repayment schedules that reduce default risk and build financial discipline; and a strong targeting of women, who were found to have higher repayment rates and to allocate credit more effectively to household welfare. Yunus and Grameen Bank were jointly awarded the Nobel Peace Prize in 2006 in recognition of their efforts to create economic and social development from below.",
        },
        {
          letter: "C",
          text: "The microfinance movement expanded rapidly from the 1990s onward, driven by international development organisations, NGOs, and increasingly by commercial capital seeking returns in emerging markets. The commercialisation of microfinance — the transformation of non-profit MFIs (microfinance institutions) into regulated, profit-oriented entities capable of accessing capital markets — enabled a dramatic scaling of operations but also introduced tensions with the social mission of serving the poorest clients. The 2010 Andhra Pradesh microfinance crisis in India illustrated these tensions vividly: aggressive loan disbursement by competing MFIs, multiple lending to the same borrowers, and high-pressure repayment practices contributed to over-indebtedness and a wave of borrower suicides that prompted government intervention and a temporary collapse of the sector in the state.",
        },
        {
          letter: "D",
          text: "Rigorous impact evaluations of microfinance — primarily randomised controlled trials (RCTs) conducted since the late 2000s — have produced results considerably more modest than the transformative claims of early advocates. Studies in India, Mexico, Ethiopia, Morocco, Mongolia, and Bosnia found generally positive but small average effects of access to credit on business investment and consumption smoothing, but limited evidence of impacts on poverty reduction, women's empowerment, education, or health. Heterogeneous effects — where credit benefits some households substantially while having little or no effect on most — and the challenge of reaching the poorest households, which often cannot service debt, have led researchers to refine their understanding of for whom and in what conditions microfinance works.",
        },
        {
          letter: "E",
          text: "Mobile money — digital payment and savings services accessible via basic mobile phones — has transformed financial inclusion in low-income countries, particularly in sub-Saharan Africa, in ways that microfinance credit alone did not. Kenya's M-Pesa service, launched in 2007 by the mobile network operator Safaricom, allows users to store, transfer, and withdraw money using their mobile phones, without requiring a bank account. By 2020, M-Pesa had more than 40 million active users and processed transactions equivalent to more than half of Kenya's GDP. Research has found that access to mobile money significantly reduced poverty in Kenya, particularly among female-headed households, by enabling more effective income smoothing, facilitating remittances, and providing a safe savings facility outside the home.",
        },
        {
          letter: "F",
          text: "The concept of financial inclusion has broadened considerably from the original focus on credit provision to encompass a range of financial services — savings, insurance, payment services, and pension products — tailored to the needs and risk profiles of low-income households. The shift in emphasis from credit to savings reflects research showing that poor households already engage in sophisticated informal savings and insurance mechanisms — including rotating savings and credit associations, informal insurance arrangements, and in-kind savings in livestock and durable goods — and that formal financial services often need to complement or improve upon these existing strategies rather than replace them entirely.",
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
              text: "A description of a crisis in which over-indebtedness and high-pressure collection practices led to extreme harm to borrowers",
              correct: "C",
              explanation:
                "Paragraph C: the 2010 Andhra Pradesh crisis — 'multiple lending to the same borrowers, and high-pressure repayment practices contributed to over-indebtedness and a wave of borrower suicides.'",
            },
            {
              id: 15,
              text: "Evidence that access to a mobile financial service significantly reduced poverty, especially among female-headed households",
              correct: "E",
              explanation:
                "Paragraph E: 'Research has found that access to mobile money significantly reduced poverty in Kenya, particularly among female-headed households.'",
            },
            {
              id: 16,
              text: "An explanation of why poor people have historically been excluded from formal banking systems",
              correct: "A",
              explanation:
                "Paragraph A: 'excluded from conventional financial systems by a combination of lack of collateral, high transaction costs relative to loan size, and geographic inaccessibility.'",
            },
            {
              id: 17,
              text: "A summary of findings from randomised controlled trials showing that the effects of microfinance on poverty are more modest than previously claimed",
              correct: "D",
              explanation:
                "Paragraph D: RCT studies 'have produced results considerably more modest than the transformative claims of early advocates.'",
            },
            {
              id: 18,
              text: "A reference to the award of a prestigious international prize to a microfinance pioneer",
              correct: "B",
              explanation:
                "Paragraph B: 'Yunus and Grameen Bank were jointly awarded the Nobel Peace Prize in 2006.'",
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
              stem: "What does the passage say was the key innovation in the Grameen Bank lending model that substituted for physical collateral?",
              options: [
                { label: "A", text: "Government guarantees on all loans" },
                { label: "B", text: "Group lending, where borrowers co-guarantee each other's loans" },
                { label: "C", text: "Long-term repayment periods of five to ten years" },
                { label: "D", text: "Compulsory insurance on all microloans" },
              ],
              correct: "B",
              explanation:
                "Paragraph B: 'group lending, in which small groups of borrowers co-guarantee each other's loans, substituting social capital for physical collateral.'",
            },
            {
              id: 20,
              stem: "When was Kenya's M-Pesa mobile money service launched?",
              options: [
                { label: "A", text: "1983" },
                { label: "B", text: "2000" },
                { label: "C", text: "2007" },
                { label: "D", text: "2020" },
              ],
              correct: "C",
              explanation:
                "Paragraph E: 'Kenya's M-Pesa service, launched in 2007 by the mobile network operator Safaricom.'",
            },
            {
              id: 21,
              stem: "What tension does the passage identify in the commercialisation of microfinance?",
              options: [
                { label: "A", text: "The conflict between using mobile technology and traditional branch banking" },
                { label: "B", text: "The conflict between scaling operations through commercial capital and the social mission of serving the poorest" },
                { label: "C", text: "The conflict between international development donors and local governments" },
                { label: "D", text: "The conflict between group lending models and individual loan products" },
              ],
              correct: "B",
              explanation:
                "Paragraph C: 'The commercialisation of microfinance… introduced tensions with the social mission of serving the poorest clients.'",
            },
            {
              id: 22,
              stem: "According to the passage, what shift in emphasis has occurred in the broader financial inclusion movement?",
              options: [
                { label: "A", text: "From digital services to face-to-face bank branches" },
                { label: "B", text: "From serving women to serving men" },
                { label: "C", text: "From credit provision to a broader range including savings, insurance, and payment services" },
                { label: "D", text: "From informal to purely formal financial systems" },
              ],
              correct: "C",
              explanation:
                "Paragraph F: 'The concept of financial inclusion has broadened considerably from the original focus on credit provision to encompass a range of financial services — savings, insurance, payment services, and pension products.'",
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 23–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Grameen Bank and the Microfinance Model",
          summaryText:
            "Muhammad Yunus founded the Grameen Bank in Bangladesh in {{23}} following small lending experiments near Chittagong University. The Grameen model relied on {{24}} lending, in which borrowers in small groups guarantee each other's loans. Repayment was arranged on a {{25}} schedule to reduce default risk and build financial discipline. A strong emphasis was placed on lending to {{26}}, who were found to allocate credit more effectively to household welfare and to have higher repayment rates.",
          questions: [
            {
              id: 23,
              blankId: 23,
              correct: "1983",
              explanation:
                "Paragraph B: 'the Grameen Bank, which he founded in Bangladesh in 1983.'",
            },
            {
              id: 24,
              blankId: 24,
              correct: "group",
              explanation:
                "Paragraph B: 'group lending, in which small groups of borrowers co-guarantee each other's loans.'",
            },
            {
              id: 25,
              blankId: 25,
              correct: "weekly",
              explanation:
                "Paragraph B: 'weekly repayment schedules that reduce default risk and build financial discipline.'",
            },
            {
              id: 26,
              blankId: 26,
              correct: "women",
              explanation:
                "Paragraph B: 'a strong targeting of women, who were found to have higher repayment rates and to allocate credit more effectively to household welfare.'",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Ancient Roman Engineering",
      paragraphs: [
        {
          letter: "A",
          text: "The engineering achievements of ancient Rome — roads, aqueducts, bridges, harbours, amphitheatres, and public baths — represent one of the most impressive bodies of applied technology in the ancient world and many of these structures have survived, wholly or substantially, to the present day. Roman engineering was characterised not by dramatic theoretical advances beyond the knowledge of preceding civilisations — much Roman technique derived from Greek, Etruscan, and Near Eastern precedents — but by an extraordinary capacity for systematic application, standardisation, organisation, and the deployment of engineering solutions at an unprecedented scale across a vast imperial territory. The Roman road network, which at its greatest extent totalled approximately 400,000 kilometres, was the logistical backbone of the empire, enabling the rapid movement of armies, officials, goods, and information.",
        },
        {
          letter: "B",
          text: "Roman concrete — opus caementicium — was among the most transformative materials in the history of construction. Unlike modern Portland cement concrete, which relies on calcium silicate hydrates for its strength, Roman concrete combined volcanic ash (particularly pozzolana from the region around Pozzuoli near Naples) with lime and seawater to produce a material that hardened not only in air but underwater, and developed exceptional strength and durability over time through a process of continuing mineral crystallisation. The use of opus caementicium enabled Roman engineers to construct the vast dome of the Pantheon — 43.3 metres in diameter, the largest unreinforced concrete dome in the world and still structurally intact after nearly 1,900 years — and the massive breakwaters of harbour installations including Caesarea Maritima in modern Israel.",
        },
        {
          letter: "C",
          text: "The Roman aqueduct system represents perhaps the most celebrated expression of Roman hydraulic engineering. By the fourth century CE, eleven major aqueducts supplied the city of Rome with an estimated 1 million cubic metres of water per day — a per capita supply comparable to or exceeding that of many modern cities. Aqueducts were designed to maintain a precisely controlled gradient — typically between 1 in 1,000 and 1 in 5,000 — so that water flowed by gravity from mountain springs to urban distribution networks without pumping. Where the terrain required it, engineers built spectacular multi-tiered arched bridges — the Pont du Gard in southern France stands 49 metres high and spans 275 metres — and cut tunnels through hills. Water was distributed in cities through a system of lead and terracotta pipes to public fountains, bathhouses, and the homes of wealthy private consumers.",
        },
        {
          letter: "D",
          text: "The Roman road network exemplified the Romans' genius for standardisation and systematic engineering. Major roads — viae publicae — were constructed to a consistent design: a foundation of large flat stones was laid on a prepared sub-base, followed by layers of rubble and gravel, topped by a cambered surface of large polygonal stones fitted precisely together. Roads were built straight where terrain permitted, following surveyed lines that minimised deviation. Milestones were placed at regular intervals indicating distances to major cities. The network was maintained by a central administration and served as the physical expression of Roman territorial control, enabling not only military movement but the operation of the cursus publicus — the imperial postal and transport service — which allowed officials and correspondence to travel at speeds of up to 75 kilometres per day.",
        },
        {
          letter: "E",
          text: "Roman engineers developed sophisticated solutions for bridging rivers and other water obstacles. The most impressive Roman bridges were built of stone, using the semicircular arch — a structural form capable of transmitting compressive loads through masonry without tensile stress — to span rivers at widths impossible for timber construction. The Alcántara Bridge over the River Tagus in Spain, completed in 106 CE, has six arches spanning a total length of 194 metres at a height of 48 metres above the river and has remained in continuous use, with limited restoration, to the present day. Caesar's bridge over the Rhine, constructed in ten days in 55 BCE using timber piling as a demonstration of Roman military engineering capability, demonstrated that bridging major rivers was a routine logistical operation for Roman armies in the field.",
        },
        {
          letter: "F",
          text: "Public baths — thermae — were among the most sophisticated building types in the Roman world and demonstrate the integration of engineering, architecture, and urban planning in Roman civic culture. Major imperial thermae, including the Baths of Caracalla completed in 216 CE, provided bathing facilities for up to 8,000 simultaneous visitors across a complex covering 13 hectares. The baths incorporated underfloor heating systems — the hypocaust — in which hot gases from wood-fired furnaces circulated beneath raised floors and through hollow wall tiles, maintaining different rooms at carefully graduated temperatures. Water supply was provided by dedicated aqueduct branches, and the waste water was discharged into the city's sewer network — the Cloaca Maxima, one of the world's earliest large-scale sewer systems, constructed in the sixth century BCE.",
        },
        {
          letter: "G",
          text: "The legacy of Roman engineering extends far beyond the physical survival of individual structures. Roman construction techniques, measurement systems, legal frameworks for land surveying, and organisational models were transmitted to medieval Europe through the continuation of Roman institutions and the study of Roman texts, influencing the building of medieval cathedrals, town planning, and infrastructure development. Modern assessments of Roman concrete have attracted intense scientific interest: researchers have found that the pozzolana-lime-seawater formula used in Roman marine structures is not only extraordinarily durable but may offer lessons for the development of lower-carbon cement alternatives to modern Portland cement, whose production accounts for approximately 8 percent of global CO₂ emissions.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 27–32",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs A–G from the list of headings below.",
          headings: [
            { label: "i", text: "A building type that combined engineering skill with civic and social function" },
            { label: "ii", text: "The lasting influence of Roman building methods and materials" },
            { label: "iii", text: "An overview of Roman engineering and what distinguished it from predecessors" },
            { label: "iv", text: "How water was transported across long distances and distributed in cities" },
            { label: "v", text: "The material that allowed the Romans to build on an unprecedented scale" },
            { label: "vi", text: "Standardised road construction and the postal service it enabled" },
            { label: "vii", text: "Stone arches and timber piles used to cross rivers" },
            { label: "viii", text: "Roman military tactics for besieging fortified cities" },
          ],
          questions: [
            {
              id: 27,
              paragraph: "A",
              correct: "iii",
              explanation:
                "Paragraph A introduces Roman engineering, characterises its distinguishing features, and mentions the road network as its logistical backbone.",
            },
            {
              id: 28,
              paragraph: "B",
              correct: "v",
              explanation:
                "Paragraph B discusses Roman concrete (opus caementicium) as a transformative material enabling construction at unprecedented scale.",
            },
            {
              id: 29,
              paragraph: "C",
              correct: "iv",
              explanation:
                "Paragraph C covers the Roman aqueduct system — how water was transported by gravity and distributed in cities.",
            },
            {
              id: 30,
              paragraph: "D",
              correct: "vi",
              explanation:
                "Paragraph D discusses standardised road design and the cursus publicus — the imperial postal service the road network enabled.",
            },
            {
              id: 31,
              paragraph: "E",
              correct: "vii",
              explanation:
                "Paragraph E covers Roman bridge engineering using stone arches and Caesar's timber pile bridge over the Rhine.",
            },
            {
              id: 32,
              paragraph: "F",
              correct: "i",
              explanation:
                "Paragraph F describes the thermae (public baths) as sophisticated buildings combining engineering with civic and social function.",
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
                "The Pantheon's dome is 43.3 metres in diameter and remains structurally intact after nearly 1,900 years.",
              correct: "Yes",
              explanation:
                "Paragraph B: 'the vast dome of the Pantheon — 43.3 metres in diameter, the largest unreinforced concrete dome in the world and still structurally intact after nearly 1,900 years.'",
            },
            {
              id: 34,
              statement:
                "Caesar's bridge over the Rhine was constructed in ten days as a demonstration of Roman military engineering capability.",
              correct: "Yes",
              explanation:
                "Paragraph E: 'Caesar's bridge over the Rhine, constructed in ten days in 55 BCE using timber piling as a demonstration of Roman military engineering capability.'",
            },
            {
              id: 35,
              statement:
                "The Baths of Caracalla were the largest thermae ever built in the Roman Empire.",
              correct: "Not Given",
              explanation:
                "Paragraph F describes the Baths of Caracalla as a major example but does not state they were the largest ever built.",
            },
            {
              id: 36,
              statement:
                "Modern Portland cement production accounts for approximately 8 percent of global CO₂ emissions.",
              correct: "Yes",
              explanation:
                "Paragraph G: 'modern Portland cement, whose production accounts for approximately 8 percent of global CO₂ emissions.'",
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
              before: "What was the total length of the Roman road network at its greatest extent?",
              correct: "400,000 kilometres",
              wordLimit: 3,
              explanation:
                "Paragraph A: 'The Roman road network, which at its greatest extent totalled approximately 400,000 kilometres.'",
            },
            {
              id: 38,
              before: "What term is used for the volcanic ash combined with lime and seawater to produce Roman concrete?",
              correct: "pozzolana",
              wordLimit: 1,
              explanation:
                "Paragraph B: 'volcanic ash (particularly pozzolana from the region around Pozzuoli near Naples).'",
            },
            {
              id: 39,
              before: "What was the name of the Roman imperial postal and transport service that operated on the road network?",
              correct: "cursus publicus",
              wordLimit: 2,
              explanation:
                "Paragraph D: 'the cursus publicus — the imperial postal and transport service.'",
            },
            {
              id: 40,
              before: "What Roman underfloor heating system circulated hot gases from furnaces beneath raised floors?",
              correct: "hypocaust",
              wordLimit: 1,
              explanation:
                "Paragraph F: 'The baths incorporated underfloor heating systems — the hypocaust — in which hot gases from wood-fired furnaces circulated beneath raised floors.'",
            },
          ],
        },
      ],
    },
  ],
};
