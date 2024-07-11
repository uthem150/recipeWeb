import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="logo">
        <Link
          to={"/"}
          id="logo"
          style={{ textDecoration: "none", color: "black" }}
        >
          <img src="/diet.png" alt="logo" width={50} />
          <h2>Recipe Finder App</h2>
        </Link>
      </div>
      <Link to={"/"}>
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="30"
          height="30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
      </Link>
    </nav>
  );
};

export default Navbar;
