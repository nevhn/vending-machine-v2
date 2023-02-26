const API_URL =
  process.env.REACT_APP_NODE_ENV === "production"
    ? "https://vending-machine-api-jmki.onrender.com/api"
    : "http://localhost:8080/api";

console.log(API_URL);
export default API_URL;
