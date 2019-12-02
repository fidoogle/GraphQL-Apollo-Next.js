import gql from 'graphql-tag';

const UPLIFTS_QUERY = gql`
  query Uplifts {
    uplifts {
      Id
      Name
      email__c
      Gross_Annual_Income__c
    }
  }
`;

export default UPLIFTS_QUERY;
