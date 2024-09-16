// #fanta lai chai animate garne i.e movement dine

// ----------------------MERO(Normal) WAY--------------------------

// ----------------Timeline 1----------------
const tl = gsap.timeline();

// #fanta lai <div class='two'> ma lageko
tl.to('#fanta', {
  top: '115%',
  left: '10%',

  scrollTrigger: {
    trigger: '.two',
    // markers: true,
    start: '0% 95%',
    end: '20% 30%',
    scrub: true,
  },
});

tl.to('#orange-cut', {
  top: '155%',
  left: '33%',
  rotate: 360,

  scrollTrigger: {
    trigger: '.two',
    // markers: true,
    start: '0% 95%',
    end: '20% 30%',
    scrub: true,
  },
});

tl.to('#orange', {
  top: '166%',
  right: '8%',
  width: '13%',

  scrollTrigger: {
    trigger: '.two',
    // markers: true,
    start: '0% 95%',
    end: '20% 30%',
    scrub: true,
  },
});

tl.to('#leaf', {
  top: '102%',
  left: '78%',
  rotate: 400,

  scrollTrigger: {
    trigger: '.two',
    // markers: true,
    start: '0% 95%',
    end: '20% 30%',
    scrub: true,
  },
});

tl.to('#leaf2', {
  top: '100%',
  left: '15%',

  scrollTrigger: {
    trigger: '.two',
    // markers: true,
    start: '0% 95%',
    end: '20% 30%',
    scrub: true,
  },
});

// ----------------Timeline 2----------------
// #fanta lai <div class='three'> ma lageko
const tl2 = gsap.timeline();

//----( .LEMON, #SPRITE )
tl2.from('.lemon', {
  rotate: '-90',
  left: '-100%',
  top: '30%',
  opacity: 0,

  scrollTrigger: {
    trigger: '.three',
    // markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

tl2.from('#sprite', {
  rotate: -90,
  left: '-100%',
  opacity: 0,

  scrollTrigger: {
    trigger: '.three',
    // markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

//----( .PEACH, #LIPTON )
tl2.from('.peach', {
  rotate: '90',
  right: '-100%',
  top: '30%',
  opacity: 0,

  scrollTrigger: {
    trigger: '.three',
    // markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

tl2.from('#lipton', {
  rotate: 90,
  right: '-100%',
  opacity: 0,

  scrollTrigger: {
    trigger: '.three',
    // markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

//----( #ORANGE-CUT, #FANTA )
tl2.to('#orange-cut', {
  width: '15%',
  left: '42%',
  top: '203%',

  // left: '42%',
  // top: '202%',
  // width: '16%',

  scrollTrigger: {
    trigger: '.three',
    markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

tl2.to('#fanta', {
  width: '32%',
  top: '214%',
  left: '34%',

  // width: '35%',
  // top: '210%',
  // left: '33%',

  scrollTrigger: {
    trigger: '.three',
    markers: true,
    start: '0% 70%',
    end: '20% 30%',
    scrub: true,
  },
});

// ----------------------OPTIMIZED WAY--------------------------

// ----------------Timeline 1----------------

// ----------------Timeline 2----------------
