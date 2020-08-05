import axios from "axios";

export const fetchlaunchData = async function (url,params,callback) {
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
