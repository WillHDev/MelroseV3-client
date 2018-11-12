import App, { Container } from "next/app";
import Page from "../components/Page";
//extends not React.Component but the App we are overriding
//to custom form nextjs

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
