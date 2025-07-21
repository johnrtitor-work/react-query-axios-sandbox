import { createFileRoute } from "@tanstack/react-router";
import ListUsers from "../components/ListUsers";

export const Route = createFileRoute("/users")({
  component: ListUsers,
});
