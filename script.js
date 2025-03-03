gsap.to(".animated-text", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
gsap.to(".subtext", { opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" });
gsap.from(".hero-img", { opacity: 0, y: 50, stagger: 0.3, duration: 1 });

document.querySelectorAll(".hero-img").forEach((img) => {
    img.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20;
        const y = ((e.clientY - top) / height - 0.5) * 20;
        gsap.to(img, { x, y, duration: 0.3, ease: "power2.out" });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.3 });
    });
});

gsap.to(".svg-wave path", { 
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    attr: { d: "M0,160L80,192C160,224,320,288,480,293.3C640,299,800,245,960,224C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" }
});

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    gsap.to(".animated-text", { y: scrollY * 0.2 });
    gsap.to(".subtext", { y: scrollY * 0.3 });
    gsap.to(".parallax", { y: scrollY * 0.1 });
});
