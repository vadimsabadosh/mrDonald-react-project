import React from 'react';
import styled from 'styled-components';


const ChoiceWrap = styled.div`
    max-width: 500px;
    margin:0 auto; 
    column-count:2;
    column-gap: 15px;
    display:flex;
    flex-wrap:wrap;
`;
const ChoiceRadio = styled.input`
    cursor:pointer;
    
    text-align:left;
`;
const ChoiceLabel = styled.label`
    cursor:pointer;
    margin-right:5px;
`;


export function Choices({ choice, changeChoices, openItem }) {  

    return(
        <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {openItem.choices.map( (item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio 
                            type='radio'
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}/>
                        {item}
                    </ChoiceLabel>
                ))}
                
                
            </ChoiceWrap>
        </>
    )
}