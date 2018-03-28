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