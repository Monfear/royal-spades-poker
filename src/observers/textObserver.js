export const setTextObserver = (element, className) => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0,
            rootMargin: '-150px 0px',
        }
    );

    observer.observe(element);
};
