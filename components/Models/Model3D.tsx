"use client";

import { useModelStore } from "@/store/model";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useShallow } from "zustand/shallow";

export const Model3D = () => {
  const { spin, modelSelected } = useModelStore(
    useShallow((state) => ({
      spin: state.spin,
      modelSelected: state.modelSelected,
    }))
  );

  const { scene } = useGLTF(`./${modelSelected?.url}`);

  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      console.log('model', modelSelected);
      ref.current.rotation.set(0, 0, 0);
      ref.current.position.set(0, 0, 0);
      ref.current.scale.set(1, 1, 1);
    }
  }, [modelSelected]);

  useFrame(() => {
    if (!ref.current) return;
    if (spin) {
      ref.current.rotation.y += 0.006;
    }
  });

  return <primitive object={scene} ref={ref} />;
};

useGLTF.preload("./croissant.glb");