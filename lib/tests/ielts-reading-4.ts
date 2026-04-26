import type { IELTSTest } from "./types";

export const ieltsReading4: IELTSTest = {
  id: "ielts-reading-4",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 4",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Cognitive Biases in Decision Making",
      paragraphs: [
        {
          letter: "A",
          text: "Human beings have long prided themselves on their capacity for rational thought, yet decades of research in cognitive psychology and behavioural economics have revealed that everyday decision making is riddled with systematic errors. These errors, known as cognitive biases, are not random mistakes but predictable patterns of deviation from rational judgement. Pioneering work by psychologists Daniel Kahneman and Amos Tversky in the 1970s demonstrated through a series of elegant experiments that people routinely violate the axioms of expected utility theory — the dominant economic model of rational choice. Their findings gave rise to the field of behavioural economics and eventually earned Kahneman the Nobel Memorial Prize in Economic Sciences in 2002.",
        },
        {
          letter: "B",
          text: "Among the most extensively studied biases is the availability heuristic, a mental shortcut whereby people judge the likelihood of an event by how easily a relevant example springs to mind. Because dramatic or emotionally charged events — plane crashes, shark attacks, violent crime — are heavily covered in the media and therefore highly memorable, people systematically overestimate their frequency relative to more common but less vivid causes of harm such as heart disease or car accidents. The availability heuristic explains why public fear and policy attention often diverge sharply from actuarial risk, with governments under pressure to invest heavily in visible but relatively rare threats.",
        },
        {
          letter: "C",
          text: "Confirmation bias — the tendency to search for, interpret, and recall information in a way that confirms pre-existing beliefs — operates across contexts from medical diagnosis to political judgement. Studies of clinical reasoning have shown that physicians who form an early hypothesis about a patient's condition are less likely to order tests that might refute it, sometimes leading to delayed or incorrect diagnoses. In the digital age, confirmation bias is amplified by algorithmic recommendation systems that learn from users' past engagement and progressively narrow the information environment to which they are exposed, creating the so-called 'filter bubble' effect.",
        },
        {
          letter: "D",
          text: "The anchoring effect describes the disproportionate influence that an initial piece of information exerts on subsequent judgements. When negotiators, real-estate agents, or consumers encounter a first figure — whether or not it is relevant or accurate — that figure becomes a cognitive anchor from which subsequent estimates insufficiently adjust. Experiments by Tversky and Kahneman showed that participants who were shown a randomly generated number before estimating the percentage of African nations in the United Nations made estimates that were significantly skewed in the direction of the arbitrary starting number. This effect has been exploited in pricing strategies, salary negotiations, and legal sentencing.",
        },
        {
          letter: "E",
          text: "Organisations and governments have developed a range of strategies to mitigate the influence of cognitive biases in high-stakes decisions. Structured decision-making protocols — such as pre-mortem analysis, in which teams imagine a future failure and reason backwards to identify its potential causes — help counteract overconfidence. Checklists, popularised in healthcare and aviation by surgeon Atul Gawande, reduce errors by externalising decision criteria, preventing cognitive shortcuts from bypassing critical steps. Nudge theory, associated with Thaler and Sunstein, proposes redesigning the architecture of choice environments — defaulting employees into pension saving, for example — to steer people towards better outcomes without restricting freedom.",
        },
        {
          letter: "F",
          text: "Critics of the cognitive bias literature have raised both empirical and normative objections. On the empirical side, researchers such as Gerd Gigerenzen have argued that heuristics are often ecologically rational — that is, well adapted to the information environments in which they evolved — and that laboratory demonstrations of bias frequently use artificial tasks that do not reflect real-world decision conditions. On the normative side, critics question whether it is appropriate for governments and institutions to 'nudge' citizens towards particular choices, arguing that such interventions, however well intentioned, may be paternalistic and may undermine the autonomous exercise of human agency.",
        },
        {
          letter: "G",
          text: "The study of cognitive biases continues to evolve. Neuroscientific research is beginning to map the neural correlates of specific biases, identifying the roles of the amygdala in emotionally driven risk assessment and the prefrontal cortex in deliberative override. Computational models of human judgement are being incorporated into artificial intelligence systems both to replicate human-like decision making and to identify where automated systems can serve as debiasing aids. Whether a truly bias-free form of human judgement is achievable or even desirable remains a philosophical question, but an understanding of how biases function is increasingly considered essential literacy for informed citizenship in complex modern societies.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The founding research and its economic implications" },
            { label: "ii",   text: "How memory distorts perceptions of risk" },
            { label: "iii",  text: "The effect of first impressions on numerical estimates" },
            { label: "iv",   text: "Institutional tools for overcoming mental shortcuts" },
            { label: "v",    text: "The reinforcement of existing beliefs by technology" },
            { label: "vi",   text: "Scientific and ethical challenges to bias research" },
            { label: "vii",  text: "Future directions in neuroscience and artificial intelligence" },
            { label: "viii", text: "Financial incentives for rational behaviour" },
            { label: "ix",   text: "Cross-cultural differences in cognitive error rates" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "ii",   explanation: "Paragraph B explains how memorable events inflate perceived risk — i.e. memory distorts risk perception (availability heuristic)." },
            { id: 2, paragraph: "C", correct: "v",    explanation: "Paragraph C discusses confirmation bias amplified by algorithmic 'filter bubbles' — technology reinforcing existing beliefs." },
            { id: 3, paragraph: "D", correct: "iii",  explanation: "Paragraph D describes the anchoring effect: an initial number skews subsequent numerical estimates." },
            { id: 4, paragraph: "E", correct: "iv",   explanation: "Paragraph E covers pre-mortem analysis, checklists, and nudge theory — institutional tools to overcome biases." },
            { id: 5, paragraph: "F", correct: "vi",   explanation: "Paragraph F presents Gigerenzen's empirical critique and normative objections about paternalism — scientific and ethical challenges." },
            { id: 6, paragraph: "G", correct: "vii",  explanation: "Paragraph G discusses neuroscience mapping bias and AI debiasing systems — future research directions." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "Kahneman and Tversky began their collaboration in the 1970s.", correct: "True", explanation: "Paragraph A states their pioneering work began 'in the 1970s.'" },
            { id: 8,  statement: "People tend to overestimate how often plane crashes occur relative to heart disease.", correct: "True", explanation: "Paragraph B explicitly states people 'overestimate their frequency' for dramatic events like plane crashes 'relative to more common but less vivid causes of harm such as heart disease.'" },
            { id: 9,  statement: "Confirmation bias has been shown to affect stock market investment decisions.", correct: "Not Given", explanation: "The passage mentions clinical reasoning and political judgement but does not discuss stock market investment." },
            { id: 10, statement: "The anchoring experiment used a genuinely informative starting number.", correct: "False", explanation: "Paragraph D states the starting number was 'randomly generated' and 'whether or not it is relevant or accurate' — it was explicitly arbitrary, not informative." },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "Atul Gawande popularised the use of ", after: " in healthcare and aviation to reduce decision-making errors.", correct: "checklists", explanation: "Paragraph E: 'Checklists, popularised in healthcare and aviation by surgeon Atul Gawande, reduce errors by externalising decision criteria.'" },
            { id: 12, before: "The concept associated with Thaler and Sunstein that redesigns choice environments is called ", after: " theory.", correct: "nudge", explanation: "Paragraph E: 'Nudge theory, associated with Thaler and Sunstein, proposes redesigning the architecture of choice environments.'" },
            { id: 13, before: "Gigerenzen argued that heuristics are often ", after: ", meaning they are well suited to the environments in which they developed.", correct: "ecologically rational", explanation: "Paragraph F: Gigerenzen argues heuristics are 'ecologically rational — that is, well adapted to the information environments in which they evolved.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Coral Reef Restoration",
      paragraphs: [
        {
          letter: "A",
          text: "Coral reefs cover less than one percent of the ocean floor yet support an estimated quarter of all marine species, making them the most biodiverse marine ecosystems on Earth. Often called the 'rainforests of the sea', they provide food security for hundreds of millions of people through fisheries, protect coastlines from wave erosion, and generate substantial revenue through tourism. Despite their ecological and economic importance, coral reefs are in precipitous decline. The Intergovernmental Panel on Climate Change has warned that even a 1.5°C rise in global average temperatures above pre-industrial levels could eliminate 70 to 90 percent of the world's remaining coral reefs, and a 2°C rise could destroy more than 99 percent.",
        },
        {
          letter: "B",
          text: "The primary driver of coral decline is thermal stress caused by ocean warming. Corals live in a symbiotic relationship with microscopic algae called zooxanthellae, which reside within the coral's tissues and provide up to 90 percent of its energy through photosynthesis. When seawater temperatures rise above the coral's thermal threshold — typically by just one to two degrees Celsius for a sustained period — the coral expels its zooxanthellae in a stress response. Without these algae, the coral loses its colour and its primary energy source, a phenomenon visible as coral bleaching. If thermal stress persists, the bleached coral eventually starves and dies, though recovery is possible if temperatures normalise in time.",
        },
        {
          letter: "C",
          text: "Beyond warming, coral reefs face compounding stressors. Ocean acidification — caused by the absorption of excess atmospheric carbon dioxide — reduces the availability of carbonate ions that corals need to build their calcium carbonate skeletons, slowing growth rates and weakening reef structures. Agricultural and urban runoff introduces excess nutrients that fuel algal blooms, which compete with corals for space and light. Destructive fishing practices such as dynamite fishing and the use of cyanide cause direct physical damage. In some regions, outbreaks of the crown-of-thorns starfish, which feeds on coral tissue, have further accelerated reef loss.",
        },
        {
          letter: "D",
          text: "In response to the scale of reef decline, a range of active restoration techniques have been developed. Coral gardening — the collection, fragmentation, and cultivation of coral fragments on underwater nursery structures before transplantation to degraded reef sites — has been widely trialled and has demonstrated the capacity to restore local coral cover at meaningful scales. The Coral Restoration Foundation in Florida has grown and outplanted more than 100,000 coral fragments onto degraded sections of the Florida Reef Tract. More experimental approaches include assisted gene flow, in which genetically heat-tolerant corals from warmer regions are transplanted to cooler reefs to introduce thermal resilience into local populations.",
        },
        {
          letter: "E",
          text: "Biotechnological interventions are attracting increasing scientific attention. Researchers at the Australian Institute of Marine Science have been selectively breeding corals for enhanced thermal tolerance, mimicking natural selection at an accelerated rate. Another approach involves inoculating corals with beneficial microbial communities — a process termed coral probiotic therapy — that appear to suppress the pathogenic bacteria associated with temperature-driven disease. Scientists at the University of Hawaii have developed a technique using coral cryopreservation to bank the genetic material of threatened species, creating repositories that could be used to restore reef populations in the future.",
        },
        {
          letter: "F",
          text: "Despite these innovations, ecologists caution that restoration without emissions reduction is ultimately futile. Even the most ambitious restoration programmes can replant only a fraction of the area that reefs lose annually to bleaching events, and successive thermal anomalies are increasingly leaving insufficient time for recovery between bleaching episodes. Researchers argue that reef restoration is best understood as a bridge strategy — buying time for reef ecosystems while the world reduces the greenhouse gas emissions that drive ocean warming. Without meaningful action on climate change, the tools of restoration, however ingenious, cannot compensate for the scale and pace of ongoing reef destruction.",
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
            { id: 14, text: "A warning about the insufficiency of restoration as a long-term solution without wider policy change", correct: "F", explanation: "Paragraph F argues that restoration without emissions reduction is 'ultimately futile' and describes it as only a 'bridge strategy.'" },
            { id: 15, text: "A description of the biological relationship that corals depend upon for nutrition", correct: "B", explanation: "Paragraph B explains the symbiosis between corals and zooxanthellae, which supply up to 90 percent of the coral's energy." },
            { id: 16, text: "A reference to a specific organisation's large-scale coral transplantation effort", correct: "D", explanation: "Paragraph D names the Coral Restoration Foundation and its record of outplanting more than 100,000 coral fragments." },
            { id: 17, text: "A mention of chemical processes that weaken the physical structures of reefs", correct: "C", explanation: "Paragraph C describes ocean acidification reducing carbonate ions, slowing growth and weakening calcium carbonate skeletons." },
            { id: 18, text: "A quantitative prediction about coral loss under specific temperature rise scenarios", correct: "A", explanation: "Paragraph A cites IPCC figures: 70–90% loss at 1.5°C and over 99% at 2°C warming." },
            { id: 19, text: "A technique that preserves the genetic material of reef species for potential future use", correct: "E", explanation: "Paragraph E describes cryopreservation used to bank the genetic material of threatened coral species." },
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
              stem: "According to paragraph B, what happens to a coral when it bleaches?",
              options: [
                { label: "A", text: "It becomes more resistant to future thermal stress." },
                { label: "B", text: "It expels the algae that provide most of its energy." },
                { label: "C", text: "It dies immediately if water temperatures rise." },
                { label: "D", text: "It absorbs more zooxanthellae from surrounding water." },
              ],
              correct: "B",
              explanation: "Paragraph B: 'the coral expels its zooxanthellae in a stress response… the coral loses its colour and its primary energy source.'"
            },
            {
              id: 21,
              stem: "What is 'coral gardening' as described in paragraph D?",
              options: [
                { label: "A", text: "A method of removing invasive starfish from reef areas." },
                { label: "B", text: "A genetic engineering technique for producing heat-tolerant corals." },
                { label: "C", text: "The cultivation of coral fragments in nurseries before replanting them on degraded reefs." },
                { label: "D", text: "An approach to controlling algal blooms near reef sites." },
              ],
              correct: "C",
              explanation: "Paragraph D defines coral gardening as 'the collection, fragmentation, and cultivation of coral fragments on underwater nursery structures before transplantation to degraded reef sites.'"
            },
            {
              id: 22,
              stem: "What does 'assisted gene flow' involve, according to the passage?",
              options: [
                { label: "A", text: "Engineering coral DNA in a laboratory setting." },
                { label: "B", text: "Moving heat-tolerant corals from warmer areas to cooler reef sites." },
                { label: "C", text: "Introducing beneficial bacteria into stressed coral populations." },
                { label: "D", text: "Preserving coral genetic material in frozen repositories." },
              ],
              correct: "B",
              explanation: "Paragraph D: 'genetically heat-tolerant corals from warmer regions are transplanted to cooler reefs to introduce thermal resilience into local populations.'"
            },
            {
              id: 23,
              stem: "According to paragraph F, how do researchers characterise reef restoration programmes?",
              options: [
                { label: "A", text: "As a permanent solution to the bleaching crisis." },
                { label: "B", text: "As scientifically flawed and largely ineffective." },
                { label: "C", text: "As a temporary measure that provides time while emissions are reduced." },
                { label: "D", text: "As the most important tool in combating climate change." },
              ],
              correct: "C",
              explanation: "Paragraph F: restoration is 'a bridge strategy — buying time for reef ecosystems while the world reduces the greenhouse gas emissions that drive ocean warming.'"
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Threats to Coral Reef Survival",
          summaryText:
            "Coral reefs are in rapid decline due to several interconnected pressures. Rising sea temperatures trigger {{24}}, a process in which corals lose the algae that sustain them. A second chemical threat, ocean acidification, depletes the {{25}} ions that corals require to construct their skeletons. Human activities on land also contribute: runoff rich in excess nutrients promotes {{26}} that deprive corals of light and space. Together, these pressures are pushing reef ecosystems towards a tipping point that restoration alone cannot reverse.",
          wordBank: ["bleaching", "carbonate", "algal blooms", "thermal stress", "cryopreservation", "zooxanthellae", "erosion", "sediment"],
          questions: [
            { id: 24, blankId: 24, correct: "bleaching", explanation: "Paragraph B describes the expulsion of zooxanthellae and loss of colour as 'coral bleaching.'" },
            { id: 25, blankId: 25, correct: "carbonate", explanation: "Paragraph C: ocean acidification 'reduces the availability of carbonate ions that corals need to build their calcium carbonate skeletons.'" },
            { id: 26, blankId: 26, correct: "algal blooms", explanation: "Paragraph C: 'excess nutrients that fuel algal blooms, which compete with corals for space and light.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "The History of Aviation",
      paragraphs: [
        {
          letter: "A",
          text: "The history of powered aviation is conventionally traced to the morning of 17 December 1903, when Orville Wright completed the first sustained, controlled flight of a heavier-than-air aircraft at Kitty Hawk, North Carolina. The Flyer, constructed by Orville and his brother Wilbur from spruce wood and muslin fabric, remained airborne for just twelve seconds and covered a distance of thirty-seven metres — a modest achievement by any objective measure. Yet the flight represented a conceptual and engineering breakthrough of the first order: for the first time in history, a machine carrying a human passenger had risen from the ground under its own power, moved forward without losing speed, and landed at a point no lower than its starting position.",
        },
        {
          letter: "B",
          text: "The development of aviation in the years immediately following Kitty Hawk was driven largely by military interest. The First World War transformed the aeroplane from a fragile experimental curiosity into a sophisticated instrument of combat. By 1918, aircraft were performing reconnaissance, artillery spotting, ground attack, and strategic bombing missions, and the major belligerent powers had produced tens of thousands of aircraft. The war accelerated technological development at a remarkable pace: engine power, airframe strength, manoeuvrability, and operational range all improved dramatically between 1914 and 1918, establishing a foundation upon which commercial aviation would subsequently be built.",
        },
        {
          letter: "C",
          text: "The interwar period saw the emergence of commercial passenger aviation as a viable, if still exclusive, mode of transport. The establishment of scheduled transatlantic mail and passenger services — epitomised by Charles Lindbergh's solo nonstop flight from New York to Paris in 1927 — captured the public imagination and demonstrated the feasibility of long-range travel. Airlines such as Imperial Airways in Britain and Pan American Airways in the United States began operating regular routes, though early passenger cabins were noisy, cold, and uncomfortable by modern standards. Flying remained prohibitively expensive for most people, with a transatlantic fare equivalent to several months of average wages.",
        },
        {
          letter: "D",
          text: "The introduction of the jet engine, independently developed by Frank Whittle in Britain and Hans von Ohain in Germany during the late 1930s, transformed aviation in the postwar era. Jet-powered aircraft offered substantially higher speeds, greater altitudes, smoother rides, and lower operating costs per seat-mile than piston-engined predecessors. The Boeing 707, which entered commercial service with Pan Am in 1958, is widely credited with inaugurating the age of mass air travel. Within a decade of its introduction, the number of passengers crossing the Atlantic by air surpassed those making the journey by sea for the first time, permanently reshaping global patterns of travel and trade.",
        },
        {
          letter: "E",
          text: "Aviation's extraordinary growth over the second half of the twentieth century was accompanied by a dramatically improved safety record. Accident rates per passenger-kilometre fell by more than two orders of magnitude between the 1950s and the 2010s, driven by advances in aircraft design, materials science, navigation technology, air traffic management, and — critically — a systematic approach to accident investigation. The adoption of the black box flight recorder, mandatory post-accident investigation by independent bodies, and a culture of non-punitive incident reporting allowed the industry to learn from failures and implement systemic changes. By the early twenty-first century, commercial aviation had become statistically one of the safest modes of transport per journey.",
        },
        {
          letter: "F",
          text: "In recent decades, however, aviation has come under sustained scrutiny for its environmental footprint. The sector accounts for approximately 2.5 percent of global carbon dioxide emissions, a figure that understates its total climate impact because aircraft also emit nitrogen oxides, water vapour, and aerosols at altitude, where their warming effects are significantly amplified. The development of sustainable aviation fuels — derived from waste biomass, agricultural residues, or synthesised using renewable electricity — is widely regarded as the most promising near-term mitigation pathway. Longer-term proposals include hydrogen-powered and electric aircraft, though the energy density of current battery technology limits electric propulsion to short-haul routes at commercially viable scales.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "The Wright Brothers' first flight was an impressive achievement even by the standards of its time.", correct: "No", explanation: "Paragraph A describes it as 'a modest achievement by any objective measure,' indicating the writer does not regard it as impressive by its own standards, despite calling it a conceptual breakthrough." },
            { id: 28, statement: "The First World War was decisive in accelerating aircraft technology beyond what peacetime development could have achieved.", correct: "Yes", explanation: "Paragraph B states the war 'accelerated technological development at a remarkable pace' across all major performance parameters between 1914 and 1918." },
            { id: 29, statement: "Lindbergh's 1927 transatlantic flight was the first nonstop flight between continents.", correct: "Not Given", explanation: "The passage describes Lindbergh's flight but does not claim it was the world's first intercontinental nonstop flight." },
            { id: 30, statement: "The Boeing 707 played a central role in making air travel accessible to ordinary people.", correct: "Yes", explanation: "Paragraph D credits the Boeing 707 with 'inaugurating the age of mass air travel,' and within a decade more passengers crossed the Atlantic by air than by sea." },
            { id: 31, statement: "Fuel costs are the most significant factor driving the development of sustainable aviation fuels.", correct: "Not Given", explanation: "The passage discusses SAFs as a climate mitigation strategy but does not identify fuel costs as the primary driver of their development." },
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
              stem: "Which TWO factors does the passage identify as contributing to aviation's improved safety record?",
              options: [
                { label: "A", text: "The introduction of passenger seat belts" },
                { label: "B", text: "Advances in air traffic management" },
                { label: "C", text: "A non-punitive culture of incident reporting" },
                { label: "D", text: "Reduction in the number of flights per year" },
                { label: "E", text: "Government subsidies for aircraft manufacturers" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph E lists 'air traffic management' (B) and 'a culture of non-punitive incident reporting' (C) among the factors that drove accident rate reductions."
            },
            {
              id: 33,
              stem: "Which TWO environmental impacts of aviation does the passage specifically mention?",
              options: [
                { label: "A", text: "Carbon dioxide emissions" },
                { label: "B", text: "Noise pollution around airports" },
                { label: "C", text: "Nitrogen oxide emissions" },
                { label: "D", text: "Fuel spillage in oceans" },
                { label: "E", text: "Habitat destruction for runway construction" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph F explicitly mentions 'carbon dioxide emissions' (A) and 'nitrogen oxides' (C) among aircraft's climate-relevant outputs."
            },
            {
              id: 34,
              stem: "Which TWO near-term or longer-term solutions to aviation's environmental impact are mentioned in the passage?",
              options: [
                { label: "A", text: "Reducing the number of permitted flights globally" },
                { label: "B", text: "Sustainable aviation fuels from waste biomass" },
                { label: "C", text: "Carbon offset schemes for passengers" },
                { label: "D", text: "Hydrogen-powered aircraft" },
                { label: "E", text: "High-speed rail as a replacement for short flights" },
              ],
              pickCount: 2,
              correct: ["B", "D"],
              explanation: "Paragraph F describes sustainable aviation fuels 'derived from waste biomass' (B) and 'hydrogen-powered… aircraft' (D) as mitigation pathways."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "What materials were used to construct the Wright Brothers' Flyer?", correct: "spruce wood and muslin", explanation: "Paragraph A: 'constructed by Orville and his brother Wilbur from spruce wood and muslin fabric.'" },
            { id: 36, before: "What military function first justified the large-scale development of aircraft during World War One?", correct: "reconnaissance", explanation: "Paragraph B lists reconnaissance as the first military use mentioned: 'aircraft were performing reconnaissance, artillery spotting, ground attack, and strategic bombing missions.'" },
            { id: 37, before: "Which airline is credited with first operating the Boeing 707 in commercial service?", correct: "Pan Am", explanation: "Paragraph D: 'The Boeing 707, which entered commercial service with Pan Am in 1958.'" },
            { id: 38, before: "What recording device, introduced in aviation, allowed the industry to investigate and learn from accidents?", correct: "black box", explanation: "Paragraph E: 'The adoption of the black box flight recorder… allowed the industry to learn from failures.'" },
            { id: 39, before: "What is the main reason that electric aircraft are currently limited to short-haul routes?", correct: "energy density", explanation: "Paragraph F: 'the energy density of current battery technology limits electric propulsion to short-haul routes at commercially viable scales.'" },
            { id: 40, before: "Who independently co-developed the jet engine alongside Frank Whittle?", correct: "Hans von Ohain", explanation: "Paragraph D: 'independently developed by Frank Whittle in Britain and Hans von Ohain in Germany.'" },
          ],
        },
      ],
    },
  ],
};
