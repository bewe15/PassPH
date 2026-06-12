import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening12: IELTSListeningTest = {
  id: "ielts-listening-12",
  exam: "IELTS",
  title: "IELTS Listening — Test 12",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Car Hire Enquiry",
      context: "Robert is enquiring about hiring a car. Grace, the desk assistant, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the car hire enquiry form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Grace: Good afternoon, Speedway Car Hire. Grace speaking. How can I help?

Robert: Good afternoon. I'd like to enquire about hiring a car, please.

Grace: Of course. When would you need the car from?

Robert: From the 3rd of August. I need it for six days.

Grace: And what size of vehicle are you looking for?

Robert: A medium-sized estate car, please — I'll be carrying quite a bit of luggage.

Grace: We have a Ford Focus Estate and a Vauxhall Astra Estate available during that period. The Ford Focus is £52 per day and the Vauxhall is £47 per day.

Robert: I'll go with the Vauxhall, please.

Grace: Good choice. I'll need your details. Full name?

Robert: Robert Fernsby. F-E-R-N-S-B-Y.

Grace: Date of birth?

Robert: 7th of October, 1983.

Grace: Driving licence number?

Robert: FERNS 807100 RB9HV.

Grace: How long have you held a full licence?

Robert: Fourteen years.

Grace: Perfect — our minimum requirement is two years. Home address?

Robert: 19 Marlborough Street, Bath.

Grace: Postcode?

Robert: BA1 5NE.

Grace: And a contact number?

Robert: 07734 602 118.

Grace: Will you be the only driver?

Robert: No — my brother will also be driving. Do I need to add him?

Grace: Yes, additional drivers can be added for £8 per day per person.

Robert: That's fine. Please add him.

Grace: Do you require any additional extras? Sat-nav hire is £5 per day, and a child seat is available for £4 per day.

Robert: Just the sat-nav, please.

Grace: And do you want fully comprehensive insurance or would you prefer to use your own?

Robert: I'll take the fully comprehensive from you, please.

Grace: Excellent. I'll confirm the booking by email. What's the best address?

Robert: robert.fernsby@greenpost.co.uk.

Grace: Wonderful. You'll receive a confirmation within the hour.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Hire start date:", wordLimit: 2, correct: "3rd August", explanation: "Robert says he needs the car from the 3rd of August." },
        { id: 2, type: "fill_blank", before: "Number of days hire required:", wordLimit: 1, correct: "6", explanation: "Robert says he needs the car for six days." },
        { id: 3, type: "fill_blank", before: "Vehicle type chosen:", wordLimit: 3, correct: "Vauxhall Astra Estate", explanation: "Robert chooses the Vauxhall Astra Estate at £47 per day." },
        { id: 4, type: "fill_blank", before: "Daily rate for chosen vehicle: £", wordLimit: 1, correct: "47", explanation: "Grace says the Vauxhall is £47 per day." },
        { id: 5, type: "fill_blank", before: "Customer surname:", wordLimit: 1, correct: "Fernsby", explanation: "Robert gives his surname as Fernsby." },
        { id: 6, type: "fill_blank", before: "Customer postcode:", wordLimit: 1, correct: "BA1 5NE", explanation: "Robert gives his postcode as BA1 5NE." },
        { id: 7, type: "fill_blank", before: "Years holding full licence:", wordLimit: 1, correct: "14", explanation: "Robert says he has held a full licence for fourteen years." },
        { id: 8, type: "fill_blank", before: "Additional driver daily cost per person: £", wordLimit: 1, correct: "8", explanation: "Grace says additional drivers can be added for £8 per day per person." },
        { id: 9, type: "fill_blank", before: "Extra item hired:", wordLimit: 1, correct: "sat-nav", explanation: "Robert requests just the sat-nav as an additional extra." },
        { id: 10, type: "fill_blank", before: "Customer email address:", wordLimit: 1, correct: "robert.fernsby@greenpost.co.uk", explanation: "Robert gives his email address as robert.fernsby@greenpost.co.uk." },
      ],
    },
    {
      part: 2,
      title: "Art Gallery Opening Announcement",
      context: "A gallery curator is making a public announcement about the opening of a new art gallery.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each gallery room or feature with its location within the building (A–F).",
      transcript: `
Good afternoon, everyone. I'm thrilled to welcome you to the formal opening of the Meridian Gallery — a new home for contemporary and modern art here in the heart of the city.

The Meridian Gallery has been developed over the past four years at a total cost of £9.2 million, of which £5 million was provided through Arts Council England grants. The building itself is a stunning conversion of a Grade II listed former warehouse, dating from 1887, and the architects have worked hard to preserve the original features — the exposed brickwork, the iron columns, and the magnificent roof lights.

The gallery will be open Tuesday to Sunday, from 10 am to 6 pm. Entry to the permanent collection is free of charge. Tickets for special exhibitions and events will be priced separately — details are available on our website and at the front desk. We have committed to offering free entry to schools and education groups on weekday mornings throughout the year.

Let me describe the layout. As you enter through the main door, you are standing in the Grand Atrium — a dramatic double-height space where we will display large-scale sculptural works and host special events. The permanent collection of 20th-century British art is housed in the East Wing, which runs along the right-hand side of the building as you face it. Our collection of international contemporary art is in the West Wing — on the left as you enter. The upper floor, accessed by lift and staircase, contains the photographic archive and the print room, which is open to researchers by appointment. The learning studio — where our education workshops take place — is in the basement, fully accessible by the lift. Finally, the rooftop terrace on the top floor offers views across the city and houses a café-bar open during gallery hours.

The Meridian Gallery will also host an artist-in-residence programme, with the first resident joining us in October.

I hope this will become a much-loved cultural institution for our city. Thank you all for being here today.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "How long did the gallery take to develop?", options: [{ label: "A", text: "Two years" }, { label: "B", text: "Three years" }, { label: "C", text: "Four years" }], correct: "C", explanation: "The curator says the gallery has been developed over the past four years." },
        { id: 12, type: "mc_single", stem: "What was the total cost of the gallery development?", options: [{ label: "A", text: "£5 million" }, { label: "B", text: "£7.2 million" }, { label: "C", text: "£9.2 million" }], correct: "C", explanation: "The curator says the total cost was £9.2 million." },
        { id: 13, type: "mc_single", stem: "When does the original warehouse building date from?", options: [{ label: "A", text: "1857" }, { label: "B", text: "1877" }, { label: "C", text: "1887" }], correct: "C", explanation: "The curator says the building is a conversion of a warehouse dating from 1887." },
        { id: 14, type: "mc_single", stem: "What is free of charge at the gallery?", options: [{ label: "A", text: "All exhibitions and events" }, { label: "B", text: "Entry to the permanent collection" }, { label: "C", text: "Entry to schools only" }], correct: "B", explanation: "The curator says entry to the permanent collection is free of charge." },
        { id: 15, type: "mc_single", stem: "When will the first artist-in-residence join?", options: [{ label: "A", text: "September" }, { label: "B", text: "October" }, { label: "C", text: "November" }], correct: "B", explanation: "The curator says the first artist-in-residence will join in October." },
        { id: 16, type: "mc_single", stem: "The Grand Atrium (large-scale sculptures)", options: [{ label: "A", text: "Main entrance area" }, { label: "B", text: "East Wing — right side" }, { label: "C", text: "West Wing — left side" }, { label: "D", text: "Upper floor" }, { label: "E", text: "Basement" }, { label: "F", text: "Top floor — rooftop" }], correct: "A", explanation: "The curator says the Grand Atrium is the space visitors enter first through the main door." },
        { id: 17, type: "mc_single", stem: "The permanent collection of 20th-century British art", options: [{ label: "A", text: "Main entrance area" }, { label: "B", text: "East Wing — right side" }, { label: "C", text: "West Wing — left side" }, { label: "D", text: "Upper floor" }, { label: "E", text: "Basement" }, { label: "F", text: "Top floor — rooftop" }], correct: "B", explanation: "The curator says the permanent collection is in the East Wing on the right-hand side." },
        { id: 18, type: "mc_single", stem: "The international contemporary art collection", options: [{ label: "A", text: "Main entrance area" }, { label: "B", text: "East Wing — right side" }, { label: "C", text: "West Wing — left side" }, { label: "D", text: "Upper floor" }, { label: "E", text: "Basement" }, { label: "F", text: "Top floor — rooftop" }], correct: "C", explanation: "The curator says the international contemporary art collection is in the West Wing on the left as you enter." },
        { id: 19, type: "mc_single", stem: "The learning studio (education workshops)", options: [{ label: "A", text: "Main entrance area" }, { label: "B", text: "East Wing — right side" }, { label: "C", text: "West Wing — left side" }, { label: "D", text: "Upper floor" }, { label: "E", text: "Basement" }, { label: "F", text: "Top floor — rooftop" }], correct: "E", explanation: "The curator says the learning studio is in the basement, accessible by lift." },
        { id: 20, type: "mc_single", stem: "The café-bar with city views", options: [{ label: "A", text: "Main entrance area" }, { label: "B", text: "East Wing — right side" }, { label: "C", text: "West Wing — left side" }, { label: "D", text: "Upper floor" }, { label: "E", text: "Basement" }, { label: "F", text: "Top floor — rooftop" }], correct: "F", explanation: "The curator says the rooftop terrace on the top floor houses a café-bar open during gallery hours." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Marine Biology Project",
      context: "Students Lily and Patrick are meeting with their tutor, Dr Sharma, to discuss their marine biology project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Sharma: Good morning, Lily, Patrick. Let's hear how the marine biology project is progressing.

Lily: We've been studying the behavioural adaptations of cephalopods — specifically octopuses and cuttlefish — to environmental stressors. We've been focusing on two stressors: temperature increase and ocean acidification.

Patrick: We designed a controlled lab experiment over eight weeks. We kept ten specimens of each species under control conditions, and then exposed a further ten specimens of each to conditions simulating projected ocean temperatures and pH levels for the year 2100.

Dr Sharma: What were your predictions going in?

Lily: We predicted that both temperature and acidification would negatively affect behaviour — specifically foraging efficiency and predator avoidance responses.

Dr Sharma: And what did you actually find?

Patrick: The results were more nuanced than we expected. Temperature had a significant negative effect on foraging efficiency in both species — octopuses showed a 28 percent reduction and cuttlefish showed a 22 percent reduction.

Lily: But the response to acidification was quite different. Cuttlefish were significantly more affected — they showed a marked increase in anxiety-related behaviours, spending 40 percent more time in sheltered positions. Octopuses, interestingly, showed almost no behavioural change in response to acidification alone.

Dr Sharma: That species difference is quite significant. Can you explain it?

Patrick: We think it may relate to the difference in their respiratory proteins. Cuttlefish have a cuttlebone which is more sensitive to pH changes, and their blood pH regulatory mechanisms appear less robust than those of octopuses.

Dr Sharma: That's a well-reasoned hypothesis. Were there any methodological issues?

Lily: We had one major issue — two of our cuttlefish specimens died in week five, which reduced our sample size slightly for the latter half of the experiment.

Patrick: We also found it difficult to control for individual variation — cephalopods are highly intelligent animals with distinct individual personalities, so behavioural variability between individuals was quite high.

Dr Sharma: Both worth noting as limitations. How are you planning to present your data?

Lily: We'll use video analysis software to quantify the behavioural data — it records time spent in different activities automatically.

Patrick: And we'll present the statistical results using a combination of bar charts and box plots to show both averages and the spread of individual variation.

Dr Sharma: Good approach. I'd also recommend you discuss the implications of your findings for cephalopod population management in a warming ocean. That would strengthen your conclusion considerably.

Lily: We'll add that in. Thank you, Dr Sharma.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "Which two species are the focus of their study?", options: [{ label: "A", text: "Squid and nautilus" }, { label: "B", text: "Octopuses and cuttlefish" }, { label: "C", text: "Octopuses and squid" }], correct: "B", explanation: "Lily says they are studying octopuses and cuttlefish." },
        { id: 22, type: "mc_single", stem: "How long did the controlled experiment run?", options: [{ label: "A", text: "Four weeks" }, { label: "B", text: "Six weeks" }, { label: "C", text: "Eight weeks" }], correct: "C", explanation: "Patrick says the experiment ran over eight weeks." },
        { id: 23, type: "mc_single", stem: "How many specimens of each species were in the control group?", options: [{ label: "A", text: "Five" }, { label: "B", text: "Ten" }, { label: "C", text: "Twenty" }], correct: "B", explanation: "Patrick says they kept ten specimens of each species under control conditions." },
        { id: 24, type: "mc_single", stem: "By how much did octopuses' foraging efficiency reduce under increased temperature?", options: [{ label: "A", text: "22 percent" }, { label: "B", text: "28 percent" }, { label: "C", text: "40 percent" }], correct: "B", explanation: "Patrick says octopuses showed a 28 percent reduction in foraging efficiency." },
        { id: 25, type: "mc_single", stem: "How did cuttlefish respond to ocean acidification?", options: [{ label: "A", text: "They showed almost no behavioural change" }, { label: "B", text: "They spent 40 percent more time in sheltered positions" }, { label: "C", text: "Their foraging efficiency increased" }], correct: "B", explanation: "Lily says cuttlefish showed a marked increase in anxiety-related behaviours, spending 40 percent more time in sheltered positions." },
        { id: 26, type: "mc_single", stem: "What does Dr Sharma suggest adding to the conclusion?", options: [{ label: "A", text: "A comparison with squid behaviour" }, { label: "B", text: "Implications for cephalopod population management in a warming ocean" }, { label: "C", text: "More data on temperature effects" }], correct: "B", explanation: "Dr Sharma recommends discussing the implications of the findings for cephalopod population management in a warming ocean." },
        { id: 27, type: "mc_multiple", stem: "Which TWO methodological issues did the students encounter?", options: [{ label: "A", text: "Equipment failure" }, { label: "B", text: "Two cuttlefish specimens died in week five" }, { label: "C", text: "High behavioural variability between individual animals" }, { label: "D", text: "Difficulty sourcing specimens" }, { label: "E", text: "Laboratory temperature fluctuations" }], pickCount: 2, correct: ["B", "C"], explanation: "Lily mentions two cuttlefish died in week five; Patrick notes difficulty controlling for individual variation due to high behavioural variability." },
        { id: 28, type: "mc_multiple", stem: "Which TWO types of chart will they use to present their statistical results?", options: [{ label: "A", text: "Scatter plots" }, { label: "B", text: "Bar charts" }, { label: "C", text: "Pie charts" }, { label: "D", text: "Box plots" }, { label: "E", text: "Line graphs" }], pickCount: 2, correct: ["B", "D"], explanation: "Patrick says they will use a combination of bar charts and box plots." },
        { id: 29, type: "mc_single", stem: "What explanation do the students offer for the species difference in response to acidification?", options: [{ label: "A", text: "Octopuses are more intelligent than cuttlefish" }, { label: "B", text: "Cuttlefish have a more robust immune system" }, { label: "C", text: "Differences in respiratory proteins and pH regulatory mechanisms" }], correct: "C", explanation: "Patrick says the difference may relate to their respiratory proteins and blood pH regulatory mechanisms." },
        { id: 30, type: "mc_single", stem: "What software will they use to quantify behavioural data?", options: [{ label: "A", text: "Statistical analysis software" }, { label: "B", text: "Video analysis software" }, { label: "C", text: "Tracking and GPS software" }], correct: "B", explanation: "Lily says they will use video analysis software to quantify the behavioural data." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Supervolcanoes",
      context: "A university lecturer is giving a specialist lecture on supervolcanoes — their formation, history, and global impact.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning. Today we're turning from the general science of volcanic activity to a specific and particularly dramatic category — supervolcanoes. Unlike the stratovolcanoes and shield volcanoes we've discussed in earlier sessions, supervolcanoes do not typically form the classic cone-shaped mountains we associate with ordinary volcanoes. Instead, they create vast depressions in the Earth's crust called calderas — formed when an enormous magma chamber empties and the ground above collapses.

The threshold for a supervolcanic eruption is a score of 8 on the Volcanic Explosivity Index — meaning an eruption that ejects at least 1,000 cubic kilometres of material. To put that in perspective, the 1815 Tambora eruption, which we discussed previously, ejected approximately 160 cubic kilometres and scored a VEI of 7. A full supervolcanic eruption would be in a different category entirely.

There are around 20 known supervolcanic systems on Earth. The most famous in the popular imagination is Yellowstone, in the western United States. The Yellowstone caldera is approximately 55 kilometres long and 72 kilometres wide — large enough to contain cities. Beneath it lies a magma chamber that is believed to be partially molten, though the proportion of actual melt within it is a matter of active scientific debate.

Yellowstone has experienced three major supervolcanic eruptions in its history — approximately 2.1 million years ago, 1.3 million years ago, and 640,000 years ago. This gives an average inter-eruption interval of around 730,000 years, which has led to some sensationalist media coverage suggesting that Yellowstone is "overdue" for an eruption. Volcanologists generally consider such claims to be misleading — eruption cycles are not clockwork, and current monitoring does not indicate elevated risk.

Other notable supervolcanic systems include Toba in Indonesia, which erupted approximately 74,000 years ago in what is thought to be the largest eruption in the last 2 million years. The Toba eruption ejected an estimated 2,800 cubic kilometres of material. Some researchers have proposed that this eruption caused a prolonged volcanic winter lasting six to ten years, which may have caused a severe population bottleneck in early human populations — reducing the global human population to as few as 10,000 individuals. However, this "Toba catastrophe hypothesis" remains contested.

The Campi Flegrei caldera near Naples in Italy is another closely monitored system. It has shown signs of ground uplift in recent decades, a phenomenon known as bradyseism — caused by movement of hydrothermal fluids and gases beneath the surface rather than necessarily indicating imminent eruption.

Monitoring supervolcanoes requires a dense network of seismometers, GPS ground deformation sensors, and satellite InSAR measurements — which can detect millimetre-scale changes in ground surface elevation. Yellowstone is monitored by the Yellowstone Volcano Observatory, which issues regular updates.

Thank you. In our next session we'll compare the geological settings of different supervolcanic systems around the world.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Type of depression formed by a supervolcanic eruption:", wordLimit: 1, correct: "caldera", explanation: "The lecturer says supervolcanoes create vast depressions called calderas." },
        { id: 32, type: "fill_blank", before: "Minimum VEI score for a supervolcanic eruption:", wordLimit: 1, correct: "8", explanation: "The lecturer says the threshold for a supervolcanic eruption is a score of 8 on the VEI." },
        { id: 33, type: "fill_blank", before: "Minimum volume of material ejected by a supervolcanic eruption:", wordLimit: 3, correct: "1000 cubic kilometres", explanation: "The lecturer says a supervolcanic eruption ejects at least 1,000 cubic kilometres of material." },
        { id: 34, type: "fill_blank", before: "Volume ejected by the 1815 Tambora eruption:", wordLimit: 3, correct: "160 cubic kilometres", explanation: "The lecturer says the Tambora eruption ejected approximately 160 cubic kilometres." },
        { id: 35, type: "fill_blank", before: "Approximate length of the Yellowstone caldera (km):", wordLimit: 1, correct: "55", explanation: "The lecturer says the Yellowstone caldera is approximately 55 kilometres long." },
        { id: 36, type: "fill_blank", before: "Number of major eruptions Yellowstone has experienced:", wordLimit: 1, correct: "3", explanation: "The lecturer says Yellowstone has experienced three major supervolcanic eruptions." },
        { id: 37, type: "fill_blank", before: "Volume ejected by the Toba eruption:", wordLimit: 3, correct: "2800 cubic kilometres", explanation: "The lecturer says the Toba eruption ejected an estimated 2,800 cubic kilometres of material." },
        { id: 38, type: "fill_blank", before: "Estimated minimum global human population after Toba eruption:", wordLimit: 1, correct: "10,000", explanation: "The lecturer says some researchers suggest the Toba eruption may have reduced the global human population to as few as 10,000 individuals." },
        { id: 39, type: "fill_blank", before: "Term for ground uplift at Campi Flegrei:", wordLimit: 1, correct: "bradyseism", explanation: "The lecturer says the phenomenon of ground uplift at Campi Flegrei is called bradyseism." },
        { id: 40, type: "fill_blank", before: "Organisation that monitors Yellowstone:", wordLimit: 4, correct: "Yellowstone Volcano Observatory", explanation: "The lecturer says Yellowstone is monitored by the Yellowstone Volcano Observatory." },
      ],
    },
  ],
};
