"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3D } from '@/components/Models/Model3D';

export const ModelView = () => {
  return (
      <Canvas camera={{ position: [2, 2, -0.5], fov: 60 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 1, 0]} intensity={1} />
        <Model3D />
        <OrbitControls minDistance={3} maxDistance={4.5} enablePan={false} />
      </Canvas>
  );
}