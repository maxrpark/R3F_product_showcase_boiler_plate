import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useThreeContext } from "../context/useThreeContext";
import { useEffect, useRef } from "react";

const WatchModel: React.FC = () => {
  const { modelRef, selectedColor } = useThreeContext();
  const outerBand = useRef<THREE.Mesh>();
  const innerBand = useRef<THREE.Mesh>();
  const { scene } = useGLTF("/model.glb");

  scene.traverse((child: any) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      child.castShadow = true;
      child.receiveShadow = true;

      // Only for this model
      if (child.name === "outerBand") {
        outerBand.current = child;

        child.material.emissiveIntensity = 0;
      }
      // Only for this model
      if (child.name === "innerBand") {
        innerBand.current = child;
        child.material.emissiveIntensity = 0;
      }
    }
  });

  useEffect(() => {
    (innerBand.current!.material as THREE.MeshStandardMaterial).color =
      selectedColor;
    (outerBand.current!.material as THREE.MeshStandardMaterial).color =
      selectedColor;
  }, [selectedColor]);

  return <primitive ref={modelRef} object={scene}></primitive>;
};

export default WatchModel;
