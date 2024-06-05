document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function (carousel) {
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        const images = carousel.querySelector(".carousel-images");
        let currentIndex = 0;

        function updateImagePosition() {
            const imageWidth = carousel.clientWidth; // Use the width of the carousel container
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

        // Lazy load sections with animation
        const sections = document.querySelectorAll('section');
        const loginSection = document.querySelector('#login');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
        observer.observe(loginSection);
    });

    const addSectionButton = document.getElementById('addSection');
    addSectionButton.addEventListener('click', function () {
        const loginSection = document.getElementById('login');
        const newSection = document.createElement('section');
        newSection.innerHTML = `
            <h2>Nova Seção</h2>
            <p>Esta é uma nova seção adicionada dinamicamente ao DOM.</p>
            <div class="carousel">
                <div class="carousel-images">
                    <img src="/img/nova-imagem1.jpg" alt="Nova imagem 1">
                    <img src="/img/nova-imagem2.jpg" alt="Nova imagem 2">
                </div>
                <button class="prev">❮</button>
                <button class="next">❯</button>
            </div>
            <section id="new-login">
                <h2>Novo Formulário de Login</h2>
                <form id="new-login-form" onsubmit="return validateNewLogin()">
                    <div>
                        <label for="new-username">Usuário:</label>
                        <input type="text" id="new-username" name="new-username" required>
                    </div>
                    <div>
                        <label for="new-password">Senha:</label>
                        <input type="password" id="new-password" name="new-password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p id="new-login-message"></p>
            </section>
        `;
        loginSection.parentNode.replaceChild(newSection, loginSection);

        // Adicionar funcionalidade de carrossel à nova seção
        const prevButton = newSection.querySelector(".prev");
        const nextButton = newSection.querySelector(".next");
        const images = newSection.querySelector(".carousel-images");
        let currentIndex = 0;

        function updateImagePosition() {
            const imageWidth = newSection.clientWidth; // Use the width of the new section
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

function validateNewLogin() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const message = document.getElementById('new-login-message');

    if (username === "newadmin" && password === "newadmin") {
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
