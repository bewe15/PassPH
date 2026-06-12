import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening5: IELTSListeningTest = {
  id: "ielts-listening-5",
  exam: "IELTS",
  title: "IELTS Listening — Test 5",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Language School Enrollment",
      context: "Carlos is enrolling at a language school. Lucy, the receptionist, is taking his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the enrollment form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Lucy: Good morning, Welcome to Brightside Language School. How can I help you?

Carlos: Hello, I'd like to enroll for an English course, please.

Lucy: Of course. Let me take your details. What's your full name?

Carlos: Carlos Mendez. M-E-N-D-E-Z.

Lucy: Thank you, Mr Mendez. And your date of birth?

Carlos: The 14th of March, 1996.

Lucy: What's your nationality?

Carlos: I'm Mexican.

Lucy: And what level would you like to study at? We have beginner, intermediate, and advanced.

Carlos: I'd say intermediate. I've been learning English for three years.

Lucy: Excellent. Our intermediate course runs on Tuesday and Thursday evenings, from 6 to 8 pm. Does that suit you?

Carlos: Yes, that's perfect. How long is the course?

Lucy: It's twelve weeks. The next one starts on the 7th of September.

Lucy: And how did you hear about us?

Carlos: Through a friend. He recommended you.

Lucy: Lovely. The course fee is £480, and we require a deposit of £60 to secure your place.

Carlos: That's fine. Do you need my address?

Lucy: Yes please.

Carlos: It's Flat 3, 22 Blenheim Road, Oxford.

Lucy: Postcode?

Carlos: OX2 7AP.

Lucy: And a contact number?

Carlos: 07821 334 556.

Lucy: We'll send you a confirmation email. What's your email address?

Carlos: It's carlos.mendez@mailpro.com.

Lucy: Great. And do you have any special requirements? For instance, do you need a student visa letter?

Carlos: Yes, I do need a visa letter, please.

Lucy: We can arrange that. It normally takes about five working days. Is there anything else I can help you with today?

Carlos: No, I think that covers everything. Thank you, Lucy.

Lucy: Thank you, Carlos. We look forward to seeing you on the 7th.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Student surname:", wordLimit: 1, correct: "Mendez", explanation: "Carlos gives his surname as Mendez." },
        { id: 2, type: "fill_blank", before: "Date of birth:", wordLimit: 3, correct: "14th March 1996", explanation: "Carlos says his date of birth is the 14th of March, 1996." },
        { id: 3, type: "fill_blank", before: "Nationality:", wordLimit: 1, correct: "Mexican", explanation: "Carlos says he is Mexican." },
        { id: 4, type: "fill_blank", before: "Course level:", wordLimit: 1, correct: "intermediate", explanation: "Carlos says he would like to study at intermediate level." },
        { id: 5, type: "fill_blank", before: "Course duration (weeks):", wordLimit: 1, correct: "12", explanation: "Lucy says the course is twelve weeks long." },
        { id: 6, type: "fill_blank", before: "Course start date:", wordLimit: 3, correct: "7th September", explanation: "Lucy says the next course starts on the 7th of September." },
        { id: 7, type: "fill_blank", before: "Total course fee: £", wordLimit: 1, correct: "480", explanation: "Lucy says the course fee is £480." },
        { id: 8, type: "fill_blank", before: "Deposit amount: £", wordLimit: 1, correct: "60", explanation: "Lucy says a deposit of £60 is required." },
        { id: 9, type: "fill_blank", before: "Student postcode:", wordLimit: 1, correct: "OX2 7AP", explanation: "Carlos gives his postcode as OX2 7AP." },
        { id: 10, type: "fill_blank", before: "Special requirement:", wordLimit: 2, correct: "visa letter", explanation: "Carlos says he needs a student visa letter." },
      ],
    },
    {
      part: 2,
      title: "Ancient Egypt Museum Guided Tour",
      context: "A guide is leading a group around an Ancient Egypt exhibition at a museum.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each exhibit with its location in the museum (A–F).",
      transcript: `
Welcome, everyone, to the Ancient Egypt Gallery here at the National Heritage Museum. I'll be your guide today, and I hope you find this collection as fascinating as I do.

We'll begin with a brief overview. Ancient Egyptian civilisation lasted for more than 3,000 years, making it one of the longest-lived cultures in world history. At its height, Egypt was home to around 5 million people.

The collection here includes over 2,000 artefacts, ranging from everyday household objects to ceremonial pieces used in royal burials. The museum acquired most of these items during the 19th century, when archaeological expeditions in the Nile Valley were at their peak.

Let me tell you a little about what you'll see today. Photography is permitted throughout the gallery, but please do not use flash, as this can damage the pigments on ancient artefacts. Audio guides are available from the information desk for £3.50, and a printed guidebook is on sale in the gift shop for £7.

Now, let me point out where specific items are located. The famous Rosetta Stone replica is displayed in Room A, our central hall. The collection of royal mummies is housed in Room B, the climate-controlled wing on your left. Our impressive display of ancient jewellery and personal adornments can be found in Room C, directly ahead of you. The model of a traditional Egyptian village, complete with animated figures, is set up in Room D, on the upper floor. The section on Egyptian writing and hieroglyphics is in Room E, the small gallery at the far end of the corridor. And finally, our newest addition — a reconstructed burial chamber — is located in Room F, in the basement level.

Please keep in mind that the basement gallery has limited capacity, so entry is timed. Tickets for that section are available at the desk by the lift.

The tour will take approximately 90 minutes. If at any point you have questions, please do not hesitate to ask. Let us begin.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "How long did Ancient Egyptian civilisation last?", options: [{ label: "A", text: "More than 1,000 years" }, { label: "B", text: "More than 2,000 years" }, { label: "C", text: "More than 3,000 years" }], correct: "C", explanation: "The guide says Ancient Egyptian civilisation lasted for more than 3,000 years." },
        { id: 12, type: "mc_single", stem: "How many artefacts does the collection include?", options: [{ label: "A", text: "Around 1,000" }, { label: "B", text: "Over 2,000" }, { label: "C", text: "Over 5,000" }], correct: "B", explanation: "The guide says the collection includes over 2,000 artefacts." },
        { id: 13, type: "mc_single", stem: "Why must visitors not use flash photography?", options: [{ label: "A", text: "It disturbs other visitors" }, { label: "B", text: "It can damage the pigments on artefacts" }, { label: "C", text: "It is against museum regulations" }], correct: "B", explanation: "The guide says flash can damage the pigments on ancient artefacts." },
        { id: 14, type: "mc_single", stem: "How much does a printed guidebook cost?", options: [{ label: "A", text: "£3.50" }, { label: "B", text: "£5.00" }, { label: "C", text: "£7.00" }], correct: "C", explanation: "The guide says a printed guidebook is on sale in the gift shop for £7." },
        { id: 15, type: "mc_single", stem: "How long will the tour take?", options: [{ label: "A", text: "60 minutes" }, { label: "B", text: "90 minutes" }, { label: "C", text: "120 minutes" }], correct: "B", explanation: "The guide says the tour will take approximately 90 minutes." },
        { id: 16, type: "mc_single", stem: "The Rosetta Stone replica", options: [{ label: "A", text: "Room A — central hall" }, { label: "B", text: "Room B — climate-controlled wing" }, { label: "C", text: "Room C — directly ahead" }, { label: "D", text: "Room D — upper floor" }, { label: "E", text: "Room E — far end of corridor" }, { label: "F", text: "Room F — basement" }], correct: "A", explanation: "The Rosetta Stone replica is displayed in Room A, the central hall." },
        { id: 17, type: "mc_single", stem: "The royal mummies collection", options: [{ label: "A", text: "Room A — central hall" }, { label: "B", text: "Room B — climate-controlled wing" }, { label: "C", text: "Room C — directly ahead" }, { label: "D", text: "Room D — upper floor" }, { label: "E", text: "Room E — far end of corridor" }, { label: "F", text: "Room F — basement" }], correct: "B", explanation: "The royal mummies are in Room B, the climate-controlled wing." },
        { id: 18, type: "mc_single", stem: "The Egyptian jewellery display", options: [{ label: "A", text: "Room A — central hall" }, { label: "B", text: "Room B — climate-controlled wing" }, { label: "C", text: "Room C — directly ahead" }, { label: "D", text: "Room D — upper floor" }, { label: "E", text: "Room E — far end of corridor" }, { label: "F", text: "Room F — basement" }], correct: "C", explanation: "Ancient jewellery is in Room C, directly ahead." },
        { id: 19, type: "mc_single", stem: "The hieroglyphics and writing section", options: [{ label: "A", text: "Room A — central hall" }, { label: "B", text: "Room B — climate-controlled wing" }, { label: "C", text: "Room C — directly ahead" }, { label: "D", text: "Room D — upper floor" }, { label: "E", text: "Room E — far end of corridor" }, { label: "F", text: "Room F — basement" }], correct: "E", explanation: "The Egyptian writing section is in Room E, the small gallery at the far end of the corridor." },
        { id: 20, type: "mc_single", stem: "The reconstructed burial chamber", options: [{ label: "A", text: "Room A — central hall" }, { label: "B", text: "Room B — climate-controlled wing" }, { label: "C", text: "Room C — directly ahead" }, { label: "D", text: "Room D — upper floor" }, { label: "E", text: "Room E — far end of corridor" }, { label: "F", text: "Room F — basement" }], correct: "F", explanation: "The reconstructed burial chamber is in Room F, in the basement level." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Renewable Energy Project",
      context: "Students Zoe and Nathan are meeting with their tutor, Dr Harris, to discuss their renewable energy project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Harris: Good afternoon, Zoe, Nathan. So how is the renewable energy project progressing?

Zoe: Pretty well overall. We've decided to focus specifically on offshore wind energy as our main case study, rather than looking at renewables broadly.

Nathan: Yes, we felt it would allow us to go into much more depth rather than skimming over several technologies.

Dr Harris: That's a sensible decision. What angle are you taking?

Zoe: We're comparing the cost efficiency of offshore wind in the UK versus Denmark, looking at how government policy has affected development rates.

Dr Harris: Good. How are you finding the research material?

Nathan: There's plenty of academic literature, though a lot of it is quite technical. We've been using reports from the International Energy Agency as our primary source.

Zoe: And we've supplemented that with two peer-reviewed journal articles and some government data.

Dr Harris: Good range. What are your key findings so far?

Nathan: The most striking finding is that Denmark produces around 50 percent of its electricity from wind, whereas the UK figure is closer to 25 percent, even though the UK has much greater offshore wind potential.

Zoe: We think the main reason is that Denmark introduced supportive policies and subsidies much earlier — back in the 1980s — whereas the UK was slower to commit.

Dr Harris: That's a solid argument. Are there any weaknesses in your analysis you're aware of?

Nathan: We haven't fully accounted for differences in population and energy demand between the two countries.

Zoe: And we'd like to include more recent data — some of our figures are from 2021 and things have moved quite fast since then.

Dr Harris: Those are fair points to acknowledge in your limitations section. What format is the final submission?

Zoe: A 4,000-word report plus an oral presentation.

Dr Harris: Correct. Who is going to lead the presentation?

Nathan: We'll both present, but Zoe is handling the introduction and conclusions.

Dr Harris: And the data analysis sections?

Nathan: That's more my part.

Dr Harris: Good division of labour. One last thing — make sure your bibliography follows the Harvard referencing system. I noticed some inconsistencies in your draft.

Zoe: We'll sort that out before the final submission.

Dr Harris: Excellent. I think you're on track for a strong result.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What specific topic have Zoe and Nathan chosen for their project?", options: [{ label: "A", text: "Renewable energy in general" }, { label: "B", text: "Offshore wind energy" }, { label: "C", text: "Solar panel development" }], correct: "B", explanation: "Zoe says they have decided to focus on offshore wind energy as their main case study." },
        { id: 22, type: "mc_single", stem: "Which countries are they comparing?", options: [{ label: "A", text: "UK and Germany" }, { label: "B", text: "UK and Denmark" }, { label: "C", text: "UK and Norway" }], correct: "B", explanation: "Zoe says they are comparing offshore wind cost efficiency in the UK versus Denmark." },
        { id: 23, type: "mc_single", stem: "What is described as their primary source?", options: [{ label: "A", text: "Government statistics" }, { label: "B", text: "Peer-reviewed journals" }, { label: "C", text: "Reports from the International Energy Agency" }], correct: "C", explanation: "Nathan says they have been using reports from the International Energy Agency as their primary source." },
        { id: 24, type: "mc_single", stem: "Approximately what percentage of Denmark's electricity comes from wind?", options: [{ label: "A", text: "25 percent" }, { label: "B", text: "40 percent" }, { label: "C", text: "50 percent" }], correct: "C", explanation: "Nathan says Denmark produces around 50 percent of its electricity from wind." },
        { id: 25, type: "mc_single", stem: "When did Denmark begin introducing supportive energy policies?", options: [{ label: "A", text: "The 1970s" }, { label: "B", text: "The 1980s" }, { label: "C", text: "The 1990s" }], correct: "B", explanation: "Zoe says Denmark introduced supportive policies and subsidies back in the 1980s." },
        { id: 26, type: "mc_single", stem: "What referencing system does Dr Harris tell them to use?", options: [{ label: "A", text: "APA" }, { label: "B", text: "Chicago" }, { label: "C", text: "Harvard" }], correct: "C", explanation: "Dr Harris tells them to make sure their bibliography follows the Harvard referencing system." },
        { id: 27, type: "mc_multiple", stem: "Which TWO weaknesses in their analysis do the students acknowledge?", options: [{ label: "A", text: "Too few sources" }, { label: "B", text: "Not accounting for differences in population and energy demand" }, { label: "C", text: "Using outdated data" }, { label: "D", text: "Focusing on only one technology" }, { label: "E", text: "Lack of expert interviews" }], pickCount: 2, correct: ["B", "C"], explanation: "Nathan mentions not accounting for population and energy demand differences; Zoe notes some figures are from 2021 and therefore outdated." },
        { id: 28, type: "mc_multiple", stem: "Which TWO tasks does Zoe take responsibility for?", options: [{ label: "A", text: "Data analysis sections" }, { label: "B", text: "The introduction" }, { label: "C", text: "Conclusions" }, { label: "D", text: "Methodology" }, { label: "E", text: "Bibliography" }], pickCount: 2, correct: ["B", "C"], explanation: "Nathan says Zoe is handling the introduction and conclusions." },
        { id: 29, type: "mc_single", stem: "What is the word count required for the final report?", options: [{ label: "A", text: "3,000 words" }, { label: "B", text: "4,000 words" }, { label: "C", text: "5,000 words" }], correct: "B", explanation: "Zoe says the final submission is a 4,000-word report plus an oral presentation." },
        { id: 30, type: "mc_single", stem: "Who will handle the data analysis sections of the presentation?", options: [{ label: "A", text: "Zoe" }, { label: "B", text: "Nathan" }, { label: "C", text: "Both equally" }], correct: "B", explanation: "Nathan says the data analysis sections are more his part." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Nutrition and Brain Function",
      context: "A university lecturer is giving a talk on how nutrition affects brain function and cognitive performance.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today's lecture focuses on the relationship between nutrition and brain function — a rapidly growing field of research with significant implications for how we approach diet, mental health, and cognitive performance.

The brain, though it accounts for only about 2 percent of body weight, consumes approximately 20 percent of the body's total energy. This energy comes primarily from glucose, which the brain derives from carbohydrates. The quality of carbohydrates matters enormously — complex carbohydrates, found in foods such as oats and whole grains, release glucose slowly and sustain concentration over a longer period than simple sugars.

Protein is also critical. Amino acids derived from protein are used to produce neurotransmitters — the chemical messengers that regulate mood, memory, and attention. Tryptophan, for example, is a precursor to serotonin, which plays a key role in mood regulation. Foods rich in tryptophan include turkey, eggs, and dairy products.

Omega-3 fatty acids, particularly DHA — docosahexaenoic acid — are essential for maintaining the structural integrity of brain cell membranes. Research has linked low DHA levels to increased risk of depression and cognitive decline. Oily fish such as salmon and mackerel are among the richest dietary sources.

Micronutrients are equally important. Iron deficiency is one of the most common nutritional problems globally, and it has a direct impact on concentration and memory, particularly in children. Vitamin B12, found mainly in animal products, is essential for nerve function and the production of red blood cells. A deficiency can cause neurological symptoms including memory loss.

Hydration also deserves mention. Even mild dehydration — as little as a 1 to 2 percent loss of body water — can impair short-term memory, attention, and psychomotor skills.

Finally, there is growing interest in the gut-brain axis — the communication pathway between the digestive system and the brain. Research suggests that gut bacteria influence the production of neurotransmitters, meaning that a healthy diet rich in fibre and fermented foods may directly benefit mental wellbeing.

Thank you.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Percentage of body weight the brain accounts for:", wordLimit: 2, correct: "2 percent", explanation: "The lecturer says the brain accounts for only about 2 percent of body weight." },
        { id: 32, type: "fill_blank", before: "Percentage of total body energy consumed by the brain:", wordLimit: 2, correct: "20 percent", explanation: "The lecturer says the brain consumes approximately 20 percent of the body's total energy." },
        { id: 33, type: "fill_blank", before: "Primary energy source for the brain:", wordLimit: 1, correct: "glucose", explanation: "The lecturer says the brain's energy comes primarily from glucose." },
        { id: 34, type: "fill_blank", before: "Example of a food with complex carbohydrates:", wordLimit: 1, correct: "oats", explanation: "The lecturer mentions oats and whole grains as examples of complex carbohydrates." },
        { id: 35, type: "fill_blank", before: "Amino acid that is a precursor to serotonin:", wordLimit: 1, correct: "tryptophan", explanation: "The lecturer says tryptophan is a precursor to serotonin." },
        { id: 36, type: "fill_blank", before: "Full name of DHA:", wordLimit: 1, correct: "docosahexaenoic acid", explanation: "The lecturer gives the full name of DHA as docosahexaenoic acid." },
        { id: 37, type: "fill_blank", before: "Condition linked to low DHA levels:", wordLimit: 1, correct: "depression", explanation: "The lecturer says low DHA levels are linked to increased risk of depression and cognitive decline." },
        { id: 38, type: "fill_blank", before: "Common nutritional deficiency that affects concentration and memory:", wordLimit: 1, correct: "iron", explanation: "The lecturer says iron deficiency has a direct impact on concentration and memory." },
        { id: 39, type: "fill_blank", before: "Minimum water loss (%) that can impair cognitive function:", wordLimit: 2, correct: "1 to 2", explanation: "The lecturer says even a 1 to 2 percent loss of body water can impair cognitive function." },
        { id: 40, type: "fill_blank", before: "Pathway between digestive system and brain:", wordLimit: 2, correct: "gut-brain axis", explanation: "The lecturer refers to the gut-brain axis as the communication pathway between the digestive system and the brain." },
      ],
    },
  ],
};
