import styled from "styled-components"; 

export const Img = styled.img`
    width: ${(props) => props.width ? props.width : "inherit"};
    height: ${(props) => props.height ? props.height : "inherit"};
    border-radius: 5px;
    box-shadow: ${props => props.shadow ? props.theme.box_shadows.shadow3 : null};
`