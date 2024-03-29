const db = require("../db/db");

/*GET*/
exports.getTransactions = async (req, res) => {
  const selectAllTransactionsQuery = await db.query(
    "SELECT * FROM transactions ORDER BY posting_date DESC"
  );
  res.json({
    status: "success",
    length: selectAllTransactionsQuery.rows.length,
    response: selectAllTransactionsQuery.rows,
  });
};
exports.getAvailableMoney = async (req, res) => {
  const selectAvailableMoneyQuery = await db.query(
    "SELECT * FROM available_money"
  );
  res.json({
    status: "success",
    response: selectAvailableMoneyQuery.rows[0],
  });
};

/** PUT */
exports.updateItem = async (req, res) => {
  const { itemId } = req.params;
  if (Object.keys(req.body).length === 0) {
    throw new Error("empty body");
  }
  let { description, cost, quantity } = req.body;
  const selectItemQuery = await db.query("SELECT * FROM items WHERE id = $1", [
    itemId,
  ]);

  if (!selectItemQuery.rows.length) throw new Error("id doesn't exist");
  const itemObj = selectItemQuery.rows[0];
  /**Default values if no user input */
  if (!description) description = itemObj.description;
  if (!cost) cost = itemObj.cost;
  if (!quantity) quantity = itemObj.quantity;

  const updateItemQuery = await db.query(
    "UPDATE items SET description = $1, cost = $2, quantity = $3 WHERE id = $4 RETURNING *",
    [description, cost, quantity, itemId]
  );
  res.json({ status: "success", response: updateItemQuery.rows[0] });
};

exports.addFunds = async (req, res) => {
  const { total } = req.body;
  if (!total) throw new Error("Value needs to be higher then zero");
  /** add current total with new total */
  const getCurrentTotalQuery = await db.query(
    "SELECT total from available_money"
  );
  const currentTotal = getCurrentTotalQuery.rows[0].total;
  const newTotal = parseInt(total) + parseInt(currentTotal);
  const updateFundsQuery = await db.query(
    "UPDATE available_money SET total = $1 RETURNING *",
    [newTotal]
  );
  res.json({ status: "success", response: updateFundsQuery.rows[0] });
};

/**POST */
exports.addItem = async (req, res) => {
  const { description, cost, quantity } = req.body;
  /**Checks if values are empty */
  if (description === "")
    throw new Error("description cannot be an empty string ");
  if (!cost || !quantity) {
    throw new Error("integer values cannot equal to zero");
  }
  const insertItemQuery = await db.query(
    "INSERT INTO items (description, cost, quantity) VALUES ($1, $2, $3) RETURNING *",
    [description, cost, quantity]
  );
  res.json({ status: "success", response: insertItemQuery.rows[0] });
};
/**DELETE */
exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  const deleteItemEntryQuery = await db.query(
    "DELETE FROM items where id = $1 RETURNING *",
    [itemId]
  );
  console.log(deleteItemEntryQuery);
  if (!deleteItemEntryQuery.rows[0]) throw new Error("Item already deleted");
  res.json({
    status: "success",
    response: deleteItemEntryQuery.rows[0],
  });
};
