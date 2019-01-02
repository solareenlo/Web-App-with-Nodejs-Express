import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const url: string = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  const db = client.db('sample');
  //// コレクション(ディレクトリ)の作成
  // db.createCollection('test', (error, collection) => {
  //   client.close();
  // });
  //// コレクション(ディレクトリ)を表示
  // db.listCollections().toArray((error, items) => {
  //   for (const item of items) {
  //     console.log(item.name);
  //   }
  //   client.close();
  // });
  //// コレクション(ディレクトリ)の名前変更
  // db.renameCollection('test', 'test_new', (error, collection) => {
  //   client.close();
  // });
  //// コレクション(ディレクトリ)の削除
  // db.dropCollection('test_new', (error, collection) => {
  //   client.close();
  // });
  //// ドキュメント(オブジェクト)の作成
  // db.collection('products', (error, collection) => {
  //   collection.insertMany(
  //     [{ name: 'pen', price: 120 },
  //      { name: 'note', price: 200 }],
  //     (error, result) => {
  //       client.close();
  //     });
  // });
  //// ドキュメントをコンソールに表示
  // db.collection('products', (error, collection) => {
  //   collection.find({ name: { $regex: /e/g } }).toArray((error, docs) => {
  //     for (const doc of docs) {
  //       console.log(doc.name);
  //     }
  //     client.close();
  //   });
  // });
  //// valueの値を増加させる
  // db.collection('products', (error, collection) => {
  //   collection.updateMany(
  //     { name: /e/g },
  //     { $inc: { price: 20 } },
  //     (error, results) => {
  //       client.close();
  //     },
  //   );
  // });
  //// ドキュメントの削除
  db.collection('products', (error, collection) => {
    collection.deleteMany(
      { name: /e/g },
      (error, result) => {
        client.close();
      },
    );
  });
});
