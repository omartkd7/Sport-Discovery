import axios from "axios";

const BASE_URL = "https://6a2162a7b1d0aaf32b4f52c6.mockapi.io/sports";

export const getSports = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};