const User = require('../models/user');
const jwt = require("jsonwebtoken");

module.exports = {
  signup,
  login,
  createJWT
};

async function signup(req, res) {
  const user = new User(req.body);
  user.userPermissions = 0
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

async function login(req, res) {
  // console.log('login request data', req.body)
  // console.log('REQUEST DATA', req)
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log('request user', user)
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
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

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}