import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./App.css";

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListUsers />
    </QueryClientProvider>
  );
}

function ListUsers() {
  const {
    isPending,
    error,
    data: users,
    isFetching,
  } = useQuery({
    // queryKey is like an internal unique identifier for this query,
    // if we reuse the query elsewhere, it will reuse the cached data
    queryKey: ["usersData"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading....";
  if (error) return "An error has occurred" + error.message;

  return (
    <div>
      <h2>List of users</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
