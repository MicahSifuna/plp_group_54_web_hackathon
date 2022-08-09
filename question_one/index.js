// Open and close the nav
const openNav = () => {
    document.getElementById('myNav')
    .style.height="100%";
}

const closeNav = () => {
    document.getElementById('myNav')
    .style.height="0%";
}

// typed text
let typed = new Typed(".typing", {
    strings: ["PLP Learners", "Group 54 members", "Micah Kutoto", "Eric Mwangi"],
    typedSpeed: 60,
    backSpeed: 100,
    loop: true
});
