import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
`

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Left = styled.div`
    flex: 1;
    width: 50%;
    align-items: center;

    @media screen and (max-width: 570px) {
        display: none;
    }
`
export const Right = styled.div`
    flex: 2;
    width: 50%;
`

export const FormWrapper = styled.form`
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

export const Image = styled.img`
    width: 400px;
    overflow: hidden;
    
    @media screen and (max-width: 990px) {
    max-width: 250px;
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
    transition: .2s linear;
    transition-property: color, background-color; 

    &:hover{
        background-color: #e67e22;
        color: #ecf0f1;
    }
`
