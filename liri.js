 var request = require("request");
  var Twitter = require('twitter');
  var Spotify = require('node-spotify-api');
  var fs = require('fs');
  
  var spotify = new Spotify({
  	id: '4d2564d87f5041f8bcfeffa60afe0fe6',
  var input = process.argv;
  var cmd = process.argv[2];
  var query = input.slice(3);
  
  runCmd(cmd);

  function arrayToString(array) {
  	var array = array;
  	var string = array[0];
  function arrayToStringPlus(array) {
  	return string;
  }
  
 switch(cmd) {
	case 'my-tweets':
 		client.get('statuses/user_timeline', count = 20, function(error, tweets, response) {
 			if(error) throw error;
 			
 			var tweetList = tweets;
 			
 		for (i = 0; i < tweetList.length; i++) {
 				var text = tweetList[i].created_at + " " + tweetList[i].text;
 				console.log(text);
 			}
 		});
 		break;
 	case 'spotify-this-song':
 		console.log("Spotify this song!");
 function myTweets() {
 	client.get('statuses/user_timeline', count = 20, function(error, tweets, response) {
 		if(error) throw error;
 		
 		var tweetList = tweets;
 		write('\nmy-tweets');
 		write(" ");
 		for (i = 0; i < tweetList.length; i++) {
 			var text = tweetList[i].created_at + " " + tweetList[i].text;
 			write(text);
 		}
 	});
 }
 
function spotifySong(arg) {
	console.log("Spotify this song!");
	if (arg) {
		var song = query;
	}
	else {
  		var song = arrayToString(query);
		spotify.search({ type: 'track', query: song, limit: 5}, function(err, data) {
			if (err) {
			return console.log('Error occurred: ' + err);
 		}
 var track = data.tracks.items[0];
    var name = track.name;
    var album = track.album.name;
    var numArtists = track['artists'].length;
    if (numArtists > 1) {
      artists = track['artists'][0]['name'];
      for (i = 1; i < numArtists; i++) {
        artists += ", " + track['artists'][i]['name'];
      }
    }
    else {
      var artists = track['artists'][0]['name'];
    }

    if (track.preview_url === null) {
      var preview_url = "There is no preview url for this song.";
    }
    else {
      var preview_url = track.preview_url;
    }
    write("\nspotify-this-song");
    write(" ");
    write("Artists: " + JSON.stringify(artists));
    write("Song Name: " + name);
    write("Preview URL: " + preview_url);
    write("Album: " + album);
  });
}

function movieThis() {
  console.log("Movie This!");
    var movie = arrayToStringPlus(query);

    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    request(queryURL, function(error, response, body) {

        if (!error && response.statusCode === 200) {
          write("\nmovie-this");
          write(" ");
            write("Title: " + JSON.parse(body).Title);
            write("Year Released: " + JSON.parse(body).Year)
            write("IMDB Rating: " + JSON.parse(body).imdbRating);
            write("Rotten Romatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            write("Country: " + JSON.parse(body).Country);
            write("Language: " + JSON.parse(body).Language);
            write("Plot Synopsis: " + JSON.parse(body).Plot);
            write("Actors: " + JSON.parse(body).Actors);
        }
    });
}

function doWhatItSays() {
  console.log("Do what it says!");
  console.log(" ");

  fs.readFile("random.txt", "utf-8", function(error, data) {
    cmd = data.substr(0, data.indexOf(','));
    query = data.substr(data.indexOf(',') + 1);
    runCmd(cmd, query);
  });
}

function write(text) {
  console.log(text + "\n");

  fs.appendFile("log.txt", text + "\n", function(err) {
    if (err) {
        return console.log(err);
      }
  });
}

function runCmd(cmd, arg) {
  switch(cmd) {
    case 'my-tweets':
      myTweets();
      break;
    case 'spotify-this-song':
      spotifySong(arg);
      break;
    case 'movie-this':
        movieThis();
        break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
  }
}