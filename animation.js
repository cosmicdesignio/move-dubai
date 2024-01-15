const nav = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power2.inOut",
  },
});

nav.from(".navbar1_logo-link", {
  opacity: 0,
});

nav.from(".navbar1_link", {
  opacity: 0,
  stagger: 0.25,
});
