$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{ //Bagian Untuk Responsive pada Carousel
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1024:{
            items:3
        },
    }
})

