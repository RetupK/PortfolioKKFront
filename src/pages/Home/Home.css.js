import styled from "styled-components";

export const HomeMainContainer = styled.div`
    min-height: 100vh;
    min-width: 99%;
`
export const ContentContainer = styled.div`
    box-sizing: border-box;
    margin-left: 300px;
    overflow: hidden;
    @media (max-width: 768px) {
        margin: 0;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        margin: 0;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
        margin-left: 250px;
    }
`