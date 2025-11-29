import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="shadow-sm fixed w-full top-0 left-0 z-50 text-(--primary-color) backdrop-blur-md grid grid-cols-2">
        <img src="bg.png" className="w-[100px] p-4 justify-start" />
        <ul className="px-8 flex flex-row justify-end items-center">
          <li>
            <NavLink className="btn btn-ghost text-xl" to="/">
              <span className="material-icons">home</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="journals">
              <span className="material-icons">list</span>
              Journals
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="addjournal">
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
