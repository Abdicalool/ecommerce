import bcrypts from "bcryptjs";

const users = [
  {
    name: "User Admin",
    email: "admin@example.com",
    password: bcrypts.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Abdi Mohamed",
    email: "abdi@example.com",
    password: bcrypts.hashSync("1234", 10),
  },
  {
    name: "Abshir Jama",
    email: "abshir@example.com",
    password: bcrypts.hashSync("1234", 10),
  },
];
export default users;
