import { ApolloClient, InMemoryCache } from "@apollo/client";

// const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql'
const host = window.location.hostname;
const GRAPHQL_ENDPOINT = `http://${host}:4000/graphql/`;
console.log("endpoint: ", GRAPHQL_ENDPOINT);
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
