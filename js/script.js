//menu icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
//schrolls
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remover icone menur
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

//MODO NOTURNO

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

//scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { delay: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

const btnLerMais = document.querySelectorAll(".ler");

btnLerMais.forEach((btn) => {
    btn.addEventListener("click", function () {
        const divMais = this.closest(".services-box").nextElementSibling;
        const boxes = document.querySelectorAll(".services-box");
        boxes.forEach((box) => {
            box.style.display = "none";
        });

        divMais.style.display = "block";
    });
});

// botão fechar

const btnFechar = document.querySelectorAll(".fechar");

btnFechar.forEach((btn) => {
    btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        const boxes = document.querySelectorAll(".services-box");

        boxes.forEach((box) => {
            box.style.display = "unset";
        });

        const divMais = this.closest(".services-box-mais");
        divMais.style.display = "none";
    });
});
