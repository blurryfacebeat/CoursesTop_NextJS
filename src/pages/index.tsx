import React from 'react';
import {
  Button,
  ButtonPrimary,
  ButtonSecondary,
  HeadingTag,
} from '@/components';

const HomePage = () => {
  return (
    <div>
      <HeadingTag Tag="h1">Привет Мир!!!</HeadingTag>
      <Button text="Hello World!!!" />
      <ButtonPrimary text="Hello World2!!!" />
      <ButtonSecondary text="Hello World3!!!" />
    </div>
  );
};

export default HomePage;
