$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["IT Student", " Software Developer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["IT Student", "Software Developer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed=new Typed(".typing-3",{
        strings:["Having Question??","Feel free to Ask!",],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "som.vksingh99@gmail.com",
        Password : "6A7A4103B0DDB12114DEC3CC8BF517F0FC63",
        To : 'som.vksingh99@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name : "+ document.getElementById("name").value 
        + "<br> Email :"+ document.getElementById("email").value
        + "<br> Message :"+document.getElementById("message").value
    }).then(
      message => alert("message sent successfully")
    );
    
}