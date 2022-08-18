import "./Header.css";
import path from "../../assets/Path.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { dark, setDark } = props;
  console.log(dark);
  return (
    <>
      <header className={`${dark ? "header" : "dark"}`}>
        <div className="container-xl">
          <div className="d-flex justify-content-between align-items-center p-3">
            <Link className="text-decoration-none" to={"/"}>
              <h2 className={`${dark ? "heading" : "qora"}`}>
                Where in the world?
              </h2>
            </Link>
            <button
              onClick={() => setDark((e) => !e)}
              className={`${
                dark
                  ? "gap-3 d-flex align-items-center bg-transparent border-0 rounded-2 p-2"
                  : "gap-3 d-flex align-items-center border-0 rounded-2 p-2 bg-transparent text-white "
              }`}
            >
              <img src={path} alt="" />
              <span className="m-0 tex">
                {dark ? "Night Mode" : "Dark Mode "}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
