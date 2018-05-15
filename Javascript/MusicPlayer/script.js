window.addEventListener("load", initEvent);

var audio;
var slider;
function initEvent(){
    audio = document.getElementById("audio");
    slider = document.getElementById("slider");
    slider.addEventListener("click",seekSong);
    document.getElementById("playSong").addEventListener("click",startSong);
    document.getElementById("pauseSong").addEventListener("click",pauseSong);
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
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        span.setAttribute('title',obj.song_id);
        var play_list_btn = document.createElement("button");
        play_list_btn.innerHTML = "Add to Playlist";
        play_list_btn.className = 'btn btn-primary playList_btn';
        li.appendChild(span);
        li.appendChild(play_list_btn);
        songList.appendChild(li);
        span.addEventListener("click", playSong);
        play_list_btn.addEventListener("click",addSong);
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
    audio.play();
    setTimeout(function(){
        slider.max = audio.duration;
    },100);
    setInterval(function(){
        slider.value = audio.currentTime;
    },1000);
}

function seekSong(){
    audio.currentTime = slider.value;
}

function addSong(){
    var ul = document.getElementById("playList")
    var song_to_add = event.srcElement.parentElement;
    // console.log(li);
    var li = document.createElement("li");
    li.innerHTML = song_to_add.innerHTML;
    console.log(li.children);
    var span = li.children[0];
    var btn = li.children[1];
    // console.log(btn);
    btn.innerHTML = "Delete Song";
    ul.appendChild(li);
    btn.addEventListener("click",deleteSong);
    span.addEventListener("click",playSong);
}

function deleteSong(){
    var li = event.srcElement.parentElement;
    li.style.display = 'none';
}

function startSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}