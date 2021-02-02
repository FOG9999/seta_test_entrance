const client = require("../config/SQLCLient");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (id, username, password, name, done) => {
    let secret = username;
    let token = jwt.sign(
      {
        username: username,
        name: name,
      },
      secret
    );
    let hashedpass = await bcryptjs.hash(password, 10);
    client.query(
      `insert into users(id, username, name, hashedpass, token) values (
            ${id},
            \'${username}\',
            \'${name}\',
            \'${hashedpass}\',
            \'${token}\'
        ) returning *;`,
      (err, res) => {
        if (err) console.error(err);
        done(null, res.rows);
      }
    );
  },
  login: (username, password, done) => {
    client.query(
      `select * from users where username = \'${username}\';`,
      (err, res) => {
        if (err) console.error(err);
        console.log(res.rows);
        if (res.rows.length > 0) {
          bcryptjs.compare(password, res.rows[0].hashedpass, (err1, same) => {
            if (err1) console.error(err1);
            if (same) {
              let secret = username;
              let token = jwt.sign(
                {
                  username: username,
                  name: res.rows[0].name,
                },
                secret
              );
              client.query(
                `update users set token = \'${token}\' where id = ${res.rows[0].id} returning *;`,
                (error, data) => {
                  if (err) console.error(error);
                  done(null, data);
                }
              );
            } else
              done(null, {
                msg: "Not the same",
              });
          });
        } else
          done(null, {
            msg: "fail",
          });
      }
    );
  },
};
