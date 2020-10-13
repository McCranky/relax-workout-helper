import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
        width: 160px;
    }
`