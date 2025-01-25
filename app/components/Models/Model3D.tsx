"use client";

import { useModelStore } from "@/store/model";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Model3D = () => {
  const { spin, modelSelected } = useModelStore();
  const { scene } = useGLTF(`./${modelSelected}.glb`);

  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (!ref.current) return;
    if (spin) {
      ref.current.rotation.y += 0.006;
    }
  });

  return <primitive object={scene} ref={ref} />;
};
