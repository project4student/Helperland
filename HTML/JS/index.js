$('window').on('scroll',()=>{
    console.log(window.scrollY);
    // if(window.scrollY>10){
    //     $('.nav').css("background",'#555');
    // }
    // else{
    //     $('.nav').css("background",'trasperant');
    // }
})

$('.hamburger').click(()=>{
    $('.hamburger').toggleClass('toggle');
    // console.log('click')
    $('.navbar').toggleClass('vertical-navbar');
})
