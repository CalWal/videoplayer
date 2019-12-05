import axios from "axios";

const KEY = "AIzaSyC6AMyJQamEchz-vAcxncuLO-Z1djuAjME";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
