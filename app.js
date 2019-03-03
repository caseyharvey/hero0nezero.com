function sizer () {
    cover = document.getElementById('cover').style;
    height = document.getElementById('main').scrollHeight + 200;
    cover.height = height + 'px';
}
sizer();
window.onresize = sizer;