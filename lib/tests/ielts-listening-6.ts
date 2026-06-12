import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening6: IELTSListeningTest = {
  id: "ielts-listening-6",
  exam: "IELTS",
  title: "IELTS Listening — Test 6",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Medical Clinic Appointment Booking",
      context: "Mr Johnson is calling a medical clinic to book an appointment. Lisa, the receptionist, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the appointment form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Lisa: Good afternoon, Riverside Medical Centre, Lisa speaking. How can I help?

Mr Johnson: Hello, I'd like to book an appointment to see a doctor, please.

Lisa: Of course. Is this for yourself?

Mr Johnson: Yes, it is.

Lisa: Can I take your full name please?

Mr Johnson: It's David Johnson.

Lisa: And your date of birth?

Mr Johnson: 3rd of August, 1978.

Lisa: Thank you. Are you registered with us already?

Mr Johnson: No, I'm a new patient.

Lisa: In that case, I'll need a few extra details. What's your address?

Mr Johnson: 14 Hazel Grove, Bristol.

Lisa: Postcode?

Mr Johnson: BS6 4PQ.

Lisa: And a phone number we can reach you on?

Mr Johnson: My mobile is 07912 667 843.

Lisa: What is the reason for your appointment today?

Mr Johnson: I've had a persistent cough for about three weeks and I'm also getting some chest tightness.

Lisa: I see. I'll mark that as a respiratory issue. Is the appointment urgent?

Mr Johnson: It's not an emergency, but I'd like to be seen this week if possible.

Lisa: We have a slot available on Wednesday the 15th at half past ten in the morning with Dr Patel. Would that work?

Mr Johnson: Yes, that's fine.

Lisa: Is there a preferred pharmacy where we might send any prescription?

Mr Johnson: Yes — Boots on Park Street, please.

Lisa: Noted. Finally, do you have any known allergies?

Mr Johnson: Yes, I'm allergic to penicillin.

Lisa: I'll make a note of that. Thank you, Mr Johnson. We'll see you on Wednesday at 10:30.

Mr Johnson: Thank you very much.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Patient full name:", wordLimit: 2, correct: "David Johnson", explanation: "The patient gives his full name as David Johnson." },
        { id: 2, type: "fill_blank", before: "Date of birth:", wordLimit: 3, correct: "3rd August 1978", explanation: "Mr Johnson says his date of birth is the 3rd of August, 1978." },
        { id: 3, type: "fill_blank", before: "Patient status:", wordLimit: 2, correct: "new patient", explanation: "Mr Johnson says he is not registered and is a new patient." },
        { id: 4, type: "fill_blank", before: "Street address:", wordLimit: 3, correct: "14 Hazel Grove", explanation: "Mr Johnson gives his address as 14 Hazel Grove, Bristol." },
        { id: 5, type: "fill_blank", before: "Postcode:", wordLimit: 1, correct: "BS6 4PQ", explanation: "Mr Johnson gives his postcode as BS6 4PQ." },
        { id: 6, type: "fill_blank", before: "Mobile number:", wordLimit: 2, correct: "07912 667 843", explanation: "Mr Johnson gives his mobile number as 07912 667 843." },
        { id: 7, type: "fill_blank", before: "Reason for appointment:", wordLimit: 2, correct: "respiratory issue", explanation: "Lisa marks the reason as a respiratory issue based on Mr Johnson's symptoms of a cough and chest tightness." },
        { id: 8, type: "fill_blank", before: "Appointment day and time:", wordLimit: 3, correct: "Wednesday 10:30", explanation: "Lisa offers a slot on Wednesday the 15th at half past ten." },
        { id: 9, type: "fill_blank", before: "Preferred pharmacy:", wordLimit: 3, correct: "Boots on Park Street", explanation: "Mr Johnson requests Boots on Park Street as his preferred pharmacy." },
        { id: 10, type: "fill_blank", before: "Known allergy:", wordLimit: 1, correct: "penicillin", explanation: "Mr Johnson says he is allergic to penicillin." },
      ],
    },
    {
      part: 2,
      title: "Community Recycling Scheme",
      context: "A local radio presenter is announcing details of a new community recycling scheme.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each item with the correct recycling category or collection point (A–F).",
      transcript: `
Good morning, listeners. I'm delighted to tell you about an exciting new initiative launching in our area next month — the GreenStart Community Recycling Scheme.

GreenStart has been developed in partnership between Northgate Council and two local environmental charities. The aim is to increase the borough's household recycling rate from its current level of 38 percent to 55 percent within three years.

From the 1st of next month, every household in the borough will receive a new set of recycling boxes. There are four boxes in total — blue, green, brown, and grey — and each is designated for a specific category of waste. The boxes will be delivered free of charge, and collections will take place every fortnight on a Tuesday.

Let me explain what goes where. The blue box is for paper and cardboard. The green box is for glass bottles and jars. The brown box is for food waste — including cooked and uncooked items. The grey box is for general plastic packaging and metal tins.

Some items cannot be collected from your doorstep. Electrical appliances, including small kitchen devices and mobile phones, must be taken to the Greenway Recycling Centre on Park Road. Textiles — clothing, curtains, bedding — should be deposited at the textile bank located in the car park of the Northgate Shopping Centre. Batteries can be dropped off at any participating supermarket or pharmacy.

For residents who produce more food waste than the brown box can accommodate, additional compostable bags are available free of charge from the council offices on Bridge Street.

Residents who sign up to the scheme's online portal will receive monthly reports on how much their household has recycled. Prizes are awarded quarterly to the top three recycling households in each ward.

For more information, visit northgate-council.gov.uk/greenstart, or call the helpline on 0800 432 100. Thank you for listening, and happy recycling.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "What is the current household recycling rate in the borough?", options: [{ label: "A", text: "28 percent" }, { label: "B", text: "38 percent" }, { label: "C", text: "55 percent" }], correct: "B", explanation: "The presenter says the current recycling rate is 38 percent." },
        { id: 12, type: "mc_single", stem: "How many recycling boxes will each household receive?", options: [{ label: "A", text: "Three" }, { label: "B", text: "Four" }, { label: "C", text: "Five" }], correct: "B", explanation: "The presenter says there are four boxes in total." },
        { id: 13, type: "mc_single", stem: "How often will collections take place?", options: [{ label: "A", text: "Weekly" }, { label: "B", text: "Every two weeks" }, { label: "C", text: "Monthly" }], correct: "B", explanation: "The presenter says collections will take place every fortnight." },
        { id: 14, type: "mc_single", stem: "Where can residents get extra compostable bags?", options: [{ label: "A", text: "The Greenway Recycling Centre" }, { label: "B", text: "The Northgate Shopping Centre" }, { label: "C", text: "The council offices on Bridge Street" }], correct: "C", explanation: "The presenter says extra compostable bags are available from the council offices on Bridge Street." },
        { id: 15, type: "mc_single", stem: "How often are prizes awarded to top recycling households?", options: [{ label: "A", text: "Monthly" }, { label: "B", text: "Every three months" }, { label: "C", text: "Annually" }], correct: "B", explanation: "The presenter says prizes are awarded quarterly, meaning every three months." },
        { id: 16, type: "mc_single", stem: "Paper and cardboard", options: [{ label: "A", text: "Blue box" }, { label: "B", text: "Green box" }, { label: "C", text: "Brown box" }, { label: "D", text: "Grey box" }, { label: "E", text: "Greenway Recycling Centre" }, { label: "F", text: "Northgate Shopping Centre car park" }], correct: "A", explanation: "The blue box is for paper and cardboard." },
        { id: 17, type: "mc_single", stem: "Glass bottles and jars", options: [{ label: "A", text: "Blue box" }, { label: "B", text: "Green box" }, { label: "C", text: "Brown box" }, { label: "D", text: "Grey box" }, { label: "E", text: "Greenway Recycling Centre" }, { label: "F", text: "Northgate Shopping Centre car park" }], correct: "B", explanation: "The green box is for glass bottles and jars." },
        { id: 18, type: "mc_single", stem: "Food waste", options: [{ label: "A", text: "Blue box" }, { label: "B", text: "Green box" }, { label: "C", text: "Brown box" }, { label: "D", text: "Grey box" }, { label: "E", text: "Greenway Recycling Centre" }, { label: "F", text: "Northgate Shopping Centre car park" }], correct: "C", explanation: "The brown box is for food waste." },
        { id: 19, type: "mc_single", stem: "Electrical appliances", options: [{ label: "A", text: "Blue box" }, { label: "B", text: "Green box" }, { label: "C", text: "Brown box" }, { label: "D", text: "Grey box" }, { label: "E", text: "Greenway Recycling Centre" }, { label: "F", text: "Northgate Shopping Centre car park" }], correct: "E", explanation: "Electrical appliances must be taken to the Greenway Recycling Centre on Park Road." },
        { id: 20, type: "mc_single", stem: "Textiles (clothing, curtains, bedding)", options: [{ label: "A", text: "Blue box" }, { label: "B", text: "Green box" }, { label: "C", text: "Brown box" }, { label: "D", text: "Grey box" }, { label: "E", text: "Greenway Recycling Centre" }, { label: "F", text: "Northgate Shopping Centre car park" }], correct: "F", explanation: "Textiles should be deposited at the textile bank in the Northgate Shopping Centre car park." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Anthropology Fieldwork",
      context: "Students Amy and James are meeting with their tutor, Dr Patel, to discuss their anthropology fieldwork project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Patel: Hello, Amy, James. Good to see you both. How's the fieldwork project coming along?

Amy: We've been conducting ethnographic research in the local market community. It's been a real eye-opener.

James: We spent four weeks observing trading patterns and social interactions between stallholders and customers.

Dr Patel: Excellent commitment. What methodology did you decide on in the end?

Amy: We used participant observation as our primary method — spending time at the market without interfering. We also conducted ten semi-structured interviews with regular vendors.

Dr Patel: Good combination. What were your key findings?

James: One of the most interesting findings was the degree to which informal networks of trust operate between vendors. They often extend credit to regular customers without any formal contract.

Amy: We also found that newer vendors — those who had been trading for less than a year — were largely excluded from these networks. It seems the trust takes a long time to build.

Dr Patel: That's a valuable observation. Did you encounter any ethical challenges?

Amy: Yes — several vendors were initially reluctant to be interviewed because they were concerned about their data being shared with the council.

James: We had to reassure them about confidentiality. We promised to anonymise all responses and not share raw data with any third parties.

Dr Patel: That was the right approach. How many hours of observation notes do you have?

James: About 60 hours' worth, across four weeks.

Dr Patel: And how are you planning to structure the written report?

Amy: We'll open with our theoretical framework, drawing on the work of Clifford Geertz. Then the methodology section, followed by our findings and a comparative discussion.

Dr Patel: Good structure. For the conclusion, I'd recommend you think about what broader implications your findings have for urban market studies.

James: We'd actually like to propose a follow-up study on digital marketplaces — to see whether the same trust dynamics apply online.

Dr Patel: That's an ambitious and worthwhile direction. I'd support that as a future research proposal.

Amy: Thank you. We feel it could be a significant contribution to the field.

Dr Patel: Indeed. Let's schedule your progress presentation for two weeks from now. Is Thursday afternoon convenient?

Amy: Yes, Thursday works for both of us.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "Where did Amy and James conduct their fieldwork?", options: [{ label: "A", text: "A rural farming community" }, { label: "B", text: "A local market community" }, { label: "C", text: "An online trading platform" }], correct: "B", explanation: "Amy says they conducted ethnographic research in the local market community." },
        { id: 22, type: "mc_single", stem: "How long did they spend observing the market?", options: [{ label: "A", text: "Two weeks" }, { label: "B", text: "Three weeks" }, { label: "C", text: "Four weeks" }], correct: "C", explanation: "James says they spent four weeks observing trading patterns and social interactions." },
        { id: 23, type: "mc_single", stem: "How many semi-structured interviews did they conduct?", options: [{ label: "A", text: "Five" }, { label: "B", text: "Eight" }, { label: "C", text: "Ten" }], correct: "C", explanation: "Amy says they conducted ten semi-structured interviews with regular vendors." },
        { id: 24, type: "mc_single", stem: "What characterises newer vendors at the market?", options: [{ label: "A", text: "They extend credit more readily" }, { label: "B", text: "They are largely excluded from trust networks" }, { label: "C", text: "They have more regular customers" }], correct: "B", explanation: "Amy says newer vendors — those trading for less than a year — were largely excluded from the trust networks." },
        { id: 25, type: "mc_single", stem: "Whose theoretical work will they draw on in their report?", options: [{ label: "A", text: "Marcel Mauss" }, { label: "B", text: "Clifford Geertz" }, { label: "C", text: "Bronisław Malinowski" }], correct: "B", explanation: "Amy says they will draw on the work of Clifford Geertz for their theoretical framework." },
        { id: 26, type: "mc_single", stem: "When is the progress presentation scheduled?", options: [{ label: "A", text: "Next week" }, { label: "B", text: "Two weeks from now" }, { label: "C", text: "Three weeks from now" }], correct: "B", explanation: "Dr Patel says they should schedule the progress presentation for two weeks from now." },
        { id: 27, type: "mc_multiple", stem: "Which TWO ethical challenges did the students encounter?", options: [{ label: "A", text: "Vendors were reluctant to be interviewed" }, { label: "B", text: "Vendors feared data would be shared with the council" }, { label: "C", text: "Some vendors refused to allow observation" }, { label: "D", text: "Language barriers with interviewees" }, { label: "E", text: "Difficulty gaining market access" }], pickCount: 2, correct: ["A", "B"], explanation: "Amy says vendors were initially reluctant to be interviewed and were concerned about data being shared with the council." },
        { id: 28, type: "mc_multiple", stem: "Which TWO steps did the students take to address ethical concerns?", options: [{ label: "A", text: "Stopped all recording" }, { label: "B", text: "Promised to anonymise all responses" }, { label: "C", text: "Agreed not to share raw data with third parties" }, { label: "D", text: "Sought written consent from the council" }, { label: "E", text: "Limited the number of interviews" }], pickCount: 2, correct: ["B", "C"], explanation: "James says they promised to anonymise all responses and not share raw data with any third parties." },
        { id: 29, type: "mc_single", stem: "How many hours of observation notes did James and Amy gather?", options: [{ label: "A", text: "About 40 hours" }, { label: "B", text: "About 60 hours" }, { label: "C", text: "About 80 hours" }], correct: "B", explanation: "James says they have about 60 hours' worth of observation notes." },
        { id: 30, type: "mc_single", stem: "What do James and Amy propose as a follow-up study?", options: [{ label: "A", text: "A study on rural market communities" }, { label: "B", text: "A study of informal credit systems" }, { label: "C", text: "A study on digital marketplaces" }], correct: "C", explanation: "James says they would like to propose a follow-up study on digital marketplaces." },
      ],
    },
    {
      part: 4,
      title: "Lecture: The Evolution of Language",
      context: "A university lecturer is giving a talk on current theories about how human language evolved.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning. Today we're exploring one of the most fascinating and contested questions in science — how did human language evolve? Unlike bones or tools, language leaves no fossil record, so researchers must rely on indirect evidence and comparative studies.

There are broadly two schools of thought. The first holds that language emerged gradually over hundreds of thousands of years through natural selection — this is sometimes called the continuity hypothesis. The second argues that language appeared relatively suddenly — perhaps within the last 70,000 years — as a result of a single genetic mutation. This is known as the discontinuity hypothesis.

Evidence for the continuity view comes partly from studies of animal communication. Great apes such as chimpanzees and bonobos can learn several hundred signs in sign language, demonstrating a capacity for symbolic communication that may represent a precursor to human language. However, no non-human species has demonstrated the ability to use grammar productively — that is, to create new sentences from a finite set of rules.

The human brain has two regions specifically associated with language processing. Broca's area, located in the frontal lobe, is involved in speech production and grammatical processing. Wernicke's area, in the temporal lobe, is associated with language comprehension. Interestingly, archaeological evidence suggests that the brains of Homo erectus — our ancestor who lived approximately 1.8 million years ago — showed early signs of Broca's area development.

The FOXP2 gene, sometimes called the language gene, plays a crucial role in the fine motor control needed for speech. Mutations in this gene cause severe speech and language disorders. Remarkably, a version of the FOXP2 gene has also been identified in Neanderthals, suggesting they may have had some capacity for speech.

The human vocal tract differs significantly from those of other primates. The descended larynx allows humans to produce a wider range of sounds — a development that occurred around 300,000 years ago based on skeletal analysis.

Finally, the emergence of symbolic art and complex tools in the archaeological record — around 50,000 years ago — is often taken as indirect evidence that fully modern language was present by that time.

Thank you. Next week we'll look at how languages diversify and die out.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Hypothesis that language emerged gradually:", wordLimit: 2, correct: "continuity hypothesis", explanation: "The lecturer says the view that language evolved gradually is called the continuity hypothesis." },
        { id: 32, type: "fill_blank", before: "Approximate timeframe for language emergence (discontinuity view):", wordLimit: 2, correct: "70,000 years", explanation: "The discontinuity hypothesis argues language appeared within the last 70,000 years." },
        { id: 33, type: "fill_blank", before: "Number of signs great apes can learn in sign language:", wordLimit: 3, correct: "several hundred", explanation: "The lecturer says great apes can learn several hundred signs in sign language." },
        { id: 34, type: "fill_blank", before: "Brain region involved in speech production:", wordLimit: 2, correct: "Broca's area", explanation: "The lecturer says Broca's area is involved in speech production and grammatical processing." },
        { id: 35, type: "fill_blank", before: "Brain region associated with language comprehension:", wordLimit: 2, correct: "Wernicke's area", explanation: "The lecturer says Wernicke's area is associated with language comprehension." },
        { id: 36, type: "fill_blank", before: "Ancestor species showing early Broca's area development:", wordLimit: 2, correct: "Homo erectus", explanation: "The lecturer says the brains of Homo erectus showed early signs of Broca's area development." },
        { id: 37, type: "fill_blank", before: "Name of the gene associated with speech motor control:", wordLimit: 1, correct: "FOXP2", explanation: "The lecturer says the FOXP2 gene plays a crucial role in fine motor control needed for speech." },
        { id: 38, type: "fill_blank", before: "Species in which a version of FOXP2 has been identified:", wordLimit: 1, correct: "Neanderthals", explanation: "The lecturer says a version of FOXP2 has been identified in Neanderthals." },
        { id: 39, type: "fill_blank", before: "Approximate age of the descended larynx (years ago):", wordLimit: 2, correct: "300,000 years", explanation: "The lecturer says the descended larynx developed around 300,000 years ago." },
        { id: 40, type: "fill_blank", before: "Age of symbolic art in the archaeological record:", wordLimit: 2, correct: "50,000 years", explanation: "The lecturer says symbolic art and complex tools appeared around 50,000 years ago." },
      ],
    },
  ],
};
