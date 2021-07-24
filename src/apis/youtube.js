import axios from "axios";
 const KEY = "AIzaSyA_zY2UthmP_Avu9WBtJ4hBplWSxYq6eng";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
