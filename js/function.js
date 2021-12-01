
// wow start

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

// wow end

// gsap start

if(window.innerWidth > 992){
gsap.registerPlugin(ScrollTrigger);


// header-banner start

tl = gsap.timeline();
tl.fromTo(".tribe-image",{ y:150,opacity:0},{y:0,duration:.5,opacity:1,ease:Power1.easeInOut});
tl.fromTo(".header-banner h1 span",{y:80},{y:0,duration:.5,ease:Power1.easeInOut},"-=.2");
tl.fromTo(".header-banner h4 span",{y:80},{y:0,duration:.5,ease:Power1.easeInOut},"-=.2");
tl.fromTo(".header-banner ul li",{y:60,opacity:0},{opacity:1,stagger: .1,y:0,duration:.3,ease:Power1.easeInOut},"-=.2");
tl.fromTo(".banner-1",{ y:200,opacity:0},{y:0,duration:.5,opacity:1},"-=.2");
tl.fromTo(".banner-2",{ y:200,opacity:0},{y:0,duration:.5,opacity:1},"-=.2");

 
gsap.fromTo(".header-banner h6",{x:"10%"}, {
  scrollTrigger: {
    startTrigger: ".header-banner",
    endTrigger: ".header-banner",
    trigger: ".header-banner h6",
    start: "top 80%",
    end: "bottom 0%",
    scrub: .1,
    // markers:true,
    toggleActions: "restart pause reverse pause"
  },
  x: -600
});
// header-banner end


// project start


gsap.fromTo(".project-top .box",{y:100},{
  scrollTrigger:{
    trigger:".project-top .box",
    toggleAction: "play none none none"
  },
  y:0,stagger:.4
});


gsap.fromTo(".project-bottom h2",{y:100},{
  scrollTrigger:{
    trigger:".project-bottom h2",
    toggleAction: "play none none none"
  },
  y:0
});

gsap.fromTo(".project-bottom p",{y:100},{
  scrollTrigger:{
    trigger:".project-bottom p",
    toggleAction: "play none none none"
  },
  y:0
});


gsap.fromTo(".project-bottom .img-2",{x:-100,opacity:0},{
  scrollTrigger:{
 
    startTrigger: ".project-bottom .right",
    endTrigger: ".project-bottom .right",
    trigger: ".project-bottom .img-1",
    start: "80 100%",
    end: "bottom 0%", 
    toggleAction: "play none none none"
  },
  x:0,opacity:1,duration:1
});

gsap.fromTo(".project-bottom .img-1",{y:100,opacity:0},{
  scrollTrigger:{
    startTrigger: ".project-bottom .right",
    endTrigger: ".project-bottom .right",
    trigger: ".project-bottom .img-1",
    start: "85% 100%",
    end: "bottom 0%", 
    toggleAction: "play none none none"
  },
  y:0,opacity:1,delay:.2,duration:.5
});


// project end


// business start

gsap.fromTo(".business img",{y:400,autoAlpha:0},{
  scrollTrigger:{
    trigger:".business img",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,delay:.2,ease:Power1.easeInOut
});



gsap.fromTo(".business h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".business h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});


gsap.fromTo(".business p",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".business p",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,stagger:.5,ease:Power1.easeInOut
});


// business end

// challenge start

gsap.fromTo(".challenge h2 span",{y:80},{
  scrollTrigger:{
    trigger:".challenge h2 span",
    toggleAction: "play none none none"
  },
  y:0,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo(".challenge nav",{autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge nav",
    toggleAction: "play none none none"
  },
  autoAlpha:1,duration:1,ease:Power1.easeInOut
});

gsap.fromTo(".challenge nav",{autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge nav",
    toggleAction: "play none none none"
  },
  autoAlpha:1,duration:1,ease:Power1.easeInOut
});

gsap.fromTo(".challenge h6",{y:60,autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge h6",
    toggleAction: "play none none none"
  },
  y:0,autoAlpha:1,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo(".challenge h5 span",{y:50,autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge h5 span",
    toggleAction: "play none none none"
  },
  y:0,autoAlpha:1,duration:.8,ease:Power1.easeInOut
});

gsap.fromTo(".challenge p",{y:50,autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge p",
    toggleAction: "play none none none"
  },
  y:0,autoAlpha:1,duration:.8,ease:Power1.easeInOut
});

gsap.fromTo(".challenge .sol-1",{y:300,autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge .sol-1",
    toggleAction: "play none none none"
  },
  y:0,autoAlpha:1,duration:.8,ease:Power1.easeInOut
});

gsap.fromTo(".challenge .sol-2",{y:300,autoAlpha:0},{
  scrollTrigger:{
    trigger:".challenge .sol-2",
    toggleAction: "play none none none"
  },
  y:0,autoAlpha:1,duration:.9,ease:Power1.easeInOut
});


// challenge end

// fun start

gsap.fromTo(".fun h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".fun h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo(".fun .box",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".fun .box",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,stagger:.19
});

// fun end

// wireframes start

gsap.fromTo(".wireframes h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".wireframes h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo(".wireframes img",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".wireframes img",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,stagger:.3
});


// wireframes end

// visual start

gsap.fromTo(".visual h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".visual h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo("#visual_slider",{autoAlpha:0},{
  scrollTrigger:{
    trigger:"#visual_slider",
    toggleAction: "play none none none"
  },
  autoAlpha:1,duration:.8,ease:Power1.easeInOut
});

gsap.fromTo(".iphone-image",{autoAlpha:0},{
  scrollTrigger:{
    trigger:".iphone-image",
    toggleAction: "play none none none"
  },
  autoAlpha:1,duration:.8,ease:Power1.easeInOut
});


 
// visual end

// tech-applied start


gsap.fromTo(".tech-applied h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".tech-applied h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});

gsap.fromTo(".tech-applied .box",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".tech-applied .box",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,stagger:.3
});

// tech-applied end

// our-recent start

gsap.fromTo(".our-recent h2 span",{y:100,autoAlpha:0},{
  scrollTrigger:{
    trigger:".our-recent h2 span",
    toggleAction: "play none none none"
  },
  autoAlpha:1,y:0,duration:.5,ease:Power1.easeInOut
});

gsap.set(".our-recent img",{y:200,margin:"0 auto",left:"0",right:"0"});

var ow = gsap.timeline();

ow.to(".our-recent img",{
  scrollTrigger:{
    trigger:".our-recent img",
    toggleAction: "play none none none"
  },
  y:0,duration:.8,delay:.5
});

ow.fromTo(".our-recent img.recent-2",{margin:"0 auto",top:"76px"},{
  scrollTrigger:
  {
    trigger:".our-recent img.recent-2",
    toggleAction: "play none none none"
  },
  y:0,left:"130px",right:"unset",margin:0
});

ow.fromTo(".our-recent img.recent-4",{margin:"0 auto",top:"76px"},{
  scrollTrigger:
  {
    trigger:".our-recent img.recent-4",
    toggleAction: "play none none none"
  },
  y:0,right:"120px",left:"unset",margin:0
},"-=.5");

ow.fromTo(".our-recent img.recent-1",{margin:"0 auto",top:"131px"},{
  scrollTrigger:
  {
    trigger:".our-recent img.recent-1",
    toggleAction: "play none none none"
  },
  y:0,left:"-100px",right:"unset",margin:0
});

ow.fromTo(".our-recent img.recent-5",{margin:"0 auto",top:"131px"},{
  scrollTrigger:
  {
    trigger:".our-recent img.recent-5",
    toggleAction: "play none none none"
  },
  y:0,right:"-100px",left:"unset",margin:0
},"-=.5");


// our-recent end
}
// responsive start

ScrollTrigger.matchMedia({
	
 
  "(max-width: 1660px)": function() {

    console.log("960 hello")
     
  },
  
  "(max-width: 1440px)": function() {

     
     
  },
  "(max-width: 1366px)": function() {

     
     
  },
  "(max-width: 1280px)": function() {

     
     
  },
  "(max-width:1199px)": function() {

  },  

  "(max-width: 991px)": function() {
  
  },
	
  
  "all": function() {
    
  }
	
}); 
 
// responsive end

// gsap end


// slider start
 

jQuery( '#visual_slider' ).owlCarousel( {
  margin: 20,
  loop: true,
  dots:false,
  stagePadding:300,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    320: {
      stagePadding:0,
      items:1,
      nav: true
      
    },
    576: {
      stagePadding:220,
      items: 1,
      nav: false
    },
    768: {
      stagePadding:0,
      items: 3,
      nav: false
    },
    1199: {
      stagePadding:100, 
      items: 3,
    },
    1280: {
      stagePadding:200, 
      items: 3,
    },
    1366: {
      items: 3,
      nav: false,

    }
  }
} ); 

// slider end