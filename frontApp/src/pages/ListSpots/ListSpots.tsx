import React from 'react';

import Layout from '@components/Layout';
import Tabs from '@components/Tabs';

const ListSpots: React.FC = () => {
  return (
    <>
      <Layout children={<Tabs />} />

      <div id="next-to-me" className="flex justify-center p-4">
        <div className="flex items-center space-x-2">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' alt="Google Logo" className="h-6 w-6" />
          <p className="text-sm">Next to me</p>
        </div>
      </div>
    </>
  );
};

export default ListSpots;
