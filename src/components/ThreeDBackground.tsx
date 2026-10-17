'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedStars() {
  const starsRef = useRef<THREE.Group>(null);
  const sparklesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.05;
      starsRef.current.rotation.x -= delta * 0.02;
    }
    if (sparklesRef.current) {
      sparklesRef.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group>
      <group ref={starsRef}>
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </group>
      <group ref={sparklesRef}>
        <Sparkles count={150} scale={12} size={4} speed={0.4} opacity={0.6} color="#3b82f6" />
      </group>
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
      </Canvas>
    </div>
  );
}
