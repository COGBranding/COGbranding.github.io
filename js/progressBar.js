function progressBar(selector_id){
    const post = document.getElementById(selector_id);
    const progress = document.getElementById("reading-progress");
    let inViewport = false;

    let observer = new IntersectionObserver(handler);

    observer.observe(post);

    //Whenever the post comes in or out of view, this handler is invoked.
    function handler(entries, observer) {
    for (entry of entries) {
        if (entry.isIntersecting) {
        inViewport = true;
        } else {
        inViewport = false;
        }
    }
    }

    // Get the percentage scrolled of an element. It returns zero if its not in view.
    function getScrollProgress(el) {
    let coords = el.getBoundingClientRect();
    let height = coords.height;
    let progressPercentage = 0;

    if (inViewport && coords.top < 0) {
        progressPercentage = (Math.abs(coords.top) / height) * 100;
    }

    return progressPercentage;
    }

    function showReadingProgress() {
    progress.setAttribute("value", getScrollProgress(post));
    }

    //scroll event listener
    window.onscroll = showReadingProgress;
}
