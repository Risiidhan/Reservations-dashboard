import { useEffect, useState } from 'react';

const Page = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) return;
    // will error
  }, [user]);

  return <h1>Hello</h1>;
};
