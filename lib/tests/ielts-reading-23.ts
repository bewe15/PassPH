import type { IELTSTest } from "./types";

export const ieltsReading23: IELTSTest = {
  id: "ielts-reading-23",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 23",
  totalSeconds: 3600,
  passages: [
    {
      number: 1,
      title: "The Silk Road and Ancient Trade",
      paragraphs: [
        {
          letter: "A",
          text: "The Silk Road — a loosely connected network of overland and maritime trade routes stretching from China across Central Asia, the Middle East, and ultimately to the Mediterranean and Europe — facilitated the exchange of goods, peoples, ideas, technologies, and diseases across Eurasia for more than a millennium. The term itself was coined not by ancient merchants but by the German geographer Ferdinand von Richthofen in 1877, who applied it retrospectively to describe the routes along which Chinese silk travelled westward. The Silk Road was never a single road but rather an evolving web of interconnected paths that merchants, pilgrims, diplomats, and armies traversed in stages, rarely if ever completing the entire journey from China to Rome in a single continuous voyage.",
        },
        {
          letter: "B",
          text: "Silk was indeed the most celebrated commodity of these ancient trade routes and the one that has given them their enduring name. Chinese silk — produced from the cocoons of the silkworm Bombyx mori — was coveted across Eurasia for its lustre, lightness, and the technical sophistication required for its production. China maintained a closely guarded monopoly on silk production for centuries, and the precise methods of sericulture — the cultivation of silkworms and the reeling of their cocoons — were state secrets whose disclosure was punishable by death. According to Byzantine sources, silkworm eggs were eventually smuggled to Constantinople from China in hollow bamboo tubes by monks during the reign of Emperor Justinian I in the sixth century CE, breaking the Chinese production monopoly.",
        },
        {
          letter: "C",
          text: "Despite its name, the Silk Road carried a far wider range of commodities than silk alone. From China travelled jade, porcelain, tea, and bronze goods. From Central Asia came horses — particularly the prized 'Heavenly Horses' of Fergana, coveted by Chinese emperors for their military value — as well as cotton textiles, dried fruits, and precious stones. From the Roman and Byzantine worlds came glassware, wool textiles, and gold and silver coinage. Spices, incense, ivory, and exotic animals including lions and ostriches moved along these routes from South and Southeast Asia and sub-Saharan Africa. The scale of this exchange suggests a level of economic integration across Eurasia that is often underestimated relative to later historical periods.",
        },
        {
          letter: "D",
          text: "The Silk Road served as a conduit for the transmission of religious and intellectual ideas as well as material goods. Buddhism spread from its Indian homeland to Central Asia, China, Japan, and Southeast Asia partly through the networks of merchants and pilgrims who traversed these routes; Buddhist monasteries in oasis cities served as rest houses and cultural centres along the route. Chinese pilgrims Xuanzang and Faxian undertook extraordinary journeys westward to collect Buddhist scriptures from India, leaving detailed accounts of the societies they observed. Islam spread rapidly along trade routes from Arabia in the seventh and eighth centuries CE, and Central Asian scholars made significant contributions to the Islamic Golden Age in mathematics, astronomy, and medicine.",
        },
        {
          letter: "E",
          text: "Oasis cities of Central Asia — including Samarkand, Bukhara, Merv, and Dunhuang — played critical roles as nodes in the Silk Road network, providing merchants with water, food, rest, and opportunities for exchange, storage, and credit. These cities grew wealthy from transit trade and became major centres of craft production, including metalwork, glassblowing, and the weaving of carpets and textiles that were themselves traded across the network. The Sogdian people, an Iranian-speaking population centred in the cities of Samarkand and Bukhara in modern Uzbekistan, were particularly important as merchants and intermediaries on the Central Asian routes between the third and eighth centuries CE, maintaining commercial colonies across China and establishing themselves as the dominant commercial class of the eastern Silk Road.",
        },
        {
          letter: "F",
          text: "The Silk Road also transmitted diseases along with goods and people. The Antonine Plague — which devastated the Roman Empire from 165 to 180 CE and may have caused up to five million deaths — has been hypothesised to have been carried along trade routes from the East, though the precise origin and pathogen remain debated. More certainly, the Black Death that killed approximately one-third of Europe's population in the mid-fourteenth century was caused by the bacterium Yersinia pestis and originated in Central Asia, spreading westward along the Silk Road trade network through the movement of infected rodents, fleas, and humans accompanying caravans and military campaigns. The Mongol Empire's facilitation of long-distance trade in the thirteenth and fourteenth centuries — the so-called Pax Mongolica — accelerated this transmission.",
        },
        {
          letter: "G",
          text: "The gradual decline of overland Silk Road trade from the fifteenth century onward was driven by several converging factors. The dissolution of the Mongol Empire fragmented political control of the Central Asian routes, increasing banditry and the cost of securing commercial caravans. The Black Death disrupted caravan trade across the steppe and oasis cities. Most decisively, the development of maritime routes connecting Europe directly with Asia — pioneered by Portuguese navigators rounding the Cape of Good Hope in the 1490s — offered lower-cost alternatives that ultimately displaced much of the overland trade. Contemporary interest in the Silk Road has been revived by China's Belt and Road Initiative, which since 2013 has invested heavily in transport, energy, and port infrastructure across Central Asia, South Asia, and Africa, explicitly invoking the historical precedent of Silk Road connectivity.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i", text: "The variety of goods that moved along the ancient routes" },
            { label: "ii", text: "Cities that thrived as commercial hubs and cultural crossroads" },
            { label: "iii", text: "Why the overland routes eventually lost their commercial importance" },
            { label: "iv", text: "Religious and cultural exchange facilitated by trade networks" },
            { label: "v", text: "China's protected monopoly on the most prized trade commodity" },
            { label: "vi", text: "The spread of epidemic disease through trading connections" },
            { label: "vii", text: "The military conquests that established Silk Road security" },
            { label: "viii", text: "Introduction to the trade network and the origin of its name" },
            { label: "ix", text: "The role of camels and other animals in caravan transport" },
          ],
          questions: [
            {
              id: 1,
              paragraph: "B",
              correct: "v",
              explanation:
                "Paragraph B discusses China's carefully guarded monopoly on silk production and sericulture techniques.",
            },
            {
              id: 2,
              paragraph: "C",
              correct: "i",
              explanation:
                "Paragraph C lists the wide variety of commodities — jade, horses, spices, glassware, and many more — that moved along the Silk Road.",
            },
            {
              id: 3,
              paragraph: "D",
              correct: "iv",
              explanation:
                "Paragraph D discusses the spread of Buddhism, Islam, and intellectual ideas along the Silk Road routes.",
            },
            {
              id: 4,
              paragraph: "E",
              correct: "ii",
              explanation:
                "Paragraph E describes the oasis cities — Samarkand, Bukhara, Merv, Dunhuang — as vital commercial and cultural nodes in the network.",
            },
            {
              id: 5,
              paragraph: "F",
              correct: "vi",
              explanation:
                "Paragraph F discusses the Antonine Plague and the Black Death as diseases transmitted along Silk Road networks.",
            },
            {
              id: 6,
              paragraph: "G",
              correct: "iii",
              explanation:
                "Paragraph G explains the decline of overland Silk Road trade due to political fragmentation, disease, and maritime route competition.",
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
                "The term 'Silk Road' was first used by Chinese merchants who travelled the routes during the Han Dynasty.",
              correct: "False",
              explanation:
                "Paragraph A: 'The term itself was coined not by ancient merchants but by the German geographer Ferdinand von Richthofen in 1877.'",
            },
            {
              id: 8,
              statement:
                "According to Byzantine sources, silkworm eggs were smuggled to Constantinople by monks in hollow bamboo tubes.",
              correct: "True",
              explanation:
                "Paragraph B: 'silkworm eggs were eventually smuggled to Constantinople from China in hollow bamboo tubes by monks during the reign of Emperor Justinian I.'",
            },
            {
              id: 9,
              statement:
                "The Sogdian people were an Arabic-speaking population who dominated trade on the western end of the Silk Road.",
              correct: "False",
              explanation:
                "Paragraph E: 'The Sogdian people, an Iranian-speaking population' — not Arabic-speaking — 'centred in the cities of Samarkand and Bukhara.'",
            },
            {
              id: 10,
              statement:
                "The Black Death was caused by the bacterium Yersinia pestis, which originated in Central Asia.",
              correct: "True",
              explanation:
                "Paragraph F: 'the Black Death… was caused by the bacterium Yersinia pestis and originated in Central Asia.'",
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
                "The cultivation of silkworms and the reeling of their cocoons — a process known as ",
              after: " — was a closely guarded Chinese state secret.",
              wordLimit: 1,
              correct: "sericulture",
              explanation:
                "Paragraph B: 'the precise methods of sericulture — the cultivation of silkworms and the reeling of their cocoons.'",
            },
            {
              id: 12,
              before:
                "The period of relative stability and facilitated long-distance trade under Mongol rule is sometimes called the ",
              after: ".",
              wordLimit: 2,
              correct: "Pax Mongolica",
              explanation:
                "Paragraph F: 'The Mongol Empire's facilitation of long-distance trade… the so-called Pax Mongolica.'",
            },
            {
              id: 13,
              before:
                "China's programme of infrastructure investment across Central Asia, South Asia, and Africa, which invokes the historical Silk Road, is called the ",
              after: ".",
              wordLimit: 4,
              correct: "Belt and Road Initiative",
              explanation:
                "Paragraph G: 'China's Belt and Road Initiative, which since 2013 has invested heavily in transport, energy, and port infrastructure across Central Asia.'",
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Neuroplasticity and Brain Recovery",
      paragraphs: [
        {
          letter: "A",
          text: "For much of the twentieth century, the prevailing orthodoxy in neuroscience held that the adult brain was fundamentally fixed — that the number and connectivity of neurons was largely determined by early development and could not be substantially altered thereafter. Damage to the adult brain from stroke, traumatic injury, or degenerative disease was therefore considered largely permanent and irreversible. This view has been comprehensively overturned by several decades of research demonstrating that the brain retains significant plasticity throughout life — the capacity to modify its structure, connectivity, and function in response to experience, learning, injury, and environmental demands. Neuroplasticity, as this property is now called, has transformed both the theoretical framework of neuroscience and the clinical practice of neurorehabilitation.",
        },
        {
          letter: "B",
          text: "The cellular and molecular mechanisms underlying neuroplasticity are diverse. At the synaptic level, long-term potentiation (LTP) — the persistent strengthening of synaptic connections following repeated co-activation of pre- and post-synaptic neurons — is widely considered the primary cellular mechanism of learning and memory. The formation of new dendritic spines and the pruning of weak or inactive synaptic connections allow neural circuits to be continuously refined. Neurogenesis — the birth of new neurons — occurs in the adult brain in at least two regions: the hippocampus, which is critical for the formation of new memories, and the olfactory bulb. Although the functional significance of adult hippocampal neurogenesis in humans remains debated, animal studies consistently demonstrate its importance for pattern separation and the formation of spatial memories.",
        },
        {
          letter: "C",
          text: "Cortical remapping — the reorganisation of the functional maps that represent sensory and motor information in the cerebral cortex — provides some of the most striking demonstrations of plasticity in adult humans. Studies of professional musicians show expansion of the cortical areas devoted to the fingers of the playing hand, reflecting the years of intensive motor learning involved in instrumental performance. Individuals who become blind in adulthood show cross-modal reorganisation in which visual cortex is recruited for the processing of touch and auditory information. Following amputation of a limb, the cortical area that formerly represented the amputated limb is gradually taken over by neighbouring representations, a process associated with phantom limb sensations and, in some cases, the relief of phantom limb pain through targeted training.",
        },
        {
          letter: "D",
          text: "The implications of neuroplasticity for stroke rehabilitation have transformed clinical practice. Following stroke — the interruption of blood flow to part of the brain — neurons in the directly affected area typically die rapidly, but a surrounding penumbra of neurons survives but functions poorly due to reduced blood flow and inflammatory responses. Historically, it was assumed that deficits arising from neuronal death were permanent. Neuroplasticity research has demonstrated that intensive, task-specific rehabilitation — particularly in the weeks and months immediately following a stroke — can promote the reorganisation of surviving neural circuits to compensate for lost function. Constraint-induced movement therapy (CIMT), which forces patients to use their impaired limb by restraining the unaffected one, is among the most evidence-supported neurorehabilitation approaches derived from plasticity principles.",
        },
        {
          letter: "E",
          text: "Experience-dependent plasticity — the modification of brain structure and function through learning and environmental enrichment — has important implications for education and cognitive development. Research consistently shows that the brain is most plastic during sensitive or critical periods in early development, during which specific types of experience are necessary for normal development of functions including language, binocular vision, and social cognition. However, plasticity is not limited to these critical periods; adult learning, musical training, bilingualism, and meditation practice have all been shown to produce measurable structural changes in the brain, including alterations in grey matter density, white matter microstructure, and functional connectivity patterns.",
        },
        {
          letter: "F",
          text: "Cognitive reserve — the concept that educational attainment, occupational complexity, and engagement in mentally stimulating activities throughout life build resilience against the cognitive effects of brain ageing and neurodegenerative disease — is a concept closely related to neuroplasticity. Epidemiological studies consistently find that individuals with higher levels of education and mental engagement can sustain greater degrees of Alzheimer's-associated neuropathology before showing clinical symptoms of dementia, suggesting that a more plastic and robustly connected brain can compensate for pathological damage more effectively. The cognitive reserve hypothesis has implications for public health policy, suggesting that promoting lifelong mental engagement and education may delay the onset of dementia at the population level, though the mechanisms remain an area of active investigation.",
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
              text: "Evidence that the brain of professional musicians differs structurally from that of non-musicians",
              correct: "C",
              explanation:
                "Paragraph C: 'Studies of professional musicians show expansion of the cortical areas devoted to the fingers of the playing hand.'",
            },
            {
              id: 15,
              text: "A description of how the historical view of adult brain structure changed as a result of new research",
              correct: "A",
              explanation:
                "Paragraph A: describes the overturning of the fixed-brain orthodoxy by decades of neuroplasticity research.",
            },
            {
              id: 16,
              text: "An explanation of why people with more education may show dementia symptoms later even when brain damage is severe",
              correct: "F",
              explanation:
                "Paragraph F: 'individuals with higher levels of education and mental engagement can sustain greater degrees of Alzheimer's-associated neuropathology before showing clinical symptoms of dementia.'",
            },
            {
              id: 17,
              text: "An account of a rehabilitation technique that forces patients to use their damaged limb by preventing use of the healthy one",
              correct: "D",
              explanation:
                "Paragraph D: 'Constraint-induced movement therapy (CIMT), which forces patients to use their impaired limb by restraining the unaffected one.'",
            },
            {
              id: 18,
              text: "A discussion of how the region of the cortex that represented an amputated limb is taken over by adjacent areas",
              correct: "C",
              explanation:
                "Paragraph C: 'Following amputation of a limb, the cortical area that formerly represented the amputated limb is gradually taken over by neighbouring representations.'",
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
              stem: "According to the passage, what is long-term potentiation (LTP)?",
              options: [
                { label: "A", text: "The growth of entirely new neurons in the adult brain" },
                { label: "B", text: "The persistent strengthening of synaptic connections following repeated co-activation of neurons" },
                { label: "C", text: "The process by which damaged brain areas are replaced by healthy tissue" },
                { label: "D", text: "A form of memory that lasts longer than 24 hours" },
              ],
              correct: "B",
              explanation:
                "Paragraph B: 'long-term potentiation (LTP) — the persistent strengthening of synaptic connections following repeated co-activation of pre- and post-synaptic neurons.'",
            },
            {
              id: 20,
              stem: "In which two regions of the adult brain does neurogenesis occur, according to the passage?",
              options: [
                { label: "A", text: "The cerebral cortex and the cerebellum" },
                { label: "B", text: "The amygdala and the prefrontal cortex" },
                { label: "C", text: "The hippocampus and the olfactory bulb" },
                { label: "D", text: "The thalamus and the basal ganglia" },
              ],
              correct: "C",
              explanation:
                "Paragraph B: 'Neurogenesis… occurs in the adult brain in at least two regions: the hippocampus… and the olfactory bulb.'",
            },
            {
              id: 21,
              stem: "What does the passage say about sensitive or critical periods in brain development?",
              options: [
                { label: "A", text: "They only occur during adulthood when the brain has fully matured" },
                { label: "B", text: "They are periods when specific types of experience are necessary for normal development of certain functions" },
                { label: "C", text: "They represent times when the brain temporarily loses all plasticity" },
                { label: "D", text: "They are longer in humans than in other species" },
              ],
              correct: "B",
              explanation:
                "Paragraph E: 'sensitive or critical periods in early development, during which specific types of experience are necessary for normal development of functions including language, binocular vision, and social cognition.'",
            },
            {
              id: 22,
              stem: "What did studies of people who become blind in adulthood reveal about brain plasticity?",
              options: [
                { label: "A", text: "Their visual cortex gradually atrophies and disappears" },
                { label: "B", text: "The visual cortex is recruited to process touch and auditory information" },
                { label: "C", text: "Their other senses become permanently reduced in sensitivity" },
                { label: "D", text: "Neurogenesis in the visual cortex compensates for the loss of sight" },
              ],
              correct: "B",
              explanation:
                "Paragraph C: 'Individuals who become blind in adulthood show cross-modal reorganisation in which visual cortex is recruited for the processing of touch and auditory information.'",
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 23–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Stroke Rehabilitation and Neuroplasticity",
          summaryText:
            "Following a stroke, neurons in the directly affected area die, but a surrounding region called the {{23}} survives though it functions poorly. Neuroplasticity research has shown that intensive, {{24}} rehabilitation — especially in the weeks and months after stroke — can promote reorganisation of surviving circuits. One evidence-based approach derived from plasticity research is {{25}} movement therapy, which encourages use of the impaired limb. This has helped overturn the historical assumption that deficits caused by neuronal death were {{26}}.",
          questions: [
            {
              id: 23,
              blankId: 23,
              correct: "penumbra",
              explanation:
                "Paragraph D: 'a surrounding penumbra of neurons survives but functions poorly due to reduced blood flow.'",
            },
            {
              id: 24,
              blankId: 24,
              correct: "task-specific",
              explanation:
                "Paragraph D: 'intensive, task-specific rehabilitation — particularly in the weeks and months immediately following a stroke.'",
            },
            {
              id: 25,
              blankId: 25,
              correct: "constraint-induced",
              explanation:
                "Paragraph D: 'Constraint-induced movement therapy (CIMT), which forces patients to use their impaired limb by restraining the unaffected one.'",
            },
            {
              id: 26,
              blankId: 26,
              correct: "permanent",
              explanation:
                "Paragraph D: 'it was assumed that deficits arising from neuronal death were permanent.'",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Circular Economy Principles",
      paragraphs: [
        {
          letter: "A",
          text: "The linear economic model — in which raw materials are extracted from the environment, manufactured into products, used, and discarded as waste — has underpinned industrial development since the nineteenth century, generating unprecedented material prosperity while simultaneously creating accelerating environmental pressures including resource depletion, biodiversity loss, and greenhouse gas emissions. The circular economy offers a systemic alternative: a model that aims to eliminate waste and keep products, components, and materials in use at their highest value for as long as possible, then regenerate natural systems. The circular economy is not simply a waste management philosophy but a comprehensive rethinking of how goods are designed, manufactured, used, and recovered.",
        },
        {
          letter: "B",
          text: "The intellectual foundations of the circular economy draw on several distinct bodies of thought. Walter Stahel, a Swiss architect and economist, developed the concept of a 'performance economy' and 'cradle to cradle' manufacturing in the 1970s and 1980s, arguing that manufacturers should retain ownership of their products and be responsible for their entire lifecycle. The industrial ecology movement, pioneered by Robert Frosch and Nicholas Gallopoulos in a 1989 paper, proposed that industries should emulate natural ecosystems by designing systems in which the waste of one process becomes the input for another. The Cradle to Cradle design framework, developed by architect William McDonough and chemist Michael Braungart, formalised the distinction between biological cycles — in which organic materials are returned to the biosphere — and technical cycles — in which synthetic materials are kept in continuous industrial circulation.",
        },
        {
          letter: "C",
          text: "Product design is the most powerful lever for enabling circular economy outcomes. Research consistently shows that approximately 80 percent of a product's environmental impact is determined at the design stage. Products designed for durability — using high-quality materials, robust components, and modular architectures that facilitate repair and upgrading — can achieve much longer useful lives than products designed for rapid obsolescence. The right-to-repair movement, which advocates for legal requirements that manufacturers provide spare parts, repair manuals, and software tools to independent repairers and consumers, has gained traction in several jurisdictions: the EU's Ecodesign Regulation now requires that spare parts and repair information be made available for certain product categories, including household appliances and electronic displays.",
        },
        {
          letter: "D",
          text: "Industrial symbiosis — the practice of businesses in an industrial cluster exchanging waste streams, energy, water, and by-products in ways that eliminate waste and create shared value — represents one of the most concrete implementations of circular economy thinking at the production level. The Kalundborg Symbiosis in Denmark, often cited as the world's first industrial symbiosis network, has operated since the 1970s and involves a power station, oil refinery, pharmaceutical manufacturer, wallboard producer, and other firms exchanging steam, fly ash, surplus heat, and process water, reducing material costs and waste disposal costs for all participants. Industrial symbiosis programmes have since been developed in dozens of countries, demonstrating that waste reduction and cost savings can be complementary rather than contradictory objectives.",
        },
        {
          letter: "E",
          text: "Business model innovation is as essential to the circular economy as technological and design innovation. Product-as-a-service models — in which customers pay for the performance or outcome delivered by a product rather than purchasing the product outright, and the manufacturer retains ownership and responsibility for maintenance and end-of-life management — align financial incentives with product longevity. If a lighting company profits from selling lumens of light per hour rather than light bulbs, it benefits from making bulbs that last as long as possible. Sharing platforms and peer-to-peer rental models extend the utilisation of assets and reduce the total number of products required to meet a given level of consumer demand. These models require significant changes in consumer behaviour and regulatory frameworks to scale effectively.",
        },
        {
          letter: "F",
          text: "Measuring circular economy progress requires new metrics that move beyond the conventional economic indicators of GDP, trade volumes, and waste generation rates. The circularity rate — typically defined as the proportion of material inputs to the economy that come from recycled sources rather than virgin extraction — provides one headline measure of circular economy performance, though it captures only the recycling dimension and misses higher-order circular strategies including reuse and remanufacturing. The Material Footprint indicator tracks total raw material extraction associated with the consumption of an economy regardless of where in the world that extraction occurs. The European Union has developed a Circular Economy Monitoring Framework incorporating indicators across production, consumption, waste management, and secondary materials markets to track progress across the full circular economy spectrum.",
        },
        {
          letter: "G",
          text: "Policy frameworks are increasingly recognising the circular economy as a strategic priority. The European Union's Circular Economy Action Plan, first adopted in 2015 and updated in 2020, sets out legislative and non-legislative measures across the full product lifecycle, including ecodesign requirements, sustainable product policy, restrictions on single-use plastics, and measures to stimulate secondary materials markets. China's Circular Economy Promotion Law, enacted in 2008 and revised in 2018, established legal frameworks for industrial symbiosis, resource recycling, and the efficient use of agricultural and urban waste. The growing recognition that circular economy transitions could contribute significantly to climate change mitigation — by reducing the energy and process emissions associated with virgin material production — has further raised its priority in international climate policy discussions.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 27–32",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs A–G from the list of headings below.",
          headings: [
            { label: "i", text: "The thinkers and theories that shaped circular economy ideas" },
            { label: "ii", text: "Why product design is the most critical stage for environmental outcomes" },
            { label: "iii", text: "An introduction to the circular economy and why it differs from the current model" },
            { label: "iv", text: "How governments and international bodies are promoting circular economies" },
            { label: "v", text: "New indicators needed to measure how circular an economy actually is" },
            { label: "vi", text: "Business models that align company profits with product durability" },
            { label: "vii", text: "How factories in the same area can share each other's waste products" },
            { label: "viii", text: "The challenges consumers face in making circular economy choices" },
          ],
          questions: [
            {
              id: 27,
              paragraph: "A",
              correct: "iii",
              explanation:
                "Paragraph A introduces the linear model and contrasts it with the circular economy as a systemic alternative.",
            },
            {
              id: 28,
              paragraph: "B",
              correct: "i",
              explanation:
                "Paragraph B discusses the intellectual foundations — Stahel, Frosch, McDonough — that shaped circular economy thinking.",
            },
            {
              id: 29,
              paragraph: "C",
              correct: "ii",
              explanation:
                "Paragraph C argues that product design determines approximately 80 percent of environmental impact and is the most powerful lever for circular outcomes.",
            },
            {
              id: 30,
              paragraph: "D",
              correct: "vii",
              explanation:
                "Paragraph D describes industrial symbiosis — businesses in a cluster exchanging waste streams and energy — exemplified by Kalundborg.",
            },
            {
              id: 31,
              paragraph: "E",
              correct: "vi",
              explanation:
                "Paragraph E discusses product-as-a-service and sharing business models that align company incentives with product longevity.",
            },
            {
              id: 32,
              paragraph: "F",
              correct: "v",
              explanation:
                "Paragraph F discusses circularity rates, Material Footprint indicators, and the EU monitoring framework as new metrics for circular economy progress.",
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
                "The Kalundborg Symbiosis in Denmark is often cited as the world's first industrial symbiosis network and has operated since the 1970s.",
              correct: "Yes",
              explanation:
                "Paragraph D: 'The Kalundborg Symbiosis in Denmark, often cited as the world's first industrial symbiosis network, has operated since the 1970s.'",
            },
            {
              id: 34,
              statement:
                "The circularity rate measures all aspects of circular economy performance including reuse, remanufacturing, and recycling.",
              correct: "No",
              explanation:
                "Paragraph F: 'it captures only the recycling dimension and misses higher-order circular strategies including reuse and remanufacturing.'",
            },
            {
              id: 35,
              statement:
                "China's Circular Economy Promotion Law was first enacted in 2008.",
              correct: "Yes",
              explanation:
                "Paragraph G: 'China's Circular Economy Promotion Law, enacted in 2008 and revised in 2018.'",
            },
            {
              id: 36,
              statement:
                "The EU's Circular Economy Action Plan was first adopted in 2020.",
              correct: "No",
              explanation:
                "Paragraph G: 'The European Union's Circular Economy Action Plan, first adopted in 2015 and updated in 2020' — it was first adopted in 2015.",
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
              before: "According to the passage, what percentage of a product's environmental impact is determined at the design stage?",
              correct: "80 percent",
              wordLimit: 3,
              explanation:
                "Paragraph C: 'approximately 80 percent of a product's environmental impact is determined at the design stage.'",
            },
            {
              id: 38,
              before: "What is the name of the movement that advocates for legal requirements on manufacturers to provide spare parts and repair information?",
              correct: "right-to-repair",
              wordLimit: 3,
              explanation:
                "Paragraph C: 'The right-to-repair movement, which advocates for legal requirements that manufacturers provide spare parts, repair manuals, and software tools.'",
            },
            {
              id: 39,
              before: "In the Cradle to Cradle framework, what term is used for the cycle in which synthetic materials are kept in continuous industrial circulation?",
              correct: "technical cycles",
              wordLimit: 2,
              explanation:
                "Paragraph B: 'technical cycles — in which synthetic materials are kept in continuous industrial circulation.'",
            },
            {
              id: 40,
              before: "What indicator tracks total raw material extraction associated with an economy's consumption regardless of where extraction occurs?",
              correct: "Material Footprint",
              wordLimit: 2,
              explanation:
                "Paragraph F: 'The Material Footprint indicator tracks total raw material extraction associated with the consumption of an economy regardless of where in the world that extraction occurs.'",
            },
          ],
        },
      ],
    },
  ],
};
