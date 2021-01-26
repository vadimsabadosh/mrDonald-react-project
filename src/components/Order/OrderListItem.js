import React from 'react';
import styled from 'styled-components';
import trash from '../../images/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';


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
    flex-wrap:wrap;
`;
const Toppings = styled.div`
    color:#9a9a9a;
    font-size:14px;
width:100%;
`;
export const OrderListItem = ({ order }) => {

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');

    return(

        <OrderItemStyled>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashBtn/>
            {topping && <Toppings>Добавки: {topping}</Toppings>}
        </OrderItemStyled>

    )
    
}