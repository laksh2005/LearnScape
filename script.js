tl = gsap.timeline();

tl.from(".logo , .navpart2", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});
tl.from(".first h1 ", {
  x: -500,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
});
tl.from(".first .para , .buttons ", {
  x: -500,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
});

tl.from(".lftim", {
  opacity: 0,
  // scale: 1.5,
  duration: 1.25,
})

// t1.from(".first .pr", {
//   duration: 0.5,
//   y: 30,
//   repeat: -1,
//   opacity: 0,
//   yoyo: true,
// });

tl.from(".second p", {
  opacity: 0,
  x: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".second p",
    scroller: "body",
    // markers : true ,
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
  },
});
tl.from(".second h1", {
  opacity: 0,
  x: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".second h1",
    scroller: "body",
    // markers : true ,
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
});
tl.from(".second button", {
  opacity: 0,
  x : -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".second button",
    scroller: "body",
    // markers : true ,
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
  },
});
tl.from(".second img", {
  opacity: 0,
  // scale: 1.5,
  y: 50,
  duration: 2,
  scrollTrigger: {
    trigger: ".second img",
    scroller: "body",
    // markers : true ,
    start: "top 80%",
    end: "top 70%",
    scrub: 3,
  },
});

tl.from(".third ul , .third h1 , .third h3 , .third .line, .third button", {
  x: -200,
  opacity: 0,
  duration: 2,
  stagger: 1.5,
  scrollTrigger: {
    trigger: ".third ul , .third h1 , .third h3 , .third .line .third button",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: 3,
  },
});

