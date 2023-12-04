import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import Header from "./components/Header";

const App = () => {
  const LoadedUser = useLoaderData();
  console.log(LoadedUser);
  const [user, setUser] = useState(LoadedUser);

  return (
    <div>
      <Header />
      {user.map((item, idx) => (
        <table key={item._id} className="w-1/2 mx-auto mt-10">
          <tr className="border">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">@Email</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
          <tr className="text-center">
            <AllUsers item={item} idx={idx} user={user} setUser={setUser} />
          </tr>
        </table>
      ))}
    </div>
  );
};

export default App;
