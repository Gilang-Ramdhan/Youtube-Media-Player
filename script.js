
$(document).ready(function(){

  fileinput = $('.upload:eq(0)')[0];

  fileinput.addEventListener('change',function(event){
    imagesrc = URL.createObjectURL(event.target.files[0]);;

    document.getElementById('video').src = imagesrc;
    console.log(imagesrc);

    getVideo.pause();
    getVideo.play();
  })

  console.log('test');

  var createStyleinHead = document.createElement("style");
createStyleinHead.innerHTML = "#duration #timeline{width:0%;background-color:red; height:3px;float:left;transition:0.2s;} #slider{position: relative;width:0%;height:0px;background-color:red;bottom:2px;left:0%;border-radius:10px;}";

document.head.appendChild(createStyleinHead);

let getVideo = document.getElementById("video");
let getVideoCover = document.getElementById("videocover");
let getVideoBtn = document.getElementsByClassName("icon-container");
let getVideoDuration = document.getElementById("duration");
let getDuration = document.getElementById("icon-duration");
let getButton = document.getElementsByClassName("icon-container");
let getButtonIMG = document.getElementsByClassName("icon-img");
let getAutoPlay = document.getElementById("check");
let getAutoPlaySlider = document.getElementById("slider-autoplay");

let ongoing = 0;
let played = 0;
let mousePos = 0;
let DurationWidth = 0;
let bollean = false;
let sec = 0;
let min = 0;
let going2 = 0;
let played2 = 0;
let hour = 0;
let hour2,minute2,sec2 = 0;
let kumpulteks = '';

function replace(){
  sec2 = (getVideo.duration - 60 * parseInt(getVideo.duration / 60)); 
  min2 = (getVideo.duration / 60 - 60 * parseInt((getVideo.duration / 60) / 60));
  hour2 = ((getVideo.duration / 60) / 60);
  kumpulteks = getDuration.innerHTML + " / ";
  if(parseInt(hour2) == 0){
    
  }else if (parseInt(hour2) !== 0){
    kumpulteks = tambahhour(parseInt(hour2),kumpulteks);
  }
  kumpulteks = tambahmin(parseInt(min2),kumpulteks);
  kumpulteks = tambahsec(parseInt(sec2),kumpulteks)
  getDuration.innerHTML = kumpulteks;
}
//Menjalankan Bar Merah

getVideo.addEventListener('timeupdate',function(e){
   kumpulteks = "";
   played = ongoing;
   played2 = going2;

   //hitung detik dan menit
   sec = getVideo.currentTime - 60 * parseInt(getVideo.currentTime/60);
   min = getVideo.currentTime / 60 - 60 * parseInt(getVideo.currentTime / 60 /60)
   hour = getVideo.currentTime / 60 / 60;

   sec2 = (getVideo.duration - 60 * parseInt(getVideo.duration / 60)); 
   hour2 = ((getVideo.duration / 60) / 60);
   min2 = (getVideo.duration / 60 - 60 * parseInt((getVideo.duration / 60) / 60));

   if(parseInt(hour2) !== 0){
      kumpulteks = tambahhour(parseInt(hour),kumpulteks);
      kumpulteks = tambahmin(parseInt(min),kumpulteks);
      kumpulteks = tambahsec(parseInt(sec),kumpulteks);
      kumpulteks = kumpulteks + " / ";
      kumpulteks = tambahhour(parseInt(hour2),kumpulteks);
      kumpulteks = tambahmin(parseInt(min2),kumpulteks);
      kumpulteks = tambahsec(parseInt(sec2),kumpulteks)
      getDuration.innerHTML = kumpulteks;
   }else if(parseInt(hour2) == 0){
    kumpulteks = tambahmin(parseInt(min),kumpulteks);
    kumpulteks = tambahsec(parseInt(sec),kumpulteks)
    kumpulteks = kumpulteks + " / ";
    kumpulteks = tambahmin(parseInt(min2),kumpulteks);
    kumpulteks = tambahsec(parseInt(sec2),kumpulteks)
    getDuration.innerHTML = kumpulteks;
   }
   
    ongoing = getVideo.currentTime / getVideo.duration;
    ongoing = ongoing * 100;
    going2 = ongoing - 0.7;

    createStyleinHead.innerHTML = createStyleinHead.innerHTML.replace("width:"+played+"%;","width:"+ongoing+"%;")
   if (bollean == false){
    createStyleinHead.innerHTML = createStyleinHead.innerHTML.replace("left:"+played+"%;","left:"+going2+"%;")
    bollean = true;
   }else{
    createStyleinHead.innerHTML = createStyleinHead.innerHTML.replace("left:"+played2+"%;","left:"+going2+"%;")
   }
   
   if(getVideo.currentTime == getVideo.duration){
    getVideo.pause();
    getButtonIMG[0].src = "icon/YTB-Play.png";
    play = false;
   }

})

//=========================
//Gunanya untuk seleksi durasi video.

getVideoDuration.addEventListener("mousedown",function(e){
  console.log(e.layerX - 10);
  if(e.target == document.getElementById("slider")){
  }
  else if(e.target == document.getElementById("timeline")){
    getVideo.currentTime = ((e.layerX - 10) / (getVideoDuration.offsetWidth)) * getVideo.duration;
  }else{
    getVideo.currentTime = ((e.layerX - 10) / (getVideoDuration.offsetWidth)) * getVideo.duration;
  }
   
})
let play = false;
getButton[0].addEventListener('mousedown',function(){
  console.log("test");
  videoplay();
})

function videoplay(){
  if(play == false){
    getVideo.play();
    getButtonIMG[0].src = "icon/YTB-Pause.png";
    play = true;
  }else{
    getVideo.pause();
    getButtonIMG[0].src = "icon/YTB-Play.png";
    play = false;
  }
}

let getAutoPlayLine = document.getElementById("line");

getAutoPlay.addEventListener("mousedown",function(e){
    if(getAutoPlaySlider.classList.contains("autoplay-active")){
      getAutoPlaySlider.classList.remove("autoplay-active");
      getAutoPlaySlider.classList.add("autoplay-notactive");
      getAutoPlayLine.classList.remove("autoplay-line-active");
      getAutoPlayLine.classList.add("autoplay-line-notactive");
    }else{
      getAutoPlaySlider.classList.remove("autoplay-notactive");
      getAutoPlaySlider.classList.add("autoplay-active");
      getAutoPlayLine.classList.remove("autoplay-line-notactive");
      getAutoPlayLine.classList.add("autoplay-line-active");
    }
    
})

window.addEventListener("keydown",function(e){
 
  if(e.key == 'p'){
    videoplay();
  }
  
  if(e.key == "ArrowRight"){
    getVideo.currentTime = getVideo.currentTime + 1;
  }else if (e.key == "ArrowLeft"){
    getVideo.currentTime = getVideo.currentTime - 1;
  }

})

//Function
function tambahmin(min,kumpulteks){
  if(min < 10){
    kumpulteks = kumpulteks +"0"+ min;
   }else if(min == 0){
    kumpulteks = kumpulteks +"00";
   }else{
    kumpulteks = kumpulteks + min;
   }
   return kumpulteks;
}

function tambahhour(hour,kumpulteks){
  if(hour < 10){
    kumpulteks = kumpulteks + "0"+ hour + ":";
   }else{
    kumpulteks = kumpulteks + hour + ":";
   }
   return kumpulteks;
}

function tambahsec(sec,kumpulteks){
  if(sec < 10){
    kumpulteks = kumpulteks + ':' +"0"+ sec;
   }else{
    kumpulteks = kumpulteks + ':' + sec;
   }
   return kumpulteks;
}

})

