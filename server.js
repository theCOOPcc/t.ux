const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');

const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json({limit: '1MB'}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize());
app.use(passport.session());

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const activityRouter = require('./routes/activities');
const groupRouter = require('./routes/groups');
const managerRouter = require('./routes/managers');
const nodemailRouter = require('./routes/nodemail')

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/activities', activityRouter);
app.use('/api/groups', groupRouter);
app.use('/api/managers', managerRouter)
app.use('/api/nodemail', nodemailRouter)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
