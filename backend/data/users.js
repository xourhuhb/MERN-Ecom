import bycrypt from "bcryptjs";

const Users = [                             //collection
  {
    name: "Admin User",                    //document
    email: "admin@mail.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Virat kohli",
    email: "virat@mail.com",
    password: bycrypt.hashSync("1818376", 10),
    isAdmin: false,
  },
  {
    name: "Thala",
    email: "thala@mail.com",
    password: bycrypt.hashSync("070707", 10),
    isAdmin: false,
  },
];

export default Users;
