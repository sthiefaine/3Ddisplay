"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3D } from '@/app/components/Model3D';

export const ModelView = () => {
  return (
      <Canvas camera={{ position: [4, 2, 2], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 1, 0]} intensity={1} />
        <Model3D />
        <OrbitControls minDistance={1} maxDistance={5} />
      </Canvas>
  );
}