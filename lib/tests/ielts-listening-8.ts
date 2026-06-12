import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening8: IELTSListeningTest = {
  id: "ielts-listening-8",
  exam: "IELTS",
  title: "IELTS Listening — Test 8",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Bank Account Opening",
      context: "Mrs Clarke is visiting a bank to open a new account. Peter, the bank assistant, takes her details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the account application form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Peter: Good morning. Welcome to Meridian Bank. How can I help you today?

Mrs Clarke: Good morning. I'd like to open a current account, please.

Peter: Of course. I'll need to take some details. Could I start with your full name?

Mrs Clarke: It's Margaret Clarke. Clarke is C-L-A-R-K-E.

Peter: Thank you, Mrs Clarke. And your date of birth?

Mrs Clarke: The 29th of November, 1965.

Peter: What is your current address?

Mrs Clarke: 45 Elm Drive, Harrogate.

Peter: And the postcode?

Mrs Clarke: HG2 0BT.

Peter: Have you been at that address for more than three years?

Mrs Clarke: Yes, I've been there for seven years.

Peter: Good. What is your occupation?

Mrs Clarke: I'm a primary school teacher.

Peter: And your annual income, approximately?

Mrs Clarke: Around £28,000.

Peter: Will you need an overdraft facility?

Mrs Clarke: Yes please — just a small one. £500 would be fine.

Peter: We can arrange that. Do you have any existing accounts with us?

Mrs Clarke: No, I'm a new customer.

Peter: I see. May I ask how you heard about us?

Mrs Clarke: I saw an advertisement on the radio last week.

Peter: Excellent. Would you prefer a contactless debit card or a standard card?

Mrs Clarke: Contactless, please.

Peter: And would you like to set up online banking today?

Mrs Clarke: Yes, that would be very helpful.

Peter: I'll need an email address for that.

Mrs Clarke: It's m.clarke65@homepost.net.

Peter: Thank you. Your card should arrive within five working days. Is there anything else I can help you with?

Mrs Clarke: No, that's everything. Thank you, Peter.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Customer first name:", wordLimit: 1, correct: "Margaret", explanation: "Mrs Clarke gives her first name as Margaret." },
        { id: 2, type: "fill_blank", before: "Date of birth:", wordLimit: 3, correct: "29th November 1965", explanation: "Mrs Clarke says her date of birth is the 29th of November, 1965." },
        { id: 3, type: "fill_blank", before: "Home postcode:", wordLimit: 1, correct: "HG2 0BT", explanation: "Mrs Clarke gives her postcode as HG2 0BT." },
        { id: 4, type: "fill_blank", before: "Years at current address:", wordLimit: 1, correct: "7", explanation: "Mrs Clarke says she has been at her current address for seven years." },
        { id: 5, type: "fill_blank", before: "Occupation:", wordLimit: 3, correct: "primary school teacher", explanation: "Mrs Clarke says she is a primary school teacher." },
        { id: 6, type: "fill_blank", before: "Annual income (approx): £", wordLimit: 1, correct: "28,000", explanation: "Mrs Clarke says her annual income is around £28,000." },
        { id: 7, type: "fill_blank", before: "Overdraft limit requested: £", wordLimit: 1, correct: "500", explanation: "Mrs Clarke says a £500 overdraft would be fine." },
        { id: 8, type: "fill_blank", before: "How customer heard about the bank:", wordLimit: 4, correct: "advertisement on the radio", explanation: "Mrs Clarke says she saw an advertisement on the radio last week." },
        { id: 9, type: "fill_blank", before: "Preferred card type:", wordLimit: 1, correct: "contactless", explanation: "Mrs Clarke says she would prefer a contactless debit card." },
        { id: 10, type: "fill_blank", before: "Email address:", wordLimit: 1, correct: "m.clarke65@homepost.net", explanation: "Mrs Clarke gives her email address as m.clarke65@homepost.net." },
      ],
    },
    {
      part: 2,
      title: "New Sports Facility Announcement",
      context: "A town council representative is making a public announcement about a new sports facility.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each facility or feature with its location within the sports centre (A–F).",
      transcript: `
Good afternoon, residents. I'm delighted to announce that planning approval has been granted for the Eastbridge Community Sports and Leisure Centre, which will be built on the former industrial site on Riverside Road.

Construction is due to begin in April and is expected to be completed within eighteen months. The project has a total budget of £6.8 million, with £4 million coming from Sport England funding and the remainder from the council's capital reserves.

The new centre will be open seven days a week, from 6 am to 10 pm. It will be operated by a charitable trust, which means that any surplus income will be reinvested into community programmes rather than taken as profit.

I want to outline what the centre will offer. There will be a six-lane swimming pool measuring 25 metres in length — this is the first public pool the town has had since the old municipal baths closed in 2009. There will also be a fully-equipped fitness suite with 60 stations. For team sports, there are three indoor courts suitable for basketball and badminton. An outdoor artificial pitch for five-a-side football will be located at the rear of the building.

Now let me describe where specific areas will be found. The main reception and café will be on the ground floor at the entrance. The swimming pool is in the east wing of the building, accessible from the ground floor. The fitness suite is on the first floor, above reception. The indoor sports courts are in the north wing, connected by a covered walkway. Changing rooms are located directly adjacent to the swimming pool on the ground floor. The physiotherapy suite and treatment rooms are on the first floor, at the south end of the building.

Membership fees will be announced in due course, but concessionary rates will be available for those on low incomes, senior citizens, and full-time students.

Thank you for your attention. We are very proud to be bringing this facility to Eastbridge.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "Where will the new sports centre be built?", options: [{ label: "A", text: "On the site of the old municipal baths" }, { label: "B", text: "On the former industrial site on Riverside Road" }, { label: "C", text: "On Eastbridge town centre land" }], correct: "B", explanation: "The representative says the centre will be built on the former industrial site on Riverside Road." },
        { id: 12, type: "mc_single", stem: "How long will construction take?", options: [{ label: "A", text: "Twelve months" }, { label: "B", text: "Eighteen months" }, { label: "C", text: "Two years" }], correct: "B", explanation: "The representative says construction is expected to be completed within eighteen months." },
        { id: 13, type: "mc_single", stem: "What is the total project budget?", options: [{ label: "A", text: "£4 million" }, { label: "B", text: "£5.8 million" }, { label: "C", text: "£6.8 million" }], correct: "C", explanation: "The representative says the total budget is £6.8 million." },
        { id: 14, type: "mc_single", stem: "How many lanes does the swimming pool have?", options: [{ label: "A", text: "Four" }, { label: "B", text: "Six" }, { label: "C", text: "Eight" }], correct: "B", explanation: "The representative says there will be a six-lane swimming pool." },
        { id: 15, type: "mc_single", stem: "Who will be eligible for concessionary membership rates?", options: [{ label: "A", text: "Children under 16 only" }, { label: "B", text: "Senior citizens only" }, { label: "C", text: "Low-income individuals, senior citizens, and full-time students" }], correct: "C", explanation: "The representative says concessionary rates will be available for those on low incomes, senior citizens, and full-time students." },
        { id: 16, type: "mc_single", stem: "Main reception and café", options: [{ label: "A", text: "Ground floor — entrance" }, { label: "B", text: "Ground floor — east wing" }, { label: "C", text: "First floor — above reception" }, { label: "D", text: "North wing — covered walkway" }, { label: "E", text: "Ground floor — adjacent to pool" }, { label: "F", text: "First floor — south end" }], correct: "A", explanation: "The representative says reception and café are on the ground floor at the entrance." },
        { id: 17, type: "mc_single", stem: "The swimming pool", options: [{ label: "A", text: "Ground floor — entrance" }, { label: "B", text: "Ground floor — east wing" }, { label: "C", text: "First floor — above reception" }, { label: "D", text: "North wing — covered walkway" }, { label: "E", text: "Ground floor — adjacent to pool" }, { label: "F", text: "First floor — south end" }], correct: "B", explanation: "The swimming pool is in the east wing, accessible from the ground floor." },
        { id: 18, type: "mc_single", stem: "The fitness suite", options: [{ label: "A", text: "Ground floor — entrance" }, { label: "B", text: "Ground floor — east wing" }, { label: "C", text: "First floor — above reception" }, { label: "D", text: "North wing — covered walkway" }, { label: "E", text: "Ground floor — adjacent to pool" }, { label: "F", text: "First floor — south end" }], correct: "C", explanation: "The fitness suite is on the first floor, above reception." },
        { id: 19, type: "mc_single", stem: "The indoor sports courts", options: [{ label: "A", text: "Ground floor — entrance" }, { label: "B", text: "Ground floor — east wing" }, { label: "C", text: "First floor — above reception" }, { label: "D", text: "North wing — covered walkway" }, { label: "E", text: "Ground floor — adjacent to pool" }, { label: "F", text: "First floor — south end" }], correct: "D", explanation: "The indoor sports courts are in the north wing, connected by a covered walkway." },
        { id: 20, type: "mc_single", stem: "The physiotherapy suite", options: [{ label: "A", text: "Ground floor — entrance" }, { label: "B", text: "Ground floor — east wing" }, { label: "C", text: "First floor — above reception" }, { label: "D", text: "North wing — covered walkway" }, { label: "E", text: "Ground floor — adjacent to pool" }, { label: "F", text: "First floor — south end" }], correct: "F", explanation: "The physiotherapy suite is on the first floor, at the south end of the building." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Social Media Research",
      context: "Students Rebecca and Chris are meeting with their tutor, Dr White, to discuss their sociology research on social media.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr White: Hello, Rebecca, Chris. Let's talk through your research on social media and mental health. How are you getting on?

Rebecca: Really well, overall. We've been looking at how social media usage patterns correlate with reported levels of anxiety and self-esteem among university students.

Chris: We collected data from 120 participants using an online questionnaire. We measured daily social media use in hours and used validated psychological scales for anxiety and self-esteem.

Dr White: Good sample size. What platforms did you focus on?

Rebecca: We focused specifically on Instagram and TikTok, since those are the most commonly used by our target demographic — students aged 18 to 25.

Dr White: Good focus. What were your headline findings?

Chris: The strongest correlation we found was between Instagram usage and lower self-esteem scores. Students who used Instagram for more than three hours daily scored significantly lower on the Rosenberg Self-Esteem Scale.

Rebecca: Interestingly, TikTok showed a weaker correlation with self-esteem but a stronger one with anxiety, particularly related to sleep disruption.

Dr White: That's a nuanced finding. How did you control for other variables?

Chris: We controlled for gender, year of study, and whether participants lived on or off campus.

Dr White: Did any findings surprise you?

Rebecca: Yes — we expected to find a strong gender difference, but the correlation between heavy social media use and reduced wellbeing was similar for both male and female participants.

Dr White: That's quite significant. What limitations do you identify?

Chris: The main limitation is self-reporting bias — participants reported their own social media usage, which may not be accurate. People tend to underestimate how much time they spend online.

Rebecca: We also acknowledge that correlation doesn't imply causation. We can't say social media causes lower self-esteem — it might be the reverse.

Dr White: Both of those are important methodological points. Make sure they feature prominently in your limitations section. How will you present your data?

Chris: We're planning to use bar charts and scatter plots for the quantitative data.

Dr White: Good. Will you include any qualitative data?

Rebecca: We had 15 participants volunteer for short follow-up interviews, which gave us some rich qualitative insight to complement the statistics.

Dr White: Excellent. That mixed-methods approach will strengthen your discussion considerably.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What is the focus of Rebecca and Chris's research?", options: [{ label: "A", text: "Social media and academic performance" }, { label: "B", text: "Social media usage and mental health in university students" }, { label: "C", text: "Social media addiction and its causes" }], correct: "B", explanation: "Rebecca says they are looking at how social media usage correlates with levels of anxiety and self-esteem among university students." },
        { id: 22, type: "mc_single", stem: "How many participants completed the questionnaire?", options: [{ label: "A", text: "80" }, { label: "B", text: "100" }, { label: "C", text: "120" }], correct: "C", explanation: "Chris says they collected data from 120 participants." },
        { id: 23, type: "mc_single", stem: "Which platforms did they focus on?", options: [{ label: "A", text: "Facebook and Twitter" }, { label: "B", text: "Instagram and Snapchat" }, { label: "C", text: "Instagram and TikTok" }], correct: "C", explanation: "Rebecca says they focused specifically on Instagram and TikTok." },
        { id: 24, type: "mc_single", stem: "What was the strongest correlation they found?", options: [{ label: "A", text: "TikTok usage and anxiety" }, { label: "B", text: "Instagram usage and lower self-esteem" }, { label: "C", text: "Overall social media use and sleep disruption" }], correct: "B", explanation: "Chris says the strongest correlation was between Instagram usage and lower self-esteem scores." },
        { id: 25, type: "mc_single", stem: "What surprised the researchers about their findings on gender?", options: [{ label: "A", text: "Male participants were more affected than expected" }, { label: "B", text: "The correlation was similar for both male and female participants" }, { label: "C", text: "Female participants showed no significant correlation" }], correct: "B", explanation: "Rebecca says the correlation between heavy social media use and reduced wellbeing was similar for both male and female participants." },
        { id: 26, type: "mc_single", stem: "How many participants took part in follow-up interviews?", options: [{ label: "A", text: "10" }, { label: "B", text: "15" }, { label: "C", text: "20" }], correct: "B", explanation: "Rebecca says 15 participants volunteered for short follow-up interviews." },
        { id: 27, type: "mc_multiple", stem: "Which TWO limitations do the students identify in their research?", options: [{ label: "A", text: "Too small a sample size" }, { label: "B", text: "Self-reporting bias" }, { label: "C", text: "Correlation does not imply causation" }, { label: "D", text: "Limited platform selection" }, { label: "E", text: "Poor response rate" }], pickCount: 2, correct: ["B", "C"], explanation: "Chris mentions self-reporting bias; Rebecca mentions that correlation does not imply causation." },
        { id: 28, type: "mc_multiple", stem: "Which TWO variables did the students control for?", options: [{ label: "A", text: "Gender" }, { label: "B", text: "Year of study" }, { label: "C", text: "Type of smartphone used" }, { label: "D", text: "Academic results" }, { label: "E", text: "Whether participants lived on or off campus" }], pickCount: 2, correct: ["A", "B"], explanation: "Chris says they controlled for gender, year of study, and whether participants lived on or off campus — so gender and year of study are two of the three." },
        { id: 29, type: "mc_single", stem: "What types of charts are planned for presenting quantitative data?", options: [{ label: "A", text: "Pie charts and line graphs" }, { label: "B", text: "Bar charts and scatter plots" }, { label: "C", text: "Tables and histograms" }], correct: "B", explanation: "Chris says they plan to use bar charts and scatter plots for the quantitative data." },
        { id: 30, type: "mc_single", stem: "What does Dr White say will strengthen their discussion?", options: [{ label: "A", text: "A larger sample size" }, { label: "B", text: "More controlled variables" }, { label: "C", text: "The mixed-methods approach" }], correct: "C", explanation: "Dr White says the mixed-methods approach will strengthen their discussion considerably." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Artificial Intelligence in Healthcare",
      context: "A university lecturer is giving a talk on the applications and implications of artificial intelligence in the healthcare sector.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning. Today I want to explore one of the most rapidly developing intersections of technology and medicine — artificial intelligence in healthcare.

AI in medicine is not entirely new. Rule-based expert systems were developed as early as the 1970s to assist with clinical decision-making, though they had limited practical impact due to the computational constraints of the time. What has changed dramatically in recent years is the availability of massive datasets and the development of deep learning algorithms capable of identifying patterns that human clinicians might miss.

One of the most successful applications of AI in healthcare to date has been in medical imaging. Studies have shown that AI systems can detect certain cancers — particularly breast cancer in mammography and diabetic retinopathy from retinal scans — with accuracy comparable to or exceeding that of experienced specialists. A landmark 2019 study found that an AI system outperformed six radiologists in detecting lung cancer from CT scans, with a 5 percent reduction in false negatives.

Another major area is predictive analytics. By analysing electronic health records, AI tools can identify patients at high risk of developing conditions such as sepsis, heart failure, or type 2 diabetes — often days before symptoms appear. This allows for earlier intervention and potentially significant reductions in hospital admissions.

Drug discovery is a third key application. Traditional drug development takes an average of 12 years from initial research to market approval. AI is reducing this timeline by accelerating the identification of promising molecular compounds and predicting how they will interact with biological targets. During the COVID-19 pandemic, AI tools were used to identify existing drugs that might be repurposed for treatment.

Despite its promise, AI in healthcare raises serious ethical concerns. Questions of data privacy are paramount — patient data used to train AI systems must be rigorously protected. There is also the problem of algorithmic bias: AI systems trained primarily on data from one population group may perform less well on others. A well-documented example is that some diagnostic algorithms perform less accurately on patients with darker skin tones.

Finally, there remains the question of accountability. When an AI system makes a clinical recommendation that leads to harm, it is not always clear who bears legal responsibility — the developer, the hospital, or the clinician.

Regulation in this area is developing rapidly, with the EU AI Act and equivalent frameworks in the UK being among the first comprehensive regulatory approaches to cover medical AI.

Thank you. Next week we'll look at AI applications in surgical robotics.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Decade when early AI expert systems for medicine were developed:", wordLimit: 2, correct: "1970s", explanation: "The lecturer says rule-based expert systems were developed as early as the 1970s." },
        { id: 32, type: "fill_blank", before: "Cancer detectable by AI from mammography:", wordLimit: 2, correct: "breast cancer", explanation: "The lecturer mentions that AI systems can detect breast cancer in mammography." },
        { id: 33, type: "fill_blank", before: "Condition AI can detect from retinal scans:", wordLimit: 2, correct: "diabetic retinopathy", explanation: "The lecturer says AI can detect diabetic retinopathy from retinal scans." },
        { id: 34, type: "fill_blank", before: "Reduction in false negatives in the 2019 lung cancer AI study:", wordLimit: 2, correct: "5 percent", explanation: "The lecturer says the AI system achieved a 5 percent reduction in false negatives compared to radiologists." },
        { id: 35, type: "fill_blank", before: "Examples of conditions that AI predictive tools can identify (name one):", wordLimit: 1, correct: "sepsis", explanation: "The lecturer lists sepsis, heart failure, and type 2 diabetes as examples of conditions AI tools can predict." },
        { id: 36, type: "fill_blank", before: "Average years for traditional drug development from research to approval:", wordLimit: 1, correct: "12", explanation: "The lecturer says traditional drug development takes an average of 12 years." },
        { id: 37, type: "fill_blank", before: "What AI tools did during COVID-19 pandemic:", wordLimit: 4, correct: "identify existing drugs", explanation: "The lecturer says AI tools were used to identify existing drugs that might be repurposed for COVID-19 treatment." },
        { id: 38, type: "fill_blank", before: "Ethical concern related to patient data:", wordLimit: 2, correct: "data privacy", explanation: "The lecturer says questions of data privacy are paramount." },
        { id: 39, type: "fill_blank", before: "Problem when AI is trained mainly on one population group:", wordLimit: 2, correct: "algorithmic bias", explanation: "The lecturer says this is the problem of algorithmic bias." },
        { id: 40, type: "fill_blank", before: "EU regulation covering medical AI:", wordLimit: 3, correct: "EU AI Act", explanation: "The lecturer refers to the EU AI Act as one of the first comprehensive regulatory approaches covering medical AI." },
      ],
    },
  ],
};
