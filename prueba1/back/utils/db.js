const mysql = require("mysql");

const dbconf = {
  host: process.env.HOST || "remotemysql.com",
  user: process.env.USER || "ArJR8T9j8S",
  password: process.env.PASSWORD || "Gd5sp1esZ8",
  database: process.env.DATABASE || "ArJR8T9j8S",
};

let connection;

const handlecon = () => {
  connection = mysql.createConnection(dbconf);
  connection.connect((err) => {
    if (err) {
      console.error("[DB ERROR]", err);
      setTimeout(() => {
        handlecon();
      }, 2000);
    } else {
      console.log("BD CONECTED");
    }
  });
  connection.on("error", (err) => {
    console.error("[DB ERROR]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") handlecon();
    else throw err;
  });
};

const list = (table) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(`select * from ${table} where status = 1 order by id desc`, (err, data) => {
      connection.destroy();
      err && reject(err);
      resolve(data);
    });
  });
};

const get = (table, id) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from ${table} where id ='${id}'`,
      (err, data) => {
        connection.destroy();
        err && reject(err);
        resolve(data);
      }
    );
  });
};

const upsert = (table, data) => {
  if (data && data.id) return update(table, data);
  else return insert(table, data);
};

const insert = (table, data) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(`insert into ${table} set ?`, data, (err, result) => {
      connection.destroy();
      err && reject(err);
      resolve(result);
    });
  });
};
const update = (table, data) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(
      `update ${table} set ? where id = ?`,
      [data, data.id],
      (err, result) => {
        connection.destroy();
        err && reject(err);
        resolve(result);
      }
    );
  });
};

const query = (table, q) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(`select * from ${table} where ?`, q, (err, result) => {
      connection.destroy();
      err && reject(err);
      console.log(result);
      resolve(JSON.parse(JSON.stringify(result[0])) || null);
    });
  });
};
const disableAll = (table, data) => {
  handlecon();
  return new Promise((resolve, reject) => {
    connection.query(
      `update ${table} set status = 0 where status = 1`,
      (err, result) => {
        connection.destroy();
        err && reject(err);
        resolve(result);
      }
    );
  });
};
module.exports = {
  list,
  get,
  upsert,
  query,
  disableAll,
};
