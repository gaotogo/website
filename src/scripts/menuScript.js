
    import {gsap} from "gsap";

    document.addEventListener("DOMContentLoaded", () => {


        const openMenuEl = document.querySelector(".open-menu");
        const closeMenuEl = document.querySelectorAll(".close-menu");
        const container = document.querySelector(".my-container")
        const menuPreviewImage = document.querySelector("menu-preview-image")
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuContent = document.querySelector(".menu-content");
        const menuLinks = document.querySelector(".menu-links");
        const bodyElement = document.body;

        let isOpen = false;
        let isAnimating = false;

        openMenuEl.addEventListener("click", ()=> openMenu())
        closeMenuEl.forEach((element)=>{
            element.addEventListener("click", ()=> closeMenu())
        })
        

        function openMenu() {
            if(isAnimating || isOpen) return;
            isAnimating = true;

            // bodyElement.style.overflow = "hidden";

            gsap.to(container, {
                rotation:10,
                x:300,
                y:450,
                scale:1.5,
                duration:1.25,
                ease:"power4.inOut",
            });

            gsap.to(menuContent, {
                rotation:0,
                x:0,
                y:0,
                scale:1,
                opacity:1,
                duration:1.25,
                ease:"power4.inOut",
            });

            gsap.to([".main-link a", ".sec-link a"], {
                y:"0%",
                opacity:1,
                duration:1,
                delay:0.75,
                stagger:0.1,
                ease:"power3.out",
            });
            
            gsap.to(menuOverlay, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
                duration:1.25,
                ease:"power4.out",
                onComplete:() => {
                    isOpen = true;
                    isAnimating = false;
                },
            });

            gsap.to(menuPreviewImage, {
                opacity:1,
                scale:1,
                rotation:0,
                duration:0.75,
                ease:"power2.out",
            });
        };

        function closeMenu() {
             if(isAnimating || !isOpen) return;
            isAnimating = true;

            gsap.to(container, {
                rotation:0,
                x:0,
                y:0,
                scale:1,
                duration:.8,
                ease:"power4.inOut",
            });

            gsap.to(menuContent, {
                rotation:-15,
                x:-100,
                y:-100,
                scale:1.5,
                opacity:0.25,
                duration:1.25,
                ease:"power4.inOut",
            });

            gsap.to(menuOverlay, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration:1.25,
                ease:"power4.out",
                onComplete:() => {
                    // bodyElement.style.overflow = "auto";
                    isOpen = false;
                    isAnimating = false;
                    gsap.set([".main-link a", ".sec-link a"], {y:"120%"});
                    resetPreviewImage();
                },
            });

        };

    });