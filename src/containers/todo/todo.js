import React from 'react';
import uuid from "uuid";
import { FromInput, TodoItem } from "../../components";


class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      item: '',
      id: uuid(),
      editItem: false,
    }
  }
  handleChangeEdit = (id, text) => {
    const olditems = this.state.items.slice()
    const data = olditems.find(object => object.id === id)
    const index = olditems.findIndex(object => object.id === id)
    const newitem = [
      ...olditems.slice(0, index),
      {
        ...data,
        currentText: text,
      },
      ...olditems.slice(index + 1, olditems.length)
    ]
    console.log(newitem);

    this.setState({
      items: newitem
    })
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSaveEdit = (id) => {
    const olditems = this.state.items.slice()
    const data = olditems.find(object => object.id === id)
    const index = olditems.findIndex(object => object.id === id)
    const newitem = [
      ...olditems.slice(0, index),
      {
        ...data,
        item: data.currentText,
        editItem: false
      },
      ...olditems.slice(index + 1, olditems.length)
    ]
    console.log(newitem);

    this.setState({
      items: newitem
    })
  }

  handleSubmit = e => {
    const { items, item } = this.state
    items.push({
      id: uuid(),
      item: item,
      currentText: item,
      editItem: false,
    })
    this.setState({
      items: items,
      item: ''
    })
    console.log(items);
  }

  handleDeleted = (id) => {
    const filterDelete = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterDelete,
    })
  }

  handleEdit = (id) => {
    const olditems = this.state.items.slice()
    const data = olditems.find(object => object.id === id)
    const index = olditems.findIndex(object => object.id === id)
    const newitem = [
      ...olditems.slice(0, index),
      {
        ...data,
        editItem: true
      },
      ...olditems.slice(index + 1, olditems.length)
    ]
    console.log(newitem);

    this.setState({
      items: newitem
    })


    // console.log('ttttttt',selectedItem);
  }
  render() {

    return (
      <div>
        <TodoItem
          items={this.state.items}
          handleEdit={this.handleEdit}
          handleDeleted={this.handleDeleted}
          handleChangeEdit={this.handleChangeEdit}
          handleSaveEdit={this.handleSaveEdit}
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