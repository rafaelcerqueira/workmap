import React from "react";
import { HeaderWrapper, MenuButton, ProfilePic } from './Header.styles';

const Header = ({ toggleMenu, user, isMobile }) => {
    return (
        <HeaderWrapper>
            <MenuButton onClick={toggleMenu}>
                &#9776;
            </MenuButton>
            {isMobile && <ProfilePic src={user.profilePic} alt="Profile" />}
        </HeaderWrapper>
    );
};

export default Header;