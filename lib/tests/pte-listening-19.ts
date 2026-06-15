import type { PTEListeningTest } from "./pte-listening-types";

const test19: PTEListeningTest = {
  id: "pte-listening-19",
  title: "PTE Listening — Test 19",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-19-1",
      type: "summarise_spoken_text",
      wordMin: 50,
      wordMax: 70,
      responseSeconds: 600,
      topic: "Disaster Risk Reduction and Community Resilience",
      audioUrl: "",
      audioText: "Disaster risk reduction aims to limit the damage caused by natural and human-made hazards by addressing their underlying causes rather than simply responding after the fact. Effective strategies combine physical measures, such as building sea walls and earthquake-resistant structures, with social interventions including early warning systems, community training, and land-use planning that discourages settlement in high-risk zones. Research consistently shows that communities with strong social networks and clear emergency protocols recover more quickly from disasters than those that lack these features. The Sendai Framework for Disaster Risk Reduction, adopted by United Nations member states in 2015, sets targets for reducing disaster mortality, the number of affected people, and economic losses over a fifteen-year period. Local government engagement and the inclusion of indigenous knowledge are increasingly recognised as essential elements of effective risk reduction programmes.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-19-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Marine conservation has become an urgent priority as ocean ecosystems face multiple simultaneous pressures. Overfishing depletes fish populations faster than they can reproduce, disrupting food webs and threatening the livelihoods of coastal communities. Pollution from plastic waste, agricultural runoff, and industrial discharge degrades water quality and harms marine organisms. Ocean warming and acidification driven by climate change are bleaching coral reefs and altering the distribution of species. Marine protected areas, which restrict fishing and other extractive activities within designated zones, have been shown to allow fish populations to recover and biodiversity to increase. International agreements are needed to govern fishing in high seas areas beyond national jurisdiction.",
      question: "Which TWO threats to marine ecosystems are mentioned in the talk?",
      options: [
        "Overfishing depleting fish populations",
        "Earthquakes and tsunamis destroying habitats",
        "Pollution from plastic waste and agricultural runoff",
        "Noise from shipping disrupting whale communication",
        "Introduction of invasive species by ballast water",
        "Excessive tourism at popular diving sites",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-19-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Cultural heritage encompasses the tangible and intangible legacies that societies inherit from past generations, including monuments, artefacts, languages, oral traditions, performing arts, and social practices. The preservation of cultural heritage is important for community identity, tourism, and the transmission of historical knowledge. However, heritage sites and collections face numerous threats, including physical deterioration, natural disasters, urban development, and armed conflict. Digital technologies now allow three-dimensional models of artefacts and sites to be created, preserving them virtually even if the originals are damaged or destroyed. Questions of repatriation — returning objects removed during colonial periods to their countries of origin — have become increasingly prominent in international debates about heritage ownership and justice.",
      question: "According to the talk, which THREE threats to cultural heritage are mentioned?",
      options: [
        "Physical deterioration over time",
        "Forgery and trade in counterfeit artefacts",
        "Natural disasters",
        "Armed conflict",
        "Lack of public interest in historical sites",
        "Overuse of digital reproduction methods",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-19-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Labour market economics studies how wages, employment levels, and working conditions are determined by the interaction of supply and demand for labour. Workers supply labour in exchange for wages, while employers demand labour to produce goods and services. Minimum wage legislation sets a legal floor on pay rates, with proponents arguing it reduces poverty and increases consumer spending, while critics warn it may reduce employment by making hiring more costly. Trade unions negotiate collectively on behalf of workers to secure better wages and conditions than individuals could obtain alone. In recent decades, technological change and globalisation have reshaped labour markets, contributing to wage polarisation between high-skilled and low-skilled occupations.",
      transcript: "Labour market economics studies how wages, employment levels, and working conditions are determined by the interaction of supply and ___BLANK___ for labour. Workers supply labour in exchange for wages, while employers demand labour to produce goods and services. Minimum wage legislation sets a legal ___BLANK___ on pay rates, with proponents arguing it reduces poverty and increases consumer spending. Trade unions negotiate ___BLANK___ on behalf of workers to secure better wages and conditions. Technological change and globalisation have contributed to wage ___BLANK___ between high-skilled and low-skilled occupations.",
      answers: ["demand", "floor", "collectively", "polarisation"],
    },
    {
      id: "fib-19-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Palaeontology is the scientific study of life in the geological past through the examination of fossil remains. Fossils form when organisms are buried rapidly in sediment before they can decompose, and over millions of years the organic material is replaced by minerals. The fossil record provides direct evidence of the history of life on Earth, including the emergence and extinction of species. However, fossilisation is a rare process, and the record is therefore incomplete and biased towards organisms with hard parts such as shells and bones. Molecular techniques are increasingly used alongside traditional fossil analysis to reconstruct evolutionary relationships and estimate the timing of ancient divergences between species.",
      transcript: "Palaeontology is the scientific study of life in the geological past through the examination of ___BLANK___ remains. Fossils form when organisms are buried rapidly in sediment before they can decompose, and over millions of years the organic material is replaced by ___BLANK___. The fossil record provides direct evidence of the history of life on Earth, including the emergence and ___BLANK___ of species. Molecular techniques are increasingly used alongside traditional fossil analysis to reconstruct evolutionary ___BLANK___ and estimate the timing of ancient divergences between species.",
      answers: ["fossil", "minerals", "extinction", "relationships"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-19-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Immigration policy shapes not only who is permitted to enter and reside in a country but also the economic, cultural, and demographic character of the receiving society. Economic arguments for immigration emphasise the contribution of migrants to labour supply, innovation, and fiscal sustainability in countries with ageing populations. Cultural arguments range from celebrations of diversity and pluralism to concerns about social cohesion and the pace of cultural change. Security concerns focus on border control and the risk that undocumented migration may enable criminal activity. Empirical research generally shows that immigration has modest positive effects on overall wages and public finances, though the distribution of benefits and costs varies across different groups within the population.",
      correctIndex: 0,
      summaries: [
        "Immigration policy involves complex economic, cultural, and security considerations, with research generally suggesting modest positive economic effects, though the distribution of impacts varies across social groups.",
        "Immigration policy is primarily determined by cultural factors, with most governments restricting entry to preserve national identity and prevent changes to language and social customs.",
        "Research has conclusively shown that immigration reduces wages for native workers and increases pressure on public services, leading most high-income countries to tighten border controls significantly.",
        "Immigration policy is set entirely at the international level by bodies such as the United Nations, leaving individual governments little discretion in deciding how many migrants to admit.",
      ],
    },
    {
      id: "hcs-19-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Neurodiversity is a concept that reconceptualises conditions such as autism, attention deficit hyperactivity disorder, dyslexia, and dyspraxia as natural variations in human brain function rather than disorders to be corrected. Advocates argue that neurodiverse individuals often possess distinctive strengths, such as heightened attention to detail, pattern recognition, or creative thinking, that can be valuable in the right environment. The neurodiversity movement has influenced education policy, encouraging schools to accommodate different learning styles rather than expecting all students to conform to a single standard. In the workplace, some employers have developed programmes specifically designed to recruit and support neurodiverse employees, recognising the competitive advantage their different perspectives can provide.",
      correctIndex: 3,
      summaries: [
        "Neurodiversity research has proven that conditions such as autism and dyslexia are caused by specific genetic mutations, and gene therapy is now being developed to correct these variations before birth.",
        "The neurodiversity movement opposes all medical treatment for conditions such as ADHD and dyslexia, arguing that medication suppresses natural talents and that schools should simply reduce academic demands on neurodiverse students.",
        "Neurodiversity has limited practical impact because most employers and educational institutions continue to treat autism and similar conditions exclusively as disabilities requiring remediation rather than as differences to be accommodated.",
        "Neurodiversity reframes conditions like autism and ADHD as natural brain variations with distinctive strengths, influencing education to accommodate diverse learners and prompting some employers to actively recruit neurodiverse talent.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-19-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "The criminal justice system in most democratic countries serves multiple stated purposes: retribution, which holds that offenders deserve to be punished proportionally to their crime; deterrence, which aims to discourage future offending through the threat of punishment; rehabilitation, which seeks to reform offenders so they can reintegrate productively into society; and incapacitation, which removes dangerous individuals from the community. Research suggests that rehabilitation-focused approaches are more effective at reducing reoffending than purely punitive ones, but they are often less politically popular because they may appear lenient. Restorative justice, which brings together offenders and victims to repair harm, is gaining traction as a complementary approach in some jurisdictions.",
      question: "What does the speaker say about rehabilitation-focused approaches compared to punitive ones?",
      options: [
        "They are more expensive and therefore rarely used by governments facing budget constraints.",
        "They are more politically popular because voters support treating offenders with compassion.",
        "They are more effective at reducing reoffending but often less politically popular.",
        "They have been adopted as the primary approach by most criminal justice systems worldwide.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-19-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Water treatment processes make contaminated water safe for human consumption and other uses. A typical municipal water treatment plant draws raw water from a river, lake, or groundwater source and subjects it to a sequence of processes: coagulation and flocculation, which cause fine particles to clump together and settle; sedimentation, which allows the larger clumps to sink; filtration through sand and activated carbon, which removes remaining particles and some dissolved chemicals; and disinfection, usually with chlorine or ultraviolet light, to kill pathogens. Advanced treatment methods including reverse osmosis and ozone treatment are used where higher levels of purity are required, such as in water recycling for potable use.",
      question: "According to the speaker, what is the purpose of the disinfection stage in water treatment?",
      options: [
        "To remove dissolved minerals that cause hardness in drinking water.",
        "To kill pathogens that remain after filtration.",
        "To add fluoride and other beneficial compounds to the water.",
        "To separate industrial pollutants from agricultural runoff.",
      ],
      correctIndex: 1,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-19-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Palaeontological research in recent decades has dramatically revised our understanding of the evolutionary relationship between birds and dinosaurs. Fossils discovered in China and elsewhere have shown that many theropod dinosaurs were covered in feathers, indicating that birds are not merely descended from dinosaurs but are themselves a group of dinosaurs that survived the mass extinction event sixty-six million years ago. This reclassification has profound implications for how we interpret both the biology of extinct species and the",
      options: ["distribution of modern reptiles", "origins of modern bird behaviour", "age of geological rock strata", "speed of continental drift"],
      correctIndex: 1,
    },
    {
      id: "smw-19-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "Infrastructure resilience planning requires governments to think beyond the individual asset and consider how failures cascade across interconnected systems. When a power grid fails, for example, it may simultaneously disrupt water pumping stations, hospital generators, fuel supply chains, and communications networks. Modelling these interdependencies allows planners to identify critical nodes whose failure would have the most severe consequences, and to prioritise investment in redundancy and rapid",
      options: ["expansion", "privatisation", "recovery", "relocation"],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-19-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Disaster risk reduction requires integrating hazard assessment, vulnerability analysis, and capacity building into long-term development planning. Communities in coastal areas must account for storm surge risks as sea levels rise, while those in seismically active regions need building codes that mandate earthquake-resistant construction. Early warning systems that give populations sufficient time to evacuate have proven highly effective at reducing mortality in flood-prone areas.",
      displayText: "Disaster risk reduction requires integrating hazard assessment, vulnerability analysis, and capacity building into long-term development planning. Communities in coastal areas must account for storm surge risks as sea levels rise, while those in seismically active regions need building codes that mandate earthquake-proof construction. Early warning systems that give populations sufficient time to evacuate have proven highly effective at reducing casualties in flood-prone areas.",
      incorrectIndexes: [41, 59],
    },
    {
      id: "hiw-19-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Labour market economists distinguish between frictional unemployment, which occurs when workers are temporarily between jobs, and structural unemployment, which arises when the skills of workers no longer match the requirements of available positions due to technological change or shifts in the composition of the economy. Cyclical unemployment is associated with downturns in economic activity and typically declines as growth resumes.",
      displayText: "Labour market economists distinguish between frictional unemployment, which occurs when workers are temporarily between jobs, and structural unemployment, which arises when the skills of workers no longer match the demands of available positions due to technological change or shifts in the composition of the economy. Cyclical unemployment is associated with declines in economic activity and typically falls as growth resumes.",
      incorrectIndexes: [29, 50, 56],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-19-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The professor outlined the theoretical framework at the beginning of the lecture.",
    },
    {
      id: "wfd-19-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Fossil evidence suggests that early mammals coexisted with non-avian dinosaurs for millions of years.",
    },
    {
      id: "wfd-19-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Policy interventions should be evaluated against clearly defined and measurable outcomes.",
    },
  ],
};

export default test19;
