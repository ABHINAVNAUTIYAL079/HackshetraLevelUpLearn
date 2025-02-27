document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("authForm");
    const nameField = document.getElementById("nameField");
    const formTitle = document.getElementById("formTitle");
    const submitButton = document.getElementById("submitButton");
    const toggleButton = document.getElementById("toggleButton");
    const successMessage = document.getElementById("successMessage");

    let isSignup = true;

    toggleButton.addEventListener("click", () => {
        isSignup = !isSignup;
        formTitle.textContent = isSignup ? "Sign Up" : "Sign In";
        submitButton.textContent = isSignup ? "Sign Up" : "Sign In";
        toggleButton.textContent = isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up";
        nameField.style.display = isSignup ? "block" : "none";
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        let isValid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        successMessage.textContent = "";

        if (isSignup && !name) {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        if (!email) {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError.textContent = "Email is invalid";
            isValid = false;
        }

        if (!password) {
            passwordError.textContent = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = `${isSignup ? "Registration" : "Login"} successful!`;
            successMessage.classList.add("show");
            form.reset();
        }
    }
});
