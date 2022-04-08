const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function loadTheme() {
    var currentTheme = localStorage.getItem("theme");
}

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

// Execute on Page Load
window.onload = loadTheme();

// Toggle Icon Management
function loadIcon() {
    var themeSwitch = document.getElementById("switch");
    if(prefersDark.matches) {
        if (themeSwitch.className === "fa fa-moon toggle") {
            themeSwitch.className = "fa fa-sun toggle";
        }
    }
}

function switchIcon() {
    var themeSwitch = document.getElementById("switch");
    if (themeSwitch.className === "fa fa-moon toggle") {
        themeSwitch.className = "fa fa-sun toggle";
    } else {
        themeSwitch.className = "fa fa-moon toggle";
    }
}

function test() {
    alert('test from darkmode.js');
}

function switchTheme() {
    switchIcon();
    document.body.classList.toggle("dark-theme");
    
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    // Store choice
    localStorage.setItem("theme", theme);
}