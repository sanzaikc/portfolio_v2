const particleConfig = {
  background: {
    color: {
      value: "#0f172a",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "attract",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 0.3,
        opacity: 1,
        size: 4,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
        links: {
          opacity: 0.5,
        },
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
    },
  },
  particles: {
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 500,
      opacity: 0.01,
      width: 2,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "bottom",
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 10,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        speed: 0.75,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 10,
      },
      animation: {
        speed: 20,
        minimumValue: 0.1,
      },
    },
  },
};

export default particleConfig;
