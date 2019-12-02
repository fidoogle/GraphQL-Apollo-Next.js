import gql from 'graphql-tag';

const UPLIFTS_QUERY = gql`
  query Uplifts {
    plants {
      id
      common_name
      description
      scientific_name
    }
    uplifts {
      Id
      Name
      email__c
      Gross_Annual_Income__c
    }
  }
`;

export default UPLIFTS_QUERY;
