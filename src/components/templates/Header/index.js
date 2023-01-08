import React from 'react';
import * as C from './styled';
import Logo from '../../../assets/logo.png';

const Header = (props) =>
{
    return (
        <C.Container>
            <C.LogoArea>
                <C.LogoImage src={Logo} />
            </C.LogoArea>
        </C.Container>
    )
}

export default Header;
