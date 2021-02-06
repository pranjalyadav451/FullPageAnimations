new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        // console.log(destination);
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 1, { y: "20", opacity: 0 }, {
            y: "-40",
            opacity: 1,
        })

        if (destination.index === 1) {
            const chairs = document.querySelectorAll(".chair");
            const desc = document.querySelector(".description");
            tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-40%" })
                .fromTo(chairs[0], 1, { opacity: 11 }, { opacity: 1 })
                .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
        }
    }
})