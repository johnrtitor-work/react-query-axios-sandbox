import { useQuery } from "@tanstack/react-query";
import { fetchTodos, type Todo } from "../api";
import TodoCard from "./TodoCard";

export default function DemoTodo() {
  const {
    isPending,
    error,
    data: todos,
  } = useQuery<Todo[]>({
    queryKey: ["fetchtodo"],
    queryFn: () => fetchTodos(),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error.message);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>List of tasks: </h2>
      {todos?.map((todo) => {
        return (
          <>
            <TodoCard key={todo.id} todo={todo} />
            <br />
          </>
        );
      })}
    </div>
  );
}
