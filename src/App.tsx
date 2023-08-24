import { Suspense } from "react";
import ThreeCanvas from "./ThreeCanvas";

import {
  Customize,
  Hero,
  Loader,
  SectionFeatures,
  SectionTitle,
  SectionTitleAndDescription,
} from "./components";
import {
  camera_position_2,
  camera_position_2_mobile,
  cameraLookAt_2,
  cameraLookAt_2_mobile,
  camera_position_3,
  camera_position_3_mobile,
  cameraLookAt_3,
  cameraLookAt_3_mobile,
  camera_position_4,
  camera_position_4_mobile,
  cameraLookAt_4,
  cameraLookAt_4_mobile,
  camera_position_5,
  camera_position_5_mobile,
  cameraLookAt_5,
  cameraLookAt_5_mobile,
  camera_position_6,
  camera_position_6_mobile,
  cameraLookAt_6,
  cameraLookAt_6_mobile,
  camera_position_7,
  camera_position_7_mobile,
  cameraLookAt_7,
  cameraLookAt_7_mobile,
  camera_position_8,
  camera_position_8_mobile,
  cameraLookAt_8,
  cameraLookAt_8_mobile,
  camera_position_9,
  camera_position_9_mobile,
  cameraLookAt_9,
  cameraLookAt_9_mobile,
  camera_position_10,
  camera_position_10_mobile,
  cameraLookAt_10,
  cameraLookAt_10_mobile,
} from "./utils/modelPositions";
import { useProgress } from "@react-three/drei";

const App: React.FC = () => {
  const { progress } = useProgress();
  return (
    <main>
      <Suspense fallback={<Loader progress={progress} />}>
        <ThreeCanvas />
        <div className='main-content-wrapper'>
          <Hero
            cameraPositionDesktop={camera_position_2}
            cameraPositionMobile={camera_position_2_mobile}
            cameraLookAtDesktop={cameraLookAt_2}
            cameraLookAtMobile={cameraLookAt_2_mobile}
          />
          <SectionTitle
            cameraPositionDesktop={camera_position_3}
            cameraPositionMobile={camera_position_3_mobile}
            cameraLookAtDesktop={cameraLookAt_3}
            cameraLookAtMobile={cameraLookAt_3_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_4}
            cameraPositionMobile={camera_position_4_mobile}
            cameraLookAtDesktop={cameraLookAt_4}
            cameraLookAtMobile={cameraLookAt_4_mobile}
          />
          <SectionFeatures
            cameraPositionDesktop={camera_position_5}
            cameraPositionMobile={camera_position_5_mobile}
            cameraLookAtDesktop={cameraLookAt_5}
            cameraLookAtMobile={cameraLookAt_5_mobile}
          />
          <SectionFeatures
            cameraPositionDesktop={camera_position_6}
            cameraPositionMobile={camera_position_6_mobile}
            cameraLookAtDesktop={cameraLookAt_6}
            cameraLookAtMobile={cameraLookAt_6_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_7}
            cameraPositionMobile={camera_position_7_mobile}
            cameraLookAtDesktop={cameraLookAt_7}
            cameraLookAtMobile={cameraLookAt_7_mobile}
          />
          {/* <section className='static'></section>
          <section className='static blue'></section> */}
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_8}
            cameraPositionMobile={camera_position_8_mobile}
            cameraLookAtDesktop={cameraLookAt_8}
            cameraLookAtMobile={cameraLookAt_8_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_9}
            cameraPositionMobile={camera_position_9_mobile}
            cameraLookAtDesktop={cameraLookAt_9}
            cameraLookAtMobile={cameraLookAt_9_mobile}
          />
          <Customize
            cameraPositionDesktop={camera_position_10}
            cameraPositionMobile={camera_position_10_mobile}
            cameraLookAtDesktop={cameraLookAt_10}
            cameraLookAtMobile={cameraLookAt_10_mobile}
          />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
