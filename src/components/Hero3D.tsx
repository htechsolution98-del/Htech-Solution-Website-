'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow constant rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;

      // Mouse follow parallax
      const targetX = (pointer.x * viewport.width) / 10;
      const targetY = (pointer.y * viewport.height) / 10;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Icosahedron args={[2, 0]} ref={meshRef}>
      <MeshDistortMaterial
        color="#2563eb"
        emissive="#000000"
        wireframe={true}
        distort={0.4}
        speed={1.5}
        transparent={true}
        opacity={0.3}
      />
    </Icosahedron>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
