const express = require('express');
// const app = express();
// const app = require('../app')
const router = express.Router();
const { addPage } = require('../views')
const { Page, User } = require('../models')


  // router.get('/', function (req, res) {
  //   res.redirect('/wiki')
  // })

  router.get('/', (req, res, next) => {
    res.send('got to Get /wiki/');
  });

  router.post('/', async (req, res, next) => {
    // const response = res.json(req.body.textContent);
    // const response = res.json(req.body.authorName)
      // authorEmail,
      // textContent,
      // statusFeild,
      // pageTitle,
      const page = new Page({
        title: req.body.pageTitle,
        content: req.body.textContent,
      });
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
      try {
        await page.save();
        res.redirect('/');
      } catch (error) { next(error) }
  });

  router.get('/add', (req, res, next) => {
    // console.log(res.json(req.body))

    res.send(addPage());
    // res.send('got to GET /wiki/add')
  });


module.exports = router;
