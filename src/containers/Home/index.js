/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Cube from "../../components/Cube";
import Logo from "../../assets/logo.png";
// import Space from "./stars.gif";
import Space from "../../assets/stars2.gif";
import { Background, MenuFooter, Footer } from "./styles";
import Quote from "../../components/Quote";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Background bg={Space}>
      <Quote />
      <Footer open={openMenu}>
        <MenuFooter open={openMenu}>
          <div style={{ width: "25%", height: "100%" }}>
            <Canvas>
              <ambientLight intensity={4.3} />
              <pointLight position={[-10, 0, -20]} intensity={1.5} />
              <pointLight position={[0, -10, 0]} intensity={1.5} />
              <pointLight
                intensity={15.5}
                position={[10, 5, 10]}
                color="white"
              />
              <Cube position={[1.2, 0, 0]} />
            </Canvas>
          </div>
          <div
            style={{ width: "55%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ width: "auto", height: "65px" }}
              src={Logo}
              alt="Inside The Cube"
            />
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
            }}
          >
            <a href="#" onClick={handleToggleMenu}>
              {openMenu ? "X" : "..."}
            </a>
          </div>
        </MenuFooter>
        {openMenu && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#" style={{ fontSize: "30px", marginBottom: "25px" }}>
              ARTICLES
            </a>
            <a href="#" style={{ fontSize: "30px", marginBottom: "25px" }}>
              VIDEOS
            </a>
            <a href="#" style={{ fontSize: "30px" }}>
              SHOP
            </a>
          </div>
        )}
      </Footer>
    </Background>
  );
};

export default Home;
