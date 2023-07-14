const API_URL =
  process.env.REACT_APP_NODE_ENV !== "production"
    ? "http://localhost:8080/api"
    : "https://vending-machine-v2-production.up.railway.app/api";

// console.log(API_URL);
export default API_URL;
