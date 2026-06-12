import type { IELTSListeningTest } from "./listening-types";

export const ieltsListening16: IELTSListeningTest = {
  id: "ielts-listening-16",
  exam: "IELTS",
  title: "IELTS Listening — Test 16",
  totalSeconds: 1800,

  parts: [
    // ── PART 1 ───────────────────────────────────────────────────────────────
    {
      part: 1,
      title: "Tourist Information Centre",
      context:
        "Thomas is visiting the city tourist information centre. Kate, the information officer, helps him plan his visit.",
      audioUrl: "",
      questionRange: "Questions 1–10",
      instructions:
        "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Kate: Good morning and welcome to the City Tourist Information Centre. I'm Kate. How can I help you today?

Thomas: Good morning. My name's Thomas Vickers. I've just arrived in the city and I'm not sure where to start, really.

Kate: Well, you've come to the right place! How many days are you here for?

Thomas: Four days in total. I arrive yesterday and I leave on Saturday.

Kate: Lovely. Are you visiting alone or with family?

Thomas: Just myself. It's a solo trip.

Kate: That's wonderful — you'll have great flexibility. What kinds of things are you most interested in?

Thomas: I love history and architecture, and I enjoy walking. I'm not so keen on indoor museums unless they're exceptional.

Kate: Perfect. Then I'd highly recommend the Cathedral Quarter walking trail — it takes you past twelve of the city's most important historic buildings. The route is about four kilometres and takes roughly two hours at a leisurely pace.

Thomas: That sounds ideal. Is it free?

Kate: Completely free. You can pick up a printed map here, or download the app — it's called CityWalk and it's free on both iOS and Android.

Thomas: I'll take the printed map, please. What else would you suggest?

Kate: The Botanical Gardens are spectacular this time of year. They open at eight o'clock and close at six, and admission is free. The glasshouse section is particularly impressive.

Thomas: And what about somewhere good for lunch in the centre?

Kate: The covered market on St Anne's Street has an excellent food hall on the first floor — lots of local produce and hot food stalls. Most dishes are around £7 or £8.

Thomas: What about transport? I'd prefer not to drive in the city centre.

Kate: Absolutely. The city has a very good tram network. A day pass costs £4.50 and covers unlimited travel on all tram routes. You can buy it at any tram stop or from the app.

Thomas: Is the castle open this week? I noticed it when I drove in.

Kate: Yes — the castle is open Tuesday to Sunday, nine to five. Admission is £9.50 for adults. I should warn you the west tower is under renovation at the moment, but everything else is open.

Thomas: That's useful to know. Thank you so much, Kate.

Kate: My pleasure. Enjoy your stay, Mr Vickers.
      `,
      questions: [
        {
          id: 1,
          type: "fill_blank",
          before: "Visitor's surname:",
          wordLimit: 1,
          correct: "Vickers",
          explanation: "Thomas introduces himself as Thomas Vickers.",
        },
        {
          id: 2,
          type: "fill_blank",
          before: "Length of visit:",
          after: "days",
          wordLimit: 1,
          correct: "four",
          explanation: "Thomas says he is here for four days in total.",
        },
        {
          id: 3,
          type: "fill_blank",
          before: "Walking trail passes:",
          after: "historic buildings",
          wordLimit: 1,
          correct: "twelve",
          explanation: "Kate says the Cathedral Quarter walking trail passes twelve of the city's most important historic buildings.",
        },
        {
          id: 4,
          type: "fill_blank",
          before: "Length of walking trail:",
          after: "kilometres",
          wordLimit: 1,
          correct: "four",
          explanation: "Kate says the route is about four kilometres.",
        },
        {
          id: 5,
          type: "fill_blank",
          before: "Name of walking trail app:",
          wordLimit: 1,
          correct: "CityWalk",
          explanation: "Kate says the app is called CityWalk.",
        },
        {
          id: 6,
          type: "fill_blank",
          before: "Botanical Gardens closing time:",
          wordLimit: 1,
          correct: "six",
          explanation: "Kate says the Botanical Gardens close at six.",
        },
        {
          id: 7,
          type: "fill_blank",
          before: "Food hall location:",
          wordLimit: 4,
          correct: "covered market on St Anne's Street",
          explanation: "Kate says the food hall is in the covered market on St Anne's Street.",
        },
        {
          id: 8,
          type: "fill_blank",
          before: "Tram day pass cost: £",
          wordLimit: 1,
          correct: "4.50",
          explanation: "Kate says a tram day pass costs £4.50.",
        },
        {
          id: 9,
          type: "fill_blank",
          before: "Castle adult admission: £",
          wordLimit: 1,
          correct: "9.50",
          explanation: "Kate says castle admission is £9.50 for adults.",
        },
        {
          id: 10,
          type: "fill_blank",
          before: "Current renovation at the castle:",
          after: "tower",
          wordLimit: 1,
          correct: "west",
          explanation: "Kate warns that the west tower is under renovation at the moment.",
        },
      ],
    },

    // ── PART 2 ───────────────────────────────────────────────────────────────
    {
      part: 2,
      title: "City Walking Tour Introduction",
      context:
        "A city tour guide is giving an introduction to a group of visitors at the start of a walking tour.",
      audioUrl: "",
      questionRange: "Questions 11–20",
      instructions:
        "Questions 11–15: Choose the correct letter, A, B, or C.\nQuestions 16–20: Match each landmark (16–20) with the correct description (A–F). Write the correct letter next to each landmark.",
      transcript: `
Good morning, everyone, and a very warm welcome to Hartfield City Walking Tours. My name is Graham and I'll be your guide for the next two and a half hours. This is our Classic Heritage Tour — the most popular of our six different walking routes.

Before we set off, a few practical points. The route is approximately 3.5 kilometres in total and is mostly flat, with one gentle climb near the cathedral. We'll be stopping at ten points of interest along the way. There are two places where we'll have a short break — first at the Market Hall, and second near the river.

The tour costs £12 per person today. If you'd like to book again, or recommend us to a friend, our regular price is £14 — so today you're benefiting from our group discount. Children under 12 are always free. We also offer private guided tours for groups of ten or more — please speak to me afterwards if that's of interest.

Photography is of course encouraged throughout the tour, and I'll flag the best viewpoints as we go. The tour will conclude at St Margaret's Square, where you'll find several excellent cafés and restaurants if you'd like to continue your afternoon there.

Now, let me give you a brief overview of some of the key sights we'll be visiting today. The Market Hall, where we'll have our first break, is one of the finest examples of Victorian iron and glass architecture in the country. The Old Bridge, which we'll cross just after the market, dates from 1342 and is the oldest surviving structure in the city. The Guildhall on New Street was originally built in the fourteenth century and still functions as the city's main civic building for formal ceremonies. The Weavers' Quarter, which we'll walk through after the Guildhall, was once the heart of the city's textile industry and now contains independent shops and galleries. The Riverside Promenade was developed in the 1990s as part of an urban regeneration project and offers spectacular views of the old mill buildings. And finally, the Cathedral, our last major stop, took 150 years to build and houses a collection of medieval stained glass that is unique in Europe.

Right — shall we begin? Follow me, please.
      `,
      questions: [
        {
          id: 11,
          type: "mc_single",
          stem: "How many different walking routes does the company offer in total?",
          options: [
            { label: "A", text: "Four" },
            { label: "B", text: "Six" },
            { label: "C", text: "Ten" },
          ],
          correct: "B",
          explanation: "The guide says this is the most popular of their six different walking routes.",
        },
        {
          id: 12,
          type: "mc_single",
          stem: "How long is the Classic Heritage Tour?",
          options: [
            { label: "A", text: "Two hours" },
            { label: "B", text: "Two and a half hours" },
            { label: "C", text: "Three hours" },
          ],
          correct: "B",
          explanation: "The guide says the tour lasts two and a half hours.",
        },
        {
          id: 13,
          type: "mc_single",
          stem: "How much does the tour cost per person today?",
          options: [
            { label: "A", text: "£10" },
            { label: "B", text: "£12" },
            { label: "C", text: "£14" },
          ],
          correct: "B",
          explanation: "The guide says the tour costs £12 per person today.",
        },
        {
          id: 14,
          type: "mc_single",
          stem: "Where will the tour conclude?",
          options: [
            { label: "A", text: "At the Cathedral" },
            { label: "B", text: "At the Old Bridge" },
            { label: "C", text: "At St Margaret's Square" },
          ],
          correct: "C",
          explanation: "The guide says the tour will conclude at St Margaret's Square.",
        },
        {
          id: 15,
          type: "mc_single",
          stem: "What is the minimum group size for a private tour?",
          options: [
            { label: "A", text: "Six people" },
            { label: "B", text: "Eight people" },
            { label: "C", text: "Ten people" },
          ],
          correct: "C",
          explanation: "The guide says private guided tours are available for groups of ten or more.",
        },
        {
          id: 16,
          type: "mc_single",
          stem: "The Market Hall",
          options: [
            { label: "A", text: "Oldest surviving structure in the city" },
            { label: "B", text: "Victorian iron and glass architecture" },
            { label: "C", text: "Main civic building for ceremonies" },
            { label: "D", text: "Former heart of the textile industry" },
            { label: "E", text: "Part of an urban regeneration project" },
            { label: "F", text: "Houses medieval stained glass unique in Europe" },
          ],
          correct: "B",
          explanation: "The guide says the Market Hall is one of the finest examples of Victorian iron and glass architecture.",
        },
        {
          id: 17,
          type: "mc_single",
          stem: "The Old Bridge",
          options: [
            { label: "A", text: "Oldest surviving structure in the city" },
            { label: "B", text: "Victorian iron and glass architecture" },
            { label: "C", text: "Main civic building for ceremonies" },
            { label: "D", text: "Former heart of the textile industry" },
            { label: "E", text: "Part of an urban regeneration project" },
            { label: "F", text: "Houses medieval stained glass unique in Europe" },
          ],
          correct: "A",
          explanation: "The guide says the Old Bridge dates from 1342 and is the oldest surviving structure in the city.",
        },
        {
          id: 18,
          type: "mc_single",
          stem: "The Guildhall",
          options: [
            { label: "A", text: "Oldest surviving structure in the city" },
            { label: "B", text: "Victorian iron and glass architecture" },
            { label: "C", text: "Main civic building for ceremonies" },
            { label: "D", text: "Former heart of the textile industry" },
            { label: "E", text: "Part of an urban regeneration project" },
            { label: "F", text: "Houses medieval stained glass unique in Europe" },
          ],
          correct: "C",
          explanation: "The guide says the Guildhall still functions as the city's main civic building for formal ceremonies.",
        },
        {
          id: 19,
          type: "mc_single",
          stem: "The Weavers' Quarter",
          options: [
            { label: "A", text: "Oldest surviving structure in the city" },
            { label: "B", text: "Victorian iron and glass architecture" },
            { label: "C", text: "Main civic building for ceremonies" },
            { label: "D", text: "Former heart of the textile industry" },
            { label: "E", text: "Part of an urban regeneration project" },
            { label: "F", text: "Houses medieval stained glass unique in Europe" },
          ],
          correct: "D",
          explanation: "The guide says the Weavers' Quarter was once the heart of the city's textile industry.",
        },
        {
          id: 20,
          type: "mc_single",
          stem: "The Cathedral",
          options: [
            { label: "A", text: "Oldest surviving structure in the city" },
            { label: "B", text: "Victorian iron and glass architecture" },
            { label: "C", text: "Main civic building for ceremonies" },
            { label: "D", text: "Former heart of the textile industry" },
            { label: "E", text: "Part of an urban regeneration project" },
            { label: "F", text: "Houses medieval stained glass unique in Europe" },
          ],
          correct: "F",
          explanation: "The guide says the Cathedral houses a collection of medieval stained glass that is unique in Europe.",
        },
      ],
    },

    // ── PART 3 ───────────────────────────────────────────────────────────────
    {
      part: 3,
      title: "Discussion: History of Exploration Project",
      context:
        "Students George and Nina are meeting with their tutor, Dr Cooper, to discuss their history of exploration project.",
      audioUrl: "",
      questionRange: "Questions 21–30",
      instructions:
        "Questions 21–26: Choose the correct letter, A, B, or C.\nQuestions 27–28: Choose TWO correct letters.\nQuestions 29–30: Choose the correct letter, A, B, or C.",
      transcript: `
Dr Cooper: Good afternoon, George, Nina. Let's talk about where you are with the exploration project.

Nina: We've made solid progress, Dr Cooper. We've decided to focus on the Age of Exploration — specifically the Portuguese and Spanish maritime expeditions of the fifteenth and sixteenth centuries.

George: We wanted to examine the motivations behind these voyages rather than simply narrating the journeys themselves.

Dr Cooper: That's a mature approach. What primary sources are you drawing on?

George: We've been using translated extracts from sailors' journals — particularly those from Vasco da Gama's voyage to India in 1498.

Nina: And I've been working through contemporary maps, which are fascinating for what they reveal about European geographical knowledge at the time.

Dr Cooper: Good. What's your central argument?

Nina: We're arguing that economic motivations — particularly control of the spice trade — were more significant than religious or scientific motivations in driving exploration.

George: The documentary evidence is quite strong on this. The financial backing from Portuguese and Spanish crowns was explicitly tied to trade monopoly ambitions.

Dr Cooper: It's a well-supported position. Now, I noticed your draft mentions colonialism only briefly. Is that deliberate?

George: Partly. We were conscious that the word count was tight, but we do plan to add more on the long-term consequences — particularly the exploitation of indigenous populations.

Nina: We want to avoid the draft reading as a purely celebratory account of exploration, which would be historically irresponsible.

Dr Cooper: I'm glad you're thinking about that. How are you organising the essay?

George: We've structured it thematically rather than chronologically — we think that serves the argument better.

Nina: Yes — three themes: economics, religion, and geopolitical rivalry. Each gets its own section.

Dr Cooper: That's a strong structure. For the final submission, what are your two biggest remaining tasks?

Nina: We need to strengthen the section on religion — it feels underdeveloped compared to the other two.

George: And we both feel the introduction doesn't quite capture our central argument yet. It needs rewriting.

Dr Cooper: Agreed on both counts. Make those your priority this week.
      `,
      questions: [
        {
          id: 21,
          type: "mc_single",
          stem: "What period does George and Nina's project focus on?",
          options: [
            { label: "A", text: "The Industrial Revolution" },
            { label: "B", text: "The Age of Exploration in the 15th and 16th centuries" },
            { label: "C", text: "Viking exploration of the North Atlantic" },
          ],
          correct: "B",
          explanation: "Nina says they are focusing on the Age of Exploration, specifically Portuguese and Spanish expeditions of the fifteenth and sixteenth centuries.",
        },
        {
          id: 22,
          type: "mc_single",
          stem: "What is their central argument?",
          options: [
            { label: "A", text: "Religious motivations drove exploration more than economic ones" },
            { label: "B", text: "Scientific curiosity was the primary driver of exploration" },
            { label: "C", text: "Economic motivations were more significant than religious or scientific ones" },
          ],
          correct: "C",
          explanation: "Nina says they are arguing that economic motivations were more significant than religious or scientific motivations.",
        },
        {
          id: 23,
          type: "mc_single",
          stem: "What primary sources did George use?",
          options: [
            { label: "A", text: "Contemporary maps" },
            { label: "B", text: "Translated extracts from sailors' journals" },
            { label: "C", text: "Royal court documents" },
          ],
          correct: "B",
          explanation: "George says he used translated extracts from sailors' journals, particularly from Vasco da Gama's voyage.",
        },
        {
          id: 24,
          type: "mc_single",
          stem: "How have they organised their essay?",
          options: [
            { label: "A", text: "Chronologically" },
            { label: "B", text: "By explorer" },
            { label: "C", text: "Thematically" },
          ],
          correct: "C",
          explanation: "George says they structured the essay thematically rather than chronologically.",
        },
        {
          id: 25,
          type: "mc_single",
          stem: "Which section do they feel needs strengthening?",
          options: [
            { label: "A", text: "Economics" },
            { label: "B", text: "Religion" },
            { label: "C", text: "Geopolitical rivalry" },
          ],
          correct: "B",
          explanation: "Nina says the section on religion feels underdeveloped compared to the other two.",
        },
        {
          id: 26,
          type: "mc_single",
          stem: "Which explorer's journal did they particularly study?",
          options: [
            { label: "A", text: "Christopher Columbus" },
            { label: "B", text: "Ferdinand Magellan" },
            { label: "C", text: "Vasco da Gama" },
          ],
          correct: "C",
          explanation: "George specifically mentions Vasco da Gama's voyage to India in 1498.",
        },
        {
          id: 27,
          type: "mc_multiple",
          stem: "Which TWO tasks do George and Nina identify as priorities this week?",
          options: [
            { label: "A", text: "Rewriting the introduction" },
            { label: "B", text: "Adding more maps to the appendix" },
            { label: "C", text: "Strengthening the religion section" },
            { label: "D", text: "Expanding the bibliography" },
            { label: "E", text: "Translating more journal extracts" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "George says the introduction needs rewriting, and Nina says the religion section needs strengthening.",
        },
        {
          id: 28,
          type: "mc_multiple",
          stem: "Which TWO themes structure their essay?",
          options: [
            { label: "A", text: "Economics" },
            { label: "B", text: "Geography" },
            { label: "C", text: "Religion" },
            { label: "D", text: "Technology" },
            { label: "E", text: "Geopolitical rivalry" },
          ],
          pickCount: 2,
          correct: ["A", "C"],
          explanation:
            "Nina lists three themes: economics, religion, and geopolitical rivalry. The question asks for two — economics and religion are both confirmed.",
        },
        {
          id: 29,
          type: "mc_single",
          stem: "Why did they originally treat colonialism only briefly?",
          options: [
            { label: "A", text: "They considered it outside their topic area" },
            { label: "B", text: "The word count was tight" },
            { label: "C", text: "Dr Cooper advised against including it" },
          ],
          correct: "B",
          explanation: "George says they were conscious that the word count was tight.",
        },
        {
          id: 30,
          type: "mc_single",
          stem: "What does Nina say they want to avoid in their account?",
          options: [
            { label: "A", text: "Being overly critical of European powers" },
            { label: "B", text: "A purely celebratory account of exploration" },
            { label: "C", text: "Focusing too heavily on economics" },
          ],
          correct: "B",
          explanation: "Nina says they want to avoid the draft reading as a purely celebratory account of exploration, which would be historically irresponsible.",
        },
      ],
    },

    // ── PART 4 ───────────────────────────────────────────────────────────────
    {
      part: 4,
      title: "Lecture: Genetics and Heredity",
      context:
        "A university lecturer is giving an introductory lecture on genetics and the principles of heredity.",
      audioUrl: "",
      questionRange: "Questions 31–40",
      instructions:
        "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: `
Good morning, everyone. Today we begin our module on genetics — one of the most exciting and rapidly evolving fields in all of modern biology.

Genetics is the scientific study of genes, heredity, and genetic variation in living organisms. The foundations of the field were established by Gregor Mendel, an Austrian monk who conducted a series of pea plant experiments in the 1860s. Mendel identified that traits are passed from parents to offspring in predictable patterns, and he formulated what we now call the laws of inheritance.

A gene is a specific sequence of DNA that carries the instructions for making a protein. Humans have approximately 20,000 genes, contained within 23 pairs of chromosomes. The full set of genetic information in an organism is called its genome.

One of Mendel's key discoveries was the concept of dominant and recessive alleles. An allele is simply a variant form of a gene. When an organism carries two different alleles for a trait, the dominant allele is expressed in the organism's physical appearance — what we call the phenotype — while the recessive allele is hidden.

The discovery of the structure of DNA was a watershed moment in genetics. In 1953, James Watson and Francis Crick, using X-ray crystallography data produced by Rosalind Franklin, proposed the famous double helix model of DNA. This explained how genetic information could be copied and passed on from one generation to the next.

Modern genetics has moved far beyond Mendel's original work. The Human Genome Project, completed in 2003 after thirteen years of international collaboration, produced the first complete map of the human genome. This achievement opened the door to personalised medicine — the idea that treatments could be tailored to an individual's specific genetic profile.

Today, genetic technologies such as CRISPR-Cas9 allow scientists to edit specific genes with unprecedented precision. This has enormous potential for treating inherited diseases — conditions caused by faulty genes, such as cystic fibrosis or sickle cell anaemia. However, gene editing also raises profound ethical questions about the limits of human intervention in the natural world.

We'll explore all of these themes throughout the coming weeks.
      `,
      questions: [
        {
          id: 31,
          type: "fill_blank",
          before: "Genetics was founded by:",
          wordLimit: 2,
          correct: "Gregor Mendel",
          explanation: "The lecturer says the foundations of genetics were established by Gregor Mendel.",
        },
        {
          id: 32,
          type: "fill_blank",
          before: "Mendel conducted experiments using:",
          after: "plants",
          wordLimit: 1,
          correct: "pea",
          explanation: "The lecturer says Mendel conducted a series of pea plant experiments.",
        },
        {
          id: 33,
          type: "fill_blank",
          before: "Approximate number of human genes:",
          wordLimit: 1,
          correct: "20,000",
          explanation: "The lecturer says humans have approximately 20,000 genes.",
        },
        {
          id: 34,
          type: "fill_blank",
          before: "Number of chromosome pairs in humans:",
          wordLimit: 1,
          correct: "23",
          explanation: "The lecturer says genes are contained within 23 pairs of chromosomes.",
        },
        {
          id: 35,
          type: "fill_blank",
          before: "Full set of genetic information in an organism is its:",
          wordLimit: 1,
          correct: "genome",
          explanation: "The lecturer says the full set of genetic information in an organism is called its genome.",
        },
        {
          id: 36,
          type: "fill_blank",
          before: "An organism's physical appearance is called its:",
          wordLimit: 1,
          correct: "phenotype",
          explanation: "The lecturer says what we call the phenotype is the organism's physical appearance.",
        },
        {
          id: 37,
          type: "fill_blank",
          before: "DNA double helix model proposed in:",
          wordLimit: 1,
          correct: "1953",
          explanation: "The lecturer says Watson and Crick proposed the double helix model in 1953.",
        },
        {
          id: 38,
          type: "fill_blank",
          before: "The Human Genome Project was completed in:",
          wordLimit: 1,
          correct: "2003",
          explanation: "The lecturer says the Human Genome Project was completed in 2003.",
        },
        {
          id: 39,
          type: "fill_blank",
          before: "The Human Genome Project took",
          after: "years",
          wordLimit: 1,
          correct: "thirteen",
          explanation: "The lecturer says the Human Genome Project took thirteen years of international collaboration.",
        },
        {
          id: 40,
          type: "fill_blank",
          before: "Modern gene editing technology is called:",
          wordLimit: 1,
          correct: "CRISPR-Cas9",
          explanation: "The lecturer says genetic technologies such as CRISPR-Cas9 allow scientists to edit specific genes.",
        },
      ],
    },
  ],
};
