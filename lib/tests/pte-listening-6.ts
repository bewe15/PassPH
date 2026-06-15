import type { PTEListeningTest } from "./pte-listening-types";

const test6: PTEListeningTest = {
  id: "pte-listening-6",
  title: "PTE Listening — Test 6",
  totalMinutes: 45,

  // ── Summarise Spoken Text (1 task) ──────────────────────────────────────────
  summariseSpokenText: [
    {
      id: "sst-6-1",
      type: "summarise_spoken_text",
      wordMin: 50, wordMax: 70, responseSeconds: 600,
      topic: "The Gut Microbiome and Nutrition Science",
      audioUrl: "",
      audioText: "Nutrition science has been transformed in recent years by a growing understanding of the gut microbiome — the vast community of bacteria, fungi, and other microorganisms that inhabit the human digestive tract. Research has shown that the composition of the gut microbiome varies considerably between individuals and is influenced by factors such as diet, antibiotic use, and early childhood exposure to microorganisms. Studies suggest that a diverse microbiome, supported by a diet rich in fibre and fermented foods, is associated with better immune function, lower rates of inflammation, and even improved mood and mental health. The gut-brain axis — a bidirectional communication pathway between the digestive system and the central nervous system — appears to play a significant role in regulating psychological wellbeing. These findings have begun to reshape dietary recommendations, with a shift away from the focus on single nutrients toward an emphasis on overall dietary patterns and the promotion of microbial diversity. Researchers caution, however, that the field is still young and many claims about specific foods or probiotic supplements remain to be rigorously tested.",
    },
  ],

  // ── Multiple Choice Multiple Answer (2 tasks) ────────────────────────────────
  mcMulti: [
    {
      id: "mcm-6-1",
      type: "mc_multi",
      audioUrl: "",
      audioText: "Public health initiatives over the past century have dramatically extended life expectancy in many parts of the world. The introduction of clean water supplies and sewage systems in the nineteenth century reduced the incidence of waterborne diseases such as cholera and typhoid. Vaccination programmes have eradicated or greatly reduced the burden of diseases including smallpox, polio, and measles. Improvements in maternal and child health care have lowered infant mortality rates. More recently, anti-smoking campaigns have contributed to reductions in the rates of lung cancer and cardiovascular disease. Despite these successes, non-communicable diseases such as obesity and type two diabetes are rising rapidly and pose a new public health challenge.",
      question: "Which TWO public health achievements are mentioned in the recording?",
      options: [
        "Eradication or reduction of diseases through vaccination",
        "Elimination of all infectious diseases worldwide",
        "The introduction of clean water and sewage systems",
        "Development of a cure for cancer",
        "Universal access to mental health services",
      ],
      correctIndexes: [0, 2],
    },
    {
      id: "mcm-6-2",
      type: "mc_multi",
      audioUrl: "",
      audioText: "The philosophy of science continues to influence how researchers design experiments and interpret results. Peer review, in which experts evaluate research before publication, is a cornerstone of scientific quality control, though critics argue it is slow and prone to bias. Replication — the ability to reproduce results independently — is another fundamental principle, yet a number of high-profile studies in psychology and medicine have failed to replicate when retested. Open science initiatives aim to address these issues by requiring researchers to publish their data and pre-register their hypotheses before conducting experiments. Some institutions have also introduced incentives to reward researchers who conduct rigorous and reproducible studies rather than simply those who produce novel and striking results.",
      question: "According to the talk, which THREE measures are mentioned as part of efforts to improve scientific quality?",
      options: [
        "Peer review of research before publication",
        "Requiring universities to reduce research funding",
        "Replication of studies by independent teams",
        "Pre-registration of hypotheses before experiments",
        "Banning publication of negative results",
        "Limiting the number of journals that can publish findings",
      ],
      correctIndexes: [0, 2, 3],
    },
  ],

  // ── Fill in the Blanks (2 tasks) ─────────────────────────────────────────────
  fillBlanks: [
    {
      id: "fib-6-1",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "The development of writing systems is one of the most significant achievements in human history. The earliest known writing emerged in Mesopotamia around five thousand years ago as a system of pictographic symbols used to record economic transactions. Over time, these symbols became more abstract and developed into cuneiform script, which was impressed into clay tablets using a wedge-shaped stylus. Independently, writing systems also developed in ancient Egypt, China, and Mesoamerica. The invention of the alphabet, in which symbols represent individual sounds rather than whole words or syllables, was a crucial simplification that made literacy more accessible to wider populations.",
      transcript: "The development of writing systems is one of the most significant achievements in human history. The earliest known writing emerged in Mesopotamia around five thousand years ago as a system of pictographic symbols used to record economic ___BLANK___. Over time, these symbols became more abstract and developed into cuneiform script, which was impressed into clay tablets using a wedge-shaped ___BLANK___. Independently, writing systems also developed in ancient Egypt, China, and Mesoamerica. The invention of the ___BLANK___, in which symbols represent individual sounds rather than whole words or syllables, was a crucial simplification that made literacy more ___BLANK___ to wider populations.",
      answers: ["transactions", "stylus", "alphabet", "accessible"],
    },
    {
      id: "fib-6-2",
      type: "fill_blanks",
      audioUrl: "",
      audioText: "Epidemics have shaped the course of human civilisation in profound ways. The Black Death, which swept through Europe in the fourteenth century, killed an estimated one third of the continent's population and triggered lasting social and economic upheaval. The labour shortage caused by the plague gave surviving workers greater bargaining power and contributed to the decline of feudalism. In the twentieth century, the influenza pandemic of 1918 infected approximately five hundred million people worldwide and killed tens of millions. Unlike typical flu outbreaks, it was unusually deadly among healthy young adults, a pattern that researchers attribute to a phenomenon known as a cytokine storm.",
      transcript: "Epidemics have shaped the course of human civilisation in profound ways. The Black Death, which swept through Europe in the fourteenth century, killed an estimated one third of the continent's population and triggered lasting social and economic ___BLANK___. The labour ___BLANK___ caused by the plague gave surviving workers greater bargaining power and contributed to the decline of feudalism. In the twentieth century, the influenza pandemic of 1918 infected approximately five hundred million people worldwide and killed tens of millions. Unlike typical flu outbreaks, it was unusually ___BLANK___ among healthy young adults, a pattern that researchers attribute to a phenomenon known as a cytokine ___BLANK___.",
      answers: ["upheaval", "shortage", "deadly", "storm"],
    },
  ],

  // ── Highlight Correct Summary (2 tasks) ─────────────────────────────────────
  highlightSummary: [
    {
      id: "hcs-6-1",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Animal behaviour researchers have long debated the extent to which non-human animals possess a theory of mind — the ability to attribute mental states such as beliefs and intentions to others. Experiments with great apes have shown that chimpanzees can track what other individuals know and do not know, suggesting some capacity for perspective-taking. Corvids — the bird family that includes ravens, crows, and jays — have also demonstrated surprising cognitive abilities, including the use of tools, the ability to plan for the future, and behaviours consistent with understanding others' knowledge states. These findings challenge traditional assumptions about the uniqueness of human cognition.",
      correctIndex: 3,
      summaries: [
        "Research into animal cognition has definitively proven that chimpanzees possess a fully developed theory of mind equivalent to that of adult humans, including language and self-reflection.",
        "Animal behaviour studies have focused primarily on bird species such as corvids, showing that they are more intelligent than great apes in most cognitive tasks.",
        "Experiments with animals have shown that no non-human species can understand the mental states of others, confirming the unique cognitive status of human beings.",
        "Research on chimpanzees and corvids suggests that some non-human animals have a degree of perspective-taking ability, challenging assumptions about the uniqueness of human cognition.",
      ],
    },
    {
      id: "hcs-6-2",
      type: "highlight_summary",
      audioUrl: "",
      audioText: "Urban design plays a powerful role in shaping the health and social behaviour of city residents. Research has shown that access to green spaces such as parks and gardens is associated with lower levels of stress, greater physical activity, and stronger community bonds. Conversely, neighbourhoods characterised by poor housing, limited green space, and high traffic volumes are associated with worse mental and physical health outcomes. The concept of a walkable city — one designed so that daily needs can be met on foot — has gained traction among urban planners as a way to reduce car dependency and promote physical activity. Inclusive public spaces that welcome people of all ages and backgrounds are also linked to greater social cohesion.",
      correctIndex: 1,
      summaries: [
        "Urban design research shows that all cities are becoming less healthy due to growing traffic volumes and the loss of green spaces, and there is little that planners can do to reverse these trends.",
        "Urban design significantly influences residents' health and social behaviour, with access to green spaces and walkable neighbourhoods linked to better physical and mental wellbeing and stronger communities.",
        "Studies have found that residents of high-density urban areas are universally happier and healthier than those living in lower-density suburbs, regardless of access to green space.",
        "Urban planners have concluded that the most effective way to improve public health is to ban private cars from city centres and replace roads with parks.",
      ],
    },
  ],

  // ── Multiple Choice Single Answer (2 tasks) ──────────────────────────────────
  mcSingle: [
    {
      id: "mcs-6-1",
      type: "mc_single",
      audioUrl: "",
      audioText: "The concept of digital privacy has taken on new urgency as the amount of personal data collected by technology companies has grown exponentially. Social media platforms, search engines, and smartphones routinely collect data on users' location, browsing habits, and social networks. This data is typically used to target advertising, but it can also be sold to third parties or accessed by governments. In response, the European Union introduced the General Data Protection Regulation in 2018, which gives citizens the right to know what data is held about them and to request its deletion. Advocates argue that stronger privacy regulations are needed globally, while technology companies warn that overly strict rules could stifle innovation.",
      question: "What does the speaker say was one purpose for which the collected data is typically used?",
      options: [
        "To improve the quality of internet connections for users.",
        "To create anonymous datasets for medical research.",
        "To target users with advertising.",
        "To help governments track criminal activity.",
      ],
      correctIndex: 2,
    },
    {
      id: "mcs-6-2",
      type: "mc_single",
      audioUrl: "",
      audioText: "Nutrition science has grappled for decades with the question of what constitutes a healthy diet. In the mid-twentieth century, research linking saturated fat to cardiovascular disease led to recommendations to reduce fat intake, which in turn drove the growth of low-fat processed foods. However, many of these products replaced fat with sugar and refined carbohydrates, and subsequent research suggested that this substitution was itself harmful. More recent evidence has shifted the focus from individual nutrients to overall dietary patterns, with the Mediterranean diet — rich in vegetables, legumes, olive oil, and fish — attracting strong scientific support for its association with lower rates of heart disease and longer life expectancy.",
      question: "According to the speaker, what problem arose from recommendations to reduce fat intake?",
      options: [
        "Consumers developed deficiencies in essential vitamins.",
        "Low-fat foods became too expensive for most households.",
        "Many low-fat products replaced fat with sugar and refined carbohydrates.",
        "Reduced fat intake led to increased rates of type one diabetes.",
      ],
      correctIndex: 2,
    },
  ],

  // ── Select Missing Word (2 tasks) ────────────────────────────────────────────
  selectMissingWord: [
    {
      id: "smw-6-1",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The study of ancient languages has shed important light on the origins of human civilisation. Decipherment of the Egyptian hieroglyphic script, made possible by the discovery of the Rosetta Stone in 1799, revealed the rich literary and religious traditions of one of the world's earliest cultures. Linear B, an early form of Greek found on clay tablets from the Mycenaean period, was not decoded until 1952. Each time an ancient script is deciphered, it opens a window into a culture that was previously",
      options: [
        "well documented in modern archives",
        "largely inaccessible to historians",
        "of little interest to archaeologists",
        "already understood through oral tradition",
      ],
      correctIndex: 1,
    },
    {
      id: "smw-6-2",
      type: "select_missing_word",
      audioUrl: "",
      audioText: "The relationship between music and emotion is a subject of intense research in psychology and neuroscience. Studies have shown that music can reliably induce emotional responses, including joy, sadness, tension, and awe, across different cultures. One proposed mechanism is that music exploits the brain's predictive systems — creating and then resolving or violating expectations in ways that generate emotional arousal. The universality of certain emotional responses to music, such as the tendency for slow music in a minor key to be perceived as sad, suggests that some aspects of musical emotion are",
      options: [
        "entirely culturally determined",
        "not yet studied by researchers",
        "rooted in biology rather than culture alone",
        "specific to Western musical traditions",
      ],
      correctIndex: 2,
    },
  ],

  // ── Highlight Incorrect Words (2 tasks) ──────────────────────────────────────
  highlightIncorrect: [
    {
      id: "hiw-6-1",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "The development of the internet has transformed how people access information, communicate, and conduct business. In the early days of the web, content was largely static and users could only read what was posted by organisations and publishers. The rise of social media and user-generated content platforms has fundamentally altered this dynamic, allowing billions of people to publish and share their own content without the need for editorial gatekeepers.",
      displayText: "The development of the internet has transformed how people access information, communicate, and conduct business. In the early days of the web, content was largely static and users could only read what was posted by organisations and publishers. The rise of social media and user-generated content platforms has completely altered this dynamic, allowing billions of people to publish and share their own content without the need for professional gatekeepers.",
      incorrectIndexes: [48, 67],
    },
    {
      id: "hiw-6-2",
      type: "highlight_incorrect",
      audioUrl: "",
      audioText: "Archaeological excavations at Pompeii have provided an unparalleled window into life in the Roman world. When Mount Vesuvius erupted in 79 AD, the city was buried under metres of volcanic ash and pumice, preserving buildings, household objects, and even the remains of residents in extraordinary detail. The site has been under continuous excavation since the eighteenth century and continues to yield new discoveries that refine our understanding of Roman urban life.",
      displayText: "Archaeological excavations at Pompeii have provided an unparalleled window into life in the Roman world. When Mount Vesuvius erupted in 79 AD, the city was covered under metres of volcanic ash and pumice, preserving buildings, household objects, and even the remains of residents in extraordinary detail. The site has been under continuous excavation since the nineteenth century and continues to yield new discoveries that refine our understanding of Roman urban life.",
      incorrectIndexes: [25, 55],
    },
  ],

  // ── Write from Dictation (3 tasks) ───────────────────────────────────────────
  writeDictation: [
    {
      id: "wfd-6-1",
      type: "write_dictation",
      audioUrl: "",
      sentence: "The gut microbiome plays a crucial role in regulating the human immune system.",
    },
    {
      id: "wfd-6-2",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Public health campaigns have contributed to significant reductions in preventable diseases.",
    },
    {
      id: "wfd-6-3",
      type: "write_dictation",
      audioUrl: "",
      sentence: "Linguistic diversity reflects the remarkable adaptability of human communication systems.",
    },
  ],
};

export default test6;
