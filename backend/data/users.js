const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Satvik",
    email: "satvik@user.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Neilohit",
    email: "neilohit@user.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aditi",
    email: "aditi@breeder.com",
    isBreeder: true,
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
