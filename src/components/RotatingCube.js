import * as React from 'react';
import styled from 'styled-components';

const VW = 35;

const CubeContainer = styled.div`
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translateX(-100%) translateY(-100%);
  position: fixed;
  perspective: 2000px;
  width: ${VW}vw;
  height: ${VW}vw;
  pointer-events: none;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
`;

const CubeFace = styled.div`
  background-color: transparent;
  border: 12px solid rgba(0, 0, 0, 0.05);
  position: absolute;
  width: ${VW}vw;
  height: ${VW}vw;
  transform: ${({ rotation }) => rotation} translate3d(0, 0, ${VW / 2}vw);

  @media (min-width: 576px) {
    border: 16px solid rgba(0, 0, 0, 0.04);
  }
`;

const CubeSides = [
  {
    rotation: 'rotateY(0deg)',
  },
  {
    rotation: 'rotateX(-90deg)',
  },
  {
    rotation: 'rotateY(90deg)',
  },
  {
    rotation: 'rotateX(90deg)',
  },
  {
    rotation: 'rotateY(-90deg)',
  },
  {
    rotation: 'rotateX(180deg)',
  },
];

const RotatingCube = () => {
  const [rotationX, setRotationX] = React.useState(0);
  const [rotationY, setRotationY] = React.useState(0);

  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      setRotationX((prevX) => (prevX + deltaTime * 0.05) % 360);
      setRotationY((prevY) => (prevY + deltaTime * 0.03) % 360);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <CubeContainer>
      <Cube
        style={{
          transform: `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`,
        }}
      >
        {CubeSides.map((props) => (
          <CubeFace {...props}></CubeFace>
        ))}
      </Cube>
    </CubeContainer>
  );
};

export default RotatingCube;
