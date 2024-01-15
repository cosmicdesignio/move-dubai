const nav = gsap.timeline({
  defaults: {
    duration: 0.5,
    y: 16,
    ease: "power4.inOut",
  },
});

nav.from(".navbar1_logo-link", {
  opacity: 0,
});

nav.from(".navbar1_link", {
  opacity: 0,
  stagger: 0.25,
});

nav.from(".link-button", {
  opacity: 0,
});
