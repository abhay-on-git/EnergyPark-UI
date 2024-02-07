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
    
      gsap.from(".page1 h1",{
        y:100,
        delay:0.5,
        ease:Power1,
    })
    
    let imgs = document.querySelectorAll('.img');
    let slidingLines = document.querySelectorAll(".slidingLine");
    let lines = document.querySelectorAll(".line");
    let h1s = document.querySelectorAll(".page3 .right h1");




    let index = 0;

setInterval(() => {
    let i = index % 3; 
    if (i === 0) {
    //   console.log("Calling a1");
      a1(i, index);
    } else if (i === 1) {
    //   console.log("Calling a2");
      a2(i, index);
    } else {
    //   console.log("Calling a3");
      a3(i, index);
    }
    index++; 
}, 7000);

function a1(i, index) {
    // console.log("Inside a1");
    gsap.set(imgs[i], {
        zIndex: () => "0",
        width: "0%",
        height: "0%",
    });
    gsap.set(h1s[i], {
        color: "initial", 
    });
    gsap.set(lines[i], {
        scaleX: 0,
        transformOrigin: "right",
    });
    gsap.set(slidingLines[i], {
        x: -500,
    });
    var tl = gsap.timeline();
    tl.to(imgs[i], {
        duration:1,
        zIndex: () => ++index,
        width: "100%",
        height: "100%",
        ease: "power1",
    });
    var tl1 = gsap.timeline();
    tl1.to(h1s[i], {
        duration: 1,
        color: "black", 
    });
    
    tl1.to(lines[i],{
        scaleX: 1,
        ease:Power2,
        duration:1,
    })
    tl1.to(slidingLines[i],{
        duration:2.5,
        x:"100%",
        ease:Power2,
    })
    tl1.to(lines[i],{
        transformOrigin: "right",
        duration:2.5,
        scaleX: 0,
        ease:Power2,
        onComplete:()=>{
            gsap.to(h1s[i],{
                color: "gray", 
            })
        }
    });
}

function a2(i, index) {
    // console.log("Inside a2");
    gsap.set(imgs[i], {
        zIndex: () => "0",
        width: "0%",
        height: "0%",
    });
    gsap.set(h1s[i], {
        color: "initial", 
    });
    gsap.set(lines[i], {
        scaleX: 0,
        transformOrigin: "right",
    });
    gsap.set(slidingLines[i], {
        x: -500,
    });
    var tl = gsap.timeline();
    tl.to(imgs[i], {
        duration:1,
        zIndex: () => ++index,
        width: "100%",
        height: "100%",
        ease: "power1",
    });
    var tl1 = gsap.timeline();
    tl1.to(h1s[i], {
        duration: 1,
        color: "black", 
    });
    
    tl1.to(lines[i],{
        scaleX: 1,
        ease:Power2,
        duration:1,
    })
    tl1.to(slidingLines[i],{
        duration:2.5,
        x:"100%",
        ease:Power2,
    })
    tl1.to(lines[i],{
        transformOrigin: "right",
        duration:2.5,
        scaleX: 0,
        ease:Power2,
        onComplete:()=>{
            gsap.to(h1s[i],{
                color: "gray", 
            })
        }
    });
}

function a3(i, index) {
    // console.log("Inside a3");
    gsap.set(imgs[i], {
        zIndex: () => "0",
        width: "0%",
        height: "0%",
    });
    gsap.set(h1s[i], {
        color: "initial", 
    });
    gsap.set(lines[i], {
        scaleX: 0,
        transformOrigin: "right",
    });
    gsap.set(slidingLines[i], {
        x: -500,
    });
    var tl = gsap.timeline();
    tl.to(imgs[i], {
        duration:1,
        zIndex: () => ++index,
        width: "100%",
        height: "100%",
        ease: "power1",
    });
    var tl1 = gsap.timeline();
    tl1.to(h1s[i], {
        duration: 1,
        color: "black", 
    });
    
    tl1.to(lines[i],{
        scaleX: 1,
        ease:Power2,
        duration:1,
    })
    tl1.to(slidingLines[i],{
        duration:2.5,
        x:"100%",
        ease:Power2,
    })
    tl1.to(lines[i],{
        transformOrigin: "right",
        duration:2.5,
        scaleX: 0,
        ease:Power2,
        onComplete:()=>{
            gsap.to(h1s[i],{
                color: "gray", 
            })
        }
    });
}

    // let count = 0;
    // let index = 0;
    
    // setInterval(() => {
    //     let i = index % 3;
    //     // i = count % 3;
    //     // count++;
    //     // i = (i) % 3;

    //     if (i === 0) {
    //       a1(i,index);
    //     } else if (i === 1) {
    //       a2(i,index);
    //     } else {
    //       a3(i,index);
    //     }
    //   }, 7000);


    // function a1(i,index){
    //         // var tl = gsap.timeline();
    //         // tl.to(imgs[i], {
    //         //     zIndex: () => ++index,
    //         //     width: "100%",
    //         //     height: "100%",
    //         //     ease: "power1",
    //         //     // stagger:4,
    //         // });
    //         // var tl1 = gsap.timeline();
    //         // tl1.to(h1s[i], {
    //         //     duration: 1,
    //         //     color: "black", 
    //         //     stagger:-1,
    //         // });
            
    //         // tl1.to(lines[i],{
    //         //     scaleX: 1,
    //         //     ease:Power2,
    //         //     duration:1,
    //         //     stagger:1,
    //         // })
    //         // tl1.to(slidingLines[i],{
    //         //     duration:3,
    //         //     x:"100%",
    //         //     ease:Power2,
    //         //     stagger:1,
    //         // })
    //         // tl1.to(lines[i],{
    //         //     transformOrigin: "right",
    //         //     duration:3,
    //         //     scaleX: 0,
    //         //     ease:Power2,
    //         //     onComplete:()=>{
    //         //         gsap.to(h1s[i],{
    //         //             color: "gray", 
    //         //         })
    //         //         gsap.to(lines[i],{
    //         //             autoAlpha: 0, 
    //         //         })
    //         //     }
    //         // }),
    //         // i++;
    // }
    // function a2(i,index){
    //         var tl = gsap.timeline();
    //         tl.to(imgs[i], {
    //             zIndex: () => ++index,
    //             width: "100%",
    //             height: "100%",
    //             ease: "power1",
    //             stagger:4,
    //         });
    //         var tl1 = gsap.timeline();
    //         tl1.to(h1s[i], {
    //             duration: 1,
    //             color: "black", 
    //             stagger:-1,
    //         });
            
    //         tl1.to(lines[i],{
    //             scaleX: 1,
    //             ease:Power2,
    //             duration:1,
    //             stagger:1,
    //         })
    //         tl1.to(slidingLines[i],{
    //             duration:3,
    //             x:"100%",
    //             ease:Power2,
    //             stagger:1,
    //         })
    //         tl1.to(lines[i],{
    //             transformOrigin: "right",
    //             duration:3,
    //             scaleX: 0,
    //             ease:Power2,
    //             onComplete:()=>{
    //                 gsap.to(h1s[i],{
    //                     color: "gray", 
    //                 })
    //                 gsap.to(lines[i],{
    //                     autoAlpha: 0, 
    //                 })
    //             }
    //         })
    //         i++;
    //     }
    
    // function a3(i,index){
    //         var tl = gsap.timeline();
    //         tl.to(imgs[i], {
    //             zIndex: () => ++index,
    //             width: "100%",
    //             height: "100%",
    //             ease: "power1",
    //             stagger:4,
    //         });
    //         var tl1 = gsap.timeline();
    //         tl1.to(h1s[i], {
    //             duration: 1,
    //             color: "black", 
    //             stagger:-1,
    //         });
            
    //         tl1.to(lines[i],{
    //             scaleX: 1,
    //             ease:Power2,
    //             duration:1,
    //             stagger:1,
    //         })
    //         tl1.to(slidingLines[i],{
    //             duration:3,
    //             x:"100%",
    //             ease:Power2,
    //             stagger:1,
    //         })
    //         tl1.to(lines[i],{
    //             transformOrigin: "right",
    //             duration:3,
    //             scaleX: 0,
    //             ease:Power2,
    //             onComplete:()=>{
    //                 gsap.to(h1s[i],{
    //                     color: "gray", 
    //                 })
    //                 gsap.to(lines[i],{
    //                     autoAlpha: 0, 
    //                 })
    //             }
    //         })
    //         i=0;
    // }


    // var tl = gsap.timeline({ repeat: -1 });
    // let i = 0;

    // function animateImages() {
    //     tl.to(".img", {
    //         zIndex: () => ++i,
    //         width: "100%",
    //         height: "100%",
    //         ease: "power1",
    //         stagger:{
    //             amount:12,
    //         },
    //         onComplete: function() {
    //             gsap(".img",{
    //                 opacity:0,
    //                 scale:0,
    //             })
    //             tl; 
    //         }
    //     });
    // }
    
    // animateImages();
    
    
    // var tl1 = gsap.timeline({ repeat: -1 });
    // tl1.to(".line",{
    //     scaleX: 1,
    //     ease:Power2,
    //     duration:1,
    //     stagger:1,
    // })
    // tl1.to(".slidingLine",{
    //     duration:1,
    //     x:"100%",
    //     ease:Power2,
    // })



    
    
    
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