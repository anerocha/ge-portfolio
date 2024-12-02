const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(0)'; 
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(-16rem)'; 
}

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
        } else {
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
            navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
        }
    });
}

document.getElementById("menuButton").onclick = function() {
    openMenu();
};

document.getElementById("closeButton").onclick = function() {
    closeMenu();
};

function openMenu() {
    document.getElementById("sideMenu").classList.remove("-right-64");
    document.getElementById("sideMenu").classList.add("right-0");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("right-0");
    document.getElementById("sideMenu").classList.add("-right-64");
}
