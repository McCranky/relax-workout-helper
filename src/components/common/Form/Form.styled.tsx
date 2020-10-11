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
    margin: 2rem auto;
`
export const Label = styled.label`
    font-weight: 600;
`
export const InputField = styled.input`
    width: 140px;
    height: 20px;
    transition: all .2s linear;

    &:hover, :focus{
        width: 160px;
    }
`
