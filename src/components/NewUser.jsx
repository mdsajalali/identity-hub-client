import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const NewUser = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

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
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };
  return (
    <>
      <Header />

      <div className="w-10/12 xl:w-1/2 mx-auto mt-20 ">
        <div className="text-center my-5">
          <h1 className="text-3xl">New User</h1>
          <p className="mt-2 text-[18px]">
            Use the below form to crete a new account!
          </p>
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
              required
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
              required
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
            className="btn   w-full text-white hover:bg-[#06D6A0] bg-black uppercase"
            type="submit"
            value="Create User"
          />
        </form>
      </div>
    </>
  );
};

export default NewUser;
