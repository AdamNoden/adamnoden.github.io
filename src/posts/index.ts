import helloWorld from "./hello-world.md";

interface Post {
  title: string;
  tags: string[];
  path: string;
  markdown: string;
}

export const postRegistry: Post[] = [
  {
    title: "Hello World",
    tags: ["test", "foo", "bar"],
    path: "hello-world",
    markdown: helloWorld,
  },
];
