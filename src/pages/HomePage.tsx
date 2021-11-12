import React from 'react';
import Page from 'interfaces/page';

import $ from 'jquery';

const Home: React.FunctionComponent<Page> = (props) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    $('button').on('click', () => setCount(count + 1));
  });

  return (
    <React.Fragment>
      <div>Home</div>
      <div>{count}</div>
      <button>Click me!</button>
    </React.Fragment>
  );
};

export default Home;
