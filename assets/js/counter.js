const counters = document.querySelectorAll('.counternumber');
const speed = 10000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-targets');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});