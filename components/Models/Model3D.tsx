"use client";

import { useModelStore } from "@/store/model";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useShallow } from "zustand/shallow";

export const Model3D = () => {
  const { spin, modelSelected, modelsList } = useModelStore(
    useShallow((state) => ({
      spin: state.spin,
      modelSelected: state.modelSelected,
      modelsList: state.modelsList,
    }))
  );


  useEffect(() => {
    const currentModelIndex =
      modelsList.findIndex(
        (model) => model.name.toLowerCase() === modelSelected.name.toLowerCase()
      ) || 0;

    // Précharger le modèle suivant
    if (currentModelIndex < modelsList.length - 1) {
      useGLTF.preload(`./${modelsList[currentModelIndex + 1].url}`);
    } else {
      useGLTF.preload(`./${modelsList[0].url}`);
    }

    // Précharger le modèle précédent
    if (currentModelIndex > 0) {
      useGLTF.preload(`./${modelsList[currentModelIndex - 1].url}`);
    } else {
      useGLTF.preload(`./${modelsList[modelsList.length - 1].url}`);
    }
  }, [modelSelected, modelsList]);


  const { scene } = useGLTF(`./${modelSelected?.url}`);

  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    if (ref.current) {
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