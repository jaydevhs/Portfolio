document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";  // <-- Correct path
    link.download = "Jaydev_HS_Resume.pdf";
    link.click();
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent! (Front-end only)");
});
