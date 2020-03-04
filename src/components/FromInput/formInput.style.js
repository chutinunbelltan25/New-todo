import styled from "styled-components";

export const Style = styled.div `
    button { 
        background-color: #0000ff;
        border-radius: 5px;
        height: 40px;
    }

`
export const StyleInput = styled.div `
    display: grid;
    grid-template-columns: 45% 45% 10%;
    justify-content: end;
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;

    .inputform {
        grid-column-start: 1;
        grid-column-end: 4;
        height: 30px;
        font-size: 20px;
    }
    .save {
        margin-top: 4px;
        grid-column-start: 3;
        grid-column-end: 4;
        color: white;
        font-size: 15px;
    }
    

`