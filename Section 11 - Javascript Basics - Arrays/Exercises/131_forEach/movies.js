// Declare array of movie objects

var movies = [
	{title: "Star Wars",
	rating: 5.0,
	watched: true},	
	{title: "Cool Runnings",
	rating: 4.1,
	watched: true},	
	{title: "Titanic",
	rating: 2.0,
	watched: false},
	{title: "Annie",
	rating: 0.5,
	watched: false}
];


// solution using a for loop
for (var i = 0; i < movies.length; i++) {
	console.log(buildString(movies[i]));
}

//solution using a forEach method
movies.forEach (function(movie){
	console.log(buildString(movie));
})

// function to build the output string for a movie
function buildString(movie) {
	var result = "You have ";
	if (movie.watched) {
		result += "watched \"";
	} else {
		result += "not seen \"";
	}
	result += movie.title + "\" - " + movie.rating + " stars";
	return result;
}
