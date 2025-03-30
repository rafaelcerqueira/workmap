import React from "react";
import { HeaderWrapper, MenuButton } from './Header.styles';

const Header = ({ toggleMenu }) => {
    return (
        <HeaderWrapper>
            <MenuButton onClick={toggleMenu}>
                &#9776;
            </MenuButton>
        </HeaderWrapper>
    );
};

export default Header;