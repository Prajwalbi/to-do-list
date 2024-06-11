import { useState } from "react";
import { connect } from "react-redux";
import {  startAddItem } from "./actions/items";
import { v4 as uuidv4 } from 'uuid';
import "./styles/dashboard.css";

const AddList = ({ startAddItem }) => {
  const [title, setTitle ] = useState("");
  const [description, setDescription] = useState(""); 
  const submitHandler = (e) => {
      e.preventDefault();
      console.log(uuidv4());
      startAddItem({
        title,
        description,
        status: "submitted"
      });
      setDescription("");
      setTitle("");
  }
  return (
  <div style={{  maxWidth: "50%"}}>
    <h2 className="todo-header">ToDo</h2>
    <div className="paragraph"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. </p></div>

    <form onSubmit = { submitHandler }>
      <input className="input input-title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input className="input input-description" type="text" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)} />
      <button className="button" type="submit">Add</button>
    </form>
  </div>);
}
const mapDispatchToProps = (dispatch) => ({
      startAddItem: (item) => dispatch(startAddItem(item))
});

export default connect(null, mapDispatchToProps)(AddList);