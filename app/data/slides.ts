export interface SlideData {
  id: number;
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
    title: "TPACK",
    subtitle: "CK • PK • TK • PCK • TCK • TPK • TPACK",
    content: "",
    category: "TPACK Framework",
    accent: "cyan",
    icon: "Cpu"
  },
  {
    id: 2,
    title: "The Seven Components of TPACK",
    subtitle: "1. CK • 2. PK • 3. TK • 4. PCK • 5. TCK • 6. TPK • 7. TPACK",
    content: "",
    category: "The Seven Components of TPACK",
    accent: "gold",
    icon: "Globe"
  }
];
