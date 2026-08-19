document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // SECTION FADE ANIMATION

    gsap.utils.toArray(".scroll-fade").forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none play reverse",
                },
            }
        );
    });

// HERO ANIMATION

    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top 75%",
        },
    });

    heroTl
        .from(".hero-heading", {
            opacity: 0,
            x: -80,
            duration: 0.8,
        })
        .from(".hero-para", {
            opacity: 0,
            y: 30,
            duration: 0.6,
        })
        .from(
            ".img-container",
            {
                opacity: 0,
                
                duration: 2,
            },
            "-=0.5"
        );


 // ABOUT ANIMATION
   

    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
        },
    });

    aboutTl
        .from(".about-subtitle", {
            opacity: 0,
            y: 20,
            duration: 0.5,
        })
        .from(".about-title", {
            opacity: 0,
            x: -80,
            duration: 0.8,
        })
        .from(".about-text", {
            opacity: 0,
            y: 30,
            duration: 0.6,
        })
        .from(
            ".about-right img",
            {
                opacity: 0,
                x: 100,
                duration: 0.8,
            },
            "-=0.5"
        );
});