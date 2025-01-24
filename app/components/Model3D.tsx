"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Model3D = () => {
  const { scene } = useGLTF("./croissant.glb");

  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006;
    }
  });

  return <primitive object={scene} ref={ref} />;
};
