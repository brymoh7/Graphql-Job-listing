import { gql } from "@apollo/client";

import client from "./client";

const getCommitments = () =>
  client.query({
    query: gql`
      query {
        commitments {
          id
          title
        }
      }
    `,
  });

export default {
  getCommitments,
};
