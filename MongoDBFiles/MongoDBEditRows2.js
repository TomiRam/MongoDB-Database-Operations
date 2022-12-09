db.posts.find().limit(2).pretty() //Limit Rows

db.posts.find().limit(2).sort({title: 1}).pretty()//Chaining

db.posts.findOne({ category :'News'})//Find one row

//Foreach
db.posts.find().forEach(function(doc) {
	print("Blog post:" +doc.title)
}) 

//Find Specific Fields
db.posts.find({title: 'Post One'},
{
	title: 1,
	author: 1
})