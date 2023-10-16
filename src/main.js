let moreMenu = document.getElementById("drop-menu");
let moreIcon = document.getElementById("more-icon");
let moreButton = document.getElementById("more-button");
let mobileAlt = document.getElementById("mobile-alt");

// Check window size
function checkWindowSize() {
    return window.innerWidth >= 950;
}

function toggleMoreMenu(status) {
    if(checkWindowSize()) { 
        if(moreMenu.style.display === "block" || status == false) {
            moreMenu.style.opacity = "0";
            moreIcon.style.transform = "rotate(180deg)";
            setTimeout(function() {
                moreMenu.style.display = "none";
            }, 100);
        } else {
                moreIcon.style.transform = "rotate(0deg)";
                moreMenu.style.display = "block";
            setTimeout(function() {
                moreMenu.style.opacity = "100%";
            }, 0);
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
            mainMenu.style.opacity = "0";
            setTimeout(function() {
                navButton.innerHTML = `<i class="material-symbols-rounded"> menu </i>`
                mainMenu.style.display = "none";
            }, 100);
        } else {
            mainMenu.style.display = "block";
            setTimeout(function() {
                navButton.innerHTML = `<i class="material-symbols-rounded"> close </i>`
                mainMenu.style.opacity = "100%";
            }, 100)
        }
    }
}

const homeButton = document.getElementById("home-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

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
    if(window.scrollY > 0 && !isActivated) {
        console.log("Activated");

        homeButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default behavior of the link
        
            // Smoothly scroll to the top of the page
            window.scrollTo({
                top: 0
            });
        });

        if(checkWindowSize()) {
            navLinks.style.opacity = "100%";
            toggleMoreMenu(false);

        
            homeButton.classList.add("home-button-add");
            homeButton.innerHTML = `<i class="material-symbols-rounded" id="menu-icon">
            pet_supplies </i>`;
        
            isActivated = true;
        }
    } if(window.scrollY === 0 && isActivated) {
        console.log("Deactivated");

        navLinks.style.opacity = "100%";
    
        homeButton.classList.remove("home-button-add");
        homeButton.innerHTML = `<i class="material-symbols-rounded" id="menu-icon">
        pet_supplies </i> Home`;

        menuIcon.style.position = "absolute";
        menuIcon.style.top = "10px";
        menuIcon.style.left = "20px";
    
    
        isActivated = false;
    } if(window.scrollY === 0) {
        homeButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default behavior of the link
        
            window.location.href = 'index.html';
        });
    }
});

const mainImage = document.getElementById('main-img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = thumbnail.src;
            mainImage.style.opacity = 1;
        }, 100);
    });
});