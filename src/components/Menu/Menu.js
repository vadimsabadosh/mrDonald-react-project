import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { HeaderDiv } from './Banner';
import { Loading } from './Loading';
import { Context } from '../Functions/context'

//import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
    background:#ccc;
    margin-top:80px;
    margin-left:380px;
`;

const SectionMenu = styled.section`
    padding:30px;
`;


export const Menu = () => {

    const { openItem: {setOpenItem}, dbMenu } = useContext(Context);
    // const res = useFetch();

    // const dbMenu = res.response;

    return (
        <MenuStyled>
            <HeaderDiv/>
            {dbMenu ? 
            <>
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
            </> : 
            <Loading/>}
        </MenuStyled>
    )
}
