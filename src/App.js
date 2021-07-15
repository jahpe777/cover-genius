import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';
import axios from 'axios';

const url =
  'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setLoading(false);
      setData(res.data.policies);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h1>YOUR POLICIES</h1>
      {data.map((element) => (
        <Card key={element.id} data={element} />
      ))}
    </main>
  );
};

export default App;
