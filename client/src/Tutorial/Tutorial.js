import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
//Components
// import Header from "./components/header";
// Styles
import "./Tutorial.scss";
// React Spring
import { useSpring, a } from "@react-spring/three";

// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      {/* <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      /> */}
      <meshStandardMaterial attach="material" color={color} />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        // shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        {/* This light makes things look pretty */}
        <ambientLight intensity={1.3} />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={1.5} />
        <pointLight position={[0, -10, 0]} intensity={2.5} />
        <group>
          <SpinningMesh position={[1.2, 0, 0]} color="black" speed={6} />
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
