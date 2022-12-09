//Get all rows
db.posts.find()

//Get all rows formatted
db.posts.find().pretty()

//Find rows
db.posts.find({ category :'News'})

//Sort rows
/* asc*/
db.posts.find().sort({title: 1}).pretty()
/* desc */
db.posts.find().sort({title: 1}).pretty()

//Count rows
db.posts.find().count()
db.posts.find({ category :'News'}).count()