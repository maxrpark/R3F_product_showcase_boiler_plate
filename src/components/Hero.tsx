import { useRef } from "react";
import { useAnimateCamera } from "../hooks/useAnimateCamera";

interface Params {
  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
}
interface Props extends Params {}

const Hero: React.FC<Props> = ({
  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
}) => {
  const sectionContainer = useRef<HTMLDivElement>(null!);

  useAnimateCamera({
    trigger: sectionContainer,
    start: "top top",
    end: "+=300px",
    cameraPositionDesktop,
    cameraPositionMobile,
    cameraLookAtMobile,
    cameraLookAtDesktop,
  });

  return (
    <section style={{ height: "200vh" }} ref={sectionContainer}>
      <h2>Hero</h2>
    </section>
  );
};

export default Hero;
