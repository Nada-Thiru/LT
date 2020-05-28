const audio = [
    {
      audioSrc: "../../src/audio/words-audio/jobs/01.wav",
      imageSrc: "../../src/img/words-img/jobs/01.jpg",
      tamil: "ஆசிரியர் ",
      pronunciation: "Asiriyar",
      english: "Teacher "
    },

    {
      audioSrc: "../../src/audio/words-audio/jobs/02.wav",
      imageSrc: "../../src/img/words-img/jobs/02.jpg",
      tamil: "வைத்தியர் ",
      pronunciation: "Vaiththiyar",
      english: "doctor "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/03.wav",
      imageSrc: "../../src/img/words-img/jobs/03.jpg",
      tamil: "தாதி ",
      pronunciation: "Thaathi",
      english: "nurse "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/04.wav",
      imageSrc: "../../src/img/words-img/jobs/04.jpg",
      tamil: "வாகனஓட்டுனர் ",
      pronunciation: "VakanaOddunar",
      english: "driver "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/05.wav",
      imageSrc: "../../src/img/words-img/jobs/05.jpg",
      tamil: "வடிவமைப்பாளர்  ",
      pronunciation: "Vadivamaipalar",
      english: "designer "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/06.wav",
      imageSrc: "../../src/img/words-img/jobs/06.jpg",
      tamil: "ஊழியர் ",
      pronunciation: "Uliyar",
      english: "employee "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/07.wav",
      imageSrc: "../../src/img/words-img/jobs/07.jpg",
      tamil: "அமைச்சர் ",
      pronunciation: "AadAmachchar",
      english: "minister "
    },
    {
      audioSrc: "../../src/audio/words-audio/jobs/08.wav",
      imageSrc: "../../src/img/words-img/jobs/08.jpg",
      tamil: "ஜனாதிபதி  ",
      pronunciation:"Janathipathi",
      english: "Jumb"
    },          
    {
      audioSrc: "../../src/audio/words-audio/jobs/09.wav",
      imageSrc: "../../src/img/words-img/jobs/09.jpg",
      tamil: "காவலாளர் ",
      pronunciation: "Kavalar",
      english: "security guard"
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