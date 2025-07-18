import { useQuery } from "@tanstack/react-query";

// the API returns an array of object User
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suit: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function ListUsers() {
  // useQuery's data is just a list of User type objects
  const {
    isPending,
    error,
    data: users,
    isFetching,
  } = useQuery<User[]>({
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
