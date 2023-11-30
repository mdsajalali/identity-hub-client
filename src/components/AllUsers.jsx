import { FaPen } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const AllUsers = ({ item, idx, user, setUser }) => {
  const { _id, name, email, gender, status } = item;
  console.log(item);

  const userDelete = (_id) => {
    fetch(`https://identityhub-api.onrender.com/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User delete successfully");
        }
        const remaining = user.filter((user) => user._id !== _id);
        setUser(remaining);
      });
  };

  return (
    <>
      <td className="border p-2">{idx + 1}</td>
      <td className="border p-2">{name}</td>
      <td className="border p-2">{email}</td>
      <td className="border p-2">{gender}</td>
      <td className="border p-2">{status}</td>
      <td className="border p-2 flex gap-5">
        <Link to={`/updateUser/${_id}`}>
          <button className="text-[20px]">
            <FaPen />
          </button>
        </Link>
        <button className="text-3xl" onClick={() => userDelete(_id)}>
          <IoCloseSharp />
        </button>
      </td>
    </>
  );
};

export default AllUsers;
