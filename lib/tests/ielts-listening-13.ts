import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening13: IELTSListeningTest = {
  id: "ielts-listening-13",
  exam: "IELTS",
  title: "IELTS Listening — Test 13",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Childcare Centre Enquiry",
      context:
        "Steven is calling Sunshine Childcare Centre to enquire about places for his child. Janet, an administrator at the centre, answers his call.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Janet: Good morning, Sunshine Childcare Centre. Janet speaking. How can I help?

Steven: Oh, hello. I'm ringing to find out about places at your centre. My name is Steven Hartley.

Janet: Hartley — could you spell that for me, please?

Steven: Yes, H-A-R-T-L-E-Y.

Janet: Thank you, Mr Hartley. And how old is your child?

Steven: She's two and a half. She'll be three in September.

Janet: Lovely. We have spaces in our toddler group, which takes children from age two to four. Could I ask how many days per week you're looking for?

Steven: Ideally four days, Monday through Thursday.

Janet: Right. And are you interested in full-day or half-day sessions?

Steven: Full-day, please. I work full-time and my wife does as well.

Janet: Of course. Our full-day rate is £52 per day. So for four days that would come to £208 per week.

Steven: That's within our budget. When would a place be available?

Janet: We currently have a space from the 3rd of September. Would that suit you?

Steven: Yes, that would be perfect, actually.

Janet: Wonderful. Now, a few questions. Does your daughter have any dietary requirements?

Steven: Yes, she's allergic to nuts, so we'd need you to note that.

Janet: Absolutely, we take allergies very seriously. We'll flag that on her record. Our kitchen is actually nut-free as a matter of policy. What's the best contact number for you?

Steven: My mobile is 07854 336 201.

Janet: And could you give me your home address?

Steven: It's 27 Birch Avenue, Northgate.

Janet: Thank you. Just so you know, we also offer an optional after-school pick-up club for older children. It starts at age four. Finally, I should mention that we hold a settling-in visit before the start date — usually about two weeks beforehand. We'd ask you to bring your daughter in for a morning so she can meet the staff.

Steven: That sounds really reassuring. Thank you so much, Janet.

Janet: Our pleasure. We'll send you a confirmation pack in the post within the next three days.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Caller's surname:",
          wordLimit: 1,
          correct: "Hartley",
          explanation: "Steven spells out his surname as H-A-R-T-L-E-Y.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Child's current age:",
          after: "and a half",
          wordLimit: 1,
          correct: "two",
          explanation: "Steven says his daughter is two and a half.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Number of days required per week:",
          wordLimit: 1,
          correct: "four",
          explanation: "Steven says he would ideally like four days, Monday through Thursday.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Session type required:",
          wordLimit: 1,
          correct: "full-day",
          explanation: "Steven says he needs full-day sessions as both he and his wife work full-time.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Daily rate: £",
          wordLimit: 1,
          correct: "52",
          explanation: "Janet states the full-day rate is £52 per day.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Place available from:",
          wordLimit: 3,
          correct: "3rd of September",
          explanation: "Janet says a space is available from the 3rd of September.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Dietary requirement:",
          after: "allergy",
          wordLimit: 1,
          correct: "nut",
          explanation: "Steven says his daughter is allergic to nuts.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Contact mobile number:",
          wordLimit: 3,
          correct: "07854 336 201",
          explanation: "Steven gives his mobile number as 07854 336 201.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Home address:",
          wordLimit: 3,
          correct: "27 Birch Avenue",
          explanation: "Steven says his address is 27 Birch Avenue, Northgate.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Settling-in visit scheduled approximately",
          after: "weeks before start date",
          wordLimit: 1,
          correct: "two",
          explanation: "Janet says the settling-in visit is usually about two weeks before the start date.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Local Radio: New City Transport Changes",
      context:
        "A local radio presenter is giving a programme about upcoming transport changes in the city.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each transport feature (16–20) with the correct location (A–F). Write the correct letter next to each feature.",
      transcript: `
Good morning and welcome to City Matters. I'm your presenter, and today we're looking at some significant transport changes coming to our city over the next twelve months. The council announced the full plan yesterday, and I've been speaking to the project team this morning.

The changes are part of a £45 million investment — the largest transport investment the city has seen in thirty years. The goal is to reduce car use in the city centre by twenty percent within five years. The first visible change will be the introduction of new cycle lanes along the northern ring road. These will be separated from traffic by physical barriers, making them considerably safer than the painted lines we currently have.

Work on the new express bus route will begin in March next year. This route will connect the university campus to the central railway station, a journey currently taking around forty minutes. The express service aims to cut that to just twenty minutes. Buses on this route will run every eight minutes during peak hours.

A new park-and-ride facility will open on the eastern edge of the city. It will have spaces for 850 vehicles and will be served by electric shuttle buses running into the centre every twelve minutes. Passengers will pay a flat rate of £3 for the return trip, regardless of the number of people in the car.

Let me now describe the key locations for some of the new features. The new cycling hub, where you can hire bikes, will be situated at the old market building near the town hall. The electric vehicle charging points are being installed at the riverside car park. The pedestrianised zone, where no private vehicles will be allowed, covers the cathedral quarter. The new bus interchange, bringing together routes from across the region, will be at St George's Square. And the new footbridge across the river will be built at Mill Lane, connecting the residential area on the south bank to the city centre.

These are exciting changes, and I'll be keeping you informed as the project progresses. After the break, your travel news.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "How much is the total investment in the transport plan?",
          options: [
            { label: "A", text: "£45 million" },
            { label: "B", text: "£54 million" },
            { label: "C", text: "£450 million" },
          ],
          correct: "A",
          explanation: "The presenter says the changes are part of a £45 million investment.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "What is the target reduction in car use in the city centre?",
          options: [
            { label: "A", text: "Ten percent" },
            { label: "B", text: "Fifteen percent" },
            { label: "C", text: "Twenty percent" },
          ],
          correct: "C",
          explanation: "The presenter says the goal is to reduce car use by twenty percent within five years.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "When will work on the new express bus route begin?",
          options: [
            { label: "A", text: "This year" },
            { label: "B", text: "March next year" },
            { label: "C", text: "Next summer" },
          ],
          correct: "B",
          explanation: "The presenter says work on the express bus route will begin in March next year.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "How many vehicle spaces will the new park-and-ride facility have?",
          options: [
            { label: "A", text: "580" },
            { label: "B", text: "805" },
            { label: "C", text: "850" },
          ],
          correct: "C",
          explanation: "The presenter says the park-and-ride will have spaces for 850 vehicles.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "What is the flat-rate charge for the park-and-ride return trip?",
          options: [
            { label: "A", text: "£2" },
            { label: "B", text: "£3" },
            { label: "C", text: "£5" },
          ],
          correct: "B",
          explanation: "The presenter states passengers will pay a flat rate of £3 for the return trip.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "Cycling hub (bike hire)",
          options: [
            { label: "A", text: "Riverside car park" },
            { label: "B", text: "Cathedral quarter" },
            { label: "C", text: "Old market building near the town hall" },
            { label: "D", text: "St George's Square" },
            { label: "E", text: "Mill Lane" },
            { label: "F", text: "Eastern edge of the city" },
          ],
          correct: "C",
          explanation: "The presenter says the cycling hub will be situated at the old market building near the town hall.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "Electric vehicle charging points",
          options: [
            { label: "A", text: "Riverside car park" },
            { label: "B", text: "Cathedral quarter" },
            { label: "C", text: "Old market building near the town hall" },
            { label: "D", text: "St George's Square" },
            { label: "E", text: "Mill Lane" },
            { label: "F", text: "Eastern edge of the city" },
          ],
          correct: "A",
          explanation: "The presenter says electric vehicle charging points are being installed at the riverside car park.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "Pedestrianised zone",
          options: [
            { label: "A", text: "Riverside car park" },
            { label: "B", text: "Cathedral quarter" },
            { label: "C", text: "Old market building near the town hall" },
            { label: "D", text: "St George's Square" },
            { label: "E", text: "Mill Lane" },
            { label: "F", text: "Eastern edge of the city" },
          ],
          correct: "B",
          explanation: "The presenter says the pedestrianised zone covers the cathedral quarter.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "New bus interchange",
          options: [
            { label: "A", text: "Riverside car park" },
            { label: "B", text: "Cathedral quarter" },
            { label: "C", text: "Old market building near the town hall" },
            { label: "D", text: "St George's Square" },
            { label: "E", text: "Mill Lane" },
            { label: "F", text: "Eastern edge of the city" },
          ],
          correct: "D",
          explanation: "The presenter says the new bus interchange will be at St George's Square.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "New footbridge across the river",
          options: [
            { label: "A", text: "Riverside car park" },
            { label: "B", text: "Cathedral quarter" },
            { label: "C", text: "Old market building near the town hall" },
            { label: "D", text: "St George's Square" },
            { label: "E", text: "Mill Lane" },
            { label: "F", text: "Eastern edge of the city" },
          ],
          correct: "E",
          explanation: "The presenter says the new footbridge will be built at Mill Lane.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Architecture and Sustainable Design",
      context:
        "Students Claire and James are meeting with their tutor, Dr Robinson, to discuss their project on architecture and sustainable design.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Robinson: Right, Claire, James — let's hear where you've got to with your sustainable design project.

Claire: We've been looking at passive solar design as our main focus, Dr Robinson. There's a lot of published research, and it connects really well with our earlier coursework on energy efficiency.

James: I was keener on studying green roofs initially, but we agreed that passive solar was a stronger choice for the word count we've got.

Dr Robinson: Both are valid topics. What source material have you been using?

Claire: Mostly journal articles — we found the academic sources much more rigorous than the websites we looked at first.

James: We've also been to visit the new environmental building at the engineering faculty. That was really useful for seeing the principles in practice.

Dr Robinson: Excellent. Now, in your draft, you mention three main benefits of passive solar design. What are they?

Claire: Reduced energy bills for occupants, lower carbon emissions during the building's operational life, and improved thermal comfort year-round.

James: We also discovered that buildings with passive solar features tend to have higher resale values, which was something we hadn't initially expected to find.

Dr Robinson: That's an interesting additional point. What challenges did you encounter in your research?

Claire: The biggest one was comparing data across different climates. Studies from Scandinavia can't always be applied directly to buildings in the UK.

James: I found the technical terminology quite difficult at first — especially the calculations around thermal mass.

Dr Robinson: Those are both legitimate difficulties. For your methodology section, which approach did you settle on?

James: We decided on a comparative case study approach — looking at three buildings in different UK cities.

Claire: Yes, and we're using a scoring matrix to evaluate them against twelve criteria related to sustainability.

Dr Robinson: Good. Now, what do you think are the two most significant weaknesses in your draft so far?

Claire: I think our literature review needs more depth — we've been too selective about which studies we've cited.

James: And the conclusion doesn't really reflect the complexity of our findings. It feels too simplified at the moment.

Dr Robinson: Both of those are fixable. Let's look at the structure next. Which sections need the most attention before submission?

Claire: Definitely the methodology and the conclusion.

James: I agree — those two. The introduction and literature review are in better shape now.

Dr Robinson: I'll give you written feedback by Friday. Does that give you enough time to revise?

Claire: Yes, that would be really helpful, thank you.

James: Absolutely. Friday's fine.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What topic did Claire and James choose for their project?",
          options: [
            { label: "A", text: "Green roofs" },
            { label: "B", text: "Passive solar design" },
            { label: "C", text: "Wind energy systems" },
          ],
          correct: "B",
          explanation: "Claire says they chose passive solar design as their main focus.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "What type of source material did they find most useful?",
          options: [
            { label: "A", text: "Websites" },
            { label: "B", text: "Textbooks" },
            { label: "C", text: "Journal articles" },
          ],
          correct: "C",
          explanation: "Claire says they found journal articles to be much more rigorous than websites.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "What unexpected benefit of passive solar design did James mention?",
          options: [
            { label: "A", text: "Faster construction times" },
            { label: "B", text: "Higher resale values" },
            { label: "C", text: "Lower maintenance costs" },
          ],
          correct: "B",
          explanation: "James says buildings with passive solar features tend to have higher resale values, which was unexpected.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "What was Claire's main research challenge?",
          options: [
            { label: "A", text: "Accessing journal articles" },
            { label: "B", text: "Comparing data across different climates" },
            { label: "C", text: "Understanding thermal mass calculations" },
          ],
          correct: "B",
          explanation: "Claire says the biggest challenge was comparing data across different climates.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What methodology did they decide to use?",
          options: [
            { label: "A", text: "Laboratory experiments" },
            { label: "B", text: "Questionnaire surveys" },
            { label: "C", text: "Comparative case study" },
          ],
          correct: "C",
          explanation: "James says they decided on a comparative case study approach.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "When will Dr Robinson provide written feedback?",
          options: [
            { label: "A", text: "Wednesday" },
            { label: "B", text: "Thursday" },
            { label: "C", text: "Friday" },
          ],
          correct: "C",
          explanation: "Dr Robinson says he will give written feedback by Friday.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO weaknesses in their draft do Claire and James identify?",
          options: [
            { label: "A", text: "The literature review lacks depth" },
            { label: "B", text: "The introduction is too long" },
            { label: "C", text: "The conclusion is oversimplified" },
            { label: "D", text: "The case studies are poorly chosen" },
            { label: "E", text: "The scoring matrix is flawed" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Claire says the literature review needs more depth, and James says the conclusion feels too simplified.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO sections do they agree need the most attention before submission?",
          options: [
            { label: "A", text: "Introduction" },
            { label: "B", text: "Literature review" },
            { label: "C", text: "Methodology" },
            { label: "D", text: "Conclusion" },
            { label: "E", text: "References" },
          ],
          pickCount: 2,
          correct: ["C", "D"],
          explanation:
            "Claire says definitely the methodology and the conclusion, and James agrees.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "How many buildings are included in their case study comparison?",
          options: [
            { label: "A", text: "Two" },
            { label: "B", text: "Three" },
            { label: "C", text: "Four" },
          ],
          correct: "B",
          explanation: "James says they are looking at three buildings in different UK cities.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "How many sustainability criteria are used in their scoring matrix?",
          options: [
            { label: "A", text: "Ten" },
            { label: "B", text: "Twelve" },
            { label: "C", text: "Fifteen" },
          ],
          correct: "B",
          explanation: "Claire says they are using a scoring matrix to evaluate buildings against twelve criteria.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: The History of Cinema",
      context:
        "A university lecturer is giving a talk on the history of cinema, from its origins to the modern era.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon, everyone. Today's lecture covers the history of cinema — an art form that has transformed human culture more profoundly than almost any other invention of the modern age.

The story begins in 1895, when Auguste and Louis Lumière gave the first public screening of a film to a paying audience in Paris. They called their device the Cinematographe. The short films they showed depicted everyday scenes — workers leaving a factory, a train arriving at a station. Audiences were astounded; some reportedly fled the theatre in fear when they saw the train approaching.

For the first three decades, films were entirely silent. Actors communicated through exaggerated gestures, and title cards displayed dialogue on screen. Musical accompaniment was provided live in the cinema, often by a pianist or a small orchestra. The transition to sound film, which became known as the talkies, happened in 1927 with the release of The Jazz Singer — the first commercially successful sound film.

The 1930s saw the rise of Hollywood as the global centre of film production. Studios operated as factories, producing dozens of films every year. The studio system gave enormous power to producers, while directors and actors worked under long-term contracts. It was during this era that colour film began to gain popularity, with the release of Gone with the Wind in 1939 marking a turning point.

After the Second World War, cinema faced a new rival: television. Attendance at cinemas dropped dramatically, and studios had to find ways to attract audiences back. This led to technological innovations such as widescreen formats and improved sound systems. European filmmakers responded to Hollywood dominance by developing distinct national cinema movements — the French New Wave of the late 1950s being perhaps the most influential.

The invention of digital filmmaking in the 1990s marked the most recent revolution in cinema history. Digital cameras and computer-generated imagery, or CGI, fundamentally changed the production process. Today, more than 50 percent of global box office revenue is generated in Asia, reflecting a profound shift in where films are both made and watched.

Cinema remains one of the world's most powerful storytelling mediums — and its next chapter is already being written.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "First public film screening took place in:",
          wordLimit: 1,
          correct: "1895",
          explanation: "The lecturer says the Lumière brothers gave the first public screening in 1895.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "The Lumières' device was called the:",
          wordLimit: 1,
          correct: "Cinematographe",
          explanation: "The lecturer says the Lumière brothers called their device the Cinematographe.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Early films communicated dialogue using:",
          after: "cards",
          wordLimit: 1,
          correct: "title",
          explanation: "The lecturer says title cards displayed dialogue on screen in silent films.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Sound films became known as the:",
          wordLimit: 1,
          correct: "talkies",
          explanation: "The lecturer says the transition to sound film became known as the talkies.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "First commercially successful sound film:",
          wordLimit: 3,
          correct: "The Jazz Singer",
          explanation: "The lecturer says The Jazz Singer, released in 1927, was the first commercially successful sound film.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Colour film gained popularity with the release of",
          after: "in 1939",
          wordLimit: 4,
          correct: "Gone with the Wind",
          explanation: "The lecturer says Gone with the Wind in 1939 marked a turning point for colour film.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Cinema's new rival after World War II was:",
          wordLimit: 1,
          correct: "television",
          explanation: "The lecturer says cinema faced a new rival — television — after the Second World War.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "The most influential European cinema movement was the French:",
          wordLimit: 2,
          correct: "New Wave",
          explanation: "The lecturer says the French New Wave of the late 1950s was perhaps the most influential European cinema movement.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "The most recent revolution in cinema was caused by:",
          after: "filmmaking",
          wordLimit: 1,
          correct: "digital",
          explanation: "The lecturer says the invention of digital filmmaking in the 1990s marked the most recent revolution.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Percentage of global box office revenue now generated in Asia:",
          after: "%",
          wordLimit: 1,
          correct: "50",
          explanation: "The lecturer states that more than 50 percent of global box office revenue is generated in Asia.",
        },
      ],
    },
  ],
};
