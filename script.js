//animation script
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe (el));


function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}
function opentab(tabname) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

window.addEventListener("load", function () {
    var loadingScreen = document.getElementById("loading-screen");
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 2000);
});


