window.onscroll = function() {
    const scrollButton = document.querySelector('.uprnd');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

document.querySelector('.uprnd').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelectorAll('.menu a, .usidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const sidebar = document.querySelector('#sidebar-container');

    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (aboutPosition < screenPosition) {
        sidebar.classList.add('show');
    } else {
        sidebar.classList.remove('show');
    }
});
