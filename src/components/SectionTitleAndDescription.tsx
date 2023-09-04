import { useRef } from "react";
import { useAnimateCamera } from "../hooks/useAnimateCamera";

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
  const sectionContainer = useRef<HTMLDivElement>(null!);

  useAnimateCamera({
    trigger: sectionContainer,
    cameraPositionDesktop,
    cameraPositionMobile,
    cameraLookAtMobile,
    cameraLookAtDesktop,
    start: "top bottom",
    end: "top top",
  });

  return (
    <section ref={sectionContainer}>
      <h2>Section TitleAnd Description</h2>
    </section>
  );
};

export default SectionTitleAndDescription;
