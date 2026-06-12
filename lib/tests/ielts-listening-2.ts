import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening2: IELTSListeningTest = {
  id: "ielts-listening-2",
  exam: "IELTS",
  title: "IELTS Listening — Test 2",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Library Card Registration",
      context: "Sophie is visiting Millbrook Public Library to register for a library card. Ryan, the library assistant, helps her complete the registration form.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Ryan: Good afternoon, welcome to Millbrook Public Library. How can I help you?

Sophie: Hello. I'd like to register for a library card, please.

Ryan: Of course. Could I take your full name?

Sophie: Sophie Harrington.

Ryan: Could you spell the surname for me?

Sophie: H-A-R-R-I-N-G-T-O-N.

Ryan: Thank you. And your date of birth?

Sophie: The 14th of March, 1995.

Ryan: What's your current address?

Sophie: 27 Ferndale Road.

Ryan: And the postcode?

Sophie: BN3 4QT.

Ryan: And your occupation?

Sophie: I'm a teacher. I work at Millbrook Primary School.

Ryan: Excellent. Do you have a phone number?

Sophie: Yes, 07812 345 678.

Ryan: Great. Now, we have three types of membership — standard, which is free, premium at £5 per month, or student. Which would you like?

Sophie: Standard, please.

Ryan: Perfect. Your card allows you to borrow up to 8 items at a time. Books are on loan for 3 weeks and DVDs for one week. The children's section is on the ground floor, next to the café. Your card is ready now.

Sophie: Wonderful, thank you!
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Surname:", wordLimit: 1, correct: "Harrington", explanation: "Sophie spells her surname H-A-R-R-I-N-G-T-O-N." },
        { id: 2, type: "fill_blank", before: "Date of birth:", wordLimit: 3, correct: "14th March 1995", explanation: "Sophie says her date of birth is the 14th of March, 1995." },
        { id: 3, type: "fill_blank", before: "Street address:", wordLimit: 3, correct: "27 Ferndale Road", explanation: "Sophie gives her address as 27 Ferndale Road." },
        { id: 4, type: "fill_blank", before: "Postcode:", wordLimit: 1, correct: "BN3 4QT", explanation: "Sophie gives her postcode as BN3 4QT." },
        { id: 5, type: "fill_blank", before: "Occupation:", wordLimit: 1, correct: "teacher", explanation: "Sophie says she is a teacher." },
        { id: 6, type: "fill_blank", before: "Place of work:", wordLimit: 3, correct: "Millbrook Primary School", explanation: "Sophie says she works at Millbrook Primary School." },
        { id: 7, type: "fill_blank", before: "Phone number:", wordLimit: 2, correct: "07812 345 678", explanation: "Sophie gives her phone number as 07812 345 678." },
        { id: 8, type: "fill_blank", before: "Membership type chosen:", wordLimit: 1, correct: "standard", explanation: "Sophie chooses the standard (free) membership." },
        { id: 9, type: "fill_blank", before: "Maximum items on loan at once:", wordLimit: 1, correct: "8", explanation: "Ryan says members can borrow up to 8 items at a time." },
        { id: 10, type: "fill_blank", before: "Location of children's section:", wordLimit: 4, correct: "ground floor next to café", explanation: "Ryan says the children's section is on the ground floor, next to the café." },
      ],
    },
    {
      part: 2,
      title: "Millbrook Summer Festival",
      context: "A radio presenter is giving listeners information about the annual Millbrook Summer Festival.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each festival area with its correct location (A–F).",
      transcript: `
Good evening, and welcome to Millbrook Community Radio. I'm here to tell you all about this year's Millbrook Summer Festival, taking place on the 22nd of July.

The festival runs from 10 in the morning until 9 at night. Entry is free for children under 12. Adults pay £6 at the gate, but online advance tickets are just £4.

This year the festival is at Greenfield Park — not the town centre as in previous years. The park has far more space, so we have more attractions than ever before.

The main stage will feature five live bands. The headline act, The Riverside Collective, performs from 7 in the evening.

Now for the different festival areas. The Food Village is near the main entrance, offering dishes from twelve different countries. The Craft Market in the eastern corner showcases over 60 local artists. The Family Zone in the central area has fairground rides and games for all ages. The Sports Arena on the north side hosts football and volleyball competitions. And the Quiet Garden near the lake offers yoga sessions throughout the afternoon.

Parking is available at Greenfield Leisure Centre, a five-minute walk away. Shuttle buses run every 20 minutes from the town centre.

We hope to see you there!
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "When does the Millbrook Summer Festival take place?", options: [{ label: "A", text: "15th July" }, { label: "B", text: "22nd July" }, { label: "C", text: "29th July" }], correct: "B", explanation: "The presenter says the festival takes place on the 22nd of July." },
        { id: 12, type: "mc_single", stem: "What time does the festival end?", options: [{ label: "A", text: "7 pm" }, { label: "B", text: "8 pm" }, { label: "C", text: "9 pm" }], correct: "C", explanation: "The presenter says the festival runs until 9 at night." },
        { id: 13, type: "mc_single", stem: "How much does an adult ticket cost in advance online?", options: [{ label: "A", text: "£4" }, { label: "B", text: "£6" }, { label: "C", text: "£8" }], correct: "A", explanation: "The presenter says online advance tickets are £4." },
        { id: 14, type: "mc_single", stem: "Where is this year's festival held?", options: [{ label: "A", text: "The town centre" }, { label: "B", text: "Greenfield Park" }, { label: "C", text: "Millbrook Leisure Centre" }], correct: "B", explanation: "The presenter says the festival is at Greenfield Park this year." },
        { id: 15, type: "mc_single", stem: "At what time does the headline act perform?", options: [{ label: "A", text: "5 pm" }, { label: "B", text: "6 pm" }, { label: "C", text: "7 pm" }], correct: "C", explanation: "The headline act performs from 7 in the evening." },
        { id: 16, type: "mc_single", stem: "The Food Village", options: [{ label: "A", text: "Near the main entrance" }, { label: "B", text: "Eastern corner" }, { label: "C", text: "Central area" }, { label: "D", text: "North side" }, { label: "E", text: "Near the lake" }, { label: "F", text: "South gate" }], correct: "A", explanation: "The Food Village is near the main entrance." },
        { id: 17, type: "mc_single", stem: "The Craft Market", options: [{ label: "A", text: "Near the main entrance" }, { label: "B", text: "Eastern corner" }, { label: "C", text: "Central area" }, { label: "D", text: "North side" }, { label: "E", text: "Near the lake" }, { label: "F", text: "South gate" }], correct: "B", explanation: "The Craft Market is in the eastern corner." },
        { id: 18, type: "mc_single", stem: "The Family Zone", options: [{ label: "A", text: "Near the main entrance" }, { label: "B", text: "Eastern corner" }, { label: "C", text: "Central area" }, { label: "D", text: "North side" }, { label: "E", text: "Near the lake" }, { label: "F", text: "South gate" }], correct: "C", explanation: "The Family Zone is in the central area." },
        { id: 19, type: "mc_single", stem: "The Sports Arena", options: [{ label: "A", text: "Near the main entrance" }, { label: "B", text: "Eastern corner" }, { label: "C", text: "Central area" }, { label: "D", text: "North side" }, { label: "E", text: "Near the lake" }, { label: "F", text: "South gate" }], correct: "D", explanation: "The Sports Arena is on the north side." },
        { id: 20, type: "mc_single", stem: "The Quiet Garden", options: [{ label: "A", text: "Near the main entrance" }, { label: "B", text: "Eastern corner" }, { label: "C", text: "Central area" }, { label: "D", text: "North side" }, { label: "E", text: "Near the lake" }, { label: "F", text: "South gate" }], correct: "E", explanation: "The Quiet Garden is near the lake." },
      ],
    },
    {
      part: 3,
      title: "Students Discussing a Psychology Assignment",
      context: "Two students, Oliver and Maria, are meeting with their psychology tutor, Dr Chen, to discuss their assignment on colour and human behaviour.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.",
      transcript: `
Dr Chen: Good morning, Oliver, Maria. How is your assignment progressing?

Oliver: We've been looking at how colour affects human behaviour. It's more complex than we expected.

Maria: We decided to narrow our focus to retail environments.

Dr Chen: That's a smart choice. What methods are you using?

Oliver: I'm doing controlled experiments in a simulated shopping environment.

Maria: And I'm analysing existing published studies — there's a lot from the 1990s onwards.

Dr Chen: Good combination. How long have you planned for data collection?

Maria: About four weeks in total.

Dr Chen: That's realistic. What have you found so far?

Oliver: One surprising finding is that blue lighting increases the time shoppers spend in a store by around 15 percent.

Maria: And red creates a sense of urgency — which is why it's used in sale signs.

Dr Chen: Very good. What challenges have you faced?

Oliver: The biggest challenge for me is controlling all the variables in the experiment. And recruiting enough participants has been difficult too.

Maria: For me, it's comparing studies from different countries — cultural context really matters.

Dr Chen: Those are valid concerns. Who will write the introduction?

Maria: I'll take that.

Dr Chen: And data analysis?

Oliver: That's my area.

Dr Chen: I'd suggest you both work on the conclusion together.

Oliver and Maria: Agreed, that makes sense.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What specific topic have Oliver and Maria chosen?", options: [{ label: "A", text: "Colour in healthcare settings" }, { label: "B", text: "Colour in retail environments" }, { label: "C", text: "Colour in educational spaces" }], correct: "B", explanation: "Maria says they narrowed their focus to retail environments." },
        { id: 22, type: "mc_single", stem: "What method does Oliver plan to use?", options: [{ label: "A", text: "Online surveys" }, { label: "B", text: "Controlled experiments" }, { label: "C", text: "Interviews" }], correct: "B", explanation: "Oliver plans to do controlled experiments in a simulated shopping environment." },
        { id: 23, type: "mc_single", stem: "How long is planned for data collection?", options: [{ label: "A", text: "Two weeks" }, { label: "B", text: "Three weeks" }, { label: "C", text: "Four weeks" }], correct: "C", explanation: "Maria says they have planned four weeks for data collection." },
        { id: 24, type: "mc_single", stem: "By how much does blue lighting increase time in store?", options: [{ label: "A", text: "10 percent" }, { label: "B", text: "15 percent" }, { label: "C", text: "20 percent" }], correct: "B", explanation: "Oliver says blue lighting increases time by around 15 percent." },
        { id: 25, type: "mc_single", stem: "What challenge does Maria identify?", options: [{ label: "A", text: "Recruiting participants" }, { label: "B", text: "Comparing international studies" }, { label: "C", text: "Analysing colour data" }], correct: "B", explanation: "Maria says her challenge is comparing studies from different countries." },
        { id: 26, type: "mc_single", stem: "What does Dr Chen recommend they work on together?", options: [{ label: "A", text: "The introduction" }, { label: "B", text: "The data analysis" }, { label: "C", text: "The conclusion" }], correct: "C", explanation: "Dr Chen suggests they work on the conclusion together." },
        { id: 27, type: "mc_multiple", stem: "Which TWO challenges does Oliver identify?", options: [{ label: "A", text: "Controlling variables" }, { label: "B", text: "Finding enough participants" }, { label: "C", text: "Cultural differences" }, { label: "D", text: "Equipment costs" }, { label: "E", text: "Time constraints" }], pickCount: 2, correct: ["A", "B"], explanation: "Oliver mentions controlling variables and recruiting enough participants." },
        { id: 28, type: "mc_multiple", stem: "Which TWO tasks will Maria be responsible for?", options: [{ label: "A", text: "Controlled experiments" }, { label: "B", text: "Analysing published studies" }, { label: "C", text: "Writing the introduction" }, { label: "D", text: "Data analysis" }, { label: "E", text: "Statistical modelling" }], pickCount: 2, correct: ["B", "C"], explanation: "Maria says she is analysing existing studies and will write the introduction." },
        { id: 29, type: "mc_single", stem: "Who is responsible for data analysis?", options: [{ label: "A", text: "Oliver" }, { label: "B", text: "Maria" }, { label: "C", text: "Both equally" }], correct: "A", explanation: "Oliver says data analysis is his area." },
        { id: 30, type: "mc_single", stem: "Who will write the introduction?", options: [{ label: "A", text: "Oliver" }, { label: "B", text: "Maria" }, { label: "C", text: "Dr Chen" }], correct: "B", explanation: "Maria says she will take the introduction." },
      ],
    },
    {
      part: 4,
      title: "Lecture: The History of Photography",
      context: "A university lecturer is giving a talk about the history and science of photography.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning. Today I want to trace the fascinating history of photography — a technology that transformed how humans record and communicate.

Photography was invented in 1839, when Louis Daguerre presented his daguerreotype to the French Academy of Sciences. The first permanent photograph had been created about 13 years earlier in 1826 by Nicéphore Niépce. His photograph required an exposure time of approximately 8 hours.

Early photographs needed long exposures because photographic materials were not sensitive to light. The development of dry plates in 1871 by Richard Maddox dramatically reduced exposure times from minutes to just seconds.

The first commercially successful colour photograph was produced in 1907 using a process called Autochrome, developed by the Lumière brothers in France. Before that, all photographs were black and white.

Photography became accessible to the general public in 1888 when George Eastman launched the Kodak camera. Pre-loaded with film for 100 photographs, it cost just 25 dollars.

The digital revolution changed everything. The first digital camera was invented in 1975 by Steve Sasson at Kodak. It weighed 3.6 kilograms and produced images at a resolution of just 0.01 megapixels.

Today, modern smartphones capture images exceeding 100 megapixels. The volume of photographs taken globally now exceeds 1.4 trillion per year — unimaginable just 50 years ago.

Photography has moved from a specialist art form to a universal means of communication, and its role in journalism, science, and culture cannot be overstated. Thank you.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Year photography was invented:", wordLimit: 1, correct: "1839", explanation: "Daguerre presented his daguerreotype in 1839." },
        { id: 32, type: "fill_blank", before: "Inventor of first permanent photograph:", wordLimit: 1, correct: "Niépce", explanation: "The first permanent photograph was created by Nicéphore Niépce." },
        { id: 33, type: "fill_blank", before: "Exposure time for first photograph:", wordLimit: 2, correct: "8 hours", explanation: "Niépce's photograph required approximately 8 hours of exposure." },
        { id: 34, type: "fill_blank", before: "Dry plates developed in:", wordLimit: 1, correct: "1871", explanation: "Dry plates were developed in 1871 by Richard Maddox." },
        { id: 35, type: "fill_blank", before: "First colour process name:", wordLimit: 1, correct: "Autochrome", explanation: "The first colour process was called Autochrome." },
        { id: 36, type: "fill_blank", before: "Country where Autochrome was developed:", wordLimit: 1, correct: "France", explanation: "Autochrome was developed by the Lumière brothers in France." },
        { id: 37, type: "fill_blank", before: "Year the Kodak camera was launched:", wordLimit: 1, correct: "1888", explanation: "George Eastman launched the Kodak camera in 1888." },
        { id: 38, type: "fill_blank", before: "Year first digital camera was invented:", wordLimit: 1, correct: "1975", explanation: "The first digital camera was invented in 1975 by Steve Sasson." },
        { id: 39, type: "fill_blank", before: "Weight of first digital camera:", wordLimit: 2, correct: "3.6 kilograms", explanation: "The first digital camera weighed 3.6 kilograms." },
        { id: 40, type: "fill_blank", before: "Annual photographs taken globally:", wordLimit: 2, correct: "1.4 trillion", explanation: "The volume of photographs taken globally exceeds 1.4 trillion per year." },
      ],
    },
  ],
};
