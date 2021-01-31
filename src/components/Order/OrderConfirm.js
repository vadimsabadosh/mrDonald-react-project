import React, { useContext } from 'react';
import styled from "styled-components";
import { Overlay, OrderTitle, Total, TotalPrice } from '../Style/OptionComponents';
import { ButtonAdd } from "../Style/Button";
import { projection } from '../Functions/secondaryFunctions';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';



const Modal = styled.div`
    background-color:white;
    width:600px;
    padding:30px;

`;

const Text = styled.h3`
    text-align:center;
    margin-bottom:30px;
`;
const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
    choice:['choice', item => item ? item : 'no choices']
}

const sendOrder = (database, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    database.ref('orders').push().set({
        nameClient:authentication.displayName,
        email:authentication.email,
        order: newOrder
    });
    
}

export const OrderConfirm = () => {
    const {database, orders: { orders, setOrders }, auth: { authentication }, orderConfirm: { setOpenOrderConfirm } } = useContext(Context);
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подвердить ваш заказ</Text>
                <Total>
                    <span>Итого:</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonAdd onClick={() => {
                    sendOrder(database, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonAdd>
            </Modal>
        </Overlay>
    )
}
