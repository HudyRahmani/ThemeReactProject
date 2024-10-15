import { Link, useParams } from "react-router-dom";
import { FetchData } from "../hook/FetchData";

export default function Store() {
  const { id } = useParams();
  const url = "http://localhost:3000/products/"+id;
  const { data } = FetchData(url);

  return (
    <div className="container">
      <div className="row justify-content-center ">
        
        {data && <div key={data.id}  className="card shadow-lg   m-4 p-0" >
              <div className="card-header">{data.title}</div>
              <div className="card-body">
                <p className="card-text">{data.name}</p>
                <p>{data.price}</p>
              </div>
            </div>
          }
      </div>
    </div>
  );
}
