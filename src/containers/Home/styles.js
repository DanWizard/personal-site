import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${({ bg }) => {
    console.log(bg);
    return bg;
  }});
`;

export const Footer = styled.div`
  width: 100%;
  height: ${({ open }) => (open ? "50vh" : "20vh")};
  background-color: cyan;
  position: fixed;
  top: ${({ open }) => (open ? "50vh" : "80vh")};
  display: flex;
  transition: top 1s, height 1s;
  flex-direction: column;
`;
export const MenuFooter = styled.div`
  width: 100%;
  height: 20vh;
  background-color: cyan;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: top 1s, height 1s;
`;
