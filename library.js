var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  var libList = library.playlists; // call var liblist, it moves us into the "library" object, then into the object "playlist"
  for (var eachPlaylist in libList) { // creates a for ... in loop, where the var eachPlayist knows to look at p01 and p02 (the level avove id)

console.log(libList[eachPlaylist].id + ": " + libList[eachPlaylist].name + " - " + libList[eachPlaylist].tracks.length + " tracks"); // logging the info found within "eachPlaylist", after libList has moved us to the right level
  }
// access the info of p01 and P02
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var libTracks = library.tracks;
  for (var eachTrack in libTracks) {

console.log(libTracks[eachTrack].id +": " + libTracks[eachTrack].name + " by " + libTracks[eachTrack].artist + " (" + libTracks[eachTrack].album + ")");
  }
}

printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
//access in playlists in library
  var playList = library.playlists[playlistId];
    console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks")
      var tracks = library.playlists[playlistId].tracks;
      for (var key in tracks) {
          console.log( library.tracks[tracks[key]].id +": " + library.tracks[tracks[key]].name + " by " + library.tracks[tracks[key]].artist + " (" + library.tracks[tracks[key]].album + ")")

      }

}
printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  library.playlists[playlistId].tracks.push(trackId);
}

addTrackToPlaylist("t03", "p01");
console.log(library.playlists.p01.tracks);

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  var tracks = library.tracks;
  tracks[newId] = {id: newId, name: name, artist: artist, album: album}

}

// adds a playlist to the library

var addPlaylist = function (name) {

  var newlistId = uid();

  var list = library.playlists;
  list[newlistId] = {id: newlistId, name: name}

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}