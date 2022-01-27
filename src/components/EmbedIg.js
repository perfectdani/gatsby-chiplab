import React from 'react';
import { Helmet } from 'react-helmet';

const EmbedIg = () => {
  return (
    <div>
      <Helmet>
        <script
          src='https://cdn2.woxo.tech/a.js#61ebde0730fdf00016ad0994'
          async
          data-usrc
        ></script>
      </Helmet>

      <div
        id='embedIg'
        className='h-[200px] overflow-hidden md:h-[480px]'
        data-mc-src='38c7867f-46f5-484e-bc37-5c2a57d8549c#instagram'
      ></div>
    </div>
  );
};

export default EmbedIg;
