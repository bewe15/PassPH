import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening9: IELTSListeningTest = {
  id: "ielts-listening-9",
  exam: "IELTS",
  title: "IELTS Listening — Test 9",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "Travel Agency Booking",
      context: "Mr Brown is visiting a travel agency to book a holiday. Alice, the travel agent, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the booking form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Alice: Good morning. Welcome to Sunpath Travel. I'm Alice. How can I help you today?

Mr Brown: Good morning. I'd like to book a holiday, please. I'm looking for a beach destination — somewhere warm.

Alice: Lovely. When are you thinking of travelling?

Mr Brown: The second half of July, if possible. I'm quite flexible on the exact dates.

Alice: How many people will be travelling?

Mr Brown: Just two of us — myself and my wife.

Alice: And roughly what budget are you working with per person?

Mr Brown: We'd like to keep it under £1,200 each, including flights.

Alice: Very good. I have a couple of options for you. One popular choice is a ten-day all-inclusive package to the Algarve in Portugal. Departure from Manchester, flying on the 17th of July. The price is £1,050 per person.

Mr Brown: That sounds appealing. Is there a hotel you'd recommend?

Alice: The Praia Sol Hotel — it's a four-star property with direct beach access. Guests consistently give it excellent ratings for the food.

Mr Brown: What's included in the package?

Alice: Return flights, all meals and drinks, airport transfers, and free use of the resort pool and gym.

Mr Brown: That sounds ideal. I'll go with that one.

Alice: Perfect. May I take your details to proceed with the booking?

Mr Brown: Of course. My name is Howard Brown.

Alice: And a contact number?

Mr Brown: My home number is 01423 558 790.

Alice: Do you have travel insurance?

Mr Brown: Not yet — can you arrange that?

Alice: Yes, we offer comprehensive travel insurance for £64 per couple.

Mr Brown: That's fine. Please add that on.

Alice: And your passport details — could I take your passport number?

Mr Brown: Yes — it's GB 4421987.

Alice: Thank you. I'll send a confirmation to your email. What's the best address?

Mr Brown: h.brown@classicmail.co.uk.

Alice: Wonderful. I'll get that confirmation over to you by the end of today.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Customer full name:", wordLimit: 2, correct: "Howard Brown", explanation: "Mr Brown gives his full name as Howard Brown." },
        { id: 2, type: "fill_blank", before: "Number of travellers:", wordLimit: 1, correct: "2", explanation: "Mr Brown says just two of them will travel — himself and his wife." },
        { id: 3, type: "fill_blank", before: "Maximum budget per person (including flights): £", wordLimit: 1, correct: "1,200", explanation: "Mr Brown says they want to keep it under £1,200 each including flights." },
        { id: 4, type: "fill_blank", before: "Destination country:", wordLimit: 1, correct: "Portugal", explanation: "Alice mentions an all-inclusive package to the Algarve in Portugal." },
        { id: 5, type: "fill_blank", before: "Departure date:", wordLimit: 3, correct: "17th July", explanation: "Alice says the departure is from Manchester on the 17th of July." },
        { id: 6, type: "fill_blank", before: "Price per person: £", wordLimit: 1, correct: "1,050", explanation: "Alice says the price is £1,050 per person." },
        { id: 7, type: "fill_blank", before: "Recommended hotel name:", wordLimit: 3, correct: "Praia Sol Hotel", explanation: "Alice recommends the Praia Sol Hotel, a four-star property with direct beach access." },
        { id: 8, type: "fill_blank", before: "Customer home phone number:", wordLimit: 2, correct: "01423 558 790", explanation: "Mr Brown gives his home number as 01423 558 790." },
        { id: 9, type: "fill_blank", before: "Cost of travel insurance per couple: £", wordLimit: 1, correct: "64", explanation: "Alice says comprehensive travel insurance is £64 per couple." },
        { id: 10, type: "fill_blank", before: "Passport number:", wordLimit: 1, correct: "GB 4421987", explanation: "Mr Brown gives his passport number as GB 4421987." },
      ],
    },
    {
      part: 2,
      title: "Botanical Garden Guided Tour",
      context: "The head gardener is leading a guided tour of a botanical garden.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each plant collection or feature with its location in the garden (A–F).",
      transcript: `
Good morning and welcome to Greystone Botanical Garden. My name is Thomas and I'm the head gardener here. It's a pleasure to welcome you today and I hope you enjoy exploring what is one of the finest botanical collections in the country.

Greystone covers 32 acres of landscaped and naturalised grounds. The garden was founded in 1902 by Sir Edmund Hartley, a Victorian plant collector who returned from expeditions to South America with a remarkable collection of specimens that form the core of our tropical house collection to this day.

The garden is open 365 days a year, from 9 am to 5 pm in winter and until 7 pm in summer. Today's guided tour will last approximately one hour and fifteen minutes.

Before we begin, just a few practical points. Photography is welcome throughout the garden but please keep to the paths and do not touch the plants. Dogs are permitted in the outer grounds only — they are not permitted in the glasshouses. Refreshments are available at the Garden Café, which is located near the main entrance.

Let me now give you a brief overview of the layout. As you face the garden from the entrance, the famous Victorian Glasshouse is directly ahead of you. This is home to our tropical plant collection, including several orchid species that cannot be found anywhere else in the UK. To your left, you'll find the Rose Garden, which is at its spectacular best in June and July. Behind the Rose Garden, in the north-west corner, is our Fernery — a tranquil space filled with native and exotic fern species. To the right of the main path, heading east, you'll come to the Medicinal Herb Garden, where each plant is labelled with its historical uses. Further east still is the Japanese Garden, featuring a traditional stone bridge and koi pond. Finally, at the far south-east edge of the grounds, we have the Wildflower Meadow — a recent addition that was created to support pollinators, particularly bees and butterflies.

For those with young children, there is a nature trail designed for children aged 5 to 12, starting from the Wildflower Meadow. Trail maps are available from the information stand at the entrance.

Shall we begin?
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "How large is Greystone Botanical Garden?", options: [{ label: "A", text: "22 acres" }, { label: "B", text: "32 acres" }, { label: "C", text: "42 acres" }], correct: "B", explanation: "Thomas says Greystone covers 32 acres of landscaped and naturalised grounds." },
        { id: 12, type: "mc_single", stem: "When was the garden founded?", options: [{ label: "A", text: "1892" }, { label: "B", text: "1902" }, { label: "C", text: "1912" }], correct: "B", explanation: "Thomas says the garden was founded in 1902." },
        { id: 13, type: "mc_single", stem: "Until what time is the garden open in summer?", options: [{ label: "A", text: "5 pm" }, { label: "B", text: "6 pm" }, { label: "C", text: "7 pm" }], correct: "C", explanation: "Thomas says the garden is open until 7 pm in summer." },
        { id: 14, type: "mc_single", stem: "Where are dogs permitted?", options: [{ label: "A", text: "Throughout the entire garden" }, { label: "B", text: "In the outer grounds only" }, { label: "C", text: "In the glasshouses only" }], correct: "B", explanation: "Thomas says dogs are permitted in the outer grounds only, not in the glasshouses." },
        { id: 15, type: "mc_single", stem: "What age group is the children's nature trail designed for?", options: [{ label: "A", text: "3 to 10 years" }, { label: "B", text: "5 to 12 years" }, { label: "C", text: "6 to 14 years" }], correct: "B", explanation: "Thomas says the nature trail is designed for children aged 5 to 12." },
        { id: 16, type: "mc_single", stem: "The Victorian Glasshouse", options: [{ label: "A", text: "Directly ahead from the entrance" }, { label: "B", text: "Left from the entrance" }, { label: "C", text: "North-west corner" }, { label: "D", text: "East of the main path" }, { label: "E", text: "Further east — beyond herb garden" }, { label: "F", text: "Far south-east edge" }], correct: "A", explanation: "Thomas says the Victorian Glasshouse is directly ahead from the entrance." },
        { id: 17, type: "mc_single", stem: "The Rose Garden", options: [{ label: "A", text: "Directly ahead from the entrance" }, { label: "B", text: "Left from the entrance" }, { label: "C", text: "North-west corner" }, { label: "D", text: "East of the main path" }, { label: "E", text: "Further east — beyond herb garden" }, { label: "F", text: "Far south-east edge" }], correct: "B", explanation: "Thomas says the Rose Garden is to the left as you face the garden from the entrance." },
        { id: 18, type: "mc_single", stem: "The Fernery", options: [{ label: "A", text: "Directly ahead from the entrance" }, { label: "B", text: "Left from the entrance" }, { label: "C", text: "North-west corner" }, { label: "D", text: "East of the main path" }, { label: "E", text: "Further east — beyond herb garden" }, { label: "F", text: "Far south-east edge" }], correct: "C", explanation: "Thomas says the Fernery is in the north-west corner, behind the Rose Garden." },
        { id: 19, type: "mc_single", stem: "The Medicinal Herb Garden", options: [{ label: "A", text: "Directly ahead from the entrance" }, { label: "B", text: "Left from the entrance" }, { label: "C", text: "North-west corner" }, { label: "D", text: "East of the main path" }, { label: "E", text: "Further east — beyond herb garden" }, { label: "F", text: "Far south-east edge" }], correct: "D", explanation: "Thomas says the Medicinal Herb Garden is to the right of the main path, heading east." },
        { id: 20, type: "mc_single", stem: "The Wildflower Meadow", options: [{ label: "A", text: "Directly ahead from the entrance" }, { label: "B", text: "Left from the entrance" }, { label: "C", text: "North-west corner" }, { label: "D", text: "East of the main path" }, { label: "E", text: "Further east — beyond herb garden" }, { label: "F", text: "Far south-east edge" }], correct: "F", explanation: "Thomas says the Wildflower Meadow is at the far south-east edge of the grounds." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Marine Conservation Project",
      context: "Students Lucy and Mark are meeting with their tutor, Dr Green, to discuss their marine conservation project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Green: Hello, Lucy, Mark. Good to see you. How is the marine conservation project shaping up?

Lucy: Very well, thank you. We've been researching the impact of plastic pollution on coral reef ecosystems in the Indo-Pacific region.

Mark: We decided to focus on microplastics specifically, because that's a relatively under-researched area compared to macro-plastic pollution.

Dr Green: Good focus. What methodology are you using?

Lucy: We're doing a systematic literature review — we've gathered 45 peer-reviewed studies published between 2010 and 2024.

Dr Green: How did you select those studies?

Mark: We used three academic databases: Web of Science, Scopus, and Google Scholar. We applied inclusion criteria relating to study design, geographic location, and the specific pollutants examined.

Dr Green: What are the key findings emerging so far?

Lucy: The main finding is that microplastic concentrations in Indo-Pacific coral reef environments have increased by approximately 40 percent over the past decade.

Mark: We've also found strong evidence that microplastics interfere with coral spawning — they reduce fertilisation rates by blocking or being ingested by gametes.

Dr Green: That's quite alarming. Are there any positive findings?

Lucy: Yes — several studies show that marine protected areas with strong enforcement have significantly lower microplastic levels than unprotected reefs. The difference can be as much as 60 percent.

Dr Green: That's a compelling argument for policy intervention. What challenges have you faced?

Mark: The biggest challenge has been inconsistency in research methodology across studies — different researchers use different sampling techniques and units of measurement, which makes direct comparison difficult.

Lucy: We've also struggled to find recent data for some parts of the region, particularly the eastern Pacific.

Dr Green: These are real limitations worth acknowledging. How are you structuring the report?

Mark: We'll begin with the ecological background on coral reefs, then the methodology for our literature review, then the findings, and finally policy recommendations.

Dr Green: Good structure. I'd suggest you include a section on the limitations of the literature itself, not just your own methodology. What are your policy recommendations likely to focus on?

Lucy: Primarily on strengthening international regulations on single-use plastics and improving wastewater treatment near coastal communities.

Dr Green: Excellent. This is shaping up to be a very strong piece of work.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What specific aspect of pollution are Lucy and Mark focusing on?", options: [{ label: "A", text: "Macro-plastic pollution" }, { label: "B", text: "Chemical runoff" }, { label: "C", text: "Microplastics" }], correct: "C", explanation: "Mark says they decided to focus on microplastics specifically." },
        { id: 22, type: "mc_single", stem: "How many peer-reviewed studies did they gather for their literature review?", options: [{ label: "A", text: "35" }, { label: "B", text: "45" }, { label: "C", text: "55" }], correct: "B", explanation: "Lucy says they gathered 45 peer-reviewed studies." },
        { id: 23, type: "mc_single", stem: "By approximately how much have microplastic concentrations increased over the past decade?", options: [{ label: "A", text: "20 percent" }, { label: "B", text: "30 percent" }, { label: "C", text: "40 percent" }], correct: "C", explanation: "Lucy says microplastic concentrations have increased by approximately 40 percent over the past decade." },
        { id: 24, type: "mc_single", stem: "How do microplastics interfere with coral spawning?", options: [{ label: "A", text: "They raise water temperature" }, { label: "B", text: "They block or are ingested by gametes" }, { label: "C", text: "They reduce light penetration" }], correct: "B", explanation: "Mark says microplastics reduce fertilisation rates by blocking or being ingested by gametes." },
        { id: 25, type: "mc_single", stem: "By how much can microplastic levels differ between protected and unprotected reefs?", options: [{ label: "A", text: "As much as 40 percent" }, { label: "B", text: "As much as 60 percent" }, { label: "C", text: "As much as 80 percent" }], correct: "B", explanation: "Lucy says the difference can be as much as 60 percent." },
        { id: 26, type: "mc_single", stem: "What does Dr Green suggest they add to the report?", options: [{ label: "A", text: "A section on climate change" }, { label: "B", text: "A section on the limitations of the literature itself" }, { label: "C", text: "More case studies from the Atlantic" }], correct: "B", explanation: "Dr Green suggests including a section on the limitations of the literature itself, not just their own methodology." },
        { id: 27, type: "mc_multiple", stem: "Which TWO academic databases did Mark and Lucy use for their literature search?", options: [{ label: "A", text: "PubMed" }, { label: "B", text: "Web of Science" }, { label: "C", text: "JSTOR" }, { label: "D", text: "Scopus" }, { label: "E", text: "ResearchGate" }], pickCount: 2, correct: ["B", "D"], explanation: "Mark lists Web of Science, Scopus, and Google Scholar as the three databases used." },
        { id: 28, type: "mc_multiple", stem: "Which TWO challenges did the students encounter in their research?", options: [{ label: "A", text: "Inconsistency in research methodology across studies" }, { label: "B", text: "Difficulty accessing academic databases" }, { label: "C", text: "Lack of recent data for some parts of the region" }, { label: "D", text: "Insufficient number of studies" }, { label: "E", text: "Language barriers with non-English studies" }], pickCount: 2, correct: ["A", "C"], explanation: "Mark mentions inconsistency in research methodology; Lucy mentions struggling to find recent data for some parts of the region." },
        { id: 29, type: "mc_single", stem: "What will the report's policy recommendations primarily focus on?", options: [{ label: "A", text: "International regulations on single-use plastics and wastewater treatment" }, { label: "B", text: "Banning fishing in coral reef areas" }, { label: "C", text: "Expanding marine protected areas globally" }], correct: "A", explanation: "Lucy says recommendations will focus primarily on strengthening international regulations on single-use plastics and improving wastewater treatment near coastal communities." },
        { id: 30, type: "mc_single", stem: "What is the first section of the report?", options: [{ label: "A", text: "Methodology for the literature review" }, { label: "B", text: "Ecological background on coral reefs" }, { label: "C", text: "Policy recommendations" }], correct: "B", explanation: "Mark says they will begin with the ecological background on coral reefs." },
      ],
    },
    {
      part: 4,
      title: "Lecture: The Science of Volcanoes",
      context: "A university lecturer is giving a talk on the science behind volcanic activity.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today we are looking at volcanology — the scientific study of volcanoes — and exploring what we know about how and why volcanoes form and erupt.

A volcano is essentially an opening in the Earth's crust through which magma — molten rock from beneath the surface — can escape. There are approximately 1,500 potentially active volcanoes on Earth, not counting those on the ocean floor, which are far more numerous.

Volcanoes are classified by the type of eruption they produce and the structure they form. Shield volcanoes, such as those in Hawaii, have low, broad profiles and produce relatively gentle, slow-moving lava flows of low viscosity. Stratovolcanoes — also called composite volcanoes — are tall, steep-sided, and tend to produce far more explosive eruptions. Mount Vesuvius in Italy and Mount Fuji in Japan are classic examples of stratovolcanoes.

The explosivity of a volcanic eruption is measured using the Volcanic Explosivity Index, or VEI. This is a logarithmic scale running from 0 to 8. The 1980 eruption of Mount St Helens in Washington State registered a VEI of 5. The 1815 eruption of Mount Tambora in Indonesia — the most powerful eruption in recorded history — scored a VEI of 7. This eruption ejected so much ash and sulphur dioxide into the atmosphere that it caused global temperature drops the following year, leading to what became known as the Year Without a Summer.

Volcanoes also produce a range of hazardous phenomena beyond lava flows. Pyroclastic flows — fast-moving currents of hot gas and volcanic matter — are among the deadliest hazards, capable of travelling at speeds of up to 700 kilometres per hour. Lahars, which are volcanic mudflows, can travel tens of kilometres and bury entire communities. And volcanic ash, even in relatively thin layers, can collapse roofs, contaminate water supplies, and disrupt aviation.

One of the most critical challenges in volcanology is eruption prediction. Scientists monitor volcanoes using seismometers, which detect the small earthquakes that precede eruptions as magma moves through rock, and ground deformation sensors, which measure swelling of the volcano's surface. Gas emissions — particularly sulphur dioxide — are also closely monitored. An increase in SO2 emissions is one of the most reliable precursors to an eruption.

Despite advances in monitoring, predicting the exact timing and magnitude of eruptions remains extremely difficult. The 1985 eruption of Nevado del Ruiz in Colombia, which produced a lahar that killed approximately 23,000 people, occurred despite warnings from scientists. The disaster highlighted the importance of not just monitoring but effective communication between scientists and civil authorities.

Thank you. Next week we'll look at the role of supervolcanoes.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Approximate number of potentially active volcanoes on land:", wordLimit: 1, correct: "1,500", explanation: "The lecturer says there are approximately 1,500 potentially active volcanoes, not counting those on the ocean floor." },
        { id: 32, type: "fill_blank", before: "Type of volcano with low, broad profile:", wordLimit: 2, correct: "shield volcanoes", explanation: "The lecturer says shield volcanoes have low, broad profiles and produce gentle lava flows." },
        { id: 33, type: "fill_blank", before: "Another name for composite volcanoes:", wordLimit: 1, correct: "stratovolcanoes", explanation: "The lecturer says composite volcanoes are also called stratovolcanoes." },
        { id: 34, type: "fill_blank", before: "Scale used to measure eruption explosivity:", wordLimit: 3, correct: "Volcanic Explosivity Index", explanation: "The lecturer says the Volcanic Explosivity Index (VEI) is used to measure eruption explosivity." },
        { id: 35, type: "fill_blank", before: "VEI score of the 1980 Mount St Helens eruption:", wordLimit: 1, correct: "5", explanation: "The lecturer says the 1980 eruption of Mount St Helens registered a VEI of 5." },
        { id: 36, type: "fill_blank", before: "Volcano responsible for the most powerful eruption in recorded history:", wordLimit: 2, correct: "Mount Tambora", explanation: "The lecturer says the 1815 eruption of Mount Tambora was the most powerful in recorded history." },
        { id: 37, type: "fill_blank", before: "Year following the Tambora eruption known as:", wordLimit: 4, correct: "Year Without a Summer", explanation: "The lecturer says global temperature drops the following year led to what became known as the Year Without a Summer." },
        { id: 38, type: "fill_blank", before: "Maximum speed of pyroclastic flows:", wordLimit: 3, correct: "700 kilometres per hour", explanation: "The lecturer says pyroclastic flows are capable of travelling at speeds of up to 700 kilometres per hour." },
        { id: 39, type: "fill_blank", before: "Gas monitored as a precursor to eruptions:", wordLimit: 2, correct: "sulphur dioxide", explanation: "The lecturer says an increase in SO2 (sulphur dioxide) emissions is one of the most reliable precursors to an eruption." },
        { id: 40, type: "fill_blank", before: "Approximate number of people killed by the 1985 Nevado del Ruiz lahar:", wordLimit: 1, correct: "23,000", explanation: "The lecturer says the lahar killed approximately 23,000 people." },
      ],
    },
  ],
};
