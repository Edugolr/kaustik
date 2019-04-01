import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<NavBar />);
});
