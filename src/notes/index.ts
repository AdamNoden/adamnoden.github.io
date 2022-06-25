import helloWorld from "./hello-world.md";

interface Note {
  title: string;
  tags: string[];
  path: string;
  markdown: string;
  listed: boolean;
}

export const registry: Note[] = [
  {
    title: "Hello World",
    tags: ["test", "foo", "bar"],
    path: "hello-world",
    markdown: helloWorld,
    listed: true,
  },
  {
    title: "Hello World - unlisted",
    tags: ["test", "foo", "bar"],
    path: "hello-world-unlisted",
    markdown: helloWorld,
    listed: false,
  },
];
