import { createFileRoute } from "@tanstack/react-router";
import DemoTodo from "../components/DemoTodo";

export const Route = createFileRoute("/todo")({
  component: DemoTodo,
});
