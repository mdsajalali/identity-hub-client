import { FaPen } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const AllUsers = ({ item, user, setUser }) => {
  const { _id, name, email } = item;

  return (
    <>
      <td className="border p-2">{_id}</td>
      <td className="border p-2">{name}</td>
      <td className="border p-2">{email}</td>
      <td className="border p-2">Male</td>
      <td className="border p-2">Active</td>
      <td className="border p-2 flex gap-5">
        <Link to={`/updateUser/${_id}`}>
          <button className="text-[20px]">
            <FaPen />
          </button>
        </Link>
        <button className="text-3xl">
          <IoCloseSharp />
        </button>
      </td>
    </>
  );
};

export default AllUsers;
