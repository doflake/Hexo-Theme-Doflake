function backToTop(){
    document.documentElement.scrollIntoView({
        behavior: "smooth"
    });
}
window.onscroll = function(){
	var totopBtn = this.document.getElementById("totop");
    totopBtn.addEventListener('click',this.backToTop,false);
}