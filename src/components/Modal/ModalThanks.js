import React, { useContext, useEffect } from 'react';
import styled from "styled-components";
import { Overlay, OrderTitle } from '../Style/OptionComponents';
import { Context } from '../Functions/context';
import imgThanks from '../../images/tick.png';

const Modal = styled.div`
    background-color:white;
    width:400px;
    padding:30px;
    display:flex;
    align-items:center;
    flex-direction:column;
`;


export const ModalThanks = () => {

    const closeModal = (e) => {
        if(e.target.id === 'overlay'){
            setOpen(false);
        }
    }

    const { thanks: {setOpen} } = useContext(Context); 

    useEffect(() => { 
        setTimeout(() => {
            setOpen(false);
        }, 3000)
    });
    return(
        
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <OrderTitle>Спасибо, ваш заказ принят!</OrderTitle>
                <img src={imgThanks} alt='Спасибо за заказ'/>
            </Modal>
        </Overlay>
        
    )
}