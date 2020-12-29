import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1199px) {
        flex-direction: column;
    }
    @media (max-width: 1199px) {
        height: 1000px;
    }
`

export const CircleContainer = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    transition: all .1s;
    text-align: center;
    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
    @media (max-width: 1199px) {
        margin: 40px 0px 20px 50px;
    }
`

export const IconCategory = styled.div`
    font-size: 30px;
    text-align: center;
    background: ${props => props.color};
    border-radius: 50%;
    color: white;
    height: 90px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
`

export const Icon = styled(props => props.iconCategory)`
    height: 100%;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Ul = styled.ul`
    position: absolute;
    list-style: none;
    padding: 0;
    margin-top: -145px;
    margin-left: -55px;
`

export const Li = styled.li`
    position: absolute;
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(-360deg);
    transition: all 0.8s ease-in-out;
    transform: ${props => props.open ? `rotate(${+props.currDeg + "deg"})` : "rotate(360deg)"};
`

export const IconContainer = styled.div`
    width: ${props => props.open ? "60px" : "0px"};
    height: ${props => props.open ? "60px" : "0px"};
    line-height: 80px;
    margin-left: -40px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    bottom: 100%;
    color: ${props => props.color};
    border-radius: 50%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: ${props => props.open ? "40px" : "0px"};
    cursor: pointer;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    transition: all 0.8s ease-in-out, color 0.1s, background 0.1s;
    transform: ${props => props.open ? `rotate(${+(-props.currDeg) + "deg"})` : "rotate(-360deg)"};
    @media (max-width: 1199px) {
        width: ${props => props.open ? "50px" : "0px"};
        height: ${props => props.open ? "50px" : "0px"};
        font-size: ${props => props.open ? "30px" : "0px"};
    }
`

export const Button = styled.button`
    width: 200px;
    background: red;
`

export const Label = styled.label`
    margin-bottom: 5px;
    margin-right: 45px;
    font-weight: bold;
`