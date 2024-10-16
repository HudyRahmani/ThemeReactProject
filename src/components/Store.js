import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context.js/ThemeContext";
import { db } from "../firebase/config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import deleteIcon from '../assets/delete1.svg'
import { useCollection } from "../hook/useCollection";

export default function Store() {
  const { mode } = useContext(ThemeContext);

  // const [data, setData] = useState(null);
  // // const [isLoading, setIsLoading] = useState(false);
  // // const [error, setError] = useState(false);

  const {collectionData : data} = useCollection('Computer')

  const handleClick = async(id) => {
    try{
      const ref = doc(db , 'Computer' , id)
      await deleteDoc(ref)
    }catch (err) {
      console.log(err)
    }

  }

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
                  >See More... 
                </Link>
                <img  
                  className="delete"
                  src={deleteIcon}
                  onClick={() => {handleClick(list.id)}}
                  style={{position:'absolute' , top:'10px' , right:'10px' , cursor:'pointer'}}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
