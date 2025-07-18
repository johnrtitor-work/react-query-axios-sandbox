import type { Todo } from "../api";

export type TodoCardProps = {
  key: string | number;
  todo: Todo;
};

export default function TodoCard({ key, todo }: TodoCardProps) {
  return (
    <>
      <label htmlFor={`${key}`}>{todo.title}</label>{" "}
      <input type="checkbox" checked={todo.completed} />
    </>
  );
}
