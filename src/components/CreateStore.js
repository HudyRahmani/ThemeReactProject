import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../context.js/ThemeContext";

export default function CreateStore() {
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const navigate = useNavigate()
  const data = { title, name, number };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3000/products", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        navigate('/')
      })
      .catch((error) => {
        console.error("There was an error posting the data!", error);
      });
  };

  const {mode} = useContext(ThemeContext)

  return (
    <div className={`container col-lg-6 col-md-8 col-sm-12 mt-5 shadow-lg p-5 rounded-5 cart ${mode} `}>
      <form onSubmit={handleSubmit} className={`cart ${mode}`}>
        <h3 className="form-label">Entry Your Information...</h3>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="entry title..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <textarea
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            rows="3"
            placeholder="entry description..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            className="form-control"
            placeholder="entry price..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
