import { Link, useParams } from "react-router-dom";
import { FetchData } from "../hook/FetchData";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context.js/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Store() {
  const { id } = useParams();
  const { mode } = useContext(ThemeContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const ref = doc(db, "Computer", id);
    getDoc(ref).then((doc) => {
      if (doc.empty) {
        setError("no collection ...");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setData(doc.data());
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center ">
        {data && (
          <div className={`card shadow-lg  m-4 p-0 cart ${mode}`}>
            <div className="card-header">{data.title}</div>
            <div className="card-body">
              <p className="card-text">{data.name}</p>
              <p>{data.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
