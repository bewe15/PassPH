import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening10: IELTSListeningTest = {
  id: "ielts-listening-10",
  exam: "IELTS",
  title: "IELTS Listening — Test 10",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Fitness Centre Enrollment",
      context: "Paul is enrolling at a fitness centre. Karen, the receptionist, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the membership form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Karen: Good morning. Welcome to PeakFit Fitness Centre. How can I help you?

Paul: Hello. I'd like to sign up for a membership, please.

Karen: Of course. Let me take your details. Full name?

Paul: Paul Sheridan. S-H-E-R-I-D-A-N.

Karen: Date of birth?

Paul: 22nd of May, 1990.

Karen: What's your home address?

Paul: 8 Willow Court, Cheltenham.

Karen: And your postcode?

Paul: GL51 0NA.

Karen: Thank you. What type of membership are you interested in? We have three options: monthly, six-month, or annual.

Paul: I'll go for the annual membership, please — it works out cheaper.

Karen: Good choice. The annual rate is £349. Compared to the monthly rate of £35, it saves you quite a bit over the year.

Paul: Yes, exactly. Can I also get access to the swimming pool?

Karen: Swimming pool access is included in the premium tier, which is an extra £8 per month on top of the annual membership.

Paul: That's fine, I'll add that on.

Karen: Any health conditions or injuries I should note?

Paul: I had a shoulder surgery about two years ago, but I've fully recovered. I'd just like to mention it so any fitness instructor is aware.

Karen: Noted. I'll flag that for our fitness team. How did you hear about PeakFit?

Paul: A colleague at work recommended you.

Karen: Lovely. Would you like to arrange a free induction session with one of our personal trainers?

Paul: Yes, definitely. When is the earliest slot?

Karen: We have availability this Friday at 11 am. Would that suit you?

Paul: Friday at 11 — yes, that's perfect.

Karen: Great. I'll book you in for that. Your membership card will be ready immediately — I'll print it now. Do you have a preferred emergency contact?

Paul: Yes — my wife. Her name is Sarah Sheridan and her mobile is 07892 441 227.

Karen: Wonderful. You're all set.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Member surname:", wordLimit: 1, correct: "Sheridan", explanation: "Paul gives his surname as Sheridan." },
        { id: 2, type: "fill_blank", before: "Date of birth:", wordLimit: 3, correct: "22nd May 1990", explanation: "Paul says his date of birth is the 22nd of May, 1990." },
        { id: 3, type: "fill_blank", before: "Home postcode:", wordLimit: 1, correct: "GL51 0NA", explanation: "Paul gives his postcode as GL51 0NA." },
        { id: 4, type: "fill_blank", before: "Membership type chosen:", wordLimit: 1, correct: "annual", explanation: "Paul chooses the annual membership." },
        { id: 5, type: "fill_blank", before: "Annual membership cost: £", wordLimit: 1, correct: "349", explanation: "Karen says the annual rate is £349." },
        { id: 6, type: "fill_blank", before: "Additional monthly cost for swimming pool access: £", wordLimit: 1, correct: "8", explanation: "Karen says pool access is an extra £8 per month." },
        { id: 7, type: "fill_blank", before: "Health condition noted:", wordLimit: 2, correct: "shoulder surgery", explanation: "Paul mentions he had a shoulder surgery about two years ago." },
        { id: 8, type: "fill_blank", before: "How Paul heard about PeakFit:", wordLimit: 3, correct: "colleague at work", explanation: "Paul says a colleague at work recommended PeakFit." },
        { id: 9, type: "fill_blank", before: "Induction session booked for:", wordLimit: 3, correct: "Friday at 11", explanation: "Karen offers and Paul accepts a Friday slot at 11 am." },
        { id: 10, type: "fill_blank", before: "Emergency contact mobile number:", wordLimit: 2, correct: "07892 441 227", explanation: "Paul gives his wife's mobile number as 07892 441 227." },
      ],
    },
    {
      part: 2,
      title: "Cultural Festival Preview",
      context: "A local radio presenter is giving a preview of an upcoming cultural festival.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each event or attraction with its venue or location at the festival (A–F).",
      transcript: `
Good evening, listeners. Coming up this weekend is the much-anticipated Westmore International Cultural Festival, and I'm here to give you all the details you need to make the most of it.

The festival runs from Friday the 13th through to Sunday the 15th. It's completely free to attend — there's no ticket required to enter the festival grounds, though some specific workshops and performances will require advance booking. Gates open at 10 am each day and close at 9 pm.

The festival is taking place at Westmore Park, which has been transformed into a vibrant celebration of music, food, art, and performance from over 30 countries. Last year's event attracted around 25,000 visitors over the three days, and this year we're expecting even more.

Now for the highlights. The headline music concert on Saturday evening will feature six international acts on the main stage — Westmore Stage — situated at the northern end of the park near the main gates. An international food market offering street food from around the world will be set up in the central arena of the park. Children's craft and storytelling activities will be in the family zone, which is in the south-west corner of the grounds. A photography and visual arts exhibition will be displayed in the festival pavilion, the large white tent on the eastern side of the park. Traditional dance performances will take place at the riverside amphitheatre, which you'll find along the southern edge of the park following the river path. And finally, a series of talks and cultural debates will be held in the conference tent, located just west of the main entrance.

Parking is available at Westmore Park and Ride on Church Lane, with a free shuttle bus running every 20 minutes to the festival entrance. Cycling to the festival is strongly encouraged and there are 200 free cycle parking spaces near the south gate.

For more information and to book workshops, visit westmorefestival.co.uk. I hope to see you there!
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "How many countries are represented at the festival?", options: [{ label: "A", text: "More than 20" }, { label: "B", text: "More than 30" }, { label: "C", text: "More than 50" }], correct: "B", explanation: "The presenter says the festival features music, food, art, and performance from over 30 countries." },
        { id: 12, type: "mc_single", stem: "How many visitors attended last year's festival?", options: [{ label: "A", text: "Around 15,000" }, { label: "B", text: "Around 25,000" }, { label: "C", text: "Around 35,000" }], correct: "B", explanation: "The presenter says last year's event attracted around 25,000 visitors over the three days." },
        { id: 13, type: "mc_single", stem: "What time do the festival gates open each day?", options: [{ label: "A", text: "9 am" }, { label: "B", text: "10 am" }, { label: "C", text: "11 am" }], correct: "B", explanation: "The presenter says gates open at 10 am each day." },
        { id: 14, type: "mc_single", stem: "How often does the shuttle bus run from the Park and Ride?", options: [{ label: "A", text: "Every 10 minutes" }, { label: "B", text: "Every 15 minutes" }, { label: "C", text: "Every 20 minutes" }], correct: "C", explanation: "The presenter says a free shuttle bus runs every 20 minutes to the festival entrance." },
        { id: 15, type: "mc_single", stem: "How many cycle parking spaces are available?", options: [{ label: "A", text: "100" }, { label: "B", text: "150" }, { label: "C", text: "200" }], correct: "C", explanation: "The presenter says there are 200 free cycle parking spaces near the south gate." },
        { id: 16, type: "mc_single", stem: "The headline music concert (Westmore Stage)", options: [{ label: "A", text: "Northern end near main gates" }, { label: "B", text: "Central arena" }, { label: "C", text: "South-west corner" }, { label: "D", text: "Large white tent — eastern side" }, { label: "E", text: "Riverside — southern edge" }, { label: "F", text: "Just west of main entrance" }], correct: "A", explanation: "The presenter says the main stage is at the northern end of the park near the main gates." },
        { id: 17, type: "mc_single", stem: "The international food market", options: [{ label: "A", text: "Northern end near main gates" }, { label: "B", text: "Central arena" }, { label: "C", text: "South-west corner" }, { label: "D", text: "Large white tent — eastern side" }, { label: "E", text: "Riverside — southern edge" }, { label: "F", text: "Just west of main entrance" }], correct: "B", explanation: "The presenter says the international food market will be in the central arena of the park." },
        { id: 18, type: "mc_single", stem: "The children's craft and storytelling (family zone)", options: [{ label: "A", text: "Northern end near main gates" }, { label: "B", text: "Central arena" }, { label: "C", text: "South-west corner" }, { label: "D", text: "Large white tent — eastern side" }, { label: "E", text: "Riverside — southern edge" }, { label: "F", text: "Just west of main entrance" }], correct: "C", explanation: "The presenter says the family zone is in the south-west corner of the grounds." },
        { id: 19, type: "mc_single", stem: "The photography and visual arts exhibition", options: [{ label: "A", text: "Northern end near main gates" }, { label: "B", text: "Central arena" }, { label: "C", text: "South-west corner" }, { label: "D", text: "Large white tent — eastern side" }, { label: "E", text: "Riverside — southern edge" }, { label: "F", text: "Just west of main entrance" }], correct: "D", explanation: "The presenter says the photography exhibition is in the festival pavilion, the large white tent on the eastern side of the park." },
        { id: 20, type: "mc_single", stem: "The talks and cultural debates", options: [{ label: "A", text: "Northern end near main gates" }, { label: "B", text: "Central arena" }, { label: "C", text: "South-west corner" }, { label: "D", text: "Large white tent — eastern side" }, { label: "E", text: "Riverside — southern edge" }, { label: "F", text: "Just west of main entrance" }], correct: "F", explanation: "The presenter says the conference tent for talks is located just west of the main entrance." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Media and Advertising Project",
      context: "Students Rachel and Simon are meeting with their tutor, Dr Murray, to discuss their media and advertising project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Murray: Come in, Rachel, Simon. Let's talk through your project on digital advertising and consumer behaviour.

Rachel: Thank you. We've been analysing how targeted online advertising affects purchasing decisions in the 18-to-35 age bracket.

Simon: We collected data through an online survey of 200 participants, focusing on their responses to advertisements on social media platforms.

Dr Murray: What was your key research question?

Rachel: We wanted to understand whether personalised ads — those based on browsing history and demographic data — are more persuasive than non-personalised ads.

Dr Murray: And what did you find?

Simon: The results clearly showed that personalised ads were significantly more likely to result in a click-through. The click-through rate for personalised ads was 34 percent, compared to just 12 percent for non-personalised ads.

Rachel: However, we also found that participants expressed higher levels of discomfort with personalised advertising, particularly around concerns about privacy.

Dr Murray: That's an interesting tension — effective but unwanted. Did you control for any variables?

Simon: We controlled for prior purchasing history, frequency of social media use, and income level.

Dr Murray: Good. Were there any unexpected findings?

Rachel: Yes — we expected younger participants to be more comfortable with personalised advertising, but we found no significant age difference within our 18-to-35 bracket. Discomfort with data tracking was relatively uniform across the age range.

Dr Murray: That's worth highlighting. What theoretical framework are you drawing on?

Simon: We're primarily drawing on persuasion theory and consumer psychology, particularly the Elaboration Likelihood Model.

Dr Murray: Good choice — it fits the topic well. How are you handling the ethics section?

Rachel: We've been careful to discuss the distinction between legal data collection and what consumers actually consent to knowingly. A lot of data collection occurs through passive means — users agreeing to terms and conditions without reading them.

Dr Murray: Strong point. What are your main recommendations?

Simon: We're recommending clearer opt-in consent mechanisms and standardised plain-language privacy notices.

Dr Murray: Solid recommendations grounded in your evidence. How long is the final report?

Rachel: It needs to be 5,000 words. We're currently at about 3,800, so we have a bit more to add.

Dr Murray: Make sure your conclusion ties back to your research question explicitly. That's an area where students often lose marks.

Simon: We'll prioritise that. Thank you, Dr Murray.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What age group did Rachel and Simon focus on?", options: [{ label: "A", text: "16 to 30" }, { label: "B", text: "18 to 35" }, { label: "C", text: "25 to 45" }], correct: "B", explanation: "Rachel says they analysed the effects of targeted advertising on the 18-to-35 age bracket." },
        { id: 22, type: "mc_single", stem: "How many people participated in their survey?", options: [{ label: "A", text: "150" }, { label: "B", text: "175" }, { label: "C", text: "200" }], correct: "C", explanation: "Simon says they collected data from an online survey of 200 participants." },
        { id: 23, type: "mc_single", stem: "What was the click-through rate for personalised ads?", options: [{ label: "A", text: "12 percent" }, { label: "B", text: "24 percent" }, { label: "C", text: "34 percent" }], correct: "C", explanation: "Simon says the click-through rate for personalised ads was 34 percent." },
        { id: 24, type: "mc_single", stem: "What concern did participants express about personalised advertising?", options: [{ label: "A", text: "Irrelevance of the ads" }, { label: "B", text: "Privacy concerns" }, { label: "C", text: "Excessive frequency of ads" }], correct: "B", explanation: "Rachel says participants expressed higher levels of discomfort, particularly around concerns about privacy." },
        { id: 25, type: "mc_single", stem: "What theoretical model are they primarily drawing on?", options: [{ label: "A", text: "Uses and Gratifications Theory" }, { label: "B", text: "Elaboration Likelihood Model" }, { label: "C", text: "Agenda-Setting Theory" }], correct: "B", explanation: "Simon says they are primarily drawing on the Elaboration Likelihood Model." },
        { id: 26, type: "mc_single", stem: "What is the required word count for the final report?", options: [{ label: "A", text: "4,000 words" }, { label: "B", text: "4,500 words" }, { label: "C", text: "5,000 words" }], correct: "C", explanation: "Rachel says the final report needs to be 5,000 words." },
        { id: 27, type: "mc_multiple", stem: "Which TWO variables did Simon and Rachel control for in their study?", options: [{ label: "A", text: "Frequency of social media use" }, { label: "B", text: "Gender" }, { label: "C", text: "Income level" }, { label: "D", text: "Education level" }, { label: "E", text: "Geographic location" }], pickCount: 2, correct: ["A", "C"], explanation: "Simon says they controlled for prior purchasing history, frequency of social media use, and income level — frequency of social media use and income level are two of these." },
        { id: 28, type: "mc_multiple", stem: "Which TWO recommendations do the students make?", options: [{ label: "A", text: "Banning all personalised advertising" }, { label: "B", text: "Clearer opt-in consent mechanisms" }, { label: "C", text: "Standardised plain-language privacy notices" }, { label: "D", text: "Limits on data retention periods" }, { label: "E", text: "User compensation for data use" }], pickCount: 2, correct: ["B", "C"], explanation: "Simon recommends clearer opt-in consent mechanisms and standardised plain-language privacy notices." },
        { id: 29, type: "mc_single", stem: "What unexpected finding emerged from the age analysis?", options: [{ label: "A", text: "Younger participants were far more comfortable with personalised ads" }, { label: "B", text: "Older participants clicked through more often" }, { label: "C", text: "Discomfort with data tracking was uniform across the 18-to-35 age range" }], correct: "C", explanation: "Rachel says discomfort with data tracking was relatively uniform across the age range, contrary to their expectations." },
        { id: 30, type: "mc_single", stem: "What does Dr Murray say students often lose marks on?", options: [{ label: "A", text: "The methodology section" }, { label: "B", text: "The conclusion not linking back to the research question" }, { label: "C", text: "Insufficient use of theoretical frameworks" }], correct: "B", explanation: "Dr Murray says students often lose marks when the conclusion does not explicitly tie back to the research question." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Plate Tectonics",
      context: "A university lecturer is giving an introductory lecture on plate tectonics.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today we're starting a new topic — plate tectonics. This is one of the foundational theories of modern Earth science, and understanding it will underpin much of what we discuss in the coming weeks.

The theory of plate tectonics proposes that the Earth's outer shell — the lithosphere — is divided into several large and small sections called tectonic plates. These plates move very slowly, typically between 2 and 15 centimetres per year, driven by convection currents in the underlying mantle.

The idea wasn't fully accepted until the 1960s, but its origins lie in the earlier hypothesis of continental drift, proposed by Alfred Wegener in 1912. Wegener noticed that the coastlines of continents — particularly South America and Africa — appeared to fit together like pieces of a jigsaw. He also found matching rock formations and fossil evidence on opposite sides of the Atlantic. However, he couldn't explain the mechanism by which continents moved, and his ideas were rejected by most geologists at the time.

The missing mechanism was provided by the discovery of seafloor spreading in the 1950s and 60s, primarily through the work of Harry Hess. Hess proposed that new oceanic crust is continuously formed at mid-ocean ridges, where magma rises from the mantle, solidifies, and spreads outward. This was confirmed by the discovery that magnetic striping — regular patterns of magnetic reversals — is symmetrical on either side of mid-ocean ridges.

There are three main types of plate boundary. At divergent boundaries, plates move apart. Mid-ocean ridges are the most common example. At convergent boundaries, plates collide. When an oceanic plate collides with a continental plate, the denser oceanic plate is forced beneath the other in a process called subduction. This generates volcanic activity and deep ocean trenches. When two continental plates collide, neither subducts and instead the crust is pushed upward, forming mountain ranges — the Himalayas were formed this way. Transform boundaries are where two plates slide horizontally past each other — the San Andreas Fault in California is a classic example.

Plate tectonic activity is the cause of most earthquakes and volcanic eruptions. Approximately 90 percent of earthquakes occur along plate boundaries. The "Ring of Fire" — a belt of intense volcanic and seismic activity surrounding the Pacific Ocean — follows the edges of the Pacific Plate and its neighbours.

The study of plate tectonics also helps us understand the distribution of resources. Many mineral deposits — including copper and gold — are found in areas of historical subduction activity. Understanding tectonics is therefore important not only for hazard management but also for economic geology.

Thank you. Next week we'll look at seismic waves and how we use them to image the Earth's interior.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Name for the Earth's outer shell divided into tectonic plates:", wordLimit: 1, correct: "lithosphere", explanation: "The lecturer says the Earth's outer shell is called the lithosphere." },
        { id: 32, type: "fill_blank", before: "Typical speed of plate movement (range):", wordLimit: 3, correct: "2 and 15", explanation: "The lecturer says plates move between 2 and 15 centimetres per year." },
        { id: 33, type: "fill_blank", before: "Earlier hypothesis that preceded plate tectonics:", wordLimit: 2, correct: "continental drift", explanation: "The lecturer says the theory's origins lie in the earlier hypothesis of continental drift." },
        { id: 34, type: "fill_blank", before: "Scientist who proposed continental drift:", wordLimit: 2, correct: "Alfred Wegener", explanation: "The lecturer says continental drift was proposed by Alfred Wegener in 1912." },
        { id: 35, type: "fill_blank", before: "Year continental drift hypothesis was proposed:", wordLimit: 1, correct: "1912", explanation: "The lecturer says Wegener proposed his hypothesis in 1912." },
        { id: 36, type: "fill_blank", before: "Process by which new oceanic crust forms at mid-ocean ridges:", wordLimit: 2, correct: "seafloor spreading", explanation: "The lecturer says seafloor spreading was discovered in the 1950s and 60s." },
        { id: 37, type: "fill_blank", before: "Term for when a denser plate is forced beneath another at a convergent boundary:", wordLimit: 1, correct: "subduction", explanation: "The lecturer says the process of the denser oceanic plate being forced beneath the other is called subduction." },
        { id: 38, type: "fill_blank", before: "Mountain range formed by collision of two continental plates:", wordLimit: 1, correct: "Himalayas", explanation: "The lecturer says the Himalayas were formed by the collision of two continental plates." },
        { id: 39, type: "fill_blank", before: "Classic example of a transform boundary:", wordLimit: 3, correct: "San Andreas Fault", explanation: "The lecturer says the San Andreas Fault in California is a classic example of a transform boundary." },
        { id: 40, type: "fill_blank", before: "Percentage of earthquakes that occur along plate boundaries:", wordLimit: 2, correct: "90 percent", explanation: "The lecturer says approximately 90 percent of earthquakes occur along plate boundaries." },
      ],
    },
  ],
};
