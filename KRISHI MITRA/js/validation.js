document.getElementById("registrationForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    // Username validation
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("usernameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("usernameError").classList.add("hidden");
    }

    // Password validation
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("passwordError").classList.add("hidden");
    }

    // Mobile validation
    const mobile = document.getElementById("mobile").value.trim();
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("mobileError").classList.add("hidden");
    }

    // Aadhar validation
    const aadhar = document.getElementById("aadhar").value.trim();
    if (!/^\d{12}$/.test(aadhar)) {
        document.getElementById("aadharError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("aadharError").classList.add("hidden");
    }

    // PAN validation
    const pan = document.getElementById("pan").value.trim();
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        document.getElementById("panError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("panError").classList.add("hidden");
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
