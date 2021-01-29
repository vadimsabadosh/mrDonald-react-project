import styled from 'styled-components';
import './style.css';

export const Loading = () => {

const Loading = styled.div`
    display:flex;
    height:500px;
    width:100%;
    align-items:center;
    justify-content:center;
`;


    return (
        <Loading>
            <div className='sk-fading-circle'>
                <div className='sk-circle sk-circle-1'></div>
                <div className='sk-circle sk-circle-2'></div>
                <div className='sk-circle sk-circle-3'></div>
                <div className='sk-circle sk-circle-4'></div>
                <div className='sk-circle sk-circle-5'></div>
                <div className='sk-circle sk-circle-6'></div>
                <div className='sk-circle sk-circle-7'></div>
                <div className='sk-circle sk-circle-8'></div>
                <div className='sk-circle sk-circle-9'></div>
                <div className='sk-circle sk-circle-10'></div>
                <div className='sk-circle sk-circle-11'></div>
                <div className='sk-circle sk-circle-12'></div>
            </div>
        </Loading>
    )
}