
function sizer () {
   cover = document.getElementById('cover').style;
   height = main.scrollHeight + 200;
   cover.height = height + 'px';
    
}
sizer();
window.onresize = sizer;
