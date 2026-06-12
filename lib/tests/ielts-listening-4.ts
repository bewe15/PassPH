import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening4: IELTSListeningTest = {
  id: "ielts-listening-4",
  exam: "IELTS",
  title: "IELTS Listening — Test 4",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Bicycle Rental Shop Enquiry",
      context: "Anna is calling Pedal City Bicycle Hire to enquire about renting a bike. Mike, the shop assistant, helps her with the details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the booking form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Mike: Good morning, Pedal City Bicycle Hire, Mike speaking.

Anna: Hello, I'd like to hire a bike for a few days. Can you give me some information?

Mike: Of course. What dates are you thinking?

Anna: From the 18th to the 21st of June — so three days.

Mike: Great. What type of bike are you looking for?

Anna: A hybrid bike, please — I'll be cycling on both roads and cycle paths.

Mike: We have a good selection. Our hybrid bikes are £15 per day, so that would be £45 for three days.

Anna: That sounds reasonable. Do you do helmets as well?

Mike: Yes, helmets are included free of charge. We also have bike locks available at £2 per day.

Anna: I'll take a lock too, please. Can I also book a child seat?

Mike: Yes, child seats are £5 for the whole rental period, regardless of how many days.

Anna: Perfect. Could I give you my contact details now?

Mike: Of course. Your name?

Anna: Anna Kovacs. K-O-V-A-C-S.

Mike: And a phone number?

Anna: 07734 891 234.

Mike: Do you need a map of local cycle routes?

Anna: Yes please — that would be really useful.

Mike: We include one with every rental. There's a deposit of £30 required on collection, which is fully refunded when you return the bike.

Anna: That's fine. See you on the 18th!
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Rental start date:", wordLimit: 3, correct: "18th June", explanation: "Anna says she wants to hire from the 18th of June." },
        { id: 2, type: "fill_blank", before: "Number of days:", wordLimit: 1, correct: "3", explanation: "Anna says she wants to hire for three days." },
        { id: 3, type: "fill_blank", before: "Type of bike required:", wordLimit: 1, correct: "hybrid", explanation: "Anna requests a hybrid bike." },
        { id: 4, type: "fill_blank", before: "Daily rate for hybrid bike: £", wordLimit: 1, correct: "15", explanation: "Mike says hybrid bikes are £15 per day." },
        { id: 5, type: "fill_blank", before: "Daily cost of bike lock: £", wordLimit: 1, correct: "2", explanation: "Mike says bike locks are available at £2 per day." },
        { id: 6, type: "fill_blank", before: "Cost of child seat for full rental: £", wordLimit: 1, correct: "5", explanation: "Mike says child seats are £5 for the whole rental period." },
        { id: 7, type: "fill_blank", before: "Customer surname:", wordLimit: 1, correct: "Kovacs", explanation: "Anna gives her surname as Kovacs." },
        { id: 8, type: "fill_blank", before: "Phone number:", wordLimit: 2, correct: "07734 891 234", explanation: "Anna gives her phone number as 07734 891 234." },
        { id: 9, type: "fill_blank", before: "Free item included with every rental:", wordLimit: 4, correct: "map of local cycle routes", explanation: "Mike says a map of local cycle routes is included with every rental." },
        { id: 10, type: "fill_blank", before: "Deposit required on collection: £", wordLimit: 1, correct: "30", explanation: "Mike says a deposit of £30 is required on collection." },
      ],
    },
    {
      part: 2,
      title: "Westfield Town Redevelopment",
      context: "A council representative is addressing residents at a public meeting about Westfield town centre redevelopment plans.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each planned building with its proposed location (A–F).",
      transcript: `
Good evening, residents of Westfield. Thank you for coming to tonight's public consultation meeting. I'm here to outline the proposed town centre redevelopment plans.

The redevelopment will begin in March of next year and is expected to take three years to complete. The total investment is £42 million, of which £28 million comes from central government funding.

One of the key priorities is improving public transport links. A new bus interchange will be built on Victoria Street, replacing the current outdated facility. Bus frequency on the main routes will increase to every 8 minutes during peak hours.

For pedestrians, we are creating a new pedestrianised zone covering five streets in the town centre. Cycling infrastructure will also be improved, with 3 kilometres of new protected cycle lanes.

Now, I want to explain where key new buildings will be located. The new library will be on Castle Road, next to the existing council offices. A new health centre will be built on the site of the old bus station on Mill Lane. The arts centre will be developed on the riverside — on the northern bank of the River Wess. An expanded market hall is planned for the junction of High Street and Station Road. And a new community sports centre will be located on Greenway Avenue, on the western edge of the town centre.

We will be accepting public comments until the 31st of January. Feedback forms are available at the back of the hall tonight.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "When will the redevelopment begin?", options: [{ label: "A", text: "January next year" }, { label: "B", text: "March next year" }, { label: "C", text: "June next year" }], correct: "B", explanation: "The representative says the redevelopment will begin in March of next year." },
        { id: 12, type: "mc_single", stem: "How long will the redevelopment take?", options: [{ label: "A", text: "Two years" }, { label: "B", text: "Three years" }, { label: "C", text: "Four years" }], correct: "B", explanation: "The representative says the project is expected to take three years to complete." },
        { id: 13, type: "mc_single", stem: "What is the total investment?", options: [{ label: "A", text: "£28 million" }, { label: "B", text: "£36 million" }, { label: "C", text: "£42 million" }], correct: "C", explanation: "The representative says the total investment is £42 million." },
        { id: 14, type: "mc_single", stem: "How frequently will buses run during peak hours?", options: [{ label: "A", text: "Every 5 minutes" }, { label: "B", text: "Every 8 minutes" }, { label: "C", text: "Every 10 minutes" }], correct: "B", explanation: "The representative says bus frequency will increase to every 8 minutes during peak hours." },
        { id: 15, type: "mc_single", stem: "What is the deadline for public comments?", options: [{ label: "A", text: "31st December" }, { label: "B", text: "31st January" }, { label: "C", text: "28th February" }], correct: "B", explanation: "The representative says public comments are accepted until the 31st of January." },
        { id: 16, type: "mc_single", stem: "The new library", options: [{ label: "A", text: "Castle Road" }, { label: "B", text: "Mill Lane" }, { label: "C", text: "Riverside, north bank" }, { label: "D", text: "High Street junction" }, { label: "E", text: "Greenway Avenue" }, { label: "F", text: "Victoria Street" }], correct: "A", explanation: "The new library will be on Castle Road." },
        { id: 17, type: "mc_single", stem: "The new health centre", options: [{ label: "A", text: "Castle Road" }, { label: "B", text: "Mill Lane" }, { label: "C", text: "Riverside, north bank" }, { label: "D", text: "High Street junction" }, { label: "E", text: "Greenway Avenue" }, { label: "F", text: "Victoria Street" }], correct: "B", explanation: "The health centre will be on Mill Lane, on the site of the old bus station." },
        { id: 18, type: "mc_single", stem: "The new arts centre", options: [{ label: "A", text: "Castle Road" }, { label: "B", text: "Mill Lane" }, { label: "C", text: "Riverside, north bank" }, { label: "D", text: "High Street junction" }, { label: "E", text: "Greenway Avenue" }, { label: "F", text: "Victoria Street" }], correct: "C", explanation: "The arts centre will be on the riverside, on the northern bank of the River Wess." },
        { id: 19, type: "mc_single", stem: "The expanded market hall", options: [{ label: "A", text: "Castle Road" }, { label: "B", text: "Mill Lane" }, { label: "C", text: "Riverside, north bank" }, { label: "D", text: "High Street junction" }, { label: "E", text: "Greenway Avenue" }, { label: "F", text: "Victoria Street" }], correct: "D", explanation: "The market hall is planned for the junction of High Street and Station Road." },
        { id: 20, type: "mc_single", stem: "The new community sports centre", options: [{ label: "A", text: "Castle Road" }, { label: "B", text: "Mill Lane" }, { label: "C", text: "Riverside, north bank" }, { label: "D", text: "High Street junction" }, { label: "E", text: "Greenway Avenue" }, { label: "F", text: "Victoria Street" }], correct: "E", explanation: "The sports centre will be on Greenway Avenue on the western edge of the town centre." },
      ],
    },
    {
      part: 3,
      title: "Students Discussing a Psychology Experiment",
      context: "Two students, Ben and Sarah, are meeting with their supervisor, Dr Evans, to discuss their psychology experiment on memory.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.",
      transcript: `
Dr Evans: Hello, Ben, Sarah. How is the memory experiment coming along?

Ben: We've been running our study on how background noise affects short-term memory recall. It's producing some really interesting data.

Sarah: Yes — we didn't expect such strong results so early on.

Dr Evans: Excellent. How many participants have you tested so far?

Ben: We've completed 45 out of a planned 60 participants.

Dr Evans: Good progress. What's your core finding so far?

Sarah: Participants recalled significantly fewer words when background speech was playing compared to white noise or silence. White noise actually seemed to help concentration.

Ben: The difference was quite striking — around a 23 percent reduction in recall with speech noise.

Dr Evans: That's a significant finding. What statistical method are you using?

Ben: We're using ANOVA to compare the three conditions.

Dr Evans: Good choice. What problems have you encountered?

Sarah: We've had some issues with equipment — our recording devices malfunctioned twice and we had to re-run those sessions. And scheduling participants has been difficult with exam season coming up.

Ben: For me, the main challenge has been keeping the conditions standardised — making sure noise levels are exactly the same each time.

Dr Evans: These are manageable. Who is writing the method section?

Sarah: I'll do that.

Dr Evans: And who's handling the statistical analysis?

Ben: That's my area.

Dr Evans: I'd recommend you both draft the discussion section together — your combined interpretation will be richer.

Ben and Sarah: We'd already planned for that.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What is the topic of Ben and Sarah's experiment?", options: [{ label: "A", text: "Background noise and long-term memory" }, { label: "B", text: "Background noise and short-term memory recall" }, { label: "C", text: "Music and concentration" }], correct: "B", explanation: "Ben says they are studying how background noise affects short-term memory recall." },
        { id: 22, type: "mc_single", stem: "How many participants have been tested so far?", options: [{ label: "A", text: "35" }, { label: "B", text: "45" }, { label: "C", text: "60" }], correct: "B", explanation: "Ben says they have completed 45 out of a planned 60 participants." },
        { id: 23, type: "mc_single", stem: "Which condition produced the best recall performance?", options: [{ label: "A", text: "Background speech" }, { label: "B", text: "White noise" }, { label: "C", text: "Silence" }], correct: "B", explanation: "Sarah says white noise actually seemed to help concentration." },
        { id: 24, type: "mc_single", stem: "By how much did speech noise reduce recall?", options: [{ label: "A", text: "13 percent" }, { label: "B", text: "18 percent" }, { label: "C", text: "23 percent" }], correct: "C", explanation: "Ben says there was around a 23 percent reduction in recall with speech noise." },
        { id: 25, type: "mc_single", stem: "What statistical method are they using?", options: [{ label: "A", text: "T-test" }, { label: "B", text: "ANOVA" }, { label: "C", text: "Regression analysis" }], correct: "B", explanation: "Ben says they are using ANOVA to compare the three conditions." },
        { id: 26, type: "mc_single", stem: "What does Dr Evans recommend they work on together?", options: [{ label: "A", text: "The method section" }, { label: "B", text: "The statistical analysis" }, { label: "C", text: "The discussion section" }], correct: "C", explanation: "Dr Evans recommends they both draft the discussion section together." },
        { id: 27, type: "mc_multiple", stem: "Which TWO problems does Sarah identify?", options: [{ label: "A", text: "Equipment malfunctions" }, { label: "B", text: "Scheduling participants" }, { label: "C", text: "Standardising conditions" }, { label: "D", text: "Statistical analysis" }, { label: "E", text: "Low participant numbers" }], pickCount: 2, correct: ["A", "B"], explanation: "Sarah mentions equipment malfunctions and difficulty scheduling participants during exam season." },
        { id: 28, type: "mc_multiple", stem: "Which TWO tasks will Sarah be responsible for?", options: [{ label: "A", text: "Statistical analysis" }, { label: "B", text: "Writing the method section" }, { label: "C", text: "Running participant sessions" }, { label: "D", text: "Drafting the discussion" }, { label: "E", text: "Standardising conditions" }], pickCount: 2, correct: ["B", "D"], explanation: "Sarah writes the method section and will co-write the discussion section." },
        { id: 29, type: "mc_single", stem: "Who handles statistical analysis?", options: [{ label: "A", text: "Ben" }, { label: "B", text: "Sarah" }, { label: "C", text: "Dr Evans" }], correct: "A", explanation: "Ben says statistical analysis is his area." },
        { id: 30, type: "mc_single", stem: "Who writes the method section?", options: [{ label: "A", text: "Ben" }, { label: "B", text: "Sarah" }, { label: "C", text: "Both together" }], correct: "B", explanation: "Sarah says she will do the method section." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Deep Sea Exploration",
      context: "A university lecturer is giving a talk about the history and importance of deep sea exploration.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning everyone. Today's lecture is about deep sea exploration — one of the last great frontiers of scientific discovery on our own planet.

The oceans cover approximately 71 percent of the Earth's surface, yet more than 80 percent of the ocean floor remains unmapped and unexplored. This is partly because the deep sea presents extreme challenges: pressures can reach over 1,000 times those at the surface, and temperatures near the seafloor are typically just 2 degrees Celsius.

The modern era of deep sea exploration began in 1960 when the submersible Trieste, piloted by Jacques Piccard and Don Walsh, descended to the deepest known point on Earth — the Challenger Deep in the Mariana Trench — at a depth of approximately 10,935 metres.

Since then, remotely operated vehicles, known as ROVs, have transformed our ability to explore the deep sea without putting humans at risk. Modern ROVs can operate at depths of up to 6,000 metres and can be controlled from a ship on the surface.

Deep sea exploration has already led to remarkable discoveries. In 1977, scientists discovered hydrothermal vents — fissures in the seafloor that release superheated water. These vents support entire ecosystems based not on sunlight but on chemical energy, a process called chemosynthesis.

The deep sea is also a source of valuable minerals. Polymetallic nodules — potato-sized rocks found on the seafloor — contain significant concentrations of manganese, cobalt, and nickel.

Currently, one of the most pressing concerns is the potential environmental impact of deep sea mining. Many scientists argue that the ecosystems around hydrothermal vents, which may take centuries to recover from disturbance, must be protected.

Thank you.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Percentage of ocean floor unmapped:", wordLimit: 2, correct: "80 percent", explanation: "The lecturer says more than 80 percent of the ocean floor remains unmapped." },
        { id: 32, type: "fill_blank", before: "Pressure at depth compared to surface:", wordLimit: 3, correct: "1000 times", explanation: "The lecturer says pressures can reach over 1,000 times those at the surface." },
        { id: 33, type: "fill_blank", before: "Temperature near seafloor:", wordLimit: 2, correct: "2 degrees", explanation: "The lecturer says seafloor temperatures are typically just 2 degrees Celsius." },
        { id: 34, type: "fill_blank", before: "Year Trieste descended to Challenger Deep:", wordLimit: 1, correct: "1960", explanation: "The Trieste descended to the Challenger Deep in 1960." },
        { id: 35, type: "fill_blank", before: "Depth of Challenger Deep (approx):", wordLimit: 2, correct: "10935 metres", explanation: "The Challenger Deep is at a depth of approximately 10,935 metres." },
        { id: 36, type: "fill_blank", before: "Maximum operating depth of modern ROVs:", wordLimit: 2, correct: "6000 metres", explanation: "Modern ROVs can operate at depths of up to 6,000 metres." },
        { id: 37, type: "fill_blank", before: "Year hydrothermal vents were discovered:", wordLimit: 1, correct: "1977", explanation: "Scientists discovered hydrothermal vents in 1977." },
        { id: 38, type: "fill_blank", before: "Energy source for vent ecosystems:", wordLimit: 1, correct: "chemical", explanation: "Vent ecosystems are based on chemical energy, not sunlight." },
        { id: 39, type: "fill_blank", before: "Process used by vent organisms:", wordLimit: 1, correct: "chemosynthesis", explanation: "The process is called chemosynthesis." },
        { id: 40, type: "fill_blank", before: "Minerals found in polymetallic nodules (name one):", wordLimit: 1, correct: "manganese", explanation: "Polymetallic nodules contain manganese, cobalt, and nickel." },
      ],
    },
  ],
};
