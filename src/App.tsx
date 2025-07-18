import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ListUsers from "./components/ListUsers";
import DemoTodo from "./components/DemoTodo";

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DemoTodo />
      <hr />
      <ListUsers />
    </QueryClientProvider>
  );
}

export default App;
