export type TPACKKey = "ALL" | "CK" | "PK" | "TK" | "PCK" | "TCK" | "TPK" | "TPACK";

export interface SlideData {
  id: number;
  componentNum?: number;
  tpackKey: TPACKKey;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  accent: "cyan" | "orange" | "gold";
  icon: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    tpackKey: "ALL",
    title: "TPACK",
    subtitle: "Technological Pedagogical Content Knowledge",
    content: "",
    category: "TPACK Framework",
    accent: "cyan",
    icon: "Cpu"
  },
  {
    id: 2,
    componentNum: 1,
    tpackKey: "CK",
    title: "1. CK – Content Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Involves the teacher's knowledge and understanding of the subject matter or topic being taught.",
    category: "The Seven Components of TPACK",
    accent: "cyan",
    icon: "BookOpen"
  },
  {
    id: 3,
    componentNum: 2,
    tpackKey: "PK",
    title: "2. PK – Pedagogical Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Focuses on the teacher's understanding of different teaching methods, strategies, and approaches that help students learn.",
    category: "The Seven Components of TPACK",
    accent: "gold",
    icon: "GraduationCap"
  },
  {
    id: 4,
    componentNum: 3,
    tpackKey: "TK",
    title: "3. TK – Technological Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Includes the teacher's ability to understand and use digital tools, technologies, and systems in teaching and learning.",
    category: "The Seven Components of TPACK",
    accent: "orange",
    icon: "Cpu"
  },
  {
    id: 5,
    componentNum: 4,
    tpackKey: "PCK",
    title: "4. PCK – Pedagogical Content Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Combines subject knowledge with teaching strategies to make lessons easier for students to understand.",
    category: "The Seven Components of TPACK",
    accent: "cyan",
    icon: "Layers"
  },
  {
    id: 6,
    componentNum: 5,
    tpackKey: "TCK",
    title: "5. TCK – Technological Content Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Involves using technology to present, explain, and help students understand specific subject matter.",
    category: "The Seven Components of TPACK",
    accent: "gold",
    icon: "Code"
  },
  {
    id: 7,
    componentNum: 6,
    tpackKey: "TPK",
    title: "6. TPK – Technological Pedagogical Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Focuses on how technology can support and improve different teaching methods and strategies.",
    category: "The Seven Components of TPACK",
    accent: "orange",
    icon: "Sparkles"
  },
  {
    id: 8,
    componentNum: 7,
    tpackKey: "TPACK",
    title: "7. TPACK – Technological Pedagogical Content Knowledge",
    subtitle: "The Seven Components of TPACK",
    content: "Brings together technology, teaching strategies, and subject knowledge to create effective and meaningful learning experiences.",
    category: "The Seven Components of TPACK",
    accent: "cyan",
    icon: "Globe"
  }
];
