"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3D } from '@/app/components/Models/Model3D';

export const ModelView = () => {
  return (
      <Canvas camera={{ position: [2, 2, -0.5], fov: 60 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 1, 0]} intensity={1} />
        <Model3D />
        <OrbitControls minDistance={5} maxDistance={5} enablePan={false} />
      </Canvas>
  );
}