/* eslint-disable */
const client = require("../config/SQLCLient");

module.exports = {
  getAllBooks: (done) => {
    console.log("Get all books ...");
    client.query("select * from book;", (err, res) => {
      if (err) console.error(err);
      res.rows.forEach((row) => {
        console.log(row);
      });
      done(null, res.rows);
    });
  },
  addBook: (id, title, numOfPages, author, done) => {
    client.query(
      `insert into book(id, title, numOfPages, author) values (${id}, \'${title}\', ${numOfPages}, \'${author}\');`,
      (err, res) => {
        if (err) console.error(err);
        done(null, res);
      }
    );
  },
  getBookByID: (id, done) => {
    client.query(`select * from book where id = ${id};`, (err, res) => {
      if (err) console.error(err);
      done(null, res.rows);
    });
  },
  updateBookByID: (id, field, value, done) => {
    let valueToSet = isNaN(value) ? `\'${value}\'` : value;
    client.query(
      `update book set ${field} = ${valueToSet} where id = ${id};`,
      (err, res) => {
        if (err) console.error(err);
        done(null, res);
      }
    );
  },
};
