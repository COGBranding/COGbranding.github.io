function sectionReveal() {
    const diviSection = document.querySelectorAll(".et_pb_section");

    for (const section of diviSection) {
        section.classList.add("appear");
    }    
    
    const cb = function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('inview');
            } else {
                entry.target.classList.remove('inview');
            }
        });
    }

    const io = new IntersectionObserver(cb);
    io.observe(appear);
}

function animate(animation, speed) {
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
        // IE Fallback
        function(callback) {
            window.setTimeout(callback, 1000 / 60)
        };
    var elementsToShow = document.querySelectorAll('.animatethis');

    function loop() {

        Array.prototype.forEach.call(elementsToShow, function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('animate__animated');
                element.classList.add(speed);
                element.classList.add(animation);
            } else {
                element.classList.remove(animation);
            }
        });

        scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {

        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
}
