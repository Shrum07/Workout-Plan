function showForm(formId) {
    document.querySelectorAll(".container").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.querySelector("#login-form .form-g input[type='submit']");
    const saveGoalsButton = document.querySelector("#goal-form .form-g input[type='submit']");
    const updateProgressButton = document.querySelector("#plan-details .form-g input[type='submit']");

    if (signInButton) {
        signInButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            window.location.href = "goals.html"; 
        });
    }

    if (saveGoalsButton) {
        saveGoalsButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "plan.html";
        });
    }

    function navigateWithTransition(url) {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = url;
        }, 500); 
    }

    if (signInButton) {
        signInButton.addEventListener("click", (event) => {
            event.preventDefault();
            navigateWithTransition("goals.html");
        });
    }

    if (saveGoalsButton) {
        saveGoalsButton.addEventListener("click", (event) => {
            event.preventDefault();
            navigateWithTransition("plan.html");
        });
    }

    if (updateProgressButton) {
        updateProgressButton.addEventListener("click", (event) => {
            event.preventDefault();
            navigateWithTransition("progress.html");
        });
    }
});
