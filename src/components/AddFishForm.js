import React, { Component } from "react";

class AddFishForm extends Component {
  createFish =  event =>{
    //1. stop form default
    event.preventDefault();
    
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status" type="text">
          <option value="available">Fresh!</option>
          <option value="available">Sold Out</option>
        </select>
        <textarea name="desc" type="text" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit">+ Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;
