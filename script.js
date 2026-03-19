document.addEventListener('DOMContentLoaded', function () {
    // --- Typewriter Effect ---
    const text1 = "UI/UX Designer &";
    const text2 = "Front‑End Developer";
    const speed = 70; // Typing speed in ms
    const element = document.getElementById("typewriter-text");

    let i = 0;
    let j = 0;

    function typeWriter() {
        if (!element) return;
        if (i < text1.length) {
            element.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (i === text1.length) {
            element.innerHTML += "<br>";
            i++; // Increment to move to next phase
            setTimeout(typeWriter, speed);
        } else if (j < text2.length) {
            element.innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            element.style.borderRight = "none";
        }
    }

    typeWriter();

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed so animation only plays once
                observer.unobserve(entry.target); 
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Custom Mouse Follower ---
    const cursorDot = document.getElementById('cursor-dot');
    
    window.addEventListener('mousemove', function(e) {
        if (!cursorDot) return;
        
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });
    });

    // Add active class on hoverable elements
    const hoverables = document.querySelectorAll('a, button, .skill-card, .project-card, .info-card');
    
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorDot) cursorDot.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            if (cursorDot) cursorDot.classList.remove('active');
        });
    });
    // --- Mobile Navigation Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon from bars to times
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
