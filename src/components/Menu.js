import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { HeaderDiv } from './Banner';

const MenuStyled = styled.main`
    background:#ccc;
    margin-top:80px;
`;

const SectionMenu = styled.section`
    padding:30px;
`;


export const Menu = ({setOpenItem}) => {
    return (
        <MenuStyled>
            <HeaderDiv/>
            <SectionMenu>
                <h2>Бургерры</h2>
                <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </MenuStyled>
    )
}
