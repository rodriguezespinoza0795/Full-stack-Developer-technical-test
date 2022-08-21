import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const baseURL = process.env.NEXT_PUBLIC_SERVICE_URL || "http://localhost:4000";

const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
