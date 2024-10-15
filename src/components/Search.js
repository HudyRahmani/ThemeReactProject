import React from "react";
import { useLocation } from "react-router";
import { FetchData } from "../hook/FetchData";
import { Link } from "react-router-dom";

export default function Search() {
  
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = `http://localhost:3000/products?q=/${query}`
    const { data } = FetchData(url);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        {data &&
          data.map((list) => (
            <div
              key={list.id}
              className="card shadow-lg col-lg-3  col-md-4 col-sm-12 m-4 p-0"
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
