import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Navbar = ({ pretrazi }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"></div>
        <div className="nav-elements">
          <ul>
            <li>
              <Link className="link" to="/">
                Početna
              </Link>
            </li>
            <li>
              <Link className="link" to="/staze">
                Staze na Kopaoniku
              </Link>
            </li>
            <li>
              <Link className="link" to="/izabrani">
                Omiljene staze
              </Link>
            </li>

            <li>
              <input
                type="text"
                id="kriterijum"
                placeholder="Pretraži"
                name="search"
                onChange={() =>
                  pretrazi(document.getElementById("kriterijum").value)
                }
              />
              <button type="submit" className="dugmePretraga">
                {" "}
                <BsSearch></BsSearch>{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
