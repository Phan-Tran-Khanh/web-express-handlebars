const express = require('express');
const expressHandleBars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/html/'));
app.engine('hbs', expressHandleBars.engine({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'layout',
  extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.use('/task1', require('./routes/task1Route'));
app.use('/task2', require('./routes/task2Route'));
app.use('/task3', require('./routes/task3Route'));
app.use('/task4', require('./routes/task4Route'));

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});