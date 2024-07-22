var typed = new Typed(".text",{
    strings:["Frontend Developer", "MERN Stack Developer"],
    typeSpeed : 20,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

var tablinks=document.getElementsByClassName("tab-inks");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // event.currentTarget.classList.add("active-link");
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}