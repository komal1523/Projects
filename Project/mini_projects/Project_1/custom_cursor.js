

let container=document.querySelector("#container")

let csr = document.querySelector(".cursor")

container.addEventListener("mousemove",function(dets){
   
   csr.style.left= dets.x +"px"
   csr.style.top= dets.y +"px"
   
})
