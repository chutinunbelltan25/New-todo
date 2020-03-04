import React from 'react';
import { Style, StyleInput } from "./formInput.style";
const Frominput = (props) => {
        const { item, handleChange, handleSubmit, editItem } = props;
    return (
        <Style>
            <StyleInput onSubmit={handleSubmit}>
            <input 
            className='inputform'
            placeholder="   Plaese enter your todo"
            value={item}
            onChange={handleChange}
            />
            <button onClick={handleSubmit} className='save'>Save</button>
            </StyleInput>
        </Style>
    )
}
export default Frominput
