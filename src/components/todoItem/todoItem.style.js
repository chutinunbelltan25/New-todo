import styled from "styled-components";

export const Style = styled.div `
    display: grid;
    grid-template-columns: 10% 70% 10% 10%;
    font-size: 15px;
    padding: 10px;
    button { 
        background-color: #0000ff;
        color: white;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 15px;
    }
    .checkmark {
        font-size: 18px;
        padding: 10px;
    }
    .delete {
        background-color: red;
    }
    input {
        width: 30px;
        height: 30px;
    }

`
export const StyleItem = styled.div `
    margin-right: 10%;
    margin-left: 10%;
    border: solid;
    border-width: 1px;
    border-color: black;
`
export const StyleE = styled.div `
    display: grid;
    grid-template-columns: 80% 10% 10%;
    padding: 15px;
    padding: 10px;
    font-size: 30px;

    button { 
        background-color: red;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 15px;
        color: white;
    }
    .save {
        background-color: #0000ff;
    }
    input {
        font-size: 20px;
        width: 95%;
        height: 30px;
    }
`
export const StyleEdit = styled.div `
    margin-right: 10%;
    margin-left: 10%;
    border-style: solid;
    border-width: 1px;
    border-color: black;

`