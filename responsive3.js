window.addEventListener('scroll',function(){
    const nav=document.querySelector("nav");
    nav.classList.toggle("stiky",window.scrollY>0);
});
function montoggle(){
    const mnuetoggle=document.querySelector(".mnuetoggle");
    const navgation=document.querySelector(".links");
    mnuetoggle.classList.toggle("active");
    navgation.classList.toggle("active");
} 