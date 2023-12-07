function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    } else{
        menuBtn.className = "nav-menu";
    }
}

/*---dark mode---*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/*---fyping effect--*/

var typingEffect = new Typed(".typedText", {
    strings: ("Designer", "coder", "Developer"),

    loop:true,
    typedSpeed: 100,
    backSpped: 80,
    backDelay: 2000,
});

/*---Scroll animation---*/

const sr = ScrollReveal({
    origin:"top",
    distance: "80px", 
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".social-icons", { delay: 200});
sr.reveal(".featured-image", { delay: 320});

sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", {});

const srleft = ScrollReveal({
    origin: "left",
    distance:"80px",
    duration: 2000,
    reset: true,
});

srleft.reveal(".about-info", { delay:100});
srleft.reveal(".contact-info", { delay:100});


const srRight = ScrollReveal({
    origin: "left",
    distance:"80px",
    duration: 2000,
    reset: true,
});

srleft.reveal(".skill", { delay:100});
srleft.reveal(".skill-box", { delay:100});

/*---active---*/

constsections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrolly = window.scrollY;

    section.forEach((current) => {
        
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrolly > sectionTop &&     scrolly <= sectiontTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    
    });
}

window.addEventListener("scrol", scrollActive);