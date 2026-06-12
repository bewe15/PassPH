import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening18: IELTSListeningTest = {
  id: "ielts-listening-18",
  exam: "IELTS",
  title: "IELTS Listening — Test 18",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Animal Shelter Volunteering Enquiry",
      context:
        "Frank is calling Willowbrook Animal Shelter to enquire about volunteering. Amy, the volunteer coordinator, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Amy: Good morning, Willowbrook Animal Shelter. Amy speaking. How can I help?

Frank: Hello. I'm calling to find out about volunteering with your shelter. My name is Frank Colton.

Amy: Colton — C-O-L-T-O-N?

Frank: That's right.

Amy: Lovely to hear from you, Mr Colton. Have you volunteered with animals before?

Frank: Yes, I volunteered at a dog rescue charity for two years, so I do have some background with animals.

Amy: That's brilliant — experience is always helpful. What sort of volunteering are you interested in doing here?

Frank: Mainly looking after the animals — feeding, exercising, that sort of thing. I'm not really a behind-the-scenes person.

Amy: Perfect. We call that our direct care programme. Could I ask how many hours per week you'd be able to commit?

Frank: I'd say around six hours, spread across two or three days.

Amy: That's very generous. Our minimum commitment is four hours per week, so you'd exceed that comfortably. Which days tend to suit you?

Frank: Weekends are best for me — I work Monday to Friday.

Amy: Saturday and Sunday are actually our busiest days, so that's perfect. Would mornings or afternoons be better?

Frank: Mornings, ideally. I like to be done by early afternoon.

Amy: Our morning shifts run from eight until twelve. Does that work for you?

Frank: Yes, perfectly.

Amy: Now, I need to take a few more details. Can I ask your age, Mr Colton?

Frank: I'm 34.

Amy: And do you have any allergies to animals we should know about?

Frank: None at all.

Amy: Excellent. We will need two references — one personal and one professional. Is that something you can arrange?

Frank: Yes, that's fine. Shall I email them to you?

Amy: Please. Our email is volunteers@willowbrook.org.uk. You'll also need to complete a DBS check — a background check. That's a legal requirement. It usually takes about three weeks to process.

Frank: No problem. How soon could I start once that's done?

Amy: Usually within a day or two of receiving the clearance. We'll be in touch as soon as it comes through.

Frank: Brilliant. Thank you so much.

Amy: Thank you, Mr Colton. The animals will be very glad to have you.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Volunteer's surname:",
          wordLimit: 1,
          correct: "Colton",
          explanation: "Frank gives his name as Frank Colton, and Amy confirms the spelling C-O-L-T-O-N.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Previous volunteering experience:",
          after: "years at a dog rescue charity",
          wordLimit: 1,
          correct: "two",
          explanation: "Frank says he volunteered at a dog rescue charity for two years.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Preferred volunteering type:",
          wordLimit: 2,
          correct: "direct care",
          explanation: "Amy says what Frank describes is called their direct care programme.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Hours available per week:",
          after: "hours",
          wordLimit: 1,
          correct: "six",
          explanation: "Frank says he can commit around six hours per week.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Minimum weekly commitment required:",
          after: "hours",
          wordLimit: 1,
          correct: "four",
          explanation: "Amy says the minimum commitment is four hours per week.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Preferred days:",
          wordLimit: 1,
          correct: "weekends",
          explanation: "Frank says weekends are best for him as he works Monday to Friday.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Morning shift hours:",
          wordLimit: 3,
          correct: "eight until twelve",
          explanation: "Amy says morning shifts run from eight until twelve.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Volunteer's age:",
          wordLimit: 1,
          correct: "34",
          explanation: "Frank says he is 34.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Shelter volunteer email address:",
          wordLimit: 1,
          correct: "volunteers@willowbrook.org.uk",
          explanation: "Amy gives the email address as volunteers@willowbrook.org.uk.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "DBS check processing time:",
          after: "weeks",
          wordLimit: 1,
          correct: "three",
          explanation: "Amy says the DBS check usually takes about three weeks to process.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Nature Documentary Radio Programme",
      context:
        "A narrator is introducing a radio documentary programme about remarkable animal migration patterns.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each animal (16–20) with the correct fact about its migration (A–F). Write the correct letter next to each animal.",
      transcript: `
Welcome to Natural World on BBC Radio 4. I'm your narrator for this week's programme, which explores some of the most extraordinary animal migration stories on our planet.

Migration is one of nature's most compelling phenomena. Across every major animal group — birds, mammals, fish, insects, and even crustaceans — species have evolved remarkable abilities to navigate vast distances between seasonal habitats. Scientists estimate that approximately 4,000 species of animals engage in regular seasonal migration, making it one of the most widespread behaviours in the natural world.

The trigger for migration is typically one of three factors: changes in day length, known as photoperiod; declining food availability; or temperature changes. For many species, it is a combination of all three. Remarkable recent research using satellite tracking has revealed that some animals navigate using the Earth's magnetic field as a kind of internal compass.

This week we'll be focusing on five incredible migrating species. First, the Arctic tern — a seabird that makes the longest migration of any animal on Earth, travelling from the Arctic to the Antarctic and back each year. Studies using tiny geolocators have revealed this journey covers around 70,000 kilometres annually.

Second, the humpback whale, which travels from its polar feeding grounds to warm tropical waters for breeding. The journey can cover up to 8,000 kilometres and is one of the longest mammal migrations recorded.

Third, the monarch butterfly of North America, which navigates from its summer habitats in Canada and the United States to overwintering sites in the mountains of central Mexico. What makes this especially remarkable is that the individuals making the return journey have never made it before — there is no experienced guide. Scientists believe the butterflies use the sun as a compass.

Fourth, the wildebeest of East Africa, which undertakes an annual circular migration across the Serengeti ecosystem — a journey of around 3,000 kilometres — following seasonal rains and the fresh grass they bring.

And fifth, the European eel, which travels from rivers across Europe and North Africa to its spawning grounds in the Sargasso Sea in the Atlantic Ocean — a journey of up to 6,000 kilometres that scientists believe the eel makes only once in its lifetime.

These five animals represent the extraordinary diversity of migration strategies that evolution has produced. Stay with us — we'll explore each of them in detail after this short break.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "Approximately how many species engage in regular seasonal migration?",
          options: [
            { label: "A", text: "400" },
            { label: "B", text: "4,000" },
            { label: "C", text: "40,000" },
          ],
          correct: "B",
          explanation: "The narrator says scientists estimate approximately 4,000 species of animals engage in regular seasonal migration.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "What do scientists call changes in day length that trigger migration?",
          options: [
            { label: "A", text: "Thermoperiod" },
            { label: "B", text: "Photoperiod" },
            { label: "C", text: "Chronoperiod" },
          ],
          correct: "B",
          explanation: "The narrator says changes in day length are known as photoperiod.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "What do some animals use to navigate according to recent research?",
          options: [
            { label: "A", text: "The position of the moon" },
            { label: "B", text: "The Earth's magnetic field" },
            { label: "C", text: "Ocean currents" },
          ],
          correct: "B",
          explanation: "The narrator says recent research has revealed some animals navigate using the Earth's magnetic field.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "How far does the Arctic tern travel annually?",
          options: [
            { label: "A", text: "Around 7,000 kilometres" },
            { label: "B", text: "Around 35,000 kilometres" },
            { label: "C", text: "Around 70,000 kilometres" },
          ],
          correct: "C",
          explanation: "The narrator says geolocator studies revealed the Arctic tern's journey covers around 70,000 kilometres annually.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "What do scientists believe monarch butterflies use as a compass?",
          options: [
            { label: "A", text: "The Earth's magnetic field" },
            { label: "B", text: "The sun" },
            { label: "C", text: "Wind direction" },
          ],
          correct: "B",
          explanation: "The narrator says scientists believe monarch butterflies use the sun as a compass.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "Arctic tern",
          options: [
            { label: "A", text: "Travels up to 8,000 km between polar and tropical waters" },
            { label: "B", text: "Makes a 70,000 km annual journey between polar regions" },
            { label: "C", text: "Navigates from Canada to Mexico without prior experience" },
            { label: "D", text: "Follows seasonal rains across 3,000 km" },
            { label: "E", text: "Makes a 6,000 km journey only once in its lifetime" },
            { label: "F", text: "Uses geolocators to navigate" },
          ],
          correct: "B",
          explanation: "The narrator says the Arctic tern's journey covers around 70,000 kilometres annually between the Arctic and the Antarctic.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "Humpback whale",
          options: [
            { label: "A", text: "Travels up to 8,000 km between polar and tropical waters" },
            { label: "B", text: "Makes a 70,000 km annual journey between polar regions" },
            { label: "C", text: "Navigates from Canada to Mexico without prior experience" },
            { label: "D", text: "Follows seasonal rains across 3,000 km" },
            { label: "E", text: "Makes a 6,000 km journey only once in its lifetime" },
            { label: "F", text: "Uses geolocators to navigate" },
          ],
          correct: "A",
          explanation: "The narrator says the humpback whale's journey from polar feeding grounds to tropical waters can cover up to 8,000 kilometres.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "Monarch butterfly",
          options: [
            { label: "A", text: "Travels up to 8,000 km between polar and tropical waters" },
            { label: "B", text: "Makes a 70,000 km annual journey between polar regions" },
            { label: "C", text: "Navigates from Canada to Mexico without prior experience" },
            { label: "D", text: "Follows seasonal rains across 3,000 km" },
            { label: "E", text: "Makes a 6,000 km journey only once in its lifetime" },
            { label: "F", text: "Uses geolocators to navigate" },
          ],
          correct: "C",
          explanation: "The narrator says the monarch butterfly navigates from Canada and the US to Mexico, and the individuals making the return journey have never made it before.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "Wildebeest",
          options: [
            { label: "A", text: "Travels up to 8,000 km between polar and tropical waters" },
            { label: "B", text: "Makes a 70,000 km annual journey between polar regions" },
            { label: "C", text: "Navigates from Canada to Mexico without prior experience" },
            { label: "D", text: "Follows seasonal rains across 3,000 km" },
            { label: "E", text: "Makes a 6,000 km journey only once in its lifetime" },
            { label: "F", text: "Uses geolocators to navigate" },
          ],
          correct: "D",
          explanation: "The narrator says the wildebeest undertakes a circular migration of around 3,000 kilometres following seasonal rains.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "European eel",
          options: [
            { label: "A", text: "Travels up to 8,000 km between polar and tropical waters" },
            { label: "B", text: "Makes a 70,000 km annual journey between polar regions" },
            { label: "C", text: "Navigates from Canada to Mexico without prior experience" },
            { label: "D", text: "Follows seasonal rains across 3,000 km" },
            { label: "E", text: "Makes a 6,000 km journey only once in its lifetime" },
            { label: "F", text: "Uses geolocators to navigate" },
          ],
          correct: "E",
          explanation: "The narrator says the European eel makes a journey of up to 6,000 kilometres that scientists believe it makes only once in its lifetime.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Zoology and Animal Behaviour",
      context:
        "Students Sophia and Charlie are meeting with their tutor, Dr Johnson, to discuss their zoology project on animal behaviour.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Johnson: Good afternoon, Sophia, Charlie. Let's have a look at where you are with the animal behaviour project.

Sophia: We've narrowed our focus to cooperative hunting behaviour in social carnivores — specifically comparing wolves and African wild dogs.

Charlie: We thought the comparison would give us a chance to explore whether similar ecological pressures lead to similar behavioural solutions.

Dr Johnson: That's a really elegant research question. What have you found so far?

Charlie: Both species show highly coordinated pack behaviour during hunts, but they use different communication strategies. Wolves rely more heavily on vocalisation, whereas African wild dogs rely more on visual signals — ear position, body posture.

Sophia: What's striking is that despite this difference in communication, their hunting success rates are remarkably similar. African wild dogs have a success rate of around 80 percent, which is the highest of any large predator. Wolves are slightly lower — around 20 percent in most studies, though this varies significantly by terrain.

Dr Johnson: Those are well-established figures. What methodology have you used to gather your data?

Sophia: Primarily secondary research — we've done an extensive review of published field studies, mostly from the last twenty years.

Charlie: We also analysed footage from wildlife documentary archives, which gave us some qualitative behavioural data to complement the quantitative studies.

Dr Johnson: A creative approach. What are your key conclusions?

Charlie: That cooperative hunting in both species has evolved not simply to catch larger prey, but to reduce individual risk and improve overall caloric return per animal.

Sophia: And we're arguing that the communication differences reflect adaptations to different habitat types — dense forest versus open savanna.

Dr Johnson: Well argued. Are there any limitations you've identified?

Sophia: The main one is that most of the field data for wolves comes from Yellowstone, which may not be representative of wolf populations elsewhere.

Charlie: And a lot of the African wild dog studies are quite old — we'd benefit from more recent GPS tracking data.

Dr Johnson: Valid points. For the final write-up, what are your two main priorities?

Sophia: Strengthening our comparative analysis — the two halves of the essay don't quite mirror each other yet.

Charlie: And we want to include a clearer discussion of the evolutionary theory underpinning our argument.

Dr Johnson: Both excellent. Get those done and this could be a very strong piece.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What is the focus of Sophia and Charlie's zoology project?",
          options: [
            { label: "A", text: "Territorial behaviour in big cats" },
            { label: "B", text: "Cooperative hunting in wolves and African wild dogs" },
            { label: "C", text: "Communication in marine mammals" },
          ],
          correct: "B",
          explanation: "Sophia says they are focusing on cooperative hunting behaviour in social carnivores, specifically comparing wolves and African wild dogs.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "How do African wild dogs primarily communicate during hunts?",
          options: [
            { label: "A", text: "Through vocalisation" },
            { label: "B", text: "Through scent marking" },
            { label: "C", text: "Through visual signals" },
          ],
          correct: "C",
          explanation: "Charlie says African wild dogs rely more on visual signals — ear position and body posture.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "What is the hunting success rate of African wild dogs?",
          options: [
            { label: "A", text: "Around 20 percent" },
            { label: "B", text: "Around 50 percent" },
            { label: "C", text: "Around 80 percent" },
          ],
          correct: "C",
          explanation: "Sophia says African wild dogs have a success rate of around 80 percent, the highest of any large predator.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "What primary research method did they use?",
          options: [
            { label: "A", text: "Field observations in the wild" },
            { label: "B", text: "Secondary research — reviewing published field studies" },
            { label: "C", text: "Laboratory behavioural experiments" },
          ],
          correct: "B",
          explanation: "Sophia says they primarily did secondary research — an extensive review of published field studies.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What limitation about the wolf data does Sophia mention?",
          options: [
            { label: "A", text: "Most data comes from Yellowstone and may not be representative" },
            { label: "B", text: "The data is more than fifty years old" },
            { label: "C", text: "Wolves were studied in captivity, not the wild" },
          ],
          correct: "A",
          explanation: "Sophia says most field data for wolves comes from Yellowstone, which may not be representative of wolf populations elsewhere.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "What does Charlie say they would benefit from for African wild dogs?",
          options: [
            { label: "A", text: "More captive behaviour studies" },
            { label: "B", text: "More recent GPS tracking data" },
            { label: "C", text: "More documentary footage" },
          ],
          correct: "B",
          explanation: "Charlie says they would benefit from more recent GPS tracking data for African wild dogs.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO conclusions do Sophia and Charlie draw in their project?",
          options: [
            { label: "A", text: "Cooperative hunting evolved to reduce individual risk and improve caloric return" },
            { label: "B", text: "Wolves are better hunters than African wild dogs" },
            { label: "C", text: "Communication differences reflect adaptations to different habitat types" },
            { label: "D", text: "African wild dogs are declining because of habitat loss" },
            { label: "E", text: "Pack size is the most important factor in hunting success" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Charlie says cooperative hunting evolved to reduce risk and improve caloric return, and Sophia argues communication differences reflect habitat adaptations.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO priorities do they identify for their final write-up?",
          options: [
            { label: "A", text: "Strengthening the comparative analysis" },
            { label: "B", text: "Adding more case studies" },
            { label: "C", text: "Including clearer discussion of evolutionary theory" },
            { label: "D", text: "Reducing the word count" },
            { label: "E", text: "Updating their bibliography" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Sophia says they want to strengthen the comparative analysis, and Charlie says they want to include a clearer discussion of evolutionary theory.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "What does Charlie say about the documentary archive footage they analysed?",
          options: [
            { label: "A", text: "It provided quantitative data" },
            { label: "B", text: "It gave qualitative behavioural data to complement quantitative studies" },
            { label: "C", text: "It was their primary source of information" },
          ],
          correct: "B",
          explanation: "Charlie says the documentary footage gave them qualitative behavioural data to complement the quantitative studies.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "Approximately what is the wolf hunting success rate according to Sophia?",
          options: [
            { label: "A", text: "Around 10 percent" },
            { label: "B", text: "Around 20 percent" },
            { label: "C", text: "Around 35 percent" },
          ],
          correct: "B",
          explanation: "Sophia says wolves have a success rate of around 20 percent in most studies, though this varies by terrain.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: Coral Reef Ecosystems",
      context:
        "A university lecturer is giving a talk on coral reef ecosystems — their structure, biodiversity, and the threats they face.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon. Today's lecture focuses on coral reef ecosystems — perhaps the most biologically diverse habitats on Earth, and among the most threatened.

Coral reefs cover only about 1 percent of the ocean floor, yet they support an estimated 25 percent of all marine species. This extraordinary concentration of biodiversity has led scientists to call reefs the rainforests of the sea. The reefs also provide critical services to human communities — protecting coastlines from erosion, supporting fishing industries, and generating income from tourism. It is estimated that coral reefs contribute approximately $375 billion per year to the global economy.

Despite their importance, coral reefs are under severe threat. The primary cause of global coral decline is ocean warming driven by climate change. When water temperatures rise above a reef's tolerance threshold — often by as little as 1 degree Celsius — corals expel the symbiotic algae that live within their tissues. This process is called bleaching. Without the algae, corals turn white and, if temperatures remain elevated, begin to die.

The Great Barrier Reef in Australia is the world's largest coral reef system, stretching over 2,300 kilometres. It experienced its most severe bleaching event on record in 2016, when elevated sea temperatures caused mass bleaching across more than 90 percent of the reef.

A second major threat is ocean acidification — the reduction in ocean pH caused by the absorption of carbon dioxide. As oceans become more acidic, coral skeletons weaken and growth rates decline. Current projections suggest that at continued rates of CO2 emissions, ocean pH could fall to levels last seen 20 million years ago.

Local threats also play a significant role. Runoff of agricultural chemicals — particularly nitrogen-rich fertilisers — causes algal blooms that smother reefs. Destructive fishing practices, including the use of dynamite and cyanide, cause direct physical damage to reef structures.

Conservation efforts are gaining momentum. Marine Protected Areas — zones where human activity is restricted — have been shown to help reef ecosystems recover. In particularly resilient reefs, scientists have observed coral reproduction rates increasing within six years of protection. Coral gardening programmes, where fragments of resilient coral are grown in nurseries and then transplanted onto damaged reefs, offer further hope. Australia's government recently announced a $1 billion investment in Great Barrier Reef conservation over the next decade.

Coral reefs can recover — but only if we give them the chance.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Coral reefs cover approximately",
          after: "percent of the ocean floor",
          wordLimit: 1,
          correct: "1",
          explanation: "The lecturer says coral reefs cover only about 1 percent of the ocean floor.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Reefs support an estimated",
          after: "percent of all marine species",
          wordLimit: 1,
          correct: "25",
          explanation: "The lecturer says reefs support an estimated 25 percent of all marine species.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Annual economic contribution of coral reefs:",
          after: "billion",
          wordLimit: 1,
          correct: "$375",
          explanation: "The lecturer says coral reefs contribute approximately $375 billion per year to the global economy.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Temperature rise needed to trigger bleaching:",
          after: "as little as 1 degree Celsius",
          wordLimit: 1,
          correct: "often",
          explanation: "The lecturer says temperatures rising by as little as 1 degree Celsius above the tolerance threshold can trigger bleaching.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "The process of coral turning white when algae are expelled is called:",
          wordLimit: 1,
          correct: "bleaching",
          explanation: "The lecturer says the process of corals expelling algae and turning white is called bleaching.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Length of the Great Barrier Reef:",
          after: "kilometres",
          wordLimit: 1,
          correct: "2,300",
          explanation: "The lecturer says the Great Barrier Reef stretches over 2,300 kilometres.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Year of the Great Barrier Reef's most severe bleaching event:",
          wordLimit: 1,
          correct: "2016",
          explanation: "The lecturer says the most severe bleaching event on record occurred in 2016.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Ocean acidification is caused by absorption of:",
          wordLimit: 2,
          correct: "carbon dioxide",
          explanation: "The lecturer says ocean acidification is caused by the absorption of carbon dioxide.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Coral reproduction rates can increase within",
          after: "years of Marine Protected Area protection",
          wordLimit: 1,
          correct: "six",
          explanation: "The lecturer says scientists have observed coral reproduction rates increasing within six years of protection.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Australia's government investment in Great Barrier Reef conservation: $",
          after: "billion",
          wordLimit: 1,
          correct: "1",
          explanation: "The lecturer says Australia's government announced a $1 billion investment in Great Barrier Reef conservation.",
        },
      ],
    },
  ],
};
