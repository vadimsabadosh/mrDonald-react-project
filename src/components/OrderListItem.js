import React from 'react';
import styled from 'styled-components';
import trash from '../images/trash.svg';

const TrashBtn = styled.button`
    width:24px;
    height:24px;
    border-color:transparent;
    background-color:transparent;
    background-image: url(${trash});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    cursor:pointer;
`;
const ItemName = styled.span`
    flex-grow:1;
`;
const ItemPrice = styled.span`
    margin-left:20px;
    margin-right:10px;
    min-width:65px;
    text-align:right;
`;
const OrderItemStyled = styled.li`
    display:flex;

`;
export const OrderListItem = () => {
    return(

        <OrderItemStyled>
            <ItemName>JS</ItemName>
            <span>2</span>
            <ItemPrice>750P</ItemPrice>
            <TrashBtn/>
        </OrderItemStyled>

    )
    
}