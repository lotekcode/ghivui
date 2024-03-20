import axios from 'axios';

const getApiData = async (apiUrl, setJsonCallback, setErrorCallback, setLoadingCallback) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    
    if(response.status === 200) {
      setJsonCallback(response.data);
    }
    else {
      setJsonCallback(null);
      setErrorCallback({message: `API responded with a HTTP status ${response.status}`});
    }
  } catch (error) {
      setErrorCallback(error);
    } 
  finally {
    setLoadingCallback(false);
  }
};
export default getApiData;