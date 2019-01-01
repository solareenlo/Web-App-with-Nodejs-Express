import * as express from 'express';
import * as path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(
    'App is running at http://localhost:%d in %s mode.',
    app.get('port'),
    app.get('env'),
  );
  console.log('Press CTRL-C to stop\n');
});
