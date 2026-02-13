
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(q) {
    q.addEventListener("click", function() {
        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Simple Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        message.textContent = "Please fill all required fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thank you! We will contact you soon.";
    message.style.color = "green";

    form.reset();
});
