import styled from "styled-components";

export const CircleDivText = styled.div`
    background: ${props => props.theme.colors.color2};
    height: 80px;
    width: 80px;
    color: white;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
`

export const LabelContainer = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
`

export const SingleCircleWrapper = styled.div`
    width: 150px;
    margin: 0px 50px 50px 50px;
    @media (max-width: 767px) {
        width: 120px;
        margin: 0px 20px 50px 20px;
    }
`

export const stylesForCircle = {
    path:{
        stroke: "#41228E",
        strokeWidth: 5,
    },
    trail:{
        stroke: "none",
        shadow: "0px 0px 0px 1px",
    },
}