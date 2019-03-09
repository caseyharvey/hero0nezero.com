
function sizer () {
   var cover = document.getElementById('cover').style;
   var main = document.getElementById('main').clientHeight + 300;
   cover.height = main + 'px';
    console.log(main);
    console.log(document.getElementById('main').offsetHeight + 200);
}
// sizer();
setTimeout(sizer, 100);
window.onresize = sizer;
