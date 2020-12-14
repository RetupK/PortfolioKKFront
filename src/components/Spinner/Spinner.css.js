import styled, {keyframes} from "styled-components";

export const LogoWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10000;
`

const grow = keyframes`
    0% {
        transform: scale(0.7);
    }
    10% {
        transform: scale(1);
        border-radius: 0%;
        height: 100%;
        width: 100%;
    }
    90% {
        transform: scale(1);
        border-radius: 0%;
        height: 100%;
        width: 100%;
    }
    100% {
        transform: scale(0);
        transform-origin: 50% 50%;
        border-radius: 100%;
    }
`

export const Screen = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #55198b;
    overflow: hidden;
    border-radius: 100%;
    animation: ${grow} 3s forwards;
`

export const NofreezeSpinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.1s linear;
    height: 100vh;
    z-index: 9999;
    opacity: 1;
    transform: scale(1);
`

const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
`

export const SpinnerDiv = styled.div`
    animation-play-state: paused;
    border: 5px solid rgba(200, 200, 200, 1);
    border-radius: 50%;
    animation: ${rotate} 1s infinite linear;
    border-left-color: rgba(200, 200, 200, 0.4);
    width: 100%;
    height: 100%;
    animation-play-state: running;
`
export const SpinnerDivContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    padding: 5px;
`

const loadIcons = keyframes`
    0% {
        transform: scale(0) translate3d(0, 0, 0);
    }
    11% {
        transform: scale(1.2) translate3d(0, 0, 0);
    }
    22% {
        transform: scale(1) translate3d(0, 0, 0);
    }
    33% {
        transform: scale(0) translate3d(0, 0, 0);
    }
`

export const Svg = styled.div`
    font-size: 24px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    width: 24px;
    height: 24px;
    line-height: 1;
    transform: scale(0) translate3d(0, 0, 0);
    &:nth-of-type(1) {
        animation: ${loadIcons} 3s infinite ease-in-out;
    }
    &:nth-of-type(2){
        animation: ${loadIcons} 3s 1s infinite ease-in-out;
    }
    &:nth-of-type(3){
        animation: ${loadIcons} 3s 2s infinite ease-in-out;
    }
`
