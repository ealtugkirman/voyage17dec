// components/RotatingCube.tsx

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useSpring, a } from '@react-spring/three';

interface RotatingCubeProps {
  color?: string;
  geometryType?: string;
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ color = "#8AC", geometryType = "box" }) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    rotationSpeed: hovered ? 0.02 : 0.005,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    meshRef.current.rotation.x += props.rotationSpeed.get();
    meshRef.current.rotation.y += props.rotationSpeed.get();
  });

  let geometry;
  switch (geometryType) {
    case "sphere":
      geometry = <sphereGeometry args={[0.75, 32, 32]} />;
      break;
    case "cone":
      geometry = <coneGeometry args={[0.75, 1.5, 32]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <a.mesh
      ref={meshRef}
      scale={2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      {geometry}
      <meshStandardMaterial color={color} />
    </a.mesh>
  );
};

export default RotatingCube;