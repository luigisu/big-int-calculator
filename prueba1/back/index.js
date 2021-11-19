const express = require("express");
const cors = require("cors");
const response = require("./utils/response");
const db = require("./utils/db");
const app = express();

app.use(cors());
app.use(express.json());

const multiplication = async (req, res) => {
  const { multiplicand, multiplier } = req.body;
  const result = BigInt(multiplicand) * BigInt(multiplier);
  const body = {
    result: result.toString(),
    status: 1,
    multiplicand: multiplicand,
    multiplier: multiplier,
  };
  try {
    await db.upsert("calulator", body);
    response.success(req, res, body, 200);
  } catch (error) {
    console.log("ERROR UPSERT", error);
    response.error(req, res, { message: "internal error try again" }, 500);
  }
};

const list = async (req, res) => {
  try {
    const data = await db.list("calulator");
    response.success(req, res, data, 200);
  } catch (error) {
    console.log("ERROR list", error);
    response.error(req, res, { message: "internal error try again" }, 500);
  }
};

const disableAll = async (req, res) => {
  try {
    await db.disableAll("calulator");
    response.success(req, res, null, 200);
  } catch (error) {
    console.log("ERROR DisbleAll", error);
    response.error(req, res, null, 500);
  }
};
app.post("/multiplication", multiplication);

app.get("/list", list);

app.put("/disableAll", disableAll);

app.listen(process.env.PORT || 3000, () => {
  console.log("app runing on localhost:" + 3000);
});
