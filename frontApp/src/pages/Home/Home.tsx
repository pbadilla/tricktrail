import Layout from '@components/Layout';
import SliderList from '@components/Sliders/Slider';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Layout children={<><SliderList /><SliderList /><SliderList /></>} />
      
  );
};

export default Home;
