import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1199px) {
        flex-direction: row;
    }
    @media (max-width: 767px) {
        flex-direction: column;
        height: 1000px;
    }
`

export const SectionSkillsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

export const CircleContainer = styled.div`
    width: 90px;
    height: 140px;
    border-radius: 50%;
    transition: all .1s;
    text-align: center;
    &:hover{
        cursor: pointer;
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
    @media (min-width: 768px) and (max-width: 1199px) {
        margin-top: -127px;
        margin-left: -27px;
    }
    @media(min-width: 1200px) and (max-width: 1400px){
        margin-top: -133px;
        margin-left: -40px;
    }
    @media (max-width: 767px) {
        margin-top: -129px;
        margin-left: -40px;
    } 
`

export const Li = styled.li`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 25px;
    top: 20px;
    -webkit-transform: rotate(-360deg);
    transition: all 0.8s ease-in-out;
    transform: ${props => props.open ? `rotate(${+props.currDeg + "deg"})` : "rotate(360deg)"};
    @media (min-width: 768px) and (max-width: 1199px) {
        height: 100px;
        width: 100px;
    }
    @media(min-width: 1200px) and (max-width: 1400px){
        height: 120px;
        width: 120px;
    }
    @media (max-width: 767px) {
        height: 120px;
        width: 120px;
    }
`

export const IconContainer = styled.div`
    width: ${props => props.open ? "60px" : "0px"};
    height: ${props => props.open ? "60px" : "0px"};
    line-height: 80px;
    margin-left: -40px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    position: absolute;
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
    @media(min-width: 1200px) and (max-width: 1400px){
        width: ${props => props.open ? "50px" : "0px"};
        height: ${props => props.open ? "50px" : "0px"};
        font-size: ${props => props.open ? "30px" : "0px"};
    }
    @media(min-width: 1200px) and (max-width: 1400px){
        margin: 40px 0px 20px 50px;
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
    width: 100%;
`