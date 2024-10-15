import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context.js/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      search && navigate(`/Search?q=${search}`);
    }
  };

  const {color, changeColor} = useContext(ThemeContext)

  return (
    <div>
      <nav
        className=" navbar navbar-expand-lg navbar-dark "
        style={{ background: color }}
        
      >
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            HRweb
          </Link>

          <ul className="navbar-nav">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-light" to={"/CreateStore"}>
              Create Store
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
