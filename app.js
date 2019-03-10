
function sizer () {
   var cover = document.getElementById('cover').style;
   var main = document.getElementById('main').clientHeight + 120;
   cover.height = main + 'px';
    
}
// sizer();
setTimeout(sizer, 100);
window.onresize = sizer;

