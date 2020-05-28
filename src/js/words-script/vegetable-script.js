const audio = [
    {
      audioSrc: "../../src/audio/words-audio/vegetable/01.wav",
      imageSrc: "../../src/img/words-img/vegetable/01.jpg",
      tamil: "கத்தரிக்காய்",
      pronunciation: "Kaththarikkai",
      english: "Eggplant"
    },

    {
      audioSrc: "../../src/audio/words-audio/vegetable/02.wav",
      imageSrc: "../../src/img/words-img/vegetable/02.jpg",
      tamil: "புடலங்காய் ",
      pronunciation: "Pudalankai",
      english: "Snake Gourd"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/03.wav",
      imageSrc: "../../src/img/words-img/vegetable/03.jpg",
      tamil: "வெண்டைக்காய் ",
      pronunciation: "Vendakkai",
      english: "Ladyfinger"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/04.wav",
      imageSrc: "../../src/img/words-img/vegetable/04.jpg",
      tamil: "தக்காளி ",
      pronunciation: "Thakkali",
      english: "Tomato"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/05.wav",
      imageSrc: "../../src/img/words-img/vegetable/05.jpg",
      tamil: "மிளகாய் ",
      pronunciation: "Milakai",
      english: "Chilly"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/06.wav",
      imageSrc: "../../src/img/words-img/vegetable/06.jpg",
      tamil: "வெங்காயம் ",
      pronunciation: "Venkajam",
      english: "Onions"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/07.wav",
      imageSrc: "../../src/img/words-img/vegetable/07.jpg",
      tamil: "பாகற்காய் ",
      pronunciation: "Pakatkai",
      english: "Bitter gourd"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/08.wav",
      imageSrc: "../../src/img/words-img/vegetable/08.jpg",
      tamil: "வெள்ளரிக்காய் ",
      pronunciation:"Vellarikaai",
      english: "Cucumber"
    },          
    {
      audioSrc: "../../src/audio/words-audio/vegetable/09.wav",
      imageSrc: "../../src/img/words-img/vegetable/09.jpg",
      tamil: "தேங்காய் ",
      pronunciation: "Thenkaai",
      english: "Coconut"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/10.wav",
      imageSrc: "../../src/img/words-img/vegetable/10.jpg",
      tamil: "கோவா ",
      pronunciation: "Goa",
      english: "Goa"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/11.wav",
      imageSrc: "../../src/img/words-img/vegetable/11.jpg",
      tamil: "மரவள்ளிக்கிழங்கு",
      pronunciation: "MAravallikilanku",
      english: "Tapioca"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/12.wav",
      imageSrc: "../../src/img/words-img/vegetable/12.jpg",
      tamil: "உருளைக்கிழங்கு ",
      pronunciation: "Urulaikilanku",
      english: "Potato"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/13.wav",
      imageSrc: "../../src/img/words-img/vegetable/13.jpg",
      tamil: "பூசணிக்காய் ",
      pronunciation: "Poosanikkai",
      english: "Pumkin"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/14.wav",
      imageSrc: "../../src/img/words-img/vegetable/14.jpg",
      tamil: "சுரைக்காய் ",
      pronunciation: "Suraikkai",
      english: "Zucchini"
    },     
    {
      audioSrc: "../../src/audio/words-audio/vegetable/15.wav",
      imageSrc: "../../src/img/words-img/vegetable/15.jpg",
      tamil: "அவரைக்காய்",
      pronunciation: "Avarikkai",
      english: "Broadbeans"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/16.wav",
      imageSrc: "../../src/img/words-img/vegetable/16.jpg",
      tamil: "முருக்கங்காய்  ",
      pronunciation: "Murukkankay",
      english: "Murukkankay"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/17.wav",
      imageSrc: "../../src/img/words-img/vegetable/17.jpg",
      tamil: "கீரை ",
      pronunciation: "Keerai",
      english: "Spinach"
    },
    {
      audioSrc: "../../src/audio/words-audio/vegetable/18.wav",
      imageSrc: "../../src/img/words-img/vegetable/18.jpg",
      tamil: "கரட்",
      pronunciation: "Karat",
      english: "Carrot "
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