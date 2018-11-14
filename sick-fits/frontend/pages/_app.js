import App, { Container } from "next/app";
import Page from "../components/Page";

import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
//extends not React.Component but the App we are overriding
//to custom form nextjs

class MyApp extends App {
  //to get page info params from url
  //special LCM for Nextjs that runs before render below
  //crawl all of our pages for us, fetch any async data for us
  //only bc of the way server side rendered apps work
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposesthe query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
