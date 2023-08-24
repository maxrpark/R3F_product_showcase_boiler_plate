import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CameraInstance } from "../context/useThreeContext";
import { breakPoint } from "../utils/constants";

interface Params {
  cameraRef: React.MutableRefObject<CameraInstance>;
  cameraTarget: React.MutableRefObject<THREE.Vector3>;

  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
}

export const useAnimateCustomizeCamera = ({
  cameraRef,
  cameraTarget,

  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
}: Params) => {
  const timeLine = useRef(gsap.timeline({ reversed: true }));

  const animateFunction = () => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { isMobile } = context.conditions as { isMobile: boolean };

        const cameraPosition = isMobile
          ? cameraPositionMobile
          : cameraPositionDesktop;

        const cameraLookAt = isMobile
          ? cameraLookAtMobile
          : cameraLookAtDesktop;

        timeLine.current
          .to(cameraRef.current.position, {
            ease: "none",
            immediateRender: false,
            ...cameraPosition,
            onUpdate: () => cameraRef.current.lookAt(cameraTarget.current),
          })
          .to(
            cameraTarget.current,
            {
              ease: "none",
              immediateRender: false,
              ...cameraLookAt,
            },
            "<"
          );

        return () => {
          timeLine.current.progress(0);
        };
      }
    );
  };

  useEffect(() => {
    if (!cameraRef.current) return;
    animateFunction();
  }, [cameraRef.current]);

  return timeLine.current;
};
