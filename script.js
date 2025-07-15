document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    // Плавное появление хедера при загрузке
    setTimeout(() => {
        header.classList.add('visible');
    }, 100);

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Скролл вниз — скрыть
            header.classList.remove('visible');
        } else {
            // Скролл вверх — показать
            header.classList.add('visible');
        }

        lastScrollTop = scrollTop;
    });
});