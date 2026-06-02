var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#header");
const CShamburgerMenu = document.querySelector("#header .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

const dropDowns = Array.from(document.querySelectorAll('#header .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
    item.classList.toggle('cs-active')
}
item.addEventListener('click', onClick)
}

//modal
const modal = document.getElementById("contactModal");

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

window.onclick = function(event) {
    if (event.target === modal) {
    closeModal();
    }
}