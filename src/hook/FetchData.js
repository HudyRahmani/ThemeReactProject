import axios from "axios";
import { useEffect, useState } from "react";

export const FetchData = (url) =>{
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get(url); 
          setData(response.data); 
      };
      fetchData();
    }, [url]);

    return {data}
}