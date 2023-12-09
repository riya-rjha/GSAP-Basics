//GSAP - GreenStock animation Platform :
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script> */ }

gsap.from('.header', {
    duration: 1,
    y: '-100%',
    ease: 'bounce'
});

gsap.from('.tags', {
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: .7
});

gsap.from('.right', {
    duration: 1.5,
    delay: 3,
    x: '-100vw',
    ease: "power2.in",
})

gsap.from('.left', {
    duration: 1.5,
    delay: 3,
    x: '-15vw',
    ease: "power3.in",
})

gsap.from('.footer', {
    duration: 1,
    delay: 4,
    y: '100%',
    ease: 'bounce'
})

gsap.fromTo('.btn', {
    opacity: 0,
    rotation: 1020,
    scale: 0
}, {
    opacity: 1,
    rotation: 0,
    scale: 1,
    delay: 5,
    duration: 3
});

const obj = { x: 0 }
gsap.to(obj, {
    duration : 2,
    delay: 5,
    x: 50,
    onUpdate : () => console.log(obj.x)
});