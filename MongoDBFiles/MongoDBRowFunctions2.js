//Find by element in array
db.posts.find({
	comments: 
	{
		$elenMatch: 
		{
			user: 'Mary Williams'
		}
	}	
	}
)

//Add index 
db.posts.createIndex ({ title: 'text'})

//Text search
db.posts.find({
	$text: {
		$search: "\"Post0\""
	}
})

//Greater & Less than
db.posts.find({views: {$gt: 2}})
db.posts.find({views: {$gte: 7}})
db.posts.find({views: {$lt: 7}})
db.posts.find({views: {$lte: 7}})