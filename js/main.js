// слайдер
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,  
    autoplay: {

    },
});

//модаалка сертификатов
document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal1');
    const openModalBtns = document.querySelectorAll('.open-modal-btn1');
    const closeModalSpans = document.querySelectorAll('.close1');

    openModalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal-target1');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeModalSpans.forEach((span) => {
        span.addEventListener('click', () => {
            const modal = span.closest('.modal1');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

//модалка продуктов 
document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalSpans = document.querySelectorAll('.close');

    openModalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeModalSpans.forEach((span) => {
        span.addEventListener('click', () => {
            const modal = span.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

//якарные ссылки
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(function(item) {
                item.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});