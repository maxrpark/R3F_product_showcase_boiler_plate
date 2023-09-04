import { useEffect, useRef } from "react";
import { useThreeContext } from "../context/useThreeContext";
import { breakPoint } from "../utils/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Params {
  trigger: React.MutableRefObject<HTMLDivElement>;
  cameraPositionDesktop: THREE.Vector3;
  cameraPositionMobile: THREE.Vector3;
  cameraLookAtMobile: THREE.Vector3;
  cameraLookAtDesktop: THREE.Vector3;
  start: string;
  end: string;
  isReversed?: boolean;
}

export const useAnimateCamera = ({
  trigger,
  start,
  end,
  cameraPositionDesktop,
  cameraPositionMobile,
  cameraLookAtMobile,
  cameraLookAtDesktop,
  isReversed = false,
}: Params) => {
  const { cameraRef, cameraTarget } = useThreeContext();
  const timeLine = useRef(gsap.timeline({ reversed: isReversed }));

  const animateFunction = () => {
    const timeLine = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: trigger.current,
        start,
        end,
        scrub: true,
        markers: true,
      },
    });

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

        timeLine
          .to(cameraRef.current.position, {
            ...cameraPosition,
            onUpdate: () => cameraRef.current.lookAt(cameraTarget.current),
          })
          .to(
            cameraTarget.current,
            {
              ...cameraLookAt,
            },
            "<"
          );

        return () => {
          timeLine.progress(0);
        };
      }
    );
  };

  useEffect(() => {
    if (!cameraRef.current) return;
    animateFunction();

    return () => {
      gsap.killTweensOf(cameraRef.current.position);
      gsap.killTweensOf(cameraTarget.current);
    };
  }, [cameraRef.current]);

  return timeLine.current;
};
