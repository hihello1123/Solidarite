require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": "1q2w",
    "database": "solidarite",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "1q2w",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "1q2w",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
