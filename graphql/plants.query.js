import gql from 'graphql-tag';

const PLANTS_QUERY = gql`
  query Plants {
    plants {
      id
      common_name
      description
      scientific_name
    }
  }
`;

export default PLANTS_QUERY;
