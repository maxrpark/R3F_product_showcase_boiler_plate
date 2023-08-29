import {
  useContext,
  createContext,
  ReactNode,
  FC,
  useRef,
  useEffect,
  useState,
} from "react";
import { Camera } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  cameraLookAt_1,
  cameraLookAt_10,
  cameraLookAt_10_mobile,
  camera_position_10,
  camera_position_10_mobile,
  cameraLookAt_11,
  cameraLookAt_11_mobile,
  camera_position_11,
  camera_position_11_mobile,
  cameraLookAt_1_mobile,
} from "../utils/modelPositions";
import { colors } from "../utils/constants";
import { useAnimateCustomizeCamera } from "../hooks/useAnimateCustomizeCamera";

interface Props {
  children: ReactNode;
}

export type CameraInstance = Camera & {
  manual?: boolean | undefined;
};

interface ThreeContextInt {
  modelRef: React.MutableRefObject<THREE.Group | null>;
  cameraRef: React.MutableRefObject<CameraInstance>;
  cameraTarget: React.MutableRefObject<THREE.Vector3>;
  isCustomizeVisible: boolean;
  selectedColor: THREE.Color;
  toggleShowCustomizer: () => void;
  changeColor: (color: THREE.Color) => void;
}

const ThreeContext = createContext({} as ThreeContextInt);

export const ThreeProvider: FC<Props> = ({ children }) => {
  const modelRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<CameraInstance>(null!);
  const cameraTarget = useRef<THREE.Vector3>(cameraLookAt_1);
  const [isCustomizeVisible, setIsCustomizeVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const enterCustomizerTimeLine = useAnimateCustomizeCamera({
    cameraRef,
    cameraTarget,
    cameraPositionDesktop: camera_position_11,
    cameraPositionMobile: camera_position_11_mobile,
    cameraLookAtDesktop: cameraLookAt_11,
    cameraLookAtMobile: cameraLookAt_11_mobile,
  });
  const existCustomizerTimeLine = useAnimateCustomizeCamera({
    cameraRef,
    cameraTarget,
    cameraPositionDesktop: camera_position_10,
    cameraPositionMobile: camera_position_10_mobile,
    cameraLookAtDesktop: cameraLookAt_10,
    cameraLookAtMobile: cameraLookAt_10_mobile,
  });

  const toggleShowCustomizer = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "scroll";
      gsap.set(".webgl-wrapper", {
        clearProps: "all",
      });
    } else {
      document.body.style.overflow = "hidden";
      gsap.set(".webgl-wrapper", {
        zIndex: 1,
      });
      if (window.innerWidth < 800) {
        window.alert("Drag to explore the 360-degree view");
      }
    }
    setIsCustomizeVisible((oldValue) => {
      const newValue = !oldValue;

      if (newValue === true) {
        document.body.style.cursor = "grab";
        enterCustomizerTimeLine.progress(0);
        enterCustomizerTimeLine.play();
      } else {
        document.body.style.cursor = "auto";
        existCustomizerTimeLine.progress(0);
        existCustomizerTimeLine.play();
      }

      return newValue;
    });
  };

  const changeColor = (color: THREE.Color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 800) {
      cameraTarget.current = cameraLookAt_1;
    } else {
      cameraTarget.current = cameraLookAt_1_mobile;
    }
  }, []);

  return (
    <ThreeContext.Provider
      value={{
        isCustomizeVisible,
        selectedColor,
        cameraTarget,
        modelRef,
        cameraRef,
        toggleShowCustomizer,
        changeColor,
      }}
    >
      {children}
    </ThreeContext.Provider>
  );
};

export const useThreeContext = () => useContext(ThreeContext);
