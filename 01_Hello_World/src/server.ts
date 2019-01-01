import * as express from 'express';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  // res.writeHead(200);
  // res.write('Hello World');
  // res.end();
  // 上3行と同じことをexpressで書くと
  res.status(200).send('Hello World.');
});

app.listen(3000);
