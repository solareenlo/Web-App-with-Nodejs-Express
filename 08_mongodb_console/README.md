# mongodbのコンソールからの使い方色々

## Excel, Oracle, MongoDB, Object の大まかな比較

| Excel | Oracle | MongoDB | Object |
|:---:|:---:|:---:|:---:|
| ブック | Schema | Database | 特になし |
| シート | Table | Collection | 特になし |
| 行 | Row | Document | Object群 |
| 列 | Column | Field | Key |
| セル | Field | Value | Value |


## mongodbの起動の仕方は,
```
$ mongod // mongodbが起動する
$ CNTL-C // mongodbを停止する
```

## mongodbへのコンソールからのアクセスの仕方は,
```
$ mongo // アクセスして,
> exit // 終了.
bye
```

## dbの作成&中身を見る
```
> use sample // sampleというdbを作成 or そこにアクセスする
switched to db sample
> show dbs // 存在するdbの種類を見せてくれる
admin   0.000GB
local   0.000GB
sample  0.000GB // こんな感じで帰ってくる
> db.stats() // これで中身の情報を見せてくれる
```

## Collection(ディレクトリ・フォルダみたいなもの)の作成
```
> db.createCollection("products") // productsというCollectionを作成する
{ "ok" : 1}
> show collections
products
```

## dbをコピー&削除する
```
> db.copyDatabase('sample', 'new_sample') // mongodb4.0で非推奨になった
{ "ok" : 1}
> show dbs
admin       0.000GB
local       0.000GB
new_sample  0.000GB
sample      0.000GB
> use new_sample
> db.dropDatabase()
{ "dropped" : "new_sample", "ok" : 1 }
> show dbs
admin       0.000GB
local       0.000GB
sample      0.000GB
```

## Collectionの名前変更
```
> db.createCollection('pricee')
{ "ok" : 1 }
> show collections
pricee
products
> db.pricee.renameCollection('price', true) // ここのtrueは名前変更前のcollectionは削除するということ
{ "ok" : 1 }
> show collections
price
products
```

## Collectionの削除
```
> db.price.drop()
true
> show collections
products
```

## CollectionにDocumentを追加
```
> db.products.insert({name: 'pen', price: 150})
WriteResult({ "nInserted" : 1 })
```

## オペレーターの種類
| オペレーター | 意味 |
|:---:|:---:|
| $eq | = |
| $gt | > |
| $gte | >= |
| $lt | < |
| $lte | <= |
| $ne | != |
| $regex | 正規表現 |

## Documentを表示&検索
```
> db.products.find() // collectionの中身のdocumentを全部表示
{ "_id" : ObjectId("5c2d4199c5195731b5149377"), "name" : "pen", "price" : 150 }
> db.products.find({price: {$gt: 100}}) // priceが100より大きいものを検索
{ "_id" : ObjectId("5c2d4199c5195731b5149377"), "name" : "pen", "price" : 150 }
> db.products.find({price: {$gt: 200}}) // priceが200より小さいものを検索
>
```
```
> db.characters.find().pretty() // charactersの中身を下のように表現してくれる
{
  "_id" : ObjectId("5c280309156ceb35b1564cff"),
  "name" : "sola",
  "age" : 33,
  "__v" : 0
}
```

## Document内容の更新
```
> db.products.update({name: {$eq: 'pen'}}, {$set: {price: 200}}, {upsert: false, multi: true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.products.find()
{ "_id" : ObjectId("5c2d4199c5195731b5149377"), "name" : "pen", "price" : 200 }
```

## Documentの削除
```
> db.products.remove({name: {$eq: 'pen'}})
WriteResult({ "nRemoved" : 1 })
> db.products.find()
>
```
