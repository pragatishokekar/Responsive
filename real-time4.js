var el1=document.querySelectorAll(".elem");

el1.forEach(function(val){

    
    val.addEventListener("mouseenter",function(){

        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave",function(){
    
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove",function(dets){

        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
    });
});

// var Eimg=document.querySelector("#elem1 img");

// el1.addEventListener("mousemove" , function(dets){

//     Eimg.style.left = dets.x+"px"
//     Eimg.style.top = dets.y+"px"
// })
// el1.addEventListener("mouseenter" , function(dets){

//     Eimg.style.opacity = 1
// })
// el1.addEventListener("mouseleave" , function(dets){

//     Eimg.style.opacity = 0
// })