import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening19: IELTSListeningTest = {
  id: "ielts-listening-19",
  exam: "IELTS",
  title: "IELTS Listening — Test 19",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Music School Registration",
      context:
        "Marcus is calling Harrington Music School to register as a student. Helen, the school administrator, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Helen: Good morning, Harrington Music School. Helen speaking. How can I help?

Marcus: Morning. I'd like to register as a student, please. My name is Marcus Ellaby.

Helen: Ellaby — E-L-L-A-B-Y?

Marcus: Yes, that's it.

Helen: Thank you, Mr Ellaby. Which instrument are you interested in studying?

Marcus: The piano. I played a bit when I was younger but I've not had lessons for about fifteen years.

Helen: That's absolutely fine — we have a wonderful course for returning adult learners. Are you looking for group lessons or one-to-one tuition?

Marcus: One-to-one, please. I'd rather learn at my own pace.

Helen: Of course. Our one-to-one lessons are 45 minutes each and cost £38 per session. We recommend at least one lesson per week.

Marcus: That sounds good. Could I do lessons on a Saturday?

Helen: Let me check availability... Yes, we have a slot at 10:15 on Saturday mornings with our teacher, Mr Ferris. He specialises in classical and jazz piano.

Marcus: Perfect. I'm interested in both of those styles.

Helen: Wonderful. Could I take your address, please?

Marcus: 8 Elm Court, Beverley.

Helen: And your email address?

Marcus: It's marcus.ellaby@gmail.com.

Helen: And a contact number?

Marcus: My mobile is 07903 221 447.

Helen: Thank you. Now, do you have your own piano or keyboard at home?

Marcus: I have a digital piano — a Yamaha. It's quite good quality.

Helen: That's ideal for practice. We do ask new students to purchase our beginner's workbook before their first lesson. It costs £12 and covers music theory and sight-reading basics.

Marcus: No problem. Can I buy it from you?

Helen: Yes, you can collect it at reception on your first visit. We'd also love you to take a look at our student concert series — we hold concerts four times a year and it's a great way to build confidence.

Marcus: I'd definitely be interested in that eventually. Not on my first week, though!

Helen: Ha! No, no — of course not. Shall I book you in for Mr Ferris this Saturday?

Marcus: Yes please. I'm looking forward to it.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Student's surname:",
          wordLimit: 1,
          correct: "Ellaby",
          explanation: "Marcus gives his name as Marcus Ellaby, and Helen confirms the spelling E-L-L-A-B-Y.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Instrument requested:",
          wordLimit: 1,
          correct: "piano",
          explanation: "Marcus says he is interested in studying the piano.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Lesson format preferred:",
          wordLimit: 2,
          correct: "one-to-one",
          explanation: "Marcus says he prefers one-to-one tuition to learn at his own pace.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Lesson duration:",
          after: "minutes",
          wordLimit: 1,
          correct: "45",
          explanation: "Helen says one-to-one lessons are 45 minutes each.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Cost per session: £",
          wordLimit: 1,
          correct: "38",
          explanation: "Helen says one-to-one lessons cost £38 per session.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Lesson time booked:",
          wordLimit: 2,
          correct: "10:15",
          explanation: "Helen says there is a slot at 10:15 on Saturday mornings.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Student's address:",
          wordLimit: 3,
          correct: "8 Elm Court, Beverley",
          explanation: "Marcus gives his address as 8 Elm Court, Beverley.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Contact mobile number:",
          wordLimit: 3,
          correct: "07903 221 447",
          explanation: "Marcus gives his mobile number as 07903 221 447.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Type of instrument at home:",
          wordLimit: 2,
          correct: "digital piano",
          explanation: "Marcus says he has a digital piano — a Yamaha.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Cost of beginner's workbook: £",
          wordLimit: 1,
          correct: "12",
          explanation: "Helen says the beginner's workbook costs £12.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Concert Hall Audio Guide Introduction",
      context:
        "A narrator is giving the introductory section of an audio guide for visitors to the Thornfield Concert Hall.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each area or feature (16–20) with the correct description (A–F). Write the correct letter next to each area.",
      transcript: `
Welcome to Thornfield Concert Hall — one of the finest music venues in the country and a landmark in the cultural life of this city. This audio guide will take you through the history and highlights of our beautiful building, and introduce you to the facilities available during your visit today.

Thornfield Concert Hall was opened in 1887 by the city's mayor at the time, and was designed by the celebrated architect Edward Harlow. The hall was built to hold exactly 1,850 audience members in its main auditorium. It remains one of the largest concert halls in the north of England.

The building has been substantially renovated twice in its history — first in 1952 and most recently in 2014, when a major £28 million restoration project was completed. The 2014 work restored the original Victorian decorative plasterwork, upgraded the acoustic panelling, and added an entirely new backstage complex.

Concert Hall memberships are available from the box office for an annual fee of £65, which gives you priority booking and a ten percent discount on tickets for the whole year. The box office opens at ten o'clock and closes at seven on performance days.

Let me now take you through some of the key areas of the building. The Grand Foyer, through which you entered, is the main social space and features the original Victorian mosaic floor, which was painstakingly restored during the 2014 renovation. The Recital Room on the first floor is a smaller, more intimate performance space seating 200, used for chamber music, jazz, and spoken word events. The Organ Gallery, located above the stage at the rear of the auditorium, houses our magnificent Victorian pipe organ, which has over 4,000 individual pipes. The Members' Lounge, accessed via the staircase to your right, is reserved exclusively for annual members and offers pre-concert dining. The Education Suite on the lower ground floor is where our outreach and schools programme is based — it runs workshops for over 3,000 young people each year. And the Archive Room, which can be visited by appointment, contains historical programmes, photographs, and recordings dating back to the hall's opening.

We hope you enjoy your time at Thornfield. Please note that photography without flash is permitted throughout the public areas of the building.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "In what year was Thornfield Concert Hall opened?",
          options: [
            { label: "A", text: "1878" },
            { label: "B", text: "1887" },
            { label: "C", text: "1897" },
          ],
          correct: "B",
          explanation: "The narrator says Thornfield Concert Hall was opened in 1887.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "How many audience members does the main auditorium hold?",
          options: [
            { label: "A", text: "1,500" },
            { label: "B", text: "1,750" },
            { label: "C", text: "1,850" },
          ],
          correct: "C",
          explanation: "The narrator says the hall was built to hold exactly 1,850 audience members.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "How much did the most recent renovation cost?",
          options: [
            { label: "A", text: "£18 million" },
            { label: "B", text: "£28 million" },
            { label: "C", text: "£38 million" },
          ],
          correct: "B",
          explanation: "The narrator says the 2014 restoration project cost £28 million.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "What is the annual membership fee?",
          options: [
            { label: "A", text: "£45" },
            { label: "B", text: "£55" },
            { label: "C", text: "£65" },
          ],
          correct: "C",
          explanation: "The narrator says concert hall memberships are £65 per year.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "What discount do members receive on tickets?",
          options: [
            { label: "A", text: "Five percent" },
            { label: "B", text: "Ten percent" },
            { label: "C", text: "Fifteen percent" },
          ],
          correct: "B",
          explanation: "The narrator says membership gives a ten percent discount on tickets.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "The Grand Foyer",
          options: [
            { label: "A", text: "Features the original Victorian mosaic floor" },
            { label: "B", text: "Intimate performance space seating 200" },
            { label: "C", text: "Houses a Victorian pipe organ with over 4,000 pipes" },
            { label: "D", text: "Reserved for annual members, with pre-concert dining" },
            { label: "E", text: "Runs workshops for over 3,000 young people per year" },
            { label: "F", text: "Contains historical programmes and recordings" },
          ],
          correct: "A",
          explanation: "The narrator says the Grand Foyer features the original Victorian mosaic floor, painstakingly restored in 2014.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "The Recital Room",
          options: [
            { label: "A", text: "Features the original Victorian mosaic floor" },
            { label: "B", text: "Intimate performance space seating 200" },
            { label: "C", text: "Houses a Victorian pipe organ with over 4,000 pipes" },
            { label: "D", text: "Reserved for annual members, with pre-concert dining" },
            { label: "E", text: "Runs workshops for over 3,000 young people per year" },
            { label: "F", text: "Contains historical programmes and recordings" },
          ],
          correct: "B",
          explanation: "The narrator says the Recital Room is a smaller, more intimate performance space seating 200.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "The Organ Gallery",
          options: [
            { label: "A", text: "Features the original Victorian mosaic floor" },
            { label: "B", text: "Intimate performance space seating 200" },
            { label: "C", text: "Houses a Victorian pipe organ with over 4,000 pipes" },
            { label: "D", text: "Reserved for annual members, with pre-concert dining" },
            { label: "E", text: "Runs workshops for over 3,000 young people per year" },
            { label: "F", text: "Contains historical programmes and recordings" },
          ],
          correct: "C",
          explanation: "The narrator says the Organ Gallery houses the Victorian pipe organ, which has over 4,000 individual pipes.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "The Members' Lounge",
          options: [
            { label: "A", text: "Features the original Victorian mosaic floor" },
            { label: "B", text: "Intimate performance space seating 200" },
            { label: "C", text: "Houses a Victorian pipe organ with over 4,000 pipes" },
            { label: "D", text: "Reserved for annual members, with pre-concert dining" },
            { label: "E", text: "Runs workshops for over 3,000 young people per year" },
            { label: "F", text: "Contains historical programmes and recordings" },
          ],
          correct: "D",
          explanation: "The narrator says the Members' Lounge is reserved exclusively for annual members and offers pre-concert dining.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "The Education Suite",
          options: [
            { label: "A", text: "Features the original Victorian mosaic floor" },
            { label: "B", text: "Intimate performance space seating 200" },
            { label: "C", text: "Houses a Victorian pipe organ with over 4,000 pipes" },
            { label: "D", text: "Reserved for annual members, with pre-concert dining" },
            { label: "E", text: "Runs workshops for over 3,000 young people per year" },
            { label: "F", text: "Contains historical programmes and recordings" },
          ],
          correct: "E",
          explanation: "The narrator says the Education Suite runs workshops for over 3,000 young people each year.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Musicology Project",
      context:
        "Students Tara and Drew are meeting with their tutor, Professor King, to discuss their musicology project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Professor King: Good to see you both. So — musicology project. Where are we?

Tara: We've settled on a really interesting focus, Professor King. We're examining the influence of African musical traditions on the development of twentieth-century American popular music — specifically blues and jazz.

Drew: It's a topic with a huge amount of scholarship to draw on, but we found a relatively underexplored angle — the specific role of West African polyrhythm in shaping early jazz improvisation.

Professor King: That's a genuinely original contribution. What sources are anchoring your argument?

Drew: We've been working closely with three key texts — Gunther Schuller's Early Jazz, Paul Berliner's Thinking in Jazz, and an article by Kofi Agawu on African rhythm theory.

Tara: I found Agawu's work the most revelatory, actually. His analysis of time-line patterns in West African music maps directly onto what we hear in early New Orleans jazz.

Professor King: Excellent. Now, have you incorporated any primary sources — recordings or transcriptions?

Tara: Yes — we've analysed transcriptions of Louis Armstrong's early recordings from the 1920s, comparing them to recorded examples of Ewe and Yoruba drumming patterns.

Drew: The rhythmic correspondences are quite striking once you know what to listen for.

Professor King: Strong methodology. What's your main line of argument?

Tara: That the syncopated rhythmic structures in early jazz are not simply a European musical adaptation, but preserve identifiable West African structural principles — particularly the use of cross-rhythms against a fixed pulse.

Professor King: A well-evidenced claim. Are there any counterarguments you need to address?

Drew: The main one is that some scholars argue the similarities are coincidental rather than the result of direct cultural transmission. We address this by pointing to historical evidence of African musical traditions surviving the Middle Passage.

Professor King: Good — that's essential to engage with. For the presentation next week, what are your two main priorities?

Drew: Making sure the musicological vocabulary is accessible to listeners who aren't specialists in either African or jazz music theory.

Tara: And structuring the audio examples clearly — we want them to illuminate the argument, not distract from it.

Professor King: Both exactly right. I'll look forward to the presentation.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What is the focus of Tara and Drew's musicology project?",
          options: [
            { label: "A", text: "The influence of European classical music on American jazz" },
            { label: "B", text: "The influence of African musical traditions on American blues and jazz" },
            { label: "C", text: "The development of reggae music in the Caribbean" },
          ],
          correct: "B",
          explanation: "Tara says they are examining the influence of African musical traditions on the development of twentieth-century American popular music — specifically blues and jazz.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "What specific aspect of African music do they focus on?",
          options: [
            { label: "A", text: "West African vocal harmonies" },
            { label: "B", text: "West African polyrhythm and early jazz improvisation" },
            { label: "C", text: "North African melodic scales" },
          ],
          correct: "B",
          explanation: "Drew says they found the specific role of West African polyrhythm in shaping early jazz improvisation to be a relatively underexplored angle.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "Which author did Tara find most revelatory?",
          options: [
            { label: "A", text: "Gunther Schuller" },
            { label: "B", text: "Paul Berliner" },
            { label: "C", text: "Kofi Agawu" },
          ],
          correct: "C",
          explanation: "Tara says she found Agawu's work the most revelatory.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "Whose recordings did they transcribe and analyse?",
          options: [
            { label: "A", text: "Miles Davis" },
            { label: "B", text: "Louis Armstrong" },
            { label: "C", text: "Duke Ellington" },
          ],
          correct: "B",
          explanation: "Tara says they analysed transcriptions of Louis Armstrong's early recordings from the 1920s.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What is the main counterargument they need to address?",
          options: [
            { label: "A", text: "That jazz originated purely in Europe" },
            { label: "B", text: "That the similarities are coincidental rather than the result of cultural transmission" },
            { label: "C", text: "That African music had no influence on blues" },
          ],
          correct: "B",
          explanation: "Drew says the main counterargument is that some scholars argue the similarities are coincidental rather than the result of direct cultural transmission.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "How do they address the counterargument about coincidence?",
          options: [
            { label: "A", text: "By citing more musicological texts" },
            { label: "B", text: "By pointing to historical evidence of African musical traditions surviving the Middle Passage" },
            { label: "C", text: "By conducting their own field research in West Africa" },
          ],
          correct: "B",
          explanation: "Drew says they address it by pointing to historical evidence of African musical traditions surviving the Middle Passage.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO key texts did they use from secondary sources?",
          options: [
            { label: "A", text: "Gunther Schuller's Early Jazz" },
            { label: "B", text: "Paul Berliner's Thinking in Jazz" },
            { label: "C", text: "Alan Lomax's The Land Where Blues Began" },
            { label: "D", text: "Amiri Baraka's Blues People" },
            { label: "E", text: "Kofi Agawu's article on African rhythm theory" },
          ],
          pickCount: 2,
          correct: ["A", "B"],
          explanation:
            "Drew mentions three key texts: Schuller's Early Jazz, Berliner's Thinking in Jazz, and Agawu's article. The question asks for two — Schuller and Berliner are the first two named.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO priorities do Tara and Drew identify for their presentation?",
          options: [
            { label: "A", text: "Making musicological vocabulary accessible to non-specialists" },
            { label: "B", text: "Shortening the presentation to fit the time limit" },
            { label: "C", text: "Structuring the audio examples clearly" },
            { label: "D", text: "Adding more visual slides" },
            { label: "E", text: "Inviting a guest musician" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Drew says making the vocabulary accessible is a priority, and Tara says structuring the audio examples clearly is the other.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "What rhythmic principle does Tara say early jazz preserves from West African music?",
          options: [
            { label: "A", text: "The use of irregular time signatures" },
            { label: "B", text: "The use of cross-rhythms against a fixed pulse" },
            { label: "C", text: "The use of extended melodic phrases" },
          ],
          correct: "B",
          explanation: "Tara says the structures preserve identifiable West African structural principles — particularly the use of cross-rhythms against a fixed pulse.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "Which African drumming traditions did they compare Armstrong's recordings to?",
          options: [
            { label: "A", text: "Ewe and Yoruba drumming patterns" },
            { label: "B", text: "Ashanti and Zulu drumming patterns" },
            { label: "C", text: "Mandinka and Fon drumming patterns" },
          ],
          correct: "A",
          explanation: "Tara says they compared the recordings to recorded examples of Ewe and Yoruba drumming patterns.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: Acoustics and Sound Engineering",
      context:
        "A university lecturer is giving an introductory lecture on acoustics and the principles of sound engineering.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture introduces acoustics — the science of sound — and its practical application in sound engineering. This is a field that underpins everything from concert hall design to noise pollution control to the headphones you use every day.

Sound is a mechanical wave — a disturbance that travels through a medium such as air, water, or a solid material. Sound cannot travel through a vacuum. The speed of sound in air at room temperature is approximately 343 metres per second. In water, sound travels much faster — around 1,480 metres per second — which is why sonar technology is so effective in underwater environments.

The frequency of a sound wave determines its pitch. Frequency is measured in hertz — abbreviated as Hz. The range of human hearing is typically between 20 Hz and 20,000 Hz. Sounds below 20 Hz are called infrasound, and sounds above 20,000 Hz are called ultrasound. Interestingly, many animals can detect frequencies far beyond the human range — bats, for example, use ultrasound for echolocation at frequencies up to 100,000 Hz.

The loudness of a sound is measured in decibels — abbreviated as dB. A normal conversation takes place at around 60 decibels. Prolonged exposure to sounds above 85 decibels is considered damaging to human hearing. A rock concert typically reaches 110 decibels or more at the front of the audience.

Room acoustics is one of the most challenging areas of applied acoustics. When sound waves strike a surface, they can be reflected, absorbed, or transmitted. Hard surfaces — such as stone or glass — reflect sound, which creates echo and reverberation. Soft, porous materials — such as carpet, curtains, or acoustic foam — absorb sound and reduce reverberation. The goal in concert hall design is typically to achieve a reverberation time of around two seconds for orchestral music, which gives the sound a sense of richness without muddying individual notes.

The digital revolution has fundamentally transformed sound engineering. Digital Audio Workstations — commonly known as DAWs — allow engineers to record, edit, and mix audio with extraordinary precision. The standard sampling rate for professional audio recording is 44,100 Hz — also written as 44.1 kHz — which was established in the early days of the compact disc. At this rate, digital systems can accurately reproduce all frequencies within the range of human hearing.

Active noise cancellation technology — used in many modern headphones — works by detecting incoming sound waves and generating an opposing wave to cancel them out. This technology was originally developed for use in aircraft cockpits in the 1970s and has since been refined for consumer electronics.

Sound engineering is both a science and an art, and its applications continue to expand.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Speed of sound in air at room temperature:",
          after: "metres per second",
          wordLimit: 1,
          correct: "343",
          explanation: "The lecturer says the speed of sound in air at room temperature is approximately 343 metres per second.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Speed of sound in water:",
          after: "metres per second",
          wordLimit: 1,
          correct: "1,480",
          explanation: "The lecturer says sound travels at around 1,480 metres per second in water.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Frequency is measured in:",
          wordLimit: 1,
          correct: "hertz",
          explanation: "The lecturer says frequency is measured in hertz, abbreviated as Hz.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Lower limit of human hearing:",
          after: "Hz",
          wordLimit: 1,
          correct: "20",
          explanation: "The lecturer says the range of human hearing is typically between 20 Hz and 20,000 Hz.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Sounds below 20 Hz are called:",
          wordLimit: 1,
          correct: "infrasound",
          explanation: "The lecturer says sounds below 20 Hz are called infrasound.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Loudness of a normal conversation:",
          after: "decibels",
          wordLimit: 1,
          correct: "60",
          explanation: "The lecturer says a normal conversation takes place at around 60 decibels.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Prolonged exposure above",
          after: "dB is damaging to human hearing",
          wordLimit: 1,
          correct: "85",
          explanation: "The lecturer says prolonged exposure to sounds above 85 decibels is considered damaging.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Target reverberation time in concert halls for orchestral music:",
          after: "seconds",
          wordLimit: 1,
          correct: "two",
          explanation: "The lecturer says the goal is to achieve a reverberation time of around two seconds for orchestral music.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Standard sampling rate for professional audio recording:",
          after: "kHz",
          wordLimit: 1,
          correct: "44.1",
          explanation: "The lecturer says the standard sampling rate for professional audio recording is 44,100 Hz, or 44.1 kHz.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Active noise cancellation technology was originally developed for:",
          wordLimit: 3,
          correct: "aircraft cockpits",
          explanation: "The lecturer says the technology was originally developed for use in aircraft cockpits in the 1970s.",
        },
      ],
    },
  ],
};
