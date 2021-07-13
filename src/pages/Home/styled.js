import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Input = styled.input`
    height: 1.5rem;
    padding: 0 .5rem;
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25 rem;

    &:focus,
    &:active,{
        outline: none;
        box-shadow: none;
    }
`
export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active,{
        outline: none;
        box-shadow: none;
    }

`
