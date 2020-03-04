import React from 'react';
import uuid from "uuid";
import { FromEdit, FromInput, TodoItem} from "../../components";


class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      item: '',
      id: uuid(),
      check: [],
      text: [],
      editItem: false,
    }
  }
  handleChangeEdit = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleChange = e => {
    this.setState({
      item:e.target.value
    })
  }
  // handleSaveEdit = e => {
  //   const { }
  //   this.setState({
  //     id:id,
  //     item: item,
  //     editItem:false,
  //   })
  // }

  handleSubmit = e => {
    const { items, item } = this.state
    items.push({
      id: uuid(),
      item: item,
      editItem:false,
    })
    this.setState({
      items: items
    })
    console.log(items);
  }
  handleDeleted = (id) => {    
    const filterDelete = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterDelete,
    })
  }
  handleEdit = (e) => {
    const id = id
    const item = item
    const items = this.state.items.slice()
    const data = this.state.items.find(object => object.id === id)
    const index = this.state.items.findIndex(object => object.id === id)
    const object = [
      ...items.slice(0,index),
      {
        ...data,
        item
        
      },
      ...items.slice(index + 1, items.length)
    ]
    console.log(items);
    
    this.setState({
      items: object
    })
    console.log(e);
    
    // console.log('ttttttt',selectedItem);
  }
    render() {
      
    return (
      <div>
      <TodoItem
      items={this.state.items}
      item={this.state.item}
      handleEdit={this.handleEdit}
      handleDeleted={this.handleDeleted}
      editItem={this.state.editItem}
      handleSubmit={this.handleSubmit}
      handleChange={this.state.handleChange}
      />
      <FromInput
      item={this.state.item}
      handleEdit={this.handleEdit}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
      </div>
    )
    }
  }
export default Todo