/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName("section");
const menu = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const addNavItemsToMenu = () => {
    let fragment = new DocumentFragment();
    for(let section of sections) {
        let listItem = document.createElement("li");
        let listItemLink = document.createElement("a");
        listItemLink.setAttribute("href", `${section.id}`);
        listItemLink.classList.add("menu__link");
        listItemLink.innerHTML = section.dataset["nav"];
        listItem.appendChild(listItemLink);
        fragment.appendChild(listItem);
    }
    menu.appendChild(fragment);
}

const setActiveSection = () => {
    for(let section of sections){
        let currSectionTopValue = section.getBoundingClientRect().top;
        if(currSectionTopValue > -250 && currSectionTopValue < 500){
            section.classList.add("your-active-class");

        }
        else {
            section.classList.remove("your-active-class");
        }
    }
}

// build the nav
addNavItemsToMenu();


// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
    setActiveSection();
})


// Scroll to anchor ID using scrollTO event
const navLinks = document.querySelectorAll("#navbar__list a");
for(let navLink of navLinks) {
    navLink.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(navLink.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        })
    })
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


