const router = require("express").Router();
const controller = require("../controllers/vendor.controller");

/*
 * higher-order function
 * global error handling
 * route all function calls through this and handel error
 */
const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/api/vendor/transactions", use(controller.getTransactions));
router.get("/api/vendor/funds", use(controller.getAvailableMoney));
router.post("/api/vendor/items", use(controller.addItem));
router.put("/api/vendor/items/:itemId", use(controller.updateItem));
router.put("/api/vendor/funds", use(controller.addFunds));
router.delete("/api/vendor/items/:itemId", use(controller.deleteItem));

module.exports = router;
