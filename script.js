const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })


        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            delay: -1,
            duration: 2,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            delay: -1,
            ease: Expo.easeInOut,
            duration: 1.5,

        })



}



function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX,dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}


circleMouseFollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (em) {


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,

        });
    });

    elem.addEventListener("mousemove", function (em) {
        var diff = em.clientY - elem.getBoundingClientRect().top;
        diffrot = em.clientX - rotate;
        rotate = em.clientX;


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: em.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});