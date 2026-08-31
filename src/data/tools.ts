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
    width: 120,
    height: 48,
  },
  {
    name: "Maze",
    src: "/images/tools/maze.svg",
    width: 119,
    height: 26,
  },
  {
    name: "ChatGPT",
    src: "/images/tools/chatgpt.svg",
    width: 163,
    height: 36,
  },
  {
    name: "Google Analytics",
    src: "/images/tools/google-analytics.svg",
    width: 240,
    height: 38,
  },
  {
    name: "Cursor",
    src: "/images/tools/cursor.svg",
    width: 163,
    height: 39,
  },
  {
    name: "GitHub",
    src: "/images/tools/github.svg",
    width: 95,
    height: 26,
  },
  {
    name: "Storybook",
    src: "/images/tools/storybook.svg",
    width: 184,
    height: 46,
  },
];
