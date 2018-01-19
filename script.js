function togglerButton() {
  var element=document.getElementById('togglerList');
  element.classList.toggle('hidden');
}

//carousel
window.onload=function(){
    var dotIndex=1;
  //dots
  var anchors=document.getElementsByClassName('dot');
  for (var i=0;i<anchors.length;i++){
    anchors[i].setAttribute('index',i+1);
    anchors[i].onclick=function() {
      alert(this.getAttribute('index'));
    }
  }
  //nav-arrow
  var prev=document.getElementById('previous');
  var next=document.getElementById('next');
  var loopImage=document.getElementById('picture');
  var imageWidth=parseInt(loopImage.clientWidth/3);
  function animate(offset) {
    var newLeft = parseInt(loopImage.style.left) + offset;
    loopImage.style.left = newLeft + 'px';
    if(newLeft<-imageWidth*2){
      loopImage.style.left = -0 + 'px';
    }
    if(newLeft>0){
      loopImage.style.left = -imageWidth*2 + 'px';
    }
  }
  next.onclick=function(){
    animate(-imageWidth);
    if (dotIndex>2) {
      dotIndex=1;
      anchors[dotIndex-1].classList.add('active');
      anchors[dotIndex+1].classList.remove('active');
    }
    else{
      anchors[dotIndex-1].classList.remove('active');
      anchors[dotIndex].classList.add('active');
      dotIndex++;
    }
  }
  prev.onclick=function(){
    animate(imageWidth);
    if (dotIndex==1) {
      dotIndex=3;
      anchors[0].classList.remove('active');
      anchors[2].classList.add('active');
    } else {
      dotIndex--;
      anchors[dotIndex-1].classList.add('active');
      anchors[dotIndex].classList.remove('active');
    }
  }
  // phase
  var container = document.getElementById('carousel1');
  function stop() {
    clearInterval(timer);
  }
  container.onmouseover = stop;
  container.onmouseout = play;
}

//auto display
var timer;
function play() {
    timer = setInterval(function () {
        next.onclick()
    }, 1500)
}
play();
