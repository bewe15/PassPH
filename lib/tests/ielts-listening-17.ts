import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening17: IELTSListeningTest = {
  id: "ielts-listening-17",
  exam: "IELTS",
  title: "IELTS Listening — Test 17",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Job Centre Advice Session",
      context:
        "Kevin is visiting the local job centre for an advice session. Diana, a careers advisor, is helping him.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Diana: Good morning. Please take a seat. I'm Diana, your advisor today. And you are?

Kevin: Kevin Marsh. Morning.

Diana: Good morning, Mr Marsh. Let me pull up your record. Could you confirm your date of birth for me?

Kevin: The 5th of July 1990.

Diana: Thank you. And how long have you been looking for work?

Kevin: About six weeks now. I was made redundant from my previous position.

Diana: I'm sorry to hear that. What sector were you working in?

Kevin: Manufacturing — I was a quality control supervisor for nine years.

Diana: That's a solid background. What type of work are you looking for now?

Kevin: Ideally something similar — supervisory or management roles in manufacturing or logistics.

Diana: And are you open to retraining?

Kevin: Yes, definitely. I'd particularly like to get a certificate in project management — I think that would open more doors.

Diana: That's a good instinct. We do have a funded course available — it's a twelve-week programme run by the college, and it's free for those who qualify. Would you like me to refer you?

Kevin: Yes, please. That sounds perfect.

Diana: Excellent. Now, what is your preferred working hours — full-time or part-time?

Kevin: Full-time. I'm available Monday to Friday. I'd rather not work weekends if possible.

Diana: Understood. What's your current travel situation?

Kevin: I have a car, so I can travel up to about twenty miles from home.

Diana: And your home postcode?

Kevin: TS6 8NP.

Diana: Thank you. Now, while you're searching, you may be eligible for jobseeker support. I'll need to check your National Insurance number. Do you have it with you?

Kevin: Yes — it's MP 46 72 84 C.

Diana: Perfect. Lastly, Mr Marsh — do you have an updated CV?

Kevin: I do, but I think it needs some work. The format is a bit old-fashioned.

Diana: We have a free CV workshop every Thursday at ten o'clock. I'd strongly recommend it. Shall I book you a place for this Thursday?

Kevin: Yes, that would be great.

Diana: Consider it done. You'll receive a confirmation by email. Let's get you back into work, Mr Marsh.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Client's surname:",
          wordLimit: 1,
          correct: "Marsh",
          explanation: "Kevin introduces himself as Kevin Marsh.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Date of birth:",
          wordLimit: 3,
          correct: "5th of July 1990",
          explanation: "Kevin says his date of birth is the 5th of July 1990.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Time spent looking for work:",
          after: "weeks",
          wordLimit: 1,
          correct: "six",
          explanation: "Kevin says he has been looking for work for about six weeks.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Previous role:",
          wordLimit: 3,
          correct: "quality control supervisor",
          explanation: "Kevin says he was a quality control supervisor for nine years.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Desired qualification:",
          wordLimit: 3,
          correct: "certificate in project management",
          explanation: "Kevin says he would like to get a certificate in project management.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Duration of funded college course:",
          after: "weeks",
          wordLimit: 1,
          correct: "twelve",
          explanation: "Diana says the funded course is a twelve-week programme.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Maximum travel distance from home:",
          after: "miles",
          wordLimit: 1,
          correct: "twenty",
          explanation: "Kevin says he can travel up to about twenty miles from home.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Home postcode:",
          wordLimit: 1,
          correct: "TS6 8NP",
          explanation: "Kevin gives his postcode as TS6 8NP.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "National Insurance number:",
          wordLimit: 3,
          correct: "MP 46 72 84 C",
          explanation: "Kevin gives his National Insurance number as MP 46 72 84 C.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "CV workshop held every",
          after: "at 10am",
          wordLimit: 1,
          correct: "Thursday",
          explanation: "Diana says the free CV workshop runs every Thursday at ten o'clock.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "University Careers Fair Announcement",
      context:
        "An organiser is giving an announcement about the upcoming university annual careers fair.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each facility or service (16–20) with the correct location at the careers fair (A–F). Write the correct letter next to each item.",
      transcript: `
Good afternoon, everyone. I'm here to give you the essential details about this year's Annual Careers Fair, which takes place next Wednesday and Thursday, the 18th and 19th of November, right here at the university.

The fair is open to all students and recent graduates — by which we mean anyone who completed their degree within the last two years. Entry is free and you do not need to register in advance, though we strongly recommend arriving early on the first day as the most popular sessions fill up quickly.

This year we have a record 94 employers attending across both days. These range from small local businesses to major national and international organisations. Sectors represented include finance, engineering, healthcare, technology, media, and the public sector. Every employer has confirmed they are actively recruiting, so do come with your CV — and yes, printed copies are preferable to digital this year.

The fair will be held across three venues: the Sports Hall, the Student Union building, and the Lecture Theatre Block. A printed map is available at the information desk and on the university website.

Let me run through the key locations for various facilities. Registration and welcome packs can be collected at the main entrance of the Sports Hall. The CV and cover letter clinic — where advisors will review your documents on the spot — is in Room 14 of the Lecture Theatre Block. The interview practice booths, where you can do a mock interview with a careers professional, are located in the Student Union basement. Refreshments — free tea and coffee throughout both days — are provided in the Student Union foyer. The employer networking area, for more informal one-to-one conversations with company representatives, has been set up in the Sports Hall gallery. And the accessibility and quiet space, for those who need a break from the crowds, is in Room 3 of the Lecture Theatre Block.

Any questions about the fair can be directed to the Careers Service — we're in building twelve on the main campus, or you can email us at careers@university.ac.uk. We look forward to seeing you there.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "On which days does the careers fair take place?",
          options: [
            { label: "A", text: "Monday and Tuesday" },
            { label: "B", text: "Wednesday and Thursday" },
            { label: "C", text: "Thursday and Friday" },
          ],
          correct: "B",
          explanation: "The organiser says the fair takes place next Wednesday and Thursday, the 18th and 19th of November.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "Who is eligible to attend the careers fair?",
          options: [
            { label: "A", text: "Current students only" },
            { label: "B", text: "Students and graduates from the last two years" },
            { label: "C", text: "Anyone from the local community" },
          ],
          correct: "B",
          explanation: "The organiser says the fair is open to all students and recent graduates — anyone who completed their degree within the last two years.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "How many employers are attending this year?",
          options: [
            { label: "A", text: "49" },
            { label: "B", text: "84" },
            { label: "C", text: "94" },
          ],
          correct: "C",
          explanation: "The organiser says they have a record 94 employers attending across both days.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "What format of CV does the organiser prefer this year?",
          options: [
            { label: "A", text: "Digital only" },
            { label: "B", text: "Both are equally accepted" },
            { label: "C", text: "Printed copies" },
          ],
          correct: "C",
          explanation: "The organiser says printed copies are preferable to digital this year.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "How many venues is the fair spread across?",
          options: [
            { label: "A", text: "Two" },
            { label: "B", text: "Three" },
            { label: "C", text: "Four" },
          ],
          correct: "B",
          explanation: "The organiser says the fair is held across three venues: the Sports Hall, the Student Union, and the Lecture Theatre Block.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "Registration and welcome packs",
          options: [
            { label: "A", text: "Main entrance of the Sports Hall" },
            { label: "B", text: "Room 14 of the Lecture Theatre Block" },
            { label: "C", text: "Student Union basement" },
            { label: "D", text: "Student Union foyer" },
            { label: "E", text: "Sports Hall gallery" },
            { label: "F", text: "Room 3 of the Lecture Theatre Block" },
          ],
          correct: "A",
          explanation: "The organiser says registration and welcome packs can be collected at the main entrance of the Sports Hall.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "CV and cover letter clinic",
          options: [
            { label: "A", text: "Main entrance of the Sports Hall" },
            { label: "B", text: "Room 14 of the Lecture Theatre Block" },
            { label: "C", text: "Student Union basement" },
            { label: "D", text: "Student Union foyer" },
            { label: "E", text: "Sports Hall gallery" },
            { label: "F", text: "Room 3 of the Lecture Theatre Block" },
          ],
          correct: "B",
          explanation: "The organiser says the CV and cover letter clinic is in Room 14 of the Lecture Theatre Block.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "Interview practice booths",
          options: [
            { label: "A", text: "Main entrance of the Sports Hall" },
            { label: "B", text: "Room 14 of the Lecture Theatre Block" },
            { label: "C", text: "Student Union basement" },
            { label: "D", text: "Student Union foyer" },
            { label: "E", text: "Sports Hall gallery" },
            { label: "F", text: "Room 3 of the Lecture Theatre Block" },
          ],
          correct: "C",
          explanation: "The organiser says the interview practice booths are located in the Student Union basement.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "Employer networking area",
          options: [
            { label: "A", text: "Main entrance of the Sports Hall" },
            { label: "B", text: "Room 14 of the Lecture Theatre Block" },
            { label: "C", text: "Student Union basement" },
            { label: "D", text: "Student Union foyer" },
            { label: "E", text: "Sports Hall gallery" },
            { label: "F", text: "Room 3 of the Lecture Theatre Block" },
          ],
          correct: "E",
          explanation: "The organiser says the employer networking area has been set up in the Sports Hall gallery.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "Accessibility and quiet space",
          options: [
            { label: "A", text: "Main entrance of the Sports Hall" },
            { label: "B", text: "Room 14 of the Lecture Theatre Block" },
            { label: "C", text: "Student Union basement" },
            { label: "D", text: "Student Union foyer" },
            { label: "E", text: "Sports Hall gallery" },
            { label: "F", text: "Room 3 of the Lecture Theatre Block" },
          ],
          correct: "F",
          explanation: "The organiser says the accessibility and quiet space is in Room 3 of the Lecture Theatre Block.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Business Ethics Research",
      context:
        "Students Olivia and Sam are meeting with their tutor, Professor Lee, to discuss their business ethics research project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Professor Lee: Good morning, Olivia, Sam. Let's hear about the business ethics project.

Olivia: We've decided to examine corporate social responsibility — specifically whether CSR initiatives genuinely improve ethical behaviour or whether they're primarily a marketing exercise.

Sam: We were inspired by some recent corporate scandals that seemed to contradict the companies' stated CSR commitments.

Professor Lee: A timely and important question. What theoretical framework are you using?

Olivia: We're drawing primarily on stakeholder theory — the idea that companies have obligations to a range of groups beyond just shareholders.

Sam: And we're also using Carroll's pyramid of corporate social responsibility as a lens for categorising different types of CSR activity.

Professor Lee: Both are well-established frameworks. What data have you collected?

Sam: We conducted a content analysis of the CSR reports from twenty of the FTSE 100 companies over a five-year period.

Olivia: And we carried out an online survey of 150 consumers to understand public perceptions of CSR.

Professor Lee: That's a substantial dataset. What are your emerging findings?

Olivia: Broadly, we found that companies with higher CSR spending did not necessarily have fewer regulatory violations. The correlation was actually quite weak.

Sam: Which supports the view that CSR is often performative rather than substantive — a kind of ethical window dressing.

Professor Lee: A strong finding — but you'll need to be careful about overstating causation from correlation. Is that caveat in the draft?

Sam: Not explicitly — that's a fair point. We'll add that.

Olivia: We also need to acknowledge the limitations of our consumer survey — the sample wasn't fully representative since it was conducted online.

Professor Lee: Good self-awareness. For the final piece, what are the two things you're most focused on improving?

Sam: Making our argument more nuanced — we don't want it to sound like a blanket condemnation of all CSR.

Olivia: And tightening the recommendations section, which feels a bit vague at the moment.

Professor Lee: Those are both excellent priorities. Have you checked the referencing style guide?

Olivia: Yes — we're using Harvard referencing throughout.

Professor Lee: Perfect. I'll expect the final draft by the end of the month.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What is the focus of Olivia and Sam's business ethics project?",
          options: [
            { label: "A", text: "Environmental sustainability reporting" },
            { label: "B", text: "Corporate social responsibility and ethics" },
            { label: "C", text: "Employee wellbeing in large corporations" },
          ],
          correct: "B",
          explanation: "Olivia says they are examining corporate social responsibility and whether CSR genuinely improves ethical behaviour.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "What is their primary theoretical framework?",
          options: [
            { label: "A", text: "Carroll's pyramid" },
            { label: "B", text: "Stakeholder theory" },
            { label: "C", text: "Agency theory" },
          ],
          correct: "B",
          explanation: "Olivia says they are drawing primarily on stakeholder theory.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "How many companies' CSR reports did they analyse?",
          options: [
            { label: "A", text: "Ten" },
            { label: "B", text: "Fifteen" },
            { label: "C", text: "Twenty" },
          ],
          correct: "C",
          explanation: "Sam says they conducted a content analysis of CSR reports from twenty FTSE 100 companies.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "How many consumers did they survey?",
          options: [
            { label: "A", text: "100" },
            { label: "B", text: "150" },
            { label: "C", text: "200" },
          ],
          correct: "B",
          explanation: "Olivia says they carried out an online survey of 150 consumers.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What was the main finding of their research?",
          options: [
            { label: "A", text: "Higher CSR spending clearly reduces regulatory violations" },
            { label: "B", text: "Companies with more CSR spending had fewer regulatory violations" },
            { label: "C", text: "Companies with higher CSR spending did not necessarily have fewer regulatory violations" },
          ],
          correct: "C",
          explanation: "Olivia says companies with higher CSR spending did not necessarily have fewer regulatory violations and the correlation was weak.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "What referencing style are they using?",
          options: [
            { label: "A", text: "APA" },
            { label: "B", text: "Chicago" },
            { label: "C", text: "Harvard" },
          ],
          correct: "C",
          explanation: "Olivia confirms they are using Harvard referencing throughout.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO improvements do Olivia and Sam plan to make to their draft?",
          options: [
            { label: "A", text: "Adding a caveat about causation versus correlation" },
            { label: "B", text: "Expanding the introduction" },
            { label: "C", text: "Acknowledging the limitations of their consumer survey" },
            { label: "D", text: "Including more company case studies" },
            { label: "E", text: "Changing their theoretical framework" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Sam agrees to add a caveat about causation, and Olivia says they need to acknowledge the limitations of their consumer survey.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO areas are they most focused on improving for the final submission?",
          options: [
            { label: "A", text: "Making the argument more nuanced" },
            { label: "B", text: "Expanding the literature review" },
            { label: "C", text: "Tightening the recommendations section" },
            { label: "D", text: "Adding more data analysis" },
            { label: "E", text: "Improving the conclusion" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Sam says they want to make the argument more nuanced, and Olivia says the recommendations section needs tightening.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "Over how many years did they analyse the CSR reports?",
          options: [
            { label: "A", text: "Three years" },
            { label: "B", text: "Five years" },
            { label: "C", text: "Seven years" },
          ],
          correct: "B",
          explanation: "Sam says they conducted a content analysis of CSR reports over a five-year period.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "What limitation of their consumer survey does Olivia acknowledge?",
          options: [
            { label: "A", text: "Too few questions were asked" },
            { label: "B", text: "The sample wasn't fully representative as it was conducted online" },
            { label: "C", text: "The survey was conducted in only one city" },
          ],
          correct: "B",
          explanation: "Olivia says the sample wasn't fully representative since the survey was conducted online.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: The Psychology of Motivation",
      context:
        "A university lecturer is giving an introductory lecture on the psychology of motivation and key motivational theories.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture introduces the psychology of motivation — why we do the things we do, why we persist in some tasks and abandon others, and how understanding motivation can improve both individual and organisational performance.

Motivation can be broadly divided into two categories: intrinsic and extrinsic. Intrinsic motivation comes from within — the internal satisfaction or interest in a task itself. Extrinsic motivation comes from external rewards or pressures — pay, recognition, or avoiding punishment.

One of the most influential theories of motivation is Abraham Maslow's hierarchy of needs, proposed in 1943. Maslow argued that human needs are arranged in a pyramid of five levels. At the base are physiological needs — food, water, shelter. Above that are safety needs, then social belonging, then esteem needs, and finally, at the top of the pyramid, self-actualisation — the realisation of one's full potential.

Frederick Herzberg built on this with his two-factor theory, introduced in 1959. Herzberg distinguished between hygiene factors — such as working conditions, salary, and job security — which, when absent, cause dissatisfaction, but when present, do not by themselves motivate. Motivating factors, by contrast — such as achievement, recognition, and personal growth — are what actually drive engagement and performance.

Self-determination theory, developed by Deci and Ryan in the 1980s, argues that people are most motivated when three core psychological needs are met: autonomy — the feeling of control over one's actions; competence — the feeling of being effective and skilled; and relatedness — the sense of connection with others.

Research consistently shows that monetary rewards, while important, are not the most powerful motivator for most people. Studies in both educational and workplace settings suggest that autonomy and purpose are stronger drivers of long-term engagement than financial incentives alone.

The practical applications of motivational psychology are wide-ranging. In education, learner-centred approaches that give students more control over their learning environment have been shown to increase both performance and wellbeing. In business, organisations that invest in purpose-driven cultures report significantly lower staff turnover — one study found turnover rates 40 percent lower in purpose-led companies compared to those focused primarily on profit.

Understanding motivation is, quite simply, understanding people.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Motivation from within is called:",
          after: "motivation",
          wordLimit: 1,
          correct: "intrinsic",
          explanation: "The lecturer says intrinsic motivation comes from within — the internal satisfaction or interest in a task.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Maslow's hierarchy of needs was proposed in:",
          wordLimit: 1,
          correct: "1943",
          explanation: "The lecturer says Maslow's hierarchy of needs was proposed in 1943.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Maslow's hierarchy has",
          after: "levels",
          wordLimit: 1,
          correct: "five",
          explanation: "The lecturer says Maslow's pyramid has five levels.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Top level of Maslow's hierarchy:",
          wordLimit: 1,
          correct: "self-actualisation",
          explanation: "The lecturer says self-actualisation — realisation of one's full potential — is at the top of the pyramid.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Herzberg's two-factor theory was introduced in:",
          wordLimit: 1,
          correct: "1959",
          explanation: "The lecturer says Herzberg's two-factor theory was introduced in 1959.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Herzberg's factors that cause dissatisfaction when absent are called:",
          after: "factors",
          wordLimit: 1,
          correct: "hygiene",
          explanation: "The lecturer says hygiene factors — like salary and working conditions — cause dissatisfaction when absent.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Self-determination theory was developed by Deci and:",
          wordLimit: 1,
          correct: "Ryan",
          explanation: "The lecturer says self-determination theory was developed by Deci and Ryan.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "One of the three core psychological needs in SDT is:",
          wordLimit: 1,
          correct: "autonomy",
          explanation: "The lecturer lists autonomy as one of the three core psychological needs in self-determination theory.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Research shows that",
          after: "and purpose are stronger drivers than financial incentives",
          wordLimit: 1,
          correct: "autonomy",
          explanation: "The lecturer says autonomy and purpose are stronger drivers of long-term engagement than financial incentives alone.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Purpose-led companies had staff turnover",
          after: "percent lower than profit-focused ones",
          wordLimit: 1,
          correct: "40",
          explanation: "The lecturer says one study found turnover rates 40 percent lower in purpose-led companies.",
        },
      ],
    },
  ],
};
