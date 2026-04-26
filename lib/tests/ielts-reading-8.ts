import type { IELTSTest } from "./types";

export const ieltsReading8: IELTSTest = {
  id: "ielts-reading-8",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 8",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "The Psychology of Creativity",
      paragraphs: [
        {
          letter: "A",
          text: "For much of the twentieth century, creativity was regarded as a rare and innate gift possessed by a select few exceptional individuals — the genius artist, the visionary scientist, the inspired composer. This romantic view held that creative ability could not be taught, trained, or meaningfully analysed; it was simply a mysterious force that visited certain people and bypassed others. The pioneering work of psychologist J.P. Guilford challenged this assumption in his landmark 1950 presidential address to the American Psychological Association, in which he argued that creativity was a measurable cognitive capacity deserving systematic scientific study. Guilford's call to action opened a new field of inquiry that has since expanded to encompass cognitive science, neuroscience, social psychology, and organisational behaviour.",
        },
        {
          letter: "B",
          text: "Contemporary psychology identifies two broad modes of thinking relevant to creativity. Convergent thinking involves narrowing down multiple possibilities to identify a single correct or optimal solution, as in solving a mathematical equation. Divergent thinking, by contrast, involves generating many possible responses to an open-ended problem — the capacity to see multiple uses for an everyday object, for instance. Guilford associated divergent thinking closely with creativity, and early psychometric tests of creative ability, such as the Torrance Tests of Creative Thinking developed in the 1960s, assessed fluency, flexibility, and originality in generating ideas. While later researchers questioned whether divergent thinking was sufficient to capture creativity in full, these dimensions remain foundational to how the field measures creative potential.",
        },
        {
          letter: "C",
          text: "Neuroscientific research has substantially refined our understanding of the brain processes underlying creative thought. Early assumptions that creativity resided in the right hemisphere of the brain — popularised in books and workshops advocating 'right-brain thinking' — have been largely discredited. Functional neuroimaging studies consistently show that creative cognition recruits three large-scale brain networks: the default mode network, associated with spontaneous imagination and mental simulation; the executive control network, which regulates focused attention and evaluation; and the salience network, which mediates the shifting of attention between the two. Effective creative thinking appears to depend not on any single region but on fluid, dynamic interaction among all three networks.",
        },
        {
          letter: "D",
          text: "Environmental and social conditions profoundly shape creative output. Research by Teresa Amabile at Harvard Business School introduced the concept of intrinsic motivation as a key driver: people produce their most creative work when they are internally driven by interest and enjoyment rather than external rewards such as monetary incentives or competitive pressure. This finding, replicated across numerous studies, has significant implications for how organisations and educational institutions structure creative work. Amabile also identified 'creativity killers' — surveillance, evaluation apprehension, restricted choice, and time pressure — each of which was found to suppress creative performance even in individuals with high baseline creative ability.",
        },
        {
          letter: "E",
          text: "The relationship between creative achievement and psychological wellbeing has attracted considerable debate. An influential but contested body of literature has suggested elevated rates of mood disorders among highly creative individuals — a hypothesis sometimes called the 'mad genius' myth. Careful meta-analyses, however, reveal a far more complex picture. Mild positive affect tends to broaden the scope of attention and increase cognitive flexibility, facilitating creative ideation. Severe depression or acute mania, by contrast, typically impairs the sustained concentration and iterative refinement that translate creative ideas into finished works. Most researchers now conclude that the relationship between mental health and creativity is nonlinear, context-dependent, and strongly mediated by domain.",
        },
        {
          letter: "F",
          text: "Critics of mainstream creativity research have raised methodological concerns that deserve serious attention. Many laboratory studies of creativity use artificial tasks — unusual uses for a brick, remote associates tests — that may bear little resemblance to the creative processes involved in composing a symphony, designing a vaccine, or writing a novel. The validity of pencil-and-paper divergent thinking tests as predictors of real-world creative achievement is disputed, with some longitudinal studies finding only modest correlations. There is also a cultural dimension: the individualistic framing dominant in Western psychological research may not adequately capture the collaborative and community-embedded nature of creative practice in many non-Western traditions.",
        },
        {
          letter: "G",
          text: "Emerging research is pushing the boundaries of creativity science in several directions. Computational models of creativity attempt to formalise the cognitive operations involved in analogical reasoning, conceptual blending, and constraint relaxation. Studies of group creativity examine how teams can be structured to maximise collective creative output — findings that have direct application to technology companies, design firms, and research institutions. There is also growing interest in the creativity of artificial intelligence systems: whether large language models and generative algorithms produce genuinely novel ideas or merely recombine existing patterns in statistically plausible ways is a question with profound implications for how we define human creative uniqueness.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below.",
          headings: [
            { label: "i",    text: "The origins of scientific interest in creative ability" },
            { label: "ii",   text: "Two fundamental modes of creative cognition" },
            { label: "iii",  text: "How multiple brain networks interact during creative thought" },
            { label: "iv",   text: "The role of motivation and organisational context" },
            { label: "v",    text: "New frontiers: machines, teams, and computation" },
            { label: "vi",   text: "Problems with laboratory-based creativity measurement" },
            { label: "vii",  text: "Mental health, emotion, and creative performance" },
            { label: "viii", text: "Cultural variations in artistic tradition" },
            { label: "ix",   text: "The financial returns of creative industries" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "ii",   explanation: "Paragraph B introduces divergent and convergent thinking — the two fundamental cognitive modes associated with creativity — and traces their measurement through Torrance's tests." },
            { id: 2, paragraph: "C", correct: "iii",  explanation: "Paragraph C explains how the default mode, executive control, and salience networks interact dynamically during creative cognition, debunking the 'right-brain' myth." },
            { id: 3, paragraph: "D", correct: "iv",   explanation: "Paragraph D discusses Amabile's research on intrinsic motivation and the organisational factors — surveillance, evaluation, time pressure — that suppress creative performance." },
            { id: 4, paragraph: "E", correct: "vii",  explanation: "Paragraph E examines the contested relationship between mood disorders and creativity, noting that mild positive affect helps while severe mental illness typically impairs creative work." },
            { id: 5, paragraph: "F", correct: "vi",   explanation: "Paragraph F raises methodological criticisms: artificial lab tasks, weak predictive validity of divergent thinking tests, and Western cultural bias." },
            { id: 6, paragraph: "G", correct: "v",    explanation: "Paragraph G surveys emerging directions including computational creativity models, group creativity research, and questions about AI creative capacity." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "J.P. Guilford argued that creativity was a measurable cognitive capacity in a 1950 address.", correct: "True", explanation: "Paragraph A states that Guilford made this argument in his 'landmark 1950 presidential address to the American Psychological Association.'" },
            { id: 8,  statement: "Neuroimaging research confirms that creative thinking is primarily located in the right hemisphere of the brain.", correct: "False", explanation: "Paragraph C explicitly states that the right-hemisphere view 'has been largely discredited' and that creativity recruits three large-scale networks across the brain." },
            { id: 9,  statement: "Monetary rewards consistently enhance creative performance across all professional domains.", correct: "False", explanation: "Paragraph D describes monetary incentives as an external reward that reduces intrinsic motivation and suppresses creative performance, not enhances it." },
            { id: 10, statement: "Longitudinal studies have found only modest correlations between divergent thinking test scores and real-world creative achievement.", correct: "True", explanation: "Paragraph F explicitly states that 'some longitudinal studies' have found 'only modest correlations' between divergent thinking tests and real-world creative achievement." },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "The Torrance Tests assessed creative potential through fluency, flexibility, and ", after: " in generating ideas.", correct: "originality", explanation: "Paragraph B: the Torrance Tests 'assessed fluency, flexibility, and originality in generating ideas.'" },
            { id: 12, before: "Amabile's research showed that people are most creative when driven by ", after: " rather than external rewards.", correct: "intrinsic motivation", explanation: "Paragraph D introduces 'intrinsic motivation' as the key internal driver that produces the most creative work." },
            { id: 13, before: "The idea that highly creative people are more prone to mental illness is sometimes called the ", after: " myth.", correct: "mad genius", explanation: "Paragraph E refers to this hypothesis as 'sometimes called the \"mad genius\" myth.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Arctic Ice Melt and Sea Level Rise",
      paragraphs: [
        {
          letter: "A",
          text: "The Arctic is warming at approximately four times the global average rate — a phenomenon known as Arctic amplification — making it one of the most rapidly changing environments on Earth. This accelerated warming results from a self-reinforcing feedback loop: as sea ice melts, the dark ocean surface that is exposed absorbs far more solar radiation than the reflective ice it replaces, driving further warming and further ice loss. Since satellite records began in 1979, the Arctic has lost more than 40 percent of its summer sea-ice extent, and climate models project the Arctic Ocean will experience its first ice-free summer before mid-century under current emissions trajectories.",
        },
        {
          letter: "B",
          text: "The distinction between sea ice and land ice is critical for understanding sea level implications. Sea ice — frozen ocean water that floats on the surface — does not raise sea levels when it melts, because it already displaces a volume of water equal to its mass, in accordance with Archimedes' principle. Land ice, by contrast — the ice sheets of Greenland and Antarctica and the world's mountain glaciers — is frozen freshwater resting on solid ground. When this melts and flows into the ocean, it directly adds volume and causes sea levels to rise. The loss of Arctic sea ice is therefore a sentinel indicator of warming rather than a direct driver of sea level change.",
        },
        {
          letter: "C",
          text: "The Greenland Ice Sheet is currently the single largest cryosphere contributor to global sea level rise. It holds enough ice to raise global mean sea levels by approximately 7.2 metres if it were to melt completely — an outcome that would take centuries to millennia under even the most pessimistic projections. However, the rate of mass loss has accelerated markedly: Greenland lost ice at an average rate of around 280 billion tonnes per year during the 2010s, compared with roughly 34 billion tonnes per year in the 1990s. This acceleration is driven by both increased surface melt due to higher air temperatures and the dynamic flow of glaciers to the sea, a process that has intensified as warming ocean water erodes glacial outlet faces from below.",
        },
        {
          letter: "D",
          text: "The West Antarctic Ice Sheet presents a potentially more alarming long-term risk. Unlike Greenland, large portions of this ice sheet rest on bedrock that lies below sea level, making it inherently vulnerable to a process known as marine ice sheet instability. As the grounding line — the boundary where the ice sheet transitions from resting on bedrock to floating as an ice shelf — retreats inland, it encounters progressively deeper bedrock, meaning that ever-larger volumes of ice become exposed to destabilising ocean water. Some researchers have argued that the Thwaites Glacier, a Florida-sized outlet glacier in West Antarctica, may already have passed a tipping point beyond which its eventual collapse is effectively irreversible on human timescales.",
        },
        {
          letter: "E",
          text: "Current projections for global mean sea level rise by 2100 vary considerably depending on emissions scenarios and assumptions about ice-sheet dynamics. Under high-emissions pathways, the Intergovernmental Panel on Climate Change projects a likely range of 0.63 to 1.01 metres by the end of the century, with low-confidence but physically plausible scenarios reaching up to 1.5 metres or more if ice-sheet instabilities occur. These global averages, however, mask significant regional variation: factors including gravitational effects, ocean circulation patterns, and land subsidence mean that some coastlines will experience sea level rise well above the global mean while others may see below-average increases.",
        },
        {
          letter: "F",
          text: "Coastal communities and national governments are responding to sea level projections with a spectrum of adaptation strategies. Hard engineering measures — seawalls, surge barriers, and beach nourishment programmes — offer protection but are expensive, can accelerate erosion on adjacent coastlines, and require ongoing maintenance as sea levels continue to rise. Managed retreat — the planned relocation of populations and infrastructure away from vulnerable coastlines — is increasingly discussed by policymakers but remains politically contentious in most contexts. Nature-based solutions, including the restoration of mangrove forests and coastal wetlands, are gaining attention as more sustainable and ecologically valuable alternatives that can attenuate wave energy and accumulate sediment.",
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
            { id: 14, text: "An explanation of why floating ice does not contribute to rising sea levels", correct: "B", explanation: "Paragraph B explains that sea ice 'already displaces a volume of water equal to its mass' in accordance with Archimedes' principle, so its melting does not raise sea levels." },
            { id: 15, text: "A reference to the self-reinforcing nature of warming in polar regions", correct: "A", explanation: "Paragraph A describes the feedback loop where melting ice exposes dark ocean water that absorbs more radiation, driving further warming and ice loss." },
            { id: 16, text: "Evidence that ice loss from a major ice sheet has increased significantly over recent decades", correct: "C", explanation: "Paragraph C states that Greenland's ice loss rate accelerated from around 34 billion tonnes per year in the 1990s to around 280 billion tonnes per year in the 2010s." },
            { id: 17, text: "A description of how ocean water undermines glacier stability from beneath", correct: "C", explanation: "Paragraph C notes that 'warming ocean water erodes glacial outlet faces from below,' intensifying glacier flow to the sea." },
            { id: 18, text: "A suggestion that a particular glacier may be past the point of reversible stabilisation", correct: "D", explanation: "Paragraph D states that some researchers argue the Thwaites Glacier 'may already have passed a tipping point beyond which its eventual collapse is effectively irreversible.'" },
            { id: 19, text: "A mention of ecological restoration as a coastal defence approach", correct: "F", explanation: "Paragraph F discusses the restoration of mangrove forests and coastal wetlands as nature-based solutions to sea level rise." },
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
              stem: "According to paragraph A, what has happened to Arctic summer sea-ice extent since 1979?",
              options: [
                { label: "A", text: "It has increased by more than 40 percent." },
                { label: "B", text: "It has decreased by more than 40 percent." },
                { label: "C", text: "It has remained largely stable." },
                { label: "D", text: "It has declined by approximately 20 percent." },
              ],
              correct: "B",
              explanation: "Paragraph A: 'the Arctic has lost more than 40 percent of its summer sea-ice extent' since satellite records began in 1979."
            },
            {
              id: 21,
              stem: "What makes the West Antarctic Ice Sheet particularly vulnerable to collapse, according to paragraph D?",
              options: [
                { label: "A", text: "It is melting faster than the Greenland Ice Sheet." },
                { label: "B", text: "Much of it rests on bedrock that is below sea level." },
                { label: "C", text: "It has already lost more than half its volume." },
                { label: "D", text: "Its surface is exposed to direct solar radiation." },
              ],
              correct: "B",
              explanation: "Paragraph D states that 'large portions of this ice sheet rest on bedrock that lies below sea level,' making it vulnerable to marine ice sheet instability."
            },
            {
              id: 22,
              stem: "What does the passage say about regional variations in sea level rise?",
              options: [
                { label: "A", text: "All coastal regions will experience the same degree of sea level change." },
                { label: "B", text: "Some coastlines will see less than average sea level rise." },
                { label: "C", text: "Tropical coastlines are exempt from sea level rise." },
                { label: "D", text: "Regional projections are more reliable than global averages." },
              ],
              correct: "B",
              explanation: "Paragraph E states that 'some coastlines will experience sea level rise well above the global mean while others may see below-average increases.'"
            },
            {
              id: 23,
              stem: "What criticism does the passage make of hard engineering coastal defences?",
              options: [
                { label: "A", text: "They are ineffective against storm surges." },
                { label: "B", text: "They are only suitable for developing nations." },
                { label: "C", text: "They can worsen erosion on neighbouring coastlines." },
                { label: "D", text: "They are generally opposed by local communities." },
              ],
              correct: "C",
              explanation: "Paragraph F: hard engineering measures 'can accelerate erosion on adjacent coastlines' and require ongoing maintenance as sea levels continue to rise."
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 24–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          summaryTitle: "The Greenland Ice Sheet and Sea Level",
          summaryText:
            "The Greenland Ice Sheet contains sufficient ice to raise global sea levels by around 7.2 metres if entirely melted. Although complete melting would require {{24}}, the rate of ice loss has accelerated sharply in recent decades. This acceleration is caused partly by rising air temperatures increasing surface melt and partly by the dynamic flow of {{25}} towards the ocean. Warming ocean water that erodes glacier bases from below has intensified this process. Greenland is currently the largest single {{26}} contributor to global sea level rise.",
          wordBank: ["centuries to millennia", "glaciers", "cryosphere", "sea ice", "marine instability", "permafrost", "outlet glaciers", "surface melt"],
          questions: [
            { id: 24, blankId: 24, correct: "centuries to millennia", explanation: "Paragraph C: complete melting 'would take centuries to millennia under even the most pessimistic projections.'" },
            { id: 25, blankId: 25, correct: "glaciers", explanation: "Paragraph C refers to 'the dynamic flow of glaciers to the sea' as a driver of mass loss alongside surface melt." },
            { id: 26, blankId: 26, correct: "cryosphere", explanation: "Paragraph C describes Greenland as 'the single largest cryosphere contributor to global sea level rise.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "Universal Basic Income: Evidence and Debate",
      paragraphs: [
        {
          letter: "A",
          text: "Universal Basic Income (UBI) — a policy in which all citizens receive a regular, unconditional cash payment from the state, regardless of employment status or means — has moved from the margins of political philosophy to the centre of mainstream policy debate within a remarkably short period. Advocates span the political spectrum: libertarians argue that UBI could replace an inefficient patchwork of means-tested benefits with a simpler, less paternalistic system; progressives contend that it could eliminate poverty, reduce inequality, and provide the economic security necessary for workers to resist exploitative employment conditions. Renewed interest has been driven partly by anxieties about technological unemployment, as artificial intelligence and robotics are predicted to displace large segments of the workforce.",
        },
        {
          letter: "B",
          text: "The intellectual roots of UBI stretch back several centuries. Thomas Paine proposed in 1797 that every citizen should receive a capital grant upon reaching adulthood as compensation for the private appropriation of land. The twentieth century saw renewed advocacy from economists including Milton Friedman, who proposed a negative income tax — a form of guaranteed minimum income — as a market-friendly alternative to the welfare state, and James Tobin, who endorsed a similar scheme on grounds of social justice. More recently, the philosopher Philippe Van Parijs has developed the most systematic contemporary defence of UBI, arguing that a sufficient basic income is required by any plausible theory of real freedom.",
        },
        {
          letter: "C",
          text: "Empirical evidence on UBI has accumulated through a series of pilot programmes conducted across different national contexts. Finland's experiment, which ran from 2017 to 2018, provided 2,000 unemployed citizens with a monthly payment of €560, replacing their existing unemployment benefits. Results showed modest improvements in recipients' mental wellbeing and life satisfaction, and no significant reduction in their motivation to seek employment — contradicting a common objection to unconditional payments. Kenya's GiveDirectly programme, which provides long-term unconditional transfers to rural households, has reported positive effects on consumption, assets, and psychological wellbeing, with limited evidence of increased spending on alcohol or tobacco.",
        },
        {
          letter: "D",
          text: "Critics of UBI raise a variety of economic objections. The most fundamental concerns the cost: providing every adult citizen of a high-income country with a meaningful basic income — above the poverty line — would require fiscal resources on a scale that most economists regard as politically and practically unfeasible without substantial tax increases or cuts to existing public services. Critics also argue that replacing means-tested benefits with a universal payment would redistribute resources upward, since better-off recipients would receive the same payment as the poorest citizens without the compensating means-test. Opponents from the political left further contend that UBI might be used as a pretext for dismantling the broader welfare state, ultimately leaving the poorest worse off.",
        },
        {
          letter: "E",
          text: "A distinct set of concerns centres on UBI's potential labour market effects. Standard economic theory predicts that an unconditional income floor would reduce labour supply, as some individuals choose leisure over work when their subsistence needs are met without employment. Pilot evidence on this question is mixed: most studies find modest reductions in working hours among recipients, concentrated among parents of young children and students pursuing education — outcomes that many researchers consider socially beneficial. The Manitoba Basic Annual Income experiment conducted in Canada in the 1970s found that hospitalisations declined and high-school completion rates rose among recipient households, suggesting broader social returns that partially offset any reduction in labour supply.",
        },
        {
          letter: "F",
          text: "The political economy of UBI implementation presents obstacles that purely economic analyses may underestimate. Public attitudes towards cash transfers are shaped by deeply held beliefs about the moral relationship between work and reward: in many societies, unconditional payments are viewed as incompatible with norms of reciprocity and earned entitlement. Polling consistently shows that conditionality — attaching requirements such as job search activity or community service — is more popular than pure universality across most demographic groups. This political constraint may mean that any scheme enacted under the label of UBI in practice departs significantly from the ideal model debated by philosophers and economists, raising questions about whether pilot programme findings from small-scale experiments can translate to universal national implementation.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–31",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO, or NOT GIVEN.",
          questions: [
            { id: 27, statement: "Both libertarians and progressives have found reasons to support UBI.", correct: "Yes", explanation: "Paragraph A explicitly states that 'advocates span the political spectrum,' citing libertarians and progressives with different but supportive arguments." },
            { id: 28, statement: "Thomas Paine proposed a form of UBI specifically to fund public education.", correct: "No", explanation: "Paragraph B states Paine proposed a capital grant 'as compensation for the private appropriation of land,' not to fund public education." },
            { id: 29, statement: "The Finnish UBI pilot showed that unconditional payments significantly reduced recipients' desire to find work.", correct: "No", explanation: "Paragraph C states there was 'no significant reduction in their motivation to seek employment' — directly contradicting this statement." },
            { id: 30, statement: "The writer suggests that political attitudes towards conditionality may prevent pure UBI from being implemented nationally.", correct: "Yes", explanation: "Paragraph F argues that political constraints around conditionality 'may mean that any scheme enacted under the label of UBI in practice departs significantly from the ideal model.'" },
            { id: 31, statement: "The GiveDirectly programme in Kenya has been independently verified by the World Bank.", correct: "Not Given", explanation: "Paragraph C mentions the GiveDirectly programme's positive effects but makes no reference to World Bank verification." },
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
              stem: "Which TWO economic criticisms of UBI are mentioned in the passage?",
              options: [
                { label: "A", text: "It would be prohibitively expensive to fund at a meaningful level." },
                { label: "B", text: "It would cause uncontrolled inflation." },
                { label: "C", text: "A universal payment could benefit wealthier citizens as much as poor ones." },
                { label: "D", text: "It would reduce innovation in the private sector." },
                { label: "E", text: "It is incompatible with progressive taxation systems." },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph D raises two key economic objections: the fiscal cost of a meaningful payment (A) and the upward redistribution risk of a universal payment compared to means-testing (C)."
            },
            {
              id: 33,
              stem: "Which TWO positive outcomes from UBI pilot programmes are reported in the passage?",
              options: [
                { label: "A", text: "Increased rates of entrepreneurship" },
                { label: "B", text: "Improved mental wellbeing among recipients" },
                { label: "C", text: "Higher rates of school completion" },
                { label: "D", text: "Significant increases in recipients' working hours" },
                { label: "E", text: "Reduction in crime rates" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph C reports improved mental wellbeing (B) from Finland's experiment. Paragraph E reports higher high-school completion rates (C) from the Manitoba experiment."
            },
            {
              id: 34,
              stem: "Which TWO economists or philosophers mentioned in the passage advocated for a form of guaranteed income?",
              options: [
                { label: "A", text: "Milton Friedman" },
                { label: "B", text: "Adam Smith" },
                { label: "C", text: "Philippe Van Parijs" },
                { label: "D", text: "John Maynard Keynes" },
                { label: "E", text: "Friedrich Hayek" },
              ],
              pickCount: 2,
              correct: ["A", "C"],
              explanation: "Paragraph B names Milton Friedman as proposing a negative income tax (A) and Philippe Van Parijs as providing 'the most systematic contemporary defence of UBI' (C)."
            },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 35–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
          questions: [
            { id: 35, before: "What term describes income transfers that are given to all citizens without any conditions attached?", correct: "unconditional cash payment", explanation: "Paragraph A defines UBI as 'a regular, unconditional cash payment from the state, regardless of employment status or means.'" },
            { id: 36, before: "What did Thomas Paine say citizens should receive upon reaching adulthood?", correct: "a capital grant", explanation: "Paragraph B: Paine proposed 'that every citizen should receive a capital grant upon reaching adulthood as compensation for the private appropriation of land.'" },
            { id: 37, before: "Among which groups did UBI pilots most commonly find reductions in working hours?", correct: "parents of young children", explanation: "Paragraph E: modest reductions in working hours were 'concentrated among parents of young children and students pursuing education.'" },
            { id: 38, before: "What did the Manitoba experiment find happened to hospital admissions among recipient households?", correct: "declined", explanation: "Paragraph E: 'hospitalisations declined' among recipient households in the Manitoba Basic Annual Income experiment." },
            { id: 39, before: "What concept do many societies consider unconditional cash payments to be incompatible with?", correct: "reciprocity and earned entitlement", explanation: "Paragraph F: unconditional payments are 'viewed as incompatible with norms of reciprocity and earned entitlement.'" },
            { id: 40, before: "What does polling show is more publicly acceptable than pure universality?", correct: "conditionality", explanation: "Paragraph F: 'Polling consistently shows that conditionality … is more popular than pure universality across most demographic groups.'" },
          ],
        },
      ],
    },
  ],
};
