// Extensions
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Config
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);
 
//
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Db
const { mongoDB } = require('./config/mongodb');
const { con } = require('./config/connectMysql');

//Routes 
const indexRouter  = require('./routes/indexRouter.js');
const authRouter   = require('./routes/AuthRouter.js');
const ServerRouter = require('./routes/ServerRouter.js');
const usersRouter  = require('./routes/usersRouter.js');
const schemaRouter = require('./routes/userSchemaRouter.js');

//Middleware
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/server', ServerRouter);
app.use('/schema', schemaRouter);
app.use('/auth_users', usersRouter);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404)).json({ message: "ERORR: 404!" });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 404);
  res.json({ message: "ERORR: 404!" });
});

module.exports = app;
