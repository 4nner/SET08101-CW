/* HTML Elements + Understand OS Setting */
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeSwitch = document.getElementById("switch");

window.onload = onLoad(); // Set Colour Mode on (re)load

function onLoad() {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
        if (prefersDark.matches) {
            setDark();
        } else {
            setLight();
        }
    } else {
        if (currentTheme == "dark") {
            setDark();
        } else {
            setLight();
        }
    }
}

/* Switch Functions */
function switchTheme() {
    currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        setLight();
    } else {
        setDark();
    }
}

function setDark() {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-theme");
    themeSwitch.className = "fa fa-sun toggle";
}

function setLight() {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-theme");
    themeSwitch.className = "fa fa-moon toggle";
}
