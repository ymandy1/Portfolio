var icon = document.getElementById("moon_icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "..//image/sun.png";
        icon.style.filter = "invert(100%)";
    }else {
        icon.src = "..//image/moon.png";
    }
}
