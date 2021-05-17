const targets = document.querySelectorAll(".js-animate-on-scroll");

console.log(targets)

const callback = function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
            entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
    })
}

const observer = new IntersectionObserver(callback);

targets.forEach(function(target) {
    target.classList.add("opacity-0");

    observer.observe(target);
});
