export interface SlideQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  accent: "cyan" | "orange" | "gold";
  icon: string;
  tags: string[];
  keyPoints: { label: string; desc: string }[];
  speakerNotes: string;
  quiz: SlideQuiz;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Basic Concepts in ICT & TPACK",
    subtitle: "Integrating Technology, Pedagogy, and Content",
    content: "A framework for the 21st-century digital classroom.",
    category: "Foundations & Frameworks",
    accent: "cyan",
    icon: "Cpu",
    tags: ["TPACK", "Pedagogy", "Content Knowledge", "EdTech 2.0"],
    keyPoints: [
      { label: "Technological Knowledge", desc: "Understanding tools, hardware, and digital systems." },
      { label: "Pedagogical Knowledge", desc: "Methods and practices of teaching and student evaluation." },
      { label: "Content Knowledge", desc: "The core subject matter to be explored and learned." }
    ],
    speakerNotes: "Welcome everyone. Emphasize that TPACK is not merely using technology for its own sake, but identifying where Technological Knowledge (TK), Pedagogical Knowledge (PK), and Content Knowledge (CK) converge to enrich the learning experience.",
    quiz: {
      question: "What does the TPACK framework stand for?",
      options: [
        "Teaching Protocol And Content Knowledge",
        "Technological Pedagogical Content Knowledge",
        "Total Pedagogy And Curriculum Knowledge",
        "Technical Program And Classroom Knowledge"
      ],
      correctIndex: 1,
      explanation: "TPACK stands for Technological Pedagogical Content Knowledge, developed by Mishra & Koehler (2006)."
    }
  },
  {
    id: 2,
    title: "The Seven Components of TPACK",
    subtitle: "The TPACK Model Framework (Mishra & Koehler, 2006)",
    content: "The TPACK model framework was developed by Punya Mishra and Matthew J. Koehler in 2006. This framework focuses on the integration of technological knowledge (TK), pedagogical knowledge (PK), and content knowledge (CK). It highlights how these three areas work together to help teachers use technology effectively and improve teaching and learning in the classroom.",
    category: "The 7 Domains & Worlds",
    accent: "gold",
    icon: "Globe",
    tags: ["TK", "PK", "CK", "PCK", "TCK", "TPK", "TPACK"],
    keyPoints: [
      { label: "Core Knowledge Areas", desc: "TK, PK, and CK form the fundamental triadic pillars." },
      { label: "Intersecting Domains", desc: "PCK, TCK, and TPK synthesize pedagogical and technical methods." },
      { label: "Unified TPACK Core", desc: "The harmonious convergence creating transformative learning." }
    ],
    speakerNotes: "Walk through each of the 7 components by clicking the worlds. Point out that TPACK is the heart where all three primary circles intersect.",
    quiz: {
      question: "Who developed the original TPACK framework in 2006?",
      options: [
        "John Dewey and Lev Vygotsky",
        "Punya Mishra and Matthew J. Koehler",
        "Benjamin Bloom and Jean Piaget",
        "Seymour Papert and Alan Kay"
      ],
      correctIndex: 1,
      explanation: "The TPACK model was developed by educational researchers Punya Mishra and Matthew J. Koehler in 2006."
    }
  },
  {
    id: 3,
    title: "Technology and ICT Literacy",
    subtitle: "Defining the Core",
    content: "ICT Literacy is the use of digital technology, communication tools, and networks to access, manage, integrate, evaluate, and create information.",
    category: "Literacy & Fluency",
    accent: "orange",
    icon: "Terminal",
    tags: ["Digital Literacy", "Information Literacy", "Media Fluency"],
    keyPoints: [
      { label: "Access & Manage", desc: "Locate and retrieve critical data efficiently." },
      { label: "Integrate & Evaluate", desc: "Critically synthesize info across diverse media." },
      { label: "Create & Innovate", desc: "Produce compelling digital assets responsibly." }
    ],
    speakerNotes: "Distinguish between passive device usage and active ICT literacy. Mention that evaluating credibility and fact-checking sources is just as critical as technical proficiency in operating devices.",
    quiz: {
      question: "Which of the following best captures the scope of ICT Literacy?",
      options: [
        "Solely knowing how to assemble personal computer hardware",
        "Using digital tools and networks to access, manage, evaluate, and create information",
        "Only browsing social media feeds on mobile devices",
        "Memorizing programming commands without practical application"
      ],
      correctIndex: 1,
      explanation: "ICT literacy spans accessing, managing, evaluating, and creating information using digital tools."
    }
  },
  {
    id: 4,
    title: "The Global Network",
    subtitle: "Internet vs. World Wide Web",
    content: "The Internet is the massive infrastructure of networks connecting computers globally. The World Wide Web is the graphical environment that allows you to access and view documents using that network.",
    category: "Global Architecture",
    accent: "gold",
    icon: "Globe",
    tags: ["TCP/IP", "HTTP/HTTPS", "Global Backbone", "Hypermedia"],
    keyPoints: [
      { label: "The Internet", desc: "Physical and logical networking pipeline linking billions of nodes." },
      { label: "The Web (WWW)", desc: "Software & protocol layer rendering web pages, URLs, and hypertext." },
      { label: "Interconnection", desc: "Without the Internet hardware, the Web cannot transfer information." }
    ],
    speakerNotes: "Use an analogy: The Internet is the highway road system (infrastructure), while the World Wide Web is the cars and cargo (information and websites) traveling upon that highway.",
    quiz: {
      question: "What is the primary difference between the Internet and the World Wide Web?",
      options: [
        "They are exact synonyms with zero technical difference",
        "The Internet is the network infrastructure; the Web is the document/hypertext system running on top",
        "The Web exists without any networking hardware",
        "The Internet was created exclusively for social media video streaming"
      ],
      correctIndex: 1,
      explanation: "The Internet is the global networking infrastructure; the Web is the hypertext service built atop that network."
    }
  },
  {
    id: 5,
    title: "Education Meets Tech",
    subtitle: "Educational Technology & Digital Literacy",
    content: "Educational Technology refers to using tech in teaching and learning (both digital and non-digital). Digital Literacy is the cognitive and technical skill to evaluate, utilize, and create digital content.",
    category: "EdTech Intersection",
    accent: "cyan",
    icon: "BookOpen",
    tags: ["Pedagogy", "Cognitive Skills", "Curriculum Design"],
    keyPoints: [
      { label: "Dual Modalities", desc: "Encompasses both cutting-edge digital platforms and non-digital artifacts." },
      { label: "Cognitive Fluency", desc: "Developing higher-order thinking and critical discernment." },
      { label: "Student Agency", desc: "Fosters self-directed inquiry and creative expression." }
    ],
    speakerNotes: "Remind educators that Educational Technology covers non-digital tools (like flashcards or physical charts) as well as modern digital software. Emphasize cognitive literacy over technical novelty.",
    quiz: {
      question: "Does Educational Technology encompass non-digital media?",
      options: [
        "No, it only includes artificial intelligence and smartboards",
        "Yes, Educational Technology includes both digital and non-digital instructional tools",
        "No, technology strictly requires electricity to be classified as EdTech",
        "Only when connected via high-speed fiber broadband"
      ],
      correctIndex: 1,
      explanation: "Educational Technology encompasses any systematic application of tools to improve teaching, both digital and non-digital."
    }
  },
  {
    id: 6,
    title: "Online Navigation",
    subtitle: "Web Access & Webquests",
    content: "Web Access empowers learners to utilize internet resources on demand. WebQuests are inquiry-oriented lesson formats where most or all information comes from the web.",
    category: "Inquiry & Research",
    accent: "orange",
    icon: "Compass",
    tags: ["WebQuests", "Discovery Learning", "Information Gathering"],
    keyPoints: [
      { label: "On-Demand Access", desc: "Democratizes knowledge anywhere, at any pace." },
      { label: "Inquiry Structure", desc: "WebQuests provide guided roles, tasks, resources, and rubrics." },
      { label: "Constructivist Focus", desc: "Shifts the focus from rote memorization to active synthesis." }
    ],
    speakerNotes: "Highlight Bernie Dodge's WebQuest methodology: Introduction, Task, Process, Evaluation, and Conclusion. This scaffolds internet surfing into purposeful, focused inquiry.",
    quiz: {
      question: "What is a defining characteristic of a WebQuest?",
      options: [
        "A competitive video game played on school servers",
        "An inquiry-oriented lesson format where students source and synthesize information from the web",
        "A standardized multiple-choice online exam system",
        "A social network exclusively for teachers"
      ],
      correctIndex: 1,
      explanation: "A WebQuest is an inquiry-oriented learning activity designed to prompt higher-order thinking using curated web resources."
    }
  },
  {
    id: 7,
    title: "The Digital Classroom",
    subtitle: "Digital Learning & Online Tools",
    content: "Digital Learning is instructional practice making effective use of technology. Online Tools like Skype facilitate real-time communication via internet connectivity.",
    category: "Synchronous Spaces",
    accent: "gold",
    icon: "Laptop",
    tags: ["Real-time", "Hybrid Classrooms", "Synchronous Tech"],
    keyPoints: [
      { label: "Interactive Practice", desc: "Dynamic engagement between educators and peers." },
      { label: "Instant Telepresence", desc: "Overcomes geographical isolation via HD video and voice." },
      { label: "Real-time Collaboration", desc: "Instant polling, screen sharing, and interactive whiteboards." }
    ],
    speakerNotes: "Discuss how online tools eliminate geographic limitations, enabling guest lecturers, cross-border classroom exchanges, and hybrid learning formats.",
    quiz: {
      question: "Which of the following is an example of an online tool used for real-time synchronous communication?",
      options: [
        "Printed textbook chapters",
        "Skype, Zoom, or Google Meet conferencing software",
        "An offline magnetic tape storage drive",
        "A paper-based journal log"
      ],
      correctIndex: 1,
      explanation: "Tools like Skype, Zoom, and Meet provide synchronous real-time audio and video interaction across the internet."
    }
  },
  {
    id: 8,
    title: "Empowering the User",
    subtitle: "Productivity & Technology Tools",
    content: "Productivity Tools are software applications used for personal, professional, or classroom efficiency. Technology Tools are the physical or digital instruments used to accomplish specific tasks.",
    category: "Efficiency & Execution",
    accent: "cyan",
    icon: "Zap",
    tags: ["Workflow", "Automation", "Applied Tooling"],
    keyPoints: [
      { label: "Productivity Suites", desc: "Document processors, spreadsheets, and presentation suites." },
      { label: "Instrument Spectrum", desc: "Sensors, smart boards, stylus pads, and custom computing kits." },
      { label: "Outcome Acceleration", desc: "Reduces repetitive friction to amplify focus on high-impact learning." }
    ],
    speakerNotes: "Clarify the relationship: Productivity tools (spreadsheets, docs, decks) streamline operational tasks, allowing students and educators to dedicate cognitive energy to analytical and creative output.",
    quiz: {
      question: "What is the primary role of productivity software in educational contexts?",
      options: [
        "To replace the human instructor completely",
        "To streamline data calculation, documentation, and communication efficiency",
        "To restrict student collaboration",
        "To increase administrative paperwork"
      ],
      correctIndex: 1,
      explanation: "Productivity tools enhance operational efficiency and document organization for both teachers and students."
    }
  },
  {
    id: 9,
    title: "Working Unplugged",
    subtitle: "Offline Digital Tools & Instructional Tech",
    content: "Instructional Technology encompasses tools used directly for teaching. Offline Digital Tools allow learning and software execution without active internet connections.",
    category: "Resilient Learning",
    accent: "orange",
    icon: "WifiOff",
    tags: ["Offline-First", "Equitable Access", "Standalone Systems"],
    keyPoints: [
      { label: "Direct Instruction", desc: "Targeted educational interventions regardless of signal availability." },
      { label: "Bandwidth Resilience", desc: "Pre-cached modules, local databases, and offline simulations." },
      { label: "Universal Equity", desc: "Ensures no student is left behind in low-connectivity areas." }
    ],
    speakerNotes: "Address the digital divide. Reliable offline tools (e.g., Kiwix, offline simulations like PhET, pre-downloaded e-books) guarantee educational continuity in rural and low-bandwidth communities.",
    quiz: {
      question: "Why are offline digital tools crucial for educational equity?",
      options: [
        "They completely eliminate the need for computers",
        "They enable effective digital learning in areas lacking reliable or affordable internet",
        "They prevent students from reading books",
        "They run only on supercomputers"
      ],
      correctIndex: 1,
      explanation: "Offline tools bridge the digital divide by running locally without persistent internet access."
    }
  },
  {
    id: 10,
    title: "Digital Publishing",
    subtitle: "Blogs and Wikis",
    content: "Blogs are online chronological journals for communication or instruction. Wikis are collaboratively editable websites (like Wikipedia) allowing students to co-create knowledge.",
    category: "Co-Creation & Voice",
    accent: "gold",
    icon: "FileText",
    tags: ["Blogging", "Wikis", "Collaborative Writing"],
    keyPoints: [
      { label: "Chronological Voice", desc: "Reflective journaling, progress logging, and public discourse." },
      { label: "Collective Synthesis", desc: "Crowdsourced research where revision history teaches accountability." },
      { label: "Peer Review", desc: "Open feedback loops strengthen writing and analytical clarity." }
    ],
    speakerNotes: "Compare individual voice vs. collective voice: A blog is usually individual and chronological; a wiki is collective, hyperlinked, and continuously edited by the entire community.",
    quiz: {
      question: "How does a Wiki differ primarily from a traditional blog?",
      options: [
        "A blog can only be seen by one person, while a wiki is broadcast on television",
        "A blog is typically an individual chronological journal, while a wiki is collaboratively editable by multiple contributors",
        "A wiki cannot store text documents",
        "Wikis are exclusively designed for commercial marketing"
      ],
      correctIndex: 1,
      explanation: "Wikis emphasize collective co-creation and asynchronous collaborative editing, unlike reverse-chronological blogs."
    }
  },
  {
    id: 11,
    title: "Programs & Formats",
    subtitle: "Software & Multimedia",
    content: "Software refers to program control instructions stored on computer drives. Multimedia involves the sequential or simultaneous use of multiple formats (audio, video, text) in presentations.",
    category: "Systems & Mediums",
    accent: "cyan",
    icon: "Code",
    tags: ["Multimodal", "Binary Code", "Sensory Engagement"],
    keyPoints: [
      { label: "Underlying Software", desc: "Logical architectures instructing processors to execute commands." },
      { label: "Multisensory Layers", desc: "Combining kinetic video, spatial audio, and lucid typography." },
      { label: "Retention Impact", desc: "Dual-coding theory: visuals paired with speech boosts comprehension." }
    ],
    speakerNotes: "Reference Paivio's Dual-Coding Theory and Mayer's Cognitive Theory of Multimedia Learning: presenting words and pictures together produces deeper learning than words alone.",
    quiz: {
      question: "According to multimedia learning principles, why is combining audio, visual, and textual media effective?",
      options: [
        "It overloads cognitive bandwidth until memorization occurs",
        "It activates dual-coding channels (visual and auditory) for enhanced recall and deeper comprehension",
        "It replaces the need for conceptual understanding",
        "It ensures students only look at graphics"
      ],
      correctIndex: 1,
      explanation: "Dual-coding theory demonstrates that learners retain information better when verbal and visual channels are harmonized."
    }
  },
  {
    id: 12,
    title: "Modern Methodologies",
    subtitle: "Flipped Classroom & Podcasts",
    content: "Flipped Classrooms reverse traditional delivery: students learn via web resources at home and do 'homework' in class. Podcasts are audio/video clips used to retrieve or disseminate targeted information.",
    category: "Pedagogical Evolution",
    accent: "orange",
    icon: "Sparkles",
    tags: ["Flipped Learning", "Micro-Podcasting", "Active Workshops"],
    keyPoints: [
      { label: "Flipped Dynamic", desc: "Direct instruction moves outside the shared space; practice moves inside." },
      { label: "Audio-on-Demand", desc: "Asynchronous podcasts offer digestible deep-dives anytime, anywhere." },
      { label: "Hands-on Mastery", desc: "Classroom hours transform into vibrant discussions and problem solving." }
    ],
    speakerNotes: "Emphasize Bloom's Taxonomy: lower-order cognitive skills (remembering, understanding) happen asynchronously before class; higher-order skills (applying, analyzing, creating) occur with teacher guidance.",
    quiz: {
      question: "In a Flipped Classroom model, what typically takes place during in-class hours?",
      options: [
        "The instructor lectures non-stop from a podium",
        "Students engage in collaborative problem-solving, debates, and hands-on activities with teacher support",
        "Silent memorization of textbooks without any discussion",
        "Watching full-length lecture videos without interruption"
      ],
      correctIndex: 1,
      explanation: "In a flipped classroom, foundational lectures occur asynchronously at home, freeing class time for collaborative problem solving."
    }
  },
  {
    id: 13,
    title: "Collaboration & Connection",
    subtitle: "Google Apps, Vlogs, Facebook & VOIP",
    content: "Cloud tools like Google Apps, video journals (Vlogs), social media platforms, and Voice Over IP (VOIP) enable seamless, global collaboration and resource sharing.",
    category: "Global Ecosystem",
    accent: "gold",
    icon: "Users",
    tags: ["Cloud Workspace", "Vlogs", "Social Learning", "VOIP"],
    keyPoints: [
      { label: "Cloud Ecosystems", desc: "Simultaneous multi-user authoring and frictionless storage." },
      { label: "Rich Expression", desc: "Vlogs document live authentic experiences and project narratives." },
      { label: "Borderless Unity", desc: "VOIP and social platforms collapse physical boundaries across continents." }
    ],
    speakerNotes: "Conclude by tying this back to Slide 1: TPACK is realized when these collaborative cloud tools serve intentional pedagogical goals, cultivating an active global learning community.",
    quiz: {
      question: "What is the transformative advantage of cloud-based collaboration suites like Google Apps?",
      options: [
        "They permanently lock files to a single desktop workstation",
        "They enable simultaneous multi-user editing, instant version history, and real-time co-authoring",
        "They prevent feedback and peer reviews",
        "They only work during business hours"
      ],
      correctIndex: 1,
      explanation: "Cloud collaboration suites enable real-time co-authoring, version control, and universal accessibility from any device."
    }
  },
  {
    id: 14,
    title: "Thank You!",
    subtitle: "End of Presentation // Q&A & Discussion",
    content: "Technology is most transformative when guided by purposeful pedagogy, collaborative design, and deep content mastery. Thank you for your time, attention, and dedication to 21st-century education!",
    category: "Conclusion & Reflection",
    accent: "cyan",
    icon: "GraduationCap",
    tags: ["Thank You", "Q&A", "Pedagogy 2.0", "Exit Deck"],
    keyPoints: [
      { label: "Questions & Answers", desc: "Open floor for reflections, classroom inquiries, and discussion." },
      { label: "Classroom Takeaway", desc: "Apply the TPACK triad to empower students in our digital learning spaces." },
      { label: "Continuous Growth", desc: "Keep exploring, collaborating, and innovating with educational tools." }
    ],
    speakerNotes: "Deliver warm closing remarks, open the floor for questions, and invite the audience to share how they plan to integrate TPACK principles into their upcoming lesson plans.",
    quiz: {
      question: "Which three core areas converge to form the heart of the TPACK framework?",
      options: [
        "Testing, Printing, and Grading",
        "Technological, Pedagogical, and Content Knowledge",
        "Theory, Practice, and Communication",
        "Textbooks, Paper, and Chalkboard"
      ],
      correctIndex: 1,
      explanation: "TPACK unites Technological Knowledge (TK), Pedagogical Knowledge (PK), and Content Knowledge (CK) into an integrated teaching framework."
    }
  }
];
