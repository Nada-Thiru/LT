const audio = [
  {
    audioSrc: "../../src/audio/words-audio/insects/01.wav",
    imageSrc: "../../src/img/words-img/insects/01.jpg",
    tamil: "எறும்பு",
    pronunciation: "Erummpu",
    english: "Ant"
  },

  {
    audioSrc: "../../src/audio/words-audio/insects/02.wav",
    imageSrc: "../../src/img/words-img/insects/02.jpg",
    tamil: "தேள்",
    pronunciation: "Thel",
    english: "Scorpion"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/03.wav",
    imageSrc: "../../src/img/words-img/insects/03.jpg",
    tamil: "புழு",
    pronunciation: "Pulu",
    english: "Worm"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/04.wav",
    imageSrc: "../../src/img/words-img/insects/04.jpg",
    tamil: "கரப்பான்பூச்சி ",
    pronunciation: "Karappanpoochchi",
    english: "Cockroach"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/05.wav",
    imageSrc: "../../src/img/words-img/insects/05.jpg",
    tamil: "தும்பி",
    pronunciation: "Thumpi",
    english: "Dragon fly"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/06.wav",
    imageSrc: "../../src/img/words-img/insects/06.jpg",
    tamil: "குளவி",
    pronunciation: "Kulavi",
    english: "Wasp"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/07.wav",
    imageSrc: "../../src/img/words-img/insects/07.jpg",
    tamil: "கறையான்",
    pronunciation: "Karaiyan",
    english: "Moth"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/08.wav",
    imageSrc: "../../src/img/words-img/insects/08.jpg",
    tamil: "வெட்டுக்கிளி ",
    pronunciation: "Veddikili",
    english: "Locust"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/09.wav",
    imageSrc: "../../src/img/words-img/insects/09.jpg",
    tamil: "ஈ",
    pronunciation: "E",
    english: "Fly"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/10.wav",
    imageSrc: "../../src/img/words-img/insects/10.jpg",
    tamil: "சிலந்தி",
    pronunciation: "Silanthi",
    english: "Spider"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/11.wav",
    imageSrc: "../../src/img/words-img/insects/11.jpg",
    tamil: "வண்ணத்துப்பூச்சி",
    pronunciation: "Vannathuppoochchi",
    english: "Butterfly"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/12.wav",
    imageSrc: "../../src/img/words-img/insects/12.jpg",
    tamil: "மூட்டைப்பூச்சி",
    pronunciation: "Mooddaipoochchi",
    english: "Bedbug"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/13.wav",
    imageSrc: "../../src/img/words-img/insects/13.jpg",
    tamil: "வண்டு",
    pronunciation: "Vandu",
    english: "Beetle"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/14.wav",
    imageSrc: "../../src/img/words-img/insects/14.jpg",
    tamil: "கொசு",
    pronunciation: "Kosu",
    english: "Mosquito"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/15.wav",
    imageSrc: "../../src/img/words-img/insects/15.jpg",
    tamil: "தேனீ",
    pronunciation: "Theni",
    english: "Bee"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/16.wav",
    imageSrc: "../../src/img/words-img/insects/16.jpg",
    tamil: "முயல்",
    pronunciation: "Muyal",
    english: "Rabbit"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/17.wav",
    imageSrc: "../../src/img/words-img/insects/17.jpg",
    tamil: "ஒட்டகம்",
    pronunciation: "Oddakam",
    english: "Camel"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/18.wav",
    imageSrc: "../../src/img/words-img/insects/18.jpg",
    tamil: "எருமை",
    pronunciation: "Erumai",
    english: "Buffalo"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/19.wav",
    imageSrc: "../../src/img/words-img/insects/19.jpg",
    tamil: "குரங்கு",
    pronunciation: "Kuranku",
    english: "Monkey"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/20.wav",
    imageSrc: "../../src/img/words-img/insects/20.jpg",
    tamil: "வரிக்குதிரை",
    pronunciation: "Varikkuthirai",
    english: "Zebra"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/21.wav",
    imageSrc: "../../src/img/words-img/insects/21.jpg",
    tamil: "சிறுத்தை",
    pronunciation: "Siruththai",
    english: "Leperd"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/22.wav",
    imageSrc: "../../src/img/words-img/insects/22.jpg",
    tamil: "நரி",
    pronunciation: "Nari",
    english: "Fox"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/23.wav",
    imageSrc: "../../src/img/words-img/insects/23.jpg",
    tamil: "ஒட்டகச்சிவிங்கி",
    pronunciation: "Oddakasivinki",
    english: "Giraffe"
  },
  {
    audioSrc: "../../src/audio/words-audio/insects/24.wav",
    imageSrc: "../../src/img/words-img/insects/24.jpg",
    tamil: "காண்டாமிருகம்",
    pronunciation: "Kaandaamirukam",
    english: "Rhinoceros"
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