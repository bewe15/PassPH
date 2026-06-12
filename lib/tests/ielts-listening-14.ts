import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening14: IELTSListeningTest = {
  id: "ielts-listening-14",
  exam: "IELTS",
  title: "IELTS Listening — Test 14",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Photography Club Enquiry",
      context:
        "Emily is calling Riverside Photography Club to find out about joining. Martin, the club secretary, answers her call.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Martin: Good afternoon, Riverside Photography Club. Martin speaking. How can I help?

Emily: Hello, I'm interested in joining your club. My name is Emily Dawnson.

Martin: Dawnson — could you spell that for me?

Emily: D-A-W-N-S-O-N.

Martin: Lovely. And are you a complete beginner, Emily, or do you have some experience?

Emily: I've been taking photos as a hobby for about three years, so I'd say intermediate level.

Martin: That's perfect — most of our members are at a similar stage. Can I ask what type of photography you mainly enjoy?

Emily: Mostly landscape photography, though I'd like to try portrait work too.

Martin: Wonderful. We run a variety of sessions covering both. Now, our membership fee is £40 per year, or £12 per quarter if you'd prefer to pay that way.

Emily: I think I'll go with the annual fee — £40 suits me better.

Martin: Great. We meet every Tuesday evening at seven o'clock at the community hall on Parkside Road.

Emily: That should work for me. How many members do you have at the moment?

Martin: We currently have 38 members, though we're looking to expand to around 50.

Emily: Do you run any outdoor sessions or trips?

Martin: Yes, we organise a field trip every two months. The next one is to the Peak District on the 14th of October.

Emily: Oh, that sounds brilliant. Is equipment provided?

Martin: Members need their own camera, but we do have a small selection of tripods available to borrow. We ask for a refundable deposit of £15 for each tripod.

Emily: Good to know. How do I go about signing up?

Martin: I can take your details now and send you the membership form by email. What's the best email address for you?

Emily: It's emily.dawnson@mailbox.co.uk.

Martin: Perfect. And one more thing — could I take your phone number in case we need to contact you before the membership form arrives?

Emily: Yes, it's 07721 489 350.

Martin: Brilliant. I'll get that form to you today, Emily.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Caller's surname:",
          wordLimit: 1,
          correct: "Dawnson",
          explanation: "Emily spells out her surname as D-A-W-N-S-O-N.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Experience level:",
          wordLimit: 1,
          correct: "intermediate",
          explanation: "Emily says she would describe herself as intermediate level.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Main photography interest:",
          wordLimit: 1,
          correct: "landscape",
          explanation: "Emily says she mainly enjoys landscape photography.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Annual membership fee: £",
          wordLimit: 1,
          correct: "40",
          explanation: "Martin says the annual membership fee is £40.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Meetings held every",
          after: "evening at 7pm",
          wordLimit: 1,
          correct: "Tuesday",
          explanation: "Martin says the club meets every Tuesday evening at seven o'clock.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Meeting venue:",
          wordLimit: 4,
          correct: "community hall on Parkside Road",
          explanation: "Martin says the club meets at the community hall on Parkside Road.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Current number of members:",
          wordLimit: 1,
          correct: "38",
          explanation: "Martin says the club currently has 38 members.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Next field trip destination:",
          wordLimit: 2,
          correct: "Peak District",
          explanation: "Martin says the next field trip is to the Peak District.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Tripod deposit: £",
          wordLimit: 1,
          correct: "15",
          explanation: "Martin says the refundable deposit for borrowing a tripod is £15.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Caller's phone number:",
          wordLimit: 3,
          correct: "07721 489 350",
          explanation: "Emily gives her phone number as 07721 489 350.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Community Farm Open Day Announcement",
      context:
        "The host of Greenacres Community Farm is giving an announcement about their upcoming open day.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each activity (16–20) with the correct location on the farm (A–F). Write the correct letter next to each activity.",
      transcript: `
Good morning, everyone, and welcome to today's Greenacres Community Farm open day announcement. I'm absolutely delighted that so many of you have come to find out more about what we're offering.

Greenacres was established in 2008 as a cooperative project, and we've been welcoming visitors and volunteers ever since. The farm covers 35 acres of mixed farmland on the southern edge of town. We work with over 120 volunteer members throughout the year, and this open day is our chance to recruit new faces for the coming season.

Admission to today's event is free for all visitors. However, if you'd like to purchase produce from our farm shop, we ask for cash only as our card reader is unfortunately out of order today. The shop stocks seasonal vegetables, free-range eggs, and our award-winning honey.

We have a fantastic programme lined up. This morning's guided walk will take you through our woodland trail — a two-kilometre route through oak and beech forest. The walk starts at ten o'clock and will last approximately ninety minutes. Please note that parts of the path can be muddy, so suitable footwear is strongly advised.

This afternoon, at two o'clock, we're running a bread-making workshop in the bakehouse. Places are limited to sixteen participants, and there is a small charge of £8 per person to cover ingredients. Children are very welcome to attend alongside adults.

Let me take you through some of the key spots on the farm. Our children's play area, which includes the animal petting section, is located next to the old barn. The farm shop is situated at the main entrance, so you'll pass it on the way in and out. Tractor rides for the family are running from the east field. Our beekeeping demonstration will take place in the orchard. And the outdoor café, where refreshments are available all day, is beside the duck pond.

We hope you'll leave today inspired to get involved. Sign-up sheets for volunteering are available at the information desk near the car park. Thank you, and enjoy your day at Greenacres.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "In what year was Greenacres Community Farm established?",
          options: [
            { label: "A", text: "1998" },
            { label: "B", text: "2008" },
            { label: "C", text: "2018" },
          ],
          correct: "B",
          explanation: "The host says Greenacres was established in 2008.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "How many volunteer members does the farm work with?",
          options: [
            { label: "A", text: "Over 100" },
            { label: "B", text: "Over 120" },
            { label: "C", text: "Over 150" },
          ],
          correct: "B",
          explanation: "The host says the farm works with over 120 volunteer members throughout the year.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "Why can visitors only pay by cash at the farm shop today?",
          options: [
            { label: "A", text: "It is farm policy" },
            { label: "B", text: "The card reader is out of order" },
            { label: "C", text: "The internet connection is down" },
          ],
          correct: "B",
          explanation: "The host says the card reader is unfortunately out of order today.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "How long is the guided woodland walk?",
          options: [
            { label: "A", text: "One kilometre" },
            { label: "B", text: "One and a half kilometres" },
            { label: "C", text: "Two kilometres" },
          ],
          correct: "C",
          explanation: "The host says the guided walk follows a two-kilometre route through oak and beech forest.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "How much does the bread-making workshop cost per person?",
          options: [
            { label: "A", text: "£6" },
            { label: "B", text: "£8" },
            { label: "C", text: "£10" },
          ],
          correct: "B",
          explanation: "The host says there is a small charge of £8 per person for the bread-making workshop.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "Children's play area and animal petting section",
          options: [
            { label: "A", text: "Next to the old barn" },
            { label: "B", text: "At the main entrance" },
            { label: "C", text: "In the east field" },
            { label: "D", text: "In the orchard" },
            { label: "E", text: "Beside the duck pond" },
            { label: "F", text: "Near the car park" },
          ],
          correct: "A",
          explanation: "The host says the children's play area is located next to the old barn.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "Farm shop",
          options: [
            { label: "A", text: "Next to the old barn" },
            { label: "B", text: "At the main entrance" },
            { label: "C", text: "In the east field" },
            { label: "D", text: "In the orchard" },
            { label: "E", text: "Beside the duck pond" },
            { label: "F", text: "Near the car park" },
          ],
          correct: "B",
          explanation: "The host says the farm shop is situated at the main entrance.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "Tractor rides",
          options: [
            { label: "A", text: "Next to the old barn" },
            { label: "B", text: "At the main entrance" },
            { label: "C", text: "In the east field" },
            { label: "D", text: "In the orchard" },
            { label: "E", text: "Beside the duck pond" },
            { label: "F", text: "Near the car park" },
          ],
          correct: "C",
          explanation: "The host says tractor rides are running from the east field.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "Beekeeping demonstration",
          options: [
            { label: "A", text: "Next to the old barn" },
            { label: "B", text: "At the main entrance" },
            { label: "C", text: "In the east field" },
            { label: "D", text: "In the orchard" },
            { label: "E", text: "Beside the duck pond" },
            { label: "F", text: "Near the car park" },
          ],
          correct: "D",
          explanation: "The host says the beekeeping demonstration will take place in the orchard.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "Outdoor café",
          options: [
            { label: "A", text: "Next to the old barn" },
            { label: "B", text: "At the main entrance" },
            { label: "C", text: "In the east field" },
            { label: "D", text: "In the orchard" },
            { label: "E", text: "Beside the duck pond" },
            { label: "F", text: "Near the car park" },
          ],
          correct: "E",
          explanation: "The host says the outdoor café is beside the duck pond.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Climate Science Project",
      context:
        "Students Alex and Jessica are meeting with their tutor, Dr Foster, to discuss their climate science project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Foster: Good to see you both. So, how is the climate science project coming along?

Alex: We've made good progress, Dr Foster. We've decided to focus on the impact of deforestation on regional rainfall patterns.

Jessica: Yes — it was a tough choice between that and ocean acidification, but deforestation gave us a clearer research angle.

Dr Foster: It's a well-evidenced area. What data are you working with?

Alex: We've been using satellite imagery from the past twenty years, combined with meteorological records from the Brazilian meteorological agency.

Jessica: I've also been analysing peer-reviewed papers — mostly from Nature and Environmental Science journals.

Dr Foster: And what's your central argument shaping up to be?

Jessica: Essentially, we're arguing that deforestation in the Amazon has reduced local rainfall by an average of 12 percent over the study period.

Alex: We've got quite strong statistical evidence for that from the datasets.

Dr Foster: That's a significant finding. How are you presenting your data?

Alex: We're using a combination of maps and line graphs to show the spatial and temporal changes.

Jessica: And we've included a comparison table showing our findings against three other similar studies.

Dr Foster: Good. Have you encountered any difficulties?

Jessica: The biggest issue has been dealing with gaps in the historical data — some records from the 1990s are incomplete.

Alex: And we struggled initially to get permission to use some of the satellite datasets, but that's resolved now.

Dr Foster: Those are understandable obstacles. Now, I want to ask — what do you consider the two most important contributions of your study?

Alex: I think it's the new regional analysis, which covers an area that hasn't been studied at this resolution before.

Jessica: And the methodology itself — combining satellite imagery with ground-level meteorological data is quite novel in this field.

Dr Foster: Agreed. For the final submission, what are your two outstanding tasks?

Alex: We still need to write the abstract and finalize the bibliography.

Jessica: Yes, those are the last two things. Everything else is drafted.

Dr Foster: Make sure the abstract is under 250 words — the guidelines are strict on that.

Alex: Understood — we'll keep it concise.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What topic did Alex and Jessica choose for their project?",
          options: [
            { label: "A", text: "Ocean acidification" },
            { label: "B", text: "Glacier retreat" },
            { label: "C", text: "Deforestation and rainfall patterns" },
          ],
          correct: "C",
          explanation: "Alex says they decided to focus on the impact of deforestation on regional rainfall patterns.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "What is their central argument?",
          options: [
            { label: "A", text: "Deforestation has increased rainfall by 12 percent" },
            { label: "B", text: "Deforestation has reduced local rainfall by 12 percent" },
            { label: "C", text: "Deforestation has had no measurable effect on rainfall" },
          ],
          correct: "B",
          explanation: "Jessica says they argue deforestation in the Amazon has reduced local rainfall by an average of 12 percent.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "What types of data visualisation are they using?",
          options: [
            { label: "A", text: "Bar charts and pie charts" },
            { label: "B", text: "Maps and line graphs" },
            { label: "C", text: "Scatter plots and histograms" },
          ],
          correct: "B",
          explanation: "Alex says they are using maps and line graphs to show spatial and temporal changes.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "What was the main problem with historical data?",
          options: [
            { label: "A", text: "It was in a foreign language" },
            { label: "B", text: "There were gaps in records from the 1990s" },
            { label: "C", text: "It was too expensive to access" },
          ],
          correct: "B",
          explanation: "Jessica says the biggest issue was gaps in the historical data, with some records from the 1990s being incomplete.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What word limit has Dr Foster mentioned for the abstract?",
          options: [
            { label: "A", text: "200 words" },
            { label: "B", text: "250 words" },
            { label: "C", text: "300 words" },
          ],
          correct: "B",
          explanation: "Dr Foster says the abstract must be under 250 words and the guidelines are strict on that.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "What data source did Alex primarily use?",
          options: [
            { label: "A", text: "Peer-reviewed journal articles" },
            { label: "B", text: "Government reports" },
            { label: "C", text: "Satellite imagery and meteorological records" },
          ],
          correct: "C",
          explanation: "Alex says he used satellite imagery from the past twenty years combined with meteorological records.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO contributions of the study do Alex and Jessica highlight?",
          options: [
            { label: "A", text: "A new regional analysis at high resolution" },
            { label: "B", text: "A large-scale field survey" },
            { label: "C", text: "A novel methodology combining satellite and ground data" },
            { label: "D", text: "A new computer model" },
            { label: "E", text: "Analysis of ocean temperatures" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Alex highlights the new regional analysis, and Jessica highlights the novel methodology combining satellite imagery with meteorological data.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO tasks do Alex and Jessica still need to complete?",
          options: [
            { label: "A", text: "Write the introduction" },
            { label: "B", text: "Write the abstract" },
            { label: "C", text: "Finalize the bibliography" },
            { label: "D", text: "Produce the comparison table" },
            { label: "E", text: "Collect the satellite data" },
          ],
          pickCount: 2,
          correct: ["B", "C"],
          explanation:
            "Alex says they still need to write the abstract and finalize the bibliography.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "Which journals did Jessica mainly read for her literature review?",
          options: [
            { label: "A", text: "Science and Geography Review" },
            { label: "B", text: "Nature and Environmental Science" },
            { label: "C", text: "Climate Today and Earth Systems" },
          ],
          correct: "B",
          explanation: "Jessica says she analysed peer-reviewed papers mostly from Nature and Environmental Science journals.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "How many similar studies does their comparison table reference?",
          options: [
            { label: "A", text: "Two" },
            { label: "B", text: "Three" },
            { label: "C", text: "Four" },
          ],
          correct: "B",
          explanation: "Jessica says they included a comparison table showing their findings against three other similar studies.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: Behavioural Economics",
      context:
        "A university lecturer is giving a talk on behavioural economics and how human psychology affects financial decision-making.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture introduces behavioural economics — a field that combines insights from psychology with traditional economic theory to better explain how people actually make financial decisions.

Classical economics assumes that individuals are rational actors who always maximise their own benefit. Behavioural economics challenges this assumption. Research shows that human decision-making is systematically biased in predictable ways. The field gained widespread academic recognition in 2002, when Daniel Kahneman was awarded the Nobel Prize in Economics for his work on cognitive biases.

One of the most important concepts in behavioural economics is loss aversion. Studies show that people feel the pain of losing something approximately twice as strongly as the pleasure of gaining something of equal value. This helps explain why investors often hold onto failing shares for too long, hoping to avoid realising a loss.

Another key concept is the anchoring effect. When people make a decision, they tend to rely heavily on the first piece of information they receive — the so-called anchor. Retailers use this constantly: marking down a product from £200 to £120 makes the sale price feel like a bargain, even if the product was never actually worth £200.

A third concept is the default effect. Research shows that when people are given a default option, they tend to accept it without change. Pension enrolment studies in the UK found that opt-out schemes — where employees are automatically enrolled unless they choose otherwise — increased participation rates from around 40 percent to over 90 percent.

Status quo bias is closely related: people tend to prefer the current state of affairs, even when changing would be objectively better for them. This is one reason why companies find it so easy to retain customers who might benefit from switching providers.

Finally, the concept of present bias describes our tendency to prefer immediate rewards over larger future ones. This explains why people consistently fail to save adequately for retirement, even when they know intellectually that they should.

Behavioural economics has transformed public policy design, leading to what is called nudge theory — the idea that small changes to how choices are presented can have a large impact on behaviour without restricting freedom of choice.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Behavioural economics combines psychology with:",
          wordLimit: 2,
          correct: "economic theory",
          explanation: "The lecturer says behavioural economics combines insights from psychology with traditional economic theory.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Year behavioural economics gained Nobel recognition:",
          wordLimit: 1,
          correct: "2002",
          explanation: "The lecturer says the field gained recognition in 2002 when Daniel Kahneman won the Nobel Prize.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Nobel Prize winner for cognitive bias research:",
          wordLimit: 2,
          correct: "Daniel Kahneman",
          explanation: "The lecturer says Daniel Kahneman was awarded the Nobel Prize for his work on cognitive biases.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Loss aversion: pain of losing felt approximately",
          after: "times as strongly as equivalent gain",
          wordLimit: 1,
          correct: "twice",
          explanation: "The lecturer says people feel the pain of losing something approximately twice as strongly as the pleasure of gaining something of equal value.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "The anchoring effect relies on the first piece of:",
          wordLimit: 1,
          correct: "information",
          explanation: "The lecturer says anchoring occurs when people rely heavily on the first piece of information they receive.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "The default effect: people tend to",
          after: "the default option",
          wordLimit: 1,
          correct: "accept",
          explanation: "The lecturer says when given a default option, people tend to accept it without change.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Pension opt-out schemes increased participation from 40% to over:",
          after: "%",
          wordLimit: 1,
          correct: "90",
          explanation: "The lecturer says opt-out pension schemes increased participation rates to over 90 percent.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Status quo bias: people prefer the current",
          after: "of affairs",
          wordLimit: 1,
          correct: "state",
          explanation: "The lecturer says status quo bias means people tend to prefer the current state of affairs.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Present bias: preference for",
          after: "rewards over larger future ones",
          wordLimit: 1,
          correct: "immediate",
          explanation: "The lecturer says present bias describes our tendency to prefer immediate rewards over larger future ones.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Policy application of behavioural economics is called:",
          after: "theory",
          wordLimit: 1,
          correct: "nudge",
          explanation: "The lecturer says the policy application of behavioural economics is called nudge theory.",
        },
      ],
    },
  ],
};
