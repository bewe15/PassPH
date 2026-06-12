import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening3: IELTSListeningTest = {
  id: "ielts-listening-3",
  exam: "IELTS",
  title: "IELTS Listening — Test 3",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Hotel Booking Enquiry",
      context: "Mrs Watson is calling Lakeside Hotel to make a booking. James, the hotel receptionist, takes her details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the booking form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
James: Good afternoon, Lakeside Hotel, James speaking. How can I help?

Mrs Watson: Hello, I'd like to make a room booking, please.

James: Of course. Could I take your name?

Mrs Watson: It's Watson — Mrs Patricia Watson.

James: Could you spell your first name?

Mrs Watson: P-A-T-R-I-C-I-A.

James: Thank you. And what dates are you looking at?

Mrs Watson: I'd like to arrive on the 5th of August and leave on the 10th — so that's five nights.

James: Let me check availability. Yes, we have rooms available. What type of room would you prefer?

Mrs Watson: A double room, please, with a sea view if possible.

James: We have one with a sea view — it's £120 per night, so £600 in total for five nights.

Mrs Watson: That's fine.

James: Excellent. Will you require breakfast?

Mrs Watson: Yes please — for two people.

James: Breakfast for two is an additional £18 per person per day. Now, could I take a contact number?

Mrs Watson: Yes, it's 0791 234 5678.

James: And will you be driving? We do have a car park, but spaces must be reserved in advance. There's a charge of £5 per day.

Mrs Watson: Yes, I'll need a parking space, thank you.

James: Perfect. I'll also need a credit card number to secure the booking — just the last four digits for security.

Mrs Watson: The last four digits are 4492.

James: Wonderful. Your booking is confirmed. We look forward to seeing you on the 5th of August.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Guest surname:", wordLimit: 1, correct: "Watson", explanation: "The caller gives her surname as Watson." },
        { id: 2, type: "fill_blank", before: "First name:", wordLimit: 1, correct: "Patricia", explanation: "Mrs Watson spells out her first name as P-A-T-R-I-C-I-A." },
        { id: 3, type: "fill_blank", before: "Arrival date:", wordLimit: 3, correct: "5th August", explanation: "Mrs Watson says she wants to arrive on the 5th of August." },
        { id: 4, type: "fill_blank", before: "Number of nights:", wordLimit: 1, correct: "5", explanation: "Mrs Watson says she is staying for five nights." },
        { id: 5, type: "fill_blank", before: "Room type:", wordLimit: 2, correct: "double room", explanation: "Mrs Watson requests a double room." },
        { id: 6, type: "fill_blank", before: "Room view:", wordLimit: 2, correct: "sea view", explanation: "Mrs Watson requests a sea view if possible." },
        { id: 7, type: "fill_blank", before: "Cost per night: £", wordLimit: 1, correct: "120", explanation: "James says the room with sea view costs £120 per night." },
        { id: 8, type: "fill_blank", before: "Contact phone number:", wordLimit: 2, correct: "0791 234 5678", explanation: "Mrs Watson gives her number as 0791 234 5678." },
        { id: 9, type: "fill_blank", before: "Parking charge per day: £", wordLimit: 1, correct: "5", explanation: "James says parking costs £5 per day." },
        { id: 10, type: "fill_blank", before: "Last four digits of credit card:", wordLimit: 1, correct: "4492", explanation: "Mrs Watson gives the last four digits of her credit card as 4492." },
      ],
    },
    {
      part: 2,
      title: "Fernwood Nature Reserve Tour",
      context: "Rachel, a park warden, is giving an introduction to visitors at the Fernwood Nature Reserve.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each reserve area with the correct description (A–F).",
      transcript: `
Hello everyone, and welcome to Fernwood Nature Reserve. My name is Rachel and I'll be your guide this morning.

The reserve was established in 1978 and covers an area of 450 hectares. We are open every day of the year, from dawn until dusk. Entry is free, though we do ask for a voluntary donation to support our conservation work.

This morning's guided walk will take approximately two hours. Please make sure you stay on the marked paths at all times — this protects both you and the wildlife.

Now, a few important things to know. Our visitor centre, where you signed in this morning, has toilets, a gift shop, and a small café. It's open from 9 am to 5 pm on weekdays, and until 6 pm at weekends.

Let me tell you about the different areas you'll encounter. The Meadow Trail at the southern end is where you'll spot our wildflower displays — best seen between May and July. Moving north, you'll reach the Oak Woodland, which is home to over 40 species of bird. The Wetland Area near the centre of the reserve is particularly important for dragonflies and amphibians. Our Observation Tower on the eastern ridge provides spectacular views across the valley — you'll need to climb 78 steps to reach the top. And finally, the Ancient Orchard to the west contains apple and pear trees that are over 200 years old.

Dogs are welcome but must be kept on leads at all times. Please take all litter home with you.

Now if you're ready, let's begin our walk!
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "When was Fernwood Nature Reserve established?", options: [{ label: "A", text: "1968" }, { label: "B", text: "1978" }, { label: "C", text: "1988" }], correct: "B", explanation: "Rachel says the reserve was established in 1978." },
        { id: 12, type: "mc_single", stem: "What is the area of the reserve?", options: [{ label: "A", text: "350 hectares" }, { label: "B", text: "400 hectares" }, { label: "C", text: "450 hectares" }], correct: "C", explanation: "Rachel says the reserve covers 450 hectares." },
        { id: 13, type: "mc_single", stem: "How long will the guided walk take?", options: [{ label: "A", text: "One hour" }, { label: "B", text: "Two hours" }, { label: "C", text: "Three hours" }], correct: "B", explanation: "Rachel says the guided walk will take approximately two hours." },
        { id: 14, type: "mc_single", stem: "Until what time is the visitor centre open on weekends?", options: [{ label: "A", text: "5 pm" }, { label: "B", text: "6 pm" }, { label: "C", text: "7 pm" }], correct: "B", explanation: "Rachel says the visitor centre is open until 6 pm at weekends." },
        { id: 15, type: "mc_single", stem: "How many steps lead to the Observation Tower?", options: [{ label: "A", text: "68" }, { label: "B", text: "78" }, { label: "C", text: "88" }], correct: "B", explanation: "Rachel says visitors need to climb 78 steps to reach the top of the tower." },
        { id: 16, type: "mc_single", stem: "The Meadow Trail", options: [{ label: "A", text: "Southern end" }, { label: "B", text: "Northern end" }, { label: "C", text: "Centre of reserve" }, { label: "D", text: "Eastern ridge" }, { label: "E", text: "Western area" }, { label: "F", text: "Near visitor centre" }], correct: "A", explanation: "The Meadow Trail is at the southern end of the reserve." },
        { id: 17, type: "mc_single", stem: "The Oak Woodland", options: [{ label: "A", text: "Southern end" }, { label: "B", text: "Northern end" }, { label: "C", text: "Centre of reserve" }, { label: "D", text: "Eastern ridge" }, { label: "E", text: "Western area" }, { label: "F", text: "Near visitor centre" }], correct: "B", explanation: "Rachel says moving north you reach the Oak Woodland." },
        { id: 18, type: "mc_single", stem: "The Wetland Area", options: [{ label: "A", text: "Southern end" }, { label: "B", text: "Northern end" }, { label: "C", text: "Centre of reserve" }, { label: "D", text: "Eastern ridge" }, { label: "E", text: "Western area" }, { label: "F", text: "Near visitor centre" }], correct: "C", explanation: "Rachel says the Wetland Area is near the centre of the reserve." },
        { id: 19, type: "mc_single", stem: "The Observation Tower", options: [{ label: "A", text: "Southern end" }, { label: "B", text: "Northern end" }, { label: "C", text: "Centre of reserve" }, { label: "D", text: "Eastern ridge" }, { label: "E", text: "Western area" }, { label: "F", text: "Near visitor centre" }], correct: "D", explanation: "Rachel says the Observation Tower is on the eastern ridge." },
        { id: 20, type: "mc_single", stem: "The Ancient Orchard", options: [{ label: "A", text: "Southern end" }, { label: "B", text: "Northern end" }, { label: "C", text: "Centre of reserve" }, { label: "D", text: "Eastern ridge" }, { label: "E", text: "Western area" }, { label: "F", text: "Near visitor centre" }], correct: "E", explanation: "Rachel says the Ancient Orchard is to the west." },
      ],
    },
    {
      part: 3,
      title: "Students Discussing a Film Studies Project",
      context: "Two students, Tom and Laura, are meeting with their film studies supervisor, Professor Singh, to discuss their documentary project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.",
      transcript: `
Professor Singh: Good afternoon, Tom, Laura. Tell me how your documentary project is developing.

Tom: We've decided to focus on street art in the city — how it's changed the urban landscape over the last decade.

Laura: We felt it was more original than doing something on traditional art forms.

Professor Singh: A good choice. What methods are you planning?

Tom: I'm filming on location — we have permission from the council to film in six different areas.

Laura: And I'm interviewing artists and local residents to get different perspectives.

Professor Singh: How long is your finished documentary expected to be?

Laura: Around 20 minutes.

Professor Singh: Good. What have been your main findings so far?

Tom: One thing that surprised us is that over 70 percent of residents we spoke to actually support street art, whereas previously it was mostly seen as vandalism.

Laura: And we've discovered that certain neighbourhoods have used it very effectively to attract tourism.

Professor Singh: Interesting. What challenges have you encountered?

Tom: The weather has caused problems — some filming days were cancelled. And we're having difficulty with the editing software.

Laura: My challenge has been getting some artists to agree to interviews — many prefer to remain anonymous.

Professor Singh: Understandable. Who will handle the narration?

Tom: I'll do that — I've had some presenting experience before.

Professor Singh: And who's doing the final edit?

Laura: That's me. Tom suggested I take that on.

Professor Singh: I'd recommend you both review the structure together before the final cut.

Tom and Laura: Yes, we planned to do that already.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What is the topic of Tom and Laura's documentary?", options: [{ label: "A", text: "Traditional art in museums" }, { label: "B", text: "Street art in the city" }, { label: "C", text: "Digital art online" }], correct: "B", explanation: "Tom says they decided to focus on street art in the city." },
        { id: 22, type: "mc_single", stem: "How many filming locations do they have permission for?", options: [{ label: "A", text: "Four" }, { label: "B", text: "Five" }, { label: "C", text: "Six" }], correct: "C", explanation: "Tom says they have permission to film in six different areas." },
        { id: 23, type: "mc_single", stem: "How long will the finished documentary be?", options: [{ label: "A", text: "15 minutes" }, { label: "B", text: "20 minutes" }, { label: "C", text: "25 minutes" }], correct: "B", explanation: "Laura says the documentary will be around 20 minutes." },
        { id: 24, type: "mc_single", stem: "What percentage of residents support street art?", options: [{ label: "A", text: "Over 50 percent" }, { label: "B", text: "Over 60 percent" }, { label: "C", text: "Over 70 percent" }], correct: "C", explanation: "Tom says over 70 percent of residents support street art." },
        { id: 25, type: "mc_single", stem: "What challenge does Laura face?", options: [{ label: "A", text: "Editing software problems" }, { label: "B", text: "Weather disruptions" }, { label: "C", text: "Artists preferring anonymity" }], correct: "C", explanation: "Laura says many artists prefer to remain anonymous and won't agree to interviews." },
        { id: 26, type: "mc_single", stem: "Who will do the narration?", options: [{ label: "A", text: "Tom" }, { label: "B", text: "Laura" }, { label: "C", text: "Professor Singh" }], correct: "A", explanation: "Tom says he will handle the narration as he has presenting experience." },
        { id: 27, type: "mc_multiple", stem: "Which TWO challenges does Tom identify?", options: [{ label: "A", text: "Weather problems" }, { label: "B", text: "Editing software difficulties" }, { label: "C", text: "Lack of permissions" }, { label: "D", text: "Budget constraints" }, { label: "E", text: "Anonymous artists" }], pickCount: 2, correct: ["A", "B"], explanation: "Tom mentions weather causing problems and difficulties with editing software." },
        { id: 28, type: "mc_multiple", stem: "Which TWO methods is Laura responsible for?", options: [{ label: "A", text: "Location filming" }, { label: "B", text: "Interviewing artists" }, { label: "C", text: "Interviewing residents" }, { label: "D", text: "Narration" }, { label: "E", text: "Final editing" }], pickCount: 2, correct: ["B", "E"], explanation: "Laura interviews artists and residents and handles the final edit." },
        { id: 29, type: "mc_single", stem: "Who is doing the final edit?", options: [{ label: "A", text: "Tom" }, { label: "B", text: "Laura" }, { label: "C", text: "Both together" }], correct: "B", explanation: "Laura says the final edit is her responsibility." },
        { id: 30, type: "mc_single", stem: "What does Professor Singh recommend they do together?", options: [{ label: "A", text: "Write the narration" }, { label: "B", text: "Review the structure" }, { label: "C", text: "Apply for permits" }], correct: "B", explanation: "Professor Singh recommends they both review the structure together before the final cut." },
      ],
    },
    {
      part: 4,
      title: "Lecture: The History of the Printing Press",
      context: "A university lecturer is giving a talk about the invention of the printing press and its impact on society.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture focuses on the printing press — arguably one of the most transformative inventions in human history.

Before the printing press, books were copied by hand — a process that could take a single monk or scribe up to a year to complete one volume. As a result, books were extraordinarily expensive and accessible only to the wealthy and to religious institutions.

The moveable type printing press was invented by Johannes Gutenberg in the German city of Mainz around the year 1440. Gutenberg's system used individual metal letters that could be rearranged to compose new pages. His most famous work, the Gutenberg Bible, was completed around 1455.

The impact was immediate and enormous. Within 50 years of the invention, over 8 million books had been printed in Europe. The price of books fell dramatically — by some estimates, to just one eighth of what they had previously cost.

The printing press was crucial in spreading the ideas of the Renaissance and the Reformation across Europe. Martin Luther's 95 Theses, for example, were distributed across Germany within two weeks of being printed — something impossible without this technology.

By the late 1700s, steam-powered presses were being developed. These could produce around 1,100 pages per hour — vastly more than hand-operated presses.

The rotary press, invented by Richard Hoe in 1843, increased output to over 8,000 pages per hour, making mass-circulation newspapers economically viable.

In summary, the printing press democratised knowledge, enabling literacy to spread across social classes and laying the foundation for the modern information age. Thank you.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Time to hand-copy one book:", wordLimit: 2, correct: "one year", explanation: "The lecturer says copying one book by hand could take a scribe up to a year." },
        { id: 32, type: "fill_blank", before: "City where printing press was invented:", wordLimit: 1, correct: "Mainz", explanation: "The lecturer says Gutenberg invented the press in the German city of Mainz." },
        { id: 33, type: "fill_blank", before: "Year printing press was invented (approx):", wordLimit: 1, correct: "1440", explanation: "The lecturer says Gutenberg invented the press around 1440." },
        { id: 34, type: "fill_blank", before: "Gutenberg's most famous work:", wordLimit: 2, correct: "Gutenberg Bible", explanation: "The lecturer says Gutenberg's most famous work is the Gutenberg Bible." },
        { id: 35, type: "fill_blank", before: "Books printed in Europe within 50 years:", wordLimit: 3, correct: "8 million", explanation: "The lecturer says over 8 million books had been printed within 50 years." },
        { id: 36, type: "fill_blank", before: "Book prices fell to approximately:", wordLimit: 4, correct: "one eighth previous cost", explanation: "The lecturer says book prices fell to about one eighth of what they previously cost." },
        { id: 37, type: "fill_blank", before: "Luther's 95 Theses spread across Germany in:", wordLimit: 2, correct: "two weeks", explanation: "The lecturer says Luther's theses were distributed across Germany within two weeks of printing." },
        { id: 38, type: "fill_blank", before: "Pages per hour produced by steam-powered press:", wordLimit: 1, correct: "1100", explanation: "The lecturer says steam-powered presses produced around 1,100 pages per hour." },
        { id: 39, type: "fill_blank", before: "Inventor of the rotary press:", wordLimit: 2, correct: "Richard Hoe", explanation: "The rotary press was invented by Richard Hoe." },
        { id: 40, type: "fill_blank", before: "Pages per hour from rotary press:", wordLimit: 1, correct: "8000", explanation: "The rotary press could produce over 8,000 pages per hour." },
      ],
    },
  ],
};
