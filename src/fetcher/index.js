// useFetch.js
import { useState, useEffect } from "react";
import {fetchlaunchData} from './fetchdata'
// custom hook for performing GET request
const useFetch = (url, params,match) => {
  const [launchData, setlaunchData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setLoading(true)
    fetchlaunchData(url,params,res=>{
      setlaunchData(res)
      setLoading(false)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, match]);
  return { loading, launchData };
};
export default useFetch;