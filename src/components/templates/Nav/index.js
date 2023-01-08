import React from 'react';
import * as C from './styled';
import ButtonAnimat from '../../ButtonAnimat';
import { NavLink } from 'react-router-dom';

const Nav = () =>
{


    return (
        <C.Container>
            <C.ContainerMenu>
                <NavLink to='/' >
                    <ButtonAnimat title="Início" hover="Início" />
                </NavLink>
                <NavLink to='/users' >
                    <ButtonAnimat title="Usuários" hover="Usuários" />
                </NavLink>
            </C.ContainerMenu>
        </C.Container>
    )
}

export default Nav;
