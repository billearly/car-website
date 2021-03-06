// --- Intro Image Fading ---
var delay = 5000;

var beachSection = document.getElementById('intro__beach');
var fieldSection = document.getElementById('intro__field');
var snowSection = document.getElementById('intro__snow');
var sectionIndex = 0;
var sections = [
    beachSection,
    fieldSection,
    snowSection
]

setTimeout(function() {
    fadeIntroSection();
}, delay);

function fadeIntroSection() {
    sections[sectionIndex].classList.add('intro--hidden');
    updateSectionIndex();
    sections[sectionIndex].classList.remove('intro--hidden');

    setTimeout(function() {
        fadeIntroSection();
    }, delay);
}

function updateSectionIndex() {
    sectionIndex++;
    if (sectionIndex === sections.length) {
        sectionIndex = 0;
    }
}

// --- Sticky CTA ---
var stickyCta = document.getElementById('sticky-cta');

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 200) {
        stickyCta.classList.add('sticky-cta--enabled');
    } else {
        stickyCta.classList.remove('sticky-cta--enabled');
    }
});

// --- Scroll Icon ---
var scrollIcons = document.getElementsByClassName('scroll-icon');

for (var i = 0; i < scrollIcons.length; i++) {
    scrollIcons[i].addEventListener('click', function() {
        if (window.pageYOffset < 150) {
            window.scrollBy({
                top: 150,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
}