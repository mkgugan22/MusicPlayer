let progress= document.getElementById("progress");
let song= document.getElementById("song");
let ctrlIcon= document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max= song.duration;
    progress.value=song.currentTime; //we have make the current time duration of song
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
//inorder to change and update the seek bar while song is playing 
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
// to seek and play that particular portion
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}