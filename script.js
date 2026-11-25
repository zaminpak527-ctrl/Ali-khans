
// Mobile Menu Function

function toggleMenu() {

    let menu = document.getElementById("navLinks");

    menu.classList.toggle("active");

}

// Close menu after clicking a link

document.querySelectorAll("#navLinks a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});

// Welcome Message

console.log("Welcome to Ali's Personal Portfolio!");

