# Excel, Oracle, MongoDB, Object の大まかな比較

| Excel | Oracle | MongoDB | Object |
|:---:|:---:|:---:|:---:|
| ブック | Schema | Database | 特になし |
| シート | Table | Collection | 特になし |
| 行 | Row | Document | Object群 |
| 列 | Column | Field | Key |
| セル | Field | Value | Value |

## db.createCollection をした後は,
```
$ mongo
> use sample
switched to db sample
> show collections
test
> db.test.find()
>
```
といった感じで, Mongodbの中身を確認できる.
