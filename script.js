// About Section Tabs
var titlelink = document.getElementsByClassName("title-link");
var aboutcontent = document.getElementsByClassName("about-content");

function opentab(tabname, event){
    // Remove all active classes
    for(let i=0; i<aboutcontent.length; i++){
        aboutcontent[i].classList.remove("active-content");
    }
    for(let i=0; i<titlelink.length; i++){
        titlelink[i].classList.remove("active-link");
    }

    // Activate selected tab
    document.getElementById(tabname).classList.add("active-content");
    if(event){
        event.currentTarget.classList.add("active-link");
    }
}

// Side Menu
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Auto-close menu when clicking a link (mobile UX)
var menuLinks = sidemenu.getElementsByTagName("a");
for(let i=0; i<menuLinks.length; i++){
    menuLinks[i].addEventListener("click", function(){
        closemenu();
    });
}

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();