    // Locomotive Code
    const scroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    }); 

    
    // Swiper code
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor:true,
      });
    
    
    let imgs = document.querySelectorAll('.img');
    let slidingLines = document.querySelectorAll(".slidingLine");
    let lines = document.querySelectorAll(".line");

    gsap.from(".page1 h1",{
        y:100,
        delay:0.5,
        ease:Power1,
    })


    var tl = gsap.timeline({ repeat: -1 });
    let i = 0;

    function animateImages() {
        tl.to(".img", {
            zIndex: () => ++i,
            width: "100%",
            height: "100%",
            ease: "power1",
            stagger: 4,
            onComplete: () => {
                tl.to(".img", {
                    width: "0%",
                    height: "0%",
                    onComplete: animateImages 
                });
            }
        });
    }
    
    animateImages(); 
    


    gsap.to(".line",{
        duration:2,
        scaleX: 1,
        ease:Power2,
        stagger:2,
    })


    
    
    
// var tl = gsap.timeline({repeat:-1})

// tl.to("#first",{
//     width:"100%",
//     duration:2
// })
// tl.to("#first",{
//     left:"100%",
//     duration:0.1
// })
// tl.to("#first",{
//     width:0,
//     left:"0%",
//     duration:0
// })
// tl.to("#second",{
//     width:"100%",
//     duration:2
// })
// tl.to("#second",{
//     right:"100%"
// })
// tl.to("#third",{
//     width:"100%",
//     duration:2
// })
// tl.to("#third",{
//     right:"100%"
// })