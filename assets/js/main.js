const overlay = document.querySelector(".overlay");
const sideBar = document.querySelector(".sideBar_mobile");
function showSidebar() {
    if (sideBar.style.display === "none") {
        overlay.style.display = "block"; 
        sideBar.style.display = "block";
    } else {
        overlay.style.display = "none"; 
        sideBar.style.display = "none";
    }
}

function closeSidebar(){
    overlay.style.display = "none"; 
    sideBar.style.display = "none";
}