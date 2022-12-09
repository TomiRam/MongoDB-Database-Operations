//Update Row
db.posts.update({title: 'Post Two'},
{
	body: 'New Body for post 2',
	date: Date()
},
{
	upsert: true
})

//Update specific field
db.posts.update({title: 'Post Two'},
{	$set: {
	body: ' Body for post  2',
	category: 'Technology'
	}
})

//Increment field ($inc)
db.posts.update({title: 'Post Two'},
{	$inc: {
	likes: 5
	}
})

//Rename field
db.posts.update({title: 'Post Two'},
{	$rename: {
	likes: 'views'
	}
})

//delete row
db.posts.remove({title: 'Post Four'})

//Sub-Documents
db.posts.update({title: 'Post One'},
{	$set: {
	body: 'Comment One',
	user: 'Mary Williams',
	date: Date()
	},
	{
	body: 'Comment Two',
	user: 'Mary White',
	date: Date()
	}
})