import * as express from 'express';

const app = express();

// app.set('view engine', 'jade');
// app.set('view engine', 'ejs');
// app.set('view engine', 'hjs');
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  // res.status(200).render('index.jade', { title: 'webアプリケーション開発' });
  // res.status(200).render('index.ejs', { title: 'webアプリケーション開発' });
  // res.status(200).render('index.hbs', { title: 'webアプリケーション開発' });
  res.status(200).render('index.hbs', { title: 'webアプリケーション開発' });
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
