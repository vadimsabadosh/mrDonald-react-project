import React from 'react';
import styled from "styled-components";


const CountWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width:50px;
    font-size:20px;
    vertical-align: middle;
    margin-right:2px;
    margin-left:2px;
    border-radius:3px;
    border: 1px solid #334D5C;
`;

const ButtonCount = styled.button`
    background-color: #334D5C;
    border: none;
    margin: 0;
    width: 25px;
    color: white;
    text-align: center;
    vertical-align: middle;
    height: 28px;
    border-radius:3px;
`;

export function CountItem({ count, setCount, onChange }) {  

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type="number" min="1" max="100" value={count < 1 ? 1 : count} onChange={onChange} />
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
}