var istate = document.querySelector("h5")

var addF = document.querySelector("#add")
var check=0;

addF.addEventListener("click",function(){

    if(check ==0){
        istate.innerHTML="Friends";
        istate.style.color="green";
        addF.innerHTML="Remove "
        check=1;
    }
    else{

        istate.innerHTML="Stranger";
        istate.style.color="rgba(241, 79, 79, 0.733)"
        addF.innerHTML="Add Friends "
        check=0;
    }
    

})

// var remm=document.querySelector("#rem")

// remm.addEventListener("click",function(){
//     istate.innerHTML="Stranger";
//     istate.style.color="rgba(241, 79, 79, 0.733)"
// })

