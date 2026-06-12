import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening11: IELTSListeningTest = {
  id: "ielts-listening-11",
  exam: "IELTS",
  title: "IELTS Listening — Test 11",
  totalSeconds: 1800,
  parts: [
    {
      part: 1,
      title: "University Accommodation Enquiry",
      context: "Tim is enquiring about university accommodation. Susan, the housing officer, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions: "Complete the accommodation enquiry form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Susan: Good morning, University Accommodation Office. Susan speaking.

Tim: Good morning. I'm a new postgraduate student and I'd like to enquire about on-campus housing for the coming academic year.

Susan: Of course. Let me take some details. Can I start with your name?

Tim: Timothy Walsh. That's W-A-L-S-H.

Susan: And your student ID number?

Tim: It's PG78234.

Susan: Thank you. What course are you enrolled on?

Tim: I'm doing an MSc in Environmental Science.

Susan: And your home country?

Tim: I'm from Ireland.

Susan: Welcome. What type of accommodation are you looking for?

Tim: A single en-suite room, if possible.

Susan: We have single en-suite rooms available in Pemberton Hall and in the new Riverside Block. Pemberton Hall is £145 per week and Riverside Block is £168 per week. Both are self-catered.

Tim: What's the difference between the two?

Susan: Pemberton Hall is a traditional building — older, quieter, and closer to the main library. Riverside Block is modern, has better facilities, and it's closer to the science faculty buildings.

Tim: The science faculty proximity would be useful. I'll go for the Riverside Block.

Susan: Excellent choice. The contract period is 42 weeks, starting from the 20th of September.

Tim: That works well for me. What documents do I need to provide?

Susan: We'll need a copy of your passport, proof of enrollment, and a £100 deposit to secure the room.

Tim: Can the deposit be paid online?

Susan: Yes, through the university student portal. You'll receive a link by email. What's your email address?

Tim: tim.walsh@unimail.ac.uk.

Susan: Lovely. I'll send you the full details and a link to the portal. Do you have any special requirements?

Tim: Yes — I'm a vegetarian, so I'd like to know if there are kitchen facilities available.

Susan: Riverside Block has a fully equipped shared kitchen on every floor, so that won't be a problem.

Tim: That's great. Thank you very much, Susan.
      `,
      questions: [
        { id: 1, type: "fill_blank", before: "Student surname:", wordLimit: 1, correct: "Walsh", explanation: "Tim gives his surname as Walsh." },
        { id: 2, type: "fill_blank", before: "Student ID number:", wordLimit: 1, correct: "PG78234", explanation: "Tim gives his student ID as PG78234." },
        { id: 3, type: "fill_blank", before: "Course enrolled on:", wordLimit: 3, correct: "MSc in Environmental Science", explanation: "Tim says he is doing an MSc in Environmental Science." },
        { id: 4, type: "fill_blank", before: "Home country:", wordLimit: 1, correct: "Ireland", explanation: "Tim says he is from Ireland." },
        { id: 5, type: "fill_blank", before: "Room type requested:", wordLimit: 3, correct: "single en-suite room", explanation: "Tim says he is looking for a single en-suite room." },
        { id: 6, type: "fill_blank", before: "Accommodation chosen:", wordLimit: 2, correct: "Riverside Block", explanation: "Tim chooses the Riverside Block because of its proximity to the science faculty." },
        { id: 7, type: "fill_blank", before: "Weekly rent: £", wordLimit: 1, correct: "168", explanation: "Susan says the Riverside Block costs £168 per week." },
        { id: 8, type: "fill_blank", before: "Length of contract (weeks):", wordLimit: 1, correct: "42", explanation: "Susan says the contract period is 42 weeks." },
        { id: 9, type: "fill_blank", before: "Deposit amount required: £", wordLimit: 1, correct: "100", explanation: "Susan says a £100 deposit is needed to secure the room." },
        { id: 10, type: "fill_blank", before: "Special requirement noted:", wordLimit: 1, correct: "vegetarian", explanation: "Tim says he is a vegetarian and wants to know about kitchen facilities." },
      ],
    },
    {
      part: 2,
      title: "Local History Walking Tour",
      context: "A guide is leading a local history walking tour of a town centre.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions: "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each historical site with its location (A–F).",
      transcript: `
Welcome, everyone, to the Thornbury Local History Walking Tour. I'm delighted you've joined us today. This tour will take you through approximately 800 years of history in just under two hours, so I hope you've worn comfortable shoes.

Thornbury is a market town with records dating back to the Domesday Book of 1086. At its peak in the medieval period, it was one of the most prosperous wool trading towns in the region. The wool trade declined in the 17th century, but the town reinvented itself as a centre for small-scale manufacturing, particularly leatherworking and printing.

Let me mention some practicalities before we begin. The tour covers a distance of approximately two miles. The route is mostly flat, with one short incline near the castle. There are two opportunities to stop for refreshments — one near the midpoint and one towards the end of the tour. If at any point you need to leave the group, please let me know.

Now, the highlights of our route. We'll begin here at the Old Market Square, which has been the commercial heart of Thornbury since the 12th century. From here we'll walk south along Church Street to reach St Mary's Church — a fine example of Norman architecture dating to around 1150. Just behind St Mary's, down Monks Lane, you'll find the remains of the medieval priory, which was dissolved during the reign of Henry VIII. Continuing south-west, we'll visit the Tudor Guildhall on Bridge Road — this was the administrative centre of the town and dates from 1487. From there, a short walk north will bring us to the Victorian Town Hall on Market Place, built in 1871 and still in use as council offices today. Our final stop is Thornbury Castle, on Castle Hill at the north edge of the town — a fortified manor house begun in 1511, though never fully completed.

I'll be pointing out many other smaller details along the way. Let's begin.
      `,
      questions: [
        { id: 11, type: "mc_single", stem: "When do records of Thornbury first appear?", options: [{ label: "A", text: "The 10th century" }, { label: "B", text: "1086" }, { label: "C", text: "The 12th century" }], correct: "B", explanation: "The guide says Thornbury has records dating back to the Domesday Book of 1086." },
        { id: 12, type: "mc_single", stem: "What was Thornbury's main trade in the medieval period?", options: [{ label: "A", text: "Leatherworking" }, { label: "B", text: "Printing" }, { label: "C", text: "Wool trading" }], correct: "C", explanation: "The guide says Thornbury was one of the most prosperous wool trading towns in the region." },
        { id: 13, type: "mc_single", stem: "How long will the walking tour take?", options: [{ label: "A", text: "One hour" }, { label: "B", text: "Just under two hours" }, { label: "C", text: "Two and a half hours" }], correct: "B", explanation: "The guide says the tour will take just under two hours." },
        { id: 14, type: "mc_single", stem: "How far does the tour route cover?", options: [{ label: "A", text: "One mile" }, { label: "B", text: "Two miles" }, { label: "C", text: "Three miles" }], correct: "B", explanation: "The guide says the tour covers a distance of approximately two miles." },
        { id: 15, type: "mc_single", stem: "When was Thornbury Castle begun?", options: [{ label: "A", text: "1150" }, { label: "B", text: "1487" }, { label: "C", text: "1511" }], correct: "C", explanation: "The guide says Thornbury Castle is a fortified manor house begun in 1511." },
        { id: 16, type: "mc_single", stem: "The Old Market Square", options: [{ label: "A", text: "Starting point — tour begins here" }, { label: "B", text: "South along Church Street" }, { label: "C", text: "Down Monks Lane behind St Mary's" }, { label: "D", text: "Bridge Road, south-west" }, { label: "E", text: "Market Place, north from Guildhall" }, { label: "F", text: "Castle Hill — north edge of town" }], correct: "A", explanation: "The guide says the tour begins at the Old Market Square." },
        { id: 17, type: "mc_single", stem: "St Mary's Church", options: [{ label: "A", text: "Starting point — tour begins here" }, { label: "B", text: "South along Church Street" }, { label: "C", text: "Down Monks Lane behind St Mary's" }, { label: "D", text: "Bridge Road, south-west" }, { label: "E", text: "Market Place, north from Guildhall" }, { label: "F", text: "Castle Hill — north edge of town" }], correct: "B", explanation: "The guide says they'll walk south along Church Street to reach St Mary's Church." },
        { id: 18, type: "mc_single", stem: "The medieval priory remains", options: [{ label: "A", text: "Starting point — tour begins here" }, { label: "B", text: "South along Church Street" }, { label: "C", text: "Down Monks Lane behind St Mary's" }, { label: "D", text: "Bridge Road, south-west" }, { label: "E", text: "Market Place, north from Guildhall" }, { label: "F", text: "Castle Hill — north edge of town" }], correct: "C", explanation: "The guide says the priory remains are down Monks Lane, just behind St Mary's." },
        { id: 19, type: "mc_single", stem: "The Tudor Guildhall", options: [{ label: "A", text: "Starting point — tour begins here" }, { label: "B", text: "South along Church Street" }, { label: "C", text: "Down Monks Lane behind St Mary's" }, { label: "D", text: "Bridge Road, south-west" }, { label: "E", text: "Market Place, north from Guildhall" }, { label: "F", text: "Castle Hill — north edge of town" }], correct: "D", explanation: "The guide says the Tudor Guildhall is on Bridge Road, reached by continuing south-west." },
        { id: 20, type: "mc_single", stem: "Thornbury Castle", options: [{ label: "A", text: "Starting point — tour begins here" }, { label: "B", text: "South along Church Street" }, { label: "C", text: "Down Monks Lane behind St Mary's" }, { label: "D", text: "Bridge Road, south-west" }, { label: "E", text: "Market Place, north from Guildhall" }, { label: "F", text: "Castle Hill — north edge of town" }], correct: "F", explanation: "The guide says Thornbury Castle is on Castle Hill at the north edge of the town." },
      ],
    },
    {
      part: 3,
      title: "Discussion: Economics and Inequality Research",
      context: "Students Hannah and Leo are meeting with their tutor, Professor Adams, to discuss their economics and inequality research project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions: "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters, A–E.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Professor Adams: Good afternoon, Hannah, Leo. Tell me where you are with the inequality research.

Hannah: We've been examining trends in income inequality in the UK over the last 40 years, using data from the Office for National Statistics and the Institute for Fiscal Studies.

Leo: Our main measure of inequality has been the Gini coefficient — it gives a single number between 0 and 1 where 0 represents perfect equality and 1 represents maximum inequality.

Professor Adams: Good choice of metric. What period showed the most dramatic changes?

Hannah: The sharpest increase in inequality occurred between 1979 and 1990, when the Gini coefficient for disposable income rose from 0.25 to 0.34. That's a very significant jump in just over a decade.

Leo: Since then, the change has been more gradual. The coefficient stabilised somewhat in the 1990s and has hovered around 0.35 in recent years.

Professor Adams: What factors do you attribute that 1980s rise to?

Hannah: The primary causes we've identified are changes to the tax system — particularly reductions in higher marginal tax rates — and the decline of trade unions, which weakened the bargaining power of lower-income workers.

Leo: We've also noted the impact of deindustrialisation — the loss of well-paid manufacturing jobs in the north and Midlands, which hit lower-income communities disproportionately.

Professor Adams: Thorough analysis. Are you looking at wealth inequality as well as income inequality?

Leo: Yes — we have a section on wealth inequality, and the figures are even more stark. The wealthiest 10 percent of households own around 45 percent of total household wealth.

Hannah: Compared with the bottom 50 percent, who own less than 9 percent.

Professor Adams: These are striking figures. What limitations are you identifying?

Hannah: The main limitation is that our data on wealth is less reliable than our income data — wealth is harder to measure because it includes illiquid assets like property and pension funds.

Leo: There's also the problem of tax evasion and offshore wealth, which doesn't appear in official statistics at all.

Professor Adams: Both valid. How are you structuring your recommendations?

Leo: We're grouping them by policy area — tax reform, labour market policy, and education investment.

Professor Adams: Good. Make sure each recommendation is explicitly linked to your empirical findings, not just general principles.

Hannah: We'll do that. We're also planning to include a comparative section looking at Scandinavia, since those countries have significantly lower Gini coefficients.

Professor Adams: Excellent. The comparison will give your recommendations international credibility.
      `,
      questions: [
        { id: 21, type: "mc_single", stem: "What period does their research cover?", options: [{ label: "A", text: "The last 20 years" }, { label: "B", text: "The last 30 years" }, { label: "C", text: "The last 40 years" }], correct: "C", explanation: "Hannah says they have been examining trends over the last 40 years." },
        { id: 22, type: "mc_single", stem: "What does a Gini coefficient of 0 represent?", options: [{ label: "A", text: "Maximum inequality" }, { label: "B", text: "Perfect equality" }, { label: "C", text: "The UK average" }], correct: "B", explanation: "Leo says 0 represents perfect equality on the Gini coefficient scale." },
        { id: 23, type: "mc_single", stem: "What was the UK Gini coefficient for disposable income by 1990?", options: [{ label: "A", text: "0.25" }, { label: "B", text: "0.30" }, { label: "C", text: "0.34" }], correct: "C", explanation: "Hannah says the Gini coefficient rose to 0.34 by 1990." },
        { id: 24, type: "mc_single", stem: "What percentage of total household wealth do the wealthiest 10 percent own?", options: [{ label: "A", text: "Around 35 percent" }, { label: "B", text: "Around 45 percent" }, { label: "C", text: "Around 55 percent" }], correct: "B", explanation: "Leo says the wealthiest 10 percent of households own around 45 percent of total household wealth." },
        { id: 25, type: "mc_single", stem: "What region was disproportionately affected by deindustrialisation?", options: [{ label: "A", text: "The south and east" }, { label: "B", text: "The north and Midlands" }, { label: "C", text: "Scotland and Wales" }], correct: "B", explanation: "Leo says deindustrialisation hit lower-income communities in the north and Midlands disproportionately." },
        { id: 26, type: "mc_single", stem: "What region do Hannah and Leo plan to compare the UK with?", options: [{ label: "A", text: "North America" }, { label: "B", text: "Southern Europe" }, { label: "C", text: "Scandinavia" }], correct: "C", explanation: "Hannah says they are planning to include a comparative section looking at Scandinavia." },
        { id: 27, type: "mc_multiple", stem: "Which TWO primary causes of 1980s inequality rise do the students identify?", options: [{ label: "A", text: "Changes to the tax system" }, { label: "B", text: "Decline of trade unions" }, { label: "C", text: "Immigration" }, { label: "D", text: "Housing price rises" }, { label: "E", text: "Financial deregulation" }], pickCount: 2, correct: ["A", "B"], explanation: "Hannah identifies changes to the tax system and the decline of trade unions as primary causes." },
        { id: 28, type: "mc_multiple", stem: "Which TWO limitations do Hannah and Leo identify in their research?", options: [{ label: "A", text: "Wealth data is less reliable than income data" }, { label: "B", text: "Small sample size" }, { label: "C", text: "Offshore wealth not appearing in official statistics" }, { label: "D", text: "Data not available before 1985" }, { label: "E", text: "Conflicting ONS and IFS figures" }], pickCount: 2, correct: ["A", "C"], explanation: "Hannah notes wealth data is less reliable; Leo notes offshore wealth does not appear in official statistics." },
        { id: 29, type: "mc_single", stem: "How are the policy recommendations structured?", options: [{ label: "A", text: "By historical period" }, { label: "B", text: "By policy area" }, { label: "C", text: "By income group affected" }], correct: "B", explanation: "Leo says they are grouping recommendations by policy area — tax reform, labour market policy, and education investment." },
        { id: 30, type: "mc_single", stem: "What does Professor Adams say about the Scandinavian comparison?", options: [{ label: "A", text: "It is unnecessary" }, { label: "B", text: "It will give their recommendations international credibility" }, { label: "C", text: "It will make the report too long" }], correct: "B", explanation: "Professor Adams says the comparison will give their recommendations international credibility." },
      ],
    },
    {
      part: 4,
      title: "Lecture: Biodiversity and Ecosystem Services",
      context: "A university lecturer is giving a talk on the concept of biodiversity and the ecosystem services it supports.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today we're discussing biodiversity and ecosystem services — two concepts that are absolutely central to modern conservation science and environmental policy.

Biodiversity refers to the variety of life on Earth at three levels: genetic diversity within species, species diversity within ecosystems, and ecosystem diversity across landscapes. The term itself was popularised in the late 1980s, largely through the work of biologist Edward O. Wilson.

Current estimates suggest there are between 8 and 10 million species on Earth, yet only around 1.5 million have been formally described and named by scientists. This means the vast majority of life on Earth remains unknown to us. The rate of species loss is currently estimated at between 100 and 1,000 times the natural background extinction rate — a rate that many scientists describe as the sixth mass extinction event.

The concept of ecosystem services refers to the benefits that functioning ecosystems provide to people. These are typically divided into four categories. Provisioning services are the direct products we obtain from ecosystems — food, fresh water, timber, and fibre. Regulating services include things like climate regulation, flood control, water purification, and pollination. Cultural services are the non-material benefits we derive from nature — recreation, spiritual value, aesthetic appreciation. And finally, supporting services are the fundamental processes that make all other services possible — soil formation, nutrient cycling, and primary production.

Pollination is one of the most economically significant ecosystem services. It has been estimated that animal-mediated pollination — primarily by bees and other insects — supports around 75 percent of the world's food crops. In financial terms, this service has been valued at approximately £400 billion per year globally.

Forests are among the most biodiverse ecosystems on land. Tropical rainforests cover less than 6 percent of the Earth's land surface but are home to more than 50 percent of all terrestrial species. Deforestation — driven largely by agriculture and logging — is currently destroying around 10 million hectares of forest per year.

Wetlands, though often drained for agriculture, provide exceptionally high ecosystem service value. They store carbon, filter water, reduce flood risk, and support large numbers of specialist species. It is estimated that wetlands provide ecosystem services worth three times their per-hectare economic output compared to equivalent agricultural land.

The Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services — IPBES — was established in 2012 to provide authoritative scientific assessments of biodiversity for policymakers. Its 2019 global assessment concluded that around one million species are currently at risk of extinction.

Thank you. Next time we'll look at specific conservation strategies.
      `,
      questions: [
        { id: 31, type: "fill_blank", before: "Scientist who popularised the term 'biodiversity':", wordLimit: 3, correct: "Edward O. Wilson", explanation: "The lecturer says the term biodiversity was popularised largely through the work of Edward O. Wilson." },
        { id: 32, type: "fill_blank", before: "Estimated total number of species on Earth (range):", wordLimit: 3, correct: "8 and 10 million", explanation: "The lecturer says estimates suggest there are between 8 and 10 million species on Earth." },
        { id: 33, type: "fill_blank", before: "Number of species formally described by scientists:", wordLimit: 3, correct: "1.5 million", explanation: "The lecturer says only around 1.5 million species have been formally described and named." },
        { id: 34, type: "fill_blank", before: "Current species loss rate compared to natural background rate:", wordLimit: 3, correct: "100 and 1000", explanation: "The lecturer says the current rate of species loss is between 100 and 1,000 times the natural background extinction rate." },
        { id: 35, type: "fill_blank", before: "Category of ecosystem services that includes food and timber:", wordLimit: 2, correct: "provisioning services", explanation: "The lecturer says provisioning services include the direct products we obtain from ecosystems — food, fresh water, timber, and fibre." },
        { id: 36, type: "fill_blank", before: "Percentage of world's food crops supported by animal-mediated pollination:", wordLimit: 2, correct: "75 percent", explanation: "The lecturer says animal-mediated pollination supports around 75 percent of the world's food crops." },
        { id: 37, type: "fill_blank", before: "Global annual value of pollination services: £", wordLimit: 3, correct: "400 billion", explanation: "The lecturer says the pollination service has been valued at approximately £400 billion per year globally." },
        { id: 38, type: "fill_blank", before: "Percentage of terrestrial species found in tropical rainforests:", wordLimit: 2, correct: "50 percent", explanation: "The lecturer says tropical rainforests are home to more than 50 percent of all terrestrial species." },
        { id: 39, type: "fill_blank", before: "Area of forest destroyed per year (hectares):", wordLimit: 3, correct: "10 million hectares", explanation: "The lecturer says deforestation is destroying around 10 million hectares of forest per year." },
        { id: 40, type: "fill_blank", before: "Number of species at risk of extinction according to 2019 IPBES assessment:", wordLimit: 3, correct: "one million", explanation: "The lecturer says the 2019 IPBES global assessment concluded that around one million species are at risk of extinction." },
      ],
    },
  ],
};
