//create a element with any id that you want to add tyhe progress bar to.
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
