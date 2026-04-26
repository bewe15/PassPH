import type { IELTSTest } from "./types";

export const ieltsReading16: IELTSTest = {
  id: "ielts-reading-16",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 16",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Epigenetics: Beyond the Genetic Code",
      paragraphs: [
        {
          letter: "A",
          text: "For much of the twentieth century, the dominant model of inheritance held that biological traits were transmitted exclusively through the sequence of nucleotide bases encoded in DNA. This 'central dogma' of molecular biology, articulated by Francis Crick in 1958, described a unidirectional flow of information from DNA to RNA to protein, implying that the environment could not alter the heritable instructions carried in an organism's genome. By the close of the century, however, a growing body of experimental evidence had begun to challenge this orthodoxy. Researchers discovered that heritable changes in gene expression could occur without any alteration to the underlying DNA sequence — a phenomenon now encompassed by the term epigenetics.",
        },
        {
          letter: "B",
          text: "Epigenetic regulation operates through several distinct molecular mechanisms. The best characterised of these is DNA methylation, a process by which methyl groups are chemically attached to cytosine bases in the DNA strand, typically at sites where cytosine is followed by guanine. Methylation generally silences the affected gene by preventing transcription factors from binding to the promoter region. A second major mechanism involves modifications to histones — the spool-like proteins around which DNA is wound. Acetylation of histones loosens the chromatin structure and promotes gene expression, while deacetylation has the opposite effect. A third layer involves non-coding RNA molecules that regulate gene activity post-transcriptionally.",
        },
        {
          letter: "C",
          text: "One of the most striking findings in epigenetics research is that epigenetic marks can be shaped by environmental exposures. Studies of identical twins have demonstrated that, despite sharing identical DNA sequences, their epigenomes diverge substantially over time, particularly following different lifestyle exposures, diets, and stress levels. Research on famine survivors — notably the Dutch Hunger Winter cohort studied since the 1970s — revealed that prenatal nutritional deprivation altered methylation patterns in offspring and was associated with elevated rates of metabolic disease decades later. Such findings suggest that the environment can inscribe durable molecular records on the genome that influence health across the lifespan.",
        },
        {
          letter: "D",
          text: "Perhaps the most controversial dimension of epigenetics concerns the possibility of transgenerational inheritance — the transmission of environmentally acquired epigenetic marks from parent to offspring. Animal studies have produced provocative results: male mice exposed to high-fat diets or chronic stress have been reported to pass metabolic and behavioural phenotypes to their offspring through mechanisms that appear to involve sperm-borne epigenetic information. In plants, transgenerational epigenetic inheritance is well established. In mammals, however, the evidence remains contested, partly because most epigenetic marks are erased during the reprogramming events that occur in germ cells and early embryos, making stable inheritance mechanistically difficult to explain.",
        },
        {
          letter: "E",
          text: "The clinical implications of epigenetics are substantial. Many cancers are now understood to involve widespread epigenetic dysregulation, including aberrant promoter methylation that silences tumour suppressor genes, and histone modifications that activate oncogenes. This insight has driven the development of epigenetic therapies: drugs that inhibit DNA methyltransferases or histone deacetylases have received regulatory approval for certain haematological malignancies. Beyond oncology, epigenetic biomarkers are being investigated as diagnostic tools, with methylation patterns in circulating cell-free DNA showing promise for early detection of multiple cancer types from a single blood sample.",
        },
        {
          letter: "F",
          text: "Epigenetic research has also begun to transform psychiatry. Adverse childhood experiences — including abuse, neglect, and household dysfunction — have been associated with lasting alterations in the methylation of genes involved in the hypothalamic-pituitary-adrenal stress axis, potentially predisposing individuals to depression, anxiety, and post-traumatic stress disorder in adulthood. Conversely, studies suggest that certain interventions, including cognitive behavioural therapy and aerobic exercise, may partially reverse stress-induced epigenetic changes. This bidirectionality — the genome responding to psychological experience, and psychological wellbeing potentially being modified epigenetically — represents one of the most intellectually stimulating frontiers in contemporary biomedical science.",
        },
        {
          letter: "G",
          text: "Despite its rapid expansion, epigenetics faces significant methodological challenges. Epigenomes are highly cell-type specific, meaning that measurements obtained from blood cells may not accurately reflect epigenetic states in brain or liver tissue. Replication of findings across independent cohorts has proved difficult, and causal inference — distinguishing epigenetic changes that drive disease from those that are mere consequences of it — remains technically demanding. Furthermore, public and media enthusiasm for epigenetics has sometimes outpaced the evidence, with inflated claims about the heritability of lifestyle choices generating unnecessary alarm. Rigorous experimental design and careful communication of uncertainty will be essential if the field is to fulfil its considerable promise.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The molecular machinery that controls gene activity" },
            { label: "ii",   text: "How external conditions leave lasting marks on the genome" },
            { label: "iii",  text: "Obstacles to accuracy and the risk of overstatement" },
            { label: "iv",   text: "The birth of a concept challenging inherited wisdom" },
            { label: "v",    text: "Passing acquired changes to the next generation" },
            { label: "vi",   text: "Mental health conditions and reversible molecular change" },
            { label: "vii",  text: "Turning epigenetic discoveries into medical treatments" },
            { label: "viii", text: "The role of diet in shaping cognitive ability" },
            { label: "ix",   text: "Comparing epigenetic profiles across different species" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "i",   explanation: "Paragraph B details the molecular mechanisms of epigenetic regulation: DNA methylation, histone modifications, and non-coding RNA." },
            { id: 2, paragraph: "C", correct: "ii",  explanation: "Paragraph C describes how environmental exposures — diet, stress, famine — shape epigenetic marks and influence health." },
            { id: 3, paragraph: "D", correct: "v",   explanation: "Paragraph D discusses transgenerational inheritance — the passing of environmentally acquired epigenetic marks from parents to offspring." },
            { id: 4, paragraph: "E", correct: "vii", explanation: "Paragraph E covers clinical applications including epigenetic cancer therapies and diagnostic biomarkers derived from epigenetic research." },
            { id: 5, paragraph: "F", correct: "vi",  explanation: "Paragraph F links adverse childhood experiences to epigenetic changes associated with psychiatric disorders, and notes that interventions may reverse these changes." },
            { id: 6, paragraph: "G", correct: "iii", explanation: "Paragraph G identifies methodological challenges (cell-type specificity, replication difficulties) and warns against overstating epigenetic findings." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "Francis Crick proposed that information could flow in both directions between DNA and RNA.", correct: "False", explanation: "Paragraph A states Crick described a unidirectional flow from DNA to RNA to protein — not bidirectional." },
            { id: 8,  statement: "DNA methylation typically occurs at sites where cytosine is followed by guanine.", correct: "True", explanation: "Paragraph B explicitly states methylation occurs 'typically at sites where cytosine is followed by guanine.'" },
            { id: 9,  statement: "The Dutch Hunger Winter cohort study began collecting data in the 1970s.", correct: "True", explanation: "Paragraph C refers to the Dutch Hunger Winter cohort 'studied since the 1970s.'" },
            { id: 10, statement: "Epigenetic therapies for cancer have been approved by regulatory bodies.", correct: "True", explanation: "Paragraph E states that drugs inhibiting DNA methyltransferases or histone deacetylases 'have received regulatory approval for certain haematological malignancies.'" },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "Histone acetylation loosens the ", after: " structure and promotes gene expression.", correct: "chromatin", explanation: "Paragraph B: 'Acetylation of histones loosens the chromatin structure and promotes gene expression.'" },
            { id: 12, before: "Research on identical twins shows that their epigenomes diverge substantially over time, especially after different ", after: " exposures.", correct: "lifestyle", explanation: "Paragraph C: epigenomes diverge 'particularly following different lifestyle exposures, diets, and stress levels.'" },
            { id: 13, before: "Methylation patterns in circulating ", after: " are being investigated for the early detection of cancer.", correct: "cell-free DNA", explanation: "Paragraph E: 'methylation patterns in circulating cell-free DNA showing promise for early detection of multiple cancer types.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Rewilding and Ecosystem Restoration",
      paragraphs: [
        {
          letter: "A",
          text: "Rewilding is a conservation philosophy that seeks to restore the ecological processes, species assemblages, and self-regulating dynamics that characterised landscapes before significant human disturbance. Unlike traditional conservation, which often aims to preserve existing ecosystems in a fixed state, rewilding embraces ecological change and prioritises the return of natural processes over the management of specific species or habitats. The approach gained international prominence following the reintroduction of grey wolves to Yellowstone National Park in 1995, which demonstrated how a single keystone predator could trigger cascading changes across the entire food web — a phenomenon ecologists term a trophic cascade.",
        },
        {
          letter: "B",
          text: "The theoretical foundation of rewilding draws heavily on island biogeography and the concept of minimum viable populations, but its most distinctive intellectual contribution has been to focus attention on the role of large animals — megafauna — as ecosystem engineers. Elephants, bison, aurochs, and large predators historically shaped vegetation structure, seed dispersal patterns, and soil composition through their feeding behaviour, movement, and physical disturbance of the landscape. The extinction or functional elimination of these animals — a process researchers call defaunation — left ecosystems ecologically 'hollow,' missing the processes that had structured them for millennia.",
        },
        {
          letter: "C",
          text: "European rewilding efforts have largely focused on allowing abandoned agricultural land to revert to semi-natural vegetation through a process of passive rewilding, combined with the reintroduction of extirpated species such as lynx, beaver, and bison. The Rewilding Europe initiative, founded in 2011, manages over a million hectares across the continent and has documented increases in wolf, bear, and raptor populations in rewilding areas. In the UK, the Knepp Estate in West Sussex has attracted global attention after its owner, Charlie Burrell, converted arable farmland to a rewilding project in 2001, resulting in a dramatic recovery of nightingales, purple emperor butterflies, and turtle doves.",
        },
        {
          letter: "D",
          text: "More ambitious proposals involve the introduction of species that are ecological analogues of extinct megafauna — a concept known as Pleistocene rewilding. Advocates suggest that large herbivores such as horses and cattle, or even African elephants and cheetahs, could fulfil the ecological roles once played by their extinct counterparts in European or North American landscapes. These proposals have attracted fierce controversy. Critics argue that contemporary ecosystems have evolved in the absence of these species for thousands of years and that introducing large exotic animals carries unpredictable ecological risks, in addition to raising significant practical and political difficulties.",
        },
        {
          letter: "E",
          text: "Rewilding projects generate measurable ecosystem benefits beyond biodiversity recovery. Restored wetlands created by beaver activity increase water retention and reduce downstream flooding. Wolf predation on deer and elk in Yellowstone has been associated with the recovery of riverside vegetation, which in turn stabilised stream banks and altered river hydrology. Carbon sequestration is also cited as a benefit: dense, structurally complex vegetation that develops in rewilded landscapes stores more carbon per hectare than intensively managed farmland. These co-benefits have made rewilding attractive to policymakers seeking nature-based solutions to climate change and water security.",
        },
        {
          letter: "F",
          text: "Despite its growing popularity, rewilding faces substantial social and political obstacles. Farmers and land managers frequently oppose the return of predators such as wolves and lynx, citing losses of livestock and the psychological stress imposed on farming communities. Indigenous and rural communities sometimes perceive rewilding as an elite conservation agenda imposed from outside that disregards their livelihoods and cultural relationships with the land. Governance frameworks for managing reintroduced species across national boundaries remain poorly developed, and compensation schemes for predator-caused livestock losses are often inadequate. Ensuring that rewilding initiatives engage meaningfully with local communities from the outset is widely identified as essential to their long-term success.",
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
            { id: 14, text: "A description of how large animals historically altered their surrounding environments", correct: "B", explanation: "Paragraph B explains how megafauna such as elephants and bison shaped vegetation, seed dispersal, and soil composition as ecosystem engineers." },
            { id: 15, text: "A specific property dispute or political conflict arising from rewilding", correct: "F", explanation: "Paragraph F describes how farmers, rural communities, and cross-border governance issues create political obstacles to rewilding." },
            { id: 16, text: "A named private landowner whose estate became an internationally recognised rewilding project", correct: "C", explanation: "Paragraph C names Charlie Burrell of the Knepp Estate, whose farmland conversion attracted global attention." },
            { id: 17, text: "Evidence that predator reintroduction can change the physical characteristics of rivers", correct: "E", explanation: "Paragraph E states that wolf predation led to vegetation recovery that 'stabilised stream banks and altered river hydrology.'" },
            { id: 18, text: "An explanation of why the concept differs from conventional conservation approaches", correct: "A", explanation: "Paragraph A explains that rewilding, unlike traditional conservation, embraces ecological change rather than preserving ecosystems in a fixed state." },
            { id: 19, text: "A proposal to use living species as substitutes for animals that are no longer present", correct: "D", explanation: "Paragraph D describes Pleistocene rewilding — introducing species as ecological analogues of extinct megafauna." },
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
              stem: "What does the passage say was the significance of wolf reintroduction at Yellowstone in 1995?",
              options: [
                { label: "A", text: "It proved that wolves could coexist peacefully with local farming communities." },
                { label: "B", text: "It demonstrated that a single keystone predator could transform the whole food web." },
                { label: "C", text: "It led to the founding of the Rewilding Europe initiative." },
                { label: "D", text: "It was the first rewilding project ever undertaken in North America." },
              ],
              correct: "B",
              explanation: "Paragraph A: the Yellowstone reintroduction 'demonstrated how a single keystone predator could trigger cascading changes across the entire food web.'"
            },
            {
              id: 21,
              stem: "According to paragraph D, what is one major criticism of Pleistocene rewilding proposals?",
              options: [
                { label: "A", text: "The required species have insufficient genetic diversity to survive." },
                { label: "B", text: "Modern ecosystems have developed without these animals for millennia." },
                { label: "C", text: "The costs of transporting exotic animals are prohibitively high." },
                { label: "D", text: "Farmers have been entirely excluded from the decision-making process." },
              ],
              correct: "B",
              explanation: "Paragraph D: critics argue 'contemporary ecosystems have evolved in the absence of these species for thousands of years,' making introduction unpredictable."
            },
            {
              id: 22,
              stem: "Which of the following ecosystem benefits of rewilding is mentioned in paragraph E?",
              options: [
                { label: "A", text: "Reduction in the incidence of wildfires" },
                { label: "B", text: "Improvement in crop yields on surrounding farmland" },
                { label: "C", text: "Increased carbon storage in rewilded landscapes" },
                { label: "D", text: "Greater resistance to invasive plant species" },
              ],
              correct: "C",
              explanation: "Paragraph E: 'dense, structurally complex vegetation that develops in rewilded landscapes stores more carbon per hectare than intensively managed farmland.'"
            },
            {
              id: 23,
              stem: "What does the passage identify as 'defaunation'?",
              options: [
                { label: "A", text: "The process by which megafauna reshape soil composition" },
                { label: "B", text: "A rewilding strategy for restoring extinct species" },
                { label: "C", text: "The extinction or removal of large animals from an ecosystem" },
                { label: "D", text: "The decline of plant diversity caused by overgrazing" },
              ],
              correct: "C",
              explanation: "Paragraph B defines defaunation as 'the extinction or functional elimination of these animals,' leaving ecosystems ecologically hollow."
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "Benefits and Challenges of European Rewilding",
          summaryText:
            "In Europe, rewilding has largely involved reintroducing species that were previously eliminated, while also allowing farmland to recover through {{24}} rewilding. Projects such as the Knepp Estate have recorded impressive recoveries of wildlife. Restored wetlands created by beavers improve water retention and help reduce {{25}}. However, rewilding faces opposition from farmers who fear losses of {{26}} and argue that compensation arrangements are insufficient.",
          wordBank: ["passive", "flooding", "livestock", "carbon sequestration", "active", "predators", "biodiversity", "trophic cascades"],
          questions: [
            { id: 24, blankId: 24, correct: "passive", explanation: "Paragraph C: European efforts combine reintroduction with 'allowing abandoned agricultural land to revert to semi-natural vegetation through a process of passive rewilding.'" },
            { id: 25, blankId: 25, correct: "flooding", explanation: "Paragraph E: 'Restored wetlands created by beaver activity increase water retention and reduce downstream flooding.'" },
            { id: 26, blankId: 26, correct: "livestock", explanation: "Paragraph F: farmers cite 'losses of livestock' as a reason for opposing the return of predators." },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "The Attention Economy and Digital Distraction",
      paragraphs: [
        {
          letter: "A",
          text: "The concept of the attention economy was articulated by economist and cognitive scientist Herbert Simon as early as 1971, when he observed that an abundance of information creates a scarcity of attention. In a media landscape defined by scarcity — where a limited number of broadcast channels competed for audiences — this insight was prescient but not yet pressing. With the rise of the internet and, subsequently, algorithmically curated social media platforms, Simon's observation became the organising logic of an entire industry. Technology companies discovered that human attention, captured and sold to advertisers, constituted a far more scalable and profitable resource than any physical good.",
        },
        {
          letter: "B",
          text: "The design practices used to capture and retain attention draw heavily on behavioural psychology. Variable reward schedules — the intermittent and unpredictable delivery of positive stimuli — were identified by psychologist B.F. Skinner as among the most powerful drivers of compulsive behaviour, and the same principle underlies the design of social media notification systems and infinite scroll feeds. 'Like' buttons, view counts, and follower metrics provide the social validation signals that trigger dopamine release, creating feedback loops that strongly resemble those observed in behavioural addictions. The architects of these systems have themselves acknowledged the psychological power of the mechanisms they built.",
        },
        {
          letter: "C",
          text: "The consequences of chronic digital distraction for cognitive function have become a major area of research. A body of experimental work indicates that the habitual monitoring of digital devices — even when devices are not in use — consumes a significant portion of working memory capacity, leaving fewer cognitive resources available for sustained attention and deep processing. Longitudinal studies suggest an association between heavy social media use and reduced ability to perform tasks requiring extended focus. Critics of this research caution, however, that many studies rely on self-reported data, involve non-representative samples, and struggle to establish causation rather than mere correlation.",
        },
        {
          letter: "D",
          text: "Children and adolescents have been identified as a group of particular concern. Developmental neuroscience indicates that the prefrontal cortex — the region governing impulse control, long-term planning, and sustained attention — does not reach full maturity until the mid-twenties. Young people who spend formative years in an environment of constant digital interruption may, some researchers suggest, be at elevated risk of impaired attentional development. Rates of diagnosed attention-deficit/hyperactivity disorder (ADHD) have risen in many countries in parallel with smartphone adoption, though establishing a causal relationship remains scientifically contested and attributable to multiple factors.",
        },
        {
          letter: "E",
          text: "Responses to the attention economy have emerged at both individual and regulatory levels. At the individual level, a growing 'digital wellness' movement advocates practices such as scheduled device-free periods, the deletion of social media applications, and the deliberate cultivation of analogue activities that sustain focused engagement. The concept of 'deep work' — popularised by author Cal Newport — argues that the capacity for prolonged, distraction-free concentration is not only cognitively beneficial but constitutes a rare and economically valuable skill in an age of pervasive distraction. Productivity coaches and educators have adopted these frameworks widely.",
        },
        {
          letter: "F",
          text: "At the regulatory level, critics argue that individual behavioural strategies are insufficient responses to what is fundamentally a structural problem. Governments in the European Union and United Kingdom have introduced or proposed legislation requiring platforms to conduct risk assessments for features likely to cause compulsive use, particularly among minors. France and several other countries have moved to ban smartphone use in schools. Some researchers advocate for treating harmful platform design features as a public health issue, calling for an equivalent to food labelling that would require platforms to disclose the psychological techniques embedded in their products. Whether such measures can effectively constrain an industry whose business model depends on maximising attention capture remains deeply uncertain.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "Herbert Simon's concept of the attention economy was ahead of its time when it was first proposed.", correct: "Yes", explanation: "Paragraph A describes Simon's 1971 observation as 'prescient but not yet pressing' in a media landscape of scarcity — implying it anticipated future developments." },
            { id: 28, statement: "The designers of social media systems were unaware of the addictive potential of their products.", correct: "No", explanation: "Paragraph B states that 'the architects of these systems have themselves acknowledged the psychological power of the mechanisms they built,' indicating awareness." },
            { id: 29, statement: "Research into digital distraction and cognitive function is universally accepted by the scientific community.", correct: "No", explanation: "Paragraph C explicitly notes that critics caution many studies rely on self-reported data, non-representative samples, and cannot establish causation." },
            { id: 30, statement: "The writer considers individual digital wellness strategies to be adequate solutions to the attention economy problem.", correct: "No", explanation: "Paragraph F argues that 'individual behavioural strategies are insufficient responses to what is fundamentally a structural problem,' indicating the writer does not view them as adequate alone." },
            { id: 31, statement: "Cal Newport's concept of 'deep work' has been adopted by some educators and productivity professionals.", correct: "Yes", explanation: "Paragraph E: 'Productivity coaches and educators have adopted these frameworks widely.'" },
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
              stem: "Which TWO psychological mechanisms are identified in the passage as driving compulsive digital behaviour?",
              options: [
                { label: "A", text: "Variable reward schedules" },
                { label: "B", text: "Peer pressure from offline social groups" },
                { label: "C", text: "Social validation signals such as 'likes'" },
                { label: "D", text: "Fear of missing important news events" },
                { label: "E", text: "Competitive rankings between users" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph B identifies variable reward schedules (A) and social validation signals like 'Like' buttons and view counts (C) as mechanisms creating compulsive feedback loops."
            },
            {
              id: 33,
              stem: "Which TWO concerns about research on digital distraction are raised in the passage?",
              options: [
                { label: "A", text: "Studies are funded by technology companies." },
                { label: "B", text: "Much of the data relies on self-reporting." },
                { label: "C", text: "Causation has not been clearly established." },
                { label: "D", text: "The studies are too short in duration." },
                { label: "E", text: "Results differ significantly between countries." },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph C: critics note studies 'rely on self-reported data' (B) and 'struggle to establish causation rather than mere correlation' (C)."
            },
            {
              id: 34,
              stem: "Which TWO regulatory measures aimed at the attention economy are mentioned in the passage?",
              options: [
                { label: "A", text: "Banning social media companies from advertising to adults" },
                { label: "B", text: "Requiring platforms to assess risk from compulsive-use features" },
                { label: "C", text: "Prohibiting smartphone use in schools" },
                { label: "D", text: "Limiting the number of hours children can use apps daily" },
                { label: "E", text: "Mandating data sharing between technology companies" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph F: legislation requiring platforms to 'conduct risk assessments for features likely to cause compulsive use' (B) and France banning 'smartphone use in schools' (C)."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "In what year did Herbert Simon first articulate the concept of the attention economy?", correct: "1971", explanation: "Paragraph A: 'The concept of the attention economy was articulated by economist and cognitive scientist Herbert Simon as early as 1971.'" },
            { id: 36, before: "Which psychologist identified variable reward schedules as powerful drivers of compulsive behaviour?", correct: "B.F. Skinner", explanation: "Paragraph B: 'Variable reward schedules…were identified by psychologist B.F. Skinner as among the most powerful drivers of compulsive behaviour.'" },
            { id: 37, before: "What region of the brain governs impulse control and does not mature until the mid-twenties?", correct: "prefrontal cortex", explanation: "Paragraph D: 'the prefrontal cortex — the region governing impulse control, long-term planning, and sustained attention — does not reach full maturity until the mid-twenties.'" },
            { id: 38, before: "What term does Cal Newport use for the capacity for prolonged distraction-free concentration?", correct: "deep work", explanation: "Paragraph E: the concept of 'deep work' is described as the capacity for prolonged, distraction-free concentration." },
            { id: 39, before: "What analogy does the passage suggest could be used to make platforms disclose their psychological techniques?", correct: "food labelling", explanation: "Paragraph F: some researchers call for 'an equivalent to food labelling that would require platforms to disclose the psychological techniques embedded in their products.'" },
            { id: 40, before: "What word does the passage use to describe how difficult it will be to restrain a business model built on maximising attention capture?", correct: "deeply uncertain", explanation: "Paragraph F concludes that whether regulatory measures 'can effectively constrain an industry…remains deeply uncertain.'" },
          ],
        },
      ],
    },
  ],
};
