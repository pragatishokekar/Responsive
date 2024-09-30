var dd = document.querySelector(".container")

var love = document.querySelector("i");

dd.addEventListener("dblclick",function(){

    love.style.transform="translate(-50%,-50%) scale(1)";

    setTimeout(function(){

        love.style.transform="translate(-50%,-50%) scale(0)";
    
    },2000)
})


