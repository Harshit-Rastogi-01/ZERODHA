// const { UsersModel } = require("../models/UsersModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await UsersModel.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }


module.exports.userVerification = (req, res) => {
  console.log("Verifying token:", req.cookies.token); // Check if token exists

  const token = req.cookies.token;
  if (!token) {
    console.log("No token found, redirecting to login");
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.json({ status: false });
    } else {
      const user = await UsersModel.findById(data.id);
      if (user) {
        console.log("User verified:", user.username);
        return res.json({ status: true, user: user.username });
      } else {
        console.log("User not found in DB");
        return res.json({ status: false });
      }
    }
  });
};
