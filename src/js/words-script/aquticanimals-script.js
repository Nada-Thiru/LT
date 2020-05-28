const audio = [
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/01.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/01.jpg",
      tamil: "நண்டு ",
      pronunciation: "Nandu",
      english: "நண்டு "
    },

    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/02.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/02.jpg",
      tamil: "முதலை  ",
      pronunciation: "Muthalai",
      english: "Crocodile"
    },
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/03.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/03.jpg",
      tamil: "தவளை ",
      pronunciation: "Thavalai",
      english: "Frog"
    },
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/04.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/04.jpg",
      tamil: "சிப்பி",
      pronunciation: "Sippi",
      english: "Oyster  "
    },
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/05.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/05.jpg",
      tamil: "சுறா   ",
      pronunciation: "Sura",
      english: "Shark"
    },
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/06.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/06.jpg",
      tamil: "ஆமை  ",
      pronunciation: "AAmai",
      english: "Tortoise  "
    },
    {
      audioSrc: "../../src/audio/words-audio/aquticanimals/07.wav",
      imageSrc: "../../src/img/words-img/aquticanimals/07.jpg",
      tamil: "திமிங்கலம் ",
      pronunciation: "Thimingalam",
      english: "Whale "
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