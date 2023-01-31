$('ul.rostov__tabs-top').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.rostov__tabs').find('div.rostov__tabs-bottom').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.img__tabs-list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.img__tabs').find('div.img__tabs-right').removeClass('active').eq($(this).index()).addClass('active');
});



let callbtn = document.querySelector('.call');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.overlay__close');

callbtn.onclick = function () {
    overlay.style.display='flex'
};

closeBtn.onclick = function () {
    overlay.style.display='none'
};

overlay.onclick = function (event) {
    if (event.target.classList.contains('overlay')){
        overlay.style.display='none'
    }
};




var swiper = new Swiper(".clientsSwiper", {
    slidesPerView: 3,
    spaceBetween: 65,
    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
    // autoplay:{
    //     delay:2000
    // }
});