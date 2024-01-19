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
  stagger: 0.125,
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
  //stagger: 0.125,
});
footer.from(".footer10_link", {
  y: "1rem",
  opacity: "0",
  //stagger: 0.125,
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
  //stagger: 0.125,
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
header.to(".contact-action", {
  y: 0,
  opacity: 1,
  // stagger: 0.25,
});
header.from(
  ".contact-action .icon-embed-medium",
  {
    y: "1rem",
    opacity: 0,
    stagger: 0.25,
  },
  ">"
);
header.from(
  ".contact-action .text-size-xlarge",
  {
    y: "1rem",
    opacity: 0,
    // stagger: 0.25,
  },
  "< 0.5"
);

const contact = gsap.timeline({
  defaults: {
    duration: 0.25,
  },
  scrollTrigger: {
    trigger: ".section_form-contact",
    start: "top 75%",
  },
});

contact.from(".section_form-contact .heading-style-h4", {
  y: "1rem",
  opacity: 0,
});
contact.from(".section_form-contact .text-size-medium", {
  y: "1rem",
  opacity: 0,
  // stagger: 0.25,
});
contact.from(".section_form-contact .form_input", {
  y: "1rem",
  opacity: 0,
  stagger: 0.25,
});
contact.from(".section_form-contact .input-divider", {
  width: 0,
  // stagger: 0.5,
  duration: 1,
});
contact.from(".section_form-contact .button", {
  y: "1rem",
  opacity: 0,
});

const faq = gsap.timeline({
  defaults: {
    duration: 0.25,
  },
  scrollTrigger: {
    trigger: ".section_faq-contact",
    start: "top 75%",
  },
});

faq.from(".section_faq-contact .heading-style-h4", {
  y: "1rem",
  opacity: 0,
});
faq.from(".section_faq-contact .text-size-medium", {
  y: "1rem",
  opacity: 0,
});
faq.from(".section_faq-contact .faq4_accordion", {
  y: "1rem",
  opacity: 0,
  // stagger: 0.125,
});
