//if (window.innerWidth > 768) {
const nav = gsap.timeline({
  defaults: {
    duration: 0.25,
    //ease: "power4.out",
  },
});

nav.to(".navbar1_logo-link", {
  opacity: 1,
  y: 0,
  duration: 0.25,
});

nav.from(".navbar1_link", {
  opacity: 0,
  y: 16,
  duration: 0.25,
  // stagger: 0.125,
});

nav.from(
  ".navbar-divider",
  {
    scale: 0,
    duration: 0.5,
  },
  2
);

nav.to(
  ".navbar1_component .navbar",
  {
    opacity: 1,
    duration: 0.25,
  },
  1
);

const footer = gsap.timeline({
  defaults: {
    duration: 0.25,
  },
  scrollTrigger: {
    trigger: ".footer10_component",
    start: "top 85%",
  },
});

footer.from(".footer10_component .heading-style-h2", {
  y: "1rem",
  opacity: "0",
});
footer.to(".footer10_component .link-button", {
  y: "0rem",
  opacity: "1",
});
footer.from(".footer10_logo-link", {
  y: "1rem",
  opacity: "0",
});
footer.from(".footer10_link-list .text-weight-semibold", {
  y: "1rem",
  opacity: "0",
  // stagger: 0.125,
});
footer.from(".footer10_link", {
  y: "1rem",
  opacity: "0",
  // stagger: 0.125,
});
footer.from(".footer10_right-wrapper", {
  y: "1rem",
  opacity: "0",
});
footer.from(".footer10_component .line-divider", {
  scale: 0,
});
footer.from(".footer10_credit-text", {
  y: "1rem",
  opacity: "0",
});
footer.from(".footer10_social-link", {
  y: "1rem",
  opacity: "0",
  // stagger: 0.125,
});

const header = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

header.from(".hero", {
  y: "1rem",
  opacity: "0",
});
header.from(".section_header-subpage .text-size-medium", {
  y: "1rem",
  opacity: "0",
});

const services = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

services.from(".tabs-menu", {
  y: "1rem",
  opacity: 0,
});
services.from(
  ".tab",
  {
    opacity: 0,
    y: "1rem",
    //  stagger: 0.25,
  },
  ">"
);
services.from(".header19_image", {
  y: "1rem",
  opacity: 0,
  borderRadius: 0,
});
services.from(
  ".header19_content .heading-style-h4",
  {
    y: "1rem",
    opacity: 0,
  },
  "<"
);
services.from(".header19_content .text-size-medium", {
  y: "1rem",
  opacity: 0,
});
services.to(
  ".header19_content .is-inverted",
  {
    y: 0,
    opacity: 1,
  },
  "<"
);
gsap.to(".layout292_item", {
  y: 0,
  opacity: 1,
  // stagger: 0.125,
  scrollTrigger: {
    trigger: ".section_content-services",
    start: "center bottom",
  },
});

const cta = gsap.timeline({
  defaults: {
    duration: 0.25,
  },
  scrollTrigger: {
    trigger: ".section_cta-services",
    start: "top 75%",
  },
});

cta.from(".section_cta-services .heading-style-h4", {
  y: "1rem",
  opacity: 0,
});
cta.from(".section_cta-services .text-size-regular", {
  y: "1rem",
  opacity: 0,
});
cta.to(".section_cta-services .link-button-2", {
  y: 0,
  opacity: 1,
});
cta.from(
  ".cta39_card-content img",
  {
    y: "1rem",
    opacity: 0,
    duration: 1,
  },
  1
);

const benefits = gsap.timeline({
  defaults: {
    duration: 0.25,
  },
  scrollTrigger: {
    trigger: ".section_cta-services",
    start: "top 25%",
  },
});

benefits.from(".section_header-services .heading-style-h4", {
  y: "1rem",
  opacity: 0,
});
benefits.from(".section_header-services .text-size-medium", {
  y: "1rem",
  opacity: 0,
});
benefits.to(".layout128_content", {
  y: 0,
  opacity: 1,
  // stagger: 0.125,
});
