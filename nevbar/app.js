function toggle(){
    var navlinks = document.querySelector('.nav-item:nth-child(2)')
    console.log(navlinks)
    // navlinks.classList.toggle("toggle");
    // element.classList.add("mystyle");
    // element.classList.remove("mystyle");
    if(navlinks.classList.contains("toggle")){
        navlinks.classList.remove("toggle");
    }
    else{
        navlinks.classList.add('toggle')
    }
    // console.log(navlinks.classList.contains("toggle"))
    
}