import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style.js';

function Menu() {
    return (
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="rp7flix logo" />
            </Link>
            <ButtonLink as={Link} to="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;
