import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation.jsx";
import { Container } from "../ui/Container.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { BiSolidExit } from "react-icons/bi";

function NavBar() {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-5">
        <Link to="/">
          <h1 className="font-bold text-1xl">PERN TASK</h1>
        </Link>
        <ul className="flex items-center justify-center md:gap-x-2">
          {isAuth ? (
            <>
              {privateRoutes.map(({ name, path, icon }) => (
                <li key={path}>
                  <Link
                    className={`
                    text-slate-200 text-sm flex sm:py-1 sm:mx-2
                    ${
                      location.pathname === path && "bg-sky-700 rounded-md px-1"
                    }`}
                    to={path}
                  >
                    {icon}
                    <span className="hidden lg:block">{name}</span>
                  </Link>
                </li>
              ))}
              <li
                className="text-slate-200 sm:py-1 flex justify-center items-center bg-slate-700 sm:mr-2 rounded-md font-semibold px-2 cursor-pointer "
                onClick={() => {
                  signout();
                }}
              >
                <BiSolidExit className="block lg:hidden w-5 h-5" />
                <span className="hidden lg:block">Logout</span>
              </li>
              <li className="flex gap-x-2">
                <img
                  className="h-6 rounded-full"
                  src={user && user.gravatar}
                  alt={user && user.name}
                />
                <span className="text-gray-500 font-bold">@{user.name}</span>
              </li>
            </>
          ) : (
            publicRoutes.map(({ name, path }) => (
              <li
                className={`
                text-slate-200
                ${
                  location.pathname === path &&
                  "bg-sky-700 rounded-md font-semibold px-1 "
                }`}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
