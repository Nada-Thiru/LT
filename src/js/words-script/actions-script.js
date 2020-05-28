const audio = [
    {
      audioSrc: "../../src/audio/words-audio/actions/01.wav",
      imageSrc: "../../src/img/words-img/actions/01.jpg",
      tamil: "நட ",
      pronunciation: "nada",
      english: "Walk"
    },

    {
      audioSrc: "../../src/audio/words-audio/actions/02.wav",
      imageSrc: "../../src/img/words-img/actions/02.jpg",
      tamil: "இரு ",
      pronunciation: "Iru",
      english: "Sit"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/03.wav",
      imageSrc: "../../src/img/words-img/actions/03.jpg",
      tamil: "போ",
      pronunciation: "Poo",
      english: "Go"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/04.wav",
      imageSrc: "../../src/img/words-img/actions/04.jpg",
      tamil: "வா",
      pronunciation: "vaa",
      english: "Come"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/05.wav",
      imageSrc: "../../src/img/words-img/actions/05.jpg",
      tamil: "கதை",
      pronunciation: "Kathi",
      english: "Talk"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/06.wav",
      imageSrc: "../../src/img/words-img/actions/06.jpg",
      tamil: "எழும்பு ",
      pronunciation: "Elumpu",
      english: "Wakeup"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/07.wav",
      imageSrc: "../../src/img/words-img/actions/07.jpg",
      tamil: "ஓடு",
      pronunciation: "Odu",
      english: "Run"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/08.wav",
      imageSrc: "../../src/img/words-img/actions/08.jpg",
      tamil: "பாய்",
      pronunciation:"paai",
      english: "Jumb"
    },          
    {
      audioSrc: "../../src/audio/words-audio/actions/09.wav",
      imageSrc: "../../src/img/words-img/actions/09.jpg",
      tamil: "அடி",
      pronunciation: "Adi",
      english: "Slap"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/10.wav",
      imageSrc: "../../src/img/words-img/actions/10.jpg",
      tamil: "தொடு",
      pronunciation: "Todu",
      english: "Touch"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/11.wav",
      imageSrc: "../../src/img/words-img/actions/11.jpg",
      tamil: "பார் ",
      pronunciation: "Paar",
      english: "See"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/12.wav",
      imageSrc: "../../src/img/words-img/actions/12.jpg",
      tamil: "எழுது",
      pronunciation: "Eluthu",
      english: "Write"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/13.wav",
      imageSrc: "../../src/img/words-img/actions/13.jpg",
      tamil: "வாசி",
      pronunciation: "vaasi",
      english: "Read"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/14.wav",
      imageSrc: "../../src/img/words-img/actions/14.jpg",
      tamil: "அழு",
      pronunciation: "Alu",
      english: "Cry"
    },     
    {
      audioSrc: "../../src/audio/words-audio/actions/15.wav",
      imageSrc: "../../src/img/words-img/actions/15.jpg",
      tamil: "சிரி",
      pronunciation: "Siri",
      english: "Smile"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/16.wav",
      imageSrc: "../../src/img/words-img/actions/16.jpg",
      tamil: "நடி ",
      pronunciation: "Nadi",
      english: "Act"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/17.wav",
      imageSrc: "../../src/img/words-img/actions/17.jpg",
      tamil: "பாடு",
      pronunciation: "paadu",
      english: "Sing"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/18.wav",
      imageSrc: "../../src/img/words-img/actions/18.jpg",
      tamil: "வேலை",
      pronunciation: "Velai",
      english: "Work"
    },
    {
      audioSrc: "../../src/audio/words-audio/actions/19.wav",
      imageSrc: "../../src/img/words-img/actions/19.jpg",
      tamil: "செய்",
      pronunciation: "sei",
      english: "Do"
    },
    {
        audioSrc: "../../src/audio/words-audio/actions/20.wav",
        imageSrc: "../../src/img/words-img/actions/20.jpg",
        tamil: "மிதி",
        pronunciation: "Mithi",
        english: "Pedal"
      },      
{
      audioSrc: "../../src/audio/words-audio/actions/19.wav",
      imageSrc: "../../src/img/words-img/actions/19.jpg",
      tamil: "ஆடு",
      pronunciation: "Palaappalam",
      english: "Dance"
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