/*-----------------------------------------
        MOBILE DRAWER MENU
-----------------------------------------*/
const menuToggle   = document.getElementById('menuToggle');
const drawerPanel  = document.getElementById('drawerPanel');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose  = document.getElementById('drawerClose');
const navLinks     = document.querySelectorAll('.nav-menu a');

function openDrawer() {
    menuToggle.classList.add('active');
    drawerPanel.classList.add('active');
    drawerOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    menuToggle.classList.remove('active');
    drawerPanel.classList.remove('active');
    drawerOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function toggleDrawer() {
    const isOpen = drawerPanel.classList.contains('active');
    isOpen ? closeDrawer() : openDrawer();
}

menuToggle.addEventListener('click', toggleDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerPanel.classList.contains('active')) {
        closeDrawer();
    }
});

/*-----------------------------------------
        ACTIVE LINK ON SCROLL
-----------------------------------------*/
const sections = document.querySelectorAll('section[id]');

const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

/*-----------------------------------------
        REAVEAL on SCROLL ANIMATIONS
-----------------------------------------*/
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);
document.querySelectorAll(".reveal").forEach((element) => {
revealObserver.observe(element);
});

/*-----------------------------------------
                Footer Year
-----------------------------------------*/
(()=> {
    "use strict";

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Get the current calendar year automatically
const currentYear = new Date().getFullYear();
 // Find your main footer element by its ID (#year)
const yearEl = document.getElementById("year");
if (yearEl){
    yearEl.textContent = currentYear;
}
// Find your mobile drawer element by its Class (.drawer-year)
const drawerYearEl = document.querySelector(".drawer-year");
if (drawerYearEl){
    drawerYearEl.textContent = currentYear;
}

/*--------Nav scroll state--------------*/
const header = $("#header");
const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", onScroll, {passive: true});
onScroll();


})();

