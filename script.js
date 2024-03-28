


window.addEventListener("mousemove",(dets)=>{
    

    var square=document.querySelector(".square");
  var move =  gsap.utils.mapRange(0,window.innerWidth,250,window.innerWidth-250,dets.clientX)

    gsap.to(".square",{
        left:move + "px",
        ease:Power3
    })
   console.log(move);

})