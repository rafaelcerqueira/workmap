import styled from 'styled-components';

export const SideNavWrapper = styled.div`
    position: fixed;
    top: 50px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: calc(100% - 50px);
    background-color:rgb(217, 252, 90);
    transition: left 0.3s ease-in-out;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    @media (min-width: 768px) {
        left: 0;
        position: relative;
        width: auto;
        transition: none;
        box-shadow: none;
    }
`;

export const Profile = styled.div`
    text-align: center;
    margin-bottom: 20px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto;
    }
    
    h2 {
        font-size: 1.5rem;
        margin: 10px 0 0;
        color: #333;
    }
`;

export const MenuItem = styled.a`
    display: block;
    padding: 10px 0;
    color: #007bff;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;


export const MenuButton = styled.button`
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;

    @media (min-width: 768px) {
        display: none;
    }
`;