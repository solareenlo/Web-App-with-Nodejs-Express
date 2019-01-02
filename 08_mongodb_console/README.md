# mongodbのコンソールからの使い方色々

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
