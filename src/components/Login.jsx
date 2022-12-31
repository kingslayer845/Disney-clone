import React from "react";
import styled from "styled-components";
import { bgImg, ctaLogoOne as ctaOne, ctaLogoTow as ctaTwo } from "../assets";
function Login() {
  return (
    <Container>
      <Content>
        <Cta>
          <CtaLogoOne src={ctaOne} />
          <SignUp>get all there</SignUp>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            nascetur ridiculus mus. Donec quam felis,
          </Description>
          <CtaLogoTow src={ctaTwo} />
        </Cta>
        <BgImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 10vw;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url(${bgImg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
const Cta = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;
const CtaLogoOne = styled.img`
  width: 100%;
  margin-top: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  border: 1px solid transparent;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16px 0;

  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsl(0, 01, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CtaLogoTow = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
export default Login;
