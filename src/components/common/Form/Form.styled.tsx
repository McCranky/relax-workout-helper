import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    margin: 1rem auto;
`
export const Label = styled.label`
    font-size: 14px;
    font-weight: 700;
    margin-left: 4px;
`
export const InputField = styled.input`
    width: 140px;
    height: 24px;
    outline: none;
    border: 2px rgba(0,0,0,.2) solid;
    border-radius: 8px;
    transition: all .2s linear;

    &:hover{
        width: 160px;
    }

    &:focus{
        border-color: #f39c12;
    }
`
export const Button = styled.button`
    width: 128px;
    height: 32px;
    font-weight: 800;
    margin: 1rem auto;
    cursor: pointer;
    outline: none;
    background-color: #ecf0f1;
    color: #e67e22;
    border: 2px #d35400 solid;
    border-radius: 10px;
    text-transform: uppercase;
    transition: all .2s linear;

    &:hover{
        background-color: #e67e22;
        color: #ecf0f1;
    }
`
