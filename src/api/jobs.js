import { gql } from "@apollo/client";

import client from "./client";

const getJobListings = () =>
  client.query({
    query: gql`
      query job {
        jobs {
          id
          title
          slug
          locationNames
          company {
            name
            slug
            logoUrl
          }
        }
      }
    `,
  });

const getJobDetails = (companySlug, jobSlug) =>
  client.query({
    query: gql`
  query {
    job(input: {companySlug: "${companySlug}", jobSlug: "${jobSlug}"}) {
      title
      description
      cities {
        name
        slug
      }
      locationNames
      applyUrl
      company {
        logoUrl
        slug
        name
        websiteUrl
      }
      tags {
        name
      }
    }
    }
`,
  });

const postJob = gql`
  mutation PostJob(
    $title: String!
    $commitmentId: ID!
    $companyName: String!
    $locationNames: String!
    $userEmail: String!
    $description: String!
    $applyUrl: String!
  ) {
    postJob(
      input: {
        title: $title
        commitmentId: $commitmentId
        companyName: $companyName
        locationNames: $locationNames
        userEmail: $userEmail
        description: $description
        applyUrl: $applyUrl
      }
    ) {
      id
      title
      slug
      commitment {
        id
        title
      }
      locationNames
      description
      applyUrl
      company {
        id
        name
        slug
      }
      userEmail
      postedAt
      createdAt
      updatedAt
    }
  }
`;

const updateJob = gql`
  mutation UpdateJob($id: ID!, $description: String!, $adminSecret: String!) {
    updateJob(
      input: { id: $id, description: $description }
      adminSecret: $adminSecret
    ) {
      id
      title
      slug
      commitment {
        id
        title
      }
      locationNames
      description
      applyUrl
      company {
        id
        name
        slug
      }
      userEmail
      postedAt
      createdAt
      updatedAt
    }
  }
`;

export default {
  getJobListings,
  getJobDetails,
  postJob,
  updateJob,
};
