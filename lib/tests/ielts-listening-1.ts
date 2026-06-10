import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening1: IELTSListeningTest = {
  id: "ielts-listening-1",
  exam: "IELTS",
  title: "IELTS Listening — Test 1",
  totalSeconds: 1800, // 30 minutes

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Sports Centre Membership Enquiry",
      context:
        "A woman named Claire is calling Riverside Sports Centre to enquire about membership options. A receptionist named David answers her call.",
      audioUrl: "", // Will be added after Google TTS setup
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
David: Good morning, Riverside Sports Centre. David speaking. How can I help you?

Claire: Oh, hello. I'm calling to find out about membership options. My name is Claire Peterson.

David: Peterson — could you spell that for me?

Claire: P-E-T-E-R-S-O-N.

David: Thank you, Ms Peterson. And what type of membership are you interested in?

Claire: I'd like a family membership, please. My husband and I have three children.

David: A family membership — that's a great choice. Our family membership currently costs £85 per month and covers two adults and up to four children.

Claire: That sounds perfect. When could we start?

David: We have availability from the 1st of April. Would that suit you?

Claire: Yes, the 1st of April works very well.

David: Wonderful. Now, I should mention our facilities. The swimming pool is open from 6 am on weekdays, and our gym closes at 9 pm on weekends.

Claire: That's fine. Do you have parking?

David: Yes, we have 200 car parking spaces, all free for members.

Claire: Great. What's your address?

David: We're at 14 Oak Street. And the nearest bus stop is Market Square — several routes stop right outside.

Claire: Perfect. I think that covers everything. Thank you so much!

David: Our pleasure. We look forward to seeing you on the 1st of April!
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Caller's surname:",
          wordLimit: 1,
          correct: "Peterson",
          explanation: "Claire spells out her surname as P-E-T-E-R-S-O-N.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Type of membership required:",
          wordLimit: 1,
          correct: "family",
          explanation: "Claire says she would like a family membership.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Number of children:",
          wordLimit: 1,
          correct: "3",
          explanation: "Claire says she and her husband have three children.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Monthly membership fee: £",
          wordLimit: 1,
          correct: "85",
          explanation: "The receptionist states the family membership costs £85 per month.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Preferred start date:",
          wordLimit: 2,
          correct: "1st April",
          explanation: "David mentions availability from the 1st of April and Claire agrees.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Swimming pool opens at (weekdays):",
          after: "am",
          wordLimit: 1,
          correct: "6",
          explanation: "David says the swimming pool is open from 6 am on weekdays.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Gym closes at (weekends):",
          after: "pm",
          wordLimit: 1,
          correct: "9",
          explanation: "David mentions the gym closes at 9 pm on weekends.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Number of car parking spaces:",
          wordLimit: 1,
          correct: "200",
          explanation: "David says there are 200 car parking spaces, all free for members.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Centre address:",
          wordLimit: 3,
          correct: "14 Oak Street",
          explanation: "David gives the address as 14 Oak Street.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Nearest bus stop:",
          wordLimit: 2,
          correct: "Market Square",
          explanation: "David says the nearest bus stop is Market Square.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Heritage Museum Tour Guide",
      context:
        "A tour guide named Helen is giving an introduction to visitors at the Greenfield Heritage Museum.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each museum section (16–20) with the correct description (A–F). Write the correct letter next to each section.",
      transcript: `
Hello everyone, and welcome to the Greenfield Heritage Museum. My name is Helen and I'll be your guide today.

The museum was established in 1902, making it over 120 years old. We are open every day of the week, including public holidays. Admission is free for all children under the age of five.

You'll find our excellent café in the basement — it's a great spot for lunch after your tour. I should mention that our east wing is currently undergoing renovation, so access is temporarily restricted. We hope to reopen it in the summer.

Now let me tell you about our different sections. The Victorian Gallery on the ground floor features permanent displays of everyday life from the 1800s. Just across the corridor, you'll find the Discovery Room — that's our dedicated space for children's activities, including hands-on exhibits and craft sessions.

In the central atrium, we rotate temporary exhibitions every three months. Right now we have a fascinating display on local industrial history. The Learning Centre on the first floor runs educational workshops for school groups and adults alike. And finally, our Archive Room contains one of the most comprehensive research libraries in the region, available by appointment.

We hope you enjoy your visit today!
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "When was the Greenfield Heritage Museum established?",
          options: [
            { label: "A", text: "1892" },
            { label: "B", text: "1902" },
            { label: "C", text: "1912" },
          ],
          correct: "B",
          explanation: "Helen says the museum was established in 1902.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "How many days per week is the museum open?",
          options: [
            { label: "A", text: "Five days" },
            { label: "B", text: "Six days" },
            { label: "C", text: "Every day" },
          ],
          correct: "C",
          explanation: "Helen says the museum is open every day of the week, including public holidays.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "What is the admission fee for children under 5?",
          options: [
            { label: "A", text: "Half price" },
            { label: "B", text: "Free" },
            { label: "C", text: "£2" },
          ],
          correct: "B",
          explanation: "Helen states admission is free for all children under the age of five.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "Where is the museum café located?",
          options: [
            { label: "A", text: "On the ground floor" },
            { label: "B", text: "On the first floor" },
            { label: "C", text: "In the basement" },
          ],
          correct: "C",
          explanation: "Helen says the café is in the basement.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "Which part of the museum is currently being renovated?",
          options: [
            { label: "A", text: "The east wing" },
            { label: "B", text: "The west wing" },
            { label: "C", text: "The main hall" },
          ],
          correct: "A",
          explanation: "Helen mentions the east wing is currently undergoing renovation.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "The Victorian Gallery",
          options: [
            { label: "A", text: "Temporary exhibitions" },
            { label: "B", text: "Permanent displays" },
            { label: "C", text: "Children's activities" },
            { label: "D", text: "Educational workshops" },
            { label: "E", text: "Research library" },
            { label: "F", text: "Café and refreshments" },
          ],
          correct: "B",
          explanation: "Helen says the Victorian Gallery features permanent displays of everyday life from the 1800s.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "The Discovery Room",
          options: [
            { label: "A", text: "Temporary exhibitions" },
            { label: "B", text: "Permanent displays" },
            { label: "C", text: "Children's activities" },
            { label: "D", text: "Educational workshops" },
            { label: "E", text: "Research library" },
            { label: "F", text: "Café and refreshments" },
          ],
          correct: "C",
          explanation: "Helen describes the Discovery Room as a dedicated space for children's activities.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "The Central Atrium",
          options: [
            { label: "A", text: "Temporary exhibitions" },
            { label: "B", text: "Permanent displays" },
            { label: "C", text: "Children's activities" },
            { label: "D", text: "Educational workshops" },
            { label: "E", text: "Research library" },
            { label: "F", text: "Café and refreshments" },
          ],
          correct: "A",
          explanation: "Helen says the atrium rotates temporary exhibitions every three months.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "The Learning Centre",
          options: [
            { label: "A", text: "Temporary exhibitions" },
            { label: "B", text: "Permanent displays" },
            { label: "C", text: "Children's activities" },
            { label: "D", text: "Educational workshops" },
            { label: "E", text: "Research library" },
            { label: "F", text: "Café and refreshments" },
          ],
          correct: "D",
          explanation: "Helen says the Learning Centre runs educational workshops for school groups and adults.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "The Archive Room",
          options: [
            { label: "A", text: "Temporary exhibitions" },
            { label: "B", text: "Permanent displays" },
            { label: "C", text: "Children's activities" },
            { label: "D", text: "Educational workshops" },
            { label: "E", text: "Research library" },
            { label: "F", text: "Café and refreshments" },
          ],
          correct: "E",
          explanation: "Helen describes the Archive Room as one of the most comprehensive research libraries in the region.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Students Discussing a Research Project",
      context:
        "Two university students, Emma and Jack, are meeting with their tutor, Dr Mills, to discuss their group research project on urban sustainability.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.",
      transcript: `
Dr Mills: Good morning, Emma, Jack. So tell me — have you finalised your project topic?

Emma: Yes, we've decided to focus on urban farming, Dr Mills. We thought it was more specific than general sustainability.

Jack: And there's a lot of recent research we can draw on.

Dr Mills: Good choice. Now, how long do you plan to spend on this?

Jack: We've scheduled eight weeks in total.

Dr Mills: That seems reasonable. What research methods are you planning to use?

Jack: I'm going to conduct online surveys — targeting local residents and businesses.

Emma: And I'll be doing field observations at three community gardens in the city. I think the most important thing is making sure our data is accurate — that's what I really want to focus on.

Dr Mills: I agree, data accuracy is crucial. When are you planning to meet next?

Emma: We're thinking Wednesday afternoon.

Jack: Yes, Wednesday works for both of us.

Dr Mills: Now, have you identified any challenges?

Emma: Honestly, the biggest issue is finding enough survey participants — we're worried about low response rates.

Jack: And time is really tight with our other coursework deadlines. Those are probably our two main concerns.

Dr Mills: Those are very common challenges. For the literature review, Emma, would you take the lead on that?

Emma: Yes, I'm happy to do that.

Dr Mills: And Jack, data collection is your area?

Jack: That's right.

Dr Mills: For the statistical analysis and final report, I'd suggest you work on those together.

Emma and Jack: Agreed.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What topic have Emma and Jack chosen for their project?",
          options: [
            { label: "A", text: "Solar energy" },
            { label: "B", text: "Urban farming" },
            { label: "C", text: "Water conservation" },
          ],
          correct: "B",
          explanation: "Emma says they have decided to focus on urban farming.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "How long have they scheduled to complete the project?",
          options: [
            { label: "A", text: "Four weeks" },
            { label: "B", text: "Six weeks" },
            { label: "C", text: "Eight weeks" },
          ],
          correct: "C",
          explanation: "Jack says they have scheduled eight weeks in total.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "What research method does Jack plan to use?",
          options: [
            { label: "A", text: "Online surveys" },
            { label: "B", text: "Field observations" },
            { label: "C", text: "Laboratory experiments" },
          ],
          correct: "A",
          explanation: "Jack says he is going to conduct online surveys targeting local residents and businesses.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "What does Emma say is the most important factor in their project?",
          options: [
            { label: "A", text: "Data accuracy" },
            { label: "B", text: "Visual presentation" },
            { label: "C", text: "Word count" },
          ],
          correct: "A",
          explanation: "Emma says the most important thing is making sure their data is accurate.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "When do Emma and Jack agree to meet next?",
          options: [
            { label: "A", text: "Monday" },
            { label: "B", text: "Wednesday" },
            { label: "C", text: "Friday" },
          ],
          correct: "B",
          explanation: "Both students confirm that Wednesday afternoon works for them.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "What does Dr Mills recommend they work on together?",
          options: [
            { label: "A", text: "Literature review and data collection" },
            { label: "B", text: "Statistical analysis and final report" },
            { label: "C", text: "Field observations and surveys" },
          ],
          correct: "B",
          explanation: "Dr Mills suggests they work on statistical analysis and the final report together.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO challenges do Emma and Jack identify for their project?",
          options: [
            { label: "A", text: "Finding enough survey participants" },
            { label: "B", text: "Time constraints from other coursework" },
            { label: "C", text: "High equipment costs" },
            { label: "D", text: "Supervisor unavailability" },
            { label: "E", text: "Weather conditions" },
          ],
          pickCount: 2,
          correct: ["A", "B"],
          explanation:
            "Emma mentions difficulty finding survey participants, and Jack mentions tight time due to other coursework deadlines.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO tasks will Emma be responsible for?",
          options: [
            { label: "A", text: "Online surveys" },
            { label: "B", text: "Field observations" },
            { label: "C", text: "Literature review" },
            { label: "D", text: "Data collection" },
            { label: "E", text: "Presenting findings" },
          ],
          pickCount: 2,
          correct: ["B", "C"],
          explanation:
            "Emma says she will do field observations and Dr Mills assigns her the literature review.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "Who is responsible for data collection?",
          options: [
            { label: "A", text: "Emma" },
            { label: "B", text: "Jack" },
            { label: "C", text: "Dr Mills" },
          ],
          correct: "B",
          explanation: "Dr Mills confirms that data collection is Jack's area.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "Who is responsible for the literature review?",
          options: [
            { label: "A", text: "Emma" },
            { label: "B", text: "Jack" },
            { label: "C", text: "Both equally" },
          ],
          correct: "A",
          explanation: "Dr Mills asks Emma to take the lead on the literature review, and she agrees.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: The Benefits of Urban Gardening",
      context:
        "A university lecturer is giving a talk about urban gardening and its benefits for modern cities.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon everyone. Today I want to talk about urban gardening — a trend that has grown by 47 percent in the last decade alone. The most common type you'll find in cities is the community garden, where residents share a plot of land to grow food together.

Let's look at the environmental benefits first. Urban gardens can reduce urban temperature by up to 3 degrees Celsius through what's known as the cooling effect of vegetation. Each hectare of urban garden absorbs approximately 15 tons of CO2 annually. They also support local bee populations, which are vital to pollination and our wider food system.

Turning to social benefits — urban gardening has a significant positive effect on the mental health of city residents. Studies consistently show it reduces stress and anxiety. For elderly participants specifically, gardening has been shown to reduce feelings of isolation — something that is unfortunately very common in urban environments. For younger generations, community gardens provide a form of environmental education, teaching children where food comes from and how ecosystems work.

Finally, the economic benefits. Research suggests the average family saves around £600 per year on groceries by growing their own produce. Beyond individual savings, urban gardening is also creating employment opportunities in the food production sector — from local market stalls to restaurant supply chains.

So to summarise — urban gardening offers a remarkably wide range of benefits, and I hope today's lecture has convinced you that it deserves far more policy attention than it currently receives. Thank you.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Urban gardening has grown by",
          after: "% in the last decade",
          wordLimit: 1,
          correct: "47",
          explanation: "The lecturer says urban gardening has grown by 47 percent in the last decade.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Most common type of urban garden:",
          after: "garden",
          wordLimit: 1,
          correct: "community",
          explanation: "The lecturer says the most common type is the community garden.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Can reduce urban",
          after: "by up to 3°C",
          wordLimit: 1,
          correct: "temperature",
          explanation: "The lecturer says urban gardens can reduce urban temperature by up to 3 degrees Celsius.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "CO2 absorbed per hectare annually:",
          after: "tons",
          wordLimit: 1,
          correct: "15",
          explanation: "The lecturer states each hectare absorbs approximately 15 tons of CO2 annually.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Supports local",
          after: "populations (important for pollination)",
          wordLimit: 1,
          correct: "bee",
          explanation: "The lecturer mentions urban gardens support local bee populations.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Improves",
          after: "health of city residents",
          wordLimit: 1,
          correct: "mental",
          explanation: "The lecturer says urban gardening has a significant positive effect on mental health.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Reduces feelings of",
          after: "in elderly participants",
          wordLimit: 1,
          correct: "isolation",
          explanation: "The lecturer says gardening reduces feelings of isolation in elderly participants.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Provides a form of",
          after: "education for children",
          wordLimit: 1,
          correct: "environmental",
          explanation: "The lecturer says community gardens provide a form of environmental education for children.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Average family saves approximately £",
          after: "per year on groceries",
          wordLimit: 1,
          correct: "600",
          explanation: "Research shows the average family saves around £600 per year by growing their own food.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Creates employment in the",
          after: "sector",
          wordLimit: 2,
          correct: "food production",
          explanation: "The lecturer says urban gardening creates employment in the food production sector.",
        },
      ],
    },
  ],
};
