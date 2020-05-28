const audio = [
    {
      audioSrc: "../../src/audio/words-audio/weapons/01.wav",
      imageSrc: "../../src/img/words-img/weapons/01.jpg",
      tamil: "அம்பு   ",
      pronunciation: "Ampu",
      english: "arrow "
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/02.wav",
      imageSrc: "../../src/img/words-img/weapons/02.jpg",
      tamil: "துப்பாக்கி",
      pronunciation: "Thuppakki",
      english: "Gun "
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/03.wav",
      imageSrc: "../../src/img/words-img/weapons/03.jpg",
      tamil: "வெடிகுண்டு  ",
      pronunciation: "Panguni",
      english: "Bomb"
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/04.wav",
      imageSrc: "../../src/img/words-img/weapons/04.jpg",
      tamil: "குண்டு",
      pronunciation: "Kundu",
      english: "Stew "
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/05.wav",
      imageSrc: "../../src/img/words-img/weapons/05.jpg",
      tamil: "கத்தி ",
      pronunciation: "Kaththi",
      english: "Knife "
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/06.wav",
      imageSrc: "../../src/img/words-img/weapons/06.jpg",
      tamil: "வாள்",
      pronunciation: "Vaal",
      english: "sword "
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/07.wav",
      imageSrc: "../../src/img/words-img/weapons/07.jpg",
      tamil: "கைக்குண்டு  ",
      pronunciation: "Kaikundu",
      english: "Grenade"
    },
    {
      audioSrc: "../../src/audio/words-audio/weapons/08.wav",
      imageSrc: "../../src/img/words-img/weapons/08.jpg",
      tamil: "ஈட்டி",
      pronunciation:"Eddi",
      english: "Spear "
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