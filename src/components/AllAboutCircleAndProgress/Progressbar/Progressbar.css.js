import styled from "styled-components";

export const Bar = styled.div`
    background-color: ${props => props.theme.colors.color4};
    height: 10px;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    @media (max-width: 767px) {
        margin: 20px 0px;
    }    
`

export const ChartProgress = styled.div`
    height: 100%;
    left: 0;
    top: 0;
    width: ${props => props.value};
    background-color: ${props => props.theme.colors.color3};
    position: absolute;
`

export const Value = styled.span`
    border-radius: .125rem;
    font-size: 13px;
    height: 34px;
    margin-top: -17px;
    line-height: 33px;
    right: 0;
    top: 50%;
    width: 50px;
    font-weight: 700;
    text-align: center;
    background-color: ${props => props.theme.colors.color2};
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    color: #fff!important;
    display: block;
    position: absolute;
`

export const Span = styled.span`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1.5px;
    @media (max-width: 767px) {
        margin: 20px 0px;
        font-size: 12px;
    }
`