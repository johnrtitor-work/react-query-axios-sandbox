import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelloWorld />
    </QueryClientProvider>
  );
}

function HelloWorld() {
  return (
    <>
      <h2>Hello World</h2>
    </>
  );
}

export default App;
