import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { projection } from '../Functions/secondaryFunctions';




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

const OrderTitle = styled.h2`
    text-align:center;
    margin-bottom:30px;

`;

const OrderContent = styled.div`
    flex-grow:1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display:flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow:1;
    }
`;

const TotalPrice = styled.div`
    text-align:right;
    min-width:65px;
    margin-left:20px;

`;
const EmptyList = styled.p`
    text-align:center;

`;
export const Order = ({ orders, setOrders, setOpenItem, authentication, login, database }) => {
    
    const rulesData = {
        name: ['name'],
        price: ['price'],
        count: ['count'],
        topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
        choice:['choice', item => item ? item : 'no choices']
    }

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        database.ref('orders').push().set({
            nameClient:authentication.displayName,
            email:authentication.email,
            order: newOrder
        });
        setOrders([]);
    }
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
                            setOpenItem={setOpenItem}
                        />)
                    }
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>

            </Total>
            <ButtonAdd onClick={authentication ? sendOrder : login}>Оформить</ButtonAdd>
        </OrderStyled>
    )
}
