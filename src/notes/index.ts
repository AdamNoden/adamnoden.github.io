import helloWorld from "./hello-world.md";

interface Note {
  title: string;
  tags: string[];
  path: string;
  markdown: string;
}

export const registry: Note[] = [
  {
    title: "Hello World",
    tags: ["test", "foo", "bar"],
    path: "hello-world",
    markdown: helloWorld,
  },
];
