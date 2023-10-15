let moreMenu = document.getElementById("drop-menu");
let moreIcon = document.getElementById("more-icon");
let moreButton = document.getElementById("more-button");
let mobileAlt = document.getElementById("mobile-alt");

// Check window size
function checkWindowSize() {
    return window.innerWidth >= 950; // Adjust the size range as needed
}

function toggleMoreMenu(status) {
    if(checkWindowSize()) { 
        if(moreMenu.style.display === "block" || status == false) {
            // Hide the menu with a shrink animation
            moreMenu.style.opacity = "0";
            moreIcon.style.transform = "rotate(180deg)";
            setTimeout(function() {
                moreMenu.style.display = "none";
            }, 100); // Adjust the duration to match your transition duration
        } else {
            // Show the menu with an enlarge animation
                moreIcon.style.transform = "rotate(0deg)";
                moreMenu.style.display = "block";
            setTimeout(function() {
                moreMenu.style.opacity = "100%";
            }, 0); // A small delay to ensure smooth animation
        }
    } else {
        if(mobileAlt.style.display === "grid") {
            mobileAlt.style.display = "none";
            moreButton.style.opacity = "100%";
        } else {
            mobileAlt.style.display = "grid";
            moreButton.style.opacity = "0";
        }
    }
    
}

let mainMenu = document.getElementById("main-menu");
let navButton = document.getElementById("nav-button");
function toggleNav(status) {
    if(window.innerWidth <= 950) {
        if(mainMenu.style.display === "block") {
            // Hide the menu with a shrink animation
            mainMenu.style.opacity = "0";
            setTimeout(function() {
                navButton.innerHTML = `<i class="material-symbols-rounded"> menu </i>`
                mainMenu.style.display = "none";
            }, 100); // Adjust the duration to match your transition duration
        } else {
            // Show the menu with an enlarge animation
            mainMenu.style.display = "block";
            setTimeout(function() {
                navButton.innerHTML = `<i class="material-symbols-rounded"> close </i>`
                mainMenu.style.opacity = "100%";
            }, 100); // A small delay to ensure smooth animation
        }
    }
}

const homeButton = document.getElementById("home-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

homeButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the link

    // Smoothly scroll to the top of the page
    window.scrollTo({
        top: 0
    });
});

window.addEventListener("resize", () => {
    if(checkWindowSize()) {
        mobileAlt.style.display = "none";
        mainMenu.style.display = "block";
        mainMenu.style.opacity = "100%";

        moreButton.innerHTML = `More <i class="material-symbols-rounded" id="more-icon"> expand_more </i>`;
        moreButton.style.opacity = "100%";
    } if(window.innerWidth <= 950) {
        moreMenu.style.display = "none";
        moreMenu.style.opacity = "0";

        moreButton.innerHTML = `More <i class="material-symbols-rounded" id="more-icon"> more_horiz </i>`;
        moreButton.style.display = "block";
    } if(window.innerWidth <= 550) {
        moreButton.style.display = "none";
    }
});


// Add a scroll event listener
let isActivated = false;
window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && !isActivated) {
        // Activate when scrolled down
        if(checkWindowSize()) { 
            console.log("Activated");
            // You can place your activation code here.
            navLinks.style.opacity = "0";
            toggleMoreMenu(false);

        
            homeButton.classList.add("home-button-add");
            homeButton.innerHTML = `<i class="material-symbols-rounded" id="menu-icon">
            pet_supplies </i>`;
        
            isActivated = true;
        } 
    } if (window.scrollY === 0 && isActivated) {
        // Deactivate when scrolled back to the top
        console.log("Deactivated");
        // You can place your deactivation code here.
        navLinks.style.opacity = "100%";
    
        homeButton.classList.remove("home-button-add");
        menuIcon.style.position = "absolute";
        menuIcon.style.top = "10px";
        menuIcon.style.left = "20px";
    
        homeButton.innerHTML = `<i class="material-symbols-rounded" id="menu-icon">
        pet_supplies </i> Home`;
    
    
        isActivated = false;
    }
});