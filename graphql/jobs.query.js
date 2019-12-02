import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query Uplifts {
    uplifts {
      Id
      Name
    }
  }
`;

export default JOBS_QUERY;
