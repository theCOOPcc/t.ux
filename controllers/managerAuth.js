const Manager = require('../models/manager');
const jwt = require("jsonwebtoken");

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  const manager = new Manager(req.body);
  try {
    await manager.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(manager);
    res.json({ token });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

async function login(req, res) {
  try {
    const manager = await Manager.findOne({ email: req.body.email });
    if (!manager) return res.status(401).json({ err: "bad credentials" });
    manager.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(manager);
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

function createJWT(manager) {
  return jwt.sign(
    { manager }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}