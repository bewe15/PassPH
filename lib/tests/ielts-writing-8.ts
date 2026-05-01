import type { WritingTest } from "./writing-types";

export const ieltsWriting8: WritingTest = {
  id: "ielts-writing-8",
  exam: "IELTS",
  title: "IELTS Academic Writing — Test 8",
  totalSeconds: 3600,
  tasks: [
    {
      id: 1,
      type: "ielts_task1",
      taskLabel: "Task 1 — Academic Writing",
      instructions:
        "The bar chart below compares carbon dioxide emissions per capita in six countries in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      timeSeconds: 1200,
      minWords: 150,
      prompt:
        "The chart below shows carbon dioxide emissions per capita (in tonnes) in six countries — Australia, Canada, UK, China, India, and Brazil — in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartDescription: `Bar chart comparing CO₂ emissions per capita (tonnes) in six countries in 2010 and 2020.

Australia:
• 2010: 17.2 tonnes
• 2020: 15.1 tonnes

Canada:
• 2010: 16.0 tonnes
• 2020: 14.2 tonnes

UK:
• 2010: 8.5 tonnes
• 2020: 5.8 tonnes

China:
• 2010: 6.2 tonnes
• 2020: 7.4 tonnes

India:
• 2010: 1.6 tonnes
• 2020: 1.9 tonnes

Brazil:
• 2010: 2.3 tonnes
• 2020: 2.1 tonnes

Key observations:
• Australia and Canada had the highest per capita emissions in both years, though both declined.
• The UK achieved the largest absolute reduction (2.7 tonnes) and the largest percentage decrease (~32%) of any country shown.
• China was the only major emitter to see a significant increase (from 6.2 to 7.4 tonnes).
• India and Brazil remained among the lowest emitters in both years.
• Brazil's emissions were broadly stable, while India showed a slight rise.
• By 2020, Australia still emitted more than double what China emitted per capita.`,
      modelAnswer: `The bar chart compares per capita carbon dioxide emissions in six countries — Australia, Canada, the UK, China, India, and Brazil — in 2010 and 2020.

Overall, Australia and Canada recorded the highest emissions in both years, although both countries experienced a decline over the decade. The UK achieved the most significant reduction, while China was notable for being the only country to record a meaningful increase.

In 2010, Australia and Canada were the largest emitters per person, at 17.2 and 16.0 tonnes respectively. By 2020, both had decreased — Australia to 15.1 tonnes and Canada to 14.2 tonnes — though they remained well above the other nations. The UK recorded the steepest decline of all six countries, falling from 8.5 to 5.8 tonnes, a reduction of approximately 32%.

In contrast, China's emissions rose from 6.2 to 7.4 tonnes per capita over the period, reflecting continued industrial expansion. India and Brazil remained among the lowest emitters throughout: India increased marginally from 1.6 to 1.9 tonnes, while Brazil's figure was broadly stable, edging down slightly from 2.3 to 2.1 tonnes.

In summary, the data suggests a divergence between developed economies — which generally reduced emissions — and China, where per capita output grew despite its lower absolute level compared to Australia and Canada.`,
      bandDescriptors: [
        {
          criterion: "Task Achievement",
          band7: "Identifies the highest emitters and general trends; notes the UK's decrease and China's increase; supporting data is cited for most countries.",
          band8: "Comprehensively covers all six countries with accurate data; clearly highlights the contrast between declining emissions in developed nations and rising emissions in China; overview is well-integrated.",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Organised logically, grouping high emitters and low emitters effectively; uses appropriate linking language.",
          band8: "Well-structured paragraphs move logically from high emitters to notable changes and then to low emitters; cohesion is natural and unforced.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses relevant vocabulary for describing environmental data (e.g. 'per capita', 'steepest decline', 'industrial expansion'); minor imprecision does not impede meaning.",
          band8: "Precise and varied vocabulary throughout (e.g. 'reflecting continued industrial expansion', 'broadly stable', 'a divergence between'); lexical choices add analytical depth.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses comparative structures and complex sentences accurately for the most part; occasional minor errors do not affect overall clarity.",
          band8: "Grammatically varied and accurate; comparative constructions, passive voice, and subordinate clauses are all used correctly and confidently.",
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
        "Some people argue that it is more important to spend public money on promoting healthy lifestyles in order to prevent illness than to spend it on the treatment of people who are already ill. To what extent do you agree or disagree?",
      modelAnswer: `The allocation of healthcare budgets between preventive programmes and curative treatment represents one of the most consequential decisions facing governments worldwide. While I believe that prevention deserves significantly greater investment than it currently receives in many countries, I do not agree that it should take priority over treatment in absolute terms, as both approaches are necessary within a functioning healthcare system.

The case for prioritising prevention is compelling. Chronic non-communicable diseases such as type 2 diabetes, heart disease, and obesity-related conditions account for the majority of healthcare expenditure in developed nations. Many of these conditions are largely preventable through changes in diet, physical activity, and behaviour. Public health campaigns, subsidised access to nutritious food, smoke-free legislation, and school-based wellbeing programmes have all demonstrated measurable effectiveness in reducing disease incidence and long-term healthcare costs. Finland's North Karelia Project, which significantly reduced cardiovascular disease through community-level lifestyle interventions in the 1970s and 1980s, remains a widely cited example of prevention delivering lasting results at scale.

However, the argument should not be framed as a binary choice. Abandoning or reducing funding for treatment in favour of prevention would be both impractical and unethical. People who are already ill have an immediate and legitimate claim on healthcare resources; withholding treatment would increase suffering and mortality, and would disproportionately harm vulnerable populations who have limited capacity to adopt healthier lifestyles due to poverty, stress, or lack of access to information. Furthermore, not all illness is preventable, regardless of lifestyle — genetic conditions, accidents, and infectious diseases require robust treatment infrastructure.

In my view, the optimal approach is to increase investment in prevention substantially while protecting and improving treatment services. A healthcare system that neglects either pillar is ultimately unsustainable.

In conclusion, prevention and treatment are complementary rather than competing priorities. Governments should commit more resources to promoting healthy lifestyles, but not at the cost of care for those who are already sick.`,
      bandDescriptors: [
        {
          criterion: "Task Response",
          band7: "Presents a clear position on the issue; addresses both prevention and treatment with relevant supporting points; may not fully develop the nuance that both are necessary simultaneously.",
          band8: "Presents a well-reasoned, nuanced position rejecting a false binary; arguments for prevention and for continued treatment are both developed fully with specific evidence (e.g. North Karelia Project).",
        },
        {
          criterion: "Coherence & Cohesion",
          band7: "Essay is clearly structured with distinct paragraphs for the preventive argument and counterargument; transitions are logical.",
          band8: "Logical flow is maintained throughout; the argument builds coherently from the case for prevention to the counterargument and then to the synthesis; cohesion is handled with sophistication.",
        },
        {
          criterion: "Lexical Resource",
          band7: "Uses appropriate healthcare vocabulary (e.g. 'preventive', 'curative', 'disease incidence'); lexical range is sufficient for the task.",
          band8: "Employs precise and varied specialist vocabulary (e.g. 'non-communicable diseases', 'community-level lifestyle interventions', 'disease incidence'); collocations are accurate throughout.",
        },
        {
          criterion: "Grammatical Range & Accuracy",
          band7: "Uses a range of sentence structures including conditionals and passive forms; grammatical control is generally strong.",
          band8: "Wide range of grammatical structures used accurately and fluently; complex sentences with multiple clauses are handled confidently; near-error-free throughout.",
        },
      ],
    },
  ],
};
