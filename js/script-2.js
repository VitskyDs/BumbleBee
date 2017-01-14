var queenB = $('#QueenB')
    , tmln = new TimelineLite({paused: true});

CustomEase.create("queenB", "M0,0 C0.502,0 0.479,0.611 0.588,0.816 0.686,1 0.818,1 1,1");

var queenBFunction = function (){
    queenB.style.top = "100%"
}

queenB.click(function () {
    tmln.play();
});

tmln.to(queenB, 2.5,{ease: "queenB", y: -900})
    .set(queenB, {opacity: 0})
    .to(queenB, 0.1,{y:100})
    .to(queenB,1,{y:-51, opacity:1, onComplete: restart});


/*
ease: "queenB", 

tl.to(queenB, 10, {
    bezier: {
        type: "thru"
        , values: [{
                x: 0
                , y: -400
        }, {
                x: 200
                , y: -200
        }, {
                x: -200
                , y: -500
        }, {
                x: -250
                , y: -100
        }, {
                x: 0
                , y: -300
        }, {
                x: 0
                , y: -800
            }
        ]
        , autoRotate: false
        , curviness: 2
    }
    , ease: Power1.easeOut
    , repeat: 0
});*/