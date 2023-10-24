import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
//import token from "./utils/constants";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_GITHUB_KEY,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
