import styled from "styled-components";

export const StyledBurger = styled.div`
    display: none;
    @media (max-width: 1199px) {
        position: absolute;
        top: 17px;
        left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        span {
            width: 30px;
            height: 3px;
            background: ${({ theme, open }) =>
            open ? theme.colors.color4 : theme.colors.color4};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
            }

            :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
            }

            :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
            }
        }
    }
`;
