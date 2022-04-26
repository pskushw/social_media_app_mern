import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = function () {
  return axios.get(url);
};
export const createPost = function (newData) {
  return axios.post(url, newData);
};
