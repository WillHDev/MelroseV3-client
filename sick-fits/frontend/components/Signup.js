import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => (

          <Form method="post" onSubmit={async e => {
            e.preventDefault();
            const res = await signup();
            console.log(res);
            this.setState({ name: '', email: '', password: '' });
          }}>
            <fieldset disable={loading} aria-busy={loading}>
              <Error error={error} />
              <h2>Sign Up for an Account</h2>
              <label
                htmlFor="email"
              >
                Email
                  <input name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                  type="email" />
              </label>
            </fieldset>
            <label
              htmlFor="name"
            >
              Name
                <input type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.saveToState} />
            </label>
            <label
              htmlFor="password"
            >
              Password
                <input
                type="password"

                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.saveToState} />
            </label>
            <button type="submit">Sign Up</button>
          </Form>

        )}
      </Mutation>
    );
  }
}

export default Signup;
