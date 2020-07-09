import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
// import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
// import { useSpring } from "@react-spring/three";

// const { mesh } = a;

const Cube = ({ props }) => {
  const refMesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    refMesh.current.rotation.z += 0.01;
    refMesh.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={refMesh}
      scale={[2.2, 2.2, 2.2]}
      //   onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "black"}
      />
    </mesh>
  );
};

export default Cube;
