const hamburger = document.getElementById("hamburger")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active")
sidebar.classList.toggle("active")
overlay.classList.toggle("active")
})

overlay.addEventListener("click",()=>{
hamburger.classList.remove("active")
sidebar.classList.remove("active")
overlay.classList.remove("active")
})


// mobile side menu ends








// lenis smoothscroll start

// Initialize Lenis
const lenis = new Lenis({
    // duration: 0.5,    // smoothness control
    lerp: 0.05,
    smooth:true
  });
  
  // Listen for the scroll event and log the event data
  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });



// Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);



lenis.on("scroll",
  ScrollTrigger.update);



  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

// lenis smoothscroll ends

 





// gsap scrollTrigger plugin 
 gsap.registerPlugin(ScrollTrigger);
// gsap scrollTrigger plugin 


// console.log(ScrollTrigger);



// gsap time line
const tl = gsap.timeline();
// gsap timeline





// header

tl.from("header .nav-name, header .hamburger",{
  y:-100,
  opacity:0,
  duration:"1",
  stagger:"0.5",
});



// header







tl.from(".intro-container .anime-name .span-letter",{
    opacity:0,
    x:-30,
    stagger:0.2,
})




tl.from(".intro-container .info-empty-box",{
  x:30,
  duration:0.5,
  opacity:0,
  stagger:0.2,
})




tl.from(".intro-container .info-empty-box p",{
    y:30,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.2,
})





// arrow



tl.from("main .slide-arrow-icon-container .arrow-icon-second-parent",{
  y:"-70",
  opacity:"0",
  stagger:"0.5",
})




tl.to("main .slide-arrow-icon-container .arrow-icon-second-parent",{
  rotate:"180",
  scrollTrigger:{
    trigger:"main .slide-arrow-icon-container .arrow-icon-second-parent",
    scroller:"body",
    scrub:true,
    start:"top 60%",
    end:"top 40%",
  }
})

// arrow








 
gsap.from("#about-container",{
   opacity:0,
   duration:0.7,
   scrollTrigger:{
     trigger:"#about-container",
     scroller:"body",
     start: "top 50%",
     end:"top 20%",
     scrub:1,
   }
})





tl.from("#about-container h3, #about-container p",{
  opacity:0,
  y:30,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#about-container h3, #about-container p",
    scroller:"body",
    scrub:1,
    start:"top 40%",
    end:"top 20%",
  }
})












const projects = document.querySelector("#projects");
console.log(projects.offsetWidth)


function getScrollAmount() {
  let projectsWidth = projects.scrollWidth;
  return -(projectsWidth - window.innerWidth);
}



const tween = gsap.to(projects, {
  x:getScrollAmount,
  duration:3,
  ease:"none",
})




ScrollTrigger.create({
  trigger:"#projects-section",
  start:"top 0%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin:true,
  animation:tween,
  scrub:1,
  invalidateOnRefresh:true,
})











 tl.from("#projects-section h3, #projects .pro-box p,  #projects .pro-box img",{
  opacity:0,
  y:30,
  stagger:1,
  scrollTrigger:{
    trigger:"#projects-section h3, #projects .pro-box p,  #projects .pro-box img",
    scroller:"body",
    scrub:1,
    start:"top 50%",
    end:"top 0%",
  }
})








// skills cintainer starts


tl.from(".skills-container h3",{
  opacity:0,
  y:30,
  stagger:0.3,
  scrollTrigger:{
    trigger:".skills-container h3",
    scroller:"body",
    scrub:1,
    start:"top 70%",
    end:"top 50%",
  }
})







tl.from("#skills-card-container .left-1",{
  x:"-100%",
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-1",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})



tl.from("#skills-card-container .right-1",{
  x:"100%",
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .right-1",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})




tl.from("#skills-card-container .left-2",{
  x:"-100%",
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-2",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})




tl.from("#skills-card-container .right-2",{
  x:"100%",
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .right-2",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})




tl.from("#skills-card-container .left-3",{
  x:"-100%",
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-3",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})










tl.from("#skills-card-container .card .icon #fa-html5",{
  rotate:"180",
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .card .icon #fa-html5",
    start:"top 40%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})





tl.from("#skills-card-container .card .icon #fa-css3-alt",{
  rotate:"180",
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .card .icon #fa-css3-alt",
    start:"top 40%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})






tl.from("#skills-card-container .card .icon #fa-js",{
  rotate:"180",
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .card .icon #fa-js",
    start:"top 40%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})





tl.from("#skills-card-container .card .icon #gsap",{
  rotate:"180",
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .card .icon #gsap",
    start:"top 40%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})





tl.from("#skills-card-container .card .icon #lenis-icon",{
  rotate:"180",
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .card .icon #lenis-icon",
    start:"top 40%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})















tl.from("#skills-card-container .left-1 p",{
  y:-30,
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-1 p",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})





tl.from("#skills-card-container .left-2 p",{
  y:-30,
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-2 p",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})




tl.from("#skills-card-container .left-3 .lenis-p, #skills-card-container .left-3 .lenis-p2",{
  y:-30,
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .left-3 .lenis-p, #skills-card-container .left-3 .lenis-p2",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})







tl.from("#skills-card-container .right-1 p",{
  y:-30,
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .right-1 p",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})





tl.from("#skills-card-container .right-2 p",{
  y:-30,
  opacity:0,
  stagger:"0.5",
  scrollTrigger: {
    trigger:"#skills-card-container .right-2 p",
    start:"top 50%",
    end:"top 30%",
    scrub:"2",
    stagger:"2",
  }
})









// skills cintainer ends




// contact section start 

tl.to("main .contact-section .form-box",{
  scale:"1",
  rotate:"0",
  opacity:"1",
  stagger:"0.5",
  scrollTrigger:{
    trigger:"main .contact-section",
    scrub:"2",
    start:"top 0%",
    end:"top -100%",
    pin:true,
  }
})






tl.from("main .contact-section .form-box h2",{
  y:"-30",
  scrollTrigger:{
    trigger:"main .contact-section h2",
    scrub:"2",
    start:"top 0%",
    end:"top -100%",
  }
})








tl.from("main .contact-section .form-box #name-input",{
  opacity:"0",
  x:"-100%",
  rotate:"-45",
  scrollTrigger:{
    trigger:"main .contact-section #name-input",
    scrub:"2",
    start:"top 0%",
    end:"top -40%",
  }
})






tl.from("main .contact-section .form-box #email-input",{
  opacity:"0",
  x:"100%",
  rotate:"45",
  scrollTrigger:{
    trigger:"main .contact-section #email-input",
    scrub:"2",
    start:"top 0%",
    end:"top -40%",
  }
})







tl.from("main .contact-section .form-box #message-input",{
  opacity:"0",
  x:"-100%",
  rotate:"-45",
  scrollTrigger:{
    trigger:"main .contact-section #message-input",
    scrub:"2",
    start:"top 0%",
    end:"top -40%",
  }
})






tl.from("main .contact-section .form-box #form-btn",{
  opacity:"0",
  y:"70",
  scrollTrigger:{
    trigger:"main .contact-section #form-btn",
    scrub:"2",
    start:"top 0%",
    end:"top -40%",
  }
})




// contact section end 





// footer section

tl.from("footer .footer-icon-container a",{
  y:20,
  scale:0.1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"main .contact-section .form-box form",
    scroller:"body",
    scrub:"2",
    start:"bottom -40%",
    end:"bottom -42%",
  }
})





tl.from("footer h3",{
  scale:0.1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"main .contact-section .form-box form",
    scroller:"body",
    scrub:"2",
    start:"bottom -41%",
    end:"bottom -42%",
  }
})




// form


function handleSubmit(e) {
  e.preventDefault(true);
  
  
  document.getElementById("form-btn").innerText = "✔ done"
  

  alert("Message recieved 🚀 I'll get back to you faster than your WIFI drops 😅");
  
}

// form


// footer section 