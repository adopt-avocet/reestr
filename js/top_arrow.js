const topArrow = document.querySelector("#top_arrow");

topArrow.onclick = function() {
    window.scrollTo(0, 0);  
};

window.addEventListener('scroll', function() {
    
    topArrow.hidden = (window.scrollY < document.documentElement.clientHeight/2);
});