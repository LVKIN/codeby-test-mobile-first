import styled from "styled-components";
import { rem } from "polished";

export const HomeWrapper = styled.main`
  background-color: #e7f0ff;
  height: 100vh;
  display: block;
  padding-top: ${rem(80)};

  @media (min-width: 769px) {
    /* max-width: 75%; */
    display: flex;
    justify-content: space-around;
  }
`;

export const HomeHeader = styled.header`
  background-color: #0090ff;
  height: ${rem(80)};
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0px 0px 15px 15px;
  -webkit-box-shadow: 0px 5px 17px -3px #979797;
  box-shadow: 0px 5px 17px -3px #979797;
`;

export const HomeHeaderText = styled.h1`
  text-align: center;
  color: #fff;
  font-size: ${rem(24)};
  display: block;
  margin: 0 auto;
`;

export const HomeIntroductionWrapper = styled.div`
  display: block;
  margin-top: ${rem(32)};
  padding: 0 ${rem(32)};
  
  @media (min-width: 486px) and (max-width: 768px) {
    max-width: ${rem(640)};
    margin-inline: auto;
  }

  @media (min-width: 769px) {
    margin-top: ${rem(8)};
  }
`;

export const HomeIntroductionText = styled.p`
  display: block;
  color: #46505e;
  font-size: ${rem(16)};
  margin-top: ${rem(16)};
  font-weight: 500;
`;

export const HomeConclusion = styled.div`
  display: block;
  color: #46505e;
  font-weight: 600;
  font-size: ${rem(20)};
  padding: 0 ${rem(32)};
  margin-top: ${rem(24)};
  
  @media (min-width: 486px) and (max-width: 768px) {
    max-width: ${rem(640)};
    margin-inline: auto;
  }

  @media (min-width: 769px) {
    width: ${rem(690)};
  }
`;

export const PageButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkButton = styled.a`
  width: 100%;
  text-decoration: none;
  color: #fff;
  background-color: #2ea3ff;
  line-height: ${rem(50)};
  text-align: center;
  border-radius: 30px;
  margin-top: ${rem(16)};
`;