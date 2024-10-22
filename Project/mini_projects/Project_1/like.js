let container = document.querySelector(".container");

let like = document.querySelector("i");

container.addEventListener("dblclick", function () {
  console.log("liked");
  like.style = transform = "transform: translate(-50%, -50%) scale(1)";
  like.style.opacity = "0.7";


  setTimeout(function () {

    like.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    like.style = transform = "transform: translate(-50%, -50%) scale(0)";
    like.style.opacity = "0";
  }, 2000);



});
