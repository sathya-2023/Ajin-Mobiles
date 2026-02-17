const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}

const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
};

window.addEventListener("scroll", setHeaderState);
setHeaderState();

document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    galleryImages.forEach(img => {
        observer.observe(img);
    });
});
