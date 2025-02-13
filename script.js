document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("signInBtn");
    const signOutBtn = document.getElementById("signOutBtn");

    function updateButtons() {
        const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

        if (isLoggedIn) {
            signInBtn.style.display = "none";
            signOutBtn.style.display = "inline-block";
        } else {
            signInBtn.style.display = "inline-block";
            signOutBtn.style.display = "none";
        }
    }

    signInBtn.addEventListener("click", function () {
        localStorage.setItem("userLoggedIn", "true");
        alert("You are signed in!");
        updateButtons();
    });

    signOutBtn.addEventListener("click", function () {
        localStorage.removeItem("userLoggedIn");
        alert("You are signed out!");
        updateButtons();
    });

    updateButtons();
});
