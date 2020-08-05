import axios from "axios";
/**
 * A generic function to make the api request using axios
 *
 * @url {string}  : The url which is to be passed
 * @params {string}  : The query params for the url
 * @callback {func}  : the callback function to record the data
 */
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
