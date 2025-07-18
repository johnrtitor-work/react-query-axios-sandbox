import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./App.css";
import ListUsers from "./components/ListUsers";

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListUsers />
    </QueryClientProvider>
  );
}

export default App;
