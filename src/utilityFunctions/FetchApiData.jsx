import axios from "axios";

const FetchApiData = async (location) => {
  console.log("FetchApiData is called");
  console.log(location);
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=82eead94890f3e9d0203a62caa188ff4`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation`, error);
  }
};

export default FetchApiData;
