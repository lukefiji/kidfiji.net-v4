import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';
import particlesConfig from '../constants/particlesConfig';

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function particlesInit(main) {
  console.log(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
}

function particlesLoaded(main) {
  console.log(main);
}

const ParticlesContainer = () => {
  const { theme } = useDarkMode();

  return (
    <StyledParticles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig(theme)}
    />
  );
};

ParticlesContainer.displayName = 'ParticlesContainer';

export default ParticlesContainer;
