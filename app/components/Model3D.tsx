'use client';

import { useGLTF } from '@react-three/drei';

export const Model3D = () => {
  const { scene } = useGLTF('./croissant.glb');
  return <primitive object={scene} position={[0, 0, 0]} />;
}