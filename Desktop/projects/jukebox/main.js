var audio = document.getElementById('audioTag');

var jukebox = {
  currentSong: 0,
  songs: [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3",
  ],

  play: function(){
    audio.play();
  },

  playsong: function(id){

    this.currentSong = id;
    audio.src = this.songs[this.currentSong];
    this.play();
  },


  pause: function(){
    audio.pause();
  },

  stop: function(){
    audio.pause();
    audio.currentTime = 0;
  },
  next: function() {
    this.currentSong++;
    this.currentSong %= this.songs.length;
    audio.src = this.songs[this.currentSong];
    this.play();
  }
};
