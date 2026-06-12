import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening7: IELTSListeningTest = {
  id: "ielts-listening-7",
  exam: "IELTS",
  title: "IELTS Listening — Test 7",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Community Centre Activity Registration",
      context: "Greg is registering for activities at a community centre. Carol, the administrator, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the registration form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Carol: Good morning, Millbrook Community Centre, how can I help you?

Greg: Hello, I'd like to register as a member and sign up for some activities, please.

Carol: Of course. Let me take your details. Full name first?

Greg: Gregory Webb. That's W-E-B-B.

Carol: And your age, Mr Webb?

Greg: I'm 34.

Carol: What's your home address?

Greg: 7 Primrose Lane, Millbrook.

Carol: Postcode?

Greg: ML4 8RN.

Carol: And a contact number?

Greg: My mobile is 07563 229 401.

Carol: Which activities are you interested in?

Greg: I'd like to do yoga and badminton. Are those both available?

Carol: Yes, both are available. Yoga is on Monday evenings at 7 pm. Badminton is on Wednesday and Friday afternoons at 4 pm.

Greg: That suits me well. How much is the membership?

Carol: The standard annual membership is £45. You can also add a family membership for an extra £30 per year.

Greg: I'll just go with the standard for now.

Carol: Will you be paying by card or cash today?

Greg: By card, please.

Carol: Excellent. Are there any medical conditions we should be aware of for your activity bookings?

Greg: Yes — I have a mild knee injury, so I should avoid high-impact exercise for now.

Carol: I'll note that. We'll make sure your yoga instructor is informed. Would you also like to receive our monthly newsletter by email?

Greg: Yes please. My email address is greg.webb@quickmail.co.uk.

Carol: Lovely. Your membership card will be ready in about three working days. Shall we post it to your Primrose Lane address?

Greg: Yes, that would be great. Thank you, Carol.

Carol: Thank you. Enjoy the classes!
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Member surname:", wordLimit: 1, correct: "Webb", explanation: "Greg gives his surname as Webb." },
        { id: 2, type: "fill_blank", before: "Member age:", wordLimit: 1, correct: "34", explanation: "Greg says he is 34." },
        { id: 3, type: "fill_blank", before: "Home postcode:", wordLimit: 1, correct: "ML4 8RN", explanation: "Greg gives his postcode as ML4 8RN." },
        { id: 4, type: "fill_blank", before: "Mobile number:", wordLimit: 2, correct: "07563 229 401", explanation: "Greg gives his mobile number as 07563 229 401." },
        { id: 5, type: "fill_blank", before: "First activity chosen:", wordLimit: 1, correct: "yoga", explanation: "Greg says he would like to do yoga." },
        { id: 6, type: "fill_blank", before: "Second activity chosen:", wordLimit: 1, correct: "badminton", explanation: "Greg says he would also like to do badminton." },
        { id: 7, type: "fill_blank", before: "Yoga session day and time:", wordLimit: 3, correct: "Monday evenings 7 pm", explanation: "Carol says yoga is on Monday evenings at 7 pm." },
        { id: 8, type: "fill_blank", before: "Standard annual membership fee: £", wordLimit: 1, correct: "45", explanation: "Carol says the standard annual membership is £45." },
        { id: 9, type: "fill_blank", before: "Medical condition noted:", wordLimit: 3, correct: "mild knee injury", explanation: "Greg says he has a mild knee injury and should avoid high-impact exercise." },
        { id: 10, type: "fill_blank", before: "Email address:", wordLimit: 1, correct: "greg.webb@quickmail.co.uk", explanation: "Greg gives his email address as greg.webb@quickmail.co.uk." },
      ],
    },
    {
      part: 2,
      title: "Wildlife Sanctuary Guided Tour",
      context: "A warden is leading visitors on a guided tour of a wildlife sanctuary.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each animal or habitat with its location in the sanctuary (A–F).",
      transcript: `
Good morning and welcome to Ferndale Wildlife Sanctuary. My name is Rachel and I'll be your guide today. We have a wonderful two-hour tour planned for you, so let's get started.

Ferndale covers 240 hectares of mixed habitat including woodland, wetland, and open grassland. The sanctuary was established in 1987 following a conservation campaign led by a local naturalist. We currently care for over 180 species of resident wildlife, as well as providing a seasonal home for migratory birds.

Before we set off, a few practical notes. Please keep to the marked paths at all times — this is for your own safety and to protect nesting areas. Feeding the animals is strictly prohibited, as many species here are on carefully managed diets. Photographs are welcome everywhere except in the raptor enclosure, where flash can disturb the birds.

Our admission charges are £8.50 for adults and £4 for children under twelve. Family tickets covering two adults and up to three children are available for £22.

Now let me tell you about what you'll find in different parts of the sanctuary. As we enter the main gate, you'll see the Red Squirrel Reserve on your left — a particular pride of ours, as we've successfully reintroduced this species to the area. Just beyond that, on the right, is the Wetland Bird Centre, where you can observe herons, kingfishers, and a range of waterfowl from our elevated viewing platform. The Deer Meadow is located in the central part of the sanctuary — follow the oak trail from the visitor centre. Our Owl Sanctuary is in the north-east corner, and there are guided feeding demonstrations there at 2 pm daily. The Bat Cave experience is situated in the old limestone quarry at the south end of the site. Finally, the Butterfly Garden is just behind the main visitor centre.

We'll be visiting most of these areas today. If you need to use the facilities, there are toilets near the visitor centre and at the midpoint of the tour near the Deer Meadow. Let's make a start!
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "How large is Ferndale Wildlife Sanctuary?", options: [{ label: "A", text: "140 hectares" }, { label: "B", text: "200 hectares" }, { label: "C", text: "240 hectares" }], correct: "C", explanation: "Rachel says Ferndale covers 240 hectares of mixed habitat." },
        { id: 12, type: "mc_single", stem: "When was the sanctuary established?", options: [{ label: "A", text: "1977" }, { label: "B", text: "1987" }, { label: "C", text: "1997" }], correct: "B", explanation: "Rachel says the sanctuary was established in 1987." },
        { id: 13, type: "mc_single", stem: "Where is photography NOT permitted?", options: [{ label: "A", text: "The Wetland Bird Centre" }, { label: "B", text: "The Raptor enclosure" }, { label: "C", text: "The Bat Cave" }], correct: "B", explanation: "Rachel says photographs are not welcome in the raptor enclosure as flash can disturb the birds." },
        { id: 14, type: "mc_single", stem: "What is the adult admission price?", options: [{ label: "A", text: "£7.50" }, { label: "B", text: "£8.00" }, { label: "C", text: "£8.50" }], correct: "C", explanation: "Rachel says admission is £8.50 for adults." },
        { id: 15, type: "mc_single", stem: "What time are the owl feeding demonstrations?", options: [{ label: "A", text: "12 pm" }, { label: "B", text: "1 pm" }, { label: "C", text: "2 pm" }], correct: "C", explanation: "Rachel says there are guided feeding demonstrations at the Owl Sanctuary at 2 pm daily." },
        { id: 16, type: "mc_single", stem: "The Red Squirrel Reserve", options: [{ label: "A", text: "Left of the main gate" }, { label: "B", text: "Right of the main gate" }, { label: "C", text: "Central area — oak trail" }, { label: "D", text: "North-east corner" }, { label: "E", text: "South end — old quarry" }, { label: "F", text: "Behind the visitor centre" }], correct: "A", explanation: "Rachel says the Red Squirrel Reserve is on the left as you enter the main gate." },
        { id: 17, type: "mc_single", stem: "The Wetland Bird Centre", options: [{ label: "A", text: "Left of the main gate" }, { label: "B", text: "Right of the main gate" }, { label: "C", text: "Central area — oak trail" }, { label: "D", text: "North-east corner" }, { label: "E", text: "South end — old quarry" }, { label: "F", text: "Behind the visitor centre" }], correct: "B", explanation: "Rachel says the Wetland Bird Centre is just beyond the Red Squirrel Reserve on the right." },
        { id: 18, type: "mc_single", stem: "The Deer Meadow", options: [{ label: "A", text: "Left of the main gate" }, { label: "B", text: "Right of the main gate" }, { label: "C", text: "Central area — oak trail" }, { label: "D", text: "North-east corner" }, { label: "E", text: "South end — old quarry" }, { label: "F", text: "Behind the visitor centre" }], correct: "C", explanation: "Rachel says the Deer Meadow is in the central part of the sanctuary — follow the oak trail." },
        { id: 19, type: "mc_single", stem: "The Bat Cave", options: [{ label: "A", text: "Left of the main gate" }, { label: "B", text: "Right of the main gate" }, { label: "C", text: "Central area — oak trail" }, { label: "D", text: "North-east corner" }, { label: "E", text: "South end — old quarry" }, { label: "F", text: "Behind the visitor centre" }], correct: "E", explanation: "Rachel says the Bat Cave experience is in the old limestone quarry at the south end of the site." },
        { id: 20, type: "mc_single", stem: "The Butterfly Garden", options: [{ label: "A", text: "Left of the main gate" }, { label: "B", text: "Right of the main gate" }, { label: "C", text: "Central area — oak trail" }, { label: "D", text: "North-east corner" }, { label: "E", text: "South end — old quarry" }, { label: "F", text: "Behind the visitor centre" }], correct: "F", explanation: "Rachel says the Butterfly Garden is just behind the main visitor centre." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Civil Engineering Project",
      context: "Students Mia and Daniel are meeting with their tutor, Professor Taylor, to discuss their civil engineering project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Professor Taylor: Good afternoon, Mia, Daniel. Let's talk about where you are with the bridge design project.

Mia: We've made really good progress. We've settled on a cable-stayed design for our 150-metre span crossing.

Daniel: We chose cable-stayed over suspension because it's more cost-effective at that span length and it offers better resistance to lateral wind loads.

Professor Taylor: That's sound reasoning. How did you arrive at those conclusions?

Mia: We ran comparative stress analyses using structural analysis software. We modelled three different bridge types and compared them against five performance criteria.

Professor Taylor: Good approach. What performance criteria did you use?

Daniel: Deflection under maximum load, wind resistance, construction cost, maintenance requirements, and seismic performance.

Professor Taylor: Thorough. What material did you select for the main deck?

Mia: Composite steel and concrete. The concrete provides compressive strength and the steel provides tensile strength — it gives the best overall performance-to-weight ratio.

Professor Taylor: Agreed. What challenges have you encountered?

Daniel: The main challenge has been calculating the precise cable tension forces. We had to iterate the model seventeen times before we got a stable solution.

Mia: And we spent longer than expected on the foundation design because the ground data showed unexpected clay deposits at 8 metres depth, which affected our load transfer assumptions.

Professor Taylor: Those are both realistic engineering challenges. How are you splitting the work for the final report?

Mia: I'm writing the structural analysis section and the materials justification.

Daniel: And I'm covering the foundation design and the cost estimation.

Professor Taylor: What about the executive summary?

Mia: We'll write that together.

Professor Taylor: Good. One thing I want to flag — your load factor assumptions in the preliminary calculations appear to be based on older British Standards. You should update those to the current Eurocode figures.

Daniel: We'll do that immediately.

Professor Taylor: When is your final submission?

Mia: The report is due in three weeks. The presentation is two weeks after that.

Professor Taylor: Plenty of time if you stay on schedule. Well done, both of you.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What type of bridge design did Mia and Daniel choose?", options: [{ label: "A", text: "Suspension bridge" }, { label: "B", text: "Cable-stayed bridge" }, { label: "C", text: "Arch bridge" }], correct: "B", explanation: "Mia says they have settled on a cable-stayed design." },
        { id: 22, type: "mc_single", stem: "What is the span length of their bridge?", options: [{ label: "A", text: "100 metres" }, { label: "B", text: "120 metres" }, { label: "C", text: "150 metres" }], correct: "C", explanation: "Mia says the bridge has a 150-metre span crossing." },
        { id: 23, type: "mc_single", stem: "How many performance criteria did they compare the bridge types against?", options: [{ label: "A", text: "Three" }, { label: "B", text: "Four" }, { label: "C", text: "Five" }], correct: "C", explanation: "Mia says they compared the bridge types against five performance criteria." },
        { id: 24, type: "mc_single", stem: "What material was selected for the main deck?", options: [{ label: "A", text: "Reinforced concrete only" }, { label: "B", text: "Steel only" }, { label: "C", text: "Composite steel and concrete" }], correct: "C", explanation: "Mia says they selected composite steel and concrete for the main deck." },
        { id: 25, type: "mc_single", stem: "How many times did they iterate the cable tension model?", options: [{ label: "A", text: "Seven times" }, { label: "B", text: "Twelve times" }, { label: "C", text: "Seventeen times" }], correct: "C", explanation: "Daniel says they had to iterate the model seventeen times before getting a stable solution." },
        { id: 26, type: "mc_single", stem: "What does Professor Taylor tell them to update in their calculations?", options: [{ label: "A", text: "Material strength values" }, { label: "B", text: "Load factor assumptions to current Eurocode figures" }, { label: "C", text: "Cable tension calculations" }], correct: "B", explanation: "Professor Taylor says their load factor assumptions should be updated to current Eurocode figures." },
        { id: 27, type: "mc_multiple", stem: "Which TWO challenges did the students encounter during the project?", options: [{ label: "A", text: "Difficulties with structural analysis software" }, { label: "B", text: "Calculating precise cable tension forces" }, { label: "C", text: "Unexpected clay deposits in the ground data" }, { label: "D", text: "Budget overruns" }, { label: "E", text: "Disagreement over bridge type selection" }], pickCount: 2, correct: ["B", "C"], explanation: "Daniel mentions difficulties calculating cable tension forces; Mia mentions unexpected clay deposits at 8 metres depth." },
        { id: 28, type: "mc_multiple", stem: "Which TWO sections is Mia responsible for writing?", options: [{ label: "A", text: "Structural analysis section" }, { label: "B", text: "Foundation design" }, { label: "C", text: "Cost estimation" }, { label: "D", text: "Materials justification" }, { label: "E", text: "Executive summary alone" }], pickCount: 2, correct: ["A", "D"], explanation: "Mia says she is writing the structural analysis section and the materials justification." },
        { id: 29, type: "mc_single", stem: "When is the final report due?", options: [{ label: "A", text: "In one week" }, { label: "B", text: "In two weeks" }, { label: "C", text: "In three weeks" }], correct: "C", explanation: "Mia says the report is due in three weeks." },
        { id: 30, type: "mc_single", stem: "Who will write the executive summary?", options: [{ label: "A", text: "Mia alone" }, { label: "B", text: "Daniel alone" }, { label: "C", text: "Both together" }], correct: "C", explanation: "Mia says they will write the executive summary together." },
      ],
    },
    {
      part: 4,
      title: "Lecture: The Ancient Silk Road Trade Routes",
      context: "A university lecturer is delivering a talk on the history and significance of the ancient Silk Road.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today I want to take you back two millennia to explore one of the most remarkable trade networks in human history — the Silk Road.

The term "Silk Road" was actually coined not by ancient traders but by the German geographer Ferdinand von Richthofen in 1877. The network itself began operating around the 2nd century BCE, during the Han Dynasty in China. At its peak, it linked China in the east with Rome in the west, spanning a distance of approximately 7,000 kilometres.

The name might suggest that silk was the only commodity traded, but in reality the Silk Road carried an extraordinary range of goods. From east to west, Chinese merchants exported silk, porcelain, and tea. From west to east, traders brought glassware, wool, gold, and — critically — horses, which were highly prized by Chinese emperors for military purposes.

But the Silk Road was far more than a commercial network. It was a conduit for ideas, religions, technologies, and diseases. Buddhism spread from India into Central Asia and China largely along these routes, reaching its peak influence in China during the Tang Dynasty — roughly the 7th to 10th centuries CE. Islam also spread westward and eastward through Silk Road merchants.

The exchange of technology was equally significant. Paper, invented in China, spread westward along the Silk Road, reaching Europe by the 12th century. Gunpowder, also a Chinese invention, followed a similar path. In the other direction, the cultivation of cotton and the technique of glassblowing spread eastward.

The Black Death — the devastating plague of the 14th century — is also believed to have spread from Central Asia to Europe along Silk Road routes. Within a decade of reaching Europe in 1347, it had killed approximately one third of the continent's population.

The Silk Road declined in the 15th century with the rise of maritime trade routes connecting Europe directly with Asia by sea. These sea routes were faster and capable of carrying far greater volumes of goods.

The legacy of the Silk Road remains visible today in shared artistic styles, shared crops, and the mixing of populations across Eurasia.

Thank you. Next week we'll look at the Indian Ocean trade network.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Person who coined the term 'Silk Road':", wordLimit: 3, correct: "Ferdinand von Richthofen", explanation: "The lecturer says the term was coined by the German geographer Ferdinand von Richthofen in 1877." },
        { id: 32, type: "fill_blank", before: "Century when the Silk Road began operating:", wordLimit: 3, correct: "2nd century BCE", explanation: "The lecturer says the network began around the 2nd century BCE." },
        { id: 33, type: "fill_blank", before: "Dynasty during which the Silk Road began:", wordLimit: 2, correct: "Han Dynasty", explanation: "The lecturer says it began during the Han Dynasty in China." },
        { id: 34, type: "fill_blank", before: "Approximate total distance of the Silk Road:", wordLimit: 2, correct: "7,000 kilometres", explanation: "The lecturer says the network spanned approximately 7,000 kilometres." },
        { id: 35, type: "fill_blank", before: "Item from the west highly prized by Chinese emperors:", wordLimit: 1, correct: "horses", explanation: "The lecturer says horses were brought from west to east and were highly prized by Chinese emperors for military purposes." },
        { id: 36, type: "fill_blank", before: "Religion that spread from India into China via the Silk Road:", wordLimit: 1, correct: "Buddhism", explanation: "The lecturer says Buddhism spread from India into Central Asia and China largely along Silk Road routes." },
        { id: 37, type: "fill_blank", before: "Century in which paper reached Europe:", wordLimit: 2, correct: "12th century", explanation: "The lecturer says paper spread westward along the Silk Road, reaching Europe by the 12th century." },
        { id: 38, type: "fill_blank", before: "Disease that spread along the Silk Road to Europe:", wordLimit: 2, correct: "Black Death", explanation: "The lecturer says the Black Death is believed to have spread from Central Asia to Europe along Silk Road routes." },
        { id: 39, type: "fill_blank", before: "Year the plague reached Europe:", wordLimit: 1, correct: "1347", explanation: "The lecturer says the Black Death reached Europe in 1347." },
        { id: 40, type: "fill_blank", before: "Proportion of Europe's population killed by plague within a decade:", wordLimit: 3, correct: "one third", explanation: "The lecturer says the plague killed approximately one third of Europe's population within a decade of reaching the continent." },
      ],
    },
  ],
};
