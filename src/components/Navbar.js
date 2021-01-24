import React from 'react';
import styled from 'styled-components';
import LogoImg from '../images/logo.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index:999;
    height:80px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background-color:#334D5C;
    color:white;
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
`;

const H1 = styled.h1`
    font-size:24px;
    margin-left:15px;
`;
const ImgLogo = styled.img`
    width:50px;

`;
const LoginBtn = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    outline:none;
    cursor:pointer;
  `;

export const NavBar = () => {

    return (

        <NavBarStyled>
            <Logo>
                <ImgLogo src={LogoImg} alt="Logo"/>
                <H1>Mr. Donald</H1>
            </Logo>
            <LoginBtn>Войти</LoginBtn>
        </NavBarStyled>

    )

}