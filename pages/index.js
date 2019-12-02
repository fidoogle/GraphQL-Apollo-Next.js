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
      <ul>
        {data.uplifts.map(uplift => {
          return <li key={`uplift__${uplift.Id}`}>{uplift.Name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
