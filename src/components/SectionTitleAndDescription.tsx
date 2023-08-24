import { useEffect, useRef } from "react";
import { animateCamera } from "../animations/animateCamera";
import { useThreeContext } from "../context/useThreeContext";

interface Params {
  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
}
interface Props extends Params {}

const SectionTitleAndDescription: React.FC<Props> = ({
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
        start: "top bottom",
        end: "top top",
      });
    }
  }, [cameraRef.current]);
  return (
    <section ref={sectionContainer}>
      <h2>Section TitleAnd Description</h2>
    </section>
  );
};

export default SectionTitleAndDescription;
