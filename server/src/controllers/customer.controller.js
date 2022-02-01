const db = require("../db/db");

/**GET */
exports.getItems = async (req, res) => {
  const selectAllItemsQuery = await db.query("SELECT * FROM items ORDER BY id");
  res.json({
    status: "success",
    length: selectAllItemsQuery.rows.length,
    response: selectAllItemsQuery.rows,
  });
};

exports.getItem = async (req, res) => {
  const { itemId } = req.params;
  const selectItemQuery = db.query("SELECT * FROM items WHERE id = $1", [
    itemId,
  ]);
  res.json({ status: "success", response: (await selectItemQuery).rows[0] });
};

/**POST */
exports.purchaseItem = async (req, res) => {
  let { itemId, money } = req.params;
  money = parseFloat(money);
  const selectAllItemsQuery = await db.query(
    "SELECT * FROM items WHERE id= $1",
    [itemId]
  );
  const itemObj = selectAllItemsQuery.rows[0];
  console.log(itemObj);
  const itemCost = parseFloat(itemObj.cost);
  const selectAvailableMoney = await db.query(
    "SELECT total FROM available_money"
  );
  const availableMoney = parseFloat(selectAvailableMoney.rows[0].total);
  /* checks available money first */
  if (availableMoney <= 0) {
    throw new Error("out of order: out of money");
  }
  /* checks to see if quantity equals to zero */
  if (!itemObj.quantity) throw new Error("Item is out of stock");
  /*  not enough funds given */
  if (money < itemCost) {
    throw new Error("invalid amount");
  }
  let change = 0;
  /* more then enough funds given */
  if (money > itemCost) {
    change = money - itemCost;
  }
  /*  exact amount given */
  if (money === itemCost) {
    change = 0;
  }
  const insertTransactionsQuery = await db.query(
    "INSERT INTO transactions (description, amount_inserted, cost) VALUES ($1, $2, $3) RETURNING *",
    [itemObj.description, money, itemCost]
  );
  const updateFundsQuery = await db.query(
    "UPDATE available_money SET total = ((total - $1) + $2) RETURNING *",
    [money, change]
  );
  const updateInventoryQuery = await db.query(
    "UPDATE items SET quantity = quantity - 1 WHERE id = $1 RETURNING *",
    [itemId]
  );
  console.log(
    "availableMoney after transaction:",
    updateFundsQuery.rows[0].total
  );
  res.json({
    status: "success",
    response: {
      change,
      available_money: updateFundsQuery.rows[0],
      transaction: insertTransactionsQuery.rows[0],
    },
  });
};
