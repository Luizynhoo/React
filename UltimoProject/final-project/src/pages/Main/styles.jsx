import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #010409;
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.01);

    h1{
        font-size: 36px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    h1 svg{
        margin-right: 10px;
    }
    `;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
    `;

export const SubmitButton = styled.button`
    background: #0D1117;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    
    &:hover{
        background: #161b22;
    }
    `;

