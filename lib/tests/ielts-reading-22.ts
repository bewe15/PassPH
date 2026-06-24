import type { IELTSTest } from "./types";

export const ieltsReading22: IELTSTest = {
  id: "ielts-reading-22",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 22",
  totalSeconds: 3600,
  passages: [
    {
      number: 1,
      title: "Deep-Sea Exploration and Discoveries",
      paragraphs: [
        {
          letter: "A",
          text: "The deep ocean — broadly defined as the water column and seafloor below 200 metres, where sunlight no longer penetrates sufficiently to support photosynthesis — constitutes the largest habitat on Earth, covering approximately 65 percent of the planet's surface. Yet it remains one of the least explored environments in the solar system. As of the early 2020s, scientists estimate that less than 20 percent of the ocean floor has been mapped with high resolution, and the biological communities of the deep sea are so poorly understood that each major deep-sea expedition routinely discovers new species. The logistical and technological challenges of operating at crushing pressures, in total darkness, at distances that preclude direct human access, have historically constrained exploration to brief, expensive expeditions with limited spatial coverage.",
        },
        {
          letter: "B",
          text: "The technological revolution enabling modern deep-sea exploration has been driven primarily by advances in remotely operated vehicles (ROVs) and autonomous underwater vehicles (AUVs). ROVs — tethered robots controlled in real time by operators aboard surface ships — equipped with high-definition cameras, manipulator arms, and suction samplers can collect specimens, images, and environmental data from depths exceeding 6,000 metres. AUVs operate without a physical tether, following pre-programmed mission plans to collect hydrographic, acoustic, and photographic data across large areas. Recent developments in deep-sea landers — buoyancy-controlled platforms that descend to the seafloor and return to the surface autonomously — have further expanded sampling capacity. These technologies have transformed deep-sea exploration from a few dozen expeditions per decade to a continuous global research programme.",
        },
        {
          letter: "C",
          text: "Among the most significant ecological discoveries of deep-sea exploration are hydrothermal vent communities. First discovered in 1977 near the Galapagos Rift by a Woods Hole Oceanographic Institution expedition, hydrothermal vents are cracks in the seafloor through which superheated, chemically enriched water is discharged. The animal communities clustered around these vents — which include giant tube worms, clams, mussels, crabs, and shrimp — survive in the complete absence of sunlight, based on a food web powered not by photosynthesis but by chemosynthesis: the metabolic conversion of chemical energy, primarily from hydrogen sulphide oxidation, into organic matter by specialised bacteria and archaea. The discovery that complex ecosystems could exist independently of solar energy transformed understanding of the potential distribution of life across the cosmos.",
        },
        {
          letter: "D",
          text: "The hadal zone — ocean trenches and pits at depths exceeding 6,000 metres — represents the most extreme marine environment on Earth. Contrary to early assumptions that the crushing pressures, near-freezing temperatures, and total darkness of hadal depths would support only sparse microbial life, research has revealed diverse and abundant communities of organisms adapted to these conditions. Amphipods — small crustaceans — are particularly abundant in hadal trenches, sometimes occurring in densities comparable to those found in much shallower productive waters. Human-occupied vehicles have reached the deepest point in the oceans: in 2019, explorer Victor Vescovo descended to 10,928 metres in the Challenger Deep of the Mariana Trench, the deepest confirmed point on Earth, and identified previously unknown species of small crustaceans, snailfish, and sea cucumbers.",
        },
        {
          letter: "E",
          text: "Deep-sea sediments contain extraordinary archives of Earth's geological and climatic history. The steady accumulation of calcareous shells of planktonic foraminifera, siliceous shells of diatoms, and fine terrigenous particles creates a stratified sedimentary record extending back hundreds of millions of years. Variations in the isotopic composition of oxygen in foraminifera shells — the ratio of oxygen-18 to oxygen-16 — change systematically with seawater temperature and global ice volume, allowing scientists to reconstruct ice age cycles and sea surface temperature histories with decadal resolution over millions of years. The analysis of deep-sea sediment cores recovered by the Ocean Drilling Program and its successors has been fundamental to establishing the chronology of glacial-interglacial cycles and understanding the drivers of long-term climate variability.",
        },
        {
          letter: "F",
          text: "The deep seabed has attracted growing commercial interest, primarily for the polymetallic nodules, seafloor massive sulphide deposits, and cobalt-rich crusts that form on and within the sediments and volcanic rocks of the ocean floor. Polymetallic nodules — potato-sized accretions of manganese, nickel, cobalt, and copper that form over millions of years on abyssal plains — have been proposed as a source of the transition metals required for electric vehicle batteries and other clean energy technologies. The International Seabed Authority (ISA) has issued exploration licences covering large areas of the Pacific and Indian Oceans, and several companies have announced intentions to begin commercial extraction. Environmental scientists have raised serious concerns about the ecological impacts of nodule extraction, which would destroy the slow-growing benthic communities of the abyssal plain and generate sediment plumes potentially affecting large areas of the deep ocean.",
        },
        {
          letter: "G",
          text: "The governance of the deep ocean presents unique challenges because the majority of the deep seabed — known as the Area in international law — lies beyond national jurisdiction and is administered by the International Seabed Authority under the United Nations Convention on the Law of the Sea (UNCLOS). The treaty framework defining the ISA's mandate was established in the 1990s before the ecological significance of deep-sea ecosystems was well understood, and critics argue it does not adequately balance resource extraction with environmental protection. The negotiation of a new High Seas Treaty under the auspices of the United Nations, concluded in 2023, included provisions for marine protected areas and environmental impact assessment requirements for activities in international waters, but the effectiveness of these provisions in protecting deep-sea ecosystems remains to be demonstrated.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i", text: "Ecosystems powered by chemical energy rather than sunlight" },
            { label: "ii", text: "Technology enabling remote and autonomous ocean exploration" },
            { label: "iii", text: "Controversy over mining rights in international ocean areas" },
            { label: "iv", text: "Life at the very greatest ocean depths" },
            { label: "v", text: "Ocean sediments as records of past climate" },
            { label: "vi", text: "Industrial extraction of minerals from the seafloor" },
            { label: "vii", text: "International law governing the deep ocean floor" },
            { label: "viii", text: "Why the deep ocean remains largely unknown" },
            { label: "ix", text: "New fish species discovered in shallow coastal waters" },
          ],
          questions: [
            {
              id: 1,
              paragraph: "B",
              correct: "ii",
              explanation:
                "Paragraph B discusses ROVs, AUVs, and deep-sea landers — the technological advances enabling modern deep-sea exploration.",
            },
            {
              id: 2,
              paragraph: "C",
              correct: "i",
              explanation:
                "Paragraph C describes hydrothermal vent communities powered by chemosynthesis rather than photosynthesis.",
            },
            {
              id: 3,
              paragraph: "D",
              correct: "iv",
              explanation:
                "Paragraph D discusses the hadal zone — the deepest ocean trenches — and the organisms found there.",
            },
            {
              id: 4,
              paragraph: "E",
              correct: "v",
              explanation:
                "Paragraph E explains how deep-sea sediment cores preserve records of ancient climate and glacial cycles.",
            },
            {
              id: 5,
              paragraph: "F",
              correct: "vi",
              explanation:
                "Paragraph F discusses commercial interest in deep-sea minerals and proposals for nodule extraction.",
            },
            {
              id: 6,
              paragraph: "G",
              correct: "vii",
              explanation:
                "Paragraph G discusses UNCLOS, the ISA, and the governance challenges of the deep ocean beyond national jurisdiction.",
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
                "Hydrothermal vents were first discovered in 1977 near the Galapagos Rift.",
              correct: "True",
              explanation:
                "Paragraph C: 'First discovered in 1977 near the Galapagos Rift by a Woods Hole Oceanographic Institution expedition.'",
            },
            {
              id: 8,
              statement:
                "Victor Vescovo descended to 10,928 metres in the Challenger Deep in 2019.",
              correct: "True",
              explanation:
                "Paragraph D: 'in 2019, explorer Victor Vescovo descended to 10,928 metres in the Challenger Deep of the Mariana Trench.'",
            },
            {
              id: 9,
              statement:
                "The High Seas Treaty concluded in 2023 has already proven effective in protecting deep-sea ecosystems.",
              correct: "False",
              explanation:
                "Paragraph G: 'the effectiveness of these provisions in protecting deep-sea ecosystems remains to be demonstrated' — effectiveness has not been proven.",
            },
            {
              id: 10,
              statement:
                "Polymetallic nodules form over millions of years on abyssal plains.",
              correct: "True",
              explanation:
                "Paragraph F: 'polymetallic nodules — potato-sized accretions… that form over millions of years on abyssal plains.'",
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
                "The metabolic process by which bacteria convert chemical energy from hydrogen sulphide into organic matter, powering vent ecosystems, is called ",
              after: ".",
              wordLimit: 1,
              correct: "chemosynthesis",
              explanation:
                "Paragraph C: 'chemosynthesis: the metabolic conversion of chemical energy, primarily from hydrogen sulphide oxidation, into organic matter.'",
            },
            {
              id: 12,
              before:
                "Scientists analyse variations in the ratio of oxygen-18 to oxygen-16 in the shells of ",
              after: " to reconstruct past ocean temperatures and ice volumes.",
              wordLimit: 1,
              correct: "foraminifera",
              explanation:
                "Paragraph E: 'Variations in the isotopic composition of oxygen in foraminifera shells… change systematically with seawater temperature and global ice volume.'",
            },
            {
              id: 13,
              before:
                "The deep seabed beyond national jurisdiction is known as the Area and is administered by the ",
              after: " under UNCLOS.",
              wordLimit: 3,
              correct: "International Seabed Authority",
              explanation:
                "Paragraph G: 'administered by the International Seabed Authority under the United Nations Convention on the Law of the Sea.'",
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "The History of Vaccination",
      paragraphs: [
        {
          letter: "A",
          text: "Vaccination — the deliberate stimulation of the immune system to confer protection against infectious disease — is widely considered the most cost-effective public health intervention in history. The World Health Organization estimates that immunisation programmes currently prevent between 2 and 3 million deaths annually, a number that could be increased to 4 to 5 million with improved global vaccine coverage. The concept of deliberate exposure to infectious material to induce protective immunity predates modern science: inoculation practices using material from smallpox pustules were documented in China and the Ottoman Empire centuries before the formal development of germ theory, and were introduced to Britain by Lady Mary Wortley Montagu following her observations in Constantinople in 1721.",
        },
        {
          letter: "B",
          text: "Edward Jenner's systematic investigation and publication of smallpox vaccination in 1798 is conventionally regarded as the founding event of modern vaccinology. Jenner, a country physician in Gloucestershire, England, observed that milkmaids who contracted the relatively mild cowpox disease appeared subsequently immune to smallpox. He tested this hypothesis by inoculating eight-year-old James Phipps with material from a cowpox lesion on a milkmaid's hand, and subsequently challenged the boy with smallpox material — demonstrating that the cowpox exposure had conferred protection. Jenner termed his procedure vaccination, from the Latin vacca meaning cow. Subsequent mass vaccination campaigns reduced smallpox mortality dramatically across Europe over the following decades.",
        },
        {
          letter: "C",
          text: "Louis Pasteur and his colleagues in late nineteenth-century France extended vaccination to other diseases through laboratory attenuation — the deliberate weakening of pathogen virulence. Pasteur's development of a chicken cholera vaccine in 1879 arose from a famous accident in which his assistant used an aged culture that had lost virulence, providing protection without causing disease. He subsequently developed attenuated vaccines for anthrax and rabies, dramatically demonstrating the anthrax vaccine's efficacy in a public trial at Pouilly-le-Fort in 1881, where vaccinated sheep survived lethal anthrax challenge while unvaccinated animals died. Pasteur coined the term 'vaccine' as a tribute to Jenner and the Latin roots of his original work.",
        },
        {
          letter: "D",
          text: "The twentieth century saw an extraordinary expansion of the vaccine repertoire and the establishment of national and international immunisation programmes. The development of cell culture techniques in the 1940s and 1950s enabled the growth of viruses in the laboratory without live animals, accelerating vaccine production. Jonas Salk's inactivated poliovirus vaccine, licensed in the United States in 1955, and Albert Sabin's oral live-attenuated poliovirus vaccine, widely deployed in the 1960s, provided the tools for the Global Polio Eradication Initiative — one of the largest public health programmes in history. As of 2023, wild poliovirus transmission had been interrupted in all countries except Afghanistan and Pakistan.",
        },
        {
          letter: "E",
          text: "The most celebrated achievement of vaccination is the eradication of smallpox. Following a decade-long intensification campaign by the World Health Organization, the last naturally occurring case of smallpox was recorded in Somalia in October 1977. The WHO officially certified the eradication of smallpox in 1980, marking the first and so far only infectious disease to have been eradicated through deliberate human action. The success of the smallpox eradication campaign depended on several favourable characteristics of the disease: a highly effective vaccine existed, humans were the only reservoir host, subclinical infection was rare, and the disease produced visible symptoms that enabled rapid case detection and ring vaccination of contacts.",
        },
        {
          letter: "F",
          text: "The development of recombinant DNA technology in the 1970s and 1980s opened new avenues for vaccine design. Recombinant vaccines — produced by inserting genes encoding pathogen antigens into expression systems such as yeast, bacteria, or mammalian cells — avoid the need to culture dangerous pathogens directly and can produce large quantities of highly purified antigenic proteins. The hepatitis B vaccine, licensed in 1986, was the first recombinant subunit vaccine to reach widespread use. Conjugate vaccines — in which polysaccharide antigens from bacterial capsules are chemically linked to protein carriers to enhance immunogenicity — transformed the prevention of meningitis and pneumococcal disease in children. More recently, mRNA vaccine platforms, demonstrated to high efficacy against COVID-19 in 2020, have opened possibilities for rapid development of vaccines against novel pathogens.",
        },
      ],
      sections: [
        {
          type: "match_info",
          questionRange: "Questions 14–19",
          instructions:
            "The reading passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F.",
          paragraphLetters: ["A", "B", "C", "D", "E", "F"],
          questions: [
            {
              id: 14,
              text: "A description of how an accidental experiment with weakened cultures led to an important vaccine discovery",
              correct: "C",
              explanation:
                "Paragraph C: 'Pasteur's development of a chicken cholera vaccine in 1879 arose from a famous accident in which his assistant used an aged culture that had lost virulence.'",
            },
            {
              id: 15,
              text: "Statistics showing the number of deaths that vaccination programmes prevent each year",
              correct: "A",
              explanation:
                "Paragraph A: 'immunisation programmes currently prevent between 2 and 3 million deaths annually.'",
            },
            {
              id: 16,
              text: "An explanation of why smallpox was successfully eradicated when other diseases have not been",
              correct: "E",
              explanation:
                "Paragraph E: 'The success of the smallpox eradication campaign depended on several favourable characteristics of the disease.'",
            },
            {
              id: 17,
              text: "A reference to the first recombinant subunit vaccine to reach widespread use",
              correct: "F",
              explanation:
                "Paragraph F: 'The hepatitis B vaccine, licensed in 1986, was the first recombinant subunit vaccine to reach widespread use.'",
            },
            {
              id: 18,
              text: "An account of how a physician tested his theory about cowpox immunity on a child",
              correct: "B",
              explanation:
                "Paragraph B: 'He tested this hypothesis by inoculating eight-year-old James Phipps with material from a cowpox lesion.'",
            },
            {
              id: 19,
              text: "A reference to two countries where wild poliovirus transmission had not yet been stopped as of 2023",
              correct: "D",
              explanation:
                "Paragraph D: 'wild poliovirus transmission had been interrupted in all countries except Afghanistan and Pakistan.'",
            },
          ],
        },
        {
          type: "mc_single",
          questionRange: "Questions 20–23",
          instructions: "Choose the correct letter, A, B, C or D.",
          questions: [
            {
              id: 20,
              stem: "Who introduced smallpox inoculation practices to Britain?",
              options: [
                { label: "A", text: "Edward Jenner" },
                { label: "B", text: "Louis Pasteur" },
                { label: "C", text: "Lady Mary Wortley Montagu" },
                { label: "D", text: "Jonas Salk" },
              ],
              correct: "C",
              explanation:
                "Paragraph A: 'introduced to Britain by Lady Mary Wortley Montagu following her observations in Constantinople in 1721.'",
            },
            {
              id: 21,
              stem: "What does the Latin word 'vacca', from which 'vaccination' is derived, mean?",
              options: [
                { label: "A", text: "Disease" },
                { label: "B", text: "Immunity" },
                { label: "C", text: "Cow" },
                { label: "D", text: "Milk" },
              ],
              correct: "C",
              explanation:
                "Paragraph B: 'vaccination, from the Latin vacca meaning cow.'",
            },
            {
              id: 22,
              stem: "When was the last naturally occurring case of smallpox recorded?",
              options: [
                { label: "A", text: "In 1977 in Somalia" },
                { label: "B", text: "In 1980 in Afghanistan" },
                { label: "C", text: "In 1955 in the United States" },
                { label: "D", text: "In 1721 in Constantinople" },
              ],
              correct: "A",
              explanation:
                "Paragraph E: 'the last naturally occurring case of smallpox was recorded in Somalia in October 1977.'",
            },
            {
              id: 23,
              stem: "What advantage do recombinant vaccines have over traditional methods of vaccine production?",
              options: [
                { label: "A", text: "They are cheaper to administer and require fewer doses" },
                { label: "B", text: "They avoid the need to culture dangerous pathogens directly" },
                { label: "C", text: "They can be grown in animals rather than in laboratories" },
                { label: "D", text: "They stimulate a stronger immune response than attenuated vaccines" },
              ],
              correct: "B",
              explanation:
                "Paragraph F: 'Recombinant vaccines… avoid the need to culture dangerous pathogens directly.'",
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Pasteur's Contributions to Vaccinology",
          summaryText:
            "Louis Pasteur extended the principles of vaccination by developing methods of laboratory {{24}} — deliberately weakening pathogens so they could not cause serious disease. His anthrax vaccine was publicly demonstrated at {{25}} in 1881, where vaccinated sheep survived a lethal challenge while control animals died. Pasteur chose to use the word 'vaccine' for his preparations as a {{26}} to Jenner and the origins of the field.",
          questions: [
            {
              id: 24,
              blankId: 24,
              correct: "attenuation",
              explanation:
                "Paragraph C: 'extended vaccination to other diseases through laboratory attenuation — the deliberate weakening of pathogen virulence.'",
            },
            {
              id: 25,
              blankId: 25,
              correct: "Pouilly-le-Fort",
              explanation:
                "Paragraph C: 'dramatically demonstrating the anthrax vaccine's efficacy in a public trial at Pouilly-le-Fort in 1881.'",
            },
            {
              id: 26,
              blankId: 26,
              correct: "tribute",
              explanation:
                "Paragraph C: 'Pasteur coined the term 'vaccine' as a tribute to Jenner and the Latin roots of his original work.'",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Dark Matter and the Universe",
      paragraphs: [
        {
          letter: "A",
          text: "One of the most profound puzzles in modern physics and cosmology is the nature of dark matter — a hypothetical form of matter that does not emit, absorb, or reflect light or any other electromagnetic radiation, and is therefore invisible to all telescopes and detectors that rely on detecting photons. Despite its invisibility, dark matter is inferred to exist through its gravitational effects on visible matter, radiation, and the large-scale structure of the universe. The current standard model of cosmology — the Lambda Cold Dark Matter (ΛCDM) model — holds that dark matter constitutes approximately 27 percent of the total energy content of the universe, compared to 5 percent for ordinary baryonic matter (atoms, molecules, and everything composed of quarks and leptons) and approximately 68 percent for dark energy.",
        },
        {
          letter: "B",
          text: "The evidence for dark matter from the rotation of galaxies is among the most compelling observational arguments. In the 1970s, astronomer Vera Rubin and her collaborators made systematic measurements of the rotational velocities of stars in spiral galaxies at different distances from the galactic centre. Classical Newtonian mechanics predicts that rotational velocity should decline with increasing distance from the centre — just as outer planets of the solar system orbit more slowly than inner ones. Instead, Rubin and her colleagues found that rotational velocities remained approximately constant at large distances from the galactic centre — so-called flat rotation curves — indicating that galaxies must contain far more mass than is accounted for by their visible stars, gas, and dust.",
        },
        {
          letter: "C",
          text: "Gravitational lensing provides independent evidence for dark matter on both galaxy and cluster scales. General relativity predicts that mass curves spacetime, causing light rays passing near massive objects to be deflected from their straight-line paths. This effect — gravitational lensing — can be used to map the distribution of mass in galaxy clusters regardless of whether that mass emits light. The Bullet Cluster, produced by the collision of two galaxy clusters some 3.7 billion light years from Earth, provides particularly striking evidence: X-ray observations reveal the hot gas stripped from the colliding clusters, which lagged behind the collision due to electromagnetic interaction, while gravitational lensing maps show most of the mass to have passed through the collision without interaction, consistent with weakly interacting dark matter.",
        },
        {
          letter: "D",
          text: "Weakly Interacting Massive Particles (WIMPs) have long been the leading theoretical candidate for dark matter. WIMPs are hypothetical particles with masses in the range of 10–1,000 times the proton mass that interact with ordinary matter only through gravity and the weak nuclear force. The 'WIMP miracle' — the observation that particles with these properties, if they existed in thermal equilibrium in the early universe, would naturally produce a relic abundance consistent with the observed dark matter density — made WIMPs theoretically attractive. However, decades of increasingly sensitive direct detection experiments, including the LUX, XENON, and PandaX experiments using tonne-scale liquid xenon detectors, have failed to detect any WIMP signals, severely constraining the viable parameter space.",
        },
        {
          letter: "E",
          text: "Alternative dark matter candidates have attracted growing interest as WIMP searches have yielded null results. Axions — extremely light hypothetical particles originally proposed to resolve a problem in quantum chromodynamics called the strong CP problem — are now considered a leading candidate, and several dedicated experiments including ADMX and ABRACADABRA are searching for axion signals using resonant microwave cavities in strong magnetic fields. Primordial black holes — black holes formed in the very early universe before the first stars — have also been proposed as dark matter candidates, though gravitational lensing surveys and gravitational wave observations have constrained the fraction of dark matter they could constitute. Sterile neutrinos, warm dark matter candidates, and ultralight fuzzy dark matter models represent other active areas of theoretical and observational investigation.",
        },
        {
          letter: "F",
          text: "The cosmic microwave background (CMB) — the faint glow of radiation left over from when the universe became transparent to photons approximately 380,000 years after the Big Bang — provides some of the most precise constraints on dark matter properties. The pattern of temperature fluctuations in the CMB encodes information about the relative densities of ordinary matter, dark matter, and dark energy at the epoch of decoupling, and measurements by the WMAP and Planck satellites have been used to constrain cosmological parameters including the dark matter density to high precision. The CMB power spectrum is consistent with the standard ΛCDM cosmological model and confirms that dark matter must be non-baryonic and largely non-relativistic ('cold') to produce the observed pattern of structure formation.",
        },
        {
          letter: "G",
          text: "Some physicists have proposed alternative theories of gravity as explanations for the observations attributed to dark matter, most notably Modified Newtonian Dynamics (MOND), proposed by Mordehai Milgrom in 1983. MOND modifies Newton's law of gravity at very low accelerations to produce flat galaxy rotation curves without invoking unseen matter. While MOND successfully accounts for the detailed rotation curves of many spiral galaxies, it struggles to explain the evidence from galaxy clusters, the CMB power spectrum, and the Bullet Cluster observation that dark matter passes through collisions without electromagnetic interaction. Most cosmologists consider MOND and its relativistic extensions insufficient to replace dark matter as a cosmological explanation, though the debate continues among a minority of researchers.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 27–32",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs A–G from the list of headings below.",
          headings: [
            { label: "i", text: "Evidence from the bending of light around massive objects" },
            { label: "ii", text: "What dark matter is and how much of the universe it comprises" },
            { label: "iii", text: "An alternative theory that questions the need for dark matter" },
            { label: "iv", text: "How stars in galaxies orbit at unexpected speeds" },
            { label: "v", text: "The first particle proposed as dark matter and why experiments haven't detected it" },
            { label: "vi", text: "What radiation from the early universe tells us about dark matter" },
            { label: "vii", text: "Other dark matter candidates being actively investigated" },
            { label: "viii", text: "Direct human observations of dark matter particles in a laboratory" },
          ],
          questions: [
            {
              id: 27,
              paragraph: "A",
              correct: "ii",
              explanation:
                "Paragraph A introduces dark matter and states it constitutes approximately 27 percent of the universe's total energy content.",
            },
            {
              id: 28,
              paragraph: "B",
              correct: "iv",
              explanation:
                "Paragraph B discusses galaxy rotation curves and the discovery by Vera Rubin that stars orbit at unexpected flat velocities.",
            },
            {
              id: 29,
              paragraph: "C",
              correct: "i",
              explanation:
                "Paragraph C discusses gravitational lensing and how it maps mass distribution regardless of whether it emits light.",
            },
            {
              id: 30,
              paragraph: "D",
              correct: "v",
              explanation:
                "Paragraph D covers WIMPs — the leading candidate particles — and the failure of detection experiments to find them.",
            },
            {
              id: 31,
              paragraph: "E",
              correct: "vii",
              explanation:
                "Paragraph E discusses alternative candidates including axions, primordial black holes, sterile neutrinos, and fuzzy dark matter.",
            },
            {
              id: 32,
              paragraph: "F",
              correct: "vi",
              explanation:
                "Paragraph F explains how CMB measurements by WMAP and Planck constrain dark matter properties and confirm the ΛCDM model.",
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
                "Vera Rubin's measurements of galaxy rotation curves in the 1970s showed that rotational velocities declined sharply at large distances from the galactic centre.",
              correct: "No",
              explanation:
                "Paragraph B: Rubin found 'rotational velocities remained approximately constant at large distances' — not that they declined.",
            },
            {
              id: 34,
              statement:
                "The Bullet Cluster evidence is considered particularly striking because gas and dark matter behave differently during the cluster collision.",
              correct: "Yes",
              explanation:
                "Paragraph C: the hot gas 'lagged behind the collision due to electromagnetic interaction, while gravitational lensing maps show most of the mass to have passed through the collision without interaction.'",
            },
            {
              id: 35,
              statement:
                "MOND was proposed by Mordehai Milgrom in 1983 as a modification to Newton's law of gravity.",
              correct: "Yes",
              explanation:
                "Paragraph G: 'Modified Newtonian Dynamics (MOND), proposed by Mordehai Milgrom in 1983. MOND modifies Newton's law of gravity.'",
            },
            {
              id: 36,
              statement:
                "Most cosmologists now accept MOND as the correct alternative to dark matter.",
              correct: "No",
              explanation:
                "Paragraph G: 'Most cosmologists consider MOND and its relativistic extensions insufficient to replace dark matter as a cosmological explanation.'",
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
              before: "According to the ΛCDM model, what percentage of the universe's total energy content is ordinary baryonic matter?",
              correct: "5 percent",
              wordLimit: 3,
              explanation:
                "Paragraph A: '5 percent for ordinary baryonic matter (atoms, molecules, and everything composed of quarks and leptons).'",
            },
            {
              id: 38,
              before: "What is the name of the phenomenon whereby mass curves spacetime and deflects light rays?",
              correct: "gravitational lensing",
              wordLimit: 2,
              explanation:
                "Paragraph C: 'This effect — gravitational lensing — can be used to map the distribution of mass in galaxy clusters.'",
            },
            {
              id: 39,
              before: "What term describes the observation that WIMPs would naturally produce the right dark matter abundance from early-universe conditions?",
              correct: "WIMP miracle",
              wordLimit: 2,
              explanation:
                "Paragraph D: 'The 'WIMP miracle' — the observation that particles with these properties… would naturally produce a relic abundance consistent with the observed dark matter density.'",
            },
            {
              id: 40,
              before: "Approximately how long after the Big Bang did the universe become transparent to photons, producing the cosmic microwave background?",
              correct: "380,000 years",
              wordLimit: 3,
              explanation:
                "Paragraph F: 'when the universe became transparent to photons approximately 380,000 years after the Big Bang.'",
            },
          ],
        },
      ],
    },
  ],
};
