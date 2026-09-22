// Get saved theme
let theme = localStorage.getItem("theme") || "light";

// Apply saved theme
document.body.className = theme;

// Update UI
updateThemeInfo();


// ==========================
// THEME BUTTONS
// ==========================

const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get selected theme
        theme = button.getAttribute("data-theme");

        // Save permanently
        localStorage.setItem("theme", theme);

        // Save for current session
        sessionStorage.setItem("currentTheme", theme);

        // Apply theme
        document.body.className = theme;

        // Update information
        updateThemeInfo();

    });

});


// ==========================
// RESET THEME
// ==========================

document.getElementById("clearBtn").addEventListener("click", function() {

    // Remove storage
    localStorage.removeItem("theme");
    sessionStorage.removeItem("currentTheme");

    // Default theme
    theme = "light";

    // Apply default
    document.body.className = theme;

    // Update UI
    updateThemeInfo();

});


// ==========================
// UPDATE UI
// ==========================

function updateThemeInfo() {

    // Convert theme name
    let themeName =
        theme.charAt(0).toUpperCase() +
        theme.slice(1);

    document.getElementById("themeText").innerText =
        "Current Theme: " + themeName;


    // Local Storage value

    document.getElementById("localValue").innerText =
        localStorage.getItem("theme") || "Not Set";


    // Session Storage value

    document.getElementById("sessionValue").innerText =
        sessionStorage.getItem("currentTheme") || "Not Set";

}