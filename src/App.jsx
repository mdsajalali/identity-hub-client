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
      <div className="overflow-x-auto max-w-[1000px] mx-auto my-10">
        <table className="table">
          <thead>
            <tr className="text-center text-[18px]">
              <th className="border p-4">ID</th>
              <th className="border p-4">Name</th>
              <th className="border p-4">@Email</th>
              <th className="border p-4">Gender</th>
              <th className="border p-4">Status</th>
              <th className="border p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, idx) => (
              <tr className="text-center" key={item._id}>
                <AllUsers item={item} idx={idx} user={user} setUser={setUser} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
