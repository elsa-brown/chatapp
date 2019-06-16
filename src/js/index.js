import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home.jsx';

import '../scss/style.scss';

const Index = () => (
    <Home />
);


ReactDOM.render(<Index />, document.getElementById('root'));