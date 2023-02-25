// A slightly more cleaner version of:  https://github.com/ExhaustCs/vending-machine

console.clear();
require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const customerRoutes = require("./routes/customer.routes");
const vendorRoutes = require("./routes/vendor.routes");

const app = express();
const PORT = process.env.PORT || 8080;

/* configure express */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* routes */
app.use(customerRoutes);
app.use(vendorRoutes);

/* error handling */
app.use((err, req, res, next) => {
  // console.log(err.code);
  /* not enough funds > 0 */
  if (err.code === "23514") {
    return res.status(406).json({
      status: "fail",
      response: "out of order: not enough funds available in the machine",
    });
  }
  res.status(500).json({ status: "fail", response: err.message });
  throw err;
});

app.listen(PORT, () => console.log(`⚡ server running on port ${PORT} ⚡`));
