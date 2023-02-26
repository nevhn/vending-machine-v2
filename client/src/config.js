const API_URL =
  process.env.REACT_APP_NODE_ENV !== "production"
    ? "http://localhost:8080/api"
    : "https://vending-machine-api-jmki.onrender.com/api";

// console.log(API_URL);
export default API_URL;
