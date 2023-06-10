let songs = []

let audioElement = new Audio("music_images/Clarx & Harddope - Castle [NCS Release].mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

// audioElement.play();

// Handle play/pause click

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

