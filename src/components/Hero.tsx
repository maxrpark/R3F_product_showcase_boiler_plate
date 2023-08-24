import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { animateCamera } from "../animations/animateCamera";

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
  const { cameraRef, cameraTarget } = useThreeContext();

  const sectionContainer = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (cameraRef.current) {
      animateCamera({
        trigger: sectionContainer.current,
        cameraRef,
        cameraTarget,
        cameraPositionDesktop,
        cameraPositionMobile,
        cameraLookAtMobile,
        cameraLookAtDesktop,
        start: "top top",
        end: "+=300px",
      });
    }
  }, [cameraRef.current]);

  return (
    <section style={{ height: "200vh" }} ref={sectionContainer}>
      <h2>Hero</h2>
    </section>
  );
};

export default Hero;
