const nav = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4.out",
  },
});

nav.from(".navbar1_logo-link", {
  opacity: 0,
  y: 16,
});

nav.from(".navbar1_link", {
  opacity: 0,
  y: 16,
  stagger: 0.25,
});

nav.to(".navbar1_component .navbar", {
  opacity: 1,
  y: 0,
});

const homehero = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4.out",
  },
});

homehero.from(".heading-style-h1", {
  y: "3rem",
  opacity: 0,
  duration: 1.5,
});

homehero.from(".section_hero p", {
  y: "1rem",
  opacity: 0,
});

homehero.to(".section_hero .link-button", {
  y: 0,
  opacity: 1,
});

homehero.from(".header71_image", {
  opacity: 0,
  y: "10rem",
  duration: 3,
});
