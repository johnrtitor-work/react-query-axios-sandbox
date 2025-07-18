export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// an initial list of our todos
const todos: Todo[] = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Axios",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Tanstack Query",
    completed: false,
  },
  {
    id: 4,
    title: "Learn Zustand Basics",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Zustand with Context API",
    completed: true,
  },
];

/**
 * Mock function that simulates fetching todos from a database
 * @param query
 * @returns a list of TODOs
 */
export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  // add a delay of 1 second to simulate loading time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase()),
  );

  if (!filteredTodos) {
    throw new Error("No todos found!");
  }

  return [...filteredTodos];
};

/**
 * Mock function that simulates adding a todo to a database
 * @param todo
 * @returns the added todo
 */
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};
