import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const UpdateUser = () => {
  const loadedUser = useLoaderData();
  const {
    _id,
    name,
    email,
    gender: initialGender,
    status: initialStatus,
  } = loadedUser;

  const [gender, setGender] = useState(initialGender || "");
  const [status, setStatus] = useState(initialStatus || "");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = { name, email, status, gender };
    console.log(newUser);

    fetch(`https://identityhub-api.onrender.com/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="w-10/12 xl:w-1/2 mx-auto mt-20 ">
        <div className="text-center my-5">
          <h1 className="text-3xl">Update User</h1>
          <p>Use the below form to update the user account</p>
        </div>
        <form onSubmit={handleUpdateUser}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="w-full p-2 border outline-none rounded-sm my-1"
              type="text"
              required
              placeholder="Name..."
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mt-3">
              Email
            </label>
            <input
              className="w-full p-2 border outline-none rounded-sm my-1"
              type="email"
              required
              placeholder="Email..."
              name="email"
              defaultValue={email}
            />
          </div>
          <div className="text-[20px] my-3">
            <label htmlFor="gender">Gender</label>
            <input
              className="ml-4"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
            <input
              className="ml-7"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            <label htmlFor="female" className="ml-3">
              Female
            </label>
          </div>
          <div className="text-[20px] my-3">
            <label htmlFor="status" className="mr-3">
              Status
            </label>
            <input
              className="ml-4"
              type="radio"
              name="status"
              id="active"
              value="active"
              checked={status === "active"}
              onChange={handleStatusChange}
            />
            <label htmlFor="active" className="ml-2">
              Active
            </label>
            <input
              className="ml-4"
              type="radio"
              name="status"
              id="inactive"
              value="inactive"
              checked={status === "inactive"}
              onChange={handleStatusChange}
            />
            <label htmlFor="inactive" className="ml-2">
              Inactive
            </label>
          </div>
          <input
            className="bg-[#06D6A0] rounded-sm py-2 mt-5 font-[18px] w-full cursor-pointer hover:-tracking-tighter"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
