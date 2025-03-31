import styled from 'styled-components';

export const SideNavWrapper = styled.div`
    position: fixed;
    top: ${({ isMobile }) => (isMobile ? '50px' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: ${({ isMobile }) => (isMobile ? '250px' : '300px')};
    height: ${({ isMobile }) => (isMobile ? 'calc(100% - 50px)' : '100%')};
    background-color:rgb(217, 252, 90);
    transition: left 0.3s ease-in-out;
    padding: ${({ isMobile }) => (isMobile ? '20px 20px 20px 20px' : '80px 20px 20px 20px')};
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    @media (min-width: 768px) {
        top: 0;
        height: 100%;
        width: 300px;
        left: 0;
        position: relative;
        transition: none;
        z-index: 999;
        
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
        display: block;
    }
    
    h2 {
        font-size: 1.5rem;
        margin: 10px 0 0;
        color: #333;
    }
`;

export const AppName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
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

