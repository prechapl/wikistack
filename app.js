const express = require('express');
const app = express();
const morgan = require('morgan');
const models = require('./models');
// const db = require('./models');
const layout = require('./views/layout')
const main = require('./views/main')
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
// ...
// or, in one line: app.use('/wiki', require('./routes/wiki'));

// app.use('./assets', express.static('assets'));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded({ extended: false}));
// app.use(express.json());
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

models.db.authenticate()
  .then(() => {
    console.log('database connected!');
  })
  .catch(e => console.error(e))

 app.get('/', function (req, res) {
    res.redirect('/wiki')
  })

// app.get( '/', (req, res, next) => {
// res.send(layout(''));
// });

const init = async () => {
  // await models.Page.sync()
  models.db.sync({force: true})
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
}

init()

module.exports = {
  app
}
