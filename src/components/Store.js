import { Link } from "react-router-dom";
import { FetchData } from "../hook/FetchData";
import { useContext } from "react";
import { ThemeContext } from "../context.js/ThemeContext";

export default function Store() {
  const url = "http://localhost:3000/products";
  const { data } = FetchData(url);
  const {mode} = useContext(ThemeContext)

  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        {data &&
          data.map((list) => (
            <div
              key={list.id}
              className={`card shadow-lg col-lg-3  col-md-4 col-sm-12 m-4 p-0 ${mode}`}
            >
              <div className="card-header">{list.title}</div>
              <div className="card-body">
                <p className="card-text">{list.name}</p>
                <Link
                  to={`/StoreList/${list.id}`}
                  className="btn"
                  style={{ background: "#ddf" }}
                >
                  See More...
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
