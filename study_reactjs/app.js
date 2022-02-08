const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   const currentColor = h1.style.color;
   let newColor;
   if(currentColor === "blue"){
      newColor = "tomato";      
   }else{
      newColor = "blue";
   }
   h1.style.color=newColor
}

function handleMouseEnter(){
   h1.innerText ="Mouse is here!~";
}

function handleMouseLeave(){
   h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
   document.body.style.backgroundColor = "tomato";   
}

function handleWindowCopy(){
   alert("copier");
}

function handleWindowOffline(){
   alert("SOS no WIFI")
}

function handleWindowOnline(){
   alert("Good on WIFI")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);