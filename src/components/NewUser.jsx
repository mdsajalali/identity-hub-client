import { useState } from "react";
import { Link } from "react-router-dom";

const NewUser = () => {
   const [gender, setGender] = useState("");
   const [status, setStatus] = useState("");

   const handleGenderChange = (e) => {
     setGender(e.target.value);
   };

   const handleStatusChange = (e) => {
     setStatus(e.target.value);
   };

  const handleCreateUser = (e) => {
    e.preventDefault();
     
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = { name, email, gender, status };
    console.log(newUser);



    fetch("https://identityhub-api.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfully");
        }
      });
  };
  return (
    <>
      <div className="w-10/12 xl:w-1/2 mx-auto mt-10">
        <Link to="/">ALL USERS</Link>
      </div>
      <div className="w-10/12 xl:w-1/2 mx-auto mt-20 ">
        <div className="text-center my-5">
          <h1 className="text-3xl">New User</h1>
          <p>Use the below form to crete a new account</p>
        </div>
        <form onSubmit={handleCreateUser}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="w-full p-2 border outline-none rounded-sm my-1"
              type="text"
              required
              placeholder="Name..."
              name="name"
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
            value="Save"
          />
        </form>
      </div>
    </>
  );
};

export default NewUser;
