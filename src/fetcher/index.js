// useFetch.js
import { useState, useEffect } from "react";
import {fetchlaunchData} from './fetchdata'
// custom hook for performing GET request
const useFetch = (url, params,match) => {
  console.log('%c⧭', 'color: #bfffc8', match);
  const [launchData, setlaunchData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     let ignore = false;
    setLoading(true)
    fetchlaunchData(url,params,res=>{
      if(!ignore){
        setlaunchData(res)
        setLoading(false)
      }
    })
     return () => {
       ignore = true;
     };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, match]);
  return { loading, launchData };
};
export default useFetch;