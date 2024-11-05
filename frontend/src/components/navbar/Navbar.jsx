import { Link, useLocation } from "react-router-dom";
import { navigation } from "./navigation.js";
import { Container } from "../ui/Container.jsx";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-2">
        <Link to="/">
          <h1 className="font-bold text-1xl">PERN TASK</h1>
        </Link>
        <ul className="flex gap-x-2">
          {navigation.map(({ name, path }) => (
            <li
              className={`
                text-slate-200
                ${
                  location.pathname === path &&
                  "bg-sky-700 rounded-md font-semibold px-2"
                }`}
              key={path}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
