    let imgs = document.querySelectorAll('.img');
    let slidingLines = document.querySelectorAll(".slidingLine");
    let lines = document.querySelectorAll(".line");


    var tl = gsap.timeline({repeat:-1})
    let i = 0;
    tl.to(".img",{
     zIndex : i + 1,
     width : "100%",
     height : "100%",
     stagger :4,
    })

    //  function pg3() {
    //     lines.forEach((line, i) => {
    //         setTimeout(() => {
    //             // Scale the line up    
    //             line.style.transform = "scaleX(1)";
    //             // line.style.transition = "transform 1s ease"; // Apply easing with CSS transition
    //         }, i * 4000);
    //     });
    //     slidingLines.forEach((line,i)=>{
    //         setTimeout(() => {
    //             // Slide the line
    //             line.style.transform = "translate(0%)";
    //             // line.style.transition = "transform 1s ease"; // Apply easing with CSS transition
    //         }, i * 5000); // Increased delay for sliding animation
    //     })
    //     lines.forEach((line,i)=>{
    //         setTimeout(() => {
    //             // Reset line transformations
    //             line.style.transformOrigin = "right";
    //             line.style.transform = "scaleX(0)";
    //         }, i *8000); // Increased delay for resetting animation
    //         line.style.transformOrigin = "left";
    //     })
    //     imgs.forEach((img, i) => {
    //         // console.log(i)
    //         setTimeout(() => {
    //             // Adjust image zIndex and dimensions
    //             img.style.zIndex = i + 1;
    //             img.style.width = "100%";
    //             img.style.height = "100%";
    //         }, i * 4000);
    //     });   
    // }

    // function runAnimation(){
    //     pg3();
    //     setInterval(runAnimation,9000);
    // } 
    // runAnimation();
   

    // pg3();
    // setInterval((e,i) => {
    //     imgs.forEach((img, i) => {
    //         // console.log(i)
    //         setTimeout(() => {
    //             // Adjust image zIndex and dimensions
    //             img.style.zIndex = i + 1;
    //             img.style.width = "100%";
    //             img.style.height = "100%";
    //         }, i * 4000);
    //     });   
    // }, 4100); 


   

    
    
    
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