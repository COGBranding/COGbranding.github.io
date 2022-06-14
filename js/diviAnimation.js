function sectionReveal() {
    const diviSection = document.querySelector('.et_pb_section');
    const appear = document.querySelector('.appear');

    diviSection.classList.add('appear');

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