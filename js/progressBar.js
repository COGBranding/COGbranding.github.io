//create a element with any id that you want to add the progress bar to.
//pass the element id to this function and it will handle the rest

function progressBar(selector_id){
	const scrollline = document.querySelector('#'+ selector_id);

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);
}

//create a element with any class to create a follower.
//pass the element class to this function and it will handle the rest

function mouse_follower(selecter_class){

    $(document).on("click mousemove","body",function(e){ 
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x ;
        var newposY = y; $("." + selecter_class ).css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    });

}