import { MdTaskAlt } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

//created navigation array
export const publicRoutes = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];

export const privateRoutes = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: <MdTaskAlt className="block lg:hidden w-5 h-5" />,
  },
  {
    name: "Add",
    path: "/task/new",
    icon: <MdAssignmentAdd className="block lg:hidden w-5 h-5" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaUserEdit className="block lg:hidden w-5 h-5" />,
  },
];
