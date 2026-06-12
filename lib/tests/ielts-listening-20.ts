import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening20: IELTSListeningTest = {
  id: "ielts-listening-20",
  exam: "IELTS",
  title: "IELTS Listening — Test 20",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Dental Clinic Appointment Booking",
      context:
        "Ian is calling Millbrook Dental Practice to book an appointment. Rosa, the receptionist, takes his details.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Rosa: Good morning, Millbrook Dental Practice. Rosa speaking. How can I help?

Ian: Good morning. I'd like to book an appointment, please. My name's Ian Garvey.

Rosa: Garvey — G-A-R-V-E-Y?

Ian: Yes, that's right.

Rosa: Thank you, Mr Garvey. Are you a new patient or have you been with us before?

Ian: I'm new to the practice. I've just moved to the area.

Rosa: Welcome to the area! Could I take your date of birth, please?

Ian: The 3rd of February 1978.

Rosa: Thank you. And what's the reason for your visit today?

Ian: I've got a toothache — it's been bothering me for about a week. I think it might be a cracked tooth.

Rosa: I'm sorry to hear that. In that case, I'd recommend booking you in as an urgent appointment. We have a slot available on Thursday the 8th at two-fifteen in the afternoon.

Ian: Thursday the 8th at two-fifteen — yes, that works for me.

Rosa: Perfect. Which dentist have you been registered with previously?

Ian: Dr Whitmore at Fernside Dental in Leeds.

Rosa: Thank you. We'll write to them to request your records if you're happy with that.

Ian: Yes, that's fine.

Rosa: Could I take your home address?

Ian: It's 14 Hawthorn Drive, Millbrook.

Rosa: And a contact number?

Ian: My mobile is 07866 112 390.

Rosa: Thank you. Now, just to let you know — as a new patient, your first appointment will include a full examination. The examination fee is £55. Treatment costs would be additional, depending on what's needed.

Ian: That's fine. Is there anything I need to bring?

Rosa: Just a form of ID, and if you have any details of your previous dental treatment — X-rays or records — it would be helpful to bring those along too. If not, we can request them from your old practice.

Ian: I'll see what I can find. Is there parking nearby?

Rosa: Yes, there's a free car park directly behind the building. You'll find the entrance on Birch Lane.

Ian: Brilliant. Thank you, Rosa.

Rosa: You're very welcome, Mr Garvey. We'll see you Thursday.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Patient's surname:",
          wordLimit: 1,
          correct: "Garvey",
          explanation: "Ian gives his name as Ian Garvey, and Rosa confirms the spelling G-A-R-V-E-Y.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Patient status:",
          wordLimit: 2,
          correct: "new patient",
          explanation: "Ian says he is new to the practice.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Date of birth:",
          wordLimit: 3,
          correct: "3rd of February 1978",
          explanation: "Ian says his date of birth is the 3rd of February 1978.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Reason for appointment:",
          wordLimit: 1,
          correct: "toothache",
          explanation: "Ian says he has a toothache that has been bothering him for about a week.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Appointment date and time:",
          wordLimit: 4,
          correct: "Thursday the 8th at two-fifteen",
          explanation: "Rosa offers a slot on Thursday the 8th at two-fifteen and Ian confirms this works.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Previous dentist name:",
          wordLimit: 2,
          correct: "Dr Whitmore",
          explanation: "Ian says his previous dentist was Dr Whitmore at Fernside Dental in Leeds.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Home address:",
          wordLimit: 3,
          correct: "14 Hawthorn Drive, Millbrook",
          explanation: "Ian gives his address as 14 Hawthorn Drive, Millbrook.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Contact mobile number:",
          wordLimit: 3,
          correct: "07866 112 390",
          explanation: "Ian gives his mobile number as 07866 112 390.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "New patient examination fee: £",
          wordLimit: 1,
          correct: "55",
          explanation: "Rosa says the examination fee is £55 for new patients.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Car park entrance located on:",
          wordLimit: 2,
          correct: "Birch Lane",
          explanation: "Rosa says the car park entrance is on Birch Lane.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "Radio Programme: Sustainable Architecture",
      context:
        "A radio presenter is giving a programme about the principles and examples of sustainable architecture.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each building or feature (16–20) with the correct sustainability strategy (A–F). Write the correct letter next to each item.",
      transcript: `
Good morning and welcome to Green Futures on Radio 4. I'm your presenter, and today we're looking at sustainable architecture — buildings designed not just to house people, but to work in harmony with the natural environment.

Sustainable architecture is one of the fastest-growing fields in construction. The UK government has set a target of making all new residential buildings net zero carbon by 2025. This means they must produce as much energy as they consume over the course of a year. The construction sector currently accounts for approximately 39 percent of global carbon emissions — making it the single largest contributor to climate change.

There are several core principles at the heart of sustainable building design. First, passive design strategies — using the shape and orientation of a building to reduce energy demand before any technology is applied. Second, materials selection — choosing materials that have low embodied carbon, meaning the carbon released during their manufacture and transport. Third, water conservation — incorporating rainwater harvesting and greywater recycling systems. And fourth, biodiversity integration — incorporating green roofs, living walls, and habitat features into the building fabric.

Let me now describe some specific buildings and the strategies that make them sustainable. The Brock Environmental Centre in the United States generates 83 percent more energy than it uses, largely through a system of wind turbines and solar panels on the roof. The Edge building in Amsterdam, often described as the world's smartest office building, uses a sophisticated thermal energy storage system beneath the building — essentially using the ground itself as a seasonal heat battery. The Bullitt Center in Seattle is made almost entirely from salvaged and sustainably sourced timber, reducing the embodied carbon of the structure to near zero. The Bosco Verticale in Milan — the Vertical Forest — incorporates over 800 trees on its balconies, acting as a living air filtration system for the building. The BedZED development in south London was one of the first zero-energy housing schemes in the UK and uses highly insulated building fabric to eliminate the need for conventional heating. And finally, the Singapore Sports Hub uses a massive roof of ETFE — a lightweight translucent material — that allows natural light to penetrate while reducing solar heat gain.

Sustainable architecture isn't a niche interest anymore — it is rapidly becoming the standard against which all new buildings will be judged. After the break, we'll hear from two architects working at the cutting edge of this field.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "By when does the UK government want all new residential buildings to be net zero carbon?",
          options: [
            { label: "A", text: "2023" },
            { label: "B", text: "2025" },
            { label: "C", text: "2030" },
          ],
          correct: "B",
          explanation: "The presenter says the UK government has set a target of making all new residential buildings net zero carbon by 2025.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "What percentage of global carbon emissions does the construction sector account for?",
          options: [
            { label: "A", text: "29 percent" },
            { label: "B", text: "39 percent" },
            { label: "C", text: "49 percent" },
          ],
          correct: "B",
          explanation: "The presenter says the construction sector accounts for approximately 39 percent of global carbon emissions.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "What does 'embodied carbon' refer to?",
          options: [
            { label: "A", text: "Carbon released when a building is demolished" },
            { label: "B", text: "Carbon released during the manufacture and transport of materials" },
            { label: "C", text: "Carbon released when a building is in operation" },
          ],
          correct: "B",
          explanation: "The presenter says embodied carbon means the carbon released during the manufacture and transport of building materials.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "What does the Brock Environmental Centre achieve in terms of energy?",
          options: [
            { label: "A", text: "It is net zero carbon" },
            { label: "B", text: "It generates 83 percent more energy than it uses" },
            { label: "C", text: "It uses no electricity at all" },
          ],
          correct: "B",
          explanation: "The presenter says the Brock Environmental Centre generates 83 percent more energy than it uses.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "What was BedZED one of the first examples of in the UK?",
          options: [
            { label: "A", text: "A building using living walls" },
            { label: "B", text: "A zero-energy housing scheme" },
            { label: "C", text: "A building made from salvaged timber" },
          ],
          correct: "B",
          explanation: "The presenter says BedZED was one of the first zero-energy housing schemes in the UK.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "The Brock Environmental Centre",
          options: [
            { label: "A", text: "Wind turbines and solar panels generating surplus energy" },
            { label: "B", text: "Thermal energy storage using the ground as a heat battery" },
            { label: "C", text: "Salvaged and sustainably sourced timber construction" },
            { label: "D", text: "Over 800 trees providing air filtration" },
            { label: "E", text: "Highly insulated fabric eliminating conventional heating" },
            { label: "F", text: "ETFE roof allowing natural light with reduced heat gain" },
          ],
          correct: "A",
          explanation: "The presenter says the Brock Environmental Centre generates surplus energy largely through wind turbines and solar panels on the roof.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "The Edge building in Amsterdam",
          options: [
            { label: "A", text: "Wind turbines and solar panels generating surplus energy" },
            { label: "B", text: "Thermal energy storage using the ground as a heat battery" },
            { label: "C", text: "Salvaged and sustainably sourced timber construction" },
            { label: "D", text: "Over 800 trees providing air filtration" },
            { label: "E", text: "Highly insulated fabric eliminating conventional heating" },
            { label: "F", text: "ETFE roof allowing natural light with reduced heat gain" },
          ],
          correct: "B",
          explanation: "The presenter says The Edge uses a thermal energy storage system beneath the building, essentially using the ground as a seasonal heat battery.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "The Bullitt Center in Seattle",
          options: [
            { label: "A", text: "Wind turbines and solar panels generating surplus energy" },
            { label: "B", text: "Thermal energy storage using the ground as a heat battery" },
            { label: "C", text: "Salvaged and sustainably sourced timber construction" },
            { label: "D", text: "Over 800 trees providing air filtration" },
            { label: "E", text: "Highly insulated fabric eliminating conventional heating" },
            { label: "F", text: "ETFE roof allowing natural light with reduced heat gain" },
          ],
          correct: "C",
          explanation: "The presenter says the Bullitt Center is made almost entirely from salvaged and sustainably sourced timber.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "Bosco Verticale (Vertical Forest) in Milan",
          options: [
            { label: "A", text: "Wind turbines and solar panels generating surplus energy" },
            { label: "B", text: "Thermal energy storage using the ground as a heat battery" },
            { label: "C", text: "Salvaged and sustainably sourced timber construction" },
            { label: "D", text: "Over 800 trees providing air filtration" },
            { label: "E", text: "Highly insulated fabric eliminating conventional heating" },
            { label: "F", text: "ETFE roof allowing natural light with reduced heat gain" },
          ],
          correct: "D",
          explanation: "The presenter says the Bosco Verticale incorporates over 800 trees on its balconies, acting as a living air filtration system.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "The Singapore Sports Hub",
          options: [
            { label: "A", text: "Wind turbines and solar panels generating surplus energy" },
            { label: "B", text: "Thermal energy storage using the ground as a heat battery" },
            { label: "C", text: "Salvaged and sustainably sourced timber construction" },
            { label: "D", text: "Over 800 trees providing air filtration" },
            { label: "E", text: "Highly insulated fabric eliminating conventional heating" },
            { label: "F", text: "ETFE roof allowing natural light with reduced heat gain" },
          ],
          correct: "F",
          explanation: "The presenter says the Singapore Sports Hub uses a massive ETFE roof that allows natural light to penetrate while reducing solar heat gain.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: Urban Planning Project",
      context:
        "Students Jade and Victor are meeting with their tutor, Dr Morgan, to discuss their urban planning project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Morgan: Good morning, Jade, Victor. Let's talk about the urban planning project. How's it going?

Victor: Really well, actually. We've settled on looking at the 15-minute city concept — the idea that in a well-designed city, all residents should be able to meet their daily needs within a 15-minute walk or cycle from their home.

Jade: We've been comparing how three different cities are implementing the concept: Paris, Melbourne, and Portland, Oregon.

Dr Morgan: That's a strong comparative framework. What drew you to this particular concept?

Jade: Partly because it's so current — Paris has been the most prominent case study since the mayor, Anne Hidalgo, made it central to her urban policy. But also because it touches on so many interconnected issues: mobility, green space, housing density, local economy.

Victor: And there's a genuine debate about whether the concept is achievable for all residents equally, or whether it risks becoming a policy that benefits already-privileged neighbourhoods.

Dr Morgan: That equity dimension is crucial. Have you incorporated data from residents?

Jade: Yes — we've analysed three large-scale urban satisfaction surveys, two from Paris and one from Melbourne. The data shows that access to green space and walkable local services has the strongest correlation with resident wellbeing.

Victor: We also interviewed a urban planning academic at our university who has worked directly with the Paris city team. That gave us some really useful insider perspective.

Dr Morgan: Excellent. How are you structuring the project?

Victor: Three main sections: the theoretical background to the concept, the comparative case studies, and then a final section on the equity challenges.

Jade: We've put most of our effort into the case studies — that's where the original comparative analysis is, so we want it to be the strongest part.

Dr Morgan: What do you still need to work on?

Jade: The equity section — it feels thinner than the rest. We want to add more empirical data on how different socioeconomic groups experience the 15-minute city differently.

Victor: And the conclusion doesn't yet synthesise the three case studies as clearly as it should. The insights from each city feel a bit siloed.

Dr Morgan: Both fixable — those are exactly the right things to address before submission. When is your deadline?

Victor: Two weeks from Friday.

Dr Morgan: That's plenty of time. I'd also suggest making sure your bibliography reflects the most recent planning literature — some of your references are from 2018, and the field has moved quickly since then.

Jade: We'll update those. Thank you, Dr Morgan.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What concept is the focus of Jade and Victor's urban planning project?",
          options: [
            { label: "A", text: "Smart city technology" },
            { label: "B", text: "The 15-minute city concept" },
            { label: "C", text: "High-density housing design" },
          ],
          correct: "B",
          explanation: "Victor says they are looking at the 15-minute city concept.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "Which three cities are they comparing?",
          options: [
            { label: "A", text: "Paris, London, and New York" },
            { label: "B", text: "Paris, Melbourne, and Portland" },
            { label: "C", text: "Amsterdam, Melbourne, and Singapore" },
          ],
          correct: "B",
          explanation: "Jade says they are comparing Paris, Melbourne, and Portland, Oregon.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "Which city's mayor made the 15-minute city central to urban policy?",
          options: [
            { label: "A", text: "Melbourne" },
            { label: "B", text: "Portland" },
            { label: "C", text: "Paris" },
          ],
          correct: "C",
          explanation: "Jade says Paris has been the most prominent case study since mayor Anne Hidalgo made it central to her urban policy.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "What did the urban satisfaction survey data show had the strongest correlation with resident wellbeing?",
          options: [
            { label: "A", text: "Access to public transport" },
            { label: "B", text: "Access to green space and walkable local services" },
            { label: "C", text: "Housing affordability" },
          ],
          correct: "B",
          explanation: "Jade says the data shows that access to green space and walkable local services has the strongest correlation with resident wellbeing.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "What is their submission deadline?",
          options: [
            { label: "A", text: "One week from Friday" },
            { label: "B", text: "Two weeks from Friday" },
            { label: "C", text: "Three weeks from Friday" },
          ],
          correct: "B",
          explanation: "Victor says their deadline is two weeks from Friday.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "What does Dr Morgan say about some of their bibliography references?",
          options: [
            { label: "A", text: "They are from non-academic sources" },
            { label: "B", text: "Some are from 2018 and the field has moved quickly since then" },
            { label: "C", text: "There are too few references overall" },
          ],
          correct: "B",
          explanation: "Dr Morgan suggests making sure the bibliography reflects the most recent planning literature, noting some references are from 2018.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO sections do Jade and Victor identify as needing improvement?",
          options: [
            { label: "A", text: "The theoretical background section" },
            { label: "B", text: "The equity section" },
            { label: "C", text: "The conclusion" },
            { label: "D", text: "The comparative case studies" },
            { label: "E", text: "The introduction" },
          ],
          pickCount: 2,
          correct: ["B", "C"],
          explanation:
            "Jade says the equity section feels thinner than the rest, and Victor says the conclusion doesn't synthesise the case studies clearly enough.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO data sources did Jade and Victor use in their research?",
          options: [
            { label: "A", text: "Three large-scale urban satisfaction surveys" },
            { label: "B", text: "A national government housing report" },
            { label: "C", text: "An interview with an urban planning academic" },
            { label: "D", text: "A series of public focus groups" },
            { label: "E", text: "Planning department annual statistics" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Jade mentions three urban satisfaction surveys, and Victor mentions an interview with a university academic who worked with the Paris city team.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "What concern do Jade and Victor raise about the 15-minute city concept?",
          options: [
            { label: "A", text: "It is too expensive to implement" },
            { label: "B", text: "It risks only benefiting already-privileged neighbourhoods" },
            { label: "C", text: "It requires too much new construction" },
          ],
          correct: "B",
          explanation: "Victor says there is a genuine debate about whether the concept risks becoming a policy that benefits already-privileged neighbourhoods.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "What does Victor say about the conclusion?",
          options: [
            { label: "A", text: "It is too long and needs cutting" },
            { label: "B", text: "The insights from each city feel too siloed" },
            { label: "C", text: "It contradicts the findings from the case studies" },
          ],
          correct: "B",
          explanation: "Victor says the insights from each city feel a bit siloed and the conclusion doesn't synthesise the three case studies clearly enough.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: The Future of Transportation",
      context:
        "A university lecturer is giving a talk on emerging technologies and trends shaping the future of transportation.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good afternoon, everyone. Today's lecture looks at the future of transportation — one of the most rapidly changing sectors in the global economy, and one with enormous implications for urban planning, the environment, and everyday life.

Transportation currently accounts for approximately 24 percent of global CO2 emissions, making it the second largest emitting sector after energy production. Decarbonising transport is therefore central to any credible climate strategy. The good news is that multiple technological solutions are converging at the same time.

Electric vehicles — or EVs — are perhaps the most visible change. Global EV sales exceeded 10 million vehicles for the first time in 2022. Battery technology is advancing rapidly: the energy density of lithium-ion batteries has improved by roughly 85 percent over the past decade, while costs have fallen by approximately 90 percent since 2010. Most analysts project that EVs will achieve price parity with petrol and diesel vehicles by 2025 in most major markets.

Beyond cars, electric aviation is beginning to emerge. Several companies are developing electric vertical take-off and landing aircraft — commonly called eVTOLs — designed for short urban journeys, effectively air taxis. The technology remains in its early stages, with most prototypes limited to ranges of around 100 kilometres, but commercial operations are expected to begin in several cities by 2027.

Hydrogen fuel cells represent another pathway to zero-emission transport, particularly for heavy vehicles — lorries, trains, and ships — where battery weight makes electrification challenging. Japan and Germany are leading hydrogen infrastructure investment, with both countries committed to building extensive networks of hydrogen refuelling stations.

Autonomous vehicles — self-driving cars — have been the subject of intense research and investment for over two decades. Level 4 autonomy — meaning the car can drive itself without human intervention in defined conditions — has been achieved in limited trials, most notably by Waymo in parts of the United States. Widespread deployment, however, faces significant regulatory and public trust challenges.

Urban micro-mobility — e-scooters, e-bikes, and cargo bikes — has grown explosively in the past five years. Cities that have invested in protected cycling infrastructure have seen micro-mobility use increase by up to 300 percent compared to those relying on painted lanes alone.

Hyperloop technology — where pods travel through near-vacuum tubes at speeds approaching 1,000 kilometres per hour — remains the most speculative of the emerging technologies. Several prototype systems have been tested, but no commercial hyperloop route is yet operational anywhere in the world.

The future of transportation is not a single technology but a mosaic of solutions, each suited to different journeys, distances, and contexts. The challenge — for engineers, policymakers, and planners alike — is to integrate them coherently.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Transportation accounts for approximately",
          after: "percent of global CO2 emissions",
          wordLimit: 1,
          correct: "24",
          explanation: "The lecturer says transportation accounts for approximately 24 percent of global CO2 emissions.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Global EV sales exceeded 10 million for the first time in:",
          wordLimit: 1,
          correct: "2022",
          explanation: "The lecturer says global EV sales exceeded 10 million vehicles for the first time in 2022.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Battery cost reduction since 2010:",
          after: "approximately 90 percent",
          wordLimit: 1,
          correct: "fallen",
          explanation: "The lecturer says battery costs have fallen by approximately 90 percent since 2010.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "EV price parity with petrol vehicles expected by:",
          wordLimit: 1,
          correct: "2025",
          explanation: "The lecturer says most analysts project EVs will achieve price parity with petrol and diesel vehicles by 2025.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Electric urban air taxis are called:",
          wordLimit: 1,
          correct: "eVTOLs",
          explanation: "The lecturer says electric vertical take-off and landing aircraft are commonly called eVTOLs.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "Most eVTOL prototypes are currently limited to ranges of around:",
          after: "kilometres",
          wordLimit: 1,
          correct: "100",
          explanation: "The lecturer says most prototypes are limited to ranges of around 100 kilometres.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "Hydrogen fuel cells are most suited to:",
          after: "vehicles such as lorries, trains, and ships",
          wordLimit: 1,
          correct: "heavy",
          explanation: "The lecturer says hydrogen fuel cells are particularly suited for heavy vehicles — lorries, trains, and ships.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "Level 4 autonomous vehicle trials have been conducted most notably by:",
          wordLimit: 1,
          correct: "Waymo",
          explanation: "The lecturer says Level 4 autonomy has been achieved in limited trials, most notably by Waymo.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "Cities with protected cycling infrastructure have seen micro-mobility use increase by up to:",
          after: "percent",
          wordLimit: 1,
          correct: "300",
          explanation: "The lecturer says cities with protected cycling infrastructure have seen micro-mobility use increase by up to 300 percent.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Hyperloop pods travel through near-vacuum tubes at speeds approaching:",
          after: "kilometres per hour",
          wordLimit: 1,
          correct: "1,000",
          explanation: "The lecturer says hyperloop pods travel through near-vacuum tubes at speeds approaching 1,000 kilometres per hour.",
        },
      ],
    },
  ],
};
