import app from './index.js';


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('home', { title: 'AppHub' });
});
