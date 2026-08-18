export type Tool = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const tools: Tool[] = [
  {
    name: "Figma",
    src: "/images/tools/figma.svg",
    width: 24,
    height: 36,
  },
  {
    name: "OpenAI",
    src: "/images/tools/openai.png",
    width: 44,
    height: 40,
  },
  {
    name: "Google Analytics",
    src: "/images/tools/google-analytics.svg",
    width: 32,
    height: 40,
  },
  {
    name: "Cursor",
    src: "/images/tools/cursor.svg",
    width: 40,
    height: 40,
  },
  {
    name: "GitHub",
    src: "/images/tools/github.svg",
    width: 37,
    height: 40,
  },
];
