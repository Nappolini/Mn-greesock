$( document ).ready(function() {

var title = $(".header-title")
var headerIntro = $(".header-intro")
var myWork = $(".my-work")
var headerNav = $(".header-nav")
var moreOne = $(".one")
var moreTwo = $(".two")
var moreThree = $(".three")
// Title auto Alpha
  TweenLite.to(title, 5, {
    ease: Power1.easeIn,
    autoAlpha:1,
    delay: 3
  });
//
// Header title intro auto Alpha
  TweenLite.to(headerIntro, 3, {
    ease: Power1.easeIn,
    autoAlpha:1,
    delay: 7
  });

// My work auto Alpha
  TweenLite.to(myWork, 3, {
    ease: Power1.easeIn,
    autoAlpha:1,
    delay: 9
  });

// Header Nav auto Alpha
  TweenLite.to(headerNav, 3, {
    ease: Power1.easeIn,
    autoAlpha:1,
    delay: 8
  });

  TweenLite.to(moreOne, 3, {
    ease: Power1.easeIn,
    color:"#fc4fb1",
    autoAlpha:1,
    delay: 5,
    repeat:-1
  });

  TweenLite.to(moreTwo, 3, {
    ease: Power1.easeIn,
    color:"#ffb739",
    autoAlpha:1,
    delay: 5,
    repeat:5
  });

  TweenLite.to(moreThree, 3, {
    ease: Power1.easeIn,
    color:"#3de4a3",
    autoAlpha:1,
    delay: 5,
    repeat:5
  });


// // arrow one color
//   TweenLite.To(moreOne, 1, {
//     // ease: Power1.easeIn,
//     color:"#fc4fb1",
//     autoAlpha: 1
//   });
//
// // arrow one color
//   TweenLite.To(moreTwo, 1, {
//     // ease: Power1.easeIn,
//     color : rgb(255, 183, 57),
//     // autoAlpha: 1,
//     // delay:1
//   });
//
// // arrow one color
//   TweenLite.To(moreThree, 1, {
//     // ease: Power1.easeIn,
//     color :  rgb(61, 228, 163),
//     // autoAlpha: 1,
//     // delay:2
//   });


});
