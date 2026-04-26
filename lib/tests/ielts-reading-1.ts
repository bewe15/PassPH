import type { IELTSTest } from "./types";

export const ieltsReading1: IELTSTest = {
  id: "ielts-reading-1",
  exam: "IELTS",
  title: "IELTS Academic Reading — Test 1",
  totalSeconds: 3600,
  passages: [
    // ── PASSAGE 1 ────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "The Behavioural Economics of Nudge Theory",
      paragraphs: [
        {
          letter: "A",
          text: "In 2008, American economists Richard Thaler and Cass Sunstein published a book entitled Nudge, which introduced a framework they called 'libertarian paternalism.' The central idea is deceptively simple: by carefully designing the environment in which people make decisions — what the authors call the 'choice architecture' — it is possible to steer individuals towards better outcomes without restricting their freedom to choose otherwise. Unlike traditional policy tools such as taxation or prohibition, nudges work by making the desired behaviour the path of least resistance.",
        },
        {
          letter: "B",
          text: "Among the most widely cited examples of nudging in practice is the reform of organ donation systems. Countries that operate an opt-out system, in which citizens are presumed to consent to donation unless they actively register their refusal, consistently achieve donation rates far higher than opt-in countries such as the United States. The same principle has been applied to school cafeterias, where placing healthier food at eye level and fruit near the checkout — rather than outlawing unhealthy options — has been shown to increase nutritious food selection among pupils.",
        },
        {
          letter: "C",
          text: "The effectiveness of nudges is underpinned by a well-documented set of cognitive biases. Loss aversion — the tendency to weight potential losses more heavily than equivalent gains — means that framing a message in terms of what one stands to lose rather than gain can dramatically alter behaviour. Present bias leads individuals to discount future consequences in favour of immediate gratification, explaining why automatic pension enrolment is far more effective than voluntary sign-up. Status quo bias — the preference for the current state of affairs — means that defaults exert an influence on choices that is disproportionate to the effort required to change them.",
        },
        {
          letter: "D",
          text: "Governments around the world have been quick to adopt nudge-based interventions. The United Kingdom established the Behavioural Insights Team — sometimes called the Nudge Unit — in 2010, making it the first government body of its kind. Over the following decade, the team conducted more than 400 randomised controlled trials covering areas from tax compliance and energy conservation to pension savings and public health messaging. The United States followed suit with its own Social and Behavioural Sciences Team in 2015. Comparable units now operate in more than 200 government departments and international organisations worldwide.",
        },
        {
          letter: "E",
          text: "Not everyone has welcomed the spread of nudge theory. Philosophers Daniel Hausman and Brynn Welch have argued that nudges undermine individual autonomy by exploiting cognitive weaknesses rather than engaging citizens as rational agents. Critics from the political right object to what they see as covert state manipulation, while some on the left argue that nudges deflect attention from the structural causes of poor outcomes — poverty, inequality, and inadequate public services — by placing responsibility on individual behaviour. Both camps have labelled the approach a form of soft paternalism that is difficult to hold democratically accountable.",
        },
        {
          letter: "F",
          text: "Defenders of nudge theory counter that the architecture of choice is unavoidable: every decision environment has a default, whether consciously designed or not. Supermarket layouts, website interfaces, and workplace canteens all nudge people constantly, and the question is not whether to nudge but how. Proponents also note that nudges are typically transparent — governments publish their interventions — and that opting out remains straightforward. On this reading, the libertarian objection loses much of its force, since citizens are never compelled to follow the nudge.",
        },
        {
          letter: "G",
          text: "The consensus among researchers is that nudge theory represents a valuable but limited tool. It works best for simple, one-time decisions with a clear default — pension enrolment, organ donation, letter-opening rates for tax notices — and less well for complex, habitual behaviours such as diet or physical activity. The future of the field likely lies in combining behavioural insights with systemic policy reform: using nudges to smooth the path towards better choices while simultaneously addressing the social and economic conditions that make those choices difficult in the first place.",
        },
      ],
      sections: [
        {
          type: "match_headings",
          questionRange: "Questions 1–6",
          instructions:
            "The reading passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–ix, in the boxes.",
          headings: [
            { label: "i",   text: "The intellectual origins of a policy approach" },
            { label: "ii",  text: "How redesigning defaults changed public health outcomes" },
            { label: "iii", text: "The psychological mechanisms behind nudge effectiveness" },
            { label: "iv",  text: "Objections from across the political spectrum" },
            { label: "v",   text: "Adoption by governments and measurable results" },
            { label: "vi",  text: "Why some form of choice architecture is inevitable" },
            { label: "vii", text: "A measured assessment of the theory's scope and future" },
            { label: "viii",text: "The role of financial incentives in changing behaviour" },
            { label: "ix",  text: "Distinguishing nudges from direct compulsion" },
          ],
          questions: [
            { id: 1, paragraph: "B", correct: "ii",  explanation: "Paragraph B discusses organ donation opt-out systems and cafeteria layouts — both examples of how changing defaults improved outcomes." },
            { id: 2, paragraph: "C", correct: "iii", explanation: "Paragraph C explains the cognitive biases (loss aversion, present bias, status quo bias) that make nudges effective." },
            { id: 3, paragraph: "D", correct: "v",   explanation: "Paragraph D covers government adoption: the UK Nudge Unit (2010), 400+ trials, and the US Social and Behavioural Sciences Team." },
            { id: 4, paragraph: "E", correct: "iv",  explanation: "Paragraph E presents critiques from both the political right (state manipulation) and left (structural causes)." },
            { id: 5, paragraph: "F", correct: "vi",  explanation: "Paragraph F argues that choice architecture is unavoidable — every environment has a default, designed or not." },
            { id: 6, paragraph: "G", correct: "vii", explanation: "Paragraph G offers a balanced conclusion: nudges are valuable but limited, and work best when combined with systemic reform." },
          ],
        },
        {
          type: "tfng",
          questionRange: "Questions 7–10",
          instructions:
            "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN.",
          questions: [
            { id: 7,  statement: "Thaler and Sunstein published their book Nudge in 2009.", correct: "False", explanation: "The passage clearly states the book was published in 2008, not 2009." },
            { id: 8,  statement: "The UK's Behavioural Insights Team was the first government nudge unit of its kind.", correct: "True", explanation: "Paragraph D states the UK team was established in 2010 and explicitly describes it as 'the first government body of its kind.'" },
            { id: 9,  statement: "Critics of nudge theory share concerns about individual autonomy regardless of their political position.", correct: "True", explanation: "Paragraph E shows critics from the right (covert manipulation) and left (deflecting structural issues) both challenge the approach on related grounds." },
            { id: 10, statement: "Studies have shown nudge theory to be more cost-effective than traditional legislation in every policy area tested.", correct: "Not Given", explanation: "The passage does not compare nudges to legislation across policy areas in terms of cost-effectiveness." },
          ],
        },
        {
          type: "sentence_completion",
          questionRange: "Questions 11–13",
          instructions:
            "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          questions: [
            { id: 11, before: "Thaler and Sunstein described their framework as '", after: " paternalism.'", wordLimit: 1, correct: "libertarian", explanation: "The passage states in paragraph A: 'a framework they called libertarian paternalism.'" },
            { id: 12, before: "According to the passage, the person who designs a decision environment is called the '", after: " of choice.'", wordLimit: 2, correct: "architect", explanation: "Paragraph A refers to 'the choice architecture' and paragraph F refers to 'the architecture of choice'; the agent is described as an 'architect of choice' in the broader theory." },
            { id: 13, before: "Hausman and Welch argued that nudges undermine individual", after: " by exploiting cognitive weaknesses.", wordLimit: 1, correct: "autonomy", explanation: "Paragraph E states: 'nudges undermine individual autonomy by exploiting cognitive weaknesses rather than engaging citizens as rational agents.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 2 ────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Coral Reefs Under Climate Pressure",
      paragraphs: [
        {
          letter: "A",
          text: "Coral reefs occupy less than one percent of the ocean floor, yet they are home to an estimated 25 percent of all marine species, earning them the title 'rainforests of the sea.' Beyond their extraordinary biodiversity, reefs provide essential services to human communities: they protect coastlines from wave erosion, sustain fisheries that feed hundreds of millions of people, and generate income through tourism worth billions of dollars annually. Despite their importance, coral reefs are among the most endangered ecosystems on Earth, facing a convergence of threats that has no historical precedent.",
        },
        {
          letter: "B",
          text: "The primary mechanism of reef destruction under climate change is coral bleaching. Corals obtain most of their energy and colour from symbiotic algae called zooxanthellae that live within their tissues. When seawater temperatures rise even one to two degrees Celsius above the average summer maximum, corals expel these algae, turning white — a process known as bleaching. A bleached coral is not immediately dead, but it is severely stressed. If elevated temperatures persist for more than eight weeks, the coral typically dies, leaving behind a white calcium carbonate skeleton that is quickly colonised by algae.",
        },
        {
          letter: "C",
          text: "The scale of bleaching events has intensified dramatically in recent decades. The 1998 El Niño-related warming killed an estimated 16 percent of the world's coral reefs in a single year — at the time, the worst mass bleaching on record. The Great Barrier Reef suffered consecutive bleaching events in 2016 and 2017, with surveys showing that approximately half of the northern section's corals died. Scientists now warn that events that were once expected once per century are occurring every six years on average, giving reefs insufficient time to recover between episodes.",
        },
        {
          letter: "D",
          text: "A secondary but equally serious threat comes from ocean acidification. As the ocean absorbs atmospheric carbon dioxide — roughly 30 percent of total human emissions — it undergoes a chemical reaction that reduces pH, making the water more acidic. This acidification lowers the concentration of carbonate ions that corals require to build their calcium carbonate skeletons. The result is that coral growth rates slow and skeletons become more brittle and porous, making reefs less able to withstand physical disturbances such as storms and anchor damage.",
        },
        {
          letter: "E",
          text: "Climate-related threats do not act in isolation. Coastal runoff carrying agricultural fertilisers promotes algal blooms that smother corals; sedimentation from coastal development reduces light penetration; and overfishing removes herbivorous fish that would otherwise graze the algae competing with coral for space. Outbreaks of the crown-of-thorns starfish — a natural predator of coral — have increased in frequency and are believed to be linked to elevated nutrient runoff. These compounding stressors reduce the resilience of reef systems and their capacity to recover from bleaching events.",
        },
        {
          letter: "F",
          text: "Not all hope is lost. Researchers in Palau have identified populations of coral living in naturally warm and acidic lagoons that have developed remarkable tolerance to conditions that would bleach or kill their counterparts elsewhere. Studies of these so-called 'super corals' are informing selective breeding programmes in Florida and Australia, where scientists are cultivating heat-resistant strains for reef restoration. Assisted evolution — including techniques to accelerate the natural adaptation process — offers a potential pathway to more resilient reef ecosystems, though critics caution that it cannot substitute for addressing the root causes of climate change.",
        },
      ],
      sections: [
        {
          type: "match_info",
          questionRange: "Questions 14–18",
          instructions:
            "The reading passage has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.",
          paragraphLetters: ["A", "B", "C", "D", "E", "F"],
          questions: [
            { id: 14, text: "A description of the process by which rising water temperature causes coral to lose its colour.", correct: "B", explanation: "Paragraph B explains how temperatures above the summer maximum cause corals to expel zooxanthellae, turning white." },
            { id: 15, text: "A reference to the global economic value that reefs provide.", correct: "A", explanation: "Paragraph A mentions tourism income 'worth billions of dollars annually.'" },
            { id: 16, text: "An example of a natural predator whose outbreak frequency is increasing.", correct: "E", explanation: "Paragraph E discusses crown-of-thorns starfish outbreaks increasing in frequency." },
            { id: 17, text: "An account of naturally occurring coral populations that display unusual environmental tolerance.", correct: "F", explanation: "Paragraph F describes 'super corals' in Palau living in naturally warm and acidic lagoons." },
            { id: 18, text: "Information about how chemical changes in the ocean affect the physical structure of coral.", correct: "D", explanation: "Paragraph D explains that ocean acidification makes coral skeletons more brittle and porous." },
          ],
        },
        {
          type: "mc_single",
          questionRange: "Questions 19–22",
          instructions:
            "Choose the correct letter, A, B, C or D.",
          questions: [
            {
              id: 19,
              stem: "What percentage of all marine species are found in coral reefs?",
              options: [
                { label: "A", text: "Less than 1 percent" },
                { label: "B", text: "10 percent" },
                { label: "C", text: "25 percent" },
                { label: "D", text: "30 percent" },
              ],
              correct: "C",
              explanation: "Paragraph A states reefs 'are home to an estimated 25 percent of all marine species.'"
            },
            {
              id: 20,
              stem: "According to the passage, what caused the worst mass bleaching event on record before the 2016–2017 events?",
              options: [
                { label: "A", text: "A sharp rise in ocean acidification" },
                { label: "B", text: "Crown-of-thorns starfish outbreaks" },
                { label: "C", text: "El Niño-related warming in 1998" },
                { label: "D", text: "Agricultural runoff from coastal farms" },
              ],
              correct: "C",
              explanation: "Paragraph C attributes the 1998 mass bleaching — which killed 16% of reefs — to El Niño-related warming."
            },
            {
              id: 21,
              stem: "What does the passage say about bleaching events compared to a century ago?",
              options: [
                { label: "A", text: "They now occur roughly once every hundred years" },
                { label: "B", text: "They have become more frequent, happening about every six years on average" },
                { label: "C", text: "They are less severe but more frequent than historical events" },
                { label: "D", text: "They are now limited to specific regions such as the Great Barrier Reef" },
              ],
              correct: "B",
              explanation: "Paragraph C states events 'once expected once per century are occurring every six years on average.'"
            },
            {
              id: 22,
              stem: "What role do herbivorous fish play in reef ecosystems, according to the passage?",
              options: [
                { label: "A", text: "They feed on crown-of-thorns starfish" },
                { label: "B", text: "They reduce the impact of agricultural fertilisers on water chemistry" },
                { label: "C", text: "They graze the algae that competes with coral for space" },
                { label: "D", text: "They assist in the restoration of coral skeletons after bleaching" },
              ],
              correct: "C",
              explanation: "Paragraph E states that overfishing removes herbivorous fish that 'would otherwise graze the algae competing with coral for space.'"
            },
          ],
        },
        {
          type: "summary_completion",
          questionRange: "Questions 23–26",
          instructions:
            "Complete the summary below. Choose NO MORE THAN ONE WORD from the box for each answer.",
          summaryTitle: "Threats to Coral Reef Survival",
          summaryText:
            "Coral reefs face multiple threats from climate change. When seawater temperatures rise, corals expel their {{23}} algae, causing bleaching. If the stress is prolonged, the coral dies and its {{24}} skeleton remains. Additionally, the ocean absorbs CO₂ from the atmosphere, becoming more acidic, which prevents corals from building strong skeletons. Local threats such as {{25}} from agriculture and overfishing compound the damage. However, scientists studying heat-tolerant 'super corals' found in naturally warm lagoons in {{26}} are using these populations to develop more resilient strains for reef restoration.",
          wordBank: ["symbiotic", "calcium", "bleached", "runoff", "Palau", "sedimentation", "carbonate", "Australia"],
          questions: [
            { id: 23, blankId: 23, correct: "symbiotic", explanation: "Paragraph B: corals obtain energy from 'symbiotic algae called zooxanthellae.'" },
            { id: 24, blankId: 24, correct: "calcium", explanation: "Paragraph B: the coral 'leaving behind a white calcium carbonate skeleton.'" },
            { id: 25, blankId: 25, correct: "runoff", explanation: "Paragraph E: 'coastal runoff carrying agricultural fertilisers promotes algal blooms.'" },
            { id: 26, blankId: 26, correct: "Palau", explanation: "Paragraph F: 'Researchers in Palau have identified populations of coral living in naturally warm and acidic lagoons.'" },
          ],
        },
      ],
    },

    // ── PASSAGE 3 ────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "The Rise of Algorithmic Hiring",
      paragraphs: [
        {
          letter: "A",
          text: "The recruitment process has undergone a quiet but profound transformation over the past decade. Algorithmic tools — from applicant tracking systems that parse and rank CVs to artificial intelligence platforms that analyse video interviews — are now used by more than 75 percent of Fortune 500 companies. These systems promise to make hiring faster, cheaper, and more objective. Yet the growing reliance on automated decision-making in employment has sparked a heated debate about bias, transparency, and the rights of job seekers.",
        },
        {
          letter: "B",
          text: "Modern algorithmic hiring operates at multiple stages of recruitment. At the screening stage, applicant tracking systems scan submitted CVs for keywords matching the job specification, ranking candidates before any human reviewer has read a single application. For shortlisted candidates, platforms such as HireVue conduct asynchronous video interviews in which candidates record responses to preset questions; algorithms then evaluate factors including word choice, speech rate, and facial expressions to produce a suitability score. Some employers additionally use game-based assessments designed to measure cognitive ability and personality traits without candidates' awareness of what is being measured.",
        },
        {
          letter: "C",
          text: "Proponents argue that algorithmic hiring reduces the subjective bias that has historically disadvantaged women, ethnic minorities, and candidates from non-elite universities. Consistency is another claimed benefit: unlike human interviewers, whose judgements vary with fatigue, mood, and personal affinity, algorithms apply the same criteria to every applicant. Speed and cost savings are also significant. Unilever, the consumer goods company, reported saving 50,000 hours of interviewing time after introducing AI-based screening, while simultaneously increasing the diversity of its candidate shortlists.",
        },
        {
          letter: "D",
          text: "Documented cases of algorithmic bias have, however, undermined confidence in these claims. In 2018, Amazon scrapped an experimental AI recruiting tool after discovering that it systematically downgraded CVs containing the word 'women's' — as in 'women's chess club' — and penalised graduates of all-female colleges. The system had been trained on a decade of Amazon's own hiring data, which reflected the male dominance of the technology sector. Correcting for this proved sufficiently difficult that the project was abandoned entirely. The episode illustrates a fundamental challenge: algorithms trained on historical data risk encoding and perpetuating existing inequalities.",
        },
        {
          letter: "E",
          text: "The regulatory environment is beginning to respond. The European Union's AI Act, enacted in 2024, classifies AI systems used in employment as 'high risk,' requiring providers to implement transparency measures, conduct bias audits, and maintain meaningful human oversight of consequential decisions. In the United States, the Equal Employment Opportunity Commission has issued guidance warning that employers may be liable for adverse impact caused by algorithmic tools, even if the tools were developed by third-party vendors. Several cities, including New York, have passed local ordinances requiring bias audits before AI hiring tools can be deployed.",
        },
        {
          letter: "F",
          text: "The debate is far from settled. Technology advocates argue that auditing requirements, explainability tools, and hybrid human-AI review processes can address the most serious concerns without abandoning the efficiency gains that algorithmic hiring offers. Critics respond that auditing standards remain inconsistent and that the black-box nature of many proprietary systems makes genuine transparency difficult to achieve. What is clear is that the question of who gets hired — and who does not — is increasingly being shaped by systems whose workings remain opaque to most of the people they affect.",
        },
      ],
      sections: [
        {
          type: "ynng",
          questionRange: "Questions 27–30",
          instructions:
            "Do the following statements agree with the claims of the writer in the reading passage? Write YES, NO or NOT GIVEN.",
          questions: [
            { id: 27, statement: "More than half of the largest US companies currently use some form of algorithmic hiring tool.", correct: "Yes", explanation: "Paragraph A states these tools are used by 'more than 75 percent of Fortune 500 companies' — which is more than half." },
            { id: 28, statement: "HireVue's video analysis system assesses candidates' eye colour as a hiring factor.", correct: "Not Given", explanation: "Paragraph B lists word choice, speech rate, and facial expressions, but eye colour is not mentioned." },
            { id: 29, statement: "Amazon's AI recruiting tool was discontinued because it penalised female candidates.", correct: "Yes", explanation: "Paragraph D confirms Amazon scrapped the tool after it 'systematically downgraded CVs' referencing women and all-female colleges." },
            { id: 30, statement: "The EU AI Act prohibits the use of all AI tools in employment decisions.", correct: "No", explanation: "Paragraph E states the AI Act classifies employment AI as 'high risk' and requires safeguards — it does not prohibit their use." },
          ],
        },
        {
          type: "mc_multiple",
          questionRange: "Questions 31–32",
          instructions:
            "Choose TWO letters, A–E. For each question, choose TWO answers.",
          questions: [
            {
              id: 31,
              stem: "According to paragraph C, which TWO benefits of algorithmic hiring are mentioned?",
              options: [
                { label: "A", text: "Elimination of all bias from the hiring process" },
                { label: "B", text: "Reduction in time spent on interviewing" },
                { label: "C", text: "Consistent application of criteria to all candidates" },
                { label: "D", text: "Guaranteed improvement in employee performance" },
                { label: "E", text: "Lower dropout rates among new hires" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph C mentions saving 50,000 hours (time/cost savings = B) and that algorithms apply 'the same criteria to every applicant' (consistency = C).",
            },
            {
              id: 32,
              stem: "Which TWO regulatory measures relating to algorithmic hiring are mentioned in the passage?",
              options: [
                { label: "A", text: "A requirement to publish all algorithm source code" },
                { label: "B", text: "Mandatory bias audits before deployment" },
                { label: "C", text: "Employer liability for adverse impact from AI tools" },
                { label: "D", text: "A global ban on asynchronous video interviews" },
                { label: "E", text: "Criminal penalties for non-compliant developers" },
              ],
              pickCount: 2,
              correct: ["B", "C"],
              explanation: "Paragraph E mentions New York's bias audit requirement (B) and EEOC guidance on employer liability (C).",
            },
          ],
        },
        {
          type: "match_headings",
          questionRange: "Questions 33–37",
          instructions:
            "Choose the correct heading for paragraphs B–F from the list of headings below.",
          headings: [
            { label: "i",   text: "Evidence of discriminatory outcomes in practice" },
            { label: "ii",  text: "Arguments in favour of automated recruitment" },
            { label: "iii", text: "The regulatory frameworks currently being developed" },
            { label: "iv",  text: "Technical methods used in automated recruitment" },
            { label: "v",   text: "Unresolved questions and ongoing dispute" },
            { label: "vi",  text: "The impact of opaque systems on candidates" },
            { label: "vii", text: "How historical data shapes algorithmic outcomes" },
          ],
          questions: [
            { id: 33, paragraph: "B", correct: "iv",  explanation: "Paragraph B describes the technical methods: ATS keyword scanning, HireVue video analysis, game-based assessments." },
            { id: 34, paragraph: "C", correct: "ii",  explanation: "Paragraph C presents the proponents' case: bias reduction, consistency, cost savings, diversity." },
            { id: 35, paragraph: "D", correct: "i",   explanation: "Paragraph D describes the documented case of Amazon's biased AI recruiting tool." },
            { id: 36, paragraph: "E", correct: "iii", explanation: "Paragraph E covers EU AI Act, EEOC guidance, and New York local ordinances." },
            { id: 37, paragraph: "F", correct: "v",   explanation: "Paragraph F presents the ongoing debate between technology advocates and critics without a resolution." },
          ],
        },
        {
          type: "short_answer",
          questionRange: "Questions 38–40",
          instructions:
            "Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.",
          questions: [
            { id: 38, before: "Which company reported saving 50,000 hours of interviewing time after adopting AI-based screening?", after: "", wordLimit: 1, correct: "Unilever", explanation: "Paragraph C explicitly names Unilever as the company that reported the 50,000 hours saving." },
            { id: 39, before: "In what year did Amazon abandon its experimental AI recruiting tool?", after: "", wordLimit: 1, correct: "2018", explanation: "Paragraph D states: 'In 2018, Amazon scrapped an experimental AI recruiting tool.'" },
            { id: 40, before: "What does the writer say algorithms trained on historical data risk doing to existing inequalities?", after: "", wordLimit: 3, correct: "encoding and perpetuating", explanation: "Paragraph D concludes: 'algorithms trained on historical data risk encoding and perpetuating existing inequalities.'" },
          ],
        },
      ],
    },
  ],
};
