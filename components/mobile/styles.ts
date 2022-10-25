import { MainTitle, vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div`
  padding: 5.3rem 0 9.2rem 6rem;
  height: 50.9rem;
  overflow: hidden;
  svg.mobile-app {
    display: block;
    width: 8.3rem;
    height: 1.7rem;
    margin-bottom: 21.6rem;
  }
  .title {
    justify-content: flex-start;
    font-family: "Helvetica";
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.015rem;
    color: #f1f1f1;
    animation-delay: 0.2s !important;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 0.8rem;
    }
  }
  ${MainTitle} {
    padding: 1rem 0 2rem 0;
    animation-delay: 0.2s !important;
  }
  .coming-soon {
    display: block;
    padding: 0 1.7rem;
    height: 2.6rem;
    border: 1px solid #fff;
    border-radius: 1.3rem;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 0.017rem;
    color: #f1f1f1;
    transform: translateY(1.3rem);
    opacity: 0;
  }
  .visible & {
    .coming-soon {
      animation: move24 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
  }
  @keyframes move24 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  }
  .img-box {
    position: absolute;
    right: 12.7rem;
    bottom: -32.1rem;
  }
`;

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(300)};
  padding: ${vw(30)} ${vw(20)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
  overflow: hidden;
  .title-1 {
    text-align: center;
  }
  label.title-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Helvetica";
    font-weight: 700;
    font-size: ${vw(12)};
    line-height: ${vw(14)};
    color: #f1f1f1;
    padding: ${vw(25)} 0;
    text-align: center;
    svg {
      width: ${vw(18)};
      height: ${vw(18)};
      margin-right: ${vw(6)};
    }
  }
  .img-box {
    width: ${vw(185)};
    height: ${vw(382)};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${vw(35)};
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${vw(36)};
    border: ${vw(1)} solid #2ad4d8;
    border-radius: ${vw(10)};
    font-family: "Lexend";
    font-weight: 600;
    font-size: ${vw(12)};
    color: #2ad4d8;
    background: none;
    &:hover {
      text-decoration: none;
    }
    &:disabled {
      opacity: 0.5;
    }
    svg {
      width: ${vw(16)};
      height: ${vw(16)};
      margin-right: ${vw(5)};
    }
  }
`;