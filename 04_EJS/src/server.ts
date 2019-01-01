import * as express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  const date = {
    items: [
      { name: '砂糖' },
      { name: '塩' },
      { name: '味噌' },
    ],
  };
  res.render('./index.ejs', date);
});

const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
