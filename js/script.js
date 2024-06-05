function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (username === "admin" && password === "admin") {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
        alert("Login bem-sucedido!");
        return true;
    } else {
        message.textContent = "Nome de usuário ou senha incorretos.";
        message.style.color = "red";
        alert("Nome de usuário ou senha incorretos.");
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function (carousel) {
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        const images = carousel.querySelector(".carousel-images");
        let currentIndex = 0;

        function updateImagePosition() {
            const imageWidth = carousel.querySelector("img").clientWidth;
            images.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }

        function nextImage() {
            if (currentIndex < images.children.length - 1) {
                currentIndex++;
                updateImagePosition();
            }
        }

        function prevImage() {
            if (currentIndex > 0) {
                currentIndex--;
                updateImagePosition();
            }
        }

        nextButton.addEventListener("click", nextImage);
        prevButton.addEventListener("click", prevImage);

        window.addEventListener("resize", updateImagePosition);
    });
});
