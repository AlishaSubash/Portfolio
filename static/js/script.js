document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "🌞 Light Mode";
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });
});