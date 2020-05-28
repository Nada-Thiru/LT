const audio = [
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/01.wav",
      imageSrc: "../../src/img/words-img/bodyparts/01.jpg",
      tamil: "கை ",
      pronunciation: "Kai",
      english: "Hand"
    },

    {
      audioSrc: "../../src/audio/words-audio/bodyparts/02.wav",
      imageSrc: "../../src/img/words-img/bodyparts/02.jpg",
      tamil: "கால் ",
      pronunciation: "Kaal",
      english: "Leg"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/03.wav",
      imageSrc: "../../src/img/words-img/bodyparts/03.jpg",
      tamil: "வாய் ",
      pronunciation: "Vai",
      english: "Mouth"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/04.wav",
      imageSrc: "../../src/img/words-img/bodyparts/04.jpg",
      tamil: "மூக்கு ",
      pronunciation: "Mookku",
      english: "Nose"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/05.wav",
      imageSrc: "../../src/img/words-img/bodyparts/05.jpg",
      tamil: "விரல்  ",
      pronunciation: "Viral",
      english: "Finger"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/06.wav",
      imageSrc: "../../src/img/words-img/bodyparts/06.jpg",
      tamil: "தலை ",
      pronunciation: "Thalai",
      english: "Head"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/07.wav",
      imageSrc: "../../src/img/words-img/bodyparts/07.jpg",
      tamil: "கண் ",
      pronunciation: "Kan",
      english: "Eye"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/08.wav",
      imageSrc: "../../src/img/words-img/bodyparts/08.jpg",
      tamil: "நிகம் ",
      pronunciation:"Nikam",
      english: "Nail"
    },          
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/09.wav",
      imageSrc: "../../src/img/words-img/bodyparts/09.jpg",
      tamil: "பாதம்  ",
      pronunciation: "Patham",
      english: "Feet"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/10.wav",
      imageSrc: "../../src/img/words-img/bodyparts/10.jpg",
      tamil: "நாக்கு ",
      pronunciation: "Nakku",
      english: "Tongue"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/11.wav",
      imageSrc: "../../src/img/words-img/bodyparts/11.jpg",
      tamil: "கழுத்து ",
      pronunciation: "Kaluththu",
      english: "Neck"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/12.wav",
      imageSrc: "../../src/img/words-img/bodyparts/12.jpg",
      tamil: "தோல் ",
      pronunciation: "Thool",
      english: "Leather"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/13.wav",
      imageSrc: "../../src/img/words-img/bodyparts/13.jpg",
      tamil: "தலைமுடி  ",
      pronunciation: "Thalaimudi",
      english: "Hair"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/14.wav",
      imageSrc: "../../src/img/words-img/bodyparts/14.jpg",
      tamil: "நெற்றி ",
      pronunciation: "Netti",
      english: "Forehead"
    },     
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/15.wav",
      imageSrc: "../../src/img/words-img/bodyparts/15.jpg",
      tamil: "இமை  ",
      pronunciation: "Imai",
      english: "Blink"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/16.wav",
      imageSrc: "../../src/img/words-img/bodyparts/16.jpg",
      tamil: "உதடு ",
      pronunciation: "uthadu",
      english: "Lip"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/17.wav",
      imageSrc: "../../src/img/words-img/bodyparts/17.jpg",
      tamil: "பல் ",
      pronunciation: "pal",
      english: "Tooth"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/18.wav",
      imageSrc: "../../src/img/words-img/bodyparts/18.jpg",
      tamil: "தோள்மூட்டு  ",
      pronunciation: "Tholmooddu",
      english: "Shoulder repair"
    },
    {
      audioSrc: "../../src/audio/words-audio/bodyparts/19.wav",
      imageSrc: "../../src/img/words-img/bodyparts/19.jpg",
      tamil: "வயிறு ",
      pronunciation: "Vayiru",
      english: "Stomach"
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