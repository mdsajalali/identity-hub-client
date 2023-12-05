import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const AllUsers = ({ item, idx, user, setUser }) => {
  const { _id, name, email, gender, status } = item;

  const userDelete = (_id) => {
    fetch(`https://identityhub-api.onrender.com/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully");
        }
        const remaining = user.filter((user) => user._id !== _id);
        setUser(remaining);
      });
  };

  return (
    <>
      <td className="border p-2">{idx + 1}</td>
      <td className="border capitalize p-2">{name}</td>
      <td className="border p-2">{email}</td>
      <td className="border capitalize p-2">{gender}</td>
      <td className="border capitalize p-2">{status}</td>
      <td className="border p-2">
        <Link to={`/updateUser/${_id}`}>
          <button className="  bg-[#06D6A0] hover:opacity-50 transition-all text-white rounded-sm p-1 md:mr-4 mr-2 ">
            <FaPenToSquare size={20} />
          </button>
        </Link>
        <button
          className=" bg-[#EF4C53] hover:opacity-50 transition-all text-white rounded-sm p-1"
          onClick={() => userDelete(_id)}
        >
        
            <MdDeleteForever size={20} />
          
        </button>
      </td>
    </>
  );
};

export default AllUsers;
