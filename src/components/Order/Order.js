import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonAdd } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';
import { OrderTitle, Total, TotalPrice } from '../Style/OptionComponents';

const OrderStyled = styled.section`
    position:fixed;
    top:80px;
    left:0;
    background-color:white;
    width:380px;
    height: calc(100% - 80px);
    box-shadow:3px 4px 5px rgba(0,0,0, .25);
    padding:20px;
    
    display:flex;
    flex-direction:column;
`;



const OrderContent = styled.div`
    flex-grow:1;
`;

const OrderList = styled.ul`

`;


const EmptyList = styled.p`
    text-align:center;

`;
export const Order = () => {
    
    const { 
        orders: {orders, setOrders}, 
        auth: {authentication, login}, 
        orderConfirm: {setOpenOrderConfirm} 
    } = useContext(Context);

    
    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    }
    
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    return(
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ? <OrderList>
                    {orders.map((order, index) => 
                        <OrderListItem 
                            key={index} 
                            order={order} 
                            deleteItem={deleteItem} 
                            index={index} 
                        />)
                    }
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>

            {orders.length ?
            <>
            <Total>
                <span>Итого:</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>

            </Total>
            <ButtonAdd onClick={() => {
                if(authentication){
                    setOpenOrderConfirm(true)
                }else{
                    login()
                }}}
                >Оформить</ButtonAdd>
            </> : null}
        </OrderStyled>
    )
}
