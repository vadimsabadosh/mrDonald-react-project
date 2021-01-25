import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/Button';

const Overlay = styled.div`
    position:fixed;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0, .5);
    z-index:20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 550px;
    text-align:center;
`;

const Banner = styled.div`
    height:200px;
    background-image:url(${({img}) => img});
    background-size:cover;
    background-position: center;
    width:100%;
`;
const Content = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
`;
const ModalBody = styled.div`
    display:flex;
    padding:15px 30px;
    width:100%;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height: calc(100% - 200px);
`;



export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModal = (e) => {  
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <ModalBody>
                <Content>
                    <h2>{openItem.name}</h2>
                    <h2>{openItem.price.toLocaleString('ru-RU', {
                                style:'currency', currency: 'RUB'})}</h2>
                </Content>
                <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
                </ModalBody>
            </Modal>
        </Overlay>
    )
}