import React from "react";
import { Canvas } from "react-three-fiber";
import Cube from "../../components/Cube";

const CanvasContainer = () => {
  return (
    <div style={{ width: "25%", height: "100%" }}>
      <Canvas>
        <ambientLight intensity={4.3} />
        <pointLight position={[-10, 0, -20]} intensity={1.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <pointLight intensity={15.5} position={[10, 5, 10]} color="white" />
        <Cube position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
