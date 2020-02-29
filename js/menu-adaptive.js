(function () {
    'use strict'
    let btn = document.getElementById('toggler')
    let close = document.getElementById('close')
    let links = document.querySelectorAll('.menu__link')

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.add('menu--opened')
        btn.style.display = 'none'
    })

    close.addEventListener('click', (e) => {
        btn.classList.remove('menu--opened')
        btn.style.display = 'block'
    })


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (document.documentElement.clientWidth <= 992) {
                btn.classList.remove('menu--opened')
                btn.style.display = 'block'
            }
        })
    })

    let w = null;
    window.addEventListener('resize', () => {
        w = document.documentElement.clientWidth
        if (w >= 992) {
            btn.style.display = 'none'
        } else if (w <= 992 && !btn.classList.contains('menu--opened')) { btn.style.display = 'block' }
    })



})()