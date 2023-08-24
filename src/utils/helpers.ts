import * as THREE from "three";

export const convertTextColor = (color: THREE.Color, alpha = 1.0) => {
  if (color.r === 1 && color.g === 1 && color.b === 1) {
    return `rgb(0,0,0, ${alpha})`;
  }
  return `rgb(${Math.round(color.r * 255)}, ${Math.round(
    color.g * 255
  )}, ${Math.round(color.b * 255)}, ${alpha})`;
};
export const convertBgColor = (color: THREE.Color, alpha = 1.0) => {
  return `rgb(${Math.round(color.r * 255)}, ${Math.round(
    color.g * 255
  )}, ${Math.round(color.b * 255)}, ${alpha})`;
};
