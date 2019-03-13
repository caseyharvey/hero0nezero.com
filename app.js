


var cover = document.getElementById('cover');
var mainw = document.querySelector('body');
var cw ;
function sizer () {
  
   if (cw !== mainw.clientWidth) {

      cover.classList.remove('aniback');
      var main =  document.getElementById('main').scrollHeight +100;
      cover.style.height = main + 'px';
      cover.classList.add('aniback');
      cw = mainw.clientWidth;
      
   }
   
}

// sizer();
setTimeout(sizer,200);
window.onresize = sizer;
window.addEventListener("orientationchange", function () {
   sizer();
}, false);