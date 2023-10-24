import { gql } from "@apollo/client";

export const SEARCH_PROJECTS = gql`
  query SearchProjects($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
          }
        }
      }
    }
  }
`;
