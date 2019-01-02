import * as express from 'express';
import * as path from 'path';
import { router } from './router/index';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(app.get('port'), () => {
  console.log(
    'App is running at http://localhost:%d in %s mode.',
    app.get('port'),
    app.get('env'),
  );
  console.log('Press CTRL-C to stop\n');
});
