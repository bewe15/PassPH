import type { IELTSTest } from "./types";

export const ieltsReading21: IELTSTest = {
  id: "ielts-reading-21",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 21",
  totalSeconds: 3600,
  passages: [
    {
      number: 1,
      title: "Urban Heat Islands and City Planning",
      paragraphs: [
        {
          letter: "A",
          text: "Cities are significantly warmer than their surrounding rural areas — a phenomenon known as the urban heat island (UHI) effect. This temperature difference, which can range from 1°C to more than 10°C in large metropolitan areas, arises from the particular physical and material characteristics of urban environments. Dark impervious surfaces such as asphalt roads and tar rooftops absorb solar radiation efficiently and release it slowly as heat at night, while the dense building geometry of city centres traps longwave radiation and reduces wind flow. The reduction of vegetated land eliminates the cooling effect of evapotranspiration, through which plants release water vapour and lower ambient temperatures. Waste heat from vehicles, air conditioning units, and industrial activity adds further energy to the urban atmosphere.",
        },
        {
          letter: "B",
          text: "The public health consequences of the UHI effect are substantial and increasingly well-documented. Elevated urban temperatures intensify the physiological stress of summer heat waves, raising rates of heat-related illness and mortality, particularly among vulnerable populations including the elderly, young children, outdoor workers, and low-income residents who lack access to air conditioning. The European heat wave of August 2003, which caused an estimated 70,000 excess deaths across the continent, disproportionately killed urban residents in city centres where overnight temperatures remained dangerously high. Studies in major cities including Chicago, London, and Tokyo consistently demonstrate a dose-response relationship between local surface temperatures and heat-related hospital admissions, with the highest risks concentrated in the densest and most heavily sealed urban districts.",
        },
        {
          letter: "C",
          text: "Urban greening represents one of the most widely advocated strategies for mitigating the UHI effect. Trees and other vegetation reduce surface and air temperatures through two primary mechanisms: shading — the interception of solar radiation before it reaches heat-absorbing surfaces — and evapotranspiration, which transfers heat energy from the air into the latent heat of water vapour. Studies in European and North American cities suggest that mature street trees can reduce local air temperatures by 2–8°C in their immediate vicinity, and that increasing urban tree canopy cover by 10 percentage points could reduce mean summer temperatures by approximately 1.4°C at neighbourhood scale. Green roofs — vegetated roof surfaces — offer additional benefits including stormwater retention, building insulation, and biodiversity habitat, though installation and maintenance costs limit their widespread uptake.",
        },
        {
          letter: "D",
          text: "Cool surface materials offer a complementary approach to urban greening. White or light-coloured roofing materials and pavements with high solar reflectance — so-called cool roofs and cool pavements — reflect a greater proportion of incoming solar radiation back into the atmosphere rather than absorbing it as heat. Studies modelling the large-scale adoption of cool roofs in major global cities project reductions in mean urban air temperatures of 0.3–0.9°C, with larger localised benefits directly above and around treated buildings. Some jurisdictions have moved to mandate or incentivise cool roofs: New York City's Local Law 92 requires vegetated or highly reflective roofing on new and substantially renovated buildings, and several cities in southern Europe and Australia have adopted similar standards following extreme heat events.",
        },
        {
          letter: "E",
          text: "Water features in urban environments — including fountains, ponds, rivers, and misting systems — provide localised cooling through evaporative processes. The presence of open water bodies moderates urban temperatures through the high specific heat capacity of water, which means water absorbs and releases heat more slowly than built materials, and through direct evaporation from water surfaces. Urban rivers and canals have historically played an important role in the thermal environment of cities, and their replacement with underground drainage systems has contributed to the warming of many post-industrial cities. However, the effectiveness of water features is limited to their immediate vicinity, typically within 30–50 metres, and some interventions such as ornamental fountains have negligible temperature effects at district or city scale.",
        },
        {
          letter: "F",
          text: "Urban form — the density, geometry, and layout of streets and buildings — profoundly influences the UHI intensity. Dense, high-rise urban districts with narrow street canyons restrict ventilation and increase the sky view factor obstruction, intensifying heat accumulation, while urban forms with wider streets, lower building heights, and greater spacing allow better airflow and reduce the entrapment of longwave radiation. Urban planners increasingly incorporate wind corridor planning into master plans for major Asian cities — including plans for Singapore and various Chinese cities — where the configuration of building blocks and street widths is designed to channel prevailing winds through the urban fabric to improve ventilation and thermal comfort. These design strategies must balance heat mitigation objectives against the competing demands of maximising developable land area.",
        },
        {
          letter: "G",
          text: "The integration of UHI mitigation into mainstream urban planning practice faces significant institutional and economic barriers. Responsibility for heat-relevant decisions is distributed across multiple agencies — transport, housing, parks, water, and building regulation authorities — whose mandates do not naturally prioritise thermal comfort. Property developers face strong incentives to maximise built floor area, which typically conflicts with the provision of green space and tree planting. Long payback periods for green infrastructure investments make them less attractive under conventional cost-benefit frameworks that discount future benefits heavily. Progress is being made in some cities through heat action plans that coordinate across agencies, mandatory green plot ratio requirements for new developments, and the growing recognition of urban heat as a material climate risk requiring regulatory attention.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i", text: "Reflective materials as an alternative cooling strategy" },
            { label: "ii", text: "The health risks posed by higher temperatures in cities" },
            { label: "iii", text: "Obstacles to implementing urban heat reduction measures" },
            { label: "iv", text: "The role of plant life in lowering urban temperatures" },
            { label: "v", text: "How water bodies and features can reduce local heat" },
            { label: "vi", text: "The influence of city layout and building design on heat" },
            { label: "vii", text: "Financial incentives for residents to install solar panels" },
            { label: "viii", text: "Why cities are hotter than their surrounding countryside" },
            { label: "ix", text: "Government policies reducing carbon emissions in transport" },
          ],
          questions: [
            {
              id: 1,
              paragraph: "B",
              correct: "ii",
              explanation:
                "Paragraph B focuses on the public health consequences of the UHI effect, including heat-related illness and the 2003 European heat wave mortality data.",
            },
            {
              id: 2,
              paragraph: "C",
              correct: "iv",
              explanation:
                "Paragraph C discusses urban greening — trees and vegetation — as a strategy to cool cities through shading and evapotranspiration.",
            },
            {
              id: 3,
              paragraph: "D",
              correct: "i",
              explanation:
                "Paragraph D covers cool surface materials — cool roofs and cool pavements — that reflect solar radiation rather than absorbing it.",
            },
            {
              id: 4,
              paragraph: "E",
              correct: "v",
              explanation:
                "Paragraph E examines how water features, rivers, and evaporative processes provide localised cooling in urban environments.",
            },
            {
              id: 5,
              paragraph: "F",
              correct: "vi",
              explanation:
                "Paragraph F discusses how urban form — building density, street geometry, and layout — affects UHI intensity and ventilation.",
            },
            {
              id: 6,
              paragraph: "G",
              correct: "iii",
              explanation:
                "Paragraph G describes the institutional, economic, and governance barriers that hinder UHI mitigation in mainstream planning practice.",
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
                "The urban heat island effect can cause a temperature difference of more than 10°C between a city and its surrounding rural areas.",
              correct: "True",
              explanation:
                "Paragraph A: 'This temperature difference, which can range from 1°C to more than 10°C in large metropolitan areas.'",
            },
            {
              id: 8,
              statement:
                "The European heat wave of 2003 caused approximately 70,000 excess deaths, with urban residents being disproportionately affected.",
              correct: "True",
              explanation:
                "Paragraph B: 'The European heat wave of August 2003, which caused an estimated 70,000 excess deaths across the continent, disproportionately killed urban residents.'",
            },
            {
              id: 9,
              statement:
                "Green roofs have been widely adopted in most major European cities due to their low installation costs.",
              correct: "False",
              explanation:
                "Paragraph C: 'installation and maintenance costs limit their widespread uptake' — so they have NOT been widely adopted due to high costs.",
            },
            {
              id: 10,
              statement:
                "New York City's Local Law 92 requires vegetated or highly reflective roofing on new and substantially renovated buildings.",
              correct: "True",
              explanation:
                "Paragraph D: 'New York City's Local Law 92 requires vegetated or highly reflective roofing on new and substantially renovated buildings.'",
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
              before: "The process by which plants release water vapour and lower the temperature of the surrounding air is called ",
              after: ".",
              wordLimit: 2,
              correct: "evapotranspiration",
              explanation:
                "Paragraph A: 'the cooling effect of evapotranspiration, through which plants release water vapour and lower ambient temperatures.'",
            },
            {
              id: 12,
              before:
                "Water absorbs and releases heat more slowly than built materials because of its high ",
              after: ".",
              wordLimit: 3,
              correct: "specific heat capacity",
              explanation:
                "Paragraph E: 'the high specific heat capacity of water, which means water absorbs and releases heat more slowly than built materials.'",
            },
            {
              id: 13,
              before:
                "In some Asian cities, planners design the configuration of buildings and streets to channel prevailing winds through the urban fabric, a strategy known as ",
              after: " planning.",
              wordLimit: 2,
              correct: "wind corridor",
              explanation:
                "Paragraph F: 'Urban planners increasingly incorporate wind corridor planning into master plans for major Asian cities.'",
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "The Psychology of False Memory",
      paragraphs: [
        {
          letter: "A",
          text: "Human memory is widely assumed to function as a reliable recording device, faithfully storing past experiences for accurate future retrieval. Decades of cognitive psychological research have comprehensively undermined this intuition. Memory is reconstructive rather than reproductive: rather than playing back a fixed record, the brain actively reconstructs past events each time they are retrieved, drawing on stored traces, general knowledge schemas, post-event information, and contextual cues. This reconstructive nature makes memory inherently malleable and susceptible to distortion. False memories — vivid subjective experiences of events that did not occur or that occurred differently — can be implanted by suggestion, induced by misleading post-event information, or arise spontaneously from the natural cognitive processes of inference and schema-based reconstruction.",
        },
        {
          letter: "B",
          text: "The misinformation effect, first systematically documented by Elizabeth Loftus and colleagues in the 1970s and 1980s, demonstrated that exposure to misleading information after witnessing an event could alter subsequent memory reports of that event. In classic experiments, participants who witnessed a filmed traffic accident were asked misleading questions containing false presuppositions — for example, being asked 'How fast were the cars going when they smashed into each other?' rather than 'hit each other' led participants to report both higher speed estimates and false recollections of broken glass that was not present in the film. The misinformation effect has since been replicated across a wide range of stimulus materials, retention intervals, and populations, and is considered one of the most robust findings in memory research.",
        },
        {
          letter: "C",
          text: "Laboratory research has demonstrated that entirely fabricated autobiographical events can be implanted as childhood memories in a significant proportion of experimental participants. In Loftus and Pickrell's 1995 'lost in the mall' paradigm, participants were presented with brief accounts of four childhood events, three genuine (provided by family members) and one false — being lost in a shopping mall as a young child. Approximately 25 percent of participants subsequently reported memories of the fabricated event, with some providing detailed and emotionally compelling accounts that they maintained even after being debriefed about the deception. Subsequent research has implanted memories of medical procedures, animal attacks, and even serious crimes using a range of suggestive techniques including imagination inflation, social pressure, and repeated questioning.",
        },
        {
          letter: "D",
          text: "The Deese–Roediger–McDermott (DRM) paradigm provides a controlled laboratory method for studying spontaneous false memory formation. Participants study lists of semantically related words — for example, bed, rest, awake, tired, dream, night — and subsequently falsely recall or recognise a critical lure word strongly associated with the list items (in this case, sleep) at rates comparable to their recall of words that were actually presented. The DRM effect demonstrates that false memories can arise not only from external suggestion but from the normal processes of semantic activation and schema-based inference that enable efficient cognitive functioning. Individual differences in susceptibility to DRM false memories correlate with imagination, creative thinking, and the tendency to process information holistically rather than analytically.",
        },
        {
          letter: "E",
          text: "The implications of false memory research for the legal system are profound and have driven significant procedural reforms. Eyewitness testimony is widely recognised as among the most persuasive evidence presented to jurors, yet eyewitness memory is highly susceptible to the same distortion processes documented in laboratory research. Wrongful convictions subsequently overturned by DNA evidence have consistently identified mistaken eyewitness identification as the most common contributing factor: a 2020 analysis of 375 DNA exoneration cases in the United States found that eyewitness misidentification played a role in approximately 69 percent of cases. These findings have prompted reforms including the adoption of blind lineup administration procedures, video-recorded initial witness accounts, and judicial instructions to jurors about eyewitness reliability.",
        },
        {
          letter: "F",
          text: "Therapy-related false memories became a major controversy in the 1990s, when therapists using recovered memory techniques including hypnosis, guided imagery, and repeated suggestion reported uncovering memories of childhood sexual abuse in adult patients with no prior conscious recollection of such events. Critics including Loftus argued that these techniques were iatrogenic — that is, they created false memories of trauma rather than recovering genuine ones. The ensuing controversy — which generated considerable litigation and ultimately led to convictions being overturned — spurred research into the conditions under which therapeutic suggestion can implant false memories of traumatic and emotionally salient events. Current clinical guidelines for working with trauma survivors generally discourage the use of memory recovery techniques that have been shown to increase false memory susceptibility.",
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
              text: "A description of an experiment in which participants were given misleading questions about a car accident they had watched on film",
              correct: "B",
              explanation:
                "Paragraph B: the Loftus misinformation effect experiments using filmed traffic accidents and misleading questions about speed.",
            },
            {
              id: 15,
              text: "An explanation of why false memories can form even without external suggestion, due to normal thinking processes",
              correct: "D",
              explanation:
                "Paragraph D: 'false memories can arise not only from external suggestion but from the normal processes of semantic activation and schema-based inference.'",
            },
            {
              id: 16,
              text: "Evidence that a large proportion of wrongful convictions involved errors made by witnesses who saw the crime",
              correct: "E",
              explanation:
                "Paragraph E: 'a 2020 analysis of 375 DNA exoneration cases… found that eyewitness misidentification played a role in approximately 69 percent of cases.'",
            },
            {
              id: 17,
              text: "A study in which about a quarter of participants came to believe they had experienced an entirely invented event from their childhood",
              correct: "C",
              explanation:
                "Paragraph C: the 'lost in the mall' paradigm; 'Approximately 25 percent of participants subsequently reported memories of the fabricated event.'",
            },
            {
              id: 18,
              text: "A claim that certain therapeutic techniques used with trauma survivors may themselves generate false recollections",
              correct: "F",
              explanation:
                "Paragraph F: 'Critics… argued that these techniques were iatrogenic — that is, they created false memories of trauma rather than recovering genuine ones.'",
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
              stem: "According to the passage, what does the term 'reconstructive' mean when applied to human memory?",
              options: [
                { label: "A", text: "Memory records events with perfect accuracy, like a video camera" },
                { label: "B", text: "Memory actively rebuilds past events using stored traces and contextual cues each time they are recalled" },
                { label: "C", text: "Memory is destroyed and rebuilt from scratch after each sleep cycle" },
                { label: "D", text: "Memory is constructed only from information stored in the short-term buffer" },
              ],
              correct: "B",
              explanation:
                "Paragraph A: 'the brain actively reconstructs past events each time they are retrieved, drawing on stored traces, general knowledge schemas, post-event information, and contextual cues.'",
            },
            {
              id: 20,
              stem: "In the DRM paradigm, participants falsely recall or recognise a word that was NOT in the original list because",
              options: [
                { label: "A", text: "they are deliberately trying to guess what word might belong" },
                { label: "B", text: "the word is visually similar to words they did see" },
                { label: "C", text: "it is strongly associated semantically with the words that were presented" },
                { label: "D", text: "they are distracted during the study phase and cannot encode words properly" },
              ],
              correct: "C",
              explanation:
                "Paragraph D: participants falsely recall a 'critical lure word strongly associated with the list items.'",
            },
            {
              id: 21,
              stem: "What legal reforms does the passage say have been prompted by false memory research on eyewitnesses?",
              options: [
                { label: "A", text: "The elimination of eyewitness testimony from all criminal trials" },
                { label: "B", text: "Blind lineup administration, video-recorded witness accounts, and jury instructions about reliability" },
                { label: "C", text: "Mandatory polygraph testing of all eyewitnesses before testimony" },
                { label: "D", text: "The use of hypnosis to help witnesses retrieve more accurate memories" },
              ],
              correct: "B",
              explanation:
                "Paragraph E: 'reforms including the adoption of blind lineup administration procedures, video-recorded initial witness accounts, and judicial instructions to jurors about eyewitness reliability.'",
            },
            {
              id: 22,
              stem: "What does the passage mean when it says therapeutic techniques used to recover memories can be 'iatrogenic'?",
              options: [
                { label: "A", text: "The techniques are proven to be medically effective and safe" },
                { label: "B", text: "They are condemned by religious authorities" },
                { label: "C", text: "They cause harm to the therapist as well as the patient" },
                { label: "D", text: "They cause the very problem they are meant to treat, by creating false memories rather than recovering real ones" },
              ],
              correct: "D",
              explanation:
                "Paragraph F: 'iatrogenic — that is, they created false memories of trauma rather than recovering genuine ones.'",
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 23–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "The Misinformation Effect",
          summaryText:
            "The misinformation effect was first systematically studied by Elizabeth {{23}} and her colleagues. Their research showed that when people are exposed to misleading information after witnessing an event, it can alter what they later remember. In one experiment, the wording of a question about a car accident influenced participants' {{24}} estimates of the speed of the vehicles involved. Participants who received the misleading question also falsely recalled seeing {{25}} at the scene, even though there was none. The misinformation effect has been replicated across many different contexts and is considered one of the most {{26}} findings in memory research.",
          questions: [
            {
              id: 23,
              blankId: 23,
              correct: "Loftus",
              explanation:
                "Paragraph B: 'first systematically documented by Elizabeth Loftus and colleagues.'",
            },
            {
              id: 24,
              blankId: 24,
              correct: "speed",
              explanation:
                "Paragraph B: 'led participants to report both higher speed estimates' — the misleading wording affected speed estimates.",
            },
            {
              id: 25,
              blankId: 25,
              correct: "broken glass",
              explanation:
                "Paragraph B: 'false recollections of broken glass that was not present in the film.'",
            },
            {
              id: 26,
              blankId: 26,
              correct: "robust",
              explanation:
                "Paragraph B: 'considered one of the most robust findings in memory research.'",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Vertical Farming Technology",
      paragraphs: [
        {
          letter: "A",
          text: "Vertical farming — the practice of growing crops in stacked layers inside climate-controlled indoor environments, typically using artificial lighting and hydroponic or aeroponic growing systems — has attracted substantial investment and media attention as a potential solution to several converging pressures on conventional agriculture. Global population growth, increasing urbanisation, the loss of arable land to soil degradation, and the projected impacts of climate change on agricultural productivity have created demand for food production systems less dependent on favourable climate conditions, abundant water supplies, and large expanses of fertile land. Vertical farms can theoretically produce food year-round in any location, using a small fraction of the land and water required by field-based agriculture.",
        },
        {
          letter: "B",
          text: "The defining technical characteristic of vertical farming is the use of artificial lighting — primarily light-emitting diode (LED) systems — to provide the photosynthetically active radiation that plants require for growth, independently of natural sunlight. Modern LED systems can be tuned to emit specific wavelengths corresponding to the absorption peaks of photosynthetic pigments, improving energy efficiency relative to broad-spectrum lighting. Despite significant improvements in LED efficiency over the past two decades, artificial lighting remains the dominant energy input in vertical farming operations and the primary factor determining their economic and environmental viability. Lighting energy typically accounts for 25–40 percent of total operating costs in commercial vertical farms.",
        },
        {
          letter: "C",
          text: "Hydroponic growing systems — in which plants are cultivated in nutrient-enriched water solutions without soil — are the most widely used growing medium in commercial vertical farms. Hydroponic systems deliver precisely controlled nutrient concentrations directly to plant roots, enabling faster growth and higher yields than soil-based cultivation for many crop species. Water consumption in hydroponic vertical farms is substantially lower than in field agriculture: studies suggest that vertical farms using recirculating hydroponic systems can produce leafy greens with 95–99 percent less water than field-grown equivalents, as water lost to evapotranspiration within the closed growing environment is recaptured and reused. This water efficiency advantage is particularly significant in water-stressed regions.",
        },
        {
          letter: "D",
          text: "The economic viability of vertical farming is highly constrained by its energy intensity. Whereas field agriculture relies primarily on solar energy — effectively free — vertical farms must purchase electricity to power lighting, climate control, and irrigation systems. At current electricity prices in most markets, the energy costs of vertical farming make it uneconomical for staple crops including wheat, rice, maize, and potatoes, which have low market values relative to their caloric density. Commercial vertical farming has therefore concentrated almost entirely on high-value, fast-growing crops with low light requirements — primarily leafy greens such as lettuce, spinach, kale, and herbs — for which premium urban retail prices can justify the elevated production costs. The economics of vertical farming are likely to improve as electricity costs decline with the growth of renewable energy and LED efficiency continues to improve.",
        },
        {
          letter: "E",
          text: "Environmental impact assessments of vertical farming present a complex picture. On land use and water consumption, vertical farms offer decisive advantages: a one-hectare vertical farm can produce the equivalent yield of several hectares of field agriculture, and water consumption is dramatically lower. On energy use and greenhouse gas emissions, the picture depends critically on the carbon intensity of the electricity supply. Vertical farms powered by fossil-fuel electricity generate substantially higher greenhouse gas emissions per kilogram of produce than field agriculture or conventional greenhouse production. Vertical farms powered by renewable electricity — or co-located with solar or wind generation — can achieve competitive or superior emissions performance. Life cycle assessment studies consistently show that the primary lever for improving the environmental credentials of vertical farming is decarbonising the electricity supply.",
        },
        {
          letter: "F",
          text: "Beyond commercial food production, vertical farming technologies are being explored for a range of specialist applications. Pharmaceutical companies have investigated the potential of controlled indoor environments for producing medicinal plants with consistent alkaloid profiles, avoiding the variability introduced by soil type, weather, and seasonal conditions. Space agencies including NASA and the European Space Agency have researched hydroponic and aeroponic food production for long-duration space missions, where weight constraints and the absence of natural sunlight and soil make conventional agriculture impossible. Urban vertical farms also offer potential public health benefits through the elimination of pesticide residues and the reduction of food miles — the distance food travels from production to consumption — a significant source of transport-related emissions in global food supply chains.",
        },
        {
          letter: "G",
          text: "The vertical farming industry has experienced rapid growth and significant consolidation since the mid-2010s. Global investment in vertical farming companies exceeded US$3 billion in 2021, with major players including AeroFarms, Bowery Farming, and Plenty attracting substantial venture capital. However, the sector has also experienced notable failures: several high-profile companies have entered bankruptcy proceedings, reflecting the persistent challenge of achieving profitability at scale when energy costs are high and competition from conventional and greenhouse-grown produce is intense. Industry analysts generally project that vertical farming will occupy a significant but specialised niche in urban food supply chains — particularly for premium fresh produce sold through supermarkets and restaurants — rather than displacing field agriculture as the dominant mode of global food production.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 27–32",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs A–G from the list of headings below.",
          headings: [
            { label: "i", text: "The role of artificial light in enabling indoor plant growth" },
            { label: "ii", text: "Why energy costs restrict the types of crops that can be grown profitably indoors" },
            { label: "iii", text: "Industry growth alongside financial difficulties for leading companies" },
            { label: "iv", text: "Specialist and non-commercial uses of vertical farming methods" },
            { label: "v", text: "The environmental trade-offs of vertical farming compared to field agriculture" },
            { label: "vi", text: "Introduction: why indoor farming has attracted interest as an alternative to conventional agriculture" },
            { label: "vii", text: "Water-efficient growing systems used in vertical farms" },
            { label: "viii", text: "Genetic engineering of crop varieties for indoor environments" },
          ],
          questions: [
            {
              id: 27,
              paragraph: "A",
              correct: "vi",
              explanation:
                "Paragraph A introduces vertical farming and the converging pressures that have attracted interest in it as an alternative to conventional agriculture.",
            },
            {
              id: 28,
              paragraph: "B",
              correct: "i",
              explanation:
                "Paragraph B discusses the role of artificial LED lighting as the defining technical characteristic and primary energy input of vertical farming.",
            },
            {
              id: 29,
              paragraph: "C",
              correct: "vii",
              explanation:
                "Paragraph C covers hydroponic growing systems and their water efficiency advantages.",
            },
            {
              id: 30,
              paragraph: "D",
              correct: "ii",
              explanation:
                "Paragraph D explains why high energy costs restrict vertical farming to high-value crops with low market values being uneconomical.",
            },
            {
              id: 31,
              paragraph: "E",
              correct: "v",
              explanation:
                "Paragraph E presents the environmental impact assessment of vertical farming, comparing land, water, energy, and emissions performance against field agriculture.",
            },
            {
              id: 32,
              paragraph: "F",
              correct: "iv",
              explanation:
                "Paragraph F discusses specialist applications including pharmaceutical production, space agency research, and food miles reduction.",
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
                "Vertical farms using recirculating hydroponic systems can produce leafy greens using 95–99 percent less water than field-grown equivalents.",
              correct: "Yes",
              explanation:
                "Paragraph C: 'vertical farms using recirculating hydroponic systems can produce leafy greens with 95–99 percent less water than field-grown equivalents.'",
            },
            {
              id: 34,
              statement:
                "Vertical farming is currently economical for growing staple crops such as wheat and rice in most markets.",
              correct: "No",
              explanation:
                "Paragraph D: 'the energy costs of vertical farming make it uneconomical for staple crops including wheat, rice, maize, and potatoes.'",
            },
            {
              id: 35,
              statement:
                "All vertical farms currently in operation are powered exclusively by renewable electricity.",
              correct: "Not Given",
              explanation:
                "The passage discusses the importance of renewable electricity for environmental performance but does not state that all farms currently use it exclusively.",
            },
            {
              id: 36,
              statement:
                "Global investment in vertical farming exceeded US$3 billion in 2021.",
              correct: "Yes",
              explanation:
                "Paragraph G: 'Global investment in vertical farming companies exceeded US$3 billion in 2021.'",
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
              before: "What percentage of total operating costs do lighting energy expenses typically represent in commercial vertical farms?",
              correct: "25–40 percent",
              wordLimit: 3,
              explanation:
                "Paragraph B: 'Lighting energy typically accounts for 25–40 percent of total operating costs in commercial vertical farms.'",
            },
            {
              id: 38,
              before: "According to the passage, what is the primary factor that determines the environmental credentials of a vertical farm?",
              correct: "electricity supply",
              wordLimit: 3,
              explanation:
                "Paragraph E: 'the primary lever for improving the environmental credentials of vertical farming is decarbonising the electricity supply.'",
            },
            {
              id: 39,
              before: "Which two space agencies are mentioned in the passage as having researched indoor food production for long-duration missions?",
              correct: "NASA and ESA",
              wordLimit: 3,
              explanation:
                "Paragraph F: 'Space agencies including NASA and the European Space Agency have researched hydroponic and aeroponic food production for long-duration space missions.'",
            },
            {
              id: 40,
              before: "What type of crops have commercial vertical farms concentrated on, given the economic constraints of energy costs?",
              correct: "leafy greens",
              wordLimit: 3,
              explanation:
                "Paragraph D: 'Commercial vertical farming has therefore concentrated almost entirely on high-value, fast-growing crops… primarily leafy greens such as lettuce, spinach, kale, and herbs.'",
            },
          ],
        },
      ],
    },
  ],
};
