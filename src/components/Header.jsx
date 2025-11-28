import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="shadow-sm fixed w-full top-0 left-0 z-50 text-white backdrop-blur-md">
        <ul className="px-8 flex flex-row justify-end items-center">
          <li>
            <NavLink className="btn btn-ghost text-xl" to="/">
              <span className="material-icons">home</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="journals">
              <span className="material-icons">notes</span>
              Journals
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="singeljournal">
              <span className="material-icons">create</span>
              Add Journal
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
