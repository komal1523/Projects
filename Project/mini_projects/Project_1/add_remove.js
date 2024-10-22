
let text=document.querySelector(".Text")

let button = document.querySelector(".btn")

let container= document.querySelector("#container")

console.log(text);
console.log(button);
console.log(container)


let flag=0
button.addEventListener("click",function(){
    if (flag==0){
         text.innerHTML="Done! Removed"
    text.style.color="red"
    button.innerHTML="Add  "
     button.style.backgroundColor="greenyellow"
    
    
    flag=1
    } else{
        text.innerHTML="Done! Selected  "
        text.style.color="greenyellow"
         button.innerHTML="Remove  "
        button.style.backgroundColor="red"
      
        flag=0
    }
   
  
})