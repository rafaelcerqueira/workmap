import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #007bff;
    display: flex;
    align-items: center;
    padding: 0 10px;
    z-index: 1001;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    font-size: 1.5rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
`;