gsap.from("h1, .sub, .btn, .tagline", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from(".earth", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "power2.out",
  delay: 0.3
});

gsap.to(".earth", {
  y: -15,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

gsap.from(".card-isr", { opacity: 0, y: -24, duration: 0.7, ease: "power2.out", delay: 0.5 });
gsap.from(".card-greencup", { opacity: 0, x: 30, duration: 0.7, ease: "power2.out", delay: 0.65 });
gsap.from(".card-carbon", { opacity: 0, y: 24, duration: 0.7, ease: "power2.out", delay: 0.8 });