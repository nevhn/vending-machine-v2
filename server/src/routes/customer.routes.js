const router = require("express").Router();
const controller = require("../controllers/customer.controller");

/*
 * higher-order function
 * global error handling
 * route all function calls through this and handel error
 */
const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/api/customer/items", use(controller.getItems));
router.get("/api/customer/items/:itemId", use(controller.getItem));
router.post("/api/customer/items/:itemId/:money", use(controller.purchaseItem));

module.exports = router;
