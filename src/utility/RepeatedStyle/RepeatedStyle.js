import styled from "styled-components";

export const Paragraph = styled.p`
    font-size:16px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-family: Poppins,sans-serif;
`

export const Btn = styled.button`
    background: ${props => props.theme.colors.color2};
    border: unset;
    width: 120px;
    height: 44px;
    border-radius: 5px;
    color: white;
    font-family: Poppins,sans-serif;
    
`