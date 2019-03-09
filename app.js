
function sizer () {
   var cover = document.getElementById('cover').style;
   var main = document.getElementById('main').clientHeight + 300;
   cover.height = main + 'px';
    
}
// sizer();
setTimeout(sizer, 100);
window.onresize = sizer;

// var p1 = document.getElementById('p1');
// var p2 = document.getElementById('p2');
// var p3 = document.getElementById('p3');
// var c1 = document.getElementsByClassName('c1');
// var c2 = document.getElementsByClassName('c2');
// var c3 = document.getElementsByClassName('c3');



// p1.addEventListener('click', function() {
//    c1.display = 'inline';
//    setTimeout(sizer, 100);
//    console.log(c1);
// });
// p2.addEventListener('click', function() {
//    c2.display = 'inline';
//    // setTimeout(sizer, 100);
//    console.log(c2);
// });
// // p3.addEventListener('click', function() {
// //    c3.style.display = 'inline';
// //    setTimeout(sizer, 100);
// // });
// console.log(c1);
// console.log(c2);