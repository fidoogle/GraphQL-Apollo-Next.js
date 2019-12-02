import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import UPLIFTS_QUERY from '../graphql/uplifts.query';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(UPLIFTS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table>
        <tr><td>Id</td><td>Name</td><td>Email</td><td>Gross Annual Income</td></tr>
        {data.uplifts.map(uplift => {
          return <tr key={`uplift__${uplift.Id}`}>
            <td>{uplift.Id}</td>
            <td>{uplift.Name}</td>
            <td>{uplift.email__c}</td>
            <td>{uplift.Gross_Annual_Income__c}</td>
          </tr>;
        })}
      </table>
    </div>
  );
};

export default Home;
