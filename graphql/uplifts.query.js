import gql from 'graphql-tag';

const UPLIFTS_QUERY = gql`
  query Uplifts {
    uplifts {
      Id
      Name
    }
  }
`;

export default UPLIFTS_QUERY;
