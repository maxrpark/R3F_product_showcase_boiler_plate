import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
import { camera_position_1 } from "./utils/modelPositions";

const locationHash = window.location.hash;
const ThreeCanvas: React.FC = () => {
  return (
    <div className='webgl-wrapper'>
      <Leva collapsed hidden={locationHash !== "#debug"} />
      <Canvas
        className='canvas'
        shadows
        camera={{
          fov: 25,
          near: 0.2,
          far: 1000,
          position: [
            camera_position_1.x,
            camera_position_1.y,
            camera_position_1.z,
          ],
        }}
        gl={{
          antialias: true,
        }}
      >
        {locationHash === "#debug" && <Perf position='top-left' />}
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
