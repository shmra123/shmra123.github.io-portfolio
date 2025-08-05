let navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",makeACross);


function makeACross(){
    navToggler.classList.toggle("active");

    let nav=document.querySelector(".nav");
    nav.classList.toggle("open");
    let homecontent=document.querySelector(".main-container");
    // let contactContent=document.querySelecter(".contact")

    if(nav.classList.contains("open"))
    {
        nav.style.maxHeight=nav.scrollHeight+"px";
        console.log(nav.style.maxHeight);
        homecontent.style.marginTop=nav.scrollHeight+20+"px";
        // contactContent.style.marginTop=nav.scrollHeight+20+"px";
    }
    else{
        nav.removeAttribute("style");
        homecontent.removeAttribute("style");
        // contactContent.removeAttribute("style");
    }
}

