import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// the API returns an array of object User
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
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
  } = useQuery({
    // queryKey is like an internal unique identifier for this query,
    // if we reuse the query elsewhere, it will reuse the cached data
    queryKey: ["usersData"],
    queryFn: async () => {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users",
      );
      return response.data;
    },
  });

  if (isPending) return "Loading....";
  if (error) return "An error has occurred" + error.message;

  return (
    <div>
      <h2>List of users</h2>
      <ol>
        {users.map((user) => (
          <>
            <li key={user.id}>
              {user.name} (@{user.username})
              <ul>
                <li>Phone: {user.phone} </li>
                <li>Email: {user.email} </li>
                <li>
                  Address: {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}-{user.address.zipcode} (
                  {user.address.geo.lat}, {user.address.geo.lng})
                </li>
                <li>Company: {user.company.name}</li>
              </ul>
            </li>
            <br />
          </>
        ))}
      </ol>
    </div>
  );
}
