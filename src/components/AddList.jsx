import { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/items";
import { v4 as uuidv4 } from 'uuid';

const AddList = ({ startAddItem }) => {
  const [title, setTitle ] = useState("");
  const [description, setDescription] = useState(""); 
  const submitHandler = (e) => {
      e.preventDefault();
      console.log(uuidv4());
      startAddItem({
        id: uuidv4(),
        title,
        description,
        status: "submitted"
      });
      setDescription("");
      setTitle("");
  }
  return (
  <div style={{  maxWidth: "50%"}}>
    <h2>ToDo</h2>
    <div >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. `}</div>

    <form onSubmit = { submitHandler }>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  </div>);
}
const mapDispatchToProps = (dispatch) => ({
      startAddItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(AddList);