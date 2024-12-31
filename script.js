let count = 5;
let circleCount = document.querySelector("#count");
let countingTime = document.querySelector("#countingTime");
let squeeze = document.querySelector("#squeeze");
let circle = document.querySelector(".circle");
// setInterval(counting, 1000);
// setInterval(stopCounting, 5000);
let shutterLooping = document.querySelector(".shutterLooping");

let countSec;
function counting() {
  countSec = setInterval(() => {
    if (count <= 5) {
      count--;
    }
    circleCount.innerHTML = count;
  }, 1000);
}

let countSec2;
function stopCounting() {
  countSec2 = setInterval(() => {
    if (count <= 1) {
      count = 5;
    }
    circleCount.innerHTML = count;
  }, 5000);
}

counting();
stopCounting();

let countingRep;
let loopCount = 10;
function stopPlay1() {
  countingRep = setInterval(() => {
    if (loopCount <= 10) {
      loopCount--;
      countingTime.innerHTML = loopCount;
    }
    if (loopCount == 1) {
      clearInterval(countingRep);
      window.location = "anotherpage.html";
      console.log("gbj");
    }
  }, 10000);
}

stopPlay1();

let repeatAgain1;
function repeatAgain() {
  repeatAgain1 = setInterval(() => {
    if (loopCount <= 1) {
      loopCount = 10;
      countingTime.innerHTML = loopCount;
    }
  }, 10000);
}
repeatAgain();

let startCounging;
let rest = 1;
function stopPlay() {
  startCounging = setInterval(() => {
    if (rest == 1) {
      squeeze.innerHTML = "Rest";
      rest = 0;
      circle.classList.remove("cr");
    } else {
      squeeze.innerHTML = "Squeeze";
      playMusic();
      playVibra();
      rest = 1;
      circle.classList.add("cr");
    }
  }, 5000);
}
stopPlay();
circle.classList.add("cr");

var audio = new Audio("beep.mp3");
function playMusic() {
  audio.play();

}
playMusic();

function pauseMusic(){
  audio.muted = true; 
}



var audio2 = new Audio("vibra.mp3");
function pauseVibra() {
  audio2.muted = true;
}
function playVibra() {
  audio2.play();

}
playVibra();



let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
  shutterLooping.classList.remove("shutterloop");
  shutterLooping.classList.add("stopLoop");
  clearInterval(countingRep);
  clearInterval(startCounging);
  clearInterval(countSec);
  clearInterval(countSec2);
  // pauseMusic()
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  shutterLooping.classList.add("shutterloop");
  shutterLooping.classList.remove("stopLoop");
  stopPlay();
  stopPlay1();
  counting();
  stopCounting();
});
let speaker = document.querySelector("#speaker");

speaker.addEventListener("click", () => {
  speaker.style.display = "none";
  mute.style.display = "block";
  audio.muted = true
  document.getElementsByTagName("path")[1].style.fill = "black";
});
let mute = document.querySelector("#mute");
mute.addEventListener("click", () => {
  speaker.style.display = "block";
  mute.style.display = "none";
  audio.muted = false;
});

let vibrateButton = document.querySelector("#vibrateButton");
let vibra = 1;
vibrateButton.addEventListener("click", () => {
  if (vibra == 1) {
    navigator.vibrate(300);
    vibra = 0;
    document.getElementsByTagName("path")[4].style.fill = "black";
    audio2.muted = true;
   
  } else {
    vibra = 1;
    navigator.vibrate(0);
    document.getElementsByTagName("path")[4].style.fill = "pink";
    audio2.muted = false;
  }
});

// function vivration() {
//   if ("vibrate" in navigator) {
//     navigator.vibrate(300);
//     document.getElementsByTagName("path")[4].style.fill = "pink";
//     audio2.muted = false;
//   }
// }
