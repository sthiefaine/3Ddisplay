"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useModelStore } from "@/store/model";
import { Model3D } from "./Model3D";

export const ModelView = () => {
  const { modelSelected } = useModelStore();

  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, [modelSelected]);

  return (
    <Canvas camera={{ position: [2, 2, -0.5], fov: 60 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 0]} intensity={1} />
      <Model3D />
      <OrbitControls
        ref={controlsRef}
        minDistance={3}
        maxDistance={4.5}
        enablePan={false}
      />
    </Canvas>
  );
};
