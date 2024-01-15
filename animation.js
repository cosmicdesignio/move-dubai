const nav = gsap.timeline({
  defaults: {
    duration: 0.5,
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

nav.fromTo(
  ".navbar1_component .navbar",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  },
);

const homehero = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power4.out",
  },
});

homehero.from(".heading-style-h1", {
  y: "1rem",
  opacity: 0,
});

homehero.from(".section_hero p", {
  y: "1rem",
  opacity: 0,
});

homehero.from(".section_hero .main", {
  y: "1rem",
  opacity: 0,
});

homehero.from(".header71_image", {
  scale: 0,
  opacity: 0,
});
