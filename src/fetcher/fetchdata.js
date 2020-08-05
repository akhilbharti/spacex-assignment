import axios from "axios";

export const fetchlaunchData = async function (url,params,callback) {
      console.log('%c⧭', 'color: #731d6d', params);
      try {
        const response = await axios.get(url, {
          params: params,
      
        });
        if (response.status === 200) {
          callback(response.data)
        }
      } catch (error) {
        throw error;
      } finally {
      }
    };
