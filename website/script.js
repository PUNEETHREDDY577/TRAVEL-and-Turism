const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListner("click", () =>{
  hamburger.classlist.toggle("active");
})
avmenu.addEventListner("click", () =>{
  navmenu.classlist.toggle("active");
})

document.querySelectorAll(".nav-link").foreach(n => n.
addEventListner("click", () =>{
  hamburger.classlist.remove("active");
  navmenu.classlist.remove("active");
}))
