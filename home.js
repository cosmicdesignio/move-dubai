if (window.innerWidth > 768) {
  const nav = gsap.timeline({
    defaults: {
      duration: 0.125,
      //ease: "power4.out",
    },
  });

  nav.to(".navbar1_logo-link", {
    opacity: 1,
    y: 0,
    duration: 0.125,
  });

  nav.from(".navbar1_link", {
    opacity: 0,
    y: 16,
    duration: 0.125,
    //stagger: 0.125,
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

  const homehero = gsap.timeline({
    defaults: {
      duration: 0.25,
      // ease: "power4.out",
    },
  });

  homehero.from(".heading-style-h1", {
    y: "3rem",
    opacity: 0,
    duration: 0.5,
  });

  homehero.from(".section_hero p", {
    y: "1rem",
    opacity: 0,
  });

  homehero.to(
    ".section_hero .link-button",
    {
      opacity: 1,
      duration: 0.25,
    },
    "<"
  );

  homehero.from(
    ".header71_image",
    {
      y: "5rem",
      borderRadius: "200vw 200vw 0 0",
      width: "50%",
      transformOrigin: "center bottom",
      //ease: "expo.out",
      duration: 1,
    },
    0
  );

  const logos = gsap.timeline({
    defaults: {
      duration: 0.25,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_logo",
      start: "top 90%",
    },
  });

  logos.from(".section_logo .heading-style-h2", {
    y: "1rem",
    opacity: 0,
  });

  logos.from(".section_logo p", {
    y: "1rem",
    opacity: 0,
  });

  logos.to(".logo4_wrapper", {
    opacity: 1,
    y: "0rem",
    //stagger: 0.125,
  });

  logos.from(
    ".logo4_logo",
    {
      opacity: 0,
      y: "1rem",
      // stagger: 0.25,
    },
    "0"
  );

  const services = gsap.timeline({
    defaults: {
      duration: 0.25,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_services",
      start: "top 90%",
    },
  });

  services.from(".section_services .heading-style-h3", {
    opacity: 0,
    y: "1rem",
  });
  services.from(".section_services .text-weight-semibold", {
    opacity: 0,
    y: "1rem",
  });
  services.from(".section_services .text-size-medium", {
    opacity: 0,
    y: "1rem",
  });

  services.to(".service-card", {
    opacity: 1,
    y: 0,
  }, 0.25);

  services.from(".secondary", {
    opacity: 0,
    y: "1rem",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section_services",
      start: "bottom 95%",
    },
  });

  const cta = gsap.timeline({
    defaults: {
      duration: 0.25,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_cta",
      start: "top 90%",
    },
  });

  cta.from(".section_cta .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  cta.from(".badge-text", {
    y: "1rem",
    opacity: 0,
  });
  cta.from(".section_cta .text-size-medium", {
    y: "1rem",
    opacity: 0,
  });
  cta.to(".section_cta .link-button", {
    opacity: 1,
    duration: 0.25,
  });

  const feature = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_feature",
      start: "top 80%",
    },
  });

  feature.from(".image-2", {
    y: "3rem",
    opacity: 0,
    duration: 0.5,
  });
  feature.from(
    ".layout34_item-icon-wrapper",
    {
      y: "2rem",
      opacity: 0,
      // stagger: 0.5,
      duration: 0.5,
    },
    0
  );
  feature.from(
    ".section_feature .heading-style-h5",
    {
      x: "-2rem",
      opacity: 0,
      // stagger: 0.5,
    },
    0.75
  );
  feature.from(
    ".section_feature p",
    {
      x: "-2rem",
      opacity: 0,
      // stagger: 0.5,
    },
    1
  );
  feature.from(
    ".floating_number-wrapper",
    {
      y: "3rem",
      opacity: 0,
      duration: 0.5,
    },
    1
  );

  feature.from(
    ".floating_number-wrapper .text-size-regular",
    {
      y: "1rem",
      opacity: 0,
      duration: 0.5,
    },
    1.25
  );

  feature.from(
    ".floating_number-wrapper .heading-style-h4",
    {
      y: "1rem",
      opacity: 0,
      duration: 0.5,
    },
    1.75
  );

  feature.from(
    ".graph-element",
    {
      y: "1rem",
      opacity: 0,
    },
    2
  );

  feature.from(
    ".content-graph",
    {
      width: 0,
      duration: 3,
    },
    2.25
  );

  feature.to(
    ".graph-element .text-size-regular",
    {
      y: 0,
      opacity: 1,
      // stagger: 0.25,
    },
    2.25
  );

  const testi = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_testimonials",
      start: "top 90%",
    },
  });

  testi.from(".section_testimonials .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  testi.from(".section_testimonials .text-size-large", {
    y: "1rem",
    opacity: 0,
  });
  testi.from(".header78_component", {
    opacity: 0,
    duration: 2,
  });

  const blog = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_blog",
      start: "top 90%",
    },
  });

  blog.from(".section_blog .heading-style-h3", {
    y: "1rem",
    opacity: 0,
  });
  blog.from(".section_blog .text-weight-semibold", {
    y: "1rem",
    opacity: 0,
  });
  blog.from(
    ".image-3",
    {
      height: 0,
      duration: 0.5,
      //ease: "power4.inOut",
      transformOrigin: "center center",
    },
    0.5
  );
  blog.from(
    ".image-3",
    {
      borderRadius: 0,
      duration: 3,
    },
    1
  );
  blog.to(
    ".link-block",
    {
      y: 0,
      opacity: 1,
      // stagger: 0.5,
      duration: 0.125,
    },
    1.25
  );
  blog.from(
    ".image-4",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.125,
      //  stagger: 0.5,
    },
    1.5
  );
  blog.from(
    ".link-block .heading-style-h5",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.125,
      //  stagger: 0.5,
    },
    1.75
  );
  blog.from(
    ".link-block .text-size-regular",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.125,
      //  stagger: 0.25,
    },
    2
  );

  const pricing = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_pricing",
      start: "top 90%",
    },
  });

  pricing.from(".section_pricing .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  pricing.from(".section_pricing .text-size-medium", {
    y: "1rem",
    opacity: 0,
  });
  pricing.to(".pricing19_plan", {
    y: 0,
    opacity: 1,
    //  stagger: 0.125,
    duration: 0.5,
  });

  const footer = gsap.timeline({
    defaults: {
      duration: 0.25,
    },
    scrollTrigger: {
      trigger: ".footer10_component",
      start: "top 90%",
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
    //  stagger: 0.125,
  });
  footer.from(".footer10_link", {
    y: "1rem",
    opacity: "0",
    //  stagger: 0.125,
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
    //  stagger: 0.125,
  });
}

if (window.innerWidth < 768) {
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

  const homehero = gsap.timeline({
    defaults: {
      duration: 0.25,
      // ease: "power4.out",
    },
  });

  homehero.from(".heading-style-h1", {
    y: "3rem",
    opacity: 0,
    duration: 0.5,
  });

  homehero.from(".section_hero p", {
    y: "1rem",
    opacity: 0,
  });

  homehero.to(
    ".section_hero .link-button",
    {
      opacity: 1,
      duration: 0.25,
    },
    "<"
  );

  homehero.from(
    ".header71_image",
    {
      y: "5rem",
      borderRadius: "200vw 200vw 0 0",
      width: "50%",
      transformOrigin: "center bottom",
      //ease: "expo.out",
      duration: 1,
    },
    0
  );

  const logos = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_logo",
      start: "top 90%",
    },
  });

  logos.from(".section_logo .heading-style-h2", {
    y: "1rem",
    opacity: 0,
  });

  logos.from(".section_logo p", {
    y: "1rem",
    opacity: 0,
  });

  logos.to(".logo4_wrapper", {
    opacity: 1,
    y: "0rem",
    //  stagger: 0.125,
  });

  logos.from(
    ".logo4_logo",
    {
      opacity: 0,
      y: "1rem",
      //  stagger: 0.25,
    },
    "<"
  );

  const services = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_services",
      start: "top 90%",
    },
  });

  services.from(".section_services .heading-style-h3", {
    opacity: 0,
    y: "1rem",
  });
  services.from(".section_services .text-weight-semibold", {
    opacity: 0,
    y: "1rem",
  });
  services.from(".section_services .text-size-medium", {
    opacity: 0,
    y: "1rem",
  });

  services.from(".secondary", {
    opacity: 0,
    y: "1rem",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section_services",
      start: "bottom 95%",
    },
  });

  const cta = gsap.timeline({
    defaults: {
      duration: 0.25,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_cta",
      start: "top 90%",
    },
  });

  cta.from(".section_cta .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  cta.from(".badge-text", {
    y: "1rem",
    opacity: 0,
  });
  cta.from(".section_cta .text-size-medium", {
    y: "1rem",
    opacity: 0,
  });
  cta.to(".section_cta .link-button", {
    opacity: 1,
    duration: 0.25,
  });

  const feature = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_feature",
      start: "top 70%",
    },
  });

  feature.from(".image-2", {
    y: "3rem",
    opacity: 0,
    duration: 0.5,
  });
  feature.from(
    ".layout34_item-icon-wrapper",
    {
      y: "2rem",
      opacity: 0,
      //  stagger: 0.5,
      duration: 0.5,
    },
    0
  );
  feature.from(
    ".section_feature .heading-style-h5",
    {
      x: "-2rem",
      opacity: 0,
      //  stagger: 0.5,
    },
    0.75
  );
  feature.from(
    ".section_feature p",
    {
      x: "-2rem",
      opacity: 0,
      //  stagger: 0.5,
    },
    1
  );
  feature.from(
    ".floating_number-wrapper",
    {
      y: "3rem",
      opacity: 0,
      duration: 0.5,
    },
    1
  );

  feature.from(
    ".floating_number-wrapper .text-size-regular",
    {
      y: "1rem",
      opacity: 0,
      duration: 0.5,
    },
    1.25
  );

  feature.from(
    ".floating_number-wrapper .heading-style-h4",
    {
      y: "1rem",
      opacity: 0,
      duration: 0.5,
    },
    1.75
  );

  feature.from(
    ".graph-element",
    {
      y: "1rem",
      opacity: 0,
    },
    2
  );

  feature.from(
    ".content-graph",
    {
      width: 0,
      duration: 3,
    },
    2.25
  );

  feature.to(
    ".graph-element .text-size-regular",
    {
      y: 0,
      opacity: 1,
      //  stagger: 0.25,
    },
    2.25
  );

  const testi = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_testimonials",
      start: "top 90%",
    },
  });

  testi.from(".section_testimonials .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  testi.from(".section_testimonials .text-size-large", {
    y: "1rem",
    opacity: 0,
  });
  testi.from(".header78_component", {
    opacity: 0,
    duration: 2,
  });

  const blog = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_blog",
      start: "top 90%",
    },
  });

  blog.from(".section_blog .heading-style-h3", {
    y: "1rem",
    opacity: 0,
  });
  blog.from(".section_blog .text-weight-semibold", {
    y: "1rem",
    opacity: 0,
  });
  blog.from(
    ".image-3",
    {
      height: 0,
      duration: 0.5,
      //ease: "power4.inOut",
      transformOrigin: "center center",
    },
    1
  );
  blog.from(
    ".image-3",
    {
      borderRadius: 0,
      duration: 5,
    },
    1
  );
  blog.to(
    ".link-block",
    {
      y: 0,
      opacity: 1,
      //  stagger: 0.5,
      duration: 0.25,
    },
    1.25
  );
  blog.from(
    ".image-4",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.5,
      //  stagger: 0.5,
    },
    1.5
  );
  blog.from(
    ".link-block .heading-style-h5",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.5,
      //  stagger: 0.5,
    },
    1.75
  );
  blog.from(
    ".link-block .text-size-regular",
    {
      x: "-1rem",
      opacity: 0,
      duration: 0.5,
      // stagger: 0.25,
    },
    2
  );

  const pricing = gsap.timeline({
    defaults: {
      duration: 0.5,
      //ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".section_pricing",
      start: "top 90%",
    },
  });

  pricing.from(".section_pricing .heading-style-h4", {
    y: "1rem",
    opacity: 0,
  });
  pricing.from(".section_pricing .text-size-medium", {
    y: "1rem",
    opacity: 0,
  });
  pricing.to(".pricing19_plan", {
    y: 0,
    opacity: 1,
    //  stagger: 0.125,
    duration: 0.5,
  });

  const footer = gsap.timeline({
    defaults: {
      duration: 0.25,
    },
    scrollTrigger: {
      trigger: ".footer10_component",
      start: "top 90%",
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
    //  stagger: 0.125,
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
}
