import type { WritingTest } from "./writing-types";

export const ieltsWriting10: WritingTest = {
  id: "ielts-writing-10",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 10",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The table below shows employment rates by sector in four countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The table below shows the percentage of the workforce employed in four sectors — Agriculture, Manufacturing, Services, and Technology — in Germany, India, Brazil, and South Korea in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Table: Employment rates (%) by sector in four countries in 2020.

Country      | Agriculture | Manufacturing | Services | Technology
Germany      |     1.4%    |     24.2%     |   68.1%  |    6.3%
India        |    43.5%    |     24.8%     |   29.1%  |    2.6%
Brazil       |    10.2%    |     20.3%     |   65.4%  |    4.1%
South Korea  |     5.3%    |     25.1%     |   60.8%  |    8.8%

Key observations:
• Services dominated employment in Germany (68.1%), Brazil (65.4%), and South Korea (60.8%), but was much lower in India (29.1%).
• India was exceptional in having by far the largest agricultural workforce at 43.5%, compared to Germany's 1.4%.
• Manufacturing employment was broadly similar across all four countries, ranging from 20.3% (Brazil) to 25.1% (South Korea).
• Technology employment was highest in South Korea (8.8%) and lowest in India (2.6%).
• Germany had the smallest agricultural sector of any country shown.
• Brazil and Germany had the most similar overall employment distributions.`,
      modelAnswer: `The table shows the distribution of employment across four sectors — agriculture, manufacturing, services, and technology — in Germany, India, Brazil, and South Korea in 2020.

Overall, the services sector dominated employment in three of the four countries, while India stood out for its uniquely large agricultural workforce. Manufacturing was the most consistent sector across all nations, with comparatively little variation.

Germany had the highest proportion of workers in services at 68.1%, followed by Brazil at 65.4% and South Korea at 60.8%. India, by contrast, employed only 29.1% of its workforce in services — considerably below the other three countries. This divergence was mirrored in agriculture: while Germany had just 1.4% of workers in this sector, India employed 43.5%, by far the largest share of any country in the table. Brazil and South Korea recorded intermediate agricultural employment figures of 10.2% and 5.3% respectively.

Manufacturing employment was notably consistent, ranging narrowly from 20.3% in Brazil to 25.1% in South Korea, with Germany (24.2%) and India (24.8%) falling close together in between. Technology, the smallest sector across all countries, was most prominent in South Korea at 8.8% and least represented in India at 2.6%.

In summary, the data highlights a sharp contrast between India's agriculture-dominated economy and the service-led economies of the other three countries, while manufacturing employment remained broadly uniform across all four nations.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Covers the main features of the table; identifies the dominance of services in three countries and India's large agricultural sector; data is cited though some comparisons could be more fully developed.",
          band8: "Comprehensively and accurately covers all sectors and countries; clearly highlights the India-rest contrast and the consistency of manufacturing; overview is concise and well-integrated.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Information is organised logically, moving from dominant sectors to notable differences; cohesive devices are appropriate.",
          band8: "Well-structured response with a clear overview followed by systematic comparison; the contrast between India and the other countries is developed coherently across the body paragraphs.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses appropriate vocabulary for describing tabular data (e.g. 'distribution', 'intermediate', 'divergence'); some variety in expression.",
          band8: "Precise and varied vocabulary throughout (e.g. 'uniquely large', 'mirrored in agriculture', 'notably consistent', 'ranging narrowly'); lexical choices add analytical clarity.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses comparative structures and complex sentences appropriately; grammatical control is generally strong with minor errors.",
          band8: "Grammatically varied and accurate; comparative constructions, passive voice, and complex noun phrases are used correctly and fluently throughout.",
        },
      ],
    },
    {
      id: 2,
      type: "ielts_task2",
      taskLabel: "Task 2 — Academic Writing",
      instructions:
        "Write about the following topic. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      timeSeconds: 2400,
      minWords: 250,
      prompt:
        "In some countries, young people are encouraged to work or travel for a year between finishing high school and starting university. Discuss the advantages and disadvantages of this.",
      modelAnswer: `The practice of taking a gap year — spending a period working, volunteering, or travelling between secondary school and higher education — has become increasingly common in countries such as the United Kingdom, Australia, and New Zealand. While this practice offers genuine benefits, it also carries risks that deserve careful consideration.

The advantages of a gap year are well-documented. Young people who take time away from formal study often return to university with greater maturity, clearer academic goals, and a stronger sense of personal identity. Experiences such as living abroad, working in unfamiliar environments, or contributing to volunteer projects can develop independence, cross-cultural understanding, and practical problem-solving skills that classroom instruction rarely provides. Research conducted by universities in the UK and Australia has found that gap year students often achieve higher academic results and report greater satisfaction with their degree programmes than those who proceeded directly from school. For many students, the year also provides an opportunity to earn money that helps fund their studies, reducing financial pressure during their degree.

However, there are also significant drawbacks to consider. A year away from formal education can erode academic momentum, making it harder for students to readjust to the demands of university study. If the gap year is spent unproductively — for instance, working in low-skilled jobs without clear developmental purpose — it may offer little benefit and delay career progression unnecessarily. Students from disadvantaged economic backgrounds may find that the cost of travelling or volunteering is prohibitive, meaning gap years can reinforce rather than reduce educational inequality. There is also a risk that some students never return to higher education after taking a break.

In conclusion, the gap year can be an enriching and transformative experience, but its value depends heavily on how it is spent. With careful planning and clear objectives, the benefits are likely to outweigh the disadvantages; without such preparation, the risks become more significant.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Addresses both advantages and disadvantages with relevant ideas; supporting points are generally developed, though some arguments could be extended with more specific evidence.",
          band8: "Thoroughly discusses both sides with well-developed arguments; specific evidence (e.g. UK and Australian research) is cited; the conclusion is balanced and thoughtfully framed.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is clearly structured with distinct paragraphs for advantages and disadvantages; transitions are logical and appropriate.",
          band8: "Logical progression is maintained throughout; advantages and disadvantages are clearly delineated and the conclusion integrates both perspectives; cohesion is handled naturally.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses relevant vocabulary related to education and personal development (e.g. 'academic momentum', 'cross-cultural', 'volunteer projects'); occasional imprecision does not impede meaning.",
          band8: "Employs a wide and precise range of vocabulary (e.g. 'transformative', 'prohibitive', 'erode academic momentum', 'reinforce educational inequality'); collocations are consistently accurate.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a variety of sentence structures; grammatical control is generally strong; minor errors do not affect overall clarity.",
          band8: "Wide grammatical range including conditional structures, complex noun phrases, and subordinate clauses; the response is predominantly error-free and varied in construction.",
        },
      ],
    },
  ],
};
