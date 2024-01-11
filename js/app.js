/* variable pour modifier la saturation de l'image au survol*/
/* on part d'une image avec une saturation 0 pour une image avec une saturation 1 au survol*/
const animationFrom = { filter: "saturate(1)", }
const animationTo = { filter: "saturate(0)" }

tanager.onmouseenter = function () {
    gsap.fromTo("#tanager", animationTo, animationFrom)
}
tanager.onmouseleave = function () {
    gsap.fromTo("#tanager", animationFrom, animationTo)
}
lyre.onmouseenter = function () {
    gsap.fromTo("#lyre", animationTo, animationFrom)
}
lyre.onmouseleave = function () {
    gsap.fromTo("#lyre", animationFrom, animationTo)
}
owl.onmouseenter = function () {
    gsap.fromTo("#owl", animationTo, animationFrom)
}
owl.onmouseleave = function () {
    gsap.fromTo("#owl", animationFrom, animationTo)
}
jungle.onmouseenter = function () {
    gsap.fromTo("#jungle", animationTo, animationFrom)
}
jungle.onmouseleave = function () {
    gsap.fromTo("#jungle", animationFrom, animationTo)
}
redbird.onmouseenter = function () {
    gsap.fromTo("#redbird", animationTo, animationFrom)
}
redbird.onmouseleave = function () {
    gsap.fromTo("#redbird", animationFrom, animationTo)
}
quezal.onmouseenter = function () {
    gsap.fromTo("#quezal", animationTo, animationFrom)
}
quezal.onmouseleave = function () {
    gsap.fromTo("#quezal", animationFrom, animationTo)
}
paradise.onmouseenter = function () {
    gsap.fromTo("#paradise", animationTo, animationFrom)
}
paradise.onmouseleave = function () {
    gsap.fromTo("#paradise", animationFrom, animationTo)
}
parrot.onmouseenter = function () {
    gsap.fromTo("#parrot", animationTo, animationFrom)
}
parrot.onmouseleave = function () {
    gsap.fromTo("#parrot", animationFrom, animationTo)
}


/*effet de rotation des images à l'arrivé sur la page */
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


/*parallaxe pour les cartes d'oiseaux au scroll*/
gsap.to("[data-speed]", {
    y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
    },
});


/* apparition des gifs ( à différents moments) */
gsap.to("#big1", {
    scrollTrigger: {
        trigger: "#big1",
        start: "bottom 96%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#big2", {
    scrollTrigger: {
        trigger: "#big2",
        start: "bottom 88%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#big3", {
    scrollTrigger: {
        trigger: "#big3",
        start: "bottom 80%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#big4", {
    scrollTrigger: {
        trigger: "#big4",
        start: "top 80%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,

});

gsap.to("#medium1", {
    scrollTrigger: {
        trigger: "#medium1",
        start: "bottom 83%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#medium2", {
    scrollTrigger: {
        trigger: "#medium2",
        start: "bottom 92%",
        end: "bottom 0%",
        scrub: 1,

    },
    opacity: 1,
});

gsap.to("#medium3", {
    scrollTrigger: {
        trigger: "#medium3",
        start: "bottom 89%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#medium4", {
    scrollTrigger: {
        trigger: "#medium4",
        start: "bottom 94%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#small1", {
    scrollTrigger: {
        trigger: "#small1",
        start: "bottom 99%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#small2", {
    scrollTrigger: {
        trigger: "#small2",
        start: "bottom 86%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#small3", {
    scrollTrigger: {
        trigger: "#small3",
        start: "bottom 93%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

gsap.to("#small4", {
    scrollTrigger: {
        trigger: "#small4",
        start: "bottom 90%",
        end: "bottom 0%",
        scrub: 1,
    },
    opacity: 1,
});

/*ancrage de la section 2*/
gsap.to("#box2", {
    scrollTrigger: {
        trigger: "#box2",
        markers: false,
        pin: true,
    },
})


/*zoom du texte*/
gsap.to("#sentence2", {
    scrollTrigger: {
        trigger: "#box2",
        start: "top 0%",
        end: "bottom 50%",
        scrub: 1,
    },
    duration: 2,
    scale: 0.5,
    opacity: 1,
}
);

/*ancrage de la box de droite (section3)*/
gsap.to("#pin", {
    scrollTrigger: {
        trigger: "#pin",
        pin: true,
    },
})


