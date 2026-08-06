const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});