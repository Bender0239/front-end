import axios from "axios";

// create a new "instance" of axios that will have
// all our configs on it, and we will be able to use
// it in place of axios throughout our app

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://african-market-place-bw.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};