
const options = {
    fpsLimit: 165,
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: ["#F0FFFF", "#89CFF0", "#0000FF", "#00aeff", "#0096FF"],
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 6,
            random: false,
        },
    },

    background: {
        image: "radial-gradient(#00aeff, #010515)",
        
    },
};


export default options;