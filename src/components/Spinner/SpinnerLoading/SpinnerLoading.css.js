import styled, {keyframes} from "styled-components";

const load3 = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Loading = styled.div`
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    -webkit-animation: ${load3} 1s linear infinite; /* Safari */
    animation: ${load3} 1s linear infinite;
`

export default Loading;