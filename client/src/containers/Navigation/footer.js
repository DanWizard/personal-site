import React, { useState } from "react";
import Canvas from "../Navigation/canvas";
import Logo from "../../assets/logo.png";
import { MenuFooter, Footer, OpenFooter, LogoDiv, StyleFlip } from "./styles";
import { withRouter } from "react-router-dom";

const FooterContainer = ({ history }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavigate = (path) => {
    history.push(`/${path}`);
  };

  return (
    <Footer open={openMenu}>
      <MenuFooter open={openMenu}>
        <Canvas />
        <LogoDiv onClick={() => handleNavigate("")}>
          <img
            style={{ width: "auto", height: "65px" }}
            src={Logo}
            alt="Inside The Cube"
          />
        </LogoDiv>
        <StyleFlip>
          <a onClick={handleToggleMenu}>{openMenu ? "X" : "..."}</a>
        </StyleFlip>
      </MenuFooter>
      {openMenu && (
        <OpenFooter>
          <a
            // href="#"
            onClick={() => handleNavigate("articles")}
            style={{ fontSize: "30px", marginBottom: "25px" }}
          >
            ARTICLES
          </a>
          <a
            // href="#"
            onClick={() => handleNavigate("videos")}
            style={{ fontSize: "30px", marginBottom: "25px" }}
          >
            VIDEOS
          </a>
          <a
            // href="#"
            onClick={() => handleNavigate("shop")}
            style={{ fontSize: "30px" }}
          >
            SHOP
          </a>
        </OpenFooter>
      )}
    </Footer>
  );
};

export default withRouter(FooterContainer);
