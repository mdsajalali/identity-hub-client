import { Link, useLoaderData } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import { useState } from "react";

const App = () => {
  const LoadedUser = useLoaderData();
  const [user, setUser] = useState(LoadedUser);

  return (
    <div>
      <header className="bg-[#06D6A0] p-2">
        <h1 className="text-center text-3xl md:text-4xl">
          User Management System
        </h1>
      </header>
      <div className="w-10/12 xl:w-1/2 mx-auto mt-10">
        <Link to="/newUser">NEW USER</Link>
      </div>
      {user.map((item) => (
        <table key={item._id} className="w-1/2 mx-auto mt-10">
          <tr className="border">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">@Email</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
          <tr>
            <AllUsers item={item} user={user} setUser={setUser} />
          </tr>
        </table>
      ))}
    </div>
  );
};

export default App;
