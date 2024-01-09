tanager.onmouseenter = function () {
    gsap.fromTo("#tanager", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
tanager.onmouseleave = function () {
    gsap.fromTo("#tanager", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
jungle.onmouseenter = function () {
    gsap.fromTo("#jungle", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
jungle.onmouseleave = function () {
    gsap.fromTo("#jungle", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
parrot.onmouseenter = function () {
    gsap.fromTo("#parrot", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
parrot.onmouseleave = function () {
    gsap.fromTo("#parrot", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
owl.onmouseenter = function () {
    gsap.fromTo("#owl", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
owl.onmouseleave = function () {
    gsap.fromTo("#owl", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
quezal.onmouseenter = function () {
    gsap.fromTo("#quezal", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
quezal.onmouseleave = function () {
    gsap.fromTo("#quezal", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
lyre.onmouseenter = function () {
    gsap.fromTo("#lyre", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
lyre.onmouseleave = function () {
    gsap.fromTo("#lyre", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
redbird.onmouseenter = function () {
    gsap.fromTo("#redbird", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
redbird.onmouseleave = function () {
    gsap.fromTo("#redbird", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}
paradise.onmouseenter = function () {
    gsap.fromTo("#paradise", {

        filter: "saturate(0)",

    },
        {
            filter: "saturate(1)"
        }
    );
}
paradise.onmouseleave = function () {
    gsap.fromTo("#paradise", {

        filter: "saturate(1)",

    },
        {
            filter: "saturate(0)"
        }
    );
}



gsap.to("#jungle", {
    delay: 0.2,
    duration: 0.6,
    rotate: 13,



});
gsap.to("#owl", {
    delay: 0.1,
    duration: 0.6,
    rotate: 20,


});
gsap.to("#paradise", {
    delay: 0.3,
    duration: 0.6,
    rotate: -10,



});
gsap.to("#lyre", {
    delay: 0.4,
    duration: 0.6,
    rotate: 13,


});
gsap.to("#parrot", {
    delay: 0.3,
    duration: 0.6,
    rotate: 11,

});
gsap.to("#redbird", {
    delay: 0.1,
    duration: 0.6,
    rotate: -10,


});
gsap.to("#tanager", {
    delay: 0.4,
    duration: 0.6,
    rotate: -14,


});
gsap.to("#quezal", {
    delay: 0.2,
    duration: 0.6,
    rotate: 13,


});


