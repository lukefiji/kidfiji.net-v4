import theme from '../constants/theme';

const particlesConfig = (colorTheme) => ({
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value:
        colorTheme === 'dark' ? theme.colors.offWhite : theme.colors.darkGray,
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1.75,
      random: true,
      anim: {
        enable: false,
        speed: 50,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'right',
      random: true,
      straight: true,
      out_mode: 'out',
    },
  },
  retina_detect: true,
});

export default particlesConfig;
