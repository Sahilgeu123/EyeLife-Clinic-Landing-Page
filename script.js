document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".scroll-fade").forEach((section) => {

        gsap.from(section, {
            opacity: 0,
            y: 10,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

    });


    
});