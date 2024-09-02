document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    // hiển thị side bar khi nhấp vào button
    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // đóng side bar khi nhấp ra ngoài khu vực
    document.addEventListener("click", function(event) {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});
