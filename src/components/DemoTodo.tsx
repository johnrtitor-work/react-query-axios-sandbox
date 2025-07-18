import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos, type Todo } from "../api";
import TodoCard from "./TodoCard";
import { useState } from "react";

export default function DemoTodo() {
  const [title, setTitle] = useState("");

  const {
    isPending,
    error,
    data: todos,
    refetch: refetchTodo,
  } = useQuery<Todo[]>({
    queryKey: ["fetchtodo"],
    queryFn: () => fetchTodos(),
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      refetchTodo();
    },
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
      <div>
        <input
          type="text"
          placeholder="Need to code!"
          // e.target.value is the current text in the box
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <button
          type="button"
          onClick={async () => {
            try {
              // send a request to the API to add the todo
              await addTodoMutation({
                title,
              });
              // reset the title field of add todo text box
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add task
        </button>
      </div>
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
