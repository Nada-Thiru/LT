const audio = [
  {
    audioSrc: "../../src/audio/words-audio/shelters/01.wav",
    imageSrc: "../../src/img/words-img/shelters/01.jpg",
    tamil: "குடில்",
    pronunciation: "Kudil",
    english: "Hut"
  },

  {
    audioSrc: "../../src/audio/words-audio/shelters/02.wav",
    imageSrc: "../../src/img/words-img/shelters/02.jpg",
    tamil: "மாட்டுத்தொழுவம்",
    pronunciation: "Maddutholuvam",
    english: "Mattuttoluvam "
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/03.wav",
    imageSrc: "../../src/img/words-img/shelters/03.jpg",
    tamil: "புறாக்கூண்டு",
    pronunciation: "Purakkudu",
    english: "Pigeon's nest "
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/04.wav",
    imageSrc: "../../src/img/words-img/shelters/04.jpg",
    tamil: "தேன்கூடு",
    pronunciation: "ThenKoodu",
    english: "Honeycomb"
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/05.wav",
    imageSrc: "../../src/img/words-img/shelters/05.jpg",
    tamil: "மாளிகை",
    pronunciation: "Maalikai",
    english: "Palace"
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/06.wav",
    imageSrc: "../../src/img/words-img/shelters/06.jpg",
    tamil: "அரண்மனை",
    pronunciation: "Aranmanai",
    english: "Palace"
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/07.wav",
    imageSrc: "../../src/img/words-img/shelters/07.jpg",
    tamil: "சிறை",
    pronunciation: "Sirai",
    english: "Prison"
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/08.wav",
    imageSrc: "../../src/img/words-img/shelters/08.jpg",
    tamil: "குதிரைலாயம்",
    pronunciation: "Kuthirailajam",
    english: "Stables"
  },
  {
    audioSrc: "../../src/audio/words-audio/shelters/09.wav",
    imageSrc: "../../src/img/words-img/shelters/09.jpg",
    tamil: "ஆட்டுப்பட்டி",
    pronunciation: "Addupatty",
    english: "Sheepfold "
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