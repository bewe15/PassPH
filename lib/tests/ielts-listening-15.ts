import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening15: IELTSListeningTest = {
  id: "ielts-listening-15",
  exam: "IELTS",
  title: "IELTS Listening — Test 15",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Swimming Pool Membership",
      context:
        "Tony is visiting Lakeside Aquatic Centre to enquire about membership. Sandra, the receptionist, assists him.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Sandra: Good morning. Welcome to Lakeside Aquatic Centre. How can I help you?

Tony: Hi there. I'm interested in taking out a membership. My name is Tony Barfield.

Sandra: Barfield — let me just spell that back: B-A-R-F-I-E-L-D?

Tony: Yes, that's right.

Sandra: Thank you, Mr Barfield. What type of membership are you after?

Tony: I'd like an individual adult membership, please. It's just for me.

Sandra: Of course. Our individual adult membership is £35 per month, or you can save with an annual payment of £380.

Tony: I'll go with the monthly option for now — £35 a month.

Sandra: That's fine. And could I ask your date of birth?

Tony: It's the 12th of March 1986.

Sandra: Thank you. What's your home postcode?

Tony: DL9 4RW.

Sandra: Perfect. Now, what facilities are you most interested in using?

Tony: Mainly the swimming pool, but I'd like to use the sauna as well.

Sandra: Great. The main pool is 50 metres long and is open from six in the morning until nine at night, seven days a week. Our sauna is included in the membership at no extra cost.

Tony: That's good to hear. Are there any lane swimming sessions?

Sandra: Yes — we have dedicated lane swimming every morning from half past six until eight o'clock. We recommend booking in advance as spaces fill up quickly.

Tony: I see. Is there a joining fee on top of the monthly payment?

Sandra: Yes, there's a one-off joining fee of £20. That covers your membership card and an induction session with one of our staff.

Tony: What does the induction involve?

Sandra: Essentially a safety briefing and a tour of all our facilities. It lasts about forty-five minutes.

Tony: That sounds straightforward. What's the notice period if I want to cancel?

Sandra: We ask for one month's written notice. You can email or post that to us.

Tony: Right. I think I'd like to go ahead. What do I need to complete the sign-up?

Sandra: Just your bank details for the direct debit, and a form of ID — a driving licence or passport is fine.

Tony: I've got my driving licence with me.

Sandra: Perfect. Let's get you started then.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Customer surname:",
          wordLimit: 1,
          correct: "Barfield",
          explanation: "Sandra spells back the surname as B-A-R-F-I-E-L-D and Tony confirms it.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Membership type required:",
          wordLimit: 2,
          correct: "individual adult",
          explanation: "Tony says he would like an individual adult membership.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Monthly fee: £",
          wordLimit: 1,
          correct: "35",
          explanation: "Sandra says the individual adult membership is £35 per month.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Date of birth:",
          wordLimit: 3,
          correct: "12th of March 1986",
          explanation: "Tony says his date of birth is the 12th of March 1986.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Home postcode:",
          wordLimit: 1,
          correct: "DL9 4RW",
          explanation: "Tony gives his postcode as DL9 4RW.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Main pool length:",
          after: "metres",
          wordLimit: 1,
          correct: "50",
          explanation: "Sandra says the main pool is 50 metres long.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Lane swimming available each morning from",
          after: "until 8am",
          wordLimit: 2,
          correct: "half past six",
          explanation: "Sandra says dedicated lane swimming is from half past six until eight o'clock.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "One-off joining fee: £",
          wordLimit: 1,
          correct: "20",
          explanation: "Sandra says there is a one-off joining fee of £20.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Induction session duration:",
          after: "minutes",
          wordLimit: 2,
          correct: "forty-five",
          explanation: "Sandra says the induction lasts about forty-five minutes.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Cancellation notice period:",
          after: "month's written notice",
          wordLimit: 1,
          correct: "one",
          explanation: "Sandra says they ask for one month's written notice to cancel.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Local Radio: Heritage Buildings Programme",
      context:
        "A local radio presenter is giving a programme about the city's historic heritage buildings and their current uses.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each heritage building (16–20) with its current use (A–F). Write the correct letter next to each building.",
      transcript: `
Good morning and welcome to Heritage Hour. Today we're taking a look at some of the most significant listed buildings in our city — structures that tell the story of our past and, in many cases, have been imaginatively repurposed for the present.

Our city has 74 Grade I and Grade II listed buildings, making it one of the most densely listed urban areas in the north of England. The council's heritage team has been working for the past eight years to secure funding for restoration and adaptive reuse of properties that had fallen into disrepair.

The Merchants' Hall, dating from 1743, was the finest example of Georgian civic architecture in the region. After decades of neglect, a £3.2 million restoration project was completed in 2019. The work won a national award for architectural conservation the following year.

Admission to most of the heritage sites we'll discuss today is free, though donations are always welcome. The exception is the Old Gaol on Market Street, where tickets are £6.50 for adults.

Let me run through some of the buildings and how they're being used today. The Old Watermill, which dates from the 1600s, has been converted into a popular riverside restaurant. The Victorian Station — closed to trains since 1968 — is now a thriving arts centre hosting exhibitions, concerts, and theatre. The Mechanics' Institute, once a hub of working-class education, is now home to the city's main public library. The Old Gaol on Market Street operates as a fascinating heritage museum, giving visitors a glimpse of eighteenth-century prison life. The Dye Works, a huge industrial building from the late 1800s, was sympathetically converted into 42 residential apartments in 2015. And finally, the former Corn Exchange, with its magnificent domed roof, was transformed into a stylish indoor market in 2021.

These buildings are not relics — they are living parts of our community. We'll be back after the break with more on this week's Heritage Open Days.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "How many Grade I and Grade II listed buildings does the city have?",
          options: [
            { label: "A", text: "47" },
            { label: "B", text: "74" },
            { label: "C", text: "147" },
          ],
          correct: "B",
          explanation: "The presenter says the city has 74 Grade I and Grade II listed buildings.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "How long has the council's heritage team been working on restoration projects?",
          options: [
            { label: "A", text: "Six years" },
            { label: "B", text: "Eight years" },
            { label: "C", text: "Ten years" },
          ],
          correct: "B",
          explanation: "The presenter says the heritage team has been working for the past eight years.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "How much did the Merchants' Hall restoration cost?",
          options: [
            { label: "A", text: "£2.3 million" },
            { label: "B", text: "£3.2 million" },
            { label: "C", text: "£3.8 million" },
          ],
          correct: "B",
          explanation: "The presenter says the Merchants' Hall restoration project cost £3.2 million.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "When was the Merchants' Hall restoration completed?",
          options: [
            { label: "A", text: "2017" },
            { label: "B", text: "2018" },
            { label: "C", text: "2019" },
          ],
          correct: "C",
          explanation: "The presenter says the restoration project was completed in 2019.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "How much does it cost to visit the Old Gaol?",
          options: [
            { label: "A", text: "Free" },
            { label: "B", text: "£5.50" },
            { label: "C", text: "£6.50" },
          ],
          correct: "C",
          explanation: "The presenter says tickets at the Old Gaol are £6.50 for adults.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "The Old Watermill",
          options: [
            { label: "A", text: "Riverside restaurant" },
            { label: "B", text: "Arts centre" },
            { label: "C", text: "Public library" },
            { label: "D", text: "Heritage museum" },
            { label: "E", text: "Residential apartments" },
            { label: "F", text: "Indoor market" },
          ],
          correct: "A",
          explanation: "The presenter says the Old Watermill has been converted into a popular riverside restaurant.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "The Victorian Station",
          options: [
            { label: "A", text: "Riverside restaurant" },
            { label: "B", text: "Arts centre" },
            { label: "C", text: "Public library" },
            { label: "D", text: "Heritage museum" },
            { label: "E", text: "Residential apartments" },
            { label: "F", text: "Indoor market" },
          ],
          correct: "B",
          explanation: "The presenter says the Victorian Station is now a thriving arts centre hosting exhibitions, concerts, and theatre.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "The Mechanics' Institute",
          options: [
            { label: "A", text: "Riverside restaurant" },
            { label: "B", text: "Arts centre" },
            { label: "C", text: "Public library" },
            { label: "D", text: "Heritage museum" },
            { label: "E", text: "Residential apartments" },
            { label: "F", text: "Indoor market" },
          ],
          correct: "C",
          explanation: "The presenter says the Mechanics' Institute is now home to the city's main public library.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "The Dye Works",
          options: [
            { label: "A", text: "Riverside restaurant" },
            { label: "B", text: "Arts centre" },
            { label: "C", text: "Public library" },
            { label: "D", text: "Heritage museum" },
            { label: "E", text: "Residential apartments" },
            { label: "F", text: "Indoor market" },
          ],
          correct: "E",
          explanation: "The presenter says the Dye Works was converted into 42 residential apartments in 2015.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "The former Corn Exchange",
          options: [
            { label: "A", text: "Riverside restaurant" },
            { label: "B", text: "Arts centre" },
            { label: "C", text: "Public library" },
            { label: "D", text: "Heritage museum" },
            { label: "E", text: "Residential apartments" },
            { label: "F", text: "Indoor market" },
          ],
          correct: "F",
          explanation: "The presenter says the Corn Exchange was transformed into a stylish indoor market in 2021.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Sociology of Sport",
      context:
        "Students Chloe and Ryan are meeting with their tutor, Professor Wright, to discuss their sociology of sport project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Professor Wright: So, Chloe, Ryan — what direction has your sociology of sport project taken?

Chloe: We've been looking at the commercialisation of football in England, Professor Wright, focusing on the Premier League era since 1992.

Ryan: We wanted to examine how television broadcast deals transformed the sport — financially and culturally.

Professor Wright: It's a rich area. What theoretical framework are you applying?

Chloe: We're using Bourdieu's concept of capital — economic, social, and cultural — to analyse how the influx of money has restructured power relations in the sport.

Ryan: I was initially more drawn to a Marxist approach, but we agreed Bourdieu offered a more nuanced lens for this particular topic.

Professor Wright: Good reasoning. What primary sources have you gathered?

Ryan: We conducted interviews with five former semi-professional footballers about their experiences of the sport before and after the commercialisation period.

Chloe: And we've analysed club financial statements from 1990 to 2023, which showed some remarkable shifts.

Professor Wright: Quantitative and qualitative — that balance is excellent. What does the financial data reveal?

Chloe: The wage bill at top clubs increased by more than 800 percent between 1992 and 2010. That's extraordinary.

Ryan: And ticket prices rose at roughly three times the rate of inflation over the same period, which has effectively priced out many traditional supporters.

Professor Wright: A crucial social consequence. Now, I noticed your draft doesn't say much about gender. Could you develop that angle?

Chloe: Yes, we plan to add a section on how the commercialisation process has both helped and hindered the development of women's football.

Ryan: The Women's Super League only became fully professional in 2018, so there's a significant time lag we want to discuss.

Professor Wright: Excellent. For your final submission, which two things are you most focused on improving?

Ryan: The theoretical framework section — I think we need to explain Bourdieu more clearly for the reader.

Chloe: And the structure of our argument in the conclusion. It's a bit disjointed at the moment.

Professor Wright: Those are exactly the right things to address. I look forward to reading the final version.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What is the focus of Chloe and Ryan's project?",
          options: [
            { label: "A", text: "The history of the Olympics" },
            { label: "B", text: "The commercialisation of Premier League football" },
            { label: "C", text: "Race and identity in professional sport" },
          ],
          correct: "B",
          explanation: "Chloe says they are looking at the commercialisation of football in England, focusing on the Premier League era since 1992.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "Which theoretical framework did they choose?",
          options: [
            { label: "A", text: "Marxism" },
            { label: "B", text: "Functionalism" },
            { label: "C", text: "Bourdieu's concept of capital" },
          ],
          correct: "C",
          explanation: "Chloe says they are using Bourdieu's concept of capital as their theoretical framework.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "How many former semi-professional footballers did Ryan interview?",
          options: [
            { label: "A", text: "Three" },
            { label: "B", text: "Five" },
            { label: "C", text: "Seven" },
          ],
          correct: "B",
          explanation: "Ryan says they conducted interviews with five former semi-professional footballers.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "By how much did wage bills at top clubs increase between 1992 and 2010?",
          options: [
            { label: "A", text: "More than 400 percent" },
            { label: "B", text: "More than 600 percent" },
            { label: "C", text: "More than 800 percent" },
          ],
          correct: "C",
          explanation: "Chloe says the wage bill at top clubs increased by more than 800 percent between 1992 and 2010.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "When did the Women's Super League become fully professional?",
          options: [
            { label: "A", text: "2015" },
            { label: "B", text: "2018" },
            { label: "C", text: "2020" },
          ],
          correct: "B",
          explanation: "Ryan says the Women's Super League only became fully professional in 2018.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "At what rate did ticket prices rise compared to inflation?",
          options: [
            { label: "A", text: "Twice the rate of inflation" },
            { label: "B", text: "Three times the rate of inflation" },
            { label: "C", text: "Four times the rate of inflation" },
          ],
          correct: "B",
          explanation: "Ryan says ticket prices rose at roughly three times the rate of inflation.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO improvements are Ryan and Chloe focused on for their final submission?",
          options: [
            { label: "A", text: "Explaining Bourdieu's framework more clearly" },
            { label: "B", text: "Adding more interview data" },
            { label: "C", text: "Improving the structure of their conclusion" },
            { label: "D", text: "Expanding the introduction" },
            { label: "E", text: "Including more financial data" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Ryan says they need to explain Bourdieu more clearly, and Chloe says the structure of the conclusion needs improving.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO primary sources did they use in their research?",
          options: [
            { label: "A", text: "Interviews with former semi-professional footballers" },
            { label: "B", text: "Surveys of current Premier League supporters" },
            { label: "C", text: "Club financial statements from 1990 to 2023" },
            { label: "D", text: "Government sports policy documents" },
            { label: "E", text: "Media coverage analysis" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Ryan mentions interviews with five former semi-professional footballers, and Chloe mentions club financial statements from 1990 to 2023.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "What does Professor Wright suggest they should develop further?",
          options: [
            { label: "A", text: "Their analysis of media rights" },
            { label: "B", text: "The gender angle" },
            { label: "C", text: "Their financial data analysis" },
          ],
          correct: "B",
          explanation: "Professor Wright says he noticed the draft doesn't say much about gender and asks them to develop that angle.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "What period does their financial data analysis cover?",
          options: [
            { label: "A", text: "1985 to 2023" },
            { label: "B", text: "1990 to 2023" },
            { label: "C", text: "1992 to 2023" },
          ],
          correct: "B",
          explanation: "Chloe says they analysed club financial statements from 1990 to 2023.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: Robotics and Automation in Industry",
      context:
        "A university lecturer is giving a talk on the development and impact of robotics and automation in modern industry.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture focuses on robotics and automation in industry — one of the most rapidly developing areas of technology, with profound implications for economies and workforces worldwide.

The use of machines to replace human labour is not new. The first wave of industrial automation dates back to the late eighteenth century with the invention of the steam engine. However, modern robotics as we know it began in the 1960s, when the first programmable industrial robot — called Unimate — was installed on a General Motors assembly line in the United States.

Today, the global industrial robotics market is worth over $50 billion and is projected to double within the next decade. The automotive sector remains the largest single employer of industrial robots, accounting for approximately 33 percent of all installations. Electronics manufacturing is the second largest sector.

Modern industrial robots are classified by their function. Articulated robots — which have rotating joints, similar in some ways to a human arm — are the most common type and are used for tasks such as welding, painting, and material handling. Collaborative robots, often called cobots, are a newer category designed to work safely alongside human workers without the need for protective barriers.

One of the most significant challenges associated with widespread automation is workforce displacement. Studies suggest that in advanced economies, approximately 14 percent of existing jobs are at high risk of automation within the next twenty years. However, economists also point out that automation historically creates new categories of employment — the debate centres on whether reskilling programmes can be deployed fast enough to match the pace of change.

In the logistics and warehousing sector, automation has advanced particularly rapidly. Amazon's fulfilment centres now use over 750,000 robots worldwide, reducing order processing times by around 75 percent compared to manual operations.

The next frontier for industrial robotics is artificial intelligence integration — enabling robots to learn from their environment and adapt to new tasks without explicit reprogramming. This transition from fixed automation to what engineers call adaptive automation is likely to define the coming decade of industrial development.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "First wave of industrial automation began with the:",
          wordLimit: 2,
          correct: "steam engine",
          explanation: "The lecturer says the first wave of industrial automation dates back to the invention of the steam engine.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "First programmable industrial robot was called:",
          wordLimit: 1,
          correct: "Unimate",
          explanation: "The lecturer says the first programmable industrial robot was called Unimate.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Unimate was installed in the",
          after: "s",
          wordLimit: 1,
          correct: "1960",
          explanation: "The lecturer says modern robotics began in the 1960s when Unimate was installed.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Global industrial robotics market value:",
          after: "$50 billion",
          wordLimit: 1,
          correct: "over",
          explanation: "The lecturer says the global industrial robotics market is worth over $50 billion.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Largest sector for industrial robots:",
          wordLimit: 1,
          correct: "automotive",
          explanation: "The lecturer says the automotive sector remains the largest single employer of industrial robots.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Automotive sector accounts for approximately",
          after: "percent of all robot installations",
          wordLimit: 1,
          correct: "33",
          explanation: "The lecturer says the automotive sector accounts for approximately 33 percent of all installations.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Collaborative robots are also known as:",
          wordLimit: 1,
          correct: "cobots",
          explanation: "The lecturer says collaborative robots are often called cobots.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Percentage of jobs at high risk of automation within 20 years:",
          after: "%",
          wordLimit: 1,
          correct: "14",
          explanation: "The lecturer says approximately 14 percent of existing jobs are at high risk of automation within the next twenty years.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Amazon uses over",
          after: "robots in its fulfilment centres",
          wordLimit: 1,
          correct: "750,000",
          explanation: "The lecturer says Amazon's fulfilment centres use over 750,000 robots worldwide.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Next frontier in robotics is called:",
          after: "automation",
          wordLimit: 1,
          correct: "adaptive",
          explanation: "The lecturer says the transition to what engineers call adaptive automation will define the coming decade.",
        },
      ],
    },
  ],
};
