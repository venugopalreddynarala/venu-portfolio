// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("Z9UWye7KR5k-DExtN"); // Replace with your actual Public Key

    // Attach click event listener to the custom button
    document.getElementById("custom-send-btn").addEventListener("click", function () {
        sendEmail();
    });

    // Define the sendEmail function
    function sendEmail() {
        console.log("Send button clicked!");

        // Get input values from the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form inputs
        if (!name || !email || !subject || !message) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }

        // Create the EmailJS parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send Email using EmailJS
        emailjs.send("service_ryul3xi", "template_c0y9su8", templateParams)
            .then(function (response) {
                console.log("✅ Email successfully sent!", response);
                alert("✅ Email sent successfully!");
                document.getElementById("contact-form").reset(); // Clear form after submission
            })
            .catch(function (error) {
                console.error("❌ EmailJS Error:", error);
                alert("❌ Failed to send email. Please check the console for details.");
            });
    }
});
