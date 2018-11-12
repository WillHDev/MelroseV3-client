import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
  navy: "#4169E1",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};

  margin: 0 auto;
  padding: 2rem;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  /* background: red; */
`;

injectGlobal`
/* @font-face {
  font-family: 'radnika_next';
  src: url
} */
html{
  box-sizing: border-box;
  font-size: 10px;
}
  *, *:before, *:after {
    box-sizing: inherit;
  }
body {
  padding: 0;
}
a {
  text-decoration: none;
  color: ${theme.black};
}
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />

            <Inner>{this.props.children} </Inner>
          </StyledPage>
        </ThemeProvider>
      </div>
    );
  }
}

//<MyButton>Click Me</MyButton>
// const MyButton = styled.button`
//   background: red;
//   font-size: 100px;
// `;
