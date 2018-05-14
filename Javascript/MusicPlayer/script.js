window.addEventListener("load", initEvent);

var audio;

function initEvent(){
    audio = document.getElementById("audio");
    printSongs();
}

function printSongs(){
    var songList = document.getElementById("songList");
    // for(var i = 0; i < songsArray.length; i++){
    //     var li = document.createElement('li');
    //     li.innerHTML = songsArray[i].song_name;
    //     songList.appendChild(li);
    //     li.addEventListener("click", playSong);
    // }

    songsArray.forEach(function(obj){
        var li = document.createElement('li');
        li.setAttribute('title',obj.song_id);
        li.innerHTML = obj.song_name;
        songList.appendChild(li);
        li.addEventListener("click", playSong);
    })

}

function playSong(){
    // var songName = event.srcElement.innerHTML;
    var songId = event.srcElement.title;
    var songUrl;
    songsArray.forEach(function(obj){
        if(obj.song_id == songId){
            songUrl = obj.song_url;
            console.log(songUrl);
        }
    });
    audio.src = songUrl;
    audio.play()
}