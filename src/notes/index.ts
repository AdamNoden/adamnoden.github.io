import helloWorld from "./hello-world.md";
import bioenergeticHealth from "./bioenergetic-health.md";

interface Note {
  title: string;
  tags: string[];
  path: string;
  markdown: string;
  listed: boolean;
  showFilter: boolean;
}

export const registry: Note[] = [
  {
    title: "Hello World",
    tags: ["test", "foo", "bar"],
    path: "hello-world",
    markdown: helloWorld,
    listed: false,
    showFilter: false,
  },
  {
    title: "Bioenergetic Health Model",
    tags: [
      "health",
      "metabolism",
      "ray peat",
      "bioenergetic",
      "thyroid",
      "stress",
    ],
    path: "bioenergetic-health",
    markdown: bioenergeticHealth,
    listed: true,
    showFilter: true,
  },
];
