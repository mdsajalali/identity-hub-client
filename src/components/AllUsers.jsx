import { useEffect, useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = ({ item, idx, user, setUser }) => {
  const { _id, name, email, gender, status } = item;
  const [isLoading, setIsLoading] = useState(false);

  const userDelete = (_id) => {
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://identityhub-api.onrender.com/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User deleted successfully",
                icon: "success",
              });
              const remaining = user.filter((user) => user._id !== _id);
              setUser(remaining);
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(fetchData);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <span className="loading loading-spinner text-[#06D6A0]"></span>
        </>
      ) : (
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
              disabled={isLoading}
            >
              <MdDeleteForever size={20} />
            </button>
          </td>
        </>
      )}
    </>
  );
};

export default AllUsers;
