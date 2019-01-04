import * as express from 'express';
import * as path from 'path';

// dotenv.config({ path: '.env.example' });

// Controllers (route handlers)
import * as homeController from '../routes/index';

const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.disable('x-powered-by');

// app.use('/public', express.static(`${__dirname}/public`));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', homeController.index);

export default app;
