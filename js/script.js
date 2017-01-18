//queenB animation

var queenB = $('#QueenB'),
    i = 0,
    menuTmln = new TimelineLite(),line1 = $("#line-1"),
    line2 = $("#line-2"),
    line3 = $("#line-3"),
    menuContainer = $(".menu-container"),
    tmln = new TimelineLite(),
    txtTmln = new TimelineLite();

CustomEase.create("queenB", "M0,0 C0.502,0 0.479,0.611 0.588,0.816 0.686,1 0.818,1 1,1");

var queenBAnimation = function () {

    tmln.to(queenB, 2.5,{
        ease: "queenB", css:{top:"-100%"}})
        .set(queenB, {opacity: 0, css:{top:"120%"}})
        .to(queenB,1,{opacity:1})
        .to(queenB,1,{ease: Back.easeOut.config(1.2), css:{top:"85%"}}, "-=1");
}

queenB.click(function(){queenBAnimation()});

//menu button animation

var menuAnimation = function(){
    menuTmln.restart();
    
    menuTmln.add("start", 0).add("rotation", 0.3)
        .to(line1, 0.25, {y:10, opacity:0}, "start")
        .to(line3, 0.25, {y:-10}, "start")
        .to(line2, 0.25, {rotation: 45}, "rotation")
        .to(line3, 0.25, {rotation: -45}, "rotation")
        .to($(".hamburger-line"), 0.5, {css:{backgroundColor:"#FFDF00", boxShadow:"0 0 2px rgba(0,0,0,0)"}}, "rotation")
        .to(menuContainer, 0.5, {ease: Sine.easeInOut, css:{right: "0"}}, "start")
        i++;
}

var menuAnimationReverse = function (){
    menuTmln.reverse();
    i--;
}

$(".menu-container").click(function(){
     event.stopPropagation();
});

$(".menu").click(function(){
     event.stopPropagation();
    if (i == 0) {    
        menuAnimation();
    }
    else {
        menuAnimationReverse();
    }    
});

$(window).click(function() {
menuAnimationReverse();
});

//scroll menu appear on mobile

var $nav = $('.navbar');
var $win = $(window);
var winH = $win.height();   // Get the window height.

$win.on("scroll", function () {
    if ($(this).scrollTop() > winH ) {
        $nav.removeClass("navbar-invisible");
    } else {
        $nav.addClass("navbar-invisible");
    }
}).on("resize", function(){ // If the user resizes the window
   winH = $(this).height(); // you'll need the new height value
});

//bumbleType animation

txtTmln.to(".text-animation", 1, {x: 100});

    /*bezier: {
    type: "thru"
    , values: [{x:-51.5, y:-51.5}, {
            x:-51.5, y:-100},{
            x:50, y: -200}, {
            x:-50, y: -400}, {
            x:50, y: -600}, {
            x:-50, y: -800}, {
            x:-50, y: -1000}]
    , autoRotate: false
    , curviness: 2},*/
