// components/InteractiveBackground.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const SphereComponent = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]}>
      <meshStandardMaterial color="red" />
    </Sphere>
  );
};

const InteractiveBackground = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SphereComponent />
    </Canvas>
  );
};

export default InteractiveBackground;
