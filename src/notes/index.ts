import helloWorld from "./hello-world.md";
import bioenergeticHealth from "./bioenergetic-health.md";
import metaboolismKateDeering from "./metabolism-kate-deering.md";

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
    tags: ["metabolism", "ray peat", "bioenergetic", "thyroid", "stress"],
    path: "bioenergetic-health",
    markdown: bioenergeticHealth,
    listed: true,
    showFilter: true,
  },
  {
    title: "Kate Deering on Metabolism",
    tags: ["metabolism", "kate deering", "bioenergetic"],
    path: "metabolism-kate-deering",
    markdown: metaboolismKateDeering,
    listed: true,
    showFilter: true,
  },
];
