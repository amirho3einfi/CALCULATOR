let output= document.querySelector(".text")
let vals= document.querySelectorAll(".val")
let clearBut=document.querySelector(".ac")
let delBut=document.querySelector(".del")
let equalBut=document.querySelector(".equal")




vals.forEach(val=>{
    val.addEventListener("click",()=>{
        output.value+=val.value;
    } );
});

clearBut.addEventListener("click",()=>{
    output.value="";
});

delBut.addEventListener("click", ()=>{
    output.value=output.value.slice(0,-1);
});

equalBut.addEventListener("click",()=>{
    output.value=eval(output.value)
})




