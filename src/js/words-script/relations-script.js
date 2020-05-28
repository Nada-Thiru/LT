const audio = [
    {
      audioSrc: "../../src/audio/words-audio/relations/01.wav",
      imageSrc: "../../src/img/words-img/relations/01.jpg",
      tamil: "அம்மா ",
      pronunciation: "Amma",
      english: "Mother"
    },

    {
      audioSrc: "../../src/audio/words-audio/relations/02.wav",
      imageSrc: "../../src/img/words-img/relations/02.jpg",
      tamil: "அப்பா",
      pronunciation: "Appa",
      english: "Father"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/03.wav",
      imageSrc: "../../src/img/words-img/relations/03.jpg",
      tamil: "தம்பி ",
      pronunciation: "Thampi",
      english: "Younger Brother"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/04.wav",
      imageSrc: "../../src/img/words-img/relations/04.jpg",
      tamil: "தங்கை",
      pronunciation: "Thankai",
      english: "Younger Sister"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/05.wav",
      imageSrc: "../../src/img/words-img/relations/05.jpg",
      tamil: "அக்கா  ",
      pronunciation: "Akka",
      english: "Elder Sister"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/06.wav",
      imageSrc: "../../src/img/words-img/relations/06.jpg",
      tamil: "அண்ணா ",
      pronunciation: "Anna",
      english: "Elder Brother"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/07.wav",
      imageSrc: "../../src/img/words-img/relations/07.jpg",
      tamil: "பாட்டி ",
      pronunciation: "Paddi",
      english: "Grandmother"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/08.wav",
      imageSrc: "../../src/img/words-img/relations/08.jpg",
      tamil: "பாட்டன் ",
      pronunciation:"Baaddan",
      english: "GrandFather"
    },          
    {
      audioSrc: "../../src/audio/words-audio/relations/09.wav",
      imageSrc: "../../src/img/words-img/relations/09.jpg",
      tamil: "மாமி",
      pronunciation: "Mami",
      english: "Auntie"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/10.wav",
      imageSrc: "../../src/img/words-img/relations/10.jpg",
      tamil: "சித்தி ",
      pronunciation: "Siththi",
      english: "Stepmother"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/11.wav",
      imageSrc: "../../src/img/words-img/relations/11.jpg",
      tamil: "சித்தப்பா ",
      pronunciation: "Siththappa",
      english: "Stepfather"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/12.wav",
      imageSrc: "../../src/img/words-img/relations/12.jpg",
      tamil: "மாமா  ",
      pronunciation: "Mama",
      english: "Ungle"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/13.wav",
      imageSrc: "../../src/img/words-img/relations/13.jpg",
      tamil: "அத்தை  ",
      pronunciation: "Aunt",
      english: "Kangaroo"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/14.wav",
      imageSrc: "../../src/img/words-img/relations/14.jpg",
      tamil: "மச்சான் ",
      pronunciation: "Kaluthai",
      english: "causin"
    },     
    {
      audioSrc: "../../src/audio/words-audio/relations/15.wav",
      imageSrc: "../../src/img/words-img/relations/15.jpg",
      tamil: "மச்சாள் ",
      pronunciation: "SemmariAdu",
      english: "causin"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/16.wav",
      imageSrc: "../../src/img/words-img/relations/16.jpg",
      tamil: "அண்ணி ",
      pronunciation: "Anni",
      english: "Sister in Law"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/17.wav",
      imageSrc: "../../src/img/words-img/relations/17.jpg",
      tamil: "அத்தான் ",
      pronunciation: "Aththtan",
      english: "Aunty"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/18.wav",
      imageSrc: "../../src/img/words-img/relations/18.jpg",
      tamil: "பெரியம்மா  ",
      pronunciation: "Periyamma",
      english: "Buffalo"
    },
    {
      audioSrc: "../../src/audio/words-audio/relations/19.wav",
      imageSrc: "../../src/img/words-img/relations/19.jpg",
      tamil: "பெரியப்பா  ",
      pronunciation: "Kuranku",
      english: "Uncle"
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