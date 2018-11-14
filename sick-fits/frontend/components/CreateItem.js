import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import gql from "graphql-tag";

const CREATE_ITEM_MUTATION = gql``;

class CreateItem extends Component {
  state = {
    title: "Cool Brace",
    price: 0,
    image: "gled.jpg",
    largeImage: "gledbig.jpg",
    description: "Check it out"
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter a Description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit ">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export { CREATE_ITEM_MUTATION };
export default CreateItem;
