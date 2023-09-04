import { useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { colors } from "../utils/constants";
import { convertBgColor } from "../utils/helpers";
import Wrapper from "../wrappers/CustomizerWrapper";
import { useAnimateCamera } from "../hooks/useAnimateCamera";

interface Params {
  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
}
interface Props extends Params {}

const Customize: React.FC<Props> = ({
  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
}) => {
  const {
    isCustomizeVisible,
    selectedColor,
    changeColor,
    toggleShowCustomizer,
  } = useThreeContext();

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
    <Wrapper className='customize-section' ref={sectionContainer}>
      <div
        style={{
          background: convertBgColor(selectedColor, 0.1),
        }}
        className={`${isCustomizeVisible ? "show" : ""} overlay`}
      ></div>
      {isCustomizeVisible && (
        <p className='label'>Drag to explore the 360-degree view</p>
      )}
      <div
        className={`${isCustomizeVisible ? "show-colors" : ""} colors-wrapper`}
      >
        {colors.map((color, idx) => {
          return (
            <div
              onClick={() => changeColor(color)}
              style={{ background: convertBgColor(color) }}
              key={idx}
              className={`single-color ${
                selectedColor === color ? "is-active" : ""
              }`}
            ></div>
          );
        })}
      </div>
      <button className='btn-customize' onClick={toggleShowCustomizer}>
        Customize
      </button>
    </Wrapper>
  );
};

export default Customize;
