import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/footer/footer';

it('renders footer correctly', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
