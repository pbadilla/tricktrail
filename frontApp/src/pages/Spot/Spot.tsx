import Layout from '@components/Layout';
import React from 'react';

import SliderCar from '@components/Sliders/SliderCard';
import SliderOptions from '@components/Sliders/SliderOptions';
import Options from '@components/Options';

const Spot: React.FC = () => {
  return (
    <Layout children={
      <>
        <SliderCar />
        <SliderOptions />
        <Options />
      </>} />
  );
};

export default Spot;
