import * as express from 'express';
import * as user from './user';

const app = express();

// app.get('/user/:id', (req, res) => {
// app.get('/user/:id?', (req, res) => {
// app.get('/user/:id*', (req, res) => {
//   console.log(req.params.id);
//   res.status(200).send('OK');
// });

app.use('/user', user.router);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
