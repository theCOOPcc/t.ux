const Admin = require('../models/user');
const jwt = require("jsonwebtoken");

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  const admin = new Admin(req.body);
  try {
    await admin.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(admin);
    res.json({ token });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

async function login(req, res) {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return res.status(401).json({ err: "bad credentials" });
    admin.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(admin);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(admin) {
  return jwt.sign(
    { admin }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}