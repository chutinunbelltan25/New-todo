import React from 'react';
import { Style, StyleItem, StyleE } from "./todoItem.style";

const TodoItem = (props) => {
    const { items, handleDeleted, handleEdit, handleSubmit, handleChange } = props
   
//    console.log('ggggggg', items);
   
    return (
    <div>
        
            {items.length !== 0 && items.map(toItem => (
            <StyleItem>{  toItem.editItem === false ?
            <Style className='list'>{console.log(toItem)}
            <input type="checkbox" />
            <span
            class="checkmark"
            key={toItem.id}
            >
            {toItem.item}
            </span>
            <button onClick={()=>handleEdit(toItem.id)}>Edit</button>
            <button className='delete' onClick={()=>handleDeleted(toItem.id)}>Delete</button>
            </Style> 
            : 
            <StyleE onSubmit={handleSubmit}>
            <input
            value={toItem.item}
            onChange={handleChange}
            />
            <button onClick={handleSubmit} className='save'>Save</button>
            <button onClick={() => handleDeleted(toItem.id)}>Delete</button>
            </StyleE>
            }
            </StyleItem>
        ))
        }
    </div>
    )
}
export default TodoItem










    //     <StyleItem>
    //     <Style className='list'>
    //         <input type="checkbox" />
    // <span 
    // class="checkmark"
    // // key={item.id}
    // // handleDelete={() => handleDelete(item.id)}
    // >
    // </span>
    // {/* onClick={handleDelete} */}
    //         <button >Edit</button>
    //         <button className='delete' >Delete</button>
    //     </Style>
    //     </StyleItem>
    // )
    // })
// }
// export default TodoItem