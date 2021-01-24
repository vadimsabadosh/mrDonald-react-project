import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import banner from '../images/banner.png';

const MenuStyled = styled.main`
    background:#ccc;
    margin-top:80px;
`;

const SectionMenu = styled.section`
    padding:30px;
`;
const HeaderDiv = styled.div`
width:100vw;
height:240px;
background-image: url('${banner}');
background-position: center;
background-size:cover;
`;

export const Menu = () => {
    return (
        <MenuStyled>
            <HeaderDiv/>
            <SectionMenu>
                <h2>Бургерры</h2>
                <ListItem itemList={dbMenu.burger}/>
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem itemList={dbMenu.other}/>
            </SectionMenu>
        </MenuStyled>
    )
}
