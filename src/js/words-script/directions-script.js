const audio = [
  {
    audioSrc: "../../src/audio/words-audio/directions/01.wav",
    imageSrc: "../../src/img/words-img/directions/01.jpg",
    tamil: "வடக்கு",
    pronunciation: "Vadakku",
    english: "North"
  },

  {
    audioSrc: "../../src/audio/words-audio/directions/02.wav",
    imageSrc: "../../src/img/words-img/directions/02.jpg",
    tamil: "கிழக்கு",
    pronunciation: "Kilakku",
    english: "East"
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/03.wav",
    imageSrc: "../../src/img/words-img/directions/03.jpg",
    tamil: "தெற்கு",
    pronunciation: "Thetku",
    english: "South"
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/04.wav",
    imageSrc: "../../src/img/words-img/directions/04.jpg",
    tamil: "மேற்கு",
    pronunciation: "Mettku",
    english: "West "
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/05.wav",
    imageSrc: "../../src/img/words-img/directions/05.jpg",
    tamil: "வடகிழக்கு",
    pronunciation: "Vadakilakku",
    english: "Northeast"
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/06.wav",
    imageSrc: "../../src/img/words-img/directions/06.jpg",
    tamil: "தென்கிழக்கு",
    pronunciation: "Thenkilakku",
    english: "Southeast"
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/07.wav",
    imageSrc: "../../src/img/words-img/directions/07.jpg",
    tamil: "தென்மேற்கு",
    pronunciation: "Thenkilakku",
    english: "Southwest"
  },
  {
    audioSrc: "../../src/audio/words-audio/directions/08.wav",
    imageSrc: "../../src/img/words-img/directions/08.jpg",
    tamil: "வடமேற்கு",
    pronunciation: "Vadametku",
    english: "Northwest"
  }
]
var i = 0;

function mySlide(param) {
  if (param === 'next') {
    i++;
    if (i === audio.length) { i = audio.length - 1; }
  } else {
    i--;
    if (i < 0) { i = 0; }
  }

  document.getElementById("player").setAttribute('src', audio[i].audioSrc);
  document.getElementById("img").src = audio[i].imageSrc;
  document.getElementById("tamil").innerHTML = audio[i].tamil
  document.getElementById("pronunciation").innerHTML = audio[i].pronunciation
  document.getElementById("english").innerHTML = audio[i].english

  if (i == audio.length - 1) {
    document.getElementById('next').classList.add("hide")
  }
  else if (i == 0) {
    document.getElementById('back').classList.add("hide")
  }
  else if (i != audio.length - 1 || i != 0) {
    document.getElementById('next').classList.remove("hide")
    document.getElementById('back').classList.remove("hide")
  }
}