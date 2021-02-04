var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  console.log("starting to add friends")
  const name = request.query.name;
  const description = request.query.description;
  const newFriend = {
      "name": name,
      "description": description,
      "imageURL": "http://lorempixel.com/400/400/people"
  };
  console.log(newFriend)
  data.friends.push(newFriend);
  response.render('index', data);
 }
